// Confirmation review 3's voice check (its scratch script c3/voice.mjs), ported as written: a synthetic sung D4 with a breathy noise of
// 0.35 to 0.5 of its level, or just above the quietest level the pitch finder takes (PITCH_RMS_MIN 0.005), is heard clearly; the review's
// case at exactly that level sits on the line and is not held to a rate.
import { rate, note } from '../harness.mjs';
import { rnd, gauss, reseed } from './h.mjs';
import { readFile } from 'node:fs/promises'; import vm from 'node:vm';
const src = (await Promise.all(['audio-notes.js','audio-pitch.js'].map(f => readFile(new URL('../../../public/app/lessons/'+f, import.meta.url),'utf8')))).join('\n') + '\nglobalThis.__a = { detectPitch, noteToHz };';
const ctx = vm.createContext({ console }); vm.runInContext(src, ctx); const A = ctx.__a;
const SR = 48000, f0 = A.noteToHz('D4');
function frames(seconds, { rms = 0.02, snrDb = 20, vibHz = 0, vibC = 0, jitterC = 10, breath = 0 }){
  const n = Math.floor(seconds * SR), x = new Float32Array(n); let ph = 0, slow = 0;
  for (let i = 0; i < n; i++) { if (i % 480 === 0) slow = 0.9*slow + jitterC*0.3*gauss();
    const c = slow + vibC*Math.sin(2*Math.PI*vibHz*i/SR); ph += 2*Math.PI*f0*2**(c/1200)/SR;
    x[i] = Math.sin(ph) + 0.25*Math.sin(2*ph) + 0.08*Math.sin(3*ph) + 0.03*Math.sin(4*ph); }
  const r = Math.sqrt(x.reduce((s,v)=>s+v*v,0)/n), noise = rms / 10**(snrDb/20);
  for (let i = 0; i < n; i++) x[i] = x[i]*rms/r + noise*gauss()/1 + breath*rms*gauss();
  return x;
}
for (const cfg of [{snrDb:20,breath:0.35},{snrDb:20,breath:0.4},{snrDb:20,breath:0.45},{snrDb:20,breath:0.5},{snrDb:40,rms:0.0052},{snrDb:40,rms:0.005}]) {
  reseed(5); const x = frames(4, cfg); let nul = 0, tot = 0;
  for (let s = 0; s + 4096 <= x.length; s += SR*0.05) { const r = A.detectPitch(x.subarray(s, s+4096), SR); tot++; if (!r) nul++; }
  if (cfg.rms === 0.005) note(`${JSON.stringify(cfg)}: clear ${tot - nul}/${tot} (on the line)`);
  else rate(`${JSON.stringify(cfg)}: readings clear`, tot - nul, tot, 95);
}
