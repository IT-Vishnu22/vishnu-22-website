import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import ImageMock from "@/assets/images/200x200.png";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import TOA from "@/assets/images/sponsorImages/toa.png";
import Shabu from "@/assets/images/sponsorImages/shabu.png";
import Entermonth from "@/assets/images/sponsorImages/entermonth.jpg";
import CQK from "@/assets/images/sponsorImages/cqk.png";
import AutumnScoop from "@/assets/images/sponsorImages/autumnscoop.jpg";
import Acadex from "@/assets/images/sponsorImages/acadex.png";


export function SponsorCarousel() {
    return (
        <div className="bottom-0 w-full overflow-hidden mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px] py-4 bg-white flex flex-col justify-top items-center px-4 border border-t-1 border-r-0 border-l-0 border-b-0 border-black">
            <p className="mb-6 lg:mb-10 lg:mt-2 text-xl sm:text-2xl lg:text-3xl font-medium">Our Supporters!</p>
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
                className=""
            >
                <CarouselContent>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center p-2`}>
                            <Image alt="sponser image" src={TOA} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center p-2`}>
                            <Image alt="sponser image" src={AutumnScoop} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center p-2`}>
                            <Image alt="sponser image" src={CQK} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center p-2`}>
                            <Image alt="sponser image" src={Entermonth} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full bg-white flex justify-center items-center p-2`}>
                            <Image alt="sponser image" src={Acadex} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`px-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                        <div className={`w-full h-full flex justify-center items-center bg-white p-2`}>
                            <Image alt="sponser image" src={Shabu} width={0} height={0} className="w-[150] h-[150] object-contain"/>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
