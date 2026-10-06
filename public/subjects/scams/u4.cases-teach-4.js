// Scams, Unit Four: cases shown inside cards, part four: the two look-alike pairs that cross into the branches of Units Two and Three.
// A case whose name belongs to an earlier unit carries the whole route of its own branch (the gate, then that branch's questions),
// because the key gives every case one name by one route; no card or drill item asks it a question of this unit. Field guide: see
// u4.cases-teach-1.js.

FC.cases('scams', 'u4', [

  /* ---------- Overpayment scam against Refund scam: too much has reached you, and you are asked to send the difference back ---------- */
  { id: 'm-aziz-sale', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a coffee machine and a buyer who pays too much',
    text: "Aziz sells a coffee machine for $120. The buyer pays $320 and writes: 'I sent too much by mistake. Please send the $200 difference back to the account that I will text you.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: 'Please send the $200 difference back to the account that I will text you', M1: 'Aziz sells a coffee machine for $120', M2: 'I sent too much by mistake. Please send the $200 difference back to the account that I will text you' } },

  { id: 'm-aziz-refund', use: 'teach', tier: 'clean', setting: 'home', topic: 'a broadband refund too big',
    text: "Aziz gets a call from a man who says that he is from his broadband company: 'We refunded you $320 instead of $120 by mistake. To send the $200 difference back, I will walk you through your banking app. Please install this support tool first, so that I can see your phone.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] } },

  /* ---------- Fake official scam against One-time code scam: a call from your bank's fraud team ---------- */
  { id: 'm-elena-safe', use: 'teach', tier: 'clean', setting: 'money', topic: 'a fraud team asking for her savings',
    text: "Elena gets a call from a man who says that he is from her bank's fraud team: 'Criminals have your details, and your account is in danger. Move your savings to the safe account that I give you, now, and do not tell the branch.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'Move your savings to the safe account that I give you, now', M1: 'Criminals have your details, and your account is in danger', M2: 'Move your savings to the safe account that I give you, now, and do not tell the branch' } },

  { id: 'm-elena-code', use: 'teach', tier: 'clean', setting: 'money', topic: 'a fraud team asking for a code',
    text: "Elena gets a call from a man who says that he is from her bank's fraud team: 'Someone is trying to sign in to your account. We have just texted you a code. Please read it out to me, so that I can stop them.'",
    outcome: 'codescam', route: { D1: ['access'], A1: ['code'], A2: ['notfit'] } }
]);
