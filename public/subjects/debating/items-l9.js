// Debating, lesson 9: checking your own side. One decision a question: a note you wrote sets its own test first ("I only count a report that asked 100 people") and then applies it
// to two sources; tap the line that stops using the test, or say every line keeps to it. The note is the lesson's own way of making the check you would run on yourself visible:
// write down the test you used on the side you doubt, then hold the side you favor to it. It is a check on consistency inside the note, so the answer is in the note and the facts
// given (Mercier and Sperber 2011, docs/research/debating.md, F3, read in full on 2026-10-21: people who disagree with a conclusion hunt for flaws in it and rate near-identical studies
// as better done when they agree with them; people judge arguments well when they have no axe to grind). The breaks favor the writer, so the answer is never "the line about the other
// side"; the lines that keep to the test include verdicts that go against the writer and verdicts that differ because the two sources really differ on the test. Whether to show your
// reasons to someone with nothing at stake is the lesson's own inference, untested, said so and not graded. The people and their notes are invented. Items a lesson does not name wait
// for the review.
(() => {
  const S = 'own-side';
  const REASON = {
    broken: 'The note states a test, then drops it for the source that backs the writer. In a much-cited test, people rated studies with almost the same method as better done when their conclusion matched the rater\'s own view, as a review of reasoning research reports. Holding the side you favor to the test you used on the side you doubt is the check.',
    same: 'Every line keeps to the test the note states. A source can pass or fail it, whichever side it favors, and two sources can get different verdicts when they differ on what the test measures. That is what holding both sides to one test looks like.'
  };
  // `breakId` is the line that stops using the note's own test (none: every line keeps to it); `cue` says what the facts and the lines show
  const X = (id, breakId, setup, lines, cue) => ({ id, strand: S, facets: { standard: breakId ? 'broken' : 'same' },
    blocks: [dbSetup(setup), dbEvenNote(breakId, ...lines)], asks: [dbEvenAsk(breakId)], deciding: breakId ? [breakId] : [], reason: `${cue} ${REASON[breakId ? 'broken' : 'same']}` });
  FC.items('debating', [
    // ----- the worked note -----
    { ...X('w9-note', 's3', 'You are for the four-day week, and you wrote this note to a friend about two reports. Report A says output fell and asked 40 workers at one office. Report B says output held and asked 45 workers at one office.', [
        ['s1', 'How I sort reports: I only count one that asked at least 100 people.'],
        ['s2', 'Report A (output fell) asked 40 people, so I am not counting it.'],
        ['s3', 'Report B (output held) asked 45 people, but it is a solid study, so I am counting it.'],
        ['s4', 'So the evidence I am counting says output held.']],
      'Report B asked 45 people, under the note\'s own 100, and the line counts it anyway.'),
      steps: [
        { id: 'test', does: 'Find the test the note states.', working: 'The first line: only count a report that asked at least 100 people.' },
        { id: 'hold', does: 'Hold each report to it.', working: 'Report A asked 40. Report B asked 45. Neither reaches 100, so the test puts both aside.', ask: 'same' },
        { id: 'drop', does: 'Find the line where the test changes.', working: '"But it is a solid study" is a new reason, used only for the report that backs the writer.' },
        { id: 'other', does: 'Ours, untested: show your reasons to someone with nothing riding on it.', working: 'Put it to a friend who does not care about the four-day week: which of your reasons is weakest?' }] },

    // ----- group 1 -----
    X('a9-pool', 's3', 'You are against closing the old pool. Study A (closing saves money) was paid for by the town council, which wants the pool closed. Study B (repairs are cheaper) was paid for by the Friends of the Pool, who want it kept open.', [
        ['s1', 'My rule: I do not trust a study paid for by a group that wants a particular answer.'],
        ['s2', 'Study A was paid for by the town council, which wants the pool closed, so I am throwing it out.'],
        ['s3', 'Study B was paid for by the Friends of the Pool, but they just wanted it done right, so I am keeping it.'],
        ['s4', 'So the numbers I trust say repairs are cheaper.']],
      'Both studies were paid for by groups that want an answer, and the line that keeps B says its group was only after the truth.'),
    X('a9-vape', 's3', 'You are for a ban on flavored vapes. Your friend is against it. Each of you has one story.', [
        ['s1', 'My rule: one person\'s story is not proof of anything.'],
        ['s2', 'My friend\'s neighbor quit smoking with vapes, but that is one person\'s story, so it proves nothing.'],
        ['s3', 'My cousin started on mint vapes at fifteen, and that shows what these flavors do to kids.'],
        ['s4', 'So I stay for the ban.']],
      'The note says one story proves nothing, and then the cousin\'s one story shows what the flavors do.'),
    X('a9-light', null, 'You are against the new stoplight on Maple. Report A says it cuts crashes and looked at one intersection for one year. Report B says it does not and looked at one intersection for one year.', [
        ['s1', 'I only count a report that looked at more than one intersection.'],
        ['s2', 'Report A looked at one intersection, so I am not counting it.'],
        ['s3', 'Report B looked at one intersection too, so I am not counting it either.'],
        ['s4', 'So I will wait for a bigger study.']],
      'Both reports looked at one intersection, and the note puts both aside.'),

    // ----- group 2 -----
    X('b9-soda', null, 'You are for the soda tax. Study A says sales fell after a tax and followed 12 cities for three years. Study B says sales did not fall and followed one city for six months.', [
        ['s1', 'I give more weight to a study that followed more places for longer.'],
        ['s2', 'Study A followed 12 cities for three years, so it counts for a lot.'],
        ['s3', 'Study B followed one city for six months, so it counts for little.'],
        ['s4', 'So I go with A.']],
      'A followed more places for longer than B, so giving A more weight keeps to the note\'s test even though A backs the writer.'),
    X('b9-bike', 's2', 'You are for the bike lane. Poll A says most residents oppose it and asked 300 residents by phone. Poll B says most favor it and asked 300 residents by phone.', [
        ['s1', 'I count a poll that asked at least 200 people.'],
        ['s2', 'Poll A asked 300 people, but phone polls miss people who work nights, so I am ignoring it.'],
        ['s3', 'Poll B asked 300 people, so I am counting it.'],
        ['s4', 'So most people favor the lane.']],
      'Both polls were by phone, and the phone objection is raised only against the poll that goes against the writer.'),
    X('b9-nurse', null, 'You are for the nurse staffing law. Report A says staffing laws raise costs and is from the hospital association. Report B says they lower costs and is from the nurses\' union.', [
        ['s1', 'I do not count a report from a group that gains from the answer.'],
        ['s2', 'The hospital association gains if there is no law, so I am not counting A.'],
        ['s3', 'The nurses\' union gains from the law, so I am not counting B either.'],
        ['s4', 'I will look for a report from neither.']],
      'The note puts both reports aside, the one that backs the writer included.'),
    X('b9-lunch', 's3', 'You are for the school-lunch program. Parent A told you it did nothing for her daughter. Parent B told you it helped his son.', [
        ['s1', 'One parent\'s story is not enough to judge a program.'],
        ['s2', 'Parent A says it did nothing for her daughter, which is just one story.'],
        ['s3', 'Parent B says it helped his son, so that settles it for me.'],
        ['s4', 'So I think the program works.']],
      'The note says one parent\'s story is not enough, and then one parent\'s story settles it.'),
    X('b9-toll', 's4', 'You are against the new toll road. Report A says it cuts commutes and was done in 2015 on a different highway. Report B says it does not and was done in 2015 on a different highway.', [
        ['s1', 'I do not count a report on a different road from ours.'],
        ['s2', 'Report A was on a different highway, so I am throwing it out.'],
        ['s3', 'Report B was on a different highway too.'],
        ['s4', 'The traffic there was the same as ours, so Report B settles it.']],
      'Both reports were on a different highway, and the last line counts B on a claim about traffic that the note never gave for A.'),

    // ----- the check: eight new notes, none shown in the practice -----
    X('c9-zone', 's3', 'You are against the new zoning for the corner lot. Study A favors it and surveyed 80 neighbors. Study B opposes it and surveyed 85 neighbors.', [
        ['s1', 'I only trust a survey of at least 200 people.'],
        ['s2', 'Study A surveyed 80, so I am skipping it.'],
        ['s3', 'Study B surveyed 85, which is close enough to count.'],
        ['s4', 'So the neighbors oppose it.']],
      'Both surveys fall short of 200, and 85 is counted as close enough while 80 is skipped.'),
    X('c9-hours', null, 'You are for the new library hours. Poll A favors earlier closing and asked 500 users. Poll B favors later opening and asked 480 users.', [
        ['s1', 'I count a poll that asked at least 400 users.'],
        ['s2', 'Poll A asked 500, so I count it.'],
        ['s3', 'Poll B asked 480, so I count it too.'],
        ['s4', 'Both tell me something, and they point different ways.']],
      'Both polls pass the note\'s 400, and both are counted.'),
    X('c9-leaf', 's3', 'You are for banning leaf blowers. Your neighbor is against it. His story: his blower cleared the street fast after a storm. Yours: a neighbor\'s blower woke your baby every Saturday.', [
        ['s1', 'A single story is not evidence either way.'],
        ['s2', 'His blower story is about one house, so it does not count.'],
        ['s3', 'My baby woke up at seven every Saturday, and that is the real cost of these things.'],
        ['s4', 'So I stay for the ban.']],
      'The note says a single story is not evidence, and then calls the baby\'s story the real cost.'),
    X('c9-vape', null, 'You are for banning flavored vapes. Study A says bans cut teen use and looked at two states for one year. Study B says they do not and looked at 20 states for five years.', [
        ['s1', 'I give more weight to a study with more states and more years.'],
        ['s2', 'Study A looked at two states for one year, so it counts for little.'],
        ['s3', 'Study B looked at 20 states for five years, so it counts for a lot.'],
        ['s4', 'So I have to accept that bans did not cut teen use.']],
      'B covers more states and more years than A, so weighting B more keeps to the test even though B goes against the writer.'),
    X('c9-stadium', 's4', 'You are for the new stadium. Report A says it loses money and was paid for by a neighborhood group that opposes it. Report B says it makes money and was paid for by the team.', [
        ['s1', 'I do not count a report paid for by a group that wants a particular answer.'],
        ['s2', 'Report A was paid for by a group that opposes the stadium, so I am not counting it.'],
        ['s3', 'Report B was paid for by the team.'],
        ['s4', 'The team just wants the numbers right, so Report B settles it.']],
      'The team wants a particular answer as much as the neighborhood group does, and the last line passes it.'),
    X('c9-camera', 's3', 'You are for the speed cameras. Study A says cameras cut crashes and looked at 30 intersections for two years. Study B says they did not and looked at 30 intersections for two years. Both counted only crashes with injuries.', [
        ['s1', 'I count a study of at least 20 intersections over at least a year.'],
        ['s2', 'Study A looked at 30 intersections for two years, so I am counting it.'],
        ['s3', 'Study B looked at 30 intersections for two years, but it only counted crashes with injuries, so I am setting it aside.'],
        ['s4', 'So cameras cut crashes.']],
      'Both studies counted only crashes with injuries, and that objection is used only against B.'),
    X('c9-post', null, 'You are against closing the post office. Letter A says it should close and comes from a man who has used it twice in ten years. Letter B says it should stay and comes from a woman who uses it every week.', [
        ['s1', 'I give more weight to someone who actually uses the service.'],
        ['s2', 'The writer of A has used it twice in ten years, so I give A less weight, though not none.'],
        ['s3', 'The writer of B uses it every week, so I give her more weight.'],
        ['s4', 'So the people who use it want it kept.']],
      'B\'s writer uses the post office far more than A\'s, so giving B more weight keeps to the test, and the "but" line still weighs A\'s writer less.'),
    X('c9-road', null, 'You are for the toll road. Report A says it cuts commutes and was done in 2015 on a highway like ours. Report B says it does not and was done in 2015 on a highway like ours.', [
        ['s1', 'I count a report done on a road like ours.'],
        ['s2', 'Report A was on a road like ours, so I count it.'],
        ['s3', 'Report B was on a road like ours, but it disagrees with A, and I still have to count it.'],
        ['s4', 'So the evidence points both ways.']],
      'Both reports were on a road like ours, and both are counted.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    X('r9-curfew', 's4', 'You are against the new curfew for teens. Report A says a curfew cut break-ins and covered two towns. Report B says it did not and covered two towns.', [
        ['s1', 'I only count a report that covered at least five towns.'],
        ['s2', 'Report A covered two towns, so it does not count.'],
        ['s3', 'Report B covered two towns too.'],
        ['s4', 'It is the one I trust, because it matches what I saw in my own town.']],
      'Both reports covered two towns, and the last line trusts B because it matches what the writer saw.'),
    X('r9-levy', 's3', 'You are for the library levy. Survey A says voters favor it and reached 400 voters by mail. Survey B says voters oppose it and reached 400 voters by mail.', [
        ['s1', 'I count a survey of at least 300 voters.'],
        ['s2', 'Survey A reached 400 voters, so I count it.'],
        ['s3', 'Survey B reached 400 voters, but mail surveys miss voters without a steady address, so I am setting it aside.'],
        ['s4', 'So voters favor the levy.']],
      'Both surveys went by mail, and the mail objection is raised only against the one that goes against the writer.'),
    X('r9-bus', null, 'You are for adding a bus line. Poll A says riders want it and asked 250 people at a bus stop. Poll B says residents oppose it and asked 250 people at their homes.', [
        ['s1', 'I count a poll that asked at least 200 people.'],
        ['s2', 'Poll A asked 250 people, so I count it.'],
        ['s3', 'Poll B asked 250 people, so I count it too.'],
        ['s4', 'Riders want it and residents do not, and I count both.']],
      'Both polls asked 250 people, and both are counted.')
  ]);
})();
