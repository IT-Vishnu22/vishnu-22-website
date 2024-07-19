'use client'
import { ClubTemp } from "@/components/ClubComponents/ClubTemp";
import Style from "./styles.module.css";
import { useState, useEffect } from "react";
import { PriceIcon } from "@/assets/icons/ClubIcon";

export default function ClubPage() {
  const [clubCollect, setClubCollect] = useState<number>(0);

  useEffect(() => {
    // const getClubCollections = async () => {
    //   const res = await fetch("https://api.example.com/club");
    //   const data = await res.json();
    //   setClubCollect(data.[count]);
    // }
    setClubCollect(2);
  }, []);

  return (
    <div className={Style.bgPage}>
      <p className="font-bold text-4xl">Club</p>
      <p className="font-medium text-xl drop-shadow-white">เยี่ยมชมทุก Club และดูว่า<br />Club ไหนดีที่สุดสำหรับคุณ!</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <PriceIcon />
        <p className="font-bold text-2xl">{clubCollect > 3 ? 3 : clubCollect}/3</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[20px] pb-12">
        <ClubTemp Title="cardOne"/>
        <ClubTemp Title="cardTwo"/>
      </div>
    </div>
  )
}
