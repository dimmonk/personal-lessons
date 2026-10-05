// Basic Math, Unit Two, part five: the key's one question, the check on it, and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u2', [

  /* ---------- The key's one question ---------- */
  { id: 'q-w1', kind: 'question', step: 'W1',
    h: 'The one question that tells the six kinds apart',
    link: 'At the foot of each kind’s first card you saw the key’s question with one answer under it. This card puts the question and its six answers in one place, as the key shows them, and says why the key asks it before any working.',
    decides: [
      'A wrong procedure gives a number just as neat as the right one, and nothing in the number says that it is wrong. So the number cannot tell you which procedure to use, or whether you used the right one. Only the question can, and only the words of the problem can answer the question.',
      'That is why this question comes before any working, and why every problem in this unit starts with it. In this unit it is the only question after the key’s first one, so its answer leads straight to a name, and the name leads to the procedure. Your route is the answer to the first question and then this one.'
    ],
    how: [
      'Read the last sentence of the problem first, because the question is usually there. Find the words that say what is wanted about the number or numbers, and mark them.',
      'Then count the numbers. One number leads to a yes or a no ({a:W1.split}), to a list ({a:W1.parts}), or, when it is a root or pi, to the question of being exact. Two numbers lead to a piece that fits both ({a:W1.piece}) or to two repeats that meet ({a:W1.together}), and what is asked decides which. A count with one group size or one loop leads to what is left over.',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
    ],
    whenBoth: 'No problem in this unit shows two of the answers at once, because each answer asks something different about the numbers. But some pairs of kinds share a story, or even the same numbers, and those are the pairs that people mix up. Each has been set side by side in this unit, and each has a question that tells it apart.' },

  { id: 'check-w1', kind: 'check', after: 'W1',
    case: 'wd-musicbox',
    ask: { type: 'step', step: 'W1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-whole', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all six kinds on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any working, ask what the problem wants to know about its numbers, and point to the words that say it. If you cannot point to them, you do not have an answer yet. The key asks: {q:W1}',
      'One number leads to {o:prime}, a yes or a no, or to {o:factor}, a list. Two numbers lead to {o:hcf}, the biggest piece that fits both, or to {o:lcm}, the first time two repeats meet. A count with one group size or one loop leads to {o:modrem}. A root or pi, with the question whether it can be written exactly, leads to {o:irrat}.',
      'The numbers do not tell you the kind. 12 and 18 can ask for the biggest equal piece, 6, or for the first time two repeats meet, 36.',
      'Two numbers have a check on the answer. The biggest equal piece is never more than the smaller number, and the first time two repeats meet is never less than the bigger one.',
      'For {o:prime}: find where testing can stop, list the primes up to there, divide by each in turn, and stop at the first exact fit. One exact fit shows that the number splits. No fit up to the stopping point shows that it is a {t:prime}.',
      'For {o:factor}: split off the smallest prime that fits, do the same to what is left until a prime is left, and write the number as the product of every prime split off. Multiplying back gives the number again. For every way a number splits, build every product of the primes and leave out 1 and the number itself where the problem asks for more than one group and more than one in each.',
      'For {o:hcf} and {o:lcm}: break both numbers into primes. Keep the primes that both numbers have, as many times as the number that has it fewer times, and multiply them for the biggest equal piece. Keep every prime that either number has, as many times as the number that has it more times, and multiply them for the first time two repeats meet.',
      'For {o:modrem}: find how many whole groups, or whole loops, fit in the count, take them away to find what is left over, and move on from the start by that much. What is left over is always less than the group, and a left over of nothing means the count has just finished a whole group or loop.',
      'For {o:irrat}: a {t:sqroot} of a whole number can be written exactly only if the number is a whole number multiplied by itself. Otherwise it can only be rounded, however many digits are shown. Pi can never be written exactly.'
    ] },

  { id: 'transfer-whole', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing six procedures is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the six and name an occasion of your own: a time you shared something out, packed or cut things into equal pieces, waited for two things to coincide, worked out a day or a time ahead, or wondered whether a number from a calculator was exact. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'prime', occasion: 'A time you wondered whether a number of things could be arranged in even rows, teams or packs.' },
      { outcome: 'factor', occasion: 'A time you wanted every way to arrange a number of things, or to break a number down.' },
      { outcome: 'hcf', occasion: 'A time you cut or packed two different amounts into pieces of one size, with nothing wasted.' },
      { outcome: 'lcm', occasion: 'A time two things that repeat on different schedules had to be lined up.' },
      { outcome: 'modrem', occasion: 'A time you shared something out and some were left, or worked out a day or a time some way ahead.' },
      { outcome: 'irrat', occasion: 'A time you saw a long decimal on a calculator and wondered whether it was the exact value.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);
