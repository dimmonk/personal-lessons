// Civics, Unit Three: drill cases for the first stage (the question alone, on a new case). None of these appears in a card. All bills, people and places are invented.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a ledger neighbor) and says why it fails.

FC.cases('civics', 'u3', [
  { id: 'pc-borrow', use: 'drill', tier: 'clean', setting: 'money', topic: 'the government borrows more',
    text: "Tax money no longer covers all of the government’s bills this year. The House and the Senate passed a bill that lets the government borrow another $40 billion.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that lets the government borrow another $40 billion' },
    reason: { C1: 'The law is about borrowing: {cue:C1}. Borrowing is on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'purse', why: 'It is about money, but the bill is about borrowing, a subject on the list. It says nothing about what the money will be spent on.' } },

  { id: 'pc-speech', use: 'drill', tier: 'clean', setting: 'community', topic: 'a ban on criticizing the government',
    text: "Some lawmakers are tired of being criticized. Both the House and the Senate passed a bill that bans anyone from saying in public that the government has made a mistake.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that bans anyone from saying in public that the government has made a mistake' },
    reason: { C1: 'The law bans criticism: {cue:C1}. The Constitution protects the right to speak, so Congress may not pass it, whatever the votes.' },
    not: { outcome: 'enumerated', why: 'Every law passes the House and the Senate. But a law that takes away a right is never allowed.' } },

  { id: 'pc-fire', use: 'drill', tier: 'clean', setting: 'community', topic: 'funds after a wildfire',
    text: "A wildfire burned a dozen homes in a mountain town. On Monday the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount' },
    reason: { C1: 'Congress voted money for fire crews and rebuilding: {cue:C1}. That vote is what lets the government pay them.' },
    not: { outcome: 'enumerated', why: 'Every law passes the House and the Senate. But this vote is on money to spend, not on a tax or another listed subject.' } },

  { id: 'pc-trial', use: 'drill', tier: 'varied', setting: 'work', topic: 'a land-office head who stayed',
    text: "The head of the federal land office was accused of selling public land to a friend for far less than it was worth. The House voted by more than half to charge her, and the Senate trial ended with 60 of the 100 senators voting to convict, so she stayed in her job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted by more than half to charge her', 'the Senate trial ended with 60 of the 100 senators voting to convict'] },
    reason: { C1: 'Both steps are here: {cue:C1}. The Senate did not convict, but the answer covers the charge and the trial, not how it ended.' },
    not: { outcome: 'confirm', why: 'Both are Senate votes about a person. But she already had the job, and the vote was on a charge, not on putting her forward.' } }
]);
