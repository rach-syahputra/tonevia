import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { appName } from '@/lib/data/app'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: `${appName} - Home`,
  description:
    'Discover high-quality musical instruments at Tonevia. Explore our range of expertly crafted guitars, pianos, drums, and more, designed to inspire musicians of all levels. Experience superior sound, precision, and artistry.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable}`}>
      <body className='font-[family-name:var(--font-geist-sans)] antialiased'>
        <Navbar />
        <div className='mx-auto flex min-h-screen w-full max-w-screen-xl flex-col gap-4 p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
