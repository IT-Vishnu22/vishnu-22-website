// wordle/pages.tsx ให้ตายก้อย่าหาย

"use client";

import wordList from "./wordList.json";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BackIcon } from "@/components/BackIcon";
import { QuestionIcon } from "@/components/QuestionIcon";
import { CloseIcon } from "@/components/CloseIcon";

import { addPlayed, didPlay } from "@/lib/wordle/actions";
import { useWord } from "@/lib/wordle/useWord";
import { UserContext } from "@/lib/contexts/user";

export default function WordlePage() {
    const answer: string = useWord();
    const { firebaseUser, data } = useContext(UserContext);
    const studentId = data?.studentId;
    const group = data?.group || null;

    const [isGuessed, setIsGuessed] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>("");
    const [popUpMessage, setPopUpMessage] = useState<string>("rules");

    // Added
    const [played, setPlayed] = useState<boolean>(true);

    useEffect(() => {
        const updatePlayed = async () => {
            const isPlayed = await didPlay(studentId, group);
            setPlayed(isPlayed);
        };
        if (!played || answer) {
            setIsGuessed(false);
        } else {
            setIsGuessed(true);
        }
        updatePlayed();
    }, [played, answer]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Regular expression to check for alphanumeric characters
            handleKeyClick(event.key);
        };
        // Add the event listener when the component mounts
        window.addEventListener("keydown", handleKeyDown);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [guess, isGuessed, handleKeyClick]);

    // for the physical keyboard e.g. of PC (not usable on mobile)
    // function handleKeyUp(e: { key: string }) {
    //     let key = e.key;
    //     if (isGuessed === true) {
    //         return 0;
    //     } else if (key.length === 1 && key.match(/[A-z]/) && guess.length < 5) {
    //         setGuess(guess + key);
    //     } else if (key === "Backspace") {
    //         setGuess(guess.slice(0, guess.length - 1));
    //     } else if (key === "Enter") {
    //         handleSubmitClick();
    //     }
    // }

    //for the in-web keyboard
    // Function to handle the keydown event

    function handleKeyClick(key: string) {
        // Regular expression to check for alphanumeric characters
        const isAlphanumeric = /^[a-z0-9]+$/i;
        if (isGuessed == true) {
            return 0;
        }
        if (isAlphanumeric.test(key) && key.length === 1 && guess.length < 5) {
            setGuess(guess + key);
        } else if (key === "Backspace") {
            setGuess(guess.slice(0, guess.length - 1));
        } else if (key === "Enter") {
            handleSubmitClick();
        }
    }

    function handleRulePopUpClick() {
        setPopUpMessage("rules");
    }

    function handlePopUpClick() {
        setPopUpMessage("");
    }

    function handleClearClick() {
        if (!isGuessed) {
            setGuess("");
        }
    }

    function handleSubmitClick() {
        if (guess.length === 5 && guess.toLowerCase() === answer) {
            setPopUpMessage("เก่งมาก คุณทายถูก!");
            setIsGuessed(true);
            addPlayed(studentId, group, true);
        } else if (guess.length != 5) {
            setPopUpMessage("กรุณากรอกคำที่มี 5 ตัวอักษร");
        } else if (!wordList.includes(guess.toLowerCase())) {
            setPopUpMessage("กรุณากรอกคำที่มีอยู่จริง");
            // if you want to add a word e.g. chula, add it in wordList.json
        } else {
            setPopUpMessage(
                "คำตอบของคุณยังไม่ถูกซักทีเดียว ลองปรึกษากับเพื่อนในหน่วยดูดีไหม?",
            );
            setIsGuessed(true);
            addPlayed(studentId, group, false);
        }
    }

    return (
        <div className="w-full font-roboto-condensed">
            <div className="relative flex h-[91px] items-center justify-between bg-blue-4">
                <div className="pl-[35px]">
                    <Link href="/app/game">
                        <BackIcon />
                    </Link>
                </div>
                <h1 className="absolute left-16 right-16 text-center font-roboto-condensed text-[32px] font-bold text-white">
                    Wordle
                </h1>
                <div className="pr-[35px]">
                    <Link href="" onClick={handleRulePopUpClick}>
                        <QuestionIcon />
                    </Link>
                </div>
            </div>

            {popUpMessage != "" && (
                <PopUp message={popUpMessage} handleClick={handlePopUpClick} />
            )}

            <div className="mx-4 flex flex-col items-center space-y-4 pt-32">
                <Guess
                    answer={answer}
                    guess={guess.toLowerCase()}
                    isGuessed={isGuessed}
                />
                <Keyboard handleClick={handleKeyClick} />
                <div className="mx-4 flex w-full justify-center gap-2">
                    {answer ? (
                        !firebaseUser ? (
                            <p>No user: Please login first.</p>
                        ) : !group ? (
                            <p>
                                This is only for 108: If you are 108, please
                                contact IT.
                            </p>
                        ) : played ? (
                            <p>คุณได้เล่นไปแล้ว</p>
                        ) : (
                            <>
                                <Button
                                    className="h-16 w-32 rounded-xl border-2 border-gray-700 bg-gray-300 font-athiti text-[20px] font-bold text-black shadow-[3px_4px_0px_#374151] hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white" //shadow gray-700
                                    type="submit"
                                    onClick={handleClearClick}
                                >
                                    ล้าง
                                </Button>
                                <Button
                                    className="h-16 w-32 rounded-xl border-2 border-blue-1 bg-blue-4 font-athiti text-[20px] font-bold shadow-[3px_4px_0px_#2A334E] hover:bg-blue-1 focus:bg-blue-1"
                                    type="submit"
                                    onClick={handleSubmitClick}
                                >
                                    ส่งคำตอบ
                                </Button>
                            </>
                        )
                    ) : (
                        <p>Closed. Game open: 9.00 - 20.00</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function PopUp({
    message,
    handleClick,
}: {
    message: string;
    handleClick: VoidFunction;
}) {
    const bgColor =
        message === "เก่งมาก คุณทายถูก!"
            ? "bg-green-300"
            : message === "กรุณากรอกคำที่มี 5 ตัวอักษร" ||
                message === "กรุณากรอกคำที่มีอยู่จริง"
              ? "bg-yellow-300"
              : "bg-gray-300";

    if (message === "rules") {
        return (
            <div className="w-1/2">
                <div className="fixed left-1/2 top-1/2 flex h-3/4 min-h-[310px] max-w-[310px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
                    <div className="relative flex min-h-[310px] flex-col items-center justify-center">
                        <div className="absolute inset-0 mx-auto h-full w-full -rotate-6 bg-green-2 drop-shadow-md"></div>
                        <div className="relative inset-0 flex w-full flex-col items-center justify-center gap-6 bg-secondary p-8 drop-shadow-md">
                            <div className="flex flex-col gap-2">
                                <p className="text-center font-athiti font-bold text-green-2 min-[270px]:text-base min-[330px]:text-3xl">
                                    เล่นยังไงนะ?
                                </p>
                                <ul className="list-outside list-disc px-2 font-athiti min-[270px]:text-sm min-[330px]:text-base">
                                    <li>
                                        ตัวอักษรที่ถูกต้องแล้วอยู่ในตำแหน่งที่ถูกต้องจะแสดงเป็น
                                        <b className="text-green-600">
                                            สีเขียว
                                        </b>
                                    </li>
                                    <li>
                                        ตัวอักษรที่ถูกต้องแต่อยู่ในตำแหน่งที่ผิดจะแสดงเป็น
                                        <b className="text-yellow-600">
                                            สีเหลือง
                                        </b>
                                    </li>
                                    <li>
                                        ตัวอักษรที่ไม่อยู่ในคำปริศนาจะแสดงเป็น
                                        <b className="text-gray-400">สีเทา</b>
                                    </li>
                                    <li>
                                        Agent 1 คนจะสามารถทายคำได้เพียง 1
                                        ครั้งเท่านั้น
                                        เพราะฉะนั้นอย่าลืมช่วยกันในหน่วยด้วยนะ
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center justify-center gap-10">
                                    <button
                                        className="border-1 rounded-full border border-green-2 bg-green-1 px-6 py-1 font-athiti font-bold text-green-2 transition hover:bg-green-2 hover:text-white min-[270px]:text-xs min-[330px]:text-base"
                                        onClick={handleClick}
                                    >
                                        เดาคำปริศนาเลย!!!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center">
                <div
                    className={` ${bgColor} absolute m-4 flex items-start rounded-xl border-2 border-[rgba(0,0,0,0.7)] p-4`}
                >
                    <div className="pt-4 font-athiti">
                        <p className="text-center">{message}</p>
                    </div>

                    <Button
                        className="absolute right-0 top-0 -mr-2 mt-2 h-5 bg-transparent text-black hover:bg-transparent"
                        onClick={handleClick}
                    >
                        <CloseIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

function Guess({
    answer,
    guess,
    isGuessed,
}: {
    answer: string;
    guess: string;
    isGuessed: boolean;
}) {
    return (
        <div className="mx-2 flex w-screen max-w-[390px] justify-center">
            <div className="mx-4 grid w-full max-w-[390px] grid-cols-5 gap-2">
                {new Array(5).fill(0).map((_, i) => {
                    const bgColor = !isGuessed
                        ? "bg-white"
                        : guess[i] === answer[i]
                          ? "bg-green-300"
                          : answer.includes(guess[i])
                            ? "bg-cream"
                            : "bg-white";

                    if (isGuessed) {
                        return (
                            <div
                                className={`h-16 ${bgColor} flex items-center justify-center rounded-xl border-2 border-blue-4 font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}
                                key={i}
                            >
                                {guess[i]}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                className="flex h-16 items-center justify-center rounded-xl border-2 border-blue-4 bg-white font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]"
                                key={i}
                            >
                                {guess[i]}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

function Keyboard({ handleClick }: { handleClick: (key: string) => void }) {
    const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    return (
        <div className="mx-2 w-[25%]">
            {qwerty.map((row) => (
                <div className="flex justify-center" key={row}>
                    {row.split("").map((key: string) => (
                        <Button
                            id={key}
                            className={`m-px flex h-10 w-1 items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-300 px-[17%] text-center font-bold uppercase text-black hover:text-white md:rounded-xl`}
                            onClick={() => handleClick(key)}
                            key={key}
                        >
                            {key}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
}
