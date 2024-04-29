'use client'

import React, { useState } from 'react'
import DataContext from '@/lib/context/DataContext'
import clsx from 'clsx'

const Caret = () => {
  const { locked, xCoord, lockedX, year } = React.useContext(DataContext)
  const [lockedFirstTime, setLockedFirstTime] = useState(false)
  const [unlockedFirstTime, setUnlockedFirstTime] = useState(false)
  const xToUse = locked ? lockedX : xCoord

  if (locked && !lockedFirstTime) {
    setLockedFirstTime(true)
  }
  
  if (!locked && lockedFirstTime && !unlockedFirstTime) {
    setUnlockedFirstTime(true)
  }
  
  const caretStyle = clsx(
    'absolute w-[1px] h-screen top-0 z-50',
    locked ? 'bg-blue-500' : 'bg-white/30',
  )
  const textStyleYear = clsx('text-sm', locked ? 'text-blue-500' : 'text-white')
  const textStyle = 'text-xs text-white/50 relative top-[3px] animate-pulse'

  return (
    <div className="w-full fixed z-50 pointer-events-none">
      <div className="fixed w-full text-white top-0 left-0 bg-black h-[28px] z-40 border-b border-[#333]">
        <div className="flex gap-2 absolute top-[3px]" style={{ left: `${xToUse + 8}px` }}>
          <p className={textStyleYear}>{`${year} ${year < 0 ? 'BCE' : 'CE'}`}</p>
          {!lockedFirstTime && <p className={textStyle}>(click to lock year)</p>}
          {locked && !unlockedFirstTime && <p className={textStyle}>(click to unlock)</p>}
        </div>
      </div>
      <div className={caretStyle} style={{ left: `${xToUse}px` }}></div>
    </div>
  )
}

export default Caret
