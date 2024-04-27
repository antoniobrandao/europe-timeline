'use client'

import React, { useEffect, useState, useRef } from 'react'
import { EventId, Region, Fields } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import AmountSpanCanvas from '@/lib/components/AmountSpanCanvas'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'

const Timelines = () => {
  const { year, xCoord, setXCoord, locked, setLocked } = React.useContext(DataContext)
  // const [listening, setListening] = useState(false)
  const areaRef = useRef<HTMLDivElement | null>(null)
  
  // useEffect(() => {
  //   const handleWindowMouseMove = (event: any) => {
  //     if (!locked) {
  //       const clientX = event.clientX
        
  //     }
  //   }

  //   if (!listening && areaRef.current) {
  //     setListening(true)
  //     areaRef.current.addEventListener('mousemove', handleWindowMouseMove)
  //   }
  //   // return () => {
  //   //   areaRef?.current?.removeEventListener('mousemove', handleWindowMouseMove)
  //   // }
  // }, [locked])

  return (
    <div
      ref={areaRef}
      className="flex flex-col gap-1 bg-black text-white relative"
      onClick={() => setLocked(!locked)}
      onMouseMove={(e) => !locked ? setXCoord(e.clientX) : console.log('locked')}
    >
      <div className="absolute text-white top-[-26px]" style={{ left: `${xCoord}px` }}>
        {year}
      </div>
      <div
        className="absolute bg-white/30 w-[1px] h-full top-0 z-50"
        style={{ left: `${xCoord}px` }}
      ></div>
      <EventSpan ui_id={EventId.ROMAN_REPUBLIC} bgColorClass="bg-red-400" />
      <EventSpan ui_id={EventId.ROMAN_EMPIRE} bgColorClass="bg-red-400" />
      <EventYear ui_id={EventId.CHRISTIANITY_APPEARS} />
      <EventYear ui_id={EventId.ROMAN_EMPIRE_ADOPTS_CHRISTIANITY} />
      <EventYear ui_id={EventId.CHRISTIANITY_MADE_OFFICAL_STATE_RELIGION} />
      <EventYear ui_id={EventId.CHRISTIANITY_BANS_OLYMPIC_GAMES} />
      <EventYear ui_id={EventId.ALTAR_OF_VICTORY_REMOVED} />
      <EventYear ui_id={EventId.JUSTINIAN_CLOSES_ACADEMY_OF_ATHENS} />
      <EventYear ui_id={EventId.FALL_OF_CONSTANTINOPLE} />
      <EventSpan ui_id={EventId.CHRISTIAN_DOMINATION_INSTITUTIONS} bgColorClass="bg-red-600" />
      <EventSpan ui_id={EventId.DARK_AGES} bgColorClass="bg-red-800" />
      <EventSpan ui_id={EventId.INQUISITION} bgColorClass="bg-red-800" />
      <EventSpan ui_id={EventId.ISLAMIC_GOLDEN_AGE} bgColorClass="bg-yellow-600" />
      <EventSpan ui_id={EventId.CAROLOGIAN_RENAISSANCE} bgColorClass="bg-blue-500" />
      <EventSpan ui_id={EventId.TWELVE_CENTURY_RENAISSANCE} bgColorClass="bg-blue-500" />
      <EventSpan ui_id={EventId.ITALIAN_RENAISSANCE} bgColorClass="bg-blue-500" />
      <AmountSpanCanvas ui_id="b1" title="All Philosophers (Europe)" filterRegion={Region.EUROPE} />
      <AmountSpanCanvas
        ui_id="b2"
        title="SCIENCE Philosophers (Europe)"
        filterRegion={Region.EUROPE}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      />
      <AmountSpanCanvas
        ui_id="b3"
        title="All Philosophers (Middle East)"
        filterRegion={Region.MIDDLE_EAST}
        color="#ca8a03"
      />
      <AmountSpanCanvas
        ui_id="b4"
        title="SCIENCE Philosophers (Middle East)"
        filterRegion={Region.MIDDLE_EAST}
        filterField={Fields.SCIENCE}
        color="#3b82f6"
      />
    </div>
  )
}

export default Timelines
