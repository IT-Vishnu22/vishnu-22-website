'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { NewsHomepage } from "@/interfaces/Homepage";
import Vishnu from "@/assets/images/intaniaNews/Vishnu3rd.jpg";
import { Skeleton } from "@/components/ui/skeleton"

export function IntaniaNewsHeader() {
    const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
    
    const handleImageLoad = (index: number) => {
        setLoadingStates(prev => ({ ...prev, [index]: false }));
    };

    const news: NewsHomepage[] = useMemo(() => [
        {
            title: "รีวิวชีวิตปี 1 วิศวฯ จุฬา",
            description:
                "ตลอด 1 ปีของการเป็นนิสิตวิศวฯ จุฬา พูดได้คำเดียวเลยว่า...",
            image: Vishnu,
        },
    ], []);

    useEffect(() => {
        const initialLoadingStates = news.reduce((acc, _, index) => {
            acc[index] = true;
            return acc;
        }, {} as Record<number, boolean>);
        setLoadingStates(initialLoadingStates);
    }, [news]);

    return (
        <div className="aspect-video w-full overflow-hidden rounded-md shadow-lg">
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
                className="m-0 p-0"
            >
                <CarouselContent>
                    {
                        news.map((item: NewsHomepage, index: number) => {
                            return (
                                <CarouselItem className="basis-full" key={index}>
                                    {
                                        loadingStates[index] ? <Skeleton className="aspect-video w-[90vw] max-w-[800px]" /> :
                                            <div className="relative flex aspect-video w-[90vw] max-w-[800px] items-end justify-end p-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title || "News image"}
                                                    priority
                                                    quality={80}
                                                    fill
                                                    blurDataURL=""
                                                    className="object-cover object-top"
                                                    placeholder="blur"
                                                    onLoad={() => handleImageLoad(index)}
                                                    {...(index > 0 ? { loading: "lazy" } : {})}
                                                />
                                                {item.title === "" ||
                                                    item.title === null ? null : (
                                                    <>
                                                        <div
                                                            className="absolute inset-0"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                                                            }}
                                                        ></div>

                                                        <div className="relative flex w-full flex-col items-end justify-end gap-y-2 text-right text-secondary">
                                                            <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                                                                {item.title}
                                                            </p>
                                                            <p className="w-[80%] text-xs sm:text-sm md:text-base lg:text-xl">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                    }
                                </CarouselItem>
                            );
                        })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
