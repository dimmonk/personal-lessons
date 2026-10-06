// Psychology, Unit One: the faulty-claim stage of the drill. The first claim is worked for the learner (the demo);
// one more is asked, on the mistake that matters most: taking one occasion for a whole person.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that kind>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('psychology', 'u1', [

  { id: 'g-claim-demo', use: 'claim',
    text: '"He has barely spoken to any of us since his dog died. He’s punishing us."',
    ask: { type: 'missing', name: 'tactic' },
    fault: 'The claim turns a quiet stretch after a loss into something done to "us". But it shows nothing said or done to any one person about them. Being quiet with everyone is not about anyone.',
    corrected: 'He has barely spoken to anyone since his dog died. That is how a person can be for a while after a loss. It would be {a:D1.tactic} only if you could point to this: {needs:tactic}.' },

  { id: 'g-claim-once', use: 'claim',
    text: '"I saw how he spoke to his mother at that one lunch. That told me everything I need to know about him."',
    ask: { type: 'missing', name: 'pattern' },
    fault: 'The claim rests a view of a whole man on one lunch. One lunch can be vivid, and it is still one occasion, in one place, with one person. "Everything I need to know about him" is a claim about years, and the speaker has an hour.',
    corrected: 'I saw how he spoke to his mother at one lunch. That is something one person said to another, on one occasion, and it tells me what happened at that lunch. To know what he is like, I would need to point to this: {needs:pattern}.' }
]);
