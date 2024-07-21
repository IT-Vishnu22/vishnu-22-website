import React from "react"
import Image from "next/image";
import MapImage from "@/assets/images/engmapnopin.png"

export default function MapEng() {
    return (
        <div className="w-full max-w-[800px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col justify-center items-center gap-2 p-4 sm:p-6 lg:p-8">
            <Image
                alt="Engineering Map"
                src={MapImage}
                width={0}
                height={0}
                loading="lazy"
                className="w-full max-w-[800px] h-auto object-center object-contain border border-1 border-primary"
            />
            <p className="font-regular text-xs sm:text-md md:text-lg text-center text-primary">
                254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
            </p>
        </div>
    )
}