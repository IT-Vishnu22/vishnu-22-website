'use server';
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchGroupInfo(group: string | null) {
    if (!group) {
        return;
    }
    const docRef = doc(firestore, "group-info", group);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (docSnap.exists() && data && group) {
        return {
            houseName: data.houseName,
            registeration_place: data.registeration_place,
            line: data.line
            };
    } else {
        return {houseName: "", registeration_place: "", line:""};
    }
}

export async function fetchFirstdateInfo(group: string | null) {
    if (!group) {
        return;
    }
    const docRef = doc(firestore, "group-info", group);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (docSnap.exists() && data && group) {
        return {
            registeration_place: data.registeration_place,
            table: data.table
            };
    } else {
        return {registeration_place: "", table: ""};
    }
}