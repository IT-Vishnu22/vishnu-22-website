"use client";
import Image from "next/image";
import { CountAchieved } from "@/lib/stampbook/progress";

import { UserContext } from "@/lib/contexts/user";
import { Suspense, useContext, useEffect, useState } from "react";
import { StampBookSection } from "./stampBookSection";
import { Button } from "@/components/ui/button";

//const studentId = 'test'

export default function StampbookPage() {
    //get studentId from login
    const { firebaseUser, data } = useContext(UserContext);
    const studentId = data?.studentId;

    const [popUpMessage, setPopUpMessage] = useState<string>("rules");
    // if (!firebaseUser) {
    //     return <h1>Please log in first</h1>;
    // }

    return (
        <>
            <PopUp
                popUpMessage={popUpMessage}
                setPopUpMessage={setPopUpMessage}
            ></PopUp>
            <div className="flex flex-col items-center justify-evenly overflow-hidden bg-[url('/stampbookImages/bg_1.png')] bg-cover pt-8">
                <div className="relative flex w-auto items-center">
                    <h1 className="text-[32px] font-bold text-blue-1">
                        Stamp Book
                    </h1>
                    <button
                        className="absolute -right-[45px]"
                        onClick={() => {
                            setPopUpMessage("rules");
                        }}
                    >
                        <QuestionMark />
                    </button>
                </div>
                <MapImageSection />
                <CompletionBadgeSection />
                <ScoreSection userId={studentId} />
                <div className="flex w-auto flex-col pb-96 pt-16">
                    <Suspense fallback={<p>Loading stamp...</p>}>
                        <StampBookSection userId={studentId} />
                    </Suspense>
                </div>
            </div>
        </>
    );
}

const MapImageSection = () => {
    return (
        <div className="relative mt-10 h-[190px] w-[320px] border border-black">
            <Image
                src="/stampbookImages/engmap.png"
                alt="stampbook page"
                objectFit="cover"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};

const TempImageDay = () => {
    return (
        <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="40" cy="40" r="40" fill="#404040" />
        </svg>
    );
};

const ScoreSection = ({ userId }: { userId: string | undefined }) => {
    // setScore
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        const getScore = async () => {
            const s: number | undefined = await CountAchieved(userId);
            if (s) {
                setScore(s);
            }
        };
        getScore();
    });

    return (
        <div className="mt-8 flex items-center justify-between gap-3 text-2xl font-bold text-blue-1">
            <Image
                src="/stampbookImages/rewards.svg"
                alt="reward Image"
                width={25}
                height={25}
            />
            <p> {score}/8</p>
        </div>
    );
};

const CompletionBadgeSection = () => {
    return (
        <div className="mt-5">
            <p
                style={{ textShadow: "0px 4px 4px rgba(255, 255, 255, 1)" }}
                className="text-clip text-center font-athiti text-xl font-medium text-blue-1 filter"
            >
                วงกลมคืออะไรนะ??? <br /> มารอดูกันใน{" "}
                <span className="font-bold">ค่าย Vishnu!</span>
            </p>
            <div className="relative mt-4 flex justify-between gap-10">
                {[123, 123122, 134123123].map((item, index) => (
                    <div key={item} className="relative">
                        <TempImageDay />
                        <Image
                            className="absolute left-1/2 top-1/2 z-[11] aspect-square -translate-x-1/2 -translate-y-1/2"
                            src="/stampbookImages/lock.svg"
                            alt="badge is locked"
                            width={30}
                            height={30}
                        />
                    </div>
                ))}
                <div className="pointer-events-none absolute top-1/2 z-10 h-[10px] w-full -translate-y-1/2 bg-[#404040]"></div>
            </div>
        </div>
    );
};

