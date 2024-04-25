'use client'
import { useState } from 'react'
import Image from 'next/image'
import { westernPhilosophers, Region, Fields, PhilospherType } from './lib/data'
import { notablePeople } from './lib/data/notable_people'

type YearBarProps = {
  year: number
  philosophersAliveNumber: number
  setYearDisplay: any
  setPhilosophersToDisplay: any
  isScience: boolean
  philosophersAlive: PhilospherType[]
}

{
  /* <div
        key={year}
        className={barStyle}
        onMouseOver={() => {
          setYearDisplay(`${year} (${philosophersAliveNumber})`)
          setPhilosophersToDisplay(philosophersAlive)
        }}
      >
        <div
          className={barInnerStyleScience}
          style={{ height: `${philosophersAliveNumber * 2}px` }}
        ></div>
      </div> */
}

const YearBar = (props: YearBarProps) => {
  const {
    year,
    philosophersAliveNumber,
    setYearDisplay,
    setPhilosophersToDisplay,
    philosophersAlive,
    isScience,
  } = props
  const barStyle = 'w-[1px] bg-white/10 h-[100px] relative hover:bg-white/40'
  const barInnerStyle = !isScience
    ? 'w-[1px] absolute bg-white bottom-0 left-0'
    : 'w-[1px] absolute bg-blue-400 bottom-0 left-0'

  return (
    <div
      key={year}
      className={barStyle}
      onMouseOver={() => {
        setYearDisplay(`${year} (${philosophersAliveNumber})`)
        setPhilosophersToDisplay(philosophersAlive)
      }}
    >
      <div className={barInnerStyle} style={{ height: `${philosophersAliveNumber * 2}px` }}></div>
    </div>
  )
}

export default function Home() {
  const [yearDisplay, setYearDisplay] = useState<any>('0')
  const [philosophersToDisplay, setPhilosophersToDisplay] = useState<PhilospherType[] | null>(null)
  const numPhilosophers = westernPhilosophers.length
  const philosophersFromRegionEurope = westernPhilosophers.filter(
    philosopher => philosopher.region === Region.EUROPE,
  )
  const philosophersFromRegionMiddleEast = westernPhilosophers.filter(
    philosopher => philosopher.region === Region.MIDDLE_EAST,
  )
  const numPhilosophersFromRegionEurope = philosophersFromRegionEurope.length
  const numPhilosophersFromRegionMiddleEast = philosophersFromRegionMiddleEast.length

  console.log('notablePeople.length', notablePeople.length)
  console.log('notablePeople', notablePeople)
  console.log('numPhilosophers', numPhilosophers)
  console.log('numPhilosophersFromRegionMiddleEast', numPhilosophersFromRegionMiddleEast)
  console.log('numPhilosophersFromRegionEurope', numPhilosophersFromRegionEurope)

  const years = Array.from({ length: 1902 - -624 + 1 }, (_, i) => i + -624)
  console.log('years', years)
  const philosophersFromRegionEuropeAlivePerYear = years.map(year => {
    const philosophersAlive = philosophersFromRegionEurope.filter(
      (philosopher: PhilospherType) => philosopher.birth <= year && philosopher.death >= year,
    )
    const philosophersAliveNumber = philosophersAlive.length
    return (
      <YearBar
        year={year}
        philosophersAliveNumber={philosophersAliveNumber}
        setYearDisplay={setYearDisplay}
        setPhilosophersToDisplay={setPhilosophersToDisplay}
        isScience={false}
        philosophersAlive={philosophersAlive}
      />
    )
  })
  const philosophersFromRegionEuropeAlivePerYearScience = years.map(year => {
    const philosophersAlive = philosophersFromRegionEurope.filter(
      (philosopher: PhilospherType) =>
        philosopher.birth <= year &&
        philosopher.death >= year &&
        philosopher.fields.indexOf(Fields.SCIENCE) > -1,
    )
    const philosophersAliveNumber = philosophersAlive.length
    return (
      <YearBar
        isScience={true}
        year={year}
        philosophersAliveNumber={philosophersAliveNumber}
        setYearDisplay={setYearDisplay}
        setPhilosophersToDisplay={setPhilosophersToDisplay}
        philosophersAlive={philosophersAlive}
      />
    )
  })
  const philosophersFromRegionMiddleEastAlivePerYear = years.map(year => {
    const philosophersAlive = philosophersFromRegionMiddleEast.filter(
      (philosopher: PhilospherType) => philosopher.birth <= year && philosopher.death >= year,
    )
    const philosophersAliveNumber = philosophersAlive.length
    return (
      <YearBar
        isScience={false}
        year={year}
        philosophersAliveNumber={philosophersAliveNumber}
        setYearDisplay={setYearDisplay}
        setPhilosophersToDisplay={setPhilosophersToDisplay}
        philosophersAlive={philosophersAlive}
      />
    )
  })
  const philosophersFromRegionMiddleEastAlivePerYearScience = years.map(year => {
    const philosophersAlive = philosophersFromRegionMiddleEast.filter(
      (philosopher: PhilospherType) =>
        philosopher.birth <= year &&
        philosopher.death >= year &&
        philosopher.fields.indexOf(Fields.SCIENCE) > -1,
    )
    const philosophersAliveNumber = philosophersAlive.length
    return (
      <YearBar
        isScience={true}
        year={year}
        philosophersAliveNumber={philosophersAliveNumber}
        setYearDisplay={setYearDisplay}
        setPhilosophersToDisplay={setPhilosophersToDisplay}
        philosophersAlive={philosophersAlive}
      />
    )
  })

  return (
    <main className="flex flex-col gap-4 bg-black text-white">
      <div className="flex flex-col gap-2 bg-black text-white">
        <div className="flex relative">
          <p className="text-xs absolute top-[16px] left-2">All Philosophers (Europe)</p>
          {philosophersFromRegionEuropeAlivePerYear}
        </div>
        <div className="flex relative">
          <p className="text-xs absolute top-[16px] left-2 text-blue-400">
            SCIENCE Philosophers (Europe)
          </p>
          {philosophersFromRegionEuropeAlivePerYearScience}
        </div>
        <div className="flex relative">
          <p className="text-xs absolute top-[16px] left-2">All Philosophers (Middle East)</p>
          {philosophersFromRegionMiddleEastAlivePerYear}
        </div>
        <div className="flex relative">
          <p className="text-xs absolute top-[16px] left-2 text-blue-400">
            SCIENCE Philosophers (Middle East)
          </p>
          {philosophersFromRegionMiddleEastAlivePerYearScience}
        </div>
      </div>
      <div>Year: {yearDisplay}</div>
      <div className="flex flex-wrap gap-4">
        {philosophersToDisplay?.map((philosopher: PhilospherType) => {
          return (
            <div className="mb-2">
              <p className="text-xs">
                {philosopher.name} ({philosopher.birth} to {philosopher.death})
              </p>
              <p className="text-xs">{philosopher.fields.join(', ')}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
