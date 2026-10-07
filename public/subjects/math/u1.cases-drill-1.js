// Basic Math, Unit One: drill problems, first stage (the key's first question on its own, on clean problems).
// Every drill problem is new: none of them appears in a card. Each carries the words that decide the first question
// (cues.M1), the reason for its answer (reason.M1), and not: the nearest wrong kind and why it fails here.
// wouldChange is kept only where it teaches something the cards do not.
// These problems, with the route-stage problems and the return problems, are the bank that the later units draw their
// earlier-unit items from. Nothing here is solved: each is only sorted.

FC.cases('math', 'u1', [

  /* ---------- how whole numbers split beside counting ways ---------- */
  { id: 'gt-stamps', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'stamps put into albums',
    text: 'Dev has 57 stamps. He wants to put them into albums so that every album holds the same number of stamps, with more than one album and more than one stamp in each. Is it possible?',
    route: { M1: ['whole'] },
    cues: { M1: ['every album holds the same number of stamps', 'Is it possible?'] },
    reason: { M1: 'The problem asks whether 57 stamps can be shared evenly between albums: {cue:M1}. Nothing else is asked: no price, no time passing, no shape.' },
    not: { outcome: 'chance', why: 'Dev is sorting stamps into albums, but he is not choosing between different results. He only asks whether 57 can be shared evenly.' } },

  { id: 'gt-breakfast', use: 'drill', tier: 'clean', setting: 'cooking', topic: 'breakfasts built from separate lists',
    text: 'A café lets customers build a breakfast from one drink out of 6, one main out of 5 and one side out of 4. How many different breakfasts can a customer build?',
    route: { M1: ['chance'] },
    cues: { M1: ['one drink out of 6, one main out of 5 and one side out of 4', 'How many different breakfasts can a customer build?'] },
    reason: { M1: 'A drink, a main and a side are each picked from a list of their own, and the question asks how many different breakfasts that gives: {cue:M1}.' },
    not: { outcome: 'whole', why: 'The numbers 6, 5 and 4 are whole counts, but none of them is being split into equal groups. They are the lengths of the lists.' } },

  /* ---------- a missing number beside an amount over time ---------- */
  { id: 'gt-chain', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'chain sold by the meter',
    text: 'A hardware store sells 6 meters of chain for $15. Leila wants 20 meters. How much will it cost her?',
    route: { M1: ['unknown'] },
    cues: { M1: ['sells 6 meters of chain for $15', 'How much will it cost her?'] },
    reason: { M1: 'The problem gives so much for so many meters, and a new number of meters to scale it to: {cue:M1}. The price is the number it leaves out.' },
    not: { outcome: 'growth', why: 'The price goes with each meter, which you count, not with each hour, day, month or year. Nothing is followed as time passes.' } },

  { id: 'gt-jar', use: 'drill', tier: 'clean', setting: 'money', topic: 'a savings jar filled each month',
    text: 'A savings jar holds $120. Tomas adds $15 to it every month. How many months until the jar holds $300?',
    route: { M1: ['growth'] },
    cues: { M1: ['Tomas adds $15 to it every month', 'How many months until the jar holds $300?'] },
    reason: { M1: 'One amount, the money in the jar, is followed through time: {cue:M1}. It goes up by the same number every month, and the question asks how long until a target.' },
    not: { outcome: 'unknown', why: 'The number of months is left out and the facts fix it, which can look like a missing number. But the money in the jar changes every month, and the problem asks how long until a target.' } },

  /* ---------- a shape beside a missing number ---------- */
  { id: 'gt-gatebrace', use: 'drill', tier: 'clean', setting: 'building', topic: 'a diagonal brace on a gate',
    text: 'A carpenter fits a diagonal brace across a rectangular garden gate. The gate is 1.5 m wide and 2 m high. How long is the brace?',
    route: { M1: ['shape'] },
    cues: { M1: ['The gate is 1.5 m wide and 2 m high', 'How long is the brace?'] },
    reason: { M1: 'The width, the height and the brace make a {t:righttriangle}, because a rectangle has square corners. The problem gives two sides and asks for the third: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The length of the brace is left out, but there is no calculation, rate or pair of totals. It is a length on a triangle with a square corner.' },
    wouldChange: 'If the problem gave the rectangle’s area and its width and asked for its height, there would be no triangle, and it would be {a:M1.unknown}.' },

  { id: 'gt-coins', use: 'drill', tier: 'clean', setting: 'home', topic: 'two sorts of coin in a jar',
    text: 'Rafa’s jar holds only 20-cent coins and 50-cent coins. There are 18 coins and they are worth $6.30 in all. How many coins of each kind are in the jar?',
    route: { M1: ['unknown'] },
    cues: { M1: ['There are 18 coins and they are worth $6.30 in all', 'How many coins of each kind are in the jar?'] },
    reason: { M1: 'You are not told how many coins of each sort. You are given a count of coins and their total value, and both have to come out right: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The question says “how many”, and there are two sorts of coin. But nothing is a choice: two facts fix exactly one answer.' } }
]);
