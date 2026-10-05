// Statistical Claims, Unit Three: cases shown inside cards, part three (a known list asked, and many not replying; the look-alike
// cases that go with it). Field guide: see u3.cases-teach-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Non-response bias ---------- */
  { id: 'cn-library', use: 'teach', tier: 'clean', setting: 'community', topic: 'a library questionnaire on Sunday opening', name: 'The Sunday library survey',
    text: "A city library mailed a questionnaire to all 2,400 people with a library card: 'Should we open on Sundays?' 336 mailed it back, and 300 of those said yes. The library announced: 'Nine in ten of our members want Sunday opening.' It did nothing to hear from the other 2,064.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['336 mailed it back', 'Nine in ten of our members want Sunday opening'], A1: ['mailed a questionnaire to all 2,400 people with a library card', 'did nothing to hear from the other 2,064'] } },

  { id: 'cn-union', use: 'teach', tier: 'clean', setting: 'work', topic: 'a union ballot mailed to every member', name: 'The union ballot',
    text: "A union mailed a ballot to all 600 of its members about a strike. 90 ballots came back, and 81 were for striking. The union leader said: 'Nine in ten members back the strike.' Nobody phoned or visited the 510 who did not answer.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['90 ballots came back', 'Nine in ten members back the strike'], A1: ['mailed a ballot to all 600 of its members', 'Nobody phoned or visited the 510 who did not answer'] },
    segments: [
      { text: 'A union mailed a ballot to all 600 of its members about a strike', note: 'That says everyone on the list was asked. The words to tap are the ones that say what was done about the members who did not answer.' },
      { text: '90 ballots came back, and 81 were for striking', note: 'That is the figure, and it is correct for the ballots that came back.' },
      { text: 'Nine in ten members back the strike', note: 'That is the claim. It speaks for all the members.' },
      { text: 'Nobody phoned or visited the 510 who did not answer' }
    ] },

  { id: 'cn-tenants', use: 'check', tier: 'clean', setting: 'home', topic: 'a form for every flat on new heating', name: 'The heating survey',
    text: "A landlord pushed a form under the door of each of the 150 flats in a building, about the new heating. 30 forms were sent back, and 27 said they were satisfied. The landlord's notice says: 'Nine in ten tenants are satisfied with the new heating.'",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['30 forms were sent back', 'Nine in ten tenants are satisfied with the new heating'], A1: ['pushed a form under the door of each of the 150 flats', '30 forms were sent back'] },
    reason: { S1: 'The notice speaks for "tenants", all 150 of them, but the figure comes from 30 forms: {cue:S1}. The other 120 tenants are not in it.',
              A1: 'Everyone on a known list, the 150 flats, was asked: {cue:A1}. 30 is 20 in every 100 of the flats, and nothing is said about the other 120. A tenant who is cross about the heating is likelier to post a form than one who has no complaint.' } },

  /* ---------- The look-alike with the second name: the same school, two ways in ---------- */
  { id: 'cn-homework-mailed', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a homework survey emailed to every family', name: 'The homework survey, the emails',
    text: "A school emailed a survey to each of its 1,200 families by name: 'Is there too much homework?' 240 families replied, and 204 said yes. The school did nothing to hear from the other 960. The principal says: 'Parents say there is too much homework: 85 in every 100.'",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['240 families replied, and 204 said yes', 'Parents say there is too much homework'], A1: ['emailed a survey to each of its 1,200 families by name', 'did nothing to hear from the other 960'] } },

  /* ---------- The look-alike with the claim that holds: the same list, with and without a follow-up ---------- */
  { id: 'cn-pool-mailed', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a swimming pool questionnaire with no follow-up', name: 'The swimming pool, no follow-up',
    text: "A town swimming pool mailed a questionnaire to the 1,500 households on its members' list: 'Should the pool open at 6 a.m. on weekdays?' 150 replied, and 108 said yes. The pool did nothing to reach the other 1,350. Its notice says: 'Most members want a 6 a.m. opening.'",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['150 replied, and 108 said yes', 'Most members want a 6 a.m. opening'], A1: ['mailed a questionnaire to the 1,500 households', 'did nothing to reach the other 1,350'] } },

  { id: 'cn-pool-followed', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a swimming pool questionnaire with a follow-up', name: 'The swimming pool, with a follow-up',
    text: "A town swimming pool mailed a questionnaire to the 1,500 households on its members' list: 'Should the pool open at 6 a.m. on weekdays?' It then rang every household that had not replied, and in the end 1,350 of the 1,500 gave an answer. 972 said yes. Its notice says: 'Most households on our members' list want a 6 a.m. opening: 72 in every 100.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'rang every household that had not replied', H1: "Most households on our members' list want a 6 a.m. opening" } },

  /* ---------- The look-alike with the fourth name: a few replies from a long list ---------- */
  { id: 'cn-staff-twelve-replies', use: 'teach', tier: 'clean', setting: 'work', topic: 'a cafeteria survey with twelve replies', name: 'The cafeteria survey, twelve replies',
    text: "A catering company emailed all 800 of its office staff a survey about the cafeteria. 12 replied, and 9 said they like the food. The cafeteria manager says: 'Three in four of our staff like the food.' Nobody followed up with the other 788.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['12 replied, and 9 said they like the food', 'Three in four of our staff like the food'], A1: ['emailed all 800 of its office staff', 'Nobody followed up with the other 788'] } }
]);
