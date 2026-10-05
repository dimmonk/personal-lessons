// Political Ideologies, Unit Two, part two (first half): the businesses pass to the government, and the pair and the exception that
// set it beside the name before it.

FC.cards('ideology', 'u2', [

  /* ---------- Democratic socialism ---------- */
  { id: 'meet-demsoc', kind: 'meet', outcome: 'demsoc',
    link: 'In every text so far the owners kept their businesses, or the text said nothing about them. The next name is for a text that does not leave them where they are: the businesses pass out of the owners’ hands.',
    case: 'c-dm-ferry', mark: 'C1',
    strip: [
      'There are two groups in the text: the ferry company’s owners, who take the fares, and the crews, who take the risks. The text is on the crews’ side.',
      'It says the ferries should belong to the public, and be run by the government for everyone.',
      'The owners do not keep the ferries. They pass to the government.',
      'It says how this will come about: by asking the voters to put a government in place that will do it.'
    ],
    explain: [
      'Think back to the bakery. In the last names Dana kept her bakery, and the text either taxed her or did not mention her. Here the text says Dana should not keep the ferries. "Belong to the public" means that everyone is the owner, through the government, and the aim is that the ferries are run for the people who use them and not for a shareholder’s profit.',
      'People who argue for this say that some businesses are too important to leave to owners who run them for profit: transport, water, power, the banks. People who disagree say that governments run businesses badly, or that the owners have a right to what they built. That argument is old and it is not settled. No side is taken here: the answer goes by what the text asks for.',
      'Some texts ask only for the biggest businesses to pass to the government, such as the railways or the banks, and leave the small ones alone. That is enough for this answer. How many does not matter.',
      'This text also says how the change is to come: by the voters. That is a second thing, separate from the first. This card is about the first: who should own the businesses.',
      'The line below also rules two things out: a party seizing power, and getting rid of the government. A text that asked for either would be asking for more than a handover, and it would get another name.'
    ],
    feature: { step: 'C1', option: 'public' },
    name: 'The name for this is {o:demsoc}. "Socialism" is a word with a long history and many meanings, and this course does not rest on any of them. What it looks for is what you just saw: the businesses passing to the government. "Democratic" says that no party takes power by force or rules alone, and that the change comes through votes, or that no word is said about how.' },

  { id: 'again-demsoc', kind: 'again', outcome: 'demsoc',
    link: 'The ferry leaflet gave you what to point to from one case: {needs:demsoc}. Here is a second case with a different story. This time the business is a railway, and it is a motion at a union meeting.',
    first: 'c-dm-ferry', second: 'c-dm-signal', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (ferries, a railway). Look at one thing only: what the text says should happen to the business, and who it should belong to.',
    prompt: { kind: 'phrase', answer: 'The railway should pass into public ownership' },
    shared: [
      'Both texts say that the business should pass out of its owners’ hands. The ferry leaflet says the ferries should belong to the public, run by the government for everyone. The signal workers say the railway should pass into public ownership, run for everyone and not for its shareholders.',
      'There is one difference between them, and it is a decision made here. The ferry leaflet says how the change will come: by asking the voters. The signal workers do not say how at all. Both are filed under this name. A text that asks for the handover, and says nothing about taking power by force, or ruling alone, or getting rid of the government, is {o:demsoc}, whether or not it mentions elections. The field itself does not draw the line in one place: some would not name the second text until they knew more. The line is drawn here, so that two people using the same questions reach the same name and can each say why. It does not claim to know what the signal workers would do.',
      'The two stories share nothing else. So this holds wherever a text asks for the businesses, or the biggest of them, to pass to the government. That is what {o:demsoc} names.'
    ] },

  { id: 'portrait-demsoc', kind: 'portrait', outcome: 'demsoc',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:demsoc} in real life.',
    typical: [
      'The businesses named are usually the big, shared ones: railways, power, water, banks, the largest firms. Small shops and farms are often left out.',
      'The reason given is that the business should serve everyone and not a shareholder.',
      'The road to the change is by votes, or it is not mentioned. The text may talk about winning a majority, passing a law, standing for office, or answering to the voters afterwards.',
      'The government is meant to stay. It is the government that takes the business and runs it.'
    ],
    not: 'Wanting the government to do a lot is not enough, and neither is wanting a public service. A government that runs schools and hospitals but leaves the businesses with their owners fits {o:socdem}, not this name. What you point to is the businesses themselves passing out of the owners’ hands.',
    wild: ['"Bring the railways back into public hands."', '"Water should belong to all of us, not to shareholders."', '"Put the banks under public control and let the voters hold them to account."'],
    self: 'In your own life it is the argument over whether the buses, the trains or the power company should be owned by the town or the country, and the campaign to take a utility back into public hands.',
    ask: '"Which businesses does the text say should pass to the government, and does it say how?" If the text names a business that is to change hands, look at how the change is to be made.' },

  { id: 'check-demsoc', kind: 'check', after: 'demsoc',
    case: 'c-dm-bank',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public'] } },

  /* ---------- The pair that both ask the government to act, and the exception that asks for both ---------- */
  { id: 'look-socdem-demsoc', kind: 'lookalike', ledger: 'socdem~demsoc',
    link: 'These two both ask the government to do something about how businesses treat the people who work in them, and both can ask for pensions, health care and fair pay. This card shows where they part.',
    cases: ['c-lk-sddm-sd', 'c-lk-sddm-dm'],
    instruction: 'Both cases are about the Redmoor private hospitals, and both stand with the nurses. Compare one thing: after the government has acted, who owns the hospitals?',
    prompt: { kind: 'which', option: 'C1.public', answer: 'c-lk-sddm-dm' },
    difference: [
      'In Case A the hospitals can stay with their owners, so long as the government taxes their profits to pay for nurses’ pensions and training places. The owners still own them afterwards. The answer is {a:C1.keep}, and the case is {o:socdem}.',
      'In Case B the hospitals are to be taken from the company and run by the government for everyone. After the government acts, the owners no longer own them. The answer is {a:C1.public}, and the case is {o:demsoc}.',
      'The nurses, the profit and the night shifts are the same in both. What differs is who owns the hospitals at the end. A tax changes what the owners keep. A handover changes who the owner is.'
    ] },

  { id: 'exc-railbus', kind: 'exception', looksLike: 'socdem', is: 'demsoc', ledger: 'socdem~demsoc',
    h: 'Taxes and services, and a handover too',
    link: 'The last card separated the pair with two tidy cases. A text can also do both things: tax the owners and pay for services, and hand some businesses to the government. This card shows which name that gets.',
    case: 'c-ex-railbus',
    setup: 'This text asks for a tax on the owners of everything else, with the money spent on sick pay, pensions and schools. That is what you point to for {o:socdem}. Yet this case is {o:demsoc}.',
    prompt: { kind: 'phrase', answer: 'the railways and the bus firms should be taken from their owners and run by the government for everyone' },
    because: [
      'The text asks for tax and services, and it also asks for two kinds of business to be taken from their owners. The second is what the question about the businesses turns on. When a text shows both, the answer is {a:C1.public}, and the name is {o:demsoc}.',
      'The reason is the one the whole question is built on. A tax leaves the owner in place, and a handover does not. A text with even one handover in it has said something about who should own the businesses, and that says more than "the owners keep them".'
    ],
    take: 'It is decided this way on purpose. In life, texts mix the two, and people who study them do not all give a mixed text the same name. Each text gets one name, by the most exact thing it says about who should own the businesses, so that two people using the same questions reach the same name and can each say why.' }
]);
