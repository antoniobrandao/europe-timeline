import { EventSpanType, EventYearType } from '@/lib/constants/types'
import { EventId } from '@/lib/constants/enums'

export const notableSpanEvents: EventSpanType[] = [
  {
    id: EventId.CHRISTIAN_DOMINATION_INSTITUTIONS,
    name: 'Christian Domination of Institutions',
    start: 400,
    end: 1700,
  },
  {
    id: EventId.ISLAMIC_GOLDEN_AGE,
    name: 'Islamic Golden Age',
    start: 700,
    end: 1250,
  },
  {
    id: EventId.ROMAN_REPUBLIC,
    name: 'Roman Republic',
    start: -509,
    end: -27,
  },
  {
    id: EventId.ROMAN_EMPIRE,
    name: 'Roman Empire',
    start: -27,
    end: 476,
  },
  {
    id: EventId.CAROLOGIAN_RENAISSANCE,
    name: 'Carolingian Renaissance',
    start: 800,
    end: 900,
  },
  {
    id: EventId.TWELVE_CENTURY_RENAISSANCE,
    name: '12th Century Renaissance',
    start: 1100,
    end: 1250,
  },
  {
    id: EventId.ITALIAN_RENAISSANCE,
    name: 'Italian Renaissance',
    start: 1500,
    end: 1700,
  },
  {
    id: EventId.DARK_AGES,
    name: 'Dark Ages',
    start: 550,
    end: 1120,
  },
  {
    id: EventId.CHRISTIAN_INQUISITION,
    name: 'Christian Inquisition',
    start: 1184,
    end: 1826,
  },
]

export const notableYearEvents: EventYearType[] = [
  {
    id: EventId.ROMAN_EMPIRE_ADOPTS_CHRISTIANITY,
    name: 'Roman Empire adopts Christianity',
    year: 300,
  },
  {
    id: EventId.CHRISTIANITY_APPEARS,
    name: 'Christianity appears',
    year: 100,
  },
  {
    id: EventId.FALL_OF_CONSTANTINOPLE,
    name: 'Fall of Constantinople',
    year: 1453,
  },
  {
    id: EventId.PROTESTANT_REFORMATION,
    name: 'Protestant Reformation',
    year: 1517,
  },
  {
    id: EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS,
    name: 'Justinian closes the Academy of Athens',
    year: 529,
  },
  {
    id: EventId.PAGANISM_BANNED,
    name: 'Paganism banned',
    year: 313,
  },
  {
    id: EventId.ALTAR_OF_VICTORY_REMOVED,
    name: 'Altar of Victory removed',
    year: 382,
  },
  {
    id: EventId.CALIPH_AL_MUTAWAKKIL_DENOUNCES_RATIONALISM,
    name: 'Caliph Al-Mutawakkil rejects rationalism and science',
    year: 850,
  },
  {
    id: EventId.CALIPH_AL_QADIR_REJECTS_RATIONALISM,
    name: 'Caliph Al-Qadir rejects rationalism and science',
    year: 1011,
  },
  {
    id: EventId.CHRISTIANITY_MADE_OFFICAL_STATE_RELIGION,
    name: 'Christianity made the official religion of the Empire',
    year: 380,
  },
  {
    id: EventId.CHRISTIANITY_BANS_OLYMPIC_GAMES,
    name: 'Christianity bans the Olympic games',
    year: 393,
    link: 'https://taylormarshall.com/2012/08/how-catholic-emperor-banned-olympic.html',
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
