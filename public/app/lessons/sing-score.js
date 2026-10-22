/* ===================== SINGING: SCORING A TRY (pure) ===================== */
// Lesson standard 3.8 (items 3 and 4) and 3.8. The microphone gives a reading about every 50 ms: { t, hz, level }, where t is the sound
// system's clock in seconds, hz is the pitch found (null when the sound was not clear) and level is how loud it was. These functions turn
// the readings of a try into the numbers it stores. Nothing here touches the page or the sound system.
// Needs medianOf (audio-pitch.js), centsBetween, foldCents, hzToMidi, noteToHz (audio-notes.js) and the SING_ constants (sing-task.js).

const SING_READ_MS = 50;              // readings come about this often
const SING_MIN_READINGS = 5;          // a note needs at least this many clear readings (a quarter of a second) to count as sung
const SING_MIN_LAST_READINGS = 3;     // and a slide's last stretch at least this many
const SING_MIDDLE_SHARE = 0.6;        // a note is judged on the middle of its readings: the attack and the release are left out
const SING_VOICED_SHARE = 0.3;        // a reading with no clear pitch but at least this share of the note's loudness is the voice still sounding
const SING_RUN_GAP_S = 0.28;          // readings further apart than this are not one unbroken stretch: longer than three readings lost in a
                                      // row at 66.7 ms (0.27 s), shorter than a breath (0.3 s or more; judgement call)
const SING_CENTER_S = 0.1;            // a note's track is judged by its center: the mean of its cleaned readings within this much either side
                                      // (at least one either side), so a wobble of five to seven a second averages to within about 15 cents of
                                      // its middle whether readings come every 50 ms or every 66.7 ms, while a slip of 0.2 s still shows
                                      // (judgement call; no source in the research note)
const SING_HOLD_CENTER_S = 0.2;       // whether a held note stayed on, wandered or where it ended is judged on a longer center, the mean over
                                      // 0.2 s either side: 0.4 s holds two whole cycles of a wobble at five a second and more at six or seven, so
                                      // a natural vibrato of +-50 averages to within about 6 cents of its middle (judgement call). A slip shorter
                                      // than about 0.3 s is then judged by that center too
const SING_GLITCH_CENTS = 300;        // a reading this far from the median of its neighbours is a slip of the pitch finder (a fifth or an
const SING_GLITCH_NEIGHBORS = 3;      // octave), not the voice, and is left out; neighbours are counted in readings, so the cleaning is the
                                      // same at any reading rate (judgement call)
const SING_RELEASE_S = 0.25;          // the release: the last moment before the voice stops (at a breath, or at the end), where the note falls
                                      // or rises as the air or the voice gives out; it is part of stopping, never wandering, and where a note
                                      // ended is read before it (judgement call: beginners' fall-offs last about 0.1 to 0.3 s)
const SING_STEADY_READINGS = 6;       // a steady note in a slide lasts at least this many readings (0.3 s) ...
const SING_STEADY_HALFSTEPS = 0.5;    // ... staying within this far of its middle
const SING_START_S = 0.15;             // how a note starts: the middle of its track over its first 0.15 s, short enough that a scoop of a quarter
                                      // of a second is still seen starting off (research note V23, judgement call)
const SING_LAND_S = [0.5, 0.75];      // where a note landed: its track over this stretch after its first reading (judgement call: a slide arrives
                                      // within half a second; lesson 3's example scoop takes 0.4 s)
const SING_EDGE_S = 0.25;             // how a held note ends: the middle of its track over its last quarter of a second before the release
const SING_EDGE_MIN = 3;              // each from at least this many readings, so it is the same at any reading rate

const clearOnly = list => list.filter(r => r.hz !== null);
// the middle share of a list in time order, at least one member
function middleOf(list, share = SING_MIDDLE_SHARE){
  const cut = Math.floor(list.length * (1 - share) / 2);
  return list.slice(cut, list.length - cut);
}
// how far a reading is from the target, in cents, to the octave nearest the target
// a reading of a sung run (singRunParts) is already moved into the run's own octave and is not folded again, so a note sung more than half
// an octave off (a big jump not taken) keeps its side
const readingCents = (reading, targetHz) => reading.inRun ? centsBetween(reading.hz, targetHz) : foldCents(centsBetween(reading.hz, targetHz));

