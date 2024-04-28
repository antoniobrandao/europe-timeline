'use client'

import React, { useEffect, useState, useRef } from 'react'
import DataContext from '@/lib/context/DataContext'
import { years, totalYears } from '@/lib/data/time'
import { Fields, Region, Gender } from '@/lib/constants/enums'
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

const totalHeight = 200

const AmountSpanCanvas = (props: AmountSpanCanvasProps) => {
  const { ui_id, title, filterRegion, filterField, filterGender } = props
  let { color } = props
  const { westernPhilosophers, displayContent, setDisplayContent } = React.useContext(DataContext)
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
    console.log('filterGender', filterGender)
    console.log('arrayToUse', arrayToUse)
  }


  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      // @ts-ignore
      if (ctx) {
        years.forEach(function (year, i) {
          const people = arrayToUse.filter(
            philosopher => philosopher.birth <= year && philosopher.death >= year,
          )
          const peopleNumber = people.length
          const barHeight = peopleNumber * 2
          ctx.fillStyle = color
          ctx.fillRect(1 * i, totalHeight - barHeight, 1, barHeight)
        })
        setDrawingComplete(true)
      }
    }
  }, [])

  const displayContentFormat: DisplayContentType = {
    ui_id: ui_id,
    type: 'people_list',
    region: filterRegion,
    field: filterField,
    gender: filterGender,
  }

  const rootStyle = clsx(
    'relative',
    // @ts-ignore
    ui_id && displayContent.ui_id && displayContent.ui_id === ui_id ? 'bg-[#222]' : 'bg-[#111]',
  )

  return (
    <div className={rootStyle} onMouseOver={() => setDisplayContent(displayContentFormat)}>
      <p className="absolute top-1 left-1 text-white text-xs">{title}</p>
      <canvas
        ref={canvasRef}
        width={String(totalYears)}
        height={String(totalHeight)}
        className={drawingComplete ? 'w-full' : ''}
      />
    </div>
  )
}

export default AmountSpanCanvas
