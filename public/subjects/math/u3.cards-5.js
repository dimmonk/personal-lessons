// Basic Math, Unit Three, part five: the key's one question, the check on it, and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u3', [

  /* ---------- The key's one question ---------- */
  { id: 'q-a1', kind: 'question', step: 'A1',
    h: 'The one question that tells the four kinds apart',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its four answers in one place and says why it is asked before any working.',
    decides: [
      'A wrong procedure gives a number just as neat as the right one, and nothing in the number says that it is wrong. So the number cannot tell you which procedure to use, or whether you used the right one. Only the question can, and only the words of the problem can answer the question.',
      'That is why this question comes before any working, and why every problem in this unit starts with it. In this unit it is the only question after the first one, so its answer leads straight to a name, and the name leads to the procedure. Your answers on the way are your answer to the first question and then your answer to this one.'
    ],
    how: [
      'Read the last sentence of the problem first, because the question is usually there, and then read what the rest of the problem gives. Find the words that say what the missing number must fit, and mark them.',
      'Then look at what is given. A rule with its result leads to the first answer ({a:A1.formula}). So much for so many and a new amount lead to the second ({a:A1.rate}). Two missing numbers with two facts lead to the third ({a:A1.totals}), and a missing number that is multiplied by itself leads to the fourth ({a:A1.itself}).',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
    ],
    whenBoth: 'Some problems show two of the answers at once, and then there is a rule. A price for each thing with a fixed charge on top is a calculation to undo, so it gets the first answer and not the second. A rule with a result that has the missing number in it twice gets the fourth answer and not the first. Each of these has been shown on a card of its own in this unit, and the other pairs that people mix up have been set side by side too.' },

  { id: 'check-a1', kind: 'check', after: 'A1',
    case: 'm3-step-dye',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-unknown', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, ask what the problem hands you for the missing number to match, and point to the words that say it. If you cannot point to them, you do not have an answer yet. The question is: {q:A1}',
      'A rule with its result leads to {o:rearr}. So much for so many and a new amount lead to {o:prop}. Two missing numbers with two facts lead to {o:simul}. A missing number multiplied by itself leads to {o:quad}.',
      'The numbers do not tell you the kind. The same 28 m² of rug can ask for a length from a width, which is {o:rearr}, or for a width when the length is 3 m more, which is {o:quad}.',
      'Two kinds can pass for another. A price for each thing with a fixed charge on top is a calculation, so it is {o:rearr}, and not {o:prop}. A rule that has the missing number in it twice is {o:quad}, and not {o:rearr}, even when it comes with a result.',
      'For {o:rearr}: list what is done to the missing number, write the undoing of each, last one first, apply the undoing to the result, and check by running the {t:formula} forward. The undoing is in reverse order because the last thing done sits outside the others.',
      'For {o:prop}: pair the new amount with the matching number in the rate, find how many times as big it is, make the other number that many times as big, and check the direction: more of one must mean more of the other.',
      'For {o:simul}: use the count fact to write one letter in terms of the other, put that into the totals fact so that one letter is left, solve it, find the other number from the count fact, and check both facts.',
      'For {o:quad}: write the equation as x² + b × x = c, dividing every term by any number in front of x². Add half of b, {t:squared}, to both sides, write the left side as one number {t:squared}, take the {t:sqroot} of both sides keeping both answers, and take away half of b. A result below zero means that there is no answer, and an answer the story rules out is thrown out.'
    ] },

  { id: 'transfer-unknown', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing four procedures is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: a time you worked back from a price or a score, stretched a recipe or an amount at a fixed rate, split a total between two prices, or fitted something to an area. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'rearr', occasion: 'A time you knew what something came to and wanted the number that went into it, such as the price before a discount or the score needed to reach an average.' },
      { outcome: 'prop', occasion: 'A time you scaled a recipe, a price or a rate to a bigger or smaller amount.' },
      { outcome: 'simul', occasion: 'A time you knew how many things there were and what they came to in all, and wanted to know how many of each of two kinds.' },
      { outcome: 'quad', occasion: 'A time a length was linked to another length and you had to fit a space to an area.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);
