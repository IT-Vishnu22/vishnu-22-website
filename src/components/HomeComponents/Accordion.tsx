import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionHome() {

    const questionDemo = [
        { question: "First Date/ค่ายวิษณุฯ คืออะไร ต้องไปทุกคนไหม ไปแล้วได้อะไร ?", answer: "ทั้งสองกิจกรรมเป็นงานที่พวกเรา เหล่ารุ่นพี่คณะวิศวกรรมศาสตร์ จุฬาฯ จัดขึ้นมาให้กับชาว Intania 108 โดยเฉพาะ ซึ่งในงานนี้จะทำให้ทุกคนได้รู้จักกับเพื่อนร่วมรุ่น รุ่นพี่ และคณะของเรา เพื่อเตรียมความพร้อมก่อนเปิดเรียนในคณะวิศวฯ โดยทั้งสองงานไม่ได้เป็นงานบังคับ แต่พวกเราอยากให้ชาว Intania 108 มาร่วมสนุกกับกิจกรรม มารู้จักกับเพื่อนๆ และได้มีความทรงจำที่ดีร่วมกัน พี่ๆตั้งใจจัดงานนี้กันมากๆ มากันเยอะ ๆ นะ🩵" },
        { question: "Intania First Date กับ CU First Date แตกต่างกันยังไง ?", answer: "CU First Date เป็นงานวันแรกพบของนิสิตจุฬาฯ ซึ่งเป็นกิจกรรมร่วมกันของนิสิตทั่วทั้งจุฬาฯ จัดโดย อบจ. โดยงานCU First Date จะจัดขึ้นในช่วงเช้า และในส่วนของช่วงบ่ายในวันเดียวกันนั้นก็จะมีงาน First Date ของแต่ละคณะเองด้วย โดยคณะวิศวกรรมศาสตร์ของพวกเราคือ งาน Intania First Date เป็นกิจกรรมสุดพิเศษที่จัดให้กับนิสิตคณะวิศวฯโดยเฉพาะ" },
        { question: "Intania First Date มีกำหนดการอย่างไรบ้าง ?", answer: "กิจกรรม Intania First Date เริ่มตั้งแต่ 12:30 จนถึง 18:00 ส่วนกำหนดการรายละเอียดเพิ่มเติม จะมีแจ้งในโพสต่อๆไปแน่นอน รอติดตามได้เลย" },
        { question: "ต้องแต่งตัวยังไงไปงาน First Date ?", answer: "ทุกคนสามารถแต่งตัวตามที่ตัวเองมั่นใจได้เลย !"},
        { question: "ค่ายวิษณุฯ เป็นค่ายค้างคืนมั้ย ?", answer: "ค่ายวิษณุฯ ในปีนี้ เป็นรูปแบบเช้าเย็นกลับ ไม่ค้างคืน แต่เนื่องจากกิจกรรมของค่ายค่อนข้างเยอะ และเลิกช่วงค่ำๆ ทางค่ายมีจัดสถานที่สำหรับนอนและอาบน้ำ ภายในคณะให้ เพื่ออำนวยความสะดวกให้กับน้องๆที่มีความจำเป็นที่จะต้องพักที่คณะค้าบ"},
        { question: "สะดวกไปเข้าค่ายแค่บางวันหรือบางช่วงเวลาได้มั้ย ?", answer: "ได้แน่นอน ! ค่ายวิษณุฯของเราสามารถเข้าร่วมได้ตามความสะดวกและความสมัครใจเลย"},
        { question: "ค่ายวิษณุฯ มีอาหารให้มั้ย ?", answer: "ทางค่ายได้เตรียมอาหารสุดอร่อยไว้ให้น้องๆ ครบทุกมื้อ ตลอดทั้ง4วันเลย (ยกเว้นมื้อเช้าวันแรก และ มื้อเย็นวันสุดท้ายน้าา)"},
        { question: "ยังไม่มีเพื่อนเลย ถ้าไปแล้วจะรู้สึกเคว้งหรือเหงามั้ย ?", answer: "ไม่ต้องห่วงครับ ในค่ายวิษณุฯ จะมีกิจกรรมมากมายให้น้องๆชาว Intania 108 ได้มารู้จักเพื่อน ๆ แล้วพี่ๆสตาฟทุกคนเองก็พร้อมต้อนรับสุด ๆ ทำให้ทุกคนจะได้รู้จักเพื่อนใหม่เยอะมากๆ ดังนั้นมาได้แน่นอนนน"},
    ];

    return (
        <div className="w-[90%] flex flex-col items-center justify-center space-y-[14px] mx-14 sm:my-12 md:my-14 lg:my-16 max-w-[1000px]">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8">คำถามที่พบบ่อย</p>
            <Accordion type="single" collapsible className="w-full flex flex-col space-y-[14px]">
                {
                    questionDemo.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="font-medium bg-[#ECD8C1] rounded-[14px] px-4 my-2">
                            <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-left text-medium sm:text-base lg:text-lg">{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}