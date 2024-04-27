import Timelines from '@/lib/components/Timelines'
import Sidebar from '@/lib/components/Sidebar'

export default function Home() {
  return (
    <main className="flex bg-black text-white">
      <Timelines />
      <Sidebar />
    </main>
  )
}