// The error of a note, in cents (whole numbers): the middle of the middle 60% of the clear readings, each folded to the octave nearest
// the target. null when too few readings were clear.
function singNoteCents(window, targetHz, least = SING_MIN_READINGS){
  if(clearOnly(window).length < least) return null;
  // the center of the note: of the middle of its cleaned readings in time, the mean of their middle half in value (an interquartile mean), so
  // a vibrato counts by its middle, not by where its swing happened to stop, and a tail of a scoop or a fall does not pull it; a note with too
  // few clean readings falls back on the median
  const mid = middleOf(singCleaned(window, targetHz)).map(r => r.c).sort((x, y) => x - y);
  if(mid.length < least) return Math.round(medianOf(middleOf(clearOnly(window)).map(r => readingCents(r, targetHz))));
  const q = mid.slice(Math.floor(mid.length / 4), mid.length - Math.floor(mid.length / 4));
  return Math.round(q.reduce((n, c) => n + c, 0) / q.length);
}
// The track of a stretch, cleaned and centered: [{ t, c }] in cents off the target. Cleaning leaves out a clear reading that sits more than
// SING_GLITCH_CENTS from the median of itself and its SING_GLITCH_NEIGHBORS neighbours each side (counted in readings, so it holds at any reading rate);
// centering replaces each reading by the mean of the cleaned readings within SING_CENTER_S either side, and at least one either side.
function singCleaned(window, targetHz){
  const raw = clearOnly(window).map(r => ({ t: r.t, c: readingCents(r, targetHz) }));
  const span = 2 * SING_GLITCH_NEIGHBORS + 1;   // the same number of readings at the edges of the stretch too: the window slides inward
  return raw.filter((r, i) => { const lo = Math.max(0, Math.min(i - SING_GLITCH_NEIGHBORS, raw.length - span));
    return Math.abs(r.c - medianOf(raw.slice(lo, lo + span).map(x => x.c))) <= SING_GLITCH_CENTS; });
}
// Whether the sound stopped between two clear readings: somewhere between them there is a hole longer than SING_RUN_GAP_S with no sounding
// reading (a reading whose pitch was unclear but whose loudness was at least SING_VOICED_SHARE of the note's own is the voice still sounding,
// a dropped reading of the pitch finder, not a stop). Returns a test (a, b) => true when the sound stopped between the clear readings at a and b.
function singStopTest(window){
  const clear = clearOnly(window), floor = clear.length ? SING_VOICED_SHARE * medianOf(clear.map(r => r.level || 0)) : 0;
  const sounding = window.filter(r => r.hz !== null || (floor > 0 && (r.level || 0) >= floor)).map(r => r.t);
  // stopped: somewhere between them the sound (clear or voiced) left a hole longer than SING_RUN_GAP_S
  return (a, b) => { if(b - a <= SING_RUN_GAP_S) return false;
    let lo = 0, hi = sounding.length;
    while(lo < hi){ const mid = (lo + hi) >> 1; if(sounding[mid] <= a) lo = mid + 1; else hi = mid; }
    let prev = a;
    for(let k = lo; k < sounding.length && sounding[k] < b; k++){ if(sounding[k] - prev > SING_RUN_GAP_S) return true; prev = sounding[k]; }
    return b - prev > SING_RUN_GAP_S; };
}
function singCentered(window, targetHz, half = SING_CENTER_S){
  const clean = singCleaned(window, targetHz), stopped = singStopTest(window);
  // the center never reaches across a stop in the sound (a breath, the end): each side of a stop is its own stretch
  const gaps = clean.map((r, k) => k > 0 && stopped(clean[k - 1].t, r.t)), gapBefore = k => k > 0 && gaps[k];
  return clean.map((r, i) => {
    let lo = i > 0 && !gapBefore(i) ? i - 1 : i, hi = i < clean.length - 1 && !gapBefore(i + 1) ? i + 1 : i;
    while(lo > 0 && !gapBefore(lo) && r.t - clean[lo - 1].t <= half + 1e-9) lo--;
    while(hi < clean.length - 1 && !gapBefore(hi + 1) && clean[hi + 1].t - r.t <= half + 1e-9) hi++;
    let sum = 0;
    for(let k = lo; k <= hi; k++) sum += clean[k].c;
    return { t: r.t, c: sum / (hi - lo + 1), stopBefore: gaps[i] };
  });
}
// How long the learner stayed on the note without a break, in ms: the longest run of clear readings all within the tolerance.
function singHoldMs(window, targetHz, tolerance){
  let best = 0, start = null, last = null;
  for(const r of singCentered(window, targetHz, SING_HOLD_CENTER_S)){
    if(Math.abs(r.c) > tolerance){ start = null; continue; }
    if(start === null || r.stopBefore) start = r.t;
    last = r.t;
    best = Math.max(best, Math.round((last - start) * 1000) + SING_READ_MS);
  }
  return best;
}
// How long a held note left the note, in ms: the time its center (singCentered) was off the note (outside the tolerance) after it was
// first on it, every excursion counted, except the release before each stop (a breath or the end: SING_RELEASE_S, and the center's reach). A start that is off before the note is first reached, the
// release, and a gap with no clear sound (a breath, a stop) are not leaving: so a hold whose sound stopped or broke (left 0) is told apart from
// one that slipped off the note and came back, however briefly (lesson 4).
function singLeftMs(window, targetHz, tolerance){
  const list = singCentered(window, targetHz, SING_HOLD_CENTER_S), on = list.map(r => Math.abs(r.c) <= tolerance), first = on.indexOf(true);
  // the release before every stop (each gap in clear sound, and the end), and the center's reach into it, are part of stopping
  const stops = list.filter((r, k) => k === list.length - 1 || list[k + 1].stopBefore).map(r => r.t);
  const releasing = t => stops.some(s => t <= s + 1e-9 && s - t < SING_RELEASE_S + SING_HOLD_CENTER_S);
  let total = 0;
  for(let i = first + 1; first >= 0 && i < list.length; i++) if(!on[i] && !releasing(list[i].t)) total += Math.min(SING_READ_MS, Math.round((list[i].t - list[i - 1].t) * 1000)) || SING_READ_MS;
  return total;
}
// how loud the learner sang, as the middle of the middle 60% of the levels of the clear readings; null when nothing was clear
function singLevel(window){
  const clear = clearOnly(window);
  return clear.length < SING_MIN_READINGS ? null : medianOf(middleOf(clear).map(r => r.level));
}

