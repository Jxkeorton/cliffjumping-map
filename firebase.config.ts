import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import 'firebase/messaging';


const firebaseConfig = {
  apiKey: "AIzaSyBlYQTn7ndntvXbd6ZuYo4gyPDJI77NxG8",
  authDomain: "uk-cliff-jumping-map.firebaseapp.com",
  projectId: "uk-cliff-jumping-map",
  storageBucket: "uk-cliff-jumping-map.appspot.com",
  messagingSenderId: "242535201985",
  appId: "1:242535201985:web:0e05d709e48e57d7716840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
export default app;