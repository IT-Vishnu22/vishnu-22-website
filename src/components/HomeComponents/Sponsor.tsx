import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import ImageMock from '@/assets/images/200x200.png';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

import TOA from "@/assets/images/sponsorImages/toa.png";
import Shabu from "@/assets/images/sponsorImages/shabu.png";
import Entermonth from "@/assets/images/sponsorImages/entermonth.jpg";
import CQK from "@/assets/images/sponsorImages/cqk.png";
import AutumnScoop from "@/assets/images/sponsorImages/autumnscoop.jpg";
import Acadex from "@/assets/images/sponsorImages/acadex.png";


export function SponsorCarousel() {
    return (
        <div className="overflow-hidden bg-white">
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
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                            <Image alt="sponser image" src={TOA} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                            <Image alt="sponser image" src={AutumnScoop} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                            <Image alt="sponser image" src={CQK} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                            <Image alt="sponser image" src={Entermonth} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                            <Image alt="sponser image" src={Acadex} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full flex justify-center items-center bg-white px-2`}>
                            <Image alt="sponser image" src={Shabu} width={0} height={0} className="w-[90%] sm:w-[70%] h-auto object-contain" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}