// The notes of a sung run (an interval, a tune), found where the voice actually sang them rather than in fixed slots: the voiced readings
// from the first window's start to the last window's end are aligned, in order, to the played notes, one stretch per note. Silence
// (unvoiced readings) is its own state between notes, never part of a note's cost or length, so a detached note and a legato one fit
// alike. Each stretch costs how far its readings sit from its note (up to SING_RUN_CAP each) and how far its length is from the played
// rhythm at the singer's own tempo and lag (SING_RUN_TEMPO, SING_RUN_LAG_S): so a tune sung in time, slower or faster, legato, detached or
// with a late start, is judged note by note. A note is left with no stretch ("Not heard") only when the voice was silent through most of
// the time the rhythm gives it; otherwise every note gets its own stretch, so a wrong note at its neighbour's pitch is still named. Falls
// back on the windows when too little was sung to split. Returns what windowReadings returns: [{ w, from, to, list }].
// All the weights below are judgement calls, measured in tests/sing-sim.mjs.
const SING_RUN_MIN = 5;                                   // the fewest clear readings in a note's stretch
const SING_RUN_CAP = 300;                                 // a reading costs how far it sits from its note, up to this
const SING_RUN_STEP_S = 0.15, SING_RUN_STILL = 150;       // a change of note: the middles of the 0.15 s before and after, the after holding still
const SING_RUN_STEP_LONG_S = 0.25, SING_RUN_STEP_CENTS = 70;   // a legato step: the middles of 0.25 s either side of a glide, this far apart
const SING_RUN_GLIDE_S = 0.3;                             // a note's leading glide from the note before is left out, up to this
const SING_RUN_TEMPO = [0.7, 1.6], SING_RUN_LAG_S = [-0.2, 0.8];   // the singer's tempo against the played one; how much later the later notes come
const SING_RUN_REACH_S = 1.2;                             // a note starts within this of where the rhythm puts it (a fit counts an onset a quarter of it away)
const SING_RUN_CANDIDATES = 6, SING_RUN_PICK = 0.08;      // the tempos and lags that fit the onsets best, at least this far apart in tempo
const SING_RUN_BAND_T = 0.15, SING_RUN_FLAT = 0.1;        // when the onsets do not decide: one tempo in each band this wide, fitting within this of the best
const SING_RUN_FIT_W = 5000;                              // what a second of onsets missed costs against the pitch
const SING_RUN_LENGTH = 20000, SING_RUN_BAND_S = 0.35;    // a note longer than played (beyond the band) costs this per second; shorter a quarter
const SING_RUN_PULL = 600, SING_RUN_SNAP = 3000;          // the run starts where the rhythm puts it; a stretch that starts at an onset gets this back
const SING_RUN_LAST_BAND_S = 0.3;                        // the held last note starts this near where the rhythm puts it
const SING_RUN_SILENT = 0.75, SING_RUN_SKIP = 300;        // a note is left out only in a silence this share of its time, at this cost
const SING_RUN_OFFSET_MIN = 10;                           // a common offset smaller than this is not taken out (the split is the same)

