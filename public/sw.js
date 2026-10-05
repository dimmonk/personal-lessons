// Fieldcraft service worker.
// The page, its scripts and its stylesheet are network-first, so a new deploy shows up
// whole on the next load; the cached copy is only the offline fallback. Fonts and icons
// are served from cache and refreshed in the background.
const CACHE = 'fieldcraft-v8';
const SHELL = [
  './',
  'manifest.json',
  'app.css', 'app-screens.css',
  'app/helpers.js', 'app/registry.js', 'subjects/ideology/subject.js', 'subjects/ideology/key.js',
  'subjects/ideology/u1.unit.js', 'subjects/ideology/u1.cards-1.js', 'subjects/ideology/u1.cards-2.js', 'subjects/ideology/u1.cards-3.js', 'subjects/ideology/u1.cards-4.js', 'subjects/ideology/u1.cards-5.js', 'subjects/ideology/u1.cards-6.js', 'subjects/ideology/u1.cases-teach-1.js', 'subjects/ideology/u1.cases-teach-2.js', 'subjects/ideology/u1.cases-teach-3.js', 'subjects/ideology/u1.cases-teach-4.js', 'subjects/ideology/u1.cases-drill-1.js', 'subjects/ideology/u1.cases-drill-2.js', 'subjects/ideology/u1.cases-drill-3.js', 'subjects/ideology/u1.cases-return-1.js', 'subjects/ideology/u1.cases-return-2.js',
  'subjects/ideology/u5.unit.js', 'subjects/ideology/u5.cards-1.js', 'subjects/ideology/u5.cards-2.js', 'subjects/ideology/u5.cards-3.js', 'subjects/ideology/u5.cards-4.js', 'subjects/ideology/u5.cards-5.js', 'subjects/ideology/u5.cards-6.js',
  'subjects/ideology/u5.cases-teach-1.js', 'subjects/ideology/u5.cases-teach-2.js', 'subjects/ideology/u5.cases-teach-3.js',
  'subjects/ideology/u5.cases-drill-1.js', 'subjects/ideology/u5.cases-drill-2.js', 'subjects/ideology/u5.cases-drill-3.js', 'subjects/ideology/u5.cases-drill-4.js',
  'subjects/ideology/u5.cases-return-1.js',
  'subjects/ideology/u4.unit.js', 'subjects/ideology/u4.cards-1.js', 'subjects/ideology/u4.cards-2.js', 'subjects/ideology/u4.cards-3.js', 'subjects/ideology/u4.cards-4.js',
  'subjects/ideology/u4.cases-teach-1.js', 'subjects/ideology/u4.cases-teach-2.js', 'subjects/ideology/u4.cases-teach-3.js',
  'subjects/ideology/u4.cases-drill-1.js', 'subjects/ideology/u4.cases-drill-2.js', 'subjects/ideology/u4.cases-drill-3.js',
  'subjects/ideology/u4.cases-return-1.js',
  'subjects/ideology/u3.unit.js', 'subjects/ideology/u3.cards-1.js', 'subjects/ideology/u3.cards-2.js', 'subjects/ideology/u3.cards-3.js', 'subjects/ideology/u3.cards-4.js', 'subjects/ideology/u3.cards-5.js', 'subjects/ideology/u3.cards-6.js', 'subjects/ideology/u3.cards-7.js',
  'subjects/ideology/u3.cases-teach-1.js', 'subjects/ideology/u3.cases-teach-2.js', 'subjects/ideology/u3.cases-teach-3.js',
  'subjects/ideology/u3.cases-drill-1.js', 'subjects/ideology/u3.cases-drill-2.js', 'subjects/ideology/u3.cases-drill-3.js', 'subjects/ideology/u3.cases-drill-4.js',
  'subjects/ideology/u3.cases-return-1.js', 'subjects/ideology/u3.cases-return-2.js',
  'subjects/ideology/u2.unit.js', 'subjects/ideology/u2.cards-1.js', 'subjects/ideology/u2.cards-2.js', 'subjects/ideology/u2.cards-3.js', 'subjects/ideology/u2.cards-4.js', 'subjects/ideology/u2.cards-5.js', 'subjects/ideology/u2.cards-6.js', 'subjects/ideology/u2.cards-7.js', 'subjects/ideology/u2.cards-8.js', 'subjects/ideology/u2.cards-9.js',
  'subjects/ideology/u2.cases-teach-1.js', 'subjects/ideology/u2.cases-teach-2.js', 'subjects/ideology/u2.cases-teach-3.js', 'subjects/ideology/u2.cases-teach-4.js',
  'subjects/ideology/u2.cases-drill-1.js', 'subjects/ideology/u2.cases-drill-2.js', 'subjects/ideology/u2.cases-drill-3.js', 'subjects/ideology/u2.cases-drill-4.js', 'subjects/ideology/u2.cases-drill-5.js', 'subjects/ideology/u2.cases-drill-6.js', 'subjects/ideology/u2.cases-drill-7.js',
  'subjects/ideology/u2.cases-return-1.js', 'subjects/ideology/u2.cases-return-2.js', 'subjects/ideology/u2.cases-return-3.js', 'subjects/ideology/specimens.js',
  'subjects/psychology/subject.js', 'subjects/psychology/key.js', 'subjects/psychology/u1.unit.js', 'subjects/psychology/u1.cards-1.js', 'subjects/psychology/u1.cards-2.js', 'subjects/psychology/u1.cards-3.js', 'subjects/psychology/u1.cards-4.js', 'subjects/psychology/u1.cards-5.js', 'subjects/psychology/u1.cases-teach-1.js', 'subjects/psychology/u1.cases-teach-2.js', 'subjects/psychology/u1.cases-teach-3.js', 'subjects/psychology/u1.cases-drill-1.js', 'subjects/psychology/u1.cases-drill-2.js', 'subjects/psychology/u1.cases-drill-3.js', 'subjects/psychology/u1.cases-return-1.js',
  'subjects/psychology/u2.unit.js', 'subjects/psychology/u2.cards-1.js', 'subjects/psychology/u2.cards-2.js',
  'subjects/psychology/u2.cards-3.js', 'subjects/psychology/u2.cards-4.js',
  'subjects/psychology/u2.cards-5.js', 'subjects/psychology/u2.cases-teach-1.js',
  'subjects/psychology/u2.cases-teach-2.js', 'subjects/psychology/u2.cases-teach-3.js',
  'subjects/psychology/u2.cases-drill-1.js', 'subjects/psychology/u2.cases-drill-2.js',
  'subjects/psychology/u2.cases-drill-3.js', 'subjects/psychology/u2.cases-return-1.js',
  'subjects/psychology/u2.cases-return-2.js',
  'subjects/psychology/u3.unit.js', 'subjects/psychology/u3.cards-1.js', 'subjects/psychology/u3.cards-2.js',
  'subjects/psychology/u3.cards-3.js', 'subjects/psychology/u3.cards-4.js', 'subjects/psychology/u3.cards-5.js',
  'subjects/psychology/u3.cards-6.js', 'subjects/psychology/u3.cases-teach-1.js', 'subjects/psychology/u3.cases-teach-2.js',
  'subjects/psychology/u3.cases-teach-3.js', 'subjects/psychology/u3.cases-teach-4.js', 'subjects/psychology/u3.cases-drill-1.js',
  'subjects/psychology/u3.cases-drill-2.js', 'subjects/psychology/u3.cases-drill-3.js', 'subjects/psychology/u3.cases-drill-4.js',
  'subjects/psychology/u3.cases-return-1.js', 'subjects/psychology/u3.cases-return-2.js',
  'subjects/psychology/u4.unit.js', 'subjects/psychology/u4.cards-1.js', 'subjects/psychology/u4.cards-2.js',
  'subjects/psychology/u4.cards-3.js', 'subjects/psychology/u4.cards-4.js', 'subjects/psychology/u4.cards-5.js',
  'subjects/psychology/u4.cards-6.js', 'subjects/psychology/u4.cases-teach-1.js', 'subjects/psychology/u4.cases-teach-2.js',
  'subjects/psychology/u4.cases-teach-3.js', 'subjects/psychology/u4.cases-teach-4.js', 'subjects/psychology/u4.cases-drill-1.js',
  'subjects/psychology/u4.cases-drill-2.js', 'subjects/psychology/u4.cases-drill-3.js', 'subjects/psychology/u4.cases-drill-4.js',
  'subjects/psychology/u4.cases-return-1.js',
  'subjects/psychology/u4.cases-return-2.js',
  'subjects/psychology/specimens.js',
  'subjects/math/subject.js', 'subjects/math/key.js',
  'subjects/math/u1.unit.js', 'subjects/math/u1.cards-1.js', 'subjects/math/u1.cards-2.js', 'subjects/math/u1.cards-3.js', 'subjects/math/u1.cards-4.js', 'subjects/math/u1.cards-5.js', 'subjects/math/u1.cards-6.js',
  'subjects/math/u1.cases-teach-1.js', 'subjects/math/u1.cases-teach-2.js', 'subjects/math/u1.cases-teach-3.js',
  'subjects/math/u1.cases-drill-1.js', 'subjects/math/u1.cases-drill-2.js', 'subjects/math/u1.cases-drill-3.js', 'subjects/math/u1.cases-drill-4.js',
  'subjects/math/u1.cases-return-1.js', 'subjects/math/u1.cases-return-2.js',
  'subjects/math/u2.unit.js', 'subjects/math/u2.cards-1.js', 'subjects/math/u2.cards-2.js', 'subjects/math/u2.cards-3.js',
  'subjects/math/u2.cards-4.js', 'subjects/math/u2.cards-5.js', 'subjects/math/u2.cards-solved-1.js', 'subjects/math/u2.cards-solved-2.js',
  'subjects/math/u2.cards-solved-3.js', 'subjects/math/u2.cases-teach-1.js', 'subjects/math/u2.cases-teach-2.js', 'subjects/math/u2.cases-teach-3.js',
  'subjects/math/u2.cases-teach-4.js', 'subjects/math/u2.cases-check-1.js', 'subjects/math/u2.cases-check-2.js', 'subjects/math/u2.cases-drill-1.js',
  'subjects/math/u2.cases-drill-2.js', 'subjects/math/u2.cases-drill-3.js', 'subjects/math/u2.cases-drill-4.js', 'subjects/math/u2.cases-drill-5.js',
  'subjects/math/u2.cases-drill-6.js', 'subjects/math/u2.cases-drill-7.js', 'subjects/math/u2.cases-drill-8.js', 'subjects/math/u2.cases-drill-9.js',
  'subjects/math/u2.cases-return-1.js', 'subjects/math/u2.cases-return-2.js', 'subjects/math/u2.cases-return-3.js', 'subjects/math/u2.cases-return-4.js',
  'subjects/math/u3.unit.js', 'subjects/math/u3.cards-1.js', 'subjects/math/u3.cards-2.js', 'subjects/math/u3.cards-3.js',
  'subjects/math/u3.cards-4.js', 'subjects/math/u3.cards-5.js', 'subjects/math/u3.cards-solved-1.js', 'subjects/math/u3.cards-solved-2.js',
  'subjects/math/u3.cases-teach-1.js', 'subjects/math/u3.cases-teach-2.js', 'subjects/math/u3.cases-check-1.js', 'subjects/math/u3.cases-check-2.js',
  'subjects/math/u3.cases-drill-1.js', 'subjects/math/u3.cases-drill-2.js', 'subjects/math/u3.cases-drill-3.js', 'subjects/math/u3.cases-drill-4.js',
  'subjects/math/u3.cases-drill-5.js', 'subjects/math/u3.cases-drill-6.js', 'subjects/math/u3.cases-drill-7.js',
  'subjects/math/u3.cases-return-1.js', 'subjects/math/u3.cases-return-2.js', 'subjects/math/u3.cases-return-3.js',
  'subjects/math/u5.unit.js', 'subjects/math/u5.cards-1.js', 'subjects/math/u5.cards-2.js', 'subjects/math/u5.cards-3.js',
  'subjects/math/u5.cards-4.js', 'subjects/math/u5.cards-5.js', 'subjects/math/u5.cards-6.js', 'subjects/math/u5.cards-solved-1.js',
  'subjects/math/u5.cards-solved-2.js', 'subjects/math/u5.cards-solved-3.js', 'subjects/math/u5.cases-teach-1.js', 'subjects/math/u5.cases-teach-2.js',
  'subjects/math/u5.cases-check-1.js', 'subjects/math/u5.cases-check-2.js', 'subjects/math/u5.cases-drill-1.js', 'subjects/math/u5.cases-drill-2.js',
  'subjects/math/u5.cases-drill-3.js', 'subjects/math/u5.cases-drill-4.js', 'subjects/math/u5.cases-drill-5.js', 'subjects/math/u5.cases-drill-6.js',
  'subjects/math/u5.cases-drill-7.js', 'subjects/math/u5.cases-drill-8.js', 'subjects/math/u5.cases-drill-9.js', 'subjects/math/u5.cases-return-1.js',
  'subjects/math/u5.cases-return-2.js', 'subjects/math/u5.cases-return-3.js', 'subjects/math/u5.cases-return-4.js',
  'subjects/math/u4.unit.js', 'subjects/math/u4.cards-1.js', 'subjects/math/u4.cards-2.js', 'subjects/math/u4.cards-3.js',
  'subjects/math/u4.cards-4.js', 'subjects/math/u4.cards-5.js', 'subjects/math/u4.cards-solved-1.js', 'subjects/math/u4.cards-solved-2.js',
  'subjects/math/u4.cases-teach-1.js', 'subjects/math/u4.cases-teach-2.js', 'subjects/math/u4.cases-check-1.js', 'subjects/math/u4.cases-check-2.js',
  'subjects/math/u4.cases-drill-1.js', 'subjects/math/u4.cases-drill-2.js', 'subjects/math/u4.cases-drill-3.js', 'subjects/math/u4.cases-drill-4.js',
  'subjects/math/u4.cases-drill-5.js', 'subjects/math/u4.cases-drill-6.js', 'subjects/math/u4.cases-drill-7.js', 'subjects/math/u4.cases-drill-8.js',
  'subjects/math/u4.cases-return-1.js', 'subjects/math/u4.cases-return-2.js', 'subjects/math/u4.cases-return-3.js',
  'subjects/math/u6.unit.js', 'subjects/math/u6.cards-1.js', 'subjects/math/u6.cards-2.js', 'subjects/math/u6.cards-3.js',
  'subjects/math/u6.cards-4.js', 'subjects/math/u6.cards-5.js', 'subjects/math/u6.cards-solved-1.js', 'subjects/math/u6.cards-solved-2.js',
  'subjects/math/u6.cards-solved-3.js', 'subjects/math/u6.cases-teach-1.js', 'subjects/math/u6.cases-teach-2.js',
  'subjects/math/u6.cases-check-1.js', 'subjects/math/u6.cases-check-2.js', 'subjects/math/u6.cases-drill-1.js', 'subjects/math/u6.cases-drill-2.js',
  'subjects/math/u6.cases-drill-3.js', 'subjects/math/u6.cases-drill-4.js', 'subjects/math/u6.cases-drill-5.js', 'subjects/math/u6.cases-drill-6.js',
  'subjects/math/u6.cases-drill-7.js', 'subjects/math/u6.cases-drill-8.js', 'subjects/math/u6.cases-drill-9.js', 'subjects/math/u6.cases-drill-10.js',
  'subjects/math/u6.cases-return-1.js', 'subjects/math/u6.cases-return-2.js', 'subjects/math/u6.cases-return-3.js', 'subjects/math/specimens.js',
'subjects/stats/subject.js', 'subjects/stats/key.js',
  'subjects/stats/u1.unit.js', 'subjects/stats/u1.cards-1.js', 'subjects/stats/u1.cards-2.js', 'subjects/stats/u1.cards-3.js', 'subjects/stats/u1.cards-4.js', 'subjects/stats/u1.cards-5.js', 'subjects/stats/u1.cards-6.js', 'subjects/stats/u1.cards-7.js',
  'subjects/stats/u1.cases-teach-1.js', 'subjects/stats/u1.cases-teach-2.js', 'subjects/stats/u1.cases-teach-3.js', 'subjects/stats/u1.cases-teach-4.js', 'subjects/stats/u1.cases-teach-5.js',
  'subjects/stats/u1.cases-drill-1.js', 'subjects/stats/u1.cases-drill-2.js', 'subjects/stats/u1.cases-drill-3.js', 'subjects/stats/u1.cases-drill-4.js',
  'subjects/stats/u1.cases-return-1.js', 'subjects/stats/u1.cases-return-2.js',
  'subjects/stats/u3.unit.js', 'subjects/stats/u3.cards-1.js', 'subjects/stats/u3.cards-2.js', 'subjects/stats/u3.cards-3.js', 'subjects/stats/u3.cards-4.js', 'subjects/stats/u3.cards-5.js', 'subjects/stats/u3.cards-6.js',
  'subjects/stats/u3.cases-teach-1.js', 'subjects/stats/u3.cases-teach-2.js', 'subjects/stats/u3.cases-teach-3.js', 'subjects/stats/u3.cases-teach-4.js',
  'subjects/stats/u3.cases-drill-1.js', 'subjects/stats/u3.cases-drill-2.js', 'subjects/stats/u3.cases-drill-3.js', 'subjects/stats/u3.cases-drill-4.js',
  'subjects/stats/u3.cases-return-1.js', 'subjects/stats/u3.cases-return-2.js',
  'subjects/stats/u6.unit.js', 'subjects/stats/u6.cards-1.js', 'subjects/stats/u6.cards-2.js', 'subjects/stats/u6.cards-3.js', 'subjects/stats/u6.cards-4.js', 'subjects/stats/u6.cards-5.js', 'subjects/stats/u6.cards-6.js',
  'subjects/stats/u6.cases-teach-1.js', 'subjects/stats/u6.cases-teach-2.js', 'subjects/stats/u6.cases-teach-3.js',
  'subjects/stats/u6.cases-drill-1.js', 'subjects/stats/u6.cases-drill-2.js', 'subjects/stats/u6.cases-drill-3.js', 'subjects/stats/u6.cases-drill-4.js',
  'subjects/stats/u6.cases-return-1.js', 'subjects/stats/u6.cases-return-2.js',
  'subjects/stats/u4.unit.js', 'subjects/stats/u4.cards-1.js', 'subjects/stats/u4.cards-2.js', 'subjects/stats/u4.cards-3.js', 'subjects/stats/u4.cards-4.js', 'subjects/stats/u4.cards-5.js', 'subjects/stats/u4.cards-6.js',
  'subjects/stats/u4.cases-teach-1.js', 'subjects/stats/u4.cases-teach-2.js', 'subjects/stats/u4.cases-teach-3.js',
  'subjects/stats/u4.cases-drill-1.js', 'subjects/stats/u4.cases-drill-2.js', 'subjects/stats/u4.cases-drill-3.js', 'subjects/stats/u4.cases-drill-4.js', 'subjects/stats/u4.cases-drill-5.js',
  'subjects/stats/u4.cases-return-1.js', 'subjects/stats/u4.cases-return-2.js',
  'subjects/stats/u5.unit.js', 'subjects/stats/u5.cards-1.js', 'subjects/stats/u5.cards-2.js', 'subjects/stats/u5.cards-3.js', 'subjects/stats/u5.cards-4.js', 'subjects/stats/u5.cards-5.js',
  'subjects/stats/u5.cases-teach-1.js', 'subjects/stats/u5.cases-teach-2.js', 'subjects/stats/u5.cases-teach-3.js',
  'subjects/stats/u5.cases-drill-1.js', 'subjects/stats/u5.cases-drill-2.js', 'subjects/stats/u5.cases-drill-3.js', 'subjects/stats/u5.cases-drill-4.js',
  'subjects/stats/u5.cases-return-1.js', 'subjects/stats/u5.cases-return-2.js',
  'subjects/stats/u2.unit.js', 'subjects/stats/u2.cards-1.js', 'subjects/stats/u2.cards-2.js', 'subjects/stats/u2.cards-3.js', 'subjects/stats/u2.cards-4.js', 'subjects/stats/u2.cards-5.js', 'subjects/stats/u2.cards-6.js',
  'subjects/stats/u2.cases-teach-1.js', 'subjects/stats/u2.cases-teach-2.js',
  'subjects/stats/u2.cases-drill-1.js', 'subjects/stats/u2.cases-drill-2.js', 'subjects/stats/u2.cases-drill-3.js', 'subjects/stats/u2.cases-drill-4.js',
  'subjects/stats/u2.cases-return-1.js', 'subjects/stats/u2.cases-return-2.js',
  'subjects/stats/specimens.js',
  'subjects/scams/subject.js', 'subjects/scams/key.js',
  'subjects/scams/u1.unit.js', 'subjects/scams/u1.cards-1.js', 'subjects/scams/u1.cards-2.js', 'subjects/scams/u1.cards-3.js', 'subjects/scams/u1.cards-4.js', 'subjects/scams/u1.cards-5.js', 'subjects/scams/u1.cards-6.js',
  'subjects/scams/u1.cases-teach-1.js', 'subjects/scams/u1.cases-teach-2.js', 'subjects/scams/u1.cases-teach-3.js',
  'subjects/scams/u1.cases-drill-1.js', 'subjects/scams/u1.cases-drill-2.js', 'subjects/scams/u1.cases-drill-3.js',
  'subjects/scams/u1.cases-return-1.js', 'subjects/scams/u1.cases-return-2.js', 'subjects/scams/u1.cases-return-3.js',
  'subjects/scams/u4.unit.js', 'subjects/scams/u4.cards-1.js', 'subjects/scams/u4.cards-2.js', 'subjects/scams/u4.cards-3.js', 'subjects/scams/u4.cards-4.js', 'subjects/scams/u4.cards-5.js', 'subjects/scams/u4.cards-6.js', 'subjects/scams/u4.cards-7.js', 'subjects/scams/u4.cards-8.js',
  'subjects/scams/u4.cases-teach-1.js', 'subjects/scams/u4.cases-teach-2.js', 'subjects/scams/u4.cases-teach-3.js', 'subjects/scams/u4.cases-teach-4.js',
  'subjects/scams/u4.cases-drill-1.js', 'subjects/scams/u4.cases-drill-2.js', 'subjects/scams/u4.cases-drill-3.js', 'subjects/scams/u4.cases-drill-4.js', 'subjects/scams/u4.cases-drill-5.js', 'subjects/scams/u4.cases-drill-6.js', 'subjects/scams/u4.cases-drill-7.js',
  'subjects/scams/u4.cases-return-1.js', 'subjects/scams/u4.cases-return-2.js', 'subjects/scams/u4.cases-return-3.js',
  'subjects/scams/u3.unit.js', 'subjects/scams/u3.cards-1.js', 'subjects/scams/u3.cards-2.js', 'subjects/scams/u3.cards-3.js', 'subjects/scams/u3.cards-4.js', 'subjects/scams/u3.cards-5.js', 'subjects/scams/u3.cards-6.js',
  'subjects/scams/u3.cases-teach-1.js', 'subjects/scams/u3.cases-teach-2.js',
  'subjects/scams/u3.cases-drill-1.js', 'subjects/scams/u3.cases-drill-2.js', 'subjects/scams/u3.cases-drill-3.js', 'subjects/scams/u3.cases-drill-4.js',
  'subjects/scams/u3.cases-return-1.js', 'subjects/scams/u3.cases-return-2.js',
  'subjects/scams/u5.unit.js', 'subjects/scams/u5.cards-1.js', 'subjects/scams/u5.cards-2.js', 'subjects/scams/u5.cards-3.js', 'subjects/scams/u5.cards-4.js', 'subjects/scams/u5.cards-5.js',
  'subjects/scams/u5.cases-teach-1.js', 'subjects/scams/u5.cases-teach-2.js', 'subjects/scams/u5.cases-teach-3.js',
  'subjects/scams/u5.cases-drill-1.js', 'subjects/scams/u5.cases-drill-2.js', 'subjects/scams/u5.cases-drill-3.js', 'subjects/scams/u5.cases-drill-4.js', 'subjects/scams/u5.cases-drill-5.js',
  'subjects/scams/u5.cases-return-1.js', 'subjects/scams/u5.cases-return-2.js',
  'subjects/scams/u2.unit.js', 'subjects/scams/u2.cards-1.js', 'subjects/scams/u2.cards-2.js', 'subjects/scams/u2.cards-3.js', 'subjects/scams/u2.cards-4.js', 'subjects/scams/u2.cards-5.js',
  'subjects/scams/u2.cases-teach-1.js', 'subjects/scams/u2.cases-teach-2.js',
  'subjects/scams/u2.cases-drill-1.js', 'subjects/scams/u2.cases-drill-2.js', 'subjects/scams/u2.cases-drill-3.js', 'subjects/scams/u2.cases-drill-4.js', 'subjects/scams/u2.cases-drill-5.js',
  'subjects/scams/u2.cases-return-1.js', 'subjects/scams/u2.cases-return-2.js',
  'subjects/scams/u6.unit.js', 'subjects/scams/u6.cards-1.js', 'subjects/scams/u6.cards-2.js', 'subjects/scams/u6.cards-3.js', 'subjects/scams/u6.cards-4.js', 'subjects/scams/u6.cases-1.js',
  'subjects/scams/specimens.js',
  'subjects/wealth/subject.js', 'subjects/wealth/key.js',
  'subjects/wealth/u1.unit.js', 'subjects/wealth/u1.cards-1.js', 'subjects/wealth/u1.cards-2.js', 'subjects/wealth/u1.cards-3.js', 'subjects/wealth/u1.cards-4.js', 'subjects/wealth/u1.cards-5.js', 'subjects/wealth/u1.cards-6.js',
  'subjects/wealth/u1.cases-teach-1.js', 'subjects/wealth/u1.cases-teach-2.js', 'subjects/wealth/u1.cases-teach-3.js',
  'subjects/wealth/u1.cases-drill-1.js', 'subjects/wealth/u1.cases-drill-2.js', 'subjects/wealth/u1.cases-drill-3.js',
  'subjects/wealth/u1.cases-return-1.js', 'subjects/wealth/u1.cases-return-2.js',
  'subjects/wealth/u3.unit.js', 'subjects/wealth/u3.cards-1.js', 'subjects/wealth/u3.cards-2.js', 'subjects/wealth/u3.cards-3.js', 'subjects/wealth/u3.cards-4.js', 'subjects/wealth/u3.cards-5.js', 'subjects/wealth/u3.cards-6.js', 'subjects/wealth/u3.cards-7.js', 'subjects/wealth/u3.cards-8.js', 'subjects/wealth/u3.cases-teach-1.js', 'subjects/wealth/u3.cases-teach-2.js', 'subjects/wealth/u3.cases-teach-3.js', 'subjects/wealth/u3.cases-teach-4.js', 'subjects/wealth/u3.cases-drill-1.js', 'subjects/wealth/u3.cases-drill-2.js', 'subjects/wealth/u3.cases-drill-3.js', 'subjects/wealth/u3.cases-drill-4.js', 'subjects/wealth/u3.cases-return-1.js', 'subjects/wealth/u3.cases-return-2.js', 'subjects/wealth/u3.cases-return-3.js', 'subjects/wealth/u3.cases-return-4.js',
  'subjects/wealth/u4.unit.js', 'subjects/wealth/u4.cards-1.js', 'subjects/wealth/u4.cards-2.js', 'subjects/wealth/u4.cards-3.js', 'subjects/wealth/u4.cards-4.js', 'subjects/wealth/u4.cards-5.js', 'subjects/wealth/u4.cards-6.js',
  'subjects/wealth/u4.cases-teach-1.js', 'subjects/wealth/u4.cases-teach-2.js',
  'subjects/wealth/u4.cases-drill-1.js', 'subjects/wealth/u4.cases-drill-2.js', 'subjects/wealth/u4.cases-drill-3.js', 'subjects/wealth/u4.cases-drill-4.js', 'subjects/wealth/u4.cases-drill-5.js',
  'subjects/wealth/u4.cases-return-1.js', 'subjects/wealth/u4.cases-return-2.js',
  'subjects/wealth/u2.unit.js', 'subjects/wealth/u2.cards-1.js', 'subjects/wealth/u2.cards-2.js', 'subjects/wealth/u2.cards-3.js', 'subjects/wealth/u2.cards-4.js', 'subjects/wealth/u2.cards-5.js', 'subjects/wealth/u2.cards-6.js', 'subjects/wealth/u2.cards-7.js', 'subjects/wealth/u2.cards-8.js',
  'subjects/wealth/u2.cases-teach-1.js', 'subjects/wealth/u2.cases-teach-2.js', 'subjects/wealth/u2.cases-teach-3.js',
  'subjects/wealth/u2.cases-drill-1.js', 'subjects/wealth/u2.cases-drill-2.js', 'subjects/wealth/u2.cases-drill-3.js', 'subjects/wealth/u2.cases-drill-4.js',
  'subjects/wealth/u2.cases-return-1.js', 'subjects/wealth/u2.cases-return-2.js',
  'subjects/wealth/u5.unit.js', 'subjects/wealth/u5.cards-1.js', 'subjects/wealth/u5.cards-2.js', 'subjects/wealth/u5.cards-3.js', 'subjects/wealth/u5.cards-4.js', 'subjects/wealth/u5.cards-5.js', 'subjects/wealth/u5.cards-6.js',
  'subjects/wealth/u5.cases-teach-1.js', 'subjects/wealth/u5.cases-teach-2.js', 'subjects/wealth/u5.cases-teach-3.js', 'subjects/wealth/u5.cases-teach-4.js',
  'subjects/wealth/u5.cases-drill-1.js', 'subjects/wealth/u5.cases-drill-2.js', 'subjects/wealth/u5.cases-drill-3.js', 'subjects/wealth/u5.cases-drill-4.js',
  'subjects/wealth/u5.cases-return-1.js', 'subjects/wealth/u5.cases-return-2.js', 'subjects/wealth/u5.cases-return-3.js',
  'subjects/wealth/specimens.js',
  'subjects/civics/subject.js', 'subjects/civics/key.js',
  'subjects/civics/u1.unit.js', 'subjects/civics/u1.cards-1.js', 'subjects/civics/u1.cards-2.js', 'subjects/civics/u1.cards-3.js',
  'subjects/civics/u1.cards-4.js', 'subjects/civics/u1.cards-5.js', 'subjects/civics/u1.cases-teach-1.js', 'subjects/civics/u1.cases-teach-2.js',
  'subjects/civics/u1.cases-drill-1.js', 'subjects/civics/u1.cases-drill-2.js', 'subjects/civics/u1.cases-drill-3.js',
  'subjects/civics/u1.cases-return-1.js',
  'subjects/civics/u9.unit.js', 'subjects/civics/u9.cards-1.js', 'subjects/civics/u9.cards-2.js', 'subjects/civics/u9.cards-3.js',
  'subjects/civics/u9.cards-4.js', 'subjects/civics/u9.cards-5.js', 'subjects/civics/u9.cards-6.js', 'subjects/civics/u9.cases-1.js',
  'subjects/civics/u10.unit.js', 'subjects/civics/u10.cards-1.js', 'subjects/civics/u10.cards-2.js', 'subjects/civics/u10.cards-3.js',
  'subjects/civics/u10.cards-4.js', 'subjects/civics/u10.cards-5.js', 'subjects/civics/u10.cards-6.js', 'subjects/civics/u10.cases-1.js',
  'subjects/civics/u7.unit.js', 'subjects/civics/u7.cards-1.js', 'subjects/civics/u7.cards-2.js', 'subjects/civics/u7.cards-3.js',
  'subjects/civics/u7.cases-1.js',
  'subjects/civics/u8.unit.js', 'subjects/civics/u8.cards-1.js', 'subjects/civics/u8.cards-2.js', 'subjects/civics/u8.cards-3.js',
  'subjects/civics/u8.cards-4.js', 'subjects/civics/u8.cases-1.js',
  'subjects/civics/u2.unit.js', 'subjects/civics/u2.cards-1.js', 'subjects/civics/u2.cards-2.js', 'subjects/civics/u2.cards-3.js',
  'subjects/civics/u2.cards-4.js', 'subjects/civics/u2.cards-5.js', 'subjects/civics/u2.cards-6.js', 'subjects/civics/u2.cases-1.js',
  'subjects/civics/u4.unit.js', 'subjects/civics/u4.cards-1.js', 'subjects/civics/u4.cards-2.js', 'subjects/civics/u4.cards-3.js',
  'subjects/civics/u4.cards-4.js', 'subjects/civics/u4.cards-5.js', 'subjects/civics/u4.cards-6.js',
  'subjects/civics/u4.cases-teach-1.js', 'subjects/civics/u4.cases-teach-2.js', 'subjects/civics/u4.cases-teach-3.js', 'subjects/civics/u4.cases-teach-4.js',
  'subjects/civics/u4.cases-drill-1.js', 'subjects/civics/u4.cases-drill-2.js', 'subjects/civics/u4.cases-drill-3.js', 'subjects/civics/u4.cases-drill-4.js',
  'subjects/civics/u4.cases-return-1.js', 'subjects/civics/u4.cases-return-2.js',
  'subjects/civics/u6.unit.js', 'subjects/civics/u6.cards-1.js', 'subjects/civics/u6.cards-2.js', 'subjects/civics/u6.cards-3.js',
  'subjects/civics/u6.cards-4.js', 'subjects/civics/u6.cards-5.js', 'subjects/civics/u6.cards-6.js',
  'subjects/civics/u6.cases-teach-1.js', 'subjects/civics/u6.cases-teach-2.js', 'subjects/civics/u6.cases-teach-3.js',
  'subjects/civics/u6.cases-drill-1.js', 'subjects/civics/u6.cases-drill-2.js', 'subjects/civics/u6.cases-drill-3.js', 'subjects/civics/u6.cases-drill-4.js',
  'subjects/civics/u6.cases-return-1.js', 'subjects/civics/u6.cases-return-2.js',
  'subjects/civics/u5.unit.js', 'subjects/civics/u5.cards-1.js', 'subjects/civics/u5.cards-2.js', 'subjects/civics/u5.cards-3.js', 'subjects/civics/u5.cards-4.js', 'subjects/civics/u5.cards-5.js', 'subjects/civics/u5.cases-teach-1.js', 'subjects/civics/u5.cases-teach-2.js', 'subjects/civics/u5.cases-teach-3.js', 'subjects/civics/u5.cases-drill-1.js', 'subjects/civics/u5.cases-drill-2.js', 'subjects/civics/u5.cases-drill-3.js', 'subjects/civics/u5.cases-return-1.js', 'subjects/civics/u5.cases-return-2.js',
  'subjects/civics/u3.unit.js', 'subjects/civics/u3.cards-1.js', 'subjects/civics/u3.cards-2.js', 'subjects/civics/u3.cards-3.js',
  'subjects/civics/u3.cards-4.js', 'subjects/civics/u3.cards-5.js', 'subjects/civics/u3.cards-6.js',
  'subjects/civics/u3.cases-teach-1.js', 'subjects/civics/u3.cases-teach-2.js', 'subjects/civics/u3.cases-teach-3.js',
  'subjects/civics/u3.cases-drill-1.js', 'subjects/civics/u3.cases-drill-2.js', 'subjects/civics/u3.cases-drill-3.js',
  'subjects/civics/u3.cases-return-1.js', 'subjects/civics/u3.cases-return-2.js',
  'subjects/civics/specimens.js',
  'app/lessons/view.js',
  'app/lessons/records.js', 'app/state.js', 'app/shell.js', 'app/library.js', 'app/subject.js',
  'app/lesson.js', 'app/drills.js', 'app/reference.js', 'app/mixed.js', 'app/progress.js', 'app/search.js',
  'app/lessons/cards.js', 'app/lessons/ask.js', 'app/lessons/drill.js', 'app/lessons/taught.js', 'app/lessons/unit-flow.js', 'app/lessons/unit.js',
  'app/lessons/key-map.js', 'app/lessons/key-reference.js', 'app/lessons/practice.js', 'app/lessons/returns.js', 'app/lessons/review-first.js', 'app/lessons/determination.js', 'app/lessons/mixed-new.js', 'app/lessons/progress-new.js', 'app/lessons/search-new.js',
  'app/init.js',
  'fonts/fonts.css',
  'fonts/bricolage-grotesque-latin.woff2', 'fonts/literata-latin.woff2', 'fonts/jetbrains-mono-latin.woff2',
  'icons/favicon.svg', 'icons/favicon-32.png', 'icons/apple-touch-icon.png',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cacheKey: the page is always stored under './' whatever URL it was opened at.
async function networkFirst(request, cacheKey) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response.ok) await cache.put(cacheKey, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
    throw err;
  }
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(event.request);
  const refresh = fetch(event.request)
    .then(response => { if (response.ok) return cache.put(event.request, response.clone()).then(() => response); return response; });
  if (cached) {
    event.waitUntil(refresh.catch(() => {}));
    return cached;
  }
  return refresh;
}

const isAppCode = url => /\.(js|css)$/.test(url.pathname) && !url.pathname.includes('/fonts/');

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './'));
    return;
  }
  if (isAppCode(url)) {
    event.respondWith(networkFirst(request, request));
    return;
  }
  event.respondWith(staleWhileRevalidate(event));
});
