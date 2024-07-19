'use client';

import { set } from "firebase/database";
import { firestore } from "../firebase";
//import { firebase } from "../firebase"
import { doc, getDoc, updateDoc, writeBatch, FieldValue, increment, setDoc} from "firebase/firestore"


let debounceTimer: NodeJS.Timeout;

export async function addClick(studentId: string | undefined, group: string | undefined, count: number, buffer:number,lol:() => void) {
    
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
        if (!studentId || !group) {
            console.error("DNE");
            return;
        }
    
        const docRef = doc(firestore, "user", studentId);
        const groupRef = doc(firestore, "popgear", group)
    
        updateDoc(docRef, {
            clicks: count
        })

        updateDoc(groupRef, {
            score:increment(buffer)
        })

        lol()
        console.log(count)
    }, 500);    
}


export async function onLoad(studentId: string | undefined, group: string | undefined) {
    console.log("played: ", studentId, group);

    if (!group || !studentId) {
        return 0;
    }

    const docRef = doc(firestore, "users", studentId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.error("DNE");
        return 0;
    }

    if (docSnap.data().clicks == null){
        setDoc(docRef, {clicks: 0}, {merge: true})
        return 0;
    }
    else
    {
        return docSnap.data().clicks;
    }    
}