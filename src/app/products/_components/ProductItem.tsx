/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { IContentfulAsset } from '@/contentful/types'
import { CustomerType } from '@/lib/data/customers'

type ProductItemProps = {
  image: any
  name: string
  description: string
  customer: CustomerType
}

export default function ProductItem({
  image,
  name,
  description,
  customer
}: ProductItemProps) {
  return (
    <article className='flex h-full flex-col items-start justify-between gap-4'>
      <div className='flex flex-col gap-2'>
        <figure className='relative flex w-full flex-col gap-2'>
          <Image
            src={`https:${(image as IContentfulAsset)?.fields.file.url}`}
            alt={`${name} image`}
            width={564}
            height={353}
            loading='eager'
            className='h-auto w-full rounded-lg'
          />
          <figcaption className='absolute bottom-0 left-0 rounded-tr-lg bg-gray-800 bg-opacity-95 px-4 py-2'>
            <Heading level={2}>{name}</Heading>
          </figcaption>
        </figure>
        <Paragraph color='gray'>{description}</Paragraph>
      </div>
      <div className='flex w-full flex-col gap-2 rounded-lg bg-gray-800 p-4'>
        <div className='flex items-center gap-4'>
          <Image
            src={customer.imageSrc}
            alt='Customer image'
            width={40}
            height={40}
            className='h-10 w-10 rounded-full'
          />
          <div className='flex flex-col'>
            <span className='text-xs font-bold md:text-sm lg:text-base'>
              {customer.name}
            </span>
            <p className='text-[10px] text-gray-400 md:text-xs lg:text-sm'>
              {customer.job}
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 w-4 text-yellow-500 md:h-5 md:w-5'
          />
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 w-4 text-yellow-500 md:h-5 md:w-5'
          />
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 w-4 text-yellow-500 md:h-5 md:w-5'
          />
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 w-4 text-yellow-500 md:h-5 md:w-5'
          />
          <FontAwesomeIcon
            icon={faStar}
            className='h-4 w-4 text-yellow-500 md:h-5 md:w-5'
          />
        </div>
        <Paragraph color='gray'>{customer.testimonial}</Paragraph>
      </div>
    </article>
  )
}
