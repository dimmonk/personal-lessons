// Civics, Unit Eight, part four: the citizenship test and who sets its details, then the close.
// The test group holds only what is stable. The details of the test (how many questions are asked, the pass mark, the exemptions
// and which version of the list applies) change and can depend on the date a person filed, so the unit skips them and says so,
// and the last two rows say where to take them from. A fact unit closes with a recap and no transfer (lesson standard A12, V25).

FC.cards('civics', 'u8', [

  /* ---------- group eight: the test ---------- */
  { id: 'con-test', kind: 'concept',
    h: 'The citizenship test, and who sets its details',
    link: 'The oath comes at the end of the process. The test comes before it, and who decides how the test works is a question this course has already taught.',
    case: 'c8-chidi',
    plain: [
      'Chidi’s interview shows three stable parts of the test. It is spoken. The questions come from a published list, and he knew in advance what was on it. And it comes alongside an assessment of his English reading, writing and speaking. A fourth stable part does not show in his story: there are exemptions and adjustments, based on age and years of residence and for certain medical conditions.',
      'The rules of the test seem to change from time to time, and the reason is who sets them. Congress wrote the law that says an applicant must show knowledge of civics and English. But the immigration service, which is an {t:agency}, runs the interview and sets the details: the question list, how many questions are asked and the pass mark. That is a case of {o:execute}: the {t:agency} carries out a law that Congress passed, and it stays inside what the law allows. The {t:agency} can change the details without Congress passing anything, and it has changed them more than once.',
      'So the rules of the test are not written in the Constitution. A law requires the test, and an {t:agency} decides how it works.',
      'This unit skips the details, because they change and can depend on when you filed. Which version of the list applies to you can depend on the date you filed, so take the official list from the immigration service’s own website, uscis.gov. Several official answers also depend on the date or on where you live, such as the current President and Vice President, the Speaker, the Chief Justice, your state’s governor, your senators and your representative. Look those up fresh. This course leaves them out on purpose.'
    ] },

  { id: 'facts-test', kind: 'facts',
    h: 'What is stable about the test',
    link: 'These are the eight facts of Chidi’s interview, each with how it fits the idea that a law requires the test and an {t:agency} decides how it works.',
    concept: 'con-test',
    rows: [
      { id: 'te-form', q: 'Is the civics test written or spoken?', a: 'A spoken test',
        relates: 'The civics test is spoken: you are asked questions out loud and you answer out loud. That part is stable, so it is worth holding.' },
      { id: 'te-list', q: 'Where do the questions of the civics test come from?', a: 'A published list',
        relates: 'You are told in advance what is on the test, because the questions come from a list that is published. That is why studying works.' },
      { id: 'te-english', q: 'What else is assessed alongside the civics test?', a: 'English reading, writing and speaking',
        relates: 'The civics test comes alongside an assessment of English reading, writing and speaking, so there are two things to prepare for, not one.' },
      { id: 'te-exempt', q: 'What can change how the test applies to a person?', a: 'Their age, years of residence and certain medical conditions',
        relates: 'There are exemptions and adjustments based on these. Which of them applies to a person is a question for the official rules, and this unit does not hold the details.' },
      { id: 'te-law', q: 'What requires an applicant to show knowledge of civics and English?', a: 'A law that Congress wrote',
        relates: 'Congress wrote the law that says an applicant must show that knowledge. That is where the requirement comes from. The Constitution does not write the rules of the test.' },
      { id: 'te-who', q: 'Who runs the interview and sets its details, such as the question list and the pass mark?', a: 'The immigration service',
        relates: 'It is an {t:agency}: it carries out the law day to day. It can change the details without Congress passing anything, which is why they have changed more than once. That is {o:execute}.' },
      { id: 'te-source', q: 'Where should you take the official question list from?', a: 'uscis.gov',
        relates: 'It is the immigration service’s own website. The official list is the thing to take and to study, because the list is what you will be asked.' },
      { id: 'te-version', q: 'What can decide which version of the list applies to you?', a: 'The date you filed',
        relates: 'Which version applies can depend on when you filed. So a list that a friend studied two years ago may not be the list for your own application, as Dana’s was not for Chidi’s.' }
    ] },

  { id: 'chk-te-form', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-form' } },
  { id: 'chk-te-list', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-list' } },
  { id: 'chk-te-english', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-english' } },
  { id: 'chk-te-exempt', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-exempt' } },
  { id: 'chk-te-law', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-law' } },
  { id: 'chk-te-who', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-who' } },
  { id: 'chk-te-source', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-source' } },
  { id: 'chk-te-version', kind: 'check', after: 'facts-test', ask: { type: 'fact', row: 'te-version' } },

  { id: 'look-test', kind: 'lookalike', ledger: 'te-law~te-who',
    h: 'Where the test comes from, and who sets its details',
    link: 'Two of the eight facts are both about who decides how the test works. They get swapped, so they go side by side.',
    facts: ['te-law', 'te-who'],
    instruction: 'Compare what each question asks: where the requirement comes from, or who runs the interview and sets the details.',
    prompt: { kind: 'which', answer: 'te-who' },
    difference: [
      'Fact A is about where the requirement comes from: {f:te-law}. Congress wrote the law that says an applicant must show the knowledge.',
      'Fact B is about who runs the interview and sets its details: {f:te-who}. The {t:agency} puts that law into practice, and the question list and the pass mark are its decisions.',
      'Both are part of the answer to who decides how the test works. One decided that there is a test. The other decides how it is run, and can change that without Congress.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-rights', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'A right is the government held back from you, and a duty is the law asking something of you. Most of the rights in the Bill of Rights are written for ‘the people’, ‘no person’ and ‘the accused’, and they protect everyone here.',
      'Only a few things are kept for citizens: voting in federal elections, running for federal office, and serving on a federal jury.',
      'The duties to obey the law, to pay tax on income earned here, and, for a man aged 18 to 25, to register for Selective Service fall on everyone here. Tax follows the income, not the passport.',
      'The Constitution mostly lists what government may not do to you. It does not promise a job, a home or medical care. Programmes that provide help exist because of laws, and what one law gives, a later law can change.',
      'Whether a lawyer is appointed depends on the kind of case: a person accused of a crime has the promise, and an immigration hearing is a civil case, where it does not apply in the same way. This course does not say which other rights still apply there.',
      'The oath is made once, at the ceremony that makes a person a citizen. The pledge to the flag is not part of it.',
      'A law requires the test, and the immigration service decides how it works. Take the official question list from uscis.gov, for the version that applies to you.'
    ] }
]);
