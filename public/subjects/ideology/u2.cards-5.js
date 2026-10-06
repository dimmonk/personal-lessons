// Political Ideologies, Unit Two, part three (first half): a text that wants no government, the two pairs that set it beside the names
// before it, and the exception that says nothing about the businesses.

FC.cards('ideology', 'u2', [

  /* ---------- Anarchism ---------- */
  { id: 'meet-anarch', kind: 'meet', outcome: 'anarch',
    link: 'The last name had a party hold power and rule for the workers. The next wants the opposite: that no one holds power over anyone, and that there is no government.',
    case: 'c-an-print', mark: 'C2',
    strip: [
      'There are two groups in the text: the people who own the print works, and the people who work there. The text is on the workers’ side.',
      'It says the government tells the owners what is allowed, and it calls the owner and the government two rulers: "We want neither."',
      'It says the print works should belong to the people who work in it.',
      'It says the town should be run by open meetings of everyone in it, with no government at all.'
    ],
    explain: [
      'In the last name a party took power and kept it. Here no one is to hold power over anyone: not an owner, not a party, not a government. The text calls the owner and the government two kinds of ruler, and says it wants neither.',
      'The words that answer the question about the government are the last ones: the town run by open meetings, with no government at all. This does not mean disorder, and people who hold the view say so. They say that people can run their work and their towns together, by agreement, in meetings, with no one giving orders. People who disagree say that without a government there is no way to settle a dispute the meeting cannot settle, or to stop the strong from bullying the weak. Both claims are argued over. None of that matters here. What matters is that the text wants the government gone.',
      'The words "now, not used first" matter too. A text that wants a government to make the changes for the workers, and says that the government will fade away one day, has not asked for it to be got rid of now. It wants to use it. The answer here is for a text that wants it gone, and has no use for it.',
      'Notice that the marked words on this card answer the question about the government. The text also says something about the businesses: the print works are to belong to the people who work in them. But more than one name says that, and the words about the government are what set this name apart.'
    ],
    feature: { step: 'C2', option: 'gone' },
    name: 'The name for this is {o:anarch}. The word comes from a Greek word meaning "without a ruler". It does not mean "without order". The name stands for one thing: the government to be got rid of now, with people running their work and their towns together without it.' },

  { id: 'again-anarch', kind: 'again', outcome: 'anarch',
    link: 'The print-works zine gave you what to point to from one case: {needs:anarch}. Here is a second case with a different story. This time the people are building workers, and the words are in a leaflet about a development.',
    first: 'c-an-print', second: 'c-an-estate', step: 'C2',
    instruction: 'Find what the two cases share. Ignore the story (a print works, a building firm). Look at one thing only: what the text wants done with the government, and when.',
    prompt: { kind: 'phrase', answer: 'We will not wait for any government to give it to us, and we want none: we will run the work and the whole development ourselves, in meetings' },
    shared: [
      'Both texts want the government gone. The zine wants the town run by open meetings with no government at all. The building workers say they want no government and will run the work and the whole development themselves, in meetings. Neither wants a party in power, and neither wants to use the government first.',
      'Both also say the firm should belong to the people who work in it. That is true of other names too, which is why the words about the government are what you point to.',
      'The two stories share nothing else. So this holds wherever a text wants the government got rid of now, with people running things together without it. That is what {o:anarch} names.'
    ] },

  { id: 'portrait-anarch', kind: 'portrait', outcome: 'anarch',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:anarch} in real life.',
    typical: [
      'The text names the government as a ruler beside the owner, and wants neither.',
      'It says what comes in their place: meetings, councils of the people who work or live in a place, agreements between neighbors.',
      'It says now. The people are to start running things themselves, and not wait for a government to hand power over first.',
      'It is often written in a small circle, such as a zine, a flyer or a notice for a meeting, and it often speaks of doing things yourself.'
    ],
    not: 'Distrusting the government is not enough. Many texts on the owners’ side distrust it too, and many on the workers’ side want it to do more. A text that wants the government to hand the businesses to the workers, and to stay and answer to the voters, is {o:demsoc}. What you point to is the government itself to be got rid of, now, with people running things together without it.',
    wild: ['"No bosses, no government."', '"We do not need rulers, we need each other."', '"Run it ourselves, in meetings."'],
    self: 'In your own life it is the cooperative or the open meeting that runs itself with no manager. It is also the way the word "anarchy" is used for a riot, which is not what a text of this kind says.',
    ask: '"Does the text want the government got rid of, now, or used first?" If it wants it used first, it is not this name.' },

  { id: 'check-anarch', kind: 'check', after: 'anarch',
    case: 'c-an-school',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say that the government is to be got rid of, now, and not used first? Tap them.',
           answer: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" } },

  /* ---------- Two pairs that part on the government ---------- */
  { id: 'look-ml-anarch', kind: 'lookalike', ledger: 'ml~anarch',
    link: 'Both of these will not wait for an election, and both want working people to take over from the owners. They part on what is left standing afterwards.',
    cases: ['c-lk-mlan-ml', 'c-lk-mlan-an'],
    instruction: 'Both cases are about the same strike at the Garrow textile works. Compare one thing: after the workers take over, is there a party that holds power, or no government at all?',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-mlan-ml' },
    difference: [
      'In Case A the text says the workers must take power through a single party and keep it, and that no rival party is to be allowed. After the change a party holds power. The answer is {a:C2.seize}, and the case is {o:ml}.',
      'In Case B the text says there should be no party and no government, because a party that holds power is only a new boss. After the change no one holds power over the rest. The answer is {a:C2.gone}, and the case is {o:anarch}.',
      'Both say the workers must take over, and neither will wait for a vote. What separates them is whether anyone holds power afterwards.'
    ] },

  { id: 'look-demsoc-anarch', kind: 'lookalike', ledger: 'demsoc~anarch',
    link: 'The next pair also want the same thing for the businesses: each is to belong to the people who work in it. They part on the government.',
    cases: ['c-lk-dman-dm', 'c-lk-dman-an'],
    instruction: 'Both cases are about the Tarn shipyard, and both say the yard should belong to the people who work in it. Compare one thing: what the text wants done with the government.',
    prompt: { kind: 'which', option: 'C2.gone', answer: 'c-lk-dman-an' },
    difference: [
      'In Case A the text says it will win the vote in parliament and pass a law, and that the government will stay and answer to the voters. The government is kept, and it is the government that makes the change. The case is {o:demsoc}.',
      'In Case B the text says it wants no government to pass a law for it. The workers will take the yard themselves and run it with the town in open meetings. The answer is {a:C2.gone}, and the case is {o:anarch}.',
      'The yard, the welders and the owners are the same in both. What differs is whether the government is something to use or something to be rid of.'
    ] },

  { id: 'exc-flyer', kind: 'exception', looksLike: 'classonly', is: 'anarch', ledger: 'classonly~anarch',
    h: 'Nothing about the businesses, and no government',
    link: 'Here is a second case of a text that says nothing about the businesses and is not {o:classonly}.',
    case: 'c-ex-flyer',
    setup: 'This flyer is on the workers’ side, and it says nothing about who should own the warehouse. That is what you point to for {o:classonly}. Yet this case is {o:anarch}.',
    prompt: { kind: 'phrase', answer: 'We do not want a government to fix it for us: we want none. Come to the open meeting on Sunday and we will begin running things ourselves' },
    because: [
      'The flyer says nothing about who should own the warehouse, so the question about the businesses gets the answer {a:C1.none}. The question about the government is different. The flyer wants no government, and says that people will begin running things themselves. The answer is {a:C2.gone}, and that answer keeps one name, {o:anarch}.',
      'The needs line of {o:classonly} ends by saying there is no getting rid of the government. A text that wants it gone has attached something, even if it has attached nothing to the businesses.'
    ],
    take: 'Put the last two exceptions side by side. A text on the workers’ side can be silent about the businesses and still say something about power: that a party will hold it, or that no one will. The question about the government can turn a text that looks empty into a text with a name.' }
]);
