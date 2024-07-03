interface mockDataInterface {
  name: string;
  score: number;
}

export default function ScoreDisplay() {
  return (
    <div className="w-[90%] relative flex flex-col font-athiti items-center font-[450] text-xl text-blue-1 ">
      <table className="w-[90%]">
        <tbody>
          {mockData.map((item, index: number) => (
            <tr key={index} className="w-full">
              <td className="w-[20%]">
                <div className="w-full relative flex flex-row space-x-1/2">
                  <p>{index + 3}</p>
                  <p className="relative top-0 text-sm ">th</p>
                </div>
              </td>
              <td className="w-[60%]">{item.name}</td>
              <td className="w-[40%]">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mockData: mockDataInterface[] = [
  {
    name: "สายตลอด",
    score: 4000,
  },
  {
    name: "สายอีก",
    score: 3500,
  },
  {
    name: "สายอีกแล้ว",
    score: 2500,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
  {
    name: "สายจุงเบย",
    score: 1900,
  },
];
