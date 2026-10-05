// Statistical Claims, Unit Six, part two (first half): two groups that put themselves where they are. Confounding, with its arithmetic, and the check
// and the wrong idea that follow it.

FC.cards('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'meet-confound', kind: 'meet', outcome: 'confound',
    link: 'So far the figures came from one group, measured before and after something was done. The next name is about two groups set side by side: people who did something and people who did not. The first thing to ask about two such groups is who decided which group each person was in.',
    case: 'k-shake', mark: 'K1',
    strip: [
      'Two groups are set side by side: 100 lifters who bought the shake and 300 who did not.',
      'Nobody formed the groups. Each lifter chose whether to buy the shake.',
      'There is a real difference in the result: an average gain of 70 pounds against 32.',
      'Something else differs between the groups: how often the lifters train.'
    ],
    explain: [
      'Look at who ended up in each group. Nobody assigned them. Each lifter chose whether to buy the shake, and the lifters who chose it are mostly frequent trainers: 75 of the 100 train four or more days a week, against 45 of the other 300.',
      'Frequent training can build a strong squat on its own, whatever a lifter drinks afterward. So the shake and the big gain both go along with frequent training. This is the situation behind this name: something else, here how often people train, goes with the thing, the shake, and could produce the result, the gain, on its own.',
      'You can see what it does to the figures by comparing lifters who train alike. Among the 120 lifters who train four or more days a week, 75 bought the shake and gained an average of 85 pounds, and 45 did not and gained 83. That is a difference of 2 pounds. Among the 280 who train less, 25 bought the shake and gained 25, and 255 did not and gained 23. That is a difference of 2 pounds again.',
      'So the company’s 38 pounds comes apart. The shake group is mostly frequent trainers, who gain about 85, and the other group is mostly lighter trainers, who gain about 23. Put lifters who train alike side by side and the 38 shrinks to 2. About 36 of the 38 pounds was the training, and at most 2 was the shake. The shake may well be worth 2 pounds. The company’s figure cannot show it, and it certainly does not show 38.',
      'What would settle it is groups that are alike in the thing you suspect, as above, or groups formed by chance, so that frequent training is no likelier to be in one group than the other.'
    ],
    feature: { step: 'K1', option: 'behind' },
    name: [
      'The name for this is {o:confound}. To "confound" is to mix up. The shake and the training are mixed up together in the figures: the lifters who have one mostly have the other, so the figures cannot say which of them produced the gain.',
      'The words that carry this kind of claim are "so", "makes", "because" and "which is why", set after a figure for two groups. The groups themselves are real, and so is the difference between them.'
    ] },

  { id: 'again-confound', kind: 'again', outcome: 'confound',
    link: 'The recovery shake gave you what to point to: {needs:confound}. Here it is in a school.',
    first: 'k-shake', second: 'k-homeworkapp', step: 'K1',
    instruction: 'Find what the two cases share. Ignore the story (a gym, a homework app). Look at one thing only: what else differs between the two groups, besides the thing the claim is about?',
    prompt: { kind: 'phrase', answer: '150 of the 200 app users have a parent who checks their homework every night' },
    shared: [
      'In both cases two groups are set side by side, and each person chose which group to be in. In both, there is a real difference in the result: 38 pounds, 8 grade points. In both, the account itself shows something else that differs between the groups: frequent training, a parent who checks homework every night. And in both, that something could bring about the result on its own. Parents who check homework every night are a likely reason for higher grades, with or without an app.',
      'The figures do the arithmetic. 150 of the 200 app users is 3 in 4 who have a parent checking every night. 80 of the 400 others is 1 in 5. So the two groups differ in more than the app: they also differ in how much help they get at home.',
      'The two stories share nothing else, so this is not about lifting or about school. It holds wherever a group that did one thing is set beside a group that did not, nobody formed the groups by chance, and the account shows something else that differs between them and could bring about the result alone. That is what {o:confound} names.'
    ] },

  { id: 'portrait-confound', kind: 'portrait', outcome: 'confound',
    link: 'What you point to is something else that differs between the groups. Here is the rest of the picture.',
    typical: [
      'Two groups are set side by side: people or places that did one thing (used the app, bought the shake, joined the club) and ones that did not.',
      'Nobody formed the groups by chance. The people put themselves in a group, or their circumstances did: where they live, what they could afford, how healthy they were.',
      'The difference in the result is real. The figures are right, and the claim usually gives them in full.',
      'Something else differs between the groups, and could produce the result without the thing: training, parents, money, health, age. Often it is the very reason people chose.',
      'People who choose a thing are rarely like people who do not. The kind of person who takes a vitamin is the kind who also does other health-minded things, and the figures cannot say which of the two did the work.'
    ],
    not: [
      'The groups differing in some way is not enough. Groups always differ in some way. The name needs a difference that could bring about the result by itself, and that is the part you point to.',
      'And it does not mean that the thing has no effect. The shake may be worth 2 pounds. The name says that the figures cannot separate the thing from what goes with it.'
    ],
    wild: ['"People who do X are healthier, richer and happier."', '"Students who use it get better grades."', '"Users of our product spend 40% more."', '"Studies show people who do this live longer."'],
    self: 'In your own life it is the gym where everybody looks fit, or the school whose pupils all do well. Those people were not picked by chance. Many of them were already fit, or already doing well, when they walked in.',
    ask: '"Who decided who was in each group, and what else is different about the people who chose it?"',
    act: [
      'Name one other way the two groups differ that could produce the same result. If you can name one and the claim does not rule it out, do not act on the claim.',
      'Ask for a comparison of people who are alike in that other thing, or for a test in which groups were formed by a draw.',
      'When you see "people who do X are healthier", ask who does X and why, before you decide to do it.'
    ] },

  { id: 'check-confound', kind: 'check', after: 'confound',
    case: 'k-bankapp',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme', 'behind'] } },

  { id: 'look-nocontrol-confound', kind: 'lookalike', ledger: 'nocontrol~confound',
    link: 'The first name of this unit and the one you have just met both begin with people who chose to take part in something. This card puts them side by side.',
    cases: ['k-gym-all', 'k-gym-two'],
    instruction: 'Both cases are about the same gym and the same personal-training program, and in both the members who signed up lost weight. Compare one thing: whether anyone who did not sign up is counted beside them.',
    prompt: { kind: 'which', option: 'K1.behind', answer: 'k-gym-two' },
    difference: [
      'In Case A the gym counts only the 90 members who signed up. Nobody who went without is counted, so there is nothing beside them for anything to differ from, and nothing shows what the members would have lost anyway. The key’s answer is {a:K1.anyway}, and the case is {o:nocontrol}.',
      'In Case B the gym counts the 410 members who did not sign up as well, and they lost 1 pound. Now two groups are set side by side, and the account shows something else that differs between them: 70 of the 90 are new members, against 60 of the 410, and new members lose weight fastest in their first year. The key’s answer is {a:K1.behind}, and the case is {o:confound}.',
      'The program and the claim are the same in both. Adding a group that went without is a step toward a fair picture. It is not yet one when people chose which group to be in.'
    ] },

  { id: 'refute-nothing', kind: 'refute', about: 'confound',
    h: 'A wrong idea about what the figures prove',
    link: 'The last name was about groups that put themselves where they are. A quick answer to every such claim is easy to reach for, and it is the second thing people say when they have just learned the first.',
    idea: '"That study only compared people who chose it with people who did not. Two things going together does not make one cause the other, so the study proves nothing."',
    verdict: 'This is half right and half wrong. The first sentence is true. The conclusion is wrong.',
    right: [
      'It is true that two things going together does not show that one caused the other. That is why this unit exists. But it does not follow that the study proves nothing. A study that sets two groups side by side shows a real difference between them. What it cannot show is why.',
      'The honest reading is: here is a difference, and here is what else could explain it. Then go and check the other explanation. If lifters who train the same show the same difference, the training explanation falls. If the difference shrinks, from 38 pounds to 2, it was doing the work. A test in which chance formed the groups closes all of these at once.',
      'So the right answer to a claim of cause is neither "proved" nor "proves nothing". It is: this is what else could explain it, and this is what would settle it.'
    ],
    testedBy: ['k-claim-nothing'] }
]);
