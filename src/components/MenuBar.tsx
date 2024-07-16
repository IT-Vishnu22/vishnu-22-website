"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Logo } from "@/assets/icons/LogoVishnu22";
import {
    ClubPageIcon,
    GamePageIcon,
    HomePageIcon,
    StampbookPageIcon,
    MenuIcon,
    HomeIcon,
    GlassIcon,
    PeopleIcon,
    GameIcon,
} from "@/assets/icons/MenuIcon";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useUserData } from "@/lib/hooks";

const MenuItem = ({ text, linkRef }: { text: string; linkRef: string }) => {
    return (
        <Link className="w-full" href={linkRef} legacyBehavior passHref>
            <div className="hover:scale-102 box-sizing:border-box w-full max-w-full cursor-pointer px-3 py-2 text-center text-lg font-medium text-primary transition duration-300 ease-in-out hover:transform hover:underline hover:underline-offset-4">
                {text}
            </div>
        </Link>
    );
};

export function MenuBottomBar() {
    const pathname: string = usePathname();
    return (
        <NavigationMenu className="fixed bottom-0 z-50 block flex h-[85px] w-full flex-row items-center justify-center border-t-[4px] border-black bg-white sm:hidden">
            {/* <div className="w-full group list-none flex flex-row items-center justify-evenly"> */}
            <NavigationMenuList>
                <NavigationMenuItem className="flex h-[81px] w-1/4 items-center">
                    <Link href="/app/home" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            <HomePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex h-[81px] w-1/4 items-center justify-center">
                    <Link href="/app/stampbook" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            <StampbookPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex h-[81px] w-1/4 items-center justify-center">
                    <Link href="/app/club" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            <ClubPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex h-[81px] w-1/4 items-center justify-center">
                    <Link href="/app/game" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            <GamePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* </div> */}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export function MenuTopBar() {
    // const token = true;
    // const username = "Vishnu22";
    const userData = useUserData();
    const username = userData.username?.split(" ")[0];
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    const IsUrl = (name: string) => {
        const pathname: string = usePathname();
        return pathname.includes(name);
    };

    return (
        <>
            <div className="fixed left-0 right-0 top-0 z-50 hidden h-[65px] w-full items-center justify-between bg-[#FEEBED] px-4 sm:flex">
                <div className="flex flex-row items-center justify-center gap-x-8">
                    <Logo scale={0.7} />
                    <div className="hidden flex-row items-center justify-center gap-x-10 lg:flex">
                        <Link
                            className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            href="/app/home"
                        >
                            <HomeIcon />
                            <p
                                className={`text-xl font-bold ${IsUrl("home") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                            >
                                Home
                            </p>
                        </Link>
                        <Link
                            className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            href="/app/stampbook"
                        >
                            <GlassIcon />
                            <p
                                className={`text-xl font-bold ${IsUrl("stampbook") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                            >
                                Stamp
                            </p>
                        </Link>
                        <Link
                            className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            href="/app/club"
                        >
                            <PeopleIcon />
                            <p
                                className={`text-xl font-bold ${IsUrl("club") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                            >
                                Club
                            </p>
                        </Link>
                        <Link
                            className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            href="/app/game"
                        >
                            <GameIcon />
                            <p
                                className={`text-xl font-bold ${IsUrl("game") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                            >
                                Game
                            </p>
                        </Link>
                    </div>
                </div>
                {username ? (
                    <div className="hidden flex-row items-center justify-evenly gap-x-2 lg:flex">
                        <p className="px-1 py-2 text-lg font-medium text-primary">
                            Hello, {username}
                        </p>
                        <p className="text-lg font-medium text-primary">|</p>
                        <Link
                            href="/login"
                            className="cursor-pointer px-1 py-2 text-center text-lg font-medium text-primary"
                        >
                            Logout
                        </Link>
                    </div>
                ) : (
                    <div className="hidden lg:block">
                        <MenuItem text="Login" linkRef="/login"></MenuItem>
                    </div>
                )}
                <div className="lg:hidden">
                    <div className="flex flex-row items-center justify-center gap-x-4">
                        {username ? (
                            <p className="text-lg font-medium text-primary">
                                <span>Hello, {username}</span>
                            </p>
                        ) : null}
                        <div
                            className="cursor-pointer"
                            onClick={() => handleMenu()}
                        >
                            <MenuIcon scale={0.3} />
                        </div>
                    </div>
                    {showMenu ? (
                        <ul className="absolute right-0 top-[65px] w-full list-none gap-y-5 border-t-2 bg-[#FEEBED]">
                            <Link
                                className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 py-3 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                href="/app/home"
                                onClick={handleMenu}
                            >
                                <HomeIcon />
                                <p
                                    className={`text-xl font-bold ${IsUrl("home") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                >
                                    Home
                                </p>
                            </Link>
                            <Link
                                className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 py-3 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                href="/app/stampbook"
                                onClick={handleMenu}
                            >
                                <GlassIcon />
                                <p
                                    className={`text-xl font-bold ${IsUrl("stampbook") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                >
                                    Stamp
                                </p>
                            </Link>
                            <Link
                                className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 py-3 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                href="/app/club"
                                onClick={handleMenu}
                            >
                                <PeopleIcon />
                                <p
                                    className={`text-xl font-bold ${IsUrl("club") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                >
                                    Club
                                </p>
                            </Link>
                            <Link
                                className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 py-3 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                href="/app/game"
                                onClick={handleMenu}
                            >
                                <GameIcon />
                                <p
                                    className={`text-xl font-bold ${IsUrl("game") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                >
                                    Game
                                </p>
                            </Link>
                            <li className="flex flex-row items-center justify-center py-3">
                                {username ? (
                                    <Link
                                        className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        href="/login"
                                        onClick={handleMenu}
                                    >
                                        <p
                                            className={`text-xl font-bold ${IsUrl("logout") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                        >
                                            Logout
                                        </p>
                                    </Link>
                                ) : (
                                    <Link
                                        className="group flex inline-flex h-full w-[100%] cursor-pointer flex-row items-center justify-center space-x-1 transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                        href="/login"
                                        onClick={handleMenu}
                                    >
                                        <p
                                            className={`text-xl font-bold ${IsUrl("login") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}
                                        >
                                            Login
                                        </p>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
            <div className="fixed left-0 right-0 top-0 z-50 flex h-[65px] w-full items-center justify-end px-8 sm:hidden">
                {username ? (
                    <Link
                        href={"/"}
                        className="z-50 rounded-3xl bg-[#ECD8C1] px-5 py-1"
                    >
                        <p className="text-lg font-medium text-primary">
                            Hello, {username}
                        </p>
                    </Link>
                ) : (
                    <Link
                        href={"/login"}
                        className="z-50 rounded-3xl bg-[#ECD8C1] px-5 py-1"
                    >
                        <p className="text-lg font-medium text-primary">
                            Login
                        </p>
                    </Link>
                )}
            </div>
        </>
    );
}
