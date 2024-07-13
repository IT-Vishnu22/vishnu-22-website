import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: process.env.FB_PROJECT_ID,
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey: process.env.FB_PRIVATE_KEY,
    }),
    databaseURL: process.env.FB_DATABASE_URL,
  });
} catch (err: any) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}

export const adminFirestore = getFirestore();
export const adminAuth = getAuth();
