import { Fields, Region, Gender, EventId, EventType, Religion } from '@/lib/constants/enums'

export type DisplayContentType = {
  data: PhilosopherType[] | EventSpanType | EventYearType | any
  type: EventType | null
  ref?: any
  color?: string
  ui_id?: string
}

export type PhilosopherType = {
  name: string
  gender: Gender
  birth: number
  death: number
  description: string | string[]
  religion: Religion
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
