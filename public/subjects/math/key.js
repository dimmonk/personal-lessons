// Basic Math: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1, and section 20: plain, concrete words)
//   outcomes[].n      the one fixed name shown everywhere. In this subject a name is a type of problem, and each one is
//                     worked out with its own steps (lesson standard A12: these are procedure units)
//   outcomes[].plain  a few everyday words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what to look for in a problem before the name fits. Printed under "What to look for"
//                     where two names are compared, on the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that difference decides how the problem is worked out
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a problem must show for this answer, as a clause. Printed as "Give this answer when <when>."
//                     and in feedback as "This story shows something else: <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a problem shows this answer AND the one named, the named one wins.
//                     Its say is a noun phrase, printed as "It also shows <say>".
// Step codes (M1, W1, A1, G1, G2, C1, S1, S2) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:M1.option}; its plain words and what to
//                     look for are printed by {plain:option} and {needs:option}.
//
// One word for one thing in this subject (lesson standard K9, and the audit's "tool / question / method / rule"):
//   problem    the situation the learner is given. The learner's word for it is "problem", never "story" or "case".
//   name       what the key calls one type of problem (an outcome), as in every subject
//   steps      the worked steps that solve one type of problem. Never "procedure", "tool", "method", "trick" or "rule".
//              A "step" is only ever a step of the working, never a question and never a stretch of time
//              (time is "each hour, day, month or year").
//   question   only ever one of the key's questions
//   factor     only ever a whole number that divides another exactly. The number an amount is multiplied by each
//              time is the "multiplier".
//   amount     in the growth questions, the one thing followed over time. What it goes up or down by is "the same
//              number", so the answers about adding and multiplying have the same form and differ only in the verb.
//   the same shape at two sizes   the one wording for a copy, a model, a scale drawing or a bigger pizza.
//   right triangle   the American name, never "right-angled triangle".
//
// Tie-breaks (K2.8), each taught as an exception in Unit One and written here as data:
//   a rate for each hour, day, month or year is an amount changing over time, not a missing number (unknown -> growth);
//   a model, a map or a shadow is the same shape at two sizes, not a rate (unknown -> shape);
//   a count around a loop of days or hours is about whole numbers, not an amount over time (growth -> whole);
//   a rate with a fixed amount on top is a formula, not a rate (A1 rate -> formula);
//   a formula in which the missing number is multiplied by itself is its own type (A1 formula -> itself);
//   two sides of a right triangle, when the length wanted is on a second thing of the same shape (a shadow
//   beside a lamp post's shadow), are the same shape at two sizes (S1 twosides -> matching).

