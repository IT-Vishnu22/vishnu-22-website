'use client'
import Image from "next/image";

// club json
import club from "@/data/club.json"
import { useContext, useEffect, useState } from "react";
import Progress from "@/lib/club/progress";
import { GetCompletedClub } from "@/lib/club/getData";
import { falseArray, trueArray } from "@/lib/club/array";
import { UserContext } from "@/lib/contexts/user";
import ApproveImage from "@/assets/images/stamp.png";
import { clubItem } from "@/interfaces/Club";


export default function ClubSection() {
  //get studentId from login
  const { firebaseUser, data } = useContext(UserContext);
  const studentId = data?.studentId;
  const group = data?.group || null;

  const [answer, setAnswer] = useState("");
  const [currentIdex, setCurrentIndex] = useState<number>(0)
  const clubImage: string[] = [];
  
  const [expanded, setExpanded] = useState<boolean[]>(falseArray);
  const [correctAnswer, setCorrectAnswer] = useState<boolean[]>(falseArray);
  const [canEditAnswer, setCanEditAnswer] = useState<boolean[]>(trueArray);
  const [canShowDialog, setCanShowDialog] = useState<boolean>(false);


  useEffect(() => {
    const setArray = async () => {
      const completeClubName: string[] = await GetCompletedClub(studentId)

      if (!completeClubName || completeClubName.length === 0) {
        return;
      }

      const correctAnsIndex = club.ClubDetails.map((item: clubItem, index: number) => {
        if (completeClubName.includes(item.Name)) {
          return index
        }
      })

      const newCorrectAnswer = Array(correctAnsIndex.length).fill(false);

      correctAnsIndex.filter((index: number | undefined) => index !== undefined).forEach((index: number) => {
        newCorrectAnswer[index] = true;
      });

      setCorrectAnswer(newCorrectAnswer);
    }
    setArray()
  }, [studentId])

  // card no question
  const handleClickCardNoQuestion = (index: number) => {
    setExpanded(prevExpanded => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  // card question
  const handleClickCardQuestion = (index: number) => {
    setCurrentIndex(index)
    const dialog = document.getElementById("DialogQuestion");

    if ((!expanded[index]) || (expanded[index] && correctAnswer[index])) {
      setCanShowDialog(false);
      setExpanded(prevExpanded => {
        const newExpanded = [...prevExpanded];
        newExpanded[index] = !newExpanded[index];
        return newExpanded;
      });
    }
    else if (expanded[index] && !correctAnswer[index] && !canShowDialog) {
      setCanShowDialog(true);
      dialog?.classList.remove('hidden');
      document.body.style.overflowY = 'hidden';
    }
    else if (expanded[index] && !correctAnswer[index] && canShowDialog) {
      setExpanded(prevExpanded => {
        const newExpanded = [...prevExpanded];
        newExpanded[index] = !newExpanded[index];
        return newExpanded;
      });
      setAnswer("");
      dialog?.classList.add('hidden');
      document.body.style.overflowY = 'auto';
    }
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

      setCorrectAnswer(prevCorrect => {
        const newCorrectAnswer = [...prevCorrect];
        newCorrectAnswer[index] = !newCorrectAnswer[index];
        return newCorrectAnswer;
      });

      setExpanded(prevExpanded => {
        const newExpanded = [...prevExpanded];
        newExpanded[index] = !newExpanded[index];
        return newExpanded;
      });

      alert("Your answer is correct!")
    } else {
      alert("Your answer is wrong!")
    }
    setAnswer("");
    dialog?.classList.add('hidden');
    document.body.style.overflowY = 'auto';
  }

  return (
    club.ClubDetails.map((detail: clubItem, index: number) => {
      return (
        <>{
          detail.Question && detail.Answer ?
            <>
              <div
                key={index}
                className={`relative w-[300px] ${expanded[index] ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden p-8`}
                onClick={() => handleClickCardQuestion(index)}
              >
                <div className="h-[150px] relative flex justify-center items-center">

                  <Image
                    src={`/club_logo/${detail.ImagePath}.png`}
                    alt={`${detail.Name} logo`}
                    width={140}
                    height={140}
                    className="min-w-[140px] aspect-square object-center object-contain rounded-xl"
                  />
                  <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${correctAnswer[index] ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
                </div>
                <p className="w-full text-lg font-semibold">{detail.Name}</p>

                <div className={`${expanded[index] ? 'block' : 'hidden'} w-full`}>
                  {detail.Detail.split('\n').map((item, i) => {
                    return <p className="font-normal" key={i}>{item}</p>
                  })
                  }
                  <br />
                  <p className="text-sm font-normal">{correctAnswer[index] ? 'click to answer' : null}</p>
                </div>
              </div>

              <div id="DialogQuestion" className="hidden">
                <div className="fixed inset-0 bg-black opacity-30 z-20"></div>
                <div className={`z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center`}>
                  <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                    <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                    <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-3xl">{club.ClubDetails[currentIdex].Name}</p>
                        <p className="text-sm">{club.ClubDetails[currentIdex].Question}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="Question1" className="text-left text-base font-semibold">Question</label>
                        <input type="text" id="Question1" className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <div className="flex flex-row justify-center items-center gap-10">
                          <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={() => handleClickCardQuestion(currentIdex)}>ยกเลิก</button>
                          <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={() => handleConfirm(currentIdex)}>ตกลง</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
            :
            <div
              key={index}
              className={`relative w-[300px] ${expanded[index] ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden p-8`}
              onClick={() => handleClickCardNoQuestion(index)}
            >
              <div className="h-[150px] relative flex justify-center items-center">
                <Image
                  src={`/club_logo/${detail.Name}.png`}
                  alt={`${detail.Name} logo`}
                  width={140}
                  height={140}
                  className="min-w-[140px] aspect-square object-center object-contain rounded-xl"
                />
              </div>
              <p className="w-full text-lg font-semibold">{detail.Name}</p>
              <div className={`${expanded[index] ? 'block' : 'hidden'} w-full`}>
                {detail.Detail.split('\n').map((item, i) => {
                  return <p className="font-normal" key={i}>{item}</p>
                })
                }
              </div>
            </div>}
        </>
      )
    }));
}


