'use client'
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation";

import { Logo } from "@/assets/icons/LogoVishnu22"
import { ClubPageIcon, GamePageIcon, HomePageIcon, StampbookPageIcon, MenuIcon } from "@/assets/icons/MenuIcon"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuItem = ({ text, linkRef }: { text: string, linkRef: string }) => {
    return (
        <Link className="w-full" href={linkRef} legacyBehavior passHref>
            <div
                className="w-full text-center px-3 py-2 text-lg font-semibold cursor-pointer text-primary 
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
        <NavigationMenu className="sm:hidden block h-[65px] bg-white border-t-[4px] border-black flex flex-row items-center justify-center">
            <div className="w-full group flex flex-1 list-none items-center justify-evenly">
                <NavigationMenuItem className="flex items-center justify-center">
                    <Link href="/app/home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <HomePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center justify-center">
                    <Link href="/app/stampbook" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <StampbookPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center justify-center">
                    <Link href="/app/club" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <ClubPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center justify-center">
                    <Link href="/app/game" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <GamePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
        </NavigationMenu>
    );
}

export function MenuTopBar() {

    const token = false;
    const mockData = "Vishnu22";
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="hidden w-full h-[65px] top-0 left-0 right-0 z-100 fixed bg-secondary sm:flex justify-between items-center px-4">
            <div className="flex flex-row justify-center items-center gap-x-8">
                <Logo scale={0.7} />
                <div className="hidden lg:flex flex-row justify-center items-center gap-x-4">
                    <MenuItem text="Home" linkRef="/app/home"></MenuItem>
                    <MenuItem text="Stamp" linkRef="/app/stampbook"></MenuItem>
                    <MenuItem text="Club" linkRef="/app/club"></MenuItem>
                    <MenuItem text="Game" linkRef="/app/game"></MenuItem>
                </div>
            </div>
            {
                token ?
                    <div className="hidden lg:flex flex-row justify-center items-center gap-x-2">
                        <p className="text-lg font-semibold text-primary">Hello {mockData}</p>
                        <p className="text-lg font-semibold text-primary">|</p>
                        <MenuItem text="Log out" linkRef="/"></MenuItem>
                    </div> :
                    <div className="hidden lg:block">
                        <MenuItem text="Log in" linkRef="/"></MenuItem>
                    </div>
            }
            <div className="lg:hidden">
                <div className="flex flex-row justify-center items-center gap-x-4">
                    {
                        token ? <p className="text-lg font-semibold text-primary">Hello {mockData}</p> : null
                    }
                    <div className="cursor-pointer" onClick={() => handleMenu()}>
                        <MenuIcon scale={0.3} />
                    </div>
                </div>
                {
                    showMenu ? <ul className="absolute list-none right-0 top-[65px] w-full bg-secondary border-t-2">
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Home" linkRef="/app/home"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Stamp" linkRef="/app/stampbook"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Club" linkRef="/app/club"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Game" linkRef="/app/game"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2">
                            {
                                token ?
                                    <MenuItem text="Log out" linkRef="/"></MenuItem> :
                                    <MenuItem text="Log in" linkRef="/"></MenuItem>
                            }
                        </li>
                    </ul> : null
                }
            </div>
        </div>
    )
}