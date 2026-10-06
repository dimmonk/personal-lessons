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
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// This file carries the whole gate, which Unit One teaches, and the branch that Unit Two teaches.
// The other two branches are added, in the same shape, by the units that teach them; until then their gate answers
// keep no outcomes. The fourth gate answer has no branch: after it the key asks nothing more (K2.9).

FC.key('psychology', {
  outcomes: [
    { id: 'dissonance', group: 'reasoning', unit: 'u2',
      n: 'Cognitive dissonance reduction',
      plain: 'an excuse added after the act',
      needs: 'something the person did that does not fit what they believe or have said, and a reason they give afterward for why it is fine or does not count',
      aka: ['rationalizing', 'making excuses'] },
    { id: 'sunkcost', group: 'reasoning', unit: 'u2',
      n: 'Sunk cost fallacy',
      plain: 'carrying on because of what is already spent',
      needs: 'something already spent that cannot be gotten back, a next step still to be decided, and what is already spent given as the reason to take it',
      aka: ['throwing good money after bad', 'escalation of commitment'] },
    { id: 'confbias', group: 'reasoning', unit: 'u2',
      n: 'Confirmation bias',
      plain: 'a harder test for unwelcome evidence',
      needs: 'a view the person already holds, evidence for it and evidence against it, and a harder test for the evidence against it than the evidence for it ever got',
      aka: [] },
    { id: 'motivated', group: 'reasoning', unit: 'u2',
      n: 'Motivated reasoning',
      plain: 'the answer first, the search afterward',
      needs: 'a search the person set out on to settle a choice or a question, an answer chosen before that search began, and a search that collects only support for it',
      aka: [] },
    { id: 'fair', group: 'reasoning', unit: 'u2',
      n: 'Fair reasoning',
      plain: 'the same test for every fact, and the view goes where the facts point',
      needs: 'facts about the matter, the same test for them whichever way they point, and a view or plan that ends up where they point, whether that means changing it or keeping it',
      aka: ['keeping an open mind'] },

    // Something one person does to another: taught by Unit Three.
    { id: 'gaslight', group: 'tactic', unit: 'u3',
      n: 'Gaslighting',
      plain: 'telling someone, again and again, that what happened did not happen',
      needs: 'something the case shows really happened, one person telling the other again and again, over weeks or months, that it did not happen or did not happen that way, and the other person starting to doubt their own memory',
      aka: ['making someone doubt their own mind'] },
    { id: 'darvo', group: 'tactic', unit: 'u3',
      n: 'Turning the blame around',
      plain: 'caught out, they deny it, attack, and play the one wronged',
      needs: 'something the case shows the person did, someone raising it with them, and in answer all three: they deny it, they attack the person who raised it, and they present themselves as the one who has been wronged',
      aka: ['DARVO, short for deny, attack, reverse victim and offender'] },
    { id: 'lovebomb', group: 'tactic', unit: 'u3',
      n: 'Love-bombing',
      plain: 'a flood of attention early on, pulled back later',
      needs: 'early in a relationship, far more praise, attention, gifts or plans than the relationship so far would explain, and later that attention pulled back or turned into criticism, often once the other person sets a limit or does not go along',
      aka: ['running hot and cold'] },
    { id: 'projection', group: 'tactic', unit: 'u3',
      n: 'Projection',
      plain: 'accusing someone of what you are doing yourself',
      needs: 'an accusation one person makes against the other, and the case showing that the accuser is the one doing or feeling what they accuse the other of, with nothing in the case showing the other person doing it',
      aka: ['accusing others of what you do yourself'] },
    { id: 'ordexchange', group: 'tactic', unit: 'u3',
      n: 'An ordinary exchange',
      plain: 'something said between two people, with nothing more to it',
      needs: 'two people and something one says or does to the other (a disagreement, a complaint, a defense, praise), and none of the other four: no repeated denial of what happened, no deny, attack and play the one wronged when caught out, no flood of attention later pulled back, no accusation that fits the accuser',
      aka: [] },

    // A lasting way someone is: taught by Unit Four.
    { id: 'narcgrand', group: 'pattern', unit: 'u4',
      n: 'Grandiose narcissism',
      plain: 'acting above others for years, and angry when not treated so',
      needs: 'years, more than one place and relationship, the person acting as if they are better than others and owed special treatment, little interest in what others feel, anger or scorn when they are not treated as special, and a cost to them or to people around them',
      aka: ['a narcissist', 'overt narcissism', 'narcissistic personality disorder'] },
    { id: 'narcvuln', group: 'pattern', unit: 'u4',
      n: 'Vulnerable narcissism',
      plain: 'feeling overlooked and owed more for years, and hurt when not treated so',
      needs: 'years, more than one place and relationship, the person saying they are overlooked and owed more than they get, little interest in what others feel, hurt withdrawal or quiet resentment when they are not treated as special, and a cost to them or to people around them',
      aka: ['covert narcissism'] },
    { id: 'borderline', group: 'pattern', unit: 'u4',
      n: 'Borderline personality',
      plain: 'clinging to people, and turning on them when they seem to be leaving',
      needs: 'years, more than one place and relationship, desperate efforts to keep people close, a swing from adoring someone to attacking them when they seem about to leave or pull away, and a cost to them or to people around them',
      aka: ['borderline', 'BPD', 'borderline personality disorder'] },
    { id: 'histrionic', group: 'pattern', unit: 'u4',
      n: 'Histrionic personality',
      plain: 'always at the center of attention, with bigger displays when it moves away',
      needs: 'years, more than one place and relationship, the person putting themselves at the center of attention, bigger and bigger displays when attention moves to someone else, and a cost to them or to people around them',
      aka: ['histrionic personality disorder', 'attention-seeking'] },
    { id: 'antisocial', group: 'pattern', unit: 'u4',
      n: 'Antisocial personality',
      plain: 'breaking rules and using people, with no regret',
      needs: 'years, more than one place and relationship, rules broken and people lied to or used for the person’s own ends, no regret shown for the harm, and people hurt by it',
      aka: ['psychopath', 'sociopath', 'psychopathy', 'antisocial personality disorder'] },
    { id: 'ordpersonality', group: 'pattern', unit: 'u4',
      n: 'An ordinary personality',
      plain: 'a way of being that stays the same, and does not keep doing harm',
      needs: 'years, more than one place and relationship, the same way of being in all of them (confident, shy, dramatic, blunt, touchy), and no repeated cost to the person or to the people around them',
      aka: ['just how they are'] }
  ],

  terms: [
    { id: 'cd', unit: 'u2', n: 'cognitive dissonance',
      means: 'the discomfort of doing one thing while believing another' },
    { id: 'pd', unit: 'u4', n: 'personality disorder',
      means: 'a lasting way of being, across years, places and relationships, that keeps costing the person or the people around them. Only a professional diagnoses one, after long assessment; the questions name what a case shows, not a person' }
  ],

  // Words the old lessons used that a newcomer could not follow, or that this unit's own drafts used for two things.
  avoid: [
    { word: 'clash', sayInstead: 'does not fit' },
    { word: 'move', sayInstead: 'what the reasoning does, or what one person says or does to another (this subject no longer uses the word)' },
    { word: 'deciding feature', sayInstead: 'what you must be able to point to' },
    { word: 'provisional', sayInstead: 'from one case so far' },
    { word: 'the rule', sayInstead: 'what you must be able to point to, or how to tell them apart' },
    { word: 'justification', sayInstead: 'a reason why it is fine' },
    { word: 'cognition', sayInstead: 'belief' },
    { word: 'scrutiny', sayInstead: 'a harder test' },
    { word: 'uneven', sayInstead: 'a harder test for one side' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    // Added with Unit One: the old first unit's jargon, and words its own drafts used for two things.
    { word: 'pervasive', sayInstead: 'across years, places and relationships' },
    { word: 'situational', sayInstead: 'on one occasion or for one short stretch' },
    { word: 'pathologizing', sayInstead: 'treating one occasion as a lasting way someone is' },
    { word: 'proportionate', sayInstead: 'fits what happened' },
    { word: 'diagnostic', sayInstead: 'the question' },
    { word: 'interaction', sayInstead: 'what one person says or does to another' },
    { word: 'trait', sayInstead: 'a lasting way someone is' },
    { word: 'category', sayInstead: 'kind' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its four answers are that unit's families.
  // Tie-breaks are data (yieldsTo): a case that shows years, places and relationships gets the third answer whatever
  // else it shows, and a case in which something is said or done to another person about them gets the second answer
  // even if the speaker is also giving reasons. The fourth answer needs no tie-break: its "when" already requires
  // that the case show none of the other three.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What kind of thing is this?',
    purpose: 'Sorts one person’s reasoning from something one person does to another, from the way a person is over years, and from a moment that will pass',
    why: 'Each of the four is made of something different and is judged on different things: a piece of reasoning on the reasons, something one person does to another on what was said or done and what it did to the other person, and a person across years on those years. So the questions that come next depend on this answer, and after a passing moment there are none.',
    options: [
      { id: 'reasoning', n: 'One person’s reasoning',
        plain: 'one person, and their reasons for a view or a choice',
        needs: 'a view, a choice or an act that is the person’s own, and the reasons they give for it or what they do with the facts about it',
        when: 'the case shows how one person reaches, defends or changes a view or a choice of their own',
        keeps: ['dissonance', 'sunkcost', 'confbias', 'motivated', 'fair'],
        yieldsTo: [{ option: 'tactic', say: 'something said or done to another person about them' },
                   { option: 'pattern', say: 'the same behavior across years, places and relationships' }] },
      { id: 'tactic', n: 'Something one person does to another',
        plain: 'two people, and what one says or does to the other',
        needs: 'two people, and something one of them says or does to the other that is about that person or about what has happened between the two',
        when: 'the case shows one person saying or doing something to another person, and it is about that person or about what has happened between the two of them',
        keeps: ['gaslight', 'darvo', 'lovebomb', 'projection', 'ordexchange'],
        yieldsTo: [{ option: 'pattern', say: 'the same behavior across years, places and relationships' }] },
      { id: 'pattern', n: 'A lasting way someone is',
        plain: 'one person, the same way for years, wherever they are and whoever they are with',
        needs: 'years, more than one place and more than one relationship, and the same behavior in all of them',
        when: 'the case shows how a person is across years, places and relationships',
        keeps: ['narcgrand', 'narcvuln', 'borderline', 'histrionic', 'antisocial', 'ordpersonality'] },
      { id: 'none', n: 'A passing moment',
        plain: 'one person, one occasion or one short stretch, and nothing to name',
        needs: 'one occasion or one short stretch, how the person felt or acted in it, and nothing else (no reasons for a view or a choice, nothing said or done to another person about them, and no years)',
        when: 'the case shows how a person feels or acts on one occasion or for one short stretch, often after something has happened to them, and it shows nothing else (no reasons for a view or a choice, nothing said or done to another person about them, and nothing across years)',
        keeps: [] }    // no branch: after this answer the key asks nothing more, and gives no further name
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
            when: 'the person has done something that does not fit what they believe or have said, and afterward they give a reason why it is fine or does not count. No new fact about the matter has arrived, and they do not undo what they did or say it was wrong',
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
    ],

  // Something one person does to another. One question: each of what can be done to the other person
  // leads to one name, and how often it happens is part of the answer (gaslighting and love-bombing need
  // repetition in their own wording; turning the blame around needs one exchange). Unit Three teaches it.
    tactic: [
      { code: 'T1', unit: 'u3',
        q: 'What does it do to the other person?',
        purpose: 'Tells apart four things one person can do to another that work against them, and the ordinary exchange that does none of them',
        why: 'The five names are defined by what is done to the other person, as the case shows it. They are not defined by how upset anyone is, by whether it was meant, or by what kind of person either of them is.',
        options: [
          { id: 'denymemory', n: 'Tells them, again and again, that what happened did not happen',
            when: 'the case shows something really happened, and over weeks or months the person keeps telling the other that it did not happen or did not happen that way, until the other person starts to doubt their own memory',
            keeps: ['gaslight'] },
          { id: 'reverse', n: 'Denies it, attacks them for raising it, and plays the one wronged',
            when: 'the case shows the person did something, the other person raises it, and in answer the person does all three: denies it, attacks the one who raised it, and presents themselves as the one wronged. One exchange is enough',
            keeps: ['darvo'],
            yieldsTo: [{ option: 'denymemory', say: 'the same denial of what happened, again and again over weeks or months, until the other person doubts their own memory' }] },
          { id: 'floodpull', n: 'Floods them with attention early on, then pulls it back',
            when: 'early in a relationship the person gives far more praise, attention, gifts or plans than the relationship so far would explain, and later pulls it back or turns critical, often once the other person sets a limit or does not go along',
            keeps: ['lovebomb'] },
          { id: 'ownfault', n: 'Accuses them of what the accuser is doing',
            when: 'the person accuses the other of doing or feeling something, the case shows the accuser doing or feeling exactly that, and nothing in the case shows the other person doing it',
            keeps: ['projection'],
            yieldsTo: [{ option: 'reverse', say: 'a denial of what they were asked about and an attack on the person who asked, with the speaker as the one wronged' }] },
          { id: 'plain', n: 'Says or does what it looks like, and nothing more',
            when: 'one person disagrees with, complains to, defends themselves to or praises the other, and the case shows none of the other four: no repeated denial of what happened, no deny, attack and play the one wronged when caught out, no flood of attention later pulled back, no accusation that fits the accuser',
            keeps: ['ordexchange'] }
        ] }
    ],

    // A lasting way someone is. One question: each pattern is defined by what the person does, again and
    // again, across years, places and relationships, and by what it costs. Unit Four teaches it.
    pattern: [
      { code: 'P1', unit: 'u4',
        q: 'What does the person do, again and again, across those years?',
        purpose: 'Tells apart five lasting ways of being that keep costing the person or the people around them, and the ordinary personality that does not',
        why: 'The six names are defined by what the person does again and again, wherever they are and whoever they are with, and by whether it keeps doing harm. One bad week, one relationship or one label someone gives them decides nothing.',
        options: [
          { id: 'above', n: 'Acts above others, and turns angry or scornful when not treated as special',
            when: 'across years, places and relationships the person acts as if they are better than others and owed special treatment, shows little interest in what others feel, meets any slight with anger or scorn, and it keeps costing them or the people around them',
            keeps: ['narcgrand'],
            yieldsTo: [{ option: 'uses', say: 'rules broken and people lied to or used, with no regret for the harm' }] },
          { id: 'overlooked', n: 'Feels overlooked and owed more, and turns hurt and resentful when not treated as special',
            when: 'across years, places and relationships the person says they are overlooked and owed more than they get, shows little interest in what others feel, meets any slight with hurt withdrawal or quiet resentment, and it keeps costing them or the people around them',
            keeps: ['narcvuln'] },
          { id: 'clings', n: 'Clings to people, and turns on them when they seem to be leaving',
            when: 'across years, places and relationships the person makes desperate efforts to keep people close, swings from adoring someone to attacking them when that person seems about to leave or pull away, and it keeps costing them or the people around them',
            keeps: ['borderline'] },
          { id: 'center', n: 'Keeps the attention on themselves, with bigger displays when it moves away',
            when: 'across years, places and relationships the person puts themselves at the center of attention, makes bigger and bigger displays when attention moves to someone else, and it keeps costing them or the people around them',
            keeps: ['histrionic'] },
          { id: 'uses', n: 'Breaks rules and uses people, and shows no regret for the harm',
            when: 'across years, places and relationships the person breaks rules, lies to people or uses them for their own ends, and shows no regret for the harm it does',
            keeps: ['antisocial'] },
          { id: 'steady', n: 'Stays the same way for years, and it does not keep doing harm',
            when: 'across years, places and relationships the person shows the same way of being (confident, shy, dramatic, blunt, touchy), and the case shows no repeated cost to them or to the people around them',
            keeps: ['ordpersonality'] }
        ] }
    ]
  }
});
