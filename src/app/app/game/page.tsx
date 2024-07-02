import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GamePage() {
  return (
    <div className="bg-[url('/BG_1.png')] bg-repeat-xy bg-contain h-full">

        <div className="h-[91px] items-center flex flex-col">
            <h1 className="text-center font-bold font-roboto-condensed text-[32px] text-blue-2 m-auto mt-[22px]">
              Game
            </h1>

        </div>
            <h2 className="text-center font-roboto-condensed text-[14px] text-blue-2 m-auto mt-[-28px] w-[276px] mb-[32px]">
              The fitness gram pacer test is a multi stage aerobic capacity test that gets progressively harder as it continues.
            </h2>

        <div className="border-[1px] border-red-500 flex flex-col gap-10">

          <div className="w-[330px] m-auto max-[425px]:w-[80%]">

            <div className="bg-blue-4 rounded-[24px] border-[5px] border-[#2A334E] shadow-[9px_9px_0px_0px_rgba(42,51,78)]">

              <div className="mt-[8px] mb-[8px] size-[5px] flex flex-row m-auto gap-2 w-[42px] h-[8px]">
                <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
                <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
              </div>

              <div>
                <Image src='/wordle_box.svg'
                  width={0}
                  height={0}
                  style={{ width: `100%`, height: 'auto', margin: 'auto', padding: "0px 30px",}}
                  alt="wordle"/>
              </div>

              <div className="px-[30px] my-[15px]">
                <Link href="/app/game/wordle"><Button className="rounded-full w-full font-roboto-condensed font-bold text-[24px] text-blue-2 bg-[#ECD8C1] hover:bg-white hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">Play</Button></Link>
              </div>

            </div>

          </div>

          <div className="w-[330px] m-auto max-[425px]:w-[80%]">

          <div className="bg-blue-4 rounded-[24px] border-[5px] border-[#2A334E] shadow-[9px_9px_0px_0px_rgba(42,51,78)]">

            <div className="mt-[8px] mb-[8px] size-[5px] flex flex-row m-auto gap-2 w-[42px] h-[8px]">
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
            </div>

            <div>
              <Image src='/popcat_box_placeholder.svg'
                width={0}
                height={0}
                style={{ width: `100%`, height: 'auto', margin: 'auto', padding: "0px 30px",}}
                alt="wordle"/>
            </div>

            <div className="px-[30px] my-[15px]">
            <Link href="/app/game/popcat"><Button className="rounded-full w-full font-roboto-condensed font-bold text-[24px] text-blue-2 bg-[#ECD8C1]  hover:bg-white hover:drop-shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">Play</Button></Link>
            </div>

          </div>

          </div>
        </div>
    </div>

  );
}
