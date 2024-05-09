'use client'

import React, { useRef } from 'react'
import { EventId, Region, Fields, Gender, Religion } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import AmountSpanCanvas from '@/lib/components/AmountSpanCanvas'
import ProjectBy from '@/lib/components/ProjectBy'
import Conclusions from '@/lib/components/Conclusions'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'
import Stats from '@/lib/components/Stats'

const Timelines = () => {
  const { setXCoord, setLocked, locked, caretHidden, setCaretHidden, setDisplayContent } =
    React.useContext(DataContext)
  const areaRef = useRef<HTMLDivElement | null>(null)

  const handleOutMove = () => {
    if (!caretHidden) {
      setCaretHidden(true)
    }
  }
  const handleInMove = (e: any) => {
    setXCoord(e.clientX)
    if (caretHidden) {
      setCaretHidden(false)
    }
  }

  return (
    <div
      className="col-span-9 bg-black relative top-[28px] overflow-y-auto overflow-x-hidden"
      style={{ height: 'calc(100vh - 28px)' }}
    >
      <div
        ref={areaRef}
        id="timelines-element"
        className="w-full text-white"
        onClick={() => setLocked(!locked)}
        onMouseOver={handleInMove}
        onMouseMove={handleInMove}
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
        <EventSpan ui_id={EventId.FRANKISH_GENOCIDE_OF_PAGANS} color="#7f1d1d" />
        <EventSpan ui_id={EventId.CAROLOGIAN_RENAISSANCE} color="#1d4ed8" />
        <EventYear ui_id={EventId.CALIPH_AL_MUTAWAKKIL_REJECTS_RATIONALISM} />
        <EventYear ui_id={EventId.CALIPH_AL_QADIR_REJECTS_RATIONALISM} />
        <EventSpan ui_id={EventId.THE_CRUSADES} color="#7f1d1d" />
        <EventSpan ui_id={EventId.NORTHERN_CRUSADES} color="#dc2626" />
        <EventSpan ui_id={EventId.TWELVE_CENTURY_RENAISSANCE} color="#1d4ed8" />
        <EventSpan ui_id={EventId.CHRISTIAN_INQUISITION} color="#7f1d1d" />
        <EventSpan ui_id={EventId.GENOCIDE_OF_THE_CATHARS} color="#7f1d1d" />
        <EventSpan ui_id={EventId.BLACK_DEATH} color="#7f1d1d" />
        <EventSpan ui_id={EventId.WITCH_HUNTS} color="#7f1d1d" />
        <EventYear ui_id={EventId.PLETHON_VISITS_FLORENCE} />
        <EventYear ui_id={EventId.FALL_OF_CONSTANTINOPLE} />
        <EventYear ui_id={EventId.MEDICI_REOPENS_PLATONIC_ACADEMY} />
        <EventSpan ui_id={EventId.ITALIAN_RENAISSANCE} color="#1d4ed8" />
        <EventYear ui_id={EventId.PROTESTANT_REFORMATION} />
        <EventSpan ui_id={EventId.EUROPEAN_WARS_OF_RELIGION} color="#dc2626" />
        <EventSpan ui_id={EventId.SCIENTIFIC_REVOLUTION} color="#15803d" />
        <EventSpan ui_id={EventId.AGE_OF_ENLIGHTENMENT} color="#15803d" />
        <EventSpan ui_id={EventId.INDUSTRIAL_REVOLUTION} color="#0e7490" />
        <div className="bg-white/20 h-[18px]">
          <p className="text-white text-[11px] pl-2 relative top-[1px]">
            NOTABLE INTELLECTUALS - ALL
          </p>
        </div>
        <AmountSpanCanvas ui_id="b21" title="EUROPE" filterRegion={Region.EUROPE} />
        <AmountSpanCanvas ui_id="bg3" title="ISLAMIC WORLD" filterReligion={Religion.MUSLIM} />
        <div className="bg-white/20 h-[18px]">
          <p className="text-white text-[11px] pl-2 relative top-[1px]">
            NOTABLE INTELLECTUALS IN SCIENCE - EUROPE VS. ISLAMIC WORLD
          </p>
        </div>
        <AmountSpanCanvas
          ui_id="b11"
          title="EUROPE"
          filterField={Fields.SCIENCE}
          filterRegion={Region.EUROPE}
          color="#3b82f6"
        />
        <AmountSpanCanvas
          ui_id="b3"
          title="ISLAMIC WORLD"
          filterField={Fields.SCIENCE}
          filterReligion={Religion.MUSLIM}
          color="#3b82f6"
        />
        <div className="bg-white/20 h-[18px]">
          <p className="text-white text-[11px] pl-2 relative top-[1px]">
            NOTABLE INTELLECTUALS IN SCIENCE - BY RELIGION
          </p>
        </div>
        <AmountSpanCanvas
          ui_id="b23455f"
          title="POLYTHEISTS"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          filterReligion={Religion.POLYTHEIST}
          color="#3b82f6"
        />
        <AmountSpanCanvas
          ui_id="b23h44"
          title="CHRISTIANS"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          filterReligion={Religion.CHRISTIAN}
          color="#3b82f6"
        />
        <AmountSpanCanvas
          ui_id="b2f34"
          title="MUSLIMS"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          filterReligion={Religion.MUSLIM}
          color="#3b82f6"
        />
        <AmountSpanCanvas
          ui_id="b23dd4"
          title="JEWS"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          filterReligion={Religion.JEWISH}
          color="#3b82f6"
        />
        <AmountSpanCanvas
          ui_id="b23dd6j64"
          title="ATHISTS"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          filterReligion={Religion.ATHEIST}
          color="#3b82f6"
        />
        <div className="bg-white/20 h-[18px]">
          <p className="text-white text-[11px] pl-2 relative top-[1px]">
            NOTABLE FEMALE INTELLECTUALS
          </p>
        </div>
        <AmountSpanCanvas
          ui_id="bWG5"
          title="EUROPE"
          filterGender={Gender.FEMALE}
          filterRegion={Region.EUROPE}
          color="#f600ff"
        />
        <AmountSpanCanvas
          ui_id="b545h"
          title="ISLAMIC WORLD"
          filterGender={Gender.FEMALE}
          filterRegion={Region.MIDDLE_EAST}
          color="#f600ff"
        />
        <AmountSpanCanvas
          ui_id="bIUSDFKA4"
          title="ALL - INTERESTED IN SCIENCE"
          filterField={Fields.SCIENCE}
          filterGender={Gender.FEMALE}
          color="#f600ff"
        />
      </div>
      <div onMouseMove={handleOutMove} onMouseOver={handleOutMove}>
        <Stats />
        <div className="bg-white/20 h-[18px]">
          <p className="text-white text-[11px] pl-2 relative top-[1px]">CONCLUSIONS</p>
        </div>
        <Conclusions />
        <ProjectBy />
      </div>
    </div>
  )
}

export default Timelines
