// Psychology, Unit Four, part one (first half): the opening card, the word the unit is built on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of what the earlier units taught, the preview map,
// the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('psychology', 'u4', [

  { id: 'orient-pat', kind: 'orient',
    h: 'Telling the lasting ways of being apart, and knowing when none of them applies',
    canDo: 'After this unit you can read an account of how one person has been over many years, with different people in different places, and say which of six things it shows: one of five lasting ways of being that keep costing someone, or an ordinary way of being that does not. Nothing in this unit is a diagnosis of a person. The names describe what an account shows. Only a professional, after a long assessment, can say what a particular person has.',
    everyday: [
      'You have heard the labels. A boss is called by the medical name for a swollen ego, an ex by the medical name for clinging, a flatmate by the medical name for being dramatic, a stranger by a word for being cold and cruel. Almost always, the person saying it has seen one bad week, one hard relationship, or one loud person at one party.',
      'This unit teaches what each label would need before it could be used for an account of a person. All of them need years, more than one place, more than one relationship, and what the person does again and again. Five of the six names also need something people rarely count: a cost, something that keeps being lost or harmed because of how the person is. The sixth name is for the person who is loud, shy, dramatic, blunt or touchy in the same way for years and does no lasting harm. It is the most common right answer.',
      'The people in this unit are invented. Even for them, a name says what a case shows, and the cards say what that would and would not tell you about a real person.'
    ],
    map: { branch: 'pattern' } },

  /* ---------- A word the whole unit is built on ---------- */
  { id: 'term-pd', kind: 'term', term: 'pd',
    h: 'A lasting way of being that keeps costing',
    link: 'Before any of the six names, one word that the whole unit leans on. It is easier to see on a case first.',
    case: 'pa-dale',
    plain: [
      'Dale has had five jobs in twenty years, and in every one the same thing has happened. This is not a bad week. Look at three things about it. The first is how long: twenty years. The second is how widely: five workplaces, and a first marriage, and two sons as well. The third is what it has done: he has left or been pushed out of every job, and one of his sons has not spoken to him for six years.',
      'Those three things together make up something this unit has a word for. It lasts, so it is there across years. It is a way of being and not a reaction, so it turns up in different places and with different people, which means it cannot be put down to one workplace or one other person. And it keeps costing: each time, something is lost by Dale or by the people around him, a job, a marriage, a son. One loss on one bad day would not be it. A cost that keeps coming back is.',
      'A "cost", in this unit, is anything lost or harmed because of how the person is: a job, a friendship, money, someone’s trust, someone’s health.'
    ],
    after: [
      'Two things about the word. The first is that it is used for all three at once. A way of being that lasts and turns up everywhere, like being shy, is not this unless it also keeps costing. The second is that it is a medical word. Only a professional can say that a particular person has one. That judgement is called a diagnosis, and it comes after a long assessment: many meetings and a full history. A short account of a person is not that.',
      'In the word, "personality" means how a person usually is, and "disorder" says that it keeps doing harm. Dale’s way has a name here. This card is not about that name. It is about the three things that every name in this unit has to show.'
    ] },

  /* ---------- Grandiose narcissism ---------- */
  { id: 'meet-narcgrand', kind: 'meet', outcome: 'narcgrand',
    link: 'The last card was about what every name in this unit has to show. Here is the first name, on a case with the words that decide it marked.',
    case: 'pa-dennis', mark: 'P1',
    strip: [
      'There are years and more than one place: three law firms, thirty years of marriage, a son.',
      'He acts as if he is better than the people around him and owed a place above them: the corner room, the head of the table, how the firm managed before he came.',
      'He takes little interest in what other people feel: in thirty years he has not asked his wife how her day was.',
      'When someone else is praised, he turns scornful: she was "a nobody who got lucky".',
      'It keeps costing: two juniors resigned this year with the same complaint, and his son no longer visits.'
    ],
    explain: [
      'Dennis is not simply confident. Confidence is believing you can do a particular thing, and it comes and goes with the thing. What this case shows is different. Dennis seems to need the people around him to treat him as special, and to keep treating him that way. Look at what happens when someone else is praised: a trainee wins a case, and Dennis calls her "a nobody who got lucky".',
      'Here is the idea that holds this name together. Most people have a sense of how much they are worth that stays fairly steady. A bad review stings, and then it passes. For some people, how much they are worth depends on being treated as special by others, again and again. Being praised does not settle it, because it has to be given again tomorrow. And when someone else is chosen or praised, or disagrees, that sense of worth feels under threat, so the person defends it.',
      'Dennis defends it by attacking. He runs the other person down, so that he stays above them, and what you see is anger and scorn aimed at whoever is in the way. "Scorn" means looking down on someone and letting them know it.',
      'Notice what is missing on his side: interest in what other people feel. In thirty years he has not asked his wife how her day was. The people around him are there to treat him as special, and what they feel about it gets very little room.',
      'And notice that it keeps costing. Two juniors resigned with the same complaint and his son keeps away. Take the cost out and you would have a loud, certain man. Leave it in, and you have a way of being that keeps hurting the people around it.'
    ],
    feature: { step: 'P1', option: 'above' },
    name: 'The name for this is {o:narcgrand}. "Narcissism" is the word for a sense of worth that depends on being treated as special. "Grandiose" means having a grand picture of yourself, as better than others and owed more. So the name says: that sense of worth, defended by acting grand. It is one of two narcissisms in this subject.' },

  { id: 'again-narcgrand', kind: 'again', outcome: 'narcgrand',
    link: 'Dennis gave you what to point to: {needs:narcgrand}. Here is a second case, in a village hall and not a law firm.',
    first: 'pa-dennis', second: 'pa-oriel', step: 'P1',
    instruction: 'The marked words in the first case are three different things: how he acts above others, how he treats someone who is praised, and what it has cost. Find the words in this case that match the middle one: what the person does when someone else is chosen or praised. Ignore the setting (a law firm, a village hall).',
    prompt: { kind: 'phrase', answer: "When a young member's idea for the summer fete was chosen over hers, she called him 'a jumped-up nobody' at the next meeting and had him taken off the rota" },
    shared: [
      'Dennis and Oriel each act as if they are above the people around them: the corner room and the head of the table, "the only one who understands how things are done". Each turns scornful when someone else is praised or chosen: "a nobody who got lucky", "a jumped-up nobody". And in each case it keeps costing: two juniors resign, eight volunteers leave, a son and a daughter keep away.',
      'A law partner and a village hall chair have nothing else in common. So this is not about law, or halls, or being in charge. It holds wherever a person acts as if they are better than others and owed special treatment, takes little interest in what others feel, and turns angry or scornful on whoever does not give it. That is what {o:narcgrand} names.'
    ] },

  { id: 'lens-pat', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the setting. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a law firm, a village hall, a football club, a family lunch. The layer underneath is the person: how they act, over and over, across the years, whatever the story is.',
      'The names belong to the layer underneath. The same story can carry any of them: a person who is scornful at work could be one of several names, depending on what else the case shows. And each name turns up in every kind of story. Nor does how loud the person is decide it. Some of the names here are loud and some are quiet, and some of the loudest people in these cases are ones whose way of being does no lasting harm.',
      'From here on the cases change their stories on purpose. Sometimes two cases will share a story and differ only underneath. Where they do, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['what the question asks about: {q:P1}'],
    varies: ['the setting', 'the people', 'how loud or quiet the person is', 'whether you like the person', 'how much is at stake'] },

  { id: 'portrait-narcgrand', kind: 'portrait', outcome: 'narcgrand',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:narcgrand} in an account of a person, where nobody marks the words for you.',
    typical: [
      'The case is a long view. It covers years, more than one place and more than one relationship. A single row is not enough.',
      'The person acts above other people in small things as well as large ones: the best seat, the last word, the credit for what a team did. Other people are there to confirm it.',
      'There is little room for what others feel. The person may not ask, may not remember, or may treat someone else’s feelings as an attack on themselves.',
      'What sets it off is not being treated as special: criticism, someone else’s praise, being passed over, being disagreed with. The answer is anger or scorn, and it is aimed at someone.',
      'It can be charming at first. The cost often turns up later and slowly, in resignations, a family that keeps its distance, a run of short jobs.',
      'The person is often sure that other people are the problem. A sincere "I have no idea why they all left" is common.'
    ],
    not: [
      'Confidence is not this name. A confident person believes they can do something, and can still ask how you are, thank the junior who won the case and take a correction. The name needs the scorn and the cost.',
      'Pride is not it either. Someone who is proud of an achievement and still interested in you is showing ordinary pride. Nor is one boastful evening or one bad week: it needs the years. And it is never a label for a person you dislike. The name says what a case shows, and it does not say what a man is.'
    ],
    wild: ['"Do you know who I am?"', '"They were never going to appreciate someone like me."', '"It wasn’t my fault. The team let me down."', '"Nobody here is in my league."'],
    self: 'You will rarely have enough to go on. You may have this much about a boss you worked under for many years, or a relative. About most of the people you are tempted to describe this way, you have a week, or one argument.',
    ask: '"How long have I seen this, in how many places and with how many people, and what has it cost them or the people around them?" If the honest answer is "one project, one boss, and an evening", you do not have this name yet.' },

  { id: 'check-narcgrand', kind: 'check', after: 'narcgrand',
    case: 'pa-wes',
    ask: { type: 'phrase', step: 'P1', say: 'Which part of this case shows what Wes does when he is not treated as special? Tap it.',
           answer: "When the club chose a younger player as captain, Wes told the whole squad that the new captain was 'a clown who couldn't kick a ball'" } },

  { id: 'refute-label', kind: 'refute', about: 'narcgrand',
    h: 'A wrong idea about the label',
    link: 'The last cards described {o:narcgrand} at length. The commonest mistake with this name is to use it for a person after one bad experience, so it gets a card of its own.',
    idea: '"My boss shouted at me and took the credit for my report. She is a narcissist."',
    verdict: 'This is wrong, in three ways.',
    right: [
      'First, one boss and one report is not years, more than one place and more than one relationship. It may be a hard week, or a hard boss, or someone who is under pressure.',
      'Second, shouting and taking credit are things people do for many reasons. The name needs all of this: {needs:narcgrand}. A cost to you, for one report, does not show it.',
      'Third, the name is for what a case shows, not for what a person is. Even an account that did show all of it would be an account of years of behaviour, not a diagnosis. Only a professional can diagnose, after a long assessment. What you can say about your boss is what she did: "She shouted at me and took the credit for my report." That is accurate, and she can answer it. A label cannot be answered.'
    ],
    testedBy: ['pa-claim-boss'] }
]);
