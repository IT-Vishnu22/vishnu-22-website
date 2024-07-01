import Image from "next/image";

export default function GamePage() {
  return (
    <div className="bg-[url('/BG_1.png')] bg-repeat-y bg-contain h-full">


        <div className="h-[91px] items-center flex flex-col">
            <h1 className="text-center font-bold font-roboto-condensed text-[32px] text-blue-2 m-auto mt-[22px]">
              Game
            </h1>

        
        </div>
            <h2 className="text-center font-roboto-condensed text-[14px] text-blue-2 m-auto mt-[-28px] w-[276px] mb-[32px]">
              The fitness gram pacer test is a multi stage aerobic capacity test that gets progressively harder as it continues.
            </h2>

        <div className="w-[330px] m-auto border border-red-400">

          <div className="bg-blue-4 h-[240px] rounded-[24px] border-[5px] border-[#2A334E] shadow-[9px_9px_0px_0px_rgba(42,51,78)]">

            <div className="mt-[8px] mb-[8px] size-[5px] flex flex-row m-auto gap-2 w-[42px] h-[8px]">
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
              <div className="rounded-full border-[4px] border-[#EDEDED]"></div>
            </div>

            <div className="bg-[url('/wordle_box.svg')] bg-contain h-[149px] w-[265px] m-auto">
              
            </div>

          </div>

        </div>
    </div>

  );
}
