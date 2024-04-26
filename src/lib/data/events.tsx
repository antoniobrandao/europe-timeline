export type EventSpanType = {
  name: string
  start: number
  end: number
  link?: string
}

export type EventYearType = {
  name: string
  year: number
  link?: string
}

export const notableSpanEvents: EventSpanType[] = [
  {
    name: 'Christian Domination',
    start: 400,
    end: 1700,
  },
  {
    name: 'Islamic Golden Age',
    start: 700,
    end: 1250,
  },
  {
    name: 'Roman Republic',
    start: -509,
    end: -27,
  },
  {
    name: 'Roman Empire',
    start: -27,
    end: 476,
  },
  {
    name: 'Carolingian Renaissance',
    start: 800,
    end: 900,
  },
  {
    name: '12th Century Renaissance',
    start: 1100,
    end: 1250,
  },
  {
    name: 'Italian Renaissance',
    start: 1500,
    end: 1700,
  },
  {
    name: 'Dark Ages',
    start: 550,
    end: 1120,
  },
]





export const notableYearEvents: EventYearType[] = [
  {
    name: 'Roman Empire adopts Christianity',
    year: 300,
  },
  {
    name: 'Christianity appears',
    year: 100,
  },
  {
    name: 'Sack of Constantinople',
    year: 1453,
  },
  {
    name: 'Protestant Reformation',
    year: 1517,
  },
  {
    name: 'Justinian closes the Academy of Athens',
    year: 529,
  },
  {
    name: 'Paganism banned',
    year: 313,
  },
  {
    name: 'Altar of Victory removed',
    year: 382,
  },
  {
    name: 'Christianity made the official religion of the Empire',
    year: 380,
  },
  {
    name: 'Christianity bans the Olympic games',
    year: 393,
    link: 'https://taylormarshall.com/2012/08/how-catholic-emperor-banned-olympic.html'
  },
//   {
//     name: 'Humanism',
//     start: 400,
//     end: 1700,
//   },
//   {
//     name: 'Liberalism',
//     start: 400,
//     end: 1700,
//   },
]
