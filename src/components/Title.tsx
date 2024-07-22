import Link from "next/link";
import { BackIcon } from "./BackIcon";

export default function Title(props: { type: string }) {
    return (
        <>
            <div className="absolute top-0 mr-[10px] flex w-full flex-row items-center justify-start px-[10px] pt-[35px] sm:px-[30px]">
                <Link href="/">
                    <BackIcon />
                </Link>

                {props.type === "game" ? (
                    <p className="relative flex-1 self-center text-center text-lg font-semibold text-white sm:text-3xl">
                        Leaderboard
                    </p>
                ) : (
                    <p className="relative flex-1 self-center text-center text-lg font-semibold text-white sm:text-3xl">
                        Operation Aqua Spy
                    </p>
                )}
            </div>
        </>
    );
}
