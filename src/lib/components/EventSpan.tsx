'use client'

import React from 'react'
import clsx from 'clsx'
import { notableSpanEvents, EventSpanType } from '@/lib/data/events'
import { years, getYearPercentualPosition } from '@/lib/data/time'

type EventSpanProps = {
  name: string
  bgColorClass: string
}

const EventSpan = (props: EventSpanProps) => {
  const { name, bgColorClass } = props
  // @ts-ignore
  const eventData: EventSpanType = notableSpanEvents.find(
    (event: EventSpanType) => event.name === name,
  )

  const startPercent = getYearPercentualPosition(eventData.start)
  const endPercent = getYearPercentualPosition(eventData.end)

  return (
    <div className="flex h-[14px] relative bg-white/10 w-full">
      <div
        className={clsx('h-[14px] absolute top-0', bgColorClass)}
        style={{ left: `${startPercent}%`, width: `${endPercent - startPercent}%` }}
      ></div>
      <p className="text-[10px] pl-2 select-none absolute leading-none top-[2px] uppercase" style={{ left: `${startPercent}%` }}>
        {name}
      </p>
    </div>
  )
}

export default EventSpan
