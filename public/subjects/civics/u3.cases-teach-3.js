// Civics, Unit Three: cases shown inside cards, part three (a charge against an official, its pair with the vote on a
// person, the check on the key's question, and the two worked cases). See u3.cases-teach-1.js for the field guide.
// The two worked cases carry marked words and a reason for both questions, because a worked card runs the route from the
// first question of the key. The case used by a worked card carries no `reason` of its own: the card holds it (S4).

FC.cases('civics', 'u3', [

  /* ---------- Impeachment ---------- */
  { id: 'i-judge', use: 'teach', tier: 'clean', setting: 'community', topic: 'a federal judge who took bribes', name: 'The judge who took money',
    text: "A federal judge is accused of taking money to decide cases in favour of one company. The House voted, by more than half, to charge the judge with taking the money. The Senate then held a trial, and 70 of the 100 senators voted to convict. The judge was removed from the job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted, by more than half, to charge the judge with taking the money', 'The Senate then held a trial, and 70 of the 100 senators voted to convict'] } },

  { id: 'i-secretary', use: 'teach', tier: 'clean', setting: 'money', topic: 'a department head who hid government funds', name: 'The department head who stayed',
    text: "The head of a federal department is accused of hiding government money from Congress. The House voted by more than half to charge him. In the Senate trial, 55 of the 100 senators voted to convict, fewer than the two-thirds needed, and he stayed in his job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted by more than half to charge him', 'In the Senate trial, 55 of the 100 senators voted to convict, fewer than the two-thirds needed'] },
    segments: [
      { text: 'The head of a federal department is accused of hiding government money from Congress', note: 'That is the accusation, and it is why Congress acts. It is not yet anything Congress has done.' },
      { text: 'The House voted by more than half to charge him' },
      { text: 'In the Senate trial, 55 of the 100 senators voted to convict, fewer than the two-thirds needed, and he stayed in his job', note: 'That is the second step, the Senate’s. It shows how the trial ended, and it is what Congress does second. The words asked for are the first step.' }
    ] },

  { id: 'k-housing', use: 'check', tier: 'clean', setting: 'home', topic: 'a housing head is charged', name: 'The housing head',
    text: "Many families wait years for a flat from the housing programme. The House has voted to charge the head of the federal housing department with misusing public money. The Senate will hold the trial next month.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: 'The House has voted to charge the head of the federal housing department with misusing public money' },
    segments: [
      { text: 'Many families wait years for a flat from the housing programme', note: 'That is the background to the case. It says nothing about what Congress has done.' },
      { text: 'The House has voted to charge the head of the federal housing department with misusing public money' },
      { text: 'The Senate will hold the trial next month', note: 'That is the second step, and it is still to come. The words asked for are the step already taken.' }
    ],
    reason: { C1: 'The House has taken the first step: it has voted to charge a federal official with serious misconduct. The Senate’s trial of the charge is still to come, and the answer covers both steps.' },
    not: { outcome: 'confirm', why: 'It is a matter for the Senate about a person who works for the government. But he already has the job, and the vote will be on a charge, not on putting him forward.' } },

  /* ---------- The look-alike pair: the same person, before and after she has the job ---------- */
  { id: 'l-okafor-seat', use: 'teach', tier: 'clean', setting: 'work', topic: 'a lawyer chosen for a federal court', name: 'Maria Okafor chosen',
    text: "Maria Okafor is a lawyer. The President chose her for a seat on a federal court, and the Senate held hearings. On Thursday the Senate voted 60 to 38 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'On Thursday the Senate voted 60 to 38 to approve her' } },

  { id: 'l-okafor-trial', use: 'teach', tier: 'clean', setting: 'work', topic: 'a federal judge is charged', name: 'Maria Okafor charged',
    text: "Maria Okafor has been a federal judge for six years. The House voted, by more than half, to charge her with taking money to decide cases, and the Senate has set a date for her trial.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: 'The House voted, by more than half, to charge her with taking money to decide cases' } },

  /* ---------- The check on the question: every answer is possible ---------- */
  { id: 'k-wed', use: 'check', tier: 'clean', setting: 'home', topic: 'a marriage age for every state', name: 'The marriage age',
    text: "Two people in a small town want to marry at eighteen. The House and the Senate passed a bill that says no one in any state may marry before the age of twenty-one.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that says no one in any state may marry before the age of twenty-one' },
    reason: { C1: 'Congress passed a law, and what it is about is who may marry: {cue:C1}. That is not one of the matters the Constitution lists for Congress. It is for the states to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law, and it does not make the matter one of Congress’s. Marriage is not on the Constitution’s list.' } },

  /* ---------- The two worked cases: a clean one, then one whose story points the wrong way ---------- */
  { id: 'w-barbers', use: 'teach', tier: 'clean', setting: 'work', topic: 'the working hours of barbers', name: 'The barbers’ hours',
    text: "Barbers in every state say that late-night hours are hard on their families. The House and the Senate passed a bill that sets the hours barbers may work in every state: none may open before eight in the morning or after six in the evening.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'a bill that sets the hours barbers may work in every state' } },

  { id: 'w-mint', use: 'teach', tier: 'misleading', setting: 'money', topic: 'funds for new coin presses', name: 'The coin presses',
    also: ['listed'],
    text: "The mint says its presses are worn out and cannot make enough coins. The House and the Senate passed a bill that gives the mint $120 million to buy new presses. The President is expected to sign it.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'gives the mint $120 million to buy new presses' } }
]);
