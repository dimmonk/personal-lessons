// US Civics & History: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what a story must show before the name fits. Printed under "What to look for"
//                     on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a story must show for this answer, as a clause. Printed as "Give this answer when <when>."
//                     and in feedback as "This story shows something else: <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a story shows this answer AND the one named, the named one wins
// Step codes (D1, C1, E1, J1, S1, S2) and ids are for the data. They are never shown to the learner (K3).
// Key lines are printed as they are: they hold no tokens.
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what
//                     to look for are printed by {plain:option} and {needs:option}.
//
// Every name and answer is a phrase a card would not type by accident: the validator refuses any authored text that
// contains a key line, so a one-word name such as "Congress" would forbid the word in every card (lesson standard V2).
// This file carries the whole key. Unit One (id u1) teaches the gate; Units Three to Six (ids u3 to u6) teach
// the four branches, in the gate's order. The other units are fact units (A12): they hold facts and ask none of these
// questions. Unit ids are the course order of docs/rebuild/civics-plan.md.

FC.key('civics', {
  outcomes: [
    // Congress: taught by Unit Three (id u3).
    { id: 'enumerated', group: 'congress', unit: 'u3',
      n: 'Within Congress’s power',
      plain: 'a law Congress is allowed to pass',
      needs: 'a law Congress passes on something the Constitution lists as its job, like taxes or the mail, and no right in the Constitution that the law takes away',
      aka: ['an enumerated power', 'a listed power', 'an expressed power'] },
    { id: 'beyondcong', group: 'congress', unit: 'u3',
      n: 'Beyond Congress’s power',
      plain: 'a law Congress is not allowed to pass',
      needs: 'a law Congress passes, and either it is about something the Constitution does not list as Congress’s job, or it takes away a right the Constitution protects',
      aka: ['exceeding Congress’s powers'] },
    { id: 'purse', group: 'congress', unit: 'u3',
      n: 'The power of the purse',
      plain: 'Congress deciding what the government can spend',
      needs: 'Congress voting money for something, cutting it or leaving it out, and the government able to spend only what Congress voted',
      aka: ['appropriations', 'the spending bill'] },
    { id: 'confirm', group: 'congress', unit: 'u3',
      n: 'Senate approval',
      plain: 'the Senate saying yes or no to the President’s pick, or to a deal with another country',
      needs: 'someone the President picked for a top government job, or a treaty the President signed, and the Senate voting on whether to approve it',
      aka: ['advice and consent', 'Senate confirmation', 'ratifying a treaty'] },
    { id: 'impeach', group: 'congress', unit: 'u3',
      n: 'Impeachment',
      plain: 'the House charging an official, and the Senate putting them on trial',
      needs: 'a federal official accused of serious wrongdoing, and Congress acting to remove them: the House voting to charge them, or the Senate holding the trial',
      aka: ['removal from office'] },

    // The President or a federal agency: taught by Unit Four (id u4).
    { id: 'execute', group: 'president', unit: 'u4',
      n: 'Carrying out the law',
      plain: 'an agency doing what a law tells it to',
      needs: 'a law Congress passed, and a federal agency or the President doing the work it sets out, like writing the detailed rules or enforcing them, within what the law allows',
      aka: ['enforcing the law', 'implementing a law', 'executing the law'] },
    { id: 'beyondpres', group: 'president', unit: 'u4',
      n: 'Beyond the President’s power',
      plain: 'an order that demands what no law allows',
      needs: 'an executive order or a rule from the President or a federal agency, something it demands of people or businesses, and no law Congress passed that allows it',
      aka: ['exceeding the President’s powers'] },
    { id: 'commander', group: 'president', unit: 'u4',
      n: 'Commander in chief',
      plain: 'the President giving the armed forces orders',
      needs: 'an order from the President to the armed forces: where to go, what to do, or who is in charge',
      aka: ['command of the armed forces'] },
    { id: 'diplomacy', group: 'president', unit: 'u4',
      n: 'Dealing with other countries',
      plain: 'the President meeting, bargaining or signing deals with another country',
      needs: 'the President, or an official sent by the President, meeting, negotiating or signing an agreement with another country',
      aka: ['foreign affairs', 'diplomacy', 'negotiating a treaty'] },
    { id: 'veto', group: 'president', unit: 'u4',
      n: 'Veto',
      plain: 'the President sending a law back unsigned',
      needs: 'a law Congress has passed, and the President refusing to sign it and sending it back with objections',
      aka: ['vetoing a bill'] },
    { id: 'pardon', group: 'president', unit: 'u4',
      n: 'Pardon',
      plain: 'the President forgiving a federal crime',
      needs: 'a federal crime someone was charged with or convicted of, and the President forgiving it, so the punishment is lifted or never comes',
      aka: ['a presidential pardon'] },

    // A judge, in any court: taught by Unit Five (id u5).
    { id: 'review', group: 'courts', unit: 'u5',
      n: 'Judicial review',
      plain: 'a judge checking a law against the Constitution',
      needs: 'a law, or something the government did under it, a person it actually harmed taking it to court, and a judge asked whether it breaks the Constitution',
      aka: ['striking down a law', 'ruling a law unconstitutional'] },
    { id: 'trialrights', group: 'courts', unit: 'u5',
      n: 'The rights of the accused',
      plain: 'a judge making sure an accused person is treated fairly',
      needs: 'a person accused of a crime, a protection the Constitution promises them, like a lawyer or a jury, and a judge asked whether they got it',
      aka: ['trial rights', 'a fair trial'] },
    { id: 'interpret', group: 'courts', unit: 'u5',
      n: 'Interpreting a law',
      plain: 'a judge saying what the words of a law cover',
      needs: 'a law nobody says breaks the Constitution, a situation its words may or may not reach, and a judge asked to decide',
      aka: ['statutory interpretation'] },
    { id: 'notlegal', group: 'courts', unit: 'u5',
      n: 'Left to the voters',
      plain: 'a policy choice a judge will not make',
      needs: 'someone asking a judge to pick the better policy, with no law and no right in the Constitution that decides it',
      aka: ['a political question', 'a matter for the voters'] },

    // A state, city or county government: taught by Unit Six (id u6).
    { id: 'police', group: 'states', unit: 'u6',
      n: 'Left to the states',
      plain: 'a state making its own rule on something the Constitution leaves to the states',
      needs: 'a rule the state makes on something the Constitution leaves to the states, like schools or licenses, with no federal law on it and no right it takes away',
      aka: ['reserved powers', 'the police power'] },
    { id: 'localgov', group: 'states', unit: 'u6',
      n: 'Local control',
      plain: 'a city or county setting a rule',
      needs: 'a rule a city, town or county makes, with power its state handed down to it, no federal law on the same thing, and no right the rule takes away',
      aka: ['a city ordinance', 'home rule'] },
    { id: 'preempted', group: 'states', unit: 'u6',
      n: 'Federal law wins',
      plain: 'a state or city rule giving way to a federal law',
      needs: 'a state or local rule, and a federal law on the same thing that is meant to be the only rule, or that the state or local rule contradicts',
      aka: ['preemption', 'the Supremacy Clause'] },
    { id: 'concurrent', group: 'states', unit: 'u6',
      n: 'Both rules stand',
      plain: 'a state or city rule standing next to a federal law',
      needs: 'a state or local rule, a federal law on the same thing, and room for both: the federal law sets only a minimum, or lets the states act too',
      aka: ['concurrent powers', 'a federal floor'] },
    { id: 'protected', group: 'states', unit: 'u6',
      n: 'Blocked by a right',
      plain: 'a state or city rule that a right in the Constitution forbids',
      needs: 'a state or local rule, and a right the Constitution protects (to speak, to worship, to gather) that the rule takes away',
      aka: ['incorporation', 'civil liberties'] }
  ],

  // "federal" is not declared as a term although the key uses it: the validator matches key lines as substrings, and the
  // term "federal" would forbid "the Federalist Papers" in every card. Unit One explains it in the sentence that names
  // the second family. Recorded in docs/rebuild/civics-plan.md under gaps.
  terms: [
    { id: 'agency', unit: 'u1', n: 'agency',
      means: 'a government office that runs certain laws day to day, such as the immigration service or the tax office' },
    { id: 'treaty', unit: 'u3', n: 'treaty',
      means: 'a signed, written agreement between the United States and another country' },
    { id: 'order', unit: 'u4', n: 'executive order',
      means: 'a written instruction from the President to the federal agencies about how to do their work. It is not a law' },
    { id: 'precedent', unit: 'u5', n: 'precedent',
      means: 'an earlier court ruling on the same question, which later courts follow' }
  ],

  // Words the old lessons used for one idea in several ways, or that a newcomer could not follow, and the
  // textbook words of this subject.
  avoid: [
    { word: 'franchise', sayInstead: 'the right to vote' },
    { word: 'suffrage', sayInstead: 'the right to vote' },
    { word: 'ballot', sayInstead: 'the vote, or the right to vote' },
    { word: 'statute', sayInstead: 'a law' },
    { word: 'legislation', sayInstead: 'a law' },
    { word: 'houses', sayInstead: 'the House and the Senate' },
    { word: 'void', sayInstead: 'refuse to apply' },
    { word: 'apportioned', sayInstead: 'shared out among the states by population' },
    { word: 'diagnostic', sayInstead: 'the question' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    { word: 'who has the authority', sayInstead: 'who makes the final call' },
    // Added with the plain rewrite (lesson standard section 20): this subject's textbook words.
    { word: 'enumerated', sayInstead: 'listed in the Constitution' },
    { word: 'binds', sayInstead: 'applies to' },
    { word: 'misconduct', sayInstead: 'wrongdoing' },
    { word: 'implement', sayInstead: 'carry out' },
    { word: 'statutory', sayInstead: 'in a law' },
    { word: 'jurisdiction', sayInstead: 'which court or which government decides' },
    { word: 'adjudicate', sayInstead: 'decide' },
    { word: 'promulgate', sayInstead: 'issue' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its four answers are that unit's families.
  // A story often mentions two parts of government. The question reads the decision the story ends on, or asks for:
  // what comes before it is how the matter got there. There is no tie-break between the answers, because a story
  // has one last decision. The one exception that needs saying is a law the President signs: signing is not a decision
  // the second answer counts, and the first answer's "when" says so (taught as an exception in Unit One).
  gate: {
    code: 'D1', unit: 'u1',
    q: 'Who makes the final call?',
    why: 'Each of the four can do different things and has different limits, so what you ask next depends on who decides. Most stories mention more than one of them. Look at the final call, or the one someone is asking for: everything before it is just how it got there.',
    options: [
      { id: 'congress', n: 'Congress, in the House or the Senate',
        plain: 'the lawmakers of the whole country',
        needs: 'a vote in the House, the Senate or both, as the final call or the one someone asks for',
        when: 'the final call is a vote in the House or Senate, or someone asks Congress for one, such as on a law or money. A law stays Congress’s call even once the President signs it',
        keeps: ['enumerated', 'beyondcong', 'purse', 'confirm', 'impeach'] },
      { id: 'president', n: 'The President or a federal agency',
        plain: 'the President, and the offices that run the laws of the whole country',
        needs: 'the President, or a federal agency, making the final call or being asked to make it',
        when: 'the final call is the President’s or a federal agency’s, or someone is asking them for one, such as an agency enforcing a law or the President refusing to sign one',
        keeps: ['execute', 'beyondpres', 'commander', 'diplomacy', 'veto', 'pardon'] },
      { id: 'courts', n: 'A judge, in any court',
        plain: 'a judge deciding a court case',
        needs: 'a judge deciding, or someone asking a judge to decide, as the last thing that happens',
        when: 'the final call is a judge’s, in any court, federal or state, or someone is asking a judge to decide',
        keeps: ['review', 'trialrights', 'interpret', 'notlegal'] },
      { id: 'states', n: 'A state, city or county government',
        plain: 'the government of one state, or of a city, town or county in it',
        needs: 'a state’s lawmakers, governor or agencies, or a city, town or county, making the final call or being asked to make it',
        when: 'the final call is made by a state’s lawmakers, governor or agencies, or a city, town or county, or someone asks them for it. A state court judge counts as a judge',
        keeps: ['police', 'localgov', 'preempted', 'concurrent', 'protected'] }
    ]
  },

  // A branch is a list of one, two or three questions. Three of the four have one question: each of their names is
  // defined by one thing (what Congress does, what the President or the agency does, what the judge is asked to do),
  // and for a law or an order whether the Constitution or a law allows it is part of that one thing (K2.2).
  // The state branch asks two, because who made the rule and what else covers its subject are two separate things.
  branches: {
    congress: [
      { code: 'C1', unit: 'u3',
        q: 'What is Congress doing?',
        why: 'Each of the five names is one thing Congress does, and for a law, whether the Constitution lets Congress pass it. A law passed by the right votes can still be one the Constitution does not allow, so never name a law by the vote alone.',
        options: [
          { id: 'listed', n: 'Passes a law the Constitution allows',
            when: 'Congress passes a law on something the Constitution lists as its job, like taxes, trade or the armed forces, and it takes away no right the Constitution protects',
            keeps: ['enumerated'],
            yieldsTo: [{ option: 'money', say: 'Congress deciding whether the government can spend money on something' }] },
          { id: 'barred', n: 'Passes a law the Constitution does not allow',
            when: 'Congress passes a law on something the Constitution leaves to the states, like what schools teach, or one that takes away a protected right, like free speech',
            keeps: ['beyondcong'] },
          { id: 'money', n: 'Votes money for something, or refuses it',
            when: 'Congress votes the money for something, cuts it or leaves it out, and the government can spend only what Congress voted',
            keeps: ['purse'] },
          { id: 'approve', n: 'Votes on a person or a treaty the President put forward',
            when: 'the Senate votes on someone the President picked for a top job, like a judge, where more than half must vote yes, or on a treaty, where two-thirds of those present must',
            keeps: ['confirm'] },
          { id: 'remove', n: 'Charges an official with serious wrongdoing, or holds the trial',
            when: 'a federal official, even the President, is accused of serious wrongdoing, and the House votes to charge them, or the Senate tries them, where two-thirds must vote guilty',
            keeps: ['impeach'] }
        ] }
    ],

    president: [
      { code: 'E1', unit: 'u4',
        q: 'What is the President or the agency doing?',
        why: 'Each of the six names is one thing the President or an agency does, and for an order or a rule, whether a law Congress passed allows it. The President carries out the laws but does not make them, so an order that demands something no law allows goes beyond the President’s power, however it is worded.',
        options: [
          { id: 'carryout', n: 'Carries out a law Congress passed',
            when: 'a federal agency or the President writes the detailed rules for a law Congress passed, or inspects or enforces it, and stays inside what that law allows',
            keeps: ['execute'] },
          { id: 'newduty', n: 'Demands something of people that no law allows',
            when: 'the President or a federal agency, by an order or a rule, demands something of people, like a new tax or a ban, that no law Congress passed allows',
            keeps: ['beyondpres'] },
          { id: 'military', n: 'Gives orders to the armed forces',
            when: 'the President tells the armed forces where to go or what to do, or chooses who leads them',
            keeps: ['commander'] },
          { id: 'abroad', n: 'Deals with another country',
            when: 'the President, or an official sent by the President, meets, negotiates with or signs an agreement with another country',
            keeps: ['diplomacy'] },
          { id: 'sendback', n: 'Refuses to sign a law Congress passed',
            when: 'Congress has passed a law and the President refuses to sign it and sends it back. Two-thirds of the House and of the Senate can still make it law',
            keeps: ['veto'] },
          { id: 'forgive', n: 'Forgives a federal crime',
            when: 'the President forgives someone for a federal crime, so the punishment is lifted. Only a state can forgive a crime against its own law',
            keeps: ['pardon'] }
        ] }
    ],

    courts: [
      { code: 'J1', unit: 'u5',
        q: 'What is the judge asked to decide?',
        why: 'Each of the four names is one thing a judge can be asked to decide. Which court it is, how big the news is, or whether the judge agrees changes nothing.',
        options: [
          { id: 'check', n: 'Check a law against the Constitution',
            when: 'someone the law actually harmed, like a person fined or charged, goes to court saying the law, or what the government did under it, breaks the Constitution',
            keeps: ['review'] },
          { id: 'accused', n: 'Make sure an accused person was treated fairly',
            when: 'someone is accused of a crime, and the judge is asked whether they got the protections the Constitution promises, like a lawyer or a jury trial',
            keeps: ['trialrights'] },
          { id: 'words', n: 'Say what the words of a law cover',
            when: 'nobody says the law breaks the Constitution, and the question is whether its words reach a situation, decided from the words, what the law was for, and earlier rulings',
            keeps: ['interpret'] },
          { id: 'policy', n: 'Choose which policy is better',
            when: 'someone asks the judge to decide what would be wiser or fairer, and no law or right decides it, so the choice belongs to the voters and those they elect',
            keeps: ['notlegal'] }
        ] }
    ],

    states: [
      { code: 'S1', unit: 'u6',
        q: 'Who made the rule: the state, or a city or county?',
        why: 'The Constitution gives a city, town or county no power of its own: it has only what its state hands it, and the state can take that back. So when nothing else covers the rule, who made it decides the name.',
        options: [
          { id: 'own', n: 'The state made it',
            when: 'the rule comes from the state itself: its lawmakers, its governor or one of its agencies',
            keeps: ['police', 'preempted', 'concurrent', 'protected'] },
          { id: 'local', n: 'A city, town or county made it',
            when: 'the rule comes from a city, a town or a county, using power its state handed down to it',
            keeps: ['localgov', 'preempted', 'concurrent', 'protected'] }
        ] },
      { code: 'S2', unit: 'u6',
        q: 'Does a federal law or a right in the Constitution also cover this?',
        why: 'A state or local rule depends on what else covers the same thing. A federal law meant to be the only rule wins. A federal minimum leaves room. A right the Constitution protects blocks the rule, whoever made it. And when none of these covers it, the state decides, or the city or county it gave the power to.',
        options: [
          { id: 'nothing', n: 'No, neither covers it',
            when: 'the rule is about something the Constitution leaves to the states, like schools or local streets, no federal law covers it, and it takes away no protected right',
            keeps: ['police', 'localgov'] },
          { id: 'onlyrule', n: 'A federal law meant to be the only rule',
            when: 'a federal law on Congress’s own job covers the same thing, and either says no state may set its own rule, or nobody could obey both it and the state or local rule',
            keeps: ['preempted'] },
          { id: 'floor', n: 'A federal law that leaves room for it',
            when: 'a federal law covers the same thing but sets only a minimum, or lets the states act too, so obeying the state or local rule also obeys the federal one',
            keeps: ['concurrent'] },
          { id: 'right', n: 'A right the rule takes away',
            when: 'the rule takes away a right the Constitution protects, like free speech or worship, and those rights apply to every state, city and county too',
            keeps: ['protected'] }
        ] }
    ]
  }
});
