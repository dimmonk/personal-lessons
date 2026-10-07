// Basic Math, Unit Four: the key’s two questions (each with its check), and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on each question card: the question, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u4', [

  /* ---------- The first of the two questions ---------- */
  { id: 'q-g1', kind: 'question', step: 'G1',
    h: 'First: the way the amount changes',
    link: 'You have seen this question at the foot of each card, with one answer under it. Here it is whole, with every answer, and why you ask it before any sums.',
    decides: [
      'Put $1,000 at 5% a year beside $1,000 plus $50 a year. After one year both are $1,050. After thirty years the first is about $4,322 and the second is $2,500. Each gives a neat number, and nothing in the number says it is wrong, so only the words of the problem can tell you which one you have.',
      'The same number each time leads to {o:lin}. Multiplying leads to {o:expg} or {o:logsolve}, so the second question has to separate those two. A single change leads to {o:oneoff}.'
    ],
    how: [
      { do: 'Find the sentence that says what the amount does: “$3 a week”, “4% a year”, “rose to $36 in March”.', why: 'How the change is written tells you most of it.' },
      { do: 'Compare the size of the second change with the first.', why: 'A plain figure stays the same size, and a percentage of a bigger or smaller amount does not.' },
      { do: 'If the change happened once, stop there.', why: 'There is no second change to compare.' }
    ],
    whenBoth: 'A percentage or a plain figure can point the wrong way. A percentage that is paid out each year gives a total that grows by the same number each time, which is {o:lin}. A price that went up 8% and stayed is {o:oneoff}, not {o:expg}: a percentage says how big a change is, never how often it comes. When the problem asks how long, {o:lin} and {o:logsolve} differ in whether each change is the same size. In {o:oneoff} the amount has stopped, so it never reaches a target it is not already at.' },

  { id: 'check-g1', kind: 'check', after: 'G1',
    case: 'm4-ck-g1',
    ask: { type: 'step', step: 'G1' } },

  /* ---------- The second of the two questions ---------- */
  { id: 'q-g2', kind: 'question', step: 'G2',
    h: 'Second: the amount later, or the time it takes?',
    link: 'The first question left the multiplying answer with two names. Here is the second question, with both answers, and why it comes after the first.',
    decides: [
      'Take a town of 8,000 people growing 3% a year. Asked for the amount after 10 years, you multiply 8,000 by 1.03 ten times: about 10,751 people. Asked how long until it has 12,000, the number of times is what you must find, which needs a log: about 13.7 years. The steps for one do not work for the other.',
      'For the other two names this question changes nothing. {o:lin} is worked forward or backward with the same steps, and {o:oneoff} gives the new amount, or never. Only for the multiplying names does it decide the steps.'
    ],
    how: [
      { do: 'Read the last sentence of the problem and find what it asks.', why: 'The question tells you what is missing.' },
      { do: 'If you are given a time (6 hours, 3 years, 4 doublings), the amount is what is missing.', why: 'You multiply that many times to find it.' },
      { do: 'If you are given a target for the amount (double, $2,400, the whole pond), the time is what is missing.', why: 'You need to find how many times to multiply.' }
    ],
    whenBoth: 'Some problems seem to give both: a time in the story and a target in the question. Go by what the question asks for. “It doubles every day: when does it reach 1,000?” asks for a time, even though it mentions days.' },

  { id: 'check-g2', kind: 'check', after: 'G2',
    case: 'm4-ck-g2',
    ask: { type: 'step', step: 'G2' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-growth', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four kinds on your own. Here is the unit in one place.',
    carry: [
      'Before any sums, put two questions to the problem and find the words that answer each. First: {q:G1} Then: {q:G2}',
      'Adding the same figure, or taking the same figure away, every time is {o:lin}. Going forward, multiply the change by how many times and add it to the start, or take it away if the amount goes down. Going backward, take the start off the target and divide by the change each time.',
      'A percentage, a doubling or a halving each time means multiplying. Find the {t:multiplier}: 100% plus the percentage if the amount goes up, 100% minus it if it goes down, written as a decimal. Given a time, it is {o:expg}: multiply the start by the {t:multiplier} once for each time, each time on the last result, and round only at the end. Given a target, it is {o:logsolve}: divide the log of (target ÷ start) by the log of the {t:multiplier}.',
      'A change made once, with the amount staying put, is {o:oneoff}. Carry the new amount forward as it is, and do not carry the change forward as if it came again.',
      'A percentage says how big a change is, never how often it comes. 8% every year is {o:expg}, 8% once is {o:oneoff}, and interest paid out each year is {o:lin}.'
    ] }
]);
