// Basic Math, Unit One: drill items that are not stories. Reverse items (first stage) and faulty claims (last stage).
// A reverse item gives the kind and asks what you would expect to hear or find. Every option is what one of the five
// kinds sounds like; voice says which. In a gate unit a reverse item carries the family in `outcome`.
// A claim is something a person might say. ask is { type: 'option', step, answer }: the key's question, asked of what
// the claim describes. (A claim's ask of type `missing` takes a name, and a gate unit has no names of that kind.)
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('math', 'u1', [

  /* ---------- reverse items: one for each kind ---------- */
  { id: 'gt-rev-whole', use: 'drill', kind: 'reverse', outcome: 'whole', expect: 'hear',
    options: [
      { text: '"Can the 56 chairs be set out in equal rows with none left over?"', voice: 'whole' },
      { text: '"The bill came to $48 and every unit costs $2: how many units was it?"', voice: 'unknown' },
      { text: '"The pond rises by 3 cm every day: when will it reach 40 cm?"', voice: 'growth' },
      { text: '"How many different teams of three can we pick?"', voice: 'chance' },
      { text: '"How long is the wire from the top of the pole to the peg?"', voice: 'shape' }
    ],
    why: 'It asks whether 56 chairs can be set out in even rows with none left over. Nothing is hidden for a calculation to fit, nothing changes as time passes, and there is no choice and no shape.' },

  { id: 'gt-rev-unknown', use: 'drill', kind: 'reverse', outcome: 'unknown', expect: 'find',
    options: [
      { text: 'The two buses meet again after a number of minutes that you are asked for.', voice: 'whole' },
      { text: 'The shop charged a fixed fee plus a price for each item, and the total on the receipt is all you are told.', voice: 'unknown' },
      { text: 'The balance goes up by the same sum every month.', voice: 'growth' },
      { text: 'There are 5 starters and 4 mains to choose from.', voice: 'chance' },
      { text: 'A ramp meets the ground at a square corner.', voice: 'shape' }
    ],
    why: 'That detail gives a calculation made of numbers you are told, and a result, and it leaves one number out. Nothing is followed as time passes, and there is no triangle, no choice and no loop of days.' },

  { id: 'gt-rev-growth', use: 'drill', kind: 'reverse', outcome: 'growth', expect: 'hear',
    options: [
      { text: '"If I share 31 candies among 4 children, how many are left?"', voice: 'whole' },
      { text: '"Two numbers add up to 9 and differ by 3: what are they?"', voice: 'unknown' },
      { text: '"It was $200 in January and goes up by $20 every month."', voice: 'growth' },
      { text: '"How likely is it that at least one of the three fuses fails?"', voice: 'chance' },
      { text: '"The model is 1 to 25: how long is the real thing?"', voice: 'shape' }
    ],
    why: 'It follows one amount, a price, and says how it changes each month. The question that would come with it is where the price will be, or how long until it reaches a target.' },

  { id: 'gt-rev-chance', use: 'drill', kind: 'reverse', outcome: 'chance', expect: 'find',
    options: [
      { text: 'A number of whole things, and a question about equal groups with none left over.', voice: 'whole' },
      { text: 'Two totals and a question about how many of each.', voice: 'unknown' },
      { text: 'An amount that doubles every year.', voice: 'growth' },
      { text: 'Three separate choices, each from its own list, and a question about how many different results there are.', voice: 'chance' },
      { text: 'Two floors of exactly the same shape.', voice: 'shape' }
    ],
    why: 'That detail is a set of choices made from separate lists, and the question counts the different results. The answer for a question like that, or for one that asks how likely a result is, is {a:M1.chance}.' },

  { id: 'gt-rev-shape', use: 'drill', kind: 'reverse', outcome: 'shape', expect: 'hear',
    options: [
      { text: '"Is there any way to share 29 candies into equal bags?"', voice: 'whole' },
      { text: '"Paint covers 12 square meters for each liter: how much for this wall?"', voice: 'unknown' },
      { text: '"It loses 5% of its value every year: what is it worth in 4 years?"', voice: 'growth' },
      { text: '"What are the chances that the test is right?"', voice: 'chance' },
      { text: '"Their pizza is the same shape as ours but twice as wide: how much more does it hold?"', voice: 'shape' }
    ],
    why: 'It compares two things of exactly the same shape at different sizes, and asks how much more one holds than the other. That is a question about an area or a volume.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'gt-claim-demo', use: 'claim',
    text: '"A bank lends Mia $5,000 and charges 6% interest each year, and the problem asks what she will owe after 3 years. It is about a bank, so it is a money problem, and I put it with the budget problems."',
    ask: { type: 'option', step: 'M1', answer: 'growth' },
    fault: 'The claim sorts the problem by its topic. A bank is the story, and the story does not decide the kind. What the problem asks is what one amount, what Mia owes, will be after 3 years, and the amount changes each year.',
    corrected: 'A bank lends Mia $5,000 and charges 6% interest each year, and the problem asks what she will owe after 3 years. The topic is money, and money problems turn up in all five kinds. What decides this one is that it follows one amount as years pass: {a:M1.growth}.' },

  { id: 'gt-claim-howmany', use: 'claim',
    text: '"The school play sold 30 tickets for $210 in all: adult tickets at $8 and child tickets at $5. The problem asks how many of each. It says how many, so this is a counting problem."',
    ask: { type: 'option', step: 'M1', answer: 'unknown' },
    fault: 'The claim takes “how many” as a signal that something is being counted. But every kind asks it. This problem does not give the adult tickets or the child tickets. It gives a count and a total for the two together, 30 tickets and $210, and both have to come out right. Nothing is a choice.',
    corrected: 'The school play sold 30 tickets for $210 in all, adult tickets at $8 and child tickets at $5, and the problem asks how many of each. Here “how many” asks for two numbers the problem does not tell you, and two facts fix them. The answer is {a:M1.unknown}. It would be {a:M1.chance} only if the question counted the different results of a choice.' },

  { id: 'gt-claim-numbers', use: 'claim',
    text: '"One bus leaves the station every 25 minutes and another every 40 minutes. They have just left together, and the problem asks when they next leave together. It has two numbers, so I divide 40 by 25."',
    ask: { type: 'option', step: 'M1', answer: 'whole' },
    fault: 'The claim chooses what to do from the numbers: two numbers, so divide. But what the problem asks is when the two buses next leave at the same moment, and dividing one number by the other does not answer that. Two numbers could be anything: a rate, the sides of a triangle, two lists to choose from.',
    corrected: 'One bus leaves every 25 minutes and another every 40, and the problem asks when they next leave together. There are two things that repeat, and the question is when they meet. The answer is {a:M1.whole}, and the numbers alone could not have said so.' },

  { id: 'gt-claim-hourly', use: 'claim',
    text: '"A locksmith charges a $30 call-out fee plus $25 for every hour. The bill came to $105, and the problem asks how many hours. There is a fee, a price and a bill, just like the van hire, so it is a missing number problem."',
    ask: { type: 'option', step: 'M1', answer: 'growth' },
    fault: 'The claim matches this problem to the van hire because the two have the same parts: a fee, a price and a bill. But the van hire’s price went with every kilometer, and this price goes with every hour. A price for each hour makes the bill an amount that grows as time passes, and that case goes to the third kind.',
    corrected: 'A locksmith charges a $30 call-out fee plus $25 for every hour, the bill came to $105, and the problem asks how many hours. The price goes with each hour, so the bill is an amount growing as time passes, and the question is how long until it reaches a target. The answer is {a:M1.growth}.' },

  { id: 'gt-claim-model', use: 'claim',
    text: '"A model of a sailing ship is built at a scale of 1 to 20, and its mast is 45 cm tall. The problem asks how tall the real mast is. A scale is a rate, so this is a missing number problem."',
    ask: { type: 'option', step: 'M1', answer: 'shape' },
    fault: 'The claim is right that a scale is a rate. But the model and the real ship are exactly the same shape at different sizes, and when a problem shows both a rate and a copy, the answer is the copy.',
    corrected: 'A model of a sailing ship is built at a scale of 1 to 20, and its mast is 45 cm tall. The model and the real ship are exactly the same shape at different sizes, and the problem asks for a length on the real one. The answer is {a:M1.shape}, and the rate is only how the two sizes compare.' }
]);
