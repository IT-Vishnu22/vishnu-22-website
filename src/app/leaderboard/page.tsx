"use client";

import ScoreDisplay from "./components/ScoreDisplay";
import Title from "./components/Title";

import dynamic from "next/dynamic";

const PodiumsDisplay = dynamic(() => import("./components/PodiumsDisplay"), {
  ssr: false,
});

export default function Leaderboard() {
  return (
    <section className="flex flex-col justify-evenly bg-[#F0E5D7] w-full items-center max-h-full min-h-screen">
      <div className="w-full h-auto top-0">
        <PodiumsDisplay />
      </div>

      <Title />
      <ScoreDisplay />
    </section>
  );
}
