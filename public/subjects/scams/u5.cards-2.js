// Scams, Unit Five, part one (second half): identity theft, its look-alike pair with the real request, and a call
// that sounds as real as a call can. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Identity theft ---------- */
  { id: 'meet-identitytheft', kind: 'meet', outcome: 'identitytheft',
    link: 'Second, the copy: the same facts, asked for in a way that does not fit.',
    case: 'u5-grant', mark: 'F2',
    explain: [
      'The facts are the same as at Chen’s credit union. The difference is that Kayode started nothing: an email arrived out of nowhere, offered him something nice and asked for his passport.',
      'A passport photo, a date of birth and an address are all someone needs to pose as you: to open a bank account, take out a loan or sign a phone plan in your name. The grant is only the bait. And you will not notice: months later, a letter arrives about a loan you never took out.'
    ],
    spot: [
      { do: 'Check who started it: Kayode never applied for any grant, and the email came to him.', why: 'If you started nothing, the facts cannot be for anything you began.' },
      { do: 'Look at what it asks for: a photo of his passport, his date of birth and his address.', why: 'These are what someone needs to pose as you.' },
      { do: 'Look at the reason it gives: a $400 grant.', why: 'A nice offer is how they get you to hand the facts over.' },
      { do: 'Look for hurry: “by Friday”.', why: 'A deadline stops you from checking.' }
    ],
    feature: { step: 'F2', option: 'notfit' },
    name: 'This is {o:identitytheft}. The facts are the ones {o:realdetails} asks for, so what tells them apart is who started it, not the facts.',
    act: [
      { do: 'Do not send, read out or type the papers or the numbers.', why: 'Once they are out, you cannot take them back.' },
      { do: 'Say “I will contact you through your official number”, then end the call or leave the message unanswered.', why: 'A real company will not mind.' },
      { do: 'Run {t:check}: look the organization up yourself, through {t:already}, and ask whether it sent this.', why: 'Only the real company can tell you.' },
      { do: 'If you have already sent something, tell your bank at once, on the number on your card.', why: 'The sooner they know, the less anyone can do in your name.' }
    ] },

  { id: 'check-identitytheft', kind: 'check', after: 'identitytheft',
    case: 'u5-parcel',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Femi did not start this? Tap them.',
           answer: 'Femi is not expecting a package' } },

  /* ---------- The first look-alike pair: the same papers, one fits and one does not ---------- */
  { id: 'look-identitytheft-realdetails', kind: 'lookalike', ledger: 'identitytheft~realdetails',
    link: 'These two ask for the very same papers, which is why people mix them up.',
    cases: ['u5-job-real', 'u5-job-fake'],
    instruction: 'Both stories are about Dina and a warehouse job at Brackley Logistics, and in both she is asked for her passport and Social Security number. Compare one thing: did she start it, and does the company need what it asks for yet?',
    prompt: { kind: 'which', option: 'F2.notfit', answer: 'u5-job-fake' },
    difference: [
      'In Story A, Dina applied on the company’s own website and was offered the job. Now a page there asks for her passport and Social Security number, to confirm she may work. She started it, and the papers are what this stage needs. That is {o:realdetails}.',
      'In Story B, Dina never applied. An email arrives, and before any contract it asks for her passport, a photo of her holding it, her Social Security number and her bank account details. She started nothing, and a company with no contract to send does not need any of it. That is {o:identitytheft}.',
      'Same company, same person, same papers. What differs is who started it, and whether the company needs the papers yet.'
    ] },

  /* ---------- A call that sounds as real as it can ---------- */
  { id: 'exc-bankcall', kind: 'exception', looksLike: 'realdetails', is: 'identitytheft', ledger: 'identitytheft~realdetails',
    h: 'A call that sounds real, and still is not',
    link: 'Most copies have something that sounds wrong. This one has nothing.',
    case: 'u5-bankcall',
    setup: 'The caller knows Gabriela’s name, speaks calmly and asks only for what a real bank asks for: a date of birth and an address. It sounds like {o:realdetails}, but it is {o:identitytheft}.',
    prompt: { kind: 'phrase', answer: "Gabriela's phone rings" },
    because: [
      'What decides it is how the call began: her phone rings. She did not start it, so she cannot tell whether he really works for the bank. Anyone can say so, and the number on her screen can be faked.',
      'Knowing her name proves nothing either. Names and addresses are on lists that companies lose and criminals buy.',
      'The fix is {t:check}: hang up and call the number on your card. A real bank does not mind, and it costs a minute. The other way can cost months of someone else using your name.'
    ] }
]);
