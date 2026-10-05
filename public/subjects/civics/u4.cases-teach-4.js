// Civics, Unit Four: cases shown inside cards, part four. The three pairs of cases that set a name of this unit beside a
// look-alike from Unit Three (the same story, with the last decision made in different places), the check on the key's
// question, and the two whole cases the unit works through.
// A pair that spans two branches is separated by the key's first question, so these cases carry a route of two answers
// each (the gate, then the question of their own branch), as every case does.

FC.cases('civics', 'u4', [

  /* ---------- Look-alike with Unit Three: the same tea tax, voted and then put into practice ---------- */
  { id: 'e-tea-vote', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax on imported tea, voted', name: 'The tea tax vote',
    text: "On Wednesday the Senate voted to pass a law that puts a tax of 5 percent on imported tea, as the House had voted last month. The law now goes to the President.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'the Senate voted to pass a law that puts a tax of 5 percent on imported tea', C1: 'a tax of 5 percent on imported tea' } },

  { id: 'e-tea-form', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax on imported tea, collected', name: 'The tea tax form',
    text: "Under the law Congress passed last year that puts a tax of 5 percent on imported tea, the federal customs agency published on Wednesday the form importers must fill in to pay it. Its officers will check the forms at the ports.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the federal customs agency published on Wednesday the form importers must fill in to pay it', D1: 'the federal customs agency published on Wednesday the form importers must fill in to pay it' } },

  /* ---------- Look-alike with Unit Three: the same trade agreement, signed and then sent to the Senate ---------- */
  { id: 'e-trade-signed', use: 'teach', tier: 'clean', setting: 'world', topic: 'a trade agreement, being negotiated', name: 'The trade talks',
    text: "The President flew to Tormark on Monday and spent two days negotiating a trade agreement with its leader. On Wednesday the two leaders signed it.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'The President flew to Tormark on Monday and spent two days negotiating a trade agreement with its leader', D1: 'The President flew to Tormark on Monday and spent two days negotiating a trade agreement with its leader' } },

  { id: 'e-trade-senate', use: 'teach', tier: 'clean', setting: 'world', topic: 'a trade agreement, awaiting the Senate', name: 'The trade agreement and the Senate',
    text: "The President has signed a trade agreement with Tormark. It does not take effect until the Senate votes to approve it, and two-thirds of the senators present must vote yes. The Senate will vote on it next month.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { D1: 'The Senate will vote on it next month', C1: 'It does not take effect until the Senate votes to approve it' } },

  /* ---------- Look-alike with Unit Three: the same barbers' hours, set by a law and by an order ---------- */
  { id: 'e-barber-law', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours set by a law', name: 'The barbers’ law',
    text: "The House and the Senate both passed a law that says what hours the barbers in every state may open their shops, and the President signed it on Monday.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate both passed a law', C1: 'a law that says what hours the barbers in every state may open their shops' } },

  { id: 'e-barber-order', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours set by an order', name: 'The barbers’ order',
    text: "The President signed an executive order on Monday that says what hours the barbers in every state may open their shops. No law passed by Congress gives the President that power.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'No law passed by Congress gives the President that power', D1: 'The President signed an executive order on Monday that says what hours the barbers in every state may open their shops' } },

  /* ---------- The check on the key's question ---------- */
  { id: 'e-rentcap', use: 'check', tier: 'varied', setting: 'home', topic: 'a limit on rent rises', name: 'The rent limit',
    text: "The federal housing agency has told every landlord in the country that rent may not rise by more than 3 percent a year, and that landlords who break the rule will be fined. Congress has not passed a law about rents.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { E1: 'Congress has not passed a law about rents' },
    reason: { E1: 'The rule demands something of every landlord, and the case tells you the law is missing: {cue:E1}. Fines for breaking it are one more demand with no law behind it.' },
    not: { outcome: 'execute', why: 'An office that carries out a law is working from a law Congress passed and stays inside it. The case says there is none on rents.' } },

  /* ---------- The two whole cases ---------- */
  { id: 'e-w-hospital', use: 'teach', tier: 'clean', setting: 'health', topic: 'hospitals posting their prices', name: 'The hospital prices',
    text: "Congress passed a law last year that requires every hospital that takes federal money to post its prices for common treatments. On Monday the federal health agency published the list of treatments whose prices must be posted, the form the list must take, and the date from which it applies. It told hospitals that its auditors would check the lists.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the federal health agency published the list of treatments whose prices must be posted',
            E1: ['Congress passed a law last year that requires every hospital that takes federal money to post its prices for common treatments', 'the form the list must take, and the date from which it applies'] } },

  { id: 'e-w-harbour', use: 'teach', tier: 'misleading', setting: 'world', topic: 'a supply ship drifting during a trade visit', name: 'The drifting supply ship',
    text: "The President is visiting the port of Valmora to talk about trade with its leader. During lunch the President is told that a navy supply ship in the next bay has lost power and is drifting toward the rocks. The President ends the talks for the day and orders the three navy ships in the harbour to sail at once and tow the supply ship clear.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'The President ends the talks for the day and orders the three navy ships in the harbour to sail at once',
            E1: 'orders the three navy ships in the harbour to sail at once and tow the supply ship clear' } }
]);
