"use client";
import { useEffect, useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { DisableContext } from "@/lib/contexts/disable";

export default function Base() {
    const router = useRouter();
    const pathName = usePathname();
    const [error, setError] = useState<string>("");
    const isDisabled = useContext(DisableContext);

    const validPaths = useMemo(() => {
        return isDisabled ? [
            "/announcements/firstdate",
            "/app/home",
            "/app/club",
            "/app/stampbook",
            "/intania_news",
            "/login",
        ] : [
            "/announcements/vishnu",
            "/app/home",
            "/app/club",
            "/app/stampbook",
            "app/leaderboard",
            "/app/game",
            "/intania_news",
            "/login",
        ];
    }, [isDisabled]);

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
