import { Metadata } from 'next'
import Container from '@/components/Container'
import History from './_components/History'
import Teams from './_components/Teams'
import Culture from './_components/Culture'
import { appName } from '@/lib/data/app'

export const metadata: Metadata = {
  title: `${appName} - About Us`,
  description:
    'Discover high-quality musical instruments at Tonevia. Explore our range of expertly crafted guitars, pianos, drums, and more, designed to inspire musicians of all levels. Experience superior sound, precision, and artistry.'
}

export default function AboutUsPage() {
  return (
    <main className='flex w-full flex-col gap-10 lg:gap-16'>
      <Container className='flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-900 p-4 text-white md:p-6 lg:gap-12 lg:p-8'>
        <History />
        <Teams />
        <Culture />
      </Container>
    </main>
  )
}
