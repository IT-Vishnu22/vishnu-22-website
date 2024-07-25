"use client";

import { useEffect, useState } from "react";
import LoadingPodium from "@/components/loadingPodium";
import ScoreDisplay from "@/components/ScoreDisplay";
import Title from "@/components/Title";

import dynamic from "next/dynamic";
import { firestore } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const PodiumsDisplay = dynamic(() => import("@/components/PodiumsDisplay"), {
    ssr: false,
});

export default function Leaderboard() {
    // state of type : "game" and "water"
    const [showType, setShowType] = useState("game");
    const handleToggle = () => {
        if (showType === "game") {
            setShowType("water");
        } else {
            setShowType("game");
        }
    };
    const [gameScoreboardData, setGameScoreboardData] = useState<
        { name: string; score: number }[]
    >([]);

    const [waterScoreboardData, setWaterScoreboardData] = useState<
        { name: string; score: number }[]
    >([]);

    useEffect(() => {
        getDocs(collection(firestore, "score")).then((all) => {
            const sortedScore = all.docs
                .sort(
                    (a, b) =>
                        b.data().auto_added +
                        b.data().manual_added -
                        (a.data().auto_added + a.data().manual_added),
                )
                .map((a) => {
                    return {
                        score: (a.data().auto_added +
                            a.data().manual_added) as number,
                        name: a.data().houseName as string,
                    };
                });
            setGameScoreboardData(sortedScore);
        });
        getDocs(collection(firestore, "water-score")).then((all) => {
            const sortedScore = all.docs
                .sort(
                    (a, b) =>
                        b.data().percentage -
                        (a.data().percentage),
                )
                .map((a) => {
                    return {
                        score: (a.data().percentage) as number,
                        name: a.data().houseName as string,
                    };
                });
            setWaterScoreboardData(sortedScore);
        });
    }, []);

    return (
        <section
            className="flex max-h-full min-h-screen w-full flex-col items-center pb-5 transition-all"
            style={{
                backgroundColor: showType === "game" ? "#F0E5D7" : "#B0C6B5",
            }}
        >
            {/* Game Leaderboard top-3 podium display */}
            <div className="relative top-0 min-h-[500px] w-full">
                <LoadingPodium type={showType} />
                <PodiumsDisplay
                    type={showType}
                    data={
                        showType == "game"
                            ? gameScoreboardData
                            : waterScoreboardData
                    }
                />
            </div>

            {/* back icon & title */}
            <Title />

            {/* other sai score */}
            <ScoreDisplay
            startAt={4}
                data={(showType == "game"
                    ? gameScoreboardData
                    : waterScoreboardData
                ).slice(3)}
                suffix={showType == "game" ? "pts" : "%"}
            />

            {/* Toggle Icon */}
            <div
                className="absolute right-[20px] top-[38px] cursor-pointer"
                onClick={(e) => {
                    handleToggle();
                }}
            >
                <ToggleIcon />
            </div>
        </section>
    );
}

const ToggleIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
        >
            <path
                d="M3.36037 12.4229C3.19048 12.253 3.09504 12.0225 3.09504 11.7822C3.09504 11.5419 3.19048 11.3114 3.36037 11.1415L11.7812 2.71878L11.9081 2.61184C12.0827 2.49193 12.2938 2.43697 12.5047 2.4565C12.7157 2.47604 12.9131 2.56884 13.0627 2.71878L13.1678 2.84565C13.2881 3.02034 13.3434 3.23162 13.3242 3.44284C13.305 3.65406 13.2125 3.8519 13.0627 4.00203L6.18969 10.875H26.2812C26.5216 10.875 26.7521 10.9705 26.9221 11.1405C27.092 11.3104 27.1875 11.5409 27.1875 11.7813C27.1875 12.0216 27.092 12.2521 26.9221 12.4221C26.7521 12.592 26.5216 12.6875 26.2812 12.6875H4.00019C3.7603 12.6875 3.53022 12.5923 3.36037 12.4229ZM1.8125 17.2188C1.8125 16.9784 1.90798 16.7479 2.07793 16.578C2.24789 16.408 2.4784 16.3125 2.71875 16.3125H24.9998C25.1789 16.3126 25.354 16.3657 25.5029 16.4651C25.6519 16.5646 25.768 16.706 25.8367 16.8714C25.9053 17.0368 25.9234 17.2189 25.8887 17.3946C25.8539 17.5703 25.7679 17.7317 25.6414 17.8586L17.2188 26.2813L17.0919 26.3882C16.9054 26.514 16.6788 26.5661 16.456 26.5344C16.2333 26.5027 16.0303 26.3895 15.8863 26.2166C15.7423 26.0437 15.6676 25.8235 15.6767 25.5987C15.6858 25.3739 15.778 25.1605 15.9355 24.9998L22.8158 18.125H2.71875C2.4784 18.125 2.24789 18.0296 2.07793 17.8596C1.90798 17.6896 1.8125 17.4591 1.8125 17.2188Z"
                fill="white"
            />
        </svg>
    );
};
