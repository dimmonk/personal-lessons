// Basic Math, Unit Five: problems shown inside cards, part one (the first three kinds: separate choices, picking in order, picking a group).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route: { M1: [...], C1: [...] } gives the accepted answer to each question; cues are the exact words in the text that decide it;
// segments are the tappable pieces for "tap the words" prompts, and note is shown if a piece is tapped in error.
// Nothing in a problem's text retypes key wording: it is something a person would say, in the words real life uses.

FC.cases('math', 'u5', [

  { id: 'm5-wd-cases', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'phone covers in colors and styles', name: 'The phone covers', outcome: 'multprin',
    text: 'A phone shop sells covers in 4 colors (black, red, blue, green) and 3 styles (plain, ridged, clear). A customer picks one color and one style. How many different covers can the shop sell?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: { M1: ['How many different covers can the shop sell?'], C1: ['A customer picks one color and one style'] } },

  { id: 'm5-wd-bowl', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a ball and shoes at a bowling alley', outcome: 'multprin',
    text: 'A bowling alley hires out a ball and a pair of shoes. A customer picks one of 5 ball weights and one of 8 shoe sizes. How many different hires can there be?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: { M1: ['How many different hires can there be?'], C1: ['picks one of 5 ball weights and one of 8 shoe sizes'] },
    segments: [
      { text: 'A bowling alley hires out a ball and a pair of shoes.', note: 'That only names the two things hired. It does not say how the customer chooses them.' },
      { text: 'A customer picks one of 5 ball weights and one of 8 shoe sizes.' },
      { text: 'How many different hires can there be?', note: 'That is only the question. The words that show how the choices are made come before it.' }
    ],
    reason: { C1: 'These words give two separate choices, a ball weight and a shoe size, each with a list of its own.' } },

  { id: 'm5-wd-medals', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'two medals for four runners', name: 'The four runners', outcome: 'perm',
    text: 'Four friends, Ana, Ben, Cal and Dev, run a race on the school field. The first across the line gets a gold medal and the second gets a silver medal. In how many different ways can the two medals be given out?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: { M1: ['In how many different ways can the two medals be given out?'], C1: ['The first across the line gets a gold medal and the second gets a silver medal'] } },

  { id: 'm5-wd-ferry', use: 'check', tier: 'clean', setting: 'travel', topic: 'two seats on a small ferry', outcome: 'perm',
    text: 'A small ferry has room for only 2 of the 5 people waiting on the quay. The first to board takes the window seat and the second takes the aisle seat. In how many different ways can the two seats be filled?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: { M1: ['In how many different ways can the two seats be filled?'], C1: ['The first to board takes the window seat and the second takes the aisle seat'] },
    segments: [
      { text: 'A small ferry has room for only 2 of the 5 people waiting on the quay.', note: 'That only gives the group and how many are picked. The words that show how they are picked come next.' },
      { text: 'The first to board takes the window seat and the second takes the aisle seat.' },
      { text: 'In how many different ways can the two seats be filled?', note: 'That is only the question. The words that show how the picks are made come before it.' }
    ],
    reason: { C1: 'These words give two different seats, filled one after another from one group, so who boards first matters.' } },

  { id: 'm5-wd-ice', use: 'teach', tier: 'clean', setting: 'home', topic: 'two friends sent for ice', name: 'The ice at the picnic', outcome: 'comb',
    text: 'Four friends, Ana, Ben, Cal and Dev, are at a picnic. Two of them are sent to fetch ice, and both do the same job. In how many different ways can the pair be picked?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: { M1: ['In how many different ways can the pair be picked?'], C1: ['Two of them are sent to fetch ice, and both do the same job'] } },

  { id: 'm5-wd-cheese', use: 'check', tier: 'clean', setting: 'shopping', topic: 'a sampler box of cheeses', outcome: 'comb',
    text: 'A cheese shop makes a sampler box of 3 cheeses picked from the 6 on its counter. The box is the same whichever cheese goes in first. How many different boxes can it make?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: { M1: ['How many different boxes can it make?'], C1: ['The box is the same whichever cheese goes in first'] },
    segments: [
      { text: 'A cheese shop makes a sampler box of 3 cheeses picked from the 6 on its counter.', note: 'That only gives the group and how many are picked. The words that show whether the order counts come next.' },
      { text: 'The box is the same whichever cheese goes in first.' },
      { text: 'How many different boxes can it make?', note: 'That is only the question. The words that show whether the order counts come before it.' }
    ],
    reason: { C1: 'These words say the same three cheeses in any order are the same box.' } }
]);
