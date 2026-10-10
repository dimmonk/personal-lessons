// A small made-up subject with sound (lesson standard section 21), registered in the page so the sound blocks can be exercised on known
// data without touching public/. One unit about a note being under, on or over a song's note: a term card with a note tool, meet cards
// with the five designs a singing unit uses (a shade under, a shade over, on the note, scooping up to it, hunting for it), and a question
// card with four of the same examples in one block. Self-contained: it is sent to the page as source, so it may use only browser globals.
//
// The tones are the designs of the real Singing cards, at the 4000 ms a tone may last (the limit of section 21, item 2).
export const AUDIO_DESIGNS = {
  flat: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, -30], [1800, -30], [2800, 0], [4000, 0]] }],
  sharp: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, 30], [1800, 30], [2800, 0], [4000, 0]] }],
  matching: [{ note: 'D4', ms: 3000 }, { note: 'D4', ms: 3000 }],
  scooping: [{ note: 'D4', path: [[0, -300], [400, 0], [1500, 0]] }, { note: 'F4', at: 1800, path: [[0, -300], [400, 0], [1500, 0]] }],
  hunting: [{ note: 'D4', path: [[0, -250], [500, 130], [1000, -100], [1500, 70], [2000, -30], [2500, 0], [3500, 0]] }]
};

