"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { falseArray, trueArray } from "@/lib/club/array";
import club from "@/data/club.json";
import Style from "./styles.module.css";

export default function ClubPage() {
    const [openPopUp, setOpenPopUp] = useState<boolean>(true);
    const [expanded, setExpanded] = useState<boolean[]>(falseArray);
    const [search, setSearch] = useState<string>("");

    const handleClickCardNoQuestion = (index: number) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <>
            {/* <PopUp show={openPopUp} setShow={setOpenPopUp} /> */}
            <div className={Style.bgPage}>
                <p className="font-roboto-condensed text-4xl font-bold text-blue-2">
                    Club
                </p>
                <p className="text-xl font-medium text-blue-2 drop-shadow-white">
                    เยี่ยมชมทุกชมรม และดูกันว่าชมรม
                    <br /> ไหนดีที่สุดสำหรับคุณ!
                </p>

                <input
                    type="text"
                    className="mb-10 mt-4 w-[300px] rounded-lg border border-none px-4 py-2 text-blue-2"
                    placeholder="Find club..."
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex flex-col items-center justify-center gap-12 pb-12">
                    {club.ClubDetails.filter((detail) => {
                        if (search.length > 0 && club.ClubDetails.length > 0) {
                            const searchText = search.toLocaleLowerCase();
                            return detail.Name.toLowerCase().includes(
                                searchText,
                            );
                        }
                        return true;
                    }).map((detail, index) => {
                        return (
                            <div
                                key={index}
                                className={`relative w-[270px] sm:w-[300px] ${expanded[index] ? "h-auto min-h-[270px] sm:min-h-[300px]" : "h-[270px] sm:h-[300px]"} justify-top flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-white p-8`}
                                onClick={() => handleClickCardNoQuestion(index)}
                            >
                                <div className="relative flex items-center justify-center">
                                    <Image
                                        src={`/club_logo/${detail.ImagePath}.png`}
                                        alt={`${detail.Name} logo`}
                                        width={140}
                                        height={140}
                                        className="aspect-square min-w-[140px] rounded-xl object-contain object-center"
                                        loading="lazy"
                                    />
                                </div>
                                <p
                                    className={`w-full text-lg font-semibold ${expanded[index] ? "" : "overflow-hidden text-ellipsis whitespace-nowrap"} `}
                                >
                                    {detail.Name}
                                </p>
                                <div
                                    className={`${expanded[index] ? "block" : "hidden"} w-full`}
                                >
                                    {detail.Detail.split("\n").map(
                                        (item, i) => {
                                            return (
                                                <p
                                                    className="font-normal"
                                                    key={i}
                                                >
                                                    {item}
                                                </p>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

const PopUp = ({
    show,
    setShow,
}: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const toDoList = [
        "กดการ์ดเพื่อดูรายละเอียดของชมรม",
        "ตอบคำถามเพื่อเก็บคะแนน",
        "เก็บคะแนนให้ครบ 3 คะแนน",
    ];

    const handlePopUpClick = () => {
        setShow(false);
    };

    useEffect(() => {
        if (show) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup function
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [show]);

    if (!show) return null;

    return (
        <div
            onClick={handlePopUpClick}
            className="fixed inset-0 z-40 cursor-pointer backdrop-blur-sm"
        >
            <div className="fixed left-1/2 top-1/2 z-50 flex h-3/4 min-h-[310px] w-[310px] max-w-[310px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
                <div className="relative flex min-h-[310px] w-[80vw] max-w-[320px] flex-col items-center justify-center sm:w-[70vw] md:w-[290px]">
                    <div className="absolute inset-0 mx-auto h-full w-full -rotate-6 bg-green-2 drop-shadow-md"></div>
                    <div className="relative inset-0 flex w-full flex-col items-center justify-center gap-6 bg-secondary p-8 drop-shadow-md">
                        <div className="flex flex-col gap-4 py-4">
                            <p className="text-center font-athiti text-2xl font-bold text-green-2 max-[270px]:text-xl">
                                เล่นยังไงนะ?
                            </p>
                            <ol className="max-[270px]:text-md list-outside list-decimal space-y-2 px-2 text-left text-base">
                                {toDoList.map(
                                    (message: string, index: number) => {
                                        return <li key={index}>{message}</li>;
                                    },
                                )}
                            </ol>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center justify-center gap-10">
                                <button
                                    className="border-1 max-[270px]:text-md rounded-full border border-green-2 bg-green-1 px-6 py-1 font-athiti text-base font-semibold text-green-2 transition hover:bg-green-2 hover:text-white"
                                    onClick={handlePopUpClick}
                                >
                                    พร้อมตอบคำถามแล้ว !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
