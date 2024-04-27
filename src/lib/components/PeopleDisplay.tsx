'use client'

import { PhilosopherType } from '@/lib/data'
import React from 'react'

type MainDisplayProps = {
  philosophersToDisplay: PhilosopherType[]
}
const MainDisplay = (props: MainDisplayProps) => {
  const { philosophersToDisplay } = props

  return (
    <div className="flex flex-col gap-2">
      {philosophersToDisplay?.map((philosopher: PhilosopherType) => {
        return (
          <div className="mb-2" key={philosopher.name}>
            <p className="text-xs">
              {philosopher.name} ({philosopher.birth} to {philosopher.death})
            </p>
            <p className="text-xs">{philosopher.fields.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}
export default MainDisplay
