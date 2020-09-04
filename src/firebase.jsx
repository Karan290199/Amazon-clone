import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyByC3eevcbv_vit374Bcg1QSN5kVP1by80",
    authDomain: "clone-9639a.firebaseapp.com",
    databaseURL: "https://clone-9639a.firebaseio.com",
    projectId: "clone-9639a",
    storageBucket: "clone-9639a.appspot.com",
    messagingSenderId: "494525499363",
    appId: "1:494525499363:web:39394d1595deb4c89002d6",
    measurementId: "G-XBJLCLBTKD"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
