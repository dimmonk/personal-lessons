// Civics, Unit Four: cases shown inside cards, part four. The pair of cases that sets a name of this unit beside a
// look-alike from Unit Three (the same story, with the last decision made in different places), the check on the
// question, and the whole case the unit works through.
// A pair that spans two branches is separated by the key's first question, so these cases carry a route of two answers
// each (the gate, then the question of their own branch), as every case does.

FC.cases('civics', 'u4', [

  /* ---------- Look-alike with Unit Three: the same barbers' hours, set by a law and by an order ---------- */

  { id: 'e-barber-law', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours set by a law', name: 'The barbers’ law',
    text: "The House and the Senate both passed a law that says what hours the barbers in every state may open their shops, and the President signed it on Monday.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate both passed a law', C1: 'a law that says what hours the barbers in every state may open their shops' } },

  { id: 'e-barber-order', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours set by an order', name: 'The barbers’ order',
    text: "The President signed an executive order on Monday that says what hours the barbers in every state may open their shops. No law passed by Congress gives the President that power.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'No law passed by Congress gives the President that power', D1: 'The President signed an executive order on Monday that says what hours the barbers in every state may open their shops' } },

  /* ---------- The check on the question ---------- */

  { id: 'e-rentcap', use: 'check', tier: 'varied', setting: 'home', topic: 'a limit on rent rises', name: 'The rent limit',
    text: "The federal housing agency has told every landlord in the country that rent may not rise by more than 3 percent a year, and that landlords who break the rule will be fined. Congress has not passed a law about rents.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has not passed a law about rents' },
    reason: { E1: 'The rule demands something of every landlord, and the case tells you the law is missing: {cue:E1}. Fines for breaking it are one more demand with no law behind it.' },
    not: { outcome: 'execute', why: 'An office that carries out a law is working from a law Congress passed and stays inside it. The case says there is none on rents.' } },

  /* ---------- The whole case ---------- */

  { id: 'e-w-harbor', use: 'teach', tier: 'misleading', setting: 'world', topic: 'a supply ship drifting during a trade visit', name: 'The drifting supply ship',
    text: "The President is visiting the port of Valmora to talk about trade with its leader. During lunch the President is told that a navy supply ship in the next bay has lost power and is drifting toward the rocks. The President ends the talks for the day and orders the three navy ships in the harbor to sail at once and tow the supply ship clear.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'The President ends the talks for the day and orders the three navy ships in the harbor to sail at once',
            E1: 'orders the three navy ships in the harbor to sail at once and tow the supply ship clear' } }
]);
