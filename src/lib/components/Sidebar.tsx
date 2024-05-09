'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import { EventType } from '@/lib/constants/enums'
import { DisplayContentType } from '@/lib/constants/types'
import PeopleDisplay from '@/lib/components/PeopleDisplay'
import { getFieldTextColor } from '@/lib/ui_helpers'
import { yearDisplayFormatted } from '@/lib/ui_helpers'
import clsx from 'clsx'

const Sidebar = () => {
  const { displayContent, caretHidden } = React.useContext(DataContext)
  // let philosophersToDisplay
  let eventYearToDisplay
  let eventSpanToDisplay
  let descriptionToDisplay
  let linkToDisplay

  const dc: DisplayContentType | null = displayContent

  if (!dc) return null
  // @ts-ignore
  const data = dc.data
  // @ts-ignore
  const type = dc.type
  if (!data) return null
  // @ts-ignore
  // const description = data.description
  // @ts-ignore
  const link = data.link

  let filtersJSX
  let eventYearJSX
  let eventSpanJSX
  if (type === EventType.PEOPLE_LIST) {
    // @ts-ignore
    const region = data.region || null
    // @ts-ignore
    const field = data.field || null
    // @ts-ignore
    const gender = data.gender || null
    filtersJSX =
      region || field || gender ? (
        <div className="flex gap-2">
          {region && <p className="text-sm text-white">{region}</p>}
          {field && <p className={clsx('text-sm', getFieldTextColor(field))}>{field}</p>}
          {!field && <p className="text-sm text-white/40">(all fields)</p>}
          {gender && <p className="text-sm text-violet-400">{`(${gender.toLowerCase()} only)`}</p>}
          {!region && <p className="text-sm text-white/40">(ALL REGIONS)</p>}
        </div>
      ) : null
  }

  if (type === EventType.EVENT_YEAR) {
    // @ts-ignore
    eventYearToDisplay = data
    // @ts-ignore
    const year = eventYearToDisplay.year
    // @ts-ignore
    const name = eventYearToDisplay.name
    eventYearJSX = eventYearToDisplay ? (
      <div>
        <p className="text-white">{yearDisplayFormatted(year)}</p>
        <p className="text-white">{name}</p>
      </div>
    ) : null
  }

  if (type === EventType.EVENT_SPAN) {
    // @ts-ignore
    eventSpanToDisplay = data
    // @ts-ignore
    const start = eventSpanToDisplay.start
    // @ts-ignore
    const end = eventSpanToDisplay.end
    // @ts-ignore
    const name = eventSpanToDisplay.name
    eventSpanJSX = eventSpanToDisplay ? (
      <div>
        <p className="text-white">
          {`${yearDisplayFormatted(start)} to ${yearDisplayFormatted(end)}`}
        </p>
        <p className="text-white">{name}</p>
      </div>
    ) : null
  }

  if (link) {
    linkToDisplay = (
      // @ts-ignore
      <a
        href={data.link}
        target="_blank"
        className="block bg-[#1f1f1f] rounded-[4px] border border-[#333] p-2 hover:bg-[#333] hover:border-[#999] transition-colors duration-300 text-sm text-center"
      >
        MORE INFO
      </a>
    )
  }

  // @ts-ignore
  if (data.description) {
    // @ts-ignore
    const desc = data.description

    if (desc.length && desc.map) {
      descriptionToDisplay = (
        <div>
          {desc.map((desc: string, index: number) => (
            <p
              key={desc.charAt(0) ? desc.charAt(0) + index : index}
              className="text-sm leading-[150%] text-[#999] mb-3"
            >
              {desc}
            </p>
          ))}
        </div>
      )
    } else {
      descriptionToDisplay = <p className="text-sm leading-[150%] text-[#999]">{desc}</p>
    }
  }

  return (
    <div
      id="sidebar"
      style={{ height: 'calc(100vh - 28px)' }}
      className="w-full relative top-[28px] border-l border-white/10 m-0 bg-[#171717] col-span-3 p-4 flex flex-col gap-4 overflow-auto"
    >
      {caretHidden ? null : (
        <div className="flex flex-col gap-2">
          {filtersJSX}
          {eventYearJSX}
          {eventSpanJSX}
          {data.people && <PeopleDisplay philosophersToDisplay={data.people} />}
          {descriptionToDisplay}
          {linkToDisplay}
        </div>
      )}
    </div>
  )
}

export default Sidebar
