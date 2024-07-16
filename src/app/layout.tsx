import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { MenuBottomBar, MenuTopBar } from "@/components/MenuBar";
import AuthProvider from "./AuthProvider";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    title: "Create Next App",
    description: "Generated by create next app",
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
                    <main className="pb-[60px] pt-0 sm:pb-0 sm:pt-[60px]">
                        {children}
                    </main>
                    <MenuBottomBar />
                </body>
            </html>
        </AuthProvider>
    );
}
