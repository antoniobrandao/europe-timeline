'use client'

import React from 'react'
import { notableYearEvents } from '@/lib/data/events'
import { DisplayContentType, EventYearType } from '@/lib/constants/types'
import { EventType } from '@/lib/constants/enums'
import DataContext from '@/lib/context/DataContext'
import { getYearPercentualPosition } from '@/lib/data/time'
import clsx from 'clsx'

type EventYearProps = {
  ui_id: string
}

const EventYear = (props: EventYearProps) => {
  const { locked, setDisplayContent, displayContent } = React.useContext(DataContext)
  const { ui_id } = props
  // @ts-ignore
  const eventData: EventYearType = notableYearEvents.find(
    // @ts-ignore
    (event: EventYearType) => event.id === ui_id,
  )

  const startPercent = getYearPercentualPosition(eventData.year)

  // @ts-ignore
  // const selected = ui_id && displayContent.ui_id && displayContent.ui_id === ui_id
  const selected = displayContent && displayContent.data && displayContent.data.name && displayContent.data.name === eventData.name
  const rootStyle = clsx(
    'flex h-[13px] relative bg-white/10 w-full mb-0.5',
    selected ? 'bg-white/30' : '',
  )

  const barStyle = 'bg-white w-[2px] h-[13px] absolute top-0'

  const handleHover = () => {
    if(!locked) {
      const content: DisplayContentType = {
        data: eventData,
        type: EventType.EVENT_YEAR
      }
      setDisplayContent(content)
    }
  }

  return (
    <div className={rootStyle} onMouseOver={handleHover}>
      <div
        className={barStyle}
        style={{ left: `${startPercent}%` }}
      ></div>
      <p
        className={clsx(selected ? 'text-white' : 'text-white/80', "text-[10px] uppercase pl-2 select-none absolute leading-none top-[2px] truncate")}
        style={{ left: `calc(${startPercent}% + 2px)` }}
      >
        {eventData.name}
      </p>
    </div>
  )
}

export default EventYear
