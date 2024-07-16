import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

import NewsImage from "@/assets/images/intania-news.png";


export function IntaniaNewsHeader() {
    return (
        <div className="w-full sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] aspect-video overflow-hidden bg-white rounded-md shadow shadow-lg">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="p-0 m-0">
                <CarouselContent>
                    <CarouselItem className="basis-full">
                        <div className="relative w-full sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] aspect-video p-4 flex justify-end items-end">
                            <Image
                                src={NewsImage}
                                alt="Your image description"
                                fill
                                className="object-top object-cover"
                            />
                            {/* <div className="absolute w-full flex flex-col justify-end items-end text-right">
                                <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                                    News Topic
                                </p>
                                <p className="w-[80%] font-semibold text-sm sm:text-base lg:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi error eos molestias veritatis.
                                </p>
                            </div> */}
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}