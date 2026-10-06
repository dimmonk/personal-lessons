// Civics, Unit Ten, part one: the opening card, then the two groups of facts about the factory years and the great arrivals.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory, and its
// answer is one of the choices for every other row on the same card, so the answers of one card have one form.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes line,
// the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u10', [

  { id: 'orient-since', kind: 'orient',
    h: 'Facts to hold: the history since 1877, and the symbols of the country',
    canDo: [
      'This unit is different from the units that sort cases. Those teach you to put a question to a case. This one is a set of facts to hold: what happened from the years of factories and great arrivals to September 11, 2001; the years in which the right to vote was widened; and the plain facts about the flag, the days and the names that stand for the country. By the end you can say each fact without looking it up, which is what the history part of the citizenship interview asks of you.',
      'Some of these facts also explain what you read in the news. Why the rules on who may come in come from Congress and are run by a federal {t:agency}, why a tax on what people earn exists, and why arguments about voting go back so far: each of those has its answer in the history here.'
    ],
    everyday: [
      'You already hear this history in the way people talk about their own families. ‘My great-grandfather came through Ellis Island.’ ‘She grew up in the Depression.’ ‘He was in Vietnam.’ ‘Everything changed after September 11.’ Each of those is a landmark that a long stretch of years hangs on, and each is a fact you can hold.',
      'A landmark is useful because it lets you place a story. If you know that the Depression began in 1929 and that Ellis Island opened in 1892, then a card or a speech or a sign that mentions either one puts a date on whatever else it says. That is all the unit asks of you: to be able to place the landmark, say what it was, and say who did it.'
    ],
    add: [
      'The unit starts where the history before it stopped, in 1877, when Reconstruction ended. It has almost nothing about the years from 1877 to 1900. The citizenship test asks little about them, and this course holds only the few facts of those years that the first group gives. The unit skips them, and does not fill them with facts that have not been checked.',
      'Each group starts from one question that a period of history answered, or from one thing a newcomer is expected to know. It opens with a short story of someone who needs the idea, then explains the idea in plain words, then gives the facts for that group in a table. After the table, each fact is asked once, from memory. In one table the answers all have one form (all years, or all names, or all things done), so you cannot guess an answer from its shape and must know it.',
      'Where the unit gives a name you have already met, it prints that name as it was taught. In this course, “the vote” and “the right to vote” are the words for one thing, throughout.'
    ] },

  /* ---------- group one: the great arrivals, in years ---------- */
  { id: 'con-wave', kind: 'concept',
    h: 'The great arrivals, in four years',
    link: 'The first group is about the years when the country filled with factories and with new arrivals, and about four dates that can be hung on them.',
    case: 'c10-wave',
    plain: [
      'Noor’s three questions are all about dates, and the dates are the facts of this group. The years from 1877 to 1914 were the years of factories and big cities. Railways crossed the continent, steel mills and factories grew, and cities swelled. Millions of immigrants, mostly from Europe, came to work in them.',
      'Three landmarks of those years can each be hung on a year. The Chinese Exclusion Act, passed by Congress in 1882, was the first major law to bar a group of people from coming in because of where they came from. The Statue of Liberty, a large copper statue and a gift from France, was dedicated in New York Harbor in 1886 and became a symbol of welcome. Ellis Island, in the same harbor, opened in 1892 as the federal immigration station, and about twelve million people passed through it before it closed in 1954.',
      'So Noor’s great-grandfather, examined at Ellis Island in 1905, came when it had been open for thirteen years and had many years still to run. Notice also that the first three dates are 1882, 1886 and 1892. They are almost all that this course holds from the years 1877 to 1900. The unit skips those years and does not fill them.',
      'The four facts below are four years: when the Act was passed, when the statue was dedicated, when Ellis Island opened and when it closed.'
    ] },

  { id: 'facts-wave', kind: 'facts',
    h: 'Four dates of the great arrivals',
    link: 'These are the four years from Noor’s questions, each with how it fits the years when millions arrived.',
    concept: 'con-wave',
    rows: [
      { id: 'wv-exclusion', q: 'In what year did Congress pass the Chinese Exclusion Act?', a: '1882',
        relates: 'It is the earliest of the four. It was the first major law to bar a group of people from coming in because of where they came from, and it was passed by Congress, which is why it belongs to the story, told in the next group, of who decides who may come in.' },
      { id: 'wv-statue', q: 'In what year was the Statue of Liberty dedicated in New York Harbor?', a: '1886',
        relates: 'The statue was a gift from France, and it became a symbol of welcome in the years when millions arrived. Its year is four years after the Act and six years before Ellis Island opened.' },
      { id: 'wv-ellis', q: 'In what year did Ellis Island open as the federal immigration station?', a: '1892',
        relates: 'It is in the same harbor as the statue and opened six years after it. “Federal” means that it belonged to the government of the whole country and not to a state. Noor’s great-grandfather was examined there thirteen years after it opened.' },
      { id: 'wv-closed', q: 'In what year did Ellis Island close?', a: '1954',
        relates: 'It was open from 1892 to 1954, and about twelve million people passed through it. A person examined there in 1905, like Noor’s great-grandfather, came in its first years and not near its end.' }
    ] },

  { id: 'chk-wv-exclusion', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-exclusion' } },
  { id: 'chk-wv-statue', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-statue' } },
  { id: 'chk-wv-ellis', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-ellis' } },
  { id: 'chk-wv-closed', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-closed' } },

  { id: 'look-wave', kind: 'lookalike', ledger: 'wv-statue~wv-ellis',
    h: 'Two landmarks in one harbor',
    link: 'Two of the four dates are for landmarks that stand in the same harbor and that are only six years apart. They get swapped, so they go side by side.',
    facts: ['wv-statue', 'wv-ellis'],
    instruction: 'Compare what each date is for: a gift, or a station where arrivals were examined.',
    prompt: { kind: 'which', answer: 'wv-ellis' },
    difference: [
      'Fact A is the year of the Statue of Liberty: {f:wv-statue}. It was a gift from France, and it stands in the harbor as a symbol of welcome.',
      'Fact B is the year of Ellis Island: {f:wv-ellis}. It was the federal station where arrivals were examined, and it was in use for 62 years.',
      'The statue came first, and the station six years later. If a person was examined by a doctor and an inspector in the harbor, the place is Ellis Island and the opening year is {f:wv-ellis}. If the story is of a copper statue that was given, the year is {f:wv-statue}.'
    ] },

  /* ---------- group two: who decides who may come in ---------- */
  { id: 'con-door', kind: 'concept',
    h: 'Who decides who may come in',
    link: 'The first group gave the years of the great arrivals. The second asks who, in those years, decided who might arrive, because that was settled then.',
    case: 'c10-door',
    plain: [
      'The resident in the story is right, and the years of the great arrivals are when that became the settled answer. In the 1870s the Supreme Court struck down a California law that put its own conditions on people arriving there, and said that the power belonged to the federal government. “Federal” means the government of the whole country, as against one state. So a state could not set its own conditions on arrivals.',
      'The same answer shows in the other two landmarks. Congress passed the Chinese Exclusion Act in 1882, which is a law for the whole country. And Ellis Island, where arrivals were examined, was the federal immigration station: it belonged to the government of the whole country, and not to a state.',
      'That is why, today, the rules on who may come in come from Congress and are run by a federal {t:agency}. It also fits a name from the earlier units: a state’s own scheme for who may stay in the country would be pushed aside, which is called {o:preempted}. The four facts below are who did what.'
    ] },

  { id: 'facts-door', kind: 'facts',
    h: 'Who acted on who may come in',
    link: 'These are the four facts about who acted, each with how it fits the idea that deciding who may come in is for the government of the whole country.',
    concept: 'con-door',
    rows: [
      { id: 'do-state', q: 'Who tried, in the 1870s, to set its own conditions on people arriving there, and was told that it could not?', a: 'California',
        relates: 'California tried to set its own conditions, and the answer was that it could not, because the power belonged to the federal government. A state’s attempt is the case that shows who may not decide.' },
      { id: 'do-court', q: 'In the 1870s, who struck down a state’s own conditions on arriving immigrants?', a: 'The Supreme Court',
        relates: 'It ruled that the power belonged to the federal government, so no state could set conditions of its own. A court is asked whether a law is allowed, and here the law was a state’s.' },
      { id: 'do-congress', q: 'Who passed the Chinese Exclusion Act in 1882?', a: 'Congress',
        relates: 'Congress writes laws for the whole country, and a federal law applies in every state. A law about who may come in is a law of that kind, which is what it means to say that immigration became a matter for the government of the whole country.' },
      { id: 'do-station', q: 'Whose immigration station was Ellis Island?', a: 'The federal government',
        relates: 'Ellis Island opened in 1892 as the federal immigration station, so the examining of arrivals there was done by the government of the whole country and not by a state.' }
    ] },

  { id: 'chk-do-state', kind: 'check', after: 'facts-door', ask: { type: 'fact', row: 'do-state' } },
  { id: 'chk-do-court', kind: 'check', after: 'facts-door', ask: { type: 'fact', row: 'do-court' } },
  { id: 'chk-do-congress', kind: 'check', after: 'facts-door', ask: { type: 'fact', row: 'do-congress' } },
  { id: 'chk-do-station', kind: 'check', after: 'facts-door', ask: { type: 'fact', row: 'do-station' } },

  { id: 'look-door', kind: 'lookalike', ledger: 'do-court~do-congress',
    h: 'Two federal bodies that acted on arrivals',
    link: 'Two of the four facts name a body of the whole country’s government that acted on who may come in. They get swapped, so they go side by side.',
    facts: ['do-court', 'do-congress'],
    instruction: 'Compare what each body did: it ruled on a state’s law, or it wrote a law of its own.',
    prompt: { kind: 'which', answer: 'do-congress' },
    difference: [
      'Fact A is {f:do-court}. It was asked about a law that California had made, and it decided that California could not make it.',
      'Fact B is {f:do-congress}. It was not asked about anyone else’s law. It wrote a law of its own, the Chinese Exclusion Act, which applies in every state.',
      'Both belong to the government of the whole country. What separates them is the job: ruling on whether a state’s law is allowed, or passing a law for the whole country.'
    ] }
]);
