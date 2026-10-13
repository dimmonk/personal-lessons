// The parts of the Firebase SDK the app uses, bundled into public/vendor/firebase.js by tools/vendor/firebase.mjs (no build step for
// the app itself: the bundle is a file in the repository, served and cached offline like any other). signInWithCredential and getFirestore are
// here for the browser checks, which sign in to the local emulator with a made-up Google account and wait for saves before a reload.
export { initializeApp } from 'firebase/app';
export { initializeAuth, getAuth, indexedDBLocalPersistence, browserPopupRedirectResolver, onAuthStateChanged, signInWithPopup, signInWithCredential,
  signOut, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
export { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, connectFirestoreEmulator, collection, doc, onSnapshot, getFirestore,
  setDoc, writeBatch, getDoc, getDocFromCache, FieldPath, deleteField, waitForPendingWrites } from 'firebase/firestore';
