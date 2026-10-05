// Scams, Unit Four: drill cases for stage four (the whole route, no help), part three: the misleading cases, in which the most
// noticeable thing in the story is not what decides it. echo names a teaching case whose story each one brings back while its
// name differs: the feedback says so, which is how the second look is practised. also lists answers that the case shows as well as
// its own, which lose to its own by the key's tie-break.

FC.cases('scams', 'u4', [

  /* ---------- Group eight: a fee that comes first, in three disguises ---------- */
  { id: 'd-r-pig3', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a release fee on an exchange shown by a gaming friend', echo: 'm-adv-lottery',
    text: "Mario was shown a cryptocurrency exchange by a woman he has never met, whom he chats to every day on a gaming forum. The exchange now shows his £6,000 deposit as £11,000. When he asks to withdraw, a message says: 'Pay a 15% release fee of £1,650 to unlock your funds.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] }, also: ['fee'],
    cues: { D1: 'Pay a 15% release fee of £1,650 to unlock your funds', M1: 'shown a cryptocurrency exchange by a woman he has never met, whom he chats to every day on a gaming forum', M2: 'Pay a 15% release fee of £1,650 to unlock your funds' },
    reason: { D1: '{cue:D1} asks him to pay, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The money is in an exchange that someone he has never met showed him: {cue:M1}.',
              M2: 'The request is to pay a fee to take his money out of the site that he was shown: {cue:M2}. A fee before money reaches you also fits, and when a case shows both, the key’s answer is {a:M2.site}.' },
    not: { outcome: 'advancefee', why: 'The fee is real in the story, but the money is not a prize that was never his. It is in an exchange that a person he has never met showed him.' },
    wouldChange: 'If no one he knew had shown him the exchange, and a message said that a prize was waiting and a fee must be paid, it would be {o:advancefee}.' },

  { id: 'd-r-adv2', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a council hardship grant and an administration charge', echo: 'm-off-tax',
    text: "A letter with a council crest says: 'Your household has been chosen for a £1,800 council hardship grant. The council will transfer it as soon as you pay a £45 administration charge to the account below.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] }, also: ['official'],
    cues: { D1: 'pay a £45 administration charge to the account below', M1: 'chosen for a £1,800 council hardship grant', M2: 'as soon as you pay a £45 administration charge' },
    reason: { D1: '{cue:D1} asks for a payment, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The council is not threatening anyone. It says that money is waiting for the reader: {cue:M1}. A request from an official also fits, and when a case shows both, the key’s answer is {a:M1.prize}.',
              M2: 'A payment must be made before the grant is transferred: {cue:M2}.' },
    not: { outcome: 'fakeofficial', why: 'The council crest makes it look official, but nobody is told that they owe anything, and nobody is threatened. The message says that money is owed to the reader.' },
    wouldChange: 'If the letter had said that the reader owed the council £1,800, and would be taken to court unless they paid at once in vouchers, it would be {o:fakeofficial}.' },

  { id: 'd-r-rec3', use: 'drill', tier: 'misleading', setting: 'relationships', topic: 'compensation said to be held after a romance scam', echo: 'm-adv-loan',
    text: "After a man she met online took £9,000 from her, Pat gets a message from a 'compensation board': 'A compensation payment of £9,000 is being held for you. Pay the £220 release charge to receive it.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] }, also: ['prize'],
    cues: { D1: 'Pay the £220 release charge to receive it', M1: ['After a man she met online took £9,000 from her', 'A compensation payment of £9,000 is being held for you'], M2: 'Pay the £220 release charge to receive it' },
    reason: { D1: '{cue:D1} asks her to pay, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The £9,000 that is said to be held is the money that was taken from her: {cue:M1}. Money that is waiting for her also fits, and when a case shows both, the key’s answer is {a:M1.lost}.',
              M2: 'A fee must be paid first: {cue:M2}.' },
    not: { outcome: 'advancefee', why: 'The compensation is not a prize that was never hers. The sum matches what the man took, and the message uses her loss to make the offer.' },
    wouldChange: 'If Pat had lost nothing and the message said that she had won £9,000, it would be {o:advancefee}.' },

  /* ---------- Group nine: hurry and fear on the surface ---------- */
  { id: 'd-r-link3', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a final demand for vehicle tax on a link', echo: 'm-off-bank',
    text: "A text says: 'Final demand from the Road Tax Unit: your vehicle tax of £190 is overdue. Pay in the next hour at roadtax-final.example, or your car will be seized. Tell nobody.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['official'], M2: ['link'] }, also: ['rush'],
    cues: { D1: 'Pay in the next hour at roadtax-final.example', M1: 'your vehicle tax of £190 is overdue', M2: 'Pay in the next hour at roadtax-final.example' },
    reason: { D1: '{cue:D1} asks for a payment, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The reason is a tax from an official body: {cue:M1}.',
              M2: 'The text says to pay on a page that is reached through a link: {cue:M2}. The hurry, the threat and the order to tell nobody also fit, and when a case shows both, the key’s answer is {a:M2.link}.' },
    not: { outcome: 'fakeofficial', why: 'The hurry and the secrecy are there, but the payment is to be made on a link. A more specific answer comes before them.' },
    wouldChange: 'If it had no link, and had told him to pay in vouchers by phone and to tell nobody, it would be {o:fakeofficial}.' },

  { id: 'd-r-off3', use: 'drill', tier: 'misleading', setting: 'government', topic: 'a council tax reminder followed by a call', echo: 'm-real-parking',
    text: "Sana opens an email that looks like a normal council tax reminder: 'Your council tax account is £140 behind.' Ten minutes later a man rings her: 'I am from the council's recovery team. Pay the £140 today with two supermarket vouchers, and do not tell the council office, or charges will be added.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'Pay the £140 today with two supermarket vouchers', M1: ["Your council tax account is £140 behind", "I am from the council's recovery team"], M2: 'Pay the £140 today with two supermarket vouchers, and do not tell the council office' },
    reason: { D1: '{cue:D1} asks her to pay, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The reason is a debt to the council, and the caller claims to be from it: {cue:M1}.',
              M2: 'She is to pay at once, in vouchers, which cannot be undone, and to tell the council office nothing: {cue:M2}. Nothing more specific shows.' },
    not: { outcome: 'realpayment', why: 'The reminder looks like a real one, but the call is not: the council would give her time, would not take vouchers, and would not tell her to keep it from its own office.' },
    wouldChange: 'If she had found the same £140 in her own council account, at an address that she typed in, and nobody had hurried her, it would be {o:realpayment}.' },

  { id: 'd-r-real4', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a final reminder from the water company, and it is real', echo: 'm-off-tax',
    text: "Helen's water company sends a final reminder through its own app: 'Your bill of £76 is overdue. Pay by the 30th, or a late fee of £5 applies. Ring the number on your bill if you think this is wrong.' She has paid the same company for years, and the same £76 is in the account section of the app that she installed herself.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'Pay by the 30th, or a late fee of £5 applies', M1: 'Your bill of £76 is overdue', M2: ['the same £76 is in the account section of the app that she installed herself', 'Ring the number on your bill'] },
    reason: { D1: '{cue:D1} is a request to pay, and nothing earlier in the key’s list is asked, so the answer is {a:D1.money}.',
              M1: 'The money is a bill from a company that she has paid for years: {cue:M1}.',
              M2: 'The words are firm, but nothing is hidden. The same amount is in her own app, she has until the 30th, and she is told to ring the number on her bill: {cue:M2}.' },
    not: { outcome: 'fakeofficial', why: '“Final reminder” and a late fee sound like a threat, but there is no claim to an official’s power, no hurry beyond a real due date, and no order to keep quiet.' },
    wouldChange: 'If a caller had told her to pay the £76 today in vouchers and to say nothing to the company, it would be {o:fakeofficial}.' }
]);
