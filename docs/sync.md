# The account: where progress is kept

Built 2026-10-13, after clearing the app's site data (to get a new version) lost the owner's progress. Approved by the owner ("go") on the plan in the FieldCraft project thread.

## What it does

- Progress is kept in the owner's account: Google sign-in (Firebase Auth) and Cloud Firestore in the project `fieldcraft-a795f`.
- Firestore keeps a full copy on the phone (its persistent cache, in IndexedDB). The app opens and saves with no connection; what was saved offline goes to the account by itself when the phone is back online.
- Clearing site data, or a new phone, needs one sign-in, and the record comes back whole.
- A new deploy shows a bar, "A new version of the app is ready", with a button that opens it. Clearing site data is never needed to update.
- The one loss it cannot prevent: answers saved offline and not yet sent are lost if site data is cleared before the phone is back online. The Progress screen says when anything is waiting ("Saved on this phone...").

## Files

| File | Does |
|---|---|
| `public/app/store.js` | the one owner of the record in memory (`RECORD`), synchronous reads, writes as operations sent to the backend |
| `public/app/sync.js` (module) | sign-in, the owner check, the backend: fills the store from Firestore, sends its writes, starts the app (`startApp`) |
| `public/app/legacy-move.js` (module) | moves an older copy's localStorage `pl:` keys into the account on first sign-in, then removes them once confirmed |
| `public/app/account.js` | the sign-in screens, the line on the Progress screen, the new-version bar |
| `public/app/firebase-config.js` (module) | the project's public config; the tests serve their own, pointed at the emulators |
| `public/vendor/firebase.js` | the Firebase SDK parts used, bundled by `npm run vendor` (`tools/vendor/`) |
| `firestore.rules` | the first account to sign in claims `config/owner`; only it can read or write `users/<its id>/` |

## The database

```
config/owner              { uid }
users/<id>/tries/<id>     { subject, key, at, t }     one answer each; t is the Try as JSON
users/<id>/log/<id>       { at, e }                   one event each, the newest 500 kept
users/<id>/subjects/<id>  { seen: { [lessonId]: JSON }, notes: { [field]: JSON } }
users/<id>/prefs/app      { app: JSON, recent: JSON }
```

Answers and events are one document each, so two devices never overwrite each other's. A place in a lesson and each private note are written one field at a time. Values are JSON text so every answer is stored exactly as the app made it.

## Tests

- `npm run test:rules`: the rules on the emulator, every allow and refuse (39 checks).
- `npm run test:e2e -- PWA X49 X50`: the installable app and the new-version bar; X49 offline, back online, then a cleared phone; X50 the move from an older copy. Every browser check signs in to its own demo project on the local emulators (`tests/emulators.mjs`), never the real account.
- `node tools/serve.mjs` serves the app on the emulators too.
