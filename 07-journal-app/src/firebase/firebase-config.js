import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwUiw9PQ2FA3gOiQuPo8QOwycNBheFOFE",
    authDomain: "journalapp-29d73.firebaseapp.com",
    databaseURL: "https://journalapp-29d73.firebaseio.com",
    projectId: "journalapp-29d73",
    storageBucket: "journalapp-29d73.appspot.com",
    messagingSenderId: "728392992927",
    appId: "1:728392992927:web:058291174a91700240faaa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
};