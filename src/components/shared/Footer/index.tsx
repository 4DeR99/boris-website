import { Container } from '@/components/system/Container'
import Link from 'next/link'
import React from 'react'
import { FOOTER_LINKS, PAYCARDS, SOCIAL_LINKS } from './constants'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="relative bg-light-gray py-16">
      <Container className="font-satoshi">
        <div className="flex w-full flex-col gap-5 md:flex-row md:justify-between">
          <div className="flex flex-col ~gap-[1rem]/[1.6rem]">
            <Link
              href="/"
              className="font-kanit font-bold uppercase ~text-3xl/4xl"
            >
              Boris
            </Link>
            <p className="text-sm md:max-w-[15.5rem]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex gap-2">
              {SOCIAL_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
          {FOOTER_LINKS.map((links, index) => (
            <div
              key={index}
              className="hidden flex-col gap-[26px] ~text-sm/base md:flex"
            >
              <h1 className="font-medium uppercase tracking-[0.2rem]">
                {links.label}
              </h1>
              <ul className="flex flex-col gap-3">
                {links.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-5 md:hidden">
            {FOOTER_LINKS.map((links, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 ~text-sm/base"
              >
                <h1 className="font-medium uppercase tracking-[0.2rem]">
                  {links.label}
                </h1>
                <ul className="flex flex-col gap-3">
                  {links.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[3.125rem] h-px w-full bg-black/10 ~mb-4/5" />
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Boris. All rights reserved.
          </p>
          <div className="flex">
            {PAYCARDS.map((card) => (
              <div
                key={card.label}
                className="w-[56px]"
              >
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={card.icon.width}
                  height={card.icon.height}
                  className="h-fit w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
