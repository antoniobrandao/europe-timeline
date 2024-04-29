import Timelines from '@/lib/components/Timelines'
import Sidebar from '@/lib/components/Sidebar'
import Caret from '@/lib/components/Caret'

export default function Home() {
  return (
    <main className="bg-black text-white h-screen">
      <Caret />
      <div className="grid grid-cols-12">
        <Timelines />
        <Sidebar />
      </div>
    </main>
  )
}
