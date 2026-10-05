// Political Ideologies, Unit Two: the faulty claims of the last stage of the drill.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. ask.type 'missing':
// "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to" lines).
// ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits, and the claim
// put right is always the last thing shown. The first claim is worked for the learner and asked of no one.

FC.cases('ideology', 'u2', [

  { id: 'c-claim-demo', use: 'claim',
    text: '"The staff association says the owners are making a fortune out of its members. So it must be calling for the company to be taken over."',
    ask: { type: 'missing', name: 'demsoc' },
    fault: 'The claim finds a complaint about the owners and jumps to a handover. Taking the workers’ side and complaining about the owners is what the first question, about whose side the text is on, reads. It is not a call for the businesses to pass out of the owners’ hands, which is what {o:demsoc} needs. Nothing in the claim shows the association asking for that.',
    corrected: 'The staff association says the owners are making a fortune out of its members. That shows the workers’ side. It would be {o:demsoc} only if the association also said the company should pass to the government, or to the people who work in it.' },

  { id: 'c-claim-tax', use: 'claim',
    text: '"The government has put a heavy tax on the biggest companies and pays for free dental care with it. That is Marxist."',
    ask: { type: 'option', step: 'C1', answer: 'keep' },
    fault: 'The claim looks at the size of the tax. A tax, however heavy, leaves the businesses with their owners, and a tax with a service paid from it is what the answer {a:C1.keep} is for. That answer leads to {o:socdem}. {o:marx} is for a text that explains how owners gain, and nothing in the claim does that.',
    corrected: 'The government has put a heavy tax on the biggest companies and pays for free dental care with it. The companies keep their businesses, so the answer is {a:C1.keep}, and the name is {o:socdem}.' },

  { id: 'c-claim-silent', use: 'claim',
    text: '"The leaflet never says who should own the factories, so the writers must want the owners left alone."',
    ask: { type: 'option', step: 'C1', answer: 'none' },
    fault: 'The claim fills a silence with a guess. A text that says nothing about the businesses gets the answer {a:C1.none}. That answer does not say the owners should be left alone. The writers may want the factories taken over, or taxed, or nothing at all, and the leaflet does not tell you. A silence is never filled with a guess.',
    corrected: 'The leaflet never says who should own the factories. So the answer to what it says about the businesses is {a:C1.none}, and you cannot say what the writers want done with them.' },

  { id: 'c-claim-coop', use: 'claim',
    text: '"A firm owned by its workers cannot be competing in a market. Owning it together is the whole point."',
    ask: { type: 'option', step: 'C1', answer: 'market' },
    fault: 'The claim treats ownership by workers as if it meant having no market. A text can give each firm to its workers and keep the market: the firms compete for customers, set their own prices and can fail. That is the answer {a:C1.market}, and it leads to {o:mktsoc}. Whether the firms compete is something the text says. The owners being workers does not settle it.',
    corrected: 'A text can say that each firm should belong to its workers and also that the firms should compete for customers and be able to fail. That is {a:C1.market}, and the name is {o:mktsoc}.' },

  { id: 'c-claim-bosses', use: 'claim',
    text: '"The text says the workers should run their own factory, so it is anarchism."',
    ask: { type: 'missing', name: 'anarch' },
    fault: 'The claim takes the workers running their factory as if it were enough. Several names want that, including {o:demsoc} and {o:mktsoc}. What {o:anarch} needs is words about the government: that it is to be got rid of, now. The claim shows none.',
    corrected: 'The text says the workers should run their own factory. That alone does not give {o:anarch}. It is {o:anarch} only if the text also wants the government got rid of, now, with people running things together without it.' },

  { id: 'c-claim-profit', use: 'claim',
    text: '"She says owners profit from what workers make. That makes her a Marxist."',
    ask: { type: 'missing', name: 'marx' },
    fault: 'The claim finds that the speaker says owners profit, and stops there. Many texts say that, including one that only complains about a single firm. What {o:marx} needs is the explanation: that owners keep part of what the work produces and do not pay for it, as the way the whole system works, whoever the owner is, with no plan for the businesses. The claim shows a remark, not an explanation.',
    corrected: 'She says owners profit from what workers make. That is a remark. It becomes {o:marx} only if she explains it as the way the whole arrangement works, for any owner, and asks for nothing to be done with the businesses.' },

  { id: 'c-claim-mines', use: 'claim',
    text: '"The party wants the mines in public hands, so it must be planning to seize power."',
    ask: { type: 'missing', name: 'ml' },
    fault: 'The claim jumps from a handover to a seizure. Public ownership of the mines is what {o:demsoc} asks for as well, and it says nothing about how power is won or held. What {o:ml} needs is that a party, or the workers, take power by force or rule alone, with no offer to give it up at an election. The claim shows none of that.',
    corrected: 'The party wants the mines in public hands. That is a handover. It would be {o:ml} only if the party also said it would take power and keep it, with no election it could lose. With no word about power, it is filed under {o:demsoc}.' },

  { id: 'c-claim-nohow', use: 'claim',
    text: '"The text wants the railway in public hands but never says how, so you cannot say what it is yet."',
    ask: { type: 'option', step: 'C2', answer: 'none' },
    fault: 'The claim treats a silence about how as a reason to hold back a name. There is an answer for it: {a:C2.none}. A text that asks for the handover and says nothing about taking power by force, or ruling alone, or getting rid of the government is {o:demsoc}, whether or not it mentions elections. That is a decision. The field itself does not draw the line in one place, and here it is drawn, so that two people using the same questions reach the same name.',
    corrected: 'The text wants the railway in public hands and says nothing about how. The answer to what it wants done with the government is {a:C2.none}, and with the handover, the name is {o:demsoc}.' }
]);
