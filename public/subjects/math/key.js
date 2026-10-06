// Basic Math: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what you must be able to point to
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere. In this subject an outcome is a kind of problem, and each kind has
//                     one procedure (lesson standard A12: these are procedure units)
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what you must be able to point to in a problem before the name can be used.
//                     Printed on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a problem must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a problem shows this answer AND the one named, the named one wins
// Step codes (M1, W1, A1, G1, G2, C1, S1, S2) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:M1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// One word for one thing in this subject (lesson standard K9, and the audit's "tool / question / method / rule"):
//   problem    the situation the learner is given (a case, in the standard's words)
//   kind of problem   what the key names (an outcome); the learner's word for it is "name", as in every subject
//   procedure  the worked steps that solve one kind of problem. Never "tool", "method", "trick" or "rule".
//   question   only ever one of the key's questions. "step" is only ever a step of the working, never a question
//              and never a stretch of time (time is "each hour, day, month or year").
//   factor     only ever a whole number that divides another exactly. The number an amount is multiplied by each
//              time is the "multiplier".
//   amount     in the growth questions, the one thing followed over time. What it goes up or down by is "the same
//              number", so the answers about adding and multiplying have the same form and differ only in the verb.
//   the same shape at different sizes   the one wording for a copy, a model, a scale drawing or a bigger pizza.
//
// Tie-breaks (K2.8), each taught as an exception in Unit One and written here as data:
//   a rate for each hour, day, month or year is an amount changing over time, not a missing number (unknown -> growth);
//   a model, a map or a shadow is the same shape at different sizes, not a rate (unknown -> shape);
//   a count round a loop of days or hours is about whole numbers, not an amount over time (growth -> whole);
//   a rate with a fixed amount on top is a formula, not a rate (A1 rate -> formula);
//   a formula in which the missing number is multiplied by itself is its own kind (A1 formula -> itself);
//   two sides of a right-angled triangle, when the length wanted is on a second thing of the same shape (a shadow
//   beside a lamp post's shadow), are the same shape at different sizes (S1 twosides -> matching).