const QuestionMark = () => {
    return (
        <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.181885"
                y="0.181641"
                width="28.4375"
                height="28.4375"
                rx="14.2188"
                fill="white"
            />
            <path
                d="M14.5 0.28125C11.6878 0.28125 8.93875 1.11517 6.60049 2.67754C4.26223 4.23992 2.43978 6.46058 1.36359 9.05872C0.287411 11.6569 0.00583208 14.5158 0.554466 17.2739C1.1031 20.0321 2.4573 22.5656 4.44583 24.5542C6.43436 26.5427 8.9679 27.8969 11.7261 28.4455C14.4842 28.9942 17.3431 28.7126 19.9413 27.6364C22.5394 26.5602 24.7601 24.7378 26.3225 22.3995C27.8848 20.0613 28.7188 17.3122 28.7188 14.5C28.7148 10.7302 27.2155 7.11589 24.5498 4.45022C21.8841 1.78455 18.2698 0.285231 14.5 0.28125ZM14.5 23.25C14.1755 23.25 13.8583 23.1538 13.5885 22.9735C13.3187 22.7932 13.1084 22.537 12.9843 22.2372C12.8601 21.9374 12.8276 21.6076 12.8909 21.2893C12.9542 20.9711 13.1105 20.6787 13.3399 20.4493C13.5694 20.2198 13.8617 20.0636 14.1799 20.0003C14.4982 19.937 14.8281 19.9695 15.1278 20.0936C15.4276 20.2178 15.6839 20.4281 15.8641 20.6979C16.0444 20.9677 16.1406 21.2849 16.1406 21.6094C16.1406 22.0445 15.9678 22.4618 15.6601 22.7695C15.3524 23.0771 14.9351 23.25 14.5 23.25ZM15.5938 16.5891V16.6875C15.5938 16.9776 15.4785 17.2558 15.2734 17.4609C15.0683 17.666 14.7901 17.7812 14.5 17.7812C14.2099 17.7812 13.9317 17.666 13.7266 17.4609C13.5215 17.2558 13.4063 16.9776 13.4063 16.6875V15.5938C13.4063 15.3037 13.5215 15.0255 13.7266 14.8204C13.9317 14.6152 14.2099 14.5 14.5 14.5C16.3088 14.5 17.7813 13.2695 17.7813 11.7656C17.7813 10.2617 16.3088 9.03125 14.5 9.03125C12.6912 9.03125 11.2188 10.2617 11.2188 11.7656V12.3125C11.2188 12.6026 11.1035 12.8808 10.8984 13.0859C10.6933 13.291 10.4151 13.4062 10.125 13.4062C9.83493 13.4062 9.55673 13.291 9.35161 13.0859C9.14649 12.8808 9.03126 12.6026 9.03126 12.3125V11.7656C9.03126 9.05176 11.484 6.84375 14.5 6.84375C17.516 6.84375 19.9688 9.05176 19.9688 11.7656C19.9688 14.1418 18.0875 16.1311 15.5938 16.5891Z"
                fill="#2A334E"
            />
        </svg>
    );
};

const PopUp = ({
    popUpMessage,
    setPopUpMessage,
}: {
    popUpMessage: string;
    setPopUpMessage: any;
}) => {
    const handlePopUpClick = () => {
        setPopUpMessage("");
    };
    if (popUpMessage !== "") {
        document.body.style.overflow = "hidden";
        return (
            <button
                onClick={handlePopUpClick}
                className="absolute inset-0 z-20 cursor-pointer bg-white/60"
            >
                <div className="fixed left-1/2 top-1/2 z-50 flex h-3/4 min-h-[310px] w-[310px] max-w-[310px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
                    <div className="relative flex min-h-[310px] flex-col items-center justify-center">
                        <div className="absolute inset-0 mx-auto h-full w-full -rotate-6 bg-green-2 drop-shadow-md"></div>
                        <div className="relative inset-0 flex w-full flex-col items-center justify-center gap-6 bg-secondary p-8 drop-shadow-md">
                            <div className="flex flex-col gap-2">
                                <p className="text-center font-athiti font-bold text-green-2 min-[270px]:text-base min-[330px]:text-3xl">
                                    เล่นยังไงนะ?
                                </p>
                                <ul className="list-outside list-disc px-2 text-left font-athiti min-[270px]:text-sm min-[330px]:text-base">
                                    <li>
                                        กดบนรูปสถานที่แต่ละแห่งเพื่ออ่านข้อมูลต่างๆ
                                    </li>
                                    <li>ค้นหาเบาะแสรอบคณะและตอบคำถาม</li>
                                    <li>
                                        คะแนนของคุณจะถูกนับหากคุณหาคำตอบครบทั้ง
                                        8 สถานที่
                                    </li>
                                    <li>หลัง 20:00 จะไม่นับคะแนนนะ!</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center justify-center gap-10">
                                    <button
                                        className="border-1 rounded-full border border-green-2 bg-green-1 px-6 py-1 font-athiti font-bold text-green-2 transition hover:bg-green-2 hover:text-white min-[270px]:text-xs min-[330px]:text-base"
                                        onClick={handlePopUpClick}
                                    >
                                        เดาคำปริศนาเลย!!!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        );
    } else {
        document.body.style.overflow = "visible";
        return <></>;
    }
};
