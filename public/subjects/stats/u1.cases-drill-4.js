// Statistical Claims, Unit One: drill items that are not stories: the faulty claims of the last stage.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that answer>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of the reasoning in the claim itself
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('stats', 'u1', [
  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right.
     The two asked carry the two wrong ideas: a respected source settles it, and a problem makes the claim false. ---------- */
  { id: 'gate-claim-demo', use: 'claim',
    text: '"Everyone I asked at the club night says the new parking rule is a great idea, so the whole village is for it."',
    ask: { type: 'option', step: 'S1', answer: 'counted' },
    fault: 'The claim speaks for the whole village, but the figure comes from people at one club on one night. People who go to a club night are not a fair picture of a village, and the ones asked were the ones who happened to be there.',
    corrected: 'Everyone I asked at the club night said the new parking rule is a great idea. That is {a:S1.counted}, and the claim should stay with the people it comes from. To speak for the village I would need a figure from people picked from the whole village.' },

  { id: 'gate-claim-journal', use: 'claim',
    text: '"The study was in a respected journal, so we can stop arguing: the result is settled."',
    ask: { type: 'missing', name: 'holds' },
    fault: 'The claim treats where a study appeared as if it were the same as having checked every part of it. A respected journal can still print a figure from the wrong people, or a claim of cause that something else could explain.',
    corrected: 'The study was in a respected journal. That tells me who looked at it, and not whether it holds. For the answer {a:S1.holds} I would need to be able to point to this: {needs:holds}.' },

  { id: 'gate-claim-lie', use: 'claim',
    text: '"The survey only went to customers who came back to the shop, so every good review in it is a lie."',
    ask: { type: 'option', step: 'S1', answer: 'counted' },
    fault: 'The first half is right: customers who came back are not a fair picture of all customers, so the figure cannot show what everyone thinks. But "every good review is a lie" goes further than that. The customers who came back may mean every word.',
    corrected: 'The survey only went to customers who came back to the shop. That is {a:S1.counted}: the figure cannot show what the customers who did not come back think. It does not show that the good reviews are false. To find out, I would need a figure from customers picked from everyone who shopped there.' }
]);
