import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// We need to somehow seed the database

// We need a config here
const config = {
  apiKey: "AIzaSyDe2F2jDRE1rFICV91vT8Vv7cno9qTvEM0",
  authDomain: "netflix-clone-5b34c.firebaseapp.com",
  projectId: "netflix-clone-5b34c",
  storageBucket: "netflix-clone-5b34c.firebasestorage.app",
  messagingSenderId: "430603262425",
  appId: "1:430603262425:web:1f32e921f25c4af28161c8",
};
const app = initializeApp(config);
const db = getFirestore(app); // Get Firestore instance
const auth = getAuth(app);
export { db, auth }; // Export db for use in other files
