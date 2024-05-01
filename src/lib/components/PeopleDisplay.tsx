'use client'

import { PhilosopherType } from '@/lib/constants/types'
import { Fields } from '@/lib/constants/enums'
import { getFieldTextColor } from '@/lib/ui_helpers'
import React from 'react'
import clsx from 'clsx'

const descriptionStyle = 'text-xs text-white/50 mt-1'

type PeopleDisplayProps = {
  philosophersToDisplay: PhilosopherType[]
}

const PeopleDisplay = (props: PeopleDisplayProps) => {
  const { philosophersToDisplay } = props

  return (
    <div className="flex flex-col gap-1">
      {philosophersToDisplay?.map((philosopher: PhilosopherType) => {
        const description: any = philosopher.description
        const descriptionIsArray = description.length && description.map
        const descriptionJSX = descriptionIsArray ? (
          <>
            {description.map((desc: string) => (
              <p key={desc} className={descriptionStyle}>
                {desc}
              </p>
            ))}
          </>
        ) : (
          <p className={descriptionStyle}>{description}</p>
        )
        return (
          <a
            href={philosopher.wikipediaUrl}
            target="_blank"
            className="bg-[#1f1f1f] flex flex-col gap-1 rounded-[4px] border border-[#333] p-2 hover:bg-[#333] hover:border-[#999] transition-colors duration-300"
            key={philosopher.name}
          >
            <div className="w-full flex justify-between">
              <p className="text-xs leading-none">
                {philosopher.name} ({philosopher.birth} to {philosopher.death})
              </p>
              {philosopher.polytheist && <p className="leading-none text-xs text-blue-300">Polytheist</p>}
              {philosopher.christian && <p className="leading-none text-xs text-orange-300">Christian</p>}
              {philosopher.jewish && <p className="leading-none text-xs text-purple-300">Jewish</p>}
              {philosopher.muslim && <p className="leading-none text-xs text-green-300">Muslim</p>}
            </div>

            <div className="flex gap-1">
              {philosopher.fields.map((field: Fields, index: number) => (
                <p
                  key={philosopher.name + 'field' + index}
                  className={clsx('text-[10px]', getFieldTextColor(field))}
                >
                  {field}
                </p>
              ))}
            </div>

            {descriptionJSX}
          </a>
        )
      })}
    </div>
  )
}
export default PeopleDisplay
