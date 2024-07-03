"use client";

import BlueBG from "./components/BlueBG";
import Title from "./components/Title";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./components/BlueBG"), { ssr: false });

export default function Leaderboard() {
  return (
    <section className="flex flex-col justify-evenly bg-[#F0E5D7] w-full items-center max-h-full min-h-screen">
      <div className="absolute w-full h-full top-0">
        {/* <BlueBG /> */}
        <NoSSR />
        {/* <Podiums /> */}
      </div>

      <Title />
    </section>
  );
}
