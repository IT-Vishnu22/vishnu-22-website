'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import MockClubImage from "@/assets/clubImage/taekwandoIntania.jpeg"
import ApproveImage from "@/assets/images/stamp.png"

export function ClubTemp({ Title }: { Title: string }) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [toAsk, setToAsk] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    const handleClickCard = () => {
        if (!expanded && !toAsk) {
            setExpanded(true);
            setToAsk(false);
        }
        else if (expanded && !toAsk) {
            setExpanded(true);
            setToAsk(true);
        }
        else if(expanded && !toAsk && correct){
            setExpanded(false);
            setToAsk(false);
        }
        else {
            setExpanded(false);
            setToAsk(false);
        }
    }

    const handleClickCancel = () => {
        setAnswer("");
        setCorrect(false);
        handleClickCard();
    }

    const handleClickDone = () => {
        if (answer === "answer") {
            setCorrect(true);
            // window.alert("answer correct");
        }
        else {
            setAnswer("");
            setCorrect(false);
        }
        handleClickCard();
    }

    useEffect(() => {
        if (expanded && toAsk && !correct) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'auto';
        }
    }, [expanded, toAsk, correct])

    return (
        <div>
            <div id={Title}
                className={`relative w-[300px] ${expanded ? 'h-auto' : 'h-[300px]'} rounded-2xl bg-white flex flex-col justify-top items-center p-10 gap-4 overflow-hidden transform transition-transform duration-700 ease-in-out`}
                onClick={handleClickCard}
            >
                <div className="relative flex justify-center items-center">

                    <Image
                        src={MockClubImage}
                        alt=""
                        width={133}
                        height={133}
                        className="object-center object-contain rounded-xl"
                    />
                    <Image alt="Approve Icon" src={ApproveImage} width={133} height={133} className={`${correct ? "absolute z-20 top-0 left-0 " : "hidden"}`} />
                </div>
                <p className="text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae suscipit perspiciatis? Error blanditiis veniam repudiandae veritatis rerum impedit quam, labore aut magnam odit sit? Laudantium blanditiis ad tempore vitae!
                </p>
                <div className={`${expanded ? 'hidden' : 'block'} absolute bottom-0 w-full h-10 bg-white`}></div>
            </div>

            {/* Pop UP */}
            {
                expanded && toAsk && !correct ?
                    <div className="absolute top-0 left-0 z-20 w-[100vw] h-screen backdrop-blur-sm"></div> : null
            }
            <div className={`${expanded && toAsk && !correct ? 'block' : 'hidden'} z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center`}>
                <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                    <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                    <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-3xl">{Title}</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, excepturi eveniet, illo suscipit quaerat atque cumque rem provident quam, itaque harum? Sunt voluptas fugiat eius adipisci ullam ab sed illum?</p>
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