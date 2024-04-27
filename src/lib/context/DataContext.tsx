import { createContext } from 'react'
import { westernPhilosophers } from '@/lib/data'
import { DisplayContentType } from '@/lib/constants/types'

const defaultValue = {
  locked: false,
  setLocked: (newState: boolean) => {},
  xCoord: 0,
  setXCoord: (newState: number) => {},
  year: 0,
  handleSetYear: (newYear: number) => {},
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
