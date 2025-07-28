import React from 'react'
import CasualStyle from '@/public/images/home/styles/casual-style.png'
import GymStyle from '@/public/images/home/styles/gym-style.png'
import PartyStyle from '@/public/images/home/styles/party-style.png'
import FormalStyle from '@/public/images/home/styles/formal-style.png'
import Image from 'next/image'
import { Title } from '@/components/system/Typography/Title'

export const BrowseByStyle = () => {
  return (
    <section className="flex flex-col rounded-[40px] bg-light-gray ~my-5/12 ~gap-10/16 ~p-6/12">
      <Title className="text-center">Browse by Dress Style</Title>
      <div className="flex flex-col gap-4 font-satoshi">
        <div className="flex h-[420px] flex-col gap-4 md:h-[290px] md:flex-row">
          <div className="relative flex-[1] overflow-hidden rounded-[20px] bg-white">
            <Image
              src={CasualStyle}
              alt="Casual Style"
              width={CasualStyle.width / 2}
              height={CasualStyle.height / 2}
              className="absolute right-0 top-0 h-full w-fit object-cover"
            />
            <h2 className="absolute left-[30px] top-[30px] font-bold ~text-2xl/4xl">
              Casual
            </h2>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-[20px] bg-white md:flex-[2]">
            <Image
              src={FormalStyle}
              alt="Formal Style"
              width={FormalStyle.width / 2}
              height={FormalStyle.height / 2}
              className="xsm:right-0 absolute -right-10 top-0 h-full w-fit object-cover"
            />
            <h2 className="absolute left-[30px] top-[30px] font-bold ~text-2xl/4xl">
              Formal
            </h2>
          </div>
        </div>
        <div className="flex h-[420px] flex-col gap-4 md:h-[290px] md:flex-row">
          <div className="relative flex-[1] overflow-hidden rounded-[20px] bg-white md:flex-[2]">
            <Image
              src={PartyStyle}
              alt="Party Style"
              width={PartyStyle.width / 2}
              height={PartyStyle.height / 2}
              className="xsm:right-0 absolute -right-10 top-0 h-full w-fit object-cover"
            />
            <h2 className="absolute left-[30px] top-[30px] font-bold ~text-2xl/4xl">
              Party
            </h2>
          </div>
          <div className="relative flex-[1] overflow-hidden rounded-[20px] bg-white">
            <Image
              src={GymStyle}
              alt="Gym Style"
              width={GymStyle.width / 2}
              height={GymStyle.height / 2}
              className="absolute right-0 top-0 h-full w-fit object-cover"
            />
            <h2 className="absolute left-[30px] top-[30px] font-bold ~text-2xl/4xl">
              Gym
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
