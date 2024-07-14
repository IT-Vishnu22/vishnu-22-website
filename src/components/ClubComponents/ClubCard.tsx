'use client'
import { ClockIcon } from "@/assets/icon/ClubIcon"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"

export default function ClubCard(
    {
        ClubName,
        ClubDetails
    }: {
        ClubName: string,
        ClubDetails: string
    }) {
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [canEditAnswer, setCanEditAnswer] = useState(true);

    const handleClick = () => {
        return;
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
            <AlertDialog>
                <AlertDialogTrigger>
                    <div className="cursor-pointer w-[300px] min-h-[300px] bg-secondary rounded-3xl flex flex-col justify-top items-center gap-y-4 p-6" onClick={handleClick}>
                        <div className="w-[130px] h-[130px] rounded-2xl relative ">
                            <Image alt="club image" src={"/images/taekwandoIntania.jpeg"} width={130} height={130} className="absolute top-0 left-0 w-full h-full" />
                            <Image alt="Approve Icon" src="/images/approveIcon.png" width={130} height={130} className={`${correctAnswer ? "absolute top-0 left-0 w-full h-full" : "hidden"}`} />
                        </div>
                        <p className="font-regular text-sm">
                            {ClubDetails ? ClubDetails :
                                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium assumenda eius maiores itaque omnis, ex odio. Saepe illo nostrum cumque quos porro accusantium dolorem enim quasi velit. Quia, natus id!Impedit eaque veniam error rerum autem maiores dolorum placeat dignissimos aliquam quisquam, odit eius mollitia nisi consequuntur. Ab laboriosam quis error delectus. Praesentium eius esse libero in debitis expedita aut? Recusandae, excepturi corporis reiciendis accusantium explicabo officia blanditiis aliquam? Non tenetur deleniti animi consequuntur eaque nam adipisci vel quos at. Nesciunt alias atque ullam nemo reprehenderit et voluptatem, praesentium asperiores. Eos officiis nesciunt sit tenetur, explicabo delectus omnis, repellat, esse laboriosam eius perspiciatis exercitationem ad beatae fuga recusandae. Totam similique adipisci facere iure commodi! Voluptas reprehenderit maxime exercitationem qui magnam? Assumenda vel dolor, inventore reprehenderit iure voluptates repudiandae fugit quas quis, eius voluptatum optio error nobis earum deleniti id modi vero cum. Perferendis, eius necessitatibus animi nisi sequi ex labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos perferendis assumenda facere hic quasi in dicta optio odio ratione impedit beatae natus necessitatibus, vitae aut numquam nobis est eos. Laboriosam Veritatis iusto deserunt itaque natus, facilis illo cumque iure tempora nostrum eveniet saepe ipsa, ratione ipsum quod amet temporibus nemo sint reiciendis ex ducimus. Molestias, minima? Delectus esse fuga ullam!"
                            }
                        </p>
                    </div>
                </AlertDialogTrigger>

                {/* <AlertDialogContent>
                    <div id="DialogQuestion" className="hidden z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center backdrop-blur">
                        <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
                            <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"></div>
                            <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                                <AlertDialogHeader className="p-2">
                                    <AlertDialogTitle>
                                        <p className="font-bold text-3xl">{ClubName}</p>
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, excepturi eveniet, illo suscipit quaerat atque cumque rem provident quam, itaque harum? Sunt voluptas fugiat eius adipisci ullam ab sed illum?</p>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="Question1" className="text-left text-base font-semibold">Question</label>
                                            <input type="text" id="Question1" className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" onChange={(e) => setAnswer(e.target.value)} />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <div className="flex flex-row justify-center items-center gap-10">
                                        <button className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" onClick={handleClick}>ยกเลิก</button>
                                        <button type="submit" className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" onClick={handleConfirm}>ตกลง</button>
                                    </div>
                                </AlertDialogFooter>
                            </div>
                        </div>
                    </div>
                </AlertDialogContent> */}
            </AlertDialog>



            {/* <div className="cursor-pointer w-[300px] min-h-[300px] bg-secondary rounded-3xl flex flex-col justify-top items-center gap-y-4 p-6" onClick={handleClick}>
                <div className="w-[130px] h-[130px] rounded-2xl relative ">
                    <Image alt="club image" src={"/images/taekwandoIntania.jpeg"} width={130} height={130} className="absolute top-0 left-0 w-full h-full" />
                    <Image alt="Approve Icon" src="/images/approveIcon.png" width={130} height={130} className={`${correctAnswer ? "absolute top-0 left-0 w-full h-full" : "hidden"}`} />
                </div>
                <p className="font-regular text-sm">
                    {ClubDetails ? ClubDetails :
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
                                    <p className="font-bold text-3xl">{ClubName}</p>
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
            } */}
        </>
    )
}