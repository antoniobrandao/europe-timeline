'use client'

import React from 'react'
import { useState, FC, ReactNode } from 'react'
import DataContext from './DataContext'
import { getYearPercentualPosition, getYearFromPercentage } from '@/lib/data/time'
import { westernPhilosophers } from '@/lib/data/people'
import { DisplayContentType } from '@/lib/constants/types'

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainStatusDisplay, setMainStatusDisplay] = useState<string>('')
  const [locked, setLocked] = useState<boolean>(false)
  const [lockedX, setLockedX] = useState<number>(0)
  const [xCoord, setXCoord] = useState(0)
  const [displayContent, setDisplayContent] = useState<DisplayContentType>({ type: 'none' })
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<any>(null)
  const [year, setYear] = useState<number>(0)

  const handleSetYear = (year: number) => {
    if (locked) return
    setYear(year)
  }

  const handleSetXCoord = (newX: number) => {
    setXCoord(newX)
    if (!locked) {
      // @ts-ignore
      const percentage = newX / (window.innerWidth - document.getElementById('sidebar').clientWidth)
      const year = getYearFromPercentage(percentage)
      handleSetYear(year)
    }
  }

  const handleSetDisplayContent = (data: DisplayContentType) => {
    // if (locked) return
    setDisplayContent(data)
    console.log('data', data)
  }
  
  const handleSetLocked = (newState: boolean) => {
    if (newState === true) {
      setLockedX(xCoord)
      const eventData: any = displayContent.eventData
      let yearValue
      if(eventData && eventData.year) yearValue = eventData.year
      if(!yearValue && eventData && eventData.start) yearValue = eventData.start
      if(eventData && yearValue) {
        console.log('OHS DOIFH OSDIFJDS')
        const timelineElement = document.getElementById('timelines-element')
        // @ts-ignore
        const timelineElementWidth = timelineElement.clientWidth
        const percentualPosition = getYearPercentualPosition(yearValue)
        console.log('percentualPosition', percentualPosition)
        const newPosition = percentualPosition * timelineElementWidth / 100
        setLockedX(newPosition)
      }
    }
    setLocked(newState)
  }

  return (
    <DataContext.Provider
      value={{
        lockedX: lockedX,
        setLockedX: setLockedX,
        xCoord: xCoord,
        setXCoord: handleSetXCoord,
        locked: locked,
        setLocked: handleSetLocked,
        year: year,
        handleSetYear: handleSetYear,
        westernPhilosophers: westernPhilosophers,
        mainStatusDisplay: mainStatusDisplay,
        setMainStatusDisplay: setMainStatusDisplay,
        philosophersToDisplay: philosophersToDisplay,
        setPhilosophersToDisplay: setPhilosophersToDisplay,
        displayContent: displayContent,
        setDisplayContent: handleSetDisplayContent,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
