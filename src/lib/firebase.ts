import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxBafmK9mn_pVXvBXzGDVZ7KCHzRN4ru0",
  authDomain: "new-vishnu22.firebaseapp.com",
  databaseURL: "https://new-vishnu22-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "new-vishnu22",
  storageBucket: "new-vishnu22.appspot.com",
  messagingSenderId: "609073056564",
  appId: "1:609073056564:web:8ce04f779f4ba6ffa13361"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
