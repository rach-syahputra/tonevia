import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { appName } from '@/lib/data/app'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700']
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
        <div className='mx-auto mb-4 min-h-screen w-full max-w-screen-xl p-4 md:mb-6 md:p-6 lg:mb-8 lg:p-8'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
