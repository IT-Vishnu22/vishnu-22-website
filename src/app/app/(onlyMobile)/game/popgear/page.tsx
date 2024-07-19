'use client';

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScoreDisplay from "@/components/ScoreDisplay";
import { BackIcon } from "@/components/BackIcon";
import { firestore } from "@/lib/firebase";
import {
    doc,
    collection,
    getDoc,
    getDocs,
    updateDoc,
    writeBatch,
    FieldValue,
    increment,
    setDoc,
} from "firebase/firestore";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserContext } from "@/lib/contexts/user";
import { addClick, onLoad } from "@/lib/popgear/actions";
import { set } from "firebase/database";
import { Console } from "console";

export default function PopGearPage() {
    const [picUrl, setPicUrl] = useState("/popgear_1.png");
    const [count, setCount] = useState(0);
    const [buffer, setBuffer] = useState(0);
    const [imageSize, setImageSize] = useState("75%");
    const user = useContext(UserContext);
    const [gameScoreboardData, setGameScoreboardData] = useState<
        { name: string; score: number }[]
    >([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            getDocs(collection(firestore, "popgear")).then(
                (all) => {
                    const sortedScore = all.docs
                        .sort((a, b) => b.data().score - a.data().score)
                        .map(
                            (a) => a.data() as { name: string; score: number },
                        );
                    setGameScoreboardData(sortedScore);
                },
            );

            if (user.data) {
                console.log("Oh no");
                onLoad(user.data.studentId, user.data.group).then((e) => {
                    setCount(e);
                });
                setLoaded(true);
            }
        }
    }, [user]);

    function lol() {
        setBuffer(0);
    }

    function touchStart() {
        setPicUrl("/popgear_2.png");
        setCount(count + 1);
        setImageSize("90%");
        //addClick("", "", count);
        setBuffer(buffer + 1);
        if (user.data) {
            addClick(user.data.studentId, user.data.group, count, buffer, lol);
        }
    }

    function touchEnd(e: { preventDefault: () => void; }) {
        setPicUrl('/popgear_1.png');
        e.preventDefault()
        setImageSize('87%');
        setTimeout(() => {
            setImageSize('84%');
            setTimeout(() => {
                setImageSize('81%');
                setTimeout(() => {
                    setImageSize('78%');
                    setTimeout(() => {
                        setImageSize('75%');
                    }, 25);
                }, 25);
            }, 25);
        }, 25);
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-none bg-blue-4 relative h-[91px] flex items-center justify-between z-[3]">
                <div className="pl-[35px]"><Link href="/app/game"><BackIcon/></Link></div>
                <h1 className="absolute right-16 left-16 text-center font-bold font-roboto-condensed text-[32px] text-white">
                    Pop Gear
                </h1>
            </div>
            <div className="relative w-full grow">
                <h1 className="absolute right-16 left-16 pt-5 text-center font-bold font-roboto-condensed text-[60px]">
                    {count}
                </h1>
                <div className="absolute inset-0 flex flex-col items-center">
                    {/* {picUrl} */}
                    <Image id="popEle" 
                        width={0} 
                        height={0} 
                        style={{ width: `${imageSize}`, height: 'auto', margin: 'auto'}}
                        src={picUrl} 
                        alt="pop element"
                        quality={100}
                        unoptimized= {true} />
                </div>
            </div>
            <div className="h-[90px]"></div>
            <ResizablePanelGroup 
                className="absolute bottom-[85px]"
                direction="vertical">
                <ResizablePanel
                    defaultSize={75}
                    className=" p-[81px]"
                    onTouchStart={touchStart} 
                    onTouchEnd={touchEnd}
                    onMouseDown={touchStart} 
                    onMouseUp={touchEnd}
                />
                <ResizableHandle className="bg-transparent p-[15px] mb-[-20px] z-[3]"/>
                <ResizablePanel defaultSize={8} minSize={10} maxSize={95}>
                <div className="flex flex-col items-stretch font-roboto-condensed rounded-t-[50px] bg-white w-full px-[10px] pt-[20px] h-full">
                <h1 className="text-center font-bold font-roboto-condensed text-[30px] mb-[10px] text-blue-2">Leaderboard</h1>
                    <ScrollArea>
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Reload to update Scoreboard
                        <ScoreDisplay data={gameScoreboardData} />
                    </ScrollArea>
                </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
        
    )
}