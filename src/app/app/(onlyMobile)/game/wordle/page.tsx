'use client';

import wordList from "./wordList.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BackIcon } from "@/components/BackIcon";
import { QuestionIcon } from "@/components/QuestionIcon";
import { CloseIcon } from "@/components/CloseIcon";

export default function WordlePage() {

    const answer: string = "hello";

    const [isGuessed, setIsGuessed] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>('');
    const [popUpMessage, setPopUpMessage] = useState<string>('rules');

    // for the physical keyboard e.g. of PC (not usable on mobile)
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
        }
        else if (key === 'Backspace') {
            setGuess(guess.slice(0, guess.length - 1));
        }
        else if (key === 'Enter') {
            handleSubmitClick();
        }
    }

    function handleRulePopUpClick() {
        setPopUpMessage('rules');
    }

    function handlePopUpClick() {
        setPopUpMessage('');
    }

    function handleClearClick() {
        if (!isGuessed) {
            setGuess('');
        }
    }

    function handleSubmitClick() {
        if (guess.length === 5 && guess.toLowerCase() === answer) {
            setPopUpMessage('เก่งมาก คุณทายถูก!');
            setIsGuessed(true);
        }
        else if (guess.length != 5) {
            setPopUpMessage('กรุณากรอกคำที่มี 5 ตัวอักษร');
        }
        else if (!wordList.includes(guess.toLowerCase())) {
            setPopUpMessage('กรุณากรอกคำที่มีอยู่จริง');
            // if you want to add a word e.g. chula, add it in wordList.json
        }
        else {
            setPopUpMessage('คำตอบของคุณยังไม่ถูกซักทีเดียว ลองปรึกษากับเพื่อนในหน่วยดูดีไหม?')
            setIsGuessed(true);
        }
    }

    return (
        <div className="w-full font-roboto-condensed">

            <div className="bg-blue-4 relative h-[91px] flex items-center justify-between">
                <div className="pl-[35px]"><Link href="/app/game"><BackIcon /></Link></div>
                <h1 className="absolute right-16 left-16 text-center font-bold font-roboto-condensed text-[32px] text-white">
                    Wordle
                </h1>
                <div className="pr-[35px]"><Link href="" onClick={handleRulePopUpClick}><QuestionIcon /></Link></div>
            </div>

            {popUpMessage != '' &&
                <PopUp
                    message={popUpMessage}
                    handleClick={handlePopUpClick}
                />}

            <div className="flex flex-col items-center pt-32 space-y-4 mx-4">
                <Guess
                    answer={answer}
                    guess={guess.toLowerCase()}
                    isGuessed={isGuessed}
                />
                <Keyboard
                    handleClick={handleKeyClick}
                />
                <div className="flex gap-2 w-full mx-4 justify-center">
                    <Button
                        className="w-32 h-16 font-bold border-2 font-athiti text-[20px] text-black hover:text-white focus:text-white border-gray-700 bg-gray-200 hover:bg-gray-700 focus:bg-gray-700 rounded-xl shadow-[3px_4px_0px_#374151]" //shadow gray-700
                        type="submit"
                        onClick={handleClearClick}
                    >
                        ล้าง
                    </Button>
                    <Button
                        className="w-32 h-16 font-bold border-2 font-athiti text-[20px] border-blue-1 bg-blue-4 hover:bg-blue-1 focus:bg-blue-1 rounded-xl shadow-[3px_4px_0px_#2A334E]"
                        type="submit"
                        onClick={handleSubmitClick}
                    >
                        ส่งคำตอบ
                    </Button>
                </div>
            </div>

        </div>
    );
}

function PopUp({ message, handleClick }: { message: string, handleClick: VoidFunction }) {

    const bgColor = (message === 'เก่งมาก คุณทายถูก!')
        ? 'bg-green-300'
        : (message === 'กรุณากรอกคำที่มี 5 ตัวอักษร') || (message === 'กรุณากรอกคำที่มีอยู่จริง')
            ? 'bg-yellow-300'
            : 'bg-gray-300'

    if (message === 'rules') {
        return (
            <div className="w-1/2">
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-[310px] max-w-[310px] h-3/4 w-3/4 flex flex-col justify-center items-center">
                    <div className="relative min-h-[310px] flex flex-col justify-center items-center">
                        <div className="absolute inset-0 w-full h-full bg-green-2 -rotate-6 mx-auto drop-shadow-md"></div>
                        <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                            <div className="flex flex-col gap-2">
                                <p className="text-center font-bold font-athiti min-[330px]:text-3xl max-[330px]:text-base text-green-2">เล่นยังไงนะ?</p>
                                <ul className="font-athiti min-[330px]:text-base max-[330px]:text-sm list-disc list-outside px-2">
                                    <li>ตัวอักษรที่ถูกต้องแล้วอยู่ในตำแหน่งที่ถูกต้องจะแสดงเป็น<b className="text-green-600">สีเขียว</b></li>
                                    <li>ตัวอักษรที่ถูกต้องแต่อยู่ในตำแหน่งที่ผิดจะแสดงเป็น<b className="text-yellow-600">สีเหลือง</b></li>
                                    <li>ตัวอักษรที่ไม่อยู่ในคำปริศนาจะแสดงเป็น<b className="text-gray-400">สีเทา</b></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row justify-center items-center gap-10">
                                    <button className="font-bold font-athiti min-[330px]:text-base max-[330px]:text-xs text-green-2 hover:text-white px-6 py-1 border border-1 border-green-2 rounded-full bg-green-1 hover:bg-green-2 transition" onClick={handleClick}>เดาคำปริศนาเลย!!!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center">
                <div className={` ${bgColor} border-2 border-[rgba(0,0,0,0.7)] rounded-xl p-4 m-4 absolute flex items-start`}>
                    <div className="pt-4 font-athiti">
                        <p className="text-center">{message}</p>
                    </div>

                    <Button
                        className="h-5 mt-2 -mr-2 bg-transparent hover:bg-transparent text-black absolute top-0 right-0"
                        onClick={handleClick}
                    >
                        <CloseIcon />
                    </Button>

                </div>
            </div>
        );
    }
}

function Guess({ answer, guess, isGuessed }: { answer: string, guess: string, isGuessed: boolean }) {
    return (

        <div className="w-screen max-w-[390px] flex justify-center mx-2">
            <div className="w-full max-w-[390px] grid grid-cols-5 gap-2 mx-4">
                {new Array(5).fill(0).map((_, i) => {
                    let bgColor = !isGuessed
                        ? 'bg-white'
                        : guess[i] === answer[i]
                            ? 'bg-green-300'
                          : answer.includes(guess[i])
                                ? 'bg-cream'
                                : 'bg-white'
                    
                    if (bgColor=='bg-cream'){
                        let countAns = 0;
                        for (let c of answer){
                            if (c == guess[i]){
                                countAns++;
                            }
                        }
                        if (countAns<=1){
                            bgColor = 'bg-white';
                        }
                    }

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
        <div className="w-[25%] mx-2">
            {qwerty.map((row) => (
                <div className="flex justify-center" key={row}>
                    {row.split("").map((key: string) => (
                        <Button
                            id={key}
                            className={`m-px flex h-10 w-1 items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-200 px-[17%] text-center font-bold uppercase text-black hover:text-white md:rounded-xl`}
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