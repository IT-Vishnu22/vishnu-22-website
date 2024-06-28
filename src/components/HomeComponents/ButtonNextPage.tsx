export default function ButtonNext({ Topic, Topic2, TextBtn }: { Topic: String, Topic2?: String, TextBtn: String }) {
    return (
        <div className="z-10 flex flex-col w-fit text-center justify-center items-center gap-2">
            <p className="text-2xl font-bold">{Topic}<br/>{Topic2}</p>
            <button type="button" className="w-[140px] h-9 text-white bg-[#427383] rounded-[9px] border-none text-[16px]">{TextBtn}</button>
        </div>
    )
}