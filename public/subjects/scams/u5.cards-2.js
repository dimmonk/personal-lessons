// Scams, Unit Five, part one (second half): identity theft, its look-alike pair with the real request, the first wrong
// idea a beginner brings, and a call that sounds as real as a call can. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- Identity theft ---------- */
  { id: 'meet-identitytheft', kind: 'meet', outcome: 'identitytheft',
    link: 'The first name was for a request that fits something you started. The second takes the same kind of facts and asks for them in a way that does not fit. Here is the whole message.',
    case: 'u5-grant', mark: 'F2',
    strip: [
      'There is one message, an email, and it came to Kayode. He did not ask for it.',
      'It offers him something: a £400 energy grant.',
      'To get it, it asks for facts that identify him: a photo of his passport, his date of birth and his home address.',
      'Kayode never applied for any grant, so there is nothing that he began which the facts could be for.'
    ],
    explain: [
      'What you are shown asks for the same sort of facts as Chen’s building society did: papers and numbers that identify a person. What is around the request is different. Kayode did not begin anything. He did not apply for a grant, and nobody he deals with is involved. A message arrived, offered him something pleasant, and asked for his passport.',
      'A photo of a passport, a date of birth and an address are what someone needs in order to pretend to be you. With them a criminal can open a bank account, take out a loan or sign a phone contract in your name. The grant is only the reason the message gives. The facts are what it is after, and the reason is how it gets you to hand them over.',
      'It usually unfolds in this order. First comes a reason that arrives out of nowhere: a grant, a job, a parcel, a prize, a call about your bank. Then comes the request for papers or numbers, often called a standard check, and often with a deadline. If you send them, nothing visible happens. Then, weeks or months later, a letter arrives about a loan you did not take out, or a bank refuses you something. Because so much time passes, people rarely connect the harm with the day they sent the papers.',
      'The thing to hold on to is simple. Facts asked for something you began fit. The same facts asked by someone who came to you, or asked for far more than the job needs, do not fit.'
    ],
    feature: { step: 'F2', option: 'notfit' },
    name: [
      'The name for this is {o:identitytheft}. "Identity" means who you are on paper: your name, your birth date, your documents. "Theft" is because those facts are taken from you, and they can be used again by anyone who has them. The facts are the same ones that {o:realdetails} asks for, which is why the name depends on whether the request fits, and not on the facts.'
    ] },

  { id: 'again-identitytheft', kind: 'again', outcome: 'identitytheft',
    link: 'The energy grant gave you what to point to, from one case: {needs:identitytheft}. Here is a second case with a different story. This one is a text, and it comes with a promise.',
    first: 'u5-grant', second: 'u5-voucher', step: 'F2',
    instruction: 'Find what the two cases share. Ignore the story (a grant, a voucher) and ignore the promise in the second. Look at one thing only: did the person begin anything that these facts could be for?',
    prompt: { kind: 'phrase', answer: 'Mel has never shopped at Fernhill' },
    shared: [
      'In both cases the message came to the person: an email to Kayode, a text to Mel. Neither had begun anything. Kayode never applied for a grant, and Mel never shopped at Fernhill, so there is nothing the facts could be for. In both the message offers something for nothing (a grant, a voucher) and asks for facts that identify the person: a passport photo, a date of birth, a full card number.',
      'The second message says "You will not be charged". That is a promise from a stranger, and it changes nothing. The key does not ask what the message promises. It asks whether you began it.',
      'The stories share nothing else. So this is not about grants or vouchers. It holds wherever facts that identify you are asked for by someone who came to you, or asked for more than the job needs. That is what {o:identitytheft} names.'
    ] },

  { id: 'portrait-identitytheft', kind: 'portrait', outcome: 'identitytheft',
    link: 'You know what to point to for {o:identitytheft}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'It begins with a reason that came to you: a grant, a job offer, a parcel, a prize, or a call about your bank or your account. It is built to arrive when it fits your week, so a job offer comes while you are looking for work and a parcel text comes while you are expecting a parcel.',
      'Then comes the request: papers and numbers that identify you. A photo of your passport or driving licence, a photo of you holding it, your date of birth, your address, your National Insurance or other tax number, a full card number. It is often described as a standard check, or as a way to confirm it is you.',
      'What is asked for does not match the reason. A grant does not need your passport. A redelivery does not need your date of birth and your whole card number. A job does not need a photo of you holding your passport before you have signed anything.',
      'There is often hurry or flattery: a deadline of Friday, or you have been selected. The key does not look at hurry. It looks at whether you began it, and at whether what is asked is more than the reason needs.',
      'If you send the facts, nothing visible happens at once. The harm shows weeks later: an account you did not open, a loan or a phone contract in your name, a letter about a debt. The facts are not used up: whoever holds them can use them more than once.',
      'It can arrive as a call as well as a message. Someone who says that he is from your bank or from a delivery firm rings and asks you to confirm your date of birth and address. The call came to you, so the request does not fit, however real the caller sounds.'
    ],
    not: [
      'It is not every request for papers. A building society that asks for your passport after you applied to it, or an employer that asks for right-to-work papers after you accept its offer, are real requests for the very same papers. What separates them is whether you began it and whether the request fits.',
      'It is not a request to pay. If a message names an amount for you to send, it asks for money, and the key’s first answer is {a:D1.money}. A message that asks for your card number and says that nothing will be charged is still a request for facts about you.'
    ],
    wild: ['"To release your grant, please send a photo of your passport."', '"Please confirm your full card number and date of birth to book a new delivery. You will not be charged."', '"For security, send a photo of yourself holding your ID."', '"This is the fraud team. Please confirm your date of birth and your address."'],
    self: 'You may meet it as a job offer while you are looking for work, as a text about a parcel, as a prize you did not enter, or as a call from your bank or your telephone company. It is the part of this unit that reaches the most people.',
    ask: '"Did I begin this, through a way I already had, and does what they ask for match what it is for?" If not, the key’s answer is {a:F2.notfit}.',
    act: [
      'Do not send, read out or type the papers or the numbers. You can say, "I will contact you through your official number", and end the call or leave the message unanswered.',
      'Use {t:check}. Look up the organisation yourself, through {t:already}: the number on your card or bill, an address you type in, an app you installed. Ask whether they sent it. For a job, go to the company’s own website, find its careers page yourself, and ask there.',
      'A real organisation will still be there tomorrow, and will give you a way to send papers through its own site or in person. A deadline that will not wait while you check tells you something too.',
      'If you have already sent something, tell your bank at once, on the number on your card, and do not wait to see whether anything happens.'
    ] },

  { id: 'check-identitytheft', kind: 'check', after: 'identitytheft',
    case: 'u5-parcel',
    ask: { type: 'phrase', step: 'F2', say: 'Which words show that Femi did not begin this? Tap them.',
           answer: 'Femi is not expecting a parcel' } },

  /* ---------- The first look-alike pair: the same papers, one fits and one does not ---------- */
  { id: 'look-identitytheft-realdetails', kind: 'lookalike', ledger: 'identitytheft~realdetails',
    link: 'You have met both names. They ask for the very same papers, and that is why they are easy to mix up. This card puts them side by side, in one person’s life.',
    cases: ['u5-job-real', 'u5-job-fake'],
    instruction: 'Both cases are about Dina and a warehouse job at Brackley Logistics, and in both she is asked for her passport and her National Insurance number. Compare one thing: did she begin it, and is she at a stage where the company needs what it asks for?',
    prompt: { kind: 'which', option: 'F2.notfit', answer: 'u5-job-fake' },
    difference: [
      'In Case A Dina applied on the company’s own website, went through an interview and was offered the job. She signs in to the account she made on that site, and a page there asks for her passport and National Insurance number so that the company can check her right to work before she starts. She began it, through a way she already had, and the papers are what that stage needs. The key’s answer is {a:F2.fits}, and the case is {o:realdetails}.',
      'In Case B Dina never applied to Brackley Logistics. An email arrived, and before any contract it asks for her passport, a photo of her holding it, her National Insurance number and her bank details, as a standard check. She did not begin it, and a company that has not even sent a contract does not yet need any of it. The key’s answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
      'The company, the person and the papers are the same. Only two things differ: who began it, and whether the stage she is at needs what is asked. This is why you can never name a request from the papers, or from how much is asked for.'
    ] },

  /* ---------- A wrong idea about what proves a request is real ---------- */
  { id: 'refute-knewname', kind: 'refute', about: 'identitytheft',
    h: 'A wrong idea: "they knew my name and address, so it was real"',
    link: 'The picture of {o:identitytheft} said that it can arrive as a call, from someone who already knows your name. Many people take that as proof of who is calling.',
    idea: '"She knew my full name, my address and my date of birth. It had to be my bank."',
    verdict: 'This is wrong.',
    right: [
      'A name and an address are among the easiest facts about you to find. They are on every form you have ever filled in, in the lists that companies keep and sometimes lose, and in the lists that criminals buy and sell. Someone who has them has shown you that they have a list. They have not shown you who they are.',
      'It is also not what the key asks. The key does not ask what the other side knows about you. It asks who began it, and whether what is asked is what the job needs: {q:F2}. A caller who knows your details has still come to you, so the answer is {a:F2.notfit}.',
      'So when someone who contacted you shows that they know facts about you, count it for nothing, and use {t:check}. A real bank can find the same facts when you ring it on the number on your card.'
    ],
    testedBy: ['u5-claim-knew'] },

  /* ---------- A call that sounds as real as it can ---------- */
  { id: 'exc-bankcall', kind: 'exception', looksLike: 'realdetails', is: 'identitytheft', ledger: 'identitytheft~realdetails',
    h: 'A call that sounds real, and does not fit',
    link: 'Every case of {o:identitytheft} so far has had something that sounded wrong: a grant nobody applied for, a voucher from a shop that is not hers. This card is about a case with nothing that sounds wrong at all.',
    case: 'u5-bankcall',
    setup: 'The caller knows Gabriela’s name, he speaks calmly, and he asks only for what a real bank asks for: a date of birth and an address. It looks like {o:realdetails}. Yet the key’s answer is {a:F2.notfit}, and the case is {o:identitytheft}.',
    prompt: { kind: 'phrase', answer: "Gabriela's phone rings" },
    because: [
      'The words that settle it are about how the call began: her phone rings. The call came to her, and she did not begin it. That is what {q:F2} looks at. She cannot tell from the call whether the man works for the bank, because anyone can say so, and the number that shows on a phone when it rings can be faked.',
      'This is so even if he does work for the bank. Real banks do ring their customers, and the key gives the same answer to a real call as to a false one, on purpose. The key answers by what you can see at that moment, and at that moment you can see only that it came to you. What settles whether he is real is not the call itself: it is {t:check}, which you do afterwards by hanging up and ringing the number on your card.'
    ],
    take: 'A real bank does not mind a call back, and a real fraud team will give you a way to do it. If the caller gets cross, or says that there is no time, that is worth knowing too. The cost of the key’s answer for a real call is a minute spent calling back. The cost of the opposite can be months of someone else using your name.' }
]);
