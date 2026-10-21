// Debating, lesson 8: replies that work against you. The plan's "bad moves" (mocking, calling someone stupid, fact-dumping, the invented story) were already taught in lessons 4 and 5, and
// nothing read tests "stupid" as a label; what Aristotle's account gives is a slight (contempt, mocking and jeering anger people, Rhetoric II.2; calm comes toward those who do not
// mock, II.3), a chain of steps too long to follow and a start the hearer does not grant (I.2), and not making people believe what is wrong (I.1; a published comment on the
// personal-experience studies warns that a false personal story earns more respect than facts, F6). A restatement with something added is the lesson 6 check. So the practice is look-alikes
// in your own writing: three replies to the same last line, and one works against you. The other two are fine, blunt or warm or long or short, so tone and length never give it away; a
// line aimed at the person is a slight and a blunt line aimed at the point is not. No claim about anyone's ability. The people and their lines are invented. Items a lesson does not
// name wait for the review.
(() => {
  const S = 'bad-moves';
  const REASON = {
    slight: 'That reply is aimed at the person, not at their point. In Aristotle\'s account, people grow angry at those who laugh, mock or jeer at them and at contempt for what they care about, and grow calmer toward those who do not mock. His account is old and was never tested in a talk like yours.',
    long: 'That reply puts five steps in a row. Aristotle says hearers cannot take in a long chain of reasoning and that an argument should have few steps. He gives no number, so five being too many is ours.',
    stretched: 'That reply says more than happened. A published comment on the personal-experience studies warns that a false personal story would earn more respect than facts, and Aristotle says not to make people believe what is wrong.',
    added: 'That restatement adds something they never said, so they would not accept it. Saying a view back fairly is advice from experts, not a tested finding.',
    start: 'That reply builds on something they have said they do not accept. Aristotle says reasoning from a starting point people do not grant fails to win them, so begin from what they already accept.'
  };
  // `bad` is the reply that works against you (the problem is the facet); rows are [words, true for the bad one]; the others are fine
  const B = (id, problem, setup, lines, rows, deciding, cue) => ({ id, strand: S, facets: { problem },
    blocks: lines.length ? [dbSetup(setup), dbTalk(...lines)] : [dbSetup(setup)], asks: [dbBadAsk(rows)], deciding, reason: `${cue} ${REASON[problem]}` });
  FC.items('debating', [
    // ----- the worked talk -----
    { ...B('w8-carl', 'slight', 'You are telling your neighbor Carl why the street should have speed bumps. He pushes back.', [
        ['s1', 'Carl: "Bumps slow down the ambulances. People die waiting."']], [
        ['I understand the worry, Carl. People who object to everything near their own house usually miss the bigger picture.', true],
        ['No. The town report says a bump adds about ten seconds to an ambulance run. Read page four.'],
        ['That worries me too. Can we look at where the ambulances drive and keep the bumps off it?']], ['s1'],
        'The reply that says people who object near their own house miss the bigger picture is calm in its words and still looks down on Carl; the other two answer what he said about ambulances, one of them bluntly.'),
      steps: [
        { id: 'who', does: 'For each reply, see whether it is aimed at the point or at the person, whatever its tone.', working: 'Two replies answer the ambulance worry, one bluntly and one warmly. One is about Carl and what people like him miss, in a calm voice.', ask: 'bad' },
        { id: 'slight', does: 'Name the move.', working: 'A line that says people like him miss the bigger picture is contempt for him. That is a slight, and a blunt line aimed at his point would not be.' },
        { id: 'fix', does: 'Replace it with a line aimed at the point.', working: 'Answer the ambulance worry: "The town report says a bump adds about ten seconds to an ambulance run."' }] },

    // ----- group 1 -----
    B('a8-lou', 'slight', 'Your coworker Lou says the new scheduling software is a waste of money. You think it will save time.', [
        ['s1', 'Lou: "It will not save anybody any time. We have run on paper for twenty years."']], [
        ['With respect, people who have run on paper for twenty years often cannot see what is in front of them.', true],
        ['You are wrong about the time. The trial week will show it, so let us run the trial.'],
        ['That is fair. Let us count the hours the schedule takes now and the hours the trial takes, then compare.']], ['s1'],
        'The reply that says people on paper cannot see what is in front of them is polite in its words and still looks down on Lou; the others deal with the claim, one of them bluntly.'),
    B('a8-rita', 'long', 'You want your neighbor Rita to back a crosswalk on Elm Street.', [
        ['s1', 'Rita: "Why should I back it?"']], [
        ['Cars go forty, so kids cross in gaps, and kids in gaps get hit, and a hit brings a lawsuit, and the lawsuit sends the bill to us.', true],
        ['Back it now. Cars go forty on Elm, and the school lets out right at the corner, so kids cross in whatever gap they find.'],
        ['Last spring two kids nearly got hit at that corner. The crosswalk on Maple cut the near misses there, and I would like the same for Elm.']], ['s1'],
        'The reply that runs from speed to gaps to a hit to a lawsuit to a bill has five steps; the others make two.'),
    B('a8-ed', 'stretched', 'What happened: in October your friend Tomas\'s hours at the warehouse were cut from 40 to 25 a week, with one week\'s notice. He picked up a second job in December. You do not know how he is doing. You are telling your neighbor Ed, who is against a scheduling law.', [
        ['s1', 'Ed: "Businesses have to adjust to demand, you know."']], [
        ['My friend Tomas\'s hours were cut from 40 to 25 overnight, and his family has not recovered since.', true],
        ['Forty hours down to twenty-five, with one week\'s notice. Fifteen hours a week gone, in October.'],
        ['Demand does move around. Tomas\'s weekly hours at the warehouse went from 40 to 25 in October, with a week\'s notice, and he took a second job in December.']], ['s1'],
        'The facts say 40 to 25 hours with a week\'s notice and nothing about his family; the reply that says overnight and not recovered goes past them, in a calm voice.'),

    // ----- group 2 -----
    B('b8-walt', 'slight', 'Your brother-in-law Walt says the town should not pay for a new library. You think it should.', [
        ['s1', 'Walt: "Nobody reads books anymore. It is all phones."']], [
        ['I love that you speak your mind, Walt, even when you have not looked at a single fact.', true],
        ['That is false. The library keeps sign-in numbers, and they show people still come in every day.'],
        ['Phones are part of it. I use mine to reserve books, though. How many people would you guess walk in each week?']], ['s1'],
        'The reply that praises Walt for speaking his mind without looking at a fact is warm in its words and still looks down on him; the others take up what he said, one of them bluntly.'),
    B('b8-ana', 'added', 'Your neighbor Ana said: "I don\'t want a bike lane on Pine. The street is narrow already, the bus stops there twice an hour, and the one time I saw cars squeeze past a stopped bus, a cyclist got clipped." You want to say her view back before you reply.', [], [
        ['So the street is narrow, the bus stops there twice an hour, and you would rather the cyclists took another street.', true],
        ['So Pine is narrow already, the bus stops there twice an hour, and you once saw a cyclist get clipped when cars squeezed past a stopped bus.'],
        ['Your worry is the room on Pine: the narrow street, the bus stopping there twice an hour, and the cyclist you saw clipped.']], [],
        'The restatement that says she would rather the cyclists took another street says what she did not, in a calm voice.'),
    B('b8-nora', 'start', 'Your coworker Nora has told you twice that she does not trust the Dayton pilot numbers. You want her to approve the billing rollout.', [
        ['s1', 'Nora: "I am still not sold on this rollout."']], [
        ['The Dayton pilot ran flawlessly, so there is no reason the rollout here will be rough, and I would bet on it.', true],
        ['Forget Dayton. Here is our own test from last month: 400 invoices, two errors, both fixed the same day.'],
        ['What would you need to see from our own system before you would sign off? We can run a test of whatever size you name.']], ['s1'],
        'The reply that rests on the Dayton pilot builds on numbers Nora has said twice she does not trust, though it sounds friendly.'),
    B('b8-drew', 'long', 'You are telling your friend Drew to take the train to the game.', [
        ['s1', 'Drew: "Driving is easier."']], [
        ['Driving means traffic, traffic means a late start, a late start means a lost parking spot, a lost spot means a long walk, and a long walk means we miss the first inning.', true],
        ['Driving is a mistake. Parking is thirty dollars and traffic adds an hour. Take the train.'],
        ['Driving is easy until you reach the stadium. After that it is thirty dollars for parking and a long line to get out when the game ends.']], ['s1'],
        'The reply that runs from traffic to a late start to a lost spot to a long walk to the first inning has five steps; the others make two.'),
    B('b8-bea', 'stretched', 'What happened: your aunt ran a diner for 14 years. In 2021 her landlord raised the rent from $2,000 to $3,500 with 30 days\' notice, and she closed in October. You do not know what else she tried or how she felt. You are telling your coworker Bea, who is against a notice law.', [
        ['s1', 'Bea: "Landlords cannot be asked to hold prices forever."']], [
        ['My aunt ran her diner for 14 years until her landlord doubled her rent overnight and she lost everything she had built.', true],
        ['Fourteen years. Then in 2021 her rent went from $2,000 to $3,500 with 30 days\' notice, and she closed in October.'],
        ['It is a lot at once for a small place. In 2021 my aunt\'s diner rent went from $2,000 to $3,500 with 30 days\' notice.']], ['s1'],
        'The facts say $2,000 to $3,500 with 30 days\' notice; the reply that says doubled overnight and lost everything goes past them.'),

    // ----- the check: eight new talks, none shown in the practice -----
    B('c8-roy', 'slight', 'Your cousin Roy says the town should not fix the old bridge. You think it should be fixed.', [
        ['s1', 'Roy: "It has held for eighty years. It will hold eighty more."']], [
        ['I appreciate you, Roy, and I say this kindly: only someone who has not looked at it would say that.', true],
        ['That is wrong. An inspection last year flagged the north pier, and I will show you the page.'],
        ['Eighty years is a good record. The question is what the inspectors found on the north pier last year.']], ['s1'],
        'The reply that says only someone who has not looked would say that is kind in its words and still looks down on Roy; the others answer what he said, one of them bluntly.'),
    B('c8-hana', 'slight', 'Your coworker Hana says her team should get the new printer first. You are on a different team and say the order should go by need.', [
        ['s1', 'Hana: "Of course you want it by need. Your team has the worst printer."']], [
        ['I think it is natural for people to put their own team first, Hana, and you do it more than most.', true],
        ['Fine. Then count jams per month for each team, and whichever team is worst gets it, even if that is not mine.'],
        ['Yes, mine is the oldest, so I may be biased. Can we have the help desk count jobs and jams for each team?']], ['s1'],
        'The reply that says Hana puts her team first more than most is calm and still aimed at her; the others deal with the printer, one of them bluntly.'),
    B('c8-max', 'long', 'You are telling your friend Max to get a flu shot.', [
        ['s1', 'Max: "I never get sick."']], [
        ['Flu spreads before symptoms show, so you carry it unknowing, so you pass it on, so your mother is exposed, and at her age that can mean the hospital.', true],
        ['Get the shot. You can spread flu before you feel it, and your mother is over seventy.'],
        ['Not getting sick is lucky. A person can spread it for a day before feeling anything, and your mother is over seventy, so she has more to lose.']], ['s1'],
        'The reply that runs from spreading before symptoms to carrying it to passing it on to your mother to the hospital has five steps; the others make two.'),
    B('c8-pam', 'stretched', 'What happened: in July the basement of your friend Dev\'s building flooded for two days. The landlord pumped it out on day three. You saw the water on day two. You are telling your neighbor Pam, who is against a repair-time rule.', [
        ['s1', 'Pam: "Landlords do what they can."']], [
        ['The landlord left my friend\'s building under water for a week and never returned his calls.', true],
        ['Two days of standing water, and the pump came on day three. I saw it myself on day two.'],
        ['In July my friend Dev\'s basement flooded, and I saw it on the second day. The landlord pumped it out on day three.']], ['s1'],
        'The facts say the basement flooded for two days and was pumped out on day three; the reply that says a week and unreturned calls goes past them, in a calm voice.'),
    B('c8-gus', 'stretched', 'What happened: your brother lost his job in March. He told you he was fine, and he started a new job in June. You do not know how he felt. You are telling your coworker Gus, who is against a notice law.', [
        ['s1', 'Gus: "People get new jobs all the time."']], [
        ['My brother lost his job in March and was very worried until he started a new job in June.', true],
        ['Lost his job in March, started a new one in June. Three months.'],
        ['Three months is a long gap. My brother lost his job in March and did not start another until June.']], ['s1'],
        'The facts say he told you he was fine; the reply that says he was very worried goes past them, in a calm voice.'),
    B('c8-kit', 'added', 'Your friend Kit said: "I am against charging for parking on Elm after six. The shops stay open until nine, and customers will go to the mall, where it is free." You want to say her view back before you reply.', [], [
        ['So you think the town wants more money and does not care about the shops.', true],
        ['The shops on Elm stay open until nine, the mall is free, and that is your worry, and it is a fair one.'],
        ['Your worry is that charging after six pushes the evening customers to the mall.']], [],
        'The restatement that says the town wants more money and does not care about the shops says what Kit did not, in a calm voice.'),
    B('c8-dee', 'added', 'Your sister Dee said: "I want to keep the old oak in the yard. It shades the house in summer, and the kids built a treehouse in it." You want to say her view back before you reply.', [], [
        ['So the oak matters more to you than the roof damage it is causing.', true],
        ['So the oak shades the house in summer, and the kids built a treehouse in it.'],
        ['You want to keep the oak because it shades the house and the kids built a treehouse in it.']], [],
        'The restatement that brings in roof damage and ranks the oak over it says what Dee did not.'),
    B('c8-mo', 'start', 'Your uncle Mo has said he will not accept a statistic from the state agency, because "they cooked the numbers on the highway report". You want him to back the new bike path.', [
        ['s1', 'Mo: "Convince me."']], [
        ['The state agency counted eleven crashes on that road last year, and the path would remove most of them.', true],
        ['Do not take my word, or the state\'s. Ride the road with me and count the places with no shoulder.'],
        ['The county sheriff\'s own crash log lists eleven crashes on that road last year. I can print it for you.']], ['s1'],
        'The reply that rests on the state agency\'s count builds on numbers Mo has said he will not accept, in a calm voice.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    B('r8-tina', 'slight', 'Your friend Tina says the neighborhood does not need a farmers market. You think it does.', [
        ['s1', 'Tina: "Nobody here will pay those prices for tomatoes."']], [
        ['Typical. You have never cooked a real meal in your life, so what would you know about tomatoes?', true],
        ['Some will and some will not. A booth could run a trial month, and we could count who comes back.'],
        ['The prices are higher, that is true. Let me find out whether the market takes the benefit cards some families use.']], ['s1'],
        'The reply about what Tina has or has not cooked is aimed at her, not at the prices.'),
    B('r8-joel', 'added', 'Your neighbor Joel said: "I would rather the town pave Maple than add the new stoplight. Maple has been full of potholes for three years." You want to say his view back before you reply.', [], [
        ['So you would rather the town pave Maple than add the stoplight, because Maple has been full of potholes for three years.'],
        ['You think the stoplight is a waste, and paving Maple is the thing that matters.', true],
        ['Your point is Maple: three years of potholes, and paving it comes before the stoplight.']], [],
        'The restatement that says the stoplight is a waste says what Joel did not.'),
    B('r8-sal', 'long', 'You are telling your sister Sal to move her savings out of the shoebox and into the credit union.', [
        ['s1', 'Sal: "It is fine where it is."']], [
        ['A shoebox earns nothing, so inflation eats it, and eaten savings buy less, and less means less cushion, and less cushion means more debt.', true],
        ['A shoebox earns nothing, and the credit union pays interest on the same money. A fire or a theft in the shoebox is gone for good, and the account is insured.'],
        ['It is fine until something happens to the house. The credit union account is insured, and the interest it pays is more than the shoebox earns, which is nothing.']], ['s1'],
        'The reply that runs from no interest to inflation to buying less to less cushion to debt has five steps; the others make two.')
  ]);
})();