function singRunParts(plan, readings, startS){
  const fixed = windowReadings(plan, readings, startS), K = fixed.length;
  if(!plan.hear || plan.hear.length !== K) return fixed;
  const all = readings.filter(r => r.t >= fixed[0].from && r.t < fixed[K - 1].to);
  const hzs = fixed.map(({ w }) => noteToHz(w.note)), shift = singRunOctave(fixed, hzs);
  const inRun = all.map(r => ({ ...r, hz: r.hz === null ? null : r.hz * shift, inRun: true }));
  const clear = clearOnly(inRun);
  if(clear.length < K * SING_RUN_MIN) return fixed;
  // slips of the pitch finder out, as for any note (singCleaned keeps the readings in order; it is read against the first note, and a slip is
  // the same size against any)
  const kept = new Set(singCleaned(clear, hzs[0]).map(r => r.t)), track = clear.filter(r => kept.has(r.t)), m = track.length;
  if(m < K * SING_RUN_MIN) return fixed;
  // each reading against each note, once (cents, to the octave nearest each note), and the readings' times
  const times = Float64Array.from(track.map(r => r.t)), against = hzs.map(hz => Float64Array.from(track.map(r => readingCents(r, hz))));
  const quiet = singRunQuiet(inRun), onsets = singRunOnsets(quiet, times, against[0]);
  const run = { plan, K, m, times, against, quiet, isChange: onsets.isChange, end: fixed[K - 1].to, start: fixed[0].from, playedFrom: plan.hear[0].atMs,
    perReading: (times[m - 1] - times[0]) / Math.max(1, m - 1) || SING_READ_MS / 1000 };
  const tried = singRunTempos(run, onsets.changes);
  // the common offset (a whole tune sung a little sharp or flat, or drifting) is read from the best split against the true notes, then the
  // split is made again with it taken out: one offset for every tempo, never one fitted to each, which would let a split one note out of
  // step fit the wrong notes to each other. It is the middle of the notes' own middles (a pair: its first note's, where the singer started
  // on the note they heard), no further than a shade either way.
  const plain = singRunChoose(run, tried, 0);
  if(!plain) return fixed;
  const mids = plain.cuts.map(([i, j], k) => i < j ? medianOf(Array.from(against[k].subarray(i, j))) : null).filter(c => c !== null);
  const offset = Math.max(-SING_SHADE_CENTS, Math.min(SING_SHADE_CENTS, mids.length ? (K >= 3 ? medianOf(mids) : mids[0]) : 0));
  const result = Math.abs(offset) > SING_RUN_OFFSET_MIN ? singRunChoose(run, tried, offset) || plain : plain;
  return singRunTrimmed(fixed, result.cuts, track, inRun, hzs, plan.cents || SING_CENTS);
}
// The run is sung in one octave (any octave: a man and a woman sing the same tune): the octave in which its readings sit closest to the
// notes of the windows they fall in (each reading counted up to half an octave off, so the order of the notes decides, not a long note
// that happens to sit near another note an octave away). Returns the factor that moves every reading into it, so a note sung more than
// half an octave off keeps its side (the readings are marked `inRun` so they are not folded again note by note).
function singRunOctave(fixed, hzs){
  let octave = 0, octaveCost = Infinity;
  for(let o = -3; o <= 3; o++){
    const c = fixed.reduce((n, part, k) => clearOnly(part.list).reduce((m, r) => m + Math.min(600, Math.abs(centsBetween(r.hz, hzs[k] * 2 ** o))), n), 0);
    if(c < octaveCost){ octaveCost = c; octave = o; }
  }
  return 2 ** -octave;
}
// The silences of a run: where nothing sounded (no clear pitch and below SING_VOICED_SHARE of the run's loudness, or no reading at all).
// Returns { reonsets, silent, holes }: the clear readings where the voice sounds again after an unvoiced reading (a breath, or the gap
// between detached notes: a lost reading of a held note is still voiced); whether the
// voice fell silent somewhere between two times (a gap in clear readings with only voiced readings in it is the pitch finder losing the
// voice, not the voice stopping); and the silences longer than SING_RUN_GAP_S, as [from, to] between the sounds either side.
function singRunQuiet(inRun){
  const floor = SING_VOICED_SHARE * medianOf(clearOnly(inRun).map(r => r.level || 0)), reonsets = new Set();
  let quiet = 0;
  inRun.forEach(r => { if(r.hz === null){ if((r.level || 0) < floor) quiet++; return; } if(quiet >= 1) reonsets.add(r.t); quiet = 0; });
  const sounding = inRun.filter(r => r.hz !== null || (r.level || 0) >= floor).map(r => r.t), holes = [];
  for(let x = 1; x < sounding.length; x++) if(sounding[x] - sounding[x - 1] > SING_RUN_GAP_S) holes.push([sounding[x - 1], sounding[x]]);
  const silent = (a, b) => holes.some(([u, v]) => u >= a - 1e-9 && v <= b + 1e-9);
  return { reonsets, silent, holes };
}
// Where the voice began a note, whatever the notes (so a wrong note still marks one, and a note sung at its neighbour's pitch leaves one
// out while the rest still decide): the voice sounding again after a silence, or a step to a new steady note that it keeps (singRunStep).
// Returns { changes: their times, the first sound first; isChange: by reading, without the first sound (a note that begins there is
// the first one sung, whichever it is: no onset tells it apart).
function singRunOnsets(quiet, times, cents){
  const m = times.length, changes = [];
  for(let x = 1; x < m; x++){
    if((times[x] - times[x - 1] > SING_RUN_GAP_S && quiet.silent(times[x - 1], times[x])) || quiet.reonsets.has(times[x])){ changes.push(times[x]); continue; }
    const at = singRunStep(times, cents, x, changes.length ? changes[changes.length - 1] : -Infinity, quiet.reonsets);
    if(at >= 0){ changes.push(times[at]); x = at; }
  }
  const isChange = new Uint8Array(m + 1);
  changes.forEach(t => { const x = times.indexOf(t); if(x >= 0) isChange[x] = 1; });
  return { changes: [times[0], ...changes], isChange };
}
// Whether the voice steps to a new note at reading x (`cents`: each reading against the first note; `prior`: the time of the change before;
// `reonsets`: where the voice sounded again after a silence).
// Returns the reading the new note starts at, or -1. A step is a move of more than a shade between the middles of the SING_RUN_STEP_S
// before and after, the after holding still; or a legato step (a glide of up to SING_RUN_GLIDE_S / 3 into a note a half-step or more away,
// under a vibrato): the middles of the SING_RUN_STEP_LONG_S before and after the glide more than SING_RUN_STEP_CENTS apart, the step at the
// first reading nearer the new note. Either way the voice sings on after it (a release falling away before the voice stops is not one),
// and one step is found once.
function singRunStep(times, cents, x, prior, reonsets){
  const m = times.length, middle = (from, to) => { const l = []; for(let y = from; y < to; y++) l.push(cents[y]); return l; };
  // (the voice sings on: up to the next silence, a gap in clear readings or a re-onset)
  let on = x; while(on + 1 < m && times[on + 1] - times[on] <= SING_RUN_GAP_S && !reonsets.has(times[on + 1])) on++;
  let b0 = x - 1; while(b0 > 0 && times[x - 1] - times[b0 - 1] <= SING_RUN_STEP_S) b0--;
  let a1 = x; while(a1 < m && times[a1] - times[x] < SING_RUN_STEP_S && (a1 === x || times[a1] - times[a1 - 1] <= SING_RUN_GAP_S)) a1++;
  const broken = a1 < m && times[a1] - times[x] < SING_RUN_STEP_S;
  const before = middle(b0, x), after = middle(x, a1);
  const lasting = after.length >= 2 && times[a1 - 1] - times[x] >= SING_RUN_STEP_S * 0.6 && times[on] - times[x] >= 2 * SING_RUN_STEP_S;
  const still = lasting && Math.max(...after) - Math.min(...after) < SING_RUN_STILL;
  if(times[x] - prior >= SING_RUN_STEP_S && !broken && still && before.length >= 2 && Math.abs(medianOf(after) - medianOf(before)) > SING_SHADE_CENTS * 0.85) return x;
  const glide = SING_RUN_GLIDE_S / 3;
  if(times[x] - prior < SING_RUN_STEP_LONG_S + glide || broken || times[on] - times[x] < glide + SING_RUN_STEP_LONG_S + SING_RUN_STEP_S) return -1;
  let l0 = x - 1; while(l0 > 0 && times[x - 1] - times[l0 - 1] <= SING_RUN_STEP_LONG_S) l0--;
  let s0 = x; while(s0 < m && times[s0] - times[x] < glide) s0++;
  let s1 = s0; while(s1 < m && times[s1] - times[x] < glide + SING_RUN_STEP_LONG_S) s1++;
  const longBefore = middle(l0, x), longAfter = middle(s0, s1);
  if(longBefore.length < 3 || longAfter.length < 3) return -1;
  const was = medianOf(longBefore), now = medianOf(longAfter);
  if(Math.abs(now - was) <= SING_RUN_STEP_CENTS) return -1;
  let at = x; while(at < on && Math.abs(cents[at] - now) > Math.abs(cents[at] - was) && times[at] - times[x] < glide) at++;
  return at;
}
// The tempos (the singer's speed against the played one), lags (how much later than the first note's onset the other notes come than the
// rhythm says: a first note held on, a late change) and anchors (where the first played note is put against the first sound: 0, the first
// sound is the first note; earlier, it was left out) worth splitting at: the few that line the played onsets up best with the onsets heard
// (each counted up to SING_RUN_REACH_S / 4 away, at least SING_RUN_PICK apart in tempo), and when those do not decide (too few were heard:
// a note held long, notes left out) every tempo that fits as well as the best, one in each band of SING_RUN_BAND_T, so the pitch decides;
// and the played tempo, and the best with the first note left out. Each: { t, sh, an, f } (f: how badly it fits).
function singRunTempos(run, changes){
  const { plan, times, playedFrom } = run, t0 = times[0];
  const fit = (tempo, lag, anchor = 0) => plan.hear.reduce((n, h, k) => { if(!k && !anchor) return n; const want = t0 + anchor + (k ? lag : 0) + (h.atMs - playedFrom) * tempo / 1000;
    if(want < t0 - SING_RUN_REACH_S / 4) return n;   // a note put before the first sound is one left out: it has no onset to meet
    let near = SING_RUN_REACH_S / 4; for(const c of changes){ const d = Math.abs(c - want); if(d < near) near = d; } return n + near; }, 0);
  const ranked = [];
  for(let t = SING_RUN_TEMPO[0]; t <= SING_RUN_TEMPO[1] + 1e-9; t += 0.02) for(let sh = SING_RUN_LAG_S[0]; sh <= SING_RUN_LAG_S[1] + 1e-9; sh += 0.05)
    for(const an of [0, -(plan.hear[1].atMs - playedFrom) * t / 1000]) ranked.push({ t, sh, an, f: fit(t, sh, an) + 0.05 * Math.abs(Math.log(t)) + 0.1 * Math.abs(sh) + (an ? 0.3 : 0) });
  ranked.sort((x, y) => x.f - y.f);
  const tried = [];
  for(const r of ranked){ if(tried.length >= SING_RUN_CANDIDATES) break; if(tried.every(q => !q.an !== !r.an || Math.abs(q.t - r.t) >= SING_RUN_PICK || Math.abs(q.sh - r.sh) >= 0.2)) tried.push(r); }
  for(let lo = SING_RUN_TEMPO[0]; lo < SING_RUN_TEMPO[1]; lo += SING_RUN_BAND_T){
    const r = ranked.find(x => !x.an && x.t >= lo - 1e-9 && x.t < lo + SING_RUN_BAND_T - 1e-9 && x.f <= ranked[0].f + SING_RUN_FLAT);
    if(r && !tried.some(q => !q.an && Math.abs(q.t - r.t) < SING_RUN_PICK)) tried.push(r);
  }
  if(!tried.some(q => Math.abs(q.t - 1) < 0.01 && Math.abs(q.sh) < 0.01 && !q.an)) tried.push({ t: 1, sh: 0, an: 0, f: fit(1, 0) });
  const firstOut = ranked.find(r => r.an);
  if(firstOut && !tried.some(q => q.an)) tried.push(firstOut);
  return tried;
}
// The cheapest split over the tempos tried, with a common offset taken out of every reading: its own cost, pitch and timing, plus
// SING_RUN_FIT_W for each second of onsets its tempo misses (the onsets propose, the pitch decides). { cuts, cost }, or null.
function singRunChoose(run, tried, offset){
  // each reading's cost against each note, summed, so a stretch's cost is one subtraction
  const cost = run.against.map(c => { const sum = new Float64Array(run.m + 1); for(let x = 0; x < run.m; x++) sum[x + 1] = sum[x] + Math.min(Math.abs(c[x] - offset), SING_RUN_CAP); return sum; });
  let best = null, least = Infinity;
  for(const q of tried){ const r = singRunSplit(run, cost, q.t, q.sh, q.an); if(r && r.cost + SING_RUN_FIT_W * q.f < least){ least = r.cost + SING_RUN_FIT_W * q.f; best = r; } }
  return best;
}
// The note k (0-based) the rhythm puts where, at a tempo, lag and anchor: { expect: each note's onset, expectLen: each note's length }
function singRunRhythm(run, tempo, lag, anchor){
  const { plan, K, times, playedFrom } = run;
  return { expect: plan.hear.map((h, k) => times[0] + anchor + (k ? lag : 0) + (h.atMs - playedFrom) * tempo / 1000),
    expectLen: plan.hear.map((h, k) => k < K - 1 ? (plan.hear[k + 1].atMs - h.atMs) * tempo / 1000 : h.ms * tempo / 1000) };
}
// Whether each note may be left without a stretch: only when the voice was silent through at least SING_RUN_SILENT of the time the rhythm
// gives it (that time allowed to come SING_RUN_REACH_S / 4 earlier or later; the silence before the first sound and after the last count
// too, so a first or last note left out is "Not heard"). Only the time inside the listening counts, and it must hold that share of the
// note's own time (a held last note: of the seconds it is held for, `holdNeedMs`): a rhythm that puts a note mostly past the end of the
// listening does not say it was left out. A note sung wrong, even at its neighbour's pitch, always gets a stretch.
function singRunSilent(run, { expect, expectLen }){
  const { plan, K, m, times, end } = run, holes = [[run.start, times[0]], [times[m - 1], end], ...run.quiet.holes];
  return expect.map((e, k) => { const need = SING_RUN_SILENT * Math.min(expectLen[k], k === K - 1 && plan.holdNeedMs ? plan.holdNeedMs / 1000 : Infinity);
    return [-1, 0, 1].some(d => { const a = e + d * SING_RUN_REACH_S / 4, b = Math.min(a + expectLen[k], end), want = Math.max(need, (b - a) * SING_RUN_SILENT);
      return b - a >= need && holes.some(([u, v]) => Math.min(v, b) - Math.max(u, a) >= want); }); });
}
// What a stretch of readings [i, j) costs as note k (1-based; `sum`: that note's summed reading costs) at a rhythm, beyond its pitch: the
// duration prior. Each note but the last lasts about as long as it was played at the singer's tempo; longer costs fully (it took a
// neighbour's time, SING_RUN_LENGTH per second), shorter a quarter as much (a short or detached note is not a fault of order). The run starts
// about where the rhythm puts it (SING_RUN_PULL). A note that starts where the voice was heard to begin one gets SING_RUN_SNAP back. The
// last note is held: its start keeps near where the rhythm puts it, and it lasts about its played length at the singer's tempo, or to the
// end of the listening if that comes first; shorter costs an eighth as much (a singer may stop early: that is a stopped note, not a
// different split), so neither the tail of the note before nor a slower tempo that leaves the last note a moment is taken for the tune.
function singRunTiming(run, rhythm, k, i, j){
  const { K, times, isChange, perReading, end } = run, { expect, expectLen } = rhythm, want = expectLen[k - 1];
  const len = (j > 0 ? times[j - 1] + perReading : 0) - times[i];
  let c = 0;
  if(k < K){ const over = len - want - SING_RUN_BAND_S, under = want - len - SING_RUN_BAND_S; c += SING_RUN_LENGTH * (over > 0 ? over : under > 0 ? under / 4 : 0); }
  if(k === 1) c += SING_RUN_PULL * Math.abs(times[i] - expect[0]);
  if(k > 1 && isChange[i]) c -= SING_RUN_SNAP;
  if(k === K){ const late = Math.abs(times[i] - expect[k - 1]) - SING_RUN_LAST_BAND_S, under = Math.min(want, end - times[i]) - len - SING_RUN_BAND_S;
    if(late > 0) c += SING_RUN_LENGTH * late;
    if(under > 0) c += SING_RUN_LENGTH * under / 8; }
  return c;
}
// One split at a tempo, lag and anchor: by dynamic programming, the stretches [from, to) of readings, one per note in order (from === to:
// the note left out, at SING_RUN_SKIP, about what the shortest stretch of a neighbour's sound would cost it), whose pitch and timing cost
// least. A note starts within SING_RUN_REACH_S of where the rhythm puts it, and a note but the last is never more than two and a half times
// as long as played (longer splits cost more than any pitch can save). Every voiced reading belongs to a note: the sound at the end is the
// last note's (a last note "Not heard" is a silence, never a sound set aside as after the tune). { cuts, cost }, or null.
function singRunSplit(run, cost, tempo, lag = 0, anchor = 0){
  const { K, m, times, perReading } = run, rhythm = singRunRhythm(run, tempo, lag, anchor), silent = singRunSilent(run, rhythm);
  // best[k][j]: the least cost of the first k notes over the first j readings; from[k][j]: where note k-1's stretch began (j: no stretch)
  const best = Array.from({ length: K + 1 }, () => new Float64Array(m + 1).fill(Infinity)), from = Array.from({ length: K + 1 }, () => new Int32Array(m + 1).fill(-1));
  best[0][0] = 0;
  for(let k = 1; k <= K; k++){
    const prev = best[k - 1], here = best[k], back = from[k], sum = cost[k - 1], at = rhythm.expect[k - 1], last = k === K;
    const lowest = last ? Infinity : Math.ceil(2.5 * rhythm.expectLen[k - 1] / perReading) + SING_RUN_MIN;
    // a middle note left out in a silence is as well explained as one begun at an onset (it gets SING_RUN_SNAP back too); a stretch that
    // begins at no onset is the one left unexplained. Not so the first or the last: the silence before a run starts, and after it ends
    // (the listening runs on for a slow singer), is there whether or not a note was left out
    const skip = k > 1 && !last ? SING_RUN_SKIP - SING_RUN_SNAP : SING_RUN_SKIP;
    let lo = 0, hi = m;
    while(k > 1 && lo < m && times[lo] < at - SING_RUN_REACH_S) lo++;
    while(hi > 0 && times[hi - 1] > at + SING_RUN_REACH_S) hi--;
    for(let j = 0; j <= m; j++){
      if(silent[k - 1] && prev[j] + skip < here[j]){ here[j] = prev[j] + skip; back[j] = j; }
      for(let i = last ? lo : Math.max(lo, j - lowest); i <= j - SING_RUN_MIN && i <= hi; i++){
        if(prev[i] === Infinity) continue;
        const c = prev[i] + sum[j] - sum[i] + singRunTiming(run, rhythm, k, i, j);
        if(c < here[j]){ here[j] = c; back[j] = i; }
      }
    }
  }
  if(best[K][m] === Infinity) return null;
  const cuts = new Array(K);
  for(let k = K, j = m; k >= 1; k--){ const i = from[k][j]; cuts[k - 1] = [i, j]; j = i; }
  return { cuts, cost: best[K][m] };
}
// The windows with each note's readings found by the split. A note begins once the voice has left the one before: leading readings further
// than the tolerance from the note's own middle (the glide from the note before, which may pass through this note on its way) are left out,
// up to SING_RUN_GLIDE_S, so a start that is off for longer than a glide is still read as off. The last note keeps everything to the end of
// its window (its hold, its release, its end), dropped readings included.
function singRunTrimmed(fixed, cuts, track, inRun, hzs, tol){
  const K = fixed.length;
  return fixed.map((part, k) => {
    const [i, j] = cuts[k];
    if(i === j) return { ...part, list: [] };
    const hz = hzs[k], mid = medianOf(track.slice(i, j).map(r => readingCents(r, hz)));
    let a0 = i;
    while(a0 < j - SING_RUN_MIN && track[a0].t - track[i].t < SING_RUN_GLIDE_S && Math.abs(readingCents(track[a0], hz) - mid) > tol) a0++;
    const fromT = track[a0].t, toT = k === K - 1 ? part.to : track[j - 1].t + 1e-6;
    return { ...part, from: fromT, list: inRun.filter(r => r.t >= fromT - 1e-9 && r.t <= toT) };
  });
}
// The readings that fall in each window of a plan: startS is the sound-system time at which the first window opens.
function windowReadings(plan, readings, startS){
  return plan.windows.map(w => {
    const from = startS + w.fromMs / 1000, to = from + w.ms / 1000;
    return { w, from, to, list: readings.filter(r => r.t >= from && r.t < to) };
  });
}

