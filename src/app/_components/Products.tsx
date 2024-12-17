import Image from 'next/image'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { products } from '@/lib/data/products'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Products() {
  return (
    <Container className='flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-900 p-4 text-white md:p-6 lg:p-8'>
      <div className='flex flex-col items-center justify-center md:gap-2'>
        <Heading level={1}>Our Products</Heading>
        <Paragraph color='dark-gray'>Crafted for Every Musician</Paragraph>
      </div>
      <div className='grid grid-cols-2 items-start gap-4 gap-y-8 md:grid-cols-4 xl:gap-6'>
        {products.map((product, index) => (
          <article
            key={index}
            className='flex flex-col items-start justify-center gap-1 md:gap-2'
          >
            <figure className='flex flex-col gap-2'>
              <Image
                src={product.imageSrc}
                alt={`${product.name} image`}
                width={400}
                height={400}
                className='h-auto w-full rounded-lg'
              />
              <figcaption>
                <Heading level={2}>{product.name}</Heading>
              </figcaption>
            </figure>
            <Paragraph size='sm' color='gray'>
              {product.description}
            </Paragraph>
          </article>
        ))}
      </div>
      <Button
        className='w-full bg-primary text-sm text-white md:w-fit md:text-base lg:text-lg'
        asChild
      >
        <Link href='/products' aria-label='Products page'>
          Learn more
        </Link>
      </Button>
    </Container>
  )
}
