import { doc, onSnapshot } from "firebase/firestore";
import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
        if (doc.exists()) {
          setUsername(doc.data()?.username);
          setGroup(doc.data()?.group);
        }
      });
    } else {
      setUsername(null);
      setGroup(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username, group };
}
