// a score of non top-3, edit data in mockData
interface DataInterface {
    name: string;
    score: number;
}

export default function ScoreDisplay({
    data,
    startAt = 1,
    suffix = "pts",
}: {
    data: DataInterface[];
    startAt?: number;
    suffix?: string;
}) {
    return (
        <div className="relative mx-auto flex w-[90%] flex-col items-center font-athiti text-base font-[450] text-blue-1 sm:text-xl overflow-y-auto">
            <table className="w-[90%] max-w-[350px]">
                <tbody>
                    {data.map((item, index: number) => (
                        <tr key={index} className="w-full">
                            <td className="w-[20%]">
                                <div className="space-x-1/2 relative flex w-full flex-row">
                                    <p>{index + startAt}</p>
                                    <p className="relative top-0 text-sm">
                                        {getOrdinalSuffix(index + startAt)}
                                    </p>
                                </div>
                            </td>
                            <td className="w-[50%]">{item.name}</td>
                            <td className="w-[50%]">
                                {item.score} {suffix}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function getOrdinalSuffix(number: number): string {
        const suffixes = ["th", "st", "nd", "rd"];
        const remainder = number % 100;
        const suffix =
            suffixes[(remainder - 20) % 10] ||
            suffixes[remainder] ||
            suffixes[0];
        return suffix;
    }
}
