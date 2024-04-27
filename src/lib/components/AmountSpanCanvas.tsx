'use client'

import React, { useEffect, useState, useRef } from 'react'
import DataContext from '@/lib/context/DataContext'
import { years, totalYears } from '@/lib/data/time'
import { Fields, Region } from '@/lib/data'

type AmountSpanCanvasProps = {
  title: string
  filterRegion?: Region
  filterField?: Fields
  color?: string
}

const totalHeight = 200

const AmountSpanCanvas = (props: AmountSpanCanvasProps) => {
  const { title, filterRegion, filterField } = props
  let { color } = props
  const { westernPhilosophers } = React.useContext(DataContext)
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

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      //   ctx?.strokeRect(200, 200, 40, 50)
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

  return (
    <div className="relative">
      <p className="absolute top-1 left-1 text-white text-xs">{title}</p>
      <canvas
        ref={canvasRef}
        width={String(totalYears)}
        height={String(totalHeight)}
        className={drawingComplete ? 'w-full' : ''}
        style={{ background: '#111' }}
      />
    </div>
  )
}

export default AmountSpanCanvas
