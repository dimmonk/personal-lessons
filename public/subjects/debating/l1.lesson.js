// Debating, lesson 1, what kind of conversation is this? (unit 1). The way of thinking begins here: name the kind of talk before you answer in it, by what it started from,
// what each person is trying to get and what would count as finished, and watch for a change of kind (docs/research/debating.md, F1: Walton and Krabbe's six primary kinds
// of dialogue, and Walton's treatment of mixed talks and shifts). One talk is worked step by step; the practice sets two look-alikes side by side with the deciding words
// marked, then all six kinds and two talks that change, with nothing marked; the check names eight talks the practice never showed. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l1', part: '1', title: 'What kind of conversation is this?', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, rebuilt on Walton and Krabbe\'s six kinds of dialogue (research note F1): persuading, deciding together, bargaining, finding out together, asking and quarrel, told apart by what the talk started from and what each person is trying to get, and a talk that changes kind. Every talk holds its own cue.' }],
  why: [
    'Two neighbors argue about a fence. One says it leans over the property line. The other says it does not. A week later they choose a new fence together. Then they argue about who pays. Then one calls the other a slob. It is one fence and four kinds of talk, and what is fair play in one is out of place in another.',
    'Before you answer anyone, work out which kind of talk you are in. In about fifteen minutes you will learn six kinds and practice telling them apart.'
  ],
  flow: [
    { title: 'Three questions to check early',
      show: [
        { kind: 'prose', text: [
          'Check these early in a talk, and again if it seems to change (that advice is ours, not a finding).',
          '1. What did the talk start from? A claim one person doubts, a choice to make, things you each want, a question nobody can answer yet, a person who does not know something, or a grievance.',
          '2. What is each person trying to get out of it?',
          '3. What would count as finished?'] }
      ] },
    { title: 'Six kinds of talk',
      show: [
        { kind: 'prose', text: [
          'Persuading. It starts from a claim one person holds and the other doubts. Each gives reasons to win the other over. It is finished when the difference is settled.',
          'Deciding together. It starts from a choice that has to be made, and the people share it. Each puts forward options and weighs them for the group. It is finished when the group picks one.',
          'Bargaining. It starts from wants that compete: what one gets, the other gives up. Each tries to get the most they can. It is finished when both can live with the split.',
          'Finding out together. It starts from a question nobody in the talk can answer yet. All of you want the answer. It is finished when you have it.',
          'Asking. It starts when one person lacks something and another is believed to have it. The first wants the answer and the other gives it. It is finished when the first has the answer.',
          'Quarrel. It starts from a grievance between the two people. Each wants to hit back or vent anger. It is not trying to settle anything. At best it shows what the real conflict is.',
          'Persuading and deciding together can both be about what to do. The difference is in the start. If one person holds a claim and tries to win the other over to it, that is persuading. If the choice is shared and the options are weighed for everyone, that is deciding together.'] }
      ] },
    { title: 'Loud is not the test',
      show: [
        { kind: 'prose', text: [
          'Two brothers shout across the driveway about who pays for Dad\'s new roof, and settle it 60 and 40. Two coworkers speak politely at lunch while each lists the other\'s past mistakes.',
          'The loud one is bargaining: each wants to pay less, and they trade toward a split. The polite one is a quarrel: every line hits at the other person. Loud or calm does not tell you the kind. What the talk is for does.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '"The topic tells you the kind of talk. Politics is always a fight, and money is always a bargain."',
          'The same topic can be any of the six. Look at what the talk started from and what each person is trying to get.'] }
      ] },
    { title: 'Real talks mix and change',
      show: [
        { kind: 'prose', text: [
          'A talk does not always stay in one kind. It can change partway, and a single line can be for two things at once, such as a point and an insult.',
          'Some changes help. If two people deciding on a date stop so one can put a question the other can answer, that is a short stretch of asking, and the decision needs it. Some changes block. If two people bargaining start going after each other, the deal gets blocked.',
          'People often miss the change. If you keep trading reasons after the talk has turned into a quarrel, you are answering a question nobody is asking.',
          'When a talk is mixed, do not force one label. Look at the line in front of you and say what it is for.'] }
      ] },
    { worked: 'w1-offsite' },
    { set: { items: [['a1-bump-claim', 'a1-bump-choice'], ['a1-parking-deal', 'a1-parking-fight']], order: 'listed', support: { shown: true } } },
    { set: { items: ['b1-water', 'b1-expenses', 'b1-roof', 'b1-house', 'b1-shift', 'b1-cabin'], order: 'shuffle' } }
  ],
  check: {
    items: ['c1-thermostat', 'c1-vendor', 'c1-swap', 'c1-wifi', 'c1-noise', 'c1-dinner', 'c1-chores', 'c1-lane'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
