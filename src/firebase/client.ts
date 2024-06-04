import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfhkBXyP1Nzh_wcOpY6UCIaE60Nx4wVZ4",
  authDomain: "arbu-c574d.firebaseapp.com",
  databaseURL: "https://arbu-c574d-default-rtdb.firebaseio.com",
  projectId: "arbu-c574d",
  storageBucket: "arbu-c574d.appspot.com",
  messagingSenderId: "657912194867",
  appId: "1:657912194867:web:3d10586dabdcff61998046",
  measurementId: "G-Z58NKJZP1B"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
