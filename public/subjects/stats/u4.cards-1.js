// Statistical Claims, Unit Four, part one (first half): the opening card and the first name.
// This is a branch unit of an action subject (subject.action is true): every portrait carries `act`, and the unit ends with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the
// reminder of the questions this unit leans on, the preview map, the heading of a meet card, "what you must be able to point to",
// the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the heading of an
// again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a figure in it), figure (the number in a claim), the real
// thing (what the figure is read as showing), found (counted as having something: never "cases", which is the app's word for one
// example), part (one of the four steps a claim is built from).

FC.cards('stats', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'A number went up. Did the thing it counts go up?',
    canDo: 'After this unit you can read a claim about a figure that rose, fell or differed, such as a headline, a report to staff or a message a friend forwards, and say what else, apart from the real thing, might have moved it, or that nothing else did. You will be able to point to the words that show it. The claim can be about a delivery firm, a clinic, a school, a city or your own phone.',
    everyday: [
      'You have met claims like these. "Reported burglaries are up 30% since the new hotline." "Our waiting times are down by a third." "Diagnoses have doubled in ten years." "Nine in ten deliveries now arrive on time." Each one gives you a figure and tells you what to make of it: more crime, shorter waits, more illness, better service.',
      'A figure is not the thing it stands for. It is what was written down, counted or measured, and then read as showing the real thing. Most of the time the two move together. Sometimes the figure moves and the real thing does not. The first question has already sorted claims by the first part that goes wrong, and this unit is for the claims where the answer was {a:S1.measure}: the figure could rise, fall or differ while the real thing did nothing of the kind.',
      'There are three ordinary ways for that to happen, and each sends you to a different check. People who are judged on the figure can work on the figure instead of the real thing. The way of counting can change, so that the same situation gets a different number. Or more effort can go into finding the thing, so that more of what was always there turns up. This unit teaches you to tell the three apart, and to see a figure for what it is: a count made by someone, in some way, with some amount of effort.'
    ],
    add: [
      'Two phrases are used all the way through. The real thing is what the figure is read as showing: parcels reaching customers on time, people who have an illness, students who can read. The figure is the number that was written down about it. The question this unit teaches is about everything else that goes into making the number.',
      'When people are counted as having an illness, they are "found". The word "case" is kept for what the app calls one example: a claim as someone might say it to you, with whatever the speaker tells you about how the figure was made.'
    ],
    map: { branch: 'measure' } },

  /* ---------- The first name: people working on the figure ---------- */
  { id: 'meet-proxy', kind: 'meet', outcome: 'proxy',
    link: 'Start with the way that is easiest to understand, because every workplace has met it: a figure that decides who gets paid.',
    case: 'meas-parcels', mark: 'M1',
    strip: [
      'There is a figure: the share of parcels marked "delivered on time", 80 of every 100 last quarter and 96 of every 100 this quarter.',
      'There is a real thing the figure is read as showing: parcels reaching customers on time.',
      'The drivers are paid on the figure: a $200 bonus when 95 of every 100 parcels are marked on time.',
      'The drivers also make the figure: a driver marks a parcel on time by tapping a button.',
      'A second count, made by the customers and used for nothing, did not move: 79 of every 100 parcels arrived on time in both quarters.'
    ],
    explain: [
      'The report says that on-time delivery rose by 16 of every 100 parcels (96 − 80 = 16). Nothing in the report is false: the drivers did mark 96 of every 100 parcels on time. The customers’ messages show what happened to the parcels, and it is nothing: 79 of every 100 arrived on time last quarter, and 79 of every 100 this quarter. The figure moved by 16 and the real thing moved by 0.',
      'The figure and the real thing are two different events. One is a parcel arriving. The other is a driver tapping a button. While nobody cares about the tap, the two happen together, because a driver taps when a parcel arrives. Once $200 depends on the tap, the cheapest way to get more of them is to tap sooner: at the door before the customer has come to it, or from the van. That costs a driver nothing, and getting parcels to arrive on time costs a great deal. So the tap moved and the parcels did not.',
      'Most people who do this do not think of it as cheating. They are doing what the figure asks of them. A figure that someone is paid on tends to become the thing they work on, and the real thing it was meant to show gets less attention.'
    ],
    feature: { step: 'M1', option: 'pushed' },
    name: 'The name for this is {o:proxy}. A "target" is a figure that people are asked to reach. "Gaming" means playing the system to reach it, here by tapping instead of delivering. The name is for the situation where people who are judged on a figure raise the figure itself, and not the real thing it was meant to show.' },

  { id: 'again-proxy', kind: 'again', outcome: 'proxy',
    link: 'The delivery firm gave you what to point to, from one claim: {needs:proxy}. Here is a second claim with a completely different story.',
    first: 'meas-parcels', second: 'meas-school-test', step: 'M1',
    instruction: 'Find what the two claims share. Ignore the story (parcels, language lessons) and ignore how large the rise is. Look at one thing only: who gains when the figure is higher, and what they are free to do about it.',
    prompt: { kind: 'phrase', answer: 'pays its teachers a bonus when its average score on its own end-of-course test goes up, and the teachers decide what the last eight weeks of each course are spent on' },
    shared: [
      'In both claims a figure rose by 16: from 80 to 96 parcels in every 100, and from 62 to 78 points out of 100. In both, the people who make the figure are paid on it: the drivers by their $200, the teachers by their bonus. And in both they have an easy way to raise it that leaves the real thing alone: tapping earlier, and practicing only the twenty kinds of question that the test always uses.',
      'In both, a second count shows what happened to the real thing. The customers’ messages stayed at 79 of every 100. On a different test of the same language, with questions the students had not practiced, the average went from 62 to 63. The figure rose by 16, and the real thing by 0 and by 1.',
      'The two stories share nothing else. So this is not about parcels or about language teaching. It holds wherever people are judged on a figure and are free to raise the figure itself. That is what {o:proxy} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides which of the three it is',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every claim in this unit has two layers. The top layer is the story: a delivery firm, a school, a clinic, a ski area. The layer underneath is how the figure came to be what it is: who makes it, how it is counted, and how hard anyone looked for what it counts.',
      'The three names belong to the layer underneath. The same story can carry any of them. A claim about a hospital can be a figure the staff are paid on, a figure counted in a new way, or a figure from more testing. And it can be a claim in which none of the three applies. There is an answer for that too: {a:S1.holds}.',
      'From here on, the claims change their stories on purpose. Sometimes two claims share the same story and the same rise, and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose: how large the rise is, and whether anyone did anything wrong. A rise of 16 points can come from the real thing moving, and a rise of 1 point can be the work of someone paid on it. Nobody in these claims has to be dishonest for a figure to move.'
    ],
    fixed: ['how the figure came to be what it is, which is what this question asks about: {q:M1}'],
    varies: ['the topic', 'the people', 'how large the rise is', 'whether anyone meant to mislead', 'whether the figure moved because of anything but the real thing'] },

  { id: 'portrait-proxy', kind: 'portrait', outcome: 'proxy',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:proxy} in real life, where nobody marks the words for you.',
    typical: [
      'Somebody gains or loses by the figure: a bonus, a ranking, a job, a budget, a prize, a good report. Without that there is no reason to work on the figure, so the first thing to look for is who is judged by it.',
      'The people who are judged on the figure are close to how it is made. They tap the button, grade the exam, write the report, ring up the sale, or decide how a problem is split into reports. The nearer they are to the making, the easier it is to raise the figure.',
      'The easy way to raise the figure is not the way that raises the real thing. Tapping costs less than delivering; practicing the twenty kinds of question on the test costs less than teaching the language; splitting one problem into three reports costs less than fixing three problems. When the two ways cost the same, nobody has a reason to choose the wrong one.',
      'It usually takes one of four forms. People record the figure sooner or more generously than it happened. They do only the part of the work that is counted. They split or relabel one thing so that it counts several times. Or they end a job early, at the point where it counts as done.',
      'People are rarely lying. They are answering the question the figure asks, and the figure does not ask what the person who set it up really wanted to know.',
      'The figure often rises fast when the target is set, while a second count that nobody is paid on stays where it was.'
    ],
    not: [
      'Being paid on a figure is not enough to be {o:proxy}. Workers paid per sale who sell more have raised the real thing, and the figure followed. The name needs a way for the people to raise the figure without more of the real thing.',
      'Nor does the name say that anyone cheated. A rise that nobody meant to cause can still be the work of people judged on the figure.'
    ],
    wild: ['"Every team hit its target this month."', '"Our numbers have never looked better."', '"We are 96% on time."', '"Scores are up 16 points since we introduced the bonus."', '"Everyone passed."'],
    self: 'In your own life it is any number you are asked to hit: a sales quota, a step count in a contest, the books you log for a reading prize, the emails you clear before you go home. Notice the moment you start working on the number instead of on what it was meant to show.',
    ask: '"Who is judged by this figure, and what is the easiest way for them to raise it? Is that the same as raising what it stands for?"',
    act: [
      'First find out who is paid, ranked or judged on the figure, and who makes it. If they are the same people, go on to the next question.',
      'Ask what the easiest way to raise the figure would be, and whether that way raises the real thing too.',
      'Look for a second count of the same real thing that nobody is judged on, such as customers’ own messages or a test with new questions, and see whether it moved as the figure did.',
      'Until you have found one, repeat only what the figure says ("marked on time") and not what it stands for ("on time"), and do not pass the claim on as it stands.'
    ] }
]);
