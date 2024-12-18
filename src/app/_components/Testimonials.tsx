import Image from 'next/image'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { customers } from '@/lib/data/customers'

export default function Testimonials() {
  return (
    <Container className='grid w-full grid-cols-1 items-start gap-4 md:grid-cols-5 lg:gap-8'>
      <div className='flex flex-col items-center gap-1 md:col-span-2 md:items-start'>
        <Heading level={1}>Our Customers</Heading>
        <Paragraph color='dark-gray'>Trusted by Musicians Everywhere</Paragraph>
      </div>
      <div className='flex flex-col gap-4 md:col-span-3 md:flex-row'>
        {customers.map((customer, index) => (
          <div
            key={index}
            className='flex w-full flex-col gap-2 rounded-lg bg-gray-100 p-4'
          >
            <div className='flex items-center gap-2'>
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
                <p className='text-[10px] text-gray-700 md:text-xs lg:text-sm'>
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
            <Paragraph color='black'>{customer.testimonial}</Paragraph>
          </div>
        ))}
      </div>
    </Container>
  )
}
