import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionHome() {
    const questionDemo = [
        {
            question:
                "First Date/ค่ายวิษณุฯ คืออะไร ต้องไปทุกคนไหม ไปแล้วได้อะไร ?",
            answer: "ทั้งสองกิจกรรมเป็นงานที่พวกเรา เหล่ารุ่นพี่คณะวิศวกรรมศาสตร์ จุฬาฯ จัดขึ้นมาให้กับชาว Intania 108 โดยเฉพาะ ซึ่งในงานนี้จะทำให้ทุกคนได้รู้จักกับเพื่อนร่วมรุ่น รุ่นพี่ และคณะของเรา เพื่อเตรียมความพร้อมก่อนเปิดเรียนในคณะวิศวฯ โดยทั้งสองงานไม่ได้เป็นงานบังคับ แต่พวกเราอยากให้ชาว Intania 108 มาร่วมสนุกกับกิจกรรม มารู้จักกับเพื่อน ๆ และได้มีความทรงจำที่ดีร่วมกัน พี่ ๆตั้งใจจัดงานนี้กันมาก ๆ มากันเยอะ ๆ นะ🩵",
        },
        {
            question: "Intania First Date กับ CU First Date แตกต่างกันยังไง ?",
            answer: "CU First Date เป็นงานวันแรกพบของนิสิตจุฬาฯ ซึ่งเป็นกิจกรรมร่วมกันของนิสิตทั่วทั้งจุฬาฯ จัดโดย อบจ. โดยงานCU First Date จะจัดขึ้นในช่วงเช้า และในส่วนของช่วงบ่ายในวันเดียวกันนั้นก็จะมีงาน First Date ของแต่ละคณะเองด้วย โดยคณะวิศวกรรมศาสตร์ของพวกเราคือ งาน Intania First Date เป็นกิจกรรมสุดพิเศษที่จัดให้กับนิสิตคณะวิศวฯโดยเฉพาะ",
        },
        {
            question: "Intania First Date มีกำหนดการอย่างไรบ้าง ?",
            answer: "กิจกรรม Intania First Date เริ่มตั้งแต่ 12:30 จนถึง 18:00 ส่วนกำหนดการรายละเอียดเพิ่มเติม จะมีแจ้งในโพสต์ต่อ ๆไปแน่นอน รอติดตามได้เลย",
        },
        {
            question: "ต้องแต่งตัวยังไงไปงาน First Date ?",
            answer: "ทุกคนสามารถแต่งตัวตามที่ตัวเองมั่นใจได้เลย !",
        },
        {
            question: "ค่ายวิษณุฯ เป็นค่ายค้างคืนมั้ย ?",
            answer: "ค่ายวิษณุฯ ในปีนี้ เป็นรูปแบบเช้าเย็นกลับ ไม่ค้างคืน แต่เนื่องจากกิจกรรมของค่ายค่อนข้างเยอะ และเลิกช่วงค่ำ ๆ ทางค่ายมีจัดสถานที่สำหรับนอนและอาบน้ำ ภายในคณะให้ เพื่ออำนวยความสะดวกให้กับน้อง ๆ ที่มีความจำเป็นที่จะต้องพักที่คณะค้าบ",
        },
        {
            question: "สะดวกไปเข้าค่ายแค่บางวันหรือบางช่วงเวลาได้มั้ย ?",
            answer: "ได้แน่นอน ! ค่ายวิษณุฯของเราสามารถเข้าร่วมได้ตามความสะดวกและความสมัครใจเลย",
        },
        {
            question: "ค่ายวิษณุฯ มีอาหารให้มั้ย ?",
            answer: "ทางค่ายได้เตรียมอาหารสุดอร่อยไว้ให้น้องๆ ครบทุกมื้อ ตลอดทั้ง 4 วันเลย (ยกเว้นมื้อเช้าวันแรก และ มื้อเย็นวันสุดท้ายน้าา)",
        },
        {
            question: "ยังไม่มีเพื่อนเลย ถ้าไปแล้วจะรู้สึกเคว้งหรือเหงามั้ย ?",
            answer: "ไม่ต้องห่วงครับ ในค่ายวิษณุฯ จะมีกิจกรรมมากมายให้น้อง ๆ ชาว Intania 108 ได้มารู้จักเพื่อน ๆ แล้วพี่ ๆ สตาฟทุกคนเองก็พร้อมต้อนรับสุด ๆ ทำให้ทุกคนจะได้รู้จักเพื่อนใหม่เยอะมาก ๆ ดังนั้นมาได้แน่นอนนน",
        },
    ];

    return (
        <div className="mx-14 flex w-[80vw] max-w-[1000px] max-w-[800px] flex-col items-center justify-center space-y-[14px] sm:my-12 md:my-14 lg:my-16">
            <p className="mb-8 text-xl font-semibold sm:text-2xl lg:text-3xl">
                คำถามที่พบบ่อย
            </p>
            <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col space-y-[14px]"
            >
                {questionDemo.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="my-2 rounded-[14px] bg-[#ECD8C1] px-4 font-medium"
                    >
                        <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-medium text-left sm:text-base lg:text-lg">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
