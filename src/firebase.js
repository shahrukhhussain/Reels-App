import firebase from "firebase/app"; //for using firebase
import config from "./config.json";
import "firebase/auth"; // for authentication of user

import "firebase/firestore"; //For database

import "firebase/storage"; //For storage

firebase.initializeApp(config);//For connecting the app with the firebase

//flag => using google
let provider = new firebase.auth.GoogleAuthProvider();

//object jiske ander login/logout/signup
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const signInWithGoogle = () => {
  //ki muje popup ko use krke sign up krna with google
  auth.signInWithPopup(provider);
};

export default firebase;
