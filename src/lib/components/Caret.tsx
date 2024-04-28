'use client'

import React from 'react'
import DataContext from '@/lib/context/DataContext'

const Caret = () => {
  const { setLocked, locked, xCoord, lockedX, year } = React.useContext(DataContext)
  const xToUse = locked ? lockedX : xCoord
  return (
    <div className="w-full fixed z-50" onClick={() => setLocked(!locked)}>
      <div className="fixed w-full text-white top-0 left-0 bg-black h-[28px] z-40 border-b border-[#333]">
        <p className="absolute text-white top-[3px] text-sm" style={{ left: `${xToUse + 8}px` }}>
          {`${year} ${year < 0 ? 'BCE' : 'CE'}`}
        </p>
      </div>
      <div
        className="absolute bg-white/30 w-[1px] h-screen top-0 z-50"
        style={{ left: `${xToUse}px` }}
      ></div>
    </div>
  )
}

export default Caret
