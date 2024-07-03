import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GamePage() {
  return (
    <div className="bg-[url('/BG_1.png')] bg-repeat-xy bg-contain h-full flex flex-col">

        <div className="items-center flex flex-col">
            <h1 className="text-center font-bold font-roboto-condensed text-[32px] text-blue-2 m-auto mt-[22px]">
              Game
            </h1>

        </div>
        <div className=" m-auto mt-[0px] w-[276px] mb-[32px]">
            <h2 className="text-center font-roboto-condensed text-[20px] text-blue-2">
              มาเล่นเกมต่างๆ <br/>และแข่งขันกับเพื่อนๆ กัน!</h2>
        </div>
        {/* delete border */}
        <div className="flex flex-col gap-[5%] grow max-h-[500px]">

          <div className="w-[330px] mx-auto max-[425px]:w-[80%] h-[45%] [@media(max-height:750px)]:h-[40%] flex">

            <div className="max-h-[255px] max-[345px]:max-h-[200px] mx-auto bg-blue-4 bg-contain rounded-[24px] border-[5px] h-full border-[#2A334E] shadow-[9px_9px_0px_0px_rgba(42,51,78)]">

              <div className=" flex flex-row m-auto gap-2 w-full h-[24px] justify-center">
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
              </div>

              <div className="h-full px-[30px] w-full">
                <div className="h-[60%]">
                <Link href="/app/game/wordle">
                  <Image src='/wordle_box.svg'
                    width={0}
                    height={0}
                    style={{ width: `100%`, height: '100%', margin: 'auto',}}
                    alt="wordle"/></Link>
                </div>

                <div className=" h-[30%] [@media(max-height:750px)]:h-[27%] max-[345px]:h-[27%] flex flex-col place-content-center">
                  <Link href="/app/game/wordle"><Button className="rounded-full w-full font-roboto-condensed font-bold text-[24px] text-blue-2 bg-[#ECD8C1] hover:bg-white hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">Play</Button></Link>
                </div>
                
              </div>
              <div className="h-[24px]"></div>

            </div>

          </div>

          <div className="w-[330px] mx-auto max-[425px]:w-[80%] h-[45%] [@media(max-height:750px)]:h-[40%] flex">

            <div className="max-h-[255px] max-[345px]:max-h-[200px] mx-auto bg-blue-4 rounded-[24px] border-[5px] h-full border-[#2A334E] shadow-[9px_9px_0px_0px_rgba(42,51,78)]">

              <div className=" flex flex-row m-auto gap-2 w-full h-[24px] justify-center">
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED] size-[5px] my-auto"></div>
              </div>

              <div className="h-full px-[30px] w-full">
                <div className="h-[60%]">
                <Link href="/app/game/popcat">
                  <Image src='/popcat_box_placeholder.svg'
                    width={0}
                    height={0}
                    style={{ width: `100%`, height: '100%', margin: 'auto',}}
                    alt="popcatPic"/></Link>
                </div>

                <div className=" h-[30%] [@media(max-height:750px)]:h-[27%] max-[345px]:h-[27%] flex flex-col place-content-center">
                  <Link href="/app/game/popcat"><Button className="rounded-full w-full font-roboto-condensed font-bold text-[24px] text-blue-2 bg-[#ECD8C1] hover:bg-white hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">Play</Button></Link>
                </div>
                
              </div>
              <div className="h-[24px]"></div>

            </div>

          </div>
        </div>
        {/* delete border */}
        <div className="w-full h-[89px]"></div>
    </div>

  );
}
