import { User } from "firebase/auth";
import { createContext } from "react";
import { UserData } from "@/lib/types";
import { useUserStore } from "@/lib/hooks";

export const UserContext = createContext<ReturnType<typeof useUserStore>>({firebaseUser: null, userData: undefined});

