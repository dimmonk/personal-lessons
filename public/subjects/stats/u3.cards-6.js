// Statistical Claims, Unit Three, close: the two cards that end the unit after the drill. This is an action subject
// (subject.action is true), so the unit ends with a plan card.

FC.cards('stats', 'u3', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. Here is the unit in one place.',
    carry: [
      'Before you name anything, find how the people or things got into the figure, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'A figure can be added up correctly and still say little about the group. A big count only tells you how exact it is for the people in it, never whether they are a fair picture of the group.',
      'Few replies, a small group or a poll anyone could answer do not settle it alone. Look for what each name needs: a bigger group missing from the figure, or a high or low figure read as meaning something.',
      'A figure is fine when everyone who started is counted, or people were picked by lottery from a full list and nearly all answered, or the group is big enough that one or two more or fewer barely move it. Then the answer to the first question is {a:S1.holds}.',
      'Finding that a figure leans does not make the claim false. It tells you whom the figure leaves out, and what you would need to see before you could rely on it. Ask the same question about figures you like as about ones you do not.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it when a figure reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a list of the ones that made it, with a conclusion drawn from what they share', then: 'ask how many started, and what happened to the ones who are not on the list' },
      { cue: 'a poll or a vote that anyone could answer', then: 'say who the figure is for, and not the town or the voters' },
      { cue: 'a survey that went to a list, with a figure from the replies', then: 'work out how many replied out of how many were asked, before I decide what I think' },
      { cue: 'a high or low figure from a very small group', then: 'ask what the figure would be with one more or one fewer' },
      { cue: 'a figure that I like', then: 'put the same question to it that I would put to a figure I do not like' }
    ] }
]);
