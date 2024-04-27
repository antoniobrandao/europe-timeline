'use client'

import React from 'react'
import { useState, FC, ReactNode } from 'react'
import DataContext from './DataContext'
import { getYearFromPercentage } from '@/lib/data/time'
import { westernPhilosophers } from '@/lib/data'
import { DisplayContentType } from '@/lib/constants/types'

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainStatusDisplay, setMainStatusDisplay] = useState<string>('')
  const [locked, setLocked] = useState<boolean>(false)
  const [xCoord, setXCoord] = useState(0)
  const [displayContent, setDisplayContent] = useState<DisplayContentType>({ type: 'none' })
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<any>(null)
  const [year, setYear] = useState<number>(0)

  const handleSetYear = (year: number) => {
    // console.log('handleSetYear')
    if (locked) return
    // console.log('handleSetYear PASSED')
    setYear(year)
  }

  const handleSetXCoord = (newX: number) => {
    if(!locked) {
    console.log('HAHA mobing')
    console.log('HAHA locked', locked)
    console.log('HAHA xCoord', xCoord)
    setXCoord(newX)
    const percentage = newX / (window.innerWidth - 320)
    const year = getYearFromPercentage(percentage)
    handleSetYear(year)}
  }

  const handleSetDisplayContent = (data: DisplayContentType) => {
    if (locked) return
    setDisplayContent(data)
  }
  return (
    <DataContext.Provider
      value={{
        xCoord: xCoord,
        setXCoord: handleSetXCoord,
        locked: locked,
        setLocked: setLocked,
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
