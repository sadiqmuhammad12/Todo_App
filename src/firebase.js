import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNzLHVBuTEmbRfAhsjBe1NUMQuaNxm78w",
    authDomain: "todo-application-55f5e.firebaseapp.com",
    projectId: "todo-application-55f5e",
    storageBucket: "todo-application-55f5e.appspot.com",
    messagingSenderId: "14309846328",
    appId: "1:14309846328:web:8d8361866e4246ea35e5cd",
    measurementId: "G-Q50CKDV4RP"
});
const db = firebaseApp.firestore();
export default db;