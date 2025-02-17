import vectorImage from "./images/vector.svg";
import backgroundImage from "./images/background.svg";
import mascotImage from "./images/mascot.png";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntaniaNews() {
    return (
        <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
            <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
                <Link href="./app/home">
                    <Image
                        className=""
                        src={vectorImage}
                        alt="vector graphic"
                    />
                </Link>
                <h1 className="font-roboto-condensed text-[30px] font-bold text-blue-1">
                    INTANIA NEWS
                </h1>
            </div>

            <div className="mx-auto mt-5 max-w-[80%] gap-6">
                <Link href="/intania_news/news01">
                    <div className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img
                            src="/intaniastorypics/Vishnu20th2.jpg"
                            //src="/intaniastorypics/comingsoon.png"

                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

                        <span className="relative mb-3 ml-4 ml-5 inline-block font-athiti text-[16px] font-medium text-white">
                            รีวิวชีวิตปี 1 วิศวฯจุฬา
                        </span>
                    </div>
                </Link>
            </div>

            <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-3 gap-4 gap-6">
                <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <Link href="/intania_news/news02">
                        <img
                            src="/intaniastorypics/3.1.jpg"
                            //src="/intaniastorypics/comingsoon2.png"
                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

                        <span className="relative mb-3 ml-4 ml-5 inline-block font-athiti text-[16px] font-medium text-white">
                            วิศวฯกับการเรียน
                        </span>
                    </Link>
                </div>

                <div className="relative content-end">
                    <Image
                        className="mb-3 aspect-square size-full object-cover object-bottom"
                        src={mascotImage}
                        alt="mascot graphic"
                    />
                </div>
            </div>

            <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-4 gap-4 gap-6">
                <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <Link href="/intania_news/news03">
                        <img
                            src="/intaniastorypics/4.3.jpg"
                            // src="/intaniastorypics/comingsoon2.png"
                            //
                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

                        <span className="relative mb-3 ml-3 inline-block font-athiti text-[16px] font-medium text-white">
                            ฟุตบอลประเพณี
                        </span>
                    </Link>
                </div>

                <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                    <Link href="/intania_news/news04">
                        <img
                            src="/intaniastorypics/page5.1.jpeg"
                            //src="/intaniastorypics/comingsoon2.png"
                            //src="/intaniastorypics/page4.2.jpg"
                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

                        <span className="relative mb-3 ml-3 inline-block font-athiti text-[16px] font-medium text-white">
                            บิดาแห่งคณะวิศวกรรมศาสตร์ <br />
                            จุฬาลงกรณ์มหาวิทยาลัย
                        </span>
                    </Link>
                </div>
            </div>

            <div className="mx-auto mt-5 max-w-[80%] gap-6">
                <Link href="/intania_news/news05">
                    <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img
                            //src="/intaniastorypics/comingsoon.png"
                            src="/intaniastorypics/page4.2.jpg"
                            loading="lazy"
                            alt="Photo by Magicle"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />

                        <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

                        <span className="relative mb-3 ml-4 ml-5 inline-block font-athiti text-[16px] font-medium text-white">
                            ไอเทมวิศวฯ
                        </span>
                    </div>
                </Link>
            </div>

            <div className="relative mx-auto mb-5 mt-5 max-w-[80%] justify-center">
                <img
                    className="h-24 w-full rounded-md object-cover"
                    src="/intaniastorypics/IMG_3553.png"
                    alt="Random image"
                ></img>

                <div className="absolute inset-0 flex content-center">
                    <div className="mx-auto content-center">
                        <h2 className="my-auto font-roboto-condensed text-[20px] font-bold">
                            Intania Playlist!
                        </h2>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                className="place-self-center"
                                style={{
                                    backgroundColor: "#eb5850",
                                    color: "#FFFFFF",
                                    height: "30px",
                                    borderRadius: "20px",
                                    width: "70px", // Set the width of the button
                                    fontSize: "10px", // Decrease the font size
                                    textAlign: "center", // Ensure the text is centered
                                }}
                                variant="outline"
                            >
                                <Link href="/intania_news/intania_playlist">
                                    play
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
