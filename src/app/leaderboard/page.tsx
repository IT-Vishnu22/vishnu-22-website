"use client";

import LoadingPodium from "./components/loadingPodium";
import ScoreDisplay from "./components/ScoreDisplay";
import Title from "./components/Title";

import dynamic from "next/dynamic";

const PodiumsDisplay = dynamic(() => import("./components/PodiumsDisplay"), {
  ssr: false,
});

export default function Leaderboard() {
  return (
    <section className="flex flex-col pb-5  bg-[#F0E5D7] w-full items-center max-h-full min-h-screen">
      {/* top-3 podium display */}
      <div className="w-full relative top-0 min-h-[500px]">
        <LoadingPodium />
        <PodiumsDisplay />
      </div>

      {/* back icon & title */}
      <Title />

      {/* other sai score */}
      <ScoreDisplay />
    </section>
  );
}
