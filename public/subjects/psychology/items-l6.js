// Psychology, lesson 6, moves made on someone: the worked story, the stories of the practice and the check. A guided set (one story each from lessons 2
// and 3, then gaslighting against one ordinary disagreement), then one shuffled set of every name of the lesson (DARVO against attack and change the
// subject, love-bombing against speed with no cold turn yet, projection, a safety case, a defense in a hard time, gaslighting about feelings). Every DARVO
// story shows the denial is false (Freyd 1997: the response of the one who did it); the response is asked only where it is a real choice (fear or
// control shown or not, too little to tell). The shapes of Drills 5.1 and 5.2 of the owner's course are reworded; the rest are invented, and no real
// person is described. The r6- stories are used nowhere and wait for the review.
(() => {
  const S = 'moves', N = PSY_NAMES.l6, A = PSY_ACTS.l6;
  const C = spec => psyCase({ strand: S, names: N, acts: A, ...spec });
  const E = (strand, names, spec) => psyCase({ strand, names, ...spec });
  const HOTLINE = 'a therapist, or in the US the National Domestic Violence Hotline, 1-800-799-7233, or text START to 88788';
  FC.items('psychology', [
    // ----- the worked story: every question, in order -----
    C({ id: 'w6-plans', story: 'For three years, whenever she brings up a plan they made, the trip, the loan to his brother, her husband says they never talked about it, and that she "invents things". She now begins every talk with "I might be wrong, but".',
      asks: { kind: 'move', span: 'years', name: 'gaslighting', act: 'record' },
      steps: [
        { id: 'q1', does: 'Question 1. What is going on?', working: 'His words are aimed at her and change what she believes about her own memory: a move made on someone, not a mind talking itself into something.', ask: 'kind' },
        { id: 'q2', does: 'Question 2. One moment, or over and over?', working: '"For three years", "whenever she brings up a plan": over and over, for months or years.', ask: 'span' },
        { id: 'q3', does: 'Questions 3 and 4. What does it do, and what is the nearest look-alike?', working: 'It does one job: she stops trusting her own memory. The look-alike is an ordinary disagreement, which ends when someone checks and leaves nobody doubting themselves. All three signs are here: the talks denied, over and over, and the doubt. Gaslighting.', ask: 'name' },
        { id: 'q4', does: 'What to do, and Question 5. What would prove it wrong?', working: 'Her memory is what is attacked, so the answer is a record: write things down as they happen, and check with someone outside. She shows no fear of him, so the move\'s own response fits. The read would be wrong if her records often prove him right.', ask: 'act' }],
      reason: 'Denying the talks themselves, for three years, until she doubts herself before she speaks: gaslighting. A record is the answer.' }),

    // ----- the guided set: two earlier lessons, then gaslighting against an ordinary disagreement -----
    E('self-justification', PSY_NAMES.l2, { id: 'x6-e-deposit', story: 'The beach house deposit, $400, cannot be refunded. The forecast is a week of storms, and Imogen and her husband would both rather stay home. “We already paid, so we have to go,” she says.',
      asks: { name: 'sunk' },
      reason: 'The $400 is gone either way. Her reason points back at it, not forward at whether the week is worth having: sunk cost.' }),
    E('thinking-traps', PSY_NAMES.l3, { id: 'x6-e-pills', story: 'The pharmacy texts that Hugo\'s refill is a day late. “I\'ll run out, get sick, and miss the whole week of work,” he thinks. He has four pills left, and the text says it will be ready tomorrow.',
      asks: { name: 'catastrophe' },
      reason: 'One small delay becomes the worst outcome, taken as certain, when his four pills cover it: catastrophizing.' }),
    C({ id: 'x6-g-dog', story: 'At Thanksgiving, Noa and her brother argue about whether their grandmother\'s dog was called Biscuit or Buster. Each is sure, and each tells a story to prove it. They laugh, text their aunt to settle it, and when she says Buster, Noa says, "Fine, you win."',
      asks: { name: 'ordinary' },
      reason: 'One disagreement about one memory, settled by asking, and nobody comes away doubting themselves. Not gaslighting: ordinary.' }),
    C({ id: 'x6-g-edits', story: 'For a year, Lina\'s coworker Marco has told her that changes she saw him make to their shared file "never happened" and that she "reads things that aren\'t there". Each time the change is gone from the file. Lina has started to wonder if she should see a doctor about her memory.',
      asks: { span: 'years', name: 'gaslighting' },
      reason: 'What she saw denied over and over, for a year, until she doubts her own memory: gaslighting. Not one disagreement settled by checking.' }),

    // ----- the last practice: every name, shuffled -----
    C({ id: 'x6-d-camera', story: 'The doorbell camera shows Otto backing into his neighbor\'s mailbox. When she shows him the clip, he says he was never near it, that she has been spying on him for months, and that he is the one who should call the police.',
      asks: { name: 'darvo' },
      reason: 'The camera shows he did it. He denies it, attacks her, and casts himself as the wronged one, all in one exchange: DARVO.' }),
    C({ id: 'x6-d-check', story: 'Her roommate wants to know why Sasha\'s rent check bounced. "Yes, it bounced," Sasha says, "but you forgot my birthday two years ago." At midnight they are still on the birthday.',
      asks: { name: 'deflect' },
      reason: 'She admits the check, so no denial, and never claims to be the victim; an old, unrelated complaint takes over: attack and change the subject, one part short of DARVO.' }),
    C({ id: 'x6-l-bomb', story: 'In their first week, Ansel bought Tessa a necklace, met her parents, and planned a trip to Italy for them. A month later she moved into his place. Since then he mocks her job, goes quiet for a day when she comes home late, and says he would like more evenings with just the two of them.',
      asks: { name: 'lovebomb', act: 'slow-down' },
      reason: 'Devotion far faster than he could know her, then coldness once she depended on him: love-bombing. Wanting more evenings together is a preference, not control, and she shows no fear: slow down and keep her own friends and plans.' }),
    C({ id: 'x6-l-early', story: 'Two weeks after they met, Rafael tells Ilse he has never clicked with anyone like this, and plans a weekend away for them.',
      asks: { name: 'too-little' },
      need: 'How he acts over the next months, and when she keeps her own plans.',
      reason: 'Fast feelings are the first half of love-bombing, and common in new love too. No cold turn has shown yet: too little to tell, so watch.' }),
    C({ id: 'x6-p-lamp', story: 'Lionel has hidden a $3,000 credit card bill from his wife for months. When she shows him the $12 lamp she just bought, he says she is "always sneaking purchases behind my back".',
      asks: { name: 'projection' },
      reason: 'He accuses her, with a $12 lamp as the only fact, of the very hiding he is doing: projection. Thrown at her, so a move, not just a private defense.' }),
    C({ id: 'x6-l-control', story: 'On their first date Grant called Joanna his soulmate; on the fifth he asked her to move in. Since she did, he barely speaks to her at dinner, reads her phone, and picks which friends she may see. She is afraid of him.',
      asks: { name: 'lovebomb', act: 'help' },
      reason: `Closeness far too fast, then control and coldness: love-bombing. She is afraid and controlled, so safety comes first: ${HOTLINE}.` }),
    C({ id: 'x6-d-facts', story: 'Asked how he feels about his cancer diagnosis, Ken gives his daughter a calm talk about survival rates and treatment schedules. "He is in total denial," she tells her husband. Ken starts treatment the next week.',
      asks: { span: 'situation', name: 'ordinary' },
      reason: 'Talking in facts about frightening news is a defense everyone uses, and he is not refusing the fact: he started treatment. A hard time explains it: ordinary. Wrong if he talks this way about every feeling, for years.' }),
    C({ id: 'x6-m-hurt', story: 'For two years, whenever Vera says her mother\'s jokes about her weight hurt, her mother says, "That is not what I said, you hear things, you are too sensitive." Vera has begun to think she really is too sensitive, and laughs along.',
      asks: { name: 'gaslighting' },
      reason: 'What she heard and felt is denied, over and over, until she doubts it: gaslighting. A parent\'s word weighs more, which helps the doubt stick. Response: trust your record.' }),

    // ----- the check: eight new stories -----
    C({ id: 'k6-wallet', story: 'For a year and a half, Bram\'s wife has told him he is "getting forgetful like his father" whenever his wallet or glasses go missing. Twice he found them in her dresser drawer. He has started to wonder if he put them there himself.',
      asks: { span: 'years', name: 'gaslighting' },
      reason: 'Over and over, his own senses denied until he doubts them: gaslighting. Response: a record of where he left things, and someone outside to check with.' }),
    C({ id: 'k6-club', story: 'Three members of the book club heard Pam call Inga\'s novel "trash for idiots". When Inga brings it up, Pam says she never said it, that Inga twists everything because she is jealous, and that she, Pam, has been bullied in this club for years. The others end up comforting Pam.',
      asks: { name: 'darvo' },
      reason: 'Three people heard it. Deny, attack Inga, and recast herself as the victim until the others comfort her, in one exchange: DARVO. Wrong if the three misheard.' }),
    C({ id: 'k6-swim', story: 'The swim coach tells Mrs. Ferreira that her daughter has missed four practices. "Who are you to talk about commitment?" Mrs. Ferreira says. "You canceled the team picnic twice." The rest of the call is about the picnic.',
      asks: { name: 'deflect' },
      reason: 'She attacks the coach\'s right to raise it with something unrelated he did, and the practices are dropped. She never denies them and claims no wrong done to her: attack and change the subject.' }),
    C({ id: 'k6-golf', story: 'Days after meeting Harlan at a dance class, Maren was getting two calls a day; he told his grown kids she was "the one" and paid for her to join his golf club. Once she quit dancing to golf with him, he began correcting her swing in front of his friends and skipping their dinners without a word.',
      asks: { name: 'lovebomb' },
      reason: 'Devotion far past what days could know, then criticism and coldness once she gave up her own class for him: love-bombing. No fear or control is shown; the response is to slow down and keep her own life.' }),
    C({ id: 'k6-snippy', story: 'For weeks a manager has snapped at his team in meetings. He tells his team lead, "You have been so hostile lately." The meeting notes show her calm and polite each time.',
      asks: { name: 'projection' },
      reason: 'He accuses her, with nothing to back it, of the hostility he is showing: projection. Back to the one fact: "Which meeting? What did I say?"' }),
    C({ id: 'k6-door', story: 'Her sister says Juno left the back door open and the cat got out. Juno says, "I think it was the gardener." Then she checks the time he left and says, "No, it was me. Sorry." She is usually the careful one.',
      asks: { span: 'once', name: 'ordinary' },
      reason: 'One denial, then she checked and owned it: a slip put right. No attack and no flip, so not DARVO: ordinary.' }),
    C({ id: 'k6-text', story: 'A friend texts you after work: "My boss totally gaslit me in our one-on-one. I can\'t even." She started the job last week, and she has never mentioned him before.',
      asks: { span: 'unsaid', name: 'too-little' },
      need: 'What was said, and whether it repeats over months.',
      reason: 'One label for one meeting, and no facts at all: too little to tell. Find out what happened before you agree with the name.' }),
    C({ id: 'k6-savings', story: 'Dalia shows her husband the bank statement: their savings went into his own account. He says he never touched it, calls her hopeless with money, and says he is the real victim. He has taken her phone, and she is afraid to go home.',
      asks: { name: 'darvo', act: 'help' },
      reason: `Deny, attack, and flip who is the victim: DARVO. Fear and control (her phone taken) put safety first, so get outside help: ${HOTLINE}.` }),

    // ----- held back for the review on later days -----
    C({ id: 'r6-stove', story: 'His roommate says Bastian left the stove on all afternoon. Bastian says he left for work at seven and shows his badge swipe from 7:40 a.m. His roommate says, "Classic DARVO."',
      asks: { name: 'ordinary' },
      reason: 'He explained his side, with proof, and attacked no one: defending yourself accurately is not DARVO.' }),
    C({ id: 'r6-jacket', story: 'Bo has given his roommate the silent treatment for a week over a borrowed jacket. When the roommate is quiet one morning, Bo says, "What is your problem? You have been giving me the cold shoulder all week."',
      asks: { name: 'projection' },
      reason: 'He accuses his roommate of the very coldness he has shown all week, with nothing to back it: projection.' }),
    C({ id: 'r6-move', story: 'Her brother has booked his flight across the country and boxed his things. Gemma keeps saying, "He isn\'t really going." That night she snaps at her roommate over the dishes, and apologizes in the morning.',
      asks: { span: 'situation', name: 'ordinary' },
      reason: 'Denial about hard news, then a feeling sent to a safer target: both ordinary defenses in a hard time, and she owned it.' })
  ]);
})();
