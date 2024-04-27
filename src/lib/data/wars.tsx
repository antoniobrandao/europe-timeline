import { WarType } from '@/lib/constants/types'

const warsList: WarType[] = [
  { start: -753, end: -351, name: 'Roman–Etruscan Wars' },
  { start: -753, end: -494, name: 'Roman–Sabine wars' },
  { start: -743, end: -724, name: 'First Messenian War' },
  { start: -710, end: -650, name: 'Lelantine War' },
  { start: -700, end: -601, name: 'Alban war with Rome' },
  { start: -685, end: -668, name: 'Second Messenian War' },
  { start: -669, end: -668, name: 'Sparta–Argos War' },
  { start: -600, end: -265, name: 'Greek–Punic Wars' },
  { start: -595, end: -585, name: 'First Sacred War' },
  { start: -560, end: -560, name: 'Second Arcadian War' },
  { start: -540, end: -540, name: 'Battle of Alalia' },
  { start: -538, end: -522, name: 'Polycrates wars' },
  { start: -509, end: -396, name: 'Early Italian campaigns' },
  { start: -500, end: -499, name: 'Persian invasion of Naxos' },
  { start: -499, end: -493, name: 'Ionian Revolt' },
  { start: -492, end: -490, name: 'First Persian invasion of Greece' },
  { start: -482, end: -479, name: 'Second Persian invasion of Greece' },
  { start: -480, end: -307, name: 'Sicilian Wars' },
  { start: -460, end: -445, name: 'First Peloponnesian War' },
  { start: -449, end: -448, name: 'Second Sacred War' },
  { start: -440, end: -439, name: 'Samian War' },
  { start: -431, end: -404, name: 'Second Peloponnesian War' },
  { start: -404, end: -403, name: 'Phyle Campaign' },
  { start: -395, end: -387, name: 'Corinthian War' },
  { start: -390, end: -387, name: 'Celtic invasion of Italia' },
  { start: -378, end: -371, name: 'Boeotian War' },
  { start: -378, end: -362, name: 'Theban-Spartan War' },
  { start: -357, end: -355, name: 'Social War' },
  { start: -356, end: -346, name: 'Third Sacred War' },
  { start: -346, end: -344, name: 'Foreign War' },
  { start: -335, end: -335, name: "Alexander's Balkan campaign" },
  { start: -323, end: -322, name: 'Lamian War' },
  { start: -280, end: -275, name: 'Pyrrhic War' },
  { start: -272, end: -272, name: "Pyrrhus' invasion of the Peloponnese" },
  { start: -267, end: -261, name: 'Chremonidean War' },
  { start: -264, end: -241, name: 'First Punic War' },
  { start: -229, end: -222, name: 'Cleomenean War' },
  { start: -229, end: -228, name: 'First Illyrian War' },
  { start: -220, end: -216, name: 'Lyttian War' },
  { start: -220, end: -217, name: 'Social War' },
  { start: -220, end: -219, name: 'Second Illyrian War' },
  { start: -218, end: -201, name: 'Second Punic War' },
  { start: -214, end: -205, name: 'First Macedonian War' },
  { start: -200, end: -197, name: 'Second Macedonian War' },
  { start: -192, end: -188, name: 'Roman–Seleucid War' },
  { start: -195, end: -195, name: 'Laconian War' },
  { start: -191, end: -189, name: 'Aetolian War' },
  { start: -171, end: -168, name: 'Third Macedonian War' },
  { start: -146, end: -146, name: 'Achaean War' },
  { start: -135, end: -132, name: 'First Servile War' },
  { start: -113, end: -101, name: 'Cimbrian War' },
  { start: -58, end: -58, name: 'Battle of Vosgues' },
  { start: -57, end: -57, name: 'Battle of the Sabis' },
  { start: -16, end: -16, name: 'Clades Lolliana' },
  { start: -12, end: -16, name: 'Early Imperial campaigns in Germania' },
  { start: 28, end: 28, name: 'Battle of Baduhenna Wood' },
  { start: 69, end: 70, name: 'Revolt of the Batavi' },
  { start: 82, end: 82, name: "Domitian's Campaign against the Chatti" },
  { start: 92, end: 92, name: 'Clashes along the Danube' },
  { start: 166, end: 180, name: 'Marcomannic Wars' },
  { start: 235, end: 235, name: 'Battle at the Harzhorn' },
  { start: 250, end: 250, name: 'Battle of Nicopolis ad Istrum' },
  { start: 250, end: 250, name: 'Battle of Beroe' },
  { start: 250, end: 250, name: 'Battle of Philippopolis' },
  { start: 251, end: 251, name: 'Battle of Abrittus' },
  { start: 254, end: 254, name: 'Siege of Thessalonica' },
  { start: 254, end: 254, name: 'Battle of Thermopylae' },
  { start: 259, end: 259, name: 'Battle of Mediolanum' },
  { start: 260, end: 260, name: 'Battle of Augusta Vindelicorum' },
  { start: 268, end: 268, name: 'Siege of Mainz' },
  { start: 268, end: 268, name: 'Battle of Lake Benacus' },
  { start: 269, end: 269, name: 'Battle of Naissus' },
  { start: 271, end: 271, name: 'Battle of Placentia' },
  { start: 271, end: 271, name: 'Battle of Fano' },
  { start: 271, end: 271, name: 'Battle of Pavia' },
  { start: 298, end: 298, name: 'Battle of Lingones' },
  { start: 298, end: 298, name: 'Battle of Vindonissa' },
  { start: 306, end: 336, name: 'German and Sarmatian campaigns of Constantine' },
  { start: 356, end: 356, name: 'Siege of Senonae' },
  { start: 356, end: 356, name: 'Siege of Autun' },
  { start: 356, end: 356, name: 'Battle of Durocortorum' },
  { start: 356, end: 356, name: 'Battle of Brumath' },
  { start: 357, end: 357, name: 'Battle of Argentoratum' },
  { start: 367, end: 368, name: 'Great Conspiracy' },
  { start: 368, end: 368, name: 'Battle of Solicinium' },
  { start: 369, end: 369, name: 'Battle of Noviodunum' },
  { start: 376, end: 382, name: 'Gothic War' },
  { start: 378, end: 378, name: 'Battle of Argentovaria' },
  { start: 390, end: 390, name: 'Massacre of Thessalonica' },
  { start: 394, end: 394, name: 'Battle of the Frigidus' },
  { start: 399, end: 400, name: 'Gothic Revolt of Tribigild' },
  { start: 401, end: 403, name: 'Gothic War' },
  { start: 405, end: 406, name: 'War of Radagaisus' },
  { start: 406, end: 406, name: 'Crossing of the Rhine' },
  { start: 410, end: 410, name: 'Sack of Rome' },
  { start: 416, end: 418, name: 'Gothic War in Spain' },
  { start: 426, end: 426, name: 'Gothic revolt of Theodoric I' },
  { start: 428, end: 428, name: 'Frankish War' },
  { start: 429, end: 432, name: 'Vandal conquest of Roman Africa' },
  { start: 436, end: 436, name: 'Burgundian Revolt of Gunther' },
  { start: 436, end: 439, name: 'Gothic War' },
  { start: 439, end: 442, name: 'Vandal War' },
  { start: 448, end: 448, name: 'Battle of Vicus Helena' },
  { start: 451, end: 451, name: 'Battle of the Catalaunian Plains' },
  { start: 452, end: 452, name: 'Sack of Aquileia' },
  { start: 455, end: 455, name: 'Sack of Rome' },
  { start: 455, end: 455, name: 'Battle of Aylesford' },
  { start: 456, end: 456, name: 'Battle of Órbigo' },
  { start: 458, end: 458, name: 'Battle of Arelate' },
  { start: 461, end: 461, name: 'Battle of Cartagena' },
  { start: 463, end: 463, name: 'Battle of Orleans' },
  { start: 468, end: 468, name: 'Battle of Bassianae' },
  { start: 468, end: 468, name: 'Battle of Cap Bon' },
  { start: 469, end: 469, name: 'Battle of Bolia' },
  { start: 469, end: 469, name: 'Battle of Déols' },
  { start: 471, end: 471, name: 'Battle of Arles' },
  { start: 476, end: 476, name: 'Battle of Ravenna' },
  { start: 533, end: 534, name: 'Vandalic War' },
  { start: 535, end: 554, name: 'Gothic War' },
  { start: 568, end: 750, name: 'Byzantine–Lombard wars' },
  { start: -104, end: -100, name: 'Second Servile War' },
  { start: -91, end: -87, name: 'Social War' },
  { start: -87, end: -87, name: 'Bellum Octavianum' },
  { start: -85, end: -85, name: 'Colchis uprising against Pontus' },
  { start: -80, end: -72, name: 'Sertorian War' },
  { start: -82, end: -81, name: "Sulla's civil war" },
  { start: -77, end: -77, name: 'Marcus Aemilius Lepidus' },
  { start: -73, end: -71, name: 'Third Servile War' },
  { start: -73, end: -63, name: 'Roman Expansion in Syria & Judea' },
  { start: -65, end: -63, name: "Pompey's campaign in Caucasus" },
  { start: -63, end: -62, name: 'Second Catilinarian conspiracy' },
  { start: -55, end: -54, name: "Caesar's invasions of Britain" },
  { start: -58, end: -51, name: 'Gallic Wars' },
  { start: -49, end: -45, name: "Caesar's Civil War" },
  { start: -42, end: -36, name: 'Bellum Siculum' },
  { start: -43, end: -43, name: 'Battle of Mutina' },
  { start: -43, end: -42, name: "Liberators' civil war" },
  { start: -41, end: -40, name: 'Perusine War' },
  { start: -32, end: -30, name: 'Final War of the Roman Republic' },
  { start: -29, end: -19, name: 'Cantabrian Wars' },
  { start: -12, end: 16, name: 'Early Germanic campaigns' },
]

