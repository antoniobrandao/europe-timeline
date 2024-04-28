'use client'

import { PhilosopherType } from '@/lib/constants/types'
import { Fields } from '@/lib/constants/enums'
import { getFieldTextColor } from '@/lib/ui_helpers'
import React from 'react'
import clsx from 'clsx'

type MainDisplayProps = {
  philosophersToDisplay: PhilosopherType[]
}
const MainDisplay = (props: MainDisplayProps) => {
  const { philosophersToDisplay } = props

  return (
    <div className="flex flex-col gap-1">
      {philosophersToDisplay?.map((philosopher: PhilosopherType) => {
        return (
          <a
            href={philosopher.wikipediaUrl}
            target="_blank"
            className="block bg-[#1f1f1f] rounded-[4px] border border-[#333] p-2 hover:bg-[#333] hover:border-[#999] transition-colors duration-300"
            key={philosopher.name}
          >
            <p className="text-xs">
              {philosopher.name} ({philosopher.birth} to {philosopher.death})
            </p>

            <div className="flex gap-1">
              {philosopher.fields.map((field: Fields) => (
                <p className={clsx('text-[10px]', getFieldTextColor(field))}>{field}</p>
              ))}
            </div>
          </a>
        )
      })}
    </div>
  )
}
export default MainDisplay
