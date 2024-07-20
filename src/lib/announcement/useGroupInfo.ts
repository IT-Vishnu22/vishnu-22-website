"use client";

import { useEffect, useState } from "react";
import { fetchGroupInfo } from "./actions";

export default function useGroupInfo(group: string | null) {
    const [groupInfo, setGroupInfo] = useState({
        houseName: "",
        registeration_place: "Loading...",
        line: "",
    });

    useEffect(() => {
        const updateInfo = async () => {
            const Info = await fetchGroupInfo(group);
            if (Info) {
                setGroupInfo(Info);
            }
            // console.log(Info);
        };
        // console.log(groupInfo);
        updateInfo();
    }, [group]);

    return groupInfo;
}
