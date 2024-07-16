'use client';

import { User } from "firebase/auth";
import { createContext } from "react";

export const UserContext = createContext<{
  user: User | null | undefined;
  username: null | string;
  group: null | string;
}>({ user: null, username: null, group: null });
