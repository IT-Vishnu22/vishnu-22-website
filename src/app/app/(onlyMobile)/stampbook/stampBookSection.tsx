import {  Update } from "@/lib/stampbook/progress";
import { ReadDataSP, GetDetailsArray } from "@/lib/stampbook/readData";
import Config from "./config.json";
import Link from "next/link";
import Image from "next/image";


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

export const StampBookSection = async({userId}:{userId:string|undefined}) => {

  Update(userId)
  const details = await GetDetailsArray()
  const data = await ReadDataSP(userId)

  return details?.map((snap, index) => {
    const styleConfig: ConfigData = Config.imageSetting[index];
    const docId_SP:string = snap.id //SP => Stamp-progress db
    const docId_SQ:string = snap.id.replaceAll("-", "_") //SQ => StampQuest db

    return (
      <Link
        key={snap.data().NameEN.replace(" ", "-")}
        href={`/app/stampbook/${docId_SP}`}
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
          src={`/stampbookImages/${snap.data().NameTH.replaceAll(" ","")}.jpg`}
          alt={`${snap.data().NameEN} location image`}
          fill={true}
          
        />
         {/* lock pic */}
         {!(data?.[docId_SQ]) && 
          <Image
          className="absolute inset-0 z-20 m-auto h-8 w-8"
          src="/stampbookImages/lock.svg"
          alt="lock meaning this image is lock"
          width={32}
          height={32}
        />
        }
        {/* fade pic */}
        {!(data?.[docId_SQ]) && <div className="absolute inset-0 z-10 bg-black opacity-70"></div>}
        
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
