// Basic Math, Unit Four, part five: the key’s two questions (each with its check), and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on each question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u4', [

  /* ---------- The first of the key’s two questions ---------- */
  { id: 'q-g1', kind: 'question', step: 'G1',
    h: 'The first question: how the amount changes each time',
    link: 'At the foot of each kind’s first card you saw one of the two questions with one answer under it. This card puts the first question and its three answers in one place and says why it is asked before any working.',
    decides: [
      'Here is how far apart the two come. Put $1,000 at 5% a year beside $1,000 plus $50 a year: after one year both are $1,050. After thirty years the first is about $4,322 and the second is $2,500. The wrong procedure gives a neat number all the same, and nothing in the number says that it is wrong, so only the words of the problem can settle which one it is. That is why this question is put first, before any working.',
      'The question has three answers, and they lead to different names. The same number each time leads to {o:lin}. Multiplying leads to {o:expg} or {o:logsolve}, so this question alone does not finish the job, and the second question has to separate those two. A single change leads to {o:oneoff}.'
    ],
    how: [
      'Read the sentence that says what the amount does, and mark it. Ask whether the change is given as a plain figure with a unit of time ($3 a week, 40 boxes a day), as a percentage or a doubling (4% a year, doubles every day), or as something that happened one time (rose to $36 in March, has stayed since).',
      'Then test it. Take the first two changes and ask whether the second is the same size as the first. A plain figure is. A percentage of a bigger or a smaller amount is not. If the change was made one time, there is no second change to compare.',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
    ],
    whenBoth: 'A problem can show a percentage and still be an amount that adds: when the interest is paid out each year, the total paid grows by the same number every year. A problem can show a percentage and still be a single change: a price that went up 8% and stayed. And a problem can show a plain figure and still be a single change: a fee that went up by $6. In each case, ask whether the change comes again, and whether it is the same size each time.' },

  { id: 'check-g1', kind: 'check', after: 'G1',
    case: 'm4-ck-g1',
    ask: { type: 'step', step: 'G1' } },

  /* ---------- The second of the key’s two questions ---------- */
  { id: 'q-g2', kind: 'question', step: 'G2',
    h: 'The second question: the amount at a given time, or the time to a target',
    link: 'The first question left one of its answers with two names. This card puts the second question and its two answers in one place and says why it comes after the first.',
    decides: [
      'Take the town of 8,000 people that grows by 3% a year. Asked for the amount after 10 years, you multiply 8,000 by 1.03 ten times and get about 10,751 people. Asked how long until it has 12,000, there is no number of times to multiply by: the number of times is what you must find, which needs a log, and it comes to about 13.7 years. The procedure for one does not work for the other.',
      'For the other two kinds the question changes nothing about the procedure. {o:lin} is worked forwards or backwards by the same steps, and {o:oneoff} gives the amount after the change, or never, by the same steps. That is why both answers to this question lead to {o:lin} and to {o:oneoff}. Only for the multiplying kinds does this question decide the procedure.'
    ],
    how: [
      'Read the last sentence of the problem and find what it asks. Does it give a length of time (6 hours, 3 years, 4 doublings) and ask what the amount will be by then? Or does it give a target for the amount (double, $2,400, the whole pond) and ask how long, or how many times it must change?',
      'Look for the number you are given. If it is a time, the amount is what is missing. If it is a target for the amount, the time is what is missing.',
      'Put your finger on the words that show it.'
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
      'A change of the same size every time, up or down, is {o:lin}. Find the start and the change each time. Going forwards, work out the change in all, which is the change each time multiplied by how many times, and add it to the start, or take it away if the amount goes down. Going backwards, take the start from the target to find the change needed in all, and divide it by the change each time to find how many times.',
      'A share of the amount each time, or a doubling or a halving, is a multiplying kind. Find the {t:multiplier}: 100% plus the percentage if the amount goes up, 100% minus it if the amount goes down, written as a decimal, or 2 for a doubling and 0.5 for a halving.',
      'If the problem gives a time and asks for the amount, it is {o:expg}. Multiply the start by the {t:multiplier} once for each time the amount changes, each time on the result of the last, and round only at the end. Adding the first change again each time gives an answer that is too low when the amount grows.',
      'If the problem gives a target and asks how long, it is {o:logsolve}. Divide the target by the start, divide the log of that by the log of the {t:multiplier}, and check against whole numbers of times. On a {t:logscale}, each gridline up is one more multiplication by 10.',
      'A change that was made one time, with the amount staying where it reached, is {o:oneoff}. Find the amount before and after, say how big the change was, and carry the amount after the change forward as it is. A target that it is not already at is never reached unless a new change is made. Do not carry a change that was made one time forward as if it came again.',
      'A percentage says how big a change is, and never by itself how often it comes. “Fast” is not a kind. 8% every year is {o:expg}, 8% one time is {o:oneoff}, and interest that is paid out each year is {o:lin}.',
      'Check an answer against the way the kind works. A plain change gives a steady climb, a share gives a climb that gets steeper, and a change made one time gives no climb after it.'
    ] },

  { id: 'transfer-growth', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing four procedures is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: a time you watched an amount change as time passed, saved or paid off something, waited for a price, a balance or a count to reach a number, or were told that a price had changed. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'lin', occasion: 'A time something went up or down by the same number every week or month, such as a saving, a fee, a tank or a pay rate.' },
      { outcome: 'expg', occasion: 'A time something grew or shrank by a share of itself, such as interest, a debt, a price rising by a percentage, or a value falling every year.' },
      { outcome: 'logsolve', occasion: 'A time you wanted to know how long something that grows by a share would take to reach a number, such as a debt, a saving or a following.' },
      { outcome: 'oneoff', occasion: 'A time a price, a fee or a pay rate changed one time and then stayed, and you worked out what it would be later.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);
