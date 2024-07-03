export default function Podiums() {
  return (
    <div className="absolute text-blue-1 font-athiti w-full items-center justify-center space-x-3 flex flex-row bottom-0">
      <div>
        <Podium color="1" name="สายตลอด" points={40000} />
      </div>
      <div>
        <Podium color="0" name="สายตลอด" points={40000} />
      </div>
      <div>
        <Podium color="1" name="สายตลอด" points={40000} />
      </div>
    </div>
  );
}

const colorMap: { [key: string]: { [key: string]: string } } = {
  "0": {
    bg: "#FEEBED",
    star: "#2A334E",
    textStar: "#FFF",
  },
  "1": {
    bg: "#FFF",
    star: "#FEEBED",
    textStar: "#2A334E",
  },
};

const Podium = (props: { color: string; name: string; points: number }) => {
  return (
    <div
      className="w-[100px] h-[307px] text-xl rounded-lg justify-start flex flex-col items-center"
      style={{ backgroundColor: colorMap[props.color].bg }}
    >
      <div className="w-full h-auto flex items-center justify-center">
        <Star color={colorMap[props.color].star} />
        <p
          className="absolute  text-4xl font-bold font-roboto-condensed mt-2 -ml-3"
          style={{ color: colorMap[props.color].textStar }}
        >
          1
        </p>
        <p
          className="absolute text-lg font-bold font-roboto-condensed -mt-2 ml-4"
          style={{ color: colorMap[props.color].textStar }}
        >
          st
        </p>
      </div>

      <p>{props.name}</p>
      <p className="text font-roboto-condensed">{props.points} pt</p>
    </div>
  );
};

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
