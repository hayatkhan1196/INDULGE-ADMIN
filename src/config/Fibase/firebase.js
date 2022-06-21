import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQ0P6eSdx8HJKBaeuTaB7TSqHTmJw2aZo",
    authDomain: "iindulge-49a30.firebaseapp.com",
    projectId: "iindulge-49a30",
    storageBucket: "iindulge-49a30.appspot.com",
    messagingSenderId: "20797660529",
    appId: "1:20797660529:web:2ca03fbac5c2035a282ad0",
    measurementId: "G-FSQG13MDQ6"
  };
  
  // Initialize Firebase



  const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);