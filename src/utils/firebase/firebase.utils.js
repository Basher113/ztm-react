// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore'
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey); // get me the referrence collection of collectionKey if no collection yet create me a refference collection of collection key
    const batch = writeBatch(db) // Get a new write batch
    try {

        objectsToAdd.forEach((object) => {
            const docRef = doc(collectionRef, object.title.toLowerCase()); // get me the document referrence of (whatever the title of my object) from collection of collectionKey(ex'categories'*). If there is no document referrence then create 1 for me.
            batch.set(docRef, object) // Set the value to the object
        })
        await batch.commit()
    } catch (error) {
        alert('Error creating collection and documents: Please try again',)
        console.log('Error creating collection and documents:', error.message)
    }
}

export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'categories'); // get me the collection referrence of the collection categories in my db

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q); // give me the documents snapshot of whatever it is you get from querying the collection of categories
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        // Returns an object that contains key, value pair for title, items of document
        // ex {'sneakers': [sneaker1, sneaker2, ], 'hats': [hat1, hat2, ]}
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth, otherInfo) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...otherInfo
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userDocRef;
}

export const myCreateUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)