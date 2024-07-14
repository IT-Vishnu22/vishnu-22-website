'use client'
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation";

import { Logo } from "@/assets/icons/LogoVishnu22"
import { ClubPageIcon, GamePageIcon, HomePageIcon, StampbookPageIcon, MenuIcon, HomeIcon, GlassIcon, PeopleIcon, GameIcon } from "@/assets/icons/MenuIcon"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuItem = ({ text, linkRef }: { text: string, linkRef: string }) => {
    return (
        <Link className="w-full" href={linkRef} legacyBehavior passHref>
            <div
                className="w-full text-center px-3 py-2 text-lg font-medium cursor-pointer text-primary 
                    transition duration-300 ease-in-out 
                    hover:underline hover:underline-offset-4 
                    hover:transform hover:scale-102
                    box-sizing:border-box max-w-full">
                {text}
            </div>
        </Link>
    )
}

export function MenuBottomBar() {
    const pathname: string = usePathname();
    return (
        <NavigationMenu className="fixed z-50 w-full max-w-[100vw] bottom-0 sm:hidden block h-[65px] bg-white border-t-[4px] border-black flex flex-row items-center justify-center">
            {/* <div className="w-full group list-none flex flex-row items-center justify-evenly"> */}
            <NavigationMenuList>
                <NavigationMenuItem className="w-1/4 flex items-center">
                    <Link href="/app/home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <HomePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-1/4 flex items-center justify-center">
                    <Link href="/app/stampbook" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <StampbookPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-1/4 flex items-center justify-center">
                    <Link href="/app/club" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <ClubPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-1/4 flex items-center justify-center">
                    <Link href="/app/game" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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

    const token = true;
    const mockData = "Vishnu22";
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const IsUrl = (name: string) => {
        const pathname: string = usePathname();
        return pathname.includes(name);
    };

    return (
        <>
            <div className="z-50 hidden w-full max-w-[100vw] h-[65px] top-0 left-0 right-0 fixed bg-[#FEEBED] sm:flex justify-between items-center px-4">
                <div className="flex flex-row justify-center items-center gap-x-8">
                    <Logo scale={0.7} />
                    <div className="hidden lg:flex flex-row justify-center items-center gap-x-10">
                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/home">
                            <HomeIcon />
                            <p className={`font-bold text-xl ${IsUrl("home") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Home</p>
                        </Link>
                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/stampbook">
                            <GlassIcon />
                            <p className={`font-bold text-xl ${IsUrl("stampbook") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Stamp</p>
                        </Link>
                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/club">
                            <PeopleIcon />
                            <p className={`font-bold text-xl ${IsUrl("club") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Club</p>
                        </Link>
                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/game">
                            <GameIcon />
                            <p className={`font-bold text-xl ${IsUrl("game") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Game</p>
                        </Link>
                    </div>
                </div>
                {
                    token ?
                        <div className="hidden lg:flex flex-row justify-evenly items-center gap-x-2">
                            <p className="text-lg font-medium text-primary px-1 py-2">Hello, {mockData}</p>
                            <p className="text-lg font-medium text-primary">|</p>
                            <Link href="/" className="text-center px-1 py-2 text-lg font-medium cursor-pointer text-primary">Logout</Link>
                        </div> :
                        <div className="hidden lg:block">
                            <MenuItem text="Login" linkRef="/"></MenuItem>
                        </div>
                }
                <div className="lg:hidden">
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        {
                            token ? <p className="text-lg font-medium text-primary"><span>Hello, {mockData}</span></p> : null
                        }
                        <div className="cursor-pointer" onClick={() => handleMenu()}>
                            <MenuIcon scale={0.3} />
                        </div>
                    </div>
                    {
                        showMenu ? <ul className="absolute list-none right-0 top-[65px] w-full bg-[#FEEBED] border-t-2 gap-y-5">
                            <Link className="py-3 flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/home" onClick={handleMenu}>
                                <HomeIcon />
                                <p className={`font-bold text-xl ${IsUrl("home") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Home</p>
                            </Link>
                            <Link className="py-3 flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/stampbook" onClick={handleMenu}>
                                <GlassIcon />
                                <p className={`font-bold text-xl ${IsUrl("stampbook") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Stamp</p>
                            </Link>
                            <Link className="py-3 flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/club" onClick={handleMenu}>
                                <PeopleIcon />
                                <p className={`font-bold text-xl ${IsUrl("club") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Club</p>
                            </Link>
                            <Link className="py-3 flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/app/game" onClick={handleMenu}>
                                <GameIcon />
                                <p className={`font-bold text-xl ${IsUrl("game") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Game</p>
                            </Link>
                            <li className="py-3 flex flex-row justify-center items-center">
                                {
                                    token ?
                                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/logout" onClick={handleMenu}>
                                            <p className={`font-bold text-xl ${IsUrl("logout") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Logout</p>
                                        </Link> :
                                        <Link className="flex flex-row space-x-1 justify-center items-center cursor-pointer group inline-flex h-full w-[100%] transition-colors focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/login" onClick={handleMenu}>
                                            <p className={`font-bold text-xl ${IsUrl("login") ? "text-[#2A334E]" : "text-[#CFCFCF]"}`}>Login</p>
                                        </Link>
                                }
                            </li>
                        </ul> : null
                    }
                </div>
            </div>
            <div className="w-full max-w-[100vw] h-[65px] top-0 left-0 right-0 z-50 fixed flex justify-end items-center px-8 sm:hidden">
                {
                    token ?
                        <Link href={"/"} className="z-50 rounded-3xl px-5 py-1 bg-[#ECD8C1] shadow shadow-lg">
                            <p className="text-lg font-medium text-primary">Hello, {mockData}</p>
                        </Link> :
                        <Link href={"/"} className="z-50 rounded-3xl px-5 py-1 bg-[#ECD8C1] shadow shadow-lg">
                            <p className="text-lg font-medium text-primary">Login</p>
                        </Link>
                }

            </div>
        </>
    )
}