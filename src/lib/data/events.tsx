import { EventSpanType, EventYearType } from '@/lib/constants/types'
import { EventId } from '@/lib/constants/enums'

export const notableSpanEvents: EventSpanType[] = [
  {
    id: EventId.CHRISTIAN_DOMINATION_INSTITUTIONS,
    name: 'Christian Domination of Institutions',
    start: 400,
    end: 1700,
    description: [
      `During this period the Chrisitian religion held complete domination of the European governments`,
      `Kings required their blessing to be appointed, and could be deposed without it`,
      `No other religions were allowed to flourish - especially Paganism - and not even Judaism`,
      `In general, only knowledge that complied with the official Canon was to be considered legal.`,
    ],
  },
  {
    id: EventId.ISLAMIC_GOLDEN_AGE,
    name: 'Islamic Golden Age',
    start: 700,
    end: 1250,
    link: 'https://en.wikipedia.org/wiki/Islamic_Golden_Age',
    description: `Initially, the leaders of the Islamic Caliphate embrace the welth of knowledge they found in the lands they conquered, ushering in a Golden Age.`,
  },
  {
    id: EventId.ROMAN_REPUBLIC,
    name: 'Roman Republic',
    start: -509,
    end: -27,
    link: 'https://en.wikipedia.org/wiki/Roman_Republic',
    description: [
      `The Roman Republic, lasting slightly longer than the Roman Empire, was the most influencial state in the history of the world in terms of state organisation and civil law, with features of its government structures still in use by, for example, the USA.`,
    ],
  },
  {
    id: EventId.ROMAN_EMPIRE,
    name: 'Roman Empire',
    start: -27,
    end: 476,
    link: 'https://en.wikipedia.org/wiki/Roman_Empire',
    description: [
      `The Roman Empire[a] was the post-Republican state of ancient Rome. It is generally understood to mean the period and territory ruled by the Romans following Octavian's assumption of sole rule under the Principate in 27 BC.`,
      `The fall of the Western Roman Empire in 476 AD conventionally marks the end of classical antiquity and the beginning of the Middle Ages.`,
    ],
  },
  {
    id: EventId.CAROLOGIAN_RENAISSANCE,
    name: 'Carolingian Renaissance',
    start: 800,
    end: 900,
    link: 'https://en.wikipedia.org/wiki/Carolingian_Renaissance',
    description: [
      `Instead of being a rebirth of new cultural movements, the period was more an attempt to recreate the previous culture of the Roman Empire.`,
      `The Carolingian Renaissance in retrospect also has some of the character of a false dawn, in that its cultural gains were largely dissipated within a couple of generations.`,
      `Kenneth Clark was of the view that by means of the Carolingian Renaissance, Western civilization survived by the skin of its teeth.`,
      `However, the use of the term renaissance to describe this period is contested, notably by Lynn Thorndike,[28] due to the majority of changes brought about by this period being confined almost entirely to the clergy, and due to the period lacking the wide-ranging social movements of the later Italian Renaissance.`,
    ],
  },
  {
    id: EventId.TWELVE_CENTURY_RENAISSANCE,
    name: '12th Century Renaissance',
    start: 1100,
    end: 1250,
    link: 'https://en.wikipedia.org/wiki/Carolingian_Renaissance',
    description: [
      `These changes paved the way for later achievements such as the literary and artistic movement of the Italian Renaissance in the 15th century and the scientific developments of the 17th century.`,
      `The translation of texts from other cultures, especially ancient Greek and Arab works was an important aspect of both this Twelfth-Century Renaissance and the later Renaissance of the 15th century.`,
      `The increased contact with the Islamic world in Muslim-dominated Iberia and Southern Italy, the Crusades, the Reconquista, as well as increased contact with Byzantium, allowed Western Europeans to seek and translate the works of Hellenic and Islamic philosophers and scientists, especially the works of Aristotle, but also including several works of Plato and Neoplatonist authors, Pythagorean and Platonic spirituality and philosophy.`,
    ],
  },
  {
    id: EventId.DARK_AGES,
    name: 'Dark Ages',
    start: 550,
    end: 1120,
    link: 'https://en.wikipedia.org/wiki/Dark_Ages_(historiography)',
    description: [
      `What caused the Dark Ages and what made Europe escape from it can be seen by looking at the charts on the left.`
    ],
  },
  {
    id: EventId.ITALIAN_RENAISSANCE,
    name: 'Italian Renaissance',
    start: 1500,
    end: 1700,
    link: 'https://en.wikipedia.org/wiki/Italian_Renaissance',
    description: [
      `Unlike Roman texts, the study of ancient Greek texts was very limited in medieval Italy`,
      `The fall of Constantinople (1453) brought an entire class of Greek cultural works back into Western Europe (Italy) for the first time since late antiquity, along with many Greek scholars.`,
      `The infusion of knowledge combined with the results of the 12th century Renaissance, plus the explosion of population after the black plague of the previous century, caused an abundance of resources and a rise in power of the Merchant class, who in turn forced the clergy - directly or indirectly - to wind down their control over society.`,
      `Although the laws of the Inquisition were still in place, the vitality of this movement was for the most part an opening-up to the pagan past. Intellectuals and artists of this time dressed up their art and discussing in a Christian veneer to escape persecution or excommunication.`,
    ],
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
    id: EventId.CHRISTIANITY_APPEARS,
    name: 'Christianity appears',
    year: 70,
    description:
      "There isn't a specific date for the appearance of Christianity, but it is believed to have appeared around 70 AD.",
  },
  {
    id: EventId.CONSTANTINE_ADOPTS_CHRISTIANITY,
    name: 'Edict Of Milan',
    year: 313,
    link: 'https://en.wikipedia.org/wiki/Constantine_the_Great_and_Christianity#Edict_of_Milan',
    description: [
      `Constantine, who adopted Christianity, issues the Edict of Milan, 
      granting tolerance to all religions, including Christianity.`,
      `This edict made the empire officially neutral with regard to religious worship; 
      it neither made the traditional religions illegal nor made Christianity the state religion`,
    ],
  },
  {
    id: EventId.CHRISTIANITY_BECOMES_MANDATORY,
    name: 'Christianity becomes mandatory',
    year: 380,
    link: 'https://en.wikipedia.org/wiki/Edict_of_Thessalonica',
    description: [
      `Theodosius issues the Edict of Thessalonika, 
      making Christianity the state religion and mandatory to all citizens.`,
      `Theodosius made pagan feasts into workdays, banned public sacrifices, and closed pagan temples.`,
      `Another decree promulgated in 391 declared that "no one is to go to the sanctuaries, [or] walk through the temples"`,
    ],
  },
  {
    id: EventId.SERAPEUM_DESTROYED,
    name: 'Serapeum of Alexandria Destroyed',
    year: 391,
    link: 'https://en.wikipedia.org/wiki/Serapeum_of_Alexandria',
    description: [
      `The sanctuary was stormed by the Christians.
      The pagans were driven out, the temple was sacked, and its contents were destroyed.`,
      `The Serapeum of Alexandria in the Ptolemaic Kingdom was an ancient Greek temple 
      built by Ptolemy III Euergetes (reigned 246–222 BC)`,
    ],
  },
  {
    id: EventId.FALL_OF_CONSTANTINOPLE,
    name: 'Fall of Constantinople',
    link: 'https://en.wikipedia.org/wiki/Fall_of_Constantinople',
    year: 1453,
    description: [
      'Constantinople fall to the Ottoman Turks',
      `This unfortunate event had dramatically positive consequences for Europe`,
      `This event caused a mass transfer of people and intellectual property to Italy`,
      `Many valuable works of old Greco-Roman literature were transferred to Italy, 
      helping in large part to ignite the Italian Renaissance.`,
    ],
  },
  {
    id: EventId.PROTESTANT_REFORMATION,
    name: 'Protestant Reformation',
    year: 1517,
    link: 'https://en.wikipedia.org/wiki/Reformation',
    description: [
      `The Reformation, also known as the Protestant Reformation and the European Reformation, 
      was a major theological movement in Western Christianity in 16th-century Europe that 
      posed a religious and political challenge to the papacy and the authority of the Catholic Church.`,
      `Following the start of the Renaissance, the Reformation marked the beginning of Protestantism.`,
    ],
  },
  {
    id: EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS,
    name: 'Justinian closes the Academy of Athens',
    year: 529,
    link: 'https://en.wikipedia.org/wiki/Platonic_Academy',
    description: [
      `The Christian Roman Emperor Justinian I issues a special imperial decree ordering an end to the 
      teaching of philosophy in Athens, and the closure of the school.`,
      `The Athenian Neoplatonists rejected Christianity and their school was a center of intellectual resistance to the prevailing religion`,
      `The Athenian Neoplatonists resisted for a surprisingly long time, causing Justinian to later repeat and tighten the ban`,
    ],
  },
  {
    id: EventId.PAGANISM_BANNED,
    name: 'Paganism forbidden',
    year: 395,
    link: 'https://en.wikipedia.org/wiki/Anti-paganism_policies_of_the_early_Byzantine_Empire',
    description: [
      `The anti-paganism policies of the early Byzantine Empire ranged from 395 till 567.`,
      `Anti-paganism laws were enacted by the Byzantine Emperors Arcadius, Honorius, Theodosius II, Marcian and Leo I the Thracian. 
      They reiterated previous legal bans, especially on pagan religious rites and increased the penalties for their practice.`,
      `The pagan religions had still many followers but they were increasingly obliged to keep under cover to formally comply with the edicts.
      Significant support for paganism was present among Roman nobles, senators, magistrates, imperial palace officers, and other officials.`,
      `Many Christians pretended to be such while continuing pagan practices, and many converted back to paganism; numerous laws 
      against apostasy kept being promulgated and penalties increased since the time of Gratian and Theodosius.`,
      `Pagans were openly voicing their resentment in historical works, like the writings of Eunapius and Olympiodorus, 
      and books blaming the Christian hegemony for the 410 Sack of Rome.`,
      `Christians destroyed almost all such pagan political literature, and threatened copyists with cutting off their hands.`,
      `Laws declared that buildings belonging to known pagans and heretics were to be appropriated by the churches.
      St. Augustine exhorted his congregation in Carthage to smash all tangible symbols of paganism they could lay their hands on.`,
    ],
  },
  {
    id: EventId.ALTAR_OF_VICTORY_REMOVED,
    name: 'Altar of Victory removed',
    year: 382,
    description: [
      `The altar was a vital link between the Roman state and Roman religion and also a tangible reminder of Rome's great past and her hopes for the future.`,
      `The statue had been captured by the Romans in 272 BC during the Pyrrhic War and was originally a representation of Nike. It depicted a winged goddess, holding a palm branch and descending to present a laurel wreath.`,
      `The altar was removed from the curia by the Christian emperor Constantius II in 357. It was later restored by the Pagan emperor Julian, who was the only emperor after the conversion of Constantine I to adhere to the traditional religion of Rome. The altar was again removed by the Christian emperor Gratian in 382.`,
    ],
  },
  {
    id: EventId.CALIPH_AL_MUTAWAKKIL_DENOUNCES_RATIONALISM,
    name: 'Caliph Al-Mutawakkil rejects rationalism and science',
    year: 850,
    link: 'https://www.thenewatlantis.com/publications/why-the-arabic-world-turned-away-from-science',
    description: [
      `Unfortunately, leaders like Al-Mutawakkil decided that they had been led astray from the correct way - to take the Quran literally`,
    ],
  },
  {
    id: EventId.CALIPH_AL_QADIR_REJECTS_RATIONALISM,
    name: 'Caliph Al-Qadir rejects rationalism and science',
    year: 1011,
    link: 'https://www.thenewatlantis.com/publications/why-the-arabic-world-turned-away-from-science',
    description: [
      `After Al-Mutawakkil, the Caliph Al-Qadir further cements the laws against rationalism in favour of literal scripture`,
    ],
  },
  // {
  //   id: EventId.CHRISTIANITY_MADE_OFFICAL_STATE_RELIGION,
  //   name: 'Christianity made the official religion of the Empire',
  //   year: 380,
  // },
  {
    id: EventId.CHRISTIANITY_BANS_OLYMPIC_GAMES,
    name: 'Christianity bans the Olympic games',
    year: 393,
    link: 'https://taylormarshall.com/2012/08/how-catholic-emperor-banned-olympic.html',
    description: [
      `Emperor Theodosius condemned and banned the Olympic Games as pagan and unworthy
      of Christian culture, with the approval of the Catholic bishops (Saint Ambrose in particular).`,
      `The Olympics were seen as one of the most popular pagan celebrations in the Empire, and so they came to an end in that year.`,
    ],
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
