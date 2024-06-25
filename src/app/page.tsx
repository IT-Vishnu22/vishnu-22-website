import Image from "next/image";
import { AccordionHome } from "@/components/HomeComponents/Accordion";
import MapEng from "@/components/HomeComponents/MapEngineer";
import ButtonNext from "@/components/HomeComponents/ButtonNextPage";
import { LeaderBoardIcon, ClubCollectIcon, StampbookIcon, GamerIconLeft, GamerIconRight } from "@/icons/HomeIcon";
export default function Home() {
  return (
    <div className="w-full h-full bg-[#B0C6B5] flex flex-col items-center justify-center gap-y-[60px] px-[10px]">
      <p>Change language</p>

      <p>News</p>

      <div className="flex flex-row justify-center items-center">
        <StampbookIcon />
        <ButtonNext Topic={"Complete"} Topic2={"Stampbook!"} TextBtn={"collect"} />
      </div>

      <div className="flex flex-row justify-center items-center">
        <ButtonNext Topic={"Collect"} Topic2={"Club's items!"} TextBtn={"collect"} />
        <ClubCollectIcon />
      </div>

      <div className="flex flex-row justify-center items-center">
        <GamerIconRight />
        <ButtonNext Topic={"Show Your Gamer"} Topic2={"Skills!"} TextBtn={"play now"} />
        <GamerIconLeft />
      </div>

      <div className="flex flex-row justify-center items-center">
        <LeaderBoardIcon />
        <ButtonNext Topic={"Leaderboard"} TextBtn={"check record"} />
      </div>

      <AccordionHome />
      <MapEng />
    </div>
  );
}
