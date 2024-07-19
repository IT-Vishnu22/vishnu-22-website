'use client'
import Image from "next/image";

// club json
import club from "@/data/club.json"
import { useContext, useEffect, useState } from "react";
import Progress from "@/lib/club/progress";
import { GetCompletedClub } from "@/lib/club/getData";
import { falseArray, trueArray } from "@/lib/club/array";
import { UserContext } from "@/lib/contexts/user";
import { clubItem } from "@/interfaces/Club";

import ApproveImage from "@/assets/images/stamp.png"

export const ClubSection = () => {
  //get studentId from login
  const { firebaseUser, data } = useContext(UserContext);
  const studentId = data?.studentId
  const group = data?.group || null


  const [expanded, setExpanded] = useState<boolean>(false);
  const [popUpOpen, setPopUpOpen] = useState<boolean[]>(falseArray);
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<boolean[]>(falseArray);
  const [canEditAnswer, setCanEditAnswer] = useState<boolean[]>(trueArray);
  const [currentIdex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const setArray = async () => {
      const completeClubName: string[] = await GetCompletedClub(studentId)

      if (!completeClubName) {
        return;
      }

      if (completeClubName.length === 0) {
        return;
      }

      const correctAnsIndex = club.ClubDetails.map((item: clubItem, index: number) => {
        if (completeClubName.includes(item.Name)) {
          return index
        }
      })

      const newCorrectAnswer = correctAnswer.map((checkAns, index: number) => {
        if (correctAnsIndex.includes(index)) {
          return true;
        } else {
          return checkAns;
        }
      })
      setCorrectAnswer(newCorrectAnswer);
    }
    setArray()
  }, [correctAnswer, studentId])


  // handleClick
  // const handleClick = (index: number) => {
  //   setCurrentIndex(index)
  //   const dialog = document.getElementById("DialogQuestion");
  //   if (correctAnswer[index]) {
  //     return;
  //   }
  //   if (!popUpOpen[index]) {
  //     dialog?.classList.remove('hidden');
  //     document.body.style.overflowY = 'hidden';
  //   }
  //   else {
  //     dialog?.classList.add('hidden');
  //     document.body.style.overflowY = 'auto';
  //   }
  //   const newPopUpOpen = popUpOpen.map((c, i) => {
  //     if (i === currentIdex) {
  //       return !(popUpOpen[i]);
  //     } else {
  //       return c;
  //     }
  //   })
  //   setPopUpOpen(newPopUpOpen);
  // }

  const handleClick = (index:number) => {
    setExpanded(!expanded);
  }

  // handleConfirm
  const handleConfirm = async (index: number) => {

    const dialog = document.getElementById("DialogQuestion");
    if (answer === club.ClubDetails[index].Answer) {

      Progress(club.ClubDetails[index].Name, studentId, group)

      const newCanEditAnswer = canEditAnswer.map((c, i) => {
        if (i === currentIdex) {
          return false;
        } else {
          return c;
        }
      })
      setCanEditAnswer(newCanEditAnswer);

      alert("Your answer is correct!")
    } else {
      alert("Your answer is wrong!")
    }
    dialog?.classList.add('hidden');
    document.body.style.overflowY = 'auto';
  }

  return (
    club.ClubDetails.map((detail: clubItem, index: number) => {
      return (
        <>
          <div
            key={index}
            className={`relative w-[300px] ${expanded ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden`}
            onClick={() => handleClick(index)}
          >
            <div className="h-[150px] w-full relative flex justify-center items-center">
              <Image
                src={`/club_logo/${detail.Name}.png`}
                alt=""
                width={133}
                height={133}
                className="object-center object-contain rounded-xl"
              />
              <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${correctAnswer[index] ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
            </div>
            {
              detail.Detail.split('\n').map((item: string, index: number) => {
                return <p className="w-full text-sm font-normal" key={index}>{item}</p>
              })
            }
            <br />
            <p className="w-full text-sm font-normal">{detail.Contact}</p>
            <br />
            <p className="font-regular text-sm">
              {
                detail.Answer ? "Click to answer" : "No question"
              }
            </p>

          </div>
          {/* {
            !correctAnswer[index] ?
              <>
                <div className="absolute top-0 left-0 z-20 w-[100vw] h-screen backdrop-blur-sm"></div>
                <div className={`${canEditAnswer ? 'block' : 'hidden'} z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center`}>
                  <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                    <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                    <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-3xl">{detail.Name}</p>
                        <p className="text-sm">{detail.Question}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="Question1" className="text-left text-base font-semibold">Question</label>
                        <input type="text" id="Question1" className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <div className="flex flex-row justify-center items-center gap-10">
                          <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={}>ยกเลิก</button>
                          <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={() => handleConfirm(currentIdex)}>ตกลง</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              : null
          } */}


        </>
      )
    }));
}


