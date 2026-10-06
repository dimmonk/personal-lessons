// Psychology, Unit Three, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Units One and Two, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('psychology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Four things one person can do to another, and the ordinary exchange that is none of them',
    canDo: 'After this unit you can read a short account of one person saying or doing something to another, and say which of five things it is: one of four things that work against the other person, or {plain:ordexchange}. The two people can be partners, colleagues, relatives, friends, or you and someone you know.',
    everyday: [
      "You have heard all of these. 'That never happened.' 'You're imagining things.' 'Why would you accuse me of that?' 'You're the one who's always late.' 'I've never felt like this about anyone.' Each of them can be the sound of something done to a person that works against them. Each of them can also be what an ordinary person says in an ordinary row.",
      'This unit teaches four things of the first kind, and one name for the second, which is the one you will use most. A sentence on its own cannot tell you which you are hearing, and neither can how upset anyone is. The words and events in the case can, and this unit teaches which ones to look for.'
    ],
    map: { branch: 'tactic' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Gaslighting ---------- */
  { id: 'meet-gaslight', kind: 'meet', outcome: 'gaslight',     // heading is the outcome's plain words, from the key
    link: 'The first of the five is what people mean when they say that someone is "messing with my head". Here is the whole story of one case.',
    case: 'g-repair', mark: 'T1',
    strip: [
      'Something really happened: Jonas texted that he would pay half, and Tess still has the text.',
      'Afterward he told her that it did not happen, and that she had dreamed it up or muddled it. He did not say it once. He said it whenever she raised it, and he was still saying it in May.',
      'Tess has started to doubt her own memory: she rereads her old messages, and she has asked her sister, "Am I remembering this wrong?"'
    ],
    explain: [
      'When two people remember something differently, they usually sort it out by checking: a message, a receipt, someone who was there. Tess had the text. Jonas told her anyway, over and over, that what she remembered had not happened, until she began to trust his version over her own. It does not matter whether the voice is kind or angry.',
      'It does not need one big lie. One denial can be an honest mix-up. Months of them, about something that can be checked, and a sister being asked "Am I remembering this wrong?", cannot be.'
    ],
    feature: { step: 'T1', option: 'denymemory' },
    name: 'The name for this is {o:gaslight}. It is the everyday word as well as the name used here, and here it is used only for what is described above: something that really happened, a denial that comes back over weeks or months, and a person who starts to doubt their own memory. It is not a word for any disagreement about what happened.' },

  { id: 'check-gaslight', kind: 'check', after: 'gaslight',
    case: 'g-check',
    ask: { type: 'phrase', step: 'T1', say: 'Which part of this case shows what the other person says, again and again, about something that really happened? Tap it.',
           answer: "whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months." } }
]);
