import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtueka1AFttCUUYDKHmm-etkmlxU8J1xs",
    authDomain: "crwn-db-2685b.firebaseapp.com",
    databaseURL: "https://crwn-db-2685b.firebaseio.com",
    projectId: "crwn-db-2685b",
    storageBucket: "crwn-db-2685b.appspot.com",
    messagingSenderId: "449894520690",
    appId: "1:449894520690:web:89ff499cc6b5e45b95afeb",
    measurementId: "G-VE5GGXC1ZY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;