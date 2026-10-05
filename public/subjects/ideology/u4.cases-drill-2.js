// Political Ideologies, Unit Four: drill cases for stage three (the first answer is shown, the learner answers this unit's
// question and gives the name) and the clean and varied cases of stage four (the whole route, no help).
// Every question asked here carries marked words and a reason, so each case has cues and a reason for the first question too.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage three: the first answer is shown ---------- */
  { id: 'i4-f-nets', use: 'drill', tier: 'varied', setting: 'work', topic: 'a net-makers’ blessing and new machines',
    text: "From the Quay Net-Makers' Fellowship: 'Net-makers here have always begun the year with the blessing of the nets, and that old custom should guide how the Fellowship is run. Keep it, and keep the apprentice dinner. If the workshop has to take on new machines, let it be done one machine at a time, and with the net-makers asked at each step.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'that old custom should guide how the Fellowship is run', T1: ['Keep it, and keep the apprentice dinner', 'let it be done one machine at a time, and with the net-makers asked at each step'] },
    reason: { D1: 'The text holds up a custom handed down, the blessing of the nets, as what should guide: {cue:D1}.',
              T1: 'The blessing and the dinner are still held, and the text asks for them to stay and for new machines to come slowly: {cue:T1}.' },
    not: { outcome: 'react', why: 'New machines are in the story, which can look like change that is being undone. But nothing has been torn down, and nothing is asked to be put back.' } },

  { id: 'i4-f-academy', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'an old college governed by its masters',
    text: "From a letter by the Old Collegians of Marr: 'For five hundred years the Collegium of Marr was governed by its masters and taught the old studies in the old way. The University Act handed the Collegium to a board and dropped the old studies. That was a wrong done to learning. The old way of the Collegium should guide how our schools are run, so dissolve the board, restore the masters to the governance, and teach the old studies again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: 'The old way of the Collegium should guide how our schools are run', T1: ['That was a wrong done to learning', 'dissolve the board, restore the masters to the governance, and teach the old studies again'] },
    reason: { D1: 'The text holds up an old order, a college governed by its masters, as what should guide: {cue:D1}.',
              T1: 'The masters’ governance is gone, the text calls its going a wrong, and it asks for it to be restored: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text loves the old college, but the old college is not being kept. The text says it was handed to a board, and asks for it to be put back.' } },

  { id: 'i4-f-pilgrim', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a pilgrim path over a mountain pass',
    text: "From a hill-walkers' fellowship: 'Each autumn the pilgrims climb the Brae Pass to the border chapel, as pilgrims have for six hundred years, and that walk should guide how the pass is looked after. Keep the old path. If the new tunnel brings more visitors, let the walk adjust slowly, and let the pilgrims decide the pace.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'that walk should guide how the pass is looked after', T1: ['Keep the old path', 'let the walk adjust slowly, and let the pilgrims decide the pace'] },
    reason: { D1: 'The text holds up a walk handed down, the pilgrimage, as what should guide: {cue:D1}.',
              T1: 'The pilgrimage is still made, and the text asks for the path to stay and for the walk to adjust slowly: {cue:T1}.' },
    not: { outcome: 'react', why: 'The border and the new tunnel are in the story, but nothing has been taken away and nothing is asked back. The path is still walked.' } },

  { id: 'i4-f-fast', use: 'drill', tier: 'varied', setting: 'faith', topic: 'fast days and the taverns',
    text: "From a speech in the kingdom of Alder: 'For as long as the kingdom stood, the taverns of Alder were shut on the six fast days, and the market was silent. The Licensing Act ended that and called the fast days a nuisance. That was a wrong against the kingdom's faith. The fast days should guide how we keep the calendar, so repeal the Act and shut the taverns on the fast days again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The fast days should guide how we keep the calendar'], T1: ['That was a wrong against the kingdom\'s faith', 'repeal the Act and shut the taverns on the fast days again'] },
    reason: { D1: 'The text holds up the fast days, a custom handed down, as what should guide: {cue:D1}.',
              T1: 'The shutting of the taverns has been ended by an act, the text calls that a wrong, and it asks for the act to be repealed: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The fast days are not being kept. An act ended them, and the text asks for the old custom to be put back.' } },

  /* ---------- Stage four, clean: the whole route ---------- */
  { id: 'i4-r-bake', use: 'drill', tier: 'clean', setting: 'town', topic: 'a village bake day in a common oven',
    text: "From the Lower Marle parish magazine: 'Every Saturday the village bakes its bread in the common oven, as it has since the parish was founded, and the neighbours share the loaves. That shared baking should guide how we plan the new village hall. Keep the oven in use. If the hall's kitchen must be modernised, let it be done in stages, and let the bakers say how fast.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That shared baking should guide how we plan the new village hall', T1: ['Keep the oven in use', 'let it be done in stages, and let the bakers say how fast'] },
    reason: { D1: 'The text holds up a custom handed down, the shared baking, as what should guide the village: {cue:D1}.',
              T1: 'The baking still goes on, and the text asks for the oven to stay in use and for the kitchen to change in stages: {cue:T1}.' },
    not: { outcome: 'react', why: 'The oven is in use today, so nothing has gone and nothing is asked back.' },
    wouldChange: 'If the text said the common oven had been closed by a law, that this was a wrong, and asked for it to be opened again, the answer would be {a:T1.restore}.' },

  { id: 'i4-r-yard', use: 'drill', tier: 'clean', setting: 'faith', topic: 'a churchyard taken by the council',
    text: "From a letter to the Hobb Vale parish: 'For nine hundred years the dead of this vale were laid in the churchyard, and the parish kept it. The Cemeteries Act took the churchyard from the parish and gave it to the council. That was a wrong done to the living and the dead. The old keeping of the churchyard should guide how we lay our dead, so give the churchyard back to the parish and let the parish keep it as before.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old keeping of the churchyard should guide how we lay our dead'], T1: ['That was a wrong done to the living and the dead', 'give the churchyard back to the parish and let the parish keep it as before'] },
    reason: { D1: 'The text holds up the parish’s old keeping of the churchyard as what should guide: {cue:D1}.',
              T1: 'The parish no longer has the churchyard, the text calls its loss a wrong, and it asks for it to be given back: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text holds up an old custom, but the parish has lost the churchyard. Nothing is being kept, and the text asks for it to be returned.' },
    wouldChange: 'If the parish still kept the churchyard and the text asked for it to stay with the parish, and for any change to be slow, the answer would be {a:T1.keep}.' },

  /* ---------- Stage four, varied ---------- */
  { id: 'i4-r-border', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a blessing at a border market',
    text: "From the Cray Gap market committee: 'On market day in the Cray Gap the traders open with a short blessing in the old tongue and the new, as they have since the border was drawn. That custom should guide how the market is run. Keep the blessing in both tongues. If new stalls must be added, add them a few at a time, and ask the oldest traders where they should go.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That custom should guide how the market is run', T1: ['Keep the blessing in both tongues', 'add them a few at a time, and ask the oldest traders where they should go'] },
    reason: { D1: 'The text holds up a custom handed down, the market-day blessing, as what should guide: {cue:D1}.',
              T1: 'The blessing is still said, and the text asks for it to stay and for new stalls to come a few at a time: {cue:T1}.' },
    not: { outcome: 'react', why: 'The border and the two tongues are in the story, but nothing has been taken away. The blessing is still said.' },
    wouldChange: 'If the text said the blessing in the old tongue had been banned, that the ban was a wrong, and asked for it to be said again, the answer would be {a:T1.restore}.' },

  { id: 'i4-r-rents', use: 'drill', tier: 'varied', setting: 'money', topic: 'farm tenancies and the eldest son',
    text: "From a speech by the Landholders' Union: 'For three hundred years a farm in the Vale passed to the eldest son, and the landlord could not turn a household out. The Rents Act ended that. It was a wrong against the order of the Vale, and nothing else. That old order should guide the countryside, so repeal the Act and let the farms pass to the eldest son again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['That old order should guide the countryside'], T1: ['It was a wrong against the order of the Vale, and nothing else', 'repeal the Act and let the farms pass to the eldest son again'] },
    reason: { D1: 'The text holds up the old order of the farms, handed down from father to son, as what should guide the countryside: {cue:D1}.',
              T1: 'An act ended the old order, the text calls that a wrong, and it asks for the act to be repealed: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The old order is not still in place to be kept. An act ended it, and the text asks for it to be put back.' },
    wouldChange: 'If farms still passed to the eldest son and the text asked only that this be kept, and any change be slow, the answer would be {a:T1.keep}.' }
]);
