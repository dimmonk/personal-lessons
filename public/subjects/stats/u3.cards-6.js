// Statistical Claims, Unit Three, part three (second half): the three cards that close the unit after the drill. This is an action
// subject (subject.action is true), so the unit ends with a plan card. The recap prints the unit's part of the key and, for each name,
// what you must be able to point to, the question to ask and what to do, from the portraits.

FC.cards('stats', 'u3', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any name, find out how the people or things got into the figure, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'A figure can be added up correctly, and be exact for the people in it, and still say little about the group the claim speaks for. The sum is not the claim.',
      'The size of the count tells you how exact the figure is for the people in it. It never tells you whether they are a fair picture of the group. A big count of the wrong people is a very exact figure about the wrong people.',
      'Few replies, a small group and a poll that anyone could answer are none of them a name by themselves. Look for the thing the name needs: a bigger group missing from the figure, or a high or low figure read as meaning something.',
      'What puts a figure right is counting everyone who started, or picking people by lottery from a full list and hearing from nearly all of them, or a group big enough that one or two more or fewer barely move it. When you find that, say so: the answer to the first question is {a:S1.holds}.',
      'Finding that a figure leans does not make the claim false. It says whom the figure leaves out, and what you would need to see before you could rely on it.',
      'Put the same question to the figures you like as to the ones you do not.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: something you read, something you were told, or something you said. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'survivor', occasion: 'Advice from someone who made it, or a "success stories" page, with no word on the ones who tried the same and did not.' },
      { outcome: 'selfselect', occasion: 'A vote, a poll or a review page that anyone could answer, reported as what a whole town, a whole country or all customers think.' },
      { outcome: 'nonresp', occasion: 'A survey sent to everyone on a list, with a figure from the few who sent it back.' },
      { outcome: 'smalln', occasion: 'A "best", a "worst" or a "never" that came from a handful: a team, a street, a first week.' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a figure reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a list of the ones that made it, with a conclusion drawn from what they share', then: 'ask how many started, and what happened to the ones who are not on the list' },
      { cue: 'a poll or a vote that anyone could answer', then: 'say who the figure is for, and not the town or the voters' },
      { cue: 'a survey that went to a list, with a figure from the replies', then: 'work out how many replied out of how many were asked, before I decide what I think' },
      { cue: 'a high or low figure from a very small group', then: 'ask what the figure would be with one more or one fewer' },
      { cue: 'a figure that I like', then: 'put the same question to it that I would put to a figure I do not like' }
    ] }
]);
