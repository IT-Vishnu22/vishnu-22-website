"use client";
import { useState } from "react";
import {
    LeaderBoardIcon,
    ClubCollectIcon,
    StampbookIcon,
    GamerIconLeft,
    GamerIconRight,
    ArrowRightIcon,
} from "@/assets/icons/HomeIcon";
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
            <div className="flex w-full flex-row items-center justify-center sm:hidden">
                <Logo />
            </div>

            <div className="w-full px-6">
                <div className="flex h-[30vh] w-full items-end justify-end bg-white p-4 sm:h-[50vh] sm:p-6 lg:h-[70vh] lg:p-8 xl:h-[80vh]">
                    <p className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                        พาดหัวข่าว
                    </p>
                </div>
                <div className="flex flex-row items-center justify-end gap-x-2 pt-3">
                    <Link
                        href="\"
                        className="text-base font-medium sm:text-2xl"
                    >
                        ดูทั้งหมด{" "}
                    </Link>
                    <ArrowRightIcon></ArrowRightIcon>
                </div>
            </div>

            <div className="z-10 grid h-full w-full grid-cols-1 items-center justify-items-center space-y-[100px] md:grid-cols-2">
                <div className="col-span-1 flex items-center justify-center">
                    <button className="flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <StampbookIcon />
                        <ButtonNext
                            Topic="กรอก"
                            Topic2="Stamp Book!"
                            TextBtn="collect"
                        />
                    </button>
                </div>

                <div className="z-10 col-span-1 flex items-center justify-center">
                    <button className="flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <ButtonNext
                            Topic={"เยี่ยมทุก"}
                            Topic2={"Club!"}
                            TextBtn={"collect"}
                        />
                        <ClubCollectIcon />
                    </button>
                </div>

                <div className="z-10 col-span-1 flex items-center justify-center">
                    <button className="flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <GamerIconRight />
                        <ButtonNext
                            Topic={"มาเล่น"}
                            Topic2={"Game กัน!"}
                            TextBtn={"play now"}
                        />
                        <GamerIconLeft />
                    </button>
                </div>

                <div className="z-10 col-span-1 flex items-center justify-center">
                    <button className="flex transform flex-row items-center justify-center transition-transform duration-300 sm:scale-110 lg:scale-125">
                        <LeaderBoardIcon />
                        <ButtonNext
                            Topic={"Leaderboard"}
                            TextBtn={"check record"}
                        />
                    </button>
                </div>
            </div>

            <AccordionHome />

            <MapEng />

            <SponsorCarousel />
        </div>
    );
}
