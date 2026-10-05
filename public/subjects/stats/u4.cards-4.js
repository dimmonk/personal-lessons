// Statistical Claims, Unit Four, part two (second half): what the third name is like, its three look-alike pairs, and the exception
// that has the two kinds of count in it.

FC.cards('stats', 'u4', [

  { id: 'portrait-detection', kind: 'portrait', outcome: 'detection',
    link: 'What you point to is more effort put into finding. Here is the rest of the picture.',
    typical: [
      'The figure counts what was found, and not what exists: diagnoses, tickets, reports, sightings, arrests, violations. What exists is larger than what is found, and the gap is bigger when less is looked for.',
      'In the account, or just behind it, something increased the looking: more tests, more cameras, more inspectors, more hours, a screening van, a campaign, a new law that makes people look or report.',
      'The count rises with the looking. The best check is the share found among those looked at: 2 in every 100 and then 1.6, 3 in every 100 at each camera, 2.1 violations for every inspection. If that stays level, the rise is the looking.',
      'It works in reverse too. When looking is cut, the count falls, and the fall is read as less of the problem. A city that halves its inspections will find about half as many violations.',
      'The rise is usually read as more of the bad thing, and the headline wants you to worry: "tripled", "surged", "epidemic".',
      'No one has to be paid on the count, and the counting itself has not changed. It is done in the same way; it is done more.'
    ],
    not: [
      'More found is not always more looking. If the same people were examined in the same way in both years and more were found, the figure rose because the real thing rose. The name needs the extra effort to be in the account.',
      'And the name is not a change in counting. The definition and the tool have to be what they were, so that the only thing that moved is how much was looked at.'
    ],
    wild: ['"Diagnoses have tripled since the program began."', '"Reports are up 200% since the hotline opened."', '"We are finding more than ever."', '"Sightings are at an all-time high."', '"The number of arrests surged."'],
    self: 'In your own life it is the first time you check something carefully. You go through your card statement line by line and find mistakes you would never have seen; you walk through the house with a flashlight and find cracks that were always there.',
    ask: '"How much looking was there at each end, and what share of the ones looked at had it?"',
    act: [
      'First ask how many were looked at, tested or checked at each end, and not only how many were found.',
      'Divide: the number found by the number looked at. A rise in the count with a level share means that only the looking changed.',
      'Look for a count that does not depend on looking, such as deaths, hospital stays, injuries that sent a worker home or tracks in the snow, and see whether it moved too.',
      'Until you have, read the claim as "more were found" and not as "more is happening".'
    ] },

  { id: 'check-detection', kind: 'check', after: 'detection',
    case: 'meas-essays',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule', 'looked'] } },

  /* ---------- The three look-alike pairs of the third name ---------- */
  { id: 'look-detection-real', kind: 'lookalike', ledger: 'detection~meas_ok',
    link: 'You have now met all three ways. Here is the third one again beside a claim that holds.',
    cases: ['meas-birds-more', 'meas-birds-same'],
    instruction: 'Both claims are about the same lake and a count of bird species that rose. Compare one thing: how much searching went into the count at each end.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-birds-same' },
    difference: [
      'In Case A the number of species recorded rose from 12 to 31, and the claim reads it as more kinds of bird living at the lake. In the first year four volunteers searched for 10 hours a month in all, and in the second year fifteen searched for 60 hours a month in all. The searching grew sixfold (60 ÷ 10 = 6) and the count grew 2.6 times. The first answer is {a:S1.measure}, and its second is {a:M1.looked}: the case is {o:detection}.',
      'In Case B the same four volunteers searched the same stretch of shore for the same 10 hours a month in both years, on the same days. The searching did not change, so nothing but the birds could move the count from 12 to 15. Every part holds, so the first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: the claim is a sound one, {plain:meas_ok}.',
      'Both claims show a rise, and both are true as counts. One was made with six times the searching, and the other with the same searching.'
    ] },

  { id: 'look-proxy-detection', kind: 'lookalike', ledger: 'proxy~detection',
    link: 'The first and third names can also be taken for each other. In both, more effort went into something, and a count rose. This card shows what the effort went into.',
    cases: ['meas-store-guards', 'meas-store-cameras'],
    instruction: 'Both claims come from the same department store, and in both the logged incidents tripled, from 40 to 120 a month. Compare one thing: what the extra effort went into. Was it work on the figure itself, or the finding of what the figure counts?',
    prompt: { kind: 'which', option: 'M1.looked', answer: 'meas-store-cameras' },
    difference: [
      'In Case A each guard is paid $5 for every incident logged and decides what is worth logging. The entries added are a dropped bag or a customer asking where to go. The effort went into the figure: logged incidents rose by 80 (120 − 40 = 80), and losses found at the monthly stock count stayed at $4,000. The second answer is {a:M1.pushed}, and the case is {o:proxy}.',
      'In Case B the guards are paid a flat wage, and 20 cameras show parts of the store they could never see before. The new entries are shoplifters who were already there. The effort went into finding what the figure counts, and nobody gains from the count. The second answer is {a:M1.looked}, and the case is {o:detection}.',
      'Both are a rise in logged incidents that the manager reads as a crime wave. What differs is where the effort went, and who gains: in A, the people who make the figure gain from a higher one; in B, nobody does.'
    ] },

  { id: 'look-defshift-detection', kind: 'lookalike', ledger: 'defshift~detection',
    link: 'The last pair that can be taken for each other is the second name and the third. In both, a count of what was found rose and the people did not change. This card shows what separates them.',
    cases: ['meas-lab-analyzer', 'meas-lab-more'],
    instruction: 'Both claims come from the same lab and give the same figure: vitamin D deficiency "tripled", from 20 people found to 60. Compare one thing: whether what counts as a find was decided by a different tool, or by the same tool used on more people.',
    prompt: { kind: 'which', option: 'M1.looked', answer: 'meas-lab-more' },
    difference: [
      'In Case A the lab tested 1,000 people in each year and replaced its analyzer in March with a new one that reads about 4 points lower on the same blood. A person is called deficient below 20, so a reading 4 points lower puts more people under the line. The 1,000 tested last year gave 20 found; the 1,000 tested this year gave 60. What counts as a find changed with the tool. The second answer is {a:M1.newrule}, and the case is {o:defshift}.',
      'In Case B the lab used the same analyzer and the same line of 20 for five years, and tested 3,000 people this year instead of 1,000. That is 2 found in every 100 tested in both years: 20 in 1,000 and 60 in 3,000. The tool and the line are the same, and there was more testing. The second answer is {a:M1.looked}, and the case is {o:detection}.',
      'Both count the same deficiency and both triple. In A the tool changed and the number tested did not. In B the number tested changed and the tool did not.'
    ] },

  /* ---------- The exception: more counted, and no more looking ---------- */
  { id: 'exc-counter', kind: 'exception', looksLike: 'detection', is: 'defshift', ledger: 'defshift~detection',
    h: 'More counted, and no more looking',
    link: 'The last card separated the pair with two tidy claims. Real claims are less tidy: a new machine finds more of something than the old one did, and that feels exactly like more looking. This card shows one.',
    case: 'meas-door-counter',
    setup: 'A library says visits rose 40%, and more are counted because a new door sensor picks up what a clicker did not. A count that finds more, with new equipment, is what {o:detection} usually looks like. Yet this claim is {o:defshift}.',
    prompt: { kind: 'phrase', answer: 'In January it replaced the clicker its staff pressed for each adult who came in with a door sensor that counts everything passing through, including children carried in arms, staff and delivery drivers' },
    because: [
      'Ask what changed: how much effort went into counting, or what the count counts. The library is open the same hours, has done no advertising and has the same door. Nobody put more effort into finding visitors. What changed is the instrument. The clicker counted adults who came in. The sensor counts everything that passes through, including children carried in arms, staff and delivery drivers.',
      'On the day it was installed the staff clicked 400 adults while the sensor counted 560, and 560 ÷ 400 = 1.4. The "40% more visits" is exactly the gap between the two instruments, with no more people coming. The count rose because a different tool decides what counts as a visit.',
      'So this is the second name: {needs:defshift}. The extra count did not come from looking harder; it came from counting more kinds of thing.'
    ],
    take: 'In real life a new tool and more looking often arrive together: a new test is brought in and more people are tested with it. Nothing in the questions chooses between the two, so every claim in this unit says which one it shows. When you meet a real claim that shows both, say so and name both, instead of choosing one.' }
]);
