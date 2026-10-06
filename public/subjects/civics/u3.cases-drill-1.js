// Civics, Unit Three: drill cases for the first stage (the question alone, on a new case). None of these appears in a card. All bills, people and places are invented.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a ledger neighbor) and says why it fails.

FC.cases('civics', 'u3', [
  { id: 'pc-borrow', use: 'drill', tier: 'clean', setting: 'money', topic: 'the government borrows more',
    text: "Tax money no longer covers all of the government’s bills this year. The House and the Senate passed a bill that lets the government borrow another $40 billion.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that lets the government borrow another $40 billion' },
    reason: { C1: 'Congress passed a law, and what it is about is the government borrowing money: {cue:C1}. Borrowing is on the Constitution’s list, and the law takes no right away.' },
    not: { outcome: 'purse', why: 'It is about money, which can sound like a decision on what the government may spend. But the bill is about borrowing, a matter on the list, and says nothing about what the money will be spent on.' } },

  { id: 'pc-speech', use: 'drill', tier: 'clean', setting: 'community', topic: 'a ban on criticizing the government',
    text: "Some lawmakers are tired of being criticized. Both the House and the Senate passed a bill that bans anyone from saying in public that the government has made a mistake.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that bans anyone from saying in public that the government has made a mistake' },
    reason: { C1: 'The law takes away the right to speak: {cue:C1}. The Constitution protects that right, so Congress may not pass such a law, however the votes went.' },
    not: { outcome: 'enumerated', why: 'The law was passed by both chambers, as every law is. But a law that takes away a right is not one the Constitution lets Congress pass.' } },

  { id: 'pc-fire', use: 'drill', tier: 'clean', setting: 'community', topic: 'funds after a wildfire',
    text: "A wildfire burned a dozen homes in a mountain town. On Monday the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the House voted $60 million for fire crews and for rebuilding, and on Tuesday the Senate voted for the same amount' },
    reason: { C1: 'Congress decided that the government may spend money on something: {cue:C1}. Voting the money is what lets the crews be paid.' },
    not: { outcome: 'enumerated', why: 'Both chambers voted, as they do for every law. But the vote here is on money to be spent, and it is not a law on a listed matter such as a tax.' } },

  { id: 'pc-trial', use: 'drill', tier: 'varied', setting: 'work', topic: 'a land-office head who stayed',
    text: "The head of the federal land office was accused of selling public land to a friend for far less than it was worth. The House voted by more than half to charge her, and the Senate trial ended with 60 of the 100 senators voting to convict, so she stayed in her job.",
    outcome: 'impeach', route: { D1: ['congress'], C1: ['remove'] },
    cues: { C1: ['The House voted by more than half to charge her', 'the Senate trial ended with 60 of the 100 senators voting to convict'] },
    reason: { C1: 'Both steps are in the case: {cue:C1}. The Senate did not convict, so she stayed, but the answer is about the charge and the trial, not about how the trial ended.' },
    not: { outcome: 'confirm', why: 'A Senate vote on a person is what the two names have in common. But she already had the job, and the vote was on a charge, not on putting her forward.' } }
]);
