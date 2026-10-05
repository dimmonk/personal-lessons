/* ===================== HELPERS ===================== */

const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const screenEl = () => document.getElementById('screen');
const pad2 = n => String(n).padStart(2,'0');

// A failed save or read is reported on the console, never swallowed: the learner's record lives here.
function storageSave(key, obj){
  try{ localStorage.setItem(key, JSON.stringify(obj)); }
  catch(e){ console.error('Could not save ' + key, e); }
}
function storageLoad(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(raw) return Object.assign(fallback, JSON.parse(raw));
  }catch(e){
    console.error('Could not read ' + key, e);
  }
  return fallback;
}

const SVG = (d, w) => `<svg width="${w||16}" height="${w||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICON = {
  chevron: '<path d="M9 6l6 6-6 6"/>',
  back:    '<path d="M15 6l-6 6 6 6"/>',
  caret:   '<path d="M6 9l6 6 6-6"/>',
  arrow:   '<path d="M4 12h15M13 6l6 6-6 6"/>',
  check:   '<path d="M5 13l4 4L19 7"/>',
  cross:   '<path d="M6 6l12 12M18 6L6 18"/>',
  search:  '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  lock:    '<rect x="5" y="11" width="14" height="9"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  library: '<path d="M4 5h7v14H4zM13 5h7v14h-7z"/>',
  target:  '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  bars:    '<path d="M5 19V10M12 19V5M19 19v-6"/>',
  list:    '<path d="M4 6h16M4 12h16M4 18h16"/>',
  book:    '<path d="M5 4h11a2 2 0 012 2v14H7a2 2 0 01-2-2z"/><path d="M9 8h7M9 12h7"/>',
  alert:   '<path d="M12 4l8 15H4z"/><path d="M12 10v4M12 16.5v.5"/>',
  info:    '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8.5v.5"/>'
};
const icon = (name, w) => SVG(ICON[name], w);
