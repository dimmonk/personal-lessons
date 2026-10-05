// Basic Math, Unit Two: the problems on the look-alike cards. Each pair shares a story, and often the same number, and
// differs only in what the problem wants to know about the number or numbers.
// A look-alike card shows one problem from each kind of its pair, so these come in pairs; Case A is the first of each pair.

FC.cases('math', 'u2', [

  /* ---------- Testing whether one number splits, or breaking it into primes ---------- */
  { id: 'la-patrols-prime', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'scouts in patrols', outcome: 'prime',
    text: 'A scout leader has 57 scouts and wants to split them into equal patrols, with more than one patrol and more than one scout in each patrol. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['split them into equal patrols, with more than one patrol and more than one scout in each patrol'],
            W1: ['split them into equal patrols, with more than one patrol and more than one scout in each patrol', 'Is that possible?'] } },
  { id: 'la-patrols-factor', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'scouts and primes', outcome: 'factor',
    text: 'A scout leader has 57 scouts and wants to know which prime numbers multiply together to give 57.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['which prime numbers multiply together to give 57'], W1: ['which prime numbers multiply together to give 57'] } },

  /* ---------- One number, or two ---------- */
  { id: 'la-rolls-factor', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls in packs', outcome: 'factor',
    text: 'A baker has 48 rolls and wants to know every size of equal pack she can make, with more than one pack and more than one roll in each. How many different pack sizes are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['wants to know every size of equal pack she can make'], W1: ['wants to know every size of equal pack she can make'] } },
  { id: 'la-rolls-hcf', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls and buns in packs', outcome: 'hcf',
    text: 'A baker has 48 rolls and 60 buns and wants to make packs of one size, with only rolls in some packs and only buns in the others and none left over. What is the largest pack size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['make packs of one size, with only rolls in some packs and only buns in the others and none left over'],
            W1: ['make packs of one size, with only rolls in some packs and only buns in the others and none left over', 'What is the largest pack size?'] } },

  /* ---------- The biggest equal piece, or when two repeats meet ---------- */
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

  /* ---------- Two repeats, or one loop and a count ---------- */
  { id: 'la-tram-lcm', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a tram and a bus at a station', outcome: 'lcm',
    text: 'A tram stops at a station every 7 minutes and a bus every 10 minutes. They have just stopped there together. After how many minutes will they next stop there together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['A tram stops at a station every 7 minutes and a bus every 10 minutes', 'next stop there together'],
            W1: ['A tram stops at a station every 7 minutes and a bus every 10 minutes', 'next stop there together'] } },
  { id: 'la-tram-modrem', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a tram round a loop of seven stops', outcome: 'modrem',
    text: 'A tram line is a loop of 7 stops, numbered 1 to 7. A tram starts at stop 1 and travels 100 stops. At which stop does it finish?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['At which stop does it finish?'], W1: ['a loop of 7 stops', 'travels 100 stops', 'At which stop does it finish?'] } },

  /* ---------- Whether a number splits, or whether it is exact ---------- */
  { id: 'la-mosaic-prime', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'mosaic tiles in rows', outcome: 'prime',
    text: 'A mosaic maker has 29 square tiles and wants to lay them in equal rows, with more than one row and more than one tile in each row. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['lay them in equal rows, with more than one row and more than one tile in each row'],
            W1: ['lay them in equal rows, with more than one row and more than one tile in each row', 'Is that possible?'] } },
  { id: 'la-mosaic-irrat', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a square mosaic panel', outcome: 'irrat',
    text: 'A mosaic maker has a square panel with an area of 29 m². Its side is the number that multiplies by itself to give 29. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'], W1: ['Can the side be written exactly, as a fraction or a decimal that ends?'] } }
]);
