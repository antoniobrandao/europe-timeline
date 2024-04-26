'use client'

import React from 'react'
import clsx from 'clsx'
import { notableEvents } from '@/lib/data/events'
import { years } from '@/lib/data/time'

type EventSpanProps = {
  name: string
  bgColorClass: string
}

const EventSpan = (props: EventSpanProps) => {
  const { name, bgColorClass } = props
  const eventData = notableEvents.find(event => event.name === name)

  const barsJsx = years.map((year: number, index: number) => {
    const eventActive =
      // @ts-ignore
      eventData.start <= year && eventData.end >= year
      // console.log('eventActive', eventActive)
    const barBaseStyle = 'w-[1px] !h-[20px] overflow-hidden'
    const barInactiveStyle = 'bg-white/10 hover:bg-white/40'
    const barActiveStyle = bgColorClass
    const barStyle = clsx(
      barBaseStyle,
      eventActive ? barActiveStyle : barInactiveStyle,
    )
    return <div key={index} className={barStyle} />
  })

  return <div className="flex w-full border h-[40px]">{barsJsx}</div>
}

export default EventSpan
