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


export default function ClubSectionTemp() {
    //get studentId from login
    const { firebaseUser, data } = useContext(UserContext);
    const studentId = data?.studentId
    const group = data?.group || null
    const [correct, setCorrect] = useState<boolean>(true);

    const [expanded, setExpanded] = useState<boolean>(false);
    const [toAsk, setToAsk] = useState<boolean>(false);
    const [canEdit, setCanEdit] = useState<boolean>(true);
    const [haveQuestion, setHaveQuestion] = useState<boolean>();

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
    const handleClick = (index: number) => {

        if (haveQuestion) {
            if (!expanded && !toAsk) {
                setExpanded(true);
                setToAsk(false);
            }
            else if (expanded && !toAsk && canEdit) {
                setExpanded(true);
                setToAsk(true);
            }
            else {
                setExpanded(false);
                setToAsk(false);
            }
        }
        else {
            setExpanded(!expanded);
            setCanEdit(false);
        }
        setCurrentIndex(index)
        const dialog = document.getElementById("DialogQuestion");
        if (correctAnswer[index]) {
            return;
        }
        if (!popUpOpen[index]) {
            dialog?.classList.remove('hidden');
            document.body.style.overflowY = 'hidden';
        }
        else {
            dialog?.classList.add('hidden');
            document.body.style.overflowY = 'auto';
        }
        const newPopUpOpen = popUpOpen.map((c, i) => {
            if (i === currentIdex) {
                return !(popUpOpen[i]);
            } else {
                return c;
            }
        })
        setPopUpOpen(newPopUpOpen);
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
                        className={`relative w-[300px] ${expanded ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden p-8`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="h-[150px] relative flex justify-center items-center">

                            <Image
                                src={`/club_logo/${detail.Name}.png`}
                                alt={`${detail.Name} logo`}
                                width={140}
                                height={140}
                                className="min-w-[140px] aspect-square object-center object-contain rounded-xl"
                            />
                            <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${haveQuestion && correct ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
                        </div>
                        <p className="w-full text-lg font-semibold">{detail.Name}</p>

                        <div className={`${expanded ? 'block' : 'hidden'} w-full`}>

                            {detail.Detail.split('\n').map((item, i) => {
                                return <p className="font-normal" key={i}>{item}</p>
                            })
                            }
                            <br />
                            <p className="text-sm font-normal">{!haveQuestion ? 'no question' : correct ? 'click to answer' : null}</p>
                        </div>
                    </div>
                    {
                        canEditAnswer[index] ?
                            <div className={`${canEdit ? 'block' : 'hidden'} z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center`}>
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
                                                <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={() => handleClick(currentIdex)}>ยกเลิก</button>
                                                <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={() => handleConfirm(currentIdex)}>ตกลง</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </>
            )
        }));
}


