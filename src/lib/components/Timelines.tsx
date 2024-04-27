'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Region, Fields } from '@/lib/data'
import { totalYears, getYearFromPercentage } from '@/lib/data/time'
import DataContext from '@/lib/context/DataContext'
import AmountSpanCanvas from '@/lib/components/AmountSpanCanvas'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'

const Timelines = () => {
  const { year, setYear } = React.useContext(DataContext)
  const [listening, setListening] = useState(false)
  const [xCoord, setXCoord] = useState(0)
  const [areaWidth, setAreaWidth] = useState(0)
  const areaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      // setCoords({
      //   x: event.clientX,
      //   y: event.clientY,
      // })

      const clientX = event.clientX
      setXCoord(clientX)
      // console.log('areaWidth', areaWidth)
      // console.log('clientX', clientX)
      const percentage = clientX / (window.innerWidth - 320)
      // console.log('percentage', percentage)
      // use percentage to get year from totalYears
      const year = getYearFromPercentage(percentage)
      console.log('year', year)
      setYear(year)
      // console.log('areaRef?.current?.clientWidth', areaRef?.current?.clientWidth)
      // @ts-ignore
      setAreaWidth(areaRef?.current?.clientWidth)
    }

    if (areaWidth === 0 && areaRef.current) {
      // @ts-ignore
      setTimeout(() => setAreaWidth(areaRef?.current?.clientWidth), 1000)
    }
    if (!listening && areaRef.current) {
      setListening(true)
      areaRef.current.addEventListener('mousemove', handleWindowMouseMove)
    }

    return () => {
      areaRef?.current?.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  return (
    <div ref={areaRef} className="flex flex-col gap-1 bg-black text-white relative">
      <div className="absolute text-white top-[-26px]" style={{ left: `${xCoord}px` }}>
        {year}
      </div>
      <div
        className="absolute bg-white/30 w-[1px] h-full top-0 z-50"
        style={{ left: `${xCoord}px` }}
      ></div>
      <EventSpan ui_id="a1" name="Roman Republic" bgColorClass="bg-red-400" />
      <EventSpan ui_id="a2" name="Roman Empire" bgColorClass="bg-red-400" />
      <EventYear ui_id="a3" name="Christianity appears" />
      <EventYear ui_id="a4" name="Roman Empire adopts Christianity" />
      <EventYear ui_id="a5" name="Christianity made the official religion of the Empire" />
      <EventYear ui_id="a6" name="Christianity bans the Olympic games" />
      <EventYear ui_id="a7" name="Altar of Victory removed" />
      <EventYear ui_id="a8" name="Justinian closes the Academy of Athens" />
      <EventSpan ui_id="a9" name="Christian Domination of Institutions" bgColorClass="bg-red-600" />
      <EventSpan ui_id="a10" name="Dark Ages" bgColorClass="bg-red-800" />
      <EventSpan ui_id="a11" name="Islamic Golden Age" bgColorClass="bg-yellow-600" />
      <EventSpan ui_id="a12" name="Carolingian Renaissance" bgColorClass="bg-blue-500" />
      <EventSpan ui_id="a13" name="12th Century Renaissance" bgColorClass="bg-blue-500" />
      <EventSpan ui_id="a14" name="Italian Renaissance" bgColorClass="bg-blue-500" />
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
