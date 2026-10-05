// Wealth Preservation, Unit One: drill cases, second stage (the cases whose story misleads) and the faulty claims of the last stage.
// echo names a teaching case of a DIFFERENT family whose story this one is built to bring back, so that the second look ("does it
// look like a case you know?") is practised where the likeness points the wrong way. also lists an answer the case shows as well as
// its own, which loses to its own by a tie-break in the key. Field guide: see u1.cases-drill-1.js.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that family>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('wealth', 'u1', [

  /* ---------- misleading ---------- */
  { id: 'd-r-company-fall', use: 'drill', tier: 'misleading', setting: 'work', topic: 'retiring next year with most of it in one company', echo: 'w-couple-fall',
    also: ['timing'],
    text: "Odile, 60, plans to retire next year. £450,000 of her £520,000 is shares in the company where she works. This spring the company's price fell by 40%, and she wonders whether to sell before it gets worse.",
    route: { D1: ['shock'] },
    cues: { D1: '£450,000 of her £520,000 is shares in the company where she works' },
    reason: { D1: 'One company is most of what she has: {cue:D1}. £450,000 out of £520,000 is about 87%. The fall and the coming retirement make it look like a fall in prices, and the case does show both. When a case shows both, the key chooses {a:D1.shock}, because the harm comes through one company.' },
    not: { outcome: 'timing', why: 'A fall and a retirement are in the case, so it looks like a fall in prices, but the fall is one company’s. Money spread over many companies would not have lost 40%.' },
    wouldChange: 'If her £520,000 were spread over hundreds of companies in funds, and she still planned to retire next year, it would be {a:D1.timing}.' },

  { id: 'd-r-quiet-year', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a fall in the year of a quiet retirement', echo: 'w-couple-fall',
    text: "Elias, 70, lives on his state pension and a work pension, which together pay all his bills. His £180,000 of savings, in shares and funds, fell by 30% this year, to £126,000. He has not sold anything, and he does not plan to touch the savings.",
    route: { D1: ['none'] },
    cues: { D1: ['which together pay all his bills', 'he does not plan to touch the savings'] },
    reason: { D1: 'A retired man and a fall of 30% in his shares bring back a case about prices falling. Read on: {cue:D1}. Nothing is waiting for the savings, so the fall catches nothing. The case has no charge, tax or sum spent, no single holding that is most of the savings, and no death or will in it.' },
    not: { outcome: 'timing', why: 'A fall in prices and a retired man look like a case about timing. But his bills are paid from elsewhere and he is not selling, so nothing is waiting for the money.' },
    wouldChange: 'If his pensions covered only half his bills, and he sold shares each month to pay the rest, the case would be {a:D1.timing}.' },

  { id: 'd-r-fixed-drop', use: 'drill', tier: 'misleading', setting: 'family', topic: 'a fixed yearly sum after two bad years', echo: 'w-exc-retired',
    also: ['timing'],
    text: "Lucy and Hal set £36,000 a year as their spending when they retired with £600,000, which is 6%. Two bad years have taken their money to £420,000, and they still take out £36,000 every year, which is now 8.6%.",
    route: { D1: ['erosion'] },
    cues: { D1: 'they still take out £36,000 every year, which is now 8.6%' },
    reason: { D1: 'A fixed sum comes out of money that has shrunk: {cue:D1}. The fall explains why the money shrank, but the case is about the sum. When a case shows both, the key chooses {a:D1.erosion}.' },
    not: { outcome: 'timing', why: 'The fall is in the case, and it explains the shrinking. But the case raises how much comes out each year, relative to what is left, and that decides it.' },
    wouldChange: 'If the sum they took out had always been about 5% of whatever their money was worth, and the only fact were that prices had fallen, it would be {a:D1.timing}.' },

  { id: 'd-r-gifts', use: 'drill', tier: 'misleading', setting: 'family', topic: 'yearly gifts and a tax at death', echo: 'w-fee',
    text: "Maud, 80, gives each of her three grandchildren £3,000 every year, £9,000 in all, out of her £1,300,000. The country takes 40% of whatever a person leaves above £500,000, and Maud has never talked to her lawyer about it.",
    route: { D1: ['handover'] },
    cues: { D1: ['The country takes 40% of whatever a person leaves above £500,000', 'gives each of her three grandchildren £3,000 every year'] },
    reason: { D1: 'The case is about what happens to the money when Maud dies, and what tax would take: {cue:D1}. £9,000 a year leaving her money looks like something taken out every year, but it is a gift to family, and what the case raises is the tax at her death. On £1,300,000 that tax would be 40% of £800,000, which is £320,000.' },
    not: { outcome: 'erosion', why: 'A sum leaves every year, but it is gifts to her grandchildren, and the tax the case raises falls once, at her death.' },
    wouldChange: 'If Maud’s money were £300,000, below the limit, and her papers were in order, the case would still be {a:D1.handover}: gifts to family are part of it.' },

  /* ---------- faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'c-demo', use: 'claim',
    text: '"Prices fell 15% this year, so my pension has lost £9,000. I’m 38 and I won’t need it for decades, but I should sell before it falls any more."',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim treats a fall in prices as a loss that has to be stopped. A fall only does harm when something has to be sold or paid on the day, and nothing in what the speaker says is waiting for the money. The fall catches nothing. Selling now would turn a fall on paper into a loss for good, and it would answer a problem that the claim does not describe.',
    corrected: 'Prices fell 15% this year, and the pension is worth £9,000 less than it was. I won’t need it for decades, and nothing in what I have raises one of the four. That is {a:D1.none}, and there is nothing more to name. It would be {a:D1.timing} only if I could point to this: {needs:timing}.' },

  { id: 'c-offshore', use: 'claim',
    text: '"My neighbour says the only way to protect a pension pot is to move it offshore and use a private bank. I have £60,000 in a pension that I add to every month, and I don’t need it for thirty years."',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim names a cure before it says what could lose the money. In what the speaker has described, nothing comes out of the pension that is mentioned, no one thing is most of it, nothing is due on a date, and no handover is raised. A structure that costs money to set up and to run is chosen after the first question has been answered, not instead of it.',
    corrected: 'I have £60,000 in a pension that I add to every month and will not need for thirty years. Nothing in that raises one of the four, so in the key’s words it is {a:D1.none}. If someone says I need a structure, I ask what could lose my money that it answers, and I ask for the answer in numbers.' },

  { id: 'c-nobuffer', use: 'claim',
    text: '"I’m 62 and I live off the shares in my £400,000. I don’t need any cash set aside. When I want money I’ll just sell some, and prices always come back."',
    ask: { type: 'option', step: 'D1', answer: 'timing' },
    fault: 'The claim says nothing needs to be arranged, because prices come back. But the speaker lives off the shares, so something is sold every month, and a sale in a fall takes place at the low price. What is sold is not there when prices come back. "Always" is a promise that nobody can make, and the case is about what happens if they do not come back soon.',
    corrected: 'I’m 62 and I live off the shares in my £400,000, with nothing set aside in cash. If prices fall, I will be selling at the low price to pay my bills. In the key’s words that is {a:D1.timing}.' },

  { id: 'c-employer', use: 'claim',
    text: '"My whole pension is in my company’s shares because I believe in the company. It isn’t a gamble if you believe in it."',
    ask: { type: 'option', step: 'D1', answer: 'shock' },
    fault: 'The claim treats belief as protection. How much the speaker believes in the company says nothing about what would happen to the pension if the company did badly, and companies can do badly for reasons nobody inside them controls. What the claim describes is one company that is the whole of the pension, and if it failed, most of {t:pot} would go with it.',
    corrected: 'My whole pension is in my company’s shares. I believe in the company, and that is a reason I chose it. It is not a reason it could not fall, and if it did, most of what I have would go with it. In the key’s words that is {a:D1.shock}.' }
]);
