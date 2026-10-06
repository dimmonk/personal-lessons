// Civics, Unit Eight, part four: the citizenship test and who sets its details, then the close.
// The test group holds only what is stable. The details of the test (how many questions are asked, the pass mark, the exemptions
// and which version of the list applies) change and can depend on the date a person filed, so the unit skips them and says so,
// and the last rows say where to take them from. A fact unit closes with a recap and no transfer (lesson standard A12, V25).

FC.cards('civics', 'u8', [

  /* ---------- group eight: the test ---------- */
  { id: 'con-test', kind: 'concept',
    h: 'The citizenship test, and who sets its details',
    link: 'The oath comes at the end of the process. The test comes before it, and who decides how the test works is a question this course has already taught.',
    case: 'c8-chidi',
    plain: [
      'Chidi’s interview shows the stable parts of the test: it is spoken, the questions come from a published list, and an assessment of his English comes alongside it.',
      'Congress wrote the law that says an applicant must show knowledge of civics and English. But the immigration service, which is an {t:agency}, runs the interview and sets the details: the question list, how many questions are asked and the pass mark. That is a case of {o:execute}, and it is why the details can change without Congress passing anything.',
      'This unit skips the details, because they change. Take the official list from the immigration service’s own website, uscis.gov, for the version that applies to you. Answers that depend on the date or on where you live, such as the current President or your state’s governor, are left out on purpose: look them up fresh.'
    ] },

  { id: 'facts-test', kind: 'facts',
    h: 'What is stable about the test',
    link: 'These are the five facts of Chidi’s interview, each with how it fits the idea that a law requires the test and an {t:agency} decides how it works.',
    concept: 'con-test',
    rows: [
      { id: 'te-list', q: 'Where do the questions of the civics test come from?', a: 'A published list',
        relates: 'You are told in advance what is on the test, which is why studying works.' },
      { id: 'te-english', q: 'What else is assessed alongside the civics test?', a: 'English reading, writing and speaking',
        relates: 'There are two things to prepare for, not one.' },
      { id: 'te-who', q: 'Who runs the interview and sets its details, such as the question list and the pass mark?', a: 'The immigration service',
        relates: 'It is an {t:agency}: it carries out the law day to day, and can change the details without Congress passing anything. That is {o:execute}.' },
      { id: 'te-source', q: 'Where should you take the official question list from?', a: 'uscis.gov',
        relates: 'It is the immigration service’s own website, and the official list is what you will be asked.' },
      { id: 'te-version', q: 'What can decide which version of the list applies to you?', a: 'The date you filed',
        relates: 'A list a friend studied two years ago may not be the list for your own application, as Dana’s was not for Chidi’s.' }
    ] },

  { id: 'chk-te-list', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-list' } },
  { id: 'chk-te-english', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-english' } },
  { id: 'chk-te-who', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-who' } },
  { id: 'chk-te-source', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-source' } },
  { id: 'chk-te-version', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-version' } },

  /* ---------- the close ---------- */
  { id: 'recap-rights', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'A right is the government held back from you, and a duty is the law asking something of you. Most rights in the Bill of Rights protect everyone here.',
      'Only a few things are kept for citizens: voting in federal elections, running for federal office, and serving on a federal jury.',
      'Obeying the law, paying tax on income earned here and, for a man aged 18 to 25, registering for Selective Service fall on everyone here.',
      'The Constitution mostly lists what government may not do to you. It does not promise a job, a home or medical care; programs that give help come from laws, and a later law can change them.',
      'Whether a lawyer is appointed depends on the kind of case: a person accused of a crime has the promise, and an immigration hearing is a civil case, where it does not apply in the same way.',
      'The oath is made once, at the ceremony that makes a person a citizen. The pledge to the flag is not part of it.',
      'A law requires the test, and the immigration service decides how it works. Take the official question list from uscis.gov.'
    ] }
]);
