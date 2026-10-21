// Debating, lesson 7: which true experience to share. One decision a question: you hold a view on a moral or political question, the other person asks why, and three things that happened
// are on offer; pick the one the studies rank highest (Kubin et al. 2021, docs/research/debating.md, F6, read in full on 2026-10-21: Study 7, an experience about the issue earned more
// respect than facts and an unrelated experience earned no more than facts; Study 8, an experience with harm in it earned more than one without, and a relevant one without harm still
// beat facts). Study 9 (what happened to the person, to a relative, or something read about) gave only an overall test and three means in the main text, and its pairwise tests were not
// available, so who it happened to is taught as a pattern and never graded: within an item every option happened to the same person. The options differ in exactly the differences the
// studies compared pairwise (about the issue or not; harm or not; an experience or a fact), written to the same form and length; the one that is better on every difference is right, and
// the right one is sometimes not the most dramatic one (an unrelated disaster is a decoy) and is always on the teller's own side. The studies measured respect and put persuasion aside; the cases are moral or political disagreements, which is where the advantage was
// found. The people and their stories are invented. Items a lesson does not name wait for the review.
(() => {
  const S = 'true-experience';
  const TAIL = 'The studies measured respect and put persuasion aside.';
  const REASON = {
    issue: `In the studies, an experience unrelated to the issue earned no more respect than a fact did, and one about the issue with no harm in it earned less than one with harm. ${TAIL}`,
    harm: `In the studies, an experience about the issue earned more respect than facts, and one with harm in it earned more than one without. A statistic is a fact. ${TAIL}`,
    plain: `In the studies, an experience about the issue earned more respect than facts, even with no harm in it. ${TAIL}`
  };
  // an item: `tmpl` picks the reasoning, `facet` is what decided it; rows are [words, true | the slip of the wrong pick]; every option happened to the same person
  const E = (id, tmpl, facet, setup, lines, rows, cue) => ({ id, strand: S, facets: { experience: facet },
    blocks: [dbSetup(`${setup} You could tell any one of these three true things.`), dbTalk(...lines)], asks: [dbShareAsk(rows)], deciding: [], reason: `${cue} ${REASON[tmpl]}` });
  const U = 'chose-unrelated', H = 'chose-no-harm', T = 'chose-statistic';
  // the three shapes: about the issue and harm against no harm and against unrelated (one); an experience with no harm against two facts (two); harm against a fact and against no harm (three)
  FC.items('debating', [
    { ...E('w7-gina', 'issue', 'issue', 'Your coworker Gina is against raising the state minimum wage. You are for it, and you have brought it up twice this month.', [
        ['s1', 'Gina: "You keep bringing this up. Why do you care so much?"']], [
        ['The year you earned $7.25 an hour and skipped meals to cover rent.', true],
        ['The summer you earned $7.25 an hour and your manager let you pick your shifts.', H],
        ['The night your apartment building burned and you lost everything in it.', U]],
      'Skipping meals to cover rent is about pay and has harm in it; picking your shifts is about pay with no harm; the fire has harm but is not about pay.'),
      steps: [
        { id: 'issue', does: 'Cross out what is not about the issue.', working: 'The fire is a hard thing, but it has nothing to do with the minimum wage.' },
        { id: 'harm', does: 'Between the rest, pick the one with harm in it.', working: 'Skipping meals is harm. Picking your shifts is not.', ask: 'share' }] },

    // ----- group 1 -----
    E('a7-hal', 'issue', 'issue', 'Your neighbor Hal is against a law that would make gun owners lock up their guns at home. You are for it.', [
        ['s1', 'Hal: "Why do you want this law so badly?"']], [
        ['The day you were hurt when a friend\'s unlocked gun went off in his garage.', true],
        ['The day you took a gun safety class and learned to lock a gun away.', H],
        ['The day you broke your ankle on the ice outside that same garage.', U]],
      'Being hurt by an unlocked gun is about the issue and has harm in it; the safety class is about guns with no harm; the broken ankle has harm but is not about guns.'),
    E('a7-rob', 'plain', 'story', 'Your neighbor Rob is against rent limits. You are for them.', [
        ['s1', 'Rob: "Why do you care about this?"']], [
        ['The five years you rented one apartment and could plan around your rent.', true],
        ['What a city report found about how much rents rose across ten years in neighborhoods like yours.', T],
        ['A county survey of how many renters in the area moved last year because of the rent.', T]],
      'Five years of a steady rent is about renting and has no harm in it; the other two are reports, which are facts.'),
    E('a7-ines', 'harm', 'harm', 'Your coworker Ines is against giving driver\'s licenses to people without papers. You are for it.', [
        ['s1', 'Ines: "Why does this matter so much to you?"']], [
        ['The year your uncle, driving without a license, was stopped and lost his car and his job.', true],
        ['The year your uncle, driving without a license, drove carefully and never had a problem.', H],
        ['A state study of how many drivers without licenses are stopped each year across the state.', T]],
      'Your uncle\'s stop is about the issue and has harm in it; his careful driving has no harm; the state study is a fact.'),

    // ----- group 2 -----
    E('b7-lena', 'issue', 'issue', 'Your coworker Lena is against paid sick leave. You are for it.', [
        ['s1', 'Lena: "Nobody is making you take it. Why push it on everyone?"']], [
        ['The week your sister, with no sick days, went to work with pneumonia and landed in the hospital.', true],
        ['The week your sister, with paid sick days, stayed home with a cold and was back at work on Monday.', H],
        ['The week your sister lost her bike to a thief and could not get to her job on time.', U]],
      'Your sister\'s pneumonia is about sick days and has harm in it; her cold at home has no harm; the stolen bike is not about sick days.'),
    E('b7-cal', 'harm', 'harm', 'Your neighbor Cal is against closing the old coal plant on the edge of town. You are for closing it.', [
        ['s1', 'Cal: "Closing it kills jobs. What have you got against it?"']], [
        ['The two winters you spent on an inhaler after the air got bad near the plant.', true],
        ['The afternoon you drove past the plant and saw its smoke from a mile away.', H],
        ['The state\'s count of how many days a year the air near the plant is rated unhealthy.', T]],
      'The winters on an inhaler are about the plant and have harm to you in them; seeing the smoke is about the plant with no harm; the state\'s count is a fact.'),
    E('b7-owen', 'plain', 'story', 'Your uncle Owen is against a law that caps hospital bills. You are for it.', [
        ['s1', 'Owen: "Why does this matter to you?"']], [
        ['The time you called three hospitals about the same scan and got three different prices.', true],
        ['A study of how hospital bills for the same operation differ from one hospital to the next in the state.', T],
        ['A county report on how many families in the county carry medical debt from hospital bills.', T]],
      'Calling three hospitals and getting three prices is about hospital bills and has no harm in it; the other two are reports, which are facts.'),
    E('b7-marcus', 'issue', 'issue', 'Your friend Marcus is against ending cash bail. You are for ending it.', [
        ['s1', 'Marcus: "What makes you so sure?"']], [
        ['The eleven days your brother sat in jail over a fine he could not pay, and lost his job.', true],
        ['The day your brother paid his bail in cash and walked out the same afternoon, free to go home.', H],
        ['The day your brother lost his job when his company shut down and laid off the whole shift.', U]],
      'Eleven days in jail over a fine is about bail and has harm in it; paying bail and walking out has no harm; losing a job when the company closed is not about bail.'),
    E('b7-nan', 'harm', 'harm', 'Your aunt Nan is against free school lunches for everyone. You are for them.', [
        ['s1', 'Nan: "Why do you care about this?"']], [
        ['The year you went hungry at school because your family could not pay the lunch fee.', true],
        ['The year the school lunch line was the one place you saw all your friends at once.', H],
        ['A district report on how many students skip lunch in a typical week across all schools.', T]],
      'Going hungry over the fee is about school lunches and has harm in it; the lunch line has no harm; the district report is a fact.'),

    // ----- the check: eight new talks, none shown in the practice -----
    E('c7-jay', 'issue', 'issue', 'Your coworker Jay is against requiring body cameras on police. You are for it.', [
        ['s1', 'Jay: "Why are you so keen on this?"']], [
        ['The night officers shoved your brother during a stop, and with no video nobody could say what happened.', true],
        ['The day an officer stopped your brother, was polite, and let him go with a warning.', H],
        ['The night your brother\'s bike was stolen from the porch while the whole family slept inside.', U]],
      'The shove during a stop, with no video, is about police stops and has harm in it; the polite warning has no harm; the stolen bike is not about police.'),
    E('c7-bill', 'harm', 'harm', 'Your neighbor Bill is against a law that would cap hospital bills. You are for it.', [
        ['s1', 'Bill: "Why does it matter to you?"']], [
        ['The year you got a $9,000 bill for one night in the ER and skipped rent to pay it.', true],
        ['The year you compared the price lists of two ERs and saw the same visit cost twice as much at one.', H],
        ['A state report on the average price of one night in an ER across the state.', T]],
      'The $9,000 bill is about hospital bills and has harm to you in it; comparing price lists has no harm; the state report is a fact.'),
    E('c7-dale', 'issue', 'issue', 'Your friend Dale is against overtime pay for farm workers. You are for it.', [
        ['s1', 'Dale: "Farms are not factories. Why change the rules?"']], [
        ['The harvest your father worked sixteen-hour days for flat pay and collapsed in the field.', true],
        ['The harvest your father kept a notebook of the sixteen-hour days he worked for flat pay.', H],
        ['The harvest your father lost half his crop to hail and had to borrow against the farm.', U]],
      'Your father\'s collapse in the field is about farm pay and has harm in it; his notebook has no harm; losing the crop to hail is not about pay.'),
    E('c7-wes', 'plain', 'story', 'Your neighbor Wes is against a tax on sugary drinks. You are for it.', [
        ['s1', 'Wes: "What makes you back this?"']], [
        ['The summer the corner store raised its soda prices and your kids drank half as much of it.', true],
        ['A study of how a sugary-drink tax changed what stores sold in another city over three years.', T],
        ['A county survey of how many teenagers in the county drink soda every single day.', T]],
      'The corner store\'s price rise is about soda prices and has no harm in it; the other two are reports, which are facts.'),
    E('c7-gil', 'harm', 'harm', 'Your neighbor Gil is against capping payday loan rates. You are for a cap.', [
        ['s1', 'Gil: "People choose those loans. What is your problem with them?"']], [
        ['The loan you took for $400 that grew to $1,100 before you could pay it off.', true],
        ['The day you walked past a payday lender and noticed its sign in six languages.', H],
        ['A state report on the average yearly rate that payday lenders charge across the whole state.', T]],
      'The $400 loan that grew to $1,100 is about payday loans and has harm to you in it; the sign has no harm; the state report is a fact.'),
    E('c7-pia', 'harm', 'harm', 'Your friend Pia is for rent limits. You are against them, as a small landlord.', [
        ['s1', 'Pia: "Why are you so against a limit?"']], [
        ['The year a rent limit forced you to sell the duplex your mother left you.', true],
        ['The year you rented the duplex to a tenant who paid on time every month.', H],
        ['A study of how rent limits changed the number of apartments for rent in other cities.', T]],
      'Having to sell the duplex is about a rent limit and has harm to you in it; the good tenant has no harm; the study is a fact.'),
    E('c7-sue', 'issue', 'issue', 'Your cousin Sue is against in-state college tuition for undocumented students. You are for it.', [
        ['s1', 'Sue: "Why do you care about this?"']], [
        ['The year your cousin graduated first in her class and could not pay the out-of-state price.', true],
        ['The year your cousin applied for in-state tuition and the whole form took ten minutes.', H],
        ['The year your cousin broke her wrist playing soccer and missed the whole season.', U]],
      'The cousin who could not pay the out-of-state price is about the tuition and has harm in it; the ten-minute form has no harm; the broken wrist is not about tuition.'),
    E('c7-kim', 'plain', 'story', 'Your friend Kim is against a law that limits how many patients a nurse can have. You are for it.', [
        ['s1', 'Kim: "Why does this matter to you?"']], [
        ['The night you had eight patients and two other nurses, and time to sit with each one.', true],
        ['A state study of how nurse staffing relates to patient falls on hospital floors.', T],
        ['A survey of how many nurses leave the job each year, and why they leave.', T]],
      'Eight patients with time for each one is about nurse staffing and has no harm in it; the other two are reports, which are facts.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    E('r7-al', 'issue', 'issue', 'Your coworker Al is against a law that gives workers two weeks\' notice before a layoff. You are for it.', [
        ['s1', 'Al: "Why do you care?"']], [
        ['The Friday your mother was told her job ended that day, and she could not cover the rent.', true],
        ['The Friday your mother was told her job was safe for another year, with a raise.', H],
        ['The Friday your mother\'s car would not start and she was late to the bus stop.', U]],
      'Being told a job ends that day is about a layoff without notice and has harm in it; hearing the job was safe has no harm; the car is not about layoffs.'),
    E('r7-ruth', 'harm', 'harm', 'Your neighbor Ruth is against a law that would require lead tests in rental homes. You are for it.', [
        ['s1', 'Ruth: "Why make landlords do that?"']], [
        ['The year your nephew was found to have lead in his blood from the paint in his apartment.', true],
        ['The year your nephew\'s apartment was tested for lead and passed with no problem at all.', H],
        ['A county report on how many rental homes in the county have lead paint in them.', T]],
      'Your nephew\'s lead is about lead in rentals and has harm in it; the passed test has no harm; the county report is a fact.'),
    E('r7-tom', 'plain', 'story', 'Your coworker Tom is against a limit on how many hours a truck driver can drive. You are for a limit.', [
        ['s1', 'Tom: "What do you know about it?"']], [
        ['The morning you drove the last hour of a 14-hour run and could not remember the miles.', true],
        ['A federal report on how many crashes involve drivers who are over their hours.', T],
        ['A survey of how many drivers say they feel rested on long runs.', T]],
      'Not remembering the miles of a 14-hour run is about long hours and has no harm in it; the other two are reports, which are facts.')
  ]);
})();
