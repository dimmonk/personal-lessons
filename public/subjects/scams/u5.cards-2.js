// Scams, Unit Five, part one (second half): identity theft, its look-alike pair with the real request, and a call
// that sounds as real as a call can. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Identity theft ---------- */
  { id: 'meet-identitytheft', kind: 'meet', outcome: 'identitytheft',
    link: 'The first name was for a request that fits something you started. The second takes the same kind of facts and asks for them in a way that does not fit.',
    case: 'u5-grant', mark: 'F2',
    strip: [
      'An email came to Kayode. He did not ask for it.',
      'It offers him a $400 energy grant.',
      'To get it, it asks for facts that identify him: a photo of his passport, his date of birth and his home address.',
      'Kayode never applied for any grant, so there is nothing he began that the facts could be for.'
    ],
    explain: [
      'The message asks for the same sort of facts as Chen’s credit union did. What is different is that Kayode did not begin anything. A message arrived, offered him something pleasant, and asked for his passport.',
      'A photo of a passport, a date of birth and an address are what someone needs to pretend to be you: to open a bank account, take out a loan or sign a phone plan in your name. The grant is only the reason the message gives. The facts are what it is after.',
      'If you send them, nothing visible happens. Weeks or months later a letter arrives about a loan you did not take out, and people rarely connect it with the day they sent the papers.',
      'Facts asked for something you began fit. The same facts asked by someone who came to you, or asked for far more than the job needs, do not fit.'
    ],
    feature: { step: 'F2', option: 'notfit' },
    name: 'The name for this is {o:identitytheft}. The facts are the same ones {o:realdetails} asks for, so the name depends on whether the request fits, not on the facts.',
    act: 'Do not send, read out or type the papers or the numbers. Say "I will contact you through your official number", and end the call or leave the message unanswered. Then use {t:check}: look up the organization yourself, through {t:already}, and ask whether they sent it. If you have already sent something, tell your bank at once, on the number on your card.' },

  { id: 'check-identitytheft', kind: 'check', after: 'identitytheft',
    case: 'u5-parcel',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Femi did not begin this? Tap them.',
           answer: 'Femi is not expecting a package' } },

  /* ---------- The first look-alike pair: the same papers, one fits and one does not ---------- */
  { id: 'look-identitytheft-realdetails', kind: 'lookalike', ledger: 'identitytheft~realdetails',
    link: 'You have met both names. They ask for the very same papers, and that is why they are easy to mix up.',
    cases: ['u5-job-real', 'u5-job-fake'],
    instruction: 'Both cases are about Dina and a warehouse job at Brackley Logistics, and in both she is asked for her passport and her Social Security number. Compare one thing: did she begin it, and is she at a stage where the company needs what it asks for?',
    prompt: { kind: 'which', option: 'F2.notfit', answer: 'u5-job-fake' },
    difference: [
      'In Case A Dina applied on the company’s own website, went through an interview and was offered the job. She signs in to the account she made on that site, and a page there asks for her passport and Social Security number so that the company can confirm she is eligible to work. She began it, through a way she already had, and the papers are what that stage needs. The answer is {a:F2.fits}, and the case is {o:realdetails}.',
      'In Case B Dina never applied to Brackley Logistics. An email arrived, and before any contract it asks for her passport, a photo of her holding it, her Social Security number and her bank account details. She did not begin it, and a company that has not even sent a contract does not need any of it. The answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
      'The company, the person and the papers are the same. Only two things differ: who began it, and whether the stage she is at needs what is asked.'
    ] },

  /* ---------- A call that sounds as real as it can ---------- */
  { id: 'exc-bankcall', kind: 'exception', looksLike: 'realdetails', is: 'identitytheft', ledger: 'identitytheft~realdetails',
    h: 'A call that sounds real, and does not fit',
    link: 'Every copy so far had something that sounded wrong. This card is about a case with nothing that sounds wrong at all.',
    case: 'u5-bankcall',
    setup: 'The caller knows Gabriela’s name, he speaks calmly, and he asks only for what a real bank asks for: a date of birth and an address. It looks like {o:realdetails}. Yet the answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
    prompt: { kind: 'phrase', answer: "Gabriela's phone rings" },
    because: [
      'The words that settle it are about how the call began: her phone rings. The call came to her, and she did not begin it. She cannot tell from the call whether the man works for the bank, because anyone can say so, and the number that shows on a phone can be faked. Knowing her name proves nothing either: names and addresses are on lists that companies lose and criminals buy.',
      'This is so even if he does work for the bank. A real bank does not mind a call back. What settles whether he is real is {t:check}: hang up and call the number on your card. That costs a minute. The opposite can cost months of someone else using your name.'
    ] }
]);
