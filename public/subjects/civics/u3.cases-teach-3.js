// Civics, Unit Three: cases shown inside cards (a charge against an official, its pair, the check on the question, and the worked case).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.
// Every case here has the first question's answer, Congress (route D1), and one answer to the branch question (C1).
// All bills, people and places are invented.

FC.cases('civics', 'u3', [
  { id: 'i-judge', use: 'teach', tier: 'clean', setting: 'community', topic: 'a federal judge who took bribes', name: 'The judge who took money',
    text: "A federal judge is accused of taking money to decide court cases in favor of one company. The House voted, by more than half, to charge the judge with taking the money. The Senate then held a trial, and 70 of the 100 senators voted to convict. The judge was removed from the job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted, by more than half, to charge the judge with taking the money', 'The Senate then held a trial, and 70 of the 100 senators voted to convict'] } },

  { id: 'k-housing', use: 'check', tier: 'clean', setting: 'home', topic: 'a housing head is charged', name: 'The housing head',
    text: "Many families wait years for an apartment from the housing program. The House has voted to charge the head of the federal housing department with misusing public money. The Senate will hold the trial next month.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: 'The House has voted to charge the head of the federal housing department with misusing public money' },
    segments: [
      { text: 'Many families wait years for an apartment from the housing program', note: 'That is the background. It says nothing about what Congress has done.' },
      { text: 'The House has voted to charge the head of the federal housing department with misusing public money' },
      { text: 'The Senate will hold the trial next month', note: 'That step is still to come. The words asked for are the one already taken.' }
    ],
    reason: { C1: 'The House has already voted to charge a federal official with serious wrongdoing, and the Senate’s trial is still to come.' },
    not: { outcome: 'confirm', why: 'The Senate is voting on a person who works for the government. But he already has the job, and the vote will be on a charge, not on putting him forward.' } },

  { id: 'l-okafor-seat', use: 'teach', tier: 'clean', setting: 'work', topic: 'a lawyer chosen for a federal court', name: 'Maria Okafor chosen',
    text: "Maria Okafor is a lawyer. The President chose her for a seat on a federal court, and the Senate held hearings. On Thursday the Senate voted 60 to 38 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'On Thursday the Senate voted 60 to 38 to approve her' } },

  { id: 'l-okafor-trial', use: 'teach', tier: 'clean', setting: 'work', topic: 'a federal judge is charged', name: 'Maria Okafor charged',
    text: "Maria Okafor has been a federal judge for six years. The House voted, by more than half, to charge her with taking money to decide court cases, and the Senate has set a date for her trial.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: 'The House voted, by more than half, to charge her with taking money to decide court cases' } },

  { id: 'k-wed', use: 'check', tier: 'clean', setting: 'home', topic: 'a marriage age for every state', name: 'The marriage age',
    text: "Two people in a small town want to marry at eighteen. The House and the Senate passed a bill that says no one in any state may marry before the age of twenty-one.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that says no one in any state may marry before the age of twenty-one' },
    reason: { C1: 'The law is about who may marry: {cue:C1}. Marriage is not on the Constitution’s list, so each state decides.' },
    not: { outcome: 'enumerated', why: 'Every law passes the House and the Senate, and that does not make the subject Congress’s. Marriage is not on the Constitution’s list.' } },

  { id: 'w-mint', use: 'teach', tier: 'misleading', setting: 'money', topic: 'funds for new coin presses', name: 'The coin presses',
    also: ['listed'],
    text: "The mint says its presses are worn out and cannot make enough coins. The House and the Senate passed a bill that gives the mint $120 million to buy new presses. The President is expected to sign it.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'gives the mint $120 million to buy new presses' } }
]);
