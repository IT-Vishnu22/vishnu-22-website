'use client'
import Style from "./styles.module.css";
import { useState, useEffect, useContext } from "react";
import { PriceIcon } from "@/assets/icons/ClubIcon";
import { addUser } from "@/lib/club/progress";
import { GetProgress } from "@/lib/club/getData";
import { UserContext } from "@/lib/contexts/user";
import ClubSection from "@/components/ClubComponents/ClubSection";


export default function ClubPage() {
  //get studentId from login
  const { firebaseUser, data } = useContext(UserContext);
  const studentId = data?.studentId
  const [clubCollect, setClubCollect] = useState<number>(0);

  addUser(studentId);

  useEffect(() => {
    const getClubCollections = async () => {
      const count = await GetProgress(studentId)
      if (count && count >= 0) {
        setClubCollect(count);
      }
      else { setClubCollect(0); }
    }
    console.log("club")
    getClubCollections()
  }, [studentId]);

  // if(!firebaseUser || firebaseUser === undefined){
  //   return <h1>Please login</h1>
  // }

  return (
    <div className={Style.bgPage}>
      <p className="font-bold text-4xl text-blue-2">Club</p>
      <p className="font-medium text-xl text-blue-2 drop-shadow-white">เยี่ยมชมทุกชมรม และดูกันว่าชมรม<br /> ไหนดีที่สุดสำหรับคุณ!</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <PriceIcon />
        <p className="font-bold text-2xl text-blue-1">{clubCollect > 3 ? '3' : clubCollect.toString()}/3</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 pb-12">
        <ClubSection />
      </div>
    </div>
  )
}
