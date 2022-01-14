// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi4dZLsUGfrmQ8c9cp-VPORDRHV_-B2uM",
  authDomain: "nocountrydashboard.firebaseapp.com",
  projectId: "nocountrydashboard",
  storageBucket: "nocountrydashboard.appspot.com",
  messagingSenderId: "222060222627",
  appId: "1:222060222627:web:13b9d7738f1dc106f24716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const auth = getAuth(app)

export default db