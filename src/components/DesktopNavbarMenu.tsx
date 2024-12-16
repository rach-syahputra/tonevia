'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu'
import { navLinks } from '@/lib/data/nav-links'
import { cn } from '@/lib/utils'

export default function DesktopNavbarMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenuList>
      {navLinks.map((navLink, index) => (
        <NavigationMenuItem key={index}>
          <Link
            href={navLink.href}
            aria-label={`${navLink.label} page`}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={cn(
                'rounded-md px-4 py-3 transition-all duration-300 ease-in-out hover:bg-gray-100',
                {
                  'bg-gray-50 hover:bg-gray-50':
                    pathname.toLocaleLowerCase() === navLink.href.toLowerCase()
                }
              )}
            >
              {navLink.label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  )
}
