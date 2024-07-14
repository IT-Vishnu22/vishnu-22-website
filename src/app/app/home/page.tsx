'use client';

import { useContext } from "react";
import { UserContext } from "@/lib/context";

export default function HomePage() {
  const { user, username, group } = useContext(UserContext);

  return (
  <>
    <p>{user?.uid}</p>
    <p>{username}</p>
    <p>{group}</p>
    <h2>hi home page</h2>
  </>
);
}
