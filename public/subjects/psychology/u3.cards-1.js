// Psychology, Unit Three, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Units One and Two, the preview map, the heading
// of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('psychology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Before you say someone is messing with you, check what they actually did',
    canDo: 'Before you say it is {o:gaslight}, {o:darvo} or {o:lovebomb}, check what was actually said and done. Four things people do to each other really are harmful. Most arguments are none of them, and each of the four needs things you can find in the story.',
    everyday: [
      'You have heard all of these. “That never happened.” “You’re imagining things.” “Why would you accuse me of that?” “You’re the one who’s always late.” “I’ve never felt like this about anyone.” Each one can be the sound of something done to a person. Each can also be what anyone says in a normal argument.',
      'A sentence on its own can’t tell you which. Neither can how upset anyone is. What can: what really happened, how often it comes back, and what each person did next.'
    ],
    map: { branch: 'tactic' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Gaslighting ---------- */
  { id: 'meet-gaslight', kind: 'meet', outcome: 'gaslight',     // heading is the outcome's name, from the key
    link: 'First: being told, again and again, that something that really happened did not.',
    case: 'g-repair', mark: 'T1',
    explain: [
      'Tess has proof: Jonas’s text. He still told her, month after month, that it never happened, until she began to trust his version over her own.',
      'Two people who remember something differently can usually settle it by checking: a message, a receipt, someone who was there. One denial can be an honest mix-up. Months of them, about something you can check, with Tess asking her sister “Am I remembering this wrong?”, is not. It does not matter whether Jonas sounds kind or angry.'
    ],
    spot: [
      { do: 'Check that it really happened: Jonas’s text says he will pay half.', why: 'If nothing shows it happened, you have a disagreement, not this.' },
      { do: 'Count how often the denial comes back: February, March and May.', why: 'One denial can be an honest mix-up; weeks or months of them is not.' },
      { do: 'Look at what it did to her: she rereads her messages and asks her sister if she is wrong.', why: 'When the other person starts to doubt their own memory, the denial is working.' }
    ],
    feature: { step: 'T1', option: 'denymemory' },
    name: 'This is {o:gaslight}. It needs all three steps, not just an argument about what happened.' },

  { id: 'check-gaslight', kind: 'check', after: 'gaslight',
    case: 'g-check',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show Wen saying, again and again, that it never happened? Tap them.',
           answer: "whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months." } }
]);
