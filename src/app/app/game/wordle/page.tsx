'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import wordList from './wordList.json'

export default function WordlePage() {

    const [ isGuessed, setIsGuessed ] = useState<boolean>(false);
    const [ guess, setGuess ] = useState<string>('');
    const [ popUpMessage, setPopUpMessage ] = useState<string>('start');
    window.addEventListener("keyup", (e) => handleKeyUp(e.key));
    const answer: string = "hello";

    function handleKeyUp(key: string) {
        if (key.length === 1 && key.match(/[A-z]/) && guess.length < 5) {
            setGuess(guess + key);
            console.log(guess);
        }
        // todo: fix the bug where pressing keys fast result in kinda frozen page
        else if (key === 'Backspace') {
            setGuess(guess.slice(0,guess.length-1));
        }
    }
    

    function handleSubmitClick() {

        if (guess.length === 5 && guess.toLowerCase() === answer) {
            setPopUpMessage('you won!');
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
            setPopUpMessage('The word isn\'t quite your guess. Maybe discuss with your group?')
            setIsGuessed(true);
        }
    }

    function handlePopUpClick() {
        setPopUpMessage('');
    }

    return (
        <div>

            <div className="bg-blue-4 relative h-[91px] flex items-center justify-between">
                <div className="pl-[35px]"><Link href="/app/game">---</Link></div>
                <h1 className="absolute right-16 left-16 text-center font-bold font-roboto-condensed text-[32px] text-white">
                    Wordle
                </h1>
            </div>

            <div className="flex flex-col items-center pt-32 space-y-8">
                {popUpMessage != '' &&
                <PopUp
                    message={popUpMessage}
                    onClick={handlePopUpClick}
                />}
                <Guess
                    answer={"hello"}
                    guess={guess.toLowerCase()}
                    isGuessed={isGuessed}
                />
                <Button
                    className="w-32 h-16 font-bold border-4 border-blue-1 bg-blue-4 hover:bg-blue-1 rounded-xl shadow-[3px_4px_0px_#2A334E]"
                    type="submit"
                    onClick={handleSubmitClick}
                >
                    Submit
                </Button>
            </div>

        </div>
    );
}

function PopUp({ message, onClick }) {

    const bgColor = (message === 'You won!')
    ? 'bg-green-300'
    : (message === 'Please enter a 5-letter word.') || (message === 'Please enter a valid word.')
    ? 'bg-yellow-300'
    : 'bg-gray-300'

    return(
        <div className={` ${bgColor} border-2 border-black rounded-xl p-4`}>
             <Button
                className="bg-transparent hover:bg-gray-400 text-black h-2 w-2 flex items-right"
                onClick={onClick}
             >
                 x
             </Button> 
            {message != 'start'
            ? <p>{message}</p>
            : <p>'Welcome to Wordle! Before playing, here are some rules:<br/><br/>1. You can only guess a 5-letter word once.<br/>2.The faster a group has correctly guessed the word, the more score they get.<br/>3. You can discuss within your group what the correct word is.<br/><br/>Have fun!'</p>
            }
        </div>
    );
}

function Guess({ answer, guess, isGuessed }) {
    // to do: collect guess for each person so that it does not change even after reload
    return (

        <div className="flex justify-center">
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
                        return(
                            <div className= {`h-16 w-16 ${bgColor} items-center flex justify-center border-4 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}>
                                {guess[i]}
                            </div>
                        ) 
                    } else {
                        return (
                            <div className= {`h-16 w-16 bg-white items-center flex justify-center border-4 border-blue-4 rounded-xl font-bold uppercase text-blue-1 shadow-[3px_4px_0px_#427383]`}>
                                {guess[i]}
                            </div>
                        );
                    }
                                       
                })}
            </div>
        </div> 

    );
}