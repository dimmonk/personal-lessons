// Wealth Preservation, Unit One: drill cases, second stage (the cases whose story misleads) and the faulty claims of the last stage.
// echo names a teaching case of a DIFFERENT family whose story this one is built to bring back, so that the second look ("does it
// look like a case you know?") is practiced where the likeness points the wrong way. also lists an answer the case shows as well as
// its own, which loses to its own by a tie-break in the key. wouldChange says what would make the case a different answer; it is
// written only where it teaches something the cards did not. Field guide: see u1.cases-drill-1.js.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that family>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('wealth', 'u1', [

  { id: 'd-r-company-fall', use: 'drill', tier: 'misleading', setting: 'work', topic: 'retiring next year with most of it in one company', echo: 'w-couple-fall',
    also: ['timing'],
    text: "Odile, 60, plans to retire next year. $450,000 of her $520,000 is shares in the company where she works. This spring the company's price fell by 40%, and she wonders whether to sell before it gets worse.",
    route: { D1: ['shock'] },
    cues: { D1: '$450,000 of her $520,000 is shares in the company where she works' },
    reason: { D1: 'One company is most of what she has: {cue:D1}. The fall and the coming retirement make it look like {a:D1.timing}, but when a story shows both, {a:D1.shock} wins, because the harm comes through one company.' },
    not: { outcome: 'timing', why: 'A fall and a retirement are in the story, but the fall is one company’s. Money spread over many companies would not have lost 40%.' },
    wouldChange: 'If her $520,000 were spread over hundreds of companies in funds and she still planned to retire next year, it would be {a:D1.timing}.' },

  { id: 'd-r-quiet-year', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a fall in the year of a quiet retirement', echo: 'w-couple-fall',
    text: "Elias, 70, lives on his Social Security and a pension from his old employer, which together pay all his bills. His $180,000 of savings, in shares and funds, fell by 30% this year, to $126,000. He has not sold anything, and he does not plan to touch the savings.",
    route: { D1: ['none'] },
    cues: { D1: ['which together pay all his bills', 'he does not plan to touch the savings'] },
    reason: { D1: 'A retired man and a 30% fall look like {a:D1.timing}, but read on: {cue:D1}. Nothing is waiting for the savings, so the fall catches nothing.' },
    not: { outcome: 'timing', why: 'A fall and a retired man look like {a:D1.timing}. But his bills are paid from elsewhere and he is selling nothing.' } },

  { id: 'd-r-fixed-drop', use: 'drill', tier: 'misleading', setting: 'family', topic: 'a fixed yearly sum after two bad years', echo: 'w-couple-fall',
    also: ['timing'],
    text: "Lucy and Hal set $36,000 a year as their spending when they retired with $600,000, which is 6%. Two bad years have taken their money to $420,000, and they still take out $36,000 every year, which is now 8.6%.",
    route: { D1: ['erosion'] },
    cues: { D1: 'they still take out $36,000 every year, which is now 8.6%' },
    reason: { D1: 'A fixed sum comes out of money that has shrunk: {cue:D1}. The fall explains why the money shrank, but the story is about the sum, and when it shows both, {a:D1.erosion} wins.' },
    not: { outcome: 'timing', why: 'The fall is in the story and explains the shrinking. But what decides it is how much comes out each year compared with what is left.' },
    wouldChange: 'If the sum they took out had always been about 5% of whatever the money was worth, and the only fact were that prices fell, it would be {a:D1.timing}.' },

  { id: 'c-demo', use: 'claim',
    text: '"Prices fell 15% this year, so my 401(k) has lost $9,000. I’m 38 and I won’t need it for decades, but I should sell before it falls any more."',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim treats a fall in prices as a loss that has to be stopped. But a fall only does harm when something has to be sold or paid on the day, and nothing is waiting for this money.',
    corrected: 'Prices fell 15% this year, so my 401(k) is worth $9,000 less. I won’t need it for decades, so the fall catches nothing. That is {a:D1.none}, and selling now would turn a loss on paper into a real one. It would be {a:D1.timing} only if I could find this: {needs:timing}.' },

  { id: 'c-offshore', use: 'claim',
    text: '"My neighbor says the only way to protect your savings is to move them offshore and use a private bank. I have $60,000 in a 401(k) that I add to every month, and I don’t need it for thirty years."',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim names a fix before it says what could lose the money. In what the speaker describes, nothing comes out, nothing is most of the money, nothing is due on a date, and nothing is being passed on.',
    corrected: 'I have $60,000 in a 401(k) that I add to every month and will not need for thirty years. Nothing in that could lose it, so it is {a:D1.none}. If someone says I need a fix, I ask what it protects me from, and I ask for the answer in numbers.' },

  { id: 'c-nobuffer', use: 'claim',
    text: '"I’m 62 and I live off the shares in my $400,000. I don’t need any cash set aside. When I want money I’ll just sell some, and prices always come back."',
    ask: { type: 'option', step: 'D1', answer: 'timing' },
    fault: 'The claim says nothing needs arranging because prices always come back. But he sells shares every month, so each sale in a fall is at the low price, and what he sells is not there when prices recover.',
    corrected: 'I’m 62 and I live off the shares in my $400,000. I have nothing else to spend, such as cash or {t:bond} that pays on the day, so if prices fall I will be selling at the low price to pay my bills. That is {a:D1.timing}.' }
]);
