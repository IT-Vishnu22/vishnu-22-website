import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { NewsHomepage } from "@/interfaces/Homepage";
import Vishnu from "@/assets/images/intaniaNews/Vishnu3rd.jpg";
import EngAndStudy from "@/assets/images/intaniaNews/EngineerAndStudy.jpg";
import Football from "@/assets/images/intaniaNews/Football2.jpg"
import payan from "@/assets/images/intaniaNews/PaYan.jpg";
import teacher from "@/assets/images/intaniaNews/Teacher.jpeg"


export function IntaniaNewsHeader() {
    const news: NewsHomepage[] = [
        {
            title: "รีวิวชีวิตปี 1 วิศวฯ จุฬา",
            description:
                "ตลอด 1 ปีของการเป็นนิสิตวิศวฯ จุฬา พูดได้คำเดียวเลยว่า “เหนื่อย” แต่มันเป็นความเหนื่อยที่คุ้มค่า",
            image: Vishnu,
        },
        {
            title: "วิศวฯกับการเรียน",
            description:
                "ถ้าพูดกันตรง ๆ ก็คือยากมากครับ โดยเฉพาะปี 1 ที่เราอาจจะยังปรับตัวกับการเรียนในมหาลัยไม่ได้ดีขนาดนั้น",
            image: EngAndStudy,
        },
        {
            title: "ฟุตบอลประเพณี",
            description:
                "ฟุตบอลประเพณีจุฬา-ธรรมศาสตร์จริงๆ แล้วมีต้นกำเนิดมาจากการแข่งขันเรือประเพณีระหว่างมหาวิทยาลัยออกซฟอร์ดและมหาวิทยาลัยเคมบริดจ์",
            image: Football,
        },
        {
            title: "ไอเทมวิศวฯ",
            description:
                "ผ้ายันต์สำหรับชาววิศวฯ เปรียบเสมือนเครื่องรางให้น้องๆ สอบผ่าน ใช้ชีวิตภายในคณะวิศวฯ โดยสวัสดิภาพราบรื่น",
            image: payan,
        },
        {
            title: "บิดาแห่งคณะวิศวกรรมศาสตร์",
            description:
                "ก่อนจะมาเป็นวิศวฯ จุฬาอย่างทุกวันนี้ คณะวิศวฯ เคยเป็นแค่โรงเรียนช่างที่ไม่ได้มีหลักสูตรปริญญา และไม่ได้รับการยอมรับจากต่างชาติในฐานะมหาวิทยาลัยสากล",
            image: teacher,
        },
    ];

    return (
        <div className="aspect-video w-full overflow-hidden rounded-md shadow-lg">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="m-0 p-0"
            >
                <CarouselContent>
                    {
                        news.map((item: NewsHomepage, index: number) => {
                            return (
                                <CarouselItem className="basis-full" key={index}>
                                    <div className="relative flex aspect-video w-[90vw] max-w-[800px] items-end justify-end p-6">
                                        <Image
                                            src={item.image}
                                            alt={item.title || "News image"}
                                            quality={80}
                                            fill
                                            sizes="100%"
                                            className="object-cover object-top"
                                            {...(index > 0 ? { loading: "lazy" } : { loading: "eager" })}
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
                                                    <p className="w-[80%] text-xs sm:text-sm md:text-base lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
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
