import Image from 'next/image'
import Link from 'next/link'
import DesktopNavbarMenu from './DesktopNavbarMenu'
import MobileNavbarMenu from './MobileNavbarMenu'
import { NavigationMenu } from './ui/navigation-menu'

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex h-[80px] items-center justify-between border-b border-gray-100'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 md:px-6 lg:px-8'>
        <Link href='/' aria-label='Home page'>
          <Image
            src='/tonevia-logo.png'
            alt='Tonevia logo'
            width={100}
            height={80}
            className='h-auto w-[50px]'
          />
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
