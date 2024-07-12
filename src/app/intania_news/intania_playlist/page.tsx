import vectorImage from "../images/vector.svg";
import backgroundImage from "../images/background.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function IntaniaPlaylist() {
  return (
    <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
      <div className="mt-5e mr-[10%] flex place-items-center justify-center space-x-[13%]">
        <Link href="/intania_news">
          <Image className="" src={vectorImage} alt="vector graphic" />
        </Link>
        <h1 className="text-[26px] font-bold text-blue-1">Intania Playlist</h1>
      </div>

      <div className="mt-5 flex items-center justify-center space-x-4">
        <div className="relative h-52 w-52 overflow-hidden bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/Vishnu3rd.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full scale-110 transform object-cover object-center"
          />
        </div>
      </div>

      <hr className="mb-3 mt-10 border-t-2 border-gray-600" />

      <div className="flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[22px] font-bold text-blue-1">1</h1>
        </div>
        <h1 className="text-center text-[18px] font-bold text-blue-1">
          ปราสาทแดง
        </h1>
        <Link href="/intania_news/intania_playlist/song01">
          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px",
              color: "red",
            }}
          >
            <FaPlay style={{ fontSize: "11px" }} />
          </button>
        </Link>
      </div>

      <hr className="mb-3 mt-3 border-t-2 border-gray-600" />

      <div className="flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[22px] font-bold text-blue-1">2</h1>
        </div>
        <h1 className="text-center text-[18px] font-bold text-blue-1">
          แรงเลือดหมู
        </h1>
        <Link href="/intania_news/intania_playlist/song02">
          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px",
              color: "red",
            }}
          >
            <FaPlay style={{ fontSize: "11px" }} />
          </button>
        </Link>
      </div>

      <hr className="mb-3 mt-3 border-t-2 border-gray-600" />

      <div className="flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[22px] font-bold text-blue-1">3</h1>
        </div>
        <h1 className="text-center text-[18px] font-bold text-blue-1">
          มหาจุฬาลงกรณ์
        </h1>
        <Link href="/intania_news/intania_playlist/song03">
          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px",
              color: "red",
            }}
          >
            <FaPlay style={{ fontSize: "11px" }} />
          </button>
        </Link>
      </div>

      <hr className="mb-3 mt-3 border-t-2 border-gray-600" />

      <div className="flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[22px] font-bold text-blue-1">4</h1>
        </div>
        <h1 className="text-center text-[18px] font-bold text-blue-1">
          บูมวิศวฯ (บูมบากา)
        </h1>
        <Link href="/intania_news/intania_playlist/song04">
          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px",
              color: "red",
            }}
          >
            <FaPlay style={{ fontSize: "11px" }} />
          </button>
        </Link>
      </div>

      <hr className="mb-3 mt-3 border-t-2 border-gray-600" />

      <div className="mb-48 flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[22px] font-bold text-blue-1">5</h1>
        </div>
        <h1 className="text-center text-[18px] font-bold text-blue-1">
          วิศวกรรมเริงรื่น
        </h1>
        <Link href="/intania_news/intania_playlist/song05">
          <button
            className="inline-flex items-center justify-center rounded-full bg-white p-2"
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50px",
              color: "red",
            }}
          >
            <FaPlay style={{ fontSize: "11px" }} />
          </button>
        </Link>
      </div>
    </div>
  );
}