FC.key('math', {
  outcomes: [
    // How whole numbers split, repeat or are made up: taught by Unit Two.
    { id: 'prime', group: 'whole', unit: 'u2',
      n: 'Prime check',
      plain: 'testing whether one number splits evenly',
      needs: 'one whole number, and the question whether any whole number smaller than it, other than 1, divides it exactly',
      aka: ['primality test'] },
    { id: 'factor', group: 'whole', unit: 'u2',
      n: 'Prime factors',
      plain: 'breaking one number into the prime numbers that make it',
      needs: 'one whole number, and the question what it is made of: the prime numbers that multiply to give it, or every way it splits into equal groups',
      aka: ['prime factorization', 'prime decomposition'] },
    { id: 'hcf', group: 'whole', unit: 'u2',
      n: 'Highest common factor',
      plain: 'the biggest equal pieces for two numbers',
      needs: 'two whole numbers, and the question what the largest whole number is that divides both exactly, so that both split into equal pieces of that size with nothing left over',
      aka: ['greatest common divisor', 'HCF', 'GCD'] },
    { id: 'lcm', group: 'whole', unit: 'u2',
      n: 'Lowest common multiple',
      plain: 'two repeating things happening together again',
      needs: 'two things that each repeat every so many seconds, days or turns, and the question when they next happen at the same time',
      aka: ['least common multiple', 'LCM'] },
    { id: 'modrem', group: 'whole', unit: 'u2',
      n: 'Remainder',
      plain: 'leftovers, and counting round a loop',
      needs: 'a count, the size it is divided by (a group size, or a loop such as the 7 days of a week), and the question what is left over or where the count ends',
      aka: ['clock arithmetic', 'modular arithmetic'] },
    { id: 'irrat', group: 'whole', unit: 'u2',
      n: 'Irrational number',
      plain: 'whether a number has an exact value',
      needs: 'a square root of a whole number, or pi, and the question whether it can be written exactly, as a fraction or as a decimal that ends',
      aka: ['a number with no exact fraction'] },

    // A missing number, from a formula, a rate or totals: taught by Unit Three.
    { id: 'rearr', group: 'unknown', unit: 'u3',
      n: 'Rearranging a formula',
      plain: 'a formula worked backwards',
      needs: 'a formula, or a calculation described in words, the result it came to, and one number in it that the problem does not give',
      aka: ['changing the subject of a formula', 'solving for x'] },
    { id: 'prop', group: 'unknown', unit: 'u3',
      n: 'Proportion',
      plain: 'a rate scaled to a new amount',
      needs: 'so much for so many of something, a new amount of that thing, and the question what the first amount becomes for the new amount',
      aka: ['scaling by a rate', 'the unitary method', 'direct proportion'] },
    { id: 'simul', group: 'unknown', unit: 'u3',
      n: 'Simultaneous equations',
      plain: 'two missing numbers, two facts',
      needs: 'two numbers the problem does not give, and two separate facts about them, such as how many there are in all and what they come to in all',
      aka: ['two equations with two unknowns', 'a system of equations'] },
    { id: 'quad', group: 'unknown', unit: 'u3',
      n: 'Quadratic equation',
      plain: 'a missing number that is squared',
      needs: 'a formula or a fact in which the missing number is multiplied by itself, and a result it must come to',
      aka: ['a squared unknown'] },

    // What an amount becomes over time, or how long it takes: taught by Unit Four.
    { id: 'lin', group: 'growth', unit: 'u4',
      n: 'Linear growth',
      plain: 'change by the same number added or taken away',
      needs: 'one amount that goes up or down by the same number each hour, day, month or year, and a question about what it will be after a given time or how long until it reaches a target',
      aka: ['straight-line growth', 'a flat rate'] },
    { id: 'expg', group: 'growth', unit: 'u4',
      n: 'Exponential growth',
      plain: 'change by multiplying, forward to a given time',
      needs: 'one amount that is multiplied by the same number each hour, day, month or year (it doubles, or grows or shrinks by the same percentage of itself), a given time, and the question what the amount will be by then',
      aka: ['compound growth', 'interest on interest', 'exponential decay'] },
    { id: 'logsolve', group: 'growth', unit: 'u4',
      n: 'Logarithm',
      plain: 'change by multiplying, back to how long it takes',
      needs: 'one amount that is multiplied by the same number each hour, day, month or year, a target it should reach, and the question how long, or how many times, until it gets there',
      aka: ['doubling time', 'the log function'] },
    { id: 'oneoff', group: 'growth', unit: 'u4',
      n: 'A one-off change',
      plain: 'one change, then none',
      needs: 'one amount that changed once and has stayed the same since, and a question about what it will be later or how long until it reaches a target',
      aka: ['a step change', 'a one-time jump'] },

    // How many ways something can turn out, or how likely it is: taught by Unit Five.
    { id: 'multprin', group: 'chance', unit: 'u5',
      n: 'Multiplying the choices',
      plain: 'separate choices, each from its own list',
      needs: 'several separate choices, each made from its own full list, and the question how many different results there are',
      aka: ['the multiplication principle', 'the counting principle'] },
    { id: 'perm', group: 'chance', unit: 'u5',
      n: 'Permutations',
      plain: 'picking in order from one group',
      needs: 'one group to pick from, picks that each leave one fewer to choose from, a different order counting as a different result, and the question how many different results there are',
      aka: ['arrangements'] },
    { id: 'comb', group: 'chance', unit: 'u5',
      n: 'Combinations',
      plain: 'picking a group, in any order',
      needs: 'one group to pick from, picks that each leave one fewer to choose from, the same things in any order counting as one result, and the question how many different results there are',
      aka: ['selections', 'n choose r'] },
    { id: 'complement', group: 'chance', unit: 'u5',
      n: 'Counting the opposite',
      plain: 'at least one of several things happening',
      needs: 'several separate things, the chance of each, and the question how likely it is that at least one of them happens',
      aka: ['the complement rule'] },
    { id: 'baserate', group: 'chance', unit: 'u5',
      n: 'Base rate',
      plain: 'how far to trust a test result',
      needs: 'a test or a check that has given a result, how rare the thing it looks for is, how often the test is wrong, and the question how likely the result is to be right',
      aka: ['the base rate fallacy'] },

    // A length, an area or a volume, from a right-angled triangle or the same shape at different sizes: taught by Unit Six.
    { id: 'pyth', group: 'shape', unit: 'u6',
      n: 'Pythagoras’ theorem',
      plain: 'the third side of a right-angled triangle',
      needs: 'a right-angled triangle, the lengths of two of its sides, and the question how long the third side is',
      aka: ['Pythagoras', 'a² + b² = c²'] },
    { id: 'trig', group: 'shape', unit: 'u6',
      n: 'Trigonometry',
      plain: 'a side from an angle',
      needs: 'a right-angled triangle, the length of one side and one other angle in degrees, and the question how long another side is',
      aka: ['sin, cos and tan', 'SOH CAH TOA'] },
    { id: 'similar', group: 'shape', unit: 'u6',
      n: 'Similar shapes',
      plain: 'a length on the same shape at another size',
      needs: 'two things of exactly the same shape at different sizes, one part measured on both, another part measured on one of them, and the question how long that part is on the other',
      aka: ['similar triangles', 'scale drawings'] },
    { id: 'sqcube', group: 'shape', unit: 'u6',
      n: 'Square-cube law',
      plain: 'area or volume of the same shape at another size',
      needs: 'two things of exactly the same shape at different sizes, how many times longer one is than the other, and the question how many times more area or volume it has',
      aka: ['area and volume grow faster than length'] }
  ],

  terms: [
    { id: 'righttriangle', unit: 'u1', n: 'right-angled triangle',
      means: 'a triangle with one square corner, like the corner of a page or where a wall meets level ground. That square corner is called a right angle' },
    { id: 'formula', unit: 'u1', n: 'formula',
      means: 'a calculation written out once, with a word or a letter where a number goes, so that it can be used again with different numbers, such as bill = 8 + 0.25 × units' },
    { id: 'prime', unit: 'u2', n: 'prime number',
      means: 'a whole number above 1 that no whole number divides exactly except 1 and itself, such as 2, 3, 5, 7, 11 and 13' },
    { id: 'factor', unit: 'u2', n: 'factor',
      means: 'a whole number that divides another exactly: 3 and 4 are factors of 12, because 3 × 4 = 12' },
    { id: 'sqroot', unit: 'u2', n: 'square root',
      means: 'the number that, multiplied by itself, gives the number you started with: the square root of 36 is 6, because 6 × 6 = 36' },
    { id: 'squared', unit: 'u3', n: 'squared',
      means: 'multiplied by itself, and written with a small raised 2: 5 squared, written 5², is 5 × 5 = 25' },
    { id: 'multiplier', unit: 'u4', n: 'multiplier',
      means: 'the number an amount is multiplied by each time: going up 5% is a multiplier of 1.05, going down 15% is a multiplier of 0.85, and doubling is a multiplier of 2' },
    { id: 'logscale', unit: 'u4', n: 'log scale',
      means: 'a scale on a chart on which each equal space means ten times as much, so that 1, 10, 100 and 1,000 are evenly spaced' }
  ],

  // Words the old lessons used that a newcomer could not follow, or that they used for two things (the audit's vocabulary map).
  avoid: [
    { word: 'tool', sayInstead: 'procedure, or the kind of problem' },
    { word: 'method', sayInstead: 'procedure' },
    { word: 'trick', sayInstead: 'procedure' },
    { word: 'branch', sayInstead: 'the questions asked after the first answer' },
    { word: 'unknown', sayInstead: 'missing number' },
    { word: 'quantity', sayInstead: 'amount' },
    { word: 'period', sayInstead: 'each hour, day, month or year' },
    { word: 'composite', sayInstead: 'not a prime number' },
    { word: 'divisor', sayInstead: 'factor' },
    { word: 'scale factor', sayInstead: 'how many times longer' },
    { word: 'ratio', sayInstead: 'how many times bigger, or so much for so many' },
    { word: 'exponent', sayInstead: 'how many times the number is multiplied' },
    { word: 'independent', sayInstead: 'separate: one does not change the chance of the other' },
    { word: 'hypotenuse', sayInstead: 'the longest side, opposite the right angle' },
    { word: 'discriminant', sayInstead: 'leave it out: it is not used here' },
    { word: 'order of magnitude', sayInstead: 'ten times as much' },
    { word: 'orders of magnitude', sayInstead: 'ten times as much, again and again' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Every problem has a missing number (its answer), so no answer may be "a missing number" on its own: each says what
  // the problem gives that decides its procedure. The tie-breaks are listed at the top of this file.
  gate: {
    code: 'M1', unit: 'u1',
    q: 'What does the problem ask you to work out?',
    purpose: 'Sorts problems about how whole numbers split and repeat, about a missing number that must fit the numbers given, about an amount followed over time, about counting ways and chances, and about lengths, areas and volumes of shapes',
    why: 'Each of the five has its own procedures, and the questions asked next are different for each. A procedure for the wrong kind of problem still gives a number, and nothing in that number says it is wrong, so the kind of problem is settled first.',
    options: [
      { id: 'whole', n: 'How whole numbers split, repeat or are made up',
        plain: 'whole numbers: equal groups, leftovers, and repeating things that happen together',
        needs: 'whole numbers of things, and a question about how they split into equal groups, what is left over, what a number is made of, when repeating things happen together, or whether a number can be written exactly',
        when: 'the problem is about whole numbers and asks whether they split into equal groups with nothing left over, what is left over, what a number is made of, when two things that repeat happen together, where a count ends on a loop such as the days of a week, or whether a number can be written exactly',
        keeps: ['prime', 'factor', 'hcf', 'lcm', 'modrem', 'irrat'] },
      { id: 'unknown', n: 'A missing number, from a formula, a rate or totals',
        plain: 'a number you are not told, worked out from the numbers you are told',
        needs: 'a number the problem does not give, and a formula, a rate or totals, made from numbers the problem does give, that the missing number must fit',
        when: 'the problem leaves out one number, or two, and gives a formula, a rate such as so much for each thing, or totals that the missing number must fit',
        keeps: ['rearr', 'prop', 'simul', 'quad'],
        yieldsTo: [{ option: 'growth', say: 'an amount that goes up or down by the same number, or is multiplied by the same number, each hour, day, month or year, or that changed once and has stayed the same since' },
                   { option: 'shape', say: 'a right-angled triangle, or two things of the same shape at different sizes' }] },
      { id: 'growth', n: 'What an amount becomes over time, or how long it takes',
        plain: 'one amount, followed as it changes over time',
        needs: 'one amount, how it changes each hour, day, month or year (up or down by the same number, multiplied by the same number, or once and not again), and a question about what it will be or how long until it reaches a target',
        when: 'the problem follows one amount over time, the amount goes up or down by the same number or is multiplied by the same number each hour, day, month or year, or it changed once and has stayed the same since, and the problem asks what it will be or how long until it reaches a target',
        keeps: ['lin', 'expg', 'logsolve', 'oneoff'],
        yieldsTo: [{ option: 'whole', say: 'a count that goes round a loop and starts again, such as the days of a week or the hours on a clock' }] },
      { id: 'chance', n: 'How many ways something can turn out, or how likely it is',
        plain: 'counting the ways, or the chance of something',
        needs: 'something that can turn out in different ways, and a question about how many different ways there are, or about the chance that at least one of several things happens or that a test result is right',
        when: 'the problem asks how many different ways something can be chosen or ordered, or how likely it is that at least one of several things happens, or that a test result is right',
        keeps: ['multprin', 'perm', 'comb', 'complement', 'baserate'] },
      { id: 'shape', n: 'A length, an area or a volume, from a right-angled triangle or the same shape at different sizes',
        plain: 'right-angled triangles, and one shape at two sizes',
        needs: 'a right-angled triangle, or two things of exactly the same shape at different sizes, and a question about a length, an area or a volume',
        when: 'the problem has a right-angled triangle, or two things of exactly the same shape at different sizes, and asks for a length, an area or a volume, or for how many times more area or volume one has than the other',
        keeps: ['pyth', 'trig', 'similar', 'sqcube'] }
    ]
  },

  // A branch is a list of one, two or three questions. Three branches ask one question, because each of their kinds of
  // problem is defined by one thing (K2.2). Two ask two, and the two cross: the first says what the problem gives, the
  // second what it asks for, and neither question has every answer leading to one name (V55).
  branches: {
    // How whole numbers split, repeat or are made up. One question: each thing a problem can ask about whole numbers
    // leads to one name. Unit Two teaches it.
    whole: [
      { code: 'W1', unit: 'u2',
        q: 'What does the problem want to know about the number or numbers?',
        purpose: 'Tells apart six things a problem can ask about whole numbers, each worked by its own procedure',
        why: 'The numbers alone never say which procedure to use. The same 12 and 18 can be split into the biggest equal pieces both allow, which gives 6, or be two things that repeat, every 12 and every 18, which next happen together at 36. What the problem asks about the numbers decides it.',
        options: [
          { id: 'split', n: 'Whether one number splits into equal groups at all',
            when: 'the problem gives one whole number and asks whether it can be split into equal groups, with more than one group and more than one in each, or whether it is a prime number',
            keeps: ['prime'] },
          { id: 'parts', n: 'Every way one number splits, or the prime numbers that make it',
            when: 'the problem gives one whole number and asks for every way it splits into equal groups, or for the prime numbers that multiply to make it',
            keeps: ['factor'] },
          { id: 'piece', n: 'The biggest equal piece two numbers both split into',
            when: 'the problem gives two whole numbers and asks for the largest equal pieces, groups or tiles that both can be split into with nothing left over',
            keeps: ['hcf'] },
          { id: 'together', n: 'When two things that repeat next happen together',
            when: 'the problem gives two things that each repeat on their own, such as one every 8 seconds and one every 12 seconds, and asks when they next happen at the same time',
            keeps: ['lcm'] },
          { id: 'cycle', n: 'What is left over, or where a count ends on a loop',
            when: 'the problem shares a count out in equal groups and asks what is left over, or gives one loop of a fixed length, such as the 7 days of a week or the 12 hours on a clock, and a count of moves round it, and asks where the count ends',
            keeps: ['modrem'] },
          { id: 'exact', n: 'Whether a number can be written exactly',
            when: 'the problem asks whether a number, such as a square root or pi, can be written exactly as a fraction or as a decimal that ends, or only rounded',
            keeps: ['irrat'] }
        ] }
    ],

    // A missing number, from a formula, a rate or totals. One question: what the missing number must fit decides the
    // procedure, and each answer leads to one name. Unit Three teaches it.
    unknown: [
      { code: 'A1', unit: 'u3',
        q: 'What does the problem give that the missing number must fit?',
        purpose: 'Tells apart four things a problem can give that a missing number must fit',
        why: 'What the missing number must fit decides how you work it out. A formula is undone in reverse order, the last thing done to the missing number undone first. A rate is scaled to the new amount. Two facts about two missing numbers are combined so that only one missing number is left in them. A missing number multiplied by itself needs a procedure of its own, and can have two answers.',
        options: [
          { id: 'formula', n: 'A formula, and the result it came to',
            when: 'the problem gives a formula, or a calculation in words such as a fee plus so much for each unit, the result it came to, and every number in it but one',
            keeps: ['rearr'],
            yieldsTo: [{ option: 'itself', say: 'the missing number multiplied by itself' }] },
          { id: 'rate', n: 'A rate, and a new amount to scale it to',
            when: 'the problem gives so much for so many of something, such as 300 g of rice for 4 people or 12 square meters for each liter, and a new amount of that thing; the rate is for each thing, not for each hour, month or year, and nothing is added on top',
            keeps: ['prop'],
            yieldsTo: [{ option: 'formula', say: 'a fixed amount added on top of the rate, such as a call-out fee or a standing charge' }] },
          { id: 'totals', n: 'Two facts that two missing numbers must both fit',
            when: 'the problem leaves out two numbers and gives two separate facts about them, such as how many there are in all and what they come to in all',
            keeps: ['simul'] },
          { id: 'itself', n: 'A formula in which the missing number is multiplied by itself',
            when: 'the problem gives a formula, or a fact, in which the missing number is multiplied by itself (written t², and read “t squared”), and a result it must come to',
            keeps: ['quad'] }
        ] }
    ],

    // What an amount becomes over time, or how long it takes. Two questions that cross. The first separates adding,
    // multiplying and a single change; the second separates the two kinds in which the amount is multiplied, which need
    // different procedures. Adding and a single change are worked the same way whichever is asked, so their names are
    // kept by both answers of the second question. Unit Four teaches both questions.
    growth: [
      { code: 'G1', unit: 'u4',
        q: 'What happens to the amount each time it changes?',
        purpose: 'Sorts an amount that goes up or down by the same number each time, from one multiplied by the same number each time, from one that changed once and then stopped',
        why: 'Adding and multiplying give nearly the same numbers at first and very different numbers after a while, so a procedure for the wrong one gives an answer that is far out. An amount that changed once has no pattern to carry forward at all.',
        options: [
          { id: 'adds', n: 'It goes up or down by the same number each time',
            when: 'the amount goes up, or down, by the same number each hour, day, month or year ($200 a month, 2 cm an hour), whatever it has reached so far',
            keeps: ['lin'] },
          { id: 'multiplies', n: 'It is multiplied by the same number each time',
            when: 'the amount is multiplied by the same number each hour, day, month or year: it doubles, or it grows or shrinks by the same percentage of what it has reached (5% a year)',
            keeps: ['expg', 'logsolve'] },
          { id: 'once', n: 'It changed once, and has stayed the same since',
            when: 'the amount changed one time and has not changed since, so there is no change that repeats',
            keeps: ['oneoff'] }
        ] },
      { code: 'G2', unit: 'u4',
        q: 'Does the problem ask what the amount will be, or how long until it reaches a target?',
        purpose: 'Sorts a problem that asks for the amount at a given time from one that asks for the time to reach a given target',
        why: 'For an amount that is multiplied each time, the two need different procedures. The amount after a given time is found by multiplying that many times; the time to reach a target means finding how many times you must multiply, which is the harder direction. For an amount that goes up or down by the same number, or that changed once, both are worked the same way.',
        options: [
          { id: 'willbe', n: 'What the amount will be after a given time',
            when: 'the problem says how long (6 hours, 3 years, 4 doublings) and asks what the amount will be by then',
            keeps: ['lin', 'expg', 'oneoff'] },
          { id: 'howlong', n: 'How long until the amount reaches a target',
            when: 'the problem gives a target for the amount (double, $2,400, the whole pond) and asks how long, or how many times it must change, until it gets there',
            keeps: ['lin', 'logsolve', 'oneoff'] }
        ] }
    ],

    // How many ways something can turn out, or how likely it is. One question: each thing to count, or chance to find,
    // leads to one name. Unit Five teaches it.
    chance: [
      { code: 'C1', unit: 'u5',
        q: 'What does the problem ask you to count, or find the chance of?',
        purpose: 'Tells apart three ways of counting how many results there are, and two ways of finding a chance',
        why: 'The same numbers give very different answers depending on how the choices are made and what is asked: whether each choice has its own list, whether each pick leaves one fewer to choose from, whether the order counts, whether the chance is for at least one of several things, or whether a test result is being read. Each needs its own procedure.',
        options: [
          { id: 'lists', n: 'The ways to make several choices, each from its own list',
            when: 'the problem has several separate choices, such as a size, a topping and a crust, or each wheel of a lock, each made from its own full list, and asks how many different results there are',
            keeps: ['multprin'] },
          { id: 'order', n: 'The ways to pick from one group, when the order counts',
            when: 'the problem picks things one after another from one group, each pick leaves one fewer to choose from, and a different order counts as a different result, as with gold, silver and bronze',
            keeps: ['perm'] },
          { id: 'group', n: 'The ways to pick a group, when the order does not count',
            when: 'the problem picks several things from one group, each pick leaves one fewer to choose from, and the same things in a different order count as the same result, as with a team or a set of lottery numbers',
            keeps: ['comb'] },
          { id: 'atleast', n: 'The chance that at least one of several things happens',
            when: 'the problem gives the chance of each of several separate things and asks how likely it is that at least one of them happens',
            keeps: ['complement'] },
          { id: 'test', n: 'The chance that a test result is right',
            when: 'a test or a check has given a result, the thing it looks for is rare, the test is sometimes wrong, and the problem asks how likely it is that the result is right',
            keeps: ['baserate'] }
        ] }
    ],

    // A length, an area or a volume, from a right-angled triangle or the same shape at different sizes. Two questions
    // that cross: what the problem gives, then what it asks for. The second separates the two kinds that start from the
    // same shape at different sizes. Unit Six teaches both questions.
    shape: [
      { code: 'S1', unit: 'u6',
        q: 'What does the problem give you to work with?',
        purpose: 'Sorts two sides of a right-angled triangle, from one side and one angle of a right-angled triangle, from two things of the same shape at different sizes',
        why: 'Each needs its own procedure. Two sides of a right-angled triangle give the third by squaring them. One side and one angle give another side, because in a right-angled triangle each angle settles how long the sides are compared with each other. Two things of the same shape are compared by how many times longer one is than the other.',
        options: [
          { id: 'twosides', n: 'Two sides of a right-angled triangle',
            when: 'the problem has a right-angled triangle, such as a wall and the ground or the edges of a screen, and gives the lengths of two of its sides, and no angle besides the right angle',
            keeps: ['pyth'],
            yieldsTo: [{ option: 'matching', say: 'a second thing of the same shape at a different size, and the length wanted is on that second thing' }] },
          { id: 'sideangle', n: 'One side and one angle of a right-angled triangle',
            when: 'the problem has a right-angled triangle and gives the length of one side and one other angle in degrees, such as a ramp that rises at 5° or a ladder at 70° to the ground',
            keeps: ['trig'] },
          { id: 'matching', n: 'Two things of the same shape at different sizes',
            when: 'the problem has two things of exactly the same shape, one bigger than the other, such as a model and the real thing, two round pizzas, or a person and a lamp post with their shadows at the same moment',
            keeps: ['similar', 'sqcube'] }
        ] },
      { code: 'S2', unit: 'u6',
        q: 'Does the problem ask how long something is, or how much area or volume it has?',
        purpose: 'Sorts a problem that asks for a length from one that asks how much surface or how much room inside something has',
        why: 'When one thing is a copy of another made a number of times longer, every length grows that number of times, but the area grows by that number times itself, and the volume by that number three times over. So which of them the problem asks for decides the procedure.',
        options: [
          { id: 'length', n: 'How long one of its sides or parts is',
            when: 'the problem asks how long, how high, how far or how wide something is',
            keeps: ['pyth', 'trig', 'similar'] },
          { id: 'room', n: 'How much area or volume it has',
            when: 'the problem asks how much surface (glass, pizza, floor) or how much room inside (paint in a can, water in a pot) something has, or how many times more of either',
            keeps: ['sqcube'] }
        ] }
    ]
  }
});
