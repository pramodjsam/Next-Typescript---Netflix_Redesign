import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqPSX19zgIRxT2onpU-wJWHc2xOfAETk",
  authDomain: "webtut-react-login.firebaseapp.com",
  databaseURL: "https://webtut-react-login.firebaseio.com",
  projectId: "webtut-react-login",
  storageBucket: "webtut-react-login.appspot.com",
  messagingSenderId: "639272991275",
  appId: "1:639272991275:web:f4a8be0dc6cce02a4e086e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
