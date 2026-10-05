// Statistical Claims, Unit Three, part one (second half): the second name, the ones who chose to answer, the look-alike with the
// first name, and the exception in which people who volunteered are not this name.

FC.cards('stats', 'u3', [

  /* ---------- Self-selection bias ---------- */
  { id: 'meet-selfselect', kind: 'meet', outcome: 'selfselect',
    link: 'The first way left people out because of what happened to them. The second leaves people out because nobody asked them: the figure comes from whoever chose to answer.',
    case: 'cn-fourday', mark: 'A1',
    strip: [
      'There is a figure: 2,560 of the 3,200 readers who clicked said yes, which is four in five.',
      'Nobody was picked or asked by name. The poll sat on the magazine’s website, and any reader could click.',
      'The ones who clicked decided for themselves to take part.',
      'The headline speaks for workers in general.'
    ],
    explain: [
      'The count is right. 2,560 out of 3,200 is 80 in every 100, and four in five is 80 in every 100. The trouble is who answered. Nobody chose them. They chose themselves, and people who choose to answer a poll on a topic are usually the ones who feel most strongly about it.',
      'A poll like this cannot say how the readers who did not click would have answered. Suppose the magazine has 100,000 readers. 3,200 clicked, so 96,800 did not. If every one of those 96,800 would have said no, the share saying yes among all 100,000 is 2,560 out of 100,000, which is about 3 in every 100. If every one of them would have said yes, it is 2,560 plus 96,800, which is 99,360 out of 100,000, or 99 in every 100. The poll fits almost any answer, and readers of one trade magazine are only some of the workers there are.',
      'It is not how many answered that matters, but who decided that they would be counted. In the first name the people were all there at the start, and the ones missing from the figure had left. Here nobody has left. The ones who are missing were never asked, and the ones who are in the figure are in because they took the trouble.'
    ],
    feature: { step: 'A1', option: 'chose' },
    name: 'The name for this is {o:selfselect}. "Self-selection" means choosing yourself: the people in the figure picked themselves into it, and "bias" is the lean that results, towards the people who feel most like answering.' },

  { id: 'again-selfselect', kind: 'again', outcome: 'selfselect',
    link: 'The magazine poll gave you what to point to: {needs:selfselect}. Here is a second case, in a hospital.',
    first: 'cn-fourday', second: 'cn-forms', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a magazine, a hospital). Look at one thing only: who decided that each person would be counted.',
    prompt: { kind: 'phrase', answer: 'patients could hand one in if they wished' },
    shared: [
      'In both cases the figure is right for the people who answered. 2,560 of 3,200 is four in five, and 108 of 120 forms is nine in ten. In both, nobody was asked by name: a poll sat on a website, forms sat in waiting rooms. Whoever wanted to answer did, and the people who wanted to are not a typical selection of the group. They feel strongly, or they have time, or they were pleased enough to bother.',
      'In both, the claim speaks for a wider group than the one that answered: workers in general, all the hospital’s patients. If the hospital treated 40,000 patients in the year, the 120 forms are 3 in every 1,000 of them. The two stories share nothing else, so this is not about magazines or about hospitals. It holds wherever the people in the figure chose themselves, and the claim speaks for more. That is what {o:selfselect} names.'
    ] },

  { id: 'portrait-selfselect', kind: 'portrait', outcome: 'selfselect',
    link: 'What you point to is that the people chose themselves. Here is the rest of the picture of {o:selfselect}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Nobody is picked. A call-in line, a website vote, a comment card, a box, a link in a message: whoever sees it and wants to answers.',
      'The figure often comes with a big count, and the count is meant to impress: "thousands of votes", "over 50,000 responses".',
      'The people who answer are the ones with a reason to: strong feelings, a grievance, great enthusiasm, spare time or something at stake. People who feel little do not bother. The answers lean towards strong feelings, and the figure does not say how many feel nothing.',
      'The group that answered is often unlike the group the claim speaks for: the listeners of one radio show, the readers of one magazine, the customers who write reviews.',
      'The claim usually does not say "the people who answered". It says "the town", "workers", "customers", "voters". The words that give it away are the ones that speak for more than answered.'
    ],
    not: [
      'Choosing to answer is not the whole of it. What matters is whether the figure is read as true of a wider group than the ones who chose. A report that says "of the 214 who dropped a slip in the box, 190 said yes" and stops there is a correct report of who answered.',
      'And people who volunteer are not always this name. People who volunteer for a study and are then split into two groups by lottery are not for that reason in it, because nobody reads their answers as standing for people who did not take part.'
    ],
    wild: ['"Vote now on our website!"', '"Over 50,000 of you have told us..."', '"Our readers have spoken."', '"Text YES to 80808."', '"We put a box by the door, and the results are in."'],
    self: 'In your own life it is the review page, where people write when they are delighted or furious and rarely when they were merely satisfied, and the poll in a group chat that only the people who were already active in the chat answered.',
    ask: '"Who decided that these people would be counted: the people doing the counting, or the people themselves?" If the people themselves, the figure is only about the ones who chose to answer.',
    act: [
      'Look at how the question was put: a link, a box, a call-in number, or a list of names.',
      'Say the figure for who it is for: "of the 3,200 readers who clicked, four in five said yes".',
      'If you want to know what a wider group thinks, look for a figure from people picked by lottery from a full list, with most of them answering.',
      'Treat the size of the count as no evidence: 3,200 who chose themselves is as one-sided as 32.'
    ] },

  { id: 'check-selfselect', kind: 'check', after: 'selfselect',
    case: 'cn-fair',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose'] } },

  /* ---------- The second look-alike pair: two ways of being missing ---------- */
  { id: 'look-survivor-selfselect', kind: 'lookalike', ledger: 'survivor~selfselect',
    link: 'These two both give a figure from only some of a group, and the ones who are not in the figure are the ones that could change it. This card shows what separates them.',
    cases: ['cn-cycling-link', 'cn-cycling-stayed'],
    instruction: 'Both cases are about the same cycling club and the same figure, 120 miles a month, from 25 people. Compare one thing: how did the 25 get into the figure?',
    prompt: { kind: 'which', option: 'A1.chose', answer: 'cn-cycling-link' },
    difference: [
      'In Case A the club posted a link on its public page, and 25 people filled it in. Nobody was asked by name. The 25 chose to take part, and the other 35 members never did. The answer to the question after the first, {q:A1}, is {a:A1.chose}, and the case is {o:selfselect}.',
      'In Case B the club had 60 members in 2018. 35 have since left, and the 120 miles is the average of the 25 who are still members. Everyone was there at the start, and the figure is worked out after the fact from the ones that lasted. The ones who left are missing because of what happened to them, and a member who stops riding is likelier to leave. The answer is {a:A1.lasted}, and the case is {o:survivor}.',
      'The figure is the same in both, and in both 25 of 60 are in it. What separates them is how the 25 got in: by choosing to answer, or by lasting to the end.'
    ] },

  /* ---------- An exception: volunteers who are not this name ---------- */
  { id: 'exc-volunteers', kind: 'exception', ledger: 'selfselect~cause_ok', looksLike: 'selfselect', is: 'cause_ok',
    h: 'Volunteers, split by lottery',
    link: 'You now know that a figure from people who chose to answer leans towards them. People can also volunteer for a study, and the claim from it can still hold. This card shows the case where it does.',
    case: 'cn-pillow',
    setup: 'The sleep lab asked for volunteers through a newspaper ad, so the people in the study chose themselves, and people who chose to take part are what you point to for {a:A1.chose}. Yet the answer to the first question for this case is {a:S1.holds}, and to the question after it, {q:H1}, the answer is {a:H1.causes}.',
    prompt: { kind: 'phrase', answer: 'The lab drew names by lottery' },
    because: [
      'Ask what the claim is about. It is not about what volunteers think, or about how much sleep people in general get. It is about a difference between two groups: the 300 who got the new pillow and the 300 who kept their own. Who is in each group was not chosen by the volunteers. The lab drew names by lottery.',
      'That matters because the lab’s volunteers are all alike in the way that worries you. Everyone who came forward answered an ad about sleep, so they are probably unlike people in general: they may sleep worse, or care more about sleep, than most. But that is true of the group that got the pillow and of the group that did not, in the same way. A lottery puts the same kind of volunteer into both. So being a volunteer cannot be what makes one group sleep 25 minutes longer than the other, and the claim of cause rests on the lottery.',
      'Compare the magazine poll. There, the people who clicked were read as standing for all workers, and the ones who did not click were missing. Here, nobody is read as standing for anybody else: the two groups are compared with each other, and each shows what the other would have been like without the change.'
    ],
    take: [
      'The line between these two names is a choice made to keep the answers clear, and it is worth knowing. A study of volunteers still shows the result only for people like the volunteers: the pillow may work differently for people who sleep well, and the lab’s own claim should stay with what it tested. Here, a claim of cause is judged by how the groups were formed, and a figure about how many people think something is judged by who chose to answer. The two questions are put to different parts of a claim.',
      'So volunteers are not a sign of this name by themselves. Look for the thing that makes the name: a figure read as true of people who never took part. A lottery between two groups of volunteers does not read it that way.'
    ] }
]);
