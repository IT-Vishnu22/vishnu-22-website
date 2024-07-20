"use client";

import { useEffect, useState } from "react";
import { fetchFirstdateInfo } from "./actions";

export default function useFirstdateInfo(group: string | null) {
    const [Info, setInfo] = useState({
        registeration_place: "",
        table: "Loading...",
    });

    useEffect(() => {
        const updateInfo = async () => {
            const Info = await fetchFirstdateInfo(group);
            if (Info) {
                setInfo(Info);
            }
            // console.log(Info);
        };

        updateInfo();
    }, [group]);

    return Info;
}
