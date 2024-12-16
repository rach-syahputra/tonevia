import Hero from './_components/Hero'
import Overview from './_components/Overview'

export default function Home() {
  return (
    <main className='flex w-full flex-col gap-4 md:gap-6 lg:gap-8'>
      <Hero />
      <Overview />
    </main>
  )
}
