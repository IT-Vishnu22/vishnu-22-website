import React from "react"
import { useState } from "react"

export default function MapEng() {

    const locationCenter = { lat: 13.736884795235772, lng: 100.53314279639083 };
    //waiting for solution map

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-[320px] h-[190px] bg-white">
            </div>
            <p className="text-[10px] text-[#404040]">254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</p>
        </div>
    )
}