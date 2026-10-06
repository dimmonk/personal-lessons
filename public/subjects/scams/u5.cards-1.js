// Scams, Unit Five, part one (first half): the opening card and the first name, the real request for details.
// This is an ACTION subject: the real thing is met first, and every name says what to do on the spot.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several.
// The app prints, and this file therefore does not contain: the reminder of the first question, the preview map, the
// heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Being asked about yourself: when it is normal, and when someone is taking your place',
    canDo: 'After this unit you can take a form, a call, a message or a chat that asks you to tell someone about yourself, and say which of three things it is: {o:realdetails}, {o:identitytheft}, or {o:friendlychat}. You will be able to point to the words that show which one, and say what to do on the spot.',
    everyday: [
      'You are asked for facts about yourself all the time, and almost always it is fine. Your doctor asks for your date of birth. The county asks for your address. You do not think twice, because you started each of those, you know who you are dealing with, and what they ask for is what you came for.',
      'The same questions can come from the other side. A caller you were not expecting asks you to confirm your date of birth. An email offers you a grant and wants a photo of your passport. The words can be exactly the same as at the doctor’s. What has changed is who began it, and whether what is asked is what the job needs.'
    ],
    map: { branch: 'details' } },

  /* ---------- Real request for details: the real thing first ---------- */
  { id: 'meet-realdetails', kind: 'meet', outcome: 'realdetails',
    link: 'The first of the three names is the ordinary, real request. It comes first so that you meet the real thing before any copy of it.',
    case: 'u5-bank', mark: 'F2',
    strip: [
      'Chen decided to open the account. Nobody contacted him first.',
      'He got to the credit union by typing its web address in himself.',
      'It asks him for his name, his date of birth, his address and a photo of his passport, and says why: it is required to check who its customers are.',
      'It asks him for nothing else. It does not ask for his password, for money or for him to install anything.'
    ],
    explain: [
      'Every organization that looks after something for you has to know who you are. A bank must know who owns the account. A doctor’s office needs to find your records. They cannot do the job without asking, so they ask.',
      'Four things are true of Chen’s case, and together they make the request fit. He began it: he decided to open an account, and nobody persuaded him. He reached the credit union by an address he typed himself ({t:already}), not through a link or a number sent to him. What is asked for matches what an account needs. And the credit union says why it asks.',
      'The list is long: a name, a date of birth, an address and a passport. A long list is not what makes a request suspicious. What matters is whether the request fits what you started.'
    ],
    feature: { step: 'F2', option: 'fits' },
    name: 'The name for this is {o:realdetails}. It is the one real thing among the three names in this unit.',
    act: 'Give what the job needs and no more. If a form asks for something the job does not seem to need, ask why before you fill it in. Give the facts in the other side’s own place: their own site, their own desk, or a phone number you already had.' },

  { id: 'check-realdetails', kind: 'check', after: 'realdetails',
    case: 'u5-council',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Sana began this, through a way she already had? Tap them.',
           answer: 'She calls Northway County at the number printed on her last property tax bill' } }
]);
