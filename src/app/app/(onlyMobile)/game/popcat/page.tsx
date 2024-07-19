"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScoreDisplay from "@/components/ScoreDisplay";
import { BackIcon } from "@/components/BackIcon";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserContext } from "@/lib/contexts/user";
import { addClick, onLoad } from "@/lib/popgear/actions";
import { set } from "firebase/database";
import { Console } from "console";

export default function PopcatPage() {
    const [picUrl, setPicUrl] = useState("/popgear_1.png");
    const [count, setCount] = useState(0);
    const [imageSize, setImageSize] = useState("75%");
    const user = useContext(UserContext);
 


    useEffect(() => {
        if (user.data) {
            console.log("Oh no")
            onLoad(user.data.studentId, user.data.group).then((e) => {
                setCount(e);
            });
        }
    }, [user]);

    function touchStart() {
        setPicUrl('/popgear_2.png');
        setCount(count + 1);
        setImageSize("90%");
        //addClick("", "", count);
        
        if (user.data) {
            addClick(user.data.studentId, user.data.group, count);
            
        }
    }

    function touchEnd(e: { preventDefault: () => void }) {
        setPicUrl("/popgear_1.png");
        e.preventDefault();
        setImageSize("87%");
        setTimeout(() => {
            setImageSize("84%");
            setTimeout(() => {
                setImageSize("81%");
                setTimeout(() => {
                    setImageSize("78%");
                    setTimeout(() => {
                        setImageSize("75%");
                    }, 25);
                }, 25);
            }, 25);
        }, 25);
    }

    return (
        <div className="flex h-full flex-col">
            <div className="relative z-[3] flex h-[91px] flex-none items-center justify-between bg-blue-4">
                <div className="pl-[35px]">
                    <Link href="/app/game">
                        <BackIcon />
                    </Link>
                </div>
                <h1 className="absolute left-16 right-16 text-center font-roboto-condensed text-[32px] font-bold text-white">
                    Pop Cat
                </h1>
            </div>
            <div className="relative w-full grow">
                <h1 className="absolute left-16 right-16 pt-5 text-center font-roboto-condensed text-[60px] font-bold">
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
            <ResizablePanelGroup
                className="absolute bottom-[85px]"
                direction="vertical">
                <ResizablePanel
                    className="p-[81px]"
                    onTouchStart={touchStart}
                    onTouchEnd={touchEnd}
                    onMouseDown={touchStart}
                    onMouseUp={touchEnd}
                />
                <ResizableHandle className="z-[3] mb-[-20px] bg-transparent p-[15px]" />
                <ResizablePanel>
                    <ScrollArea className="flex h-full w-full items-stretch rounded-t-[50px] bg-white px-[10px] pt-[20px] font-roboto-condensed">
                        <ScoreDisplay start={1} />
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
