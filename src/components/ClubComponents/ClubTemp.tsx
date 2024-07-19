'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { clubItem } from "@/interfaces/Club";
import ApproveImage from "@/assets/images/stamp.png";
import club from "@/data/club.json"

export function ClubTemp({ club, completeClub, index }: { club: clubItem, completeClub: boolean, index: number }) {
    const correctAnswer = club.Answer;
    const question = club.Question;

    const [expanded, setExpanded] = useState<boolean>(false);
    const [toAsk, setToAsk] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(completeClub);
    const [answer, setAnswer] = useState<string>("");
    const [canEdit, setCanEdit] = useState<boolean>(true);
    const [haveQuestion, setHaveQuestion] = useState<boolean>();

    useEffect(() => {
        if (question === undefined || !correctAnswer === undefined)
            setHaveQuestion(false);
    }, []);

    const handleClickCard = () => {
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
    }

    const handleClickCancel = () => {
        setAnswer("");
        setCorrect(false);
        handleClickCard();
    }

    const handleClickDone = () => {
        if (answer === correctAnswer) {
            setCorrect(true);
            setCanEdit(false);
            // window.alert("answer correct");
        }
        else {
            setAnswer("");
            setCorrect(false);
        }
        handleClickCard();
    }

    useEffect(() => {
        if (expanded && toAsk && !correct && canEdit) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'auto';
        }
    }, [expanded, toAsk, correct, canEdit]);

    return (
        <div>
            <div
                className={`relative w-[300px] ${expanded ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden p-8`}
                onClick={handleClickCard}
            >
                <div className="h-[150px] relative flex justify-center items-center">

                    <Image
                        src={`/club_logo/${club.Name}.png`}
                        alt={`${club.Name} logo`}
                        width={140}
                        height={140}
                        className="min-w-[140px] aspect-square object-center object-contain rounded-xl"
                    />
                    <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${haveQuestion && correct ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
                </div>

                <p className="w-full text-lg font-semibold">{club.Name}</p>

                <div className={`${expanded ? 'block' : 'hidden'} w-full`}>

                    {club.Detail.split('\n').map((item, i) => {
                        return <p className="font-normal" key={i}>{item}</p>
                    })
                    }
                    <br />
                    <p className="text-sm font-normal">{!haveQuestion ? 'no question' : correct ? 'click to answer' : null}</p>
                </div>
            </div>

            {/* Pop UP */}
            {
                canEdit ?
                    <div className="absolute top-0 left-0 z-20 w-[100vw] h-screen backdrop-blur-sm"></div> : null
            }
            <div className={`${canEdit ? 'block' : 'hidden'} z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center`}>
                <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                    <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                    <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-3xl">{club.Name}</p>
                            <p className="text-sm">{club.Question}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Question1" className="text-left text-base font-semibold">Question</label>
                            <input type="text" id="Question1" className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            <div className="flex flex-row justify-center items-center gap-10">
                                <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={handleClickCancel}>ยกเลิก</button>
                                <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={handleClickDone}>ตกลง</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}