'use client'
import { useState } from "react";

import homeStyles from './home.module.css';

import { LeaderBoardIcon, ClubCollectIcon, StampbookIcon, GamerIconLeft, GamerIconRight, ArrowRightIcon } from "@/icons/HomeIcon";
import { Logo } from "@/icons/LogoVishnu22";

import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import { SponsorCarousel } from "@/components/HomeComponents/Sponsor";

export default function Home() {
  const [language, setLanguage] = useState<string>("TH");
  return (
    <div className={homeStyles.mainContent}>

      {/* <p>Change language</p>

      <div className="grid-cols-1 md:grid-cols-2">
        <Logo />
      </div>

      <div className="h-fit flex flex-col items-start gap-y-2">
        <div className="h-[190px] w-full bg-[#D9D9D9] flex flex-col justify-end items-end p-2">
          <p className="font-bold text-[32px]">พาดหัวข่าว</p>
          <p className="font-bold text-[16px]">พาดหัวพาดหัวข่าวพาดหัวข่าว</p>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-x-2">
          <p className="w-full font-[600] text-right">ดูทั้งหมด</p>
          <ArrowRightIcon />
        </div>
      </div> */}
{/* 
      <div className="menuWrap">

        <div className="menuContainer">
          <div className="flex flex-row">
            <StampbookIcon />
          </div>
          <ButtonNext Topic={"Complete"} Topic2={"Stampbook!"} TextBtn={"collect"} />
        </div>

        <div className="menuContainer">
          <div className="flex flex-row">
            <ButtonNext Topic={"Collect"} Topic2={"Club's items!"} TextBtn={"collect"} />
            <ClubCollectIcon />
          </div>
        </div>

        <div className="menuContainer">
          <div className="flex w-full">

            <GamerIconRight />
            <ButtonNext Topic={"Show Your Gamer"} Topic2={"Skills!"} TextBtn={"play now"} />
            <GamerIconLeft />
          </div>
        </div>

        <div className="menuContainer">
          <LeaderBoardIcon />
          <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} />
        </div>

      </div> */}

      {/* <AccordionHome />
      <MapEng /> */}

      <SponsorCarousel />
    </div>
  );
}
