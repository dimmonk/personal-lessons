/* ===================== INIT ===================== */

document.addEventListener('keydown', e => {
  if(e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)){
    e.preventDefault(); go('search');
  }
  if(e.key === 'Escape' && APP.view === 'search') go('library');
});

// the words a learner can tap in a case are spans, so they wrap with the text: Enter or Space taps them
document.addEventListener('keydown', e => {
  if((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('span.tap[data-pick]')){
    e.preventDefault(); e.target.click();
  }
});

render();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(err => console.error('Service worker registration failed', err));
}
