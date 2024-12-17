import Link from 'next/link'
import TeamItem from './TeamItem'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { Button } from '@/components/ui/button'
import { teams } from '@/lib/data/teams'

export default function Teams() {
  return (
    <Container className='flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-900 text-white'>
      <div className='flex flex-col items-center justify-center md:gap-2'>
        <Heading level={1}>Our Team: The Heart of Tonevia</Heading>
        <Paragraph color='dark-gray'>
          Meet the Team That Makes It Happen
        </Paragraph>
      </div>
      <div className='grid items-start gap-4 md:grid-cols-2'>
        {teams?.map((team, index) => <TeamItem key={index} {...team} />)}
      </div>
      <Button
        className='w-full bg-primary text-sm text-white md:w-fit md:text-base lg:text-lg'
        asChild
      >
        <Link href='/teams' aria-label='Teams page'>
          Learn more
        </Link>
      </Button>
    </Container>
  )
}
