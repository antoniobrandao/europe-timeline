'use client'

import React, { useEffect, useState, useRef } from 'react'
import { EventId, Region, Fields, Gender } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import AmountSpanCanvas from '@/lib/components/AmountSpanCanvas'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'

const Timelines = () => {
  const { setXCoord, setLocked, locked } = React.useContext(DataContext)
  const areaRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={areaRef}
      className="col-span-9 bg-black text-white relative top-[28px] overflow-y-auto overflow-x-hidden"
      style={{ height: 'calc(100vh - 28px)' }}
      onClick={() => setLocked(!locked)}
      onMouseMove={e => setXCoord(e.clientX)}
    >
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-1 relative top-[1px]">NOTABLE EVENTS</p>
      </div>
      <EventSpan ui_id={EventId.ROMAN_REPUBLIC} bgColorClass="bg-red-600" />
      <EventSpan ui_id={EventId.ROMAN_EMPIRE} bgColorClass="bg-red-600" />
      <EventSpan ui_id={EventId.PAX_ROMANA} bgColorClass="bg-red-600" />
      <EventYear ui_id={EventId.CHRISTIANITY_APPEARS} />
      <EventSpan ui_id={EventId.AMBROSE_OF_MILAN} bgColorClass="bg-red-600" />
      <EventYear ui_id={EventId.CHRISTIANITY_BECOMES_MANDATORY} />
      {/* <EventYear ui_id={EventId.CHRISTIANITY_MADE_OFFICAL_STATE_RELIGION} /> */}
      <EventYear ui_id={EventId.CHRISTIANITY_BANS_OLYMPIC_GAMES} />
      <EventYear ui_id={EventId.ALTAR_OF_VICTORY_REMOVED} />
      <EventYear ui_id={EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS} />
      <EventSpan ui_id={EventId.CHRISTIAN_DOMINATION_INSTITUTIONS} bgColorClass="bg-red-800" />
      <EventSpan ui_id={EventId.DARK_AGES} bgColorClass="bg-red-900" />
      <EventSpan ui_id={EventId.CHRISTIAN_INQUISITION} bgColorClass="bg-red-900" />
      <EventSpan ui_id={EventId.WITCH_HUNTS} bgColorClass="bg-red-900" />
      <EventYear ui_id={EventId.PROTESTANT_REFORMATION} />
      <EventSpan ui_id={EventId.ISLAMIC_GOLDEN_AGE} bgColorClass="bg-yellow-700" />
      <EventSpan ui_id={EventId.CAROLOGIAN_RENAISSANCE} bgColorClass="bg-blue-500" />
      <EventSpan ui_id={EventId.TWELVE_CENTURY_RENAISSANCE} bgColorClass="bg-blue-500" />
      <EventYear ui_id={EventId.FALL_OF_CONSTANTINOPLE} />
      <EventYear ui_id={EventId.MEDICI_REOPENS_PLATONIC_ACADEMY} />
      <EventSpan ui_id={EventId.ITALIAN_RENAISSANCE} bgColorClass="bg-blue-500" />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-1 relative top-[1px]">NOTABLE PHILOSOPHERS - EUROPE</p>
      </div>
      <AmountSpanCanvas ui_id="b1" title="All" filterRegion={Region.EUROPE} />
      <AmountSpanCanvas
        ui_id="b2"
        title="Science only"
        filterRegion={Region.EUROPE}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b5"
        title="Female only"
        filterGender={Gender.FEMALE}
        color="#00ff00"
      />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-1 relative top-[1px]">NOTABLE PHILOSOPHERS - MIDDLE EAST</p>
      </div>
      <AmountSpanCanvas
        ui_id="b3"
        title="All"
        filterRegion={Region.MIDDLE_EAST}
        color="#ca8a03"
      />
      <AmountSpanCanvas
        ui_id="b4"
        title="Science only"
        filterRegion={Region.MIDDLE_EAST}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b55"
        title="Female only"
        filterRegion={Region.MIDDLE_EAST}
        filterGender={Gender.FEMALE}
        color="#00ff00"
      />
      <div className="w-full flex justify-center h-[40] mt-20 mb-4 text-white/40">
        <p className="text-xs" style={{ zIndex: '9999999' }}>
          A project by{' '}
          <a
            href="https://www.antoniobrandao.com"
            target="_blank"
            className="text-white/40 hover:text-white/70"
          >
            Antonio Brandao
          </a>
        </p>
      </div>
    </div>
  )
}

export default Timelines
