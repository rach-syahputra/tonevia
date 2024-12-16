import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

export default function Overview() {
  return (
    <Container className='flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Heading level={1}>Get to Know Tonevia</Heading>
        <Paragraph color='dark-gray'>
          Detailed overview of our company
        </Paragraph>
      </div>
      <div className='grid w-full items-start gap-8 md:grid-cols-2 lg:gap-16'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <FontAwesomeIcon
              icon={faHandshake}
              className='h-7 w-7 text-gray-900 md:h-8 md:w-8 lg:h-10 lg:w-10'
            />
            <Heading level={2}>Our Culture</Heading>
          </div>
          <Paragraph color='dark-gray' className='md:text-center'>
            At Tonevia, we believe that music is more than sound—it’s a
            connection, a language, and a timeless art form. Founded with a
            passion for craftsmanship and innovation, Tonevia has dedicated
            itself to creating premium musical instruments that inspire
            musicians to express their creativity and passion. From the resonant
            warmth of a handcrafted guitar to the precision of a concert piano,
            we ensure that every instrument embodies perfection, quality, and
            soul.
          </Paragraph>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <FontAwesomeIcon
              icon={faHourglassHalf}
              className='h-7 w-7 text-gray-900 md:h-8 md:w-8 lg:h-10 lg:w-10'
            />
            <Heading level={2}>Our History</Heading>
          </div>
          <Paragraph color='dark-gray' className='md:text-center'>
            Tonevia began its journey in 2005 with a simple mission: to empower
            musicians through instruments that combine tradition with modern
            excellence. From humble beginnings in a small workshop to becoming a
            trusted name in the industry, our story is one of dedication,
            artistry, and relentless pursuit of quality.
          </Paragraph>
        </div>
      </div>
    </Container>
  )
}
