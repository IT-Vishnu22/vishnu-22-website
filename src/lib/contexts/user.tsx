import { User } from "firebase/auth";
import { createContext } from "react";
import { UserData } from "@/lib/types";
import { useUserData } from "@/lib/hooks";

export const UserContext = createContext<ReturnType<typeof useUserData>>({
    firebaseUser: null,
});
