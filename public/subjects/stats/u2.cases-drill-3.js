// Statistical Claims, Unit Two: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice), so no choice
// is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. Every case in this unit's drill is a
// claim that holds, so these are the place where the learner meets a claim that asks more of a sound claim than it has earned.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to"
// lines). ask.type 'option': the key's question is asked of the claim itself: the answer is what the figures in it have earned.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('stats', 'u2', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-samp', use: 'drill', kind: 'reverse', outcome: 'samp_ok', expect: 'hear',
    options: [
      { text: '"Of 900 adults we drew by lottery and reached, 35% own a bicycle, give or take 3 points."', voice: 'samp_ok' },
      { text: '"Visits to the clinic fell from 6,100 to 5,400, counted the same way both years."', voice: 'meas_ok' },
      { text: '"The east side’s buses are late more often than the west side’s: 9 in 100 against 5."', voice: 'comp_ok' },
      { text: '"Half the class got the new method by a coin toss, and it raised their scores."', voice: 'cause_ok' }
    ],
    why: 'It gives one figure about one group, with how the people were chosen and a margin, and says nothing about change, difference or cause.' },

  { id: 'rev-meas', use: 'drill', kind: 'reverse', outcome: 'meas_ok', expect: 'find',
    options: [
      { text: 'A lottery chose the people from a full list, and nearly all of them answered.', voice: 'samp_ok' },
      { text: 'The same meter was read the same way in both years, and nobody was paid on the reading.', voice: 'meas_ok' },
      { text: 'Two alike districts were counted the same way, and the numbers for each are given.', voice: 'comp_ok' },
      { text: 'Names were drawn from a hat to decide who got the new thing and who did not.', voice: 'cause_ok' }
    ],
    why: 'The detail to find is the same tool and the same counting at both times, with nobody able to push the figure. That is what makes a rise or fall a change in the thing itself.' },

  { id: 'rev-comp', use: 'drill', kind: 'reverse', outcome: 'comp_ok', expect: 'hear',
    options: [
      { text: '"About 62% of our members renewed, give or take 3 points."', voice: 'samp_ok' },
      { text: '"Our water use fell from 41,000 gallons to 37,000 over the year."', voice: 'meas_ok' },
      { text: '"Pharmacy B fills prescriptions more slowly than Pharmacy A: 18 minutes against 11, both timed the same way."', voice: 'comp_ok' },
      { text: '"The reminder emails made more people renew: 70 in 100 against 61."', voice: 'cause_ok' }
    ],
    why: 'It sets two alike things side by side, counted the same way, and says which is bigger without saying why.' },

  { id: 'rev-cause', use: 'drill', kind: 'reverse', outcome: 'cause_ok', expect: 'find',
    options: [
      { text: 'Two alike clinics were counted the same way, and the claim says which has longer waits.', voice: 'comp_ok' },
      { text: 'A computer drew who would get the new method and who would not, and the claim says the method made the gap.', voice: 'cause_ok' },
      { text: 'One gauge read at two times, with a claim that the level fell.', voice: 'meas_ok' },
      { text: 'A lottery chose a few thousand people from a full list, and the claim gives one figure for them all.', voice: 'samp_ok' }
    ],
    why: 'The detail to find is the lottery that formed the groups, together with a claim that says what made the gap. Without the lottery the claim could not say so.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-all', use: 'claim',
    text: '"The drug group did better than the dummy group in a fair test, so the drug works for every person who takes it."',
    ask: { type: 'missing', name: 'cause_ok' },
    fault: 'The first half of the claim is sound: a lottery formed the groups, one got the drug and one got a {t:placebo}, and the drug group did better. That is what {o:cause_ok} needs. The claim then asks for more than the test earned. The test compared two averages. It shows that the group given the drug did better on average, for people like those enrolled. It does not show that every person in that group did better, and it says nothing about people unlike those enrolled. "Works for every person" is a promise about each person, and an average cannot make it.',
    corrected: 'The drug group did better than the dummy group on average, and a lottery formed the groups. So the drug helped people like those in the test, on average. The test does not show that it helps every one of them, or anyone unlike them.' },

  { id: 'claim-thousand', use: 'claim',
    text: '"They only asked a thousand people out of three million. That cannot be a fair count."',
    ask: { type: 'missing', name: 'samp_ok' },
    fault: 'The claim objects to how few were asked beside how many are in the group. That is not what decides it. What decides it is how the people were chosen and how many of those chosen are in the figure: {needs:samp_ok}. A thousand people drawn by lottery from a full list give a margin of about 1 ÷ √1,000, which is 3 points, and nothing in that sum depends on the three million.',
    corrected: 'They asked a thousand people out of three million. Whether the figure holds depends on how the thousand were chosen and how many of them answered. If a lottery chose them from a full list and nearly all were heard from, the name is {o:samp_ok}, and the figure holds give or take about 3 points.' },

  { id: 'claim-towns', use: 'claim',
    text: '"Both towns count their garbage the same way, and the numbers are all given. So the free pickup in Marlow is why its households throw away less."',
    ask: { type: 'missing', name: 'cause_ok' },
    fault: 'The first sentence describes {o:comp_ok}: two alike towns, counted the same way, with their numbers. That earns "Marlow’s households throw away less". It does not earn "because of the pickup". The towns can differ in many ways besides the pickup, and nobody formed them into groups by lottery.',
    corrected: 'Both towns count their garbage the same way, and Marlow’s households throw away less. That is as far as the figures go. If towns had been drawn by lottery to start the pickup, the claim could say the pickup made the difference.' },

  { id: 'claim-fall', use: 'claim',
    text: '"Burglaries on our road fell from 210 to 150, counted the same way both years, so the new streetlights worked."',
    ask: { type: 'option', step: 'H1', answer: 'change' },
    fault: 'The first half is a sound claim of the kind the key calls {a:H1.change}: one figure, followed through two years, counted the same way, and it fell, by 210 − 150 = 60. That is all it has earned. "So the streetlights worked" is a second claim, about what made it fall, and a fall in one figure does not say why. Nothing in the claim shows another road without the lights, or a lottery.',
    corrected: 'Burglaries on our road fell from 210 to 150, counted the same way both years. The new streetlights went up in the same period, and the figures do not show whether they are the reason.' },

  { id: 'claim-exact', use: 'claim',
    text: '"We drew 1,000 adults by lottery and 31 in 100 of them smoke. So exactly 31% of the county’s adults smoke."',
    ask: { type: 'option', step: 'H1', answer: 'group' },
    fault: 'The first sentence is a sound claim of the kind the key calls {a:H1.group}: a {t:sample} drawn {t:atrandom}, and one figure for one group. What it has earned is "about 31%". "Exactly" claims more. A figure from a {t:sample} is off from the figure for the whole group by luck, and the {t:margin} for 1,000 people is about 1 ÷ √1,000 = 0.03, which is 3 points.',
    corrected: 'We drew 1,000 adults by lottery and 31 in 100 of them smoke. So about 31% of the county’s adults smoke, give or take 3 points.' }
]);
