// Podiums item, edit data in name or point field


export default function Podiums(props : {type:string}) {
  let colorMap = (props.type === "game" ? gameColorMap : waterColorMap);

  return (
    <div className="absolute text-blue-1 font-athiti w-full h-full items-center justify-center space-x-3 flex flex-row -bottom-[70px]">
      <div className="pt-[100px]">
        <Podium color="1" name="สายเสมอ" points={25000} place={["2", "nd"]} colorMap={colorMap} />
      </div>
      <div className="pt-0">
        <Podium color="0" name="สายตลอด" points={40000} place={["1", "st"]} colorMap={colorMap} />
      </div>
      <div className="pt-[180px]">
        <Podium color="1" name="สายอีก" points={12300} place={["3", "rd"]} colorMap={colorMap} />
      </div>
    </div>
  );
}

// config color
const gameColorMap: { [key: string]: { [key: string]: string } } = {
  "0": {
    bg: "#FEEBED",
    iconBG: "#2A334E",
    textInIcon: "#FFF",
  },
  "1": {
    bg: "#FFF",
    iconBG: "#FECCCC",
    textInIcon: "#2A334E",
  },
};
const waterColorMap: { [key: string]: { [key: string]: string } } = {
  "0": {
    bg: "#F0E5D7",
    iconBG: "#3A5C3E",
    textInIcon: "#FFF",
  },
  "1": {
    bg: "#FFF",
    iconBG: "#B0C6B5",
    textInIcon: "#3A5C3E",
  },
};



// Podium item

interface PodiumProps{
  color: string;
  name: string;
  points: number;
  place: string[];
  colorMap : { [key: string]: { [key: string]: string; }; }
}

const Podium = ({ color, name, points, place, colorMap }: PodiumProps) => {
  return (
    <div
      className="w-[100px] h-[350px] text-xl rounded-lg justify-iconBGt flex flex-col items-center"
      style={{ backgroundColor: colorMap[color].bg }}
    >
      <div className="w-full h-auto flex items-center justify-center">
        <Star color={colorMap[color].iconBG} />
        <p
          className="absolute  text-4xl font-bold font-roboto-condensed mt-3 -ml-4"
          style={{ color: colorMap[color].textInIcon }}
        >
          {place[0]}
        </p>
        <p
          className="absolute text-lg font-bold font-roboto-condensed -mt-1 ml-5"
          style={{ color: colorMap[color].textInIcon }}
        >
          {place[1]}
        </p>
      </div>

      <p>{name}</p>
      <p className="6font-roboto-condensed">{points} pts</p>
    </div>
  );
};

// star svg
const Star = ({color}: { color: string }) => {
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
        fill={color}
      />
    </svg>
  );
};


// water svg
const Water = ({color}: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="73"
      viewBox="0 0 78 73"
      fill="none"
      className="mt-[20px]  mb-[15px]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="71" viewBox="0 0 56 71" fill="none">
        <path d="M54 42.5C54 28.1415 28 3.5 28 3.5C28 3.5 2 28.1415 2 42.5C2 49.3956 4.73928 56.0088 9.61522 60.8848C14.4912 65.7607 21.1044 68.5 28 68.5C34.8956 68.5 41.5088 65.7607 46.3848 60.8848C51.2607 56.0088 54 49.3956 54 42.5Z"
        fill={color}
        stroke={color}
        stroke-width="4"/>
      </svg>
    </svg>
  );
};
