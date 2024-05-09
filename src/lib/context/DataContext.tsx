import { createContext } from 'react'
import { westernPhilosophers } from '@/lib/data/people'
import { DisplayContentType } from '@/lib/constants/types'

const defaultValue = {
  lockedX: 0,
  setLockedX: (newX: number) => {},
  locked: false,
  setLocked: (newState: boolean) => {},
  caretHidden: false,
  setCaretHidden: (newState: boolean) => {},
  xCoord: 0,
  setXCoord: (newState: number) => {},
  year: 0,
  handleSetYear: (newYear: number) => {},
  // lockedDocument: null,
  // handleSetLockedDocument: (newDocument: any) => {},
  westernPhilosophers: westernPhilosophers,
  mainStatusDisplay: '',
  setMainStatusDisplay: (newString: string) => {},
  // philosophersToDisplay: [],
  // setPhilosophersToDisplay: (jsx: any) => {},
  displayContent: null,
  setDisplayContent: (newDisplayContent: DisplayContentType | null) => {},
}

const DataContext = createContext(defaultValue)

export default DataContext
