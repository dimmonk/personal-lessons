// Civics, Unit Five: drill cases for stages one, two and four of the ramp (the key's answer shown, one question alone, the
// first answer given). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('civics', 'u5', [

  /* ---------- Stage one: the answers are shown, the learner gives the name ---------- */
  { id: 'name-review-1', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a Sunday service in a county park',
    text: 'A county law bans any group from holding an outdoor service on public land. Pastor Reyes was fined $150 for leading a Sunday service in a county park. He asked a judge to cancel the fine, telling the judge that the law takes away the right to worship.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He asked a judge to cancel the fine', J1: 'telling the judge that the law takes away the right to worship' },
    reason: { J1: 'Reyes was fined, so the law has harmed him, and he says it clashes with a right the Constitution protects: {cue:J1}. The law itself is what he attacks.' },
    not: { outcome: 'interpret', why: 'He does not ask whether the words of the law reach his service. He says the law should not stand.' } },

  { id: 'name-interpret-1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a taxi meter and a booked van',
    text: 'A city law says that every taxi must carry a meter. Bo drives people to the airport in his own van for a fixed price that he agrees by phone. The city fined him for having no meter. Bo asked a judge to decide whether a van that takes booked passengers for a fixed price is a taxi under the law. He does not say the law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'Bo asked a judge to decide', J1: 'whether a van that takes booked passengers for a fixed price is a taxi under the law' },
    reason: { J1: 'The law is accepted, and the only question is how far a word reaches: {cue:J1}. Nobody says the law clashes with the Constitution.' },
    not: { outcome: 'review', why: 'Bo does not say the law takes away a right. He asks whether the word "taxi" covers his van.' } },

  { id: 'name-notlegal-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'Sunday opening of a market hall',
    text: 'Shoppers in Dunmore ask a judge to order the town to open the market hall on Sundays, saying that it would be better for working families. No law says when a market hall must open, and nobody says the closing takes away any right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the town', J1: 'No law says when a market hall must open, and nobody says the closing takes away any right' },
    reason: { J1: 'The shoppers ask the judge to choose, because it would be better. Nothing settles it: {cue:J1}. There is no law or right for the judge to apply.' },
    not: { outcome: 'review', why: 'Nobody has been harmed by a rule and nobody says a right is taken away, so there is nothing in the Constitution to check a rule against.' } },

  { id: 'name-interpret-2', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a fee for a school workbook',
    text: 'A state law says that no school may charge a fee for textbooks. A school charged a fee for a workbook, and a group of parents has asked a judge to decide whether a workbook is a textbook under the law. They do not say the law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'a group of parents has asked a judge to decide', J1: 'whether a workbook is a textbook under the law' },
    reason: { J1: 'The parents accept the law and ask how far its words reach: {cue:J1}. They are not asking the judge to choose a better rule.' },
    not: { outcome: 'notlegal', why: 'There is a law, and the judge can answer from its words. The parents are not asking the judge to choose what would be better.' } },

  { id: 'name-trial-1', use: 'drill', tier: 'clean', setting: 'community', topic: 'questioning after a request for silence',
    text: 'Dina was arrested and told the officers that she wanted to stay silent. They kept asking her questions for three hours, and she signed a statement. At her trial her lawyer asks the judge to decide whether the police respected her right to stay silent.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'her lawyer asks the judge to decide', J1: 'whether the police respected her right to stay silent' },
    reason: { J1: 'Dina is accused of a crime, and the judge is asked whether a step the Constitution promises was followed: {cue:J1}. Nobody attacks a law.' },
    not: { outcome: 'review', why: 'Nobody says a law takes away a right. The question is about how Dina was treated after her arrest.' } },

  { id: 'name-review-2', use: 'drill', tier: 'clean', setting: 'work', topic: 'a strike poster in a shop',
    text: 'A state law bans stores from displaying any poster about a strike. Omari, a shop owner, was fined $200 for a poster that supported a workers’ strike. He took the state to court, saying the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He took the state to court', J1: 'saying the law takes away his right to speak' },
    reason: { J1: 'Omari was fined, and he says the law clashes with a right the Constitution protects: {cue:J1}. That is a claim about whether the law is allowed.' },
    not: { outcome: 'notlegal', why: 'He does not only say a different rule would be better. He points to a right that the law is said to break.' } },

  /* ---------- Stage two: the question alone, on a new case ---------- */
  { id: 'pc-review-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a flyer on a college campus',
    text: 'A state law bans anyone from handing out printed papers on a college campus. Mina was fined $40 for giving out a flyer about a student election. She asked a judge to cancel the fine, saying the law takes away the right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying the law takes away the right to speak' },
    reason: { J1: 'Mina was fined, so she was harmed, and she says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'She does not ask whether a flyer is the kind of paper the law covers. She says the law should not exist.' } },

  { id: 'pc-notlegal-1', use: 'drill', tier: 'clean', setting: 'travel', topic: 'a midnight train',
    text: 'Travelers at Barrow Station ask a judge to order the city transit board to run a train at midnight, saying that a late train would be better for night workers. No law requires a late train, and nobody says that having none takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the city transit board', J1: 'No law requires a late train, and nobody says that having none takes away a right' },
    reason: { J1: 'The travelers want the judge to choose what is better, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'There is no law whose words the judge could read to answer. The travelers want the judge to choose.' } },

  { id: 'pc-interpret-1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a pet limit and a fish tank',
    text: 'A town law says that a household may keep no more than two pets. Owen keeps two cats and a tank with twelve fish, and he was fined. He does not say the law is wrong. He asked a judge to decide whether a tank of fish counts as one pet or twelve under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'He asked a judge to decide', J1: 'whether a tank of fish counts as one pet or twelve under the law' },
    reason: { J1: 'Owen accepts the law and asks how far a word reaches: {cue:J1}. The judge answers from the law, not from a view about pets.' },
    not: { outcome: 'review', why: 'Owen is not saying the law takes away a right or breaks the Constitution.' } },

  { id: 'pc-trial-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'bail set very high',
    text: 'Arman is charged with shoplifting a $20 item. The court set his bail at $50,000. His lawyer asks the judge to decide whether bail that high is excessive, as the Eighth Amendment forbids.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer asks the judge to decide', J1: 'whether bail that high is excessive, as the Eighth Amendment forbids' },
    reason: { J1: 'Arman is accused of a crime, and his lawyer asks whether a step the Constitution promises was followed: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'The judge is not asked what the words of a law cover. The question is whether a promised step was kept.' } },

  /* ---------- Stage three: the first answer is shown; the learner answers the question and gives the name ---------- */
  { id: 'fin-review-1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a banner on a house',
    text: 'A city law bans hanging any flag from a house except the national flag. Lou hung a banner for his football team and was fined $60. He asked a judge to cancel the fine, saying that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He asked a judge to cancel the fine', J1: 'saying that the law takes away his right to speak' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}. The city has already made its rule.',
              J1: 'Lou was fined, and he says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'He does not only say a different rule would be better. He says the law takes away a right.' } },

  { id: 'fin-trial-1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a second trial for the same fraud',
    text: 'Rae is charged with fraud. A jury found her not guilty, and the prosecutor now wants to try her a second time for the same fraud. Her lawyer asks the judge to decide whether a second trial for the same crime is allowed, as the Fifth Amendment is read.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'Her lawyer asks the judge to decide', J1: 'whether a second trial for the same crime is allowed' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Rae is accused of a crime, and the judge is asked whether a step the Constitution promises was followed: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says the law against fraud is wrong. The question is about how Rae is being treated.' } },

  { id: 'fin-notlegal-1', use: 'drill', tier: 'varied', setting: 'community', topic: 'trees along a road',
    text: 'Neighbors on Elm Road ask a judge to order the city to plant trees along the road, saying that trees would make the road nicer. No law requires the city to plant them, and nobody says any right is taken away by leaving the road bare.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the city', J1: 'No law requires the city to plant them, and nobody says any right is taken away by leaving the road bare' },
    reason: { D1: 'The neighbors have gone to a judge: {cue:D1}. The city has not been asked for anything else.',
              J1: 'They want the judge to choose what would be nicer, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody has been harmed by a rule, and nobody points to a right that is taken away.' } },

  { id: 'fin-interpret-1', use: 'drill', tier: 'varied', setting: 'travel', topic: 'a kayak on a lake',
    text: 'A state law says that every boat on the state’s lakes must be registered. Joss was fined for paddling an unregistered inflatable kayak. He grumbles that the fee is too high, but he has asked a judge to decide only whether a kayak is a boat under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'he has asked a judge to decide', J1: 'only whether a kayak is a boat under the law' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'The grumble about the fee is a view about a better rule. What Joss puts to the judge is {cue:J1}, which is how far a word reaches.' },
    not: { outcome: 'notlegal', why: 'The fee is mentioned, but the judge is not asked to choose a better fee. There is a law, and the question is what its word covers.' } }
]);
