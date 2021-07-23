import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVACjL47n4uwxzDiVNFWNQsnHd5u8f1Sc",
  authDomain: "test-project-work-a3934.firebaseapp.com",

  projectId: "test-project-work-a3934",
  storageBucket: "test-project-work-a3934.appspot.com",
  messagingSenderId: "611681973396",
  appId: "1:611681973396:web:e708725fa2cacd91777081",
  measurementId: "G-T7EBTB7DZ4",
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const storage = firebase.storage();

export { storage, firebase as default };
