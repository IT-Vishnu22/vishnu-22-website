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
  Fact: string[];
};

export default function StampbookPage() {
  return (
    <div className="mt-8 flex flex-col items-center justify-evenly overflow-hidden">
      <h1 className="text-[32px] font-bold text-blue-1">Stamp Book</h1>
      <MapImageSection />
      <ScoreSection />
      <CompletionBadgeSection />
      <div className="flex w-auto flex-col pb-96 pt-16">
        <StampBookSection></StampBookSection>
      </div>
    </div>
  );
}

const MapImageSection = () => {
  return (
    <div className="relative mt-10 h-[190px] w-[320px]">
      <Image
        src="/stampbookimages/engmap.png"
        alt="stampbook page"
        objectFit="cover"
        fill={true}
      />
    </div>
  );
};

const TempImageDay = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="40" fill="#404040" />
    </svg>
  );
};

const ScoreSection = () => {
  return (
    <div className="mt-8 flex items-center justify-between gap-3 text-2xl font-bold text-blue-1">
      <Image
        src="/stampbookImages/rewards.svg"
        alt="reward Image"
        width={25}
        height={25}
      />
      <p> 0/8</p>
    </div>
  );
};

const CompletionBadgeSection = () => {
  return (
    <div className="relative mt-12 flex justify-between gap-10">
      {[1, 2, 3].map((item) => (
        <div className="relative">
          <TempImageDay />
          <Image
            className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
            src="/stampbookImages/lock.svg"
            alt="badge is locked"
            width={30}
            height={30}
          />
        </div>
      ))}
      <div className="pointer-events-none absolute top-1/2 -z-10 h-[10px] w-full -translate-y-1/2 bg-[#404040]"></div>
    </div>
  );
};

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
