// The learner's account: sign-in with Google, and the record kept in Cloud Firestore under users/<id>/ (firestore.rules lets only the
// owner's account in). Firestore keeps a full copy on the phone, so the app opens and saves with no connection; what was saved offline goes
// to the account by itself when the phone is back online. This file is the store's backend (app/store.js): it fills the store from the
// database, sends the store's writes to it, and opens the app (startApp, app/init.js) once the record is in memory.
//   users/<id>/tries/<id>        { subject, key, at, t }    t: the Try as JSON
//   users/<id>/log/<id>          { at, e }                  e: the event as JSON
//   users/<id>/subjects/<id>     { seen: { [lessonId]: JSON }, notes: { [field]: JSON } }
//   users/<id>/prefs/app         { app: JSON, recent: JSON }
//   config/owner                 { uid }                    the one account that may open the record, claimed by its first sign-in
// Values are kept as JSON text so every answer is stored exactly as the app made it (Firestore cannot hold a list inside a list).
import { initializeApp, initializeAuth, indexedDBLocalPersistence, browserPopupRedirectResolver, onAuthStateChanged, signInWithPopup, signOut,
  GoogleAuthProvider, connectAuthEmulator, initializeFirestore, persistentLocalCache, persistentMultipleTabManager, connectFirestoreEmulator,
  collection, doc, onSnapshot, setDoc, writeBatch, getDoc, getDocFromCache, FieldPath, deleteField, waitForPendingWrites } from '../vendor/firebase.js';
import { FIREBASE_CONFIG, EMULATORS } from './firebase-config.js';
import { moveLegacy } from './legacy-move.js';

const app = initializeApp(FIREBASE_CONFIG);
const auth = initializeAuth(app, { persistence: indexedDBLocalPersistence, popupRedirectResolver: browserPopupRedirectResolver });
const db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
if(EMULATORS){
  connectAuthEmulator(auth, EMULATORS.auth, { disableWarnings: true });
  connectFirestoreEmulator(db, EMULATORS.firestore.host, EMULATORS.firestore.port);
}

const PARTS = ['tries', 'log', 'subjects', 'prefs'];
const BATCH_LIMIT = 400;   // Firestore takes at most 500 writes in one batch
const LIVE_VIEWS = ['library', 'subject', 'progress'];   // screens drawn again when another device changes the record
let opened = null;         // the account whose record is open

/* ---------- the record as stored ---------- */
const decodeMap = map => Object.fromEntries(Object.entries(map || {}).map(([k, v]) => [k, JSON.parse(v)]));
function decodeDoc(col, data){
  if(col === 'tries') return { subject: data.subject, key: data.key, at: data.at, t: JSON.parse(data.t) };
  if(col === 'log') return { at: data.at, e: JSON.parse(data.e) };
  if(col === 'subjects') return { seen: decodeMap(data.seen), notes: decodeMap(data.notes) };
  return decodeMap(data);
}
function encodeDoc(col, data){
  if(col === 'tries') return { subject: data.subject, key: data.key, at: data.at, t: JSON.stringify(data.t) };
  if(col === 'log') return { at: data.at, e: JSON.stringify(data.e) };
  throw new Error('A whole document is only written for answers and events, not ' + col);
}
const nested = (path, value) => path.reduceRight((inner, key) => ({ [key]: inner }), value);

// one of the store's writes, added to a batch
function addWrite(batch, uid, write){
  const ref = doc(db, 'users', uid, write.col, write.id), only = () => ({ mergeFields: [new FieldPath(...write.path)] });
  if(write.op === 'delete') return batch.delete(ref);
  if(write.op === 'set') return batch.set(ref, encodeDoc(write.col, write.data));
  if(write.op === 'field') return batch.set(ref, nested(write.path, write.value === undefined ? deleteField() : JSON.stringify(write.value)), only());
  if(write.op === 'clear') return batch.set(ref, nested(write.path, {}), only());
  throw new Error('Unknown write: ' + write.op);
}
// The writes go to the copy on the phone at once; the promise is the account's answer, which waits while the phone is offline.
function commit(uid, writes){
  for(let i = 0; i < writes.length; i += BATCH_LIMIT){
    const batch = writeBatch(db);
    writes.slice(i, i + BATCH_LIMIT).forEach(w => addWrite(batch, uid, w));
    batch.commit()
      .then(() => setSyncStatus({ refused: false }))
      .catch(err => { console.error('The account refused a change', err); setSyncStatus({ refused: true }); });
  }
}

/* ---------- the owner ---------- */
// 'mine' or 'other'. The phone's copy answers when it can; otherwise the account does, and the first account to ask claims the record.
async function ownership(uid){
  const ref = doc(db, 'config', 'owner');
  try{
    const cached = await getDocFromCache(ref);
    if(cached.exists()) return cached.data().uid === uid ? 'mine' : 'other';
  }catch(err){ /* not on this phone yet: the account answers below */ }
  const snap = await getDoc(ref);
  if(snap.exists()) return snap.data().uid === uid ? 'mine' : 'other';
  await setDoc(ref, { uid });
  return 'mine';
}

/* ---------- the record, kept current ---------- */
// Resolves once every part has been read (from the phone's copy, or the account when the phone has none). After that, a change made on
// another device is put in the store as it arrives, and a screen with nothing in progress is drawn again.
function listen(uid){
  const pending = {};
  return new Promise(resolve => {
    const waiting = new Set(PARTS), ready = part => { if(waiting.delete(part) && !waiting.size) resolve(); };
    PARTS.forEach(part => onSnapshot(collection(db, 'users', uid, part), { includeMetadataChanges: true }, snap => {
      const changes = snap.docChanges().flatMap(ch => {
        if(ch.type === 'removed') return [{ col: part, id: ch.doc.id, doc: null }];
        try{ return [{ col: part, id: ch.doc.id, doc: decodeDoc(part, ch.doc.data()) }]; }
        catch(err){ console.error(`Could not read ${part}/${ch.doc.id}`, err); return []; }
      });
      if(changes.length) storeApply(changes);
      pending[part] = snap.metadata.hasPendingWrites;
      setSyncStatus({ pending: Object.values(pending).some(Boolean) });
      const fromElsewhere = snap.docChanges().some(ch => !ch.doc.metadata.hasPendingWrites);
      if(!waiting.size && fromElsewhere && LIVE_VIEWS.includes(APP.view)) render();
      ready(part);
    }, err => {
      console.error(`The account would not give ${part}`, err);
      setSyncStatus({ refused: true });
      ready(part);
    }));
  });
}

/* ---------- opening ---------- */
async function openRecord(user){
  if(opened) return;
  opened = user.uid;
  renderOpening();
  setSyncStatus({ email: user.email });
  let owner;
  try{ owner = await ownership(user.uid); }
  catch(err){
    console.warn('The record is not on this phone and the account cannot be reached', err);
    opened = null;
    return renderNeedsNetwork(() => openRecord(user));
  }
  if(owner === 'other'){ opened = null; return renderNotOwner(() => signOut(auth)); }
  // the old copy goes in before the record is read, so the first reading already holds it
  moveLegacy(writes => commit(user.uid, writes), () => waitForPendingWrites(db));
  await listen(user.uid);
  STORE_BACKEND = { write: writes => commit(user.uid, writes) };
  startApp();
}

onAuthStateChanged(auth, user => {
  if(user) return openRecord(user);
  if(opened) return window.location.reload();   // signed out of an open record: start again with nothing held
  renderSignIn(() => signInWithPopup(auth, new GoogleAuthProvider()));
});
