"use client";

import { createContext } from "react";
import { useUserData } from "@/lib/hooks";

export const UserContext = createContext<ReturnType<typeof useUserData>>({
    firebaseUser: null,
});

export default function UserDataProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const userStore = useUserData();

    return (
        <UserContext.Provider value={userStore}>
            {children}
        </UserContext.Provider>
    );
}