// the middle of the cleaned, centered track over its first (or last) quarter of a second, in cents off the target; null when too few
function singEdgeCents(window, targetHz, last){
  // the end of a held note is read on the steadiness center (a full vibrato cycle); the start on the short one, so a scoop still shows
  const track = singCentered(window, targetHz, last ? SING_HOLD_CENTER_S : SING_CENTER_S);
  if(track.length < SING_MIN_READINGS) return null;
  // a held note's end leaves out its release, the fall-off in the last moment as the voice stops (SING_RELEASE_S)
  const kept = last ? track.filter(r => r.t <= track[track.length - 1].t - SING_RELEASE_S) : track, from = kept.length >= SING_EDGE_MIN ? kept : track;
  const edgeT = last ? from[from.length - 1].t - SING_EDGE_S : from[0].t + SING_START_S;
  const inEdge = from.filter(r => last ? r.t >= edgeT - 1e-9 : r.t <= edgeT + 1e-9);
  const edge = inEdge.length >= SING_EDGE_MIN ? inEdge : last ? from.slice(-SING_EDGE_MIN) : from.slice(0, SING_EDGE_MIN);
  return Math.round(medianOf(edge.map(r => r.c)));
}
// Where a note landed after it began, in cents: the middle of its centered track from 0.5 s to 0.75 s after its first reading (SING_LAND_S),
// so a slide is told by where it went within a moment (lesson 3: it "arrives ... within a moment"); null when the note was too short.
function singLandCents(window, targetHz){
  const track = singCentered(window, targetHz);
  if(!track.length) return null;
  const from = track[0].t + SING_LAND_S[0], to = track[0].t + SING_LAND_S[1], pts = track.filter(r => r.t >= from - 1e-9 && r.t <= to + 1e-9);
  return pts.length >= SING_EDGE_MIN ? Math.round(medianOf(pts.map(r => r.c))) : null;
}
// How many times a note changed direction by more than a shade (SING_SHADE_CENTS), over its clear readings: a zigzag that counts a turn
// only once the voice has moved back more than a shade from its last high or low point, so a small wobble is never a turn. null when too
// few readings were clear.
function singTurns(window, targetHz){
  const clear = clearOnly(window);
  if(clear.length < SING_MIN_READINGS) return null;
  // judged on the note's cleaned center (singCentered), so a slip of the pitch finder or a regular wobble is never a turn: a hunt is a move
  // of more than a shade, back and forth, that lasts longer than a wobble
  const cents = singCentered(window, targetHz).map(r => r.c);
  let lo = cents[0], hi = cents[0], dir = 0, extreme = cents[0], turns = 0;
  cents.slice(1).forEach(c => {
    if(dir === 0){
      lo = Math.min(lo, c); hi = Math.max(hi, c);
      if(c - lo > SING_SHADE_CENTS || hi - c > SING_SHADE_CENTS){ dir = c - lo > SING_SHADE_CENTS ? 1 : -1; extreme = c; }
      return;
    }
    if(dir * (c - extreme) >= 0){ extreme = c; return; }
    if(Math.abs(c - extreme) > SING_SHADE_CENTS){ turns += 1; dir = -dir; extreme = c; }
  });
  return turns;
}
// The answer of a scored try: { cents: [..], start?, land?, end?, turns?, left?, holdMs?, loud? }, or null when nothing was heard at all (the try is not counted: nothing
// was sung). `talk` is the level of the learner's own talking note, for a light try.
function singAnswer(plan, readings, startS, talk){
  const cents = [], parts = plan.windows.length > 1 ? singRunParts(plan, readings, startS) : windowReadings(plan, readings, startS);
  let heard = false, holdMs = 0, start = null, end = null, turns = null, left = null, land = null;
  parts.forEach(({ w, to, list }, i) => {
    const hz = noteToHz(w.note);
    const scored = w.lastMs ? list.filter(r => r.t >= to - w.lastMs / 1000) : list;
    const c = singNoteCents(scored, hz, w.lastMs ? SING_MIN_LAST_READINGS : SING_MIN_READINGS);
    heard = heard || clearOnly(list).length >= SING_MIN_READINGS;
    cents.push(c === null ? SING_MISSED : c);
    if(plan.holdNeedMs && i === parts.length - 1) holdMs = singHoldMs(list, hz, plan.cents);
    if(plan.onset){ start = singEdgeCents(list, hz, false); land = singLandCents(list, hz); }
    if(plan.drift){ end = singEdgeCents(list, hz, true); left = singLeftMs(list, hz, plan.cents); }
    if(plan.turns) turns = singTurns(list, hz);
  });
  if(!heard) return null;
  const level = plan.level && talk ? singLevel(parts[0].list) : null;
  return { cents, ...(start === null ? {} : { start }), ...(end === null ? {} : { end }), ...(turns === null ? {} : { turns }), ...(left === null ? {} : { left }), ...(land === null ? {} : { land }), ...(plan.holdNeedMs ? { holdMs } : {}), ...(plan.level ? { loud: level === null || !talk ? SING_MISSED : Math.round(100 * level / talk) / 100 } : {}) };
}
// the loudness of a note sung for the scale (a light question's loud and talking notes): null when nothing was clear
const singScaleLevel = (plan, readings, startS) => singLevel(windowReadings(plan, readings, startS)[0].list);

