// US Civics & History: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
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
// Step codes (D1, C1, E1, J1, S1, S2) and ids are for the data. They are never shown to the learner (K3).
// Key lines are printed as they are: they hold no tokens.
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
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
      n: 'Enumerated power',
      plain: 'a law on a matter the Constitution gives Congress',
      needs: 'a law Congress passes, a matter the Constitution lists among Congress’s powers that the law is about, and no right the Constitution protects that the law takes away',
      aka: ['a listed power', 'an expressed power'] },
    { id: 'beyondcong', group: 'congress', unit: 'u3',
      n: 'Beyond Congress’s power',
      plain: 'a law the Constitution does not let Congress pass',
      needs: 'a law Congress passes, and either a matter the Constitution does not list among Congress’s powers, or a right the Constitution protects that the law takes away',
      aka: ['exceeding Congress’s powers'] },
    { id: 'purse', group: 'congress', unit: 'u3',
      n: 'The power of the purse',
      plain: 'Congress deciding what the government may spend',
      needs: 'a decision by Congress to vote, cut or leave out the money for something, and the government able to spend on it only as Congress decided',
      aka: ['appropriations', 'the spending bill'] },
    { id: 'confirm', group: 'congress', unit: 'u3',
      n: 'Advice and consent',
      plain: 'the Senate approving a person the President chose, or a deal with another country',
      needs: 'a person the President has chosen for a top government job, or a treaty the President has signed, and the Senate voting on whether to approve it',
      aka: ['Senate confirmation', 'ratifying a treaty'] },
    { id: 'impeach', group: 'congress', unit: 'u3',
      n: 'Impeachment',
      plain: 'charging an official, and trying the charge',
      needs: 'a federal official accused of serious misconduct, and Congress acting to remove them: the House voting to charge them, or the Senate trying the charge',
      aka: ['removal from office'] },

    // The President or a federal agency: taught by Unit Four (id u4).
    { id: 'execute', group: 'president', unit: 'u4',
      n: 'Carrying out the law',
      plain: 'an agency putting a law into practice',
      needs: 'a law Congress passed, and a federal agency or the President putting it into practice (writing its detailed rules, processing, inspecting, collecting, enforcing) without going past what it allows',
      aka: ['enforcing the law', 'implementing a law', 'executing the law'] },
    { id: 'beyondpres', group: 'president', unit: 'u4',
      n: 'Beyond the President’s power',
      plain: 'an order that demands what no law allows',
      needs: 'an executive order or a rule from the President or a federal agency, something it demands of people or businesses, and no law Congress passed that allows it',
      aka: ['exceeding the President’s powers'] },
    { id: 'commander', group: 'president', unit: 'u4',
      n: 'Commander in chief',
      plain: 'the President giving the armed forces orders',
      needs: 'the President giving orders to the armed forces: where they go, what they do, or who leads them',
      aka: ['command of the armed forces'] },
    { id: 'diplomacy', group: 'president', unit: 'u4',
      n: 'Foreign affairs',
      plain: 'the President dealing with another country',
      needs: 'the President, or an official acting for the President, dealing with another country: meeting, negotiating or signing an agreement',
      aka: ['diplomacy', 'negotiating a treaty'] },
    { id: 'veto', group: 'president', unit: 'u4',
      n: 'Veto',
      plain: 'the President sending a law back unsigned',
      needs: 'a law Congress has passed, and the President refusing to sign it and sending it back with objections',
      aka: ['vetoing a bill'] },
    { id: 'pardon', group: 'president', unit: 'u4',
      n: 'Pardon',
      plain: 'the President forgiving a federal crime',
      needs: 'a federal crime someone was charged with or convicted of, and the President forgiving it so that the punishment is lifted or never comes',
      aka: ['a presidential pardon'] },

    // A judge, in any court: taught by Unit Five (id u5).
    { id: 'review', group: 'courts', unit: 'u5',
      n: 'Judicial review',
      plain: 'a judge checking a law against the Constitution',
      needs: 'a law, or something the government did under it, someone it has actually harmed bringing a case, and a judge asked whether it breaks the Constitution',
      aka: ['striking down a law', 'ruling a law unconstitutional'] },
    { id: 'trialrights', group: 'courts', unit: 'u5',
      n: 'The rights of the accused',
      plain: 'a judge making sure an accused person is treated fairly',
      needs: 'a person accused of a crime, one of the steps the Constitution promises them, and a judge asked whether it was followed',
      aka: ['trial rights', 'a fair trial'] },
    { id: 'interpret', group: 'courts', unit: 'u5',
      n: 'Interpreting a law',
      plain: 'a judge saying what the words of a law cover',
      needs: 'a law nobody says breaks the Constitution, a situation its words may or may not reach, and a judge asked to decide',
      aka: ['statutory interpretation'] },
    { id: 'notlegal', group: 'courts', unit: 'u5',
      n: 'A political question',
      plain: 'a choice a judge leaves to the voters',
      needs: 'a request for a judge to choose which policy is better, with no law and no right in the Constitution that settles it',
      aka: ['a matter for the voters'] },

    // A state, city or county government: taught by Unit Six (id u6).
    { id: 'police', group: 'states', unit: 'u6',
      n: 'Reserved powers',
      plain: 'a state ruling on a matter the Constitution leaves to the states',
      needs: 'a rule the state itself makes, on a matter the Constitution leaves to the states, with no federal law covering it and no right it takes away',
      aka: ['the police power', 'left to the states'] },
    { id: 'localgov', group: 'states', unit: 'u6',
      n: 'Power handed down to a city or county',
      plain: 'a city or county ruling with power its state gave it',
      needs: 'a rule a city, town or county makes, power its state handed down to it, no federal law covering the matter and no right the rule takes away',
      aka: ['a city ordinance', 'local control'] },
    { id: 'preempted', group: 'states', unit: 'u6',
      n: 'Preemption',
      plain: 'a state or city rule giving way to a federal law',
      needs: 'a state or local rule, and a federal law on the same matter that is meant to be the only rule, or that the state or local rule contradicts',
      aka: ['federal law wins', 'the Supremacy Clause'] },
    { id: 'concurrent', group: 'states', unit: 'u6',
      n: 'Concurrent powers',
      plain: 'a state or city rule standing beside a federal law',
      needs: 'a state or local rule, a federal law on the same matter, and room for both: the federal law sets only a minimum, or lets the states act too',
      aka: ['both may act', 'a federal floor'] },
    { id: 'protected', group: 'states', unit: 'u6',
      n: 'A right that binds the states',
      plain: 'a state or city rule that a right forbids',
      needs: 'a state or local rule, and a right the Constitution protects that the rule takes away',
      aka: ['incorporation', 'civil liberties'] }
  ],

  // "federal" is not declared as a term although the key uses it: the validator matches key lines as substrings, and the
  // term "federal" would forbid "the Federalist Papers" in every card. Unit One explains it in the sentence that names
  // the second family. Recorded in docs/rebuild/civics-plan.md under gaps.
  terms: [
    { id: 'agency', unit: 'u1', n: 'agency',
      means: 'an office of a government that carries out particular laws day to day, such as the immigration service or the tax office' },
    { id: 'treaty', unit: 'u3', n: 'treaty',
      means: 'a formal written agreement between the United States and another country' },
    { id: 'order', unit: 'u4', n: 'executive order',
      means: 'a written instruction from the President to the federal agencies about how to do their work. It is not a law' },
    { id: 'precedent', unit: 'u5', n: 'precedent',
      means: 'an earlier court ruling on the same question, which later courts follow' }
  ],

  // Words the old lessons used for one idea in several ways, or that a newcomer could not follow.
  avoid: [
    { word: 'franchise', sayInstead: 'the right to vote' },
    { word: 'suffrage', sayInstead: 'the right to vote' },
    { word: 'ballot', sayInstead: 'the vote, or the right to vote' },
    { word: 'statute', sayInstead: 'a law (the key says “law” for every law a legislature passes)' },
    { word: 'legislation', sayInstead: 'a law' },
    { word: 'houses', sayInstead: 'chambers: the House and the Senate' },
    { word: 'void', sayInstead: 'refuse to apply' },
    { word: 'apportioned', sayInstead: 'shared out among the states by population' },
    { word: 'diagnostic', sayInstead: 'the key’s question' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    { word: 'who has the authority', sayInstead: 'the key’s first question, by token' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its four answers are that unit's families.
  // A case often mentions two parts of government. The question reads the decision the case ends on, or asks for:
  // what comes before it is how the matter got there. There is no tie-break between the answers, because a case
  // has one last decision. The one case that needs saying is a law the President signs: signing is not a decision
  // the second answer counts, and the first answer's "when" says so (taught as an exception in Unit One).
  gate: {
    code: 'D1', unit: 'u1',
    q: 'Who makes the last decision in the case, or is asked to make it?',
    purpose: 'Sorts a case by who makes the decision it ends on: the lawmakers of the whole country, the President and the federal agencies, a judge, or the government of a state, city or county',
    why: 'Each of the four may do different things and is held back by different limits, so the question that comes next depends on whose decision it is. Many cases mention more than one of them. What comes before the last decision is how the matter reached it; the last decision, or the one someone asks for, is what the case is about.',
    options: [
      { id: 'congress', n: 'Congress, in the House or the Senate',
        plain: 'the lawmakers of the whole country',
        needs: 'a vote in the House, the Senate or both, as the last decision in the case or the one it asks for',
        when: 'the last decision in the case is a vote in the House, the Senate or both, or the case ends by asking Congress for one: on a law, on money, on a person the President chose or an agreement the President signed with another country, or on charging or trying an official. A law Congress passed is still Congress’s decision when the case adds that the President signed it',
        keeps: ['enumerated', 'beyondcong', 'purse', 'confirm', 'impeach'] },
      { id: 'president', n: 'The President or a federal agency',
        plain: 'the President, and the offices that carry out the laws of the whole country',
        needs: 'the President, or a federal agency, making the last decision in the case or being asked to make it',
        when: 'the last decision in the case is made by the President or a federal agency, or the case ends by asking them for one: an agency writes rules, inspects or enforces, the President gives an order, commands the armed forces, deals with another country, refuses to sign a law or forgives a federal crime',
        keeps: ['execute', 'beyondpres', 'commander', 'diplomacy', 'veto', 'pardon'] },
      { id: 'courts', n: 'A judge, in any court',
        plain: 'a judge, deciding a case someone brings',
        needs: 'a judge deciding, or someone asking a judge to decide, as the last thing in the case',
        when: 'the last decision in the case is a judge’s, in any court, federal or state, or the case ends with someone asking a judge to decide',
        keeps: ['review', 'trialrights', 'interpret', 'notlegal'] },
      { id: 'states', n: 'A state, city or county government',
        plain: 'the government of one state, or of a city, town or county in it',
        needs: 'a state’s lawmakers, governor or agencies, or a city, town or county, making the last decision in the case or being asked to make it',
        when: 'the last decision in the case is made by a state’s lawmakers, its governor or its agencies, or by a city, town or county, or the case ends by asking one of them for it. A judge in a state’s court counts as a judge, not as the state',
        keeps: ['police', 'localgov', 'preempted', 'concurrent', 'protected'] }
    ]
  },

  // A branch is a list of one, two or three questions. Three of the four have one question: each of their names is
  // defined by one thing (what Congress does, what the President or the agency does, what the judge is asked to do),
  // and for a law or an order whether the Constitution or a law allows it is part of that one thing (K2.2).
  // The state branch asks two, because who made the rule and what else covers its matter are two separate things.
  branches: {
    congress: [
      { code: 'C1', unit: 'u3',
        q: 'What does Congress do in the case?',
        purpose: 'Tells apart five things Congress does: a law it has the power to pass, a law it does not, a decision about money, a vote on someone or something the President put forward, and a charge against an official',
        why: 'The five names are defined by what Congress does, and for a law by whether the Constitution lets Congress pass it. Passing a law by the right votes does not make it one the Constitution allows, so a law is never named by the vote alone.',
        options: [
          { id: 'listed', n: 'Passes a law on a matter the Constitution lists for it',
            when: 'Congress passes a law on a matter the Constitution lists among its powers (taxes, borrowing, trade between the states or with other countries, the rules for becoming a citizen, money and coins, the mail, war and the armed forces, the federal courts), and the law takes away no right the Constitution protects',
            keeps: ['enumerated'],
            yieldsTo: [{ option: 'money', say: 'a decision about whether the government may spend money on something' }] },
          { id: 'barred', n: 'Passes a law the Constitution does not let it pass',
            when: 'Congress passes a law on a matter the Constitution does not list among its powers (the hours barbers work, who may marry, what schools teach), so the matter is left to the states, or a law that takes away a right the Constitution protects (to speak, to worship, to publish, to gather peacefully)',
            keeps: ['beyondcong'] },
          { id: 'money', n: 'Votes money for something, or refuses it',
            when: 'Congress decides whether the government may spend money on something: it votes the money, cuts it or leaves it out, and the government can spend only what Congress has voted',
            keeps: ['purse'] },
          { id: 'approve', n: 'Votes on a person or a treaty the President put forward',
            when: 'the Senate votes on someone the President has chosen for a top government job (a judge, the head of a federal agency, someone to represent the country abroad), where more than half the senators must vote yes, or on a treaty the President has signed, where two-thirds of the senators present must vote yes',
            keeps: ['confirm'] },
          { id: 'remove', n: 'Charges an official with serious misconduct, or tries the charge',
            when: 'a federal official (a judge, the head of a department, even the President) is accused of serious misconduct, and the House votes, by more than half, to charge them, or the Senate holds the trial on that charge, where two-thirds of the senators present must vote to convict before the official is removed',
            keeps: ['impeach'] }
        ] }
    ],

    president: [
      { code: 'E1', unit: 'u4',
        q: 'What does the President or the agency do?',
        purpose: 'Tells apart six things the President and the federal agencies do: carry out a law, demand what no law allows, command the armed forces, deal with other countries, send a law back unsigned, and forgive a federal crime',
        why: 'The six names are defined by the act itself, and for an order or a rule by whether a law Congress passed allows it. The President carries out the laws but does not make them, so an order that demands something no law allows is beyond the President, however it is worded.',
        options: [
          { id: 'carryout', n: 'Puts a law Congress passed into practice',
            when: 'a federal agency, or the President, writes the detailed rules for a law Congress passed, processes applications under it, inspects, collects or enforces, and stays inside what that law allows',
            keeps: ['execute'] },
          { id: 'newduty', n: 'Demands something of people that no law allows',
            when: 'the President or a federal agency, by an executive order or a rule, demands something of people or businesses (a new tax or fee, a new crime, a new duty, a ban) that no law Congress passed allows',
            keeps: ['beyondpres'] },
          { id: 'military', n: 'Gives orders to the armed forces',
            when: 'the President tells the armed forces where to go or what to do, or chooses who leads them',
            keeps: ['commander'] },
          { id: 'abroad', n: 'Deals with another country',
            when: 'the President, or an official acting for the President, meets, negotiates with or signs an agreement with another country',
            keeps: ['diplomacy'] },
          { id: 'sendback', n: 'Refuses to sign a law Congress passed',
            when: 'Congress has passed a law and sent it to the President, who refuses to sign it and sends it back with objections. It can still take effect if two-thirds of the House and two-thirds of the Senate vote for it again',
            keeps: ['veto'] },
          { id: 'forgive', n: 'Forgives a federal crime',
            when: 'the President forgives someone for a federal crime, so that the punishment is lifted or never comes. A crime against a state’s own law is outside this, and only that state can forgive it',
            keeps: ['pardon'] }
        ] }
    ],

    courts: [
      { code: 'J1', unit: 'u5',
        q: 'What is the judge asked to do?',
        purpose: 'Tells apart four things a judge can be asked to do: check a law against the Constitution, protect a person accused of a crime, say what the words of a law cover, and choose a policy, which a judge will not do',
        why: 'The four names are defined by what the judge is asked to decide. They are not defined by which court it is, how important the case is, or whether the judge agrees.',
        options: [
          { id: 'check', n: 'Check a law against the Constitution',
            when: 'someone the law has actually harmed (fined, charged, refused something) brings a case saying that the law, or something the government did under it, breaks the Constitution',
            keeps: ['review'] },
          { id: 'accused', n: 'Make sure an accused person gets the steps the Constitution promises',
            when: 'someone is accused of a crime, and the judge is asked whether the steps the Constitution promises were followed: no unreasonable search, the right to stay silent, a lawyer, a speedy public trial by jury, no cruel or unusual punishment',
            keeps: ['trialrights'] },
          { id: 'words', n: 'Say what the words of a law cover',
            when: 'nobody says the law breaks the Constitution, and the question is whether its words reach a situation. The judge decides from the words, the rest of the law, what it was for, and earlier rulings on the same words, called precedent',
            keeps: ['interpret'] },
          { id: 'policy', n: 'Choose which policy is better',
            when: 'someone asks the judge to decide what would be wiser or fairer, and no law and no right in the Constitution settles it, so the choice belongs to the voters and the people they elect',
            keeps: ['notlegal'] }
        ] }
    ],

    states: [
      { code: 'S1', unit: 'u6',
        q: 'Is the rule the state’s own, or a city’s or a county’s?',
        purpose: 'Tells apart a rule a state makes for itself from one a city, town or county makes with power the state handed down',
        why: 'A city, town or county has no power of its own in the Constitution: it has only what its state hands it, and the state can take it back. So who made the rule decides the name when nothing else covers the matter.',
        options: [
          { id: 'own', n: 'The state’s own rule',
            when: 'the rule is made by the state itself: its lawmakers, its governor or one of its agencies',
            keeps: ['police', 'preempted', 'concurrent', 'protected'] },
          { id: 'local', n: 'A city’s, a town’s or a county’s rule',
            when: 'the rule is made by a city, a town or a county, using power its state has handed down to it',
            keeps: ['localgov', 'preempted', 'concurrent', 'protected'] }
        ] },
      { code: 'S2', unit: 'u6',
        q: 'Does a federal law or a right in the Constitution cover the same matter?',
        purpose: 'Tells apart a state or local rule that stands alone, one that gives way to a federal law, one that stands beside a federal law, and one that a right forbids',
        why: 'A state or local rule is judged by what else covers its matter. A federal law meant to be the only rule wins; a federal minimum leaves room; a right the Constitution protects forbids the rule whoever made it; and where none of these reaches the matter, the state, or the city or county it handed power to, decides.',
        options: [
          { id: 'nothing', n: 'Neither: no federal law and no right covers it',
            when: 'the matter is one the Constitution leaves to the states (licenses, marriage, schools, most crime, renting a home, local streets and buildings), no federal law covers it, and the rule takes away no right the Constitution protects',
            keeps: ['police', 'localgov'] },
          { id: 'onlyrule', n: 'A federal law that is meant to be the only rule',
            when: 'a federal law covers the same matter, on a subject the Constitution gives Congress, and either it says no state may set its own rule, or the state or local rule makes it impossible to obey both',
            keeps: ['preempted'] },
          { id: 'floor', n: 'A federal law that leaves room for the state’s rule',
            when: 'a federal law covers the same matter but sets only a minimum, or lets the states act too, so that obeying the state or local rule also obeys the federal one',
            keeps: ['concurrent'] },
          { id: 'right', n: 'A right the rule takes away',
            when: 'the rule takes away a right the Constitution protects (to speak, to worship, to publish, to gather peacefully), which binds every state, city and county as well as the federal government',
            keeps: ['protected'] }
        ] }
    ]
  }
});
