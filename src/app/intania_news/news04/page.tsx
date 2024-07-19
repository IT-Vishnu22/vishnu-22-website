import vectorImage from "../images/vector.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function News04() {
  return (
    <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
      <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
        <Link href="/intania_news">
          {<Image className="" src={vectorImage} alt="vector graphic" />}
        </Link>
        <h1 className="font-roboto-condensed text-[30px] font-bold text-blue-1">
          INTANIA NEWS
        </h1>
      </div>

      <div className="mr-[5%] mt-5 flex place-items-center justify-center space-x-[5%]">
        <a href="https://www.w3schools.com/tags/att_a_href.asp"></a>
        <h1 className="font-athiti text-[24px] font-bold text-blue-1">
          <span>ไอเทมวิศวฯ</span>
        </h1>
      </div>

      <div className="mt-3 flex justify-center">
        <div className="relative h-64 w-1/2 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/page4.1.jpeg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div>
        <h2 className="font-athiti relative ml-5 mt-3 inline-block max-w-full break-words text-[15px] text-xs font-bold italic text-blue-1">
          ผ้ายันต์
        </h2>
      </div>

      <div>
        <h2 className="font-athiti relative mb-3 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp; &emsp;ผ้ายันต์สำหรับชาววิศวฯ เปรียบเสมือนเครื่องรางให้น้องๆ
          สอบผ่าน ใช้ชีวิตภายในคณะวิศวฯ โดยสวัสดิภาพราบรื่น แต่จริงๆ
          แล้วสมัยก่อนผ้ายันต์ไม่ได้ใช้เป็นเครื่องรางเหมือนอย่างสมัยนี้นะ
          แต่ก่อนพวกรุ่นพี่ก็จะแจกผ้ายันต์เอาไว้ให้น้องๆ
          เขียนชื่อแล้วก็เย็บบนเสื้อช็อปให้รู้ว่าใครเป็นใคร
          ไม่ได้เป็นเครื่องรางพิเศษอะไร ก็พึ่งมามีความสำคัญในช่วงหลังนี่แหละ
        </h2>
      </div>

      <div className="relative ml-4 mr-4 mt-5 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <img
          src="/intaniastorypics/page4.2.jpg"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full scale-125 transform object-cover object-center"
        />
      </div>

      <div>
        <h2 className="font-athiti relative ml-5 mt-5 inline-block max-w-full break-words text-[15px] text-xs font-bold italic text-blue-1">
          ติ้งโครง เนคไทโครง
        </h2>
      </div>

      <div>
        <h2 className="font-athiti relative mb-3 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp;
          &emsp;บางครั้งที่เราเห็นพวกรุ่นพี่ใส่เนคไทหรือติ้งที่มันหน้าตาแปลกๆ
          มีแต่โครงอย่างเดียว ไม่ได้เป็นพระเกี้ยวเหมือนอย่างคณะอื่น จริงๆ
          แล้วมันเป็นเอกลักษณ์ของวิศวฯ เรานะ เคยมีอยู่ช่วงหนึ่งที่วิศวฯ
          ตั้งตนเป็น College of Engineering ไม่ใช่แค่ Faculty of Engineering
          แล้วเราก็สร้างกิจกรรมของเราเอง เสมือนเป็นมหาวิทยาลัยหนึ่ง
          ซึ่งตัวเนคไทกับติ้งที่มี design ต่างออกไปก็เกิดขึ้นมาในยุคนี้นั่นเอง
        </h2>
      </div>

      <div className="mx-auto max-w-[40%] gap-6">
        <div className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/page4.3.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div>
        <h2 className="font-athiti relative ml-5 mt-3 inline-block max-w-full break-words text-[15px] text-xs font-bold italic text-blue-1">
          สมุดเชียร์
        </h2>
      </div>

      <div>
        <h2 className="font-athiti relative mb-3 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp; &emsp;ในวิศวฯ มันจะมีสิ่งที่เรียกว่าเพลงเชียร์อยู่
          เอาไว้เชียร์ไว้ร้องตอนขึ้นแสตนกันหรือแข่งกีฬา
          แต่ก่อนเนี่ยเพลงเชียร์ทุกคนจะต้องร้องได้
          รุ่นพี่เค้าก็จะแจกสมุดเชียร์มาให้ ขนาดจะพอดีกับกระเป๋าอกเสื้อพอดีเลย
          ใส่พกติดตัวไปไหนมาไหนตลอด ในปัจจุบันเองก็ยังมีสมุดเชียร์แจกให้น้องๆ
          กันอยู่เหมือนกัน
          แถมยังมีสมุดเชียร์ออนไลน์ให้น้องไปฟังไปดูเนื้อเพลงกันด้วยนะ
        </h2>
      </div>

      <div>
        <h2 className="font-athiti relative ml-5 inline-block max-w-full break-words text-[15px] text-xs font-bold italic text-blue-1">
          เกียร์
        </h2>
      </div>

      <div>
        <h2 className="font-athiti relative mb-3 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp; &emsp;เกียร์ถูกใช้เป็นตัวแทนของวิศวฯ อยู่เสมอ
          แต่ใครบ้างจะรู้ความหมายที่แท้จริงของมัน เกียร์นั้นเมื่ออยู่เดี่ยวๆ
          ย่อมไม่อาจทำงานสร้างผลผลิตออกไม่ได้
          ไม่ว่าเกียร์นั้นจะขนาดใหญ่หรือแข็งแรกมากแค่ไหน
          แต่มันจะต้องเข้าไปประกอบไปด้วยเกียร์ตัวอื่นๆ ทั้งใหญ่ทั้งเล็ก
          จะขาดเกียร์อันใดอันหนึ่งไปไม่ได้ ก็เหมือนชาววิศวฯ เรา
          ทุกส่วนล้วนสำคัญเพื่อให้งานนั้นดำเนินต่อไปได้
        </h2>
      </div>
    </div>
  );
}
