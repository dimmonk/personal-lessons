// Political Ideologies, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question and the five answers it sorts every text into. In a gate unit the families are the gate's
// answers: cards carry `family` where a branch unit's carry `outcome`, and cases carry route: { D1: [option] } and no outcome.
// Cards live in u1.cards-*.js, cases in u1.cases-*.js. Every text in the unit is invented. Text fields never retype key wording;
// they use tokens ({q:D1} {a:D1.option} {needs:option} {t:ideology} {test:ledgerId} {cue:D1}), filled in from key.js.

FC.unit('ideology', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Before you call a text “socialist” or “fascist”' },   // a gate unit is titled in plain words; the answers are taught inside it
  subtitle: 'Check whose side a text is on first: workers, one whole people, old customs, rights for every person, or nobody’s',
  teaches: { steps: ['D1'], outcomes: [], terms: ['ideology'], families: ['class', 'nation', 'tradition', 'rights', 'none'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: all ten pairs of the five answers, because a learner confuses every one of them. Each entry is
  // written once and used wherever the pair is compared. test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'class~nation', pair: ['class', 'nation'], step: 'D1',
      shared: 'Both can be angry about the same closing or the same cut, and both say “us” against someone else.',
      rule: 'In {a:D1.class}, “us” is the people who work for pay and “them” is the people who own where they work. In {a:D1.nation}, “us” is one people, marked out by its country, culture or birth, and the text puts it first. A text can mention wages, bosses and the rich and still be the second, if it speaks for the people as a whole.',
      test: 'Is “us” the people who work for pay, against their owners? Or is “us” one whole people?' },
    { id: 'class~tradition', pair: ['class', 'tradition'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can speak up for ordinary people against powerful ones, and both can be bitter about what a closing does to a town.',
      rule: '{a:D1.class} is about who works for pay and who owns, and which side the text takes. {a:D1.tradition} is about what was handed down from the past, and the text holds it up as the guide. The first looks at jobs and money. The second looks at what came before.',
      test: 'Is it about jobs and pay, workers against bosses? Or about what was handed down from the past?' },
    { id: 'class~rights', pair: ['class', 'rights'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can ask for fair pay and fair rules, and both can stand with people who have less.',
      rule: 'In {a:D1.class} the text speaks for the workers and names the owners as the other side. In {a:D1.rights} the text speaks for every person alike, and names no side to be against.',
      test: 'Is there a side it is against, the owners? Or does it speak for every person?' },
    { id: 'class~none', pair: ['class', 'none'], step: 'D1',
      shared: 'Both can be about a workplace, and both can mention wages, bosses and schedules.',
      rule: '{a:D1.class} stands with the workers against the owners. {a:D1.none} takes no side: it only says what will happen, or who is in charge.',
      test: 'Does it stand with the workers against the owners? Or does it only say what will happen?' },
    { id: 'nation~tradition', pair: ['nation', 'tradition'], step: 'D1',
      shared: 'Both can love the country and its past, and both say “our country” and “our ways”.',
      rule: '{a:D1.nation} puts one people first. {a:D1.tradition} puts first what was handed down from the past, such as a faith, home life or old customs. The first is about who belongs. The second is about what should guide.',
      test: 'Does it put one people first? Or does it put what was handed down first?' },
    { id: 'nation~rights', pair: ['nation', 'rights'], step: 'D1',
      shared: 'Both can talk about race and where people come from, and both can say that people are treated differently by the group they were born into.',
      rule: 'In {a:D1.nation} one people is put first, and may be placed above others. In {a:D1.rights} no people is placed above another: something is owed to every person, and the complaint is that rules leave some groups behind.',
      test: 'Is one people put first, maybe above the others? Or is something owed to every person?' },
    { id: 'nation~none', pair: ['nation', 'none'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can come from a ruler’s mouth, and both can speak of power and of who is in charge.',
      rule: '{a:D1.nation} speaks for a people and puts it first. {a:D1.none} says who holds power and how they keep it, or how one practical matter will be handled, and speaks for no people at all. A ruler’s methods are not a side.',
      test: 'Does it speak for one people? Or does it only say who is in charge, or what will happen?' },
    { id: 'tradition~rights', pair: ['tradition', 'rights'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can say that some things must not be taken away from people: a faith, a freedom, a way of life.',
      rule: '{a:D1.tradition} holds up what was handed down from the past as the guide. {a:D1.rights} holds up what every person is owed, old or new. The first looks back at what came before. The second asks what each person is owed.',
      test: 'Is its reason that it was handed down? Or that every person is owed it?' },
    { id: 'tradition~none', pair: ['tradition', 'none'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can be about a church, a parish, a village custom or a home matter.',
      rule: '{a:D1.tradition} holds up a faith, a custom or an old order as the guide. {a:D1.none} deals with one practical matter, such as who will repair the church roof or when the bells ring, and says nothing about what should guide anyone.',
      test: 'Does it hold up old customs as the guide? Or does it only handle one practical matter?' },
    { id: 'rights~none', pair: ['rights', 'none'], step: 'D1', taughtIn: 'q-sides',
      shared: 'Both can be about forms, appeals, services and fair process.',
      rule: '{a:D1.rights} says something is owed to every person, and puts that first. {a:D1.none} only says how one practical matter will be handled: who to write to, by when, at what cost.',
      test: 'Does it say every person is owed something? Or does it only say how one thing is done?' }
  ],

  // Parts are stopping points. The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Workers, one whole people, and old customs',
      cards: ['orient-sides', 'term-ideology', 'meet-class', 'check-class', 'meet-nation', 'check-nation', 'look-class-nation',
              'meet-tradition', 'check-tradition', 'look-nation-tradition'] },
    { id: 'p2', title: 'Rights for every person, a text with no side, then the drill',
      cards: ['meet-rights', 'check-rights', 'look-nation-rights', 'meet-none', 'check-none', 'look-class-none',
              'q-sides', 'check-sides', 'worked-wage'], drill: true, close: ['recap-sides'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim; the route is one question long, so its answer is the name.
  // Items are authored in groups of look-alikes. Every case is new. These cases and the return cases are the bank that later
  // units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:unit (frozen; see E8)
    add: 'Some of these texts are only a notice or a schedule, and some mention workers and owners without taking a side. That is on purpose: {a:D1.none} is a real answer, and you will need it as often as the other four.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'i-p-class', step: 'D1' }, { case: 'i-p-none', step: 'D1' }, { tell: 'class~none' }],
                [{ case: 'i-p-rights', step: 'D1' }, { case: 'i-p-nation', step: 'D1' }, { tell: 'nation~rights' }],
                [{ case: 'i-p-tradition', step: 'D1' }, { tell: 'nation~tradition' }, { tell: 'class~nation' }]] },
      { ask: 'route',
        items: [['i-r-class1', 'i-r-nation1'],
                ['i-r-trad1', 'i-r-rights1', 'i-r-none1'],
                ['i-m-class', 'i-m-nation', 'i-m-none2']] },
      { ask: 'claim', demo: 'i-claim-demo',
        items: [['i-claim-insult']] }
    ],
    // One fresh case for each answer, for later days (E9).
    // A due answer returns as a case the learner has not seen, beside a case of the answer they most often take it for.
    returns: ['i-ret-class-app', 'i-ret-nation-few', 'i-ret-trad-carols', 'i-ret-rights-queue', 'i-ret-none-savings']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Political Ideologies. Five answers taught as five families, the fifth ("no side named") with its own cases and an exception for a ruler’s orders. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
    ],
    // What the K2 rewrite changed in the key's first question and the structure around it, and why. This unit carries the lines
    // of the whole key and of the gate; the units that teach the other questions carry theirs. (docs/rebuild/ideology-plan.md, part a)
    keyChanges: [
      { step: 'D1', was: 'two flat questions asked of every text, Q2 ("Who or what does the text put first?", 7 answers) then Q1 ("Who should own the farms, factories, shops and banks?", 6 answers); no gate; names decided after both by "three extra checks" the key never asked or scored',
        now: 'a gate (this question, 5 answers) and four branches of one or two questions each; every accepted route isolates one name',
        why: 'K2.2: the old key left 2 to 6 names standing on 8 of 12 audited specimens, so the name was decided by knowledge the key never asked (audit C3). The questions the old feedback cited are now key questions, so they are taught, asked and scored.' },
      { step: 'D1', was: 'Q2, shown as "Q2" and asked first',
        now: 'same question, asked first and only first, with no code shown',
        why: 'K2.3: it is already a question a person asks out loud. K3: the code collision (step 1 labeled Q2) is gone.' },
      { step: 'D1', was: '"Workers against owners" / "people who work for wages vs people who own the businesses"',
        now: '"Working people, against those who own the businesses"; its when requires the text to take the workers’ side',
        why: 'K2.4: it names both sides an observer can point to. A text that names classes only to deny them (old drill item 6, specimen 8) is the nation answer, and this unit teaches it as an exception.' },
      { step: 'D1', was: 'three overlapping answers: "The nation", "Ordinary people against an elite", "One race ranked above the others"; one name under two answers on 4 of 13 names',
        now: 'one answer, "The nation, or its ordinary people", keeping five names; the questions after it separate them',
        why: 'K2.2: specimen 11 accepted two first answers that left 1 or 3 names (audit U5 item 8). The confusions the course exists to fix now sit in one branch, where a key question tells them apart.' },
      { step: 'D1', was: 'two answers that each kept one name: "Groups held back by unfair systems" and "The individual"',
        now: 'one answer, "Rights and fair treatment for everyone", keeping three names; one question separates them',
        why: 'K2.2: an answer that keeps one name leaves nothing to teach as a question. The pair "same noun, opposite direction" is now a look-alike pair of this unit.' },
      { step: 'D1', was: '"Tradition and faith" / "the old order of church, crown and family" (one name)',
        now: '"Old ways of faith, family and custom", keeping two names',
        why: 'K2.9: ordinary conservatism, which the old cards described only as what Reactionary conservatism is not, had nowhere to go.' },
      { step: 'D1', was: 'no such answer; "Just a dictatorship (authoritarianism)" was a drill answer that was not a name of the key',
        now: '"No side named" (keeps nothing; no branch)',
        why: 'K2.9, A15: a text about who holds power, or about one practical matter, is a case the learner meets. A ruler’s orders are an exception here, and a plain proposal with a political name is a refute card.' },
      { step: 'D1', was: 'no tie-break between gate answers',
        now: 'yieldsTo as data, in one order: the working-people answer, then old ways, then the nation, then rights; a text that shows two answers gets the first in that order',
        why: 'K2.8: a text that blames "the rich" and a text that says "our country" can each show two answers, and the key decides. Each decision is taught on a named exception card of this unit.' },
      { step: 'D1', was: 'gate options had n, sub and keeps',
        now: 'each also has plain, needs and when',
        why: 'A15, S1: the gate’s answers are this unit’s families, taught as an outcome is.' }
    ],
    wrongIdeas: [],       // the two wrong-idea cards were cut in the quick lesson; the ideas live on in the nation~rights look-alike and the claim stage
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
