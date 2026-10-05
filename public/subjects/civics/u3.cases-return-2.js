// Civics, Unit Three: fresh cases held back for later days (second file: the last two names, three cases each).
// See u3.cases-return-1.js for the field guide.

FC.cases('civics', 'u3', [

  /* ---------- Advice and consent ---------- */
  { id: 'ret-nurse', use: 'return', tier: 'clean', setting: 'health', topic: 'a nurse chosen to lead a nursing service',
    text: "The President chose a nurse to lead the federal nursing service. After two days of hearings, the Senate voted 62 to 37 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'After two days of hearings, the Senate', C1: 'voted 62 to 37 to approve her' },
    reason: { D1: 'The case ends in the Senate, whose members are lawmakers of the whole country: {cue:D1}. The President’s choice came first.',
              C1: 'The Senate voted on a person the President put forward: it {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote about a woman who works for the government. But nobody is accused of anything, and she does not yet have the job.' } },

  { id: 'ret-pact', use: 'return', tier: 'varied', setting: 'travel', topic: 'a treaty on student visas',
    text: "The President signed a treaty with a country overseas so that students may study in each other’s universities without extra visas. The Senate then held a vote on the treaty, and 80 of the 98 senators present voted to approve it.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate then held a vote on the treaty', C1: '80 of the 98 senators present voted to approve it' },
    reason: { D1: 'The last decision is a vote in the Senate: {cue:D1}. The President’s signature is how the matter got there.',
              C1: 'The Senate voted on a {t:treaty} the President had signed: {cue:C1}.' },
    not: { outcome: 'impeach', why: 'Both are Senate votes. But nobody is accused of anything here. The vote is on an agreement the President signed.' },
    wouldChange: 'If the story had stopped after the President signed, with nothing about the Senate, the key’s answer to the first question would be {a:D1.president}.' },

  { id: 'ret-railhead', use: 'return', tier: 'misleading', setting: 'work', topic: 'a railway head not yet approved',
    text: "The President announced on Monday that Carla Dunn will run the federal railway office, and the White House said she would start in a week. She can begin only after the Senate votes on her name, which is set for Thursday.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'which is set for Thursday', C1: 'after the Senate votes on her name' },
    reason: { D1: 'The case ends by asking the Senate for a decision, set for Thursday: {cue:D1}. The announcement is how the matter got there.',
              C1: 'The vote is on a person the President put forward: she can begin only {cue:C1}.' },
    not: { outcome: 'impeach', why: 'It is a Senate vote about a woman. But she does not yet have the job, and nobody is accused of anything.' },
    wouldChange: 'If the story had ended with the President announcing her and saying that she starts in a week, with nothing about a Senate vote, the key’s answer to the first question would be {a:D1.president}.' },

  /* ---------- Impeachment ---------- */
  { id: 'ret-inspector', use: 'return', tier: 'clean', setting: 'work', topic: 'an inspector general who covered up a theft',
    text: "A federal inspector general is accused of covering up a theft at his own office. The House voted by more than half to charge him, and the Senate will start the trial in March.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'the Senate will start the trial in March', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The case ends with a trial still to be held by senators: {cue:D1}.',
              C1: 'The House has taken the first step: {cue:C1}. The trial is the second step.' },
    not: { outcome: 'confirm', why: 'A Senate vote about a person who works for the government can look like a vote on a job. He already has the job, and the vote will be on a charge.' } },

  { id: 'ret-contracts', use: 'return', tier: 'varied', setting: 'home', topic: 'a housing head who steered contracts',
    text: "The head of the federal housing office was accused of steering building contracts to her brother’s firm. The House voted by more than half to charge her. The Senate trial ended with only 51 of the 100 senators voting to convict, so she kept her place.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'The Senate trial ended with only 51 of the 100 senators voting to convict', C1: 'The House voted by more than half to charge her' },
    reason: { D1: 'The last decision is a vote by senators: {cue:D1}.',
              C1: 'The House brought the charge: {cue:C1}. The Senate tried it and did not convict. The key’s answer covers the charge and the trial, whatever the result.' },
    not: { outcome: 'confirm', why: 'Both are Senate votes about a woman at the head of an office. But she already had the job, and the vote was on a charge.' } },

  { id: 'ret-courtservice', use: 'return', tier: 'misleading', setting: 'money', topic: 'a court-service head accused over costs', echo: 'l-okafor-seat',
    text: "The head of the federal court-service office is accused of lying about the cost of new courthouses. A reporter called it “a trial of the court service”. The House voted by more than half to charge him, and the Senate trial is set for May.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { D1: 'the Senate trial is set for May', C1: 'The House voted by more than half to charge him' },
    reason: { D1: 'The case ends with a trial to be held by senators: {cue:D1}. The words “court service” and “trial” point to a judge, but no judge decides anything in it.',
              C1: 'The House has taken the first step: {cue:C1}. The Senate will try the charge.' },
    not: { outcome: 'confirm', why: 'It is a story about a person who works for the government, and the Senate will vote. But he already has the job, and the vote will be on a charge, not on putting him forward.' } }
]);
