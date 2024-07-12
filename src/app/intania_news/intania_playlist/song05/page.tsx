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
      <div className="mr-[23%] mt-5 flex place-items-center justify-center space-x-[20%]">
        <Link href="/intania_news/intania_playlist">
          <Image className="ml-[-10%]" src={vectorImage} alt="vector graphic" />
        </Link>
        <h1 className="ml-4 text-center text-[26px] font-bold text-blue-1">
          วิศวกรรมเริงรื่น
        </h1>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ประพันธ์คำร้องโดย </h2>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="text-[14px] text-blue-1">ทำนองโดย </h2>
      </div>

      <div className="mt-10 flex place-items-center justify-center space-x-[13%]">
        <p className="mx-6 mb-24 text-[16px] text-blue-1">
          พวกเราชาววิศวกรรม เริงรื่นชื่นฉ่ำหนักหนา
          <br />
          เรียนเล่นลือลั่นนานมา วิศวฯ นำหน้าโน่นเทียว
          <br />
          ทางไหนใครกล้าท้าทาย วิศวฯ ทั้งหลายจงเฉลียว
          <br />
          ใครถอยเท้าแม้ก้าวเดียว เหมือนตายแล้วเชียวจงจำ
          <br />
          <br />
          *เราล้วนรักรวมร่วมจิต ร่วมคิดชูชุบอุปถัมภ์
          <br />
          เชิดชื่อชาววิศวกรรม ให้นำอยู่หน้าถาวร
          <br />
          (*)
          <br />
          <br />
          ทางด้านการงานเรียนเล่น ให้เป็น กิจจานุสรณ์
          <br />
          แก่ชาวจุฬาฯ อาวรณ์ สีเลือดหมูจรกำจาย
          <br />
          ใครเหี้ยม หาญมาเท่าไร อย่าให้ หักเลือดเราหาย
          <br />
          อย่านึกนอบน้อมยอมกาย อย่าหมายถอยเท้าเล่าเอย
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
          <source src="/music/วิศวกรรมเริงรื่น.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}