export function registerAudioUnit(designs) {
  const S = 'voicetest';
  FC.subject(S, { name: 'Voice test', rev: 1, standard: 1, blurb: 'A test subject with sound.', units: ['u1'], settings: ['home'],
    limits: [{ h: 'It is a test subject', text: 'Nothing here says anything about the world.' }],
    history: [{ rev: 1, date: '2026-10-09', change: 'fixture' }] });
  const opt = (id, n, keeps) => ({ id, n, when: `the story says ${n.toLowerCase()}`, keeps });
  FC.key(S, {
    terms: [{ id: 'notecheck', unit: 'u1', n: 'the note check', means: 'playing a note and singing beside it to hear how the two differ' }],
    avoid: [],
    outcomes: [
      { id: 'onnote', group: 'x', unit: 'u1', legit: true, n: 'On the note', plain: 'matches the song', needs: 'a note that matches', aka: [] },
      { id: 'flat', group: 'x', unit: 'u1', n: 'Flat', plain: 'a little under the song', needs: 'a note a little under', aka: [] },
      { id: 'sharp', group: 'x', unit: 'u1', n: 'Sharp', plain: 'a little over the song', needs: 'a note a little over', aka: [] },
      { id: 'scooping', group: 'x', unit: 'u1', n: 'Scooping', plain: 'sliding up into the note', needs: 'a slide up into the note', aka: [] },
      { id: 'guessing', group: 'x', unit: 'u1', n: 'Guessing the note', plain: 'hunting for the note', needs: 'a voice that hunts for the note', aka: [] }],
    gate: { code: 'G1', unit: 'u1', q: 'What are you looking at?', why: 'The next questions depend on the kind.',
      options: [{ id: 'x', n: 'A sung note', when: 'the story is about a sung note', keeps: ['onnote', 'flat', 'sharp', 'scooping', 'guessing'] }] },
    branches: { x: [{ code: 'P1', unit: 'u1', q: 'Where does your note land?', why: 'Each is fixed differently.',
      options: [opt('match', 'On the song’s note', ['onnote']), opt('under', 'A shade under the song’s note', ['flat']), opt('over', 'A shade over the song’s note', ['sharp']),
        opt('slide', 'Under it at first, then sliding up into it', ['scooping']), opt('hunt', 'Wherever your voice happens to start', ['guessing'])] }] }
  });

  const OPTION = { onnote: 'match', flat: 'under', sharp: 'over', scooping: 'slide', guessing: 'hunt' };
  const NEAR = { onnote: 'flat', flat: 'sharp', sharp: 'flat', scooping: 'flat', guessing: 'scooping' };
  const story = (id, outcome, use, setting, extra) => ({ id, use, tier: 'clean', setting, topic: id, text: `Story ${id}: the singer was ${OPTION[outcome]} the note in this one, and that was all.`, outcome,
    route: { G1: ['x'], P1: [OPTION[outcome]] }, cues: { G1: `Story ${id}`, P1: `was ${OPTION[outcome]} the note` },
    reason: { G1: 'It is one story: {cue:G1}.', P1: 'The words are {cue:P1}.' },
    not: { outcome: NEAR[outcome], why: 'The other name needs different words than {cue:P1}.' }, ...extra });
  const all = Object.keys(OPTION);
  FC.cases(S, 'u1', [
    story('t-check', 'flat', 'teach', 'home', { name: 'Rosa and the piano' }),
    ...all.map(o => story(`t-${o}`, o, 'teach', 'home', { name: `The ${o} story` })),
    ...all.flatMap(o => [story(`d-${o}-1`, o, 'drill', 'home'), story(`d-${o}-2`, o, 'drill', 'home', { tier: 'varied' }),
      story(`r-${o}-1`, o, 'return', 'home'), story(`r-${o}-2`, o, 'return', 'home', { tier: 'varied' }), story(`r-${o}-3`, o, 'return', 'home', { tier: 'varied' })])
  ]);

  const tones = (key, label) => ({ kind: 'tones', says: `Listen to the two notes. ${key} sounds like this.`, examples: [{ label, play: designs[key] }] });
  const meet = (outcome, key, label) => ({ id: `meet-${outcome}`, kind: 'meet', outcome, link: 'Link.', case: `t-${outcome}`, mark: 'P1',
    spot: [{ do: 'Find the first thing.', why: 'It decides.' }, { do: 'Find the second thing.', why: 'It confirms.' }],
    explain: 'It is this one because {cue:P1}.', name: 'The name is {o:' + outcome + '}.', audio: tones(key, label) });
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Where this unit starts', canDo: 'Say where a note lands.', everyday: 'A note can be under, on or over.', map: { branch: 'x' } },
    { id: 'term-notecheck', kind: 'term', term: 'notecheck', h: 'To find out if a note is off, play it and sing against it', link: 'Everything starts with one test.',
      case: 't-check', plain: ['Rosa measured her note against a steady one.'], after: 'Use it before you change anything.',
      audio: { kind: 'notecheck', says: 'Pick a note and hear it. Then sing it, and the tool tells you where your note lands.', answers: { under: 'P1.under', on: 'P1.match', over: 'P1.over' } } },
    meet('onnote', 'matching', '{a:P1.match}'),
    meet('flat', 'flat', '{a:P1.under}'),
    meet('sharp', 'sharp', '{a:P1.over}'),
    meet('scooping', 'scooping', '{a:P1.slide}'),
    meet('guessing', 'hunting', '{a:P1.hunt}'),
    { id: 'q-p1', kind: 'question', step: 'P1', h: 'The question', link: 'Link.', decides: 'It decides.', how: 'Listen, then say where it lands.',
      audio: { kind: 'tones', says: 'Hear four of the ways a note can land.', examples: [
        { label: '{a:P1.under}', play: designs.flat }, { label: '{a:P1.over}', play: designs.sharp }, { label: '{a:P1.match}', play: designs.matching }, { label: '{a:P1.slide}', play: designs.scooping }] } },
    { id: 'recap', kind: 'recap', h: 'Recap', link: 'Link.', carry: ['carry this'] }
  ]);
  FC.unit(S, 'u1', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Where the note lands' }, subtitle: 'A fixture unit with sound',
    teaches: { steps: ['G1', 'P1'], outcomes: all, terms: ['notecheck'] }, assumes: [],
    ledger: [{ id: 'flat~sharp', pair: ['flat', 'sharp'], step: 'P1', taughtIn: 'q-p1', shared: 'Both are off the note.', rule: '{o:flat} is under and {o:sharp} is over.', test: 'Which side of the note is it?' }],
    parts: [{ id: 'p1', title: 'Everything', cards: ['orient', 'term-notecheck', 'meet-onnote', 'meet-flat', 'meet-sharp', 'meet-scooping', 'meet-guessing', 'q-p1'], drill: true, close: ['recap'] }],
    drill: { key: 'u1', rungs: [{ ask: 'piece', items: [[{ case: 'd-flat-1', step: 'P1' }, { case: 'd-sharp-1', step: 'P1' }]] }, { ask: 'route', items: [['d-flat-1', 'd-sharp-1'], ['d-flat-2', 'd-sharp-2']] }],
      returns: all.flatMap(o => [1, 2, 3].map(n => `r-${o}-${n}`)) },
    build: { history: [{ rev: 1, date: '2026-10-09', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } }
  });
  return S;
}
