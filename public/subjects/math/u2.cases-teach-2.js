// Basic Math, Unit Two: the two pairs of look-alike problems, and the problem of each worked example (a worked example's problem
// carries only the problem; its working is on the card).

FC.cases('math', 'u2', [

  { id: 'la-patrols-prime', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'scouts in patrols', outcome: 'prime',
    text: 'A scout leader has 57 scouts and wants to split them into equal patrols, with more than one patrol and more than one scout in each patrol. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['split them into equal patrols, with more than one patrol and more than one scout in each patrol'],
            W1: ['split them into equal patrols, with more than one patrol and more than one scout in each patrol', 'Is that possible?'] } },

  { id: 'la-patrols-factor', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'scouts and primes', outcome: 'factor',
    text: 'A scout leader has 57 scouts and wants to know which prime numbers multiply together to give 57.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['which prime numbers multiply together to give 57'], W1: ['which prime numbers multiply together to give 57'] } },

  { id: 'la-ribbon-hcf', use: 'teach', tier: 'clean', setting: 'home', topic: 'two lengths of ribbon', outcome: 'hcf',
    text: 'Ruth has two lengths of ribbon, one 16 m long and one 24 m long. She cuts both into pieces of one length with none left over. What is the greatest length each piece can have?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['cuts both into pieces of one length with none left over'],
            W1: ['cuts both into pieces of one length with none left over', 'What is the greatest length each piece can have?'] } },

  { id: 'la-ribbon-lcm', use: 'teach', tier: 'clean', setting: 'home', topic: 'two kitchen alarms', outcome: 'lcm',
    text: 'Ruth has two alarms, one that sounds every 16 minutes and one that sounds every 24 minutes. They have just sounded together. After how many minutes will they next sound together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['one that sounds every 16 minutes and one that sounds every 24 minutes', 'next sound together'],
            W1: ['one that sounds every 16 minutes and one that sounds every 24 minutes', 'next sound together'] } },

  {
    id: 's-prime-1',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'singers in rows',
    kind: 'problem',
    outcome: 'prime',
    text: 'A choir has 67 singers. The director wants to stand them in equal rows, with more than one row and more than one singer in each row. Is that possible?'
  },

  {
    id: 's-factor-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'a puzzle in a newsletter',
    kind: 'problem',
    outcome: 'factor',
    text: 'A puzzle in the staff newsletter says: write 84 as a product of prime numbers. Which prime numbers are they?'
  },

  {
    id: 's-hcf-1',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'a panel cut into squares',
    kind: 'problem',
    outcome: 'hcf',
    text: 'A craftsman has a rectangular panel 60 cm by 84 cm. He wants to cut it into square tiles, all the same size, with no waste. What is the largest side the squares can have?'
  },

  {
    id: 's-lcm-1',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'two bus routes at one stop',
    kind: 'problem',
    outcome: 'lcm',
    text: 'Two bus routes stop at the same stop. One bus comes every 20 minutes and the other every 30 minutes. They have just arrived together. After how many minutes do they next arrive together?'
  },

  {
    id: 's-modrem-1',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'a clock and fifty hours',
    kind: 'problem',
    outcome: 'modrem',
    text: 'It is 9 o’clock on a clock that shows 12 hours. What time will the clock show 50 hours from now?'
  },

  {
    id: 's-irrat-1',
    use: 'teach',
    tier: 'clean',
    setting: 'building',
    topic: 'the diagonal of a square tile',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A square tile is 1 m along each side. A line is drawn from one corner to the opposite corner, and its length is the number that multiplies by itself to give 2. Can that length be written exactly, as a fraction or a decimal that ends?'
  }
]);
