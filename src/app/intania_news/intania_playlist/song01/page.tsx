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
    <div className="relative h-full w-full bg-[linear-gradient(to_top,rgba(163,64,64,0.5),rgba(240,225,219,0.5)),url('/intaniastorypics/blank.svg')] px-5 py-5">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[130px] w-full bg-[url('/intaniastorypics/dot_graphic.svg')] bg-contain bg-repeat-x"></div>
      <div className="relative mt-5 flex items-center justify-center">
        <Link href="/intania_news/intania_playlist">
          <Image
            className="absolute left-6 top-1/2 -translate-y-1/2 transform"
            src={vectorImage}
            alt="vector graphic"
          />
        </Link>
        <h1 className="font-athiti text-center text-[26px] font-bold text-blue-1">
          ปราสาทสีแดง
        </h1>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="font-athiti text-[14px] text-blue-1">
          ประพันธ์คำร้องโดย ธาตรี
        </h2>
      </div>
      <div className="flex place-items-center justify-center space-x-[13%]">
        <h2 className="font-athiti text-[14px] text-blue-1">
          ทำนองโดย ครูเอื้อ สุนทรสนาน
        </h2>
      </div>

      <div className="mt-10 flex place-items-center justify-center space-x-[13%]">
        <p className="font-athiti mx-6 mb-8 text-[16px] font-medium text-blue-1">
          ยังมีปราสาทสีแดง ดังศิลาแลง
          <br />
          งดงามเด่นแซงแหล่งเมืองชมพู
          <br />
          อัศวินอัศวินีชวนดู
          <br />
          จิตใจนั้นร่วมกันเชิดชูพระภูธเรศน์จุฬา
          <br />
          <br />
          วิษณุเทพเทวัญ ดังบิดรอัน
          <br />
          ทุกคนผูกพันมั่นในวิญญา
          <br />
          ต่างเคารพ ต่างซบใจบูชา
          <br />
          เทพองค์นี้ให้เราเกิดมา รักงานทางช่างกว้างไกล
          <br />
          <br />
          เป็นอาจารย์เป็นพ่อ
          <br />
          พวกเราจึงรวมร่วมก่อพ่อเดียวกันในใจ
          <br />
          คุณความดีปองใฝ่
          <br />
          เลือดหมูคือสีผูกใจ ไว้ศักดิ์ศรีคงมั่น
          <br />
          <br />
          ผองชาวปราสาทสีแดง โลหิตรินแรง
          <br />
          สายธารแห่งใจแบ่งไปเทียมทัน
          <br />
          อาบพี่น้องร่วมสีเมืองเดียวกัน
          <br />
          ด้วยตัวเขาจิตใจผูกพัน มิคลายรักมั่นจุฬา
        </p>
      </div>

      <div className="relative z-[10] mb-5 mt-8 flex flex-col items-center">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          className="mt-10 h-1 w-64 cursor-pointer rounded-lg bg-gray-700 accent-gray-700"
        />
        <div className="mt-3 flex items-center justify-center space-x-12">
          <Link href="/intania_news/intania_playlist/song05">
            <button
              className="rounded-full bg-gray-700 px-3 py-3 font-bold text-white hover:bg-gray-900"
              onClick={() => {}}
              style={{
                color: "#f0b4ad",
              }}
            >
              <FaChevronLeft />
            </button>
          </Link>
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
          <Link href="/intania_news/intania_playlist/song02">
            <button
              className="rounded-full bg-gray-700 px-3 py-3 font-bold text-white hover:bg-gray-900"
              onClick={() => {}}
              style={{
                color: "#f0b4ad",
              }}
            >
              <FaChevronRight />
            </button>
          </Link>
        </div>

        <audio ref={audioRef}>
          <source src="/music/เพลงปราสาทแดง.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}
