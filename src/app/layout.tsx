import type { Metadata } from "next";
import { Roboto_Condensed, Athiti } from "next/font/google";
import "./globals.css";
import { MenuBottomBar, MenuTopBar } from "@/components/MenuBar";
import AuthProvider from "./AuthProvider";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });
const athiti = Athiti({
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["thai"],
});

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
                <body className={`${robotoCondensed.className} ${athiti.className}`}>
                    <main className="w-full h-screen overflow-x-hidden overflow-y-auto">
                        {children}
                    </main>
                </body>
            </html>
        </AuthProvider>
    );
}
