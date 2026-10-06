// Political Ideologies, Unit Two, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, and the stem of
// every commit prompt.

FC.cards('ideology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'On the side of working people: what does the text ask for?',
    canDo: 'After this unit you can read a short text that takes the side of working people against the people who own the businesses, and give it one of seven names, by pointing to the words in it that tell you. You will also be able to say why it is not the name it looks most like.',
    everyday: [
      'You have heard these words used as one lump. A friend says a plan to tax big companies is "communism". Someone else says the same plan is "just socialism". All of these texts are on the side of working people against owners, and that is the only thing they share.',
      'They are different texts. One wants the owners to keep their businesses and pay more tax. Another wants the businesses handed to the government. Another wants no government at all. Another only says whose side it is on and stops. Each gets a different name.',
      'Two questions split them into seven names: {q:C1} and then {q:C2}. You answer each by pointing at words in the text, and where the text has no words about it, you say so.'
    ],
    map: { branch: 'class' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Social democracy ---------- */
  { id: 'meet-socdem', kind: 'meet', outcome: 'socdem',      // heading is the outcome's plain words, from the key
    link: 'The commonest text on the workers’ side leaves the businesses with their owners, and asks the government to share out what they earn more fairly.',
    case: 'c-sd-warehouse', mark: 'C1',
    strip: [
      'There are two groups in the text: the people who do the work in the warehouses, and the people who own the warehouses. The text is on the side of the first group.',
      'It does not ask for the warehouses to change hands. The owners keep them.',
      'It asks for a law that puts a floor under pay, and a tax on the owners’ profits to pay for sick pay and pensions, so that the people who do the work get a fair share.'
    ],
    explain: [
      'This text is not against owning a business. It takes for granted that the warehouses stay with their owners. What it objects to is how the money from them is divided, so it asks the government to change the dividing without changing the owner.',
      'It does this in two ways, and a text may use either one or both. A floor under pay is a minimum wage: the lowest pay the law allows. A tax on the owners’ profits is spent on things working people need, such as sick pay, pensions, health care, schooling and childcare. Both leave the business where it is. Both change who gets what.'
    ],
    feature: { step: 'C1', option: 'keep' },
    name: 'The name for this is {o:socdem}: the owners keep the businesses, and the government is asked to even out the result.' },

  { id: 'check-socdem', kind: 'check', after: 'socdem',
    case: 'c-sd-bank',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say that the owners keep the business, and that a tax or a law is asked for to share out the results more fairly? Tap them.',
           answer: "We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" } }
]);
