
enum Fields {
  SCIENCE = 'science',
  MIND = 'mind',
  SPIRITUALITY = 'spirituality',
  RELIGION = 'religion',
  HISTORY = 'history',
  METAPHYSICS = 'METAPHYSICS',
  MUSIC = 'MUSIC',
  POLITICS = 'POLITICS',
}

enum Region {
  EUROPE = 'EUROPE',
  MIDDLE_EAST = 'MIDDLE_EAST',
  AFRICA = 'AFRICA',
}

type PhilospherType = {
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

const westernPhilosophers: PhilospherType[] = [
  {
    name: 'Thales of Miletus',
    birth: -624,
    death: -546,
    description: 'Of the Milesian school. Believed that all was made of water.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Thales_of_Miletus'
  },
  {
    name: 'Pherecydes of Syros',
    birth: -620,
    death: -550,
    description: 'Cosmologist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pherecydes_of_Syros'
  },
  {
    name: 'Anaximander of Miletus',
    birth: -610,
    death: -546,
    description: 'Of the Milesian school. Famous for the concept of Apeiron, or "the boundless".',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Anaximander'
  },
  {
    name: 'Anaximenes of Miletus',
    birth: -585,
    death: -525,
    description: 'Of the Milesian school. Believed that all was made of air.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Anaximenes'
  },
  {
    name: 'Pythagoras of Samos',
    birth: -580,
    death: -500,
    description: 'Of the Ionian School. Believed the deepest reality to be composed of numbers, and that souls are immortal.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.SPIRITUALITY, Fields.MUSIC, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pythagoras'
  },
  {
    name: 'Xenophanes of Colophon',
    birth: -570,
    death: -480,
    description: 'Advocated monotheism. Sometimes associated with the Eleatic school.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SPIRITUALITY, Fields.RELIGION, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Xenophanes'
  },
  {
    name: 'Heraclitus of Ephesus',
    birth: -535,
    death: -475,
    description: 'Of the Ionians. Emphasized the mutability of the universe.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Heraclitus'
  },
  {
    name: 'Epicharmus of Kos',
    birth: -530,
    death: -450,
    description: 'Comic playwright and moralist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Epicharmus'
  },
  {
    name: 'Parmenides of Elea',
    birth: -515,
    death: -450,
    description: 'Of the Eleatics. Reflected on the concept of Being.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Parmenides'
  },
  {
    name: 'Anaxagoras of Clazomenae',
    birth: -500,
    death: -428,
    description: 'Of the Ionians. Pluralist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.MIND, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Anaxagoras'

  },
  {
    name: 'Empedocles',
    birth: -492,
    death: -432,
    description: 'Eclectic cosmogonist. Pluralist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Empedocles'
  },
  {
    name: 'Zeno of Elea',
    birth: -490,
    death: -430,
    description: 'Of the Eleatics. Known for his paradoxes.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.METAPHYSICS, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Zeno_of_Elea'
  },
  {
    name: 'Gorgias',
    birth: -483,
    death: -375,
    description: 'Sophist. Early advocate of solipsism.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Gorgias'
  },
  {
    name: 'Protagoras of Abdera',
    birth: -481,
    death: -420,
    description: 'Sophist. Early advocate of relativism.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Protagoras'
  },
  {
    name: 'Leucippus of Miletus',
    birth: -475,
    death: -370,
    description: 'Founding Atomist, Determinist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Leucippus'
  },
  {
    name: 'Socrates of Athens',
    birth: -470,
    death: -399,
    description: 'Emphasized virtue ethics. In epistemology, understood dialectic to be central to the pursuit of truth.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.SPIRITUALITY, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Socrates'
  },
  {
    name: 'Prodicus of Ceos',
    birth: -465,
    death: -395,
    description: 'Sophist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Prodicus'
  },
  {
    name: 'Critias of Athens',
    birth: -460,
    death: -413,
    description: 'Atheist writer and politician.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.POLITICS, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Critias'
  },
  {
    name: 'Hippias',
    birth: -450,
    death: -450,
    description: 'Sophist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hippias'
  },
  {
    name: 'Democritus of Abdera',
    birth: -450,
    death: -370,
    description: 'Founding Atomist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Democritus'
  },
  {
    name: 'Melissus of Samos',
    birth: -470,
    death: -430,
    description: 'Eleatic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Melissus_of_Samos'
  },
  {
    name: 'Cratylus',
    birth: -470,
    death: -430,
    description: 'Follower of Heraclitus.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cratylus'
  },
  {
    name: 'Antisthenes',
    birth: -444,
    death: -365,
    description: 'Founder of Cynicism. Pupil of Socrates.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Antisthenes'
  },
  {
    name: 'Aristippus of Cyrene',
    birth: -440,
    death: -366,
    description: 'A Cyrenaic. Advocate of ethical hedonism.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aristippus'
  },
  {
    name: 'Xenophon',
    birth: -427,
    death: -355,
    description: 'Historian.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.HISTORY],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Xenophon'
  },
  {
    name: 'Plato',
    birth: -427,
    death: -347,
    description: 'Famed for view of the transcendental forms. Advocated polity governed by philosophers.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.METAPHYSICS, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Plato'
  },
  {
    name: 'Diogenes of Apollonia',
    birth: -425,
    death: -350,
    description: 'Cosmologist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Diogenes_of_Apollonia'
  },
  {
    name: 'Speusippus',
    birth: -408,
    death: -339,
    description: 'Nephew of Plato.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Speusippus'
  },
  {
    name: 'Eudoxus of Cnidus',
    birth: -408,
    death: -355,
    description: 'Pupil of Plato.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus'
  },
  {
    name: 'Diogenes of Sinope',
    birth: -404,
    death: -323,
    description: 'Cynic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Ancient Greece',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Diogenes_of_Sinope'
  },
  {
    name: 'Xenocrates',
    birth: -396,
    death: -314,
    description: 'Disciple of Plato.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Xenocrates'
  },
  {
    name: 'Aristotle',
    birth: -384,
    death: -322,
    description: 'A polymath whose works ranged across all philosophical fields.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.SCIENCE, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aristotle'
  },
  {
    name: 'Theophrastus',
    birth: -371,
    death: -287,
    description: 'Peripatetic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Theophrastus'
  },
  {
    name: 'Pyrrho of Elis',
    birth: -360,
    death: -270,
    description: 'Skeptic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pyrrho'
  },
  {
    name: 'Epicurus',
    birth: -341,
    death: -270,
    description: 'Materialist Atomist, hedonist. Founder of Epicureanism',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Epicurus'
  },
  {
    name: 'Strato of Lampsacus',
    birth: -340,
    death: -268,
    description: 'Atheist, Materialist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Strato_of_Lampsacus'
  },
  {
    name: 'Zeno of Citium',
    birth: -333,
    death: -264,
    description: 'Founder of Stoicism.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Zeno_of_Citium'
  },
  {
    name: 'Aristarchus of Samos',
    birth: -310,
    death: -230,
    description: 'Astronomer.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aristarchus_of_Samos'
  },
  {
    name: 'Euclid',
    birth: 300,
    death: 300,
    description: 'Mathematician, founder of geometry.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Euclid'
  },
  {
    name: 'Archimedes',
    birth: -287,
    death: -212,
    description: 'Mathematician and inventor.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Archimedes'
  },
  {
    name: 'Chrysippus of Soli',
    birth: -280,
    death: -207,
    description: 'Major figure in Stoicism.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Chrysippus_of_Soli'
  },
  {
    name: 'Eratosthenes',
    birth: -276,
    death: -195,
    description: 'Geographer and mathematician.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Eratosthenes'
  },
  {
    name: 'Carneades',
    birth: -214,
    death: -129,
    description: 'Academic skeptic. Understood probability as the purveyor of truth.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Carneades'
  },
  {
    name: 'Hipparchus of Nicaea',
    birth: -190,
    death: -120,
    description: 'Astronomer and mathematician, founder of trigonometry.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Hellenistic era',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hipparchus_of_Nicaea'
  },
  {
    name: 'Cicero',
    birth: -106,
    death: -43,
    description: 'Skeptic. Political theorist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cicero'
  },
  {
    name: 'Lucretius',
    birth: -99,
    death: -55,
    description: 'Epicurean.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Lucretius'
  },
  {
    name: 'Quintilian',
    birth: 35,
    death: 100,
    description: 'Rhetorician and teacher.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Quintilian'
  },
  {
    name: 'Philo',
    birth: 20,
    death: 50,
    description: 'Believed in the allegorical method of reading texts.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: true,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.SPIRITUALITY, Fields.RELIGION, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Philo'
  },
  {
    name: 'Seneca the Younger',
    birth: 4,
    death: 65,
    description: 'Stoic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Seneca_the_Younger'
  },
  {
    name: 'Jesus of Nazareth',
    birth: 1,
    death: 30,
    description: 'the founder of Christianity.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.SPIRITUALITY, Fields.RELIGION, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jesus'
  },
  {
    name: 'Hero of Alexandria',
    birth: 10,
    death: 70,
    description: 'Engineer.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hero_of_Alexandria'
  },
  {
    name: 'Plutarch',
    birth: 46,
    death: 119,
    description: '',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Plutarch'
  },
  {
    name: 'Epictetus',
    birth: 55,
    death: 135,
    description: 'Stoic. Emphasized ethics of self–determination.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Epictetus'
  },
  {
    name: 'Marcus Aurelius',
    birth: 121,
    death: 180,
    description: 'Stoic.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Marcus_Aurelius'
  },
  {
    name: 'Sextus Empiricus',
    birth: 100,
    death: 200,
    description: 'Skeptic, Pyrrhonist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Sextus_Empiricus'
  },
  {
    name: 'Plotinus',
    birth: 205,
    death: 270,
    description: 'Neoplatonist. Had a holistic metaphysics.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Plotinus'
  },
  {
    name: 'Porphyry',
    birth: 232,
    death: 304,
    description: 'Student of Plotinus.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Porphyry'
  },
  {
    name: 'Iamblichus of Syria',
    birth: 245,
    death: 325,
    description: 'Late neoplatonist. Espoused theurgy.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Iamblichus'
  },
  {
    name: 'Augustine of Hippo',
    birth: 354,
    death: 430,
    description: 'Neoplatonist. Original Sin. Church father.',
    polytheist: true,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.RELIGION, Fields.METAPHYSICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Augustine_of_Hippo'
  },
  {
    name: 'Proclus',
    birth: 412,
    death: 485,
    description: 'Neoplatonist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Proclus'
  },
  {
    name: 'Boethius',
    birth: 480,
    death: 524,
    description: 'Neoplatonist. Philosopher and statesman.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Boethius'
  },
  {
    name: 'Simplicius of Cilicia',
    birth: 490,
    death: 560,
    description: 'Neoplatonist.',
    polytheist: true,
    christian: false,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Simplicius_of_Cilicia'
  },
  {
    name: 'John Philoponus',
    birth: 490,
    death: 570,
    description: 'Christian philosopher. Critic of Aristotle.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Classical Rome',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_Philoponus'
  },
  {
    name: 'Pseudo-Dionysius the Areopagite',
    birth: 500,
    death: 550,
    description: 'Christian Neoplatonist.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pseudo-Dionysius_the_Areopagite'
  },
  {
    name: 'John of Damascus',
    birth: 680,
    death: 750,
    description: 'Christian philosopher.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_of_Damascus'
  },
  {
    name: 'Al-Kindi',
    birth: 801,
    death: 873,
    description: 'Major figure in Islamic philosophy. Influenced by Neoplatonism.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Al-Kindi'
  },
  {
    name: 'Abbas ibn Firnas',
    birth: 809,
    death: 887,
    description: 'Polymath.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.SCIENCE, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Abbas_ibn_Firnas'
  },
  {
    name: 'John the Scot',
    birth: 815,
    death: 877,
    description: 'Neoplatonist, pantheist.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.SPIRITUALITY],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_the_Scot'
  },
  {
    name: 'Al-Farabi',
    birth: 870,
    death: 950,
    description: 'Major Islamic philosopher. Neoplatonist.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND, Fields.SPIRITUALITY],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Al-Farabi'
  },
  {
    name: 'Al-Razi',
    birth: 865,
    death: 925,
    description: 'Rationalist. Major Islamic philosopher. Held that God creates universe by rearranging pre–existing laws.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND, Fields.RELIGION],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Al-Razi'
  },
  {
    name: 'Saadia Gaon',
    birth: 882,
    death: 942,
    description: 'Jewish Philosopher.',
    polytheist: false,
    christian: false,
    muslim: false,
    jewish: true,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Saadia_Gaon'
  },
  {
    name: 'Al-Biruni',
    birth: 973,
    death: 1050,
    description: 'Islamic polymath.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Al-Biruni'
  },
  {
    name: 'Ibn Sina',
    birth: 980,
    death: 1037,
    description: 'Islamic philosopher.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ibn_Sina'
  },
  {
    name: 'Ibn Hazm',
    birth: 994,
    death: 1064,
    description: '',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.SCIENCE, Fields.POLITICS, Fields.HISTORY, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ibn_Hazm'
  },
  {
    name: 'Ibn Gabirol',
    birth: 1021,
    death: 1058,
    description: 'Jewish philosopher.',
    polytheist: false,
    christian: false,
    muslim: false,
    jewish: true,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.RELIGION],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ibn_Gabirol'
  },
  {
    name: 'Anselm',
    birth: 1034,
    death: 1109,
    description: 'Christian philosopher. Produced ontological argument for the existence of God.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.EUROPE,
    fields: [Fields.MIND, Fields.RELIGION],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Anselm_of_Canterbury'
  },
  {
    name: 'Omar Khayyam',
    birth: 1048,
    death: 1131,
    description: 'Islamic philosopher. Agnostic. Mathematician. Philosophical poet, one of the 5 greatest Iranian Poets.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.SCIENCE, Fields.MIND, Fields.SPIRITUALITY],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Omar_Khayyam'
  },
  {
    name: 'Al-Ghazali',
    birth: 1058,
    death: 1111,
    description: 'Islamic philosopher. Mystic.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND, Fields.SPIRITUALITY],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Al-Ghazali'
  },
  {
    name: 'Yehudah HaLevi',
    birth: 1075,
    death: 1141,
    description: 'Jewish poet, physician and philosopher.',
    polytheist: false,
    christian: false,
    muslim: false,
    jewish: true,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.SCIENCE, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Judah_Halevi'
  },
  {
    name: 'Peter Abelard',
    birth: 1079,
    death: 1142,
    description: 'Scholastic philosopher. Dealt with the problem of universals.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.EUROPE,
    fields: [Fields.METAPHYSICS, Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Peter_Abelard'
  },
  {
    name: 'Peter Lombard',
    birth: 1100,
    death: 1160,
    description: 'Scholastic.',
    polytheist: false,
    christian: true,
    muslim: false,
    jewish: false,
    period: 'Middle Ages',
    region: Region.EUROPE,
    fields: [Fields.MIND],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Peter_Lombard'
  },
  {
    name: 'Ibn Tufail',
    birth: 1105,
    death: 1185,
    description: '',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.MIND, Fields.SCIENCE],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ibn_Tufail'
  },
  {
    name: 'Averroes',
    birth: 1126,
    death: 1198,
    description: 'Islamic philosopher.',
    polytheist: false,
    christian: false,
    muslim: true,
    jewish: false,
    period: 'Middle Ages',
    region: Region.MIDDLE_EAST,
    fields: [Fields.SCIENCE, Fields.RELIGION, Fields.MIND, Fields.POLITICS],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Averroes'
  },
  
  
]


  


    


/*

Middle Ages

Pseudo-Dionysius the Areopagite (c. 500).
John of Damascus (c. 680-750).
Al-Kindi (c. 801 – 873). Major figure in Islamic philosophy. Influenced by Neoplatonism.
Abbas ibn Firnas (809–887). Polymath.
John the Scot (c. 815 – 877). neoplatonist, pantheist.
al–Faràbi (c. 870 – 950). Major Islamic philosopher. Neoplatonist.
al-Razi (c. 865 – 925). Rationalist. Major Islamic philosopher. Held that God creates universe by rearranging pre–existing laws.
Saadia Gaon (c. 882 – 942). Jewish Philosopher
Al-Biruni (c. 973 – 1050). Islamic polymath.
Ibn Sina (Avicenna) (c. 980–1037). Islamic philosopher.
Ibn Hazm (7 November 994 – 15 August 1064)

Ibn Gabirol (Avicebron) (c. 1021–1058). Jewish philosopher.
Anselm (c. 1034–1109). Christian philosopher. Produced ontological argument for the existence of God.
Omar Khayyam (c. 1048–1131). Islamic philosopher. Agnostic. Mathematician. Philosophical poet, one of the 5 greatest Iranian Poets.
Al-Ghazali (c. 1058–1111). Islamic philosopher. Mystic.
Yehudah HaLevi (c. 1075- 1141). Jewish poet, physician and philosopher.
Peter Abelard (c. 1079–1142). Scholastic philosopher. Dealt with the problem of universals.
Peter Lombard (c. 1100–1160). Scholastic.
Ibn Tufail (c. 1105 – 1185)
Averroes (Ibn Rushd, "The Commentator") (c. 1126–December 10, 1198). Islamic philosopher.
Maimonides (c. 1135–1204). Jewish philosopher.
Fakhr al-Din al-Razi (1149 or 1150 – 1209)
Suhrawardi (c. 1154–1191). Major Islamic philosopher.
Ibn Arabi (1165–1240). Andalusian Muslim philosopher, mystic, poet, and scholar. Founder of Akbarism, one of the major current of later Islamic philosophy.
Fibonacci (c. 1170–c. 1250), mathematician.
Robert Grosseteste (c. 1175–1253).
Francis of Assisi (c. 1182–1226). Ascetic.
Albert the Great (Albertus Magnus) (c. 1193–1280). Early Empiricist.

Roger Bacon (c. 1214–1294). Empiricist, mathematician.
Thomas Aquinas (c. 1221–1274). Aristotelian.
Bonaventure (c. 1225–1274). Franciscan.
Ramon Llull (c. 1232–1315) Spanish philosopher
Meister Eckhart (c. 1260–1328). mystic.
Ibn Taymiyya (c. 1263-1328) Islamic scholar, jurist and philosopher
Dante Alighieri (c. 1265 – 1321).
Duns Scotus (c. 1266–1308). Franciscan, Scholastic, Original Sin.
Marsilius of Padua (c. 1270–1342). Understood chief function of state as mediator.
William of Ockham (c. 1288–1348). Franciscan. Scholastic. Nominalist, creator of Ockham's razor.
Jean Buridan (c. 1300–1358). Nominalist.
John Wycliffe (c. 1320–1384).
Nicole Oresme (c. 1320–5 – 1382). Made contributions to economics, science, mathematics, theology and philosophy.
Ibn Khaldun (1332 – 1406).
Hasdai Crescas (c. 1340 – c. 1411). Jewish philosopher.
Gemistus Pletho (c. 1355 – 1452/1454). Late Byzantine scholar of neoplatonic philosophy.

Nicholas of Cusa (1401–1464). Christian philosopher.
Lorenzo Valla (1407–1457). Humanist, critic of scholastic logic.
Marsilio Ficino (1433–1499). Christian Neoplatonist, head of Florentine Academy and major Renaissance Humanist figure. First translator of Plato's complete extant works into Latin.
Pico della Mirandola (1463–1494). Renaissance humanist.
Desiderius Erasmus (1466–1536). Humanist, advocate of free will.
Niccolò Machiavelli (1469–1527). Political realism.
Nicolaus Copernicus (1473–1543). Scientist, whose works affected Philosophy of Science.
Sir Thomas More (1478–1535). Humanist, created term "utopia".
Martin Luther (1483–1546). Major Western Christian theologian.
Early modern period

John Calvin (1509–1564). Major Western Christian theologian.
Michel de Montaigne (1533–1592). Humanist, skeptic.
Giordano Bruno (1548–1600). Advocate of heliocentrism.
Francisco Suarez (1548–1617). Politically proto–liberal.
Francis Bacon (1561–1626). Empiricist.
Galileo Galilei (1564–1642). Heliocentrist.
Johannes Kepler (1571–1630). Scientist, whose works affected Philosophy of Science.
Molla-Sadra (1572–1640). Major Islamic philosopher.
Hugo Grotius (1583–1645). Natural law theorist.
Marin Mersenne (1588–1648). Cartesian.
Robert Filmer (1588–1653). Absolutist, monarchist, patrimonialist. Divine right of kings.
Thomas Hobbes (1588–1679). Advocate of extensive government power, social contract theorist, materialist.
Pierre Gassendi (1592–1655). Mechanicism. Empiricist.
René Descartes (1596–1650). Heliocentrism, mind-body dualism, rationalism.

Baltasar Gracián (1601–1658). Spanish Catholic philosopher
François de La Rochefoucauld (1613-1680).
Blaise Pascal (1623–1662). Physicist, scientist. Noted for Pascal's wager.
Margaret Cavendish (1623–1673). Materialist, feminist.
Robert Boyle (1627–1691).
Jacques-Bénigne Bossuet (1627 – 1704).
Baruch Spinoza (1632–1677). Rationalism.
Samuel von Pufendorf (1632–1694). Social contract theorist.
John Locke (1632–1704). Major Empiricist. Political philosopher.
Nicolas Malebranche (1638–1715). Cartesian.
Isaac Newton (1643–1727).
John Flamsteed (1646 – 1719). Astronomer.
Gottfried Leibniz (1646–1716). Co-inventor of calculus.
Pierre Bayle (1647–1706). Pyrrhonist.
Jean Meslier (1664–1729). Atheist Priest.
Giambattista Vico (1668–1744).
John Toland (1670–1722).
Anthony Ashley-Cooper (1671–1713).
Dimitrie Cantemir (1674-1723)
Christian Wolff (1679–1754). Determinist, rationalist.
George Berkeley (1685–1753). Idealist, empiricist.
Charles de Secondat, Baron de Montesquieu (1689–1755). Skeptic, humanist.
Francis Hutcheson (1694–1746). Proto–utilitarian.
Voltaire (1694–1778). Advocate for freedoms of religion and expression.

Jonathan Edwards (1703–1758). American philosophical theologian.
David Hartley (1705–1757).
Julien La Mettrie (1709–1751). Materialist, genetic determinist.
Thomas Reid (1710–1796). Member of Scottish Enlightenment, founder of Scottish Common Sense philosophy.
David Hume (1711–1776). Empiricist, skeptic.
Jean–Jacques Rousseau (1712–1778). Social contract political philosopher.
Denis Diderot (1713–1784).
Alexander Gottlieb Baumgarten (1714–1762).
Claude Adrien Helvétius (1715–1771). Utilitarian.
Etienne de Condillac (1715–1780).
Jean d'Alembert (1717–1783).
Baron d'Holbach (1723–1789). Materialist, atheist.
Adam Smith (1723–1790). Economic theorist, member of Scottish Enlightenment.
Immanuel Kant (1724–1804). Major contributions in nearly every field of philosophy, especially metaphysics, epistemology, ethics, and aesthetics.
Moses Mendelssohn (1729–1786). Member of the Jewish Enlightenment.
Gotthold Ephraim Lessing (1729–1781).
Edmund Burke (1729–1797). Conservative political philosopher.
Johann Georg Hamann (1730–1788).
Cesare Beccaria (1738–1794). Italian criminologist, jurist, and philosopher from the Age of Enlightenment.
Thomas Jefferson (1743–1826). Liberal political philosopher.
Friedrich Heinrich Jacobi (1743–1819).
Johann Gottfried von Herder (1744–1803).
Jean-Baptiste Lamarck (1744–1829). Early evolutionary theorist.
Jeremy Bentham (1748–1832). Utilitarian, hedonist.
Pierre-Simon Laplace (1749–1827). Determinist.
Joseph de Maistre (1753–1821) Conservative
Louis de Bonald (1754 – 1840).
William Godwin (1756–1836). Anarchist, utilitarian.
Mary Wollstonecraft (1759–1797). Feminist.
Friedrich Schiller (1759–1805).
Comte de Saint-Simon (1760–1825). Socialist.
Johann Gottlieb Fichte (1762–1814).
Madame de Staël (1766–1817).
Friedrich Schleiermacher (1768–1834). Hermeneutician.
Friedrich Hölderlin (1770–1843). Poet and philosopher.
G. W. F. Hegel (1770–1831). German idealist.
Samuel Taylor Coleridge (1772 – 1834).
James Mill (1773–1836). Utilitarian.
F. W. J. von Schelling (1775–1854). German idealist.
Bernard Bolzano (1781–1848).
Arthur Schopenhauer (1788–1860). Pessimism, Critic, Absurdist.
Thomas Carlyle (1795 – 1881).
Sojourner Truth (c. 1797–1883). Egalitarian, abolitionist.
Auguste Comte (1798–1857). Social philosopher, positivist.
Modern philosophers

Ralph Waldo Emerson (1803–1882). Transcendentalist, abolitionist, egalitarian, humanist.
Ludwig Feuerbach (1804–1872).
Alexis de Tocqueville (1805–1859).
Max Stirner (1806–1856). Anarchist.
Augustus De Morgan (1806–1871). Logician.
John Stuart Mill (1806–1873). Utilitarian.
Pierre-Joseph Proudhon (1809–1865). Anarchist.
Harriet Taylor Mill (1807–1858). Egalitarian, utilitarian.
Charles Darwin (1809–1882). Scientist, whose works affected Philosophy of Science.
Margaret Fuller (1810–1850). Egalitarian.
Søren Kierkegaard (1813–1855). Existentialist.
Mikhail Bakunin (1814–1876). Revolutionary anarchist.
Elizabeth Cady Stanton (1815–1902). Egalitarian.
Henry David Thoreau (1817–1862). Transcendentalist, pacifist, abolitionist.
Karl Marx (1818–1883). Socialist, formulated historical materialism.
Friedrich Engels (1820–1895). Egalitarian, dialectical materialist.
Herbert Spencer (1820–1903). Nativism, libertarianism, social Darwinism.
Susan B. Anthony (1820–1906). Feminist.
Ernest Renan (1823 – 1892).
Hippolyte Taine (1828 – 1893).
Wilhelm Dilthey (1833–1911).
T.H. Green (1836–1882). British idealist.
Henry Sidgwick (1838–1900). Rationalism, utilitarianism.
Ernst Mach (1838–1916). Philosopher of science, influence on logical positivism.
Franz Brentano (1838–1917). Phenomenologist.
Charles Sanders Peirce (1839–1914). Pragmatist.
Philipp Mainländer (1841 — 1876). Pessimist.
William James (1842–1910). Pragmatism, Radical empiricism.
Hermann Cohen (1842-1918). Neo-Kantianism, Jewish philosophy.
Peter Kropotkin (1842–1921). Anarchist communism.
Friedrich Nietzsche (1844–1900). Naturalistic philosopher, influence on Existentialism.
W. K. Clifford (1845–1879). Evidentialist.
F. H. Bradley (1846–1924). Idealist.
Vilfredo Pareto (1848–1923). Social philosopher.
Gottlob Frege (1848–1925). Influential analytic philosopher.

Henri Poincaré (1854–1912).
Josiah Royce (1855–1916). Idealist.
Sigmund Freud (1856–1939). Neurologist, founded psychoanalysis, posited structural model of mind.
Ferdinand de Saussure (1857–1913). Linguist, Semiotics, Structuralism.
Émile Durkheim (1858–1917). Social philosopher.
Giuseppe Peano (1858–1932).
Edmund Husserl (1859–1938). Founder of phenomenology.
Henri Bergson (1859–1941). Vitalism.
John Dewey (1859–1952). Pragmatism.
Jane Addams (1860–1935). Pragmatist.
Pierre Duhem (1861–1916).
Rudolf Steiner (1861–1925).Anthroposophy
Alfred North Whitehead (1861–1947). Process Philosophy, Mathematician, Logician, Philosophy of Physics, Panpsychism.
George Herbert Mead (1863–1931). Pragmatism, symbolic interactionist.
George Santayana (1863–1952). Pragmatism, naturalism; known for many aphorisms.
Max Weber (1864–1920). Social philosopher.
Miguel de Unamuno (1864–1936).
Benedetto Croce (1866–1952).
Emma Goldman (1869–1940). Anarchist.
Rosa Luxemburg (1870–1919). Marxist political philosopher.
Bertrand Russell (1872–1970). Analytic philosopher, nontheist, influential.
G. E. Moore (1873–1958). Common sense theorist, ethical non–naturalist.
Nikolai Berdyaev (1874–1948). Existentialist.
Ernst Cassirer (1874–1945). Neo-Kantianism.
Max Scheler (1874–1928). German phenomenologist.
Carl Jung (1875–1961). Psychoanalyst, metaphysicst.
Giovanni Gentile (1875–1944). Idealist and fascist philosopher.
Martin Buber (1878–1965). Jewish philosopher, existentialist.
Jan Łukasiewicz (1878-1956). Logician.
Oswald Spengler (1880 – 1936).
Ludwig von Mises (1881-1973).
Pierre Teilhard de Chardin (1881–1955). Christian evolutionist.
Hans Kelsen (1881–1973). Legal positivist.
Moritz Schlick (1882–1936). Founder of Vienna Circle, logical positivism.
Otto Neurath (1882–1945). Member of Vienna Circle.
Nicolai Hartmann (1882–1950).
Jacques Maritain (1882–1973). Human rights theorist.
José Ortega y Gasset (1883–1955). Philosopher of History.
Karl Jaspers (1883–1969). Existentialist.
Gaston Bachelard (1884–1962).
Georg Lukács (1885–1971). Marxist philosopher.
Karl Barth (1886–1968).
René Guénon (1886 – 1951).
Carl Schmitt (1888 – 1985).
Ludwig Wittgenstein (1889–1951). Analytic philosopher, philosophy of language, philosophy of mind, influential.
Gabriel Marcel (1889–1973). Christian existentialist.
Martin Heidegger (1889–1976). Phenomenologist.
Antonio Gramsci (1891–1937). Marxist philosopher.
Rudolf Carnap (1891–1970). Vienna Circle. Logical positivist.
Walter Benjamin (1892–1940). Marxist. Philosophy of language.
Max Horkheimer (1895-1973). Frankfurt School.
Ernst Jünger (1895 – 1998).
Susanne Langer (1895–1985).
Georges Bataille (1897–1962).
Julius Evola (1898 – 1974).
Herbert Marcuse (1898–1979). Frankfurt School.
C. S. Lewis (1898 – 1963).
Friedrich Hayek (1899 – 1992).
Leo Strauss (1899–1973). Political Philosopher.

Gilbert Ryle (1900–1976).
Hans-Georg Gadamer (1900–2002). Hermeneutics.
Jacques Lacan (1901–1981). Structuralism.
Henri Lefebvre (1901-1991). Marxist philosopher
Alfred Tarski (1901–1983). Created T–Convention in semantics.
Michael Oakeshott (1901 – 1990).
Karl Popper (1902–1994). Falsificationist.
Mortimer Adler (1902–2001).
Eric Hoffer (1902-1983)
Frank P. Ramsey (1903–1930). Proposed redundancy theory of truth.
Theodor Adorno (1903–1969). Frankfurt School.
Joseph Campbell (1904-1987) comparative mythology and comparative religion
Raymond Aron (1905 – 1983).
Jean-Paul Sartre (1905–1980). Humanism, existentialism.
Ayn Rand (1905–1982). Objectivist, Individualist.
Kurt Gödel (1906–1978). Vienna Circle.
Emmanuel Levinas (1906–1995).
Hannah Arendt (1906–1975). Political Philosophy.
H.L.A. Hart (1907–1992). Legal positivism.
Maurice Merleau-Ponty (1908–1961). Influential French phenomenologist.
Simone de Beauvoir (1908–1986). Existentialist, feminist.
Willard van Orman Quine (1908–2000).
Isaiah Berlin (1909–1997), historian of ideas.
Simone Weil (1909–1943).
A.J. Ayer (1910–1989). Logical positivist, emotivist.
J.L. Austin (1911–1960).
Marshall McLuhan (1911–1980). Media theory.
Alan Turing (1912–1954). Functionalist in philosophy of mind.
Wilfrid Sellars (1912–1989). Influential American philosopher
Albert Camus (1913–1960). Absurdist.
Paul Ricœur (1913–2005). French philosopher and theologian.
Roland Barthes (1915–1980). French semiotician and literary theorist.
Donald Davidson (1917–2003). Coherentist philosophy of mind.
Louis Althusser (1918–1990). Structural Marxist.
Russell Kirk (1918 – 1994).
Aleksandr Solzhenitsyn (1918 – 2008).
M. Bunge (1919–2020).
P. F. Strawson (1919–2006). Ordinary language philosophy.
John Rawls (1921–2002). Liberal.
Thomas Kuhn (1922–1996). Author of The Structure of Scientific Revolutions.
Zygmunt Bauman (1925–2017). Polish sociologist and philosopher, who introduced the idea of liquid modernity.
Frantz Fanon (1925–1961). Postcolonialism
Gilles Deleuze (1925–1995). Post-structuralism
Michel Foucault (1926–1984). Structuralism, Post-structuralism, Postmodernism, and the concept of biopolitics.
Hilary Putnam (1926–2016). Neopragmatism.
Noam Chomsky (born 1928). Linguist.
Robert M. Pirsig (1928–2017). Introduced the Methaphysics of Quality. MOQ incorporates facets of East Asian philosophy, pragmatism and the work of F. S. C. Northrop.
Bernard Williams (1929–2003). Moral philosopher.
Jean Baudrillard (1929–2007). Postmodernism, Post-structuralism.
Jürgen Habermas (born 1929). Discourse ethics.
Jaakko Hintikka (1929–2015).
Alasdair MacIntyre (born 1929). Aristotelian.
Hubert Lederer Dreyfus (1929-2017)
Allan Bloom (1930–1992). Political Philosopher.
Pierre Bourdieu (1930–2002). French psychoanalytic sociologist and philosopher.
Jacques Derrida (1930–2004). Deconstruction.
Thomas Sowell (born 1930). Political Philosopher, capitalist.
Guy Debord (1931–1994). French Marxist philosopher.
Richard Rorty (1931–2007). Pragmatism, Postanalytic philosophy.
Charles Taylor (born 1931). Political philosophy, Philosophy of Social Science, and Intellectual History
John Searle (born 1932). Direct realism.
Alvin Plantinga (born 1932). Reformed epistemology, Philosophy of Religion.
Jerry Fodor (1935–2017).
Thomas Nagel (born 1937). Qualia theory.
Alain Badiou (born 1937).
Robert Nozick (1938–2002). Libertarian.
Tom Regan (1938–2017). Animal rights philosopher.
Saul Kripke (1940-2022). Modal semantics.
Jean-Luc Nancy (1940-2021) French philosopher.
David K. Lewis (1941–2001). Modal realism.
Derek Parfit (1942–2017).
Giorgio Agamben (born 1942). state of exception, form–of–life, and homo sacer.
Gayatri Chakravorty Spivak (born 1942). Postcolonialism, Feminism, Literary theory.
Roger Scruton (1944-2020). Traditionalist conservatism.
Peter Singer (born 1946) Moral philosopher on animal liberation, effective altruism.
Camille Paglia (born 1947).
Martha Nussbaum (born 1947). Political philosopher.
Hans-Hermann Hoppe (born 1949).
Slavoj Žižek (born 1949). German Idealism, Marxism and Lacanian psychoanalysis.
Ken Wilber (born 1949). Integral Theory.
*/