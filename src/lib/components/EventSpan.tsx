'use client'

import React from 'react'
import clsx from 'clsx'
import { DisplayContentType, EventSpanType } from '@/lib/constants/types'
import DataContext from '@/lib/context/DataContext'
import { notableSpanEvents  } from '@/lib/data/events'
import { getYearPercentualPosition } from '@/lib/data/time'

type EventSpanProps = {
  ui_id: string
  bgColorClass: string
}

const EventSpan = (props: EventSpanProps) => {
  const { setDisplayContent, displayContent } = React.useContext(DataContext)
  const { ui_id, bgColorClass } = props
  // @ts-ignore
  const eventData: EventSpanType = notableSpanEvents.find(
    (event: EventSpanType) => event.id === ui_id,
  )

  const startPercent = getYearPercentualPosition(eventData.start)
  const endPercent = getYearPercentualPosition(eventData.end)

  const displayContentFormat: DisplayContentType = {
    ui_id: ui_id,
    type: 'event_span',
    eventData: eventData,
  }

  const rootStyle = clsx(
    'flex w-full !h-[14px] overflow-hidden relative bg-white/10 mb-1',
    // @ts-ignore
    ui_id && displayContent.ui_id && displayContent.ui_id === ui_id ? 'bg-white/30' : '',
  )

  return (
    <div className={rootStyle} onMouseOver={() => setDisplayContent(displayContentFormat)}>
      <div
        className={clsx('!h-[14px] absolute top-0', bgColorClass)}
        style={{ left: `${startPercent}%`, width: `${endPercent - startPercent}%` }}
      ></div>
      <p className="text-[10px] pl-2 select-none absolute leading-none top-[2px] uppercase" style={{ left: `${startPercent}%` }}>
        {eventData.name}
      </p>
    </div>
  )
}

export default EventSpan
