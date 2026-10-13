// The local Firebase emulators the browser checks and the rules checks run against (Auth on 9199, Firestore on 8188, as firebase.json
// sets): started here when they are not already running, and stopped again by the caller. Needs the Firebase CLI and Java.
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';

const { emulators } = JSON.parse(readFileSync(new URL('../firebase.json', import.meta.url), 'utf8'));
export const AUTH_URL = `http://${emulators.auth.host}:${emulators.auth.port}`;
export const FIRESTORE = { host: emulators.firestore.host, port: emulators.firestore.port };
const FIRESTORE_URL = `http://${FIRESTORE.host}:${FIRESTORE.port}`;
const STARTUP_MS = 90_000;

const answers = url => fetch(url).then(() => true, () => false);
const bothUp = async () => (await answers(AUTH_URL)) && (await answers(FIRESTORE_URL));

// resolves to stop(): a no-op when the emulators were already running
export async function startEmulators() {
  if (await bothUp()) return async () => {};
  const child = spawn('firebase', ['emulators:start', '--only', 'auth,firestore', '--project', 'demo-fieldcraft'],
    { cwd: new URL('..', import.meta.url).pathname, stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  child.stdout.on('data', d => { output += d; });
  child.stderr.on('data', d => { output += d; });
  const until = Date.now() + STARTUP_MS;
  while (!(await bothUp())) {
    if (child.exitCode !== null) throw new Error(`The Firebase emulators stopped while starting:\n${output.slice(-2000)}`);
    if (Date.now() > until) { child.kill('SIGINT'); throw new Error(`The Firebase emulators did not start in ${STARTUP_MS / 1000}s:\n${output.slice(-2000)}`); }
    await new Promise(r => setTimeout(r, 500));
  }
  return () => new Promise(resolve => { child.once('exit', resolve); child.kill('SIGINT'); });
}

// app/firebase-config.js as the browser checks serve it: a demo project of its own (so no check reaches the real one, and no two checks
// share a record), on the local emulators
let projects = 0;
export const newProjectId = () => `demo-fc-${process.pid}-${++projects}`;
export const testConfigModule = projectId => `export const FIREBASE_CONFIG = { apiKey: 'demo-key', authDomain: '${projectId}.firebaseapp.com', projectId: '${projectId}', appId: 'demo-app' };
export const EMULATORS = { auth: '${AUTH_URL}', firestore: { host: '${FIRESTORE.host}', port: ${FIRESTORE.port} } };
`;
export const isEmulatorUrl = url => url.startsWith(AUTH_URL) || url.startsWith(`http://${FIRESTORE.host}:${FIRESTORE.port}`);
