// Podiums item, edit data in name or point field

export default function Podiums() {
  return (
    <div className="absolute text-blue-1 font-athiti w-full h-full items-center justify-center space-x-3 flex flex-row -bottom-[70px]">
      <div className="pt-[100px]">
        <Podium color="1" name="สายเสมอ" points={25000} place={["2", "nd"]} />
      </div>
      <div className="pt-0">
        <Podium color="0" name="สายตลอด" points={40000} place={["1", "st"]} />
      </div>
      <div className="pt-[180px]">
        <Podium color="1" name="สายอีก" points={12300} place={["3", "rd"]} />
      </div>
    </div>
  );
}

// config color
const colorMap: { [key: string]: { [key: string]: string } } = {
  "0": {
    bg: "#FEEBED",
    star: "#2A334E",
    textStar: "#FFF",
  },
  "1": {
    bg: "#FFF",
    star: "#FECCCC",
    textStar: "#2A334E",
  },
};

// Podium item
const Podium = (props: {
  color: string;
  name: string;
  points: number;
  place: string[];
}) => {
  return (
    <div
      className="w-[100px] h-[350px] text-xl rounded-lg justify-start flex flex-col items-center"
      style={{ backgroundColor: colorMap[props.color].bg }}
    >
      <div className="w-full h-auto flex items-center justify-center">
        <Star color={colorMap[props.color].star} />
        <p
          className="absolute  text-4xl font-bold font-roboto-condensed mt-3 -ml-4"
          style={{ color: colorMap[props.color].textStar }}
        >
          {props.place[0]}
        </p>
        <p
          className="absolute text-lg font-bold font-roboto-condensed -mt-1 ml-5"
          style={{ color: colorMap[props.color].textStar }}
        >
          {props.place[1]}
        </p>
      </div>

      <p>{props.name}</p>
      <p className="font-roboto-condensed font-semibold">{props.points} pt</p>
    </div>
  );
};

// star svg
const Star = (props: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="73"
      viewBox="0 0 78 73"
      fill="none"
      className="mt-[20px]  mb-[15px]"
    >
      <path
        d="M39 0L53.8122 19.6128L77.0423 27.6393L62.9666 47.7872L62.5114 72.3607L39 65.2L15.4886 72.3607L15.0334 47.7872L0.957741 27.6393L24.1878 19.6128L39 0Z"
        fill={props.color}
      />
    </svg>
  );
};
