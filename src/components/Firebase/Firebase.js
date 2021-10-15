import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBtBON_zfszCMLJrPv3qsmHTOXxvJ7CVc",
  authDomain: "fb-coder.firebaseapp.com",
  projectId: "fb-coder",
  storageBucket: "fb-coder.appspot.com",
  messagingSenderId: "822042571813",
  appId: "1:822042571813:web:61117eca2d074d8b72fbcc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);