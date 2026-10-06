// Wealth Preservation, Unit Five, part one (first half): the opening card, the two paper terms, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question (the one Unit One taught), the preview
// map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called"
// sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('wealth', 'u5', [

  { id: 'orient-handover', kind: 'orient',
    h: 'When money changes hands, or someone else has to act',
    canDo: 'After this unit you can read a short account of someone’s money and the people around it, and say what, if anything, is at risk at the handover: papers that are out of date, a tax bill, the people who will receive it, or nothing at all. You will be able to point to the words in the account that show it. The someone can be a parent, a friend, a person in the news, or you.',
    everyday: [
      'You have heard these. “I’ve got a will somewhere.” “The kids will figure it out.” “The IRS takes forty percent of everything over the limit.” “Those two haven’t spoken since the funeral.” “It’s all in order.” “Everyone says you need a family trust.”',
      'Each one is a sentence about the same moment: the day money passes to other people, or the day someone else has to act for its owner. They are not the same sentence. One is about paper, one is about tax, one is about people, one says that nothing is wrong, and one is somebody selling something. In everyday talk they blur into a single worry, “what happens to it when I’m gone”. This unit teaches you to pull them apart. The thing to do about one of them does nothing for another, and something bought to answer a problem that a case does not have costs money every year and answers nothing.',
      'Four things can go wrong, and a fifth case is one where none of them does. Each has its own name, its own question to put to a case, and its own thing to do about it. The fifth is as common as the other four: sometimes the honest answer is that nothing more needs doing, and you will be able to say that too.'
    ],
    map: { branch: 'handover' } },          // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Two papers the first name is built on ---------- */
  { id: 'term-benform', kind: 'term', term: 'benform',
    h: 'A form that pays out without the will',
    link: 'The first name in this unit is about three papers. You will have heard of the will. The other two you may not have met, and the first is easy to take for something it is not.',
    case: 't-benform',
    plain: [
      'Nuala has two papers that both say who gets her money when she dies, and they say different things. The will says her two children. The form says her husband.',
      'When Nuala dies, the company that runs her 401(k) will not go looking for her will. It will look at its own form and pay the person the form names: her husband. The will is a paper the company has never held, so it has no way of acting on it. In the US the form is what decides who receives that account, and a will that says something else does not change it. What does not depend on any court is that there are two papers, and changing one does not change the other.',
      'So a person can rewrite a will with great care and leave a 401(k), an IRA, an insurance policy or a bank account that will still pay out to someone they would no longer choose.'
    ],
    after: 'A form like this is easy to forget. It is filled in once, years ago, when someone joins, and nothing reminds anyone it is there. The firms that run 401(k)s and IRAs, life insurers and some banks ask for one.' },

  { id: 'term-poa', kind: 'term', term: 'poa',
    h: 'The paper for the day you cannot sign',
    link: 'The third paper is not about who gets the money. It is about who may act while the owner is still alive.',
    case: 't-poa',
    plain: [
      'Rashid has not died, and nothing has been lost. He is alive and he will get better. But for months nobody can act for him. His wife is not allowed to touch an account that is in his name alone, however plain it is that she is the person he would want. The mortgage payment is due.',
      'The bank is not being difficult. It cannot know that Rashid would want his wife to act, because he has never said so in a way the bank can accept. There is a paper that says it: a signed document, made while he was well, that names someone to handle his money and affairs if he cannot. Rashid never signed one.',
      'Without it, the family usually has to ask a court to appoint a guardian or a conservator before anyone may act. That takes time and money, and it happens while the owner is ill and the bills are falling due. How it works differs from one state to another.'
    ],
    after: 'Notice that nobody died in this case. A handover is not only a death. It is any time when someone else has to act for the owner.' },

  /* ---------- Update the basic paperwork ---------- */
  { id: 'meet-basicdocs', kind: 'meet', outcome: 'basicdocs',     // heading is the outcome's plain words, from the key
    link: 'You now have the two papers that are not a will: {t:benform} and {t:poa}. Here is the will, and the first name in this unit, which is about all three.',
    case: 'm-edith', mark: 'H1',
    strip: [
      'One person, Edith, and one paper, a will she wrote in 2008.',
      'The will names one person to receive everything, and that person has died.',
      'Nothing has been changed since, and nobody else is named.',
      'Nothing here is about a charge, a fall in prices or a loan, and there is no tax and no quarrel in the family.'
    ],
    explain: [
      'A will is a signed paper that says who gets what you own when you die. It is read on the day, by people who were not there when it was written, and it says exactly what it says. Edith’s will was right in 2008. It named the person she wanted to receive everything. That person has died, and the will still names him and nobody else.',
      'Nothing is wrong with Edith’s money. What is wrong is the paper that will govern it. When a will names someone who has died and nobody else, the law of her state decides who gets the money instead, by rules that were written for everybody and not for her. That can take longer and cost more, and the result may be a person she would not have chosen. How exactly it works differs from state to state, and the case does not say. What the case shows is a gap between what Edith would want and what her paper says, and she is the only person who could have closed it.',
      'Papers go out of date when something happens in a life: a marriage, a divorce, a birth or a death. They are also wrong when they do not exist: no will at all, no form, no power of attorney. A missing paper gets the same answer as an old one. And all three are cheap to put right compared with the cost of sorting out their absence, which falls on other people, after the one person who knew what was meant can no longer say.',
      'Many Americans also have a revocable living trust: a paper that holds what they own while they live and passes it on at death without probate, the court process for a will. Where a case shows one, it belongs with the will and goes out of date in the same way.'
    ],
    feature: { step: 'H1', option: 'papers' },
    name: 'The name for this is {o:basicdocs}. “Basic” because a will, {t:benform} and {t:poa} are the three papers every handover starts with. “Update” is what is done about them: bring them up to date, and where one does not exist, write it.' },

  { id: 'again-basicdocs', kind: 'again', outcome: 'basicdocs',
    link: 'The first case gave you what to point to: {needs:basicdocs}. Here is a second case with a different story, in which the paper has not gone out of date. It was never written.',
    first: 'm-edith', second: 'a-mirela', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the difference between a paper that is out of date and one that does not exist. Look at one thing only: what the case says about the paper that decides who gets the money.',
    prompt: { kind: 'phrase', answer: 'She has never written a will.' },
    shared: [
      'Edith has a will that names someone who has died. Mirela has no will at all. In both cases the paper that should say who gets the money does not say what the owner would want, and in both the state’s own rules will fill the gap on the day: rules written for everybody, not for Edith or Mirela.',
      'Mirela’s case also shows why the words in the case matter more than the story. She and her partner of twenty years never married, and the condo is in her name alone. In most states an unmarried partner gets nothing from someone who dies without a will, and the case does not say which state this is. What it shows is that nobody has written down what she wants. That is what {o:basicdocs} names, and it holds for a paper that is stale and for a paper that is missing.'
    ] },

  { id: 'lens-handover', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the difference between a paper that is stale and one that does not exist. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a will, a 401(k), a house, a farm, a business, a family. The layer underneath is what is at risk at the handover.',
      'The five names belong to the layer underneath. The same story can carry any of them, and each name turns up in every kind of story. A case about a family business is no more likely to be one name than another, and a case about a will is not always about paper.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share a person and a house and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['what is at risk at the handover, which is what the question is about: {q:H1}'],
    varies: ['the kind of paper', 'the size of the estate', 'the age and health of the owner', 'the family', 'the state’s rules'] },

  { id: 'portrait-basicdocs', kind: 'portrait', outcome: 'basicdocs',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:basicdocs} in real life, where nobody marks the words for you.',
    typical: [
      'It is about paper. There are three papers, and each does a different job: a will says who gets what the owner owns; {t:benform} says who receives one particular account; {t:poa} says who may act if the owner cannot.',
      'A paper is out of date because something happened in the owner’s life that the paper was never changed for: a marriage, a divorce, a birth, a death. Or it never existed.',
      'Nothing looks wrong while the owner is alive and well. The harm falls on the day, and the day is the one on which the owner cannot put it right.',
      'It is not a matter of age. A form can name a former partner at 40 as easily as at 80, and a stroke at 55 needs {t:poa} as much as old age does.',
      'One paper can be fine while another is wrong. A will that is up to date does not make a form that names someone else safe, because the form usually decides for its own account.',
      'The fix is usually short: a form to fill in, or a visit to a lawyer. It is the cheapest thing in this unit, and it comes before anything else.'
    ],
    not: 'An old paper is not the same as an out-of-date one. A will written in 2008 that still says what its owner wants today is current. What makes a paper out of date is a change in the life it was written for. And a paper that is missing counts only when the case shows nobody has it. “I have a will somewhere” is a paper that exists.',
    wild: ['“I’ll get to it when I’m older.”', '“I think the form still says my ex.”', '“We never got around to the will.”', '“Nobody can sign for him while he’s like this.”', '“It’s all in a drawer somewhere.”'],
    self: 'In your own life it is the answer to a short question: whose name is on your 401(k) and IRA forms, on any life insurance, and on your will, and have you ever signed {t:poa}?',
    ask: '“If I died or could not act tomorrow, whose name is on each of the three papers, and is it still the right name?”',
    act: [
      'List the three papers and where each is kept: the will, every beneficiary form held by a 401(k) or IRA provider, an insurer or a bank, and the power of attorney.',
      'Read each name on each paper against your life as it is today. Look for a former partner, a person who has died, a child born since, and a paper that does not exist.',
      'Where a name is wrong or a paper is missing, ask the company for its form, or book a lawyer, this week. Do not wait to decide anything bigger.',
      'Write down the date, and look again after the next marriage, divorce, birth or death.'
    ] },

  { id: 'check-basicdocs', kind: 'check', after: 'basicdocs',
    case: 'c-aoife',
    ask: { type: 'phrase', step: 'H1', say: 'Which words show that the paper no longer matches the person’s life? Tap them.',
           answer: 'Last year she married Dev, and they bought a condo together. She has not changed the will.' } },

  { id: 'refute-willlater', kind: 'refute', about: 'basicdocs',
    h: 'A wrong idea: “I’ll get my will done when I’m older”',
    link: 'The picture of {o:basicdocs} said that these papers go out of date at any age. That is the opposite of an idea many people hold, and the idea is what keeps the papers unwritten.',
    idea: '“I’ll get my will done when I’m older. It’s for people who are nearly gone.”',
    verdict: 'This is wrong.',
    right: [
      'A handover does not wait for old age. It starts with a death, and it also starts with an illness or an accident that stops the owner acting. Rashid was 63 and well on the morning of his stroke. The papers are not for the old. They are for the day something happens, and nobody knows the day.',
      'The second thing the idea gets wrong is who pays for waiting. When a will, a form or {t:poa} is missing or out of date, nothing happens to the owner. The cost falls on the people left to sort it out, on the day, when the one person who could say what was meant cannot. And a form can name a former partner at 40 as easily as at 80.',
      'The third is the cost of putting it right, which is usually a short job: a form to fill in, or an appointment with a lawyer. So the useful question is not “am I old enough?” It is the one you have been practicing: if I died or could not act tomorrow, whose name is on each paper, and is it still the right name?'
    ],
    testedBy: ['h-c-will'] }
]);
