// Psychology, Unit Two, part one (first half): the opening card, the word the first name is built on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('psychology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Are the reasons real?',
    canDo: 'When someone defends what they did or what they believe, check what their reasoning is actually doing. It is one of five things, and only one of them is working the way reasoning should. That goes for a coworker, a relative, a politician, and you.',
    everyday: [
      "You hear these all the time. 'It was only a small one, it doesn't count.' 'We've come too far to stop now.' 'You can't trust that report.' 'I looked into it properly and I was right.' 'I checked, and I was wrong.'",
      'Each could be one of five different things. In four of them, the reasoning bends to protect something the person did, spent or believes. In the fifth, it follows the facts. The sentence alone never tells you which, so this unit shows you what else to look for in the story.'
    ],
    map: { branch: 'reasoning' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A word the first name is built on ---------- */
  { id: 'term-cd', kind: 'term', term: 'cd',
    h: 'The jolt when what you do does not fit what you believe',
    link: 'Start with a feeling you already know. The first of the five things is what people do about it.',
    case: 'dinner',
    plain: [
      'Maya believes something about herself: she is vegan. She has just found out that she is doing something that does not fit it: eating fish stock. For a moment the two sit side by side, and it is uncomfortable. You know the feeling: a small jolt of "this is not like me".'
    ],
    after: [
      'The jolt does not last, because people get rid of it. Two ways are honest. Maya could put down her fork, or she could say, "I am not as strict a vegan as I tell people." Each changes something real.',
      'A third way changes nothing real: make up a reason why it is fine after all. That third way is the first of this unit’s five things.'
    ] },

  /* ---------- Rationalizing ---------- */
  { id: 'meet-dissonance', kind: 'meet', outcome: 'dissonance',     // the heading is the name itself
    link: 'Back to Maya at the dinner table. Here is the whole evening.',
    case: 'sauce', mark: 'R1',
    explain: [
      'Maya did not stop eating, and she did not take back what she says about herself. Afterward she gave a reason why this plate does not count: "It hardly counts." That is an excuse.',
      'The excuse works. The jolt goes away, and nothing real has changed: she ate the fish stock, and she still calls herself vegan. People reach for it because it costs nothing. Saying one thing and doing another is not enough on its own, and the jolt ({t:cd}) is only a feeling. What gives it away is the excuse that comes after.'
    ],
    spot: [
      { do: 'Find what they did that does not fit what they say: Maya finished the fish-stock sauce, and she says she is vegan.', why: 'Without that, there is nothing to excuse.' },
      { do: 'Find the reason they gave afterward: "It was only a splash of fish stock. It hardly counts."', why: 'The reason comes after the act, and that order gives it away.' },
      { do: 'Check that nothing real changed: she did not undo it, and she did not say she was wrong.', why: 'An excuse makes the jolt smaller and leaves the act and the claim as they were.' }
    ],
    feature: { step: 'R1', option: 'addstory' },
    name: 'This is {o:dissonance}: making up a reason after the act, so that it feels fine.' },

  { id: 'check-dissonance', kind: 'check', after: 'dissonance',
    case: 'shops',
    ask: { type: 'phrase', step: 'R1', say: 'Which words are the reason Priya gives afterward? Tap them.',
           answer: 'One order makes no difference to anyone' } }
]);
