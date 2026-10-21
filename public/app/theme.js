/* ===================== THE THEME: LIGHT OR DARK ===================== */
// Loaded in the page's head, before anything is drawn, so the first paint is already in the right colours. The choice is kept on this
// device only (a phone in the sun and a laptop at night can differ): 'system' follows the phone's own setting, 'light' and 'dark' hold.
// The colours themselves are tokens in app.css, `:root` dark and `:root[data-theme="light"]` light.

const THEMES = ['system', 'light', 'dark'];
const THEME_KEY = 'fc:theme';
const THEME_SAY = { title: 'Colors', system: 'Like the phone', light: 'Light', dark: 'Dark' };

function themeChoice(){
  try{
    const saved = localStorage.getItem(THEME_KEY);
    return THEMES.includes(saved) ? saved : 'system';
  }catch(err){
    console.warn('Could not read the saved theme; following the phone', err);
    return 'system';
  }
}
const systemTheme = () => matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const themeShown = () => { const choice = themeChoice(); return choice === 'system' ? systemTheme() : choice; };

// sets the page's theme and the colour of the phone's bar above it to the page's background
function applyTheme(){
  const root = document.documentElement;
  root.dataset.theme = themeShown();
  const bar = document.querySelector('meta[name="theme-color"]');
  if(bar) bar.content = getComputedStyle(root).getPropertyValue('--bg').trim();
}
function setTheme(choice){
  if(!THEMES.includes(choice)) throw new Error(`No theme called ${choice}`);
  try{ localStorage.setItem(THEME_KEY, choice); }
  catch(err){ console.warn('Could not save the theme on this device; it holds until the app is closed', err); }
  applyTheme();
}

// headless checks load this file with no page (tests/load-app.mjs)
if(typeof document !== 'undefined'){
  applyTheme();
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', applyTheme);
}
