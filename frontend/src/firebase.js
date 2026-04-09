import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSelPeR7uqBnfzUlymvhHibb-iXvVAiu4",
  authDomain: "swe-training-fba5a.firebaseapp.com",
  projectId: "swe-training-fba5a",
  storageBucket: "swe-training-fba5a.firebasestorage.app",
  messagingSenderId: "107577763488",
  appId: "1:107577763488:web:1d552509b8a98269b68bc5",
  measurementId: "G-VJKGLH7DTR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
