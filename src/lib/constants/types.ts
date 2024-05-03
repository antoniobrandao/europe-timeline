import { Fields, Region, Gender, EventId, EventType } from '@/lib/constants/enums'

export type DisplayContentType = {
  data: PhilosopherType[] | EventSpanType | EventYearType | any
  type: EventType | null
  ref?: any
  color?: string
  ui_id?: string
  // field?: Fields
  // region?: Region
  // gender?: Gender
  // eventData?: any
}

export type PhilosopherType = {
  name: string
  gender: Gender
  birth: number
  death: number
  description: string | string[]
  polytheist: boolean
  christian: boolean
  muslim: boolean
  jewish: boolean
  period: string
  region: Region
  fields: Fields[]
  wikipediaUrl: string
}

export type EventSpanType = {
  id: EventId
  name: string
  start: number
  end: number
  link?: string
  description?: string | string[]
}

export type EventYearType = {
  id: EventId
  name: string
  year: number
  link?: string
  description?: string | string[]
}

export type WarType = {
  start: number
  end: number
  name: string
}
