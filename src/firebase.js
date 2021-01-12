import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-Qw5ebQl53j00hrH9mPRb-HUQwVTIlJQ",
  authDomain: "snapchat-clone-f9843.firebaseapp.com",
  projectId: "snapchat-clone-f9843",
  storageBucket: "snapchat-clone-f9843.appspot.com",
  messagingSenderId: "76561845002",
  appId: "1:76561845002:web:6d389fc99e61e4425b08f3",
  measurementId: "G-HBK1H0T2ZS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
