"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

import { useState, useEffect } from "react";
import engMap from "../app/announcement/images/engmap.png";
import Image from "next/image";

interface MapProps {
  img1: string;
  img2: string;
}

export const MapCarousel: React.FC<MapProps> = ({ img1, img2 }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="bg-white py-3 shadow-lg">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <>
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="rounded-lg bg-white">
                <Image
                  src={engMap}
                  alt="Meeting Location"
                  className="max-w-[280px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <div className="rounded-lg bg-white">
              <Image
                src={engMap}
                alt="Meeting Location"
                className="max-w-[280px]"

              />
            </div>
          </CarouselItem>
          </>
        
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-3 flex justify-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 h-[15px] w-[15px] cursor-pointer rounded-full ${
              current === index + 1 ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MapCarousel;