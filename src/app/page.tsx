"use client"
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Base() {
  const router = useRouter();
  const pathName = usePathname();
  const [error, setError] = useState<string>("");

  const validPaths = ["/app/home", "/app/club", "/app/stampbook", "/leaderboard", "/app/game", "/app/intania_news", "/login"];

  useEffect(() => {
    const handleNavigation = async () => {
      if (!validPaths.includes(pathName)) {
        try {
          await router.push("/app/home");
        } catch (err) {
          setError("Navigation failed. Please try again.");
          console.error("Navigation error:", err);
        }
      }
    };

    handleNavigation();
  }, [router, pathName, validPaths]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return null;
}