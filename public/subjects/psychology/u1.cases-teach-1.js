// Psychology, Unit One: cases shown inside cards, parts one and two (the first two kinds).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one kind share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.D1 is the reason for this case's answer. not names the nearest wrong kind
// (a ledger neighbour) and says why it fails for this case. also lists an answer the case shows as well as its
// own, which loses to its own by a tie-break in the key.

FC.cases('psychology', 'u1', [

  /* ---------- One person's reasoning ---------- */
  { id: 'g-job', use: 'teach', tier: 'clean', setting: 'work', topic: 'a job offer in another city', name: 'The job offer',
    text: "Leila has been offered a better-paid job in another city. She tells her sister, 'The money is better, but I'd lose two hours a day to the train and I'd hardly see the children. I'm turning it down.'",
    route: { D1: ['reasoning'] },
    cues: { D1: "The money is better, but I'd lose two hours a day to the train and I'd hardly see the children. I'm turning it down." } },

  { id: 'g-street', use: 'teach', tier: 'clean', setting: 'community', topic: 'crime on a street', name: 'The street',
    text: "Pavel is sure his street has become more dangerous. His daughter shows him the police figures for the year, which are the lowest on record. 'Figures don't tell you what it feels like to walk home at night,' he says.",
    route: { D1: ['reasoning'] },
    cues: { D1: "Figures don't tell you what it feels like to walk home at night" },
    segments: [
      { text: 'Pavel is sure his street has become more dangerous', note: 'That is his view, and a view is half of what you point to. The other half is what he does to keep it, and that is in his reply.' },
      { text: 'His daughter shows him the police figures for the year', note: 'That is his daughter bringing a fact. The case is not about what she does to him. It is about what he does with the fact.' },
      { text: "Figures don't tell you what it feels like to walk home at night" }
    ] },

  { id: 'g-car', use: 'check', tier: 'clean', setting: 'money', topic: 'keeping an old car',
    text: "Esme has decided to keep her old car for another year. She tells her neighbour why: 'The repair was £300, and a new one would cost me £200 a month. It can wait.'",
    route: { D1: ['reasoning'] },
    cues: { D1: 'The repair was £300, and a new one would cost me £200 a month' },
    segments: [
      { text: 'Esme has decided to keep her old car for another year', note: 'That is the choice, and it is half of what you point to. The question asks for the other half: the reasons she gives for it.' },
      { text: 'She tells her neighbour why', note: 'That only tells you who is listening. The neighbour could be anyone, and the case would be the same.' },
      { text: 'The repair was £300, and a new one would cost me £200 a month' }
    ],
    reason: { D1: 'These words are Esme’s reasons for a choice of her own: what the repair cost, set against what a new car would cost. The neighbour only listens. Nothing is said about the neighbour, and nothing in the case goes beyond this one choice.' } },

  /* ---------- Something one person does to another ---------- */
  { id: 'g-deadline', use: 'teach', tier: 'clean', setting: 'work', topic: 'a late report', name: 'The deadline',
    text: "On Tuesday Ben asks Carla why the client report went out late. Carla says she never agreed to that date, although her own email from last week says 'Thursday is fine'. Then she tells Ben that he is the one who is always disorganised. Ben goes back to his desk and starts checking his own calendar.",
    route: { D1: ['tactic'] },
    cues: { D1: ['Carla says she never agreed to that date', 'she tells Ben that he is the one who is always disorganised'] } },

  { id: 'g-flatmates', use: 'teach', tier: 'clean', setting: 'home', topic: 'a new relationship and old friends', name: 'The old flatmates',
    text: "Three weeks after they started going out, Felix told Dana that she was the only person who had ever understood him, and asked her to stop seeing her old flatmates so much, because 'they don't get us'. Dana has not been back to her old flat since.",
    route: { D1: ['tactic'] },
    cues: { D1: 'Felix told Dana that she was the only person who had ever understood him, and asked her to stop seeing her old flatmates so much' },
    segments: [
      { text: 'Three weeks after they started going out', note: 'That is when it happened. It tells you how new the relationship is. It is not something said or done to Dana.' },
      { text: 'Felix told Dana that she was the only person who had ever understood him, and asked her to stop seeing her old flatmates so much' },
      { text: 'Dana has not been back to her old flat since', note: 'That is where it has left Dana, and cases of this kind usually show it. But you were asked for what was said or done to her, and that is in the sentence before.' }
    ] },

  { id: 'g-phonecall', use: 'check', tier: 'clean', setting: 'home', topic: 'a mother’s phone call',
    text: "When Rob's mother phones, she tells him that his sister visits every week, and that a son who cared would do the same. Rob puts down the phone and cancels his weekend away.",
    route: { D1: ['tactic'] },
    cues: { D1: 'she tells him that his sister visits every week, and that a son who cared would do the same' },
    reason: { D1: 'The case shows something one person says to another, and it is about him: {cue:D1}. It also shows where that leaves Rob: he cancels his weekend. Take Rob out, and there is nothing left to look at.' },
    not: { outcome: 'reasoning', why: 'His mother is not giving reasons for a view or a choice of her own. What she says is about Rob, and it is said to Rob.' } },

  /* ---------- The look-alike pair: same man, same forgotten birthday, two kinds ---------- */
  { id: 'g-birthday-brother', use: 'teach', tier: 'clean', setting: 'home', topic: 'a forgotten birthday, told to a brother', name: 'Dev and the forgotten birthday',
    text: "Dev forgot his wife's birthday. That evening he tells his brother on the phone, 'I've been working twelve-hour days for a month. Anyone would have lost track of the date.'",
    route: { D1: ['reasoning'] },
    cues: { D1: "I've been working twelve-hour days for a month. Anyone would have lost track of the date." } },

  { id: 'g-birthday-wife', use: 'teach', tier: 'clean', setting: 'home', topic: 'a forgotten birthday, and what was said to the wife',
    text: "Dev forgot his wife's birthday. When she says she is hurt, he tells her, 'You're too sensitive. You always make a drama out of nothing.' She ends up apologising for bringing it up.",
    route: { D1: ['tactic'] },
    cues: { D1: "You're too sensitive. You always make a drama out of nothing." } },

  /* ---------- The exception: a reason for your own act that is made out of the other person ---------- */
  { id: 'g-shouting', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a reason for shouting', name: 'The shouting',
    also: ['reasoning'],
    text: "After a row, Marta says to her husband Kofi, 'I only shouted because you never listen. If you listened, I wouldn't have to.' Kofi spends the rest of the evening asking himself whether he ever listens.",
    route: { D1: ['tactic'] },
    cues: { D1: 'because you never listen' },
    segments: [
      { text: 'I only shouted', note: 'That is what she did, and she is about to give a reason for it. On its own it would fit the first kind as well. What settles the case is who the reason is about.' },
      { text: 'because you never listen' },
      { text: 'Kofi spends the rest of the evening asking himself whether he ever listens', note: 'That is where it leaves Kofi, and it confirms the answer. What settles it comes earlier: the words that make the reason about him.' }
    ] }
]);
