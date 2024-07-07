import Image from "next/image";
import Link from "next/link";
import Config from "./config.json";
import Question from "./question.json";

type ConfigData = {
  key: number;
  imageRotate: number;
  dropShadow: string;
  width: number;
  height: number;
  posX: number;
  posY: number;
  line: {
    rotate: number;
    posX: number;
    posY: number;
  };
};

export type QuestionData = {
  NameTH: string;
  NameEN: string;
  Question: String;
  Answer: string;
  Fact: string | [string];
};

export default function StampbookPage() {
  return (
    <div className="flex flex-col items-center justify-evenly overflow-hidden">
      <h1 className="text-[32px] font-bold text-blue-1">Stamp Book</h1>
      <div className="relative h-[190px] w-[320px]">
        <Image
          src="/stampbookimages/engmap.png"
          alt="stampbook page"
          objectFit="cover"
          fill={true}
        />
      </div>
      <div className="flex w-auto flex-col pb-96 pt-16">
        <StampBookSection></StampBookSection>
      </div>
    </div>
  );
}

const StampBookSection = () => {
  return Question.QuestFirstDate.Locations.map((item, index) => {
    const questionDetails: QuestionData = item;
    const styleConfig: ConfigData = Config.imageSetting[index];

    return (
      <Link
        key={questionDetails.NameEN.replace(" ", "-")}
        href={`/app/stampbook/${questionDetails.NameEN.replaceAll(" ", "-")}`}
        style={{
          height: `${styleConfig.height}px`,
          width: `${styleConfig.width}px`,
          transform: `translate(${styleConfig.posX}%, ${styleConfig.posY}%)  rotate(${styleConfig.imageRotate}deg)`,
        }}
      >
        <Image
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: `drop-shadow(${styleConfig.dropShadow})`,
          }}
          loading="lazy"
          src={`/stampbookImages/${questionDetails.NameTH}.jpg`}
          alt={`${questionDetails.NameEN} location image`}
          fill={true}
        />
        <Image
          className="absolute inset-0 z-20 m-auto h-8 w-8"
          src="/stampbookImages/lock.svg"
          alt="lock meaning this image is lock"
          width={32}
          height={32}
        />
        <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
        {index < 7 && (
          <div
            style={{
              transform: `translate(${styleConfig.line.posX}%, ${styleConfig.line.posY}%) rotate(${styleConfig.line.rotate}deg)`,
            }}
            className="pointer-events-none absolute bottom-0 -z-10 h-3 w-full bg-[#FF4B4B]"
          ></div>
        )}
      </Link>
    );
  });
};
