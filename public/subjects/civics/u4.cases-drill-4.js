// Civics, Unit Four: drill cases for the whole route, the ones whose story points the wrong way. Each is built to bring back
// a named teaching case of a different name (echo): the feedback says so, which is how the "does it look like a case
// you know?" second look is practiced.

FC.cases('civics', 'u4', [



  { id: 'e-r-fine', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a customs fee raised', echo: 'e-credit',
    text: "A law Congress passed lets the federal customs office charge importers a fee of 2 percent of the price of the goods they bring in. On Monday the office announced that from next month the fee will be 6 percent. The law sets the fee at 2 percent and gives the office no power to change it.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'the office announced that from next month the fee will be 6 percent', E1: 'The law sets the fee at 2 percent and gives the office no power to change it' },
    reason: { D1: 'The last decision in the story is the office’s: {cue:D1}. The law came first, and it is how the matter got here.',
              E1: 'The office does more than follow the law: {cue:E1}. A fee that no law allows is a demand with nothing behind it, however much the story is about a law.' },
    not: { outcome: 'execute', why: 'It looks like an office carrying out a law: a law, an office, a fee. But the office went past the law, and a rule that goes past it has no law behind it.' } },

  { id: 'e-r-memo2', use: 'drill', tier: 'misleading', setting: 'work', topic: 'safety rules for new government workers', echo: 'e-straws',
    text: "Congress passed a law that requires every federal office to train its workers in safety. On Monday the President signed an executive order telling the offices to hand each new worker a written copy of the safety rules on the first day. The order asks nothing of private companies.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the President signed an executive order telling the offices to hand each new worker a written copy of the safety rules on the first day',
            E1: ['Congress passed a law that requires every federal office to train its workers in safety', 'The order asks nothing of private companies'] },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. Nobody votes, and no judge is asked anything.',
              E1: 'A law stands behind the {t:order}, and it stays among the offices: {cue:E1}. It tells the offices how to meet the law, and demands nothing of anyone outside the government.' },
    not: { outcome: 'beyondpres', why: 'An order from the President that nobody voted on is often what {o:beyondpres} looks like. But this order asks nothing of people outside the government, and a law stands behind it.' } },

  { id: 'e-r-homecoming', use: 'drill', tier: 'misleading', setting: 'world', topic: 'soldiers brought home after an ally’s visit', echo: 'e-coasttalks',
    text: "The President and the leader of an allied country walked together past a guard of honor on Monday, and the leader thanked the President for the help. That afternoon the President ordered the three hundred soldiers who had been training in the ally’s country to come home on Friday.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'the President ordered the three hundred soldiers who had been training in the ally’s country to come home on Friday', E1: 'the President ordered the three hundred soldiers who had been training in the ally’s country to come home' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. The ceremony with the ally’s leader came earlier in the day.',
              E1: 'The order goes to the soldiers, and it says where they are to go: {cue:E1}. The ceremony and the leader’s thanks are only how the day began.' },
    not: { outcome: 'diplomacy', why: 'The visit and the ally’s leader make it look like dealing with another country. But the leader only says thank you, and the decision at the end is an order to soldiers.' } },

  { id: 'e-r-brisk', use: 'drill', tier: 'misleading', setting: 'world', topic: 'an airport and soldiers on an island country', echo: 'e-flood',
    text: "Soldiers from the navy and a field hospital reached the island country of Brisk on Monday, after the earthquake. On Tuesday the President flew to Brisk and spent the day with its government agreeing how long the soldiers will stay and who will run the airport. They signed an agreement that fixes both.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { D1: 'On Tuesday the President flew to Brisk and spent the day with its government', E1: 'the President flew to Brisk and spent the day with its government agreeing how long the soldiers will stay and who will run the airport' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. The soldiers’ arrival on Monday is how the matter got here.',
              E1: 'The President settles things with another country’s government: {cue:E1}. The soldiers are in the story, but nobody orders them anywhere.' },
    not: { outcome: 'commander', why: 'Soldiers and a field hospital make it look like an order to the armed forces. But the story ends on talks and a signed agreement with another country’s government.' } }
]);
