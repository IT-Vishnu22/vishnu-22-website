export default function ButtonNext({ Topic, Topic2, TextBtn}: { Topic: String, Topic2?: String, TextBtn: String}) {
    return (
        <div className=" z-10 flex flex-col text-center justify-center items-center gap-2">
            <p className="text-2xl font-bold">{Topic}<br />{Topic2}</p>
            <button className={`w-[140px] h-9 flex justify-center items-center text-white bg-[#427383] border-none rounded-[9px] text-base font-medium shadow shadow-lg`}>{TextBtn}</button>
        </div>
    )
}