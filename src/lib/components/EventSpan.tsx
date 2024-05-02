'use client'

import React, { useRef } from 'react'
import clsx from 'clsx'
import type { DisplayContentType, EventSpanType } from '@/lib/constants/types'
import { EventType } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import { notableSpanEvents  } from '@/lib/data/events'
import { getYearPercentualPosition } from '@/lib/data/time'

type EventSpanProps = {
  ui_id: string
  bgColorClass: string
}

const EventSpan = (props: EventSpanProps) => {
  const { locked, displayContent, setDisplayContent } = React.useContext(DataContext)
  const { ui_id, bgColorClass } = props
  const eventSpanElRef = useRef()
  // @ts-ignore
  const eventData: EventSpanType = notableSpanEvents.find(
    (event: EventSpanType) => event.id === ui_id,
  )

  const startPercent = getYearPercentualPosition(eventData.start)
  const endPercent = getYearPercentualPosition(eventData.end)

  // @ts-ignore
  // const selected = ui_id && displayContent.ui_id && displayContent.ui_id === ui_id
  const selected = displayContent && displayContent.data && displayContent.data.name && displayContent.data.name === eventData.name
  const rootStyle = clsx(
    'flex w-full !h-[12px] overflow-hidden relative bg-white/10 mb-0.5',
    selected ? 'bg-white/30' : '',
  )

  const handleHover = () => {
    if(!locked) {
      const content: DisplayContentType = {
        data: eventData,
        type: EventType.EVENT_SPAN,
        ref: eventSpanElRef
      }
      setDisplayContent(content)
    }
  }

  return (
    <div className={rootStyle} onMouseOver={handleHover}>
      <div
        // @ts-ignore
        ref={eventSpanElRef}
        className={clsx('!h-[12px] absolute top-0', bgColorClass)}
        style={{ left: `${startPercent}%`, width: `${endPercent - startPercent}%` }}
      ></div>
      <p className={clsx(selected ? 'text-white' : 'text-white/80', "text-[10px] pl-1 select-none absolute leading-none top-[1px] uppercase truncate")} style={{ left: `${startPercent}%` }}>
        {eventData.name}
      </p>
    </div>
  )
}

export default EventSpan
