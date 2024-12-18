'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navLinks } from '@/lib/data/nav-links'
import { cn } from '@/lib/utils'

export default function MobileNavbarMenu() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <div className='h-8 w-8 md:hidden'>
        <FontAwesomeIcon
          icon={faBars}
          className='h-full w-full'
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <div
        className={`${openMenu ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 h-screen w-screen bg-white transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className='border-light flex h-[80px] items-center justify-between border-b px-8'>
          <div className='flex items-center justify-center gap-2 font-bold'>
            <Image
              src='/logo.png'
              alt='Tonevia logo'
              width={100}
              height={100}
              className='h-auto w-10'
            />
            TONEVIA
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            className='h-8 w-8'
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className='flex flex-col gap-8 px-4 py-8'>
          {navLinks.map((navLink, index) => (
            <li key={index} onClick={() => setOpenMenu(false)}>
              <Link
                href={navLink.href}
                aria-label={navLink.label}
                className={cn(
                  'rounded-md px-4 py-3 transition-all duration-300 ease-in-out hover:bg-gray-100',
                  {
                    'bg-gray-50 hover:bg-gray-50':
                      pathname.toLocaleLowerCase() ===
                      navLink.href.toLowerCase()
                  }
                )}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
