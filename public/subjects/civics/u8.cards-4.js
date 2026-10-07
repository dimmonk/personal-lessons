// Civics, Unit Eight, part four: the citizenship test and who sets its details, then the close.
// The test group holds only what is stable. The details of the test (how many questions are asked, the pass mark, the exemptions
// and which version of the list applies) change and can depend on the date a person filed, so the unit skips them and says so,
// and the last rows say where to take them from. A fact unit closes with a recap and no transfer (lesson standard A12, V25).

FC.cards('civics', 'u8', [

  /* ---------- group eight: the test ---------- */
  { id: 'con-test', kind: 'concept',
    h: 'The citizenship test, and who sets its details',
    link: 'The oath comes at the end of the process, and the test comes before it. Who decides how the test works is something you have already learned.',
    case: 'c8-chidi',
    plain: [
      'Chidi’s interview shows what stays the same about the test: it is spoken, the questions come from a published list, and his English is assessed alongside it.',
      'Congress wrote the law that says an applicant must show knowledge of civics and English. But the immigration service, an {t:agency}, runs the interview and sets the details: the question list, how many questions are asked and the pass mark. That is {o:execute}, and it is why the details can change without Congress passing anything.',
      'This unit skips the details, because they change. Get the official list from the immigration service’s own website, uscis.gov, for the version that applies to you. Answers that depend on the date or on where you live, such as who the current President is or who your state’s governor is, are left out on purpose. Look them up fresh.'
    ] },

  { id: 'facts-test', kind: 'facts',
    h: 'What stays the same about the test',
    link: 'These are the five things that stay the same, from Chidi’s interview. Each comes with how it shows up in real life.',
    concept: 'con-test',
    rows: [
      { id: 'te-list', q: 'Where do the questions of the civics test come from?', a: 'A published list',
        relates: 'You are told in advance what is on the test, which is why studying works.' },
      { id: 'te-english', q: 'What else is assessed alongside the civics test?', a: 'English reading, writing and speaking',
        relates: 'There are two things to prepare for, not one.' },
      { id: 'te-who', q: 'Who runs the interview and sets its details, such as the question list and the pass mark?', a: 'The immigration service',
        relates: 'It is an {t:agency}: it carries out the law day to day, and can change the details without Congress passing anything. That is {o:execute}.' },
      { id: 'te-source', q: 'Where should you get the official question list?', a: 'uscis.gov',
        relates: 'It is the immigration service’s own website. The official list there is what you will be asked.' },
      { id: 'te-version', q: 'What can decide which version of the list applies to you?', a: 'The date you filed',
        relates: 'A list a friend studied two years ago may not be the one for your application. Dana’s old list was not Chidi’s.' }
    ] },

  { id: 'chk-te-list', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-list' } },
  { id: 'chk-te-english', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-english' } },
  { id: 'chk-te-who', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-who' } },
  { id: 'chk-te-source', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-source' } },
  { id: 'chk-te-version', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-version' } },

  /* ---------- the close ---------- */
  { id: 'recap-rights', kind: 'recap',
    h: 'What to carry away',
    link: 'You have met every fact in the unit. Here they are together.',
    carry: [
      'A right holds the government back from you, and a duty is the law asking something of you. Most rights in the Bill of Rights protect everyone here.',
      'Only a few things are kept for citizens: voting in federal elections, running for federal office, and serving on a federal jury.',
      'Obeying the law, paying tax on income earned here and, for a man aged 18 to 25, registering for Selective Service fall on everyone here.',
      'The Constitution mostly lists what the government may not do to you. It does not promise a job, a home or medical care. Programs that give help come from laws, and a later law can change them.',
      'Whether a lawyer is appointed depends on the kind of hearing. A person accused of a crime has that promise. An immigration hearing is a civil case, where it does not apply in the same way.',
      'The oath is made once, at the ceremony that makes you a citizen. The pledge to the flag is not part of it.',
      'A law requires the test, and the immigration service decides how it works. Get the official question list from uscis.gov.'
    ] }
]);
