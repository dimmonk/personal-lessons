// The Firebase project the learner's account and record live in (fieldcraft-a795f). These values are public by design: what protects the
// record is firestore.rules. The browser checks serve their own copy of this file, pointed at the local emulators (tests/e2e-env.mjs).
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD5JW47n9WwlFlvPX-TMy_Dv7yWtxahMqQ',
  authDomain: 'fieldcraft-a795f.firebaseapp.com',
  projectId: 'fieldcraft-a795f',
  appId: '1:1053948910384:web:cbab32cc12c4f22f6286f5',
  messagingSenderId: '1053948910384'
};
// { auth: 'http://host:port', firestore: { host, port } } to use the local emulators instead of the project; null in the app
export const EMULATORS = null;
