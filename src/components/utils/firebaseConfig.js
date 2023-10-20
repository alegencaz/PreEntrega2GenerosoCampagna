// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwivDo6arb8QoQtxt_sz29oHqT7eNb_YU",
  authDomain: "enigma-store.firebaseapp.com",
  projectId: "enigma-store",
  storageBucket: "enigma-store.appspot.com",
  messagingSenderId: "271906059260",
  appId: "1:271906059260:web:95cb92a6106b09f1f13879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db