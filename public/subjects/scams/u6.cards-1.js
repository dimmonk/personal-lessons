// Scams, Unit Six, part one: the opening card, then the two groups of facts about money that has already been sent.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case,
// then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked
// from memory and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts,
// the stakes line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('scams', 'u6', [

  { id: 'orient-late', kind: 'orient',
    h: 'Facts to hold, for the day something has already gone wrong',
    canDo: [
      'This unit is different from the others in this subject. They teach you to tell one kind of request from another. This one is a set of facts to hold: what to do, and whom to tell, once something has already left your hands. By the end you can say each fact without looking it up, which is what you need on the day it matters, when you are upset and in a hurry.',
      'The facts are worth holding because the first hours count. In the first hours, money can sometimes still be recalled, and an account can be locked before the damage spreads. The chance is in those hours. A fact that you already know costs you no time at all, and time is the one thing that you do not have on that day.'
    ],
    everyday: [
      'Think of the moment after you press send on a payment, and then you see the reply that shows it was a scam. Your stomach drops. Three thoughts cost people the time they need: ‘I’m so stupid’, ‘I’ll sort it out myself’, and ‘If I pay one more fee, I’ll get it back’.',
      'None of those is a fact about scams. They are what being tricked feels like, and they are what the scammer is counting on. A person who already knows the first move can make it before the feeling takes over.'
    ],
    add: [
      'Each group in this unit starts from one thing that can leave your hands, such as money, a way into an account, control of a device, or papers and numbers. It opens with a short story, then explains the idea, then gives the facts for that group in a table. After the table, each fact is asked once, from memory.',
      'One thing in this unit depends on which bank you use: whether a payment can still be recalled. Where that is so, the unit says so. The unit does not promise that any step will get anything back. It says what the steps are, because they are what gives you a chance.'
    ] },

  /* ---------- group one: money sent, and the call to the bank ---------- */
  { id: 'con-money', kind: 'concept',
    h: 'Money has already gone',
    link: 'The first group is about the loss that moves fastest and is hardest to undo: money that you sent yourself.',
    case: 'late-money',
    plain: [
      'Look at what Priya did, and at what she did not do. She was tempted to wait, and to sort it out herself, and she did neither. She went straight to the one place that can try to get a payment back: the bank that sent it for her.',
      'Money is the loss that moves fastest. A payment that you sent yourself is hard for your bank to take back, and the bank’s own fraud checks usually let it through, because you were the one who sent it. That is why this group comes first.',
      'There is one good chance, and it is short. In the first hours, a payment can sometimes still be recalled, which means that your bank asks the bank that received the money to send it back. Whether that works depends on your bank and on how quickly you call, and nobody can promise it. What is certain is that every hour you wait uses some of the chance up. A call that turns out to be unnecessary costs ten minutes. A call that you put off can cost the money.',
      'The five facts below are the whole call: whom you call, which number, one trap if the scam began with a phone call, what you say, and how soon.'
    ] },

  { id: 'facts-money', kind: 'facts',
    h: 'The call to your bank',
    link: 'These are the five facts of the call, each with how it fits the idea that the first hours are the chance.',
    concept: 'con-money',
    rows: [
      { id: 'mo-who', q: 'Whom do you call first after money has gone to a scammer?', a: 'Call your bank',
        relates: 'Your bank is the one that sent the payment, so it is the one you can ask to try to get it back. It comes before anyone else because the first hours are the chance.' },
      { id: 'mo-number', q: 'Which number do you call?', a: 'Use the number on your card',
        relates: 'The number on the back of your card was yours before the scam began, so it is {t:already}. A number that came with the scam never is, even if you are the one who dials it.' },
      { id: 'mo-line', q: 'The scam began with a phone call. What do you do before you call your bank?', a: 'Wait a few minutes, or use a different phone',
        relates: 'A scammer can keep the line open and answer your call to ‘the bank’. Waiting a few minutes, or using a different phone, is what makes sure that your call goes to your bank and not to them.' },
      { id: 'mo-say', q: 'What do you say to your bank on that call?', a: 'Say it was a scam payment, and ask the bank to try to recall it',
        relates: 'The first part tells the bank what it is dealing with: a payment that you were tricked into making. The second part is what you are asking it to do about it. Recalling is the job that the first hours are for.' },
      { id: 'mo-when', q: 'How soon do you call?', a: 'Call right away',
        relates: 'In the first hours a payment can sometimes still be recalled. That is the chance, and waiting uses it up. A call that was not needed costs ten minutes, and a call put off can cost the money.' }
    ] },

  { id: 'chk-mo-who', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-who' } },
  { id: 'chk-mo-number', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-number' } },
  { id: 'chk-mo-line', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-line' } },
  { id: 'chk-mo-say', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-say' } },
  { id: 'chk-mo-when', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-when' } },

  { id: 'look-money', kind: 'lookalike', ledger: 'mo-number~mo-line',
    h: 'Two ways of making sure the call reaches your bank',
    link: 'Two of the five facts are both about making sure that your call really goes to your bank. They get swapped, so they go side by side.',
    facts: ['mo-number', 'mo-line'],
    instruction: 'Compare what each fact protects against: a wrong number, or a line that is still open.',
    prompt: { kind: 'which', answer: 'mo-line' },
    difference: [
      'Fact A is about which number you dial: {f:mo-number}. It protects you from a number that came with the scam, because that number leads to them.',
      'Fact B is about what you do before you dial, when the scam began with a call: {f:mo-line}. It protects you from a line that they have kept open, so that even the right number reaches them.',
      'You may need both on one day. The number on your card answers whom you dial, and waiting answers whether the line is yours.'
    ] },

  /* ---------- group two: reporting it, and keeping what you have ---------- */
  { id: 'con-report', kind: 'concept',
    h: 'Tell the right people, and keep what you have',
    link: 'The call to your bank is for getting money back. Whatever was lost, there is a second job: telling the people who deal with scams, and keeping the record of what happened.',
    case: 'late-report',
    plain: [
      'Dan called his bank, and that part was right. What went wrong was what came after. Out of embarrassment he deleted the chat and told nobody for three days. Each day cost him something. The messages were the record of what the caller had said and asked for, and once they were deleted he could not show them to anyone.',
      'There are two things to do beside the call to your bank. The first is to report the scam to the Federal Trade Commission (FTC) at ReportFraud.ftc.gov, and to do it after the call to your bank. If the scam happened over the internet, you can also report it to the FBI’s Internet Crime Complaint Center at IC3.gov. The second is to keep the messages: leave the chat, the emails and the call log as they are.',
      'Under both is a feeling. Scammers rely on embarrassment to keep people quiet, and a person who keeps quiet gives the scammer time. Speed matters more than shame.'
    ] },

  { id: 'facts-report', kind: 'facts',
    h: 'Report it, and keep the proof',
    link: 'These are the three facts for the second job, with how each fits the idea of telling the right people and keeping what you have.',
    concept: 'con-report',
    rows: [
      { id: 're-report', q: 'Besides your bank, whom do you report a scam to?', a: 'Report it to the FTC at ReportFraud.ftc.gov',
        relates: 'It is one of the real places to get help. The FTC takes reports of fraud at ReportFraud.ftc.gov, and a report adds to what it knows about the scam. An internet crime can also be reported to the FBI at IC3.gov. Report after your call to your bank.' },
      { id: 're-keep', q: 'What do you keep, and not delete?', a: 'Keep the messages',
        relates: 'They are the record of what the scammer said and asked for. A chat that has been deleted is a record that you no longer have.' },
      { id: 're-shame', q: 'You feel too embarrassed to say anything. What matters more than that feeling?', a: 'Speed',
        relates: 'Scammers rely on embarrassment to keep people quiet, and speed matters more than shame. Being tricked is what these scams are built to do to people, and a person who says nothing because they feel foolish only gives the scammer time.' }
    ] },

  { id: 'chk-re-report', kind: 'check', after: 'facts-report', ask: { type: 'fact', row: 're-report' } },
  { id: 'chk-re-keep', kind: 'check', after: 'facts-report', ask: { type: 'fact', row: 're-keep' } },
  { id: 'chk-re-shame', kind: 'check', after: 'facts-report', ask: { type: 'fact', row: 're-shame' } }
]);
