"use client";

import LiffProvider from "@/lib/contexts/liff";
import UserDataProvider from "@/lib/contexts/user";

type Props = {
    children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
    return (
        <LiffProvider>
            <UserDataProvider>
                {children}
            </UserDataProvider>
        </LiffProvider>
    );
}
