import { Metadata } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { teams } from '@/lib/data/teams'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { appName } from '@/lib/data/app'

export const metadata: Metadata = {
  title: `${appName} - Teams`,
  description:
    'Discover high-quality musical instruments at Tonevia. Explore our range of expertly crafted guitars, pianos, drums, and more, designed to inspire musicians of all levels. Experience superior sound, precision, and artistry.'
}

export default function TeamsPage() {
  return (
    <main className='flex w-full flex-col gap-10 lg:gap-16'>
      <Container className='flex flex-col items-center justify-center gap-8 lg:gap-12'>
        <div className='flex flex-col items-center justify-center md:gap-2'>
          <Heading level={1}>Our Team: The Heart of Tonevia</Heading>
          <Paragraph color='dark-gray'>
            Meet the Team That Makes It Happen
          </Paragraph>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          {teams.map((team, index) => (
            <div
              key={index}
              className='flex w-full flex-col gap-2 rounded-lg bg-gray-100 p-4'
            >
              <div className='flex items-center gap-4'>
                <Image
                  src={team.image}
                  alt='Team image'
                  width={64}
                  height={64}
                  className='h-16 w-16 rounded-lg'
                />
                <div className='flex flex-col'>
                  <Heading level={2}>{team.name}</Heading>
                  <p className='text-xs text-gray-600 md:text-sm lg:text-base'>
                    {team.job}
                  </p>
                </div>
              </div>
              <Paragraph>{team.description}</Paragraph>
              <div className='flex flex-col gap-2'>
                <Heading level={3}>Contact</Heading>
                <div className='flex items-center gap-3'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          className='h-6 w-6 cursor-pointer'
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Whatsapp</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className='h-6 w-6 cursor-pointer'
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Email</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
