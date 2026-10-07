// Scams, Unit Six, part one: the opening card, then the group of facts about money that has already been sent and about
// reporting it. This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a
// case, then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked
// from memory and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts,
// the stakes line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('scams', 'u6', [

  { id: 'orient-late', kind: 'orient',
    h: 'What to do first, when a scam has already worked',
    canDo: [
      'If you ever send money, a password or a code to a scammer, you will be upset and in a hurry. This unit gives you the first move for each way it can go wrong, so you can make it without looking anything up.',
      'The first hours count. A payment can sometimes still be recalled, and an account can be locked before the damage spreads.'
    ],
    everyday: [
      'Picture it: you press send on a payment, then a reply shows that it was a scam. Your stomach drops. Three thoughts burn the time you need: ‘I’m so stupid’, ‘I’ll sort it out myself’, and ‘If I pay one more fee, I’ll get it back’.',
      'Those thoughts are what being tricked feels like, and the scammer is counting on them. If you already know the first move, you can make it before the feeling takes over.'
    ],
    add: [
      'Whether a payment can still be recalled depends on your bank. Nothing here promises that money comes back; each step only gives you a chance.'
    ] },

  /* ---------- group one: money sent, the call to the bank, and reporting it ---------- */
  { id: 'con-money', kind: 'concept',
    h: 'Money has already gone',
    link: 'First, money you sent yourself. It moves fastest and is the hardest to undo.',
    case: 'late-money',
    plain: [
      'Priya did not wait, and she did not try to fix it alone. She called the one place that can try to get a payment back: her bank.',
      'In the first hours, a payment can sometimes still be recalled. That means your bank asks the bank that received the money to send it back. Nobody can promise it works, but every hour you wait uses up some of the chance. A call you did not need costs ten minutes. A call you put off can cost the money.',
      'After the call, report the scam to the Federal Trade Commission (FTC) at ReportFraud.ftc.gov. Keep every message: leave the chat, the emails and the call log as they are. Scammers count on embarrassment to keep people quiet, and the longer you stay quiet, the more time they have. Speed matters more than shame.'
    ] },

  { id: 'facts-money', kind: 'facts',
    h: 'The call to your bank, and what comes after',
    link: 'Five facts: how to make the call, and what to do after it.',
    concept: 'con-money',
    rows: [
      { id: 'mo-number', q: 'Which number do you use to call your bank?', a: 'The number on the back of your card',
        relates: 'That number was yours before the scam, so it is {t:already}. A number from the scam never is, even if you are the one who dials it.' },
      { id: 'mo-say', q: 'What do you tell your bank on the call?', a: 'Say it was a scam payment, and ask for a recall',
        relates: 'Saying it was a scam payment tells the bank what it is dealing with. Asking for a recall is the job the first hours are for.' },
      { id: 'mo-when', q: 'How soon do you call your bank?', a: 'Call right away, before anything else',
        relates: 'Every hour you wait uses up some of the chance to recall the payment. A call you did not need costs ten minutes; a call you put off can cost the money.' },
      { id: 're-report', q: 'Besides your bank, who takes your report of the scam?', a: 'Report it to the FTC at ReportFraud.ftc.gov',
        relates: 'The FTC is one of the real places to get help, and it takes fraud reports at ReportFraud.ftc.gov. Report after you have called your bank.' },
      { id: 're-keep', q: 'What do you keep and not delete?', a: 'Keep every message, and delete nothing',
        relates: 'The messages are the record of what the scammer said and asked for. A chat you deleted is a record you no longer have.' }
    ] },

  { id: 'chk-mo-number', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-number' } },
  { id: 'chk-mo-say', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-say' } },
  { id: 'chk-mo-when', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-when' } },
  { id: 'chk-re-report', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 're-report' } },
  { id: 'chk-re-keep', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 're-keep' } }
]);
