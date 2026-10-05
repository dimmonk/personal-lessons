// Wealth Preservation, Unit One, part three: the fifth family (nothing in the case), the wrong idea a beginner most often brings to
// it, and the look-alike pairs that include it. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fifth family: nothing in the case ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'One answer is left, and it asks you to say that you see nothing. It is the answer for a case in which nothing could lose the money.',
    case: 'w-saver', mark: 'D1',
    strip: [
      'There is one person, Aisha, and money she is putting away: a pension, and some savings.',
      'She will not need the pension for thirty years.',
      'The case says nothing about a charge, a tax bill or a sum she spends from it.',
      'It says nothing about one thing that most of it depends on, a bill on a date, or a death or an illness.',
      'Aisha asks whether she should be doing something. The case gives her no reason to.'
    ],
    explain: [
      'Set this case against the four answers you have met. Nothing comes out of Aisha’s money every year that the case mentions. No one thing is most of it, and no claim or loan is in the story. She does not need the pension for thirty years, so a fall in prices does not catch her out: she has years in which prices can come back. And the case is not about a death, an illness or a gift.',
      'What is left is money being kept, with nothing that could lose it. That is a fifth kind of case, and a very ordinary one: a person saving steadily, with nothing in the account that raises a problem.',
      'Questions with no place for it would force every case into one of the four. A reader of those questions would find a problem in every account of money, and would recommend a cure for it. Cures cost money and effort, and a cure for a problem the case does not have costs both for nothing. So there is an answer for this case, so that "there is nothing here to name" is something you can say, and say with a reason.',
      'The answer does not promise that nothing could ever go wrong. It says that this case raises none of the four. The test is the words in the case: can you point to words that raise one of the four? If you can, give that answer. If you cannot, do not invent one.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: [
      'The answer, and the name of this kind of case, is {a:D1.none}. It is not a statement that the money is safe for ever. It says that this case raises nothing that could lose it.',
      'After this answer nothing more is asked and there is no finer name. That is a result in its own right: you looked, and there was nothing to name. In this subject, that result means leaving the money alone.'
    ] },

  { id: 'again-none', kind: 'again', family: 'none',
    link: 'Aisha’s case gave you what to point to: {needs:none}. Here is a second case with a different story, in which someone has been given an idea for a cure.',
    first: 'w-saver', second: 'w-friend', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the difference between a pension and a savings account, and ignore that in each case someone wonders whether to do something. Look at one thing only: which words show how long it will be before the money is needed?',
    prompt: { kind: 'phrase', answer: 'He does not expect to need the money for fifteen years' },
    shared: [
      'Both cases show money being put away by a person with a steady life, who will not need it for a long time. In neither case does the story mention something coming out of it, one thing most of it rests on, a bill due on a date, or a death. In both, someone asks whether they should be doing something.',
      'The question is the thing to notice. Asking it does not put a problem into the case. Aisha asks it, and Tomás asks it after reading an article, and neither case gives you a reason to say yes. When the case raises none of the four, the answer is {a:D1.none}, however much someone wonders.'
    ] },

  { id: 'portrait-none', kind: 'portrait', family: 'none',
    link: 'You know what to point to for {a:D1.none}. Because this answer is partly made of what is not there, the rest of the picture matters more than usual.',
    typical: [
      'There is money being kept, in savings, a pension or a home. The case may say how much, and where it is held.',
      'The case raises no charge, tax bill or sum being spent. If one is mentioned, it is mentioned as a fact and not as something that is wrong.',
      'The money is not needed soon. Often the case says so: "I will not touch it for thirty years", "there is no rush".',
      'No one thing is most of it, and there is no claim or loan.',
      'No handover is in view: no death, no illness, no gift. A case about a will, even a perfectly good one, is about the handover and is not this kind.',
      'Often the person asks whether they ought to be doing something, or has been told that they should by someone who sells something.'
    ],
    not: [
      'This answer is not a promise that the money is safe for ever. Something could go wrong next year, and if the case showed it, the answer would be a different one. The answer is about what this case shows.',
      'It is also not a case where something is wrong and a small problem is being ignored. If the case points to a charge, a tax bill, one big thing, a fall that would catch it out or a handover, that is the answer, however small it looks.'
    ],
    wild: ['"Am I missing something?"', '"I don’t really touch it."', '"It’s just sitting there for retirement."', '"I haven’t got round to it, and I’m not sure I need to."', '"My cousin says I should have a trust."'],
    self: 'In your own life it is the money that no one has given you a reason to worry about. An offer to "do something" with it has to supply that reason first.',
    ask: '"Which of the four can I point to in these words?" If you can point to none of them, you are probably looking at this kind.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'w-nurse',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that the money will not be needed for a long time? Tap them.',
           answer: 'a workplace pension that she will start drawing at 67' } },

  /* ---------- A wrong idea: a special structure is the first thing you need ---------- */
  { id: 'refute-offshore', kind: 'refute', about: 'D1',
    h: 'A wrong idea: you need a special structure to look after money',
    link: 'Tomás read an article about trusts and offshore accounts, and people often go further than he did. They decide on a cure before they have asked what could lose the money.',
    idea: '"To keep your money safe you need offshore structures and a private bank. That is what the wealthy do."',
    verdict: 'This is wrong.',
    right: [
      'The question to ask first is not "which structure?". It is {q:D1} There are five answers. Four of them lead on to a further question, and from there to a cure for that particular way of losing money. The fifth, {a:D1.none}, leads to no cure at all.',
      'A structure of that kind is a cure, and a cure is chosen after you know what it is for. Without an answer to the first question, someone who says "you need this" is offering a cure before a diagnosis. A structure that costs money to set up and money every year to run is also a charge, which is exactly the kind of thing the first answer asks about.',
      'So the way to meet an idea like this is to ask what could be lost that the structure would answer, and to ask for it in numbers: how large, how likely, and what the structure costs each year. If no answer can be found in the words of your own case, then the case is {a:D1.none}, and what you can point to is this: {needs:none}.'
    ],
    testedBy: ['c-offshore'] },

  /* ---------- The pairs that include the fifth answer ---------- */
  { id: 'look-none-timing', kind: 'lookalike', ledger: 'none~timing',
    link: 'You have met the answer for a case in which nothing could lose the money, and the answer for a fall in prices. They are easy to mix up, because in both of them prices may be falling. This card puts them side by side.',
    cases: ['w-la-quiet', 'w-la-deposit'],
    instruction: 'Both cases are about Ines, who is 38, in a year when prices have fallen by a fifth. Compare one thing: when is the money needed, and is anything waiting for it?',
    prompt: { kind: 'which', option: 'D1.none', answer: 'w-la-quiet' },
    difference: [
      'In Case A prices have fallen by 20%, and Ines has noticed. But she will not need the £30,000 for twenty-five years, and she is selling nothing. A fall only does harm if something has to be sold or paid on the day, and nothing does. There are twenty-five years for prices to come back. The answer is {a:D1.none}.',
      'In Case B prices have fallen by the same fifth, but Ines needs £30,000 on 1 June, four months from now, and the money is in funds that hold shares. After the fall her £30,000 is £24,000, which is £6,000 short of the deposit, and four months is not long for prices to recover. The answer is {a:D1.timing}.',
      'The fall is the same in both cases, and so is the person. What separates them is whether money is needed soon, and so whether the fall catches anything. A fall that catches nothing raises nothing.'
    ] },

  { id: 'look-none-erosion', kind: 'lookalike', ledger: 'none~erosion',
    link: 'The next pair is the fifth answer and the first. Both can be about money kept in a pension for many years, and in both the person may have no complaint.',
    cases: ['w-la-april', 'w-la-statement'],
    instruction: 'Both cases are about Mei, who is 45 and pays into a pension. Compare one thing: does the case say anything about something that comes out of the money?',
    prompt: { kind: 'which', option: 'D1.erosion', answer: 'w-la-statement' },
    difference: [
      'In Case A the case says nothing about a charge, a tax bill or a sum taken out. It tells you only that Mei has a pension, that she will not touch it until she is 67, and that she files her statement unread. The statement may well contain a charge, but the case does not tell you so, and there are no words to point to. The answer is {a:D1.none}.',
      'In Case B the same woman reads the same statement and finds that the fund takes 1.6% of her money every year. Now there are words to point to, and they are about something that comes out every year. The answer is {a:D1.erosion}.',
      'Nothing about Mei or her pension is different. What is different is what the case says. The answer is for the case in front of you, and it does not invent what an unread statement might hold.'
    ] },

  { id: 'look-none-handover', kind: 'lookalike', ledger: 'none~handover',
    link: 'The next pair is the one where a sound case is most easily mistaken for nothing at all: a case in which everything about the handover is already in good order.',
    cases: ['w-la-inorder', 'w-la-nothing'],
    instruction: 'Both cases are about Priya, who is 40. Compare one thing: does the case say anything about what happens to her money if she dies, or if she cannot act?',
    prompt: { kind: 'which', option: 'D1.handover', answer: 'w-la-inorder' },
    difference: [
      'In Case A everything is in order: the wills and the forms are up to date, and everything they own is far below the tax-free limit. There is nothing wrong with it. But the case is about who gets the money when Priya dies, and that is what the question asks about, so the answer is {a:D1.handover}. A case in which a handover has been dealt with is still a case about the handover.',
      'In Case B nothing is said about a death, a will, a form or an illness. The case shows money being put away for decades and nothing else. The answer is {a:D1.none}.',
      'This is the place where a sound case is most easily mistaken for the fifth answer. Being in good order does not move a case to {a:D1.none}. That answer is for a case that raises none of the four. A case that raises one, and shows it already looked after, keeps the answer for the one it raises.'
    ] },

  { id: 'look-none-shock', kind: 'lookalike', ledger: 'none~shock',
    link: 'The last pair is the fifth answer and the third. In both the person may own shares or property and may feel well off.',
    cases: ['w-la-spread', 'w-la-flat'],
    instruction: 'Both cases are about Owen, who is 50 and has £500,000. Compare one thing: is one company, property, business, claim or loan most of what the case shows, or is the money spread, with nothing that could reach everything?',
    prompt: { kind: 'which', option: 'D1.shock', answer: 'w-la-flat' },
    difference: [
      'In Case A the money is in three places, none of them more than 45%: savings, a pension held in funds spread over thousands of companies, and the flat he lives in. No loan or claim is in the case. If any one of them fell, the other two would still be there. The answer is {a:D1.none}.',
      'In Case B £400,000 of his £500,000 is one flat. If that flat lost a quarter of its value, he would lose £100,000 on the flat alone, a fifth of everything he has, and nothing else he owns could take its place. The answer is {a:D1.shock}.',
      'Both cases are about a man with property and about £500,000. What separates them is whether one thing is most of it. Spread out, the money is a case with nothing to name. Concentrated in one place, it is not.'
    ] }
]);
