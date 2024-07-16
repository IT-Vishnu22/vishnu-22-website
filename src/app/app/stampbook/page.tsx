'use client'
import Image from "next/image";
import Link from "next/link";
import Config from "./config.json";
import { 
  CountAchieved, 
  Default, 
  Update
} from "@/lib/stampbook/progress";
      
import { UserContext } from '@/lib/context';
import { useContext, useEffect, useState } from "react";
import { StampBookSection } from "./stampBookSection";



type ConfigData = {
  key: number;
  imageRotate: number;
  dropShadow: string;
  width: number;
  height: number;
  posX: number;
  posY: number;
  line: {
    rotate: number;
    posX: number;
    posY: number;
  };
};

const studentId = '6638206121'

export default function StampbookPage() {
  ////get studentId from login
  //const { user } = useContext(UserContext);
  //const studentId = user?.uid
  //if(!user){
  //  return (
  //    <h1>Please log in first</h1>
  //  )
  //}

  return (
    <div className="mt-8 flex flex-col items-center justify-evenly overflow-hidden">
      <h1 className="text-[32px] font-bold text-blue-1">Stamp Book</h1>
      <MapImageSection />
      <ScoreSection userId={studentId}/>
      <CompletionBadgeSection />
      <div className="flex w-auto flex-col pb-96 pt-16">
        <StampBookSection userId={studentId}></StampBookSection>
      </div>
    </div>
  );
}

const MapImageSection = () => {
  return (
    <div className="relative mt-10 h-[190px] w-[320px]">
      <Image
        src="/stampbookimages/engmap.png"
        alt="stampbook page"
        objectFit="cover"
        fill={true}
      />
    </div>
  );
};

const TempImageDay = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="40" fill="#404040" />
    </svg>
  );
};

const ScoreSection = ({userId}:{userId:string|undefined}) => {

  // setScore
  const [score, setScore] = useState<number>(0)
  
  useEffect(()=>{
    const getScore = async() => {
      const s: number|undefined = await CountAchieved(userId)
      if(s){
        setScore(s)
      }
    }
    getScore() 
  })

  return (
    <div className="mt-8 flex items-center justify-between gap-3 text-2xl font-bold text-blue-1">
      <Image
        src="/stampbookImages/rewards.svg"
        alt="reward Image"
        width={25}
        height={25}
      />
      <p> {score}/8</p>
    </div>
  );
};

const CompletionBadgeSection = () => {
  return (
    <div className="relative mt-12 flex justify-between gap-10">
      {[1, 2, 3].map((item, index:number) => (
        <div
          key={index} 
          className="relative">
          <TempImageDay />
          <Image
            className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
            src="/stampbookImages/lock.svg"
            alt="badge is locked"
            width={30}
            height={30}
          />
        </div>
      ))}
      <div className="pointer-events-none absolute top-1/2 -z-10 h-[10px] w-full -translate-y-1/2 bg-[#404040]"></div>
    </div>
  );
};
