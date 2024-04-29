import Timelines from '@/lib/components/Timelines'
import Sidebar from '@/lib/components/Sidebar'
import Caret from '@/lib/components/Caret'

export default function Home() {
  return (
    <main className="bg-black text-white h-screen">
      <div className="h-screen flex lg:hidden justify-center items-center w-full">
        <p className="text-white text-center max-w-48 text-sm relative top-[-40px]">
          Your screen needs to be at least 1024px wide the view this experience
        </p>
      </div>
      <div className="hidden lg:block">
        <Caret />
        <div className="grid grid-cols-12">
          <Timelines />
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
