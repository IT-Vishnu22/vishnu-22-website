"use client";

import LiffProvider, { useLiff } from "@/lib/contexts/liff";
import { UserContext } from "@/lib/contexts/user";
import { useUserData } from "@/lib/hooks";

type Props = {
    children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
    const userStore = useUserData();
    
    return (
        <LiffProvider>
            <UserContext.Provider value={userStore}>
                {children}
            </UserContext.Provider>
        </LiffProvider>
    );
}
