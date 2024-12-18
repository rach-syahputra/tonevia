import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex items-center justify-between bg-gray-900 px-4 py-8 md:px-0'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-center px-4 md:justify-start md:px-6 lg:px-8'>
        <div className='flex items-center justify-center gap-8'>
          <div className='flex items-center justify-center gap-2 text-sm font-bold text-white lg:text-base'>
            <Image
              src='/logo-white.png'
              alt='Tonevia logo'
              width={100}
              height={100}
              className='h-auto w-8 lg:w-10'
            />
            TONEVIA
          </div>
          <span className='text-sm font-bold text-white md:text-base lg:text-lg'>
            Inspiring Sound, Exceptional Instruments
          </span>
        </div>
      </div>
    </footer>
  )
}
