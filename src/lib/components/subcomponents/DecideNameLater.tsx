'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import { Religion, Fields } from '@/lib/constants/enums'

type Props = {
  interest: Fields
}

const DecideNameLater = (props: Props) => {
  const { westernPhilosophers } = React.useContext(DataContext)
  const { interest } = props
  //   const [lockedFirstTime, setLockedFirstTime] = useState(false)

  const allRelevantPeople = westernPhilosophers.filter(person => {
    return person.fields.includes(interest)
  })

  const allPolytheistsInterestedInField = allRelevantPeople.filter(
    person => person.religion === Religion.POLYTHEIST,
  )
  const allChristiansInterestedInField = allRelevantPeople.filter(
    person => person.religion === Religion.CHRISTIAN,
  )
  const allMuslimsInterestedInField = allRelevantPeople.filter(
    person => person.religion === Religion.MUSLIM,
  )
  const allJewsInterestedInField = allRelevantPeople.filter(
    person => person.religion === Religion.JEWISH,
  )
  const allAtheistsInterestedInField = allRelevantPeople.filter(
    person => person.religion === Religion.ATHEIST,
  )

  const polytheistPercentage = Math.round(
    (allPolytheistsInterestedInField.length * 100) / allRelevantPeople.length,
  )
  const christianPercentage = Math.round(
    (allChristiansInterestedInField.length * 100) / allRelevantPeople.length,
  )
  const jewishPercentage = Math.round(
    (allJewsInterestedInField.length * 100) / allRelevantPeople.length,
  )
  const muslimPercentage = Math.round(
    (allMuslimsInterestedInField.length * 100) / allRelevantPeople.length,
  )
  const atheistPercentage = Math.round(
    (allAtheistsInterestedInField.length * 100) / allRelevantPeople.length,
  )

  return (
    <div>
      <div className="text-sm uppercase">{interest}</div>
      <div>
        <p className="text-sm text-white/50">Polytheists: {polytheistPercentage}%</p>
        <p className="text-sm text-white/50">Christians: {christianPercentage}%</p>
        <p className="text-sm text-white/50">Jews: {jewishPercentage}%</p>
        <p className="text-sm text-white/50">Muslims: {muslimPercentage}%</p>
        <p className="text-sm text-white/50">Atheists: {atheistPercentage}%</p>
      </div>
    </div>
  )
}

export default DecideNameLater
