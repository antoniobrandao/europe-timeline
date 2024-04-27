import { createContext } from 'react'
import { westernPhilosophers } from '@/lib/data'
import { DisplayContentType } from '@/lib/constants/types'

const defaultValue = {
  year: 0,
  setYear: (newYear: number) => {},
  westernPhilosophers: westernPhilosophers,
  mainStatusDisplay: '',
  setMainStatusDisplay: (newString: string) => {},
  philosophersToDisplay: [],
  setPhilosophersToDisplay: (jsx: any) => {},
  displayContent: { type: 'none' },
  setDisplayContent: (data: DisplayContentType) => {},
}

const DataContext = createContext(defaultValue)

export default DataContext
