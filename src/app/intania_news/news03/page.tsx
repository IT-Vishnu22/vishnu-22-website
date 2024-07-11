import vectorImage from "../images/vector.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function News03() {
  return (
    <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
      <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
        <Link href="/intania_news">
          {<Image className="" src={vectorImage} alt="vector graphic" />}
        </Link>
        <h1 className="text-[26px] font-bold text-blue-1">INTANIA NEWS</h1>
      </div>

      <div className="mr-[5%] mt-5 flex place-items-center justify-center space-x-[5%]">
        <a href="https://www.w3schools.com/tags/att_a_href.asp"></a>
        <h1 className="text-[19px] font-bold text-blue-1">
          <span>ฟุตบอลประเพณี</span>
        </h1>
      </div>

      <div className="mx-auto mt-5 max-w-[80%] gap-6">
        <div className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/4.1.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="group relative col-span-2 mt-5 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/4.2.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div>
        <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
          ฟุตบอลประเพณีจุฬา-ธรรมศาสตร์จริงๆ
          แล้วมีต้นกำเนิดมาจากการแข่งขันเรือประเพณีระหว่างมหาวิทยาลัยออกซฟอร์ดและมหาวิทยาลัยเคมบริดจ์ในสหราชอาณาจักร
          โดยมีจุดประสงค์เพื่อจะสานสัมพันธ์อันดีระหว่างนิสิตจุฬาและนิสิตธรรมศาสตร์
          จัดงานที่สนามศุภชลาศัย กรีฑาสถานแห่งชาติ ถนนพระรามที่ 1 แขวงวังใหม่
          เขตปทุมวัน กรุงเทพมหานคร เป็นประจำทุกปี
          กองเชียร์ของมหาวิทยาลัยเจ้าภาพจะใช้อัฒจันทร์ฝั่งทิศเหนือ
          อีกฝ่ายจะใช้อัฒจันทร์ฝั่งทิศใต้
        </h2>
      </div>

      <div>
        <h2 className="relative mb-3 ml-5 mt-1 inline-block max-w-full break-words font-roboto-condensed text-xs italic text-black">
          “ เดี๋ยวนี้ฟุตบอลประเพณีเป็นอย่างไรไม่รู้
          สมัยก่อนรุ่นผมเป็นน้องใหม่ธรรมศาสตร์ เป็นเจ้าภาพ หรือจุฬาฯ เป็นเจ้าภาพ
          ถ้าธรรมศาสตร์เป็นเจ้าภาพเวลาเสร็จสิ้นการกีฬาแล้ว
          ธรรมศาสตร์จะเปิดมหาวิทยาลัยเขาแล้วจุฬาฯ
          ก็จะไปฉลองกันที่โน่นใครชนะไม่เป็นไร แต่เขาจะมีข้าวแจกให้พวกเรา
          ถ้าจุฬาฯ เป็นเจ้าภาพเราก็จะมีข้าวให้เขา
          ผมว่าอันนั้นเป็นน้ำใจที่น่าประทับใจมาก”
        </h2>
      </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-4 gap-4 gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/4.3.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/4.4.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div>
        <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
          นอกจากแข่งกีฬาแล้วยังมีการแข่งกิจกรรมเชื่อมสัมพันธ์ระหว่างนิสิตจุฬาฯ
          กับนักศึกษามหาวิทยาลัยธรรมศาสตร์ เช่น การเดินพาเหรด การเชียร์
          การแปรอักษร{" "}
        </h2>
      </div>

      <div>
        <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs italic text-black">
          <span>“ คืนนั้นมีการละเล่น” </span>
          <br />
          <span>
            “นี่คือสิ่งประทับใจสมัยก่อน
            ที่ผมเคยพูดว่ามีความสุขเช้าก็นั่งรถแห่กันไป”
          </span>
          <br />
          <span>
            “ธรรมศาสตร์ก็ขับมาจุฬาฯ จุฬาฯ ก็ไปธรรมศาสตร์ ไม่รู้มันบ้าบอ”
          </span>
        </h2>
      </div>

      <div>
        <h2 className="relative mb-3 ml-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
          ถอดเทปตำนานวิศวจุฬา 2504-2507 (วันที่ 10 สิงหาคม 2555)
        </h2>
      </div>
    </div>
  );
}
