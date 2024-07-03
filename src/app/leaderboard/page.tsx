"use client";

import BlueBG from "./components/BlueBG";
import Podiums from "./components/Podiums";
import Title from "./components/Title";

export default function Leaderboard() {
  return (
    <section className="flex flex-col justify-evenly bg-[#F0E5D7] w-full items-center max-h-full min-h-screen">
      <div className="absolute w-full h-full top-0">
        <BlueBG />
        <Podiums />
      </div>

      <Title />
    </section>
  );
}
