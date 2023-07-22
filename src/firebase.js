import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_AUTH_APP_ID,
});

export default app;
export const auth = getAuth();
