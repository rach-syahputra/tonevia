import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { appName } from '@/lib/data/app'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: `${appName}`,
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
        {children}
      </body>
    </html>
  )
}
