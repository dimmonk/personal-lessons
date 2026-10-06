// Civics, Unit Eight, part three: a criminal case and an immigration hearing, then the oath of allegiance.
// Same shapes as parts one and two (lesson standard A12 and S4). The hearing group says plainly what the course does not hold:
// which of the accused's rights still apply in an immigration hearing. The unit skips that and does not guess.

FC.cards('civics', 'u8', [

  /* ---------- group six: a criminal case and an immigration hearing ---------- */
  { id: 'con-hearing', kind: 'concept',
    h: 'Two kinds of case: criminal and civil',
    link: 'The group on the accused promised a lawyer to a person charged with a crime. This group is about a place where that promise works differently.',
    case: 'c8-luis',
    plain: [
      'Luis and Pavel could not pay for a lawyer, and the promise of an appointed lawyer reached them in different ways. The difference is the kind of case, not money and not who they are.',
      'A criminal case is one in which a person is on trial for a crime. A civil case is one in which nobody is on trial for a crime, and an immigration hearing is a civil case. The promise of an appointed lawyer is written for ‘the accused’, so in an immigration hearing it does not apply in the same way.',
      'That is all the course holds: it does not say which other rights still apply in an immigration hearing. For a real hearing, ask someone trained in immigration law.'
    ] },

  { id: 'facts-hearing', kind: 'facts',
    h: 'A criminal case and an immigration hearing',
    link: 'These are the three facts of Luis and Pavel’s Monday, each with how it fits the idea that the kind of case decides how the promise works.',
    concept: 'con-hearing',
    rows: [
      { id: 'ic-crim', q: 'What kind of case is one in which a person is on trial for a crime?', a: 'A criminal case',
        relates: 'A person on trial for a crime is accused, and the promises to the accused, such as an appointed lawyer, are written for this kind of case. Luis is in one.' },
      { id: 'ic-civil', q: 'An immigration hearing is not a criminal case. What kind of case is it?', a: 'A civil case',
        relates: 'Nobody in an immigration hearing is on trial for a crime, which is what makes it a civil case. Pavel is in one.' },
      { id: 'ic-immig', q: 'What becomes of the promise of an appointed lawyer in an immigration hearing?', a: 'A promise that does not apply in the same way',
        relates: 'Nobody is accused of a crime there, so appointed counsel in particular does not apply in the same way.' }
    ] },

  { id: 'chk-ic-crim', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-crim' } },
  { id: 'chk-ic-civil', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-civil' } },
  { id: 'chk-ic-immig', kind: 'check', after: 'facts-hearing', ask: { type: 'fact', row: 'ic-immig' } },

  { id: 'look-kind', kind: 'lookalike', ledger: 'ic-crim~ic-civil',
    h: 'Criminal and civil',
    link: 'Two of the three facts are the names of two kinds of case that are easy to swap. They go side by side.',
    facts: ['ic-crim', 'ic-civil'],
    instruction: 'Compare what each question asks: is the person on trial for a crime, or is nobody?',
    prompt: { kind: 'which', answer: 'ic-civil' },
    difference: [
      'Fact A is about a person who is on trial for a crime: {f:ic-crim}. Luis is in this kind of case.',
      'Fact B is about a case in which nobody is on trial for a crime: {f:ic-civil}. An immigration hearing is this kind of case, and Pavel is in it.',
      'The two words are the two answers to one question: is a person on trial for a crime?'
    ] },

  /* ---------- group seven: the oath of allegiance ---------- */
  { id: 'con-oath', kind: 'concept',
    h: 'The oath that ends the process of becoming a citizen',
    link: 'The groups so far are about living here under the Constitution. The oath is the moment a person promises to live under it as a citizen.',
    case: 'c8-fatima',
    plain: [
      'Becoming a citizen ends with the Oath of Allegiance, a promise made once, at the ceremony that makes a person a citizen. ‘Allegiance’ means loyalty. In it a person gives up loyalty to other countries, swears to support and defend the Constitution and the laws of the United States, and promises to serve the country in the armed forces or in civilian work of national importance when the law requires it.',
      'The oath is not the Pledge of Allegiance, the few lines schoolchildren say to the flag. The pledge is not part of becoming a citizen.',
      'Whether your country of origin treats giving up loyalty as giving up its citizenship depends on that country’s law. Check with its authorities before the ceremony, and do not assume.'
    ] },

  { id: 'facts-oath', kind: 'facts',
    h: 'The oath and the pledge',
    link: 'These are the five facts of Fatima’s ceremony, each with how it fits the idea that the oath is the promise that makes a person a citizen.',
    concept: 'con-oath',
    rows: [
      { id: 'oa-what', q: 'What do you take at the ceremony that makes you a citizen?', a: 'The Oath of Allegiance',
        relates: 'It is made once, at the ceremony that ends the process, and when people finish a judge or an official declares them citizens.' },
      { id: 'oa-pledge', q: 'What are the few lines that schoolchildren say to the flag, which are not part of becoming a citizen?', a: 'The Pledge of Allegiance',
        relates: 'It is said by schoolchildren and it is not part of becoming a citizen. The oath is.' },
      { id: 'oa-giveup', q: 'In the oath, what do you give up?', a: 'Loyalty to other countries',
        relates: 'Whether your country of origin treats that as giving up its citizenship depends on its law, so check before the ceremony.' },
      { id: 'oa-support', q: 'In the oath, what do you swear to support and defend?', a: 'The Constitution and the laws of the United States',
        relates: 'The Constitution settles who decides, so to support and defend it is to promise to respect that settlement.' },
      { id: 'oa-serve', q: 'In the oath, what do you promise to do when the law requires it?', a: 'Serve in the armed forces or in civilian work of national importance',
        relates: 'It names two kinds of service: in the armed forces, or in civilian work of national importance.' }
    ] },

  { id: 'chk-oa-what', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-what' } },
  { id: 'chk-oa-pledge', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-pledge' } },
  { id: 'chk-oa-giveup', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-giveup' } },
  { id: 'chk-oa-support', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-support' } },
  { id: 'chk-oa-serve', kind: 'check', after: 'facts-oath', ask: { type: 'fact', row: 'oa-serve' } },

  { id: 'look-oath', kind: 'lookalike', ledger: 'oa-what~oa-pledge',
    h: 'The oath and the pledge',
    link: 'Two of the five facts are two promises of loyalty with almost the same name. They get swapped, so they go side by side.',
    facts: ['oa-what', 'oa-pledge'],
    instruction: 'Compare when each one is said and who says it: once, at a ceremony, or by schoolchildren to the flag.',
    prompt: { kind: 'which', answer: 'oa-pledge' },
    difference: [
      'Fact A is the promise that makes a person a citizen: {f:oa-what}. It is made once, at the ceremony.',
      'Fact B is the lines that schoolchildren say to the flag: {f:oa-pledge}. It is no part of becoming a citizen.',
      'Both names end in ‘Allegiance’. What separates them is the occasion: a ceremony that makes someone a citizen, or a school morning.'
    ] }
]);
