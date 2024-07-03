"use client";

import Title from "./components/Title";

import dynamic from "next/dynamic";

const PodiumsDisplay = dynamic(() => import("./components/PodiumsDisplay"), {
  ssr: false,
});

export default function Leaderboard() {
  return (
    <section className="flex flex-col justify-evenly bg-[#F0E5D7] w-full items-center max-h-full min-h-screen">
      <div className="absolute w-full h-full top-0">
        {/* <BlueBG /> */}
        <PodiumsDisplay />
        {/* <Podiums /> */}
      </div>

      <Title />
    </section>
  );
}
