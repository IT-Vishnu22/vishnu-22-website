import vectorImage from "@/app/intania_news/images/vector.svg";
import backgroundImage from "@/app/intania_news/images/background.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
        <a href="https://www.w3schools.com/tags/att_a_href.asp">
          <Image className="" src={vectorImage} alt="vector graphic" />

        </a>
        <h1 className="text-[26px] font-bold text-blue-1">INTANIA NEWS</h1>
      </div>

      <div className="mr-[5%] mt-5 flex place-items-center justify-center space-x-[13%]">
        <a href="https://www.w3schools.com/tags/att_a_href.asp">
        </a>
        <h1 className="text-[19px] font-bold text-blue-1">
            <span>บิดาแห่งคณะวิศวกรรมศาสตร์</span>
            <span>จุฬาลงกรณ์มหาวิทยาลัย (พระเจริญวิศวกรรม)</span>
        </h1>
      </div>

      <div className="mx-auto mt-5 max-w-[80%] gap-6">
        <div className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/page5.1.jpeg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block text-xs text-white">
          พระเจริญวิศวกรรม (นายเจริญ เชนะกุล)
          </span>
        </div>
      </div>

      <div>
          <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
          ก่อนจะมาเป็นวิศวฯ จุฬาอย่างทุกวันนี้ คณะวิศวฯ เคยเป็นแค่โรงเรียนช่างที่ไม่ได้มีหลักสูตรปริญญา และไม่ได้รับการยอมรับจากต่างชาติในฐานะมหาวิทยาลัยสากล จนกระทั่ง วันที่ 9 ตุลาคม พ.ศ. 2481 พระเจริญวิศวกรรม (นายเจริญ เชนะกุล) ซึ่งดำรงตำแหน่งคณบดี คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย อยู่ตอนนั้นได้ปรับปรุงหลักสูตรการเรียนการสอนใหม่ จากเดิมที่รับนักเรียนที่จบมัธยมศึกษาปีที่ 6 (ม.4 ในปัจจุบัน) เป็นรับผู้ที่จบมัธยมศึกษาปีที่ 8 (ม.6 ในปัจจุบัน) แยกแผนกการเรียนการสอนในชั้นปีที่ 4 เป็น 3 แผนก หรือก็คือภาควิชาขึ้นมา 3 ภาควิชาแรกนั่นก็คือ แผนกวิศวกรรมโยธา แผนกวิศวกรรมไฟฟ้า และแผนกวิศวกรรมเครื่องกล

          </h2>
        </div>

        <div>
          <h2 className="relative mb-3 ml-5 mt-1 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
          ทางด้านอาจาย์ผู้สอน พระเจริญวิศวกรรมได้ติดต่ออาจารย์ชาวต่างประเทศ 2 ท่านให้มาสอนที่คณะวิศวฯ คือ ศาสตราจารย์ ดร.ชาร์ล เอมสัน เกเวอร์ต (Professor Dr.Charles Ernfrid M.Son Gewertz) เป็นชาวสวีเดน จบการศึกษาปริญญาเอกทางวิศวกรรมไฟฟ้าจาก MIT ส่วนอีกท่านคือ ศาสตราจารย์ฮันส์ บันตลิ (Professor Hans Bantle) ชาวสวิตเซอร์แลนด์ ทำหน้าที่เป็นหัวหน้าแผนกวิศวกรรมเครื่องกล ส่วนพระเจริญวิศวกรรม ทำหน้าที่เป็นหัวหน้าแผนกวิศวกรรมโยธา ซึ่งชื่อของอาจารย์แต่ละท่านก็ถูกนำมาตั้งเป็นชื่ออาคารประจำภาควิชาจนถึงทุกวันนี้

          </h2>
        </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-3 gap-4 gap-6">
      </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-4 gap-4 gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/page5.2.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center "
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
          ตึกฮันส์ บันตลิ ตึกประจำภาควิชาเครื่องกล
          </span>
        </div>

        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/page5.3.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            ตึก 4 อาคารเจริญวิศวกรรม
          </span>
        </div>
      </div>

      <div className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-5">
          <img
            src="/intaniastorypics/page5.4.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />


        </div>
        <div>
            <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black italic">
                <span>“...ท่านอาจารย์คุณพระเจริญวิศวกรรม ท่านเป็นผู้รักวิชาวิศวกรรมศาสตร์เป็นที่สุด ท่านถือว่าวิชานี้เป็นยอดของวิชาชีพ</span><br/>
                <span>ท่านพร่ำสอนว่าที่เมืองฝรั่งนั้นวิศวกรเป็นผู้นำ เขาถือว่า ประเทศชาติเจริญได้ก็เพราะมีวิศวกรมากๆ</span><br/>
                <span>...ท่านจะต้องทำให้พวกเรารับปริญญาให้ได้...”</span>
            </h2>
        </div>

        <div>
            <h2 className="relative mb-3 ml-5 mt-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
            ในที่สุดคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ได้ประกาศใช้หลักสูตรปริญญาเป็นครั้งแรกเมื่อปี พ.ศ. 2476 และมีบัณฑิตรุ่นแรกเข้ารับพระราชทานปริญญาบัตรจากผู้สำเร็จราชการแทนพระองค์เมื่อวันที่ 11 กรกฎาคม พ.ศ. 2478
            </h2>
        </div>

        

    </div>
  );
}
