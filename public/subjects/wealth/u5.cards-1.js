// Wealth Preservation, Unit Five, part one (first half): the opening card, the two paper terms, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question (the one Unit One taught), the preview
// map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called"
// sentence, and the stem of every commit prompt.

FC.cards('wealth', 'u5', [

  { id: 'orient-handover', kind: 'orient',
    h: 'When money changes hands, or someone else has to act',
    canDo: 'After this unit you can read a short account of someone’s money and the people around it, and say what, if anything, is at risk at the handover: papers that are out of date, a tax bill, the people who will receive it, or nothing at all. You will be able to point to the words in the account that show it.',
    everyday: [
      'You have heard these. “I’ve got a will somewhere.” “The IRS takes forty percent of everything over the limit.” “Those two haven’t spoken since the funeral.” “It’s all in order.” “Everyone says you need a family trust.”',
      'Each is about the same moment: the day money passes to other people, or the day someone else has to act for its owner. One is about paper, one about tax, one about people, one says nothing is wrong, and one is somebody selling something. The thing to do about one does nothing for another, and something bought for a problem the case does not have costs money every year and answers nothing. Four things can go wrong, and a fifth case is one where none of them does. That fifth is as common as the other four.'
    ],
    map: { branch: 'handover' } },          // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Two papers the first name is built on ---------- */
  { id: 'term-benform', kind: 'term', term: 'benform',
    h: 'A form that pays out without the will',
    link: 'The first name is about three papers. You know the will. The other two you may not have met.',
    case: 't-benform',
    plain: [
      'Nuala’s will says her two children and her form says her husband. When she dies, the company that runs her 401(k) will not go looking for her will. It will pay the person its own form names: her husband. In the US the form decides who receives that account, and a will that says something else does not change it. So a person can rewrite a will with great care and leave a 401(k), an IRA, an insurance policy or a bank account that still pays someone they would no longer choose.'
    ] },

  { id: 'term-poa', kind: 'term', term: 'poa',
    h: 'The paper for the day you cannot sign',
    link: 'The third paper is not about who gets the money. It is about who may act while the owner is still alive.',
    case: 't-poa',
    plain: [
      'Nobody has died, and Rashid will get better, but for months nobody can act for him. The bank is not being difficult: it cannot know what he would want, because he never put it in a paper the bank can accept.',
      'That paper is a signed document, made while he was well, naming someone to handle his money and affairs if he cannot. Without it, the family usually has to ask a court to appoint a guardian or conservator before anyone may act. That takes time and money while the owner is ill and the bills are due. So a handover is not only a death: it is any time someone else has to act for the owner.'
    ] },

  /* ---------- Update the basic paperwork ---------- */
  { id: 'meet-basicdocs', kind: 'meet', outcome: 'basicdocs',     // heading is the outcome's plain words, from the key
    link: 'Here is the will, and the first name, which is about all three papers.',
    case: 'm-edith', mark: 'H1',
    strip: [
      'One person, Edith, and one paper, a will she wrote in 2008.',
      'The will names one person to receive everything, and that person has died.',
      'Nothing has been changed since, and nobody else is named.'
    ],
    explain: [
      'A will says who gets what you own when you die. It is read on the day, by people who were not there when it was written, and it says exactly what it says. Edith’s will named the person she wanted, and he has died. With nobody else named, the law of her state decides who gets the money, by rules written for everybody and not for her.',
      'Papers go out of date when a marriage, a divorce, a birth or a death changes a life. A paper that was never written is the same problem: no will, no form or no power of attorney leaves it to the state’s rules too. Both are cheap to fix compared with the cost to the people left to sort it out, after the one person who knew what was meant can no longer say.'
    ],
    feature: { step: 'H1', option: 'papers' },
    name: 'The name for this is {o:basicdocs}. The three papers are a will, {t:benform} and {t:poa}. “Update” is what is done about them: bring them up to date, and where one does not exist, write it.',
    act: [
      'List your three papers and read each name on them against your life as it is today. Look for a former partner, someone who has died, a child born since, and a paper that does not exist.',
      'Where a name is wrong or a paper is missing, ask the company for its form or book a lawyer this week, before deciding anything bigger.'
    ] },

  { id: 'check-basicdocs', kind: 'check', after: 'basicdocs',
    case: 'c-aoife',
    ask: { type: 'phrase', step: 'H1', say: 'Which words show that the paper no longer matches the person’s life? Tap them.',
           answer: 'Last year she married Dev, and they bought a condo together. She has not changed the will.' } }
]);
