import Navbar from "@/components/Navbar";

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="relative min-h-full w-full md:mx-auto md:max-w-[390px]">
                {children}
            </main>
        </>
    );
}
