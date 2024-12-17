import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

export default function Culture() {
  return (
    <Container className='flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-900 text-white'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Heading level={1}>Our Culture, Our Harmnony</Heading>
        <Paragraph color='gray'>
          Tonevia’s culture is rooted in three core values: passion, precision,
          and collaboration. We are musicians, designers, engineers, and
          storytellers united by a single purpose: to create instruments that
          inspire creativity and elevate every performance. We foster an
          environment where ideas flow freely, creativity thrives, and every
          team member has a voice. Whether it’s crafting the perfect guitar,
          tuning a piano to sonic perfection, or ensuring that our customers
          have the best experience, we work together like a symphony—each
          individual contributing their expertise to create something
          remarkable.
        </Paragraph>
        <Paragraph color='gray'>
          Our workspace celebrates innovation and teamwork. We encourage growth,
          continuous learning, and an appreciation for artistry, ensuring every
          Tonevia product reflects not just technical excellence but also a deep
          understanding of musicians’ needs. By supporting each other and
          staying connected to the music community, we ensure that our
          instruments resonate with soul, purpose, and precision. At Tonevia,
          music is not just our business—it’s our heartbeat. And together, we
          are creating harmony for generations to come.
        </Paragraph>
      </div>
    </Container>
  )
}
