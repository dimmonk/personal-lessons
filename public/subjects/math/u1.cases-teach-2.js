// Basic Math, Unit One: problems shown inside cards, part two (the fourth and fifth kinds).
// Field guide: see u1.cases-teach-1.js.

FC.cases('math', 'u1', [

  /* ---------- The fourth kind: counting ways, and chance ---------- */
  { id: 'gt-outfits', use: 'teach', tier: 'clean', setting: 'travel', topic: 'outfits packed for a trip', name: 'The packing',
    text: 'Zara is packing for a trip. She will wear one top, one pair of pants and one pair of shoes. She has 5 tops, 4 pairs of pants and 3 pairs of shoes. How many different outfits can she make?',
    route: { M1: ['chance'] },
    cues: { M1: ['one top, one pair of pants and one pair of shoes', 'How many different outfits can she make?'] } },

  { id: 'gt-flagged', use: 'teach', tier: 'clean', setting: 'work', topic: 'a machine that flags faulty parts', name: 'The flagged part',
    text: 'A factory machine flags faulty parts. One part in 500 is faulty. The machine flags 95 of every 100 faulty parts, and also flags 3 of every 100 good parts. A part has just been flagged. How likely is it that the part is really faulty?',
    route: { M1: ['chance'] },
    cues: { M1: ['One part in 500 is faulty', 'How likely is it that the part is really faulty?'] },
    segments: [
      { text: 'A factory machine flags faulty parts', note: 'That is the setting. It does not say what the problem asks you to work out.' },
      { text: 'One part in 500 is faulty', note: 'That is one of the chances the problem gives. You are asked for the words that show what is to be worked out, and that is in the last sentence.' },
      { text: 'The machine flags 95 of every 100 faulty parts, and also flags 3 of every 100 good parts', note: 'Those are two more chances the problem gives. They are facts to work with, and they are not the question.' },
      { text: 'A part has just been flagged', note: 'That tells you what has happened. The question is what to make of it, and that comes next.' },
      { text: 'How likely is it that the part is really faulty?' }
    ] },

  { id: 'gt-trains', use: 'check', tier: 'clean', setting: 'travel', topic: 'trains that may be canceled',
    text: 'Three trains connect Eli’s village to the city. Each one is canceled one day in ten, whatever the others do. On any day, how likely is it that at least one of the three is canceled?',
    route: { M1: ['chance'] },
    cues: { M1: ['Each one is canceled one day in ten', 'how likely is it that at least one of the three is canceled'] },
    reason: { M1: 'The problem gives a risk for every train and asks how likely it is that one or more is canceled: {cue:M1}. That is a question about how likely something is. Nothing is hidden for a calculation to fit, and nothing is followed as time passes, even though the trains run every day.' } },

  /* ---------- A word the fifth kind leans on ---------- */
  { id: 'gt-sheet', use: 'teach', tier: 'clean', setting: 'home', topic: 'a sheet of paper cut across', name: 'The sheet cut across',
    text: 'Take a sheet of paper and cut it along a straight line from one corner to the opposite corner. You get two pieces.' },

  /* ---------- The fifth kind: shapes ---------- */
  { id: 'gt-hike', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a hike north and then east', name: 'The hike',
    text: 'A hiker walks 9 km due north and then 12 km due east. How far in a straight line is she from where she started?',
    route: { M1: ['shape'] },
    cues: { M1: ['9 km due north and then 12 km due east', 'How far in a straight line is she from where she started?'] } },

  { id: 'gt-floor', use: 'teach', tier: 'clean', setting: 'building', topic: 'two floors of the same shape', name: 'The two floors',
    text: 'Ana’s bathroom floor measures 2 m across and has an area of 5 square meters. The hall floor is exactly the same shape, but 6 m across. What is the area of the hall floor?',
    route: { M1: ['shape'] },
    cues: { M1: ['exactly the same shape, but 6 m across', 'What is the area of the hall floor?'] },
    segments: [
      { text: 'Ana’s bathroom floor measures 2 m across and has an area of 5 square meters', note: 'That gives the first floor. It is one of the two things the problem compares, and the words that say the two are copies of each other come next.' },
      { text: 'The hall floor is exactly the same shape, but 6 m across' },
      { text: 'What is the area of the hall floor?', note: 'That is the question. It says what is to be worked out, an area. But the words that show which shape the problem is about are in the sentence before.' }
    ] },

  { id: 'gt-tanks', use: 'check', tier: 'clean', setting: 'building', topic: 'two water tanks of the same shape',
    text: 'A cube-shaped water tank measures 1 m along each edge. A second tank is exactly the same shape but 3 m along each edge. How many times more water does the larger tank hold?',
    route: { M1: ['shape'] },
    cues: { M1: ['exactly the same shape but 3 m along each edge', 'How many times more water does the larger tank hold?'] },
    segments: [
      { text: 'A cube-shaped water tank measures 1 m along each edge', note: 'That describes the first tank. The words that say there is a second tank, a copy of it, come next.' },
      { text: 'A second tank is exactly the same shape but 3 m along each edge' },
      { text: 'How many times more water does the larger tank hold?', note: 'That is the question, and it asks for a volume. It is not the words that show the two tanks are the same shape.' }
    ],
    reason: { M1: 'There are two things of exactly the same shape at different sizes: {cue:M1}. The question asks how many times more water the larger one holds, which is a volume. It is not a rate to scale, and nothing is followed as time passes.' } }
]);
