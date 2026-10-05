// Statistical Claims, Unit Two, part three: the key's question as a question, two whole claims worked for the learner, and the cards that close
// the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for every pair
// already compared the question that separates it.

FC.cards('stats', 'u2', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-holds', kind: 'question', step: 'H1',
    h: 'The question you have been answering all along',
    link: 'Since the library you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as they are always asked, and says why it is asked.',
    decides: [
      'This question is asked about a claim whose first part has already been checked: the people or things are fair, the figure counts what it says, and what it is set beside is fair. It does not ask whether the claim is true in the world. It asks how far the claim goes. A claim that holds gets full credit for what it says and none for what it does not say.',
      'The four answers are four sizes of claim. A claim for one group at one time shows nothing about change. A claim that a figure rose or fell shows nothing about why. A claim that one thing is bigger than another shows nothing about why. And only a claim of cause may say why, because a lottery formed its groups. So knowing which of the four you are looking at tells you what you can repeat to someone else and what you cannot.'
    ],
    how: [
      'Find the claim: the sentence that says what the figures show. Read it for its size. Count the groups and the times in it. One group at one time is {a:H1.group}. One thing at two or more times, with the claim saying it rose or fell, is {a:H1.change}. Two groups, places or things, or one thing and its usual level, with the claim saying which is bigger, is {a:H1.difference}. A chance counts here too, as long as it is set beside another: "15 trips in 100 are late on Line 9, against 6 in 100 on Line 5" gives a chance of being late for each line, and says which is likelier. And a claim that says what made something happen is {a:H1.causes}.',
      'The question looks only at what the claim says. The story can suggest more. A program in the story does not turn a difference into a cause, as in the two towns and their garbage. A list of years in the story does not turn one figure into a change unless the claim says that it rose or fell. If you give the answer for what the story hints at and not for what the claim says, you will credit a claim with something it never said.',
      'For the fourth answer, go back and look for the words that say how the groups were formed. A claim of cause with no words about a lottery behind it is not this answer, and the first question would not have given {a:S1.holds} for it.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-q', kind: 'check', after: 'H1',
    case: 'h-bikes',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-libraries', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the four names and the question about them. Before you run a claim yourself, watch two being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'h-libraries',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order, as Unit One taught. Start with who is in the figure. The county counted every loan at both libraries, so nobody is missing and nobody chose whether to be counted. That part holds. Next, what the figure counts: loans returned late, in the same system, with the same due date at both libraries. Nothing changed and nobody is paid on it. That part holds. Next, what it is set beside: one library beside the other, with both totals given. That part holds.',
          'Then the last part, the claim itself. It says which library is later, and does not say that anything made it so. The words in the case that show the parts holding are {cue:S1}. Every part holds, so the answer is {a:S1.holds}.'
        ] },
      { step: 'H1',
        reason: 'Now the question for a claim that holds: what does it say the figures show? The claim is {cue:H1}. It sets two libraries side by side and says which is later more often, and nothing else. For each library the late loans are divided by the total: 1,104 ÷ 9,200 = 0.12, which is 12 in 100, and 1,365 ÷ 9,100 = 0.15, which is 15 in 100. The two are alike and counted alike, and the numbers are given.' }
    ],
    hold: {
      neighbour: 'cause_ok',
      prompt: { kind: 'reason',
        lead: 'The case sets two groups side by side with a gap between them, so it can look like a claim that one thing made the other happen.',
        choices: [
          { id: 'a', text: 'West’s late returns are 15 in 100 and East’s are 12 in 100.',
            note: 'True, and it is why the case can look like {o:cause_ok}. But any comparison has a gap, so the gap cannot settle which of the two this is.' },
          { id: 'b', text: 'The claim says which library is later and says no more: it does not say what made West later.' },
          { id: 'c', text: 'Both libraries count every loan in the same system.',
            note: 'True, and it tells you the comparison is fair. It does not separate the two names: {o:cause_ok} is counted the same way too.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:cause_ok} you must be able to point to this: {needs:cause_ok}. The claim here says nothing about what made West later, and nothing in the case forms the libraries into groups by lottery. {o:comp_ok} is for a claim that stops at which is bigger, and this claim does.',
        'It is the question from the school and its reading program. {test:comp_ok~cause_ok} Here the claim stops at which library is later, so the answer is {a:H1.difference}.'
      ]
    },
    impression: {
      resembles: 'h-buses',
      text: [
        'You have an answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the two bus lines: two things of one kind, counted one way, with their numbers given, and a claim that says which is later more often.',
        'Here the likeness agrees with the answer, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-backs', kind: 'worked',
    h: 'A second whole claim, where the story points the wrong way',
    link: 'The two libraries were a clean case: one thing was going on in them. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'h-backs',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order. Who is in the figure: 300 adults with long-term back pain who were enrolled in the study and then split into two groups, and all 300 filled in the same form. That part holds. What the figure counts: a pain score on the same 10-point form for both groups. That part holds. What it is set beside: the usual-care group, with both groups’ averages and sizes given. That part holds.',
          'Then the last part, where a claim of cause has to stand on how the groups were formed. The words are {cue:S1}. A lottery formed the groups, so nothing else is likelier to be in one group than the other. Every part holds, so the answer is {a:S1.holds}.'
        ] },
      { step: 'H1',
        reason: 'Now the question for a claim that holds. The case sets two groups side by side with their averages, 3.1 and 4.4, and a gap of 4.4 − 3.1 = 1.3 points. But look at the claim: {cue:H1}. It does not stop at which group is ahead. It says that stretching reduced the pain.' }
    ],
    hold: {
      neighbour: 'comp_ok',
      prompt: { kind: 'reason',
        lead: 'The case sets two groups side by side with their averages, so it can look like a claim that only says which group is ahead.',
        choices: [
          { id: 'a', text: 'The stretching group averaged 3.1 and the usual-care group averaged 4.4.',
            note: 'True, and it is why the case can look like {o:comp_ok}. But two averages side by side belong to both names, so they cannot settle which this is.' },
          { id: 'b', text: 'The claim says stretching reduced the pain, and a computer drew by lottery who stretched.' },
          { id: 'c', text: 'Everyone filled in the same pain form at twelve weeks.',
            note: 'True, and it makes the comparison fair. A claim that stops at which is ahead is counted the same way too, so it cannot settle which of the two this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:comp_ok} you must be able to point to this: {needs:comp_ok}. The case has all of that, and the claim goes past it. It says what made the gap. That is what {o:cause_ok} needs: {needs:cause_ok}, and the case has that too, because a lottery formed the groups.',
        'When a claim says what made the gap, and a lottery formed the groups, the answer is {a:H1.causes}. The claim is allowed to say it. A claim that stopped at "3.1 against 4.4" would have been {o:comp_ok}.'
      ]
    },
    impression: {
      resembles: 'h-migraine', first: 'h-readgroups',
      text: [
        'Now the second look: does this case look like one you know? Two groups with their averages side by side, one given a routine and one given the usual, may bring back the school and its reading groups first. In that case the claim only said which group was ahead, and the case was {o:comp_ok}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:H1}. The reading groups’ claim has nothing like them: it stopped at the averages. This claim says what made the gap. So the case this one really looks like is the migraine test, where a lottery formed the groups and the claim said the tablet made the difference, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-holds', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on claims that hold. This card puts the unit in one place, in the words used all the way through.',
    carry: [
      'When the first question gives {a:S1.holds}, one question is left: {q:H1} Point to the words, then give the name.',
      'A claim that holds has earned exactly what it says. One figure about one group is not a trend, a fall is not a reason, and a gap is not a cause. Repeat it for what it says and for no more.',
      'The size of the whole group does not decide how far a figure can be relied on. How the people were chosen, and how many of those chosen are in the figure, do. A margin says how far luck alone can move it.',
      '{o:cause_ok} is the only name that may say what made the difference, and the words to point to are the ones that say a lottery formed the groups.',
      'The story can hint at more than the claim says. Go by what the claim says.',
      'A claim that looks like these may still go wrong. The first question comes before this one, so run it first and give this unit’s answer only if the first question gives {a:S1.holds}.'
    ] },

  { id: 'transfer-holds', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: something you read, something you were told, or something you said. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'samp_ok', occasion: 'A poll, a survey or a company’s figure about its own customers, where you could find out how the people were chosen.' },
      { outcome: 'meas_ok', occasion: 'A figure you watched rise or fall with the same tool: a scale, a meter, an account or a record you keep yourself.' },
      { outcome: 'comp_ok', occasion: 'Two things you compared, such as two plans, two schools or two bus lines. Were they alike, and did you have the numbers?' },
      { outcome: 'cause_ok', occasion: 'A claim that something works that you have heard. Did it say who decided which group got it?' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] },

  { id: 'plan-holds', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. This time the claim is one that holds, and the plan is about saying only as much as it has earned.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a headline gives me a figure about "everyone" or "the public"', then: 'look for how the people were chosen and how many answered, and repeat the figure only for the group it names' },
      { cue: 'a report shows a number that rose or fell', then: 'check that it was counted the same way each time, and say only that it rose or fell' },
      { cue: 'someone sets two things side by side', then: 'check that they are alike and the numbers are given, and say which is bigger and stop there' },
      { cue: 'a claim says that something works', then: 'look for who decided which group got it, and repeat the cause only if a lottery did' },
      { cue: 'a claim passes every check', then: 'say what it shows, say what it does not show, and pass it on with both' }
    ] }
]);
