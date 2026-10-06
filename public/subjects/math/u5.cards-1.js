// Basic Math, Unit Five, part one: the opening card, and the first kind (several choices, each from its own list).
// A quick lesson (lesson standard section 19). Unit Five is a procedure unit (kind 'P', lesson standard A12): each kind of problem gets
// one meet card, one check and one worked example with real numbers. The key has one question here, and each of its five answers leads
// to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// and the stem of every commit prompt.
// The worked examples (kind solved) are in u5.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u5', [

  { id: 'orient-chance', kind: 'orient',
    h: 'Five kinds of problem about counting and chance, and a procedure for each',
    canDo: 'After this unit you can take a problem that asks how many different ways something can turn out, or how likely it is, say which of five kinds it is, and solve it with the steps for that kind.',
    everyday: [
      'Picture the committee of a town fair, with five questions to settle in one afternoon, all of them about counting or about chance. “The phone stall sells cases in 4 colors and 3 styles: how many different cases is that?” “Eight children run the final race, and medals go to the first three: in how many different ways can the medals be given out?” “The quiz team has 4 places and 9 people have asked to be on it: how many different teams could we pick?” “Each of the three outdoor stalls has a 20% chance of being rained off: how likely is it that at least one of them is?” And the first-aid tent asks: “A quick health test has come back positive: how likely is it that the person really has the illness?”',
      'The first question, which Unit One taught, gives the same answer to all five: {a:M1.chance}. But they are five different questions, each with its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. Take 9 things and 4 picks. Depending on how the picks are made, the count of different results can be 6,561, or 3,024, or 126. So first work out what is being counted, or what chance is wanted, and only then solve it.'
    ],
    add: [
      'Four words mean one thing each in this unit. A result is one complete way something can turn out: one particular phone case, one particular team. A list is everything that one choice can be, such as the 3 styles of case. A pick is one thing taken from a list or a group. And a chance is a number that says how likely something is: 0 means it cannot happen, 1 means it is certain, and 0.2, which is the same as 20%, means 1 time in every 5. Many books say probability for what this unit calls a chance.'
    ],
    map: { branch: 'chance' } },

  { id: 'meet-multprin', kind: 'meet', outcome: 'multprin',
    link: 'The first kind of problem is the simplest counting there is: several choices have to be made, and each choice is made from a list of its own.',
    case: 'm5-wd-cases', mark: 'C1',
    strip: [
      'There are two separate choices to make: a color, and a style.',
      'Each choice has a list of its own: 4 colors and 3 styles. Picking a color uses up none of the styles, and picking a style uses up none of the colors.',
      'The question asks how many different cases there can be, a count of complete results.'
    ],
    explain: [
      'A result here is one whole case, such as “red, ridged”. To see how many there are, write them out. For black there are 3 cases: black plain, black ridged and black clear. Red goes with the same 3 styles, which gives 3 more cases, and blue and green give 3 each. Four colors with 3 cases each is 4 × 3 = 12 different cases.',
      'That is why this kind is multiplication and not addition. Every color can be put with every style, so each of the 4 colors is repeated 3 times, once for each style. The count of results is the count of the first list multiplied by the count of the second.',
      'What makes this kind is that each choice is made from its own full list. Whatever color was chosen, the list of styles is still plain, ridged and clear. Having two numbers to multiply, 4 and 3, is not enough: other kinds of problem have them too.'
    ],
    feature: { step: 'C1', option: 'lists' },
    name: 'A problem like this is {o:multprin}. The “choices” are the separate picks, one from each list, and “multiplying” is what the count needs: the sizes of the lists multiplied together.' },

  { id: 'check-multprin', kind: 'check', after: 'multprin',
    case: 'm5-wd-bowl',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that each choice is made from its own list? Tap them.',
           answer: 'picks one of 5 ball weights and one of 8 shoe sizes' } }
]);
