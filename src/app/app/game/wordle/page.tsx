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

    function handleSubmitClick() {
        if (guess.length === 5 && guess.toLowerCase() === answer) {
            setPopUpMessage('You won!');
            setIsGuessed(true);
        }
        else if (guess.length != 5) {
            setPopUpMessage('Please enter a 5-letter word.');
        }
        else if (!wordList.includes(guess.toLowerCase())) {
            setPopUpMessage('Please enter a valid word.');
            // if you want to add a word e.g. chula, add it in wordList.json
        }
        else {
            setPopUpMessage('The answer isn\'t quite your guess. Maybe discuss with your group?')
            setIsGuessed(true);
        }
    }

    function handlePopUpClick() {
        setPopUpMessage('');
    }

    function handleRulePopUpClick() {
        setPopUpMessage('rules');
    }

    return (
        <div className="font-roboto-condensed">

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

            <div className="flex flex-col items-center pt-32 space-y-8">
            
                <Guess
                    answer={"hello"}
                    guess={guess.toLowerCase()}
                    isGuessed={isGuessed}
                />
                <Button
                    className="w-32 h-16 font-bold border-2 text-[20px] border-blue-1 bg-blue-4 hover:bg-blue-1 rounded-xl shadow-[3px_4px_0px_#2A334E]"
                    type="submit"
                    onClick={handleSubmitClick}
                >
                    Submit
                </Button>
            </div>

        </div>
    );
}

function PopUp({ message, onClick }: { message: string, onClick: VoidFunction }) {

    const bgColor = (message === 'You won!')
        ? 'bg-green-300'
        : (message === 'Please enter a 5-letter word.') || (message === 'Please enter a valid word.')
            ? 'bg-yellow-300'
            : 'bg-gray-300'
    
    return (
        <div className="flex justify-center">
            <div className={` ${bgColor} border-2 border-[rgba(0,0,0,0.7)] rounded-xl p-4 m-8 absolute flex items-start`}>
                <div className="pt-4">
                    {message === 'rules'
                        ? <p><b>Welcome to Wordle!</b> Before playing, here are some rules:<br /><br />1. You can only guess a 5-letter word once.<br />2. Group score is based on how many people correctly guess the word.<br />3. You can discuss within your group what the answer is.<br /><br />Have fun!</p>
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

        <div className="flex justify-center mx-2">
            <div className="grid grid-cols-5 gap-2">
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
                            <div className={`h-16 w-16 ${bgColor} items-center flex justify-center border-2 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}>
                                {guess[i]}
                            </div>
                        )
                    } else {
                        return (
                            <div className={`h-16 w-16 bg-white items-center flex justify-center border-2 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}>
                                {guess[i]}
                            </div>
                        );
                    }

                })}
            </div>
        </div>

    );
}