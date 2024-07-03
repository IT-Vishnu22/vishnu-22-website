interface mockDataInterface {
  name: string;
  score: number;
}

export default function ScoreDisplay() {
  return (
    <div className="w-[90%]">
      <table className="table-auto flex flex-col items-center font-athiti font-[450] text-2xl text-blue-1 w-[90%]">
        <tbody>
          {mockData.map((item, index: number) => (
            <tr key={index} className="w-full">
              <td className="w-[20%]">
                <div className="w-[20px] relative">
                  <p>{index + 3}</p>
                  <p className="absolute top-0 text-sm left-3">th</p>
                </div>
              </td>
              <td className="w-[40%]">{item.name}</td>
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
