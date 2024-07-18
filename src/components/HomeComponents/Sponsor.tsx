import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

import TOA from "@/assets/images/sponsorImages/toa.png";
import Shabu from "@/assets/images/sponsorImages/shabu.png";
import CQK from "@/assets/images/sponsorImages/cqk.png";
import AutumnScoop from "@/assets/images/sponsorImages/autumnscoop.jpg";


export function SponsorCarousel() {

    const sponsor: StaticImageData[] = [TOA, Shabu, AutumnScoop, CQK];
        

    return (
        <div className="overflow-hidden bg-white flex justify-center">
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
                    {
                        sponsor.map((item: any, index: number) => {
                            return (
                                <CarouselItem className={`basis-1/3 md:basis-1/4`} key={index}>
                                    <div className={`w-full h-full bg-white flex justify-center items-center px-2`}>
                                        <Image alt="sponser image" src={item} width={0} height={0} className="w-[80%] sm:w-[70%] md:w-[60%] max-w-[250px] h-auto object-contain" />
                                    </div>
                                </CarouselItem>
                            );
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
