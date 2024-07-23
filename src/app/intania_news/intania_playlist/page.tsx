import vectorImage from "../images/vector.svg";
import backgroundImage from "../images/background.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function IntaniaPlaylist() {
  return (
    <div className="relative h-full w-full bg-[linear-gradient(to_top,rgba(163,64,64,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/blank.svg')] px-5 py-5">
      <div className="absolute inset-x-0 bottom-0 h-[130px] w-full bg-opacity-50 bg-[url('/intaniastorypics/dot_graphic.svg')] bg-contain bg-repeat-x"></div>
      <div className="relative mt-5 flex items-center justify-center">
        <Link href="/intania_news">
          <Image
            className="absolute left-6 top-1/2 -translate-y-1/2 transform"
            src={vectorImage}
            alt="vector graphic"
          />
        </Link>
        <h1 className="text-center font-roboto-condensed text-[30px] font-bold text-blue-1">
          Intania Playlist
        </h1>
      </div>

      <div className="mt-6 flex items-center justify-center space-x-4">
        <div className="relative h-52 w-52 overflow-hidden bg-gray-100 shadow-lg">
          <img
            src="/intaniastorypics/IMG_1175.svg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full scale-110 transform object-cover object-center"
          />
        </div>
      </div>

      <hr className="mb-3 mt-10 border-t-2 border-gray-600" />

      <div className="flex items-center space-x-4">
        <div className="w-10">
          <h1 className="text-center text-[20px] font-bold text-blue-1">1</h1>
        </div>
        <h1 className="font-athiti text-center text-[16px] font-bold text-blue-1">
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
          <h1 className="text-center text-[20px] font-bold text-blue-1">2</h1>
        </div>
        <h1 className="font-athiti text-center text-[16px] font-bold text-blue-1">
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
          <h1 className="text-center text-[20px] font-bold text-blue-1">3</h1>
        </div>
        <h1 className="font-athiti text-center text-[16px] font-bold text-blue-1">
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
          <h1 className="text-center text-[20px] font-bold text-blue-1">4</h1>
        </div>
        <h1 className="font-athiti text-center text-[16px] font-bold text-blue-1">
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
          <h1 className="text-center text-[20px] font-bold text-blue-1">5</h1>
        </div>
        <h1 className="font-athiti text-center text-[16px] font-bold text-blue-1">
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
