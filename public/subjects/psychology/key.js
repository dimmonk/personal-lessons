// Psychology: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1, section 20)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what to look for in a story before the name fits.
//                     Printed under "What to look for" where two names are compared, on the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a story must show for this answer. Printed as "Give this answer when <when>." and, in
//                     feedback, as "This story shows something else: <when>.", so it is a clause that fits both.
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (D1, R1) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what to
//                     look for are printed by {plain:option} and {needs:option}.
//
// This file carries the whole gate, which Unit One teaches, and the branch that Unit Two teaches.
// The other two branches are added, in the same shape, by the units that teach them; until then their gate answers
// keep no outcomes. The fourth gate answer has no branch: after it the key asks nothing more (K2.9).

FC.key('psychology', {
  outcomes: [
    { id: 'dissonance', group: 'reasoning', unit: 'u2',
      n: 'Rationalizing',
      plain: 'an excuse made up after the fact',
      needs: 'something the person did that goes against what they believe or have said, and an excuse they come up with afterward for why it is fine or does not count',
      aka: ['making excuses', 'cognitive dissonance reduction'] },
    { id: 'sunkcost', group: 'reasoning', unit: 'u2',
      n: 'Sunk cost fallacy',
      plain: 'carrying on because of what you already put in',
      needs: 'money, time or effort already spent that cannot be gotten back, a next step still to decide, and what is already spent given as the reason to take that step',
      aka: ['throwing good money after bad', 'escalation of commitment'] },
    { id: 'confbias', group: 'reasoning', unit: 'u2',
      n: 'Confirmation bias',
      plain: 'picking apart only the evidence you do not like',
      needs: 'a view the person already holds, evidence for it and against it, and the evidence against it picked apart in a way the evidence for it never was',
      aka: [] },
    { id: 'motivated', group: 'reasoning', unit: 'u2',
      n: 'Motivated reasoning',
      plain: 'picking the answer first, then looking for support',
      needs: 'a question or a choice the person looks into, an answer they picked before they started, and a search that only collects what backs that answer',
      aka: [] },
    { id: 'fair', group: 'reasoning', unit: 'u2',
      n: 'Following the facts',
      plain: 'checking every fact the same way, and going where they lead',
      needs: 'facts each checked the same way whichever side they help, and a view or plan that goes where the facts lead, whether it changes or stays the same',
      aka: ['keeping an open mind'] },

    // Something done to someone: taught by Unit Three.
    { id: 'gaslight', group: 'tactic', unit: 'u3',
      n: 'Gaslighting',
      plain: 'telling someone again and again that what happened did not happen',
      needs: 'something that really happened, one person telling the other for weeks or months that it did not happen or not that way, and the other doubting their own memory',
      aka: ['making someone doubt their own mind'] },
    { id: 'darvo', group: 'tactic', unit: 'u3',
      n: 'Turning the blame around',
      plain: 'caught out, they deny it, attack, and play the victim',
      needs: 'something the person really did, someone bringing it up, and all three in reply: they deny it, attack the one who brought it up, and play the victim',
      aka: ['DARVO, short for deny, attack, reverse victim and offender'] },
    { id: 'lovebomb', group: 'tactic', unit: 'u3',
      n: 'Love-bombing',
      plain: 'a flood of attention early on, pulled away later',
      needs: 'early in a relationship, far more praise, gifts or attention than the relationship so far explains, later pulled away or turned into criticism',
      aka: ['running hot and cold'] },
    { id: 'projection', group: 'tactic', unit: 'u3',
      n: 'Projection',
      plain: 'accusing someone of what you are doing yourself',
      needs: 'one person accusing the other of something, the accuser doing or feeling exactly that themselves, and nothing showing the other person doing it',
      aka: ['accusing others of what you do yourself'] },
    { id: 'ordexchange', group: 'tactic', unit: 'u3',
      n: 'A normal back-and-forth',
      plain: 'a disagreement, a complaint or praise, with nothing more to it',
      needs: 'two people, one disagreeing with, complaining to or praising the other, and none of the other four',
      aka: [] },

    // A lifelong pattern: taught by Unit Four.
    { id: 'narcgrand', group: 'pattern', unit: 'u4',
      n: 'Grandiose narcissism',
      plain: 'acting superior for years, and angry when not treated as special',
      needs: 'years of it, at home and at work: acting better than others and owed special treatment, anger or scorn when not treated as special, and harm to them or others',
      aka: ['a narcissist', 'overt narcissism', 'narcissistic personality disorder'] },
    { id: 'narcvuln', group: 'pattern', unit: 'u4',
      n: 'Vulnerable narcissism',
      plain: 'feeling overlooked and owed more for years, and sulking when not treated as special',
      needs: 'years of it, at home and at work: feeling overlooked and owed more, hurt silence or quiet resentment when not treated as special, and harm to them or others',
      aka: ['covert narcissism'] },
    { id: 'borderline', group: 'pattern', unit: 'u4',
      n: 'Borderline personality',
      plain: 'clinging to people, and turning on them when they seem to be leaving',
      needs: 'years of it, at home and at work: clinging to people, swinging from adoring someone to attacking them when they seem about to leave, and harm to them or others',
      aka: ['borderline', 'BPD', 'borderline personality disorder'] },
    { id: 'histrionic', group: 'pattern', unit: 'u4',
      n: 'Histrionic personality',
      plain: 'always needing to be the center of attention, with a bigger scene when it goes elsewhere',
      needs: 'years of it, at home and at work: needing to be the center of attention, a bigger scene when attention goes to someone else, and harm to them or others',
      aka: ['histrionic personality disorder', 'attention-seeking'] },
    { id: 'antisocial', group: 'pattern', unit: 'u4',
      n: 'Antisocial personality',
      plain: 'breaking rules and using people, with no regret',
      needs: 'years of it, at home and at work: rules broken, people lied to or used for the person’s own gain, no regret, and people hurt by it',
      aka: ['psychopath', 'sociopath', 'psychopathy', 'antisocial personality disorder'] },
    { id: 'ordpersonality', group: 'pattern', unit: 'u4',
      n: 'Just how they are',
      plain: 'the same way of being for years, with no lasting harm',
      needs: 'years of being the same way at home and at work, shy or blunt for example, and no repeated harm to them or the people around them',
      aka: [] }
  ],

  terms: [
    { id: 'cd', unit: 'u2', n: 'cognitive dissonance',
      means: 'the discomfort of doing one thing while believing another' },
    { id: 'pd', unit: 'u4', n: 'personality disorder',
      means: 'the same behavior for years, in different places and with different people, that keeps hurting the person or the people around them. Only a professional can diagnose one, after a long evaluation. Here the names describe what a story shows, not a person' }
  ],

  // Words a beginner could not follow (old textbook words, and this subject's own old names), each with what to say instead.
  avoid: [
    { word: 'clash', sayInstead: 'does not fit, or goes against' },
    { word: 'move', sayInstead: 'say what they did' },
    { word: 'the rule', sayInstead: 'what to look for, or how to tell them apart' },
    { word: 'justification', sayInstead: 'a reason why it is fine, or an excuse' },
    { word: 'cognition', sayInstead: 'belief' },
    { word: 'scrutiny', sayInstead: 'picking apart' },
    { word: 'uneven', sayInstead: 'picking apart only one side' },
    { word: 'falsify', sayInstead: 'what would change the answer' },
    { word: 'pervasive', sayInstead: 'for years, in different places and with different people' },
    { word: 'situational', sayInstead: 'just a one-off' },
    { word: 'pathologizing', sayInstead: 'treating a one-off as a lifelong pattern' },
    { word: 'proportionate', sayInstead: 'fits what happened' },
    { word: 'diagnostic', sayInstead: 'the question' },
    { word: 'interaction', sayInstead: 'something done to someone, or say what they did' },
    { word: 'trait', sayInstead: 'say the behavior, or a lifelong pattern' },
    { word: 'category', sayInstead: 'say what you are looking at' },
    // Added with the plain-words rewrite (lesson standard section 20): textbook words, and the old names this key replaced.
    { word: 'interpersonal', sayInstead: 'between two people' },
    { word: 'maladaptive', sayInstead: 'keeps hurting them or the people around them' },
    { word: 'impairment', sayInstead: 'the harm it does' },
    { word: 'entitlement', sayInstead: 'feeling owed special treatment' },
    { word: 'grandiosity', sayInstead: 'acting superior' },
    { word: 'dysregulation', sayInstead: 'big mood swings' },
    { word: 'disposition', sayInstead: 'the way someone is' },
    { word: 'perpetrator', sayInstead: 'the person doing it' },
    { word: 'tactic', sayInstead: 'say what they are doing to the other person' },
    { word: 'the matter', sayInstead: 'say what it is about' },
    { word: 'lasting way', sayInstead: 'a lifelong pattern' },
    { word: 'passing moment', sayInstead: 'just a one-off' },
    { word: 'one person’s reasoning', sayInstead: 'a choice and its reasons' },
    { word: 'dissonance reduction', sayInstead: 'rationalizing' },
    { word: 'fair reasoning', sayInstead: 'following the facts' },
    { word: 'ordinary exchange', sayInstead: 'a normal back-and-forth' },
    { word: 'ordinary personality', sayInstead: 'just how they are' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its four answers are that unit's families.
  // Tie-breaks are data (yieldsTo): a story that shows years, places and relationships gets the third answer whatever
  // else it shows, and a story in which something is said or done to another person about them gets the second answer
  // even if the speaker is also giving reasons. The fourth answer needs no tie-break: its "when" already requires
  // that the story show none of the other three.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What are you looking at?',
    why: 'Each needs different evidence before you can judge it. A choice is judged by its reasons, something done to someone by what it did to them, and a pattern only by many years. A one-off needs no label at all.',
    options: [
      { id: 'reasoning', n: 'A choice and its reasons',
        plain: 'one person explaining a choice or a view of their own',
        needs: 'a choice, a view or an act that is the person’s own, and their reasons for it',
        when: 'one person explains a choice, a view or an act of their own, and nobody else is the target',
        keeps: ['dissonance', 'sunkcost', 'confbias', 'motivated', 'fair'],
        yieldsTo: [{ option: 'tactic', say: 'something said or done to another person about them' },
                   { option: 'pattern', say: 'the same behavior for years, in different places and with different people' }] },
      { id: 'tactic', n: 'Something done to someone',
        plain: 'one person saying or doing something to another, about them',
        needs: 'two people, and one of them saying or doing something to the other about that person or about what happened between them',
        when: 'one person says or does something to another, about that person or about what happened between them',
        keeps: ['gaslight', 'darvo', 'lovebomb', 'projection', 'ordexchange'],
        yieldsTo: [{ option: 'pattern', say: 'the same behavior for years, in different places and with different people' }] },
      { id: 'pattern', n: 'A lifelong pattern',
        plain: 'the same behavior for years, everywhere, with everyone',
        needs: 'years, more than one place and more than one relationship, and the same behavior in all of them',
        when: 'the same behavior shows up for years, in different places and with different people',
        keeps: ['narcgrand', 'narcvuln', 'borderline', 'histrionic', 'antisocial', 'ordpersonality'] },
      { id: 'none', n: 'Just a one-off',
        plain: 'one occasion or one short stretch, and nothing more',
        needs: 'one occasion or one short stretch, how the person felt or acted in it, and nothing more: no reasons for a choice, nobody targeted, no years',
        when: 'one person acts a certain way on one occasion or for a short stretch, often after something happened to them, and there is nothing more to it',
        keeps: [] }    // no further question after this answer, and no further name
    ]
  },

  // A branch is a list of one, two or three questions. This one has one: after the first question,
  // "What are they doing with their reasons?" is the only thing left to ask, and each of its answers leads to one name.
  branches: {
    reasoning: [
      { code: 'R1', unit: 'u2',
        q: 'What are they doing with their reasons?',
        why: 'Look at what the reasons do. Who gives them, what they are about, and where the person ends up do not change the name.',
        options: [
          { id: 'addstory', n: 'Makes excuses for what they already did',
            when: 'the person did something that goes against what they believe or have said, and afterward finds a reason it is fine, without new facts and without undoing it',
            keeps: ['dissonance'] },
          { id: 'backward', n: 'Keeps going because of what is already spent',
            when: 'a next step is still to decide, and the reason given for taking it is the money or time already spent, not what the step itself would cost or bring',
            keeps: ['sunkcost'] },
          { id: 'scrutiny', n: 'Picks apart only the evidence against their view',
            when: 'there is evidence both for and against the person’s view, and they pick apart the evidence against it in a way they never did the evidence for it',
            keeps: ['confbias'],
            yieldsTo: [{ option: 'fixed', say: 'an answer picked before they started looking' }] },
          { id: 'fixed', n: 'Picks the answer first, then looks for support',
            when: 'the person looks into a question or a choice, the answer was picked before they started, and they only collect what backs it',
            keeps: ['motivated'] },
          { id: 'follows', n: 'Checks every fact the same way, and goes where they lead',
            when: 'the person checks every fact the same way whichever side it helps, and their view or plan goes where the facts lead, whether it changes or stays the same',
            keeps: ['fair'] }
        ] }
    ],

  // Something done to someone. One question: each thing that can be done to the other person
  // leads to one name, and how often it happens is part of the answer (gaslighting and love-bombing need
  // repetition in their own wording; turning the blame around needs one conversation). Unit Three teaches it.
    tactic: [
      { code: 'T1', unit: 'u3',
        q: 'What are they doing to the other person?',
        why: 'Look at what was done to the other person. How upset anyone is, whether it was meant, and what either person is like do not change the name.',
        options: [
          { id: 'denymemory', n: 'Keeps telling them it did not happen',
            when: 'something really happened, and for weeks or months the person keeps telling the other it did not happen or not that way, until the other doubts their own memory',
            keeps: ['gaslight'] },
          { id: 'reverse', n: 'Denies it, attacks them, and plays the victim',
            when: 'the person did something, the other brings it up, and the person does all three in reply: denies it, attacks the one who brought it up, and plays the victim',
            keeps: ['darvo'],
            yieldsTo: [{ option: 'denymemory', say: 'the same denial of what happened, again and again over weeks or months, until the other person doubts their own memory' }] },
          { id: 'floodpull', n: 'Showers them with attention, then pulls it away',
            when: 'early in a relationship the person gives far more praise, gifts or attention than the relationship so far explains, and later pulls it away or turns critical',
            keeps: ['lovebomb'] },
          { id: 'ownfault', n: 'Accuses them of what the accuser is doing',
            when: 'the person accuses the other of doing or feeling something, the accuser is the one doing or feeling exactly that, and nothing shows the other person doing it',
            keeps: ['projection'],
            yieldsTo: [{ option: 'reverse', say: 'a denial, an attack on the person who brought it up, and the speaker playing the victim' }] },
          { id: 'plain', n: 'Nothing more than it looks like',
            when: 'one person disagrees with, complains to or praises the other, and none of the other four is there',
            keeps: ['ordexchange'] }
        ] }
    ],

    // A lifelong pattern. One question: each pattern is what the person does again and again, for years,
    // in different places and with different people, and whether it keeps hurting someone. Unit Four teaches it.
    pattern: [
      { code: 'P1', unit: 'u4',
        q: 'What do they keep doing, year after year?',
        why: 'Look at what they do again and again, wherever they are and whoever they are with, and whether it keeps hurting someone. One bad week, one relationship or one label someone gives them is not enough.',
        options: [
          { id: 'above', n: 'Acts superior, and gets angry when not treated as special',
            when: 'for years, at home and at work, the person acts better than others and owed special treatment, meets any slight with anger or scorn, and it keeps hurting someone',
            keeps: ['narcgrand'],
            yieldsTo: [{ option: 'uses', say: 'rules broken and people lied to or used, with no regret for the harm' }] },
          { id: 'overlooked', n: 'Feels overlooked and owed more, and sulks when not treated as special',
            when: 'for years, at home and at work, the person feels overlooked and owed more, meets any slight with hurt silence or resentment, and it keeps hurting someone',
            keeps: ['narcvuln'] },
          { id: 'clings', n: 'Clings to people, and turns on them when they seem to be leaving',
            when: 'for years, at home and at work, the person clings to people and turns on them when they seem about to leave, and it keeps hurting someone',
            keeps: ['borderline'] },
          { id: 'center', n: 'Needs to be the center of attention, and makes a bigger scene when they are not',
            when: 'for years, at home and at work, the person needs to be the center of attention, makes a bigger scene when attention goes to someone else, and it keeps hurting someone',
            keeps: ['histrionic'] },
          { id: 'uses', n: 'Breaks rules and uses people, with no regret',
            when: 'for years, at home and at work, the person breaks rules, lies to people or uses them for their own gain, and shows no regret for the harm',
            keeps: ['antisocial'] },
          { id: 'steady', n: 'Nothing that keeps hurting anyone',
            when: 'for years, at home and at work, the person is the same way, shy or blunt for example, and it does not keep hurting them or the people around them',
            keeps: ['ordpersonality'] }
        ] }
    ]
  }
});
