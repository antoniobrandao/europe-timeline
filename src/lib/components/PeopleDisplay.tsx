'use client'

import { PhilosopherType } from '@/lib/data'
import React from 'react'
import DataContext from '@/lib/context/DataContext'

const MainDisplay = () => {
  const { philosophersToDisplay } = React.useContext(DataContext)

  return (
    <div className="flex flex-wrap gap-4">
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
