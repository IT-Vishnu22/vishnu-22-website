"use client";

import Navbar from "@/components/Navbar";
import { UserContext } from "@/lib/context";
import { useUserData } from "@/lib/hooks";

export default function Applayout({ children }: { children: React.ReactNode }) {
  const userData = useUserData();
  return (
    <section>
      <UserContext.Provider value={userData}>
        {children} <Navbar />
      </UserContext.Provider>
    </section>
  );
}
