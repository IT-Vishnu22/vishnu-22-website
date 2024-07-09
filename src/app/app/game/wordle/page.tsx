'use client';

import wordList from './wordList.json'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { BackIcon } from "@/components/BackIcon";
import { QuestionIcon } from "@/components/QuestionIcon";
import { CloseIcon } from '@/components/CloseIcon';

export default function WordlePage() {

    const answer: string = "hello";

    const [isGuessed, setIsGuessed] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>('');
    const [popUpMessage, setPopUpMessage] = useState<string>('rules');

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [guess, isGuessed]);


    // for the physical keyboard e.g. of PC (not usable on mobile)
    function handleKeyUp(e: { key: string; }) {
        let key = e.key;
        if (isGuessed === true) {
            return 0;
        }
        else if (key.length === 1 && key.match(/[A-z]/) && guess.length < 5) {
            setGuess(guess + key);
        }
        else if (key === 'Backspace') {
            setGuess(guess.slice(0, guess.length - 1));
        }
        else if (key === 'Enter') {
            handleSubmitClick();
        }
    }

    //for the in-web keyboard
    function handleKeyClick(key: string) {
        if (isGuessed !== true) {
            if (guess.length < 5) {
                setGuess(guess + key);
            }
            else if (key === 'Backspace') {
                setGuess(guess.slice(0, guess.length - 1));
            }
            else if (key === 'Enter') {
                handleSubmitClick();
            }
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
                        onClick={handlePopUpClick}
                    />}

            <div className="flex flex-col items-center pt-32 space-y-4 mx-4">
                <Guess
                    answer={"hello"}
                    guess={guess.toLowerCase()}
                    isGuessed={isGuessed}
                />
                <Keyboard
                    onClick={handleKeyClick}
                />
                <div className="flex gap-2 w-full mx-4 justify-center">
                    <Button
                        className="w-32 h-16 font-bold border-2 text-[20px] text-black hover:text-white focus:text-white border-gray-700 bg-gray-300 hover:bg-gray-700 focus:bg-gray-700 rounded-xl shadow-[3px_4px_0px_#374151]" //shadow gray-700
                        type="submit"
                        onClick={handleClearClick}
                    >
                        ล้าง
                    </Button>
                    <Button
                        className="w-32 h-16 font-bold border-2 text-[20px] border-blue-1 bg-blue-4 hover:bg-blue-1 focus:bg-blue-1 rounded-xl shadow-[3px_4px_0px_#2A334E]"
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

function PopUp({ message, onClick }: { message: string, onClick: VoidFunction }) {

    const bgColor = (message === 'เก่งมาก คุณทายถูก!')
        ? 'bg-green-300'
        : (message === 'กรุณากรอกคำที่มี 5 ตัวอักษร') || (message === 'กรุณากรอกคำที่มีอยู่จริง')
            ? 'bg-yellow-300'
            : 'bg-gray-300'

    return (
        <div className="flex justify-center">
            <div className={` ${bgColor} border-2 border-[rgba(0,0,0,0.7)] rounded-xl p-4 m-4 absolute flex items-start`}>
                <div className="pt-4">
                    {message === 'rules'
                        ? <p><b>ยินดีต้อนรับสู่ Wordle!</b> ก่อนจะเริ่มเล่น ขอให้อ่านกติกากันซักหน่อย:<br /><br />1. คุณสามารถทายคำภาษาอังกฤษยาว 5 ตัวอักษรได้เพียงครั้งเดียวเท่านั้น<br />2. หากทายคำถูก หน่วยของคุณจะได้แต้ม โดยคะแนนของแต่ละหน่วยขึ้นอยู่กับจำนวนสมาชิกที่ทายคำถูก<br />3. คุณสามารถปรึกษากับเพื่อนได้ว่าคำตอบคืออะไร<br /><br />ขอให้โชคดีนะ!</p>
                        : <p className="text-center">{message}</p>
                    }
                </div>

                <Button
                    className="h-5 mt-2 -mr-2 bg-transparent hover:bg-transparent text-black absolute top-0 right-0"
                    onClick={onClick}
                >
                    <CloseIcon />
                </Button>

            </div>
        </div>
    );
}

function Guess({ answer, guess, isGuessed }: { answer: string, guess: string, isGuessed: boolean }) {
    return (

        <div className="w-screen max-w-[390px] flex justify-center mx-2">
            <div className="w-full max-w-[390px] grid grid-cols-5 gap-2 mx-4">
                {new Array(5).fill(0).map((_, i) => {
                    const bgColor = !isGuessed
                        ? 'bg-white'
                        : guess[i] === answer[i]
                            ? 'bg-green-300'
                            : answer.includes(guess[i])
                                ? 'bg-cream'
                                : 'bg-white'

                    if (isGuessed) {
                        return (
                            <div className={`h-16 ${bgColor} items-center flex justify-center border-2 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}>
                                {guess[i]}
                            </div>
                        )
                    } else {
                        return (
                            <div className="h-16 bg-white items-center flex justify-center border-2 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]">
                                {guess[i]}
                            </div>
                        );
                    }

                })}
            </div>
        </div>

    );
}

function Keyboard({ onClick }: { onClick: VoidFunction }) {

    const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    return (
        <div className="w-[25%] mx-2">
            {qwerty.map((row) => (
                <div className="flex justify-center">
                    {row.split('').map((key: string) => (
                        <Button
                            id={key}
                            className={`px-[17%] flex h-10 w-1 m-px bg-gray-300 items-center justify-center text-center border-2 border-gray-700 rounded-lg md:rounded-xl text-black hover:text-white font-bold uppercase`}
                            onClick={(e) => onClick(e.target.id)}
                        >
                            {key}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
}