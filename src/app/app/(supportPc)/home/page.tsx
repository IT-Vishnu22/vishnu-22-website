'use client'
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/assets/icons/LogoVishnu22";
import {
    LeaderBoardIcon,
    ClubCollectIcon,
    StampbookIcon,
    GamerIconLeft,
    GamerIconRight,
    ArrowRightIcon,
} from "@/assets/icons/HomeIcon";
import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import { SponsorCarousel } from "@/components/HomeComponents/Sponsor";
import { IntaniaNewsHeader } from "@/components/HomeComponents/IntaniaNews";

export default function Home() {
    const disableComponent: boolean = true;

    return (
        <div className="w-full min-h-screen pt-[100px] gap-[130px] md:gap-[150px] flex flex-col justify-center items-center">

            <div className="sm:hidden w-full flex flex-row justify-center items-center">
                <Logo />
            </div>

            <div className="mb-10 aspect-video w-[90vw] max-w-[800px]">
                <IntaniaNewsHeader></IntaniaNewsHeader>
                <div className="flex flex-row items-center justify-end gap-x-2 px-2 pt-3">
                    <Link
                        href="/intania_news"
                        className="text-base font-semibold md:text-xl"
                    >
                        ดูทั้งหมด{" "}
                    </Link>
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
                
                <div className="z-10 col-span-1 flex items-center justify-center py-4 hover:-rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                    <Link
                        href={"/app/game"}
                        className="lg:scale-115 flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110"
                    >
                        <GamerIconRight />
                        <ButtonNext
                            Topic={"มาเล่น"}
                            Topic2={"เกมกัน"}
                            TextBtn={"play now"}
                            isDisable={false}
                        />
                        <GamerIconLeft />
                    </Link>
                </div>

                {disableComponent ? (
                    <>
                        <div className="z-10 col-span-1 mt-14 flex items-center justify-center py-4">
                            <div className="lg:scale-115 flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110">
                                <LeaderBoardIcon />
                                <ButtonNext
                                    Topic={"Locked"}
                                    TextBtn={"check record"}
                                    isDisable={disableComponent}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="z-10 col-span-1 mt-12 mt-14 flex items-center justify-center py-4 hover:rotate-6 hover:scale-110 hover:transform hover:transition-transform hover:duration-300">
                            <Link
                                href={"/leaderboard"}
                                className="lg:scale-115 flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110"
                            >
                                <LeaderBoardIcon />
                                <ButtonNext
                                    Topic={"Leaderboard"}
                                    TextBtn={"check record"}
                                    isDisable={false}
                                />
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <AccordionHome />

            <MapEng />

            <div className="border-t-1 justify-top mt-20 flex w-full flex-col items-center border border-b-0 border-l-0 border-r-0 border-black bg-white p-4">
                <p className="mb-8 mt-2 text-xl font-medium sm:text-2xl lg:text-3xl">
                    Our Supporters!
                </p>
                <SponsorCarousel />
            </div>
        </div>
    );
}
