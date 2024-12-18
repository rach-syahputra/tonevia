import { Metadata } from 'next'
import Products from './_components/Products'
import { appName } from '@/lib/data/app'

export const metadata: Metadata = {
  title: `${appName} - Products`,
  description:
    'Discover high-quality musical instruments at Tonevia. Explore our range of expertly crafted guitars, pianos, drums, and more, designed to inspire musicians of all levels. Experience superior sound, precision, and artistry.'
}

export default function ProductsPage() {
  return (
    <main className='flex w-full flex-col gap-10 lg:gap-16'>
      <Products />
    </main>
  )
}
