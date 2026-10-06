// Wealth Preservation, Unit Five: drill cases for the second stage, the two whose story misleads.
// echo names a teaching case of a DIFFERENT name whose story the case is built to bring back, so that the second look ("does it look like a case you know?")
// is practiced where the likeness points the wrong way. also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  { id: 'h-r-widowfarm', use: 'drill', tier: 'misleading', setting: 'property', topic: 'a farm, a son with a poor record, and {t:poa} naming a dead husband', echo: 'm-wilf',
    also: ['people'],
    text: "Hester, 81, a widow, will leave her farm, worth $420,000, to her son Gareth, who has twice lost money in business and has asked her to sign the farm over to him early. Her will and the beneficiary form on her IRA are current. The power of attorney she signed in 2004 names her husband, who died in 2015, and nobody else. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'will leave her farm, worth $420,000, to her son Gareth', H1: 'The power of attorney she signed in 2004 names her husband, who died in 2015, and nobody else' },
    reason: { D1: 'The case is about who will receive the farm and who could act for her: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'One of the three papers names someone who has died: {cue:H1}. Without {t:poa} naming someone alive, nobody could act for her if she had a stroke. Gareth’s record is a risk in a person and is in the case, but a paper comes first. The estate is far below the limit.' },
    not: { outcome: 'governance', why: 'Gareth’s two business losses and his request make the case look like a risk in a person, and they are in the case. When a case shows both, the papers come first, and here the power of attorney names a man who has died.' } },

  { id: 'h-r-brothers', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a boat-hire firm, two sons who will not work together, and a family trust salesman', echo: 'm-anselm',
    text: "Orlando, 78, owns a boat-hire firm worth $300,000. His will leaves it equally to his sons Fritz and Gunnar, and his will, forms and power of attorney were renewed last year. A man who phoned him last week said that anyone with a family firm needs a trust. Fritz has told Orlando he will not work with Gunnar and will sell his half to the first buyer. Gunnar has said he will never allow a stranger into the firm.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'His will leaves it equally to his sons Fritz and Gunnar', H1: 'Fritz has told Orlando he will not work with Gunnar and will sell his half to the first buyer. Gunnar has said he will never allow a stranger into the firm' },
    reason: { D1: 'The case is about who will receive the firm: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'Control will pass to two people who cannot agree: {cue:H1}. One will sell to a stranger and the other will not allow it. The papers are current and $300,000 is far below the limit, so neither is the problem.' },
    not: { outcome: 'trust', why: 'A family trust has been mentioned, and a trustee might be part of the answer. But the case has no tax to answer and nothing expected to rise. What it shows is two people who cannot agree.' } }
]);
