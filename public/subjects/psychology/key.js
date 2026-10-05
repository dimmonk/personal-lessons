// Psychology: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what you must be able to point to
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what you must be able to point to in a case before the name can be used.
//                     Printed on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a case must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (D1, R1) and ids are for the data. They are never shown to the learner (K3).
//
// This file carries the branch that Unit Two teaches, and the gate as far as Unit Two prints it.
// The gate belongs to Unit One. The other two branches are added, in the same shape, by the units that teach them.

FC.key('psychology', {
  outcomes: [
    { id: 'dissonance', group: 'reasoning', unit: 'u2',
      n: 'Cognitive dissonance reduction',
      plain: 'an excuse added after the act',
      needs: 'something the person did that does not fit what they believe or have said, and a reason they give afterwards for why it is fine or does not count',
      aka: ['rationalising', 'making excuses'] },
    { id: 'sunkcost', group: 'reasoning', unit: 'u2',
      n: 'Sunk cost fallacy',
      plain: 'carrying on because of what is already spent',
      needs: 'something already spent that cannot be got back, a next step still to be decided, and what is already spent given as the reason to take it',
      aka: ['throwing good money after bad', 'escalation of commitment'] },
    { id: 'confbias', group: 'reasoning', unit: 'u2',
      n: 'Confirmation bias',
      plain: 'a harder test for unwelcome evidence',
      needs: 'a view the person already holds, evidence for it and evidence against it, and a harder test for the evidence against it than the evidence for it ever got',
      aka: [] },
    { id: 'motivated', group: 'reasoning', unit: 'u2',
      n: 'Motivated reasoning',
      plain: 'the answer first, the search afterwards',
      needs: 'a search the person set out on to settle a choice or a question, an answer chosen before that search began, and a search that collects only support for it',
      aka: [] },
    { id: 'fair', group: 'reasoning', unit: 'u2',
      n: 'Fair reasoning',
      plain: 'the same test for every fact, and the view goes where the facts point',
      needs: 'facts about the matter, the same test for them whichever way they point, and a view or plan that ends up where they point, whether that means changing it or keeping it',
      aka: ['keeping an open mind'] }
  ],

  terms: [
    { id: 'cd', unit: 'u2', n: 'cognitive dissonance',
      means: 'the discomfort of doing one thing while believing another' }
  ],

  // Words the old lessons used that a newcomer could not follow, or that this unit's own drafts used for two things.
  avoid: [
    { word: 'clash', sayInstead: 'does not fit' },
    { word: 'move', sayInstead: 'what the reasoning does (the first question’s second answer is the only place the key uses the word)' },
    { word: 'deciding feature', sayInstead: 'what you must be able to point to' },
    { word: 'provisional', sayInstead: 'from one case so far' },
    { word: 'the rule', sayInstead: 'what you must be able to point to, or how to tell them apart' },
    { word: 'justification', sayInstead: 'a reason why it is fine' },
    { word: 'cognition', sayInstead: 'belief' },
    { word: 'scrutiny', sayInstead: 'a harder test' },
    { word: 'uneven', sayInstead: 'a harder test for one side' },
    { word: 'falsify', sayInstead: 'what would make it a different name' }
  ],

  gate: {
    code: 'D1', unit: 'u1',
    q: 'What kind of thing is this?',
    purpose: 'Sorts one person’s reasoning from something one person does to another, and from the way a person is over years',
    why: 'A piece of reasoning, something one person does to another and a person across years are each judged on different things, so the questions that come next depend on this answer.',
    options: [
      { id: 'reasoning', n: 'One person’s reasoning',
        when: 'the case shows how one person reaches, defends or changes a view or a choice of their own',
        keeps: ['dissonance', 'sunkcost', 'confbias', 'motivated', 'fair'] },
      { id: 'tactic', n: 'A move between people',
        when: 'the case shows something one person does to another in their dealings with each other',
        keeps: [] },   // filled by the unit that teaches this branch
      { id: 'pattern', n: 'A lasting way someone is',
        when: 'the case shows how a person is across years, places and relationships',
        keeps: [] }    // filled by the units that teach this branch
    ]
  },

  // A branch is a list of one, two or three questions. This one has one: after the first question,
  // "What does the reasoning do?" is the only thing left to ask, and each of its answers leads to one name.
  branches: {
    reasoning: [
      { code: 'R1', unit: 'u2',
        q: 'What does the reasoning do?',
        purpose: 'Tells apart four ways reasoning protects what suits the person, and the one way it goes where the facts point',
        why: 'The five names are defined by what the reasoning does. They are not defined by who is reasoning, by the topic, or by where the person ends up.',
        options: [
          { id: 'addstory', n: 'Adds a reason why what they did is fine after all',
            when: 'the person has done something that does not fit what they believe or have said, and afterwards they give a reason why it is fine or does not count. No new fact about the matter has arrived, and they do not undo what they did or say it was wrong',
            keeps: ['dissonance'] },
          { id: 'backward', n: 'Gives what is already spent as the reason to keep going',
            when: 'a next step is still to be decided, and the reason the person gives for taking it is the money, time or effort already spent, not what the step itself would cost or bring',
            keeps: ['sunkcost'] },
          { id: 'scrutiny', n: 'Tests evidence against their view harder than evidence for it',
            when: 'evidence for the person’s view and evidence against it are both in the case, and the evidence against it is asked questions, or held to a standard, that the evidence for it never was',
            keeps: ['confbias'],
            yieldsTo: [{ option: 'fixed', say: 'an answer chosen before a search began' }] },
          { id: 'fixed', n: 'Chooses the answer first, then searches for support',
            when: 'the person sets out on a search to settle a choice or a question (asking, reading, testing, interviewing), the case shows the answer was chosen before that search began, and the search collects only what supports it',
            keeps: ['motivated'] },
          { id: 'follows', n: 'Gives every fact the same test, and goes where the facts point',
            when: 'facts about the matter are in the case, the person gives them the same test whichever way they point, and the view or plan ends up where they point. It may change, or it may stay because the facts support it',
            keeps: ['fair'] }
        ] }
    ]
  }
});
