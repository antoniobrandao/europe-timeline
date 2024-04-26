'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'

const MainDisplay = () => {
  const { mainStatusDisplay } = React.useContext(DataContext)

  return <p className="text-white">Year: {mainStatusDisplay}</p>
}
export default MainDisplay
