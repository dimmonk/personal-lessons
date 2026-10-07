// Statistical Claims, Unit One, part one: the opening card and the first two answers (who the number comes from,
// and what the number counts). A quick lesson (lesson standard section 19): one meet card and one check for each answer.
// This is the subject's gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and a family's name is its answer to the key's first question, printed by {a:S1.<family>}.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not
// contain: the preview map, the heading of a meet card, the key's question and answer on a meet card, the stem of every
// commit prompt, and the heading of an again or portrait card.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).
// Words this unit keeps to one meaning each: claim (a sentence with a number in it), number (the claim's number, which the key calls
// its figure), part (one of the four steps a claim is built from), story (the app's word for one example).

FC.cards('stats', 'u1', [

  { id: 'orient-claim', kind: 'orient',
    h: 'Before you believe a number, find where it could fool you',
    canDo: 'Before you share, believe or act on a number in a headline, an ad or a forwarded message, find the first place it could be fooling you, or see that it holds up.',
    everyday: [
      'A headline says, "Nine in ten parents want school to start later." A neighbor posts, "Burglaries on our road are up 200%!" An ad says, "People who take our vitamin catch fewer colds." Each one is a claim: a sentence with a number in it, which the lessons call its figure.',
      'A claim is built in four parts, and each rests on the one before. First someone counts some people or things. Then the count is read as showing something real. Then it is set beside something. Sometimes the claim also says one thing caused another. So you look for the first part that goes wrong, and sometimes the answer is that none does.'
    ],
    map: { branch: 'gate' } },              // the preview map is the first question itself, drawn from the key

  /* ---------- Who was counted ---------- */
  { id: 'meet-counted', kind: 'meet', family: 'counted',
    link: 'First: who the number comes from.',
    case: 'gate-golf', mark: 'S1',
    explain: [
      'The reporter added up her answers correctly, and the 45 people did say yes. The trouble is who she asked. People outside a golf club on a Saturday morning are mostly golfers, and golfers want a new golf course more than most. The number may be true of golfers and tell you almost nothing about the town.',
      'The people behind a number can fail in two ways. They may not look like the group the claim talks about, as here. Or there may be so few that luck moves the number: if three of four people say yes, a fifth could turn "three in four" into "four in five".'
    ],
    spot: [
      { do: 'Find who the number comes from: 50 people outside the golf club.', why: 'Every number comes from some people or things, and the claim often does not say who.' },
      { do: 'Find who the claim is about: everyone in town.', why: 'The claim speaks for them, not only for the people asked.' },
      { do: 'Ask whether the first group looks like the second: golfers do not look like the whole town.', why: 'If they do not, the number is about the wrong people.' },
      { do: 'Check there are enough of them: 50 is fine here, but with 3 people one more would change the number.', why: 'Too few is the other way to go wrong.' }
    ],
    feature: { step: 'S1', option: 'counted' },
    name: 'This is {a:S1.counted}. Check it first, because every later part of a claim rests on the people behind the number.' },

  { id: 'check-counted', kind: 'check', after: 'counted',
    case: 'gate-funds',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show which funds the claim leaves out? Tap them.',
           answer: 'The firm lists the 8 funds it still runs, and it closed 12 others in those years.' } },

  /* ---------- What the number counts ---------- */
  { id: 'meet-measure', kind: 'meet', family: 'measure',
    link: 'Next: what the number really measures.',
    case: 'gate-waits', mark: 'S1',
    explain: [
      'Every patient is in the number in both years, so the people are fine. What changed is the clock. It used to start when a patient walked in. Now it starts when a nurse first sees them, so the wait in the waiting room no longer counts. The number can fall from six hours to four while every patient waits exactly as long as before.',
      'The same thing happens when a new form counts more or fewer things as one sort, when a new gadget reads higher than the old one, or when people are paid on the number and work on the number instead of the real thing. The number moves and the real thing stays put.'
    ],
    spot: [
      { do: 'Find the real thing the number stands for: how long patients wait.', why: 'A claim uses a number to stand in for something you care about.' },
      { do: 'Find how the number is counted: the clock starts when a nurse first sees them.', why: 'The way it is counted decides what it can show.' },
      { do: 'Look for a change in the counting: last year the clock started at the door.', why: 'A change in the counting can move the number by itself.' },
      { do: 'Ask whether the number could move with no real change: it could fall with every patient waiting as long as before.', why: 'If it can, the number does not show the real thing.' }
    ],
    feature: { step: 'S1', option: 'measure' },
    name: 'This is {a:S1.measure}. It covers anything a number measures: hours, dollars, scores, reports.' },

  { id: 'check-measure', kind: 'check', after: 'measure',
    case: 'gate-jobs',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure'] } },

  { id: 'look-counted-measure', kind: 'lookalike', ledger: 'counted~measure',
    link: 'These two are easy to mix up, because in both the number can be added up right and still mislead you.',
    cases: ['gate-reading-volunteers', 'gate-reading-easier'],
    instruction: 'Both stories are about the same school and the same rise in reading scores. Compare one thing: is the trouble in who is in the number, or in how the number is counted?',
    prompt: { kind: 'which', option: 'S1.measure', answer: 'gate-reading-easier' },
    difference: [
      'In Story A the test is the same, but this year’s average comes from 11 volunteers out of 340 students, and last year’s came from all of them. Volunteers for an extra test are not a fair picture of the school. That is {a:S1.counted}.',
      'In Story B every student took the test both years, so nobody is missing. But this year’s test is shorter, with easier passages, so scores can rise with every student reading as well as before. That is {a:S1.measure}.',
      'Check who is in the number first. Only then ask what it counts.'
    ] }
]);
