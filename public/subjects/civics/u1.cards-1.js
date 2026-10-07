// Civics, Unit One, part one: the opening card and the first family (lawmakers voting).
// A quick lesson (lesson standard section 19): one meet card and one check for each family, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// the key's question and answer on a meet card, the stem of every commit prompt, and the heading of an again or
// portrait card.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps), then the name
// (lesson standard section 20).
// "federal" is used by the key and is not a declared term (a term "federal" would forbid "the Federalist Papers" everywhere):
// the second meet card explains it.

FC.cards('civics', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'The news says “the government”. Which one?',
    canDo: 'When a news story says “the government” changed a rule, find out which government made the final call: lawmakers, the President or an office, a judge, or a state or city. That tells you where to look, who to ask and what can happen next.',
    everyday: [
      '“The government has put a new fee on passports.” “The government will not let the building go ahead.” “The government has changed the rules on bringing food into the country.” Each one says “the government”, and none says which one.',
      'There are many: the lawmakers of the whole country, the President and the offices under the President, the judges, your state, your city or county. Each can do different things and has different limits.',
      'Stories also name several at once: a law, the office that applies it, a judge asked to rule on it. If you take the one named first, you can be wrong before you start. So read to the end and find the final call, or the one the story asks for.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The first family: lawmakers voting ---------- */
  { id: 'meet-congress', kind: 'meet', family: 'congress',     // heading is the kind's plain words, from the key
    link: 'First: lawmakers voting. This is the easiest one to spot, because a vote is something you can see.',
    case: 'c-bicycle', mark: 'D1',
    explain: [
      'The bike shops complain, someone writes a bill (a proposed law), and the lawmakers vote on it. Nobody else decides anything, so the final call is theirs. The lawmakers of the whole country are called Congress, and it has two parts: the House of Representatives and the Senate. A bill has to pass both to become a law.',
      'Congress votes on more than laws. It votes on how much money the government can spend, on whether to approve someone the President picked for a top job or a deal the President signed with another country, and on charging an official with wrongdoing. It also counts when the vote has not happened yet: a story that ends with someone asking the Senate to vote is still the Senate’s.'
    ],
    spot: [
      { do: 'Find the final decision: the Senate votes on the bill and it passes.', why: 'The final call is the one the story ends on, or asks for.' },
      { do: 'Check who is voting: the House of Representatives and the Senate.', why: 'Lawmakers vote. Offices and judges give orders and rulings instead.' },
      { do: 'Check that nobody else steps in: no office, no judge, no city or state.', why: 'If someone else gets the last word, the answer changes.' }
    ],
    feature: { step: 'D1', option: 'congress' },
    name: 'This is {a:D1.congress}. Congress just means the lawmakers who vote for the whole country.' },

  { id: 'check-congress', kind: 'check', after: 'congress',
    case: 'k-farmers',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show the lawmakers’ final call? Tap them.',
           answer: 'the Senate voted to give them $2 billion in help, and the bill now goes to the House' } }
]);
