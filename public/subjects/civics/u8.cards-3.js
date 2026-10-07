// Civics, Unit Eight, part three: a criminal case and an immigration hearing, then the oath of allegiance.
// Same shapes as parts one and two (lesson standard A12 and S4). The hearing group says plainly what the course does not hold:
// which of the accused's rights still apply in an immigration hearing. The unit skips that and does not guess.

FC.cards('civics', 'u8', [

  /* ---------- group six: a criminal case and an immigration hearing ---------- */
  { id: 'con-hearing', kind: 'concept',
    h: 'Criminal case or civil case',
    link: 'The group on the accused promised a lawyer to a person charged with a crime. This group is about a hearing where that promise works differently.',
    case: 'c8-luis',
    plain: [
      'Neither Luis nor Pavel could pay for a lawyer, and the promise of an appointed lawyer reached them in different ways. The difference is not money and not who they are. It is the kind of hearing.',
      'In a criminal case, a person is on trial for a crime. In a civil case, nobody is on trial for a crime. An immigration hearing is a civil case. The promise of an appointed lawyer is written for “the accused”, so in an immigration hearing it does not apply in the same way.',
      'That is all this course holds. It does not say which other rights still apply in an immigration hearing. If you face a real hearing, ask someone trained in immigration law.'
    ] },

  { id: 'facts-hearing', kind: 'facts',
    h: 'A criminal case and an immigration hearing',
    link: 'These are the three facts from Luis and Pavel’s Monday. Each comes with how it shows up in real life.',
    concept: 'con-hearing',
    rows: [
      { id: 'ic-crim', q: 'What do you call a court case in which a person is on trial for a crime?', a: 'A criminal case',
        relates: 'The promises to the accused, such as an appointed lawyer, are written for this. Luis is in one.' },
      { id: 'ic-civil', q: 'An immigration hearing is not a criminal case. What is it?', a: 'A civil case',
        relates: 'Nobody in an immigration hearing is on trial for a crime, and that is what makes it a civil case. Pavel is in one.' },
      { id: 'ic-immig', q: 'What becomes of the promise of an appointed lawyer in an immigration hearing?', a: 'A promise that does not apply in the same way',
        relates: 'Nobody is accused of a crime there, so an appointed lawyer in particular does not apply in the same way. That is what Pavel was told.' }
    ] },

  { id: 'chk-ic-crim', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-crim' } },
  { id: 'chk-ic-civil', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-civil' } },
  { id: 'chk-ic-immig', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-immig' } },

  { id: 'look-kind', kind: 'lookalike', ledger: 'ic-crim~ic-civil',
    h: 'Criminal and civil',
    link: 'Two of these facts are names that are easy to swap. Here they are side by side.',
    facts: ['ic-crim', 'ic-civil'],
    instruction: 'Ask one question: is the person on trial for a crime, or is nobody?',
    prompt: { kind: 'which', answer: 'ic-civil' },
    difference: [
      'Fact A is about a person on trial for a crime: {f:ic-crim}. Luis is in this one.',
      'Fact B is about a hearing where nobody is on trial for a crime: {f:ic-civil}. An immigration hearing is this, and Pavel is in it.',
      'The two names are the two answers to one question: is someone on trial for a crime?'
    ] },

  /* ---------- group seven: the oath of allegiance ---------- */
  { id: 'con-oath', kind: 'concept',
    h: 'The oath that makes you a citizen',
    link: 'So far this unit is about living here under the Constitution. The oath is the moment a person promises to live under it as a citizen.',
    case: 'c8-fatima',
    plain: [
      'Becoming a citizen ends with the Oath of Allegiance, a promise you make once, at the ceremony that makes you a citizen. “Allegiance” means loyalty. In it you give up loyalty to other countries, swear to support and defend the Constitution and the laws of the United States, and promise to serve the country in the armed forces or in civilian work of national importance when the law requires it.',
      'The oath is not the Pledge of Allegiance, the few lines schoolchildren say to the flag. The pledge is no part of becoming a citizen.',
      'Whether the country you came from treats giving up loyalty as giving up its citizenship depends on its own law. Ask its authorities before the ceremony, and do not assume.'
    ] },

  { id: 'facts-oath', kind: 'facts',
    h: 'The oath and the pledge',
    link: 'These are the five facts from Fatima’s ceremony. Each comes with how it shows up in real life.',
    concept: 'con-oath',
    rows: [
      { id: 'oa-what', q: 'What do you take at the ceremony that makes you a citizen?', a: 'The Oath of Allegiance',
        relates: 'You take it once, at the ceremony that ends the process. When everyone has finished, a judge or an official declares you a citizen.' },
      { id: 'oa-pledge', q: 'What are the few lines schoolchildren say to the flag, which are no part of becoming a citizen?', a: 'The Pledge of Allegiance',
        relates: 'Schoolchildren say it at school, and it is no part of becoming a citizen. The oath is.' },
      { id: 'oa-giveup', q: 'In the oath, what do you give up?', a: 'Loyalty to other countries',
        relates: 'Whether the country you came from treats that as giving up its citizenship depends on its law, so ask before the ceremony.' },
      { id: 'oa-support', q: 'In the oath, what do you swear to support and defend?', a: 'The Constitution and the laws of the United States',
        relates: 'The Constitution sets out who decides what. To support and defend it is to promise to respect that.' },
      { id: 'oa-serve', q: 'In the oath, what do you promise to do when the law requires it?', a: 'Serve in the armed forces or in civilian work of national importance',
        relates: 'It names two kinds of service: the armed forces, or civilian work of national importance.' }
    ] },

  { id: 'chk-oa-what', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-what' } },
  { id: 'chk-oa-pledge', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-pledge' } },
  { id: 'chk-oa-giveup', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-giveup' } },
  { id: 'chk-oa-support', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-support' } },
  { id: 'chk-oa-serve', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-serve' } },

  { id: 'look-oath', kind: 'lookalike', ledger: 'oa-what~oa-pledge',
    h: 'The oath and the pledge',
    link: 'Two of these facts are promises of loyalty with almost the same name. They get swapped, so here they are side by side.',
    facts: ['oa-what', 'oa-pledge'],
    instruction: 'Ask when each one is said and who says it: once, at a ceremony, or by schoolchildren to the flag.',
    prompt: { kind: 'which', answer: 'oa-pledge' },
    difference: [
      'Fact A is the promise that makes a person a citizen: {f:oa-what}. It is made once, at the ceremony.',
      'Fact B is the lines schoolchildren say to the flag: {f:oa-pledge}. It is no part of becoming a citizen.',
      'Both names end in “Allegiance”. What tells them apart is the occasion: a ceremony that makes someone a citizen, or a school morning.'
    ] }
]);
