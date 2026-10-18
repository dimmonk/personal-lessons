/* ===================== INIT ===================== */

document.addEventListener('keydown', e => {
  if(e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)){
    e.preventDefault(); go('search');
  }
  if(e.key === 'Escape' && APP.view === 'search') go('library');
});

wireDocTabs();
wireMaps();

// The app is drawn once the learner's record is in memory: app/sync.js calls this when the account is open.
function startApp(){
  restoreApp();
  render();
  startHistory();
  window.addEventListener('popstate', backInApp);
  document.documentElement.dataset.record = 'open';
}

// A new deploy is fetched by the service worker whenever the app comes back into view; once the new worker has taken over the page, the
// bar offers to open the new version (the page itself still runs the code it was opened with). The first worker taking over is not one.
if('serviceWorker' in navigator){
  const hadWorker = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => { if(hadWorker) showUpdateReady(); });
  navigator.serviceWorker.register('sw.js')
    .then(reg => document.addEventListener('visibilitychange', () => {
      if(document.visibilityState === 'visible') reg.update().catch(err => console.warn('Could not look for a new version', err));
    }))
    .catch(err => console.error('Service worker registration failed', err));
}
