// Psychology, Unit Two: drill cases for the piece stage.

FC.cases('psychology', 'u2', [
  /* ---------- The piece stage ---------- */
  { id: 'queue', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a restaurant line',
    text: "Hana has waited in line for forty minutes for a table at a restaurant. From the plates going past, the food looks poor, and a place across the road has free tables. 'We've waited this long,' she says. 'We're not leaving now.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "We've waited this long" },
    reason: { R1: 'Her reason for staying is {cue:R1}: the forty minutes. The meal still to come, which is what the choice is about, is not in her reasoning.' },
    not: { outcome: 'dissonance', why: 'She is not giving a reason why something she did is fine. A next step is still to be decided, stay or cross the road, and the time already spent is her reason.' } },

  { id: 'shower', use: 'drill', tier: 'clean', setting: 'home', topic: 'a long shower',
    text: "Marco lectures his roommates about wasting water. This morning he took a twenty-five-minute shower. 'I had a brutal week,' he says. 'I earned that one.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'I earned that one' },
    reason: { R1: '{cue:R1} is a reason given after the shower. It says the shower is fine, and nothing else changes: he will go on lecturing his roommates about water.' },
    not: { outcome: 'sunkcost', why: 'The shower is over. Nothing already spent is being given as the reason for a next step.' } },

  { id: 'bus', use: 'drill', tier: 'varied', setting: 'community', topic: 'a late bus',
    text: "Sunita is sure the number 14 bus is always late. Last week, when a colleague said the 14 had kept her waiting, Sunita said, 'See?' Now her partner shows her the transit app's record for the month: on time on nineteen days out of twenty. 'Those records are worthless,' she says.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'Those records are worthless' },
    reason: { R1: "A colleague's one late bus, which is evidence for her view, went straight in: 'See?' The month's record, which is evidence against it, is thrown out: {cue:R1}. One side gets a harder test." },
    not: { outcome: 'dissonance', why: 'There is nothing she did that she is giving a reason for. Her reasoning is about a record.' } },

  { id: 'charity', use: 'drill', tier: 'varied', setting: 'work', topic: 'a fitness challenge',
    text: "For a year Dev said he would never join 'a cult like that'. Last week he signed up for the fitness challenge all his colleagues are doing. 'It's different when it's for charity,' he says.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: "It's different when it's for charity" },
    reason: { R1: 'Dev did something that does not fit what he said for a year: he signed up. {cue:R1} is a reason given afterward for why that is fine.' },
    not: { outcome: 'fair', why: 'His view of the challenge has changed, but no new fact about it arrived. The only thing that came between the old view and the new one is that he signed up.' } }
]);
