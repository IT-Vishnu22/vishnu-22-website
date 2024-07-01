'use client';

import Link from "next/link";
import { useState } from "react";

export default function PopcatPage() {
    const [ picUrl, setPicUrl ] = useState('/pic1.jpg');
    const [ count, setCount ] = useState(0);

    function touchStart() {
        setPicUrl('/pic2.jpg');
        setCount(count+1);
    }

    function touchEnd(e: { preventDefault: () => void; }) {
        setPicUrl('/pic1.jpg');
        e.preventDefault()
    }

    return (
        <>
            <div className="bg-blue-4 relative h-[91px] flex items-center justify-between">
                <div className="pl-[35px]"><Link href="/app/game">---</Link></div>
                <h1 className="absolute right-16 left-16 text-center font-bold font-roboto-condensed text-[32px] text-white">
                    Pop Cat
                </h1>
            </div>
            <div className="w-full h-2/3"
                onTouchStart={touchStart} onTouchEnd={touchEnd}
                onMouseDown={touchStart} onMouseUp={touchEnd}>
                <h1 className="absolute right-16 left-16 pt-5 text-center font-bold font-roboto-condensed text-[60px]">
                    {count}
                </h1>
                {picUrl}
            </div>
            <div className="font-roboto-condensed rounded-t-[50px] bg-white absolute bottom-[85px] w-full px-[40px] py-[20px]">
                <ul className="text-[16px]">
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">1<sup>st</sup></span>
                            <span>บ้าน????????</span>
                        </div>
                        <div><span>9999</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">2<sup>nd</sup></span>
                            <span>บ้าน??????????????</span>
                        </div>
                        <div><span>8888</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between">
                        <div>
                            <span  className="inline-block w-[30px]">3<sup>rd</sup></span>
                            <span>บ้าน?????</span>
                        </div>
                        <div><span>7777</span><span> pts</span></div>
                    </li>
                    <li className="flex justify-between mt-[10px]">
                        <div>
                            <span  className="inline-block w-[30px]">9<sup>th</sup></span>
                            <span>บ้าน?????</span>
                        </div>
                        <div><span>666</span><span> pts</span></div>
                    </li>
                </ul>
            </div>
        </>
    )
}