// Statistical Claims, Unit Five: the drill items that are not stories. Reverse items (stage two) and faulty claims (the last stage).
// A reverse item gives the name and asks what you would expect to hear or find. Every option is what one of the names sounds like, and voice
// says which; one option is always the claim in which nothing goes wrong. A claim is something a person might say. ask is either
//   { type: 'missing', name }          "what would you need to see before this name could be used?" (choices: the key's needs lines)
//   { type: 'option', step, answer }   the key's question, asked of the reasoning in the claim itself
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('stats', 'u5', [

  /* ---------- Reverse items: one for each name ---------- */
  { id: 'rev-relrisk', use: 'drill', kind: 'reverse', outcome: 'relrisk', expect: 'hear',
    options: [
      { text: '"Our cream cuts the chance of a rash by 60%."', voice: 'relrisk' },
      { text: '"The test is 99% accurate, so if it says yes, you have it."', voice: 'baserate' },
      { text: '"Surgeon A saved 80 of 100 patients and Surgeon B saved 70 of 100, so A is better."', voice: 'simpson' },
      { text: '"Both groups were counted the same way: 12 of 400 in one and 8 of 400 in the other."', voice: 'comp_ok' }
    ],
    why: 'It gives a change as a percentage and stops there, with no word on how many it was before and after.' },

  { id: 'rev-baserate', use: 'drill', kind: 'reverse', outcome: 'baserate', expect: 'find',
    options: [
      { text: 'The claim says "up 80%" and gives no counts.', voice: 'relrisk' },
      { text: 'The claim says a test is right 98 times in 100, reads a yes from it as nearly certain, and the thing is rare among the people tested.', voice: 'baserate' },
      { text: 'One side takes mostly hard ones and the other mostly easy ones, and the claim ranks their totals.', voice: 'simpson' },
      { text: 'Both counts are given, both sides are alike, and the claim says only which is bigger.', voice: 'comp_ok' }
    ],
    why: 'That detail is how often a test is right being read as the chance that a yes is right, with how rare the thing is left out of the reading.' },

  { id: 'rev-simpson', use: 'drill', kind: 'reverse', outcome: 'simpson', expect: 'hear',
    options: [
      { text: '"Fires in Ward 5 are twice as likely as in Ward 8."', voice: 'relrisk' },
      { text: '"The alarm is right 97 times in 100, so when it rings there is a fire."', voice: 'baserate' },
      { text: '"Clinic X cured 88 of 100 patients and Clinic Y cured 70 of 100, though Y takes the patients who are already the sickest."', voice: 'simpson' },
      { text: '"Both teams were timed on the same day, on the same course: 31 minutes against 34."', voice: 'comp_ok' }
    ],
    why: 'It sets two totals side by side and then says that each total is made of a different mix of easy and hard ones.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo', use: 'claim',
    text: '"Crime in our neighborhood is up 200%, so it is getting dangerous to live here."',
    context: 'A post in a neighborhood group.',
    ask: { type: 'option', step: 'C1', answer: 'numbers' },
    fault: 'The claim gives a percentage and no counts. Up 200% means three times as many: 1 break-in rising to 3, or 100 rising to 300. The first is a small matter and the second is a large one, and "getting dangerous" goes further than either figure can show.',
    corrected: 'Crime in our neighborhood is up 200%. That is {o:relrisk} until I know the counts. To say anything about danger, I would need to see how many there were before and after, for example "break-ins on our block went from 1 last year to 3 this year, out of about 80 homes".' },

  { id: 'claim-fairest', use: 'claim',
    text: '"Percentages are the fairest way to show a change, so when the report says deaths are down 50%, that settles how big the improvement is."',
    ask: { type: 'option', step: 'C1', answer: 'numbers' },
    fault: 'A percentage does not settle how big a change is. Deaths down 50% is 4 falling to 2, or 4,000 falling to 2,000, and those are changes of very different size. The claim takes the short way of saying it for the whole of what it says.',
    corrected: 'The report says deaths are down 50%. With both counts beside it, from 4,000 to 2,000, I can say how big the improvement is: 2,000 fewer deaths. Without them, I can only say that the figure halved.' },

  { id: 'claim-accurate', use: 'claim',
    text: '"My test came back positive, and it is 99% accurate, so I am 99% sure I have it."',
    ask: { type: 'missing', name: 'baserate' },
    fault: 'The claim reads how often a test is right as the chance that this positive is right. They are different numbers. If only 1 person in 100 has the thing, then of 10,000 people tested, 99 right yeses come with 99 wrong ones, and a positive is right about half the time.',
    corrected: 'My test came back positive, and it is right 99 times in 100. How sure I should be depends on how common the thing is among the people tested. If 1 in 100 has it, about half of those who test positive have it. Reading the 99% as my chance of having it is the mistake the name {o:baserate} is for, and I should ask for a second test before I decide anything.' },

  { id: 'claim-totals', use: 'claim',
    text: '"School A\'s pass rate is 80% and School B\'s is 70%, so School A teaches better."',
    ask: { type: 'option', step: 'C1', answer: 'split' },
    fault: 'The claim ranks two totals and says nothing about what each is made of. If School B takes more students who start far behind, B could do better with every kind of student and still show the lower total.',
    corrected: 'School A\'s pass rate is 80% and School B\'s is 70%. Before I say which teaches better, I need to see {a:C1.split}: the pass rate for the students who started behind and for those who started ahead, school by school.' },

  { id: 'claim-doubled', use: 'claim',
    text: '"Our lottery tickets double your chance of winning!"',
    context: 'A sign above a ticket kiosk.',
    ask: { type: 'missing', name: 'relrisk' },
    fault: 'Double is 100% more, and the claim does not say 100% more of what. Double of 1 chance in 10 million is 2 chances in 10 million, and you are still almost certain to lose. The percentage makes a tiny chance sound large.',
    corrected: 'Our tickets raise your chance of winning from 1 in 10 million to 2 in 10 million. With both counts the claim says what it means, and it is not much of a boast.' }
]);
