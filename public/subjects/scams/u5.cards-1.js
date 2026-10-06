// Scams, Unit Five, part one (first half): the opening card and the first name, the real request for details.
// This is an ACTION subject: the real thing is met first, every portrait says what to do on the spot, and the unit
// closes with a plan card. Cards are structured data, not HTML. A text field is one paragraph (a string) or several.
// The app prints, and this file therefore does not contain: the reminder of the first question, the preview map, the
// heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Being asked about yourself: when it is normal, and when someone is taking your place',
    canDo: [
      'After this unit you can take a form, a call, a message or a chat that asks you to tell someone about yourself, and say which of three things it is: {o:realdetails}, {o:identitytheft}, or {o:friendlychat}. You will be able to point to the words in it that show which one, and to say what to do on the spot.',
      'The person asking can be a bank, a new employer, a stranger, or someone who has been chatting with you for weeks. The request can be real or it can be a copy. This unit teaches you to tell, and it teaches you to tell from the request itself, at the moment it is made, before you give anything.'
    ],
    everyday: [
      'You are asked for facts about yourself all the time, and almost always it is fine. Your doctor asks for your date of birth. The county asks for your address. A store asks for a phone number, for the courier. You do not think twice, because you started each of those, you know who you are dealing with, and what they ask for is what you came for.',
      'The same questions can come from the other side. A caller you were not expecting asks you to confirm your date of birth. An email offers you a grant and wants a photo of your passport. A stranger who texted by mistake wants to know what you do for work. The words can be exactly the same as at the doctor’s. What has changed is who began it, and whether what is asked is what the job needs.',
      'Those are the two things this unit teaches you to look at, and the three names are the three things you can find.'
    ],
    add: [
      'The unit has three parts. The first puts a real request next to the copy that asks for the same papers, because the facts asked for are often identical and what differs is who began it. The second is about a friendly chat that asks about your life and nothing else, and where such a chat usually goes. The third puts the two questions in one place, shows three whole cases from start to finish, and then lets you run cases yourself.',
      'You have already learned to answer the first question, which sends every case in this unit to the same answer. The two questions after it are new here. One of them, {q:F2}, you may have met before: it is the same question that was asked about a sign-in page, now asked about a request for facts.'
    ],
    map: { branch: 'details' } },

  /* ---------- Real request for details: the real thing first ---------- */
  { id: 'meet-realdetails', kind: 'meet', outcome: 'realdetails',
    link: 'You have just read that you are asked about yourself all the time, and that it is almost always fine. The first of the three names is the ordinary, real request, and it comes first so that you meet the real thing before any copy of it.',
    case: 'u5-bank', mark: 'F2',
    strip: [
      'There is one person, Chen, and one organization, a credit union. Chen decided to open the account. Nobody contacted him first.',
      'He got to the credit union by typing its web address in himself.',
      'It asks him for facts about himself: his name, his date of birth, his address and a photo of his passport.',
      'It says why: it is required to check who its customers are.',
      'It asks him for nothing else. It does not ask for his password, for money or for him to install anything.'
    ],
    explain: [
      'What you are shown is an ordinary request for facts about a person, and it is real. Every organization that looks after something for you has to know who you are. A bank must know who owns the account. A doctor’s office needs to find your records. A courier needs an address. They cannot do the job without asking, so they ask.',
      'Four things are true of Chen’s case, and together they make the request fit. He began it: he decided to open an account, and nobody persuaded him. He reached the credit union by an address he typed himself ({t:already}), not through a link or a number sent to him. What is asked for matches what an account needs. And the credit union says why it asks. You do not have to know whether the credit union is honest to see any of the four, because all four are in the case.',
      'Notice that the list is long: a name, a date of birth, an address and a passport. A long list of facts is not what makes a request suspicious. Plenty of real requests are long. What matters is whether the request fits what you started, and that is a different thing from how much is asked.'
    ],
    feature: { step: 'F2', option: 'fits' },
    name: [
      'The name for this is {o:realdetails}. It is the one real thing among the three names in this unit, and it is included so that you can say "this one is fine" as exactly as you can say what is wrong elsewhere.'
    ] },

  { id: 'again-realdetails', kind: 'again', outcome: 'realdetails',
    link: 'The savings account gave you what to point to, from one case: {needs:realdetails}. Here is a second case with a different story, and this time nobody types an address: the person walks in.',
    first: 'u5-bank', second: 'u5-surgery', step: 'F2',
    instruction: 'Find what the two cases share. Ignore the story (a credit union, a doctor’s office) and ignore which facts are asked for. Look at one thing only: who began it?',
    prompt: { kind: 'phrase', answer: 'he walks into the Marlow Family Clinic to register as a patient' },
    shared: [
      'Both people began it themselves. Chen decided to open an account and went to the credit union’s own site. Reg decided to see a doctor and walked into the clinic, the company’s own office in person, which counts as one of the ways you already had. Neither was approached. In both, what is asked for is what the job needs: proof of who Chen is for an account, and a few facts to set up Reg’s records. In both, the other side says why it asks.',
      'The stories share nothing else. So this is not about banks, or doctors, or about the facts themselves: the same date of birth and the same address are asked for in both. It holds wherever you began something yourself, reached the other side through {t:already}, and are asked for no more than the job needs. That is what {o:realdetails} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story and the facts do not decide the answer',
    link: 'The last card asked you to ignore the story and the list of facts. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a bank, a doctor, a job, a package, a grant, a friend of a friend. The layer underneath is what the person is asked to tell, and who began it. Whatever the story, the question is about the layer underneath.',
      'The same facts turn up in all three names. A date of birth and an address are asked for by the clinic, by a copy of a bank, and by a stranger who wants to know where you live. A request for a passport can be real in one case and a copy in the next. So the facts alone never tell you which name you have.',
      'From here on the cases change on purpose in four ways: the story, how official the other side sounds, how much is asked for, and whether the request is real. Some cases are real requests and some are copies, and the question you put to them is the same. Telling the two apart is what the rest of this unit is for.'
    ],
    fixed: ['who began it, and whether what is asked is what the job needs, which is the question: {q:F2}'],
    varies: ['the story and the sender', 'how official it sounds', 'how many facts are asked for', 'whether the request is real or a copy'] },

  { id: 'portrait-realdetails', kind: 'portrait', outcome: 'realdetails',
    link: 'You know what to point to for {o:realdetails}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'It goes in this order. You decide to do something: open an account, see a doctor, apply for a job, change your address. You reach the other side through {t:already}. They ask for some facts, and say why. You give them in their own place: their site, their desk, their phone line. Then nothing unexpected happens afterwards.',
      'The other side can say what the facts are for, in a sentence, and the sentence matches the list. A new account needs proof of who you are. A delivery needs an address. Finding your record needs a date of birth.',
      'The list can be long and still fit. A lender asks for your passport, pay stubs and addresses for the last three years before it gives you a mortgage. That is a long list, and it fits, because you went to the lender yourself and a lender that is about to lend a large sum has a reason to ask for a lot.',
      'It asks for nothing on the side: no password handed over to a stranger, no payment, no program to install.',
      'A real organization is glad to be checked. It will give you a number to call, let you do it in its app, or let you walk into its office.'
    ],
    not: [
      'It is not safe merely because the other side sounds official, knows your name, or is calm and polite. All of those can be copied, and none of them is what the question asks about.',
      'And it is not suspect merely because a lot is asked for or because papers are asked for. A request that you did not begin, which asks for the same papers, is a different name, and one that asks for more than the job needs, even though you began it, is a different name too.'
    ],
    wild: ['"Can I take your date of birth and the first line of your address?"', '"We need to see photo ID to open the account."', '"Please confirm your name, so I can find your record."', '"You can do this at our desk or on our website, whichever you prefer."'],
    self: 'You meet it whenever you register with a doctor, open an account, apply for a job, rent an apartment, move, or call a company about something you own.',
    ask: '"Did I begin this, through a way I already had, and does what they ask for match what I came to do?" If both are yes, the answer is {a:F2.fits}.',
    act: [
      'Give what the job needs and no more. If a form asks for something that the job does not seem to need, ask why before you fill it in, and leave the line blank until you have an answer that fits.',
      'Give the facts in the other side’s own place: their own site, their own app, their own desk, or a phone line whose number you already had. If you are unsure whether you are in the right place, stop and use {t:check} before you type.',
      'Keep a note of what you gave, to whom and when. It is useful on the day something does not arrive, and on the day you need to say what you gave.'
    ] },

  { id: 'check-realdetails', kind: 'check', after: 'realdetails',
    case: 'u5-council',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Sana began this, through a way she already had? Tap them.',
           answer: 'She calls Northway County at the number printed on her last property tax bill' } }
]);
