import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBYbqDG4fLavRevRMS_k-U9KWBB3PNvGos",
    authDomain: "insta-clone-21671.firebaseapp.com",
    projectId: "insta-clone-21671",
    storageBucket: "insta-clone-21671.appspot.com",
    messagingSenderId: "182237283457",
    appId: "1:182237283457:web:afe4d6a90174c3ebc6b980",
    measurementId: "G-3L1G86E7TK"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };