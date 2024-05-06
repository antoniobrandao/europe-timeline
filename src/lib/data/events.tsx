import { EventSpanType, EventYearType } from '@/lib/constants/types'
import { EventId } from '@/lib/constants/enums'

// MARK: SPAN EVENTS

export const notableSpanEvents: EventSpanType[] = [
  {
    id: EventId.CHRISTIAN_DOMINATION_INSTITUTIONS,
    name: 'Christian Domination of Institutions',
    start: 400,
    end: 1550,
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
      `The Pax Romana (Latin for "Roman peace") is a roughly 200-year-long period of Roman history which is identified as a
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
      `Ambrose is the person who made the Christian Church more powerful than the Roman emperor himself. With his actions, he made the Christian Church powerful enough to take over all the institutions and ban all other views / faiths / practices.`,
      `Ambrose was a rich man, not a priest. Serving as the Roman governor of Aemilia-Liguria in Milan, when he was unexpectedly made Bishop of Milan in 374 by acclamation of a mob of peasants.`,
      `A staunch Nicean Christian, Ambrose was extremely intolerant of other faiths.`,
      `He promoted persecution of pagans and non-Nicean Christians.`,
      `He famously guilt-tripped the Roman Emperor Theodosius into performing a long humiliating public atonement for the "sin" of punishing a mutinous crowd.`,
      `He is also famous for convincing the Emperor Gratian to abolish the office of Pontifex Maximus (which the Church later co-opted for itself), and for persuading emperor Theodosius to remove the Altar of Victory, the symbol of Rome's military success, from the Senate.`,
    ],
  },
  {
    id: EventId.PERSECUTION_OF_POLYTHEISTS,
    name: 'Persecution of Polytheists',
    start: 314,
    end: 988,
    link: 'https://www.prose.cafe/UjLzkDfttp8',
    description: [
      `314 Immediately after its full legalisation, the Christian Church attacks the Gentiles: The Council of Ancyra denounces the worship of Goddess Artemis.`,
      `324 Emperor Constantine declares Christianity as the only official religion of the Roman Empire. At Dydima, Asia Minor, he sacks the Oracle of God Apollo and tortures its Pagan priests to death. He also evicts the Gentiles from Mt. Athos and destroys all local Hellenic Temples.`,
      `326 Emperor Constantine, following the instructions of his mother Helen, destroys the Temple of God Asclepius in Aigeai of Cilicia and many Temples of Goddess Aphrodite in Jerusalem, Aphaca, Mambre, Phoenice, Baalbek, etc.`,
      `330 Constantine steals the treasures and statues of the Pagan Temples in Greece to decorate Nova Roma (Constantinople), the new capital of his Empire.`,
      `335 Constantine sacks many Pagan Temples of Asia Minor and Palestine and orders the execution by crucifixion of “all magicians and soothsayers". Martyrdom of the neoplatonist philosopher Sopatros.`,
      `341 Emperor Constas, son of Constantinus, persecutes "all the soothsayers and the Hellenists". Many Gentile Hellenes are either imprisoned or executed.`,
      `346 New large - scale persecutions against the Gentiles in Constantinople. Banishment of the famous orator Libanius accused as... "magician".`,
      `353 An edict of Constantius orders the death penalty for all kind of worship through sacrifices and "idols".`,
      `354 A new edict of Constantius orders the closing of all Pagan Temples. Some of them are profaned and turned into brothels or gambling rooms. Executions of Pagan priests. First burning of libraries in various cities of the Empire. The first lime factories are built next to closed Pagan Temples. A large part of Sacred Gentile architecture is turned into lime.`,
      `356 A new edict of Constantius orders the destruction of the Pagan Temples and the execution of all "idolaters".`,
      `357 Constantius outlaws all methods of Divination (Astrology not excluded).`,
      `359 In Skythopolis, Syria, christians organise the first death camps for the torture and execution of arrested Gentiles from all around the Empire.`,
      `364 Emperor Flavius Jovianus orders the burning of the Library of Antioch. An Imperial edict (11th September) orders the death penalty for all Gentiles that worship their ancestral Gods or practice Divination (“sileat omnibus perpetuo divinandi uriositas”). Three different edicts (4th February, 9th September, 23rd December) order the confiscation of all properties of Pagan Temples and the death penalty for participation in Pagan rituals, even private ones.`,
      `365 An Imperial edict (17th November) forbids Gentile officers of the army to command christian soldiers.`,
      `370 Emperor Valens orders a tremendous persecution of Gentiles throughout the Eastern Empire. In Antioch, among many other Pagans, the ex-governor Fidustius and the priests Hilarius and Patricius are executed. Tons of books are burnt in the squares of cities of the Eastern Empire. All friends of Julianus are persecuted (Orebasius, Sallustius, Pegasius etc.), the philosopher Simonides is burned alive and the philosopher Maximus is decapitated.`,
      `370 Emperor Valens was informed that a group of individuals had consulted an oracle to find out who the next emperor would be, and were told that Valens would "die a strange death" and be succeeded by a man whose name began with the letters Theod. Valens responded with a massacre of individuals with those letters at the beginning of their names, and a general persecution of polytheistic philosophers.`,
      `372 Emperor Valens orders the governor of Asia Minor to exterminate the Hellenes and all documents of their wisdom.`,
      `373 New prohibition of all methods of Divination. The term "Pagan" (pagani, villagers) is introduced by the christians to lessen the Gentiles.`,
      `375 The Temple of God Asclepius in Epidaurus, Greece, is closed down.`,
      `380 On 27th February, Christianity becomes the exclusive religion of the Roman Empire by an edict of Emperor Flavius Theodosius, requiring that "all the various nations, which are subject to our clemency and moderation should continue in the profession of that religion, which was delivered to the Romans by the divine Apostle Peter". Non-christians are called "loathsome, heretics, stupid and blind". In another edict Theodosius calls "insane" those that do not believe in the christian god and outlaws all disagreements with the Church dogmas. Ambrosius, bishop of Milan, starts destroying all the Pagan Temples of his area. Christian priests lead the mob against the Temple of Goddess Demeter in Eleusis and try to lynch the hierophants Nestorius and Priskus. The 95 year-old hierophant Nestorius, ends the Eleusinian Mysteries and announces the predominance of mental darkness over the human race.`,
      `381 On 2nd May, Theodosius deprives all rights of christians that return to the Pagan Religion. Throughout the Eastern Empire, Pagan Temples and Libraries are looted or burned down. On 21st December, Theodosius outlaws even simple visits to the Temples of the Hellenes. In Constantinople, the Temple of Goddess Aphrodite is turned into a brothel and the Temples of Sun and Artemis into stables.`,
      `382 "Hellelu-jah" (Glory to Yahweh) is imposed in the christian mass.`,
      `384 Emperor Theodosius orders the Praetorian Prefect, Maternus Cynegius, a dedicated christian, to cooperate with the local bishops and destroy the Temples of the Gentiles in Northern Greece and Asia Minor.`,
      `385 to 388 Maternus Cynegius, encouraged by his fanatic wife, and bishop, "Saint" Marcellus with his gangs scour the countryside, sack and destroy hundreds of Hellenic Temples, shrines and altars. Amongst others they destroy the Temple of Edessa, the Cabeireion of Imbros, the Temple of Zeus in Apamea, the Temple of Apollo in Dydima and all the Temples of Palmyra.`,
      `386 Emperor Theodosius outlaws (16th June) the care of sacked Pagan Temples.`,
      `388 Public talks on religious subjects are also outlawed by Theodosius. The old orator Libanius sends his famous Epistle "Pro Templis" to Theodosius, with a hope that the few remaining Hellenic Temples will be respected and spared.`,
      `389 to 390 All non-christian calenders are outlawed. Hordes of fanatic hermits from the desert flood into Middle Eastern and Egyptian cities, destroying statues, altars, Libraries and Pagan Temples, whilst Gentiles are lynched. Theophilus, Patriarch of Alexandria, starts heavy persecutions against the Gentiles, turns the Temple of Dionysos into a church, burns down the Mithraeum of the city, destroys the Temple of Zeus and burlesques the Pagan priests before they are killed by stoning. The christian mob profanes the cult images.`,
      `391 On 24th February, a new edict of Theodosius prohibits not only visits to Pagan Temples but also looking at vandalised statues. New heavy persecutions all around the Empire. In Alexandria, Egypt, the Gentiles, led by the philosopher Olympius, revolt and after some street fights, finally lock themselves inside the fortified Temple of God Serapis (The Serapeion). After a violent siege, the christians occupy the building, demolish it, burn its famous Library and profane the cult images.`,
      `392 On 8th November, the Emperor Theodosius outlaws all non-christian rituals and names them "superstitions of the Gentiles" (“gentilicia superstitio”). New full scale persecutions against the Gentiles. The Mysteries of Samothrace are ended and priests slaughtered. In Cyprus the local bishop, "Saints" Epiphanius and Tychon destroy almost all the Temples of the island and exterminate thousands of Gentiles. The local Mysteries of Goddess Aphrodite are ended. Theodosius' edict declares: "the ones that won't obey pater Epiphanius have no right to keep living on the island". The Gentiles revolt against the Emperor and the Church in Petra, Aeropolis, Rafia, Gaza, Baalbek and other cities of the Middle East.`,
      `393 The Pythian, Aktia and Olympic Games are outlawed as part of the Hellenic "idolatry". Christians sack the Temples of Olympia.`,
      `395 Two new edicts (22nd July and 7th August) lead to new persecutions against the Gentiles. Rufinus, the eunuch Prime Minister of Emperor Flavius Arcadius directs the hordes of the baptised Goths (led by Alaric) to the country of the Hellenes. Encouraged by christian monks, the barbarians sack and burn many cities (Dion, Delphi, Megara, Corinth, Pheneos, Argos, Nemea, Lycosoura, Sparta, Messene, Phigaleia, Olympia, etc.), slaughter or enslave innumerable Hellenes and burn the Temples. Among others, they burn down the Eleusinian Sanctuary and burn alive all of its priests (including the hierophant of Mithras Hilarius).`,
      `396 On 7th December, a new edict by Emperor Arcadius orders that Paganism be treated as high treason. Imprisonment of the few remaining Pagan priests and hierophants.`,
      `397 "Demolish them!" Emperor Flavius Arcadius orders all the still erect Pagan Temples demolished.`,
      `398 The Fourth Church Council of Carthage prohibits to all, including its bishops, the study of Gentile books. Porphyrius, bishop of Gaza, demolishes almost all the Pagan Temples of his city (except nine of them that remain active).`,
      `399 With a new edict (13th July) Emperor Flavius Arcadius orders all remaining Temples, mainly in the countryside, to be immediately demolished.`,
      `400 Bishop Nicetas destroys the Oracle of God Dionysus in Vesai and baptises all the Gentiles of this area.`,
      `401 The christian mob of Carthage lynches Gentiles and destroys Temples and "idols". In Gaza too, the local bishop, also a..,"Saint", Porphyrius sends his followers to lynch Gentiles and demolish the remaining nine still active Temples of the city. The 15th Council of Chalkedon orders all christians that still keep good relations with their gentile relatives to be excommunicated (even after their death).`,
      `405 John Chrysostom sends his hordes of gray-clad monks armed with clubs and iron bars to destroy the "idols" in all the cities of Palestine.`,
      `406 John Chrysostom collects funds from rich christian women to financially support the demolition of the Hellenic Temples. In Ephessus, he orders the destruction of the famous Temple of Goddess Artemis. In Salamis, Cyprus, "Saints" Epiphanius and Eutychius continue persecutions of the Gentiles and the total destruction of their Temples and sanctuaries.`,
      `407 A new edict outlaws once more all non-christian acts of worship.`,
      `408 The Emperor of the Western Empire Honorius and the Emperor of the Eastern Empire Arcadius, order together that all sculptures of the Pagan Temples be either destroyed or confiscated. Private ownership of Pagan sculpture is also outlawed. The local bishops lead new heavy persecutions against Gentiles and new book burning. Judges showing pity for Gentiles are also persecuted.`,
      `409 Once again, an edict orders Astrology and all methods of Divination to be punished by death.`,
      `415 In Alexandria, Egypt, the mob urged by the bishop Cyrillus, attacks a few days before the judaeo-christian Pascha (Pesach-Easter) and hacks to pieces the famous and beautiful philosopher Hypatia. Pieces of her body are paraded by the christian mob through the streets of Alexandria, and are finally burned together with her books in a place called Cynaron. On 30th August, new persecutions start against all the Pagan priests of North Africa, who end their lives either crucified or burned alive.`,
      `416 The inquisitor Hypatius, alias "The Sword of God", exterminates the last Gentiles of Bithynia. In Constantinople (7th December), all non-christian army officers, public employees and judges are dismissed.`,
      `423 Emperor Theodosius II, declares (8th June) that the Religion of the Gentiles is nothing more than "demon worship" and orders all those who persist in practicing it to be punished by imprisonment and tortured.`,
      `429 The Temple of Goddess Athena (Parthenon) on the Acropolis of Athens is sacked. Athenian Pagans are persecuted.`,
      `435 On 14th November, a new edict by Theodosius II orders the death penalty for all "heretics" and “pagans” of the Empire. Only Judaism is considered a legal non-christian Religion.`,
      `438 Theodosius II issues an new edict (31st January) against the Gentiles, incriminating their "idolatry" as the reason for a recent plague!`,
      `440 to 450 The christians demolish all the monuments, altars and Temples of Athens, Olympia, and other Greek cities.`,
      `448 Theodosius II orders all non-christian books burned.`,
      `450 All the Temples of Aphrodisias (City of Goddess Aphrodite) are demolished and its Libraries burned down. The city is renamed Stauroupolis (City of the Cross).`,
      `451 A new edict by Valentinianus and Marcianus (4th November) emphasises that "idolatry" is to be punished by death.`,
      `457 to 491 Sporadic persecutions against Gentiles of the Eastern Empire. Among others, the physician Jacobus and the philosopher Gessius are executed. Severianus, Herestios, Zosimus, Isidorus and others are tortured and imprisoned. The proselytiser Conon and his followers exterminate the last Gentiles of the island of Imbros, in the northeast Aegean. The last worshippers of Lavranius Zeus are exterminated in Cyprus.`,
      `482 to 488 The majority of the Gentiles of Asia Minor are exterminated, after a desperate revolt against the Emperor and the Church.`,
      `486 More "underground" Pagan priests are discovered, arrested, burlesqued, tortured and executed in Alexandria, Egypt.`,
      `515 Baptism becomes obligatory, even for those that already say they are christian. The Emperor of Constantinople, Anastasius orders the massacre of the Gentiles in the Arabian city Zoara and the demolition of the Temple of local God Theandrites.`,
      `528 Emperor Jutprada (Justinianus) outlaws the "alternative" Olympian Games of Antioch. He also orders the execution (by fire, crucifixion, tearing to pieces by wild beasts, or cutting by iron nails) of all who practice "sorcery, divination, magic or idolatry" and prohibits all teachings by the Gentiles ("..the ones suffering from the blasphemous insanity of the Hellenes").`,
      `529 Emperor Justinianus outlaws the Athenian Philosophical Academy, which has its property confiscated.`,
      `532 The inquisitor Ioannis Asiacus, a fanatical monk, leads a crusade against the Gentiles of Asia Minor.`,
      `542 Emperor Justinianus allows the inquisitor Ioannis Asiacus to convert the Gentiles of Phrygia, Caria and Lydia in Asia Minor. Within 35 years of this crusade, 99 churches and 12 monasteries are built on the sites of demolished Pagan Temples.`,
      `546 Hundreds of Gentiles are put to death in Constantinople by the inquisitor Ioannis Asiacus.`,
      `556 Justinianus orders the notorious inquisitor Amantius to go to Antioch, to find, arrest, torture and exterminate the last Gentiles of the city and burn all the private libraries down.`,
      `562 Mass arrests, burlesquing, tortures, imprisonments and executions of Gentile Hellenes in Athens, Antioch, Palmyra and Constantinople.`,
      `578 to 582 Christians torture and crucify Gentile Hellenes all around the Eastern Empire, and exterminate the last Gentiles of Heliopolis (Baalbek).`,
      `580 Christian inquisitors attack a secret Temple of Zeus in Antioch. The priest commits suicide, but the other Gentiles are arrested. All the prisoners, the Vice Governor Anatolius included, are tortured and sent to Constantinople to face trial. Sentenced to death they are thrown to the lions. The wild animals are unwilling to tear them to pieces and they end up crucified. Their corpses are dragged through the streets by the christian mob and afterwards thrown unburied in the city dump.`,
      `583 New persecutions against the Gentile Hellenes by the Emperor Mauricius.`,
      `590 Throughout the Eastern Empire, christian accusers "discover" Pagan conspiracies. A new wave of torture and executions erupts.`,
      `692 The "Penthekte" Council of Constantinople prohibits the remains of Calends, Brumalia, Anthesteria, and other Pagan / Dionysian festivals.`,
      `804 The Gentile Hellenes of Laconia, Greece, resist successfully the attempt of Tarasius, Patriarch of Constantinople, to convert them to Christianity.`,
      `950 to 988 Violent conversion of the last Gentile Hellenes of Laconia by the Armenian "Saint" Nikon.`,
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
    id: EventId.NORTHERN_CRUSADES,
    name: 'Persecution of Pagans in Northern Europe',
    start: 1100,
    end: 1300,
    link: 'https://en.wikipedia.org/wiki/Northern_Crusades',
    description: [
      `Christianity is a Eastern Religion - the Christianization of Western Europe happened much later than in the East.`,
      `The Northern Crusades is the name given to the Christianization campaigns (via military force) undertaken by
      Catholic Christian military orders and kingdoms against the northern European pagans.`,
      `Not only Baltic, Finnic and West Slavic peoples around the southern and eastern shores of the Baltic Sea
      were targeted, but also against Orthodox Christian East Slavs (for not being Catholic).`,
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

// MARK: YEAR EVENTS

export const notableYearEvents: EventYearType[] = [
  {
    id: EventId.CHRISTIANITY_APPEARS,
    name: 'Christianity appears',
    year: 60,
    description:
      "There isn't a specific date for the appearance of Christianity, but it is believed to have started around 70 AD.",
  },
  {
    id: EventId.ROME_CONQUERS_JUDEA,
    name: 'Rome conquers Judea',
    year: 63,
    description:
      [
        `Following the end of the Third Mithridatic War, Pompey established the province of Syria
        (including Judea) after defeating Mithridates VI Eupator and sacking Jerusalem.`,
      ],
  },
  {
    id: EventId.SECOND_TEMPLE_DESTROYED,
    name: 'Destruction of the Second Temple',
    year: 70,
    description:
      [
        `The siege of Jerusalem of 70 CE was the decisive event of the First Jewish–Roman War (66–73 CE),
        in which the Roman army led by future emperor Titus besieged Jerusalem, the center of Jewish rebel resistance in the Roman province of Judaea.`,
        `Following a five-month siege, the Romans destroyed the city and the Second Jewish Temple.`
      ],
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
    id: EventId.PENALTY_OF_DEATH_FOR_PAGANS_ENACTED,
    name: 'Pagan rituals prohibited under penalty of death',
    year: 353,
    link: 'https://en.wikipedia.org/wiki/Religious_policies_of_Constantius_II',
    description: [
      `Constantius prohibits pagan sacrifice under the penalty of death. He also shut down temples, forbade access to them, and ended their subsidies of public taxes.`,
      `The prohibition was strengthened in 356 due to Pagan resistance - Constantius again declared that anyone found guilty of attending sacrifices or of worshipping idols would be executed.`,
      `In 356 a new edict of Constantius orders the destruction of the Pagan Temples and the execution of all “idolaters”`,
      `In 359 Christians organise the first death camps for the torture and executions of the arrested non-Christians from all around the empire.`,
    ],
  },
  {
    id: EventId.LIBRARY_OF_ANTIOCH_DESTROYED,
    name: 'Library of Antioch Destroyed',
    year: 364,
    link: 'https://en.wikipedia.org/wiki/Religious_policies_of_Constantius_II',
    description: [
      `An Imperial edict (11th September) orders the death penalty for all Gentiles that worship their ancestral Gods or practice Divination (“sileat omnibus perpetuo divinandi uriositas”). Three different edicts (4th February, 9th September, 23rd December) order the confiscation of all properties of Pagan Temples and the death penalty for participation in Pagan rituals, even private ones.`,
      `In 370, Emperor Valens orders a tremendous persecution of non-Christian peoples in all the Eastern Empire.`,
      `In Antioch, among many other non-Christians, the ex-governor Fidustius and the priests Hilarius and Patricius are executed.`,
      `Tons of books are burnt in the squares of the cities of the Eastern Empire.`,
    ],
  },
  {
    id: EventId.THE_TERM_PAGAN_IS_INTRODUCED,
    name: 'Invention of the term Pagan',
    year: 373,
    link: 'https://churchandstate.org.uk/2016/06/christian-atrocities-three-centuries-of-pagan-persecution/',
    description: [
      `The term “Pagan” (pagani, villagers, equivalent to the modern insult, “peasants”) is introduced by the Christians to demean non-believers.`,
    ],
  },
  {
    id: EventId.BOOK_BURNINGS,
    name: 'Theodosius II orders all non-Christian books to be burned',
    year: 448,
    link: 'https://churchandstate.org.uk/2016/06/christian-atrocities-three-centuries-of-pagan-persecution/',
    description: [
      `Along with the book burnings, Theodosius II reaffirms the death penalty for all “heretics” and Pagans of the empire. Only Judaism is considered a legal non-Christian religion.`,
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
    id: EventId.PLETHON_VISITS_FLORENCE,
    name: 'Plethon visits Florence',
    link: 'https://en.wikipedia.org/wiki/Gemistos_Plethon',
    year: 1438,
    description: [
      `The man responsible for reintroducing Plato's ideas to Western Europe, and a major influence on the Italian Renaissance, if not literally it's Prophet.`,
      `Known as one of the most renowned philosophers of the late Byzantine era, he travelled to Florence in Italy in 1438–1439 to 
      attend the Council of Florence to discuss a union of the Orthodox and Catholic churches.`,
      `Despite not being a theologian or even Christian, Plethon was chosen to accompany the Byzantine
      emperor John VIII Palaiologos to the Council on the basis of his renowned wisdom and morality.`,
      `In Florence, Plethon met Cosimo de' Medici, whom he influenced to found a new Platonic Academy (in other words, ressuscitating the Academy of Athens which had been closed by the Christian Emperor Justinian I in 529 CE), which, 
      under Marsilio Ficino, proceeded to translate into Latin all of Plato's works, the Enneads of 
      Plotinus, and various other Neoplatonist works.`,
      `At the invitation of some Florentine humanists he set up a temporary school to lecture
      on the difference between Plato and Aristotle.`,
      `Few of Plato's writings were studied in the Latin West at that time,
      and he essentially reintroduced much of Plato to the Western world.`,
      `He was a chief pioneer of the revival of Greek scholarship in Western Europe.
      As revealed in his last literary work, the Nomoi or Book of Laws, which he circulated
      only among close friends, he rejected Christianity in favour of a return to the worship
      of the classical Hellenic gods, mixed with ancient wisdom based on Zoroaster and the Magi,
      based largely upon the ideas of humanism prevalent at the time,
      incorporating themes such as rationalism and logic`,
      `His book Nómoi ("Book of Laws") was burned by Gennadius II, Patriarch of Constantinople in 1460.`,
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
