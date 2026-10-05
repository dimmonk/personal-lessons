// Basic Math, Unit Two, part one: the opening card, and the first kind (testing whether one number splits evenly).
// Unit Two is the first procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a
// problem of the kind, two worked examples with real numbers, and problems the learner finishes. The key has one question here,
// and each of its six answers leads to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// The worked examples (kind solved) are in u2.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u2', [

  { id: 'orient-whole', kind: 'orient',
    h: 'Six kinds of problem about whole numbers, and a procedure for each',
    canDo: 'After this unit you can take a problem about whole numbers, such as whether 67 singers can stand in equal rows, when two buses arrive together again, or what day of the week it will be in 50 days, say which of six kinds it is, and then solve it with the procedure for that kind. You will see every number worked out, you will be told why each step is done, and you will work problems yourself.',
    everyday: [
      'Picture the planning of a school fair, with five questions coming up in one afternoon, every one of them about whole numbers. “We have 67 volunteers: can they stand in equal rows?” “These two ribbons, 60 cm and 84 cm long, are to be cut into pieces that are all the same length, with none left over: how long can each piece be at most?” “One stall restocks every 20 minutes and the other every 30 minutes: when do they restock together?” “There are 50 sweets for 7 children: how many are left over?” And one child with a calculator asks: “Can the number that multiplies by itself to give 2 ever be written down exactly?”',
      'The key’s first question, which Unit One taught, gives the same answer to all five: {a:M1.whole}. But they are five different questions about whole numbers, and a sixth, what a number is made of, belongs with them. Each has its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. So in this unit the order is always the same: first work out what the problem wants to know about its numbers, and only then solve it.'
    ],
    add: [
      'Unit One only sorted problems. This is the first unit in which you solve them, so three words need to be exact. A procedure is the fixed set of steps that solves one kind of problem, and it gives the right answer whatever the numbers are. The arithmetic, the dividing and the multiplying, can be done on a calculator: what this unit practises is which steps to take, and why. The working is the procedure carried out on one problem, with every number written down. A step is one stage of the working, and each step is named by what it is for.',
      'Each kind is taught the same way. First a problem of the kind, and the idea behind its procedure. Then two worked problems, in different parts of life, with every step computed and the reason for every step given; on one step in each, the reason is held back until you have chosen it. Then problems that you finish yourself. When all six kinds have been taught, the key’s question that tells them apart gets its own card, and then the drill mixes all six.'
    ],
    map: { branch: 'whole' } },

  /* ---------- A word the first kind leans on ---------- */
  { id: 'term-prime', kind: 'term', term: 'prime',
    h: 'A number that will not split',
    link: 'The first kind of problem is about a word you may or may not know: prime. Here it is first, in a situation you can hold in your hands.',
    case: 'wd-squads',
    plain: [
      'Twelve players can be made into teams in four different ways, because 12 can be shared out evenly by 2, by 3, by 4 and by 6. Thirteen players can only be made into one big team or into thirteen teams of one. No whole number between 1 and 13 shares 13 out evenly.',
      'Whole numbers like 13, which nothing shares out evenly except 1 and themselves, are the building blocks that every other whole number is made from. 12 is built from 2, 2 and 3. The first few of them are 2, 3, 5, 7, 11 and 13. The number 1 is left out on purpose: the building blocks start at 2.'
    ],
    after: [
      'Two things are worth holding on to. The number 2 is the only even one: every other even number can be shared out by 2, so it has a second way of being split. And a number that is not on the list, such as 12, can always be built by multiplying numbers that are: 12 = 2 × 2 × 3. The procedures in this unit start from that.'
    ] },

  /* ---------- The first kind: testing whether one number splits ---------- */
  { id: 'meet-prime', kind: 'meet', outcome: 'prime',
    link: 'The first kind of problem starts from a question that looks too simple to need a procedure: can one number be shared out in equal groups at all?',
    case: 'wd-apples', mark: 'W1',
    strip: [
      'There is one whole number to work with: 59, a count of apples. You cannot have half an apple in a bag.',
      'The seller has one rule: equal bags, with more than one bag and more than one apple in each bag.',
      'The question is a yes or a no: is any packing of that kind possible at all?',
      'Nothing is asked about a price, a time or a shape, and nothing is hidden for a calculation to fit.'
    ],
    explain: [
      'What you are shown is a single whole number and one question about it. The seller does not ask what the bags would be like, or how many. She only needs to know whether any packing works.',
      'There is a way to find out, and it is a procedure: a fixed set of steps that gives the right answer every time, whatever the number. You could try every smaller number one by one, but for a big number that is very long. The procedure in this unit is shorter and just as certain: it tests only a short list of small numbers, and when you see it carried out, every division is written down, so nothing is hidden.',
      'Notice what decides the kind. It is not that 59 is odd, or small. It is that the question asks only whether the number splits at all. The same number could turn up in a problem that asks for every way it splits, or for what it is made of. Those are different kinds, with a different procedure, and you will meet that pair side by side in this unit.'
    ],
    feature: { step: 'W1', option: 'split' },
    name: 'A problem like this is {o:prime}. The word “check” is meant exactly: the procedure checks one number against the small numbers that could share it out. If it finds a fit, the number can be split. If it finds none, the number is a {t:prime}, and cannot.' },

  { id: 'again-prime', kind: 'again', outcome: 'prime',
    link: 'The apples gave you what to point to: {needs:prime}. Here is a second problem with a different story, a drama group instead of apples.',
    first: 'wd-apples', second: 'wd-drama', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (apples, a drama group) and ignore the numbers. Look at one thing only: which words say what has to be true of the groups?',
    prompt: { kind: 'phrase', answer: 'divide them into equal teams, with more than one team and more than one member in each team' },
    shared: [
      'Both problems give one whole number, 59 apples and 47 members, and ask whether it can be shared out in equal groups with more than one group and more than one in each. In neither is anything else asked: no price, no time passing, no shape.',
      'That is all you point to, and it is why one name covers a market stall and a drama group. The story differs. What is asked about the number is the same.'
    ] },

  { id: 'lens-procedure', kind: 'lens',
    h: 'Story and structure, now that there is something to solve',
    link: 'The last card asked you to ignore the story and look at the question. That holds for every card from here on, and this card says it once, now that there is a procedure to carry out.',
    body: [
      'Every problem in this unit has two layers, as in Unit One. The top layer is the story: apples, a drama group, a ribbon, a bus. Under it is what the problem wants to know about its numbers, and that is what decides the kind and so the procedure.',
      'There is one new thing. Once the kind is chosen, you carry out its procedure on the numbers, and the numbers do change the working: a bigger number may need more divisions, and some numbers finish early. So in this unit you will see the same kind of problem with different numbers, and the steps will always be the same steps, with different working in them.',
      'Two things change on purpose from card to card: the words of the question (“is it possible”, “how many”, “how long”, “what is left”) and the setting. None of them tells you the kind. Only what is asked about the numbers does.'
    ],
    fixed: ['the question the key asks of every problem in this unit: {q:W1}'],
    varies: ['the story', 'the people', 'the size of the numbers', 'how many numbers the problem gives', 'the words of the question (“is it possible”, “how many”, “how long”)'] },

  { id: 'portrait-prime', kind: 'portrait', outcome: 'prime',
    link: 'You know what to point to for {o:prime}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One whole number, of any size you might meet on a ticket, a label or a count of things: 51, 67, 119.',
      'A yes-or-no question: can it be shared out in equal groups, rows, teams or packs, with more than one group and more than one in each?',
      'The answer is a verdict, and when the verdict is no, the working also shows one way the number does split.',
      'Often the word “prime” is not in the problem at all. Most problems of this kind ask about equal rows or equal teams.'
    ],
    not: [
      'One number is not enough. A problem that gives one number and asks what it is made of, or every way it splits, is a different kind, because its answer is more than yes or no. You will meet that pair side by side in this unit.',
      'And an odd-looking or big number does not make a problem a different kind. 143 and 59 are asked about in the same way.'
    ],
    wild: ['"Can we split them into equal teams?"', '"Will they fit in even rows?"', '"Is it a prime?"', '"Does it divide up evenly, or are we stuck with one big group?"'],
    self: 'In your own life you meet this when you try to arrange a group in even rows or teams, when you try to pack things into identical boxes, and whenever someone asks whether a number “works” for sharing out fairly. Ticket numbers, seat counts and stock counts are the same question.',
    ask: '"Is there one whole number, and does the problem ask only whether it can be shared out in equal groups, with more than one group and more than one in each?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-prime', kind: 'check', after: 'prime',
    case: 'wd-tour',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks only whether one number can be shared out in equal groups? Tap them.',
           answer: 'split them into equal groups, with more than one group and more than one visitor in each group' } },

  /* ---------- A word the procedure leans on ---------- */
  { id: 'term-sqroot', kind: 'term', term: 'sqroot',
    h: 'The number that multiplies by itself',
    link: 'The procedure for this first kind stops testing at a particular point, and it needs one more word to say where. Here is the word, in a situation you can hold in your hands.',
    case: 'wd-patio',
    plain: [
      'The number of slabs along one side of the patio is the number that, multiplied by itself, gives the total: 6 × 6 = 36. A mathematician writes that as √36 = 6, with a sign that looks like a tick followed by a roof.',
      'Most numbers have no whole number that multiplies by itself to give them. 50 slabs cannot be laid as a square: 7 × 7 = 49 is one slab short, and 8 × 8 = 64 is too many. All that can be said is that the side of a square of 50 slabs is somewhere between 7 and 8 slabs, and a calculator will give how far between: about 7.07.'
    ],
    after: [
      'Finding the two whole numbers whose products with themselves sit either side of a number, as 49 and 64 sit either side of 50, is the part of this word that you will do by hand. It tells you which whole number the root is just above, and so where testing can stop.'
    ] },

  { id: 'check-prime-last', kind: 'check', after: 'prime', case: 'ck-prime-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-prime-whole', kind: 'check', after: 'prime', case: 'ck-prime-whole', ask: { type: 'solve', solve: 'whole' } }
]);
