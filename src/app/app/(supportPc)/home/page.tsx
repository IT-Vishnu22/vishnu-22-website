'use client'
import Link from "next/link";
import style from "./styles.module.css";

import { Logo } from "@/assets/icons/LogoVishnu22";
import { LeaderBoardIcon, ClubCollectIcon, StampbookIcon, GamerIconLeft, GamerIconRight, ArrowRightIcon } from "@/assets/icons/HomeIcon";
import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import { SponsorCarousel } from "@/components/HomeComponents/Sponsor";
import { IntaniaNewsHeader } from "@/components/HomeComponents/IntaniaNews";

export default function Home() {

    return (
        <div className={style.bgPage}>
            <div className="sm:hidden w-full flex flex-row justify-center items-center">
                <Logo />
            </div>

            <div className="w-full sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] aspect-video mx-4 px-6 sm:px-10 lg:px-14 hover:rotate-3 hover:transform hover:transition-transform hover:duration-500">
                <IntaniaNewsHeader></IntaniaNewsHeader>
                <div className="flex flex-row justify-end items-center gap-x-2 pt-3 px-2">
                    <Link href="/app/news" className="font-semibold text-base md:text-xl">ดูทั้งหมด </Link>
                    <ArrowRightIcon />
                </div>
            </div>

            <div className="z-10 w-full px-4 grid grid-cols-1 gap-y-10 sm:gap-y-16 lg:gap-y-20 xl:gap-y-24 md:grid-cols-2 justify-items-center items-center">
                <div className="z-10 col-span-1 flex justify-center items-center py-4 hover:-rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                    <Link href={'/app/stampbook'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <StampbookIcon />
                        <ButtonNext Topic="กรอก" Topic2="Stamp Book!" TextBtn="collect" />
                    </Link>
                </div>

                <div className="z-10 col-span-1 flex justify-center items-center py-4 hover:rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                    <Link href={'/app/club'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <ButtonNext Topic={"เยี่ยมทุก"} Topic2={"Club!"} TextBtn={"collect"} />
                        <ClubCollectIcon />
                    </Link>
                </div>

                <div className="z-10 col-span-1 flex justify-center items-center py-4 hover:-rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                    <Link href={'/app/game'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <GamerIconRight />
                        <ButtonNext Topic={"มาเล่น"} Topic2={"Game กัน!"} TextBtn={"play now"} />
                        <GamerIconLeft />
                    </Link>
                </div>

                <div className="z-10 mt-12 col-span-1 flex justify-center items-center hover:rotate-6 py-4 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                    <Link href={'/app/leaderboard'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <LeaderBoardIcon />
                        <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} />
                    </Link>
                </div>
            </div>

            <AccordionHome />

            <MapEng />

            <div className="w-full mt-20 p-4 bg-white border border-t-1 border-r-0 border-l-0 border-b-0 border-black flex flex-col justify-top items-center">
                <p className="mt-2 mb-6 text-xl sm:text-2xl lg:text-3xl font-medium">Our Supporters!</p>
                <SponsorCarousel />
            </div>
        </div>
    );
}
