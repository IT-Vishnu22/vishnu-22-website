'use client'
import React, { useContext } from "react";
import Link from "next/link";
import style from "./styles.module.css";
import Image from "next/image";

import { Logo } from "@/assets/icons/LogoVishnu22";
import { LeaderBoardIcon, ClubCollectIcon, StampbookIcon, GamerIconLeft, GamerIconRight, ArrowRightIcon } from "@/assets/icons/HomeIcon";
import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import { SponsorCarousel } from "@/components/HomeComponents/Sponsor";
import { IntaniaNewsHeader } from "@/components/HomeComponents/IntaniaNews";
import { DisableContext } from "@/lib/contexts/disable";
import bgImage from "@/assets/images/backgroundHomepageOnPC.png";

export default function Home() {

    const disableComponent: boolean = useContext(DisableContext);

    return (
        <>
            {/* <div className="fixed inset-0 z-[-1]">
                <Image
                    src={bgImage}
                    alt="Background"
                    quality={75}
                    priority
                    className="w-full h-full opacity-1 object-contain repeat"
                    fill
                    onLoad={(e) => {
                        
                    }}
                />
            </div> */}

            <div className={style.bgPage}>

                <div className="sm:hidden w-full flex flex-row justify-center items-center">
                    <Logo />
                </div>

                <div className="w-[90vw] max-w-[800px] aspect-video mb-10">
                    <IntaniaNewsHeader></IntaniaNewsHeader>
                    <div className="flex flex-row justify-end items-center gap-x-2 pt-3 px-2">
                        <Link href="/intania_news" className="font-semibold text-base md:text-xl">ดูทั้งหมด </Link>
                        <ArrowRightIcon />
                    </div>
                </div>


                <div className="z-10 w-[80vw] px-4 grid grid-cols-1 gap-y-10 sm:gap-y-16 lg:gap-y-20 xl:gap-y-24 lg:grid-cols-2 justify-items-center items-center">
                    <div className="z-10 col-span-1 flex justify-center items-center py-4 hover:-rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                        <Link href={'/app/stampbook'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                            <StampbookIcon />
                            <ButtonNext Topic={"ตามล่า"} Topic2={"Stamp Book"} TextBtn={"collect"} isDisable={false} />
                        </Link>
                    </div>

                    <div className="z-10 col-span-1 flex justify-center items-center py-4 mt-8 hover:rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                        <Link href={'/app/club'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                            <ButtonNext Topic={"เยี่ยมทุก"} Topic2={"ชมรม"} TextBtn={"collect"} isDisable={false} />
                            <ClubCollectIcon />
                        </Link>
                    </div>


                    {
                        disableComponent ?
                            <>
                                <div className="z-10 col-span-1 flex justify-center items-center py-4">
                                    <div className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                                        <GamerIconRight />
                                        <ButtonNext Topic={"ล๊อค"} TextBtn={"play now"} isDisable={disableComponent} />
                                        <GamerIconLeft />
                                    </div>
                                </div>
                                <div className="z-10 col-span-1 flex justify-center items-center py-4 mt-14">
                                    <div className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                                        <LeaderBoardIcon />
                                        <ButtonNext Topic={"ล๊อค"} TextBtn={"check record"} isDisable={disableComponent} />
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="z-10 col-span-1 flex justify-center items-center py-4 hover:-rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                                    <Link href={'/app/game'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                                        <GamerIconRight />
                                        <ButtonNext Topic={"มาเล่น"} Topic2={"เกมกัน"} TextBtn={"play now"} isDisable={false} />
                                        <GamerIconLeft />
                                    </Link>
                                </div>
                                <div className="z-10 mt-12 col-span-1 flex justify-center items-center hover:rotate-6 py-4  mt-14 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                                    <Link href={'/leaderboard'} className="flex flex-row justify-center items-center transform transition-transform duration-300 sm:scale-110 lg:scale-115">
                                        <LeaderBoardIcon />
                                        <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} isDisable={false} />
                                    </Link>
                                </div>
                            </>
                    }
                </div>


                <AccordionHome />

                <MapEng />

                <div className="w-full mt-20 p-4 bg-white border border-t-1 border-r-0 border-l-0 border-b-0 border-black flex flex-col justify-top items-center">
                    <p className="mt-2 mb-8 text-xl sm:text-2xl lg:text-3xl font-medium">Our Supporters!</p>
                    <SponsorCarousel />
                </div>
            </div >
        </>
    );
}
