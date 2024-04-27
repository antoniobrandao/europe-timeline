'use client'

import React from 'react'
import { notableYearEvents, EventYearType } from '@/lib/data/events'
import { getYearPercentualPosition } from '@/lib/data/time'

type EventYearProps = {
  name: string
}

const EventYear = (props: EventYearProps) => {
  const { name } = props
  // @ts-ignore
  const eventData: EventYearType = notableYearEvents.find(
      // @ts-ignore
    (event: EventYearType) => event.name === name,
  )

  const startPercent = getYearPercentualPosition(eventData.year)

  return (
    <div className="flex h-[14px] relative bg-white/10 w-full">
      <div
        className={'bg-white w-[2px] h-[14px] absolute top-0'}
        style={{ left: `${startPercent}%` }}
      ></div>
      <p
        className="text-[10px] uppercase pl-2 select-none absolute leading-none top-[2px]"
        style={{ left: `calc(${startPercent }% + 2px)` }}
      >
        {name}
      </p>
    </div>
  )
}

export default EventYear
