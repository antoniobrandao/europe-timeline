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
    description: [
      `Initially, the leaders of the Islamic Caliphate embraced the wealth of knowledge they found in the lands they conquered, ushering in a Golden Age.`,
      `In their path of conquest, they found many libraries containing literature of the greatest intellectuals of Rome and Greece.`,
      `The first Islamic Caliphs were proud of embracing science, study and rationalism. For a time, they even made education in ancient texts mandatory (like public school today).`,
      `They started the famous Translation Movement - were the texts of Greco-Roman authors were translated into Arab.`,
      `The Translation Movement can be credited for the preservation of many of these texts, which would have been lost otherwise.`,
      `The translation and preservation and of these text contributed to making the European Renaissances possible 
      - because these translations ended up reaching Europe during the Dark Ages, being eagerly sought after by curious European intellectuals.`,
    ],
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
      `The Roman Empire was the post-Republican state of ancient Rome. It is generally understood to mean the period and territory ruled by the Romans following Octavian's assumption of sole rule under the Principate in 27 BC.`,
      `The fall of the Western Roman Empire in 476 AD conventionally marks the end of classical antiquity and the beginning of the Middle Ages.`,
    ],
  },
  {
    id: EventId.PAX_ROMANA,
    name: 'Pax Romana',
    start: -27,
    end: 180,
    link: 'https://en.wikipedia.org/wiki/Roman_Empire',
    description: [
      `The Pax Romana (Latin for "Roman peace") is a roughly 200-year-long period of Roman history which is identified as a ,
      golden age of increased and sustained Roman imperialism, relative peace and order, 
      prosperous stability, hegemonic power, and regional expansion.`,
    ],
  },
  {
    id: EventId.AMBROSE_OF_MILAN,
    name: 'Ambrose of Milan',
    start: 339,
    end: 397,
    link: 'https://en.wikipedia.org/wiki/Ambrose',
    description: [
      `Ambrose was serving as the Roman governor of Aemilia-Liguria in Milan when he was unexpectedly made Bishop of Milan in 374 by popular acclamation.`,
      `A staunch Nicean Christian, Ambrose was extremely intolerant of other faiths.`,
      `He promoted persecution of pagans and non-Nicean Christians.`,
      `He convinced emperor Gratian to abolish the office of Pontifex Maximus, and persuaded emperor Theodosius to remove the Altar of Victory.`,
      `He also guilt-tripped emperor Theodosius into doing a humiliating public atonement for the sin of punishing a mutinous crowd.`,
      `Above all, he is the person who made the Christian Church more powerful than the Roman emperor himself.`,
    ],
  },
  {
    id: EventId.CAROLOGIAN_RENAISSANCE,
    name: 'Carolingian Renaissance',
    start: 800,
    end: 900,
    link: 'https://en.wikipedia.org/wiki/Carolingian_Renaissance',
    description: [
      `The British historian Kenneth Clark was of the view that by means of the Carolingian Renaissance, Western civilization survived by the skin of its teeth.`,
      `But other historians say that in retrospect the Carolingian Renaissance has some of the character of a false dawn, in that its cultural gains were largely dissipated within a couple of generations,
      and that instead of being a birth of new cultural movements, the period was more an attempt to recreate the previous culture of the Roman Empire.`,
      `The term 'renaissance' used to describe this period is also contested, notably by Lynn Thorndike, due to the majority of changes brought about by this period being confined almost entirely to the clergy, and due to the period lacking the wide-ranging social movements of the later Italian Renaissance.`,
    ],
  },
  {
    id: EventId.TWELVE_CENTURY_RENAISSANCE,
    name: '12th Century Renaissance',
    start: 1100,
    end: 1250,
    link: 'https://en.wikipedia.org/wiki/Carolingian_Renaissance',
    description: [
      `The increased contact with the Islamic world in Muslim-dominated Iberia and Southern Italy, the Crusades, the Reconquista, as well as increased contact with Byzantium, allowed Western Europeans to seek and translate the works of Hellenic and Islamic philosophers and scientists, especially the works of Aristotle, but also including several works of Plato and Neoplatonist authors, Pythagorean and Platonic spirituality and philosophy.`,
      `These changes paved the way for later achievements such as the literary and artistic movement of the Italian Renaissance in the 15th century and the scientific developments of the 17th century.`,
      `The translation of texts from other cultures, especially ancient Greek and Arab works was an important aspect of both this Twelfth-Century Renaissance and the later Renaissance of the 15th century.`,
    ],
  },
  {
    id: EventId.DARK_AGES,
    name: 'Dark Ages',
    start: 550,
    end: 1380,
    link: 'https://en.wikipedia.org/wiki/Dark_Ages_(historiography)',
    description: [
      `The causes and effects of the Dark Ages, as well as what allowed Europe escape from it, can be seen by looking at the timelines on the left.`,
      `Draw your own conclusions on this one.`,
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
    link: 'https://en.wikipedia.org/wiki/Italian_Renaissance',
    description: [
      `The Christian Inquisition can be seen as a desperate attempt by the Church to hold on to power.`,
      `By this time, the power of the Church over the institutions had already started waning. The ongoing 12th century Renaissance helped in diminishing the clergy's domination and reputation among intellectuals, who increasingly questioned the legitimacy, methods and authority of the Church.`,
      `In a desperate bid, the inquisition was a systematic attempt at intimidating dissidents using cruel methods of aggression, torture, and the death penalty.`,
      `A terrible side-effect was that it also galvanised mobs of plebs into commiting fanatical acts of terror against each other on any suspicion of heresy, apostasy or 'witchcraft' - leading to the infamous 'witch hunts'.`,
    ],
  },
  {
    id: EventId.WITCH_HUNTS,
    name: 'Witch hunts',
    start: 1400,
    end: 1775,
    link: 'https://en.wikipedia.org/wiki/Witch_trials_in_the_early_modern_period',
    description: [
      `The witch hunts can be seen as a popular movement, like a Inquisition 'by the people'. As (mentally sick) people, lead by religious fanaticism and fear, made most of the accusations and chased the accused themselves, often the accused being their own neighbours.`,
      `It is however not fair to blame them. These people lived in a time characterised by the terror, fear and fanaticism brought about by 
      the Catholic Inquisition, which obviously influenced the mindset of the common people, making them fearful and odious of anything non-Christian.`,
      `From about 1400 to 1775, about 100,000 people were prosecuted for witchcraft in Europe and British America.
      Between 40,000 and 60,000 people were executed (that we know of).`,
      `The witch-hunts were particularly severe in parts of the Holy Roman Empire (Germany). This is very likely due to the fact that, although Christianised, Germany was still richer in elements of Pagan traditions than southern Europe or the British Isles.`,
      `Prosecutions for witchcraft reached a high point from 1560 to 1630.`,
      `'Magical healers' or 'cunning folk' were sometimes prosecuted for witchcraft, but seem to have made up a minority of the accused.
      Roughly 80% of those convicted were women, most of them over the age of 40. In some regions, convicted witches were burnt at the stake.`,
    ],
  },
  {
    id: EventId.INDUSTRIAL_REVOLUTION,
    name: 'Industrial Revolution',
    start: 1760,
    end: 1840,
    link: 'https://en.wikipedia.org/wiki/Industrial_Revolution',
    description: [
      `The Industrial Revolution was a period of global transition of the human economy towards more widespread, efficient and stable manufacturing processes that succeeded the Agricultural Revolution. Beginning in Great Britain, the Industrial Revolution spread to continental Europe and the United States, during the period from around 1760 to about 1820–1840.`,
    ],
  },
  {
    id: EventId.SCIENTIFIC_REVOLUTION,
    name: 'Scientific Revolution',
    start: 1543,
    end: 1687,
    link: 'https://en.wikipedia.org/wiki/Industrial_Revolution',
    description: [
      `The Scientific Revolution was a series of events that marked the emergence of modern science during the early modern period, when developments in mathematics, physics, astronomy, biology (including human anatomy) and chemistry transformed the views of society about nature.`,
      `It can be seen as a product of the the success of the High Renaissance.`,
    ],
  },
]

