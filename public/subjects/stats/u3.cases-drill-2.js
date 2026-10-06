// Statistical Claims, Unit Three: drill cases for the route stage, clean (the whole route on mixed claims, the first question first).
// Field guide: see u3.cases-drill-1.js. wouldChange says what would make it a different answer; it is shown after the feedback.
// Misleading cases, which carry echo and also, are in u3.cases-drill-3.js.

FC.cases('stats', 'u3', [

  /* ---------- clean ---------- */
  { id: 'rt-survivor-a', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a bootcamp and graduates still in tech jobs',
    text: "A coding bootcamp's website says: 'Our graduates earn an average of $95,000.' The average is taken from the 150 graduates who are still working in tech jobs. 400 people finished the course, and the 250 who changed careers or left tech are not included.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['taken from the 150 graduates who are still working in tech jobs', 'Our graduates earn an average of $95,000'], A1: ['the 150 graduates who are still working in tech jobs', 'the 250 who changed careers or left tech are not included'] },
    reason: { S1: 'The website speaks for "our graduates", all 400 who finished, but the average comes from the ones who stayed in tech: {cue:S1}. 250 of the 400 are not in it.',
              A1: 'The figure is worked out after the fact, from the ones still there: {cue:A1}. The graduates who left tech are missing, and people tend to leave a field when it is not paying them.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and failed to reply. The average was taken from a list of the graduates still in tech jobs, and the ones who left were never on it.' } },

  { id: 'rt-selfselect-a', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a cooking magazine and favorite dinners',
    text: "A cooking magazine invited readers to email their favorite weeknight dinner. It printed the results: 'Pasta is America's favorite weeknight dinner: 640 of the 900 who wrote in chose it.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ["America's favorite weeknight dinner", '640 of the 900 who wrote in'], A1: 'invited readers to email their favorite weeknight dinner' },
    reason: { S1: 'The magazine speaks for the whole country, but the figure comes from 900 readers who wrote in: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The readers who wrote in chose to, and a reader with a favorite dinner to defend is likelier to write.' },
    not: { outcome: 'survivor', why: 'Nobody is in the figure by lasting to the end. They are in because they chose to write, and the readers who did not write were never counted.' } },

  { id: 'rt-nonresp-a', use: 'drill', tier: 'clean', setting: 'health', topic: 'a dental practice and flossing',
    text: "A dental practice mailed a questionnaire to all 1,000 of its patients: 'Do you floss every day?' 180 sent it back, and 144 said yes. The practice's newsletter says: 'Four in five of our patients floss every day.' It did not follow up with the others.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['180 sent it back, and 144 said yes', 'Four in five of our patients floss every day'], A1: ['mailed a questionnaire to all 1,000 of its patients', 'did not follow up with the others'] },
    reason: { S1: 'The newsletter speaks for all 1,000 patients, but the figure comes from the 180 who sent the form back: {cue:S1}.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. A patient who flosses is likelier to want to say so. If none of the other 820 flossed, the figure for the practice would be 144 out of 1,000, which is 14 in every 100.' },
    not: { outcome: 'selfselect', why: 'Every patient was sent the questionnaire by name, so nobody chose themselves in. The trouble is that most did not send it back.' },
    wouldChange: 'If the practice had phoned the patients who had not replied until 900 of the 1,000 had answered, the first part would hold.' },

  { id: 'rt-smalln-a', use: 'drill', tier: 'clean', setting: 'community', topic: 'a town of 240 with no car accidents',
    text: "The town of Hartwell has 240 residents. Across the county there are 5 car accidents for every 1,000 residents each year. The town's website says: 'Hartwell is the safest town in the county for drivers: there were no car accidents here last year.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['there were no car accidents here last year', 'Hartwell is the safest town in the county for drivers'], A1: 'The town of Hartwell has 240 residents' },
    reason: { S1: 'The website reads a year of zero accidents as showing that the town is safest: {cue:S1}.',
              A1: 'Every accident is counted, but there are few residents to have them: {cue:A1}. At the county rate, 240 residents would have about 240 times 5 divided by 1,000, which is 1.2 accidents a year. Zero is an ordinary year, and so is two.' },
    not: { outcome: 'samp_ok', why: 'A fair figure would be one that one or two more or fewer would barely move. For Hartwell one accident is the difference between "none" and "some", and the website reads the gap as meaning something.' } },

  { id: 'rt-ok-a', use: 'drill', tier: 'clean', setting: 'work', topic: 'every truck in a fleet checked',
    text: "A delivery company checked every one of its 320 trucks and found that 40 need new tires. Its fleet manager says: 'One truck in every eight needs new tires.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'checked every one of its 320 trucks', H1: 'One truck in every eight needs new tires' },
    reason: { S1: 'Every truck the claim speaks for is counted: {cue:S1}. 40 of 320 is 12.5 in every 100, which is one in eight.',
              H1: 'The claim gives one share for one group at one time and goes no further: {cue:H1}.' },
    not: { outcome: 'smalln', why: 'There are 320 trucks, and one more or fewer would move the share by about a third of a point: 41 of 320 is 12.8 in every 100. That is enough for the figure to hold.' } }
]);
