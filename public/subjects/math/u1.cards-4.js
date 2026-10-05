// Basic Math, Unit One, part four: the fourth kind (counting ways, and chance), its two look-alike pairs, and the
// wrong idea that "how many" means counting.

FC.cards('math', 'u1', [

  /* ---------- The fourth kind: counting ways, and chance ---------- */
  { id: 'meet-chance', kind: 'meet', family: 'chance',
    link: 'The first three kinds use numbers to split, to fit or to follow. The fourth kind uses numbers to count the different ways something can turn out.',
    case: 'gt-outfits', mark: 'M1',
    strip: [
      'There is something that can turn out in different ways: an outfit.',
      'It is made by several separate choices: a top, a pair of trousers and a pair of shoes, each chosen from its own list.',
      'The question is how many different results there are: how many different outfits.',
      'Nothing is measured, nothing changes as time passes, and no calculation has a number missing. The question counts possibilities.'
    ],
    explain: [
      'What you are shown is a set of choices and a question about how many different results they give. No number is hidden for a calculation to fit, and no amount is followed through time. The problem is about the choices themselves: how many different outfits there are, not what any one of them costs or weighs.',
      'The wording for this kind has two halves. The first is counting ways: how many different results there are when you choose, pick or order things. The second is chance: how likely it is that something happens, or that a test result can be trusted. They sit together because a chance is a share of the ways something can turn out. Zara’s problem is the counting half.',
      'Notice that the problem asks “how many”, and so do problems of every kind in this unit: how many chairs, how many kilometres, how many days. What marks this kind is not those words. It is that what you are counting is the different results of a choice.'
    ],
    feature: { step: 'M1', option: 'chance' },
    name: 'The answer, and so the name of this kind of problem, is {a:M1.chance}. “Turn out” means end up, as a result of choices or of luck. Counting the ways is one half of the kind, and how likely something is, is the other.' },

  { id: 'again-chance', kind: 'again', family: 'chance',
    link: 'The packing gave you what to point to: {needs:chance}. Here is the other half of the kind, in a factory, where nothing is counted and a chance is asked for.',
    first: 'gt-outfits', second: 'gt-flagged', step: 'M1',
    instruction: 'Find what the two problems share. Ignore the story (a trip, a factory) and ignore whether the question counts or asks for a chance. Look at one thing only: which words show what the problem asks you to work out about the different ways something can turn out?',
    prompt: { kind: 'phrase', answer: 'How likely is it that the part is really faulty?' },
    shared: [
      'Both problems are about something that can turn out in different ways, and both ask a question about those ways. Zara’s question counts them: how many different outfits. The factory question asks how likely one of them is: how likely it is that a flagged part is really faulty.',
      'Counting and chance are the two halves of this kind, and they belong together because a chance is a share of the ways something can turn out. In neither problem is a number hidden to fit a calculation, nothing is followed as time passes, and nothing is measured on a shape. That is what {a:M1.chance} names.'
    ] },

  { id: 'portrait-chance', kind: 'portrait', family: 'chance',
    link: 'You know what to point to for {a:M1.chance}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Something can turn out in more than one way: an outfit, a team, a lock code, a test result, the weather on a given day.',
      'The question is either how many different results there are, or how likely a particular result is.',
      'The numbers are counts of choices (5 tops, 4 pairs of trousers), or chances written as percentages or as “1 in 500”, or both.',
      'The words you hear are “how many different”, “in how many ways”, “what are the chances”, “how likely”, “at least one”, “if the test says yes”.',
      'Nothing needs a ruler, and nothing needs to be watched over time.'
    ],
    not: [
      'Counting things is not counting ways. “How many chairs are in the hall?” counts things you can see, and is not about choices.',
      'And a percentage in the problem does not make it this kind. A price that rises 4% a year has a percentage in it, and it follows one amount through time. What marks this kind is a question about different results, or about how likely one of them is.'
    ],
    wild: ['"How many different lunches can you make?"', '"What are the chances?"', '"How likely is it that at least one will fail?"', '"If the test says yes, how sure can we be?"', '"One in five."'],
    self: 'In your own life it is picking a team, building a meal from a menu, setting a code, reading a weather forecast, reading the result of a medical test, or hearing “one in a million”.',
    ask: '"What can turn out in different ways here, and am I asked to count the ways or to say how likely one of them is?" If you can answer, you are probably looking at this kind.' },

  { id: 'check-chance', kind: 'check', after: 'chance',
    case: 'gt-trains',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth', 'chance'] } },

  /* ---------- The look-alike pairs ---------- */
  { id: 'look-whole-chance', kind: 'lookalike', ledger: 'whole~chance',
    link: 'The first kind and the fourth are both made of whole counts, and both can ask “in how many different ways”. This card puts them side by side.',
    cases: ['gt-photo-rows', 'gt-photo-order'],
    instruction: 'Both problems are about Hana and a photo of friends. Compare one thing: is the question about cutting a count into equal piles, or about the different results of a choice?',
    prompt: { kind: 'which', option: 'M1.chance', answer: 'gt-photo-order' },
    difference: [
      'In Case A the 24 friends are one fixed group, and the question is about how the number 24 splits into equal rows. The number of rows and the number of people in each row are what is asked. The answer is {a:M1.whole}.',
      'In Case B nothing is being split. The question is about the different results of a choice: who stands first, who second, and so on. Each different order is a different result. The answer is {a:M1.chance}.',
      'Both are about friends in rows, and both ask “in how many different ways”. What differs is what is counted. In Case A you count the ways a number splits. In Case B you count the ways a choice can come out.'
    ] },

  { id: 'look-unknown-chance', kind: 'lookalike', ledger: 'unknown~chance',
    link: 'One more pair: the second kind and the fourth both can ask “how many”, and both can give numbers about two sorts of the same thing.',
    cases: ['gt-bake-totals', 'gt-bake-plates'],
    instruction: 'Both problems are about muffins and cookies at Dana’s bake sale. Compare one thing: do the facts fix exactly one answer that has to fit, or does the question count the results of a choice?',
    prompt: { kind: 'which', option: 'M1.chance', answer: 'gt-bake-plates' },
    difference: [
      'In Case A the question is “how many of each”, and it has exactly one answer, because two facts fix it: 20 items in all and €50 in all. Nothing is a choice. There is one number of muffins and one number of cookies that fits, and the problem asks for them. The answer is {a:M1.unknown}.',
      'In Case B the question is “how many different plates”, and the answer is a count of choices: each plate is one muffin out of 4 sorts and one cookie out of 3. Nothing has to fit a result. The answer is {a:M1.chance}.',
      'Both ask “how many”, and both are about muffins and cookies. In Case A, “how many” asks for the numbers of two things the problem does not tell you. In Case B it asks how many different results a choice has.'
    ] },

  /* ---------- A wrong idea: "how many" means counting ---------- */
  { id: 'refute-howmany', kind: 'refute', about: 'M1',
    h: 'A wrong idea: “how many” means you are counting',
    link: 'The bake sale had “how many” in both cases, and the lens said that all five kinds can ask it. People still treat the words as a signal, and now that you have met all five kinds you can see what that costs.',
    idea: '"It says how many, so it is a counting problem."',
    verdict: 'This is wrong.',
    right: [
      'The words “how many” turn up in all five kinds. “How many ways can the chairs be set out in equal rows?” is about how a number splits. “How many pens and how many notebooks?” asks for two numbers that two totals fix. “How many days until the barrel holds 100 litres?” follows an amount through time. “How many times more water does the larger tank hold?” asks for a volume. Only “how many different outfits” counts the results of a choice.',
      'So when you see “how many”, do not stop at the words. Ask what is being counted. If it is the different results of a choice, or how likely one of them is, the answer is {a:M1.chance}. If it is anything else, the first question decides, and it asks about the whole problem and not about two words: {q:M1}'
    ],
    testedBy: ['gt-claim-howmany'] }
]);
