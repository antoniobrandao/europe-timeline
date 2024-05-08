'use client'

import React, { useState } from 'react'
import DataContext from '@/lib/context/DataContext'
import { Religion, Fields } from '@/lib/constants/enums'
import { PhilosopherType } from '@/lib/constants/types'
import { postFix, yearDisplayFormatted } from '@/lib/ui_helpers'
import clsx from 'clsx'

const GlobalStats = () => {
  const { westernPhilosophers } = React.useContext(DataContext)
  //   const [lockedFirstTime, setLockedFirstTime] = useState(false)

  const getStats = (philosophers: PhilosopherType[]) => {
    const num_philosophers = philosophers.length
    const theology =
      philosophers.filter(person => person.fields.includes(Fields.THEOLOGY)).length /
      num_philosophers
    const metaphysics =
      philosophers.filter(person => person.fields.includes(Fields.METAPHYSICS)).length /
      num_philosophers
    const science =
      philosophers.filter(person => person.fields.includes(Fields.SCIENCE)).length /
      num_philosophers
    const politics =
      philosophers.filter(person => person.fields.includes(Fields.POLITICS)).length /
      num_philosophers
    const history =
      philosophers.filter(person => person.fields.includes(Fields.HISTORY)).length /
      num_philosophers
    const philosophy =
      philosophers.filter(person => person.fields.includes(Fields.MIND)).length / num_philosophers
    const music =
      philosophers.filter(person => person.fields.includes(Fields.MUSIC)).length / num_philosophers
    return {
      theology: Math.round(theology * 100),
      metaphysics: Math.round(metaphysics * 100),
      science: Math.round(science * 100),
      politics: Math.round(politics * 100),
      history: Math.round(history * 100),
      philosophy: Math.round(philosophy * 100),
      music: Math.round(music * 100),
    }
  }

  const polytheists = westernPhilosophers.filter(person => person.religion === Religion.POLYTHEIST)
  const christians = westernPhilosophers.filter(person => person.religion === Religion.CHRISTIAN)
  const muslims = westernPhilosophers.filter(person => person.religion === Religion.MUSLIM)
  const jews = westernPhilosophers.filter(person => person.religion === Religion.JEWISH)
  const atheists = westernPhilosophers.filter(person => person.religion === Religion.ATHEIST)

  const polytheistStats = getStats(polytheists)
  const christianStats = getStats(christians)
  const muslimStats = getStats(muslims)
  const jewStats = getStats(jews)
  const atheistStats = getStats(atheists)

  return (
    <div className="w-full pointer-events-none grid grid-cols-5 gap-4 p-4">
      <div>
        <div className="text-lg font-bold">Polytheists</div>
        <div className="text-sm">
          <p>Theology: {polytheistStats.theology}%</p>
          <p>Metaphysics: {polytheistStats.metaphysics}%</p>
          <p>Science: {polytheistStats.science}%</p>
          <p>Politics: {polytheistStats.politics}%</p>
          <p>History: {polytheistStats.history}%</p>
          <p>Philosophy: {polytheistStats.philosophy}%</p>
          <p>Music: {polytheistStats.music}%</p>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Christians</div>
        <div className="text-sm">
          <p>Theology: {christianStats.theology}%</p>
          <p>Metaphysics: {christianStats.metaphysics}%</p>
          <p>Science: {christianStats.science}%</p>
          <p>Politics: {christianStats.politics}%</p>
          <p>History: {christianStats.history}%</p>
          <p>Philosophy: {christianStats.philosophy}%</p>
          <p>Music: {christianStats.music}%</p>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Muslims</div>
        <div className="text-sm">
          <p>Theology: {muslimStats.theology}%</p>
          <p>Metaphysics: {muslimStats.metaphysics}%</p>
          <p>Science: {muslimStats.science}%</p>
          <p>Politics: {muslimStats.politics}%</p>
          <p>History: {muslimStats.history}%</p>
          <p>Philosophy: {muslimStats.philosophy}%</p>
          <p>Music: {muslimStats.music}%</p>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Jews</div>
        <div className="text-sm">
          <p>Theology: {jewStats.theology}%</p>
          <p>Metaphysics: {jewStats.metaphysics}%</p>
          <p>Science: {jewStats.science}%</p>
          <p>Politics: {jewStats.politics}%</p>
          <p>History: {jewStats.history}%</p>
          <p>Philosophy: {jewStats.philosophy}%</p>
          <p>Music: {jewStats.music}%</p>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold">Atheists</div>
        <div className="text-sm">
          <p>Theology: {atheistStats.theology}%</p>
          <p>Metaphysics: {atheistStats.metaphysics}%</p>
          <p>Science: {atheistStats.science}%</p>
          <p>Politics: {atheistStats.politics}%</p>
          <p>History: {atheistStats.history}%</p>
          <p>Philosophy: {atheistStats.philosophy}%</p>
          <p>Music: {atheistStats.music}%</p>
        </div>
      </div>
    </div>
  )
}

export default GlobalStats
