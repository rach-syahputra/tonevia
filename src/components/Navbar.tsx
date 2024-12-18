import Link from 'next/link'
import DesktopNavbarMenu from './DesktopNavbarMenu'
import MobileNavbarMenu from './MobileNavbarMenu'
import { NavigationMenu } from './ui/navigation-menu'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 flex h-[80px] items-center justify-between border-b border-gray-100 bg-white'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 md:px-6 lg:px-8'>
        <Link
          href='/'
          aria-label='Home page'
          className='flex items-center justify-center gap-2 font-bold'
        >
          <Image
            src='/logo.png'
            alt='Tonevia logo'
            width={100}
            height={100}
            className='h-auto w-10'
          />
          TONEVIA
        </Link>
        <MobileNavbarMenu />
        <div className='hidden md:block'>
          <NavigationMenu>
            <DesktopNavbarMenu />
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}
