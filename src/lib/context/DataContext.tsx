import { createContext } from 'react'
import { westernPhilosophers } from '@/lib/data'
import { PhilosopherType } from '@/lib/data'

// import { PageSize, PageAlign, TextScale, FontStyle } from '@/lib/constants/enums'
// import { DocumentType } from '@/lib/constants/types'
// import defaultDocument from '@/lib/constants/default_document'

const defaultValue = {
  year: 0,
  setYear: (newYear: number) => {},
  westernPhilosophers: westernPhilosophers,
  mainStatusDisplay: '',
  setMainStatusDisplay: (newString: string) => {},
  philosophersToDisplay: [],
  setPhilosophersToDisplay: (jsx: any) => {},
}

const DataContext = createContext(defaultValue)

export default DataContext
