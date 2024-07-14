'use client'
import { useState } from "react";
import { LeaderBoardIcon, ClubCollectIcon, StampbookIcon, GamerIconLeft, GamerIconRight, ArrowRightIcon } from "@/assets/icons/HomeIcon";
import { Logo } from "@/assets/icons/LogoVishnu22";

import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import { SponsorCarousel } from "@/components/HomeComponents/Sponsor";
import Link from "next/link";
import style from "./styles.module.css";

export default function Home() {

  return (
    <section className={style.bgPage}>
      <div className="sm:hidden w-full flex flex-row justify-center items-center">
        <Logo />
      </div>

      <div className="w-full px-8 sm:px-10">
        <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] xl:h-[70vh] bg-white flex justify-end items-end p-4 sm:p-6 lg:p-8">
          <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl">พาดหัวข่าว</p>
        </div>
        <div className="flex flex-row justify-end items-center gap-x-2 pt-3">
          <Link href="/app/news" className="font-medium text-base sm:text-2xl">ดูทั้งหมด </Link>
          <ArrowRightIcon></ArrowRightIcon>
        </div>
      </div>

      <div className="z-10 w-full grid grid-cols-1 gap-y-10 mt-[-30px] md:grid-cols-2 justify-items-center items-center">
        <div className="z-10 col-span-1 flex justify-center items-center py-4">
          <Link href={'/app/stampbook'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <StampbookIcon />
            <ButtonNext Topic="กรอก" Topic2="Stamp Book!" TextBtn="collect" />
          </Link>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center py-4">
          <Link href={'/app/club'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <ButtonNext Topic={"เยี่ยมทุก"} Topic2={"Club!"} TextBtn={"collect"} />
            <ClubCollectIcon />
          </Link>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center py-4">
          <Link href={'/app/game'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <GamerIconRight />
            <ButtonNext Topic={"มาเล่น"} Topic2={"Game กัน!"} TextBtn={"play now"} />
            <GamerIconLeft />
          </Link>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center py-4">
          <Link href={'/app/leaderboard'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <LeaderBoardIcon />
            <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} />
          </Link>
        </div>
      </div>

      <AccordionHome/>

      <MapEng/>

      <SponsorCarousel/>
    </section>
  );
}
