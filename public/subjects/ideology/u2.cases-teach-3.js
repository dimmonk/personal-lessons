// Political Ideologies, Unit Two: cases shown inside cards, part three (Marxism, and the look-alike pairs for Anarchism and Market
// socialism, and for Class politics with nothing attached and Marxism).

FC.cases('ideology', 'u2', [

  { id: 'c-mx-mill', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mill and the gap between pay and cloth', name: 'The weaver’s sums',
    text: "From a pamphlet written for the weavers of Hallam Mill: 'A weaver is paid $60 for a day's work. In that day she makes cloth that sells for $100, once the thread and the running of the loom are taken off. The $40 left over goes to the mill's owner, and the owner and the weavers want opposite things from it. This is not because the owner is cruel. Every owner has to keep a gap like it, because that is how the arrangement works: owners live from what workers make and are not paid for. We write this for the weavers, and for everyone who works for wages.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works: owners live from what workers make and are not paid for' } },

  { id: 'c-mx-care', use: 'check', tier: 'clean', setting: 'health', topic: 'a care chain and where its profit comes from', name: 'A care chain and where its profit comes from',
    text: "From a column in a care workers' newsletter: 'Why can a care chain make a profit at all? Because the home pays its caregivers less than the care is worth to the people who pay the fees. The owners keep the gap, and not because they are greedy: it is how a business that pays wages has to work. We write for the caregivers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'The owners keep the gap, and not because they are greedy: it is how a business that pays wages has to work' },
    reason: { C1: 'The text explains how the owners make a profit: {cue:C1}. It asks for nothing to be done with the homes.' } },

  { id: 'c-lk-anmk-an', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bindery run in open meetings, with no rulers', name: 'A bindery run in open meetings, with no rulers',
    text: "The bookbinders at the Quill bindery say: 'The bindery's owner keeps the profit, and we do the binding, and we stand with the bookbinders. The bindery should belong to the people who work in it. We want no government telling us what to do or who to sell to: we will run the bindery and the district together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The bindery should belong to the people who work in it', C2: 'We want no government telling us what to do or who to sell to: we will run the bindery and the district together, in meetings' } },

  { id: 'c-lk-anmk-mk', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bindery competing for customers', name: 'A bindery competing for customers',
    text: "The bookbinders at the Quill bindery say: 'The bindery's owner keeps the profit, and we do the binding, and we stand with the bookbinders. The bindery should belong to the people who work in it, and it should compete with other binderies for customers, set its own prices, and close if it fails.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'The bindery should belong to the people who work in it, and it should compete with other binderies for customers, set its own prices, and close if it fails' } },

  { id: 'c-lk-comx-co', use: 'teach', tier: 'clean', setting: 'work', topic: 'a carpet mill and a complaint against one owner', name: 'A carpet mill and a complaint against one owner',
    text: "From a notice at the Dunmore carpet mill: 'The owner of the carpet mill paid himself a bonus this year and told us there was no money for a raise. We are on the side of the weavers. Come to the cafeteria on Wednesday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the cafeteria on Wednesday' } },

  { id: 'c-lk-comx-mx', use: 'teach', tier: 'clean', setting: 'work', topic: 'a carpet mill and an account of every owner’s gap', name: 'A carpet mill and an account of every owner’s gap',
    text: "From a pamphlet at the Dunmore carpet mill: 'The owner of the carpet mill pays a weaver $60 for a day, and the weaver makes carpet worth $100 once the running costs are taken off. The gap is not this owner's greed. Every owner has to keep a gap like it, because that is how the arrangement works. We write this for the weavers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every owner has to keep a gap like it, because that is how the arrangement works' } }
]);
