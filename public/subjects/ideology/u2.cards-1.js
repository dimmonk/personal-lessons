// Political Ideologies, Unit Two, part one (first half): the opening card, the bakery that runs through the unit, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, the stem of
// every commit prompt, and the heading of an again or portrait card.

FC.cards('ideology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'On the side of working people: what does the text ask for?',
    canDo: 'After this unit you can read a short text that takes the side of working people against the people who own the businesses, and give it one of seven names, by pointing to the words in it that tell you. You will also be able to say why it is not the name it looks most like. The text can be a leaflet at a workplace gate, a few lines from a union meeting, a post, a notice or the start of a manifesto.',
    everyday: [
      'You have heard these words used as one lump. A friend says a plan to tax big companies is "communism". Someone else says the same plan is "just socialism". A leaflet from a staff association is called "radical" when all it says is that the staff deserve a raise. All of these texts are on the side of working people against owners, and that is the only thing they share.',
      'Unit One taught the key’s first question, and these texts all get one answer to it: {a:D1.class}. That answer is a place to start, and it leaves a lot open. One text on the side of working people wants the owners to keep their businesses and pay more tax. Another wants the businesses handed to the government. Another wants no government at all. Another only says whose side it is on and stops. They are different texts, and the key gives them different names.',
      'This unit adds two questions to the one you know, and puts them in this order: {q:C1} and then {q:C2}. Between them they split the one answer into seven names. You answer each by pointing at words in the text, and where the text has no words about it, you say so.'
    ],
    map: { branch: 'class' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The bakery that comes back through the unit ---------- */
  { id: 'lens', kind: 'lens',
    h: 'One bakery, and the story never decides the answer',
    link: 'Every case in this unit tells a different story, so here is the one thing that does not change, and one bakery to hold it by.',
    body: [
      'Every text in this unit has two layers. The top layer is the story: a warehouse, a hospital, a ferry, a mill. The layer underneath is what the text says about the businesses and about the government. The names belong to the layer underneath. The same story can carry any of them, and each name turns up in every kind of story.',
      'Here is one bakery to hold it by. Dana owns Millbrook Bakery, and eight bakers work for her. Seven different texts could be written on the side of the bakers, and the bakery would be the same in all of them. One says: leave Dana the bakery, but tax her profits, set a floor for the bakers’ pay and pay for their sick leave and pensions. One says only that the bakers and Dana are on opposite sides, and asks you to come to a meeting. One says the bakery should pass to the government, to be run for everyone, through a vote. One says a party must take power, and the bakery will be run by its government. One says the bakers should own the bakery and run it with no government at all. One says the bakers should own it, and that it should compete with the bakery down the road, set its own prices and close if it fails. And one explains how Dana comes to keep part of what the bakers make, and asks for nothing.',
      'You do not need the names yet. Notice that the bakery, Dana, the bakers and the oven are the same every time. What differs is what the text says about who should own the bakery, and what it wants done with the government. Those are the two things the key asks about.',
      'From here on the cases change their stories on purpose. Sometimes two cases will share a story and differ only underneath. When that happens, the shared story is there to show you that it decides nothing. Two other things change on purpose: how angry a text sounds, and whether you agree with it. The answer is never a verdict on anyone. It says only what the text says.'
    ],
    fixed: ['what the text says about the businesses and what it wants done with the government, which is what the key asks about: {q:C1}, and then {q:C2}'],
    varies: ['the topic', 'the people', 'how angry it sounds', 'whether you agree with it', 'how much else the text says'] },

  /* ---------- Social democracy ---------- */
  { id: 'meet-socdem', kind: 'meet', outcome: 'socdem',      // heading is the outcome's plain words, from the key
    link: 'Unit One gave every text on the side of working people one answer. This unit splits that answer by what the text says about the businesses, and the first thing to see is the commonest: the text leaves the businesses with their owners, and asks the government to share out what they earn more fairly.',
    case: 'c-sd-warehouse', mark: 'C1',
    strip: [
      'There are two groups in the text: the people who do the work in the warehouses, and the people who own the warehouses. The text is on the side of the first group.',
      'It does not ask for the warehouses to change hands. The owners keep them.',
      'What it asks for instead is a law that puts a floor under pay, and a tax on the owners’ profits to pay for sick pay and pensions.',
      'It says why: so that the people who do the work get a fair share.'
    ],
    explain: [
      'This text is not against owning a business. It takes for granted that the warehouses stay with their owners. What it objects to is how the money from them is divided: the owners keep most of it. So it asks the government to change the dividing without changing the owner.',
      'It does this in two ways, and a text may use either one or both. One is a rule about pay. A floor under pay is a minimum wage: the lowest pay the law allows. The other is a tax on the owners’ profits, with the money spent on things working people need, such as sick pay, pensions, health care, schooling and childcare. Both leave the business where it is. Both change who gets what.',
      'People who argue for this say that businesses are good at making things and creating wealth, so they are best left running as they are, and what needs fixing is how the results are divided. People who disagree say that heavy taxes drive businesses away, or that the owners should not hold so much to begin with. Whether either side is right is argued over. For the key none of that matters: it goes by what the text asks for.'
    ],
    feature: { step: 'C1', option: 'keep' },
    name: 'The name for this is {o:socdem}. "Democracy" means that voters choose who runs the government, and "social" means to do with how a whole society shares what it makes. The name has a long history that differs from place to place, and the key does not rest on it. It uses the name for the one thing you just saw: the owners keep the businesses, and the government is asked to even out the result.' },

  { id: 'again-socdem', kind: 'again', outcome: 'socdem',
    link: 'The warehouse leaflet gave you what to point to from one case: {needs:socdem}. Here is a second case with a different story. This time the work is cleaning, and the words are spoken aloud at a meeting.',
    first: 'c-sd-warehouse', second: 'c-sd-ward', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a warehouse, a hospital contract). Look at one thing only: what the text says about the business, and what it asks the government to do for the people who work there.',
    prompt: { kind: 'phrase', answer: 'We are asking the government to tax its profits and use the money to pay for childcare' },
    shared: [
      'Both texts leave the business with its owners. The warehouse leaflet says it does not ask to take the warehouses from their owners, and the cleaners say they are not asking to own the company. Each asks the government to change how the money is shared: a floor under pay and a tax in the first, a tax and childcare in the second.',
      'The two stories share nothing else. So this holds wherever a text on the side of working people leaves the businesses with their owners and asks the government to share out what they earn more fairly. That is what {o:socdem} names.'
    ] },

  { id: 'portrait-socdem', kind: 'portrait', outcome: 'socdem',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:socdem} in real life, where nobody marks the words for you.',
    typical: [
      'Owners and workers are both named, and the text is on the workers’ side. It can be calm or angry.',
      'The businesses stay where they are. The text does not ask for them to be taken, and it often says so, as the warehouse leaflet did.',
      'What it asks for is a law, a tax or a service: a minimum wage, sick pay, pensions, health care, schooling, childcare, rules on how workers can be hired and fired.',
      'Every one of those asks is something the government as it stands can be asked to do. None of them needs a different kind of government, and the text may not say anything at all about who runs the government.'
    ],
    not: 'Wanting better pay is not enough, and neither is wanting the government to do more. What you point to is that the owners keep the businesses and the government is asked to even out the result. A text that asks for the businesses to pass out of the owners’ hands is not this name, even if it also asks for taxes and services.',
    wild: ['"Tax the rich and pay for the hospitals."', '"A fair wage and a pension for everyone."', '"Make the big companies pay their share."', '"Free schools and free health care, paid for by taxes."'],
    self: 'In your own life it is the talk at election time about minimum wages, sick pay, tuition and pensions, the argument over who should pay for care, and the union leaflet that asks for a law instead of a takeover.',
    ask: '"Do the owners keep the business, and what is the government asked to do about how the money is shared?" If both halves have words in the text, this is the name to look at.' },

  { id: 'check-socdem', kind: 'check', after: 'socdem',
    case: 'c-sd-bank',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say that the owners keep the business, and that a tax or a law is asked for to share out the results more fairly? Tap them.',
           answer: "We want a law that sets a minimum wage, and a tax on the bank's profits to pay for training that every worker in the county can use" } }
]);
