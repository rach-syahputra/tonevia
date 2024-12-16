import Image from 'next/image'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <Container className='grid gap-4 gap-y-8 rounded-lg bg-gray-900 p-4 md:grid-cols-2 md:p-6 lg:p-8'>
      <div className='flex flex-col justify-between gap-4'>
        <Heading level={1} className='text-white'>
          Inspiring Sound, Exceptional Instruments
        </Heading>
        <Paragraph color='gray'>
          Discover high-quality instruments designed to bring out your best
          sound. Tonevia delivers precision, craftsmanship, and artistry for
          musicians of all levels.
        </Paragraph>
        <Button className='h-11 w-fit bg-primary px-4 text-sm text-white lg:text-base'>
          Explore Our Products
        </Button>
      </div>
      <div className='grid grid-cols-3 place-items-center gap-4'>
        <div className='relative h-[165px] w-full xs:h-[185px] sm:h-[255px] md:mt-16 md:h-[205px] lg:h-[225px] xl:h-[255px]'>
          <Image
            src='/hero/hero-1.webp'
            alt='People playing an instrument'
            loading='eager'
            fill
            style={{ objectFit: 'cover' }}
            className='h-full w-full rounded-lg'
          />
        </div>
        <div className='relative h-[165px] w-full xs:h-[185px] sm:h-[255px] md:mt-8 md:h-[205px] lg:h-[225px] xl:h-[255px]'>
          <Image
            src='/hero/hero-2.webp'
            alt='People playing an instrument'
            loading='eager'
            fill
            style={{ objectFit: 'cover' }}
            className='h-full w-full rounded-lg'
          />
        </div>
        <div className='relative h-[165px] w-full xs:h-[185px] sm:h-[255px] md:h-[205px] lg:h-[225px] xl:h-[255px]'>
          <Image
            src='/hero/hero-3.webp'
            alt='People playing an instrument'
            loading='eager'
            fill
            style={{ objectFit: 'cover' }}
            className='h-full w-full rounded-lg'
          />
        </div>
      </div>
    </Container>
  )
}