// 6–9 Bellum Batonianum
// 21 Revolt of Sacrovir
// 49–96 Roman conquest of Britain
// 51 Armenian–Iberian war
// 60–61 Boudica's uprising
// 69 Year of the Four Emperors
// 69–70 Revolt of the Batavi
// 86–88 Domitian's Dacian War
// 101–106 Trajan's Dacian Wars
// 166–180 Marcomannic Wars
// 193 Year of the Five Emperors
// 208–210 Roman invasion of Caledonia
// 235–284 Crisis of the Third Century
// 238 Year of the Six Emperors
// 267–269 Gothic War (267–269)
// 274 Battle of Châlons
// 284–285 Roman civil war
// 306–324 Civil wars of the Tetrarchy
// 350–353 Roman civil war
// 356–378 Roman-Alamanni War
// 360–361 Roman civil war
// 367–368 Great Conspiracy
// 367–369 Gothic War (367–369)
// 376–382 Gothic War (376–382)
// 387–388 Roman civil war
// 394 Roman civil war (394)
// 395-398 Gothic revolt of Alaric I
// 398 Stilicho's Pictish War
// 401–403 Gothic War (401–403)
// 405–406 War of Radagaisus
// 409–411 Gerontian Revolt
// 411–413 Revolt of Jovinus
// 412-413 War of Heraclianus
// 409–418 Gothic War (409–418)
// 409–417: Bagaudae uprising in the Loire valley and Brittany
// 416–418 Gothic War in Spain (416-418)
// 420 Battle of the Nervasos Mountains
// 422 Battle of Tarraco
// 424–425 Roman civil war (Joannes vs Galla Placidia)
// 425–426: Gothic revolt of Theodoric I
// 428: Frankish War (428)
// 432 Roman civil war of 432
// 435-436: Burgundian Revolt of Gunther - Flavius Aetius defects the Burgundians.
// 435–437: Bagaudae uprising under Tibatto in Gaul suppressed by Flavius Aetius.
// 436-439: Gothic War (436-439)
// 436–437 Hunnic-Burgundian War
// 455 Vandalic Sack of Rome
// 458 Gothic War (458)
// 461–476 Gothic War (461–476)
// 486 Battle of Soissons
// 526–532 Iberian War
// 535–554 Gothic War (535–554)
// 542–562 Lazic War
// 582–602 Maurice's Balkan campaigns
// c. 600–793 Frisian–Frankish wars
// 650–799 Arab–Khazar wars
// 680 Battle of Ongal
// 695–717 Twenty Years' Anarchy
// 708 Byzantine–Bulgarian battle of Anchialus
// 711–718 Umayyad conquest of Hispania
// 715–718 Frankish Civil War (715–718)
// 717–718 Second Siege of Constantinople
// 719–759 Umayyad invasion of Gaul
// 735–737 Marwan ibn Muhammad's invasion of Georgia
// 759 “Byzantine”-Bulgarian battle of the Rishki Pass
// 772–804 Saxon Wars
// 792 ”Byzantine”-Bulgarian battle of Marcellae
// c. 800/862–973 Hungarian invasions of Europe
// 809 Siege of Serdica (Sofia)
// 811 “Byzantine”-Bulgarian battle of Vărbitsa Pass (Battle of Pliska)
// 813 “Byzantine”-Bulgarian battle of Versinikia
// 830s Paphlagonian expedition of the Rus
