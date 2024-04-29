'use client'

import React from 'react'
import { notableYearEvents } from '@/lib/data/events'
import { DisplayContentType, EventYearType } from '@/lib/constants/types'
import DataContext from '@/lib/context/DataContext'
import { getYearPercentualPosition } from '@/lib/data/time'
import clsx from 'clsx'

type EventYearProps = {
  ui_id: string
}

const EventYear = (props: EventYearProps) => {
  const { setDisplayContent, displayContent } = React.useContext(DataContext)
  const { ui_id } = props
  // @ts-ignore
  const eventData: EventYearType = notableYearEvents.find(
    // @ts-ignore
    (event: EventYearType) => event.id === ui_id,
  )

  const startPercent = getYearPercentualPosition(eventData.year)

  const displayContentFormat: DisplayContentType = {
    ui_id: ui_id,
    type: 'event_year',
    eventData: eventData,
  }

  const rootStyle = clsx(
    'flex h-[14px] relative bg-white/10 w-full mb-1',
    // @ts-ignore
    ui_id && displayContent.ui_id && displayContent.ui_id === ui_id ? 'bg-white/30' : '',
  )

  const barStyle = 'bg-white w-[2px] h-[14px] absolute top-0'

  return (
    <div className={rootStyle} onMouseOver={() => setDisplayContent(displayContentFormat)}>
      <div
        className={barStyle}
        style={{ left: `${startPercent}%` }}
      ></div>
      <p
        className="text-[10px] uppercase pl-2 select-none absolute leading-none top-[2px] truncate"
        style={{ left: `calc(${startPercent}% + 2px)` }}
      >
        {eventData.name}
      </p>
    </div>
  )
}

export default EventYear
