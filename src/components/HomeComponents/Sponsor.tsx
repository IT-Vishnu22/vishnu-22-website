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

export function SponsorCarousel() {
    const mockData = [
        { name: "Voomm", imagePath: "/images/200x200.png" },
        { name: "Brightbean", imagePath: "/images/200x200.png" },
        { name: "Aivee", imagePath: "/images/200x200.png" },
        { name: "Rhybox", imagePath: "/images/200x200.png" },
        { name: "Voomm", imagePath: "/images/200x200.png" },
        { name: "Divanoodle", imagePath: "/images/200x200.png" },
        { name: "Brightdog", imagePath: "/images/200x200.png" },
        { name: "Shufflebeat", imagePath: "/images/200x200.png" },
    ];

    return (
        <div className="justify-top border-t-1 bottom-0 mb-6 flex w-full flex-col items-center overflow-hidden border border-b-0 border-l-0 border-r-0 border-black bg-secondary px-3 py-6 sm:mt-6 md:mb-0 md:mt-8 lg:mt-10">
            <p className="mb-6 text-xl font-medium sm:text-2xl lg:mb-10 lg:mt-2 lg:text-3xl">
                Our Supporters!
            </p>
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
                    {mockData
                        ? mockData.map((item, index: number) => {
                              return (
                                  <CarouselItem
                                      key={index}
                                      className={`basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6`}
                                  >
                                      <Image
                                          alt="sponser image"
                                          src={ImageMock}
                                          width={200}
                                          height={200}
                                      />
                                      {/* {item.name} */}
                                  </CarouselItem>
                              );
                          })
                        : null}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
