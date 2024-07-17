// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDezdgQSwvGg3zMDGd3DrtMTxuzW6nwphE",
    authDomain: "crown-clothing-5c34d.firebaseapp.com",
    projectId: "crown-clothing-5c34d",
    storageBucket: "crown-clothing-5c34d.appspot.com",
    messagingSenderId: "1034728261406",
    appId: "1:1034728261406:web:e3b229e9961dede5cb6b0f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef, 'userDocRef');

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
}

