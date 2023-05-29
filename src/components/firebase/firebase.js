
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJc3t7cgHSb43bEiEzQrtJl1200USkxRs",
  authDomain: "filmyverse-308c5.firebaseapp.com",
  projectId: "filmyverse-308c5",
  storageBucket: "filmyverse-308c5.appspot.com",
  messagingSenderId: "1036641547606",
  appId: "1:1036641547606:web:23a5a1f56b9b534beb92f7"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export default app;