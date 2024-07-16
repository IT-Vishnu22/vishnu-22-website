"use client";
import { Liff } from "@line/liff";
import { createContext, useContext, useEffect, useState } from "react";

type LineProfile = Awaited<ReturnType<Liff["getProfile"]>> | null;

interface LiffContextProps {
    liff: Liff | null;
    profile: LineProfile | null;
}

export const LiffContext = createContext<LiffContextProps>({
    liff: null,
    profile: null,
});

export default function LiffProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [liffObject, setLiffObject] = useState<Liff | null>(null);
    const [liffError, setLiffError] = useState<string | null>(null);
    const [profile, setProfile] = useState<LineProfile | null>(null);

    useEffect(() => {
        import("@line/liff")
            .then((liff) => liff.default)
            .then((liff) => {
                console.log("LIFF init...");
                liff.init({
                    liffId: process.env.NEXT_PUBLIC_LIFF_ID!,
                    withLoginOnExternalBrowser: true,
                })
                    .then(() => {
                        console.log("LIFF init succeeded.");
                        setLiffObject(liff);
                        if (!liff.isLoggedIn()) {
                            liff.login();
                        } else {
                            liff.getProfile().then((profile) => {
                                setProfile(profile);
                            });
                        }
                    })
                    .catch((error: Error) => {
                        console.log("LIFF init failed.", error.toString());
                        setLiffError(error.toString());
                    });
            });
    }, []);

    // if (liffError) {
    //     return (
    //         <div className="grid h-screen w-full place-content-center bg-white text-center">
    //             <p className="text-4xl font-bold text-neutral-900">
    //                 เอ้อะ?! อย่าบอกนะ..
    //             </p>
    //             <p className="text-xs text-neutral-500">
    //                 ถ้าเจอหน้านี้ไปหาและบอกไอคนที่ชื่อว่าตะวันว่าเว็บล่มด้วยนะ
    //             </p>
    //             <p className="text-xs text-neutral-500">{liffError}</p>
    //         </div>
    //     );
    // }

    return (
        <LiffContext.Provider
            value={{
                liff: liffObject,
                profile,
            }}
        >
            {children}
        </LiffContext.Provider>
    );
}

export const useLiff = () => {
    const context = useContext(LiffContext);
    if (context === undefined) {
        throw new Error("useLiff must be used within a LiffProvider");
    }
    return context;
};
