"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import vectorImage from "../../images/vector.svg";
import Image from "next/image";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Song01() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioLoaded = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const handleEnded = () => setIsPlaying(false);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleAudioLoaded);
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
          audioRef.current.removeEventListener(
            "loadedmetadata",
            handleAudioLoaded,
          );
          audioRef.current.removeEventListener("ended", handleEnded);
        }
      };
    }
  }, []);

  return (
    <div className="h-full w-full bg-[linear-gradient(to_top,rgba(196,125,118,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/background.svg')] px-5 py-5">
      <div className="mr-[23%] mt-5 flex place-items-center justify-center space-x-[13%]">
        <Link href="/intania_news/intania_playlist">
          <Image className="ml-[-10%]" src={vectorImage} alt="vector graphic" />
        </Link>
        <h1 className="text-center text-[26px] font-bold text-blue-1">
          มหาจุฬาลงกรณ์
        </h1>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ประพันธ์คำร้องโดย</h2>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ทำนองโดย </h2>
      </div>

      <div className="mt-10 flex place-items-center justify-center space-x-[13%]">
        <p className="mx-6 mb-60 text-[16px] text-blue-1">
          น้ำใจน้องพี่สีชมพู ทุกคนไม่รู้ลืมบูชา
          <br />
          พระคุณของแหล่งเรียนมา จุฬาลงกรณ์
          <br />
          ขอทูนขอเทิดพระนามไท พระคุณแนบไว้นิรันดร
          <br />
          ขอองค์พระเอื้ออาทร หลั่งพรคุ้มครอง
          <br />
          <br />
          *นิสิตพร้อมหน้า สัญญาประคอง
          <br />
          ความดีทุกอย่างต่างปอง ผยองพระเกียรติเกริกไกร
          <br />
          ขอตราพระเกี้ยวยั้งยืนยง นิสิตประสงค์เป็นธงชัย
          <br />
          ถาวรยศอยู่คู่ไทย เชิดชัยชโย
          <br />
          (*)
        </p>
      </div>

      <div className="mt-5 flex flex-col items-center">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          className="mt-10 h-1 w-64 cursor-pointer rounded-lg bg-gray-700 accent-gray-700"
        />
        <div className="mb-5 mt-3 flex items-center justify-center space-x-12">
          <button
            className="rounded-full bg-gray-700 px-3 py-3 font-bold text-white hover:bg-gray-900"
            onClick={() => {}}
            style={{
              color: "#f0b4ad",
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="inline-flex items-center rounded-full bg-gray-700 px-4 py-2 font-bold text-white"
            style={{
              height: "47px",
              borderRadius: "50px",
              color: "#f0b4ad",
            }}
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <FaPause style={{ fontSize: "14px" }} />
            ) : (
              <FaPlay style={{ fontSize: "14px" }} />
            )}
          </button>
          <button
            className="rounded-full bg-gray-700 px-3 py-3 font-bold text-white hover:bg-gray-900"
            onClick={() => {}}
            style={{
              color: "#f0b4ad",
            }}
          >
            <FaChevronRight />
          </button>
        </div>

        <audio ref={audioRef}>
          <source src="/music/มหาจุฬาลงกรณ์.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}
