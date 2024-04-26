'use client'
import React from 'react'
import DataContext from '@/lib/context/DataContext'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
import { years } from '@/lib/data/time'
import { Fields, Region } from '@/lib/data'

type AmountSpanProps = {
  title: string
  filterRegion?: Region
  filterField?: Fields
  bgColorClass?: string
}

const AmountSpan = (props: AmountSpanProps) => {
  const { title, filterRegion, filterField, bgColorClass } = props
  const { westernPhilosophers, setMainStatusDisplay, setPhilosophersToDisplay } =
    React.useContext(DataContext)
  let arrayToUse = westernPhilosophers
  if (filterRegion) {
    arrayToUse = arrayToUse.filter(person => person.region === filterRegion)
  }
  if (filterField) {
    arrayToUse = arrayToUse.filter(person => person.fields.indexOf(filterField) > -1)
  }

  const barStyle = 'w-[1px] bg-white/5 h-[100px] relative hover:bg-white/40'
  const barInnerStyle = clsx(bgColorClass || 'bg-white', 'w-[1px] absolute bottom-0 left-0')

  const barsJsx = years.map(year => {
    const people = arrayToUse.filter(
      philosopher => philosopher.birth <= year && philosopher.death >= year,
    )
    const peopleNumber = people.length
    return (
      <div
        key={nanoid() + `${year} (${peopleNumber})`}
        className={barStyle}
        onMouseOver={() => {
          setMainStatusDisplay(`${year} (${peopleNumber})`)
          setPhilosophersToDisplay(people)
        }}
      >
        <div className={barInnerStyle} style={{ height: `${peopleNumber * 2}px` }}></div>
      </div>
    )
  })

  return (
    <div className="flex relative">
      <p className="text-xs absolute top-[16px] left-2">{title}</p>
      {barsJsx}
    </div>
  )
}

export default AmountSpan
