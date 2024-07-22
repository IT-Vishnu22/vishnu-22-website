import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqt-WR-5mIvl0p_W0z0zkzjGlmQfsdRUA",
  authDomain: "vishnu22-8ba05.firebaseapp.com",
  databaseURL: "https://vishnu22-8ba05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vishnu22-8ba05",
  storageBucket: "vishnu22-8ba05.appspot.com",
  messagingSenderId: "206479512882",
  appId: "1:206479512882:web:b6e43b5adaeb273fe8f32b",
  measurementId: "G-2BQKRR9YEQ"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
