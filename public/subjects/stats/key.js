// Statistical Claims: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what to look for in a story before the name can be used. Printed under "What to look for".
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   outcomes[].legit  this is a name for a claim with nothing wrong in it (an action subject: lesson standard P26, S1)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a story must show for this answer, as a clause. Printed as "Give this answer when <when>."
//                     and, in feedback, as "This story shows something else: <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a story shows this answer AND the one named, the named one wins
// Step codes (S1, H1, A1 ...) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:S1.option}; its plain words and what to
//                     look for are printed by {plain:option} and {needs:option}.
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
    // Nothing goes wrong: taught by Unit Two. These are the sound claims every drill stage mixes in (P26, V37).
    { id: 'samp_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair count',
      plain: 'a figure for one group, from a fair picture of it',
      needs: 'a figure for one group, taken from all of it or a random pick, most of them answering, enough that one or two more would not move it, and a claim that goes no further',
      aka: ['a representative sample', 'a random sample'] },
    { id: 'meas_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A real change',
      plain: 'a figure that moved because the real thing moved',
      needs: 'one figure that rose or fell, counted the same way and with the same effort throughout, nothing else pushing it, and a claim that says only that it rose or fell',
      aka: [] },
    { id: 'comp_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair comparison',
      plain: 'two like things, counted the same way and set side by side',
      needs: 'two things of the same sort counted the same way over the same time, with the actual counts, no hidden mix of easy and hard ones, and a claim only about which is bigger',
      aka: ['like for like'] },
    { id: 'cause_ok', group: 'holds', unit: 'u2', legit: true,
      n: 'A fair test',
      plain: 'groups split by chance, one given the thing and one not',
      needs: 'people or things split into two groups at random, only one given the thing, both counted the same way afterward, and a difference the claim says the thing caused',
      aka: ['a randomized controlled trial', 'a randomized trial'] },

    // Who was counted: taught by Unit Three.
    { id: 'survivor', group: 'counted', unit: 'u3',
      n: 'Survivorship bias',
      plain: 'counting only the ones that lasted',
      needs: 'a figure from only the ones still around at the end, the ones that quit or failed left out, and it taken as true of all who started, or as why they lasted',
      aka: ['looking only at the winners'] },
    { id: 'selfselect', group: 'counted', unit: 'u3',
      n: 'Self-selection bias',
      plain: 'a figure from the people who chose to answer',
      needs: 'a poll anyone could answer, nobody picked by the people running it, and the answers of those who chose to join in taken as true of a wider group',
      aka: ['a self-selected sample', 'a voluntary poll'] },
    { id: 'nonresp', group: 'counted', unit: 'u3',
      n: 'Non-response bias',
      plain: 'a figure from the few who wrote back',
      needs: 'a known list of people who were all asked, many of them never replying, no effort to hear from the rest, and the replies taken as true of the whole list',
      aka: ['a low response rate'] },
    { id: 'smalln', group: 'counted', unit: 'u3',
      n: 'Too few to trust',
      plain: 'so few counted that luck moves the figure',
      needs: 'a group so small that one or two more or fewer would move the figure a lot, and a high or low figure from it taken to mean something',
      aka: ['a small sample', 'small numbers', 'the law of small numbers'] },

    // What the number counts: taught by Unit Four.
    { id: 'proxy', group: 'measure', unit: 'u4',
      n: 'Gaming the target',
      plain: 'pushing up the figure instead of the real thing',
      needs: 'a figure people are paid, ranked or judged on, a rise in it, and a way they could raise it without more of the real thing it is meant to show',
      aka: ['Goodhart’s law', 'teaching to the test', 'hitting the target but missing the point'] },
    { id: 'defshift', group: 'measure', unit: 'u4',
      n: 'A new way of counting',
      plain: 'the same name on the figure, but counted a new way',
      needs: 'a figure that rose or fell, and a change at the same time in what counts or in the tool that counts it, which could move the figure on its own',
      aka: ['a change of definition', 'a new measuring method'] },
    { id: 'detection', group: 'measure', unit: 'u4',
      n: 'More looking, not more happening',
      plain: 'more found, because more people looked',
      needs: 'a count of how many were found, more effort put into finding them, like more tests or cameras, and the rise taken as more of the thing happening',
      aka: ['detection bias', 'surveillance bias'] },

    // What it is compared with: taught by Unit Five.
    { id: 'relrisk', group: 'compare', unit: 'u5',
      n: 'A percentage without the numbers',
      plain: 'a percentage that hides how many it is',
      needs: 'a change or a risk given only as a percentage (up 50%, risk cut in half), and no word on how many it was before and after',
      aka: ['relative risk', 'a big percentage of a small number'] },
    { id: 'baserate', group: 'compare', unit: 'u5',
      n: 'Base rate fallacy',
      plain: 'forgetting how rare the thing is when a test says yes',
      needs: 'a yes from a test or alarm that is right most of the time, that yes taken as just as likely right as the test is accurate, and the thing rare among those tested',
      aka: ['base-rate neglect', 'the false positive paradox', 'ignoring how common it is'] },
    { id: 'simpson', group: 'compare', unit: 'u5',
      n: 'Simpson’s paradox',
      plain: 'totals that hide a different mix of easy and hard ones',
      needs: 'two totals side by side, each a mix of easy and hard ones, like mild and severe illness, far more hard ones in one, and the totals taken as a fair ranking',
      aka: ['totals that hide the groups'] },

    // What caused what: taught by Unit Six.
    { id: 'nocontrol', group: 'cause', unit: 'u6',
      n: 'No comparison group',
      plain: 'nothing to show what would happen without it',
      needs: 'a claim that something worked, results only for those who got it or only from before and after, and no group that went without it to show what happens anyway',
      aka: ['no control group'] },
    { id: 'confound', group: 'cause', unit: 'u6',
      n: 'Confounding',
      plain: 'something else behind both',
      needs: 'people or places that did one thing beside ones that did not, not split at random, a difference in results, and something else between the groups that could cause it',
      aka: ['a third factor', 'a confounding factor'] },
    { id: 'reverse', group: 'cause', unit: 'u6',
      n: 'Reverse causation',
      plain: 'the result causing the thing, not the other way around',
      needs: 'two things that go together, a claim that the first caused the second, and a way the second could come first and lead to the first',
      aka: ['the cause running the other way'] },
    { id: 'regression', group: 'cause', unit: 'u6',
      n: 'Regression to the mean',
      plain: 'picked at its worst or best, then drifting back to normal',
      needs: 'people or things picked at their worst or best, a drift back toward their usual level afterward, and that drift credited to something done in between',
      aka: ['drifting back to normal'] }
  ],

  terms: [
    { id: 'atrandom', unit: 'u2', n: 'at random',
      means: 'picked by chance, like a lottery or a coin toss, so that each one had the same chance and nobody chose' },
    { id: 'sample', unit: 'u2', n: 'sample',
      means: 'the people or things actually counted, standing in for a bigger group' },
    { id: 'margin', unit: 'u2', n: 'margin of error',
      means: 'how far a figure from a sample could be off from the true figure for the whole group, just by luck' },
    { id: 'placebo', unit: 'u2', n: 'placebo',
      means: 'a fake treatment that looks like the real one, so nobody in a test can tell which group they are in' },
    { id: 'falsealarm', unit: 'u5', n: 'false alarm',
      means: 'a test or an alarm saying yes when the thing it looks for is not there' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/stats.md, W7 and the
  // vocabulary map), words the lesson standard keeps for one thing only (K9), and this subject's textbook words.
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
    { word: 'the rule', sayInstead: 'what to look for, or how to tell them apart' },
    // Added with the plain rewrite (lesson standard section 20): textbook words for things the key says plainly.
    { word: 'sampling', sayInstead: 'who was counted' },
    { word: 'sample size', sayInstead: 'how many were counted' },
    { word: 'respondents', sayInstead: 'the people who answered' },
    { word: 'participants', sayInstead: 'the people in the study' },
    { word: 'outcome', sayInstead: 'result' },
    { word: 'intervention', sayInstead: 'the thing tried' },
    { word: 'incidence', sayInstead: 'how many new ones' },
    { word: 'mortality', sayInstead: 'deaths' },
    { word: 'aggregate', sayInstead: 'total' },
    { word: 'observational', sayInstead: 'groups people sorted themselves into' },
    { word: 'causal', sayInstead: 'about what caused what' },
    { word: 'statistically significant', sayInstead: 'unlikely to be luck alone' },
    { word: 'inference', sayInstead: 'what the claim says follows' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // The order of the four parts is the tie-break, as data: a claim that goes wrong in two parts gets the earlier one,
  // so each later part yields to every part before it. "Nothing goes wrong" needs no tie-break: its "when" already
  // requires that no part goes wrong.
  gate: {
    code: 'S1', unit: 'u1',
    q: 'Where does this claim first go wrong?',
    why: 'A claim built on numbers is put together in order: someone counts some people or things, the figure stands for something real, it is set beside something else, and it may be said to show a cause. Each part rests on the one before, so the first part that goes wrong spoils the rest, and which part it is tells you what to ask next. If no part goes wrong, the claim holds as far as it goes.',
    options: [
      { id: 'counted', n: 'Who was counted',
        plain: 'the wrong people counted, or too few',
        needs: 'the people or things the figure came from, and either a reason they do not match the group the claim is about, or so few that one or two more would change it',
        when: 'the people or things the figure came from do not match the group the claim is about, or are too few to trust',
        keeps: ['survivor', 'selfselect', 'nonresp', 'smalln'] },
      { id: 'measure', n: 'What the number counts',
        plain: 'the figure can move without the real thing moving',
        needs: 'a figure taken to show something real (good service, safe roads, how much illness there is), and something else that could push it up or down',
        when: 'the figure could rise, fall or differ without the real thing it is taken to show doing the same',
        keeps: ['proxy', 'defshift', 'detection'],
        yieldsTo: [{ option: 'counted', say: 'the wrong people or things counted, or too few to trust' }] },
      { id: 'compare', n: 'What it is compared with',
        plain: 'something you need beside the figure is missing',
        needs: 'a percentage change, a test’s accuracy, or a total next to another total, and something left out that you need beside it to read it fairly',
        when: 'the figure is a percentage change, a test’s accuracy, or a total beside another total, and the claim leaves out what you need beside it to read it fairly',
        keeps: ['relrisk', 'baserate', 'simpson'],
        yieldsTo: [{ option: 'counted', say: 'the wrong people or things counted, or too few to trust' },
                   { option: 'measure', say: 'a figure that could rise, fall or differ without the real thing doing the same' }] },
      { id: 'cause', n: 'What caused what',
        plain: 'something else could explain the result',
        needs: 'a claim that one thing made another happen, and another way the same result could have come about',
        when: 'the claim says one thing made another happen, and the same result could have come about another way',
        keeps: ['nocontrol', 'confound', 'reverse', 'regression'],
        yieldsTo: [{ option: 'counted', say: 'the wrong people or things counted, or too few to trust' },
                   { option: 'measure', say: 'a figure that could rise, fall or differ without the real thing doing the same' },
                   { option: 'compare', say: 'a figure read without something it needs beside it' }] },
      { id: 'holds', n: 'Nothing goes wrong', legit: true,
        plain: 'every part checks out',
        needs: 'nothing wrong at any step: a fair picture of the group, a figure that moves only with the real thing, a fair thing to set it beside, and for a cause, a random split',
        when: 'every part the claim uses checks out in order, and none of them goes wrong',
        keeps: ['samp_ok', 'meas_ok', 'comp_ok', 'cause_ok'] }
    ]
  },

  // A branch is a list of one, two or three questions. Each of these has one: every answer leads to one name, and
  // the old second questions only said the first answer again in other words (lesson standard K2.2, V55).
  branches: {
    // Nothing goes wrong. Unit Two teaches it. Its answers are exclusive by their "when" lines, so no tie-break is needed.
    holds: [
      { code: 'H1', unit: 'u2',
        q: 'What does the claim tell you?',
        why: 'A sound claim has earned only what it says. Each sort of claim needs different parts to check out, so knowing which one it is tells you what you can rely on and what it has not shown: a fair count says nothing about change, and a fair comparison says nothing about cause.',
        options: [
          { id: 'group', n: 'A figure for one group',
            when: 'the claim gives a figure for one group at one time, like a share or an average, and says nothing of a rise or fall, a difference, or a cause',
            keeps: ['samp_ok'] },
          { id: 'change', n: 'A rise or fall in one figure',
            when: 'the claim gives one figure for one thing at two or more times and says it rose or fell, sets it beside nothing else, and does not say what caused it',
            keeps: ['meas_ok'] },
          { id: 'difference', n: 'A difference between two things',
            when: 'the claim sets two groups, places or things side by side and says which is bigger, likelier or riskier, without saying that one thing caused it',
            keeps: ['comp_ok'] },
          { id: 'causes', n: 'One thing causing another',
            when: 'the claim says one thing made another happen',
            keeps: ['cause_ok'] }
        ] }
    ],

    // Who was counted. Unit Three teaches it. The answer is read off how the people or things got into the figure.
    counted: [
      { code: 'A1', unit: 'u3',
        q: 'How did they end up in the count?',
        why: 'The four names differ by how the people or things got into the figure. Each leaves out a different group, or leaves too few, so knowing which one tells you which way the figure leans and what you would need to see to fix it.',
        options: [
          { id: 'lasted', n: 'Only the ones that lasted were counted',
            when: 'the figure was taken at the end from the ones still there, like shops still open, so the ones that closed, quit or failed are not in it',
            keeps: ['survivor'] },
          { id: 'chose', n: 'They chose to answer, when anyone could',
            when: 'anyone who wanted to could answer, like a website vote or a call-in, and the answers are taken as true of more people than the ones who chose to',
            keeps: ['selfselect'] },
          { id: 'replied', n: 'Everyone on a list was asked, and many did not reply',
            when: 'a known list of people was asked (every member, every patient, every household), many of them did not reply, and nothing was done to hear from the rest',
            keeps: ['nonresp'] },
          { id: 'handful', n: 'All were counted, but there are only a handful',
            when: 'nobody was left out, but there are so few that one or two more would move the figure a lot, and a high or low figure from them is taken to mean something',
            keeps: ['smalln'] }
        ] }
    ],

    // What the number counts. Unit Four teaches it.
    measure: [
      { code: 'M1', unit: 'u4',
        q: 'What else could push this figure up or down?',
        why: 'The three names differ by what moved the figure instead of the real thing. Each sends you to a different check: what people did to the figure, what changed in the counting, or how hard anyone looked.',
        options: [
          { id: 'pushed', n: 'People chasing the figure itself',
            when: 'the people measured are paid or judged on the figure, like a target or a bonus, and could raise it without more of the real thing it is meant to show',
            keeps: ['proxy'] },
          { id: 'newrule', n: 'A new rule or tool for counting it',
            when: 'what counts, or the tool that counts it, changed during the time the figure covers, like a new definition or meter, and that alone could move the figure',
            keeps: ['defshift'] },
          { id: 'looked', n: 'More looking for it',
            when: 'more effort went into finding the thing during that time, like more tests or cameras, and finding more could raise the figure with no more of it happening',
            keeps: ['detection'] }
        ] }
    ],

    // What it is compared with. Unit Five teaches it. A claim with one figure and nothing beside it that says something
    // worked is not here: it belongs to the next branch, where "It would have happened anyway" names it.
    compare: [
      { code: 'C1', unit: 'u5',
        q: 'What do you need to see beside this figure?',
        why: 'The three names differ by what is missing beside the figure. Each makes the figure look bigger, surer or fairer than it is, and each is fixed by a different bit of arithmetic.',
        options: [
          { id: 'numbers', n: 'How many it was, before and after',
            when: 'a change or a risk is given only as a percentage (up 300%, risk cut in half, 18% higher), with no word on how many it was before and after',
            keeps: ['relrisk'] },
          { id: 'common', n: 'How common the thing is to begin with',
            when: 'a test’s or alarm’s accuracy is taken as the chance its yes is right, and the claim leaves out or ignores how rare the thing is among those tested',
            keeps: ['baserate'] },
          { id: 'split', n: 'The totals split into easy and hard ones',
            when: 'two totals (two hospitals, two tutors, two stores) are set side by side as if they handled the same mix, but each handles a different mix of easy and hard ones',
            keeps: ['simpson'] }
        ] }
    ],

    // What caused what. Unit Six teaches it. One tie-break: a group picked at its worst or best and given
    // nothing to compare with shows both the first and the last answer; the last, which says why the change would
    // have come anyway, wins.
    cause: [
      { code: 'K1', unit: 'u6',
        q: 'What else could explain the result?',
        why: 'A result shows a cause only if nothing else explains it as well. The four names differ by what else explains it, and each is ruled out by a different check: a group that went without, groups alike in the other thing, which came first, an equally extreme group left alone.',
        options: [
          { id: 'anyway', n: 'It would have happened anyway',
            when: 'the claim says something worked, the result is only for those who got it or only from before and after, and no group without it shows what happens anyway',
            keeps: ['nocontrol'],
            yieldsTo: [{ option: 'extreme', say: 'a group picked because it was at its worst or best' }] },
          { id: 'behind', n: 'Something else causes both',
            when: 'the claim compares those who did one thing with those who did not, the groups were not split at random, and something else between them could cause the result',
            keeps: ['confound'] },
          { id: 'backward', n: 'The second thing causes the first',
            when: 'the claim says the first thing caused the second, but the second could come first and lead to the first',
            keeps: ['reverse'] },
          { id: 'extreme', n: 'Picked at its worst or best, it drifts back to normal',
            when: 'the people or things were picked because they were at their worst or best, and the change afterward is a drift back toward their usual level',
            keeps: ['regression'] }
        ] }
    ]
  }
});
