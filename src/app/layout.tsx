import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { MenuBottomBar, MenuTopBar } from "@/components/MenuBar";
import AuthProvider from "./AuthProvider";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vishnu 22nd",
    description: "Vishnu 22nd Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <html lang="en">
                <body className={robotoCondensed.className}>
                    <MenuTopBar />
                    <main className="w-[100vw] pb-[65px] pt-0 sm:pb-0 sm:pt-[65px]">
                        {children}
                    </main>
                    <MenuBottomBar />
                </body>
            </html>
        </AuthProvider>
    );
}
