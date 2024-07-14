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
    <div className={style.bgPage}>
      <div className="sm:hidden w-full flex flex-row justify-center items-center">
        <Logo />
      </div>

      <div className="w-full px-6">
        <div className="w-full h-[30vh] sm:h-[50vh] lg:h-[70vh] xl:h-[80vh] bg-white flex justify-end items-end p-4 sm:p-6 lg:p-8">
          <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl">พาดหัวข่าว</p>
        </div>
        <div className="flex flex-row justify-end items-center gap-x-2 pt-3">
          <Link href="\" className="font-medium text-base sm:text-2xl">ดูทั้งหมด </Link>
          <ArrowRightIcon></ArrowRightIcon>
        </div>
      </div>

      <div className="z-10 w-full h-full grid grid-cols-1 md:grid-cols-2 justify-items-center items-center space-y-[100px]">
        <div className="col-span-1 flex justify-center items-center">
          <button className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <StampbookIcon />
            <ButtonNext Topic="กรอก" Topic2="Stamp Book!" TextBtn="collect" />
          </button>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center">
          <button className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <ButtonNext Topic={"เยี่ยมทุก"} Topic2={"Club!"} TextBtn={"collect"} />
            <ClubCollectIcon />
          </button>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center">
          <button className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <GamerIconRight />
            <ButtonNext Topic={"มาเล่น"} Topic2={"Game กัน!"} TextBtn={"play now"} />
            <GamerIconLeft />
          </button>
        </div>

        <div className="z-10 col-span-1 flex justify-center items-center">
          <button className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
            <LeaderBoardIcon />
            <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} />
          </button>
        </div>
      </div>

      <AccordionHome/>

      <MapEng/>

      <SponsorCarousel/>
    </div>
  );
}
