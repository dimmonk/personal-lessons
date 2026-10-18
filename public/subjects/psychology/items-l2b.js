// Psychology, lesson 2b, anchors and hindsight: the worked story and the stories of the practice and the check. NOT in the owner's course: a practical
// addition from judgment research. Anchoring (a first number, even an arbitrary one, pulls the estimate: Tversky and Kahneman 1974; it brings to mind
// the reasons that fit it: Strack and Mussweiler 1997; it moves experts too: Northcraft and Neale 1987) is set against a fair reference price the facts
// back and against an estimate made first; hindsight ("I knew it all along": Fischhoff 1975; with its close relative, a decision judged only by how it
// turned out: Baron and Hershey 1988) is set against a prediction recorded beforehand and against criticism the facts of the day already backed.
// Twins share one sentence form, so the facts decide, not the wording. The response is asked only in the worked story and two stories where it is a
// real choice. Three stories of the names from lesson 2 (strand self-justification) are mixed in, offering this lesson's one list. All stories are
// invented and describe no real person. The stories not used in a lesson wait for the review.
(() => {
  const A = 'anchors-hindsight', J = 'self-justification';
  const C = spec => psyCase({ strand: A, names: PSY_NAMES.l2b, acts: PSY_ACTS.l2b, ...spec });
  const R = spec => psyCase({ strand: J, names: PSY_NAMES.l2b, ...spec });
  FC.items('psychology', [
    // ----- the worked story: name, then response -----
    C({ id: 'w2b-salary', story: 'Before her interview, Renata looked up the pay for the job and found $70,000 to $85,000 posted by four employers in town. The recruiter opened with, "We usually start people at $52,000." Renata had planned to say $75,000. She said, "Could you do $58,000?" and was pleased when they agreed.',
      asks: { name: 'anchoring', act: 'own-first' },
      steps: [
        { id: 'name', does: 'Check the telltale signs, then name it.', working: 'She is one person judging one number, so the menu fits: a name for a mind talking itself into something, ordinary, or too little to tell. The signs: she had her own facts, $70,000 to $85,000. Then a first number arrived, and the figure she named landed just above it, far below her facts. Question 3, what it does for her: taking their number spares her judging from scratch. Question 4, the look-alike: a fair reference price would be backed by facts, and here her facts say the opposite. Anchoring. Question 5, what would prove it wrong: the posted pay really being near $52,000.', ask: 'name' },
        { id: 'act', does: 'Pick the response that fits.', working: 'The pull came from hearing their number before she had fixed hers. So: make your own estimate from the facts before you hear theirs, write it down, and name it first when you can.', ask: 'act' }],
      reason: 'Her facts said $70,000 to $85,000, yet the figure she named sat just above the recruiter\'s first number. Anchoring: make your own estimate from the facts before you hear theirs, and name it first.' }),

    // ----- set 1: each name beside its fair twin, the same sentences, different facts -----
    C({ id: 'h2b-jacket', story: 'Dina had meant to spend about $50 on a plain jacket. At the mall she saw one tagged "Was $200, now $99." She bought it and told her sister she had saved $101.',
      asks: { name: 'anchoring' },
      reason: 'Her own figure was $50; the old price of $200, with nothing shown to back it, made $99 feel like a saving. Anchoring. Question 5: it would be wrong if she had checked and the jacket really sold for $200 elsewhere.' }),
    C({ id: 'h2b-limit', story: 'Nell had decided $50 was her top for a plain jacket. At the mall she saw one tagged "Was $200, now $99." She put it back and bought one for $45 at the next store.',
      asks: { name: 'ordinary' },
      reason: 'The same tag, but her own figure was fixed before she saw it, and she stayed with it. That is the response to anchoring at work, so nothing needs a name.' }),
    C({ id: 'h2b-picnic', story: 'It stormed during the church picnic. "I knew it would be rained out," Beth said afterward. That morning she had told everyone the sky looked fine.',
      asks: { name: 'hindsight' },
      reason: 'Her own words that morning say she expected fine weather; the storm made it feel known. Hindsight. Question 5: a record from before the picnic would prove this read wrong.' }),
    C({ id: 'h2b-forecast', story: 'It stormed during the church picnic. "I knew it would be rained out," Beth said afterward. The night before she had emailed everyone, "Forecast says 80% storms; bring umbrellas."',
      asks: { name: 'ordinary' },
      reason: 'The same words, but her email was written before the storm. A prediction recorded beforehand is foresight, not hindsight.' }),
    C({ id: 'h2b-furnace', story: 'The office manager approved a $5,000 repair on the old furnace after two technicians said the rest of it was sound. In January it failed for good. "That furnace was obviously done," said Gus. "Five grand thrown away."',
      asks: { name: 'hindsight', act: 'then-not-now' },
      reason: 'On the day, two technicians said the furnace was sound; only the ending makes it look obvious. Hindsight: the choice is judged by how it turned out. Judge it by what could be known then.' }),
    C({ id: 'h2b-warned', story: 'The office manager approved a $5,000 repair on the old furnace after two technicians said the rest of it was worn out and would fail within a year. In January it failed for good. "That furnace was obviously done," said Rory. "Five grand thrown away."',
      asks: { name: 'ordinary' },
      reason: 'The same words, but here the technicians said so before the money was spent. Criticism that the facts of the day already backed is fair, not hindsight. Question 4 decided it: what could be known then.' }),

    // ----- set 2: all the names, shuffled, with three from before -----
    C({ id: 'h2b-sprint', story: 'Farah asked her team how long the app redesign would take. The first to speak said six months. The other three said five, six and seven. Afterward two of them showed her the plans they had sketched the night before: both came to about three months, and neither had padded or trimmed the guess they said aloud.',
      asks: { name: 'anchoring' },
      reason: 'Their own plans said three months, but every guess clustered around the first one said aloud. Anchoring, from a colleague\'s number instead of a price. The fix: everyone writes a figure down before anyone speaks.' }),
    C({ id: 'h2b-riddle', story: 'Otis worked on a riddle for ten minutes and then gave up. When his niece told him the answer, he laughed. "That is so easy," he said. "I would have gotten it in a second."',
      asks: { name: 'hindsight' },
      reason: 'Knowing the answer makes it feel easy, though he could not find it for ten minutes. Hindsight: the ending rewrites what he could see before it.' }),
    C({ id: 'h2b-flop', story: 'At a barbecue, Thad told his neighbor that the block party two weeks before had been a flop, with half the usual turnout. "I called that one," he said.',
      asks: { name: 'too-little' },
      need: 'Whether Thad said anything before the party, and what: a warning he gave beforehand would be foresight; nothing said then would mean hindsight.',
      reason: '"I called that one" could be a real prediction or a claim made only after. The story has no record of what he said before, so there is too little to tell. Find out more before naming it.' }),
    C({ id: 'h2b-bread', story: 'The bakery ran out of bread by noon on Saturday. Max had ordered what the last six Saturdays of sales called for. A street fair two blocks over had brought twice the usual crowd. He wrote "street fair: order double" on next year\'s calendar.',
      asks: { name: 'ordinary' },
      reason: 'He judges the order by what the sales showed when he placed it, and learns from the surprise without pretending he saw it coming. Ordinary: nothing to fix.' }),
    R({ id: 'h2b-flight', story: 'Ingrid tells everyone she does not fly on short trips, for the climate. On Friday she flew to a city four hours away by train. On Sunday she told her roommate, "One flight is nothing next to what the airlines burn anyway."',
      asks: { name: 'dissonance' },
      reason: 'The act came first and clashes with her belief; the excuse came after, and both the belief and the habit stay. Dissonance, one of the names from before. Its response: say the clash plainly, then change the act or the belief.' }),
    R({ id: 'h2b-coffee', story: 'Philippa has long believed coffee is bad for the heart. Her book club passed around two studies, each of about 200 people. She called the one that agreed with her "solid", and dismissed the other as "too small to mean anything."',
      asks: { name: 'confirmation' },
      reason: 'Two studies of the same size, and only the one against her belief is "too small". Evidence held to two standards is confirmation bias, a name from before. Its response: hold both sides to the same standard.' }),
    C({ id: 'h2b-tip', story: 'The card reader at the coffee counter offered tips of 25%, 30% and 35%. Ozzie usually leaves about 15% at a counter. He tapped 25%.',
      asks: { name: 'anchoring' },
      reason: 'The screen\'s first numbers pulled him above his own usual figure. Anchoring. The fix: decide his tip before the screen appears.' }),
    C({ id: 'h2b-airport', story: 'Pia took the highway to the airport because the traffic app showed it clear. Ten minutes later a crash closed it, and she missed her flight. "I am such an idiot," she told her sister. "I should have known to take the back roads."',
      asks: { name: 'hindsight' },
      reason: 'The app showed the highway clear when she chose it; only the crash makes the back roads look obvious. Hindsight, turned on herself. Judge her choice by what she could see then.' }),

    // ----- the check: eight new stories -----
    C({ id: 'k2b-listing', story: 'The seller\'s sheet listed the house at $489,000. Doreen, an agent for twenty years, walked through it and valued it at $475,000. Six houses like it on the same street had sold this year for $380,000 to $410,000; the list was in a folder she had not opened.',
      asks: { name: 'anchoring' },
      reason: 'Her value sits just under the listing price, far above the street\'s real sales. Anchoring, and experience does not protect against it. A fair reference price would be backed by those sales.' }),
    C({ id: 'k2b-pumpkin', story: 'At the county fair, Bev walked up to guess the giant pumpkin\'s weight, thinking about 300 pounds. On the line above hers, someone who signed as "Big Al" had written 1,000 pounds. She wrote 650.',
      asks: { name: 'anchoring' },
      reason: 'A stranger\'s number, backed by nothing, pulled her guess from 300 to 650. Anchoring, even from a number she had no reason to trust.' }),
    C({ id: 'k2b-brakes', story: 'Alma had guessed her brake job would cost about $300. The mechanic said $900, then showed her the scored rotors, the worn calipers and the parts prices on his screen, which matched what she found online. She paid it.',
      asks: { name: 'ordinary' },
      reason: 'Her estimate moved, but because the number was backed by facts she could see and check. That is a fair reference price, not an anchor.' }),
    C({ id: 'k2b-breach', story: 'After a data breach, investigators who knew the attacker\'s address found it in one line of a ten-thousand-line log within minutes. "It was right there in plain sight," the manager told the board. Before the breach, no person or tool had flagged that line.',
      asks: { name: 'hindsight', act: 'then-not-now' },
      reason: 'The line is plain only to someone who already knows what to look for. Hindsight: knowing the answer makes the sign look obvious. Judge the team by what it could have seen without the answer.' }),
    C({ id: 'k2b-hiker', story: 'A news story said a hiker was rescued after a sudden storm on a trail rated "easy", on a day the forecast showed clear skies. Under it, Clint commented, "Obviously a storm was coming. Who goes up there without checking the weather?"',
      asks: { name: 'hindsight' },
      reason: 'The forecast that day said clear skies; only the storm makes it look obvious. Hindsight about a stranger\'s choice. It would be fair criticism if the forecast had warned of storms.' }),
    C({ id: 'k2b-closed', story: 'When her brother\'s restaurant closed, Kit\'s friends asked if she had seen it coming. "No," she said. "I ate there every week and thought it was doing fine. I only heard about the rent hike last month."',
      asks: { name: 'ordinary' },
      reason: 'She knows the ending and does not rewrite the past: she says plainly what she knew then. No slant to name. Ordinary.' }),
    C({ id: 'k2b-suv', story: 'Zora paid $14,000 for a used SUV after the seller started at $16,000. It had 60,000 miles and one owner. At dinner she told her brother she had got a good deal.',
      asks: { name: 'too-little' },
      need: 'What she thought the SUV was worth before she heard the seller\'s number, and what similar SUVs sell for.',
      reason: '"A good deal" could be a pull from the seller\'s $16,000 or a price she checked against real sales. The story shows neither her own estimate nor the market, so there is too little to tell.' }),
    R({ id: 'k2b-office', story: 'Vic wanted the corner office. When the team agreed to hand out offices by years on the team, he spent an evening working out why his two years as an intern should count, and brought the numbers to the meeting.',
      asks: { name: 'motivated' },
      reason: 'He wanted the office first, then built the argument to reach it. The answer came before the looking: motivated reasoning, a name from before.' }),

    // ----- held back for the review on later days -----
    C({ id: 'r2b-wrist', story: 'Lou\'s son broke his wrist at a trampoline park that had passed every safety inspection in ten years. Lou\'s mother said, "Those places are obviously dangerous. What were you thinking?"',
      asks: { name: 'hindsight' },
      reason: 'On the day, the park\'s record said it was safe; only the injury makes the danger look obvious. Hindsight. Judge the choice by what could be known then.' }),
    C({ id: 'r2b-boat', story: 'Wei had settled on about $6,500 for a used boat from the listings before he called. The seller opened at $9,000. Wei said $6,500, and they shook on $6,800.',
      asks: { name: 'ordinary' },
      reason: 'He fixed his own figure from the facts first and ended near it. The response to anchoring at work; nothing to name.' }),
    C({ id: 'r2b-assessed', story: 'The county assessed Imelda\'s house at $310,000. She checked four sales on her street from this year, $300,000 to $320,000, and listed it at $315,000.',
      asks: { name: 'ordinary' },
      reason: 'The assessed value agrees with real sales she checked, so it is a fair reference price, not an anchor.' })
  ]);
})();
