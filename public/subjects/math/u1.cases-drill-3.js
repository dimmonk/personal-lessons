// Basic Math, Unit One: the faulty claims of the drill (last stage). The first is worked for the learner; two more are asked,
// on the two mistakes that matter most: sorting by the words "how many", and sorting by the numbers.
// A claim is something a person might say. ask is { type: 'option', step, answer }: the key's question, asked of what
// the claim describes. (A claim's ask of type `missing` takes a name, and a gate unit has no names of that kind.)
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('math', 'u1', [

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
]);
