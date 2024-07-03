'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScoreDisplay from "@/components/ScoreDisplay";

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
        <>
            <div className="bg-blue-4 relative h-[91px] flex items-center justify-between">
                <div className="pl-[35px]"><Link href="/app/game">---</Link></div>
                <h1 className="absolute right-16 left-16 text-center font-bold font-roboto-condensed text-[32px] text-white">
                    Pop Cat
                </h1>
            </div>
            <div className="relative w-full h-[60%]"
                onTouchStart={touchStart} onTouchEnd={touchEnd}
                onMouseDown={touchStart} onMouseUp={touchEnd}>
                <h1 className="absolute right-16 left-16 pt-5 text-center font-bold font-roboto-condensed text-[60px]">
                    {count}
                </h1>
                <div className="absolute inset-0 flex flex-col items-center">
                    {/* {picUrl} */}
                    <Image id="popEle" 
                        width={0} 
                        height={0} 
                        style={{ width: `${imageSize}`, height: 'auto', margin: 'auto' }}
                        src='/vercel.svg' 
                        alt="pop element" />
                </div>
            </div>
            <ScrollArea className="flex items-stretch font-roboto-condensed rounded-t-[50px] bg-white absolute bottom-[90px] w-full px-[20px] py-[20px] h-[200px]">
                <ScoreDisplay start={1}/>
            </ScrollArea>
            {/* <div className="font-roboto-condensed rounded-t-[50px] bg-white absolute bottom-[85px] w-full px-[40px] py-[25px]">
                <ul className="text-[20px]">
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">1<sup>st</sup></span>
                            <span>หน่วย????????</span>
                        </div>
                        <div><span>9999</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">2<sup>nd</sup></span>
                            <span>หน่วย??????????????</span>
                        </div>
                        <div><span>8888</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">3<sup>rd</sup></span>
                            <span>หน่วย?????</span>
                        </div>
                        <div><span>7777</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between mt-[10px]">
                        <div>
                            <span  className="inline-block w-[30px]">9<sup>th</sup></span>
                            <span>หน่วย?????</span>
                        </div>
                        <div><span>666</span><span> pts</span></div>
                    </li>
                </ul>
            </div> */}
        </>
    )
}