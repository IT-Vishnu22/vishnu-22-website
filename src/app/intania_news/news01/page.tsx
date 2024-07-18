import vectorImage from "../images/vector.svg";
import backgroundImage from "../images/vector.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function News01() {
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

      <div className="relative ml-4 mr-4 mt-5 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <img
          src="/intaniastorypics/Vishnu3rd.jpg"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full scale-125 transform object-cover object-center"
        />
      </div>

      <div className="mt-5 flex items-center justify-center space-x-4">
        <a href="https://www.w3schools.com/tags/att_a_href.asp"></a>
        <h1 className="font-athiti text-[24px] font-bold text-blue-1">
          <span>รีวิวชีวิตปี 1 วิศวฯจุฬา</span>
        </h1>
      </div>

      <div className="paragraph-container">
        <h2 className="font-athiti relative mb-3 ml-5 mt-2 inline-block max-w-full break-words text-center text-xs italic text-black">
          <span>
            “พอชีวิตช่วงดีที่สุดจนตราบเท่าทุกวันนี้ คือ ถ้าถามว่าผมในช่วงอายุ 68
            ปี
          </span>
          <br />
          <span>
            ถามว่าช่วงไหนดีที่สุด ช่วงหนึ่งของชีวิตคือช่วงที่เป็นนิสิตวิศวจุฬา”
          </span>
        </h2>

        <h2
          className="font-athiti relative inline-block max-w-full break-words text-xs text-black"
          style={{ marginLeft: "auto", display: "block", textAlign: "right" }}
        >
          - พี่ศิษย์เก่าไม่ประสงค์ออกนาม 2504
        </h2>

        <h2 className="font-athiti relative mb-3 mt-5 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp; &emsp;ตลอด 1 ปีของการเป็นนิสิตวิศวฯ จุฬา พูดได้คำเดียวเลยว่า
          “เหนื่อย” แต่มันเป็นความเหนื่อยที่คุ้มค่า เรียนเหนื่อย เล่นเหนื่อย
          เที่ยวเหนื่อย แต่สนุกมั้ย มันสนุกนะ พอจบปี 1
          แล้วมองย้อยกลับไปดูแรงกายแรงใจที่ตัวเองทุ่มลงไป มันคุ้มค่าว่ะ ชีวิตปี
          1 มันคือช่วงที่ใครๆ ก็บอกว่าเป็นช่วงเวลาที่สนุกที่สุดในชีวิต
          ตอนเข้ามาครั้งแรกมันก็ยังไม่เข้าใจหรอกว่าสนุกตรงไหน เรียนก็แสนจะยาก
          เรียนไม่ทันไรก็สอบละ ชีวิตวนลูป อ่านหนังสือ ทำกิจกรรม
          อ่านหนังสือไปเรื่อยๆ ยิ่งปี 1 เป็นปีที่เรียนยากที่สุดละ
          แต่มันสนุกตรงไหนรู้มั้ย มันสนุกเพื่อน สนุกประสบการณ์
          มันกลับมานั่งคิดว่า เออ ฉันเจ๋งว่ะ ใช้ชีวิตคุ้มว่ะ
        </h2>
      </div>

      <div className="relative ml-4 mr-4 mt-3 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <img
          src="/intaniastorypics/Vishnu20th.jpg"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full scale-125 object-cover object-center"
        />
      </div>

      <div className="paragraph-container">
        <h2 className="font-athiti relative mb-3 mt-5 inline-block max-w-full break-words text-xs font-medium text-black">
          &emsp; &emsp;ยังจำวันแรกที่เข้าค่ายวิษณุได้อยู่เลยด้วยซ้ำ
          ขนาดเรามาเล่น
          มาทำกิจกรรมทุกอย่างยังอดเสียดายไม่ได้เลยว่าทำไมไม่ไปทักทาย
          ทำไมไม่ไปคุยกับเพื่อนๆ พี่ๆ ให้ได้มากกว่านี้ เคยมีคนบอกเอาไว้ว่า “ปี 1
          คือปีของการรับ ส่วนปี 2 คือปีของการให้” ถ้ายังอยู่ปี 1
          ก็รับเสียให้เต็มที่ เก็บเกี่ยวความทรงจำแสนล้ำค่าพวกนี้ไว้
          เพราะช่วงชีวิตการได้เป็น freshy มันมีครั้งเดียวจริงๆ
        </h2>
      </div>
      <div>
        <h2 className="font-athiti relative mb-3 mt-1 inline-block max-w-full break-words text-center text-xs italic text-black">
          “เข้ามาเรียนมหาวิทยาลัยได้สักพักปิดเทอม
          ตอนนั้นมันมีความรู้สึกว่ามันอบอุ่น ก็มีความเคารพในเรื่อง Seniority
          ที่ว่าลูกน้องต้องเคารพผู้ใหญ่เป็นธรรมเนียมไทย แม้แต่ภารโรง กวาดพื้น
          ถูห้อง แม่ค้าขายกล้วยแขก เราเรียกลุง เรียกป้า เหมือนเป็นญาติกันหมด
          ไม่ได้ดูถูกผู้ใหญ่ เป็นลุง จะมีแต่ป้าทำไมกล้วยแขกมันบางลง”
        </h2>
      </div>
      <div>
        <h2
          className="font-athiti relative inline-block max-w-full break-words text-xs text-black"
          style={{ marginLeft: "auto", display: "block", textAlign: "right" }}
        >
          - ถอดเทปตำนานวิศวจุฬา ท่านองคมนตรี กำธน สินธวานนท์ (วันที่ 20 กันยายน
          2555)
        </h2>
      </div>

      <div className="ml-3 mr-3 mt-5 flex items-center justify-center space-x-4">
        <div className="relative h-32 w-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/vihnuold.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <div className="relative h-32 w-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/VH20.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full scale-110 object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
