import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAy3UveBc9L1S69QTeDASXygjRTXhdjYaQ",
  authDomain: "chat-app-64ebb.firebaseapp.com",
  projectId: "chat-app-64ebb",
  storageBucket: "chat-app-64ebb.appspot.com",
  messagingSenderId: "459172240354",
  appId: "1:459172240354:web:58ce02b46280073ad977bb",
  measurementId: "G-MS0YS3ZEWB"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);