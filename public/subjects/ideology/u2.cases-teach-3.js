// Political Ideologies, Unit Two: cases shown inside cards, part three (Marxism, and the look-alike pairs that turn on whether a
// text explains how owners gain, or says what it wants done with the businesses).
// All texts are invented. The numbers in the pamphlets are made up to show a sum; they are not claims about any real firm.

FC.cases('ideology', 'u2', [

  /* ---------- Marxism ---------- */
  { id: 'c-mx-mill', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mill and the gap between pay and cloth', name: 'The weaver’s sums',
    text: "From a pamphlet written for the weavers of Hallam Mill: 'A weaver is paid $60 for a day's work. In that day she makes cloth that sells for $100, once the thread and the running of the loom are taken off. The $40 left over goes to the mill's owner, and the owner and the weavers want opposite things from it. This is not because the owner is cruel. Every owner has to keep a gap like it, because that is how the arrangement works: owners live from what workers make and are not paid for. We write this for the weavers, and for everyone who works for wages.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works: owners live from what workers make and are not paid for' } },

  { id: 'c-mx-class', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'an evening class on the fight over who gets what', name: 'The evening class',
    text: "From notes for an evening class at the Grayfriars workers' school: 'Each time the way of making things changes, the owners and the workers fight over who gets what, and that fight is what moves history. The owners of today's farms, shops and banks gain from what workers make and are not paid for. We teach this to working people, so that they can see how the arrangement works, and whose side it favors.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: ['the owners and the workers fight over who gets what, and that fight is what moves history', "The owners of today's farms, shops and banks gain from what workers make and are not paid for"] },
    segments: [
      { text: 'Each time the way of making things changes, the owners and the workers fight over who gets what, and that fight is what moves history', note: 'That is half of what the text explains. The other half is how the owners gain.' },
      { text: "The owners of today's farms, shops and banks gain from what workers make and are not paid for" },
      { text: 'We teach this to working people, so that they can see how the arrangement works, and whose side it favors', note: 'That says who the text is for and what it is for. The explanation itself is in the sentences before it.' }
    ] },

  { id: 'c-mx-care', use: 'check', tier: 'clean', setting: 'health', topic: 'a care chain and where its profit comes from', name: 'A care chain and where its profit comes from',
    text: "From a column in a care workers' newsletter: 'Why can a care chain make a profit at all? Because the home pays its caregivers less than the care is worth to the people who pay the fees. The owners keep the gap, and not because they are greedy: it is how a business that pays wages has to work. We write for the caregivers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'The owners keep the gap, and not because they are greedy: it is how a business that pays wages has to work' },
    reason: { C1: 'The text does not ask for anything to be done with the homes. It explains how the owners come to make a profit: {cue:C1}. That is an explanation of how the arrangement works.' } },

  /* ---------- The look-alike pair: Anarchism and Market socialism (the same bindery) ---------- */
  { id: 'c-lk-anmk-an', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bindery run in open meetings, with no rulers', name: 'A bindery run in open meetings, with no rulers',
    text: "The bookbinders at the Quill bindery say: 'The bindery's owner keeps the profit, and we do the binding, and we stand with the bookbinders. The bindery should belong to the people who work in it. We want no government telling us what to do or who to sell to: we will run the bindery and the district together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The bindery should belong to the people who work in it', C2: 'We want no government telling us what to do or who to sell to: we will run the bindery and the district together, in meetings' } },

  { id: 'c-lk-anmk-mk', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bindery competing for customers', name: 'A bindery competing for customers',
    text: "The bookbinders at the Quill bindery say: 'The bindery's owner keeps the profit, and we do the binding, and we stand with the bookbinders. The bindery should belong to the people who work in it, and it should compete with other binderies for customers, set its own prices, and close if it fails.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'The bindery should belong to the people who work in it, and it should compete with other binderies for customers, set its own prices, and close if it fails' } },

  /* ---------- The look-alike pair: Marxism and Marxism-Leninism (the same explanation) ---------- */
  { id: 'c-lk-mxml-mx', use: 'teach', tier: 'clean', setting: 'work', topic: 'a spinner’s gap, with no plan', name: 'A spinner’s gap, with no plan',
    text: "From a pamphlet at the Reed Mill: 'A spinner is paid $50 for a day's work. She makes yarn that sells for $90, once the running costs are taken off. The $40 goes to the owner. Every owner has to keep a gap like it, because that is how the arrangement works. The owners and the spinners want opposite things from that gap, and we write for the spinners.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works' } },

  { id: 'c-lk-mxml-ml', use: 'teach', tier: 'clean', setting: 'work', topic: 'a spinner’s gap, and a league taking charge', name: 'A spinner’s gap, and a league taking charge',
    text: "From a pamphlet at the Reed Mill: 'A spinner is paid $50 for a day's work. She makes yarn that sells for $90, once the running costs are taken off. The $40 goes to the owner. Every owner has to keep a gap like it, because that is how the arrangement works. The owners and the spinners want opposite things from that gap, and we write for the spinners. The spinners' party must take power and keep it, and allow no rival party.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['explain'], C2: ['seize'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: "The spinners' party must take power and keep it, and allow no rival party" } },

  /* ---------- The look-alike pair: Marxism and Anarchism (the same explanation, put to the voters or with no government) ---------- */
  { id: 'c-lk-mxan-mx', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pike-mill gap, argued to the voters', name: 'A pike-mill gap, argued to the voters',
    text: "From a pamphlet at the Pike Mill: 'A spinner is paid $48 for a day's work. She makes yarn that sells for $85, once the running costs are taken off. The $37 goes to the owner. Every owner has to keep a gap like it, because that is how the arrangement works. We write for the spinners, and we will make this case to the voters at every election.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['vote'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'we will make this case to the voters at every election' } },

  { id: 'c-lk-mxan-an', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pike-mill gap, and no rulers', name: 'A pike-mill gap, and no rulers',
    text: "From a pamphlet at the Pike Mill: 'A spinner is paid $48 for a day's work. She makes yarn that sells for $85, once the running costs are taken off. The $37 goes to the owner. Every owner has to keep a gap like it, because that is how the arrangement works. We write for the spinners, and we want no government at all: we will run the mill and the town together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['explain'], C2: ['gone'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'we want no government at all: we will run the mill and the town together, in meetings' } },

  /* ---------- The look-alike pair: Class politics with nothing attached and Marxism (the same carpet mill) ---------- */
  { id: 'c-lk-comx-co', use: 'teach', tier: 'clean', setting: 'work', topic: 'a carpet mill and a complaint against one owner', name: 'A carpet mill and a complaint against one owner',
    text: "From a notice at the Dunmore carpet mill: 'The owner of the carpet mill paid himself a bonus this year and told us there was no money for a raise. We are on the side of the weavers. Come to the cafeteria on Wednesday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the cafeteria on Wednesday' } },

  { id: 'c-lk-comx-mx', use: 'teach', tier: 'clean', setting: 'work', topic: 'a carpet mill and an account of every owner’s gap', name: 'A carpet mill and an account of every owner’s gap',
    text: "From a pamphlet at the Dunmore carpet mill: 'The owner of the carpet mill pays a weaver $60 for a day, and the weaver makes carpet worth $100 once the running costs are taken off. The gap is not this owner's greed. Every owner has to keep a gap like it, because that is how the arrangement works. We write this for the weavers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works' } },

  /* ---------- The look-alike pair: Social democracy and Marxism (the same steelworks) ---------- */
  { id: 'c-lk-sdmx-sd', use: 'teach', tier: 'clean', setting: 'work', topic: 'steelworkers who ask for a tax on profits', name: 'Steelworkers who ask for a tax on profits',
    text: "From a leaflet by the Brant steelworkers: 'The steel firm's owners make their money from what we make, and they keep most of it. The firm can stay with its owners, but a tax on its profits should pay for sick pay and a pension for every worker. We stand with the steelworkers.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: 'The firm can stay with its owners, but a tax on its profits should pay for sick pay and a pension for every worker' } },

  { id: 'c-lk-sdmx-mx', use: 'teach', tier: 'clean', setting: 'work', topic: 'steelworkers setting out how any firm works', name: 'Steelworkers setting out how any firm works',
    text: "From a pamphlet by the Brant steelworkers: 'The steel firm's owners make their money from what we make, and they keep most of it. This is not one firm's greed: it is how any firm that pays wages has to work, and every owner lives from what workers make and are not paid for. We write for the steelworkers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: "This is not one firm's greed: it is how any firm that pays wages has to work, and every owner lives from what workers make and are not paid for" } }
]);
