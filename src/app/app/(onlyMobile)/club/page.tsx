'use client'
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { addUser } from "@/lib/club/progress";
import { GetProgress } from "@/lib/club/getData";
import { UserContext } from "@/lib/contexts/user";
import Progress from "@/lib/club/progress";
import { GetCompletedClub } from "@/lib/club/getData";
import { falseArray, trueArray } from "@/lib/club/array";
import { clubItem } from "@/interfaces/Club";
import club from "@/data/club.json"
import ApproveImage from "@/assets/images/stamp.png";
import { PriceIcon } from "@/assets/icons/ClubIcon";
import Style from "./styles.module.css";


export default function ClubPage() {
  //get studentId from login
  const { firebaseUser, data } = useContext(UserContext);
  const studentId = data?.studentId;
  const group = data?.group || null;
  const router = useRouter();
  const pathName = usePathname();

  const [clubCollect, setClubCollect] = useState<number>(0);
  const [openPopUp, setOpenPopUp] = useState<boolean>(true);

  const [answer, setAnswer] = useState("");
  const [currentIdex, setCurrentIndex] = useState<number>(0)

  const [expanded, setExpanded] = useState<boolean[]>(falseArray);
  const [correctAnswer, setCorrectAnswer] = useState<boolean[]>(falseArray);
  const [canEditAnswer, setCanEditAnswer] = useState<boolean[]>(trueArray);
  const [canShowDialog, setCanShowDialog] = useState<boolean>(false);

  addUser(studentId);

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
    const getClubCollections = async () => {
      const count = await GetProgress(studentId)
      if (count && count >= 0) {
        setClubCollect(count);
      }
      else { setClubCollect(0); }
    }

    setArray()
    //console.log("club")
    getClubCollections()
  }, [studentId]);

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

      setClubCollect(clubCollect + 1);

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

  useEffect(() => {
    if (!firebaseUser) {
      sessionStorage.setItem("redirectAfterLogin", pathName);
      router.push("/login");
    }
  }, [firebaseUser, router]);

  return (
    <>
      <PopUp show={openPopUp} setShow={setOpenPopUp} />
      <div className={Style.bgPage}>
        <p className="font-bold text-4xl text-blue-2">Club</p>
        <p className="font-medium text-xl text-blue-2 drop-shadow-white">เยี่ยมชมทุกชมรม และดูกันว่าชมรม<br /> ไหนดีที่สุดสำหรับคุณ!</p>
        <div className="flex flex-row justify-center items-center gap-2 mb-10">
          <PriceIcon />
          <p className="font-bold text-2xl text-blue-1">{clubCollect > 3 ? '3' : clubCollect.toString()}/3</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 pb-12">
          {club.ClubDetails.map((detail: clubItem, index: number) => {
            return (
              <div key={index}>
                {
                  detail.Question && detail.Answer ?
                    <>
                      <div
                        className={`relative w-[270px] sm:w-[300px] ${expanded[index] ? 'h-auto' : 'h-[270px] sm:h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center gap-4 overflow-hidden p-8`}
                        onClick={() => handleClickCardQuestion(index)}
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
                          <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${correctAnswer[index] ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
                        </div>
                        <p className={`w-full text-lg font-semibold ${expanded[index] ? "" : "overflow-hidden text-ellipsis whitespace-nowrap"} `}>{detail.Name}</p>

                        <div className={`${expanded[index] ? 'block' : 'hidden'} w-full`}>
                          {detail.Detail.split('\n').map((item, i) => {
                            return <p className="font-normal" key={i}>{item}</p>
                          })
                          }
                          <br />
                          <p className="mt-6 w-full py-2 border border-primary rounded-lg text-center align-center text-md font-normal">{correctAnswer[index] ? 'คุณได้ตอบคำถามนี้แล้ว' : 'ชมรมนี้มีคำถามนะ'}</p>
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
                      className={`relative w-[270px] sm:w-[300px] ${expanded[index] ? 'h-auto' : 'h-[270px] sm:h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center gap-4 overflow-hidden p-8`}
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
                        {detail.Detail.split('\n').map((item, i) => {
                          return <p className="font-normal" key={i}>{item}</p>
                        })
                        }
                      </div>
                    </div>}
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