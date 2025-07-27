'use client'

import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Container } from '@/components/system/Container'
import { ShopListIcon } from '@/components/icons/ShopListIcon'
import { ProfileIcon } from '@/components/icons/ProfileIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { BurgerIcon } from '@/components/icons/BurgerIcon'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { MobileSearch } from './components/MobileSearch'
import { MobileDrawer } from './components/MobileDrawer'
import Link from 'next/link'

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className="relative w-full">
      <div className="relative z-10 size-full bg-white py-6">
        <Container className="flex items-center justify-between ~gap-2/10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <BurgerIcon className="md:hidden" />
            </button>
            <Link
              href="/"
              className="font-kanit font-bold uppercase ~text-3xl/4xl"
            >
              Boris
            </Link>
          </div>
          <NavigationMenu className="font-satoshi hidden md:block">
            <NavigationMenuList
              className={cn('max-w-max text-nowrap ~gap-3/6')}
            >
              <NavigationMenuViewport className="bg-accent/5 top-2 flex origin-top-left" />
              <NavigationMenuItem className="hover:text-gray-600">
                <NavigationMenuTrigger className="p-0 hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-4 p-5 md:w-[550px]"></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:text-gray-600">
                <NavigationMenuLink href="/on-sale">On Sale</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:text-gray-600">
                <NavigationMenuLink href="/new-arrivals">
                  New Arrivals
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:text-gray-600">
                <NavigationMenuLink href="/brands">Brands</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden grow justify-center md:flex">
            {/*//? TODO: implement search and extract to separate component */}
            <div className="bg-light-gray flex w-full max-w-[577px] items-center gap-2 rounded-full px-4 py-3">
              <SearchIcon />
              <input
                type="text"
                className="grow bg-transparent outline-none"
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <SearchIcon className="text-black md:hidden" />
            </button>
            <ShopListIcon />
            <ProfileIcon />
          </div>
        </Container>
      </div>
      <MobileSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        className="z-0 md:hidden"
      />
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  )
}
