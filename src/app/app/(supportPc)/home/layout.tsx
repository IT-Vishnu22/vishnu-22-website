import { MenuBottomBar, MenuTopBar } from "@/components/MenuBar";

export default function Applayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" pb-[85px] pt-0 sm:pb-0 sm:pt-[85px]">
            <MenuTopBar />
            {children}
            <MenuBottomBar />
        </div>
    );
}
