// Scams, Unit Six, part one: the opening card, then the group of facts about money that has already been sent and about
// reporting it. This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a
// case, then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked
// from memory and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts,
// the stakes line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('scams', 'u6', [

  { id: 'orient-late', kind: 'orient',
    h: 'Facts to hold, for the day something has already gone wrong',
    canDo: [
      'These are facts to hold: what to do, and whom to tell, once something has already left your hands. By the end you can say each fact without looking it up, which is what you need on the day it matters, when you are upset and in a hurry.',
      'The first hours count: money can sometimes still be recalled, and an account can be locked before the damage spreads. A fact that you already know costs you no time at all.'
    ],
    everyday: [
      'Think of the moment after you press send on a payment, and then you see the reply that shows it was a scam. Your stomach drops. Three thoughts cost people the time they need: ‘I’m so stupid’, ‘I’ll sort it out myself’, and ‘If I pay one more fee, I’ll get it back’.',
      'They are what being tricked feels like, and what the scammer is counting on. A person who already knows the first move can make it before the feeling takes over.'
    ],
    add: [
      'Whether a payment can still be recalled depends on your bank. No step here promises that anything will come back; each one only gives you a chance.'
    ] },

  /* ---------- group one: money sent, the call to the bank, and reporting it ---------- */
  { id: 'con-money', kind: 'concept',
    h: 'Money has already gone',
    link: 'The first group is about the loss that moves fastest and is hardest to undo: money that you sent yourself.',
    case: 'late-money',
    plain: [
      'Priya did not wait, and she did not try to sort it out herself. She went straight to the one place that can try to get a payment back: the bank that sent it for her.',
      'In the first hours, a payment can sometimes still be recalled, which means that your bank asks the bank that received the money to send it back. Nobody can promise that it works, but every hour you wait uses some of the chance up. A call that turns out to be unnecessary costs ten minutes. A call that you put off can cost the money.',
      'After the call, report the scam to the Federal Trade Commission (FTC) at ReportFraud.ftc.gov, and keep the messages: leave the chat, the emails and the call log as they are. Scammers rely on embarrassment to keep people quiet, and a person who keeps quiet gives the scammer time. Speed matters more than shame.'
    ] },

  { id: 'facts-money', kind: 'facts',
    h: 'The call to your bank, and what comes after',
    link: 'These are the five facts of the call and what follows it, each with how it fits the idea that the first hours are the chance.',
    concept: 'con-money',
    rows: [
      { id: 'mo-number', q: 'Which number do you call?', a: 'Use the number on your card',
        relates: 'The number on the back of your card was yours before the scam began, so it is {t:already}. A number that came with the scam never is, even if you are the one who dials it.' },
      { id: 'mo-say', q: 'What do you say to your bank on that call?', a: 'Say it was a scam payment, and ask the bank to try to recall it',
        relates: 'The first part tells the bank what it is dealing with: a payment that you were tricked into making. The second part is what you are asking it to do about it. Recalling is the job that the first hours are for.' },
      { id: 'mo-when', q: 'How soon do you call?', a: 'Call right away',
        relates: 'In the first hours a payment can sometimes still be recalled. That is the chance, and waiting uses it up. A call that was not needed costs ten minutes, and a call put off can cost the money.' },
      { id: 're-report', q: 'Besides your bank, whom do you report a scam to?', a: 'Report it to the FTC at ReportFraud.ftc.gov',
        relates: 'It is one of the real places to get help. The FTC takes reports of fraud at ReportFraud.ftc.gov. Report after your call to your bank.' },
      { id: 're-keep', q: 'What do you keep, and not delete?', a: 'Keep the messages',
        relates: 'They are the record of what the scammer said and asked for. A chat that has been deleted is a record that you no longer have.' }
    ] },

  { id: 'chk-mo-number', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-number' } },
  { id: 'chk-mo-say', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-say' } },
  { id: 'chk-mo-when', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 'mo-when' } },
  { id: 'chk-re-report', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 're-report' } },
  { id: 'chk-re-keep', kind: 'check', after: 'facts-money', ask: { type: 'fact', row: 're-keep' } }
]);
