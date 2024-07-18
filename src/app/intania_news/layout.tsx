export default function Newslayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="md:mx-auto md:max-w-[390px] w-full h-full relative">
                {children}
            </div>
        </>
    );
}
