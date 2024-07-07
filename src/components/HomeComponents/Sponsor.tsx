import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export function SponsorCarousel() {
    const mockData = [{ "name": "Voomm", "imagePath": "/images/200x200.png" },
    { "name": "Brightbean", "imagePath": "/images/200x200.png" },
    { "name": "Aivee", "imagePath": "/images/200x200.png" },
    { "name": "Rhybox", "imagePath": "/images/200x200.png" },
    { "name": "Voomm", "imagePath": "/images/200x200.png" },
    { "name": "Divanoodle", "imagePath": "/images/200x200.png" },
    { "name": "Brightdog", "imagePath": "/images/200x200.png" },
    { "name": "Shufflebeat", "imagePath": "/images/200x200.png" }];

    return (
        <div className="bottom-0 w-full overflow-hidden py-6 bg-secondary flex flex-col justify-top items-center px-3 border border-t-1 border-r-0 border-l-0 border-b-0 border-black">
            <p className="mb-6 text-xl sm:text-2xl lg:text-3xl font-medium">Our Supporters!</p>
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
                className="">
                <CarouselContent>
                    {
                        mockData ?
                            mockData.map((item, index: number) => {
                                return (
                                    <CarouselItem key={index} className={`basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6`}>
                                        <Image alt="sponser image" src={item.imagePath} width={200} height={200}/>
                                        {/* {item.name} */}
                                    </CarouselItem>
                                );
                            })
                            : null
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}