'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import PeopleDisplay from '@/lib/components/PeopleDisplay'
import { getFieldTextColor } from '@/lib/ui_helpers'
import clsx from 'clsx'

const Sidebar = () => {
  const { year, displayContent, westernPhilosophers } = React.useContext(DataContext)
  let philosophersToDisplay
  let eventYearToDisplay
  let eventSpanToDisplay
  let descriptionToDisplay
  let linkToDisplay

  // @ts-ignore
  const region = displayContent.region || null
  // @ts-ignore
  const field = displayContent.field || null
  // @ts-ignore
  const gender = displayContent.gender || null
  // @ts-ignore
  const type = displayContent.type || null

  if (displayContent && type === 'people_list') {
    let people = westernPhilosophers
    people = people.filter(philosopher => philosopher.birth <= year && philosopher.death >= year)
    if (region) {
      people = people.filter(person => person.region === region)
    }
    if (field) {
      people = people.filter(person => person.fields.indexOf(field) > -1)
    }
    if (gender) {
      people = people.filter(person => person.gender === gender)
    }
    philosophersToDisplay = people
  }

  // @ts-ignore
  if (displayContent && type === 'event_year') {
    // @ts-ignore
    eventYearToDisplay = displayContent.eventData
  }

  // @ts-ignore
  if (displayContent && type === 'event_span') {
    // @ts-ignore
    eventSpanToDisplay = displayContent.eventData
  }

  // @ts-ignore
  if (displayContent && displayContent.eventData && displayContent.eventData.link) {
    linkToDisplay = (
      // @ts-ignore
      <a href={displayContent.eventData.link} target="_blank" className='block bg-[#1f1f1f] rounded-[4px] border border-[#333] p-2 hover:bg-[#333] hover:border-[#999] transition-colors duration-300 text-sm text-center'>
        MORE INFO
      </a>
    )
  }

  // @ts-ignore
  if (displayContent.eventData && displayContent.eventData.description) {
    // @ts-ignore
    const desc = displayContent.eventData.description

    if (desc.length && desc.map) {
      descriptionToDisplay = (
        <div>
          {desc.map((desc: string) => (
            <p className="text-sm leading-[150%] text-[#999] mb-3">{desc}</p>
          ))}
        </div>
      )
    } else {
      descriptionToDisplay = <p className="text-sm leading-[150%] text-[#999]">{desc}</p>
    }
  }

  return (
    <div
      style={{ height: 'calc(100vh - 28px)' }}
      className="min-w-[320px] max-w-[320px] relative top-[28px] border-l border-white/10 m-0 bg-[#171717] p-4 flex flex-col gap-4 overflow-auto"
    >
      <div className="flex flex-col gap-2">
        {region && (
          <div className="flex gap-2">
            <p className="text-sm text-white">{region}</p>
            {field && <p className={clsx('text-sm', getFieldTextColor(field))}>({field})</p>}
          </div>
        )}
        {philosophersToDisplay && <PeopleDisplay philosophersToDisplay={philosophersToDisplay} />}
        {eventYearToDisplay && (
          <div>
            <p className="text-white">{eventYearToDisplay.year}</p>
            <p className="text-white">{eventYearToDisplay.name}</p>
          </div>
        )}
        {eventSpanToDisplay && (
          <div>
            <p className="text-white">
              {eventSpanToDisplay.start} to {eventSpanToDisplay.end}
            </p>
            <p className="text-white">{eventSpanToDisplay.name}</p>
          </div>
        )}
        {descriptionToDisplay}
        {linkToDisplay}
      </div>
    </div>
  )
}

export default Sidebar
