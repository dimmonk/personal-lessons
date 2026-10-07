// Wealth Preservation, Unit Five, part one (first half): the opening card, the two paper terms, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the first question (the one Unit One taught), the preview
// map, the heading of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every
// commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('wealth', 'u5', [

  { id: 'orient-handover', kind: 'orient',
    h: 'Before you pay for “estate planning”, check what could actually go wrong',
    canDo: 'Before you pay for a family trust or “estate planning”, find out what, if anything, is actually at risk when your money passes to other people. It is one of four things, or none, and each needs a different fix.',
    everyday: [
      'You have heard these. “I’ve got a will somewhere.” “The IRS takes forty percent of everything over the limit.” “Those two haven’t spoken since the funeral.” “It’s all in order.” “Everyone says you need a family trust.”',
      'Each is about the same moment: the day money passes to other people, or the day someone else has to act for its owner. One is about paper, one about tax, one about people, one says nothing is wrong, and one is somebody selling something. A fix for one does nothing for the others, and a fix bought for a problem you do not have costs money every year and solves nothing.',
      'Four things can go wrong, and the fifth answer is that none of them does. That one is as common as the other four.'
    ],
    map: { branch: 'handover' } },          // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Two papers the first name is built on ---------- */
  { id: 'term-benform', kind: 'term', term: 'benform',
    h: 'A form that pays out without the will',
    link: 'The first problem is about three papers. You know the will. The other two you may not have met.',
    case: 't-benform',
    plain: [
      'Nuala’s will says her two children. Her 401(k) form says her husband. When she dies, the company that runs the 401(k) will not go looking for her will: it pays the person its own form names, her husband.',
      'In the US that form decides who gets the account, and a will that says something else does not change it. So someone can rewrite a will with great care and still leave a 401(k), an IRA, an insurance policy or a bank account paying a person they would no longer choose.'
    ] },

  { id: 'term-poa', kind: 'term', term: 'poa',
    h: 'The paper for the day you cannot sign',
    link: 'The third paper is not about who gets the money. It is about who may act while the owner is still alive.',
    case: 't-poa',
    plain: [
      'Nobody has died, and Rashid will get better, but for months nobody can act for him. The bank is not being difficult: it cannot know what he would want, because he never put it in a paper the bank can accept.',
      'That paper is a signed document, made while he was well, naming someone to handle his money and affairs if he cannot. Without it, the family usually has to ask a court to appoint a guardian before anyone may act, and that takes time and money while the bills pile up.',
      'So a handover is not only a death. It is any time someone else has to act for the owner.'
    ] },

  /* ---------- Update the basic paperwork ---------- */
  { id: 'meet-basicdocs', kind: 'meet', outcome: 'basicdocs',     // the heading is the name itself
    link: 'Start with Edith, and the will, the first of the three papers.',
    case: 'm-edith', mark: 'H1',
    explain: [
      'A will says who gets what you own when you die. It is read on the day by people who were not there when it was written, and it says exactly what it says. Edith’s will leaves everything to Leo and names nobody else, and Leo has died. If she died tomorrow, the law of her state would decide who gets her money, by rules written for everybody and not for her.',
      'Papers go out of date when a marriage, a divorce, a birth or a death changes a life. A paper that was never written is the same problem. Both are cheap to fix now, and expensive for the people left to sort it out after the one person who knew what was meant can no longer say.'
    ],
    spot: [
      { do: 'Look for each of the three papers: a will, {t:benform} and {t:poa}. Edith’s story shows one, a will from 2008.', why: 'Any one of the three can be the one that is wrong.' },
      { do: 'Check who each paper names: Edith’s will names Leo.', why: 'The name on the paper gets the money, whatever the family expects.' },
      { do: 'Check that person is still the right one: Leo died four years ago.', why: 'A death, a divorce, a marriage or a birth since the paper was written can make the name wrong.' },
      { do: 'Check that none of the three is missing: Edith’s will names nobody to take over from Leo.', why: 'A paper that was never written leaves it to the state’s rules.' }
    ],
    feature: { step: 'H1', option: 'papers' },
    name: 'This is {o:basicdocs}. “Update” is the fix: bring the papers up to date, and write any that are missing.',
    act: [
      { do: 'List your three papers and read the name on each against your life today: a former partner, someone who has died, a child born since.', why: 'Those are the names that go wrong.' },
      { do: 'Where a name is wrong or a paper is missing, ask the company for its form or book a lawyer this week.', why: 'It is the cheapest fix, and everything bigger rests on it.' }
    ] },

  { id: 'check-basicdocs', kind: 'check', after: 'basicdocs',
    case: 'c-aoife',
    ask: { type: 'phrase', step: 'H1', say: 'Which words show that the paper no longer matches the person’s life? Tap them.',
           answer: 'Last year she married Dev, and they bought a condo together. She has not changed the will.' } }
]);
