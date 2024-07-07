import React from "react"
import Image from "next/image";

export default function MapEng() {
    return (
        <div className="max-w-[1000px] my-4 flex flex-col items-center gap-2 p-4 sm:p-6 lg:p-8">
            <Image
                alt="Engineering Map"
                src="/images/engmapnopin.png"
                width={827}
                height={431}
                layout="responsive"
                className="border-2 border-primary"
            />
            <p className="font-regular text-xs sm:text-md md:text-lg text-center text-primary">
                254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
            </p>
        </div>
    )
}