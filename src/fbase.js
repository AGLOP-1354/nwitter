import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCJMfo_CLdgnmih6MDXg8e3gqrhIdUQAbs",
    authDomain: "nwitter-3879c.firebaseapp.com",
    projectId: "nwitter-3879c",
    storageBucket: "nwitter-3879c.appspot.com",
    messagingSenderId: "120995367242",
    appId: "1:120995367242:web:787925c92d5ea248f5d9b3"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();