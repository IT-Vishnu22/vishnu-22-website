'use client'
import { useState, useEffect, useContext } from "react";
import Image from "next/image";

import { falseArray, trueArray } from "@/lib/club/array";
import club from "@/data/club.json"
import Style from "./styles.module.css";

export default function ClubPage() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean[]>(falseArray);
  const [search, setSearch] = useState<string>("");

  const handleClickCardNoQuestion = (index: number) => {
    setExpanded(prevExpanded => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <>
      {/* <PopUp show={openPopUp} setShow={setOpenPopUp} /> */}
      <div className={Style.bgPage}>
        <p className="font-bold text-4xl text-blue-2">Club</p>
        <p className="font-medium text-xl text-blue-2 drop-shadow-white">เยี่ยมชมทุกชมรม และดูกันว่าชมรม<br /> ไหนดีที่สุดสำหรับคุณ!</p>

        <input type="text" className="w-[300px] rounded-lg py-2 px-4 mt-4 mb-10 border border-none text-blue-2" placeholder="Find club..." onChange={(e) => setSearch(e.target.value)} />

        <div className="flex flex-col justify-center items-center gap-12 pb-12">
          {
            club.ClubDetails.filter((detail) => {
              if (search.length > 0 && club.ClubDetails.length > 0) {
                const searchText = search.toLocaleLowerCase();
                return detail.Name.toLowerCase().includes(searchText);
              }
              return true;
            }).map((detail, index) => {
              return (
                <div
                  key={index}
                  className={`relative w-[270px] sm:w-[300px] ${expanded[index] ? 'h-auto min-h-[270px] sm:min-h-[300px]' : 'h-[270px] sm:h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center gap-4 overflow-hidden p-8`}
                  onClick={() => handleClickCardNoQuestion(index)}
                >
                  <div className="relative flex justify-center items-center">
                    <Image
                      src={`/club_logo/${detail.ImagePath}.png`}
                      alt={`${detail.Name} logo`}
                      width={140}
                      height={140}
                      className="min-w-[140px] aspect-square object-center object-contain rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <p className={`w-full text-lg font-semibold ${expanded[index] ? "" : "overflow-hidden text-ellipsis whitespace-nowrap"} `}>{detail.Name}</p>
                  <div className={`${expanded[index] ? 'block' : 'hidden'} w-full`}>
                    {
                      detail.Detail.split('\n').map((item, i) => {
                        return <p className="font-normal" key={i}>{item}</p>
                      })
                    }
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

const PopUp = ({ show, setShow }: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const toDoList = ["กดการ์ดเพื่อดูรายละเอียดของชมรม", "ตอบคำถามเพื่อเก็บคะแนน", "เก็บคะแนนให้ครบ 3 คะแนน"];

  const handlePopUpClick = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      onClick={handlePopUpClick}
      className="fixed inset-0 z-40 cursor-pointer backdrop-blur-sm"
    >
      <div className="fixed left-1/2 top-1/2 z-50 flex h-3/4 min-h-[310px] w-[310px] max-w-[310px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <div className="relative flex w-[80vw] sm:w-[70vw] md:w-[290px] max-w-[320px] min-h-[310px] flex-col items-center justify-center">
          <div className="absolute inset-0 mx-auto h-full w-full -rotate-6 bg-green-2 drop-shadow-md"></div>
          <div className="relative inset-0 flex w-full flex-col items-center justify-center gap-6 bg-secondary p-8 drop-shadow-md">
            <div className="flex flex-col gap-4 py-4">
              <p className="text-center font-athiti font-bold text-green-2 max-[270px]:text-xl text-2xl">
                เล่นยังไงนะ?
              </p>
              <ol className="list-outside list-decimal px-2 space-y-2 text-left max-[270px]:text-md text-base">
                {
                  toDoList.map((message: string, index: number) => {
                    return (<li key={index}>
                      {message}
                    </li>);
                  })
                }
              </ol>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-center gap-10">
                <button
                  className="border-1 rounded-full border border-green-2 bg-green-1 px-6 py-1 font-athiti font-semibold text-green-2 transition hover:bg-green-2 hover:text-white  max-[270px]:text-md text-base"
                  onClick={handlePopUpClick}
                >
                  พร้อมตอบคำถามแล้ว !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};