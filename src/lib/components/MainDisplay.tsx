'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'

const MainDisplay = () => {
  const { year } = React.useContext(DataContext)

  return <p className="text-white">Year: {year}</p>
}
export default MainDisplay
