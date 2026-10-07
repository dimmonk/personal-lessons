// Psychology, Unit One, part one: the opening card and the first kind (one person's reasoning).
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('psychology', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before you call it manipulation, check what you are looking at',
    canDo: 'Before you call someone “manipulative”, “a narcissist” or “just moody”, check what you are actually looking at. It is always one of the four things below, each needs different evidence, and most snap judgments skip this step.',
    everyday: [
      'A friend says her boyfriend is “manipulative”. A coworker says the new manager is “a narcissist”. Your brother snaps at dinner, and someone says he has always been “difficult”.',
      'Each label jumps past a simple question: what did you actually see? One conversation, one bad week, or twenty years? Get that wrong and every word you pick after it is wrong too.'
    ],
    map: { branch: 'gate' } },              // the preview map is the first question itself, drawn from the key

  /* ---------- A choice and its reasons ---------- */
  { id: 'meet-reasoning', kind: 'meet', family: 'reasoning',
    link: 'First: a person explaining a choice of their own.',
    case: 'g-job', mark: 'D1',
    explain: [
      'Leila is explaining her own decision. Her sister just listens, and nothing Leila says is about her sister.',
      'This is the most common thing you will see, and it is not a problem in itself. Whether her reasons are good is a separate question.'
    ],
    spot: [
      { do: 'Find the choice that is theirs: Leila turns the job down.', why: 'Everything else in the story hangs on it.' },
      { do: 'Find their reasons: the train and the children.', why: 'Reasons are what you judge a choice by.' },
      { do: 'Check who the words are about: only Leila.', why: 'Words aimed at the listener are a different thing, covered next.' }
    ],
    feature: { step: 'D1', option: 'reasoning' },
    name: 'This is {a:D1.reasoning}. Her sister could leave the room and nothing would change.' },

  { id: 'check-reasoning', kind: 'check', after: 'reasoning',
    case: 'g-car',
    ask: { type: 'phrase', step: 'D1', say: 'Which words are Esme’s reasons for her choice? Tap them.',
           answer: 'The repair was $300, and a new one would cost me $200 a month' } }
]);
