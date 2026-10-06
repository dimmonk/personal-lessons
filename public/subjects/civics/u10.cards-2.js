// Civics, Unit Ten, part two: the changes of the factory years (what each did), and the line of landmarks from 1917 to 2001
// (when each was). Concept card, facts card, one check per fact, and a look-alike card where two facts are swapped.

FC.cards('civics', 'u10', [

  /* ---------- group three: what four changes of the factory years did ---------- */
  { id: 'con-laws', kind: 'concept',
    h: 'Four changes of the factory years, and what each did',
    link: 'The first two groups were about the arrivals. The third is about four changes made in the same years, and the facts are what each one did.',
    case: 'c10-laws',
    plain: [
      'Priya’s cousin has asked about two things that people take for granted, and the answers are two amendments. Both were made in 1913, in the same year, so for these two it is what each did, and not the year, that tells them apart.',
      'The Sixteenth Amendment allowed a federal income tax: a tax on what people earn. Congress already had the power to tax, and the amendment added to it. The Seventeenth Amendment made senators elected by voters. Before it, state legislatures chose them. Both came in the years of big industry and big cities.',
      'Two more changes belong to the same years. In 1882 Congress passed the Chinese Exclusion Act, which was a bar on a group of people coming in because of where they came from. And reformers and labor unions pushed for shorter hours and an end to child labor. The four facts below are what each of these four did or asked for.'
    ] },

  { id: 'facts-laws', kind: 'facts',
    h: 'What four changes did',
    link: 'These are the four facts, each with how it fits the idea of a country changing its rules as it changed.',
    concept: 'con-laws',
    rows: [
      { id: 'lw-sixteenth', q: 'What did the Sixteenth Amendment, from 1913, allow?', a: 'A federal income tax',
        relates: 'It lets the federal government tax what people earn. Congress already had the power to tax, and the amendment added to it. An amendment changes the Constitution itself, which is why this was a change to the rules of the whole country.' },
      { id: 'lw-seventeenth', q: 'What did the Seventeenth Amendment, from 1913, change about senators?', a: 'Senators elected by voters',
        relates: 'Before it, state legislatures chose the senators, and after it the voters did. So when Priya votes for a senator, she is using the change that this amendment made.' },
      { id: 'lw-exclusion', q: 'What was the Chinese Exclusion Act of 1882?', a: 'A bar on a group of people coming in, because of where they came from',
        relates: 'It was the first major law of its kind, and Congress passed it. It is the one of the four that is about arrival and not about the Constitution.' },
      { id: 'lw-reform', q: 'What did reformers and labor unions of these years push for?', a: 'Shorter hours and an end to child labor',
        relates: 'This fact is about people pushing for a change, and not about a law. The unit holds what they asked for, and says nothing about what came of it, because this course holds nothing about it.' }
    ] },

  { id: 'chk-lw-sixteenth', kind: 'check', after: 'facts-laws', ask: { type: 'fact', row: 'lw-sixteenth' } },
  { id: 'chk-lw-seventeenth', kind: 'check', after: 'facts-laws', ask: { type: 'fact', row: 'lw-seventeenth' } },
  { id: 'chk-lw-exclusion', kind: 'check', after: 'facts-laws', ask: { type: 'fact', row: 'lw-exclusion' } },
  { id: 'chk-lw-reform', kind: 'check', after: 'facts-laws', ask: { type: 'fact', row: 'lw-reform' } },

  { id: 'look-laws', kind: 'lookalike', ledger: 'lw-sixteenth~lw-seventeenth',
    h: 'Two amendments of the same year',
    link: 'Two of the four facts are amendments from the same year, 1913. They get swapped, so they go side by side.',
    facts: ['lw-sixteenth', 'lw-seventeenth'],
    instruction: 'Compare what each amendment is about: money, or the Senate.',
    prompt: { kind: 'which', answer: 'lw-seventeenth' },
    difference: [
      'Fact A is the Sixteenth Amendment: {f:lw-sixteenth}. It is about money, the tax on what people earn.',
      'Fact B is the Seventeenth Amendment: {f:lw-seventeenth}. It is about the Senate, and about who picks the senators.',
      'The year, 1913, is the same, so it cannot help. What helps is the subject: if the story is about taxing what people earn, it is the Sixteenth, and if it is about voters choosing senators instead of the legislatures, it is the Seventeenth.'
    ] },

  /* ---------- group four: a line of seven landmarks ---------- */
  { id: 'con-line', kind: 'concept',
    h: 'A line of seven landmarks, from 1917 to 2001',
    link: 'The first three groups were about the years to 1914. This one puts the landmarks of the years after that on a line, one year each.',
    case: 'c10-line',
    plain: [
      'Kofi’s problem is the problem of any long history: the events are in his head with no order. The cure is a line. If each landmark has a year, and the years are in order, the order comes with them.',
      'Seven landmarks go on Kofi’s strip, in three stretches. The first stretch is war, hard times and war again. The United States entered the First World War in 1917. The Great Depression began in 1929. Japan attacked Pearl Harbor on December 7, 1941, and the United States entered the Second World War after it; its part in that war is dated 1941 to 1945. The second stretch is the Cold War, a long standoff dated about 1947 to 1991. The third is one day: September 11, 2001.',
      'Three of the landmarks get a group of their own after this one, with what and who as well as when: the Depression, the Cold War and September 11. The two world wars are held here only as years, because this course holds only the years. So here the aim is only to fix the years on the line, so that when a later group says “the Depression” or “the Cold War”, you already know where on the line to look.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'Seven years on one line',
    link: 'These are the seven years on Kofi’s strip, in order, each with where it sits among the others.',
    concept: 'con-line',
    rows: [
      { id: 'tl-ww1', q: 'In what year did the United States enter the First World War?', a: '1917',
        relates: 'It is the first landmark on the strip after 1877, and the earliest of the seven.' },
      { id: 'tl-depression', q: 'In what year did the Great Depression begin?', a: '1929',
        relates: 'It is twelve years after the country entered the First World War. In the Depression banks failed, and about a quarter of workers lost their jobs.' },
      { id: 'tl-pearl', q: 'In what year did Japan attack Pearl Harbor, bringing the United States into the Second World War?', a: '1941',
        relates: 'The attack was on December 7, 1941, and the United States entered the war after it. The year is the start of the American part in the Second World War.' },
      { id: 'tl-ww2end', q: 'The American part in the Second World War is dated 1941 to which year?', a: '1945',
        relates: 'The dates 1941 to 1945 cover the four years of the American part in the war. The Cold War is dated from about two years after 1945.' },
      { id: 'tl-coldstart', q: 'In about what year did the Cold War begin?', a: '1947',
        relates: 'The Cold War is dated about 1947 to 1991. It came after the Second World War, two years after the American part in it ended.' },
      { id: 'tl-coldend', q: 'In about what year did the Cold War end?', a: '1991',
        relates: 'The Cold War ran about 1947 to 1991, which is more than four decades. It is the last year of the long standoff.' },
      { id: 'tl-attack', q: 'In what year did the terrorist attacks on New York and Washington take place, on September 11?', a: '2001',
        relates: 'It is the latest landmark on the strip, and the most recent event that this course holds.' }
    ] },

  { id: 'chk-tl-ww1', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-ww1' } },
  { id: 'chk-tl-depression', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-depression' } },
  { id: 'chk-tl-pearl', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-pearl' } },
  { id: 'chk-tl-ww2end', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-ww2end' } },
  { id: 'chk-tl-coldstart', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-coldstart' } },
  { id: 'chk-tl-coldend', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-coldend' } },
  { id: 'chk-tl-attack', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-attack' } },

  { id: 'look-line', kind: 'lookalike', ledger: 'tl-ww1~tl-pearl',
    h: 'Two years in which the country entered a war',
    link: 'Two of the seven years are years in which the United States entered a world war. They get swapped, so they go side by side.',
    facts: ['tl-ww1', 'tl-pearl'],
    instruction: 'Compare which war each year belongs to: the first of the two, or the second.',
    prompt: { kind: 'which', answer: 'tl-pearl' },
    difference: [
      'Fact A is the First World War: {f:tl-ww1}. It is the earliest landmark on the strip.',
      'Fact B is the attack on Pearl Harbor, after which the country entered the Second World War: {f:tl-pearl}. It comes twenty-four years later, after the Depression.',
      'If the clue is about Pearl Harbor, or comes after the Depression, the year is {f:tl-pearl}. If it comes before the Depression, it is the First World War, {f:tl-ww1}.'
    ] }
]);
