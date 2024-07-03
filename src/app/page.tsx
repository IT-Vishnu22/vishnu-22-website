import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello :P</h1>
      <Link href="/leaderboard">
        <button className="bg-blue-2 py-3 px-5 rounded-md hover:bg-blue-1 text-white">
          to leaderboard
        </button>
      </Link>
    </div>
  );
}
