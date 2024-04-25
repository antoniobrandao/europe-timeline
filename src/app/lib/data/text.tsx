
export enum Fields {
    SCIENCE = 'science',
    MIND = 'mind',
    SPIRITUALITY = 'spirituality',
    THEOLOGY = 'theology',
    HISTORY = 'history',
    METAPHYSICS = 'METAPHYSICS',
    MUSIC = 'MUSIC',
    POLITICS = 'POLITICS',
  }
  
  export enum Region {
    EUROPE = 'EUROPE',
    MIDDLE_EAST = 'MIDDLE_EAST',
    AFRICA = 'AFRICA',
    NORTH_AMERICA = 'NORTH_AMERICA',
  }
  
  export type PhilospherType = {
    name: string
    birth: number
    death: number
    description: string
    polytheist: boolean
    christian: boolean
    muslim: boolean
    jewish: boolean
    period: string
    region: Region
    fields: Fields[]
    wikipediaUrl: string
  }

  const philosophers: PhilosopherType[] = [
    {
        name: 'Thales '
    }
  ]
  
  Thales of Miletus (c. 624 – 546 BC). Of the Milesian school. Believed that all was made of water.
  Pherecydes of Syros (c. 620 – c. 550 BC). Cosmologist.
  Anaximander of Miletus (c. 610 – 546 BC). Of the Milesian school. Famous for the concept of Apeiron, or "the boundless".
  Anaximenes of Miletus (c. 585 – 525 BC). Of the Milesian school. Believed that all was made of air.
  Pythagoras of Samos (c. 580 – c. 500 BC). Of the Ionian School. Believed the deepest reality to be composed of numbers, and that souls are immortal.
  Xenophanes of Colophon (c. 570 – 480 BC). Advocated monotheism. Sometimes associated with the Eleatic school.
  Heraclitus of Ephesus (c. 535 – c. 475 BC). Of the Ionians. Emphasized the mutability of the universe.
  Epicharmus of Kos (c. 530 – 450 BC). Comic playwright and moralist.
  Parmenides of Elea (c. 515 – 450 BC). Of the Eleatics. Reflected on the concept of Being.
  Anaxagoras of Clazomenae (c. 500 – 428 BC). Of the Ionians. Pluralist.