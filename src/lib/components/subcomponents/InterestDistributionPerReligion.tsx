'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import { Religion, Fields } from '@/lib/constants/enums'

type Props = {
  religion: Religion
}

const InterestDistributionPerReligion = (props: Props) => {
  const { westernPhilosophers } = React.useContext(DataContext)
  const { religion } = props
  //   const [lockedFirstTime, setLockedFirstTime] = useState(false)

  const allRelevantPeople = westernPhilosophers.filter(person => {
    return person.religion === religion
  })

  const allRelevantPeopleInterestedInScience = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.SCIENCE)
  })
  const allRelevantPeopleInterestedInHistory = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.HISTORY)
  })
  const allRelevantPeopleInterestedInMetaphysics = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.METAPHYSICS)
  })
  const allRelevantPeopleInterestedInPhilosophy = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.MIND)
  })
  const allRelevantPeopleInterestedInMusic = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.MUSIC)
  })
  const allRelevantPeopleInterestedInPolitics = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.POLITICS)
  })
  const allRelevantPeopleInterestedInSpirituality = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.SPIRITUALITY)
  })
  const allRelevantPeopleInterestedInTheology = allRelevantPeople.filter(person => {
    return person.fields.includes(Fields.THEOLOGY)
  })

  const sciencePercentage = Math.round(
    (allRelevantPeopleInterestedInScience.length * 100) / allRelevantPeople.length,
  )
  const historyPercentage = Math.round(
    (allRelevantPeopleInterestedInHistory.length * 100) / allRelevantPeople.length,
  )
  const metaphysicsPercentage = Math.round(
    (allRelevantPeopleInterestedInMetaphysics.length * 100) / allRelevantPeople.length,
  )
  const philosophyPercentage = Math.round(
    (allRelevantPeopleInterestedInPhilosophy.length * 100) / allRelevantPeople.length,
  )
  const musicPercentage = Math.round(
    (allRelevantPeopleInterestedInMusic.length * 100) / allRelevantPeople.length,
  )
  const politicsPercentage = Math.round(
    (allRelevantPeopleInterestedInPolitics.length * 100) / allRelevantPeople.length,
  )
  const spiritualityPercentage = Math.round(
    (allRelevantPeopleInterestedInSpirituality.length * 100) / allRelevantPeople.length,
  )
  const theologyPercentage = Math.round(
    (allRelevantPeopleInterestedInTheology.length * 100) / allRelevantPeople.length,
  )

  return (
    <div>
      <div className="text-sm uppercase">{religion}</div>
      <div>
        <p className="text-sm text-white/50">Science: {sciencePercentage}%</p>
        <p className="text-sm text-white/50">History: {historyPercentage}%</p>
        <p className="text-sm text-white/50">Metaphysics: {metaphysicsPercentage}%</p>
        <p className="text-sm text-white/50">Philosophy: {philosophyPercentage}%</p>
        <p className="text-sm text-white/50">Music: {musicPercentage}%</p>
        <p className="text-sm text-white/50">Politics: {politicsPercentage}%</p>
        <p className="text-sm text-white/50">Spirituality: {spiritualityPercentage}%</p>
        <p className="text-sm text-white/50">Theology: {theologyPercentage}%</p>
      </div>
    </div>
  )
}

export default InterestDistributionPerReligion
