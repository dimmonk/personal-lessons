// Psychology, Unit Two: drill cases for stage four (the whole route, no help). Two or more for each name.
// Every question is asked here, starting with the first question of the key, so every case carries marked words
// and a reason for that question too (D1). echo names a teaching case whose story this one resembles while its
// name differs: the feedback says so, which is how the "does it look like a case you know?" second look is practised.
// also lists answers the case shows as well as its own, which lose to its own by the key's tie-break (yieldsTo).

FC.cases('psychology', 'u2', [

  /* ---------- Clean ---------- */
  { id: 'payroll', use: 'drill', tier: 'clean', setting: 'work', topic: 'a payroll system',
    text: "A software firm has spent eighteen months building its own payroll system. A tested system from another company would now cost less each year than fixing the faults in theirs. 'After eighteen months of work we are not throwing this away,' the owner says, and he hires another developer.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'the owner says, and he hires another developer', R1: 'After eighteen months of work we are not throwing this away' },
    reason: { D1: 'One person is giving his reason for a choice of his own: {cue:D1}.',
              R1: 'His reason for hiring again is {cue:R1}: the eighteen months. The comparison with the tested system, which is about what the next step would cost and bring, plays no part.' },
    not: { outcome: 'fair', why: '{o:fair} would have him going where the cost comparison points. It is in the case, and his reasoning never touches it.' } },

  { id: 'motorbike', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'restoring a motorbike',
    text: "Two years into restoring a vintage motorbike, Stefan priced the parts he still needed. They came to more than a working bike of the same model would cost. 'Then it isn't worth finishing,' he said, and he sold it as a project to someone with a workshop.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'he sold it as a project to someone with a workshop', R1: "Then it isn't worth finishing" },
    reason: { D1: 'One person is reaching a choice of his own about his own project: {cue:D1}.',
              R1: 'He looked at what the remaining work would cost, and his plan went where that pointed: {cue:R1}. The two years already spent are not given as a reason for anything.' },
    not: { outcome: 'sunkcost', why: '{o:sunkcost} would have Stefan saying he cannot stop after two years. His reason is about the parts still to buy, not the time already spent.' } },

  { id: 'parking', use: 'drill', tier: 'clean', setting: 'community', topic: 'a disabled parking bay',
    text: "Gus writes angry posts about drivers who park in disabled bays. On Saturday he left his car in one outside the chemist. 'I was two minutes,' he told his wife in the car afterwards. 'Nobody needed it in two minutes.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'he told his wife in the car afterwards', R1: 'Nobody needed it in two minutes' },
    reason: { D1: 'One person is defending something he did himself: {cue:D1}. It is his own account of his own act.',
              R1: 'Gus did something that does not fit what he posts about. Afterwards he gives a reason why it is fine: {cue:R1}. He takes nothing back.' },
    not: { outcome: 'sunkcost', why: 'There is no next step to decide and nothing already spent. He is giving a reason why something he did is fine.' } },

  /* ---------- Varied ---------- */
  { id: 'league', use: 'drill', tier: 'varied', setting: 'learning', topic: 'school league tables',
    text: "Dawn is sure her daughter's school is the best in town. Two years ago, when it came third in the league table, she put the table on the fridge. This year it came near the bottom. 'Those tables only show which children a school happens to get,' she says.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: "Dawn is sure her daughter's school is the best in town", R1: 'Those tables only show which children a school happens to get' },
    reason: { D1: 'One person is defending a view of her own: {cue:D1}.',
              R1: 'The table that put the school third was evidence for her view, and it went on the fridge. The table that puts it near the bottom is evidence against her view, and only that one is questioned: {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'motivated', why: 'Dawn has not set out on a search to settle a choice. League tables turn up each year, and she treats the two differently.' } },

  { id: 'viewing', use: 'drill', tier: 'varied', setting: 'home', topic: 'renting a flat', also: ['scrutiny'],
    text: "Hal paid the holding deposit on the flat by the park an hour after seeing the advert. Then he 'compared what was out there': he went to see two other flats, spent five minutes in each, and wrote down that one was dark and the other was noisy. 'I looked at three,' he told his sister, 'and the one by the park is the best.'",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'the one by the park is the best', R1: 'paid the holding deposit on the flat by the park an hour after seeing the advert' },
    reason: { D1: 'One person is telling how he reached a choice of his own: {cue:D1}.',
              R1: 'Hal set out on a search, the viewings, that was supposed to settle which flat to take. The answer came before it: he {cue:R1}. Five minutes in each of the other flats could only supply support.' },
    not: { outcome: 'confbias', why: 'He is harder on the other two flats, which would fit {o:confbias}. But he set out on a search, and the answer was chosen before it began. When a case shows both, that decides it.' } },

  { id: 'boiler', use: 'drill', tier: 'varied', setting: 'home', topic: 'an old boiler',
    text: "Everyone tells Wanda that her fifteen-year-old boiler must be costing her a fortune. She has always thought it was fine. She asks an engineer to measure what it burns, and gets a price for a new one. The saving would be £60 a year on a £2,400 boiler. 'Then it stays,' she says. 'If the saving had been a few hundred a year, I'd have replaced it.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'She has always thought it was fine', R1: ['She asks an engineer to measure what it burns', 'Then it stays'] },
    reason: { D1: 'One person is reaching a choice of her own, starting from a view of her own: {cue:D1}.',
              R1: 'Wanda’s view was questioned, so she got the facts measured, and her plan went where they pointed: {cue:R1}. Here they pointed at keeping the boiler, and she says what would have changed that.' },
    not: { outcome: 'confbias', why: 'She kept her view, which is what {o:confbias} can look like. But she did not give the evidence against it a harder test. She went and got the evidence herself, and it supported her.' } },

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'cleaner', use: 'drill', tier: 'misleading', setting: 'home', topic: 'hiring a cleaner',
    text: "Nora used to say that people who hire cleaners are lazy. Last month, worn out, she hired one. 'Paying someone local is really a way of supporting the neighbourhood,' she says now. 'I see it differently these days.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'I see it differently these days', R1: 'Paying someone local is really a way of supporting the neighbourhood' },
    reason: { D1: 'One person is explaining a choice of her own and her view of it: {cue:D1}.',
              R1: 'Nora did something that does not fit what she used to say: she hired a cleaner. Her new view is a reason given afterwards for why that is fine: {cue:R1}.' },
    not: { outcome: 'fair', why: 'Her view did change, which is what {o:fair} can look like. But nothing came between the old view and the new one except that she hired a cleaner. No new fact about cleaners arrived.' } },

  { id: 'diet', use: 'drill', tier: 'misleading', setting: 'health', topic: 'studies about a diet', echo: 'vic-stress',
    text: "Arun has been on a low-carbohydrate diet for a year. He reads three studies that favour it closely and with pleasure. He dismisses a fourth, which goes against it, as 'paid for by the food industry', without checking who paid for the other three.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'He dismisses a fourth, which goes against it', R1: 'without checking who paid for the other three' },
    reason: { D1: 'One person is defending a view of his own, that his diet is a good one: {cue:D1}.',
              R1: 'The study against his view is asked who paid for it. The three for his view are not: he dismisses it {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'dissonance', why: 'Arun has a year on the diet behind him, so it can look as if he is defending something he did. But he gives no reason why something he did is fine. He is judging studies, and only the one against his view gets the question about money.' } },

  { id: 'dog', use: 'drill', tier: 'misleading', setting: 'home', topic: 'getting a dog', also: ['scrutiny'],
    text: "On Sunday, Olga told her husband that they were getting a dog, and which breed. On Monday she asked three friends who own dogs whether it was a good idea, and asked a friend with allergies whether dog hair was 'really that bad'. When the friend with allergies said yes, Olga said she had always been dramatic.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'she asked three friends who own dogs whether it was a good idea', R1: 'On Sunday, Olga told her husband that they were getting a dog' },
    reason: { D1: 'One person is backing up a choice of her own: {cue:D1}.',
              R1: 'Olga set out on a search, asking her friends, and the answer came before it: {cue:R1}. The asking came on Monday, and it could not have changed anything.' },
    not: { outcome: 'confbias', why: 'She does give the unwelcome answer a harder test ("always been dramatic"), which is what you point to for {o:confbias}. But she set out on a search, and the answer was chosen before it began. When a case shows both, that decides it.' } },

  { id: 'supplier', use: 'drill', tier: 'misleading', setting: 'work', topic: 'two suppliers', echo: 'tasting',
    text: "Amit hoped the cheaper supplier would turn out to be good enough. He ordered samples from both suppliers and had the workshop test them without knowing which was which. Before the tests he wrote down what result would make him stay with the more expensive one. The cheaper samples passed every test, and he switched.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'Amit hoped the cheaper supplier would turn out to be good enough',
            R1: ['Before the tests he wrote down what result would make him stay with the more expensive one', 'The cheaper samples passed every test, and he switched'] },
    reason: { D1: 'One person is reaching a choice of his own, and the case shows how he went about it. It starts from what he hoped: {cue:D1}.',
              R1: 'The search came before the answer, and it could have gone against him: {cue:R1}. The facts got the same test whichever way they pointed, and his plan went where they pointed.' },
    not: { outcome: 'motivated', why: 'He ended up where he hoped to, which is what {o:motivated} can look like. But no answer was chosen before the search began. He set the test up so that it could have come out the other way.' } },

  { id: 'marathon', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a marathon and an injured knee', echo: 'longrun',
    text: "Kit has told his running club all year that he listens to his body. Six months into training for a marathon, a physiotherapist tells him that running on his injured knee next week could put him out for a year. 'Six months of 5 a.m. starts,' he writes in the club chat. 'I'm not letting that go for nothing. I'm running.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'he writes in the club chat', R1: 'Six months of 5 a.m. starts' },
    reason: { D1: 'One person is giving his reason for a choice of his own: {cue:D1}.',
              R1: 'A next step is still to be decided, run or rest, and the reason Kit gives for running is {cue:R1}: the training already done. What the physiotherapist says about the next step plays no part.' },
    not: { outcome: 'dissonance', why: 'Kit says one thing to his club and is about to do another, so it can look like an excuse. But his reason does not say that something he did is fine. It gives what is already spent as the reason for what he does next.' } }
]);
