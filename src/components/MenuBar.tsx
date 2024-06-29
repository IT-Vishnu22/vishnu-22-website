'use client'
import { Logo } from "@/assets/icons/LogoVishnu22"
import { ClubPageIcon, GamePageIcon, HomePageIcon, StampbookPageIcon, MenuIcon } from "@/assets/icons/MenuIcon"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ text }: { text: string }) => {
    return (
        <div
            className="w-full text-center px-3 py-2 text-lg font-semibold cursor-pointer text-primary 
        transition duration-300 ease-in-out 
        hover:underline hover:underline-offset-4 
        hover:transform hover:scale-102
        box-sizing:border-box max-w-full">
            {text}
        </div>
    )
}

export function MenuBottomBar() {
    const pathname: string = usePathname();
    return (
        <NavigationMenu className="fixed bottom-0 w-full h-[85px] bg-white border-t-[4px] border-black">
            <div className="list-none flex w-full justify-evenly">
                <NavigationMenuItem>
                    <Link href="/app/home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <HomePageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/app/stampbook" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <StampbookPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/app/club" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <ClubPageIcon />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
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
        <div className="hidden w-full h-[65px] absolute z-10000 top-0 left-0 right-0 fixed bg-secondary sm:flex justify-between items-center px-4">
            <div className="flex flex-row justify-center items-center gap-x-8">
                <Logo scale={0.7} />
                <div className="hidden lg:flex flex-row justify-center items-center gap-x-4">
                    <MenuItem text="Home"></MenuItem>
                    <MenuItem text="Stamp"></MenuItem>
                    <MenuItem text="Club"></MenuItem>
                    <MenuItem text="Game"></MenuItem>
                </div>
            </div>
            {
                token ?
                    <div className="hidden lg:flex flex-row justify-center items-center gap-x-2">
                        <p className="text-lg font-semibold text-primary">Hello {mockData}</p>
                        <p className="text-lg font-semibold text-primary">|</p>
                        <MenuItem text="Log out"></MenuItem>
                    </div> :
                    <div className="hidden lg:block">
                        <MenuItem text="Log in"></MenuItem>
                    </div>
            }
            <div className="lg:hidden">
                <div className="flex flex-row justify-center items-center gap-x-4">
                    {
                        token ? <p className="text-lg font-semibold text-primary">Hello {mockData}</p> : null
                    }
                    <div className="cursor-pointer" onClick={() => handleMenu()}>
                        <MenuIcon scale={0.3}/>
                    </div>
                </div>
                {
                    showMenu ? <ul className="absolute list-none right-0 top-[65px] w-full bg-secondary border-t-2">
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Home"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Stamp"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Club"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2"><MenuItem text="Game"></MenuItem></li>
                        <li className="flex flex-row justify-center items-center py-2">
                            {
                                token ?
                                    <MenuItem text="Log out"></MenuItem> :
                                    <MenuItem text="Log in"></MenuItem>
                            }
                        </li>
                    </ul> : null
                }
            </div>
        </div>
    )
}