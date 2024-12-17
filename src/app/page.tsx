import Hero from './_components/Hero'
import Overview from './_components/Overview'
import Products from './_components/Products'

export default function Home() {
  return (
    <main className='flex w-full flex-col gap-10 lg:gap-16'>
      <Hero />
      <Overview />
      <Products />
    </main>
  )
}
