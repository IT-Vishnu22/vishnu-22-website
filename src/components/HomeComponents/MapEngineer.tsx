import React from "react"
import { useState } from "react"
import Image from "next/image";

export default function MapEng() {

    const locationCenter = { lat: 13.736884795235772, lng: 100.53314279639083 };
    //waiting for solution map

    return (
        <div className="w-full flex flex-col items-center gap-2 p-4 sm:p-6 lg:p-8">
            <Image
                alt="Engineering Map"
                src="/images/engmapnopin.png"
                width={827}
                height={431}
                layout="intrinsic"
                className="border border-2 border-primary"
            ></Image>
            <p className="font-regular text-xs sm:text-md md:text-lg text-center text-primary">254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</p>
        </div>
    )
}