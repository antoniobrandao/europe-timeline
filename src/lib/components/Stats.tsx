'use client'

import React, { useState } from 'react'
import { Religion, Fields } from '@/lib/constants/enums'
import PeopleTotalsByReligion from './subcomponents/PeopleTotalsByReligion'
import DecideNameLater from './subcomponents/DecideNameLater'
import InterestDistributionPerReligion from './subcomponents/InterestDistributionPerReligion'

const GlobalStats = () => {

  return (
    <>
    <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">TOTAL PEOPLE BY RELIGION</p>
      </div>
      <PeopleTotalsByReligion />
      {/* <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          PERCENTAGE OF PEOPLE INTERESTED IN A SUBJECT WITHIN EACH RELIGION
        </p>
      </div> */}
      {/* <GlobalStats /> */}
      {/* <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          PERCENTUAL REPRESENTATION OF EACH INTEREST AMONG INTELLECTIONS OF EACH RELIGION
        </p>
      </div>
      <div className="w-full pointer-events-none grid grid-cols-5 gap-4 p-4">
        <InterestDistributionPerReligion religion={Religion.POLYTHEIST} />
        <InterestDistributionPerReligion religion={Religion.CHRISTIAN} />
        <InterestDistributionPerReligion religion={Religion.JEWISH} />
        <InterestDistributionPerReligion religion={Religion.MUSLIM} />
        <InterestDistributionPerReligion religion={Religion.ATHEIST} />
      </div>
      <div className="bg-white/20 h-[18px]">
        <p className="text-white text-[11px] pl-2 relative top-[1px]">
          PERCENTUAL REPRESENTATION OF EACH RELIGION BY INTEREST TYPE
        </p>
      </div>
      <div className="w-full pointer-events-none grid grid-cols-8 gap-4 p-4">
        <DecideNameLater interest={Fields.SCIENCE} />
        <DecideNameLater interest={Fields.MIND} />
        <DecideNameLater interest={Fields.HISTORY} />
        <DecideNameLater interest={Fields.MUSIC} />
        <DecideNameLater interest={Fields.POLITICS} />
        <DecideNameLater interest={Fields.THEOLOGY} />
        <DecideNameLater interest={Fields.SPIRITUALITY} />
        <DecideNameLater interest={Fields.METAPHYSICS} />
      </div> */}
    </>
  )
}

export default GlobalStats



