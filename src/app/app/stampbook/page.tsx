import Image from "next/image";
import LockImage from "./images/lock.svg";
import Link from "next/link";

export default function StampbookPage() {
  return (
    <div className="flex flex-col items-center justify-evenly">
      <h1 className="text-[32px] font-bold text-blue-1">Stamp Book</h1>
      <div className="h-[190px] w-[320px] bg-gray-300">
        <img
          className="relative h-auto w-auto"
          src="https://placehold.co/320x190"
          alt="stampbook page"
        />
      </div>
      <div className="relative w-auto pb-80">
        <Link
          href={`/app/stampbook/${"first"}`}
          className="w-auto drop-shadow-[-14px_20px_0px_#D98487] filter"
        >
          <img
            className="relative rotate-[5.825deg]"
            src="https://placehold.co/200x100"
            alt="First image of stampbook page"
          />
          {/* <Image
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            src={LockImage}
            alt="This Image Locked"
          /> */}
        </Link>
        <div className="w-auto drop-shadow-[-20px_25px_0px_#D98487] filter">
          <img
            className="-rotate-[8.317deg]"
            src="https://placehold.co/200x100"
            alt="Second image of stampbook page"
          />
          {/* <Image
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            src={LockImage}
            alt="This Image Locked"
          /> */}
        </div>
        <div className="w-auto drop-shadow-[20px_29px_0px_#D98487] filter">
          <img
            className="rotate-[16.406deg]"
            src="https://placehold.co/200x100"
            alt="Thrid image of stampbook page"
          />
        </div>
        <div className="w-auto drop-shadow-[15px_20px_0px_#D98487] filter">
          <img
            className="-rotate-[2.36deg]"
            src="https://placehold.co/200x100"
            alt="Fourth image of stampbook page"
          />
        </div>
        <div className="w-auto drop-shadow-[-20px_29px_0px_#D98487] filter">
          <img
            className="-rotate-[14.762deg]"
            src="https://placehold.co/200x100"
            alt="Fifth image of stampbook page"
          />
        </div>
        <div className="w-auto drop-shadow-[15px_29px_0px_#D98487] filter">
          <img
            className="rotate-[5.825deg]"
            src="https://placehold.co/200x100"
            alt="Sixth image of stampbook page"
          />
        </div>
        <div className="w-auto drop-shadow-[-10px_29px_0px_#D98487] filter">
          <img
            className="-rotate-[8.317deg]"
            src="https://placehold.co/200x100"
            alt="Seventh image of stampbook page"
          />
        </div>
      </div>
    </div>
  );
}
