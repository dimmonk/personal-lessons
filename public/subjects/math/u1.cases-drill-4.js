// Basic Math, Unit One: drill problems, second stage continued (the problems whose story misleads). Field guide: see
// u1.cases-drill-1.js and u1.cases-drill-2.js. Every one of these is a route-stage problem: each is built so that the most
// noticeable thing in the story, a price, a clock, a formula, points to a different kind than the one the question settles.

FC.cases('math', 'u1', [

  /* ---------- misleading: the most noticeable thing in the story is not what decides it ---------- */
  { id: 'gt-groomer', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a dog groomer paid by the hour', echo: 'gt-van',
    also: ['unknown'],
    text: 'A dog groomer charges a $10 booking fee plus $18 for every hour of work. Joss paid $64 for his dog. How many hours did the groomer work?',
    route: { M1: ['growth'] },
    cues: { M1: ['$18 for every hour of work', 'How many hours did the groomer work?'] },
    reason: { M1: 'The problem has a fixed fee, a price that is repeated and a result, like the van hire. But the price goes with every hour, so the bill is an amount that grows as time passes, and the question asks how long it takes to reach a target: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The fee, the price and the bill all point to a hidden number, and the problem does show that. But when a price goes with each hour, the answer is {a:M1.growth}.' },
    miss: { unknown: 'The problem does show a fixed fee, a price and a result, as the van hire did. The difference is what the price goes with: every kilometer there, every hour here. A price for each hour is an amount changing as time passes.' } },

  { id: 'gt-planhouse', use: 'drill', tier: 'misleading', setting: 'building', topic: 'a house plan drawn to scale', echo: 'gt-van',
    also: ['unknown'],
    text: 'An architect draws a plan of a house so that every 1 cm on the plan stands for 50 cm in the house. The living room is 14 cm long on the plan. How long is the real living room?',
    route: { M1: ['shape'] },
    cues: { M1: ['every 1 cm on the plan stands for 50 cm in the house', 'How long is the real living room?'] },
    reason: { M1: 'The plan and the house are exactly the same shape at different sizes: {cue:M1}. The rate is only how their sizes compare, and the question asks for a length on the real one.' },
    not: { outcome: 'unknown', why: 'The problem gives a rate, 1 cm for 50 cm, and a number to scale it to, and one number is left out. That is what the second kind looks like. But a plan is a copy of the house at another size, and when a problem shows both, the answer is {a:M1.shape}.' },
    miss: { unknown: 'The problem does give a rate and leave a number out, as the van hire did. The difference is what the rate is a rate of: here it compares a plan with the house it shows, two things of exactly the same shape at different sizes.' } },

  { id: 'gt-ferry', use: 'drill', tier: 'misleading', setting: 'travel', topic: 'a ferry carried downstream', echo: 'gt-van',
    also: ['unknown'],
    text: 'A ferry crosses a river 80 m wide, and the current carries it 60 m downstream while it crosses. The ferry company charges $2 for each meter of distance traveled. How far does the ferry travel?',
    route: { M1: ['shape'] },
    cues: { M1: ['crosses a river 80 m wide, and the current carries it 60 m downstream', 'How far does the ferry travel?'] },
    reason: { M1: 'The crossing and the drift downstream meet at a square corner, and the path of the ferry is the third side of the {t:righttriangle} they make: {cue:M1}. The price for each meter is not what the question asks about.' },
    not: { outcome: 'unknown', why: 'The price for each meter is a rate, and a number is left out, which is what the second kind looks like. But the question asks for a length on a triangle with a square corner, and not for a cost.' },
    wouldChange: 'If the problem asked what the company charges for the crossing, given the distance traveled, it would be a plain sum, and there would be nothing to sort.' },

  { id: 'gt-tapclock', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a tap filling a bucket, and the clock', echo: 'gt-shrub',
    also: ['growth'],
    text: 'A dripping tap fills a bucket by 1 liter every hour. It starts at 9 o’clock in the morning, and the bucket holds 50 liters. What time will the clock show when the bucket is full?',
    route: { M1: ['whole'] },
    cues: { M1: ['fills a bucket by 1 liter every hour', 'What time will the clock show when the bucket is full?'] },
    reason: { M1: 'The bucket does fill by the same number every hour, but the question asks what time the clock shows: {cue:M1}. A clock goes round a loop of 12 hours, so the problem asks where a count of 50 hours ends on that loop.' },
    not: { outcome: 'growth', why: 'The liters in the bucket go up by the same number each hour, and that is what the third kind follows. But the question is not how many liters or how long: it is a time on a clock, and a loop of hours goes to the first kind.' } }
]);
