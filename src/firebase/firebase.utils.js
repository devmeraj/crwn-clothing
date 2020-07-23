import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTXilqllK-gcZIkzXw-WuYwuyW2T3FZ-I",
    authDomain: "crwn-db-9e8b2.firebaseapp.com",
    databaseURL: "https://crwn-db-9e8b2.firebaseio.com",
    projectId: "crwn-db-9e8b2",
    storageBucket: "crwn-db-9e8b2.appspot.com",
    messagingSenderId: "672744154136",
    appId: "1:672744154136:web:80a875f79196474d91cf6d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({params: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return;

    const userRef = firestore.doc(`/users/${user.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;

}

export default firebase;