/* ---------- the range: the lowest and highest steady notes ---------- */
// The steady notes of a stretch of readings, as numbers on the half-step scale: the middle of every run of at least 0.3 seconds
// that stays within half a half-step of its own middle.
function steadyNotes(readings){
  const runs = [];
  let run = [];
  const close = () => { if(run.length >= SING_STEADY_READINGS) runs.push(medianOf(run.map(r => r.midi))); run = []; };
  clearOnly(readings).map(r => ({ t: r.t, midi: hzToMidi(r.hz) })).forEach(r => {
    const last = run[run.length - 1];
    if(last && (r.t - last.t > SING_RUN_GAP_S || Math.abs(r.midi - medianOf(run.map(x => x.midi))) > SING_STEADY_HALFSTEPS)) close();
    run = [...run, r];
  });
  close();
  return runs;
}
// { low, high, span, steady } in whole half-steps (each end is the nearest note to the steady note sung there), or null when no steady
// note was sung. A span under SING_RANGE_MIN_SPAN is not a range; the caller says so.
function singFindRange(plan, readings, startS){
  const all = windowReadings(plan, readings, startS).flatMap(p => p.list), notes = steadyNotes(all);
  if(!notes.length) return null;
  const low = Math.round(Math.min(...notes)), high = Math.round(Math.max(...notes));
  return { low, high, span: Math.max(0, high - low), steady: notes.length };
}
