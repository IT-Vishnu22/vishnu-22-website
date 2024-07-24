"use client";
import { useEffect, useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Base() {
    const router = useRouter();
    const pathName = usePathname();
    const [error, setError] = useState<string>("");

    const validPaths = useMemo(() => [
        "/announcement/firstdate",
        "/announcement/vishnu",
        "/intania_news",
        "/login",
        "/app/home",
        "/app/club",
        "/app/stampbook",
        "/app/game",
        "/app/game/popgear",
        "/app/game/wordle",
        "/app/leaderboard",
    ], []);

    useEffect(() => {
        const handleNavigation = async () => {
            const isValidPath = validPaths.some(path =>
                pathName.startsWith(path) ||
                (pathName.startsWith("/app/stampbook/")) ||
                (pathName.startsWith("/intania_news"))
            );

            if (!isValidPath) {
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
