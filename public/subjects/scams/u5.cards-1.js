// Scams, Unit Five, part one (first half): the opening card and the first name, the real request for details.
// This is an ACTION subject: the real thing is met first, and every name says what to do on the spot.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several.
// The app prints, and this file therefore does not contain: the reminder of the first question, the preview map, the
// heading of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of
// every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action with its
// example built in and one short sentence of why), then the name, then what to do (act: steps too).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Before you hand over facts about yourself, check who started it',
    canDo: 'Before you give anyone your passport, your date of birth or your address, or keep chatting with a stranger who is curious about your life, check which of three things it is: {o:realdetails}, {o:identitytheft} or {o:friendlychat}. Each one has its own sign, and you can spot it before you answer.',
    everyday: [
      'You are asked for facts about yourself all the time, and almost always it is fine. Your doctor asks for your date of birth. The county asks for your address. You do not think twice: you started each of those, you know who you are dealing with, and they ask for what you came for.',
      'The same questions can come from the other side. A caller you did not expect asks you to confirm your date of birth. An email offers you a grant and wants a photo of your passport. The words can be exactly the same as at the doctor’s. What changed is who started it, and whether what they ask for is what the job needs.'
    ],
    map: { branch: 'details' } },

  /* ---------- Real request for details: the real thing first ---------- */
  { id: 'meet-realdetails', kind: 'meet', outcome: 'realdetails',
    link: 'First, the ordinary one: a real company asking for facts about you.',
    case: 'u5-bank', mark: 'F2',
    explain: [
      'Chen started this himself, by typing the credit union’s address into his browser. The form asks for a lot: his date of birth, his address and a photo of his passport. But the credit union says why, and the reason fits: a bank has to know who owns an account.',
      'A long list does not make a request suspicious. What matters is that you started it, and that the list matches the job.'
    ],
    spot: [
      { do: 'Check that you started it: Chen decided to open an account.', why: 'Nobody had to talk him into it.' },
      { do: 'Check how you got there: he typed the credit union’s web address himself.', why: 'That is {t:already}, not a link or a number someone sent you.' },
      { do: 'Check the list matches the job: a new account needs his name, date of birth, address and a photo of his passport.', why: 'A request that goes further than the job is the warning sign.' },
      { do: 'Check they say why: “We are required to check who our customers are.”', why: 'A real company explains its request, and does not mind being asked.' }
    ],
    feature: { step: 'F2', option: 'fits' },
    name: 'This is {o:realdetails}. Of the three names in this unit, it is the only real one.',
    act: [
      { do: 'Give what the job needs and nothing more.', why: 'The extra is the only part that can be misused.' },
      { do: 'If a form asks for something the job does not seem to need, ask why before you fill it in.', why: 'A real company can answer in one sentence.' },
      { do: 'Give the facts on the other side’s own site, at their own desk, or on a number you already had.', why: 'Then you know who is getting them.' }
    ] },

  { id: 'check-realdetails', kind: 'check', after: 'realdetails',
    case: 'u5-council',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Sana started this herself, through a way she already had? Tap them.',
           answer: 'She calls Northway County at the number printed on her last property tax bill' } }
]);
