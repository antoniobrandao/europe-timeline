'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'
import ProjectBy from '@/lib/components/ProjectBy'
import Conclusions from '@/lib/components/Conclusions'
import Stats from '@/lib/components/Stats'

const Information = () => {
  const { caretHidden, setCaretHidden } = React.useContext(DataContext)

  const handleOutMove = () => {
    if (!caretHidden) {
      setCaretHidden(true)
    }
  }
  return (
    <div onMouseOver={handleOutMove}>
      <Stats />
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">CONCLUSIONS</p>
      </div>
      <Conclusions />
      <ProjectBy />
    </div>
  )
}

export default Information
