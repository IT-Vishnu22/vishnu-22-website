"use client";

import Navbar from "@/components/Navbar";
import { UserContext } from "@/lib/context";
import { useUserData } from "@/lib/hooks";

export default function Applayout({ children }: { children: React.ReactNode }) {
  const userData = useUserData();
  //const userData = {user: null, "username": "Passawatna A.", group:"L"};
  return (
    <section>
      <UserContext.Provider value={userData}>
        {children}
      </UserContext.Provider>
    </section>
  );
}
