// Psychology, Unit One: cases shown inside cards (the first two kinds and the look-alike pair that joins them).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one kind share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.D1 is the reason for this case's answer. not names the nearest wrong kind
// (a ledger neighbor) and says why it fails for this case. also lists an answer the case shows as well as its
// own, which loses to its own by a tie-break in the key.

FC.cases('psychology', 'u1', [

  { id: 'g-job', use: 'teach', tier: 'clean', setting: 'work', topic: 'a job offer in another city', name: 'The job offer',
    text: "Leila has been offered a better-paid job in another city. She tells her sister, 'The money is better, but I'd lose two hours a day to the train and I'd hardly see the children. I'm turning it down.'",
    route: { D1: ['reasoning'] },
    cues: { D1: "The money is better, but I'd lose two hours a day to the train and I'd hardly see the children. I'm turning it down." } },

  { id: 'g-car', use: 'check', tier: 'clean', setting: 'money', topic: 'keeping an old car',
    text: "Esme has decided to keep her old car for another year. She tells her neighbor why: 'The repair was $300, and a new one would cost me $200 a month. It can wait.'",
    route: { D1: ['reasoning'] },
    cues: { D1: 'The repair was $300, and a new one would cost me $200 a month' },
    segments: [
      { text: 'Esme has decided to keep her old car for another year', note: 'That is the choice, and it is half of what you point to. The question asks for the other half: the reasons she gives for it.' },
      { text: 'She tells her neighbor why', note: 'That only tells you who is listening. The neighbor could be anyone, and the case would be the same.' },
      { text: 'The repair was $300, and a new one would cost me $200 a month' }
    ],
    reason: { D1: 'These words are Esme’s reasons for a choice of her own: what the repair cost, set against what a new car would cost. The neighbor only listens. Nothing is said about the neighbor, and nothing in the case goes beyond this one choice.' } },

  { id: 'g-deadline', use: 'teach', tier: 'clean', setting: 'work', topic: 'a late report', name: 'The deadline',
    text: "On Tuesday Ben asks Carla why the client report went out late. Carla says she never agreed to that date, although her own email from last week says 'Thursday is fine'. Then she tells Ben that he is the one who is always disorganized. Ben goes back to his desk and starts checking his own calendar.",
    route: { D1: ['tactic'] },
    cues: { D1: ['Carla says she never agreed to that date', 'she tells Ben that he is the one who is always disorganized'] } },

  { id: 'g-phonecall', use: 'check', tier: 'clean', setting: 'home', topic: 'a mother’s phone call',
    text: "When Rob's mother calls, she tells him that his sister visits every week, and that a son who cared would do the same. Rob puts down the phone and cancels his weekend trip.",
    route: { D1: ['tactic'] },
    cues: { D1: 'she tells him that his sister visits every week, and that a son who cared would do the same' },
    reason: { D1: 'The case shows something one person says to another, and it is about him: {cue:D1}. It also shows where that leaves Rob: he cancels his weekend. Take Rob out, and there is nothing left to look at.' },
    not: { outcome: 'reasoning', why: 'His mother is not giving reasons for a view or a choice of her own. What she says is about Rob, and it is said to Rob.' } },

  { id: 'g-birthday-brother', use: 'teach', tier: 'clean', setting: 'home', topic: 'a forgotten birthday, told to a brother', name: 'Dev and the forgotten birthday',
    text: "Dev forgot his wife's birthday. That evening he tells his brother on the phone, 'I've been working twelve-hour days for a month. Anyone would have lost track of the date.'",
    route: { D1: ['reasoning'] },
    cues: { D1: "I've been working twelve-hour days for a month. Anyone would have lost track of the date." } },

  { id: 'g-birthday-wife', use: 'teach', tier: 'clean', setting: 'home', topic: 'a forgotten birthday, and what was said to the wife',
    text: "Dev forgot his wife's birthday. When she says she is hurt, he tells her, 'You're too sensitive. You always make a drama out of nothing.' She ends up apologizing for bringing it up.",
    route: { D1: ['tactic'] },
    cues: { D1: "You're too sensitive. You always make a drama out of nothing." } }
]);
