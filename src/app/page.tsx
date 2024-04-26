import { Region, Fields } from '@/lib/data'
import AmountSpan from '@/lib/components/AmountSpan'
import MainDisplay from '@/lib/components/MainDisplay'
import EventSpan from '@/lib/components/EventSpan'
import EventYear from '@/lib/components/EventYear'
import PeopleDisplay from '@/lib/components/PeopleDisplay'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 bg-black text-white">
      <div className="flex flex-col gap-2 bg-black text-white">
        <EventSpan name="Roman Republic" bgColorClass="bg-red-400" />
        <EventSpan name="Roman Empire" bgColorClass="bg-red-400" />
        <EventYear name="Christianity appears" />
        <EventYear name="Roman Empire adopts Christianity" />
        <EventYear name="Christianity made the official religion of the Empire" />
        <EventYear name="Christianity bans the Olympic games" />
        <EventYear name="Altar of Victory removed" />
        <EventYear name="Justinian closes the Academy of Athens" />
        <EventSpan name="Christian Domination" bgColorClass="bg-red-400" />
        <EventSpan name="Dark Ages" bgColorClass="bg-red-800" />
        <EventSpan name="Islamic Golden Age" bgColorClass="bg-yellow-600" />
        <EventSpan name="Carolingian Renaissance" bgColorClass="bg-blue-500" />
        <EventSpan name="12th Century Renaissance" bgColorClass="bg-blue-500" />
        <EventSpan name="Italian Renaissance" bgColorClass="bg-blue-500" />
        <AmountSpan
          title="All Philosophers (Europe)"
          filterRegion={Region.EUROPE}
          bgColorClass="bg-green-400"
        />
        <AmountSpan
          title="SCIENCE Philosophers (Europe)"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          bgColorClass="bg-blue-400"
        />
        <AmountSpan
          title="All Philosophers (Middle East)"
          filterRegion={Region.MIDDLE_EAST}
          bgColorClass="bg-purple-400"
        />
        <AmountSpan
          title="SCIENCE Philosophers (Middle East)"
          filterRegion={Region.MIDDLE_EAST}
          filterField={Fields.SCIENCE}
          bgColorClass="bg-blue-400"
        />
      </div>
      <MainDisplay />
      <PeopleDisplay />
    </main>
  )
}
