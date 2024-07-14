"use client"
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";


export default function Base() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== "/app/home" &&
      pathName !== "/app/club" &&
      pathName !== "/app/stampbook" &&
      pathName !== "/app/leaderboard" &&
      pathName !== "/app/game" &&
      pathName !== "/app/news" &&
      pathName !== "/login") {
      router.push("/app/home");
    }
  }, [router, pathName]);

  return null;
}
