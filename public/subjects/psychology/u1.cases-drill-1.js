// Psychology, Unit One: drill cases, first stage (the key's first question on its own, on clean cases).
// Every drill case is new: none of them appears in a card. Each carries the words that decide the first
// question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong kind and why it fails here.
// miss holds an authored line for one particular wrong answer, where the line built from the key would not do.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their
// earlier-unit items from.

FC.cases('psychology', 'u1', [

  /* ---------- one person's reasoning beside something one person does to another ---------- */
  { id: 'g-degree', use: 'drill', tier: 'clean', setting: 'learning', topic: 'finishing a degree she dislikes',
    text: "Four years into a law degree she dislikes, Anneke has decided to finish it. 'I've put four years into this,' she tells her advisor. 'I can't switch now.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["I've put four years into this", "I can't switch now"] },
    reason: { D1: 'One person is giving her reason for a choice of her own: {cue:D1}. The advisor only listens, and nothing is said about the advisor.' },
    not: { outcome: 'pattern', why: 'Four years is how long the degree has taken. It is not how long Anneke has been a certain way. The case shows one choice and the reason she gives for it.' } },

  { id: 'g-memory', use: 'drill', tier: 'clean', setting: 'home', topic: 'a partner who says it never happened',
    text: "Whenever Zoe mentions something her partner said the week before, he tells her it never happened and that her memory is going. Zoe has started writing their conversations down so that she can check.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he tells her it never happened and that her memory is going' },
    reason: { D1: 'One person is saying something to another, about her and about what has passed between them: {cue:D1}. The case also shows where it leaves Zoe: writing conversations down to check herself.' },
    not: { outcome: 'reasoning', why: 'He is not giving reasons for a view or a choice of his own. What he says is about Zoe’s memory, and it is said to Zoe.' },
    miss: { pattern: 'It happens again and again, but always between the same two people. The case shows no other place and no other relationship of his, so the case does not show how he is with people in general.' } },

  /* ---------- a lasting way someone is beside a passing moment ---------- */
  { id: 'g-genius', use: 'drill', tier: 'clean', setting: 'work', topic: 'a misunderstood genius',
    text: "For ten years, in every job and every friendship, Karl has believed he is a misunderstood genius, and each time someone disagreed with him he decided that they were a fool or an enemy. His family say he was the same at school.",
    route: { D1: ['pattern'] },
    cues: { D1: ['For ten years, in every job and every friendship', 'His family say he was the same at school'] },
    reason: { D1: 'The case is a long view of one person: {cue:D1}. Ten years, every job, every friendship and his school days, with the same thing in each.' },
    not: { outcome: 'reasoning', why: 'Deciding that other people are fools is a view, but the case shows no single piece of thinking about it. It shows ten years of the same thing, at work, among friends and at school.' } },

  { id: 'g-exam', use: 'drill', tier: 'clean', setting: 'learning', topic: 'the evening before an exam',
    text: "The evening before her final exam, Sofia could not eat, paced the corridor, and jumped whenever anyone spoke to her. The next afternoon she was laughing in the kitchen.",
    route: { D1: ['none'] },
    cues: { D1: 'The evening before her final exam' },
    reason: { D1: 'The case is tied to one evening, with something real behind it: {cue:D1}. By the next afternoon it has passed. Sofia gives no reasons for anything, and nothing is said or done to anyone about them.' },
    not: { outcome: 'pattern', why: 'One evening, in one place, before one exam. Nothing in the case says she is like this in other weeks or in other parts of her life.' } },

  /* ---------- something one person does to another beside a passing moment ---------- */
  { id: 'g-feedback', use: 'drill', tier: 'clean', setting: 'learning', topic: 'feedback after a seminar presentation',
    text: "After her seminar presentation, Lucia's professor took her aside. 'The second half was hard to follow,' he said. 'The opening was the best I have seen from you. Next time, let's rehearse the ending together.' Lucia rewrote the second half that week.",
    route: { D1: ['tactic'] },
    cues: { D1: ['The second half was hard to follow', 'The opening was the best I have seen from you'] },
    reason: { D1: 'One person is saying something to another, about her and her work: {cue:D1}. The case shows where it leaves Lucia: rewriting the second half. What he says is fair and useful, and that does not change the kind.' },
    not: { outcome: 'reasoning', why: 'The professor is not explaining a view or a choice of his own. He is telling Lucia something about her presentation, and he says it to her.' },
    miss: { none: 'Nothing is wrong here, and that can make this feel like a case with nothing to name. But the kind is not a verdict. Something is said to one person about her, so there are two people to keep in view.' } },

  { id: 'g-newborn', use: 'drill', tier: 'clean', setting: 'home', topic: 'the first month with a baby',
    text: "In the first month after the baby came, Tomasz forgot two appointments, put his keys in the fridge, and fell asleep on the train and missed his stop. By the spring he was back to normal.",
    route: { D1: ['none'] },
    cues: { D1: 'In the first month after the baby came' },
    reason: { D1: 'The case is one short stretch, with something real behind it: {cue:D1}. By the spring it has passed. No reasons are given, and nothing is said or done to anyone about them.' },
    not: { outcome: 'pattern', why: 'A month is not years, and the case says he was back to normal by the spring. A lasting way of being does not end when the baby starts sleeping.' } },

  /* ---------- one person's reasoning beside a lasting way someone is ---------- */
  { id: 'g-broadband', use: 'drill', tier: 'clean', setting: 'money', topic: 'staying with an internet provider',
    text: "Hugo is staying with his internet provider although a rival is cheaper. 'I looked at switching,' he tells his son. 'The saving is $4 a month and I would lose my email address. It isn't worth it.'",
    route: { D1: ['reasoning'] },
    cues: { D1: "The saving is $4 a month and I would lose my email address. It isn't worth it." },
    reason: { D1: 'One person is giving his reasons for a choice of his own: {cue:D1}. His son only listens.' },
    not: { outcome: 'tactic', why: 'Hugo is talking to his son, but nothing he says is about his son or about anything between the two of them. It is all about the internet service.' } },

  { id: 'g-neighbor', use: 'drill', tier: 'clean', setting: 'community', topic: 'a neighbor who always turns up',
    text: "For as long as anyone on the street can remember, Mrs. Okafor has turned up when someone is ill: with soup, with rides to the hospital, with an offer to mind the children. Her colleagues at the library and her nieces in another city say the same of her.",
    route: { D1: ['pattern'] },
    cues: { D1: ['For as long as anyone on the street can remember', 'Her colleagues at the library and her nieces in another city say the same of her'] },
    reason: { D1: 'The case is a long view of one person: {cue:D1}. Many years, three places, and neighbors, colleagues and nieces all saying the same. That it is a good thing makes no difference to the kind.' },
    not: { outcome: 'tactic', why: 'Bringing soup is something done for another person, but the case does not stay with any one neighbor. It follows Mrs. Okafor through the years and through everyone who knows her.' } }
]);
