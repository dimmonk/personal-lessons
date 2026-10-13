// The database rules (firestore.rules), on the local emulator: the first account to sign in claims the record, and from then on only that
// account can read or write its own record; nobody can read or write anything else. Each rule is checked for what it allows and what it
// refuses. Run: npm run test:rules
import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs, setLogLevel } from 'firebase/firestore';
import { startEmulators, FIRESTORE } from './emulators.mjs';

const failures = [];
let checks = 0;
async function check(label, attempt) {
  checks += 1;
  try { await attempt; } catch (error) { failures.push(`${label}: ${error.message}`); }
}

setLogLevel('silent');   // the refusals the checks expect are not printed
const stop = await startEmulators();
try {
  const env = await initializeTestEnvironment({ projectId: 'demo-fieldcraft-rules', firestore: { ...FIRESTORE, rules: readFileSync(new URL('../firestore.rules', import.meta.url), 'utf8') } });
  await env.clearFirestore();
  const owner = env.authenticatedContext('owner').firestore(), other = env.authenticatedContext('other').firestore(), nobody = env.unauthenticatedContext().firestore();
  const answer = { subject: 's', key: 'k', at: 1, t: '{}' };

  await check('before the record is claimed, its owner cannot write it', assertFails(setDoc(doc(owner, 'users/owner/tries/a'), answer)));
  await check('someone signed out cannot claim the record', assertFails(setDoc(doc(nobody, 'config/owner'), { uid: 'x' })));
  await check('an account cannot claim the record for another account', assertFails(setDoc(doc(owner, 'config/owner'), { uid: 'other' })));
  await check('a claim holds only the account id', assertFails(setDoc(doc(owner, 'config/owner'), { uid: 'owner', extra: 1 })));
  await check('the first account to sign in claims the record', assertSucceeds(setDoc(doc(owner, 'config/owner'), { uid: 'owner' })));
  await check('a second account cannot take the record over', assertFails(setDoc(doc(other, 'config/owner'), { uid: 'other' })));
  await check('the owner cannot change the claim either', assertFails(setDoc(doc(owner, 'config/owner'), { uid: 'owner' })));
  await check('a signed-in account can read who owns the record', assertSucceeds(getDoc(doc(other, 'config/owner'))));
  await check('someone signed out cannot read who owns it', assertFails(getDoc(doc(nobody, 'config/owner'))));

  for (const part of ['tries', 'log', 'subjects', 'prefs']) {
    await check(`the owner writes ${part}`, assertSucceeds(setDoc(doc(owner, `users/owner/${part}/a`), answer)));
    await check(`the owner reads ${part}`, assertSucceeds(getDocs(collection(owner, `users/owner/${part}`))));
    await check(`the owner deletes in ${part}`, assertSucceeds(deleteDoc(doc(owner, `users/owner/${part}/a`))));
    await check(`another account cannot read the owner's ${part}`, assertFails(getDocs(collection(other, `users/owner/${part}`))));
    await check(`another account cannot write the owner's ${part}`, assertFails(setDoc(doc(other, `users/owner/${part}/b`), answer)));
    await check(`another account cannot keep ${part} of its own`, assertFails(setDoc(doc(other, `users/other/${part}/b`), answer)));
    await check(`someone signed out cannot read ${part}`, assertFails(getDocs(collection(nobody, `users/owner/${part}`))));
  }
  await check('the owner cannot write outside the four parts of the record', assertFails(setDoc(doc(owner, 'users/owner/other/a'), answer)));
  await check('nothing outside the record can be written', assertFails(setDoc(doc(owner, 'elsewhere/a'), answer)));
  await env.cleanup();
} finally {
  await stop();
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} rules checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} rules checks passed`);
