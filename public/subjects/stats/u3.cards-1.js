// Statistical Claims, Unit Three, part one (first half): the opening card, the first name (the ones that lasted) and its
// look-alike with the claim that holds.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints the reminder of the questions taught earlier,
// the preview map, the heading of a meet card, "what you must be able to point to", the question and answer on a meet card, the
// "also called" sentence and the stem of every commit prompt.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a
// claim), the people or things in the figure (who or what it was worked out from), case (the app's word for one example).

FC.cards('stats', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Before you trust a figure: who is in it, and how did they get there?',
    canDo: 'After this unit you can read a claim made with numbers, and when the first thing wrong with it is who or what the figure was worked out from, say which of four ways it went wrong. You will point to the words that show it, say what you would need to see to put it right, and tell it apart from a figure that is a fair picture of the group.',
    everyday: [
      'You have met figures like these. A magazine says, "Four in five workers want a four-day week." An ad says, "Nine in ten people who try our studio say it helps them." Each figure was worked out from some particular people, and the claim speaks for a bigger group.',
      'Some people are in a figure because they were picked fairly. Others are in because of what happened to them: they stayed, they spoke up, they replied, or there were only a few. A figure from only some of a group is not for that reason wrong, and you will practice telling the difference.'
    ],
    map: { branch: 'counted' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Survivorship bias ---------- */
  { id: 'meet-survivor', kind: 'meet', outcome: 'survivor',     // heading is the outcome's plain words, from the key
    link: 'Start with a figure you may have met in a newsletter or an ad: a list of the ones that made it, with a conclusion drawn from what they share.',
    case: 'cn-restaurants', mark: 'A1',
    strip: [
      'There is a figure about restaurants: all 12 on a list open on Sundays.',
      'The 12 are the ones that are still open. Forty restaurants opened on the street in 2014.',
      'The 28 that closed are not on the list.',
      'The newsletter reads what the 12 share as the reason they lasted: open on Sundays, and your restaurant will last.'
    ],
    explain: [
      'The list is accurate. What is wrong is who it was made from: the ones that were still there. The 28 that closed are not on it, and nobody can learn what the ones that did not last were like from a list of the ones that did.',
      'Suppose Sunday opening makes no difference, and 38 of the 40 restaurants opened on Sundays. Then nearly every survivor would open on Sundays too. A list of 12 survivors that all open on Sundays is exactly what you would see if Sunday opening did nothing.',
      'The ones that closed, quit or left are missing because of what happened to them, which is usually tied to the very thing the figure is about: shops close when they do badly, members leave a program that is not working for them. So the figure is exact for the survivors and says little about everyone who started.'
    ],
    feature: { step: 'A1', option: 'lasted' },
    name: 'The name for this is {o:survivor}. A "survivor" is one that is still there at the end, and "bias" is a lean in one direction: here, toward the ones that made it.',
    act: 'Ask how many started and what happened to the ones who are not here. Say what the figure shows for the ones that lasted, and no more. Do not copy what the survivors did until you have seen whether the ones that did not last did it too.' },

  { id: 'check-survivor', kind: 'check', after: 'survivor',
    case: 'cn-app',
    ask: { type: 'phrase', step: 'A1', say: 'Which part of this case shows who the figure was worked out from, and why the others are missing? Tap it.',
           answer: 'The exam is only offered to learners who reach level 20. Of the 8,000 people who downloaded the app in January, 400 reached level 20.' } },

  /* ---------- The look-alike with the claim that holds: the same trial, reported two ways ---------- */
  { id: 'look-survivor-samp', kind: 'lookalike', ledger: 'survivor~samp_ok',
    link: 'The same trial can be reported two ways, and the two headlines can look alike.',
    cases: ['cn-seeds-alive', 'cn-seeds-all'],
    instruction: 'Both cases are about the same seed company, the same trial garden and the same 420 kilograms of tomatoes. Compare one thing: how many of the seeds planted are in the figure, and what is said about the ones that died.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-seeds-all' },
    difference: [
      'In Case A the 14 kilograms is the average of the 30 plants that were alive in September. The 20 that died early are not in it. Spread over all 50 seeds, 420 kilograms is 8.4 kilograms each, not 14. The question after the first, {q:A1}, gets the answer {a:A1.lasted}.',
      'In Case B the company counts every seed it planted, the 30 that lived and the 20 that died, and reports 8.4 kilograms for every seed planted. Nothing is left out, and the claim stays with the 50 seeds of the trial. The answer to the first question is {a:S1.holds}.',
      'The harvest is the same in both. What separates them is who is in the average.'
    ] }
]);
