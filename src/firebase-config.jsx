import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "authubereat",
    storageBucket: "authubereat.appspot.com",
    messagingSenderId: "610080378885",
    appId: "1:610080378885:web:cbc1c635d0466db57d8c6c",
    measurementId: "G-L62YZTD9C6"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
