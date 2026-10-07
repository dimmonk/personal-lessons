// US Civics & History: subject record (lesson standard S1). Revision is a real field.
// The subject mixes unit kinds (A12): Unit One teaches the key's first question (a gate unit, A15), Units Three to Six
// teach its four branches, and Units Two and Seven to Ten are fact units that hold facts and ask no key question.
// (Ids are the course order, u1 to u10.)
FC.subject('civics', {
  name: 'US Civics & History',
  rev: 4,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // the learner sorts and holds; nothing here is acted on against a fraud or a fault (P26 lists the action subjects)
  blurb: 'Read any news story about the government and know who made the final call, what they did, and whether they were allowed to. Plus the facts the citizenship interview asks about: the founding documents, the offices, your rights and duties, and the history.',
  // Order of the course: ten units, u1 to u10 (docs/rebuild/civics-plan.md). Every one is rebuilt, so the subject has no old record.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9', 'u10'],
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'home', 'money', 'health', 'learning', 'travel', 'leisure', 'community', 'immigration', 'world'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'Who holds each office is left out',
      text: 'The President, the Vice President, the Speaker of the House, the Chief Justice, your governor, your senators and your representative are all answers on the citizenship test, and they change with elections and with where you live. Look them up fresh.' },
    { h: 'Get the test details from uscis.gov',
      text: 'Which question list applies, how many questions you get, the pass mark, and the exemptions for age and years in the country have changed more than once and can depend on when you applied. The facts here stay the same; the test rules do not.' },
    { h: 'The questions look at the final call only',
      text: 'Real events keep going: Congress passes a law, a government office applies it, someone sues, and a judge rules. The questions look at one moment: the decision the story ends on, or the one someone is asking for. The same law at a different moment gets a different answer, so check where the story stops.' },
    { h: 'Where the questions keep it simple',
      text: 'How far Congress’s power over trade between the states reaches, how much a government office may fill in on its own, and where a right ends are fought over in court for years by experts. Here a story counts as clear when its words make it clear. Your answer is a first reading, not the last word.' },
    { h: 'Courts turn some requests away',
      text: 'A court will not rule on a law that has harmed nobody, and gives no advice on a law before it passes. The questions have no answer for that, and no story here asks for one.' },
    { h: 'Only government decisions',
      text: 'A rule from an employer, a landlord, a shop or a website is not a government decision, and the questions have no answer for it.' },
    { h: 'State laws differ a lot',
      text: 'This course covers how power is split between the whole country, the states, and cities and counties. Marriage, licenses, schools, criminal law, renting a home and the licenses for many jobs all differ from state to state, and change when you move.' },
    { h: 'The history is only what the test asks',
      text: 'The history here is the people, dates and events the citizenship test asks about, not the whole story. The test asks little about the years from the end of Reconstruction in 1877 to 1900, so there are only a few facts from them.' },
    { h: 'The official answers are short on purpose',
      text: 'Where this course adds what the test leaves out, such as the removal of Native nations, the ninety-five years between the Fifteenth Amendment and the Voting Rights Act, or the causes of the Civil War, that history is well documented. At the interview, give the short answer.' },
    { h: 'Not covered: how to immigrate',
      text: 'Who qualifies, forms, fees, waiting times and interviews are a much bigger subject than civics, and the one where up-to-date information matters most.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks who makes the last decision in a case, with four answers; Congress, the President and the courts each have one question, and a state, city or county has two; veto and pardon are separate names. All ten units are rebuilt and the old course is deleted. Specimens added: twenty whole-key cases, one or more for every name in the key.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' },
    { rev: 4, date: '2026-10-07', change: 'Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions.' }
  ]
});
