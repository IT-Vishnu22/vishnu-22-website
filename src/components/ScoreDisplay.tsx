// a score of non top-3, edit data in mockData
interface DataInterface {
  name: string;
  score: number;
}

export default function ScoreDisplay({ data }:{ data: DataInterface[] }) {
  return (
    <div className="w-[90%] relative flex flex-col font-athiti items-center font-[450] text-base sm:text-xl text-blue-1 mx-auto">
      <table className="w-[90%] max-w-[350px]">
        <tbody>
          {data.map((item, index: number) => (
            <tr key={index} className="w-full">
              <td className="w-[20%]">
                <div className="w-full relative flex flex-row space-x-1/2">
                  <p>{index + 1}</p>
                  <p className="relative top-0 text-sm ">{getOrdinalSuffix(index + 1)}</p>
                </div>
              </td>
              <td className="w-[50%]">{item.name}</td>
              <td className="w-[50%]">{item.score} pts</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

function getOrdinalSuffix(number: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = number % 100;
  const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return suffix;
}
}

