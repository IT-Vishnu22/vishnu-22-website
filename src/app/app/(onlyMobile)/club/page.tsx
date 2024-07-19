'use client'
import Style from "./styles.module.css";
import { useState, useEffect, useContext } from "react";
import { PriceIcon } from "@/assets/icon/ClubIcon";
import { ClubSection } from "./ClubSection";
import { addUser } from "@/lib/club/progress";
import { GetProgress } from "@/lib/club/getData";
import { UserContext } from "@/lib/contexts/user";



export default function ClubPage() {
  //get studentId from login
  const { firebaseUser, data } = useContext(UserContext);
  const studentId = data?.studentId

  addUser(studentId)
  const [clubCollect, setClubCollect] = useState<number>(0);

  useEffect(() => {
    const getClubCollections = async () => {
      const count = await GetProgress(studentId)
      setClubCollect(count);
    }
    console.log("club")
    getClubCollections()
  }, []);

  return (
    <div className={Style.bgPage}>
      <p className="font-bold text-4xl">Club</p>
      <p className="font-medium text-xl">เยี่ยมชมทุกชมรม และดูกันว่า<br />ชมรม ไหนดีที่สุดสำหรับคุณ!</p>
      <div className="flex flex-row justify-center items-center gap-2">
        <PriceIcon />
        <p className="font-bold text-2xl">{clubCollect > 3 ? 3 : clubCollect}/3</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[20px] pb-12">
        <ClubSection/>
      </div>
    </div>
  )
}
