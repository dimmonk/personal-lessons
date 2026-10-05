// Civics, Unit Two, part one: the opening card, then the first two groups of facts, the plan that failed and the five dates.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its
// answer is one of the choices for every other row on the same card, so the answers on one card are all of one form.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes
// line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u2', [

  { id: 'orient-const', kind: 'orient',
    h: 'Facts to hold, about the Constitution and the changes made to it',
    canDo: [
      'By the end of this unit you can say, without looking anything up, what the founding documents are and which of them is law, what the Constitution lets Congress do, what the Bill of Rights protects, how the Constitution is changed, and what six of the later changes did.',
      'They are worth holding for three reasons. The Constitution is the country’s highest law, and the questions in this subject about whether a government had the power to do something rest on it. News stories and the people around you say “the Constitution says” and “the First Amendment” all the time, and knowing which document a sentence comes from, and what it does, tells you how much weight it carries. And the citizenship interview asks about these documents directly.'
    ],
    everyday: [
      'Think of two things that people say. One friend says: “You can’t do that to me, it’s my First Amendment right.” Another says: “The Declaration of Independence promises me the pursuit of happiness, so a court has to give me a good life.” Both are using a founding document, and they are using two very different kinds. One document limits what a government may do. The other is not law at all, and no court can order someone to give you “the pursuit of happiness” because of it.',
      'To tell which is which, you need to know what each document is, who wrote it, when, and whether it is law. Those are facts. Reasoning will not produce them: you have to have met them. That is what this unit is for.',
      'The stories in Unit One ended on a decision by one of four kinds of decision-maker: {plain:congress}; {plain:president}; {plain:courts}; or {plain:states}. Three of the four, Congress, the President and the courts, are the three parts of the government of the whole country, and the Constitution is the document that builds them. So it is also where you find out what each part may do, and in places what none may do.'
    ],
    add: [
      'Each group in this unit begins with a short story. Then it explains the idea in plain words, and then it gives the facts for that group in a table. After the table, each fact is asked once, from memory.',
      'This unit skips more than it holds. It covers six of the first ten amendments and says nothing about the other four. It covers six of the seventeen amendments that came after, and none of the other eleven. It covers the work of the first three of the seven articles in the Constitution’s original text, and none of the last four. Those parts are not here. That is a limit of this unit, and nothing in it should be read to say that they do not matter.',
      'Where a right ends, and how far a power reaches, is argued in court for years by people who know the material well. This unit holds the facts, not the arguments.'
    ] },

  /* ---------- group one: the plan that failed ---------- */
  { id: 'con-fail', kind: 'concept',
    h: 'The first plan of government did not work',
    link: 'The first group is the reason the Constitution exists at all: the plan of government that came before it, and the five ways that it failed.',
    case: 'cn-flour',
    plain: [
      'The merchant is made up, but each thing that went wrong for her went wrong for the country. In 1776 the thirteen colonies announced that they were separating from Britain, and they had no government for the whole country. They first ran themselves under a plan called the Articles of Confederation, which took effect in 1781. It left the government of the whole country almost powerless, and within a few years it was plainly failing. In 1787 delegates, which means people chosen to speak for their states, met in Philadelphia to write a replacement.',
      'Five things had gone wrong. Congress could not tax: it could only ask the states for money, and they often did not pay. Nobody ran trade between the states, and the states taxed each other’s goods. There was no President, so nobody carried laws out. There were no national courts. And the plan was almost impossible to change, because all thirteen states had to agree.',
      'The delegates answered each of the five, and the answer to each one is something that you will meet again in this unit: a power for Congress to tax and to regulate trade, a President, federal courts with a Supreme Court, and a way of changing the plan that asks for less than every state. They also split the power among three parts, Congress, the President and the courts, because they had just fought a war against a government that decided everything.',
      'The five facts below are the five failures. After each one, the explanation says how the Constitution answered it.'
    ] },

  { id: 'facts-fail', kind: 'facts',
    h: 'The five failures of the Articles',
    link: 'These are the five failures, each with how the new plan answered it.',
    concept: 'con-fail',
    rows: [
      { id: 'fail-money', q: 'Under the Articles, how did the government of the whole country get money?', a: 'It could only ask the states for money, and they often did not pay',
        relates: 'Congress could not tax. A government that can only ask for money, and cannot make anyone pay, depends on the others agreeing every time it needs to spend. The Constitution answered this by letting Congress lay and collect taxes.' },
      { id: 'fail-trade', q: 'Under the Articles, what happened to trade between the states?', a: 'Nobody ran it, and the states taxed each other’s goods',
        relates: 'This is the merchant’s trouble at the state line. The Constitution answered it by letting Congress regulate trade between the states and with other countries.' },
      { id: 'fail-head', q: 'Under the Articles, who carried the laws out?', a: 'Nobody did, because there was no President',
        relates: 'A law that nobody is responsible for carrying out changes nothing. The Constitution answered this with a President, who leads the part of government that carries the laws out.' },
      { id: 'fail-courts', q: 'Under the Articles, what national courts were there?', a: 'There were no national courts',
        relates: 'With no national courts there was no judge of the whole country to hear a complaint like the merchant’s. The Constitution answered this with federal courts, with a Supreme Court at the top.' },
      { id: 'fail-change', q: 'Under the Articles, what did it take to change the plan?', a: 'All thirteen states had to agree',
        relates: 'Because everyone had to agree, any one state could stop a change. The Constitution answered this by asking for less than everyone: two-thirds of both chambers of Congress, which are the House of Representatives and the Senate, to propose a change, and three-quarters of the states to approve it.' }
    ] },

  { id: 'chk-fail-money', kind: 'check', after: 'facts-fail', ask: { type: 'fact', row: 'fail-money' } },
  { id: 'chk-fail-trade', kind: 'check', after: 'facts-fail', ask: { type: 'fact', row: 'fail-trade' } },
  { id: 'chk-fail-head', kind: 'check', after: 'facts-fail', ask: { type: 'fact', row: 'fail-head' } },
  { id: 'chk-fail-courts', kind: 'check', after: 'facts-fail', ask: { type: 'fact', row: 'fail-courts' } },
  { id: 'chk-fail-change', kind: 'check', after: 'facts-fail', ask: { type: 'fact', row: 'fail-change' } },

  /* ---------- group two: the five dates ---------- */
  { id: 'con-date', kind: 'concept',
    h: 'Five dates, and what happened in each',
    link: 'The first group said what went wrong and how the new plan answered it. This group puts the story in order, in five dates, because the middle three are easy to swap.',
    case: 'cn-timeline',
    plain: [
      'The student is right that the middle three sound alike. The way to keep them apart is to hold each year together with what happened in it.',
      'In 1776 the colonies announced that they were separating from Britain. That is the Declaration of Independence, which was adopted on July 4, 1776. It announced a break, and it did not set up a government. In 1781 the Articles of Confederation took effect: the first plan of government, the one from the last group. In 1787 delegates met in Philadelphia and wrote the Constitution to replace it. In 1789 the government under the new Constitution began. And in 1791 the Bill of Rights was added to the Constitution.',
      'Notice that 1787 and 1789 are both years of the Constitution. One is when it was written, and the other is when the government under it began. They are two years apart and are the pair that gets swapped most, so they get a card of their own after the questions. Notice too that the Declaration came eleven years before the Constitution was written. The Declaration said why the colonies were leaving. The Constitution says how the country is governed.'
    ] },

  { id: 'facts-date', kind: 'facts',
    h: 'The five dates',
    link: 'These are the five dates, each with how it fits the story of the first plan and its replacement.',
    concept: 'con-date',
    rows: [
      { id: 'date-decl', q: 'In which year did the colonies announce that they were separating from Britain?', a: '1776',
        relates: 'That is the Declaration of Independence, adopted on July 4, 1776. It announced a break with Britain. It did not set up any government.' },
      { id: 'date-articles', q: 'In which year did the Articles of Confederation, the first plan of government, take effect?', a: '1781',
        relates: 'The thirteen former colonies ran themselves under the Articles from 1781. The plan left the government of the whole country almost powerless, and within a few years it was plainly failing.' },
      { id: 'date-convention', q: 'In which year did delegates meet in Philadelphia to write the Constitution?', a: '1787',
        relates: 'The Articles were failing, so delegates met to write a replacement. The Constitution was written that year, eleven years after the Declaration.' },
      { id: 'date-start', q: 'In which year did the government under the Constitution begin?', a: '1789',
        relates: 'The Constitution was written in 1787 and was in force from 1789. That is when the new government began, two years after it was written.' },
      { id: 'date-bor', q: 'In which year was the Bill of Rights added to the Constitution?', a: '1791',
        relates: 'The Bill of Rights was added after the new government had begun, in 1791, as the first ten amendments to the Constitution. It is the last of the five dates.' }
    ] },

  { id: 'chk-date-decl', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-decl' } },
  { id: 'chk-date-articles', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-articles' } },
  { id: 'chk-date-convention', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-convention' } },
  { id: 'chk-date-start', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-start' } },
  { id: 'chk-date-bor', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-bor' } },

  { id: 'look-date', kind: 'lookalike', ledger: 'date-convention~date-start',
    h: 'The year it was written, and the year it began',
    link: 'Two of the five dates are both years of the Constitution, and they are only two years apart. They get swapped, so they go side by side.',
    facts: ['date-convention', 'date-start'],
    instruction: 'Compare what happened in each year: the Constitution being written, or the government under it beginning.',
    prompt: { kind: 'which', answer: 'date-start' },
    difference: [
      'Fact A is the year the delegates wrote the Constitution: {f:date-convention}. They met in Philadelphia, and what they produced was a document.',
      'Fact B is the year the government under it began: {f:date-start}. That is when the plan stopped being only a document and began to run the country.',
      'A way to hold them: a document is written first, and a government begins to work under it afterwards. The earlier year is the writing.'
    ] }
]);
