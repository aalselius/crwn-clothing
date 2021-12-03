import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDbBwFq3kmWs1KyPUEU06-_EM5DN_OTfjU",
    authDomain: "crwn-db-94f6a.firebaseapp.com",
    projectId: "crwn-db-94f6a",
    storageBucket: "crwn-db-94f6a.appspot.com",
    messagingSenderId: "386195480028",
    appId: "1:386195480028:web:e915d15715913e0220c319",
    measurementId: "G-0BE7J4DZHR"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;