import vectorImage from "../images/vector.svg";
import backgroundImage from "../images/vector.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function News02() {
    return (
        <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
            <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
                <Link href="/intania_news">
                    {
                        <Image
                            className=""
                            src={vectorImage}
                            alt="vector graphic"
                        />
                    }
                </Link>
                <h1 className="font-roboto-condensed text-[30px] font-bold text-blue-1">
                    INTANIA NEWS
                </h1>
            </div>

            <div className="relative ml-4 mr-4 mt-5 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                    src="/intaniastorypics/3.1.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full scale-125 object-cover object-center"
                />
            </div>
            <div className="mt-5 flex items-center justify-center space-x-4">
                <a href="https://www.w3schools.com/tags/att_a_href.asp"></a>
                <h1 className="font-athiti text-[24px] font-bold text-blue-1">
                    <span>วิศวฯ กับการเรียน</span>
                </h1>
            </div>

            <div className="flex justify-center">
                <h2 className="relative mb-3 ml-5 mt-1 inline-block max-w-full break-words text-center font-athiti text-xs italic text-black">
                    <span>“ตอนเรียนยากไหมครับ”</span>
                    <br />
                    <span>“คงยาก แต่เราไม่ค่อยเรียน ก็เลยไม่ค่อยยาก”</span>
                </h2>
            </div>

            <div>
                <h2
                    className="relative inline-block max-w-full break-words font-athiti text-xs text-black"
                    style={{
                        marginLeft: "auto",
                        display: "block",
                        textAlign: "right",
                    }}
                >
                    - ถอดเทปตำนานวิศวจุฬา ท่านองคมนตรี กำธน สินธวานนท์ (วันที่
                    20 กันยายน 2555)
                </h2>
            </div>

            <div>
                <h2 className="relative ml-2 mt-5 inline-block max-w-full break-words font-athiti text-xs font-bold text-blue-1">
                    <span>บทสัมภาษณ์พี่ปี 2 สุดหล่อคนหนึ่ง</span>
                    <br />
                    <span>เรียนปี 1 ยากไหม?</span>
                </h2>
            </div>

            <div>
                <h2 className="relative mb-3 mt-2 inline-block max-w-full break-words font-athiti text-xs font-medium text-black">
                    &emsp; &emsp; ถ้าพูดกันตรง ๆ ก็คือยากมากครับ โดยเฉพาะปี 1
                    ที่เราอาจจะยังปรับตัวกับการเรียนในมหาลัยไม่ได้ดีขนาดนั้น
                    เกรดม.ปลายนี่เอามาเทียบกับมหาลัยไม่ได้เลยนะ ม.ปลายได้ 4.00
                    มามหาลัยจัดไป 2.50 นี่ก็เห็นได้ทั่วไป หลาย ๆ
                    อย่างที่เราชินกับการเรียนในโรงเรียนมัธยมมันก็อาจจะใช้ไม่ได้กับมหาลัยแล้ว
                    เช่น การอ่านหนังสืออาทิตย์เดียวก่อนสอบอย่างเงี้ย
                    ตอนเรียนมัธยมยังไงก็ผ่านอยู่ละ
                    แต่ถ้าทำแบบนี้ในคณะเรานี่แทบจะการันตีเกรด F ได้เลย
                    ดังนั้นมันถึงมีวัฒนธรรมการอ่านหนังสือก่อนสอบล่วงหน้า 1 เดือน
                    หรือที่เราเรียกกันว่าการเข้าเดือนนี่แหละ{" "}
                </h2>
            </div>

            <div className="relative ml-4 mr-4 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                    src="/intaniastorypics/3.2.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full scale-125 object-cover object-center"
                />
            </div>

            <div>
                <h2 className="relative ml-2 mt-5 inline-block max-w-full break-words font-athiti text-xs font-bold text-blue-1">
                    <span>แล้วแบ่งเวลาทำกิจกรรมยังไง?</span>
                    <br />
                </h2>
            </div>

            <div>
                <h2 className="relative mb-3 mt-2 inline-block max-w-full break-words font-athiti text-xs font-medium text-black">
                    &emsp; &emsp; นอกจากนี้ก็จะมีเรื่องกิจกรรมด้วย ตอนปี 1
                    นี่มันจะมีกิจกรรมหลาย ๆ
                    อย่างให้เราทำหรือเข้าร่วมเยอะมากเลยนะ
                    พอไปทำอะไรแบบนี้มันก็จะได้ประสบการณ์และได้เพื่อนเยอะดี
                    แต่มันก็แลกมากับการมีเวลาอ่านหนังสือน้อยลง
                    ทำให้คะแนนสอบเราน้อยลงไปด้วย
                    มันก็แล้วแต่คนแหละว่าจะให้ความสำคัญกับการเรียนหรือกิจกรรมมากกว่ากัน
                    ผมเห็นเพื่อนหลายแบบเลยนะ
                    บางคนก็เรียนอย่างเดียวกิจกรรมไม่เอาเลย
                    บางคนก็ทำกิจกรรมเยอะหน่อย
                    แต่บางคนก็เป็นพวกเทพที่ทำทั้งกิจกรรมด้วยแล้วก็ยังได้เกรดดีด้วยนะ
                    ไม่รู้ทำได้ยังไงเหมือนกัน 55555
                </h2>
            </div>

            <div>
                <h2 className="relative mb-3 inline-block max-w-full break-words text-center font-athiti text-xs italic text-black">
                    <span>“ปีผมเฟรชชี่อย่างเดียว 150”</span>
                    <br />
                    <span>“ของผมไม่ถึง 100”</span>
                    <br />
                    <span>“แต่พอถึงซีเนียร์แล้วเหลือแค่ 20 เองหรอครับ”</span>
                    <br />
                    <span>
                        “รวม ๆ แล้ว สัก 30 ก็จะมีโยธา
                        ตามมาด้วยไฟฟ้าและพวกเครื่องกล เหมืองแร่เรียกว่าหยุมหยิม”
                    </span>
                    <br />
                    <span>“ที่สงสัยคือหายไปไหนกันหมด”</span>
                    <br />
                    <span>“นี่คือคำถามที่ดี ว่าหายไปไหน เรียนจบเร็ว”</span>
                    <br />
                </h2>
            </div>

            <div>
                <h2
                    className="relative inline-block max-w-full break-words font-athiti text-xs text-black"
                    style={{
                        marginLeft: "auto",
                        display: "block",
                        textAlign: "right",
                    }}
                >
                    - ถอดเทปตำนานวิศวจุฬาฯ คุณปริต คุณพงษ์ศักดิ์ (วันที่ 15
                    มิถุนายน 2555)
                </h2>
            </div>
        </div>
    );
}
