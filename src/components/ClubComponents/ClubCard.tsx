'use client'
import { ClockIcon } from "@/assets/icon/ClubIcon"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import Image from "next/image"

export default function ClubCard({ text }: { text?: string }) {
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [canEditAnswer, setCanEditAnswer] = useState(true);

    const handleClick = () => {
        const dialog = document.getElementById("DialogQuestion");
        if (correctAnswer) {
            return;
        }
        if (!popUpOpen) {
            dialog?.classList.remove('hidden');
            document.body.style.overflowY = 'hidden';
        }
        else {
            dialog?.classList.add('hidden');
            document.body.style.overflowY = 'auto';
        }
        setPopUpOpen(!popUpOpen);
    }

    const handleConfirm = () => {
        handleClick();
        if (answer === "answer") {
            setCorrectAnswer(true);
            setCanEditAnswer(false);
        }
        document.body.style.overflowY = 'auto';
    }
    return (
        <>
            <div className="cursor-pointer w-[300px] min-h-[300px] bg-secondary rounded-3xl flex flex-col justify-top items-center gap-y-4 p-6" onClick={handleClick}>
                <div className="w-[130px] h-[130px] rounded-2xl relative ">
                    <Image alt="club image" src={"/images/taekwandoIntania.jpeg"} width={130} height={130} className="absolute top-0 left-0 w-full h-full" />
                    <Image alt="Approve Icon" src="/images/approveIcon.png" width={130} height={130} className={`${correctAnswer ? "absolute top-0 left-0 w-full h-full" : "hidden"}`} />
                </div>
                <p className="font-regular text-sm">
                    {text ? text :
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos perferendis assumenda facere hic quasi in dicta optio odio ratione impedit beatae natus necessitatibus, vitae aut numquam nobis est eos. Laboriosam Veritatis iusto deserunt itaque natus, facilis illo cumque iure tempora nostrum eveniet saepe ipsa, ratione ipsum quod amet temporibus nemo sint reiciendis ex ducimus. Molestias, minima? Delectus esse fuga ullam!"
                    }
                </p>
                <br />
                <p className="font-regular text-sm">
                    {
                        correctAnswer ? null : "Click to answer"
                    }
                </p>
            </div>
            {
                canEditAnswer ?

                    <div id="DialogQuestion" className="hidden z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center backdrop-blur">
                        <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                            <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                            <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-3xl">Club Name</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, excepturi eveniet, illo suscipit quaerat atque cumque rem provident quam, itaque harum? Sunt voluptas fugiat eius adipisci ullam ab sed illum?</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Question1" className="text-left text-base font-semibold">Question</label>
                                    <input type="text" id="Question1" className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" onChange={(e) => setAnswer(e.target.value)} />
                                    <div className="flex flex-row justify-center items-center gap-10">
                                        <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={handleClick}>ยกเลิก</button>
                                        <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={handleConfirm}>ตกลง</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    : null
            }


        </>
    )
}