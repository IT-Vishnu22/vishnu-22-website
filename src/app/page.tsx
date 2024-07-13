import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello :P</h1>
      <Link href="/leaderboard">
        <button className="rounded-md bg-blue-2 px-5 py-3 text-white hover:bg-blue-1">
          to leaderboard
        </button>
      </Link>
    </div>
  );
}
