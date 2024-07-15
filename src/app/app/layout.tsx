"use client";

import Navbar from "@/components/Navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            {/* <Navbar /> */}
        </>
    );
}
