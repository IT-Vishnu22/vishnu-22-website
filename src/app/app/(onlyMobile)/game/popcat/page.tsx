'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScoreDisplay from "@/components/ScoreDisplay";
import { BackIcon } from "@/components/BackIcon";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

export default function PopcatPage() {
    const [ picUrl, setPicUrl ] = useState('/pic1.jpg');
    const [ count, setCount ] = useState(0);
    const [ imageSize, setImageSize ] = useState('65%');

    function touchStart() {
        setPicUrl('/pic2.jpg');
        setCount(count+1);
        setImageSize('80%');
    }

    function touchEnd(e: { preventDefault: () => void; }) {
        setPicUrl('/pic1.jpg');
        e.preventDefault()
        setImageSize('77%');
        setTimeout(() => {
            setImageSize('74%');
            setTimeout(() => {
                setImageSize('71%');
                setTimeout(() => {
                    setImageSize('68%');
                    setTimeout(() => {
                        setImageSize('65%');
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
                    Pop Cat
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
                        style={{ width: `${imageSize}`, height: 'auto', marginInline: 'auto', marginTop: '50%' }}
                        src='/vercel.svg' 
                        alt="pop element" />
                </div>
            </div>
            <ResizablePanelGroup 
                className="absolute bottom-[85px]"
                direction="vertical">
                <ResizablePanel
                    className=" p-[81px]"
                    onTouchStart={touchStart} onTouchEnd={touchEnd}
                    onMouseDown={touchStart} onMouseUp={touchEnd}/>
                <ResizableHandle className="bg-transparent p-[15px] mb-[-20px] z-[3]"/>
                <ResizablePanel>
                    <ScrollArea className="flex items-stretch font-roboto-condensed rounded-t-[50px] bg-white w-full px-[10px] pt-[20px] h-full">
                        <ScoreDisplay start={1}/>
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}