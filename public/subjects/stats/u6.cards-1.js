// Statistical Claims, Unit Six, part one (first half): the opening card and the first name, a result with nothing to set beside it.
// This is a branch unit of an action subject: every name says what to do when you meet it (`act` on its meet card), and the unit closes with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of the
// earlier questions, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet
// card, the "also called" sentence and the stem of every commit prompt.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a claim), part
// (one of the four parts a claim is built from), group (the people or things a figure is worked out from), result (what happened to a group).

FC.cards('stats', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'When a claim gives one thing as the reason for another',
    canDo: 'After this unit you can read a claim that gives one thing as the reason for another, and say which of four other explanations of the same result is open, from the words of the claim. The claim can be a headline, an ad, a report, or something a friend tells you.',
    everyday: [
      'You already know the raw material. "Since we started the program, results are up, so it works." "People who take the stairs live longer, so take the stairs." "Everyone who tried the cream says it cleared up their skin." Each of these gives one thing as the reason for another, and each might be right.',
      'The trouble is that a result can arrive by more than one road. This unit teaches four other roads to the same result, what to point to in a claim to say which one is open, and what a claim looks like when none of them is, because a claim that has been tested fairly deserves to be believed.'
    ],
    map: { branch: 'cause' } },

  /* ---------- No comparison group ---------- */
  { id: 'meet-nocontrol', kind: 'meet', outcome: 'nocontrol',
    link: 'The first three parts of a claim can all hold, and the claim can still go wrong at the fourth, when it gives one thing as the reason for another. The question for that part is {q:K1} Here is the first of its four answers.',
    case: 'k-sleepapp', mark: 'K1',
    strip: [
      'There is a claim that something worked: "Our new bedtime app works."',
      'There is a result for the people who got it: 64 of the 80 patients sleep better.',
      'There is no result for anyone who went without it.',
      'So the figures cannot say how many of the 80 would have slept better anyway.'
    ],
    explain: [
      'People go to a sleep clinic when they are sleeping badly, and bad stretches of sleep often end by themselves. If most patients would sleep better after a month with or without an app, 64 out of 80 tells you very little about the app.',
      'Suppose 80 similar patients who did not get the app had been followed too. If 24 of them slept better, the app added a lot: from 3 in 10 up to 8 in 10. If 56 of them did, it added little: from 7 in 10 up to 8 in 10. The clinic’s claim gives the same 64 out of 80 in both worlds, so its figure cannot say which one is real.',
      'What is missing is a second group of patients, as much like the first as can be managed, who went without the app and were counted in the same way. The same holds for one place counted before and after: a café’s sales climb and fall with the season, whatever is on the menu. This does not say the app is useless. It says these figures cannot show it.'
    ],
    feature: { step: 'K1', option: 'anyway' },
    name: [
      'The name for this is {o:nocontrol}. A comparison group is a second group, as like the first as can be managed, that did not get the thing and was counted in the same way, so that its result can be set beside the first group’s.',
      'The words that carry this kind of claim are "works", "helped", "since we started" and "everyone who tried it". They are the speaker’s. The figures do not contain them.'
    ],
    act: 'Ask what happened to people, or places, that did not get the thing and were counted in the same way. If the claim does not say, treat it as not shown. That is not the same as false.' },

  { id: 'check-nocontrol', kind: 'check', after: 'nocontrol',
    case: 'k-roundup',
    ask: { type: 'phrase', step: 'K1', say: 'Which words show what is missing from the figures? Tap them.',
           answer: 'The app gives no figures for users who left the feature off' } }
]);
