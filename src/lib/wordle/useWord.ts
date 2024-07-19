'use client';

import { useState, useEffect } from "react";
import { fetchWord } from "./actions";

export function useWord() {
    const [word, setWord] = useState("");


    useEffect(() => {
        const updateWord = async () => {
            const updateWord = await fetchWord();
            setWord(updateWord);
        }
        console.log("wordle")
        updateWord()
    }, []);

    return word;
}

