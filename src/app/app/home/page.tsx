import { firestore } from "@/lib/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export default function HomePage() {
  return (
      <p>Hi homepage</p>
  );
}
