// Psychology, Unit Two, part one (first half): the opening card, the word the first name is built on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('psychology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Reasoning that protects, and reasoning that goes where the facts point',
    canDo: 'After this unit you can read a short account of someone defending a view or a choice, and say which of five things their reasoning is doing. The someone can be a colleague, a relative, a person in the news, or you.',
    everyday: [
      "You already know the raw material. Think of the last time you heard one of these. 'It was only a small one, it doesn't count.' 'We've come too far to stop now.' 'You can't trust that report.' 'I looked into it properly and I was right.' 'I checked, and I was wrong.'",
      'Each of these can be the sound of one of five different things. In four of them, the reasoning bends to protect something the person did, spent or believes. In the fifth, the reasoning is working as it should. A sentence on its own is never enough to say which one you are hearing. This unit teaches what else to look for in the case.'
    ],
    map: { branch: 'reasoning' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A word the first name is built on ---------- */
  { id: 'term-cd', kind: 'term', term: 'cd',
    h: 'The jolt when what you do does not fit what you believe',
    link: 'Start with a feeling you already know. It has a name, and the first of the five things is what people do about it.',
    case: 'dinner',
    plain: [
      'Maya believes something about herself: she is vegan. She has just found out that she is doing something that does not fit it: eating fish stock. For a moment those two things sit side by side, and it is uncomfortable. Most people know the feeling: a small jolt of "this is not like me".'
    ],
    after: [
      'The discomfort does not last, because people get rid of it. Two ways are honest. Maya could put down her fork, or she could say plainly, "I am not as strict a vegan as I tell people." Each changes something real.',
      'A third way changes nothing real: giving a reason why the act is fine after all. That third way is the first of this unit’s five things.'
    ] },

  /* ---------- Cognitive dissonance reduction ---------- */
  { id: 'meet-dissonance', kind: 'meet', outcome: 'dissonance',     // heading is the outcome's plain words, from the key
    link: 'Go back to Maya at the dinner table. Here is the whole evening.',
    case: 'sauce', mark: 'R1',
    strip: [
      'Maya did something: she ate the sauce, and finished it after she knew what was in it.',
      'It does not fit something she believes and has told people: that she is vegan.',
      'She did not stop, and she did not take back what she says about herself.',
      'Afterward she gave a reason why this plate does not count.'
    ],
    explain: [
      'Maya took neither of the honest ways out. After the act, she gave a reason why the act is fine: "It hardly counts." In plain words, an excuse.',
      'The excuse works. The discomfort goes, and nothing real has changed: she ate the fish stock, and she still calls herself vegan. That is why people reach for it. It costs nothing. Seeing someone say one thing and do another is not {t:cd}, and it is not enough on its own: you need the reason they gave afterward.'
    ],
    feature: { step: 'R1', option: 'addstory' },
    name: 'The name for this is {o:dissonance}. You have met {t:cd}, the discomfort. "Reduction" means making something smaller: the name is for making the discomfort smaller by adding a reason, without changing what caused it.' },

  { id: 'check-dissonance', kind: 'check', after: 'dissonance',
    case: 'shops',
    ask: { type: 'phrase', step: 'R1', say: 'Which part of this case is the reason given afterward for why it is fine? Tap it.',
           answer: 'One order makes no difference to anyone' } }
]);
