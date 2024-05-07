'use client'

import React, { useRef } from 'react'
import { EventId, Region, Fields, Gender, Religion } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import AmountSpanCanvas from '@/lib/components/AmountSpanCanvas'
import ProjectBy from '@/lib/components/ProjectBy'
import Conclusions from '@/lib/components/Conclusions'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'
// import GlobalStats from '@/lib/components/GlobalStats'
import PeopleTotalsByReligion from '@/lib/components/subcomponents/PeopleTotalsByReligion'
import DecideNameLater from '@/lib/components/subcomponents/DecideNameLater'
import InterestDistributionPerReligion from '@/lib/components/subcomponents/InterestDistributionPerReligion'

const Timelines = () => {
  const { setXCoord, setLocked, locked } = React.useContext(DataContext)
  const areaRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={areaRef}
      id="timelines-element"
      className="col-span-9 bg-black text-white relative top-[28px] overflow-y-auto overflow-x-hidden"
      style={{ height: 'calc(100vh - 28px)' }}
      onClick={() => setLocked(!locked)}
      onMouseMove={e => setXCoord(e.clientX)}
    >
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">NOTABLE EVENTS</p>
      </div>
      <EventSpan ui_id={EventId.ROMAN_REPUBLIC} color="#dc2626" />
      <EventSpan ui_id={EventId.ROMAN_EMPIRE} color="#dc2626" />
      <EventSpan ui_id={EventId.PAX_ROMANA} color="#6d28d9" />
      <EventYear ui_id={EventId.CHRISTIANITY_APPEARS} />
      <EventYear ui_id={EventId.ROME_CONQUERS_JUDEA} />
      <EventYear ui_id={EventId.SECOND_TEMPLE_DESTROYED} />
      <EventSpan ui_id={EventId.PERSECUTION_OF_POLYTHEISTS} color="#7f1d1d" />
      <EventSpan ui_id={EventId.AMBROSE_OF_MILAN} color="#dc2626" />
      <EventYear ui_id={EventId.PENALTY_OF_DEATH_FOR_PAGANS_ENACTED} />
      <EventYear ui_id={EventId.LIBRARY_OF_ANTIOCH_DESTROYED} />
      <EventYear ui_id={EventId.THE_TERM_PAGAN_IS_INTRODUCED} />
      <EventYear ui_id={EventId.CHRISTIANITY_BECOMES_MANDATORY} />
      <EventYear ui_id={EventId.ALTAR_OF_VICTORY_REMOVED} />
      <EventYear ui_id={EventId.SERAPEUM_DESTROYED} />
      <EventYear ui_id={EventId.CHRISTIANITY_BANS_OLYMPIC_GAMES} />
      <EventSpan ui_id={EventId.CHRISTIAN_DOMINATION_INSTITUTIONS} color="#7f1d1d" />
      <EventYear ui_id={EventId.BOOK_BURNINGS} />
      <EventYear ui_id={EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS} />
      <EventSpan ui_id={EventId.DARK_AGES} color="#7f1d1d" />
      <EventSpan ui_id={EventId.ISLAMIC_GOLDEN_AGE} color="#a16207" />
      <EventSpan ui_id={EventId.CAROLOGIAN_RENAISSANCE} color="#1d4ed8" />
      <EventYear ui_id={EventId.CALIPH_AL_MUTAWAKKIL_REJECTS_RATIONALISM} />
      <EventYear ui_id={EventId.CALIPH_AL_QADIR_REJECTS_RATIONALISM} />
      <EventSpan ui_id={EventId.NORTHERN_CRUSADES} color="#dc2626" />
      <EventSpan ui_id={EventId.TWELVE_CENTURY_RENAISSANCE} color="#1d4ed8" />
      <EventSpan ui_id={EventId.CHRISTIAN_INQUISITION} color="#7f1d1d" />
      <EventSpan ui_id={EventId.WITCH_HUNTS} color="#7f1d1d" />
      <EventYear ui_id={EventId.PLETHON_VISITS_FLORENCE} />
      <EventYear ui_id={EventId.FALL_OF_CONSTANTINOPLE} />
      <EventYear ui_id={EventId.MEDICI_REOPENS_PLATONIC_ACADEMY} />
      <EventSpan ui_id={EventId.ITALIAN_RENAISSANCE} color="#1d4ed8" />
      <EventYear ui_id={EventId.PROTESTANT_REFORMATION} />
      <EventSpan ui_id={EventId.SCIENTIFIC_REVOLUTION} color="#15803d" />
      <EventSpan ui_id={EventId.INDUSTRIAL_REVOLUTION} color="#0e7490" />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          NOTABLE INTELLECTUALS - EUROPE
        </p>
      </div>
      <AmountSpanCanvas ui_id="b1" title="All" filterRegion={Region.EUROPE} />
      {/* <AmountSpanCanvas
        ui_id="b2"
        title="Science only (All)"
        filterRegion={Region.EUROPE}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      /> */}
      <AmountSpanCanvas
        ui_id="b23455"
        title="Science only (Polytheists)"
        filterRegion={Region.EUROPE}
        filterField={Fields.SCIENCE}
        filterReligion={Religion.POLYTHEIST}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b234"
        title="Science only (Christians)"
        filterRegion={Region.EUROPE}
        filterField={Fields.SCIENCE}
        filterReligion={Religion.CHRISTIAN}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b5"
        title="Female only"
        filterGender={Gender.FEMALE}
        filterRegion={Region.EUROPE}
        color="#f600ff"
      />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          NOTABLE INTELLECTUALS - MUSLIM
        </p>
      </div>
      <AmountSpanCanvas ui_id="b3" title="All" filterReligion={Religion.MUSLIM} color="#ca8a03" />
      <AmountSpanCanvas
        ui_id="b4"
        title="Science only"
        filterReligion={Religion.MUSLIM}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b55"
        title="Female only"
        filterReligion={Religion.MUSLIM}
        filterGender={Gender.FEMALE}
        color="#f600ff"
      />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          INTELLECTUALS ON SCIENCE - BY RELIGION
        </p>
      </div>
      <AmountSpanCanvas
        ui_id="b23d"
        title="Polytheists"
        filterField={Fields.SCIENCE}
        filterReligion={Religion.POLYTHEIST}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b23f"
        title="Christians"
        filterField={Fields.SCIENCE}
        filterReligion={Religion.CHRISTIAN}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b23g"
        title="Jews"
        filterField={Fields.SCIENCE}
        filterReligion={Religion.JEWISH}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b23h"
        title="Muslims"
        filterField={Fields.SCIENCE}
        filterReligion={Religion.MUSLIM}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b23j"
        title="Atheists"
        filterField={Fields.SCIENCE}
        filterReligion={Religion.ATHEIST}
        color="#3b82f6"
      />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">WOMEN IN SCIENCE</p>
      </div>
      <AmountSpanCanvas
        ui_id="b4"
        title="Women in Science - All regions and religions"
        filterField={Fields.SCIENCE}
        filterGender={Gender.FEMALE}
        color="#f600ff"
      />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">TOTAL PEOPLE BY RELIGION</p>
      </div>
      <PeopleTotalsByReligion />
      {/* <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          PERCENTAGE OF PEOPLE INTERESTED IN A SUBJECT WITHIN EACH RELIGION
        </p>
      </div> */}
      {/* <GlobalStats /> */}
      {/* <div className="w-full pointer-events-none grid grid-cols-5 gap-4 p-4">
        <InterestDistributionPerReligion religion={Religion.POLYTHEIST} />
        <InterestDistributionPerReligion religion={Religion.CHRISTIAN} />
        <InterestDistributionPerReligion religion={Religion.JEWISH} />
        <InterestDistributionPerReligion religion={Religion.MUSLIM} />
        <InterestDistributionPerReligion religion={Religion.ATHEIST} />
      </div> */}
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          PERCENTUAL REPRESENTATION OF EACH RELIGION BY INTEREST
        </p>
      </div>
      <div className="w-full pointer-events-none grid grid-cols-8 gap-4 p-4">
        <DecideNameLater interest={Fields.SCIENCE} />
        <DecideNameLater interest={Fields.MIND} />
        <DecideNameLater interest={Fields.HISTORY} />
        <DecideNameLater interest={Fields.MUSIC} />
        <DecideNameLater interest={Fields.POLITICS} />
        <DecideNameLater interest={Fields.THEOLOGY} />
        <DecideNameLater interest={Fields.SPIRITUALITY} />
        <DecideNameLater interest={Fields.METAPHYSICS} />
      </div>
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">CONCLUSIONS</p>
      </div>
      <Conclusions />
      <ProjectBy />
    </div>
  )
}

export default Timelines
