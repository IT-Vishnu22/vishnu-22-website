'use client';

import { useEffect, useState } from "react";
import { fetchGroupInfo } from "./actions";

export default function useGroupInfo (group: string | null) {
    const [ groupInfo, setGroupInfo ] = useState({houseName: "", registeration_place: "", line:""});

    useEffect(() => {
        const updateInfo = async () => {
            const Info = await fetchGroupInfo(group);
            if (Info) {
                setGroupInfo(Info);
            }  
            console.log(Info);
        }

        updateInfo()
    }, [group]);
    
    return groupInfo;
}