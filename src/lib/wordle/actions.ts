"use server";

import { firestore } from "../firebase";
import { doc, getDoc, updateDoc, writeBatch } from "firebase/firestore";

export async function addPlayed(
    studentId: string | undefined,
    group: string | null,
    win: boolean,
) {
    // console.log("played: ", studentId, group);

    if (!studentId || !group) {
        console.error("DNE");
        return;
    }

    const docRef = doc(firestore, "wordle", group);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.error("DNE");
        return;
    }

    // Check if they have played or not
    const played = docSnap.data().played;
    if (played.includes(studentId)) {
        // console.log("already played");
        return;
    }

    // played
    played.push(studentId);

    if (win) {
        const count = docSnap.data().winners_count;
        const winners = docSnap.data().winners;

        const newCount = count + 1;
        winners.push(studentId);

        // console.log("winners", winners);
        const batch = writeBatch(firestore);
        batch.update(docRef, {
            winners_count: newCount,
            winners: winners,
            played: played,
        });
        batch.commit();
        // console.log("done", newCount, winners);
    } else {
        // console.log("lose", studentId);
        await updateDoc(docRef, {
            played: played,
        });
    }
}

export async function fetchWord() {
    const docRef = doc(firestore, "wordle", "answer");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.error("DNE");
        return "";
    }

    return docSnap.data().answer;
}

export async function didPlay(
    studentId: string | undefined,
    group: string | null,
) {
    // console.log("played: ", studentId, group);

    if (!group || !studentId) {
        return true;
    }

    const docRef = doc(firestore, "wordle", group);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.error("DNE");
        return true;
    }

    // Check if they have played or not
    const played = docSnap.data().played;
    if (played.includes(studentId)) {
        return true;
    } else {
        return false;
    }
}
