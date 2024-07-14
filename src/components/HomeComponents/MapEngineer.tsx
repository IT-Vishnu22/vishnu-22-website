import React from "react"
import Image from "next/image";
import MapImage from "@/assets/images/engmapnopin.png"

export default function MapEng() {
    return (
        <div className="max-w-[1000px] my-4 flex flex-col items-center gap-2 p-4 sm:p-6 lg:p-8">
            <Image
                alt="Engineering Map"
                src={MapImage}
                width={0}
                height={0}
                className="border border-1 border-primary sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[850px]"
            />
            <p className="font-regular text-xs sm:text-md md:text-lg text-center text-primary">
                254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
            </p>
        </div>
    )
}