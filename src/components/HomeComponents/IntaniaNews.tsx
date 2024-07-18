import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

import { NewsHomepage } from "@/interfaces/Homepage";
import NewsImage from "@/assets/images/intania-news.png";
import FriendGroup from "@/assets/images/intaniaNews/01-friendgroup.png";
import Vishnu from "@/assets/images/intaniaNews/Vishnu3rd.jpg";

export function IntaniaNewsHeader() {
    const news: NewsHomepage[] = [
        {
            title: "รีวิวชีวิตปี 1 วิศวฯจุฬา",
            description: "ตลอด 1 ปีของการเป็นนิสิตวิศวฯ จุฬา พูดได้คำเดียวเลยว่า...",
            image: Vishnu,
        },
    ];

    return (
        <div className="w-full aspect-video overflow-hidden rounded-md shadow-lg">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                className="p-0 m-0">
                <CarouselContent>
                    {news.map((item: NewsHomepage, index: number) => {
                        return (
                            <CarouselItem className="basis-full" key={index}>
                                <div className="relative w-[90vw] max-w-[800px] aspect-video p-6 flex justify-end items-end">
                                    <Image
                                        src={item.image}
                                        alt={item.title || "News image"}
                                        fill
                                        className="object-top object-cover"
                                    />
                                    {
                                        item.title === "" || item.title === null ? null :
                                            <>
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)'
                                                    }}
                                                ></div>

                                                <div className="relative w-full flex flex-col justify-end items-end text-right text-secondary gap-y-2">
                                                    <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                                        {item.title}
                                                    </p>
                                                    <p className="w-[80%] text-xs sm:text-sm md:text-base lg:text-xl">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </>
                                    }
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}