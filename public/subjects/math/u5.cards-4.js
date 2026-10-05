// Basic Math, Unit Five, part four: the fourth kind (the chance that at least one of several things happens), the look-alike card that
// sets it beside the first kind, and the wrong idea that after a run the other result is due.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  /* ---------- The fourth kind: the chance that at least one of several things happens ---------- */
  { id: 'meet-complement', kind: 'meet', outcome: 'complement',
    link: 'The first three kinds counted results. The fourth kind asks for a chance instead: how likely it is that one or more of a set of separate things happens. It is found by working out the opposite.',
    case: 'm5-wd-coin', mark: 'C1',
    strip: [
      'There are 3 separate things that can happen: three flips of a fair coin. Each flip has a chance of 0.5 of landing heads, and one flip does not change the next.',
      'The game is won if at least one flip lands heads: one head, two or three would all win.',
      'The question asks how likely that is, a chance, and not a count of results.',
      'Nothing is picked from a group, and no list is multiplied by another: the problem gives the chance of each flip.'
    ],
    explain: [
      'What you are shown is a chance, a number that says how likely something is. A chance of 0.5 is 1 time in 2, or 50%. The game is won by any run of flips with at least one head, and there are many ways to win. Write out every run of 3 flips, with H for heads and T for tails: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. That is 8 runs, all equally likely. Every one of them has at least one head except TTT. So 7 of the 8 runs win, and the chance of winning is 7 ÷ 8 = 0.875, which is 87.5%.',
      'Notice what was easy. Counting the winning runs one by one was a chore, but there is only one losing run, TTT. The chance of losing is the chance of 3 tails in a row. Each flip is tails with a chance of 0.5, and the flips are separate, so the chance of tails three times is 0.5 × 0.5 × 0.5 = 0.125, which is 1 in 8. You can see why the chances multiply by imagining 100 games. About 50 of them start with tails. Of those 50, half have tails next, which is 25. Of those 25, half have tails again, which is 12.5. And 12.5 in 100 is 0.125.',
      'The game is either won or lost. There is no third result, and it cannot be both. So the chance of winning and the chance of losing add up to 1, and the chance of winning is 1 − 0.125 = 0.875. This is how the procedure works: to find the chance that at least one thing happens, find the chance that none of them happens, which is the opposite, and take it away from 1.',
      'Two things decide this kind. The problem lists some separate things that might happen, each with its own chance, and it wants the chance of one or more of them. The things are separate, because how one flip lands does not change the chance for the next. That is what allows the chances of “none” to be multiplied.'
    ],
    feature: { step: 'C1', option: 'atleast' },
    name: 'A problem like this is {o:complement}. In the name, “the opposite” of at least one thing happening is that none of them happens, and the procedure counts that instead and takes it away from 1.' },

  { id: 'again-complement', kind: 'again', outcome: 'complement',
    link: 'The coin game gave you what to point to: {needs:complement}. Here is a second problem with a different story, the two tyres of a bicycle.',
    first: 'm5-wd-coin', second: 'm5-wd-tyres', step: 'C1',
    instruction: 'Find what the two problems share. Ignore the story (coin flips, bike tyres) and ignore the numbers. Look at one thing only: which words show what has to be found about the separate things?',
    prompt: { kind: 'phrase', answer: 'at least one tyre gets a puncture' },
    shared: [
      'Both problems give the chance of each of several separate things, three flips and two tyres, and say that one does not change the next. Both ask how likely it is that at least one of them happens: a head on at least one flip, a puncture in at least one tyre. Neither asks for a count of results.',
      'That is all you point to, and it is why one name covers a coin and a bicycle. The stories differ. What is asked about the separate things is the same.'
    ] },

  { id: 'portrait-complement', kind: 'portrait', outcome: 'complement',
    link: 'You know what to point to for {o:complement}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Several separate things that might happen: days, flips, parts, machines, people, tests.',
      'A chance for each, often written as a percentage, such as 20%, or as “1 in 10”. Sometimes the chances are all the same, and sometimes each has its own.',
      'A statement, or an assumption, that one does not change the chance of another: “each day is separate”, “one failing does not change the other”.',
      'The question asks how likely it is that at least one of them happens, which can be worded “at least once”, “any of them” or “one or more”.',
      'The working finds the chance that none happens, as a product of what is left of 1 for each thing, and takes it away from 1.'
    ],
    not: [
      'Several chances are not enough. If the problem asks how likely it is that every one of them happens, the answer is the product of the chances themselves, and nothing is taken from 1.',
      'And a count is not a chance. If the problem asks how many different results there are, it is one of the first three kinds, even when it mentions the same coins or spinners.'
    ],
    wild: ['"What are the chances that at least one goes wrong?"', '"How likely is it that any of them fails?"', '"At least once in a week."', '"One or more."'],
    self: 'In your own life you meet this when you ask whether something will go wrong at least once in a run of days or uses: a late bus in a week, rain on at least one day of a trip, a machine that must work every time, or a set of backup systems of which only one needs to work.',
    ask: '"Are there several things that each might happen on their own, with a chance given for each, and is the question how likely it is that one or more of them does?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-complement', kind: 'check', after: 'complement',
    case: 'm5-wd-ambulance',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show what has to be found about the separate things? Tap them.',
           answer: 'How likely is it that at least one ambulance is out of action on a given day?' } },

  { id: 'check-complement-last', kind: 'check', after: 'complement', case: 'm5-ck-cm-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-complement-whole', kind: 'check', after: 'complement', case: 'm5-ck-cm-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: a count of results, or how likely something is ---------- */
  { id: 'look-complement-multprin', kind: 'lookalike', ledger: 'complement~multprin',
    link: 'The first and fourth kinds both multiply separate things, and they can be about the very same game. This card puts them side by side, with the same game and the same 3 spinners.',
    cases: ['m5-la-spinners-cm', 'm5-la-spinners-mp'],
    instruction: 'Both problems are about the same game, with the same 3 spinners. Compare one thing: does the problem ask how many different results there are, or how likely something is?',
    prompt: { kind: 'which', option: 'C1.atleast', answer: 'm5-la-spinners-cm' },
    difference: [
      'In Case A the question is how likely it is that at least one spinner lands on a 6. That is a chance. The key’s answer is {a:C1.atleast}. The chance that none lands on a 6 is found by counting: there are 6 × 6 × 6 = 216 equally likely sets of three numbers, and 5 × 5 × 5 = 125 of them have no 6. So the chance of no 6 is 125 ÷ 216 = 0.579, and the chance of at least one 6 is 1 − 0.579 = 0.421, which is about 42%.',
      'In Case B the question is how many different sets of three numbers the spinners can show. That is a count, and each spinner is a separate choice from a full list of 6: 6 × 6 × 6 = 216. The key’s answer is {a:C1.lists}.',
      'Both multiply one number for each spinner, and both are about separate spinners. What differs is what is asked: a count of results, or how likely something is. And they connect: the 216 of Case B is the total that the 125 of Case A is part of.'
    ] },

  /* ---------- A wrong idea: after a run, the other result is due ---------- */
  { id: 'refute-due', kind: 'refute', about: 'complement',
    h: 'A wrong idea: after a run, the other result is due',
    link: 'The fourth kind rests on the things being separate: one does not change the chance of another. A very common wrong idea denies that, and now that you can see what the separate chances are, it is worth meeting.',
    idea: '"The wheel has not come up red in 8 spins, so red is due."',
    verdict: 'This is wrong.',
    right: [
      'A wheel has no memory. Each spin is separate, so what happened in the 8 spins that are over changes nothing about the next one. If the wheel has 4 equal slices and one is red, the chance of red is 0.25 on the next spin, as it was on the first spin, and as it will still be after 20 spins without red.',
      'What can be worked out is what is still to come. How likely is it that red comes up at least once in the next 3 spins? That is the fourth kind: 1 − 0.75 × 0.75 × 0.75 = 1 − 0.421875 = 0.578, about 58%. The 8 spins that are over are not in the working. Counting them as well, as if red had to make up for them, gives about 96%, which is not the chance of anything that is still to happen.',
      'It can feel as if a long run without red must end soon. It does end sometimes, by chance, but nothing pushes the next spin towards red. The chance for the next spin, and the chance of at least one red in the next few, are worked out from the chances of the spins still to come.'
    ],
    testedBy: ['m5-dr-cm-3'] }
]);
