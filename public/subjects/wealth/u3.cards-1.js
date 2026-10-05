// Wealth Preservation, Unit Three, part one (first half): the opening card, the word "a holding", and the first answer: one holding
// that the person is free to sell and does not run. Cards are structured data, not HTML. A text field is one paragraph (a string)
// or several (an array of strings). Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the earlier question this unit leans on, the preview map, the heading of
// a meet card, "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit prompt,
// the heading of an again or portrait card, and, on a term card, the word and its meaning.

FC.cards('wealth', 'u3', [

  { id: 'w3-orient', kind: 'orient',
    h: 'One thing could take most of it: what can be done?',
    canDo: 'After this unit you can read a short account of someone’s money in which one thing is most of what they have, or could reach all of it, and say what that one thing is, what the person can do about it, and what to do. Sometimes the honest answer is that it is already looked after and nothing needs doing, and you will be able to say that too.',
    everyday: [
      'You have probably heard some version of these stories.',
      'A woman who has worked for one company for thirty years has most of her savings in its shares. “I know the place,” she says. “It has never let me down.”',
      'A man started a roofing firm twenty years ago. Everything he has is in it, and last year he borrowed against it to buy a lorry.',
      'A landlord has six flats and a shop, and every one is in his own name. A tenant has just fallen on the stairs of one of them.',
      'A couple have a house with a pool. Their insurance would pay up to half a million. A lawyer tells them a serious injury to a child can bring a demand for four times that.',
      'And two more, in which the same shape is there and nothing needs doing. A woman runs a brewery that is most of what she owns, and she has six years of spending in the bank, the rest of her money spread over funds, and nobody holding her shares as security for a loan. A man owes a small sum on a flat, at a rate fixed for fifteen years, and the bank cannot ask for the money back.',
      'In every one of these, the first question of the key finds the same thing: {a:D1.shock}. That answer says where to look. What you do about it depends on what the one thing is and what the person can do about it, and in the last two cases the honest answer is to leave it alone. This unit teaches you to tell the seven apart.'
    ],
    add: [
      'Every case in this unit begins with that first answer. The unit teaches the next question of the key, which asks what the one thing is and what can be done about it. It has seven answers, and each leads to one name. Six of the names say what to do. One says that nothing needs doing.',
      'Each name is taught with cases first. After every step you answer one question about a new case, and the answer and the reason are shown straight away.'
    ],
    map: { branch: 'shock' } },

  /* ---------- The word "a holding" ---------- */
  { id: 'w3-term-holding', kind: 'term', term: 'holding',
    h: 'One investment, and how much of everything it is',
    link: 'The key’s next question is about one thing that could take most of what a person has. Before it, one word, so that every case means the same thing by it.',
    case: 'w3-h-t-holding',
    plain: [
      'Joanna owns four things she could sell: shares in the water company (£30,000), a flat (£180,000), a quarter of her brother’s bakery (£40,000) and a pension fund (£60,000). Together that is £310,000.',
      'Each of the four is one investment: one company’s shares, one property, one business. The pension fund is one investment too, but inside it are about five hundred companies, so no one of them is much of it.',
      'What matters is how much of everything each one is. Divide its value by the total. The flat is £180,000 out of £310,000, which is 58%. The water shares are £30,000 out of £310,000, which is 10%. If the flat lost a third of its value, £60,000, Joanna would lose 19% of everything she has. If the water shares lost a third, £10,000, she would lose 3%. The same fall does about six times the harm to the one that is larger.',
      'The cases in this unit all have one investment that is a large part of everything, or something that could reach all of it.'
    ],
    after: 'One of these investments is {t:holding}. From here on, when a case says the holding, it means one company’s shares, one property or one business, and the question is how much of {t:pot} it is.' },

  /* ---------- First answer: one holding, free to sell, not run by the owner ---------- */
  { id: 'w3-meet-diversify', kind: 'meet', outcome: 'diversify',
    link: 'The key’s question has seven answers. The first is the plainest: one holding that is most of what the person has, and nothing in the way of doing something about it.',
    case: 'w3-h-div-1', mark: 'S1',
    strip: [
      'There is one person, Meena, and about £530,000: £420,000 in one company’s shares, and £110,000 in savings and a pension.',
      'The shares are most of it. The case says nothing about prices in general, a bill or a charge.',
      'Nothing stops her selling them: they can be sold on any day.',
      'She takes no part in running the company: she has never worked for it and has no say in how it is run.'
    ],
    explain: [
      'What you are shown is a shape: £420,000 out of £530,000, which is 79%, rests on one company. If the company does badly, most of what Meena has does badly with it, whatever the rest of the market is doing. If its price halves, she loses £210,000, which is 40% of everything she has. In {t:fund} that holds five hundred companies, the same loss would need companies in general to fall by 40%, because no one of them is much of it.',
      'Two facts about Meena decide what can be done about it, and the case gives both. She is free to sell, because nothing stops her. And she takes no part in running the company, so selling costs her no job and no say. When both are true, the plain remedy is to sell some of the shares and put the money into funds that hold many companies. If either fact were different, the answer would be a different one.',
      'The remedy has a shape, and it is a schedule: a fixed plan of sales on fixed dates, written down before the first sale. Meena could sell £105,000 of shares every three months for a year. That is four sales, and £105,000 × 4 is £420,000, so after a year nothing is left in the one company, and the money is in funds across hundreds of them.',
      'Why not sell everything today? Nobody knows which day is a good day to sell. One sale puts all £420,000 on one day’s price. Four sales put a quarter on each of four prices, some higher and some lower, so she is not betting everything on a single day. The aim is not to be rid of the company for ever. It is that no one company should be most of what she has.'
    ],
    feature: { step: 'S1', option: 'freeheld' },
    name: [
      'The key’s answer is {a:S1.freeheld}, and the name of what to do about it is {o:diversify}. “Sell down” means sell part, then more, in steps. “On a schedule” means the steps are planned in advance, with dates.',
      'The name is about what to do. It does not say that the company is a bad one. It says that no one company should be most of what a person has, when they are free to sell it and have no part in running it.'
    ] },

  { id: 'w3-again-diversify', kind: 'again', outcome: 'diversify',
    link: 'The last card gave you what to point to: {needs:diversify}. Here is a second case, with a very different story, in which the one holding is a building and an agent does the running.',
    first: 'w3-h-div-1', second: 'w3-h-div-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between shares and a building, and ignore who the people are. Look at one thing only: which words show both that nothing stops the person selling and that they take no part in running it?',
    prompt: { kind: 'phrase', answer: 'The building could be sold whenever he chose' },
    shared: [
      'Meena’s shares and Karl’s building look nothing alike, and the two cases share the same facts. Each person has one holding that is most of what they have: £420,000 out of £530,000 for Meena (79%), and £600,000 out of £690,000 for Karl (87%). Each is free to sell it. And neither takes part in running it: Meena has never worked for the bus company, and Karl’s letting agency does the work.',
      'What the two share is therefore not the thing owned. It is what the person can do about it. That is what {a:S1.freeheld} names, and it holds for shares, a building, or any other single investment of this kind, one the person can sell and takes no part in running.'
    ] },

  { id: 'w3-lens', kind: 'lens',
    h: 'The story does not decide the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: shares, a building, a business, a lawsuit, a loan. The layer underneath is what the person can do about the one thing that could take most of what they have.',
      'The seven answers belong to the layer underneath. The same story can carry any of them. A building can be {t:holding} the owner is free to sell, a business the owner runs, or one of several properties that could each bring {t:claim}. A case about shares can be shares the person may sell, shares they may not sell yet, or shares in a company they run.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share a person and a story and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose. One is size: £30,000 and £3,000,000 can be the same kind of case. The other is whether anything needs doing. In some cases the one thing is already looked after, and the answer is to leave it alone. Seeing that is part of the skill.'
    ],
    fixed: ['what the person can do about the one thing, which is what the key asks about: {q:S1}'],
    varies: ['the kind of money', 'the people', 'the size of the sums', 'how worried you would be', 'whether anything needs doing'] },

  { id: 'w3-portrait-diversify', kind: 'portrait', outcome: 'diversify',
    link: 'You now know what to point to for {a:S1.freeheld}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One investment is most of what the person has, and the case says how much: an amount, a percentage, or words like “most of what I have”.',
      'It is often something the person did not choose. It was left to them, paid as wages in the past, kept from a sale, or bought long ago and never looked at again.',
      'The person is usually fond of it or sure of it, because it has done well, or because they know it.',
      'Nothing is wrong with it yet. The company may be doing well, and the person may be pleased. The case is about what would happen if it did not.',
      'Nothing stands between the person and a sale except their own wish to hold on. They could name the broker or the agent they would use.',
      'Someone else does the running. A letting agency runs the building; a board and managers run the company. The owner’s own work and pay do not depend on it.'
    ],
    not: [
      'Having a lot in one company is not this answer on its own. The case must also show that nothing stops the sale and that the person does not run the company. If a rule stops the sale, or the person runs the company, the answer is another one.',
      'It is also not a verdict that the company is a bad one. The answer says only that no one company should be most of what a person has.'
    ],
    wild: ['"It was my father’s company. I couldn’t sell it."', '"I’ve always held on to those shares."', '"It has done so well for me."', '"The agent runs it all. I just collect."', '"It’s most of what I have, but it’s a good company."'],
    self: 'In your own life it is the sentence “most of what I have is in...” finished with one company or one property that you did not run and could sell tomorrow: shares left to you, shares from an old employer, a building bought long ago.',
    ask: '“If I sold it all tomorrow, what would stop me?” If the answer is nothing but the wish to hold on, and you take no part in running it, you are probably looking at this answer.',
    act: [
      'First, divide what the holding is worth by everything you own, and write down the percentage.',
      'Second, decide the schedule on paper before the first sale: how many sales, how far apart, and what part each is. For example, four sales three months apart, a quarter each.',
      'Third, decide where each sale’s money goes before you sell: into funds that hold many companies, and not into another single company.',
      'Fourth, find out what each sale would cost in fees and tax. If the cost is large, ask whether selling is needed at all, which is a different question from this one.',
      'Then follow the dates, whatever the price did in the weeks before them.'
    ] },

  { id: 'w3-check-diversify', kind: 'check', after: 'diversify',
    case: 'w3-h-div-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show that nothing stops him selling the shares? Tap them.',
           answer: 'He could sell the shares through his broker tomorrow' } },

  { id: 'w3-refute-ignorance', kind: 'refute', about: 'diversify',
    h: 'A wrong idea: “I know the company, so I need not spread anything”',
    link: 'The picture of {o:diversify} said that people are often sure of the one holding. That feeling rests on an idea that sounds like wisdom, and it is why people stay.',
    idea: 'Diversification is protection against ignorance. I know this company inside out, so I do not need to spread anything.',
    verdict: 'This is wrong. The part of it that is true is what makes it easy to believe.',
    right: [
      'What is true: knowing a company well helps you judge whether it is a good one. Someone who knows an industry can be right that a company is strong, and while a person is still building money and could earn it again, putting a lot into what they know can be a reasonable bet.',
      'What does not follow: knowing a company does not stop what comes from outside what you know. A rival wins its biggest contract, a law changes, a fire starts, a fraud is hidden from every outsider, a whole industry has a bad ten years. None of these needs ignorance to happen to someone who knows the company well. Knowledge changes how likely you think a bad event is. It does not change how much of your money goes with it if one comes.',
      'The key’s question is about the second thing: what could take most of what a person has. It is not asked about how well you understand the thing. Understanding is a reason to expect that nothing will go wrong. This unit is about what to do in case something does.'
    ],
    testedBy: ['w3-r-sup-2'] }
]);
