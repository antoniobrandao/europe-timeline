'use client'

import React from 'react'
import { useState, FC, ReactNode } from 'react'
import DataContext from './DataContext'
import { westernPhilosophers } from '@/lib/data'
import { DisplayContentType } from '@/lib/constants/types'

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainStatusDisplay, setMainStatusDisplay] = useState<string>('')
  const [displayContent, setDisplayContent] = useState<DisplayContentType>({ type: 'none' })
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<any>(null)
  const [year, setYear] = useState<number>(0)

  return (
    <DataContext.Provider
      value={{
        year: year,
        setYear: setYear,
        westernPhilosophers: westernPhilosophers,
        mainStatusDisplay: mainStatusDisplay,
        setMainStatusDisplay: setMainStatusDisplay,
        philosophersToDisplay: philosophersToDisplay,
        setPhilosophersToDisplay: setPhilosophersToDisplay,
        displayContent: displayContent,
        setDisplayContent: setDisplayContent,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
