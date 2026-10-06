// Political Ideologies, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15).
// It teaches the key's first question and the five answers it sorts every text into. In a gate unit the families are the gate's
// answers: cards carry `family` where a branch unit's carry `outcome`, and cases carry route: { D1: [option] } and no outcome.
// Cards live in u1.cards-*.js, cases in u1.cases-*.js. Every text in the unit is invented. Text fields never retype key wording;
// they use tokens ({q:D1} {a:D1.option} {needs:option} {t:ideology} {test:ledgerId} {cue:D1}), filled in from key.js.

FC.unit('ideology', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'One',
  title: { text: 'Whose side a text is on' },   // a gate unit is titled in plain words; the answers are taught inside it
  subtitle: 'The first question, and the five answers it sorts every text into',
  teaches: { steps: ['D1'], outcomes: [], terms: ['ideology'], families: ['class', 'nation', 'tradition', 'rights', 'none'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: all ten pairs of the five answers, because a learner confuses every one of them. Each entry is
  // written once and used wherever the pair is compared. test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'class~nation', pair: ['class', 'nation'], step: 'D1',
      shared: 'Both can be angry about the same closing or the same cut, and both can say "us" against someone else.',
      rule: 'In {a:D1.class} "us" is the people who work for pay, and "them" is the people who own where they work. In {a:D1.nation} "us" is one people, marked out by its country, culture or birth, and the text puts it first. A text can mention wages, bosses and the rich and still get the second answer, if what it speaks for is the people as a whole.',
      test: 'Who is "us", and who is "them"? Are they the people who work for pay and the people who own where they work? Or is "us" one people, marked out by its country, culture or birth?' },
    { id: 'class~tradition', pair: ['class', 'tradition'], step: 'D1',
      shared: 'Both can speak up for ordinary people against powerful ones, and both can be bitter about what a closing does to a town.',
      rule: '{a:D1.class} is about who works for pay and who owns, and which of them the text stands with. {a:D1.tradition} is about what was handed down from the past, and the text holds it up as the guide. The first looks at jobs and money. The second looks at what came before and should carry on.',
      test: 'Is the text about the jobs and money of working people against owners? Or is it about something handed down from the past, which it says should guide?' },
    { id: 'class~rights', pair: ['class', 'rights'], step: 'D1',
      shared: 'Both can ask for fair pay and fair rules, and both can stand with people who have less.',
      rule: 'In {a:D1.class} the people the text speaks for are the workers, and the owners are named as the other side. In {a:D1.rights} the text speaks for every person alike, and names no side to be on the far end of it.',
      test: 'Is there a side the text is against, the people who own where others work? Or does it speak for every person, whoever they are?' },
    { id: 'class~none', pair: ['class', 'none'], step: 'D1',
      shared: 'Both can be about a workplace, and both can mention wages, bosses and schedules.',
      rule: '{a:D1.class} takes the side of the workers against the owners. {a:D1.none} takes no side. It says only what will happen, or who is in charge.',
      test: 'Does the text take the workers’ side against the owners? Or does it only say what is to be done, or who decides?' },
    { id: 'nation~tradition', pair: ['nation', 'tradition'], step: 'D1',
      shared: 'Both can love the country and its past, and both can say "our country" and "our ways".',
      rule: '{a:D1.nation} puts one people first: its country, its culture or its birth. {a:D1.tradition} puts first the ways handed down from the past, such as a faith, home life or old customs. The first is about who belongs. The second is about what should guide.',
      test: 'What does the text hold up as first: the people itself, marked out by country, culture or birth? Or ways handed down from the past, such as a faith or old customs?' },
    { id: 'nation~rights', pair: ['nation', 'rights'], step: 'D1',
      shared: 'Both can speak of race and origin, and both can say that people are treated differently according to the group they were born into.',
      rule: 'In {a:D1.nation} the people the text belongs to is put first, and may be placed above others. In {a:D1.rights} no people is placed above another: something is said to be owed to every person, and the complaint is that rules leave some groups behind.',
      test: 'Is one people being put first, perhaps above the others? Or is something said to be owed to every person, whatever group they belong to?' },
    { id: 'nation~none', pair: ['nation', 'none'], step: 'D1',
      shared: 'Both can come from a ruler’s mouth, and both can speak of power and of who is in charge.',
      rule: '{a:D1.nation} speaks for a people and puts it first. {a:D1.none} says who holds power and how they keep it, or how one practical matter will be handled, and speaks for no people at all. A ruler’s methods are not a side.',
      test: 'Does the text speak for one people and put it first? Or does it only say who is in charge and how they keep power, or what will happen?' },
    { id: 'tradition~rights', pair: ['tradition', 'rights'], step: 'D1',
      shared: 'Both can say that some things are owed to people and must not be taken away: a faith, a freedom, a way of life.',
      rule: '{a:D1.tradition} holds up what was handed down from the past as what should guide. {a:D1.rights} holds up what is owed to every person, whether it is old or new. The first looks back at what came before. The second asks what each person is owed.',
      test: 'Is the text’s reason that the thing was handed down from the past? Or is its reason that every person is owed it?' },
    { id: 'tradition~none', pair: ['tradition', 'none'], step: 'D1',
      shared: 'Both can be about a church, a parish, a village custom or a home matter.',
      rule: '{a:D1.tradition} holds up a faith, a custom or an old order as what should guide. {a:D1.none} deals with one practical matter, such as who will repair the church roof or when the bells ring, and says nothing about what should guide anyone.',
      test: 'Does the text hold up old ways as what should guide? Or does it only handle one practical matter?' },
    { id: 'rights~none', pair: ['rights', 'none'], step: 'D1',
      shared: 'Both can be about forms, appeals, services and fair process.',
      rule: '{a:D1.rights} says that something is owed to every person, and puts that first. {a:D1.none} says only how one practical matter will be handled: who to write to, by when, at what cost.',
      test: 'Does the text say that every person is owed something? Or does it only say how one thing is to be done?' }
  ],

  // Parts are stopping points. The first five follow the five answers in the key's order (A13); the sixth keeps the four pairs
  // that involve the fifth answer together. The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The first answer: working people and owners',
      cards: ['orient-sides', 'term-ideology', 'meet-class', 'again-class', 'lens-sides', 'portrait-class', 'check-class'] },
    { id: 'p2', title: 'The second answer: a people put first',
      cards: ['meet-nation', 'again-nation', 'portrait-nation', 'check-nation', 'look-class-nation', 'exc-ourcountry', 'exc-deny'] },
    { id: 'p3', title: 'The third answer: old ways',
      cards: ['meet-tradition', 'again-tradition', 'portrait-tradition', 'check-tradition',
              'look-class-tradition', 'look-nation-tradition', 'exc-faith', 'exc-loomhands'] },
    { id: 'p4', title: 'The fourth answer: what every person is owed',
      cards: ['meet-rights', 'again-rights', 'portrait-rights', 'check-rights',
              'look-class-rights', 'look-nation-rights', 'look-tradition-rights', 'exc-fairstart', 'exc-lowtax', 'exc-twoduties', 'refute-race'] },
    { id: 'p5', title: 'The fifth answer: a text with no side',
      cards: ['meet-none', 'again-none', 'portrait-none', 'check-none', 'refute-insult'] },
    { id: 'p6', title: 'The fifth answer beside the other four',
      cards: ['look-class-none', 'look-nation-none', 'look-tradition-none', 'look-rights-none', 'exc-ruler'] },
    { id: 'p7', title: 'The question, two whole cases, then the drill',
      cards: ['q-sides', 'check-sides', 'worked-homes', 'worked-wage'], drill: true, close: ['recap-sides', 'transfer-sides'] }
  ],

  // The drill of a gate unit has three stages (A15): piece, route, claim; the route is one question long, so its answer is the name.
  // Items are authored in groups of look-alikes. Every case is new. These cases and the return cases are the bank that later
  // units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',            // the old quick-drill totals for this unit were stored under pl:ideology:stats:unit (frozen; see E8)
    add: 'Some of these texts are only a notice or a schedule, and some name workers and owners without taking a side. That is on purpose. Saying that no side is named is one of the five answers, and you will need it as often as the other four.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'i-p-class', step: 'D1' }, { case: 'i-p-none', step: 'D1' }],
                [{ case: 'i-p-rights', step: 'D1' }, { case: 'i-p-nation', step: 'D1' }],
                [{ case: 'i-p-tradition', step: 'D1' }, { case: 'i-p-nation2', step: 'D1' }],
                [{ tell: 'class~nation' }, { tell: 'class~rights' }],
                [{ tell: 'nation~tradition' }, { tell: 'tradition~none' }],
                [{ tell: 'nation~none' }, { tell: 'rights~none' }],
                ['i-rev-class', 'i-rev-nation', 'i-rev-tradition', 'i-rev-rights', 'i-rev-none']] },
      { ask: 'route',
        items: [['i-r-class1', 'i-r-nation1'],
                ['i-r-trad1', 'i-r-rights1', 'i-r-none1'],
                ['i-r-class2', 'i-r-nation2', 'i-r-none2'],
                ['i-r-trad2', 'i-r-rights2'],
                ['i-m-class', 'i-m-nation', 'i-m-none1', 'i-m-class2', 'i-m-nation2'],
                ['i-m-trad', 'i-m-rights', 'i-m-none2']] },
      { ask: 'claim', demo: 'i-claim-demo',
        items: [['i-claim-insult'], ['i-claim-race'], ['i-claim-faith'], ['i-claim-owner']] }
    ],
    // Fresh cases for later days: three for each answer, one for each of its scheduled returns (E9).
    // A due answer returns as a case the learner has not seen, beside a case of the answer they most often take it for.
    returns: ['i-ret-class-agency', 'i-ret-class-app', 'i-ret-class-pickers',
              'i-ret-nation-city', 'i-ret-nation-few', 'i-ret-nation-deny',
              'i-ret-trad-walk', 'i-ret-trad-carols', 'i-ret-trad-free',
              'i-ret-rights-evict', 'i-ret-rights-queue', 'i-ret-rights-trial',
              'i-ret-none-office', 'i-ret-none-savings', 'i-ret-none-commissioner']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit of Political Ideologies. Five answers taught as five families, the fifth ("no side named") with its own cases and an exception for a ruler’s orders. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' }
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
    wrongIdeas: [
      { card: 'refute-race', about: 'rights',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 9 ("A speech about how racial groups are held back is no different from Nazism, because both are about race."). It shows that the old course already treated this as a faulty idea its learners bring. Cold readers still have to say whether it is one they hold.' } },
      { card: 'refute-insult', about: 'none',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/ideology/standard0.js, the old Unit Four card "When a name is used as an insult", and docs/comprehension-audit/ideology.md (card U4C5). It shows that the old course already taught this; cold readers still have to say whether learners hold the idea.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
