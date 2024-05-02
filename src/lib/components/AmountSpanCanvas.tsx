'use client'

import React, { useEffect, useState, useRef } from 'react'
import DataContext from '@/lib/context/DataContext'
import { years, totalYears } from '@/lib/data/time'
import { Fields, Region, Gender, EventType } from '@/lib/constants/enums'
import { DisplayContentType } from '@/lib/constants/types'
import clsx from 'clsx'

type AmountSpanCanvasProps = {
  ui_id: string
  title: string
  filterRegion?: Region
  filterField?: Fields
  filterGender?: Gender
  color?: string
}

const totalHeight = 80

const AmountSpanCanvas = (props: AmountSpanCanvasProps) => {
  const { ui_id, title, filterRegion, filterField, filterGender } = props
  let { color } = props
  const { year, locked, westernPhilosophers, displayContent, setDisplayContent } =
    React.useContext(DataContext)
  const [drawingComplete, setDrawingComplete] = useState<boolean>(false)
  if (!color) color = 'white'
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  let arrayToUse = westernPhilosophers
  if (filterRegion) {
    arrayToUse = arrayToUse.filter(person => person.region === filterRegion)
  }
  if (filterField) {
    arrayToUse = arrayToUse.filter(person => person.fields.indexOf(filterField) > -1)
  }
  if (filterGender) {
    arrayToUse = arrayToUse.filter(person => person.gender === filterGender)
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        years.forEach(function (year, i) {
          const people = arrayToUse.filter(
            philosopher => philosopher.birth <= year && philosopher.death >= year,
          )
          const peopleNumber = people.length
          const barHeight = peopleNumber
          ctx.fillStyle = color
          ctx.fillRect(1 * i, totalHeight - barHeight, 1, barHeight)
        })
        setDrawingComplete(true)
      }
    }
  })

  //
  // @ts-ignore
  const selected =
    displayContent &&
    // @ts-ignore
    displayContent.data &&
    // @ts-ignore
    displayContent.data.title &&
    // @ts-ignore
    displayContent.data.title === title

  const rootStyle = clsx('relative h-[80px]', selected ? 'bg-[#1a1a1a]' : 'bg-[#111]')

  const handleHover = () => {
    if (!locked) {
      const content: DisplayContentType = {
        type: EventType.PEOPLE_LIST,
        data: {
          people: arrayToUse.filter(
            philosopher => philosopher.birth <= year && philosopher.death >= year,
          ),
          title: title,
          region: filterRegion,
          field: filterField,
          gender: filterGender
        },
      }
      setDisplayContent(content)
    }
  }
  
  return (
    <div className={rootStyle} onMouseMove={() => handleHover()}>
      <p className="absolute bg-transparent top-1 left-1 text-white/40 text-xs">
        {title} : {arrayToUse.length}
      </p>
      <canvas
        ref={canvasRef}
        width={String(totalYears)}
        height="80"
        className={clsx(drawingComplete ? 'w-full h-[80px]' : '', 'absolute bottom-0')}
      />
    </div>
  )
}
export default AmountSpanCanvas
