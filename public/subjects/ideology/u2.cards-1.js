// Political Ideologies, Unit Two, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// "what to look for", the key's question and answer on a meet card, the "also called" sentence, and the stem of
// every commit prompt.

FC.cards('ideology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Before you call a plan “communism”, check what it asks for',
    canDo: 'Before you call a plan “communism” or “just socialism”, check what it actually says about the businesses and the government.',
    everyday: [
      'A friend says a plan to tax big companies is “communism”. Someone else says the same plan is “just socialism”. Both are on the side of working people against owners, and that is all they share.',
      'Read what each text asks for. One wants the owners to keep their businesses and pay more tax. Another wants the businesses handed to the government. Another wants no government at all. Another only says whose side it is on. Each gets a different name.',
      'Two questions sort them. First: {q:C1} Then: {q:C2} You answer each by finding the words in the text. If the text has no words about it, the answer is that it does not say.'
    ],
    map: { branch: 'class' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Social democracy ---------- */
  { id: 'meet-socdem', kind: 'meet', outcome: 'socdem',      // heading is the outcome's plain words, from the key
    link: 'The most common text on the workers’ side leaves the businesses with their owners and asks for a fairer share.',
    case: 'c-sd-warehouse', mark: 'C1',
    explain: [
      'The warehouse staff do not want to take the warehouses. They object to how the money is divided, so they ask the government to change the dividing, not the owner.',
      'They ask in two ways, and a text may use either or both. A floor under pay is a minimum wage: the lowest pay the law allows. A tax on the owners’ profits pays for things working people need, such as sick pay, pensions, health care and schools.'
    ],
    spot: [
      { do: 'Check the owners keep the businesses: “We do not ask to take the warehouses from them.”', why: 'If the text takes them away, it is a different name.' },
      { do: 'Find what it asks the government for: a law that puts a floor under pay, and a tax on the owners’ profits.', why: 'Both change who gets what, and neither changes who owns what.' },
      { do: 'Find where the money goes: sick pay and pensions.', why: 'The tax pays for things working people need.' }
    ],
    feature: { step: 'C1', option: 'keep' },
    name: 'This is {o:socdem}: a fairer share, with no change of owner.' },

  { id: 'check-socdem', kind: 'check', after: 'socdem',
    case: 'c-sd-bank',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say the owners keep the bank, and ask for a tax or a law to share things out more fairly? Tap them.',
           answer: "We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" } }
]);
