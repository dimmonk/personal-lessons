// Scams, Unit Five: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like
// (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly or reasons in one of the unit's ways. ask.type 'option':
// the key's question is asked of the claim itself. The fault is shown after the learner commits, and the claim put right is
// always the last thing shown. Field guide: see u5.cases-drill-1.js.

FC.cases('scams', 'u5', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'u5-rev-realdetails', use: 'drill', kind: 'reverse', outcome: 'realdetails', expect: 'hear',
    options: [
      { text: '"To set up your record I need your date of birth and the first line of your address. You can also do this at our desk, if you would rather."', voice: 'realdetails' },
      { text: '"Sorry, wrong number! But now that we are chatting, where are you going on vacation?"', voice: 'friendlychat' },
      { text: '"Your grant is ready. Send a photo of your passport by Friday and it will be paid."', voice: 'identitytheft' }
    ],
    why: 'The facts are asked for something the person began, the other side says what they are for, and it lets you do it in a place of your own choosing.' },

  { id: 'u5-rev-identitytheft', use: 'drill', kind: 'reverse', outcome: 'identitytheft', expect: 'find',
    options: [
      { text: 'A stranger who has chatted with you for weeks and has asked only about your vacations and your job.', voice: 'friendlychat' },
      { text: 'A message you did not ask for, which offers you something and asks for a photo of your passport.', voice: 'identitytheft' },
      { text: 'You walked into the office yourself, and were asked for your address to set up your account.', voice: 'realdetails' }
    ],
    why: 'It came to you, offers something you did not ask for, and asks for papers that identify you. That is the part to look for.' },

  { id: 'u5-rev-friendlychat', use: 'drill', kind: 'reverse', outcome: 'friendlychat', expect: 'hear',
    options: [
      { text: '"To confirm that it is you, send a photo of yourself holding your ID."', voice: 'identitytheft' },
      { text: '"To find your account, can I take the first line of your address?"', voice: 'realdetails' },
      { text: '"Sorry, wrong number! Since we are chatting, what do you do for work? Do you live alone?"', voice: 'friendlychat' }
    ],
    why: 'The speaker knows you only through messages and reached you out of nowhere. The questions are friendly, they are about you, and nothing you began needs the answers.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'u5-claim-demo', use: 'claim',
    context: 'A man goes into a credit union to open an account. The clerk asks for his passport and his address, and says that the credit union is required to check who its customers are.',
    text: '"Anyone who asks me for my passport is a fraud. The credit union asked for mine, so I walked out."',
    ask: { type: 'option', step: 'F2', answer: 'fits' },
    fault: 'The claim treats a request for a passport as a sign of fraud. A passport is a paper that a copy asks for, and it is also a paper that a real organization asks for, when you began something with it. This man went in to open an account himself, and what the clerk asked for matches what an account needs. It is not the paper that makes a request a copy.',
    corrected: 'The credit union asked for my passport, and I had gone in to open an account myself. That is {a:F2.fits}. What would have made it a copy is a request that came to me, or one that asked for more than the job needs.' },

  { id: 'u5-claim-knew', use: 'claim',
    context: 'A woman gets a call from a man who says he is from her bank. He uses her full name, her address and her date of birth, and asks her to confirm the three-digit code on the back of her card.',
    text: '"He knew my full name, my address and my date of birth. It had to be my bank."',
    ask: { type: 'option', step: 'F2', answer: 'notfit' },
    fault: 'The claim treats what the caller knew as proof of who he was. A name, an address and a date of birth are on lists that are bought and sold, so they show only that he had a list. The question is something else: whether she began it. The call came to her, and the code on the back of a card is more than any real caller needs.',
    corrected: 'He knew a lot about me, and that tells me nothing. The call came to me and I began nothing, so the answer is {a:F2.notfit}. To find out whether he is from my bank, I would use {t:check}: hang up and call the number on my card.' },

  { id: 'u5-claim-nomoney', use: 'claim',
    context: 'Since a text to the wrong number six weeks ago, a woman has messaged a man every day. She asks about his work and his home, and has never asked for anything.',
    text: '"We have chatted every day for six weeks, and she has never mentioned money. A scammer would have asked by now."',
    ask: { type: 'option', step: 'F1', answer: 'life' },
    fault: 'The claim treats the lack of a request as a sign that nothing is wrong. For many scams the weeks without a request are the work: the questions collect facts about him and build trust. A lack of requests tells him nothing about a stranger who reached him out of nowhere.',
    corrected: 'She has not asked for money, and she is a stranger who reached me out of nowhere and asks about my work and my home. That is {a:F1.life}, and it is the stage before the ask. I should stop answering questions about myself and ask a friend to read the messages.' },

  { id: 'u5-claim-standard', use: 'claim',
    context: 'A man applied for a warehouse job on a company’s website. Before any contract is signed, an email asks him to send a photo of himself holding his passport, with his bank account details.',
    text: '"I applied to this company myself, so the request has to be real. The recruiter told me a photo of me holding my passport is standard."',
    ask: { type: 'option', step: 'F2', answer: 'notfit' },
    fault: 'The claim stops at "I applied". Beginning it is only half of what the question asks. The other half is whether what is asked is what the job needs at this stage. Before any contract is signed, a photo of him holding his passport and his bank account details is more than the job needs. Saying that it is standard does not make it so.',
    corrected: 'I did apply, and that is only half of the question. The other half is whether what is asked is what the stage I am at needs, and before a contract it is not. The answer is {a:F2.notfit}. I would look up the company’s own number and ask whether it sent the email.' },

  { id: 'u5-claim-cardnumber', use: 'claim',
    context: 'A text asks a woman for her date of birth and the full number of her bank card to claim a free gift card, and promises that nothing will be charged. She has not shopped at that store.',
    text: '"It said nothing would be charged, so giving them my card number could not do any harm."',
    ask: { type: 'option', step: 'F1', answer: 'identify' },
    fault: 'The claim treats a card number as harmless because no charge is promised. A full card number, with a date of birth, is a set of facts that identify her and that anyone who holds them can use again, on another day, without a charge showing on this occasion. A promise from a stranger shows nothing about what will be done with the facts.',
    corrected: 'The text asks me for my date of birth and my full card number. Those are {a:F1.identify}, and they can be used again by whoever has them, whatever this text says about charges. It also came to me, which is the answer {a:F2.notfit}.' }
]);
