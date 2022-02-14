import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1IqOBuu-gzWRYHz20yrmgodZANqJLyic",
    authDomain: "catch-of-the-day-e19d7.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e19d7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "catch-of-the-day-e19d7",
    storageBucket: "catch-of-the-day-e19d7.appspot.com",
    messagingSenderId: "244924352692",
    appId: "1:244924352692:web:c9ee8309354582e07cafe1"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
