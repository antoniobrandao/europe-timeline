'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import { Religion, Fields } from '@/lib/constants/enums'

const PeopleTotalsByReligion = () => {
  const { westernPhilosophers } = React.useContext(DataContext)

  const allPolytheistsNumber = westernPhilosophers.filter(
    person => person.religion === Religion.POLYTHEIST,
  ).length
  const allChristiansNumber = westernPhilosophers.filter(
    person => person.religion === Religion.CHRISTIAN,
  ).length
  const allMuslimsNumber = westernPhilosophers.filter(
    person => person.religion === Religion.MUSLIM,
  ).length
  const allJewsNumber = westernPhilosophers.filter(
    person => person.religion === Religion.JEWISH,
  ).length
  const allAtheistsNumber = westernPhilosophers.filter(
    person => person.religion === Religion.ATHEIST,
  ).length

  return (
    <div className='w-full grid grid-cols-5 p-8'>
      <div>
        <p className="text-sm text-white uppercase">Polytheists:</p>
        <p className="text-sm text-white/50">{allPolytheistsNumber}</p>
      </div>

      <div>
        <p className="text-sm text-white uppercase">Christians:</p>
        <p className="text-sm text-white/50">{allChristiansNumber}</p>
      </div>

      <div>
        <p className="text-sm text-white uppercase">Jews:</p>
        <p className="text-sm text-white/50">{allMuslimsNumber}</p>
      </div>

      <div>
        <p className="text-sm text-white uppercase">Muslims:</p>
        <p className="text-sm text-white/50">{allJewsNumber}</p>
      </div>

      <div>
        <p className="text-sm text-white uppercase">Atheists:</p>
        <p className="text-sm text-white/50">{allAtheistsNumber}</p>
      </div>
    </div>
  )
}

export default PeopleTotalsByReligion
