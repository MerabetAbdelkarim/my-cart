
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    apiKey: 'AIzaSyCzt3h-Zc6aHW3TsrFTuziT45OZNBUNgp0',
    authDomain: 'digitalshop-9446a.firebaseapp.com',
    projectId: 'digitalshop-9446a',
    storageBucket: 'digitalshop-9446a.appspot.com',
    messagingSenderId: '758725938589',
    appId: '1:758725938589:web:7fe996b5b6bc9f765f3374',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

