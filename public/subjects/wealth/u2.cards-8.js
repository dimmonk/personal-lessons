// Wealth Preservation, Unit Two: the two cards that close the unit after the drill. Wealth Preservation is an action subject, so the unit
// closes with a plan card (lesson standard A11, P26).

FC.cards('wealth', 'u2', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Say what is taking money out of {t:pot}, and find the words in the story that show it. If you cannot find them, you do not have an answer yet.',
      'Ask what a fee pays for. A fee for picking investments and nothing else is a problem. A fee for named work that would not otherwise get done, at a price that does not grow with {t:pot}, is not. Size alone settles neither.',
      'Tax comes in three shapes: on income every year, with nothing sold; on {t:gain}, only if you sell; and on {t:gain} already made this year, with a loss waiting beside it. Each has its own fix. Do not sell just because tax is in the story. Sell only to use a loss, or when the sale has a real job to do.',
      'A fixed number of dollars taken from a pot that has shrunk is a bigger share than it was. The fix is a percentage of what {t:pot} is worth now, worked out again each year.',
      '{a:E1.nomore} is a real answer, and a common one. If you cannot find words that show a problem, do not invent one, and do not buy a cure for it.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own.',
    cues: [
      { cue: 'a statement or a letter shows a fee on my money', then: 'I add up every layer, ask what each one pays for, and write the total in dollars a year.' },
      { cue: 'someone says something I hold has done well and I should sell it', then: 'I ask what the sale is for, and work out the tax in dollars, before I answer.' },
      { cue: 'the tax year is about to end on December 31', then: 'I list what I sold and what I hold below what I paid, and check whether one can be set against the other.' },
      { cue: 'I set or review the sum I spend from my savings', then: 'I divide it by what my savings are worth today and write the share down.' },
      { cue: 'someone tells me a cost is too high, and I have already checked what it is for', then: 'I write down what I checked, set a date to look again, and leave it alone.' }
    ] }
]);
