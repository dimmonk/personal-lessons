// Civics, Unit One: drill items that are not stories. Reverse items (first stage) and faulty claims (last stage).
// A reverse item gives the family and asks what you would expect to hear or find. Every option is what one of the
// four families sounds like; voice says which. In a gate unit the family goes in the `outcome` field of a reverse item.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that family>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('civics', 'u1', [

  /* ---------- reverse items: one for each family ---------- */
  { id: 'g-rev-congress', use: 'drill', kind: 'reverse', outcome: 'congress', expect: 'hear',
    options: [
      { text: '"The Senate votes on it on Friday."', voice: 'congress' },
      { text: '"The office has published its rules, and inspections start in May."', voice: 'president' },
      { text: '"The judge will hear both sides on Monday."', voice: 'courts' },
      { text: '"The county board meets on Tuesday to decide."', voice: 'states' }
    ],
    why: 'It names a vote in the Senate, and the Senate is one of the two places where Congress votes. In each of the other three the one who decides is an office, a judge or a county board.' },

  { id: 'g-rev-president', use: 'drill', kind: 'reverse', outcome: 'president', expect: 'find',
    options: [
      { text: 'The House passed it by a large majority, and the Senate voted for it a week later.', voice: 'congress' },
      { text: 'An inspector visited, found a fault, and ordered the plant shut.', voice: 'president' },
      { text: 'Both sides told their story, and the judge made a ruling.', voice: 'courts' },
      { text: 'The town council voted to double the fine.', voice: 'states' }
    ],
    why: 'An inspector from an office of the government of the whole country orders something done, and nobody else votes or rules. That is what the second kind looks like.' },

  { id: 'g-rev-courts', use: 'drill', kind: 'reverse', outcome: 'courts', expect: 'hear',
    options: [
      { text: '"The bill has to go to the Senate next."', voice: 'congress' },
      { text: '"The President signed an order this morning."', voice: 'president' },
      { text: '"They have asked a judge to settle it."', voice: 'courts' },
      { text: '"The state legislature voted on it last week."', voice: 'states' }
    ],
    why: 'It says that a judge has been asked to decide. A case that ends by asking a judge belongs to the third kind, even before the judge has answered.' },

  { id: 'g-rev-states', use: 'drill', kind: 'reverse', outcome: 'states', expect: 'find',
    options: [
      { text: 'The Senate voted to approve the choice of a judge.', voice: 'congress' },
      { text: 'The President sent the bill back without signing it.', voice: 'president' },
      { text: 'A judge ruled that the fine must be paid.', voice: 'courts' },
      { text: 'The county board voted to close the road for a festival.', voice: 'states' }
    ],
    why: 'A county board is the government of one county. It decides for that place, and no part of the government of the whole country and no judge is deciding.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'g-claim-demo', use: 'claim',
    text: '"Congress passed the food-label law, so every rule under it, including the ones the food-safety agency wrote last week, is Congress’s decision."',
    ask: { type: 'option', step: 'D1', answer: 'president' },
    fault: 'The claim stops at the law and ignores where the story ends. Congress voted on the law, and that came first. The rules were written afterwards by the {t:agency}, and the case ends there. What comes before the last decision is how the matter reached it.',
    corrected: 'Congress passed the law, and later the {t:agency} wrote the rules. The case ends with the {t:agency}’s decision, so the answer is {a:D1.president}.' },

  { id: 'g-claim-signed', use: 'claim',
    text: '"The President signed the new school-meals law last week, so it is the President’s decision."',
    ask: { type: 'option', step: 'D1', answer: 'congress' },
    fault: 'The claim counts the signature as the decision. A signature on a law that the House and the Senate have already passed does not change what the law says: the votes had settled that. So a signature is not a decision of its own.',
    corrected: 'The House and the Senate passed the school-meals law, and the President signed it. The last decision is the lawmakers’ vote, so the answer is {a:D1.congress}. The President would be the answer only if the case ended with a refusal to sign.' },

  { id: 'g-claim-first', use: 'claim',
    text: '"The story says a federal office made a rule, and then a group asked a judge to block it. The first one named made the decision, so it is the office’s."',
    ask: { type: 'option', step: 'D1', answer: 'courts' },
    fault: 'The claim takes the first part of government the story names. The question asks about the last decision, or the one the case asks for. The office’s rule came first, and it is how the matter reached the judge.',
    corrected: 'A federal office made a rule, and then a group asked a judge to block it. The case ends by asking a judge, so the answer is {a:D1.courts}.' },

  { id: 'g-claim-trial', use: 'claim',
    text: '"They are holding a trial in the Senate, so a court is deciding it."',
    ask: { type: 'option', step: 'D1', answer: 'congress' },
    fault: 'The claim sees the word trial and sends the case to a court. But a trial of an official in the Senate is decided by the senators, who vote at the end. It is the lawmakers’ decision.',
    corrected: 'The Senate is holding a trial, and the senators will vote at the end. The last decision is a vote in the Senate, so the answer is {a:D1.congress}.' },

  { id: 'g-claim-city', use: 'claim',
    text: '"The county board voted to close the lake road. A county is only a small piece of the government of the whole country, so the federal government decided it."',
    ask: { type: 'missing', name: 'states' },
    fault: 'A county has its own government, with a board that makes decisions for the county. It is not a piece of the government of the whole country, and nothing in the claim shows anyone in that government deciding anything.',
    corrected: 'The county board voted to close the lake road. The last decision is a county’s own, and for {a:D1.states} you must be able to point to this: {needs:states}.' },

  { id: 'g-claim-statejudge', use: 'claim',
    text: '"The case was heard in the state’s own court, so the state made the decision."',
    ask: { type: 'option', step: 'D1', answer: 'courts' },
    fault: 'The claim treats a state’s court as the state’s government. A judge in a state’s court is still a judge. The judge made the decision, and the state’s lawmakers, governor and offices did not.',
    corrected: 'A judge in the state’s court heard the case and ruled. The last decision is made by a judge, and it does not matter which court, so the answer is {a:D1.courts}.' }
]);
