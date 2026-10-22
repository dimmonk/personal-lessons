// Confirmation review 6's scoop check (its scratch script c6/scoop.mjs): a match that starts 150 to 300 hundredths under and rises onto the
// note over 150 to 400 ms, with a vibrato of up to +-50, a wander, jitter, 3% dropped readings and 3% slips, ported as written. The review
// counted how often it was called a slide; the port judges each try by lesson 3's definition, as the app reads it: a note "slid into it"
// when where it started was more than a shade off and it went on to the note. Where it started is read by the app itself from the same
// scoop without its noise (no vibrato, wander, jitter, dropped readings or slips) at the try's own reading times: the port checks that the
// noise does not change the call. A try whose start was past a shade plus MARGIN must be a slide; one within a shade less MARGIN must be on the note
// (`sat`); the rest sit on the line and either is right.
import { rate, tries } from '../harness.mjs';
import { A, reseed, gauss, rnd } from './h.mjs';
const MARGIN = 50, SHADE = 100;   // a start is read over its first 0.15 s, two to four readings, so a vibrato of up to +-50 is not averaged out of it
// the steepest scoop, 300 in 150 ms: its start is read from two or three readings at 66.7 ms, all within the scoop, so the vibrato and a
// lost reading move it by more than the margin; such a quick scoop sits on the line between scooping onto the note and sliding into it
const STEEP_FLOOR = 70, STEEP_WHY = 'a scoop of 300 in 150 ms is read from two or three readings, all inside the scoop: a vibrato of up to +-50 or one lost reading moves where it started past the margin, and a scoop that quick sits on the line between landing on the note and sliding into it';
const U=(a,b)=>a+rnd()*(b-a); const gap = cad => cad === 'c50' ? 50 : cad === 'c67' ? 1000/15 : (rnd() < 0.5 ? 50 : 1000/15);
const a = { id:'sing', kind:'sing', task:'match', cents:50 }, p = A.singPlan(a, { low:'A2', high:'A4' }, 5);
function trial(cad, depth, dur, vibMax){ const out=[]; const on=U(150,350), vib={a:U(0,vibMax),f:U(5,7),ph:U(0,6.28)}; let wv=0; const clean=[];
  for(let t=U(0,50); t<p.totalMs; t+=gap(cad)){ if(t<on||t>1850) continue; const rel=t-on; wv=0.9*wv+Math.sqrt(.19)*8*gauss()/0.707;
    let c=(rel<dur? depth*(1-rel/dur):0)+vib.a*Math.sin(vib.ph+2*Math.PI*vib.f*t/1000)+wv+8*gauss()/0.707;
    let hz=A.noteToHz(p.windows[0].note)*2**(c/1200); if(rnd()<.03) hz=null; else if(rnd()<.03) hz*=[1.5,2,.5][Math.floor(rnd()*3)];
    clean.push({ t: 0.1+t/1000, hz: A.noteToHz(p.windows[0].note)*2**((rel<dur? depth*(1-rel/dur):0)/1200), level: .2 }); out.push({t:0.1+t/1000,hz,level:.2}); }
  const ans=A.singAnswer(p,out,0.1); const j=A.singJudge(a,ans); return { id: j.last.id, start: A.singAnswer(p, clean, 0.1).start }; }
for (const depth of [-150,-200,-300]) for (const dur of [150,250,400]) for (const cad of ['c50','c67','mix']) {
  reseed(3); const c = { slid: 0, slidRight: 0, sat: 0, satRight: 0 }; const N = tries(300);
  for(let i=0;i<N;i++){ const r=trial(cad,depth,dur,50), want = Math.abs(r.start) > SHADE + MARGIN ? 'slid' : Math.abs(r.start) < SHADE - MARGIN ? 'sat' : null;
    if(want){ c[want]++; if(r.id===want) c[want + 'Right']++; } }
  const steep = depth === -300 && dur === 150;
  if (c.slid) rate(`scoop ${depth} over ${dur} ms, ${cad}: started past a shade, a slide (${c.slid} tries)`, c.slidRight, c.slid, steep ? STEEP_FLOOR : 95, steep ? STEEP_WHY : null);
  if (c.sat) rate(`scoop ${depth} over ${dur} ms, ${cad}: started within a shade, on the note (${c.sat} tries)`, c.satRight, c.sat, 95); }