export const notableYearEvents: EventYearType[] = [
  {
    id: EventId.CHRISTIANITY_APPEARS,
    name: 'Christianity appears',
    year: 70,
    description:
      "There isn't a specific date for the appearance of Christianity, but it is believed to have started around 70 AD.",
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
      `Theodosius, under the influence of the Bishop Ambrose of Milan, issues the Edict of Thessalonika - 
      making Christianity the state religion and mandatory to all citizens.`,
      `Theodosius made Pagan feasts into workdays, banned public sacrifices, and closed Pagan temples.`,
      `Another decree promulgated in 391 declared that "no one is to go to the sanctuaries, or walk through the temples"`,
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
      `The Protestant Reformation can also be seen as the liberation of Anglo and Germanic peoples from the hegemonic Roman Catholic Church.`,
      `This event had a major effect in Anglo and Germanic communities, giving them autonomy in statecraft and matters of religion.`,
    ],
  },
  {
    id: EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS,
    name: 'Justinian closes the Platonic Academy of Athens',
    year: 529,
    link: 'https://en.wikipedia.org/wiki/Platonic_Academy',
    description: [
      `The Christian Roman Emperor Justinian I issues a special imperial decree in 529CE ordering an end to the 
      teaching of philosophy in Athens, and the closure of the school.`,
      `The Athenian Neoplatonists rejected Christianity and their school was a center of intellectual resistance to the prevailing religion.`,
      `The Athenian Neoplatonists resisted for a surprisingly long time, causing Justinian to later repeat and tighten the ban.`,
      `Many of the scholars fled to Harran (bordering Turkey and Syria), where the study of classical texts continued.`,
    ],
  },
  {
    id: EventId.MEDICI_REOPENS_PLATONIC_ACADEMY,
    name: 'Medici reopens Platonic Academy in Florence',
    year: 1462,
    link: 'https://en.wikipedia.org/wiki/Platonic_Academy',
    description: [
      `Following the Fall of Constantinople in 1453, and the transfer of people and literature from Byzantium to Italy,
       Cosimo de' Medici establishes the Platonic Academy of Florence in 1462, which helped initiate the renaissance.`,
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
      They reiterated previous legal bans, especially on Pagan religious rites and increased the penalties for their practice.`,
      `The Pagan religions had still many followers but they were increasingly obliged to keep under cover to formally comply with the edicts.
      Significant support for Paganism was present among Roman nobles, senators, magistrates, imperial palace officers, and other officials.`,
      `Many Christians pretended to be such while continuing Pagan practices, and many converted back to Paganism; numerous laws 
      against apostasy kept being promulgated and penalties increased since the time of Gratian and Theodosius.`,
      `Pagans were openly voicing their resentment in historical works, like the writings of Eunapius and Olympiodorus, 
      and books blaming the Christian hegemony for the 410 Sack of Rome.`,
      `Christians destroyed almost all such Pagan political literature, and threatened copyists with cutting off their hands.`,
      `Laws declared that buildings belonging to known pagans and heretics were to be appropriated by the churches.
      St. Augustine exhorted his congregation in Carthage to smash all tangible symbols of Paganism they could lay their hands on.`,
    ],
  },
  {
    id: EventId.ALTAR_OF_VICTORY_REMOVED,
    name: 'Altar of Victory removed',
    year: 382,
    link: 'https://en.wikipedia.org/wiki/Altar_of_Victory',
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
      `Emperor Theodosius condemned and banned the Olympic Games as Pagan and unworthy
      of Christian culture, with the approval of the Catholic bishops (Saint Ambrose in particular).`,
      `The Olympics were seen as one of the most popular Pagan celebrations in the Empire, and so they came to an end in that year.`,
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
