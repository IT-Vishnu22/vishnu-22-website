import Link from "next/link";
import BackIcon from "./BackIcon";

export default function Title() {
  return (
    <>
      <div className="w-full mr-[10px] pt-[35px] absolute items-center top-0 flex flex-row justify-start px-[10px] sm:px-[30px]">
        <Link href="/">
          <BackIcon />
        </Link>

        <p className="text-lg sm:text-3xl relative text-white self-center flex-1 text-center font-semibold">
          LeaderBoard
        </p>
      </div>
    </>
  );
}