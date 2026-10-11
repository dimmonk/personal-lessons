/* ===================== INIT ===================== */

document.addEventListener('keydown', e => {
  if(e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)){
    e.preventDefault(); go('search');
  }
  if(e.key === 'Escape' && APP.view === 'search') go('library');
});

wireDocTabs();
render();
history.replaceState({ fc: 'base' }, '');
syncHistory();
window.addEventListener('popstate', backInApp);

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(err => console.error('Service worker registration failed', err));
}
