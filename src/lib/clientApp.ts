import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);
    return app;
  }
};

export const db = getFirestore(createFirebaseApp());
