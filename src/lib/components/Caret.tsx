'use client'

import React, { useState } from 'react'
import DataContext from '@/lib/context/DataContext'
import { EventType } from '@/lib/constants/enums'
import { postFix, yearDisplayFormatted } from '@/lib/ui_helpers'
import clsx from 'clsx'

const Caret = () => {
  const { locked, xCoord, lockedX, year, displayContent, caretHidden } = React.useContext(DataContext)
  const [lockedFirstTime, setLockedFirstTime] = useState(false)
  const [caretWidth, setCaretWidth] = useState<number>(1)
  const [unlockedFirstTime, setUnlockedFirstTime] = useState(false)
  const xToUse = locked ? lockedX : xCoord

  if(caretHidden) {
    return null
  }
  
  if (locked && !lockedFirstTime) {
    setLockedFirstTime(true)
  }

  if (!locked && lockedFirstTime && !unlockedFirstTime) {
    setUnlockedFirstTime(true)
  }

  if (!locked && caretWidth !== 1) {
    if (caretWidth !== 1) {
      setCaretWidth(1)
    }
  }
  if (locked && displayContent) {
    console.log('displayContent', displayContent)
    // @ts-ignore
    const lockedContentType: EventType = displayContent.type
    // @ts-ignore
    if (lockedContentType === EventType.EVENT_SPAN) {
      // @ts-ignore
      const ref = displayContent.ref
      if(ref && ref.current && ref.current.clientWidth) {
        const newWidth = ref.current.clientWidth
        if (caretWidth !== newWidth) {
          setCaretWidth(newWidth)
        }
      }
    }
  }

  const caretStyle = clsx('absolute h-screen top-0 z-50 pointer-events-none')
  let caretColor = locked ? '#ffffff' : 'rgba(255,255,255,0.3)'
  let textColor = '#ffffff'
  const textStyleYear = 'text-sm'
  const textStyleLock = 'text-xs text-white/50 relative top-[3px] animate-pulse'

  let textLeft = ''
  let textRight = ''
  // @ts-ignore
  if(!locked) {
    textLeft = yearDisplayFormatted(year)
    textRight = ''
  }
  // @ts-ignore
  else if(locked && displayContent && displayContent.type === EventType.PEOPLE_LIST) {
    textLeft = yearDisplayFormatted(year)
    textRight = ''
  }
  // @ts-ignore
  else if(locked && displayContent && displayContent.type === EventType.EVENT_SPAN) {
    // @ts-ignore
    const start: number = displayContent.data.start
    // @ts-ignore
    const end: number = displayContent.data.end
    // @ts-ignore
    caretColor = displayContent.color
    // @ts-ignore
    textColor = displayContent.color
    textLeft = yearDisplayFormatted(start)
    textRight = yearDisplayFormatted(end)
  }
  // @ts-ignore
  else if(locked && displayContent && displayContent.type === EventType.EVENT_YEAR) {
    // @ts-ignore
    const year: number = displayContent.data.year
    textLeft = `${year} ${postFix(year)}`
    textRight = ''
  }
  return (
    <div className="w-full fixed z-50 pointer-events-none">
      <div className="fixed w-full text-white top-0 left-0 bg-black h-[28px] z-40 border-b border-[#333]">
        <div className="flex gap-2 absolute top-[3px]" style={{ left: `${xToUse + 8}px` }}>
          <p className={textStyleYear} style={{color: textColor}}>{textLeft} {textRight !== '' ? `to ${textRight}` : ''}</p>
          {!lockedFirstTime && <p className={textStyleLock}>(click to lock year)</p>}
          {locked && !unlockedFirstTime && <p className={textStyleLock}>(click to unlock)</p>}
        </div>
      </div>
      <div
        className={caretStyle}
        style={{
          background: caretColor,
          left: `${xToUse}px`,
          width: `${caretWidth}px`,
          opacity: caretWidth > 1 ? '0.2' : '1',
        }}
      ></div>
    </div>
  )
}

export default Caret