FC.key('math', {
  outcomes: [
    // How whole numbers split and repeat: taught by Unit Two.
    { id: 'prime', group: 'whole', unit: 'u2',
      n: 'Prime check',
      plain: 'testing whether a number splits evenly at all',
      needs: 'one whole number, and the question whether any whole number other than 1 and itself goes into it exactly',
      aka: ['primality test'] },
    { id: 'factor', group: 'whole', unit: 'u2',
      n: 'Prime factors',
      plain: 'the prime numbers that multiply to make a number',
      needs: 'one whole number, and a question about every way it splits into equal groups, or which prime numbers multiply to make it',
      aka: ['prime factorization', 'prime decomposition'] },
    { id: 'hcf', group: 'whole', unit: 'u2',
      n: 'Greatest common factor',
      plain: 'the biggest equal pieces two numbers both split into',
      needs: 'two whole numbers, and the question what the biggest piece size is that both split into with nothing left over',
      aka: ['greatest common divisor', 'GCF', 'GCD'] },
    { id: 'lcm', group: 'whole', unit: 'u2',
      n: 'Least common multiple',
      plain: 'when two repeating things line up again',
      needs: 'two things that each repeat every so many seconds, days or turns, and the question when they next happen at the same time',
      aka: ['LCM'] },
    { id: 'modrem', group: 'whole', unit: 'u2',
      n: 'Remainder',
      plain: 'leftovers, and counting around a loop',
      needs: 'a count, what it is shared out or counted around (groups of 6, the 7 days of a week), and the question what is left over or where the count ends',
      aka: ['clock arithmetic', 'modular arithmetic'] },
    { id: 'irrat', group: 'whole', unit: 'u2',
      n: 'Irrational number',
      plain: 'a number you can only ever round',
      needs: 'a square root of a whole number, or pi, and the question whether it can be written exactly, as a fraction or as a decimal that ends',
      aka: ['a number with no exact fraction'] },

    // A missing number in a formula, rate or totals: taught by Unit Three.
    { id: 'rearr', group: 'unknown', unit: 'u3',
      n: 'Rearranging a formula',
      plain: 'a formula worked backward',
      needs: 'a formula, or a calculation in words, the result it came to, and one number in it that you are not told',
      aka: ['changing the subject of a formula', 'solving for x'] },
    { id: 'prop', group: 'unknown', unit: 'u3',
      n: 'Proportion',
      plain: 'a rate scaled up or down',
      needs: 'so much for so many of something (300 g of rice for 4 people), a new number of that thing, and the question what the first amount becomes',
      aka: ['scaling by a rate', 'the unitary method', 'direct proportion'] },
    { id: 'simul', group: 'unknown', unit: 'u3',
      n: 'System of equations',
      plain: 'two missing numbers, two facts',
      needs: 'two numbers you are not told, and two separate facts about them, such as how many there are in all and what they cost in all',
      aka: ['simultaneous equations', 'two equations with two unknowns'] },
    { id: 'quad', group: 'unknown', unit: 'u3',
      n: 'Quadratic equation',
      plain: 'a missing number that is squared',
      needs: 'a formula or a fact where the missing number is multiplied by itself, and the result it must come to',
      aka: ['a squared unknown'] },

    // An amount changing over time: taught by Unit Four.
    { id: 'lin', group: 'growth', unit: 'u4',
      n: 'Linear growth',
      plain: 'the same number added or taken away each time',
      needs: 'one amount that goes up or down by the same number each day, month or year, and a question about what it will be later or when it reaches a target',
      aka: ['straight-line growth', 'a flat rate'] },
    { id: 'expg', group: 'growth', unit: 'u4',
      n: 'Exponential growth',
      plain: 'multiplied each time: how much by a set time',
      needs: 'one amount multiplied by the same number each time, like doubling or growing 5% a year, a set time, and the question what it will be by then',
      aka: ['compound growth', 'interest on interest', 'exponential decay'] },
    { id: 'logsolve', group: 'growth', unit: 'u4',
      n: 'Logarithm',
      plain: 'multiplied each time: how long until a target',
      needs: 'one amount multiplied by the same number each time, like 5% a year, a target it should reach, and the question how long, or how many times, until it gets there',
      aka: ['doubling time', 'the log function'] },
    { id: 'oneoff', group: 'growth', unit: 'u4',
      n: 'A one-time change',
      plain: 'one change, then nothing more',
      needs: 'one amount that changed once and has stayed the same since, and a question about what it will be later or how long until it reaches a target',
      aka: ['a step change', 'a one-off jump'] },

    // Counting ways and chances: taught by Unit Five.
    { id: 'multprin', group: 'chance', unit: 'u5',
      n: 'Multiplying the choices',
      plain: 'one pick from each of several lists',
      needs: 'several separate choices, each made from its own full list, and the question how many different results there are',
      aka: ['the multiplication principle', 'the counting principle'] },
    { id: 'perm', group: 'chance', unit: 'u5',
      n: 'Permutations',
      plain: 'picking from one group, where order matters',
      needs: 'one group to pick from, each pick leaving one fewer, a different order counting as a different result, and the question how many different results there are',
      aka: ['arrangements'] },
    { id: 'comb', group: 'chance', unit: 'u5',
      n: 'Combinations',
      plain: 'picking from one group, in any order',
      needs: 'one group to pick from, each pick leaving one fewer, the same things in any order counting as one result, and the question how many different results there are',
      aka: ['selections', 'n choose r'] },
    { id: 'complement', group: 'chance', unit: 'u5',
      n: 'Counting the opposite',
      plain: 'the chance that at least one thing happens',
      needs: 'several separate things, the chance of each, and the question how likely it is that at least one of them happens',
      aka: ['the complement rule'] },
    { id: 'baserate', group: 'chance', unit: 'u5',
      n: 'Base rate',
      plain: 'how far to trust a test result',
      needs: 'a test that has given a result, how rare the thing it looks for is, how often the test is wrong, and the question how likely the result is to be right',
      aka: ['the base rate fallacy'] },

    // Right triangles, or one shape at two sizes: taught by Unit Six.
    { id: 'pyth', group: 'shape', unit: 'u6',
      n: 'Pythagorean theorem',
      plain: 'the third side of a right triangle',
      needs: 'a right triangle, the lengths of two of its sides, and the question how long the third side is',
      aka: ['Pythagoras’ theorem', 'a² + b² = c²'] },
    { id: 'trig', group: 'shape', unit: 'u6',
      n: 'Trigonometry',
      plain: 'a side from an angle',
      needs: 'a right triangle, the length of one side, one other angle in degrees, and the question how long another side is',
      aka: ['sin, cos and tan', 'SOH CAH TOA'] },
    { id: 'similar', group: 'shape', unit: 'u6',
      n: 'Similar shapes',
      plain: 'a length on a bigger or smaller copy',
      needs: 'two things of exactly the same shape at different sizes, one part measured on both, another on one, and the question how long it is on the other',
      aka: ['similar triangles', 'scale drawings'] },
    { id: 'sqcube', group: 'shape', unit: 'u6',
      n: 'Square-cube law',
      plain: 'the area or volume of a bigger or smaller copy',
      needs: 'two things of exactly the same shape at different sizes, how many times longer one is than the other, and the question how many times more area or volume it has',
      aka: ['area and volume grow faster than length'] }
  ],

  terms: [
    { id: 'righttriangle', unit: 'u1', n: 'right triangle',
      means: 'a triangle with one square corner, like the corner of a page or where a wall meets the floor. That square corner is called a right angle' },
    { id: 'formula', unit: 'u1', n: 'formula',
      means: 'a calculation written out once, with a word or a letter where a number goes, so you can use it again with different numbers, such as bill = 8 + 0.25 × units' },
    { id: 'prime', unit: 'u2', n: 'prime number',
      means: 'a whole number above 1 that no whole number goes into exactly except 1 and itself, such as 2, 3, 5, 7, 11 and 13' },
    { id: 'factor', unit: 'u2', n: 'factor',
      means: 'a whole number that goes into another exactly: 3 and 4 are factors of 12, because 3 × 4 = 12' },
    { id: 'sqroot', unit: 'u2', n: 'square root',
      means: 'the number that, multiplied by itself, gives the number you started with: the square root of 36 is 6, because 6 × 6 = 36' },
    { id: 'squared', unit: 'u3', n: 'squared',
      means: 'multiplied by itself, and written with a small raised 2: 5 squared, written 5², is 5 × 5 = 25' },
    { id: 'multiplier', unit: 'u4', n: 'multiplier',
      means: 'the number an amount is multiplied by each time: going up 5% is a multiplier of 1.05, going down 15% is a multiplier of 0.85, and doubling is a multiplier of 2' },
    { id: 'logscale', unit: 'u4', n: 'log scale',
      means: 'a chart scale where each equal gap means ten times as much, so 1, 10, 100 and 1,000 sit evenly spaced' }
  ],

  // Words a newcomer could not follow, textbook words, British forms, and words the old lessons used for two things.
  avoid: [
    { word: 'procedure', sayInstead: 'the steps, or how to work it out' },
    { word: 'tool', sayInstead: 'the steps, or the name' },
    { word: 'method', sayInstead: 'the steps' },
    { word: 'trick', sayInstead: 'the steps' },
    { word: 'branch', sayInstead: 'the questions asked after the first answer' },
    { word: 'unknown', sayInstead: 'missing number' },
    { word: 'variable', sayInstead: 'missing number' },
    { word: 'quantity', sayInstead: 'amount' },
    { word: 'period', sayInstead: 'each hour, day, month or year' },
    { word: 'integer', sayInstead: 'whole number' },
    { word: 'composite', sayInstead: 'not a prime number' },
    { word: 'divisor', sayInstead: 'factor' },
    { word: 'quotient', sayInstead: 'the result of dividing' },
    { word: 'numerator', sayInstead: 'the top number of the fraction' },
    { word: 'denominator', sayInstead: 'the bottom number of the fraction' },
    { word: 'coefficient', sayInstead: 'the number in front of the letter' },
    { word: 'evaluate', sayInstead: 'work out' },
    { word: 'scale factor', sayInstead: 'how many times longer' },
    { word: 'ratio', sayInstead: 'how many times bigger, or so much for so many' },
    { word: 'exponent', sayInstead: 'how many times the number is multiplied' },
    { word: 'probability', sayInstead: 'chance' },
    { word: 'independent', sayInstead: 'separate: one does not change the chance of the other' },
    { word: 'mutually exclusive', sayInstead: 'cannot both happen' },
    { word: 'sample space', sayInstead: 'every way it can turn out' },
    { word: 'hypotenuse', sayInstead: 'the longest side, opposite the square corner' },
    { word: 'right-angled', sayInstead: 'right triangle' },
    { word: 'highest common factor', sayInstead: 'greatest common factor' },
    { word: 'lowest common multiple', sayInstead: 'least common multiple' },
    { word: 'discriminant', sayInstead: 'leave it out: it is not used here' },
    { word: 'order of magnitude', sayInstead: 'ten times as much' },
    { word: 'orders of magnitude', sayInstead: 'ten times as much, again and again' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Every problem has a missing number (its answer), so no answer may be "a missing number" on its own: each says what
  // the problem gives that decides how it is worked out. The tie-breaks are listed at the top of this file.
  gate: {
    code: 'M1', unit: 'u1',
    q: 'What is this problem about?',
    why: 'Each of the five is worked out with different steps, and the questions after this one differ too. The wrong steps still give you a number, and nothing in that number tells you it is wrong.',
    options: [
      { id: 'whole', n: 'How whole numbers split and repeat',
        plain: 'equal groups, leftovers, and repeating things that line up',
        needs: 'whole numbers, and a question about equal groups, leftovers, which numbers multiply to make one, when repeats line up, or whether a number can be written exactly',
        when: 'you are given whole numbers and asked about equal groups, leftovers, which numbers multiply to make one, when repeats line up, or if a number can be written exactly',
        keeps: ['prime', 'factor', 'hcf', 'lcm', 'modrem', 'irrat'] },
      { id: 'unknown', n: 'A missing number in a formula, rate or totals',
        plain: 'a number you are not told, found from the numbers you are told',
        needs: 'a number you are not told, and a formula, a rate or totals, made of numbers you are told, that it has to fit',
        when: 'one or two numbers are left out, and you are given a formula, a rate such as so much for each thing, or totals that they have to fit',
        keeps: ['rearr', 'prop', 'simul', 'quad'],
        yieldsTo: [{ option: 'growth', say: 'an amount that goes up or down by the same number, or is multiplied by the same number, every hour, day, month or year, or that changed once and then stayed the same' },
                   { option: 'shape', say: 'a right triangle, or two things of the same shape at different sizes' }] },
      { id: 'growth', n: 'An amount changing over time',
        plain: 'one amount, followed as it changes',
        needs: 'one amount changing each day, month or year by the same number added or multiplied, or changing once, and a question about what it will be or when it reaches a target',
        when: 'one amount changes by the same number added or multiplied each month or year, or changes once, and you are asked what it will be or when it reaches a target',
        keeps: ['lin', 'expg', 'logsolve', 'oneoff'],
        yieldsTo: [{ option: 'whole', say: 'a count that goes around a loop and starts again, like the days of a week or the hours on a clock' }] },
      { id: 'chance', n: 'Counting ways and chances',
        plain: 'how many ways something can turn out, or how likely it is',
        needs: 'something that can turn out in different ways, and a question about how many ways, how likely at least one of several things is, or whether a test result is right',
        when: 'you are asked how many ways something can be chosen or ordered, how likely at least one of several things is, or how likely a test result is to be right',
        keeps: ['multprin', 'perm', 'comb', 'complement', 'baserate'] },
      { id: 'shape', n: 'Right triangles, or one shape at two sizes',
        plain: 'a length, area or volume from a right triangle or a bigger or smaller copy',
        needs: 'a right triangle, or two things of exactly the same shape at different sizes, and a question about a length, an area or a volume',
        when: 'there is a right triangle, or two things of exactly the same shape at different sizes, and you are asked for a length, an area or a volume, or how they compare',
        keeps: ['pyth', 'trig', 'similar', 'sqcube'] }
    ]
  },

  // After the first answer come one or two more questions. Three answers lead to one question, because each of their
  // names is decided by one thing (K2.2). Two lead to two, and the two cross: the first says what the problem gives,
  // the second what it asks for, and neither question has every answer leading to one name (V55).
  branches: {
    // How whole numbers split and repeat. One question: each thing a problem can ask about whole numbers leads to one
    // name. Unit Two teaches it.
    whole: [
      { code: 'W1', unit: 'u2',
        q: 'What do you need to know about the numbers?',
        why: 'The numbers alone never decide it. The same 12 and 18 can be split into the biggest equal pieces both allow, which is 6, or be two things that repeat, every 12 and every 18 minutes, which line up again at 36. What you are asked decides it.',
        options: [
          { id: 'split', n: 'Whether a number splits evenly at all',
            when: 'you are given one whole number and asked whether it splits into equal groups, with more than one group and more than one in each, or whether it is prime',
            keeps: ['prime'] },
          { id: 'parts', n: 'Every way a number splits, or the primes that multiply to make it',
            when: 'you are given one whole number and asked for every way it splits into equal groups, or for the prime numbers that multiply to make it',
            keeps: ['factor'] },
          { id: 'piece', n: 'The biggest equal piece two numbers both split into',
            when: 'you are given two whole numbers and asked for the biggest equal pieces, groups or tiles that both split into with nothing left over',
            keeps: ['hcf'] },
          { id: 'together', n: 'When two repeating things line up again',
            when: 'two things each repeat on their own, like one every 8 seconds and one every 12 seconds, and you are asked when they next happen at the same time',
            keeps: ['lcm'] },
          { id: 'cycle', n: 'What is left over, or where a count ends on a loop',
            when: 'a count is shared into equal groups and you are asked what is left over, or a count goes around a loop like the 7 days of a week and you are asked where it ends',
            keeps: ['modrem'] },
          { id: 'exact', n: 'Whether a number can be written exactly',
            when: 'you are asked whether a number, like a square root or pi, can be written exactly as a fraction or as a decimal that ends, or can only be rounded',
            keeps: ['irrat'] }
        ] }
    ],

    // A missing number in a formula, rate or totals. One question: what the missing number has to fit decides how it is
    // worked out, and each answer leads to one name. Unit Three teaches it.
    unknown: [
      { code: 'A1', unit: 'u3',
        q: 'What does the missing number have to fit?',
        why: 'What it has to fit decides how you find it. A formula is undone backward, the last thing done to the missing number undone first. A rate is scaled up or down. Two facts about two missing numbers are combined until only one missing number is left. A missing number multiplied by itself needs steps of its own, and can have two answers.',
        options: [
          { id: 'formula', n: 'A formula and the result it came to',
            when: 'you are given a formula, or a calculation in words such as a fee plus so much for each unit, the result it came to, and every number in it but one',
            keeps: ['rearr'],
            yieldsTo: [{ option: 'itself', say: 'the missing number multiplied by itself' }] },
          { id: 'rate', n: 'A rate to scale up or down',
            when: 'you are given so much for so many things, like 300 g of rice for 4 people, and a new number of things, with the rate per thing, not per year, and nothing added on top',
            keeps: ['prop'],
            yieldsTo: [{ option: 'formula', say: 'a fixed amount added on top of the rate, like a service-call fee or a flat monthly charge' }] },
          { id: 'totals', n: 'Two missing numbers and two facts about them',
            when: 'two numbers are left out and you are given two separate facts about them, like how many there are in all and what they cost in all',
            keeps: ['simul'] },
          { id: 'itself', n: 'A formula where the missing number is multiplied by itself',
            when: 'you are given a formula or a fact where the missing number is multiplied by itself (written t², and read “t squared”), and the result it must come to',
            keeps: ['quad'] }
        ] }
    ],

    // An amount changing over time. Two questions that cross. The first separates adding, multiplying and a single
    // change; the second separates the two names in which the amount is multiplied, which are worked out differently.
    // Adding and a single change are worked the same way whichever is asked, so their names are kept by both answers
    // of the second question. Unit Four teaches both questions.
    growth: [
      { code: 'G1', unit: 'u4',
        q: 'How does the amount change?',
        why: 'Adding and multiplying give nearly the same numbers at first and very different numbers later, so the wrong steps give an answer that is far off. An amount that changed once has nothing to carry forward at all.',
        options: [
          { id: 'adds', n: 'It goes up or down by the same number each time',
            when: 'the amount goes up or down by the same number every hour, day, month or year ($200 a month, 2 cm an hour), however big it has gotten',
            keeps: ['lin'] },
          { id: 'multiplies', n: 'It is multiplied by the same number each time',
            when: 'the amount is multiplied by the same number every hour, day, month or year: it doubles, or it grows or shrinks by the same percent of itself (5% a year)',
            keeps: ['expg', 'logsolve'] },
          { id: 'once', n: 'It changed once, then stayed the same',
            when: 'the amount changed one time and has not changed since, so nothing repeats',
            keeps: ['oneoff'] }
        ] },
      { code: 'G2', unit: 'u4',
        q: 'Do you need the amount later, or how long it takes?',
        why: 'For an amount that is multiplied each time, these are worked out differently. The amount after a set time means multiplying that many times; the time to reach a target means finding how many times to multiply, which is harder. For adding, or for a single change, both are worked the same way.',
        options: [
          { id: 'willbe', n: 'What the amount will be after a set time',
            when: 'you are told how long (6 hours, 3 years, 4 doublings) and asked what the amount will be by then',
            keeps: ['lin', 'expg', 'oneoff'] },
          { id: 'howlong', n: 'How long until the amount reaches a target',
            when: 'you are given a target for the amount (double, $2,400, the whole pond) and asked how long, or how many changes, until it gets there',
            keeps: ['lin', 'logsolve', 'oneoff'] }
        ] }
    ],

    // Counting ways and chances. One question: each thing to count, or chance to find, leads to one name.
    // Unit Five teaches it.
    chance: [
      { code: 'C1', unit: 'u5',
        q: 'What are you counting, or finding the chance of?',
        why: 'The same numbers give very different answers depending on how the picks are made: one from each of several lists, or several from one group, with the order mattering or not. The chance of at least one thing, and the chance a test is right, each need steps of their own too.',
        options: [
          { id: 'lists', n: 'Ways to pick one from each of several lists',
            when: 'there are several separate choices, like a size and a topping, each from its own full list, and you are asked how many different results there are',
            keeps: ['multprin'] },
          { id: 'order', n: 'Ways to pick from one group, where order matters',
            when: 'things are picked one after another from one group, each pick leaves one fewer, and a different order is a different result, as with gold, silver and bronze',
            keeps: ['perm'] },
          { id: 'group', n: 'Ways to pick from one group, in any order',
            when: 'several things are picked from one group, each pick leaves one fewer, and the same things in a different order count as one result, as with a team',
            keeps: ['comb'] },
          { id: 'atleast', n: 'The chance that at least one of several things happens',
            when: 'you are given the chance of each of several separate things and asked how likely it is that at least one of them happens',
            keeps: ['complement'] },
          { id: 'test', n: 'The chance that a test result is right',
            when: 'a test or a check has given a result, the thing it looks for is rare, the test is sometimes wrong, and you are asked how likely the result is to be right',
            keeps: ['baserate'] }
        ] }
    ],

    // Right triangles, or one shape at two sizes. Two questions that cross: what the problem gives, then what it asks
    // for. The second separates the two names that start from the same shape at two sizes. Unit Six teaches both.
    shape: [
      { code: 'S1', unit: 'u6',
        q: 'What are you given to work with?',
        why: 'Each is worked out differently. Two sides of a right triangle give the third by squaring them. One side and one angle give another side, because the angle fixes how the sides compare. Two things of the same shape are compared by how many times longer one is than the other.',
        options: [
          { id: 'twosides', n: 'Two sides of a right triangle',
            when: 'there is a right triangle, like a wall and the floor, you are given the lengths of two of its sides, and there is no angle besides the square corner',
            keeps: ['pyth'],
            yieldsTo: [{ option: 'matching', say: 'a second thing of the same shape at a different size, with the length wanted on that second thing' }] },
          { id: 'sideangle', n: 'One side and one angle of a right triangle',
            when: 'there is a right triangle and you are given the length of one side and one other angle in degrees, like a ramp that rises at 5° or a ladder at 70° to the ground',
            keeps: ['trig'] },
          { id: 'matching', n: 'The same shape at two sizes',
            when: 'there are two things of exactly the same shape, one bigger than the other, like a model and the real thing, or a person and a lamp post with their shadows',
            keeps: ['similar', 'sqcube'] }
        ] },
      { code: 'S2', unit: 'u6',
        q: 'Do you need a length, or an area or volume?',
        why: 'When a copy is made some number of times longer, every length grows that many times, but the area grows by that number times itself, and the volume by that number three times over. So which one you need decides how you work it out.',
        options: [
          { id: 'length', n: 'How long, high or far something is',
            when: 'you are asked how long, how high, how far or how wide something is',
            keeps: ['pyth', 'trig', 'similar'] },
          { id: 'room', n: 'How much area or volume something has',
            when: 'you are asked how much surface (glass, pizza, floor) or how much space inside (paint in a can, water in a pot) something has, or how many times more of either',
            keeps: ['sqcube'] }
        ] }
    ]
  }
});
