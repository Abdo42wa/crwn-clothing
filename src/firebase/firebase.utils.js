import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCiRFvNCEzpqntB8zwi7hRBQxl9EFKrIzE",
    authDomain: "crwn-db-14d6f.firebaseapp.com",
    projectId: "crwn-db-14d6f",
    storageBucket: "crwn-db-14d6f.appspot.com",
    messagingSenderId: "394305121578",
    appId: "1:394305121578:web:df58fcaf7cad050df20253",
    measurementId: "G-LTKF1KQ9DV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
