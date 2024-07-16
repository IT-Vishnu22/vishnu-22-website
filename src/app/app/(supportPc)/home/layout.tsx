import { MenuBottomBar, MenuTopBar } from "@/components/MenuBar";

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pb-[60px] pt-0 sm:pb-0 sm:pt-[60px]">
            <MenuTopBar />
            {children}
            <MenuBottomBar />
        </div>
    );
}
