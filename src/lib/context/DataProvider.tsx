'use client'

import React from 'react'
import { useState, FC, ReactNode } from 'react'
import DataContext from './DataContext'
import { westernPhilosophers } from '@/lib/data'
import { PhilosopherType } from '@/lib/data'

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mainStatusDisplay, setMainStatusDisplay] = useState<string>('')
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<any>(null)


  return (
    <DataContext.Provider
      value={{
        westernPhilosophers: westernPhilosophers,
        mainStatusDisplay: mainStatusDisplay,
        setMainStatusDisplay: setMainStatusDisplay,
        philosophersToDisplay: philosophersToDisplay,
        setPhilosophersToDisplay: setPhilosophersToDisplay,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
