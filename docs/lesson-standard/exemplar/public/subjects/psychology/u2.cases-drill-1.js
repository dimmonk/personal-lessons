// Psychology, Unit Two: drill cases for stages one to three. None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('psychology', 'u2', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'insure', use: 'drill', tier: 'clean', setting: 'money', topic: 'an insurance claim',
    text: "Ivan tells his children that honesty matters more than anything. Filling in an insurance claim for a stolen bike, he adds £150 to what it was worth. 'Insurers allow for this,' he says. 'Everybody rounds up.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'Everybody rounds up' },
    reason: { R1: '{cue:R1} is a reason given after the act. It says the padded claim is fine, and nothing else changes: the claim stays padded, and Ivan still tells his children that honesty matters most.' },
    not: { outcome: 'sunkcost', why: 'Nothing already spent is being given as the reason for a next step.' } },

  { id: 'jumper', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'knitting a sweater',
    text: "Bea has knitted two thirds of a sweater in a wool she can now see is the wrong colour for her. 'I'm forty hours in,' she says, and she buys the last four balls of the same wool.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "I'm forty hours in" },
    reason: { R1: 'Her reason for buying more wool is {cue:R1}: the hours already spent. She says nothing about whether the finished sweater will be worth having.' },
    not: { outcome: 'dissonance', why: 'She is not giving a reason why something she did is fine. There is a next step to decide, buying more wool, and the hours already spent are her reason for taking it.' } },

  { id: 'phone', use: 'drill', tier: 'clean', setting: 'money', topic: 'a new phone',
    text: "Pete had set his heart on the new phone before it was even on sale. The week it came out he 'did his research': he watched four videos titled 'Why this phone is worth it'. 'I've looked into it,' he said, 'and it's worth it.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { R1: 'had set his heart on the new phone before it was even on sale' },
    reason: { R1: 'Pete set out to settle whether to buy, and the answer came before the search: he {cue:R1}. The videos he chose could only add support.' },
    not: { outcome: 'confbias', why: 'No evidence against his view turns up and gets a harder test. He set out on a search, and the answer was chosen before it began.' } },

  { id: 'layout', use: 'drill', tier: 'clean', setting: 'work', topic: 'an open-plan office',
    text: "Yusuf is convinced that the office's new open-plan layout has ruined everyone's work. He passes on every complaint he hears about noise as proof. When the quarterly figures show more work finished than in the same quarter last year, he says figures like that can be made to say anything.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'figures like that can be made to say anything' },
    reason: { R1: 'The complaints, which are evidence for his view, are passed on as proof with no questions asked. The figures, which are evidence against it, are dismissed: {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'motivated', why: 'Yusuf did not set out on a search to settle anything, and no answer was chosen before one. He has a view, and evidence turns up.' } },

  { id: 'trial', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a no-homework trial',
    text: "Kemi was against the school's trial of setting no homework, and said so at the parents' meeting. At the end of the year the school shared the test results, which had not changed, and a survey in which most children said they now read more at home. 'I argued against this,' Kemi wrote to the head teacher, 'and the results do not support me. I withdraw my objection.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'I withdraw my objection' },
    reason: { R1: 'The results went against the position she had taken in public. She gave them no harder test for that, and her view went where they pointed: {cue:R1}.' },
    not: { outcome: 'confbias', why: '{o:confbias} would have Kemi finding fault with the results because they went against her. She gave them no harder test than results she liked would have got.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'queue', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a restaurant queue',
    text: "Hana has queued for forty minutes for a table at a restaurant. From the plates going past, the food looks poor, and a place across the road has free tables. 'We've waited this long,' she says. 'We're not leaving now.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "We've waited this long" },
    reason: { R1: 'Her reason for staying is {cue:R1}: the forty minutes. The meal still to come, which is what the choice is about, is not in her reasoning.' },
    not: { outcome: 'dissonance', why: 'She is not giving a reason why something she did is fine. A next step is still to be decided, stay or cross the road, and the time already spent is her reason.' } },

  { id: 'shower', use: 'drill', tier: 'clean', setting: 'home', topic: 'a long shower',
    text: "Marco lectures his housemates about wasting water. This morning he took a twenty-five-minute shower. 'I had a brutal week,' he says. 'I earned that one.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'I earned that one' },
    reason: { R1: '{cue:R1} is a reason given after the shower. It says the shower is fine, and nothing else changes: he will go on lecturing his housemates about water.' },
    not: { outcome: 'sunkcost', why: 'The shower is over. Nothing already spent is being given as the reason for a next step.' } },

  { id: 'bus', use: 'drill', tier: 'varied', setting: 'community', topic: 'a late bus',
    text: "Sunita is sure the number 14 bus is always late. Last week, when a colleague said the 14 had kept her waiting, Sunita said, 'See?' Now her partner shows her the transport app's record for the month: on time on nineteen days out of twenty. 'Those records are worthless,' she says.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'Those records are worthless' },
    reason: { R1: "A colleague's one late bus, which is evidence for her view, went straight in: 'See?' The month's record, which is evidence against it, is thrown out: {cue:R1}. One side gets a harder test." },
    not: { outcome: 'dissonance', why: 'There is nothing she did that she is giving a reason for. Her reasoning is about a record.' } },

  { id: 'charity', use: 'drill', tier: 'varied', setting: 'work', topic: 'a fitness challenge',
    text: "For a year Dev said he would never join 'a cult like that'. Last week he signed up for the fitness challenge all his colleagues are doing. 'It's different when it's for charity,' he says.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: "It's different when it's for charity" },
    reason: { R1: 'Dev did something that does not fit what he said for a year: he signed up. {cue:R1} is a reason given afterwards for why that is fine.' },
    not: { outcome: 'fair', why: 'His view of the challenge has changed, but no new fact about it arrived. The only thing that came between the old view and the new one is that he signed up.' } },

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'horoscope', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a horoscope',
    text: "Lin believes her horoscope describes her exactly. On days when it fits, she reads it out to her partner. On days when it does not, she says the writer was probably rushed that week.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'Lin believes her horoscope describes her exactly', R1: 'the writer was probably rushed that week' },
    reason: { D1: 'The case shows how one person defends a view of her own: {cue:D1}, and what she does with each day’s reading.',
              R1: 'A day that fits is read out as it stands. A day that does not fit is explained away: {cue:R1}. Only the evidence against her view has to pass a test.' },
    not: { outcome: 'motivated', why: 'Lin has not set out on a search to settle anything, and no answer was chosen before one. She has a view already, and results turn up day by day.' } },

  { id: 'warehouse', use: 'drill', tier: 'varied', setting: 'work', topic: 'a warehouse site',
    text: "Before the board had seen any figures, the managing director had picked the Leeds site for the new warehouse. Afterwards she hired a consultant 'to assess the options'. The instructions she gave him listed the advantages of Leeds and asked him to confirm them.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: "she hired a consultant 'to assess the options'", R1: 'Before the board had seen any figures, the managing director had picked the Leeds site' },
    reason: { D1: 'The case shows how one person reaches a choice of her own and backs it up: she picked a site, and then {cue:D1}.',
              R1: 'She set out on a search, the consultant’s report, and the answer came before it: {cue:R1}. A report written to confirm a choice could only supply support.' },
    not: { outcome: 'confbias', why: 'No evidence against her view turns up and gets a harder test. She chose first, and then set up a search that could not go against her.' } }
]);
