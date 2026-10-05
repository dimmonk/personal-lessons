// Political Ideologies, Unit Two: drill cases, third stage (finish) and the reverse items of the second stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice),
// so no choice is a false statement. The app words the question from `expect`.
// All texts are invented.

FC.cases('ideology', 'u2', [

  /* ---------- Finish: the first answers are shown, the learner finishes the route and names it ---------- */
  { id: 'c-f-sd', use: 'drill', tier: 'clean', setting: 'money', topic: 'supermarket staff and sick leave',
    text: "From a statement by the Wickham supermarket staff: 'The chain that owns the supermarkets takes a large profit and pays a small wage, and we stand with the staff. The chain can keep its supermarkets. We want a minimum wage written into law, and a tax on the chain's profits to pay for sick leave for every worker.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "The chain can keep its supermarkets. We want a minimum wage written into law, and a tax on the chain's profits to pay for sick leave for every worker", C2: 'We want a minimum wage written into law' },
    reason: { C1: 'The chain keeps its supermarkets, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The text asks for a law: {cue:C2}. It says nothing about how power is to be won or held, or about the government itself.' },
    not: { outcome: 'demsoc', why: 'The chain keeps its supermarkets. A text that asked for them to be taken from the chain and run by the government would be {o:demsoc}.' } },

  { id: 'c-f-dm', use: 'drill', tier: 'clean', setting: 'town', topic: 'railway staff who will win a majority',
    text: "From a statement of the Oldfield rail staff: 'The company that owns the lines takes the fares, and the staff take the shifts, and we stand with the staff. The lines should be taken from the company and run by the government for everyone. We will win a majority in parliament and pass the law, and the voters can remove us if they dislike it.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'The lines should be taken from the company and run by the government for everyone', C2: 'We will win a majority in parliament and pass the law, and the voters can remove us if they dislike it' },
    reason: { C1: 'The lines are to pass out of the company’s hands to the government: {cue:C1}.',
              C2: 'The change is to come through parliament, and the voters can remove those who make it: {cue:C2}.' },
    not: { outcome: 'socdem', why: 'The company does not keep the lines. A text that left the company its lines and taxed it would be {o:socdem}.' } },

  { id: 'c-f-ml', use: 'drill', tier: 'varied', setting: 'work', topic: 'a steelworkers’ council holding the town',
    text: "From a call of the Stonebridge steelworkers' council: 'The steel firm's owners and the steelworkers have nothing in common, and the council is with the steelworkers. The council will take the works and the town and keep them. It will hold no election it could lose. The works will belong to the workers who run them.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['workers'], C2: ['seize'] },
    cues: { C1: 'The works will belong to the workers who run them', C2: 'The council will take the works and the town and keep them. It will hold no election it could lose' },
    reason: { C1: 'The works are to belong to the workers who run them: {cue:C1}.',
              C2: 'The council will take power and keep it, with no election it could lose: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both want the workers to take over and neither will wait for a vote. This text has the council keep the power, and {o:anarch} wants no one to hold it.' } },

  { id: 'c-f-mx', use: 'drill', tier: 'varied', setting: 'town', topic: 'a pamphlet for fish-packers on what a cannery keeps',
    text: "From a pamphlet for the fish-packers at the Harbour Row cannery: 'A packer is paid £40 for a day and packs fish worth £65 once the ice and the tins are paid for. The £25 goes to the cannery's owner. This is how any cannery works, for any owner: owners live from what the packers make and are not paid for. This pamphlet is for the packers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'This is how any cannery works, for any owner: owners live from what the packers make and are not paid for', C2: 'This pamphlet is for the packers' },
    reason: { C1: 'The text explains how owners gain, as the way every cannery works: {cue:C1}. It asks for nothing to be done with the cannery.',
              C2: 'The text says nothing about power or the government. It says who it is for: {cue:C2}.' },
    not: { outcome: 'ml', why: 'The text explains and stops. A text that explained and then said a party would take power and keep it would be {o:ml}.' } },

  { id: 'c-f-an', use: 'drill', tier: 'varied', setting: 'work', topic: 'a boatyard crew with no rulers and no league',
    text: "From a flyer from the Kitt boatyard crew: 'The boatyard's owner takes what the boats earn, and the government keeps the rules that let him, and we are with the crew. The yard should belong to the crew. We want no government and no party: we will run the yard and the harbour together, in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The yard should belong to the crew', C2: 'We want no government and no party: we will run the yard and the harbour together, in open meetings' },
    reason: { C1: 'The yard is to belong to the crew: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants no government and no party: {cue:C2}.' },
    not: { outcome: 'mktsoc', why: 'Both give the yard to its crew. This text says nothing about competing, and wants no government. A text that kept the yard competing for customers would be {o:mktsoc}.' } },

  { id: 'c-f-mk', use: 'drill', tier: 'varied', setting: 'money', topic: 'bookshop staff who want to buy their shops by law',
    text: "From a meeting of the Alder Row bookshop staff: 'The shop's owner keeps the takings, and we sell the books. The shop should belong to its staff, and it should still compete with the other bookshops for customers, set its own prices and shut if it cannot pay its way. We will ask the voters for a law to let staff buy their shops.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['vote'] }, also: ['workers'],
    cues: { C1: 'The shop should belong to its staff, and it should still compete with the other bookshops for customers, set its own prices and shut if it cannot pay its way', C2: 'We will ask the voters for a law to let staff buy their shops' },
    reason: { C1: 'The shop is to belong to its staff and to keep competing and risk shutting: {cue:C1}.',
              C2: 'The change is to come through a law the voters are asked for: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the shop to its staff. This text keeps it competing, and leaves the government in place to pass the law. {o:anarch} would want the government gone.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'c-rev-socdem', use: 'drill', kind: 'reverse', outcome: 'socdem', expect: 'hear',
    options: [
      { text: '"Leave the company its shops, but tax its profits to pay for sick leave."', voice: 'socdem' },
      { text: '"Bring the railway into public hands and run it for everyone."', voice: 'demsoc' },
      { text: '"Come to the meeting on Thursday and stand with us."', voice: 'classonly' },
      { text: '"Every owner has to keep a gap like this one, because that is how the arrangement works."', voice: 'marx' }
    ],
    why: 'The speaker leaves the owners their businesses and asks the government to tax them and pay for something.' },

  { id: 'c-rev-classonly', use: 'drill', kind: 'reverse', outcome: 'classonly', expect: 'hear',
    options: [
      { text: '"We are on the side of the staff. Come to the gate at six."', voice: 'classonly' },
      { text: '"The party will take power, and the party will keep it."', voice: 'ml' },
      { text: '"The owners can keep the shops, and a tax on them will pay for the pensions."', voice: 'socdem' },
      { text: '"Each shop should belong to its staff and compete for customers."', voice: 'mktsoc' }
    ],
    why: 'The speaker takes the workers’ side and asks the reader to come along. Nothing is said about the businesses or the government.' },

  { id: 'c-rev-demsoc', use: 'drill', kind: 'reverse', outcome: 'demsoc', expect: 'hear',
    options: [
      { text: '"The water company should pass to the public, and we will ask the voters to do it."', voice: 'demsoc' },
      { text: '"We want no government at all, and the workers will run the water themselves."', voice: 'anarch' },
      { text: '"The workers’ party will take power, and no rival will be allowed."', voice: 'ml' },
      { text: '"The water company can keep its pipes, and a tax on it should pay for new reservoirs."', voice: 'socdem' }
    ],
    why: 'The speaker asks for the business to pass to the public, and puts the change to the voters.' },

  { id: 'c-rev-ml', use: 'drill', kind: 'reverse', outcome: 'ml', expect: 'find',
    options: [
      { text: 'It says one party will rule and that no rival party will be allowed to stand.', voice: 'ml' },
      { text: 'It says the government will stay, and the voters can remove it if they dislike it.', voice: 'demsoc' },
      { text: 'It says the government is to be got rid of, with people running things in meetings.', voice: 'anarch' },
      { text: 'It explains in a sum how any owner keeps a gap, and asks for nothing.', voice: 'marx' }
    ],
    why: 'That detail is a party taking power and keeping it, with no rival: the answer to the question about the government.' },

  { id: 'c-rev-anarch', use: 'drill', kind: 'reverse', outcome: 'anarch', expect: 'find',
    options: [
      { text: 'It says the government is to be done away with, now, and not used first.', voice: 'anarch' },
      { text: 'It says each firm should compete for customers and close if it fails.', voice: 'mktsoc' },
      { text: 'It says the workers’ party must take power and hold it.', voice: 'ml' },
      { text: 'It says the owners keep the firm and a tax pays for pensions.', voice: 'socdem' }
    ],
    why: 'That detail is the government to be got rid of, now: the answer to the question about the government.' },

  { id: 'c-rev-mktsoc', use: 'drill', kind: 'reverse', outcome: 'mktsoc', expect: 'find',
    options: [
      { text: 'It says each business should belong to its workers and compete for customers, each setting its own prices.', voice: 'mktsoc' },
      { text: 'It says each business should belong to its workers, with no government telling anyone what to do.', voice: 'anarch' },
      { text: 'It only explains how owners gain from the work.', voice: 'marx' },
      { text: 'It says the biggest businesses should pass to the government, to be run for everyone.', voice: 'demsoc' }
    ],
    why: 'That detail is each business owned by its workers and still competing: the answer to the question about the businesses.' },

  { id: 'c-rev-marx', use: 'drill', kind: 'reverse', outcome: 'marx', expect: 'hear',
    options: [
      { text: '"This is not one owner’s greed. Any owner has to keep a gap like it, and that is how the arrangement works."', voice: 'marx' },
      { text: '"The owners should pay a tax on their profits, and the money should pay for sick leave."', voice: 'socdem' },
      { text: '"Come to the meeting. We are on the side of the staff."', voice: 'classonly' },
      { text: '"The party must take power and keep it."', voice: 'ml' }
    ],
    why: 'The speaker explains how owners gain as the way the arrangement works, and asks for nothing.' }
]);
