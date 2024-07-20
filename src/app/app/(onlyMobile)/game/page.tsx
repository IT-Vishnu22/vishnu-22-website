import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GamePage() {
    return (
        <div className="bg-repeat-xy flex h-full flex-col bg-[url('/BG_1.png')] bg-contain">
            <div className="flex flex-col items-center">
                <h1 className="m-auto mt-[22px] text-center font-roboto-condensed text-[32px] font-bold text-blue-1">
                    Games
                </h1>
            </div>

            <div className="m-auto mb-[32px] mt-[0px] w-[276px]">
                <h2 className="text-center font-athiti text-[20px] font-medium text-blue-2 drop-shadow-[0_4px_4px_rgba(255,255,255,1)]">
                    มาเล่นเกมต่าง ๆ <br />
                    และแข่งขันกับเพื่อน ๆ กัน!
                </h2>
            </div>

            <div className="flex max-h-[500px] grow flex-col gap-[5%]">
                <div className="mx-auto flex h-[45%] max-[425px]:w-[85%] [@media(max-height:750px)]:h-[40%]">
                    <div className="mx-auto h-full max-h-[255px] rounded-[24px] border-[5px] border-[#2A334E] bg-blue-4 bg-contain shadow-[9px_9px_0px_0px_rgba(42,51,78)] max-[345px]:max-h-[200px]">
                        <div className="m-auto flex h-[24px] w-full flex-row justify-center gap-2">
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                        </div>

                        <div className="h-full w-full px-[24px]">
                            <div className="h-[60%]">
                                <Link href="/app/game/wordle">
                                    <Image
                                        src="/wordle_box.svg"
                                        width={265}
                                        height={149}
                                        style={{
                                            width: `100%`,
                                            height: "100%",
                                            margin: "auto",
                                            borderRadius: "16px",
                                        }}
                                        alt="wordle"
                                    />
                                </Link>
                            </div>

                            <div className="flex h-[30%] flex-col place-content-center max-[345px]:h-[27%] [@media(max-height:750px)]:h-[27%]">
                                <Link href="/app/game/wordle">
                                    <Button className="h-[38px] w-full rounded-full bg-[#ECD8C1] font-athiti text-[24px] font-bold text-blue-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:drop-shadow-lg">
                                        เข้าเล่น
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="h-[24px]"></div>
                    </div>
                </div>

                <div className="mx-auto flex h-[45%] max-[425px]:w-[85%] [@media(max-height:750px)]:h-[40%]">
                    <div className="mx-auto h-full max-h-[255px] rounded-[24px] border-[5px] border-[#2A334E] bg-blue-4 shadow-[9px_9px_0px_0px_rgba(42,51,78)] max-[345px]:max-h-[200px]">
                        <div className="m-auto flex h-[24px] w-full flex-row justify-center gap-2">
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                            <div className="my-auto size-[5px] rounded-full border-[4px] border-[#EDEDED]"></div>
                        </div>

                        <div className="h-full w-full px-[24px]">
                            <div className="h-[60%]">
                                <Link href="/app/game/popgear">
                                    <Image
                                        src="/popgear_banner.svg"
                                        width={265}
                                        height={149}
                                        style={{
                                            width: `100%`,
                                            height: "100%",
                                            margin: "auto",
                                            borderRadius: "16px",
                                        }}
                                        alt="popgearPic"
                                    />
                                </Link>
                            </div>

                            <div className="flex h-[30%] flex-col place-content-center max-[345px]:h-[27%] [@media(max-height:750px)]:h-[27%]">
                                <Link href="/app/game/popgear">
                                    <Button className="h-[38px] w-full rounded-full bg-[#ECD8C1] font-athiti text-[24px] font-bold text-blue-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:drop-shadow-lg">
                                        เข้าเล่น
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="h-[24px]"></div>
                    </div>
                </div>
            </div>

            <div className="h-[89px] w-full"></div>
        </div>
    );
}
