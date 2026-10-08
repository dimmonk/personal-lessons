// Singing, Unit Three: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the key that follows the first question's answer "How the air holds up". That branch has one question and five
// names: a breath that works (nothing is wrong), a shallow breath, unplanned breaths, an airy tone and forcing the air.
// Every name says what to do on the spot, every drill stage holds a story where nothing is wrong, and the close has the plan card.
// Cards live in u3.cards-*.js, stories in u3.cases-*.js. Text fields never retype key wording: they use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('singing', 'u3', {
  kind: 'C',
  rev: 1,
  standard: 1,
  status: 'draft',
  tag: 'Three',
  title: { fromKey: 'D1.breath' },
  subtitle: 'One breath that works, four ways the air goes wrong, and a fix for each',
  teaches: { steps: ['B1'], outcomes: ['breathfine', 'shallowbreath', 'airytone', 'forcing', 'unplanned'], terms: [] },
  assumes: ['u1', 'u2'],

  // THE LOOK-ALIKE LEDGER. The question has five answers and each leads to one name, so no answer keeps two names together.
  // Six pairs are ledger entries because they are the ones a real line puts side by side: three have a look-alike card, one
  // has the exception card for the question's tie-break, and two are taught on the question card. test names nothing.
  ledger: [
    { id: 'shallowbreath~breathfine', pair: ['shallowbreath', 'breathfine'], step: 'B1',
      shared: 'In both, you may feel short of air before a line is over, and you may be sure the breath is the problem.',
      rule: 'In {o:breathfine} your hand on your belly moves out, your shoulders stay still, and the breath makes no noise. In {o:shallowbreath} the breath is a noisy gasp, your shoulders or chest lift, and the air is gone before the line ends.',
      test: 'Where does the breath go: does your belly move out while your shoulders stay still, or do your shoulders or chest lift?' },
    { id: 'shallowbreath~unplanned', pair: ['shallowbreath', 'unplanned'], step: 'B1',
      shared: 'In both, you run out of air partway through a line and have to grab another breath.',
      rule: 'In {o:shallowbreath} the breath itself is the problem: it is a quick gasp with the shoulders or chest lifting. In {o:unplanned} the breath is full and low, and the problem is where you take it, wherever you run out, even in the middle of a word.',
      test: 'Was the breath itself a quick gasp with the shoulders up, or was it full and low and taken at a bad moment?' },
    { id: 'airytone~forcing', pair: ['airytone', 'forcing'], step: 'B1',
      shared: 'In both, the air is used up fast and you cannot make it last the line.',
      rule: 'In {o:airytone} there is too little sound for the air: it leaks past the voice and you hear a hiss. In {o:forcing} there is too much air for the sound: you shove it out, and what you hear is loud and harsh.',
      test: 'Is the sound soft and whispery with air hissing through it, or loud and harsh with the air shoved out?' },
    { id: 'forcing~shallowbreath', pair: ['forcing', 'shallowbreath'], step: 'B1',
      shared: 'In both, the air is gone early and the end of the line is hard on the throat.',
      rule: 'In {o:shallowbreath} the trouble starts with the breath going in, which is quick, with the shoulders or chest lifting. In {o:forcing} it starts with the air going out, which is driven out hard. When a story shows both, the quick, high breath comes first.',
      test: 'Was the breath going in a quick, high one, or was the only trouble how hard the air went out?' },
    { id: 'airytone~breathfine', pair: ['airytone', 'breathfine'], step: 'B1', taughtIn: 'q-air',
      shared: 'In both, the breath going in can be low and quiet, and you may feel short of air.',
      rule: 'In {o:breathfine} the sound is clear and there is air left at the end of the line. In {o:airytone} the sound is soft and whispery, air hisses out along with it, and the air runs out fast.',
      test: 'Is there a hiss of air in the sound, or is the sound clean with air to spare at the end of the line?' },
    { id: 'airytone~shallowbreath', pair: ['airytone', 'shallowbreath'], step: 'B1', taughtIn: 'q-air',
      shared: 'In both, you run out of air within a line or two.',
      rule: 'In {o:shallowbreath} the breath going in is the problem: it is quick, with the shoulders or chest lifting. In {o:airytone} the breath going in can be low and quiet, and the problem is the sound, because air leaks out with it.',
      test: 'Was the breath a quick one that lifted the shoulders, or was it low and quiet with a hiss in the sound?' }
  ],

  // Parts are stopping points (A13). The last part holds the drill, and the close cards come after it. The parts follow what
  // a learner notices first: the breath going in, then the air coming out.
  parts: [
    { id: 'p1', title: 'A good breath, and two ways the breath goes wrong',
      cards: ['orient', 'meet-breathfine', 'check-breathfine', 'meet-shallowbreath', 'check-shallowbreath', 'look-shallowbreath-breathfine',
              'meet-unplanned', 'check-unplanned', 'look-shallowbreath-unplanned'] },
    { id: 'p2', title: 'Air that leaks, and air that is shoved',
      cards: ['meet-airytone', 'check-airytone', 'meet-forcing', 'check-forcing', 'look-airytone-forcing', 'exc-force-gone'] },
    { id: 'p3', title: 'The question, one whole story, then the drill',
      cards: ['q-air', 'check-air', 'worked-hymn'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: piece (the unit's one question alone), then route (the first question and this one, together). Items are authored
  // in groups of look-alikes; the app shuffles groups inside a tier and never moves an item out of its group. Every stage holds a
  // story where nothing is wrong (V37). Every story is new.
  drill: {
    key: 'u3',
    add: 'In one of the five, nothing is wrong, so not every story here has a fault.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'b-p-bedtime-fine', step: 'B1' }, { case: 'b-p-radio-gasp', step: 'B1' }, { case: 'b-p-radio-chopped', step: 'B1' }],
                [{ case: 'b-p-choir-leak', step: 'B1' }, { case: 'b-p-karaoke-shove', step: 'B1' }],
                [{ tell: 'shallowbreath~breathfine' }, { tell: 'shallowbreath~unplanned' }, { tell: 'airytone~forcing' }, { tell: 'forcing~shallowbreath' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['b-r-openmic-fine', 'b-r-church-gasp', 'b-r-car-chopped'],
                ['b-r-party-leak', 'b-r-home-shove'],
                ['b-r-choir-quick', 'b-r-kids-shove'],
                ['b-r-openmic-bigger', 'b-r-kids-hiss'],
                [{ earlier: 'u2' }]] }
    ],
    // Fresh stories for later days: two for each name (an action subject, E9).
    returns: ['b-ret-shower-check', 'b-ret-party-fine',
              'b-ret-shower-gasp', 'b-ret-party-bridge',
              'b-ret-karaoke-ballad', 'b-ret-openmic-folk',
              'b-ret-home-hiss', 'b-ret-church-whisper',
              'b-ret-choir-anthem', 'b-ret-car-chorus']
  },

  build: {
    history: [
      { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: the air branch of the new Singing key (docs/rebuild/singing-plan.md). Five names (the breath that works taught first, then a shallow breath, unplanned breaths, an airy tone and forcing the air, each with what to do on the spot), six look-alike pairs, one named exception for the question\'s tie-break, and a drill that holds a breath that works in every stage.' }
    ],
    keyChanges: [],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
