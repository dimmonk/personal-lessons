// Psychology, Unit One: cases shown inside cards, parts five and six (the remaining pairs, the question card's
// check, and the two worked cases). Field guide: see u1.cases-teach-1.js.
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.

FC.cases('psychology', 'u1', [

  /* ---------- The look-alike pair: same woman, same bad week, a mood or something said to one person ---------- */
  { id: 'g-sale-curt', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bad week after a failed flat sale',
    text: "The week the buyer withdrew his offer for her flat, Cora was curt with everyone in the office. She answered questions in one word and ate lunch at her desk with her headphones on.",
    route: { D1: ['none'] },
    cues: { D1: 'The week the buyer withdrew his offer for her flat, Cora was curt with everyone in the office' } },

  { id: 'g-sale-finn', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mistake blamed on an assistant',
    text: "The week the buyer withdrew his offer for her flat, Cora told her assistant, Finn, that the mistake in the brochure was his, although she had signed it off herself, and that she was starting to wonder whether he was up to the job. Finn stayed late every night that week.",
    route: { D1: ['tactic'] },
    cues: { D1: 'Cora told her assistant, Finn, that the mistake in the brochure was his, although she had signed it off herself, and that she was starting to wonder whether he was up to the job' } },

  /* ---------- The look-alike pair: same woman, same bad news, a hard week or a choice with a reason ---------- */
  { id: 'g-redundancy-week', use: 'teach', tier: 'clean', setting: 'health', topic: 'the week after losing a job',
    text: "On Monday Ruth was told that her job is going. All week she has slept badly and barely eaten, and she has cancelled the weekend away she had planned.",
    route: { D1: ['none'] },
    cues: { D1: 'On Monday Ruth was told that her job is going. All week she has slept badly and barely eaten' } },

  { id: 'g-redundancy-choice', use: 'teach', tier: 'clean', setting: 'work', topic: 'not applying after losing a job',
    text: "On Monday Ruth was told that her job is going. By Friday she has decided not to apply for the two similar posts the firm has advertised. 'They would only get rid of me again in a year,' she tells a friend. 'There's no point.'",
    route: { D1: ['reasoning'] },
    cues: { D1: 'They would only get rid of me again in a year' } },

  /* ---------- The look-alike pair: same woman, same confidence, one choice or twenty-five years ---------- */
  { id: 'g-cafe', use: 'teach', tier: 'clean', setting: 'money', topic: 'backing a friend’s café',
    text: "Greta has decided to put her savings into her friend's café. 'I've got a feeling about this one,' she tells her brother. 'The location is good, and she works harder than anyone I know.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ["I've got a feeling about this one", 'The location is good, and she works harder than anyone I know'] } },

  { id: 'g-eleven', use: 'teach', tier: 'clean', setting: 'money', topic: 'eleven ventures backed on a feeling', name: 'Greta’s eleven ventures',
    text: "In twenty-five years Greta has put money into eleven ventures on a feeling: friends' businesses, a cousin's invention, a colleague's film. Her brother, her ex-husband and her bank manager have each watched her do it, in three different cities, and each says she was as sure the eleventh time as the first.",
    route: { D1: ['pattern'] },
    cues: { D1: ['In twenty-five years', 'Her brother, her ex-husband and her bank manager have each watched her do it, in three different cities'] } },

  /* ---------- The check after the question card ---------- */
  { id: 'g-restaurant', use: 'check', tier: 'clean', setting: 'community', topic: 'silence after a restaurant closed',
    text: "Kemal has not answered his friends' messages for ten days. His restaurant closed for good at the start of the month. Before that, his friends say, he was the one who organised everything.",
    route: { D1: ['none'] },
    cues: { D1: ['for ten days', 'His restaurant closed for good at the start of the month'] },
    reason: { D1: 'The case shows one short stretch, and what set it off: {cue:D1}. Kemal gives no reasons for anything, nothing is said or done to any one friend about that friend, and the last sentence tells you this is not how he has been for years.' },
    not: { outcome: 'pattern', why: 'Ten days is not years, and the case says outright that he was different before the restaurant closed. A lasting way of being would show before the bad news as well as after it.' },
    miss: { tactic: 'Not being answered can feel like something done to you. But Kemal has gone quiet with all his friends alike, and nothing is said or done to any one of them about them.' } },

  /* ---------- The two worked cases ---------- */
  { id: 'g-dent', use: 'teach', tier: 'clean', setting: 'home', topic: 'a dent in a borrowed car', name: 'The dent',
    text: "Imani lent her car to her brother Reece, and it came back with a dent. When she asked him about it, Reece said the dent had been there for months, that she never notices anything about her own car, and that it was typical of her to accuse him. Imani went outside to look at the dent again.",
    route: { D1: ['tactic'] },
    cues: { D1: 'Reece said the dent had been there for months, that she never notices anything about her own car, and that it was typical of her to accuse him' } },

  { id: 'g-rehearsal', use: 'teach', tier: 'misleading', setting: 'home', topic: 'missed family occasions', name: 'The wedding rehearsal',
    also: ['reasoning'],
    text: "Petra missed her sister's wedding rehearsal. 'The traffic was impossible,' she said, 'and nobody told me the time had changed.' Her sister was not surprised. In the twenty years since they left home, Petra has missed birthdays, two graduations and her own farewell parties at three different jobs, and each time there has been a reason.",
    route: { D1: ['pattern'] },
    cues: { D1: ['In the twenty years since they left home', 'birthdays, two graduations and her own farewell parties at three different jobs'] } }
]);
