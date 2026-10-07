// Civics, Unit One: the faulty-claim stage of the drill. The first claim is worked for the learner (the demo); one
// more is asked, on the mistake that matters most: stopping at the first part of government the story names.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that family>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('civics', 'u1', [

  { id: 'g-claim-demo', use: 'claim',
    text: '"Congress passed the food-label law, so every rule under it, including the ones the food-safety agency wrote last week, is Congress’s decision."',
    ask: { type: 'option', step: 'D1', answer: 'president' },
    fault: 'The claim stops at the law and ignores where the story ends. Congress voted on the law first, but the {t:agency} wrote the rules afterwards, and the story ends there.',
    corrected: 'Congress passed the law, and later the {t:agency} wrote the rules. The story ends with the {t:agency}’s decision, so the answer is {a:D1.president}.' },

  { id: 'g-claim-first', use: 'claim',
    text: '"The story says a federal office made a rule, and then a group asked a judge to block it. The first one named made the decision, so it is the office’s."',
    ask: { type: 'option', step: 'D1', answer: 'courts' },
    fault: 'The claim takes whichever part of government the story names first. The question asks for the final call, and the office’s rule only came first.',
    corrected: 'A federal office made a rule, and then a group asked a judge to block it. The story ends by asking a judge, so the answer is {a:D1.courts}.' }
]);
