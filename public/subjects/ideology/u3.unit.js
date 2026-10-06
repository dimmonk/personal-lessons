// Political Ideologies, Unit Three: the unit record. A BRANCH unit: it teaches the two questions and the five names behind the
// key's second answer, "The nation, or its ordinary people". Cards live in u3.cards-*.js, cases in u3.cases-*.js.
// Every text in the unit is invented. Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('ideology', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Three',
  title: { fromKey: 'D1.nation' },        // a branch unit is titled with the gate answer it teaches
  subtitle: 'Five names for a text that puts one people first, and the two questions that tell them apart',
  teaches: { steps: ['N1', 'N2'], outcomes: ['nationalism', 'fasc', 'natpop', 'pop', 'nazi'], terms: ['elite'] },
  assumes: ['u1', 'u2'],  // everything Units One and Two teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry for every pair that some answer keeps together (nine pairs), as lesson standard V15 asks.
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list
  // on the question card, the feedback when one is picked for the other, the grouping of drill items, and what returns together
  // later. test is a question to put to a case, with no names in it. The one pair no answer keeps together (Fascism and Populism
  // with nothing attached) is left out: no learner mixes them up, because they share no answer to either question.
  ledger: [
    { id: 'nationalism~fasc', pair: ['nationalism', 'fasc'], step: 'N2',
      shared: 'Both speak for everyone in the country as one people and put it first, and both can sound loud, proud and sure of themselves.',
      rule: 'In {o:nationalism} the text lets the voters keep their say. In {o:fasc} the answer to the second question is {a:N2.aside}: the text takes the voters’ say away, and with it the say of other parties and of anyone who objects.',
      test: 'Look at what the text wants done with elections, other parties and people who disagree. Are they left in place, or are they to go?' },
    { id: 'natpop~fasc', pair: ['natpop', 'fasc'], step: 'N2',
      shared: 'Both can blame a few at the top, and both can ask for the country’s industry, culture or borders to come first.',
      rule: 'On the first question both can have the answer {a:N1.elitenation}. They part on the second: {o:natpop} leaves the vote in place, and {o:fasc} gets {a:N2.aside}. The first replaces those at the top by voting them out. The second takes the vote away.',
      test: 'Does the text ask the voters to remove those at the top? Or does it go further, and take away elections, other parties or the right to object?' },
    { id: 'nationalism~natpop', pair: ['nationalism', 'natpop'], step: 'N1',
      shared: 'Both put the nation first, both leave the vote in place, and both can be angry about the way the country is run.',
      rule: 'In {o:nationalism} the text speaks for everyone, and nobody inside the country is named as the other side. In {o:natpop} the text speaks for the country’s ordinary people against an {t:elite}, so that someone inside the country is the other side.',
      test: 'Is anyone inside the country named as the other side, a few at the top set against everyone else? Or does the text speak for everyone alike?' },
    { id: 'nationalism~pop', pair: ['nationalism', 'pop'], step: 'N1', taughtIn: 'portrait-pop',
      shared: 'Both leave the vote in place and rank nobody, and both can say that they speak for the people.',
      rule: 'In {o:nationalism} the whole nation is spoken for as one, and nobody inside it is named as the other side. In {o:pop} the text is angry at an {t:elite} on behalf of ordinary people, and says no more.',
      test: 'Does the text speak for everyone, or set ordinary people against a few at the top? If it does the second, does it add anything about what the country itself should have?' },
    { id: 'nationalism~nazi', pair: ['nationalism', 'nazi'], step: 'N1', taughtIn: 'portrait-nazi',
      shared: 'Both put one people first, and both can leave the vote in place.',
      rule: 'In {o:nationalism} everyone in the country is spoken for as one, and nobody is ranked below anybody else. In {o:nazi} the text divides people by descent into peoples worth more and peoples worth less, and puts its own on top.',
      test: 'Does the text rank peoples by blood or birth, with its own above the others? Or does it speak for everyone in the country as equals?' },
    { id: 'natpop~pop', pair: ['natpop', 'pop'], step: 'N1',
      shared: 'Both set ordinary people against a few at the top, and both leave the vote in place.',
      rule: 'The difference is what else the text asks for. {o:natpop} also wants the country’s borders, culture or industry put first, so its answer is {a:N1.elitenation}. {o:pop} asks for nothing more than getting those at the top out of the way, so its answer is {a:N1.eliteonly}.',
      test: 'After the text has set ordinary people against those at the top, does it say anything about the country’s borders, culture or industry? If it does not, nothing more is attached.' },
    { id: 'natpop~nazi', pair: ['natpop', 'nazi'], step: 'N1', taughtIn: 'portrait-nazi',
      shared: 'Both put one people first, and both can leave the vote in place.',
      rule: 'In {o:natpop} the people is the country’s ordinary people, set against a few at the top. In {o:nazi} the people is marked out by blood and ranked above other peoples, and who counts as the other side is decided by blood or birth, not by being at the top.',
      test: 'Who is the text against: a few at the top, or peoples that it ranks lower by blood or birth?' },
    { id: 'pop~nazi', pair: ['pop', 'nazi'], step: 'N1', taughtIn: 'portrait-nazi',
      shared: 'Both are angry, and both say that the wrong people are in charge.',
      rule: 'In {o:pop} the only line drawn is between ordinary people and an {t:elite}. In {o:nazi} the line is drawn by blood or birth, between peoples ranked higher and lower.',
      test: 'Is the only line the one between ordinary people and a few at the top? Or are peoples ranked by blood or birth?' },
    { id: 'fasc~nazi', pair: ['fasc', 'nazi'], step: 'N1',
      shared: 'Both can end the vote, shut out other parties and silence critics, and both can be full of marches, uniforms and talk of one nation.',
      rule: 'In {o:fasc} the people is the whole nation, or the country’s ordinary people against an {t:elite}, and nobody is ranked by blood. In {o:nazi} peoples are ranked by blood or birth and the text’s own is placed above the rest. The answer goes by that ranking alone: a text that ranks peoples by blood gets {a:N1.blood}, whatever it says about the vote.',
      test: 'Does the text rank peoples by blood or birth, with its own above the others? Or does it speak of one nation, or of its ordinary people, with nobody ranked by blood?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the answers of the unit's
  // first question (lesson standard A13). The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The whole nation, and what it does with the vote',
      cards: ['orient', 'term-elite', 'meet-nationalism', 'again-nationalism', 'lens', 'portrait-nationalism', 'check-nationalism',
              'meet-fasc', 'again-fasc', 'portrait-fasc', 'check-fasc', 'look-nationalism-fasc', 'refute-borders'] },
    { id: 'p2', title: 'Ordinary people against a few at the top',
      cards: ['meet-natpop', 'again-natpop', 'portrait-natpop', 'check-natpop',
              'meet-pop', 'again-pop', 'portrait-pop', 'check-pop',
              'look-nationalism-natpop', 'look-natpop-pop', 'exc-elitefasc', 'refute-socialist'] },
    { id: 'p3', title: 'One people ranked by blood, and what every dictatorship does',
      cards: ['meet-nazi', 'again-nazi', 'portrait-nazi', 'check-nazi', 'look-fasc-nazi', 'exc-methods', 'refute-nazisocialist'] },
    { id: 'p4', title: 'The two questions',
      cards: ['q-who', 'check-who', 'q-elections', 'check-elections', 'refute-lots', 'refute-horseshoe'] },
    { id: 'p5', title: 'Two whole cases, then the drill',
      cards: ['worked-natpop', 'worked-torchlit'], drill: true, close: ['recap', 'transfer'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u3',            // the old quick-drill totals for this subject were stored under other keys (frozen; see E8)
    add: 'Some of these texts are loud and some are calm, and neither tells you the name. A few are built to look like a text you met on the cards and to be another. Go by the words that answer the questions.',
    rungs: [
      { ask: 'name',
        items: [['n-nm-nat', 'n-nm-fasc'], ['n-nm-natpop', 'n-nm-pop'], ['n-nm-fasc2', 'n-nm-nazi']] },
      { ask: 'piece',
        items: [[{ case: 'n-pc-whole', step: 'N1' }, { case: 'n-pc-elitenation', step: 'N1' }],
                [{ case: 'n-pc-eliteonly', step: 'N1' }, { case: 'n-pc-blood', step: 'N1' }],
                [{ case: 'n-pc-aside', step: 'N2' }, { case: 'n-pc-keep', step: 'N2' }],
                [{ tell: 'nationalism~fasc' }, { tell: 'nationalism~natpop' }, { tell: 'natpop~pop' }, { tell: 'fasc~nazi' }],
                [{ separator: 'nationalism~fasc' }, { separator: 'natpop~fasc' }, { separator: 'nationalism~natpop' }, { separator: 'fasc~nazi' }],
                ['n-rev-nationalism', 'n-rev-fasc', 'n-rev-natpop', 'n-rev-pop', 'n-rev-nazi'],
                [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['n-fn-nat', 'n-fn-natpop'], ['n-fn-fasc', 'n-fn-nazi']] },
      { ask: 'route',
        items: [['n-rt-coin', 'n-rt-shipyard'],
                ['n-rt-theater', 'n-rt-pension'],
                ['n-rt-frontier', 'n-rt-drought'],
                ['n-rt-decree', 'n-rt-language', 'n-rt-fares'],
                ['n-rt-parade', 'n-rt-letter'],
                ['n-rt-unity', 'n-rt-budget'],
                [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'n-claim-demo',
        items: [['n-claim-borders'], ['n-claim-lots'], ['n-claim-socialist'], ['n-claim-nazieco'], ['n-claim-horseshoe']] }
    ],
    // Fresh cases for later days: three for each name, one for each of its scheduled returns (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['n-ret-flood', 'n-ret-exam', 'n-ret-crossing',
              'n-ret-order', 'n-ret-station', 'n-ret-front',
              'n-ret-ferry', 'n-ret-museum', 'n-ret-cheese',
              'n-ret-parking', 'n-ret-payrise', 'n-ret-exam-fees',
              'n-ret-stalls', 'n-ret-clinic', 'n-ret-statue']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the branch unit for the key’s second answer. Two questions, five names, one term. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' }
    ],
    // What changed in the key for this branch, and why (K2). From docs/rebuild/ideology-plan.md, part a.
    keyChanges: [
      { step: 'N1', was: 'none: the old key asked a first-answer choice among "The nation", "Ordinary people against an elite" and "One race ranked above the others"',
        now: '"Who does the text speak for, and against whom?": the whole nation / ordinary people against an elite with the nation put first / ordinary people against an elite and nothing more / one people by blood, ranked above the others',
        why: 'K2.2: who the people is set against separates four of the five names. The old three answers overlapped (one name under two answers on 4 of 13 names), and "is anything attached?" was an extra check the old key never asked or scored.' },
      { step: 'N1', was: '"One race ranked above the others" as a first answer; Nazism when the ranking is the center, Fascism when race comes in only in passing',
        now: 'an answer of N1; a text that ranks peoples by blood gets it, and N1 alone decides Nazism',
        why: 'K2.8: the old line could not be read off a short text. The key\'s decision, said plainly on the Nazism card: the field draws the line in other places, and the key draws it at the ranking.' },
      { step: 'N2', was: 'an extra check: "What does the text want done with elections, courts and a free press?" (four free-prose options)',
        now: '"What does the text want done with elections and with those who disagree?": two answers',
        why: 'K2.2, K2.4: what separates Fascism from Nationalism and from National populism is now a question with two answers an observer can point to. Nazism sits under both on purpose; the question card says why.' },
      { outcome: 'fasc', was: 'a "cluster" of ten markers, no threshold (audit U3 item 4)',
        now: 'the nation as one people (or its people against an elite, nation first), and elections, parties or critics done away with',
        why: 'K2.7: one line that holds for every case. The rebirth story, marches and the steered economy are what the name is usually like, and the portrait says none decides it.' },
      { outcome: 'nationalism', was: 'a card in an old unit, "not a name the key can lead to"', now: 'a name of the key: the nation first, no elite named, no ranking by blood, elections left alone',
        why: 'K2.9: a text that loves its country and keeps the vote is the sound case of this branch, and the commonest target of the insult "fascist".' },
      { outcome: 'natpop', was: 'kept by two first answers; "works through elections" in prose', now: 'needs written: people against an elite, the nation first, elections left in place', why: 'K2.7.' },
      { outcome: 'pop', was: '"Populism with nothing attached", needs not written', now: 'same name; needs written', why: 'Kept: it is the old app\'s own plain name, and the model for the matching name in the working-people branch.' },
      { outcome: 'nazi', was: 'kept by "The nation" and "One race ranked above the others"', now: 'needs: peoples ranked by blood, its own above the others', why: 'K2.7.' }
    ],
    // Wrong ideas the unit names (V22). Each is something the old course already treated as a faulty idea its learners bring (app-data);
    // cold readers still have to say whether they hold it. No correction asserts a fact about a real party or regime: each rests on the key.
    wrongIdeas: [
      { card: 'refute-borders', about: 'nationalism',
        source: { kind: 'app-data', verified: true, ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 5, and docs/comprehension-audit/ideology.md.' } },
      { card: 'refute-socialist', about: 'pop',
        source: { kind: 'app-data', verified: true, ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 7.' } },
      { card: 'refute-nazisocialist', about: 'nazi',
        source: { kind: 'app-data', verified: true,
          ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 12 and the old Unit Three card "But the Nazis were socialists". The plan says historical facts about that regime need a published source; this correction asserts none and rests on the key alone. A later revision that adds a historical claim needs a published source with verified: true first.' } },
      { card: 'refute-lots', about: 'N2',
        source: { kind: 'app-data', verified: true, ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 3, and the old Unit Four card on statism.' } },
      { card: 'refute-horseshoe', about: 'fasc',
        source: { kind: 'app-data', verified: true, ref: 'public/subjects/ideology/standard0.js, IDEOLOGY_ERR item 4, and the old Unit Four horseshoe card.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
