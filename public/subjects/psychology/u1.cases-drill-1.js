// Psychology, Unit One: drill cases, first stage (the key's first question on its own, on clean cases).
// Every drill case is new: none of them appears in a card. Each carries the words that decide the first
// question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong kind and why it fails here.
// miss holds an authored line for one particular wrong answer, where the line built from the key would not do.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their
// earlier-unit items from.

FC.cases('psychology', 'u1', [

  { id: 'g-degree', use: 'drill', tier: 'clean', setting: 'learning', topic: 'finishing a degree she dislikes',
    text: "Four years into a law degree she dislikes, Anneke has decided to finish it. 'I've put four years into this,' she tells her advisor. 'I can't switch now.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["I've put four years into this", "I can't switch now"] },
    reason: { D1: 'One person is giving her reason for a choice of her own: {cue:D1}. The advisor only listens, and nothing is said about the advisor.' },
    not: { outcome: 'pattern', why: 'Four years is how long the degree took, not how long Anneke has been a certain way. It is one choice and its reason.' } },

  { id: 'g-memory', use: 'drill', tier: 'clean', setting: 'home', topic: 'a partner who says it never happened',
    text: "Whenever Zoe mentions something her partner said the week before, he tells her it never happened and that her memory is going. Zoe has started writing their conversations down so that she can check.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he tells her it never happened and that her memory is going' },
    reason: { D1: 'One person is saying something to another, about her and about what has passed between them: {cue:D1}. The story also shows where it leaves Zoe: writing conversations down to check herself.' },
    not: { outcome: 'reasoning', why: 'He is not giving reasons for a view or a choice of his own. What he says is about Zoe’s memory, and it is said to Zoe.' },
    miss: { pattern: 'It happens again and again, but always between the same two people. The story shows no other place and no other relationship of his, so the story does not show how he is with people in general.' } },

  { id: 'g-genius', use: 'drill', tier: 'clean', setting: 'work', topic: 'a misunderstood genius',
    text: "For ten years, in every job and every friendship, Karl has believed he is a misunderstood genius, and each time someone disagreed with him he decided that they were a fool or an enemy. His family say he was the same at school.",
    route: { D1: ['pattern'] },
    cues: { D1: ['For ten years, in every job and every friendship', 'His family say he was the same at school'] },
    reason: { D1: 'The story is a long view of one person: {cue:D1}. Ten years, every job, every friendship and his school days, with the same thing in each.' },
    not: { outcome: 'reasoning', why: 'Deciding that other people are fools is a view, but the story shows no single piece of thinking about it. It shows ten years of the same thing, at work, among friends and at school.' } },

  { id: 'g-exam', use: 'drill', tier: 'clean', setting: 'learning', topic: 'the evening before an exam',
    text: "The evening before her final exam, Sofia could not eat, paced the corridor, and jumped whenever anyone spoke to her. The next afternoon she was laughing in the kitchen.",
    route: { D1: ['none'] },
    cues: { D1: 'The evening before her final exam' },
    reason: { D1: 'It is one evening, with a cause: {cue:D1}. By the next afternoon it has passed.' },
    not: { outcome: 'pattern', why: 'One evening, in one place, before one exam. Nothing in the story says she is like this in other weeks or in other parts of her life.' } }
]);
