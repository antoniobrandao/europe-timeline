'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import PeopleDisplay from '@/lib/components/PeopleDisplay'
import { Fields } from '@/lib/constants/enums'
import clsx from 'clsx'

const getFieldTextColor = (field: Fields) => {
  switch (field) {
    case Fields.METAPHYSICS:
      return 'text-purple-500'
    case Fields.POLITICS:
      return 'text-red-500'
    case Fields.SCIENCE:
      return 'text-blue-400'
    case Fields.THEOLOGY:
      return 'text-yellow-500'
    case Fields.MIND:
      return 'text-green-500'
    case Fields.HISTORY:
      return 'text-pink-500'
    case Fields.MIND:
      return 'text-red-500'
  }
}
const Sidebar = () => {
  const { year, displayContent, westernPhilosophers } = React.useContext(DataContext)
  let philosophersToDisplay
  let eventYearToDisplay
  let eventSpanToDisplay

  // @ts-ignore
  const region = displayContent.region || null
  // @ts-ignore
  const field = displayContent.field || null
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

  return (
    <div className="min-w-[320px] relative border-l border-white/10 m-0 bg-[#222] p-4 flex flex-col gap-4">
      {/* <p className="text-white">Year: {year}</p> */}
      {/* <MainDisplay /> */}
      {/* @ts-ignore */}
      {region && (
        <div className="flex gap-2">
          <p className="text-sm text-white">{region}</p>
          {field && (
            <p className={clsx('text-white text-sm', getFieldTextColor(field))}>({field})</p>
          )}
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
    </div>
  )
}

export default Sidebar
