// Statistical Claims, Unit Three, part one (first half): the opening card, the first name (the ones that lasted) and its
// look-alike with the claim that holds.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints the reminder of the questions taught earlier,
// the preview map, the heading of a meet card, "what you must be able to point to", the question and answer on a meet card, the
// "also called" sentence and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name, then what to do (act: numbered steps) (lesson standard section 20).
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a
// claim), the people or things in the figure (who or what it was worked out from), story (the app's word for one example).

FC.cards('stats', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Before you trust a figure, check who is in it',
    canDo: 'Before you believe a figure like “four in five workers want a four-day week”, check who it was worked out from and how they got in. Four things go wrong here, and each one is easy to spot once you know what to look for.',
    everyday: [
      'A magazine says, "Four in five workers want a four-day week." An ad says, "Nine in ten people who try our studio say it helps them." Each figure was worked out from some particular people, and the claim speaks for a much bigger group.',
      'Some people are in a figure because they were picked fairly. Others are in because of what happened to them: they stayed, they spoke up, they wrote back, or there were only a few of them. A figure from some of a group is not wrong for that reason alone, and you will practice telling the difference.'
    ],
    map: { branch: 'counted' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Survivorship bias ---------- */
  { id: 'meet-survivor', kind: 'meet', outcome: 'survivor',     // heading is the outcome's plain words, from the key
    link: 'First: a list of the ones that made it, with a conclusion drawn from what they share.',
    case: 'cn-restaurants', mark: 'A1',
    explain: [
      'The list is correct. The problem is who is on it: only the 12 restaurants still open. The 28 that closed are missing, so the list cannot tell you what the ones that did not last were like.',
      'Say Sunday opening makes no difference, and 38 of the 40 restaurants opened on Sundays. Then nearly every restaurant still open would open on Sundays too, so a list of 12 that all open on Sundays is just what you would see if it did nothing. The ones that closed are missing because of what happened to them, and that is usually tied to what the figure is about.'
    ],
    spot: [
      { do: 'Find how many started: 40 restaurants.', why: 'A figure only means something next to the number that began.' },
      { do: 'Find who is in the figure: the 12 still open.', why: 'A list made at the end holds only the ones that are still there.' },
      { do: 'Ask what happened to the rest: 28 closed.', why: 'They are missing for a reason, and it is tied to what the figure is about.' },
      { do: 'Look for a conclusion drawn from the ones that lasted: “Open on Sundays and your restaurant will last.”', why: 'The ones that closed may have done the same, and the list cannot show it.' }
    ],
    feature: { step: 'A1', option: 'lasted' },
    name: 'This is {o:survivor}. A “survivor” is one still there at the end, and “bias” is a lean in one direction: here, toward the ones that made it.',
    act: [
      { do: 'Ask how many started and what happened to the ones who are not here.', why: 'The answer is hidden in the missing ones.' },
      { do: 'Say what the figure shows for the ones that lasted, and no more.', why: 'It is exact for them and silent about everyone else.' },
      { do: 'Do not copy what the survivors did until you know whether the ones that closed did it too.', why: 'What they share may be the same in both groups.' }
    ] },

  { id: 'check-survivor', kind: 'check', after: 'survivor',
    case: 'cn-app',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show who the figure was worked out from, and why the others are missing? Tap them.',
           answer: 'The exam is only offered to learners who reach level 20. Of the 8,000 people who downloaded the app in January, 400 reached level 20.' } },

  /* ---------- The look-alike with the claim that holds: the same trial, reported two ways ---------- */
  { id: 'look-survivor-samp', kind: 'lookalike', ledger: 'survivor~samp_ok',
    link: 'The same trial can be reported two ways, and the two headlines can look alike.',
    cases: ['cn-seeds-alive', 'cn-seeds-all'],
    instruction: 'Both stories are about the same seed company, the same trial garden and the same 420 kilograms of tomatoes. Compare one thing: how many of the seeds planted are in the figure, and what is said about the ones that died.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-seeds-all' },
    difference: [
      'In Story A the 14 kilograms is the average of the 30 plants that were alive in September, and the 20 that died early are not in it. Spread over all 50 seeds, 420 kilograms is 8.4 kilograms each, not 14. That is {o:survivor}.',
      'In Story B the company counts every seed it planted, the 30 that lived and the 20 that died, and reports 8.4 kilograms for every seed planted. Nothing is left out, and the claim stays with the 50 seeds of the trial. That is {o:samp_ok}.',
      'The harvest is the same in both. What separates them is who is in the average.'
    ] }
]);
