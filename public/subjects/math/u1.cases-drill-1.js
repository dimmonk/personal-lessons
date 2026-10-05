// Basic Math, Unit One: drill problems, first stage (the key's first question on its own, on clean problems).
// Every drill problem is new: none of them appears in a card. Each carries the words that decide the first question
// (cues.M1), the reason for its answer (reason.M1), and not: the nearest wrong kind and why it fails here.
// wouldChange says what would make it a different answer; the app shows it after the feedback.
// These problems, with the route-stage problems and the return problems, are the bank that the later units draw their
// earlier-unit items from. Nothing here is solved: each is only sorted.

FC.cases('math', 'u1', [

  /* ---------- how whole numbers split beside counting ways ---------- */
  { id: 'gt-stamps', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'stamps put into albums',
    text: 'Dev has 57 stamps. He wants to put them into albums so that every album holds the same number of stamps, with more than one album and more than one stamp in each. Is it possible?',
    route: { M1: ['whole'] },
    cues: { M1: ['every album holds the same number of stamps', 'Is it possible?'] },
    reason: { M1: 'The problem asks whether 57 stamps can be shared evenly between albums: {cue:M1}. There is nothing else to work out: no price, no time passing, no shape.' },
    not: { outcome: 'chance', why: 'Dev is sorting stamps into albums, but he is not choosing between different results. The question is only whether 57 can be shared out evenly.' },
    wouldChange: 'If the problem asked in how many different orders Dev could lay six different stamps in a row, it would be {a:M1.chance}.' },

  { id: 'gt-breakfast', use: 'drill', tier: 'clean', setting: 'cooking', topic: 'breakfasts built from separate lists',
    text: 'A café lets customers build a breakfast from one drink out of 6, one main out of 5 and one side out of 4. How many different breakfasts can a customer build?',
    route: { M1: ['chance'] },
    cues: { M1: ['one drink out of 6, one main out of 5 and one side out of 4', 'How many different breakfasts can a customer build?'] },
    reason: { M1: 'A drink, a main and a side are each picked from a list of their own, and the question asks how many different results that gives: {cue:M1}.' },
    not: { outcome: 'whole', why: 'The numbers 6, 5 and 4 are whole counts, but none of them is being split into equal groups. They are the sizes of the lists the choices are made from.' },
    wouldChange: 'If the problem asked whether the 120 breakfasts the café sells in a day could be shared into equal boxes with none left over, it would be {a:M1.whole}.' },

  /* ---------- a missing number beside an amount over time ---------- */
  { id: 'gt-chain', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'chain sold by the metre',
    text: 'A hardware shop sells 6 metres of chain for €15. Leila wants 20 metres. How much will it cost her?',
    route: { M1: ['unknown'] },
    cues: { M1: ['sells 6 metres of chain for €15', 'How much will it cost her?'] },
    reason: { M1: 'The problem gives a rate, so much for so many metres, and a new amount to scale it to: {cue:M1}. The price is the number it leaves out.' },
    not: { outcome: 'growth', why: 'The price goes with each metre, which is a thing you count, and not with each hour, day, month or year. Nothing is followed as time passes.' },
    wouldChange: 'If the problem said the chain’s price rose by €2 every month and asked what it would cost in a year, one amount would be followed through time, and it would be {a:M1.growth}.' },

  { id: 'gt-jar', use: 'drill', tier: 'clean', setting: 'money', topic: 'a savings jar filled each month',
    text: 'A savings jar holds €120. Tomas adds €15 to it every month. How many months until the jar holds €300?',
    route: { M1: ['growth'] },
    cues: { M1: ['Tomas adds €15 to it every month', 'How many months until the jar holds €300?'] },
    reason: { M1: 'One amount, the money in the jar, is followed through time: {cue:M1}. It goes up by the same number every month, and the question asks how long it takes to reach a target.' },
    not: { outcome: 'unknown', why: 'The number of months is the number the problem leaves out, and the facts fix it, which can make it look like a hidden number. But the facts are an amount that changes each month, and the problem asks how long it takes to reach a target.' },
    wouldChange: 'If the problem said the €300 had to be split into equal shares for 7 cousins and asked what was left over, it would be {a:M1.whole}.' },

  /* ---------- a shape beside a missing number ---------- */
  { id: 'gt-gatebrace', use: 'drill', tier: 'clean', setting: 'building', topic: 'a diagonal brace on a gate',
    text: 'A carpenter fits a diagonal brace across a rectangular garden gate. The gate is 1.5 m wide and 2 m high. How long is the brace?',
    route: { M1: ['shape'] },
    cues: { M1: ['The gate is 1.5 m wide and 2 m high', 'How long is the brace?'] },
    reason: { M1: 'The width, the height and the brace make a {t:righttriangle}, because the rectangle has square corners. The problem gives two of its sides and asks for the third: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The length of the brace is the number the problem leaves out, but nothing in the problem is a calculation, a rate or a pair of totals. It is a length on a triangle with a square corner.' },
    wouldChange: 'If the problem gave the rectangle’s area and its width and asked for its height, there would be no triangle, and it would be {a:M1.unknown}.' },

  { id: 'gt-coins', use: 'drill', tier: 'clean', setting: 'home', topic: 'two sorts of coin in a jar',
    text: 'Rafa’s jar holds only 20-cent coins and 50-cent coins. There are 18 coins and they are worth €6.30 in all. How many coins of each kind are in the jar?',
    route: { M1: ['unknown'] },
    cues: { M1: ['There are 18 coins and they are worth €6.30 in all', 'How many coins of each kind are in the jar?'] },
    reason: { M1: 'The jar’s two sorts of coin are not counted for you. What you are given is a count of coins and their total value, and both have to come out right: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The question says “how many”, and there are two sorts of coin, as there were two sorts of cake at the bake sale. But nothing is a choice. Two facts fix exactly one answer.' },
    wouldChange: 'If the problem asked in how many different orders Rafa could line up his 4 oldest coins, it would be {a:M1.chance}.' },

  /* ---------- an amount over time beside counts that repeat ---------- */
  { id: 'gt-drip', use: 'drill', tier: 'clean', setting: 'health', topic: 'a drip bag emptying',
    text: 'A patient’s drip bag holds 500 ml, and the drip delivers 25 ml every hour. How long will it take for the bag to empty?',
    route: { M1: ['growth'] },
    cues: { M1: ['the drip delivers 25 ml every hour', 'How long will it take for the bag to empty?'] },
    reason: { M1: 'One amount, what is in the bag, is followed through time: {cue:M1}. It goes down by the same number every hour, and the question asks how long it takes to reach a target, nothing left.' },
    not: { outcome: 'unknown', why: 'There is a rate, 25 ml every hour, and a number the problem leaves out. But the rate is for each hour, and a rate for each hour goes to {a:M1.growth}.' },
    wouldChange: 'If the problem asked how many full 40 ml doses the bag holds and how much is left over, it would be {a:M1.whole}.' },

  { id: 'gt-busstram', use: 'drill', tier: 'clean', setting: 'travel', topic: 'a bus and a tram at one stop',
    text: 'Cleo’s bus passes her stop every 8 minutes and the tram every 10 minutes. They both passed at 7:00. After how many minutes will they next pass at the same time?',
    route: { M1: ['whole'] },
    cues: { M1: ['bus passes her stop every 8 minutes and the tram every 10 minutes', 'After how many minutes will they next pass at the same time?'] },
    reason: { M1: 'The bus and the tram each come back on a schedule of their own, and the question is when both arrive at the same moment again: {cue:M1}.' },
    not: { outcome: 'growth', why: 'The problem runs over minutes, which can look like an amount followed through time. But no amount is changing: the bus and the tram are two repeats, and the question is when they meet.' },
    wouldChange: 'If the problem said the bus fare rose by 10 cents every month and asked what it would cost in a year, it would follow one amount through time, and it would be {a:M1.growth}.' },

  /* ---------- a chance beside a shape ---------- */
  { id: 'gt-allergy', use: 'drill', tier: 'clean', setting: 'health', topic: 'a skin test for an allergy',
    text: 'About 1 person in 1,000 has a certain allergy. A skin test picks up 90 out of every 100 real allergies, and also shows a positive result for 5 out of every 100 people who do not have one. Noor’s test is positive. How likely is it that she really has the allergy?',
    route: { M1: ['chance'] },
    cues: { M1: ['About 1 person in 1,000 has a certain allergy', 'How likely is it that she really has the allergy?'] },
    reason: { M1: 'The problem gives how rare the allergy is and how often the test is right and wrong, and asks how likely a positive result is to be right: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'Every number in the problem is a count or a percentage, and one answer is left out, which can look like a hidden number. But the question asks how likely something is, and nothing has to fit a calculation or a total.' },
    wouldChange: 'If the problem asked whether the 1,000 people in the village could be split into equal groups for a survey with no one left over, it would be {a:M1.whole}.' },

  { id: 'gt-cloths', use: 'drill', tier: 'clean', setting: 'home', topic: 'two square tablecloths',
    text: 'A square tablecloth is 2 m along each side. A second square cloth, exactly the same shape, is 6 m along each side. How many times more fabric does the bigger cloth need?',
    route: { M1: ['shape'] },
    cues: { M1: ['exactly the same shape, is 6 m along each side', 'How many times more fabric does the bigger cloth need?'] },
    reason: { M1: 'There are two things of exactly the same shape at different sizes, and the question asks how many times more fabric, which is an area: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The 2 m and the 6 m can look like a rate to scale, and a number is left out. But the two cloths are copies of each other, and the question compares how much fabric each needs.' },
    wouldChange: 'If the second cloth were 6 m by 2 m, it would not be the same shape as the first, and there would be no copy to compare.' }
]);
