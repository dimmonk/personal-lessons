// Psychology, lesson 1, the five questions: the worked story and the stories of the practice and the check. Question 1 (what is going on) is
// practised first, with two look-alikes side by side, then Question 2 (one moment or a pattern), with the course's two denials side by side, then both
// on one story. Stories marked as the course's are from the owner's own course (Drill 1.1, 1.2); the rest are invented for the lesson, and no real person
// is described. The stories not used in a lesson wait for the review.
(() => {
  const S = 'five-questions', C = spec => psyCase({ strand: S, ...spec });
  FC.items('psychology', [
    // ----- the worked story: both questions, answered in order -----
    C({ id: 'w1-genius', story: 'Ten years, every job, every friendship: he is the misunderstood genius, and everyone else eventually turns out to be an idiot or an enemy.',
      asks: { kind: 'pattern', span: 'years' },
      steps: [
        { id: 'q1', does: 'Question 1. Find what is going on.', working: 'Not one argument and not one move on one person: "every job, every friendship". It is how he is with everyone. Question 1: a lasting way someone is.', ask: 'kind' },
        { id: 'q2', does: 'Question 2. One moment, or the same shape over and over?', working: '"Ten years", and with many people at work and outside it. No hard time is named that would explain it. Question 2: over and over, for months or years.', ask: 'span' }],
      reason: '"Every job, every friendship" makes it a way he is with everyone (Question 1), and "ten years" with many people makes it a pattern (Question 2). Which pattern needs more signs, in later lessons; it would change if this started after one loss.' }),

    // ----- Question 1: what is going on -----
    C({ id: 'q1-swore', story: '“I know I said I\'d never date someone who does that again, but he\'s different.” Said while listing three of the exact habits she swore off.',
      asks: { kind: 'reasoning' },
      reason: 'She is talking herself past her own rule; no one else is acted on. Question 1: a mind talking itself into something.' }),
    C({ id: 'q1-deadline', story: 'A coworker denies ever agreeing to the deadline, then says you are the one who\'s always disorganized. The email trail says otherwise.',
      asks: { kind: 'move' },
      reason: 'Denial and blame aimed at you, in an exchange. Question 1: a move made on someone.' }),
    C({ id: 'q1-father', story: 'She\'s withdrawn and short-tempered this week. She just found out her father is sick.',
      asks: { kind: 'ordinary' },
      reason: 'A fair response to frightening news. Question 1: an ordinary reaction. Not everything needs a name.' }),
    // the two look-alikes, asked back to back: the same excuse, one inside her head, one aimed at someone
    C({ id: 'q1-degree', story: '“I\'ve put four years into this degree, I can\'t switch majors now.” Said about a major she dislikes every class of.',
      asks: { kind: 'reasoning' },
      reason: 'She is reasoning herself into staying; nobody else is acted on. Question 1: a mind talking itself into something.' }),
    C({ id: 'q1-blame', story: 'He failed the course and told his parents the professor had it in for him, so they would stop asking about his grades.',
      asks: { kind: 'move' },
      reason: 'The excuse is aimed at his parents, to make them stop asking. Question 1: a move made on someone. Compare the degree: an excuse she tells herself, with no one acted on.' }),
    // a move beside a lasting way, asked back to back: one exchange, or years of the same with everyone
    C({ id: 'q1-dinner', story: 'At last night\'s family dinner, your cousin cut off every story you told with "Nobody cares about your job," then talked about his new boat.',
      asks: { kind: 'move' },
      reason: 'One dinner, one exchange aimed at you. Question 1: a move made on someone. One bad evening is never, by itself, a lasting way someone is.' }),
    C({ id: 'q1-cousin', story: 'Every holiday for twenty years, at every gathering, her cousin turns the talk to his own money and his own trips.',
      asks: { kind: 'pattern' },
      reason: '"Every holiday for twenty years", at every gathering: the story is about how he is, not one exchange. Question 1: a lasting way someone is.' }),

    // ----- Question 2: one moment or a pattern -----
    C({ id: 'q2-surgery', story: 'Your normally easygoing neighbor snapped at you over the parking spot. His wife had surgery yesterday.',
      asks: { span: 'situation' },
      reason: 'Something hard is going on: his wife\'s surgery. Question 2: a reaction to a hard time. Check the situation before the character.' }),
    C({ id: 'q2-late', story: 'A friend who is always on time was an hour late to your birthday dinner, apologized, and has been on time every time since.',
      asks: { span: 'once' },
      reason: 'Always on time before, and every time since. Question 2: once or twice, with no pattern.' }),
    C({ id: 'q2-unsaid', story: 'At the open house, the real estate agent ignored your questions and talked only to your husband.',
      asks: { span: 'unsaid' },
      reason: 'One afternoon with a stranger: nothing about other times or other people. Question 2: the story does not say. Compare the friend who was late: there the story says it was rare.' }),
    // the course's two denials, asked back to back (Drill 1.2): the same act, a different answer to Question 2
    C({ id: 'q2-deny-stress', story: 'The week he lost his job, he swore he had never said something hurtful that he did say. A month later he admitted he had honestly forgotten. His family says it is not like him.',
      asks: { span: 'situation' },
      reason: 'It came the week he lost his job, he truly misremembered, and it is "not like him". Question 2: a reaction to a hard time.' }),
    C({ id: 'q2-deny-decade', story: 'She says something hurtful, then denies having said it. She has done this in every serious relationship for a decade, and the other person always ends up apologizing.',
      asks: { span: 'years' },
      reason: 'Every serious relationship, for a decade, with the same ending. Question 2: over and over, for months or years. The act is the same as his; Question 2 is what separates them.' }),
    C({ id: 'q2-teacher', story: 'For fifteen years, at three schools, the music teacher has screamed at a student until they cried at least once a term.',
      asks: { span: 'years' },
      reason: 'Fifteen years, three schools, every term. Question 2: over and over, for months or years.' }),

    // ----- both questions on one story -----
    C({ id: 'b-interrupt', story: 'In every meeting for the six years you have worked with her, and at every team dinner, she cuts people off to tell her own story.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Every meeting and dinner, with everyone (Question 1: a lasting way someone is), for six years (Question 2: over and over, for months or years).' }),
    C({ id: 'b-funeral', story: 'At his mother\'s funeral, your brother was cold and short with everyone, and left early.',
      asks: { kind: 'ordinary', span: 'situation' },
      reason: 'A funeral is as hard as it gets (Question 2: a reaction to a hard time), and coldness in grief is ordinary (Question 1). Blaming his character here skips the situation.' }),
    C({ id: 'b-diet', story: 'He read three studies backing his diet closely and with enthusiasm, then waved off the one against it as "funded by industry", without checking who paid for the other three.',
      asks: { kind: 'reasoning', span: 'unsaid' },
      reason: 'His own reasoning, no one acted on (Question 1: a mind talking itself into something). One reading session, nothing about other times (Question 2: the story does not say).' }),
    C({ id: 'b-promise', story: 'Your partner promised to call the plumber, forgot, and when you mentioned it said, "If you didn\'t nag me so much I\'d remember things." You ended up apologizing.',
      asks: { kind: 'move', span: 'unsaid' },
      reason: 'The forgetting is turned into your fault, and you end up apologizing (Question 1: a move made on someone). One evening, nothing about other times (Question 2: the story does not say).' }),

    // ----- the check: new stories, both questions -----
    C({ id: 'k-boss', story: 'Your manager takes credit for her team\'s work in front of the directors. She has done it at every company she has worked for, for twelve years.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Every company (Question 1: a lasting way someone is), twelve years (Question 2: over and over, for months or years).' }),
    C({ id: 'k-move', story: 'Since the move across the country two weeks ago, your usually cheerful sister cries easily and snaps at her kids.',
      asks: { kind: 'ordinary', span: 'situation' },
      reason: 'A big move two weeks ago, and "usually cheerful" (Question 2: a reaction to a hard time). A fair reaction (Question 1: ordinary).' }),
    C({ id: 'k-phone', story: 'After buying the pricier phone, he spends the evening reading only the articles that say it was the smarter buy.',
      asks: { kind: 'reasoning', span: 'unsaid' },
      reason: 'His own reasoning about his own purchase, no one acted on (Question 1: a mind talking itself into something); one evening (Question 2: the story does not say).' }),
    C({ id: 'k-friend', story: 'Your friend forgot your birthday this year. She has remembered it for fifteen years.',
      asks: { kind: 'ordinary', span: 'once' },
      reason: 'Once in fifteen years (Question 2: once or twice, with no pattern), and forgetting happens (Question 1: ordinary).' }),
    C({ id: 'k-text', story: 'When you showed him his own text, he said, "You\'re twisting my words like you always do," and you ended up apologizing.',
      asks: { kind: 'move', span: 'unsaid' },
      reason: 'Aimed at you, and you end up apologizing (Question 1: a move made on someone). One exchange; "like you always do" is his claim about you, not a record of him (Question 2: the story does not say).' }),
    C({ id: 'k-bills', story: 'When her landlord asked about the late rent, she said, "Maybe if you fixed the heat, I\'d have paid on time," though the heat works fine.',
      asks: { kind: 'move', span: 'unsaid' },
      reason: 'A false excuse aimed at the landlord to turn the blame on him (Question 1: a move made on someone); one exchange, nothing about other times (Question 2: the story does not say).' }),
    C({ id: 'k-chef', story: 'For twenty years, in four restaurants, the chef has thrown pans at cooks who make a mistake, and laughed about it afterward.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Four restaurants, many cooks (Question 1: a lasting way someone is), twenty years (Question 2: over and over, for months or years).' }),
    C({ id: 'k-newjob', story: 'In her first stressful week at a new job, she snapped at a fair correction, then apologized the next day.',
      asks: { kind: 'ordinary', span: 'situation' },
      reason: 'A stressful first week, and she apologized (Question 2: a reaction to a hard time; Question 1: ordinary).' }),

    // ----- held back for the review on later days -----
    C({ id: 'r-ledger', story: 'For twenty years, in every job, he has kept count of every slight and quietly cut off anyone who outshone him.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Every job (Question 1: a lasting way someone is), twenty years (Question 2: over and over, for months or years).' }),
    C({ id: 'r-exam', story: 'The night before her bar exam, your roommate yelled at you for being loud. She has never yelled before.',
      asks: { kind: 'ordinary', span: 'situation' },
      reason: 'The night before a big exam, and never before (Question 2: a reaction to a hard time; Question 1: ordinary).' }),
    C({ id: 'r-wave', story: 'Your coworker didn\'t say good morning today.',
      asks: { kind: 'ordinary', span: 'unsaid' },
      reason: 'A normal slip (Question 1: ordinary); one morning, nothing about other times (Question 2: the story does not say).' }),
    C({ id: 'q1-reviews', story: '“The bad reviews of my restaurant are all from people who don\'t understand real food.” Said about every bad review, while quoting every good one.',
      asks: { kind: 'reasoning' },
      reason: 'His own reasoning about the reviews; no one is acted on. Question 1: a mind talking itself into something.' })
  ]);
})();
