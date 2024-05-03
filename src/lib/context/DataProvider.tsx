'use client'

import React from 'react'
import { useState, FC, ReactNode } from 'react'
import DataContext from './DataContext'
import { getYearPercentualPosition, getYearFromPercentage } from '@/lib/data/time'
import { westernPhilosophers } from '@/lib/data/people'
import { PhilosopherType, DisplayContentType } from '@/lib/constants/types'

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainStatusDisplay, setMainStatusDisplay] = useState<string>('')
  const [locked, setLocked] = useState<boolean>(false)
  const [lockedX, setLockedX] = useState<number>(0)
  const [xCoord, setXCoord] = useState(0)
  const [displayContent, setDisplayContent] = useState<DisplayContentType | null | undefined>(null)
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<PhilosopherType[] | any>(null)
  const [year, setYear] = useState<number>(0)

  const handleSetYear = (year: number) => {
    if (locked) return
    setYear(year)
  }

  const handleSetXCoord = (newX: number) => {
    setXCoord(newX)
    if (!locked) {
      // @ts-ignore
      const sidebarElement = document.getElementById('sidebar')
      if (!sidebarElement) return
      const percentage = newX / (window.innerWidth - sidebarElement.clientWidth)
      const year = getYearFromPercentage(percentage)
      handleSetYear(year)
    }
  }

  const handleSetDisplayContent = (data: DisplayContentType) => {
    if (locked) return
    setDisplayContent(data)
  }

  const handleSetLocked = (newState: boolean) => {
    if (newState === true) {
      setLockedX(xCoord)
      // @ts-ignore
      const dc: DisplayContentType = displayContent
      const eventData = dc.data
      let yearValue
      // @ts-ignore
      if (eventData && eventData.year) yearValue = eventData.year
      // @ts-ignore
      if (!yearValue && eventData && eventData.start) yearValue = eventData.start
      if (eventData && yearValue) {
        const timelineElement = document.getElementById('timelines-element')
        // @ts-ignore
        const timelineElementWidth = timelineElement.clientWidth
        const percentualPosition = getYearPercentualPosition(yearValue)
        const newPosition = (percentualPosition * timelineElementWidth) / 100
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
        // @ts-ignore
        displayContent: displayContent,
        setDisplayContent: handleSetDisplayContent,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
