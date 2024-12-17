import Image from 'next/image'
import Paragraph from '@/components/Paragraph'
import { TeamType as TeamProps } from '@/lib/data/teams'
import Heading from '@/components/Heading'

export default function TeamItem({ name, image, description, job }: TeamProps) {
  return (
    <div className='flex w-full flex-col gap-2 rounded-lg bg-gray-800 p-4'>
      <div className='flex items-center gap-4'>
        <Image
          src={image}
          alt='Team image'
          width={64}
          height={64}
          className='h-16 w-16 rounded-lg'
        />
        <div className='flex flex-col'>
          <Heading level={2}>{name}</Heading>
          <p className='text-xs text-gray-500 md:text-sm lg:text-base'>{job}</p>
        </div>
      </div>
      <Paragraph color='gray'>{description}</Paragraph>
    </div>
  )
}
