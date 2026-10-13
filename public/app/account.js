/* ===================== THE ACCOUNT: SIGN-IN, WHERE THE RECORD IS SAVED, A NEW VERSION ===================== */
// The screens shown before the record is open (app/sync.js decides which), the line on the Progress screen that says whether everything
// is saved to the account, and the bar that offers a new version of the app once it has arrived.

const ACCOUNT_SAY = {
  brand: 'Fieldcraft · Pragmatic knowledge',
  title: 'Keep your progress',
  why: 'Your progress is saved to your Google account, so clearing this phone never loses it, and every device shows the same. It also works with no connection, and is saved to your account when you are back online.',
  signIn: 'Sign in with Google',
  signingIn: 'Signing in…',
  offline: 'There is no connection. Connect to the internet to sign in.',
  failed: 'Sign-in did not finish. Try again.',
  opening: 'Opening your progress…',
  needsNetwork: 'Your progress is not on this phone yet. Connect to the internet once to open it.',
  notOwner: 'This app belongs to another Google account, so this one cannot open it.',
  otherAccount: 'Use another account',
  saved: 'Everything is saved to your account.',
  waiting: 'Saved on this phone. It goes to your account when you are back online.',
  refused: 'Your account did not take the last change. It is still on this phone.',
  signedInAs: email => `Signed in as ${email}.`,
  update: 'A new version of the app is ready.',
  reload: 'Open it'
};

function gatePane(body){
  document.getElementById('tabbar').style.display = 'none';
  document.getElementById('rail').innerHTML = '';
  screenEl().innerHTML = `<div class="pane" data-gate>
    <div class="topbar"><span class="m">${esc(ACCOUNT_SAY.brand)}</span></div>
    ${body}
  </div>`;
}
// The sign-in screen. onSignIn starts the sign-in and resolves when it ends; a failure leaves the screen up with a line saying so.
function renderSignIn(onSignIn, failed = false){
  const offline = !navigator.onLine;
  gatePane(`<div class="mast"><h1>${esc(ACCOUNT_SAY.title)}</h1><p>${esc(ACCOUNT_SAY.why)}</p></div>
    <div class="block">
      <button class="btn" id="signIn" ${offline ? 'disabled' : ''}>${esc(ACCOUNT_SAY.signIn)}</button>
      ${offline || failed ? `<p class="hintline">${esc(offline ? ACCOUNT_SAY.offline : ACCOUNT_SAY.failed)}</p>` : ''}
    </div>`);
  if(offline) window.addEventListener('online', () => renderSignIn(onSignIn), { once: true });
  on('#signIn', el => {
    el.disabled = true;
    el.textContent = ACCOUNT_SAY.signingIn;
    onSignIn().catch(err => { console.error('Sign-in did not finish', err); renderSignIn(onSignIn, true); });
  });
}
const renderOpening = () => gatePane(`<div class="mast"><p>${esc(ACCOUNT_SAY.opening)}</p></div>`);
// the record could not be read: not on this phone yet, and no connection to fetch it. onRetry runs when the phone is back online.
function renderNeedsNetwork(onRetry){
  gatePane(`<div class="mast"><h1>${esc(ACCOUNT_SAY.title)}</h1><p>${esc(ACCOUNT_SAY.needsNetwork)}</p></div>`);
  window.addEventListener('online', onRetry, { once: true });
}
function renderNotOwner(onOtherAccount){
  gatePane(`<div class="mast"><h1>${esc(ACCOUNT_SAY.title)}</h1><p>${esc(ACCOUNT_SAY.notOwner)}</p></div>
    <div class="block"><button class="btn ghost" id="otherAccount">${esc(ACCOUNT_SAY.otherAccount)}</button></div>`);
  on('#otherAccount', () => onOtherAccount().catch(err => console.error('Could not sign out', err)));
}

/* ---------- whether everything is saved to the account ---------- */
// pending: changes kept on this phone that the account has not confirmed; refused: the account turned a change down
let SYNC_STATUS = { email: null, pending: false, refused: false };
const syncLineText = () => [SYNC_STATUS.email ? ACCOUNT_SAY.signedInAs(SYNC_STATUS.email) : '',
  SYNC_STATUS.refused ? ACCOUNT_SAY.refused : SYNC_STATUS.pending ? ACCOUNT_SAY.waiting : ACCOUNT_SAY.saved].filter(Boolean).join(' ');
const syncLineHtml = () => `<p class="hintline" data-sync-line>${esc(syncLineText())}</p>`;
function setSyncStatus(change){
  SYNC_STATUS = { ...SYNC_STATUS, ...change };
  document.querySelectorAll('[data-sync-line]').forEach(el => { el.textContent = syncLineText(); });
}

/* ---------- a new version ---------- */
// Shown once the new version's service worker has taken over the page: the page still runs the old code until it is opened again.
function showUpdateReady(){
  if(document.getElementById('updateBar')) return;
  const bar = document.createElement('div');
  bar.id = 'updateBar';
  bar.className = 'update-bar';
  bar.innerHTML = `<span>${esc(ACCOUNT_SAY.update)}</span><button class="btn sm auto" id="updateOpen">${esc(ACCOUNT_SAY.reload)}</button>`;
  document.body.appendChild(bar);
  bar.querySelector('#updateOpen').onclick = () => window.location.reload();
}
