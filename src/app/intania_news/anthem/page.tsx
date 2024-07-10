import vectorImage from "../images/vector.svg";
import backgroundImage from "../images/background.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";

export default function AnthemPage() {
  return (
    <div className="h-screen bg-rose-500">
      <div className="mr-[5%] mt-10 flex place-items-center justify-center space-x-[13%]">
        <a
          href="https://www.w3schools.com/tags/att_a_href.asp"
          className="ml-[-13%]"
        >
          <Image className="" src={vectorImage} alt="vector graphic" />
        </a>
        <h1 className="text-[26px] font-bold text-blue-1">ปราสาทสีแดง</h1>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ประพันธ์คำร้องโดย ธาตรี</h2>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ทำนองโดย ครูเอื้อ สุนทรสนาม</h2>
      </div>

      <div className="mt-10 flex place-items-center justify-center space-x-[13%]">
        <p className="mx-6 text-[16px] text-blue-1">
          ยังมีปราสาทสีแดง ดังศิลาแลง
          <br />
          งดงามเด่นแซงแหล่งเมืองชมพู
          <br />
          อัศวินอัศวินีชวนดู
          <br />
          จิตใจนั้นร่วมกันเชิดชูพระภูธเรศน์จุฬา
          <br />
          <br />
          วิษณุเทพเทวัญ ดังบิดรอัน
          <br />
          ทุกคนผูกพันมั่นในวิญญา
          <br />
          ต่างเคารพ ต่างซบใจบูชา
          <br />
          เทพองค์นี้ให้เราเกิดมา รักงานทางช่างกว้างไกล
          <br />
          <br />
          เป็นอาจารย์เป็นพ่อ
          <br />
          พวกเราจึงรวมร่วมก่อพ่อเดียวกันในใจ
          <br />
          คุณความดีปองใฝ่
          <br />
          เลือดหมูคือสีผูกใจ ไว้ศักดิ์ศรีคงมั่น
          <br />
          <br />
          ผองชาวปราสาทสีแดง โลหิตรินแรง
          <br />
          สายธารแห่งใจแบ่งไปเทียมทัน
          <br />
          อาบพี่น้องร่วมสีเมืองเดียวกัน
          <br />
          ด้วยตัวเขาจิตใจผูกพัน มิคลายรักมั่นจุฬา
        </p>
      </div>
    </div>
  );
}

/*
<div className="relative max-w-[40%] mx-auto mt-10">
  <img
    className="h-64 w-full object-cover rounded-md"
    src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
    alt="Random image"
  ></img>
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
  <div className="absolute inset-0 flex place-content-end">
    <div className="content-end">
      <h2 className="text-white text-3xl font-bold">
        รีวิวชีวิตปี 1 วิศวฯจุฬา
      </h2>
      <h2 className="text-white text-3xl font-bold">placeholder2?</h2>
    </div>
  </div>
</div>
</div>
*/
