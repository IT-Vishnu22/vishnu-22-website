import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionHome() {

    const questionDemo = [
        { question: "Question 1", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
        { question: "Question 2", answer: "Yes. It comes with default styles that matches the other components' aesthetic." },
        { question: "Question 3", answer: "Yes. It's animated by default, but you can disable it if you prefer." }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-[14px] px-[20px]">
            <p className="text-lg font-bold">คำถามที่พบบ่อย</p>
            <Accordion type="single" collapsible className="w-full flex flex-col space-y-[14px]">
                {
                    questionDemo.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="text-md bg-[#ECD8C1] rounded-[14px] px-4">
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}