// US Civics & History: subject record (lesson standard S1). Revision is a real field.
// The subject mixes unit kinds (A12): Unit One teaches the key's first question (a gate unit, A15), Units Three to Six
// teach its four branches, and Units Two and Seven to Ten are fact units that hold facts and ask no key question.
// (Ids are the course order, u1 to u10.)
FC.subject('civics', {
  name: 'US Civics & History',
  rev: 3,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // the learner sorts and holds; nothing here is acted on against a fraud or a fault (P26 lists the action subjects)
  blurb: 'For any piece of news about the government, work out who made the decision it ends on, what they did, and whether they had the power to do it. Alongside that, hold the facts a newcomer is asked at the citizenship interview: the founding documents, the offices, rights and duties, and the history.',
  // Order of the course: ten units, u1 to u10 (docs/rebuild/civics-plan.md). Every one is rebuilt, so the subject has no old record.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9', 'u10'],
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'home', 'money', 'health', 'learning', 'travel', 'leisure', 'community', 'immigration', 'world'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'Office-holders are left out',
      text: 'The President, the Vice President, the Speaker of the House, the Chief Justice, your governor, your senators and your representative are all answers on the citizenship test, and all of them change with elections or with where you live. Look them up fresh.' },
    { h: 'Take the test details from uscis.gov',
      text: 'Which version of the question list applies, how many questions are asked, the pass mark and the exemptions for age and years of residence have changed more than once and can depend on the date you filed. The material here is stable; the procedure around it is not.' },
    { h: 'The questions read the last decision in a case',
      text: 'Real events run on: a law is passed, an office of the government applies it, someone challenges it, and a judge rules. The questions look at one moment, the decision a case ends on or asks for. The same law at a different moment gets a different name, so read where the case stops.' },
    { h: 'Where the questions simplify',
      text: 'How far the power over trade between the states reaches, how far the government’s offices may go in filling in a law, and where a right ends are argued over in court for years by people who know the material well. A case counts as clear here when its words make it clear. It is a first reading, not a settled answer.' },
    { h: 'Some requests to a court are refused',
      text: 'A court will not rule on a law that has harmed nobody, and gives no advice about a law before it is passed. The questions have no answer for such a request, and the cases never ask for one.' },
    { h: 'The questions sort government decisions only',
      text: 'A rule made by an employer, a landlord, a shop or a website is not a decision of any government, and the questions have no answer for it.' },
    { h: 'State law varies a great deal',
      text: 'This course covers the federal structure and the questions that sort federal, state and local power. Marriage, licenses, schooling, criminal law, renting a home and professional qualifications all differ from state to state, and moving changes them.' },
    { h: 'The history is not complete',
      text: 'The history here is the people, dates and events the citizenship test asks about, not the whole story. The test asks little about the years between the end of Reconstruction in 1877 and 1900, and the course holds only a few facts from them.' },
    { h: 'The official answers are short on purpose',
      text: 'Where this course adds context the test leaves out, such as the removal of Native nations, the ninety-five years between the Fifteenth Amendment and the Voting Rights Act, or the causes of the Civil War, that context is well documented. The interview, however, wants the short answer.' },
    { h: 'Not covered: the immigration process',
      text: 'Eligibility, forms, fees, timelines and interviews are a much larger subject than the civics, and the one where current information matters most.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks who makes the last decision in a case, with four answers; Congress, the President and the courts each have one question, and a state, city or county has two; veto and pardon are separate names. All ten units are rebuilt and the old course is deleted. Specimens added: twenty whole-key cases, one or more for every name in the key.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: US spelling.' }
  ]
});
