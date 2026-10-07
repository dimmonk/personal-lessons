// Statistical Claims, Unit Six, part one (first half): the opening card and the first name, a result with nothing to set beside it.
// This is a branch unit of an action subject: every name says what to do when you meet it (`act` on its meet card), and the unit closes with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of the
// earlier questions, the preview map, the heading of a meet card, the "also called" sentence and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps), then the name, then what to do (act: numbered steps).
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a claim), part
// (one of the four parts a claim is built from), group (the people or things a figure is worked out from), result (what happened to a group).

FC.cards('stats', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'Before you believe “it worked”, check what else could explain it',
    canDo: 'When a headline, an ad or a friend says one thing caused another, look for other explanations before you believe it or copy it. There are four other explanations to look for, and each needs a different check.',
    everyday: [
      'You hear this all the time. “Since we started the program, results are up, so it works.” “People who take the stairs live longer, so take the stairs.” “Everyone who tried the cream says it cleared up their skin.” Each of these might be right.',
      'But a result can happen in more than one way. This unit teaches the four other ways, how to spot each one in the words of a claim, and what a claim looks like when none of them is open: groups formed by a draw can be believed.'
    ],
    map: { branch: 'cause' } },

  /* ---------- No comparison group ---------- */
  { id: 'meet-nocontrol', kind: 'meet', outcome: 'nocontrol',
    link: 'Someone says an app, a program or a habit worked. Before you believe it, ask: {q:K1}',
    case: 'k-sleepapp', mark: 'K1',
    explain: [
      'The clinic says 64 of 80 patients sleep better after a month with the app. But people go to a sleep clinic when they are sleeping badly, and bad stretches of sleep often end by themselves. If most of them would have slept better anyway, 64 out of 80 tells you very little about the app.',
      'Suppose the clinic had also followed 80 similar patients who went without the app. If 24 of them slept better, the app added a lot: from 3 in 10 up to 8 in 10. If 56 did, it added little: from 7 in 10 up to 8 in 10. The clinic’s 64 out of 80 looks the same in both worlds, so it cannot tell you which one is real. That does not make the app useless. It means these figures cannot show that it works.'
    ],
    spot: [
      { do: 'Find the claim that it worked: “Our new bedtime app works.”', why: 'Words like “works”, “helped” and “since we started” are where this check begins.' },
      { do: 'Find who the result is for: the 80 patients who used the app.', why: 'Check whether it covers only the people who got the thing, or only one place before and after.' },
      { do: 'Look for a group that went without: there is none.', why: 'Without one, nobody can say how many would have slept better anyway.' }
    ],
    feature: { step: 'K1', option: 'anyway' },
    name: 'This is {o:nocontrol}. A comparison group is a second group, like the first, that did not get the thing and was counted the same way.',
    act: [
      { do: 'Ask what happened to people who did not get it, such as patients who went without the app.', why: 'Their result is the one to set beside the clinic’s 64 out of 80.' },
      { do: 'If the claim does not say, treat it as not shown.', why: 'Not shown is not the same as false.' }
    ] },

  { id: 'check-nocontrol', kind: 'check', after: 'nocontrol',
    case: 'k-roundup',
    ask: { type: 'phrase', step: 'K1', say: 'Which words show what is missing from the figures? Tap them.',
           answer: 'The app gives no figures for users who left the feature off' } }
]);
