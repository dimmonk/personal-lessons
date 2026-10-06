// Psychology, Unit Three: the unit record. Cards live in u3.cards-*.js, cases in u3.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {test:ledgerId} {cue:STEP}.

FC.unit('psychology', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Three',
  title: { fromKey: 'D1.tactic' },        // a branch unit is titled with the gate answer it teaches
  subtitle: 'Four things one person can do to another that work against them, and how to tell them from the many cases where none of them is happening',
  teaches: { steps: ['T1'], outcomes: ['gaslight', 'darvo', 'lovebomb', 'projection', 'ordexchange'], terms: [] },
  assumes: ['u1', 'u2'],  // everything Units One and Two teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. The key's question separates every pair,
  // because each of its answers keeps one name, so no entry comes from two names sharing an answer: every pair here is
  // one the learner will mix up. Each entry is written once and used six ways: the look-alike card ("how to tell them
  // apart"), its side-by-side table, the list on the question card, the feedback when one is picked for the other,
  // the grouping of drill items, and what returns together later. test is a question to put to a case, with no names in it.
  // The key's two tie-breaks are not restated here: they live in the key (yieldsTo) and are printed on the exception cards.
  ledger: [
    { id: 'gaslight~darvo', pair: ['gaslight', 'darvo'], step: 'T1',
      shared: 'In both, a person denies that something happened.',
      rule: '{o:darvo} is one exchange: asked about something they did, the person denies it, attacks the one who asked, and plays the one wronged. {o:gaslight} is a denial of what happened that comes back again and again over weeks or months, until the other person doubts their own memory.',
      test: 'Is this one exchange, with an attack and the speaker playing the one wronged? Or is it the same denial coming back over weeks or months, until the other person doubts their own memory?' },
    { id: 'darvo~projection', pair: ['darvo', 'projection'], step: 'T1',
      shared: 'In both, one person goes for the other about something the speaker is guilty of.',
      rule: 'In {o:darvo} the attack comes in answer to being asked about something the person did, along with a denial and the person playing the one wronged. In {o:projection} nobody has raised anything with the speaker: the accusation comes first.',
      test: 'Did someone first raise something with the speaker, so that the speaker is answering it? Or did the speaker start with the accusation?' },
    { id: 'gaslight~ordexchange', pair: ['gaslight', 'ordexchange'], step: 'T1',
      shared: 'In both, two people disagree about something that happened, and one of them says it did not happen the way the other says.',
      rule: 'The difference is how often it comes back, and what it does to the other person. In {o:gaslight} the thing really happened and the case shows it, the same denial returns over weeks or months, and the other person starts to doubt their own memory. In {o:ordexchange} it is one disagreement, or the person who says it did not happen is right, and each person still trusts their own memory.',
      test: 'Does the case show that the thing really happened? Does the same denial come back over weeks or months? Does the other person now doubt their own memory? Or is this one disagreement that gets settled?' },
    { id: 'darvo~ordexchange', pair: ['darvo', 'ordexchange'], step: 'T1',
      shared: 'In both, someone is told about something and answers with a denial or with anger.',
      rule: 'In {o:darvo} the case shows the person did it, and the answer is a denial, an attack on the one who raised it, and a claim to be the one wronged: all three. In {o:ordexchange} the answer may be a denial, or angry, or sharp, but either the case shows the person did not do it, or the answer is not all three.',
      test: 'Does the case show that the person did what was raised with them? And is the answer a denial, an attack on the one who raised it, and a claim to be the one wronged: all three?' },
    { id: 'lovebomb~ordexchange', pair: ['lovebomb', 'ordexchange'], step: 'T1',
      shared: 'In both, someone is warm and generous early in a relationship.',
      rule: 'In {o:lovebomb} the attention is far more than the relationship so far would explain, and it is later pulled back or turns into criticism. In {o:ordexchange} the warmth fits how well the two know each other, or it stays when the other person sets a limit.',
      test: 'Set the attention against how long the two have known each other. Is it far more? Then ask what happens to it later, when the other person says no or goes their own way.' },
    { id: 'projection~ordexchange', pair: ['projection', 'ordexchange'], step: 'T1',
      shared: 'In both, one person accuses the other of something.',
      rule: 'In {o:projection} the case shows the accuser doing or feeling it, and nothing shows the other person doing it. In {o:ordexchange} the case shows the other person doing it, so the accusation is fair, even if the accuser does it too.',
      test: 'Who does the case show doing or feeling what is being said: the person accused, the accuser, or both?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts.
  // The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The four things, and the ordinary exchange',
      cards: ['orient', 'meet-gaslight', 'check-gaslight', 'meet-darvo', 'check-darvo', 'exc-memory',
              'meet-projection', 'check-projection', 'exc-own',
              'meet-lovebomb', 'check-lovebomb', 'meet-ordexchange', 'check-ordexchange'] },
    { id: 'p2', title: 'Telling them apart, then the drill',
      cards: ['look-gaslight-ord', 'look-darvo-ord', 'look-lovebomb-ord', 'look-projection-ord',
              'q-does', 'check-does', 'worked-booking'], drill: true, close: ['recap'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u3',            // the old quick-drill totals for this unit were stored under pl:psychology:stats:u3 (frozen; see E8)
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'p-gas', step: 'T1' }, { case: 'p-love', step: 'T1' }],
                [{ tell: 'gaslight~darvo' }, { tell: 'darvo~projection' }, { tell: 'gaslight~ordexchange' }, { tell: 'lovebomb~ordexchange' }]] },
      { ask: 'route',
        items: [['r-gas1', 'r-ord1', 'r-love1'],
                ['r-dar1', 'r-proj1'],
                ['r-dar-m', 'r-ord-m1'],
                [{ earlier: 'u1' }],
                [{ earlier: 'u2' }]] }
    ],
    // Fresh cases for later days: one for each name (E9). A due name returns as a case the learner has not seen,
    // beside a case of the name they most often take it for.
    returns: ['ret-tenancy', 'ret-drive', 'ret-climb', 'ret-calls', 'ret-refund']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
