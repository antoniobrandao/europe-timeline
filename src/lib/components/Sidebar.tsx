import React from 'react'
import MainDisplay from '@/lib/components/MainDisplay'
import PeopleDisplay from '@/lib/components/PeopleDisplay'

const Sidebar = () => {
  return (
    <div className="min-w-[320px] relative border-l border-white/10 m-0 bg-[#222]">
      <MainDisplay />
      <PeopleDisplay />
    </div>
  )
}

export default Sidebar
