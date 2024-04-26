import { Region, Fields } from '@/lib/data'
import AmountSpan from '@/lib/components/AmountSpan'
import MainDisplay from '@/lib/components/MainDisplay'
import EventSpan from '@/lib/components/EventSpan'
import PeopleDisplay from '@/lib/components/PeopleDisplay'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 bg-black text-white">
      <div className="flex flex-col gap-2 bg-black text-white">
        <EventSpan
          name='Christian Domination'
          bgColorClass='bg-yellow-400'
        />
        <EventSpan
          name='Islamic Golden Age'
          bgColorClass='bg-brown-400'
        />
        <EventSpan
          name='Dark Ages'
          bgColorClass='bg-red-400'
        />
        <AmountSpan
          title="All Philosophers (Europe)"
          filterRegion={Region.EUROPE}
          bgColorClass='bg-green-400'
        />
        <AmountSpan
          title="All Philosophers (Europe)"
          filterRegion={Region.EUROPE}
          filterField={Fields.SCIENCE}
          bgColorClass='bg-green-400'
          />
        <AmountSpan
          title="All Philosophers (Middle East)"
          filterRegion={Region.MIDDLE_EAST}
          bgColorClass='bg-purple-400'
          />
        <AmountSpan
          title="All Philosophers (Middle East)"
          filterRegion={Region.MIDDLE_EAST}
          filterField={Fields.SCIENCE}
          bgColorClass='bg-purple-400'
        />
      </div>
      <MainDisplay />
      <PeopleDisplay />
    </main>
  )
}
