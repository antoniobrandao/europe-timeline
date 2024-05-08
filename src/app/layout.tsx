import type { Metadata } from 'next'
import DataProvider from '@/lib/context/DataProvider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Europe Timeline',
  description: 'A visualisation of the impact of Christianity on European civilisation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  )
}
