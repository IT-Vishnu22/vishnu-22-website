import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function SponsorCarousel() {
    return (
        <div className="w-full h-fit bg-white flex flex-col items-center gap-y-2">
            <p className="font-medium text-xl">Our Support</p>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="w-[30] h-1/4">
                            <Image src="https://th.bing.com/th?id=OIP.Z8y29ItGs4eSdvlpJvI-XQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            alt="sponsor"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            loading='lazy'
                            priority={false} />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}