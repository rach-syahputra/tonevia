import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex items-center justify-between bg-gray-900 py-8'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center px-4 md:justify-start md:px-6 lg:px-8'>
        <div className='flex items-center justify-center gap-8'>
          <Image
            src='/tonevia-logo-white.png'
            alt='Tonevia logo'
            width={100}
            height={80}
            className='h-auto w-[50px]'
          />
          <span className='text-sm font-bold text-white md:text-base lg:text-lg'>
            Inspiring Sound, Exceptional Instruments
          </span>
        </div>
      </div>
    </footer>
  )
}
