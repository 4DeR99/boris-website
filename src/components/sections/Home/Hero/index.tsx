import React from 'react'
import HeroImage from '@/public/images/home/hero/hero.png'
import HeroImageMobile from '@/public/images/home/hero/hero-mobile.jpg'
import Image from 'next/image'
import { Container } from '@/components/system/Container'
import { Button } from '@/components/ui/button'
import CalvinKlein from '@/public/images/home/brands-logo/calvin-klein.png'
import Gucci from '@/public/images/home/brands-logo/gucci.png'
import Prada from '@/public/images/home/brands-logo/prada.png'
import Versace from '@/public/images/home/brands-logo/versace.png'
import Zara from '@/public/images/home/brands-logo/zara.png'

export const Hero = () => {
  return (
    <section className="bg-light-gray">
      <Container className="relative hidden md:block">
        <Image
          src={HeroImage}
          alt="hero"
          width={HeroImage.width}
          height={HeroImage.height}
          className="h-fit w-full"
        />
        <div className="absolute left-0 top-0 flex h-full w-[45%] flex-col justify-center px-4 ~md/2xl:~gap-1.5/3">
          <h1 className="font-kanit font-bold leading-[1] ~md/2xl:~text-[2rem]/[5rem]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi ~md/2xl:~text-sm/base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            className="mt-2 max-w-[13rem] font-satoshi font-medium ~md/2xl:~text-sm/base ~md/2xl:!~py-2/4"
            size="xl"
          >
            Shop Now
          </Button>
          <div className="mt-2 flex ~md/2xl:~gap-2/6">
            <div className="flex flex-col gap-1">
              <span className="font-kanit ~md/2xl:~text-3xl/5xl">200+</span>
              <span className="font-satoshi ~md/2xl:~text-sm/base">
                International Brands
              </span>
            </div>
            <div className="my-1 w-px bg-black/40" />
            <div className="flex flex-col gap-1">
              <span className="font-kanit ~md/2xl:~text-3xl/5xl">2,000+</span>
              <span className="font-satoshi ~md/2xl:~text-sm/base">
                High-Quality Products
              </span>
            </div>
            <div className="my-1 w-px bg-black/40" />
            <div className="flex flex-col gap-1">
              <span className="font-kanit ~md/2xl:~text-3xl/5xl">30,000+</span>
              <span className="font-satoshi ~md/2xl:~text-sm/base">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile */}
      <div className="block pt-6 md:hidden">
        <div className="flex flex-col gap-4 px-4">
          <h1 className="font-kanit text-[2.25rem] font-bold leading-[0.78]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi text-sm">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="py-6 font-satoshi text-base font-medium">
            Shop Now
          </Button>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="font-kanit text-2xl">200+</span>
                <span className="font-satoshi text-xs">
                  International Brands
                </span>
              </div>
              <div className="my-1 w-px bg-black/40" />
              <div className="flex flex-col items-center gap-1">
                <span className="font-kanit text-2xl">2,000+</span>
                <span className="font-satoshi text-xs">
                  High-Quality Products
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-kanit text-2xl">30,000+</span>
              <span className="font-satoshi text-xs">Happy Customers</span>
            </div>
          </div>
        </div>
        <Image
          src={HeroImageMobile}
          alt="hero"
          width={HeroImageMobile.width}
          height={HeroImageMobile.height}
        />
      </div>

      <div className="w-full bg-black py-6">
        <Container className="flex w-full flex-wrap items-center justify-center gap-6 lg:justify-between">
          <Image
            src={Versace}
            alt="Versace"
            width={Versace.width / 2}
            height={Versace.height / 2}
            className="w-[116px] object-contain sm:w-[166px]"
          />
          <Image
            src={Zara}
            alt="Zara"
            width={Zara.width / 2}
            height={Zara.height / 2}
            className="w-[63px] object-contain sm:w-[91px]"
          />
          <Image
            src={Gucci}
            alt="Gucci"
            width={Gucci.width / 2}
            height={Gucci.height / 2}
            className="w-[109px] object-contain sm:w-[156px]"
          />
          <Image
            src={Prada}
            alt="Prada"
            width={Prada.width / 2}
            height={Prada.height / 2}
            className="w-[127px] object-contain sm:w-[194px]"
          />
          <Image
            src={CalvinKlein}
            alt="CalvinKlein"
            width={CalvinKlein.width / 2}
            height={CalvinKlein.height / 2}
            className="w-[134px] object-contain sm:w-[208px]"
          />
        </Container>
      </div>
    </section>
  )
}
