// src/firebase/FirebaseInit.js

import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyCmH74Or96M_cnWbLOmJStmurSFHzOrEpo",
    authDomain: "insta-clone-c30d4.firebaseapp.com",
    projectId: "insta-clone-c30d4",
    storageBucket: "insta-clone-c30d4.appspot.com",
    messagingSenderId: "858241948909",
    appId: "1:858241948909:web:0df2cfef3135dc808140e4",
    measurementId: "G-Q45H7CC3T5"
});

const db = firebaseApp.firestore();

const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };