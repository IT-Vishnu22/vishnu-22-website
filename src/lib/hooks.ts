import { doc, onSnapshot } from "firebase/firestore";
import { auth, firestore } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserData, validateUserData } from "@/lib/types";

// Custom hook to read  auth record and user profile doc
export function useUserStore() {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState<UserData | undefined>({faculty: undefined, group: undefined, prefix: undefined, username: "", studentId: "", lineId: ""});

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe;

        // if (liff) {
        //     console.log(liff.profile?.userId);
        //     setLineId(liff.profile?.userId ?? null);
        // } else {
        //     setLineId(null);
        // }

        if (user) {
            unsubscribe = onSnapshot(
                doc(firestore, "users", user.uid),
                (doc) => {
                    if (doc.exists()) {
                        setUserData(validateUserData.parse(doc.data()));
                    }
                },
            );
        } else {
            setUserData(undefined)
        }

        return unsubscribe;
    }, [user]);

    return { firebaseUser: user, userData };
}
