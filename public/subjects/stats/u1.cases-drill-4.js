// Statistical Claims, Unit One: drill items that are not stories. Reverse items (first stage) and faulty claims (last stage).
// A reverse item gives the answer and asks what you would expect to hear or find. Every option is what one of the five answers
// sounds like; voice says which. A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that answer>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of the reasoning in the claim itself
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('stats', 'u1', [

  /* ---------- reverse items: one for each family ---------- */
  { id: 'gate-rev-counted', use: 'drill', kind: 'reverse', outcome: 'counted', expect: 'find',
    options: [
      { text: 'The figure comes from the 30 people who answered a phone-in, and the claim is about the whole town.', voice: 'counted' },
      { text: 'The agency changed which visits count in March, and the figure jumped in April.', voice: 'measure' },
      { text: 'It says deaths are "down by half" and does not say how many there were.', voice: 'compare' },
      { text: 'Students who take the class do better, and the principal says the class is the reason.', voice: 'cause' },
      { text: 'Names were drawn by lottery from the full list, and nearly everyone drawn replied.', voice: 'holds' }
    ],
    why: 'That detail shows who the figure was worked out from, and that they are not a fair picture of the group the claim speaks for.' },

  { id: 'gate-rev-measure', use: 'drill', kind: 'reverse', outcome: 'measure', expect: 'hear',
    options: [
      { text: '"I asked the people at my gym, and they all say it is the best."', voice: 'counted' },
      { text: '"Reported thefts doubled the month the new online form opened."', voice: 'measure' },
      { text: '"The risk is up 40%, but they do not say up from what."', voice: 'compare' },
      { text: '"Since I started the pills I feel better, so they work."', voice: 'cause' },
      { text: '"We counted every sale the same way for five years."', voice: 'holds' }
    ],
    why: 'It ties the figure moving to a change in what is counted, or in how hard anyone looked, and says no more than that.' },

  { id: 'gate-rev-compare', use: 'drill', kind: 'reverse', outcome: 'compare', expect: 'find',
    options: [
      { text: 'The survey went out to 3,000 people and 40 replied.', voice: 'counted' },
      { text: 'The hospital moved the start of its waiting-time clock.', voice: 'measure' },
      { text: 'The ad says the test is "right 99 times in 100" and does not say how rare the illness is.', voice: 'compare' },
      { text: 'The leaflet says the course made the difference, and the people on it had chosen it.', voice: 'cause' },
      { text: 'Both groups were counted the same way, and the numbers for each were printed.', voice: 'holds' }
    ],
    why: 'That detail shows a figure given in a form that hides something you need beside it, and says nothing about who is in the figure or what changed.' },

  { id: 'gate-rev-cause', use: 'drill', kind: 'reverse', outcome: 'cause', expect: 'hear',
    options: [
      { text: '"I only asked the people who were still members, and they like it."', voice: 'counted' },
      { text: '"Calls handled per hour are up since the bonus."', voice: 'measure' },
      { text: '"The test is 98% accurate, so you must be ill."', voice: 'compare' },
      { text: '"Kids who play chess score higher, so chess makes them smarter."', voice: 'cause' },
      { text: '"Half were picked by lottery to get it, and the half that got it did better."', voice: 'holds' }
    ],
    why: 'It takes a result that goes with something and says that the something made it happen, which is the step the case then has to answer.' },

  { id: 'gate-rev-holds', use: 'drill', kind: 'reverse', outcome: 'holds', expect: 'find',
    options: [
      { text: 'The only people counted are the ones who stayed to the end.', voice: 'counted' },
      { text: 'The form that is used to count changed partway through.', voice: 'measure' },
      { text: 'The claim gives only "twice as likely", with no numbers.', voice: 'compare' },
      { text: 'The people who took part chose which group to join.', voice: 'cause' },
      { text: 'The account says how the people were picked, how many answered, and that everything was counted the same way both times.', voice: 'holds' }
    ],
    why: 'That detail is what a claim looks like when each part can be pointed to and holds: how the people were picked, how many answered, and the same counting throughout.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'gate-claim-demo', use: 'claim',
    text: '"Everyone I asked at the club night says the new parking rule is a great idea, so the whole village is for it."',
    ask: { type: 'option', step: 'S1', answer: 'counted' },
    fault: 'The claim speaks for the whole village, but the figure comes from people at one club on one night. People who go to a club night are not a fair picture of a village, and the ones asked were the ones who happened to be there.',
    corrected: 'Everyone I asked at the club night said the new parking rule is a great idea. That is {a:S1.counted}, and the claim should stay with the people it comes from. To speak for the village I would need a figure from people picked from the whole village.' },

  { id: 'gate-claim-journal', use: 'claim',
    text: '"The study was in a respected journal, so we can stop arguing: the result is settled."',
    ask: { type: 'missing', name: 'holds' },
    fault: 'The claim treats where a study appeared as if it were the same as having checked every part of it. A respected journal can still print a figure from the wrong people, or a claim of cause that something else could explain.',
    corrected: 'The study was in a respected journal. That tells me who looked at it, and not whether it holds. For the answer {a:S1.holds} I would need to be able to point to this: {needs:holds}.' },

  { id: 'gate-claim-lie', use: 'claim',
    text: '"The survey only went to customers who came back to the shop, so every good review in it is a lie."',
    ask: { type: 'option', step: 'S1', answer: 'counted' },
    fault: 'The first half is right: customers who came back are not a fair picture of all customers, so the figure cannot show what everyone thinks. But "every good review is a lie" goes further than that. The customers who came back may mean every word.',
    corrected: 'The survey only went to customers who came back to the shop. That is {a:S1.counted}: the figure cannot show what the customers who did not come back think. It does not show that the good reviews are false. To find out, I would need a figure from customers picked from everyone who shopped there.' },

  { id: 'gate-claim-works', use: 'claim',
    text: '"Nine in ten of the people who came to us with a cold were better within a week of taking the pills, so the pills work."',
    ask: { type: 'option', step: 'S1', answer: 'cause' },
    fault: 'The claim gives a figure for the people who took the pills and sets it beside nothing: there is no figure for people with a cold who did not take them. Most colds go away within a week whatever anyone takes, so the same result could have come about without the pills.',
    corrected: 'Nine in ten of the people who came to us with a cold were better within a week of taking the pills. That is {a:S1.cause}: a figure for the people who took the pills says nothing about what would have happened without them. To say the pills work, I would need a second group that did not take them, formed by lottery and counted the same way.' },

  { id: 'gate-claim-reports', use: 'claim',
    text: '"Reported thefts doubled after the new online form went live in March, so our neighborhood has become twice as dangerous."',
    ask: { type: 'option', step: 'S1', answer: 'measure' },
    fault: 'The claim reads a rise in reported thefts as a rise in thefts. A form that makes it easier to report raises the number of reports even if exactly as many thefts happen as before.',
    corrected: 'Reported thefts doubled after the new online form went live in March. That is {a:S1.measure}: the figure could have risen with no more thefts, because more of them are being reported. To say the neighborhood has become more dangerous, I would need a count made the same way before and after.' }
]);
