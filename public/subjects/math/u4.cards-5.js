// Basic Math, Unit Four: the key’s two questions (each with its check), and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on each question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u4', [

  /* ---------- The first of the key’s two questions ---------- */
  { id: 'q-g1', kind: 'question', step: 'G1',
    h: 'The first question: how the amount changes each time',
    link: 'At the foot of each kind’s first card you saw one of the two questions with one answer under it. This card puts the first question and its three answers in one place and says why it is asked before any working.',
    decides: [
      'Put $1,000 at 5% a year beside $1,000 plus $50 a year: after one year both are $1,050. After thirty years the first is about $4,322 and the second is $2,500. The wrong procedure gives a neat number all the same, and nothing in the number says that it is wrong, so only the words of the problem can settle which one it is. That is why this question is put first, before any working.',
      'The same number each time leads to {o:lin}. Multiplying leads to {o:expg} or {o:logsolve}, so this question alone does not finish the job, and the second question has to separate those two. A single change leads to {o:oneoff}.'
    ],
    how: [
      'Read the sentence that says what the amount does, and mark it. Ask whether the change is given as a plain figure with a unit of time ($3 a week, 40 boxes a day), as a percentage or a doubling (4% a year, doubles every day), or as something that happened one time (rose to $36 in March, has stayed since).',
      'Then test it. Take the first two changes and ask whether the second is the same size as the first. A plain figure is. A percentage of a bigger or a smaller amount is not. If the change was made one time, there is no second change to compare.'
    ],
    whenBoth: 'A percentage or a plain figure can point the wrong way. A percentage that is paid out each year gives a total that grows by the same number each time, which is {o:lin}. A price that went up 8% and stayed is {o:oneoff} and not {o:expg}: a percentage says how big a change is, and never how often it comes. When the problem asks how long, {o:lin} and {o:logsolve} differ in whether each change is the same size, and in {o:oneoff} the amount has stopped moving, so it never reaches a target it is not already at.' },

  { id: 'check-g1', kind: 'check', after: 'G1',
    case: 'm4-ck-g1',
    ask: { type: 'step', step: 'G1' } },

  /* ---------- The second of the key’s two questions ---------- */
  { id: 'q-g2', kind: 'question', step: 'G2',
    h: 'The second question: the amount at a given time, or the time to a target',
    link: 'The first question left one of its answers with two names. This card puts the second question and its two answers in one place and says why it comes after the first.',
    decides: [
      'Take the town of 8,000 people that grows by 3% a year. Asked for the amount after 10 years, you multiply 8,000 by 1.03 ten times and get about 10,751 people. Asked how long until it has 12,000, the number of times is what you must find, which needs a log, and it comes to about 13.7 years. The procedure for one does not work for the other.',
      'For the other two kinds the question changes nothing about the procedure. {o:lin} is worked forwards or backwards by the same steps, and {o:oneoff} gives the amount after the change, or never, by the same steps. Only for the multiplying kinds does this question decide the procedure.'
    ],
    how: [
      'Read the last sentence of the problem and find what it asks. Does it give a length of time (6 hours, 3 years, 4 doublings) and ask what the amount will be by then? Or does it give a target for the amount (double, $2,400, the whole pond) and ask how long?',
      'If you are given a time, the amount is what is missing. If you are given a target for the amount, the time is what is missing.'
    ],
    whenBoth: 'Some problems seem to give both, a time in the story and a target in the question. Read what the question asks for. A problem that says an amount doubles every day and asks when it reaches 1,000 asks for a time, even though it mentions days.' },

  { id: 'check-g2', kind: 'check', after: 'G2',
    case: 'm4-ck-g2',
    ask: { type: 'step', step: 'G2' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-growth', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, put two questions to the problem and point to the words that answer each. The questions are: {q:G1} And then: {q:G2}',
      'A change of the same size every time, up or down, is {o:lin}. Going forwards, multiply the change each time by how many times and add it to the start, or take it away if the amount goes down. Going backwards, take the start from the target and divide by the change each time.',
      'A share each time, or a doubling or a halving, is a multiplying kind. Find the {t:multiplier}: 100% plus the percentage if the amount goes up, 100% minus it if it goes down, written as a decimal. Given a time, it is {o:expg}: multiply the start by the {t:multiplier} once for each time, each time on the result of the last, and round only at the end. Given a target, it is {o:logsolve}: divide the log of target ÷ start by the log of the {t:multiplier}.',
      'A change that was made one time, with the amount staying where it reached, is {o:oneoff}. Carry the amount after the change forward as it is, and do not carry the change forward as if it came again.',
      'A percentage says how big a change is, and never by itself how often it comes. 8% every year is {o:expg}, 8% one time is {o:oneoff}, and interest that is paid out each year is {o:lin}.'
    ] }
]);
