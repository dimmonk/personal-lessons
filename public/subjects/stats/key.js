// Statistical Claims: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
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
//   outcomes[].legit  this is a name for a claim with nothing wrong in it (an action subject: lesson standard P26, S1)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a case must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (S1, H1, A1 ...) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:S1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// The shape, and why (docs/rebuild/stats-plan.md has every change from the old key):
//   The gate asks for the FIRST part of a claim that goes wrong, in the order a claim is put together. That order is
//   the key's tie-break and it is data: each later part yields to every earlier one (yieldsTo). A fifth answer,
//   "Nothing goes wrong", is where a sound claim goes; it is marked legit and has its own branch, which names how far
//   the sound claim goes. So every name for a claim with nothing wrong sits in one branch, and each fault branch
//   meets them as look-alikes across the gate.
//   Every branch has one question: in each, every answer leads to one name, and a second question would repeat the
//   first (lesson standard K2.2, V55; the old key's second questions did exactly that).

FC.key('stats', {
  outcomes: [
    // Nothing goes wrong: taught by Unit Two. These are the legitimate cases every drill stage mixes in (P26, V37).
    { id: 'samp_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair count',
      plain: 'a figure for a group, from a fair picture of it',
      needs: 'a figure for one group, worked out from all of its members or from some picked at random, with most of those asked answering or followed up, and either every member counted or enough of them that one or two more or fewer would not move the figure, and a claim that says no more than the figure for that group',
      aka: ['a representative sample', 'a random sample'] },
    { id: 'meas_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A real change',
      plain: 'a figure that moved because the thing itself moved',
      needs: 'one figure that rose or fell, counted by the same rule and the same tool with the same effort to find it from start to end, nothing that could push it without the thing itself moving, and a claim that says no more than that it rose or fell',
      aka: [] },
    { id: 'comp_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair comparison',
      plain: 'two things of the same kind, set side by side the same way',
      needs: 'two groups, places or things of the same kind, counted the same way over the same period, the numbers given and not only a percentage, no different mix of easy and hard cases hidden inside them, and a claim that says which is bigger, likelier or riskier and stops there',
      aka: ['like for like'] },
    { id: 'cause_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair test',
      plain: 'groups formed by chance, one given the thing and one not',
      needs: 'people or things split into groups at random, one group given the thing and the other not, both counted the same way afterwards, and a difference between the groups that the claim says the thing caused',
      aka: ['a randomised controlled trial', 'a randomised trial'] },

    // Who was counted: taught by Unit Three.
    { id: 'survivor', group: 'counted', unit: 'u3',
      n: 'Survivorship bias',
      plain: 'counting only the ones that lasted',
      needs: 'a figure worked out after the fact from the ones still there at the end, the ones that closed, quit, failed or left missing from it, and the figure read as true of everyone who started, or what the survivors share read as the reason they lasted',
      aka: ['looking only at the winners'] },
    { id: 'selfselect', group: 'counted', unit: 'u3',
      n: 'Self-selection bias',
      plain: 'a figure from the people who chose to answer',
      needs: 'a call anyone could answer, nobody picked by the people counting, the ones who answered deciding for themselves, and their answers read as true of a wider group',
      aka: ['a self-selected sample', 'a voluntary poll'] },
    { id: 'nonresp', group: 'counted', unit: 'u3',
      n: 'Non-response bias',
      plain: 'a figure from the few who replied',
      needs: 'a known list of people who were all asked, many of them not replying, nothing done to hear from the ones who did not, and the replies read as true of the whole list',
      aka: ['a low response rate'] },
    { id: 'smalln', group: 'counted', unit: 'u3',
      n: 'Too few to trust',
      plain: 'a group so small that luck moves the figure',
      needs: 'a group so small that one or two more or fewer would move the figure a long way, and a high or low figure from it read as meaning something',
      aka: ['a small sample', 'small numbers', 'the law of small numbers'] },

    // What the number counts: taught by Unit Four.
    { id: 'proxy', group: 'measure', unit: 'u4',
      n: 'Gaming the target',
      plain: 'pushing up the figure instead of the thing it stands for',
      needs: 'a figure that people are paid, ranked or judged on, a rise in it, and a way they could raise it without more of the thing it is meant to show',
      aka: ['Goodhart’s law', 'teaching to the test', 'hitting the target but missing the point'] },
    { id: 'defshift', group: 'measure', unit: 'u4',
      n: 'A change in how it is counted',
      plain: 'a new way of counting, with the same name on the figure',
      needs: 'a figure that rose or fell, and a change at the same time in the definition of what counts or in the tool that measures, which could move the figure on its own',
      aka: ['a change of definition', 'a new measuring method'] },
    { id: 'detection', group: 'measure', unit: 'u4',
      n: 'Detection bias',
      plain: 'more found, because more was looked for',
      needs: 'a figure of how many were found, more effort put into finding them (more tests, more cameras, an easier way to report), and the rise read as more of the thing happening',
      aka: ['more looking, not more happening', 'surveillance bias'] },

    // What it is compared with: taught by Unit Five.
    { id: 'relrisk', group: 'compare', unit: 'u5',
      n: 'A percentage without the numbers',
      plain: 'a percentage that hides how many it is',
      needs: 'a change or a risk given as a percentage of what it was, and no word on how many it was before and after',
      aka: ['relative risk', 'a big percentage of a small number'] },
    { id: 'baserate', group: 'compare', unit: 'u5',
      n: 'Base rate fallacy',
      plain: 'a test’s accuracy read as the chance its yes is right',
      needs: 'a test or an alarm that is right most of the time, a yes from it, the chance that the yes is right read straight off its accuracy, and the thing being rare among the people tested',
      aka: ['base-rate neglect', 'the false positive paradox', 'ignoring how common it is'] },
    { id: 'simpson', group: 'compare', unit: 'u5',
      n: 'Simpson’s paradox',
      plain: 'totals that hide a different mix of cases',
      needs: 'two totals set side by side, each made of easier and harder cases (mild and severe illness, strong and weak students), the hard ones a much bigger share of one total than of the other, and the totals read as a fair ranking',
      aka: ['totals that hide the groups'] },

    // What it says caused what: taught by Unit Six.
    { id: 'nocontrol', group: 'cause', unit: 'u6',
      n: 'No comparison group',
      plain: 'nothing to show what happens without it',
      needs: 'a claim that something worked, a result only for the people or things that got it, or only from before and after it, and no group that went without it to show what happens anyway',
      aka: ['no control group'] },
    { id: 'confound', group: 'cause', unit: 'u6',
      n: 'Confounding',
      plain: 'something else behind both',
      needs: 'people or places that did one thing set beside ones that did not, groups they ended up in by their own choice or circumstance, a difference in result between them, and something else that differs between the groups and could bring about that result on its own',
      aka: ['a third factor', 'a confounding factor'] },
    { id: 'reverse', group: 'cause', unit: 'u6',
      n: 'Reverse causation',
      plain: 'the result leading to the thing, not the thing to the result',
      needs: 'two things that go together, a claim that the first caused the second, and a way the second could come first and lead to the first',
      aka: ['the cause running the other way'] },
    { id: 'regression', group: 'cause', unit: 'u6',
      n: 'Regression to the mean',
      plain: 'picked at an extreme, then back toward usual',
      needs: 'people or things picked because they were at their worst or best, a change back toward their usual level afterwards, and that change read as caused by something done to them in between',
      aka: ['drifting back to normal'] }
  ],

  terms: [
    { id: 'atrandom', unit: 'u2', n: 'at random',
      means: 'picked so that each one had the same chance, as in a lottery or a coin toss, and not by anyone’s choice' },
    { id: 'sample', unit: 'u2', n: 'sample',
      means: 'the people or things actually counted, when they are meant to stand for a bigger group' },
    { id: 'margin', unit: 'u2', n: 'margin of error',
      means: 'how far a figure worked out from a sample could be from the figure for the whole group, by chance alone' },
    { id: 'placebo', unit: 'u2', n: 'placebo',
      means: 'a dummy treatment made to look like the real one, so that nobody in a test can tell which group they are in' },
    { id: 'falsealarm', unit: 'u5', n: 'false alarm',
      means: 'a test or an alarm saying yes when the thing it looks for is not there' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/stats.md, W7 and the
  // vocabulary map), and words the lesson standard keeps for one thing only (K9).
  avoid: [
    { word: 'frame', sayInstead: 'the list of everyone who could have been asked' },
    { word: 'population', sayInstead: 'the whole group the claim is about' },
    { word: 'denominator', sayInstead: 'what it is out of' },
    { word: 'pipeline', sayInstead: 'the four parts of a claim' },
    { word: 'first break', sayInstead: 'the first part that goes wrong' },
    { word: 'fault', sayInstead: 'what goes wrong, or the name for it' },
    { word: 'proxy', sayInstead: 'a figure that stands for something else' },
    { word: 'metric', sayInstead: 'figure' },
    { word: 'baseline', sayInstead: 'how many it was before' },
    { word: 'absolute risk', sayInstead: 'how many it was before and after' },
    { word: 'prevalence', sayInstead: 'how common it is' },
    { word: 'correlation', sayInstead: 'going together' },
    { word: 'variable', sayInstead: 'thing' },
    { word: 'confounder', sayInstead: 'something else behind both' },
    { word: 'cohort', sayInstead: 'a group followed over years' },
    { word: 'counterfactual', sayInstead: 'what would have happened without it' },
    { word: 'random error', sayInstead: 'luck' },
    { word: 'systematic error', sayInstead: 'a lean in who was counted or how' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    { word: 'the rule', sayInstead: 'what you must be able to point to, or how to tell them apart' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // The order of the four parts is the tie-break, as data: a claim that goes wrong in two parts gets the earlier one,
  // so each later part yields to every part before it. "Nothing goes wrong" needs no tie-break: its "when" already
  // requires that no part goes wrong.
  gate: {
    code: 'S1', unit: 'u1',
    q: 'Which part of the claim goes wrong first?',
    purpose: 'Sorts a claim made with numbers by the first of its four parts that goes wrong, in the order a claim is put together, or finds that none of them does',
    why: 'A claim made with numbers is put together in order. Some people or things are counted; the figure from them stands for something; it is set beside something else to give it meaning; and it may be said to show that one thing caused another. Each part rests on the ones before it, so the first part that goes wrong spoils everything built on it, and what you ask next depends on which part that is. A claim in which no part goes wrong holds, as far as it goes.',
    options: [
      { id: 'counted', n: 'Who was counted',
        plain: 'the people or things the figure was worked out from',
        needs: 'the people or things the figure was worked out from, and either a reason they are not a fair picture of the group the claim is about, or so few of them that one or two more or fewer would change the figure',
        when: 'the people or things the figure was worked out from are not a fair picture of the group the claim is about, or are too few to trust',
        keeps: ['survivor', 'selfselect', 'nonresp', 'smalln'] },
      { id: 'measure', n: 'What the number counts',
        plain: 'what the figure stands for',
        needs: 'a figure read as showing something real (good service, safe roads, how much illness there is), and something other than that real thing that could make the figure rise, fall or differ',
        when: 'the figure could rise, fall or differ without the real thing it is read as showing doing the same',
        keeps: ['proxy', 'defshift', 'detection'],
        yieldsTo: [{ option: 'counted', say: 'people or things that are not a fair picture of the group, or too few to trust' }] },
      { id: 'compare', n: 'What it is compared with',
        plain: 'what the figure is set beside to give it meaning',
        needs: 'a figure given as a percentage of what it was, as a test’s accuracy, or as a total set beside another total, and something you would need beside it to read it fairly that the claim leaves out',
        when: 'the figure is given as a percentage of what it was, as a test’s accuracy, or as totals set side by side, and the claim leaves out something you would need beside it to read it fairly',
        keeps: ['relrisk', 'baserate', 'simpson'],
        yieldsTo: [{ option: 'counted', say: 'people or things that are not a fair picture of the group, or too few to trust' },
                   { option: 'measure', say: 'a figure that could rise, fall or differ without the real thing doing the same' }] },
      { id: 'cause', n: 'What it says caused what',
        plain: 'the step from “these go together” to “this made that happen”',
        needs: 'a claim that one thing made another happen, and another way the same result could have come about',
        when: 'the claim says one thing made another happen, and the case shows another way the same result could have come about',
        keeps: ['nocontrol', 'confound', 'reverse', 'regression'],
        yieldsTo: [{ option: 'counted', say: 'people or things that are not a fair picture of the group, or too few to trust' },
                   { option: 'measure', say: 'a figure that could rise, fall or differ without the real thing doing the same' },
                   { option: 'compare', say: 'a figure read without something it has to be set beside' }] },
      { id: 'holds', n: 'Nothing goes wrong', legit: true,
        plain: 'every part the claim makes holds',
        needs: 'every part the claim makes, checked in order, with nothing wrong in any: a fair picture of the group, a figure that moves only when the real thing moves, a fair thing to set it beside, and, if it says one thing caused another, groups formed by chance',
        when: 'every part the claim makes holds up when it is checked in order, and none of them goes wrong',
        keeps: ['samp_ok', 'meas_ok', 'comp_ok', 'cause_ok'] }
    ]
  },

  // A branch is a list of one, two or three questions. Each of these has one: every answer leads to one name, and
  // the old second questions only said the first answer again in other words (lesson standard K2.2, V55).
  branches: {
    // Nothing goes wrong. Unit Two teaches it. Its answers are exclusive by their "when" lines, so no tie-break is needed.
    holds: [
      { code: 'H1', unit: 'u2',
        q: 'What does the claim say the figures show?',
        purpose: 'Tells apart four kinds of sound claim by how far each goes: a figure for one group, a rise or fall in one figure, a difference between two things, and a cause',
        why: 'A sound claim has earned only what it says. Each kind needs different parts to hold, so knowing which kind it is tells you what you can rely on and what it has not shown: a fair count shows nothing about change, and a fair comparison shows nothing about cause.',
        options: [
          { id: 'group', n: 'A figure for one group',
            when: 'the claim gives a figure for one group at one time (a share, an average, a count) and says nothing about a rise or fall, a difference from something else, or a cause',
            keeps: ['samp_ok'] },
          { id: 'change', n: 'A rise or fall in one figure',
            when: 'the claim gives one figure for one thing at two or more times and says it rose or fell, sets it beside nothing else, and does not say what caused it',
            keeps: ['meas_ok'] },
          { id: 'difference', n: 'A difference between two things',
            when: 'the claim sets two groups, places or things side by side, and says which is bigger, likelier or riskier, without saying that one thing caused it',
            keeps: ['comp_ok'] },
          { id: 'causes', n: 'One thing causing another',
            when: 'the claim says one thing made another happen',
            keeps: ['cause_ok'] }
        ] }
    ],

    // Who was counted. Unit Three teaches it. The answer is read off how the people or things got into the figure.
    counted: [
      { code: 'A1', unit: 'u3',
        q: 'How did the people or things in the figure get into it?',
        purpose: 'Tells apart four ways the people or things counted can fail to be a fair picture of the group a claim is about',
        why: 'The four names are defined by how the people or things got into the figure. Each leaves out a different group, or leaves too few, so knowing which one tells you which way the figure leans and what you would need to see to put it right.',
        options: [
          { id: 'lasted', n: 'Only the ones that lasted were counted',
            when: 'the figure was worked out after the fact from the ones still there at the end (still open, still playing, still standing, still customers), so the ones that closed, quit, failed or left are not in it',
            keeps: ['survivor'] },
          { id: 'chose', n: 'They chose to answer, when anyone could',
            when: 'nobody was asked by name: anyone who wanted to could answer (a phone-in, a website vote, a feedback box, a stand in the street), and the answers are read as true of a wider group than the ones who chose to',
            keeps: ['selfselect'] },
          { id: 'replied', n: 'Everyone on a list was asked, and many did not reply',
            when: 'a known list of people was asked (every member, every patient, every household), many of them did not reply, and nothing was done to hear from the ones who did not',
            keeps: ['nonresp'] },
          { id: 'handful', n: 'All were counted, but there are only a handful',
            when: 'nobody was left out, but there are so few that one or two more or fewer would move the figure a long way, and a high or low figure from them is read as meaning something',
            keeps: ['smalln'] }
        ] }
    ],

    // What the number counts. Unit Four teaches it.
    measure: [
      { code: 'M1', unit: 'u4',
        q: 'What besides the real thing could move this figure?',
        purpose: 'Tells apart three ways a figure can rise, fall or differ while the real thing it is read as showing stays the same',
        why: 'The three names are defined by what moved the figure in place of the real thing. Each sends you to a different check: what people did to the figure, what changed in the counting, or how hard anyone looked.',
        options: [
          { id: 'pushed', n: 'People working on the figure itself',
            when: 'the people the figure measures are paid, ranked or judged on it (a target, a bonus, a quota), and they could raise it without more of the thing it is meant to show',
            keeps: ['proxy'] },
          { id: 'newrule', n: 'A new rule or tool for counting it',
            when: 'the definition of what counts, or the tool that measures, changed during the time the figure covers (a new definition, a new form, a new meter), and that change alone could move the figure',
            keeps: ['defshift'] },
          { id: 'looked', n: 'More looking for it',
            when: 'more effort went into finding the thing during the time the figure covers (more tests, more cameras, an easier way to report it), and finding more could raise the figure with no more of the thing happening',
            keeps: ['detection'] }
        ] }
    ],

    // What it is compared with. Unit Five teaches it. A claim with one figure and nothing beside it that says something
    // worked is not here: it belongs to the next branch, where "It would have happened anyway" names it.
    compare: [
      { code: 'C1', unit: 'u5',
        q: 'What would you need to see to read the figure fairly?',
        purpose: 'Tells apart three things a claim can leave out that a figure has to be set beside before it means anything',
        why: 'The three names are defined by what is missing beside the figure. Each makes the figure look bigger, surer or fairer than it is, and each is put right by a different piece of arithmetic.',
        options: [
          { id: 'numbers', n: 'The numbers behind the percentage',
            when: 'a change or a risk is given only as a percentage of what it was (up 300%, risk cut by half, 18% higher), with no word on how many it was before and after',
            keeps: ['relrisk'] },
          { id: 'common', n: 'How common the thing is to begin with',
            when: 'a test’s or an alarm’s accuracy is read as the chance that its yes is right, and the claim leaves out, or does not use, how rare the thing is among the people tested',
            keeps: ['baserate'] },
          { id: 'split', n: 'The totals split back into their groups',
            when: 'two totals (two hospitals, two tutors, two shops) are set side by side as if they dealt with the same kind of case, and the case shows that each deals with a different mix of easy and hard ones',
            keeps: ['simpson'] }
        ] }
    ],

    // What it says caused what. Unit Six teaches it. One tie-break: a group picked at its worst or best and given
    // nothing to compare with shows both the first and the last answer; the last, which says why the change would
    // have come anyway, wins.
    cause: [
      { code: 'K1', unit: 'u6',
        q: 'What else could produce the same result?',
        purpose: 'Tells apart four ways the result in a claim about cause could come about other than through the cause the claim names',
        why: 'A result shows a cause only if nothing else explains it as well. The four names are defined by what else explains it, and each is ruled out by a different check: a group that went without, groups alike in the other thing, which came first, an equally extreme group left alone.',
        options: [
          { id: 'anyway', n: 'It would have happened anyway',
            when: 'the claim says something worked, the result is only for the people or things that got it, or only from before and after it, and no group that went without it shows what happens anyway',
            keeps: ['nocontrol'],
            yieldsTo: [{ option: 'extreme', say: 'a group picked because it was at its worst or best' }] },
          { id: 'behind', n: 'Something else causes both',
            when: 'the claim sets people or places that did one thing beside ones that did not, they ended up in their groups by their own choice or circumstance, and the case shows something else that differs between the groups and could bring about the result on its own',
            keeps: ['confound'] },
          { id: 'backward', n: 'The second thing causes the first',
            when: 'the claim says the first thing caused the second, and the case shows the second could come first and lead to the first',
            keeps: ['reverse'] },
          { id: 'extreme', n: 'It was picked at its worst or best, and goes back toward usual',
            when: 'the people or things were picked because they were at their worst or best, and the change afterwards is a move back toward their usual level',
            keeps: ['regression'] }
        ] }
    ]
  }
});
