// Statistical Claims, Unit Four, part one (first half): the opening card and the first name.
// This is a branch unit of an action subject (subject.action is true): every name says what to do (`act`), and the unit ends with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the
// reminder of the questions this unit leans on, the preview map, the heading of a meet card, "what you must be able to point to",
// the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// Words this unit keeps to one meaning each: claim (what someone says with a figure in it), figure (the number in a claim), the real
// thing (what the figure is read as showing), found (counted as having something: never "cases", which is the app's word for one
// example).

FC.cards('stats', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'A number went up. Did the thing it counts go up?',
    canDo: 'After this unit you can read a claim about a figure that rose, fell or differed, such as a headline, a report to staff or a message a friend forwards, and say what else, apart from the real thing, might have moved it, or that nothing else did. You will be able to point to the words that show it.',
    everyday: [
      'You have met claims like these. "Reported burglaries are up 30% since the new hotline." "Our waiting times are down by a third." "Diagnoses have doubled in ten years." "Nine in ten deliveries now arrive on time." Each one gives you a figure and tells you what to make of it: more crime, shorter waits, more illness, better service.',
      'A figure is not the thing it stands for. It is what was written down, counted or measured, and then read as showing the real thing. Most of the time the two move together. Sometimes the figure moves and the real thing does not.',
      'There are three ordinary ways for that to happen. People who are judged on the figure can work on the figure instead of the real thing. The way of counting can change, so that the same situation gets a different number. Or more effort can go into finding the thing, so that more of what was always there turns up.'
    ],
    map: { branch: 'measure' } },

  /* ---------- The first name: people working on the figure ---------- */
  { id: 'meet-proxy', kind: 'meet', outcome: 'proxy',
    link: 'Start with the way that is easiest to understand, because every workplace has met it: a figure that decides who gets paid.',
    case: 'meas-parcels', mark: 'M1',
    strip: [
      'There is a figure: the share of parcels marked "delivered on time", 80 of every 100 last quarter and 96 of every 100 this quarter.',
      'The drivers are paid on the figure: a $200 bonus when 95 of every 100 parcels are marked on time.',
      'The drivers also make the figure: a driver marks a parcel on time by tapping a button.',
      'A second count, made by the customers and used for nothing, did not move: 79 of every 100 parcels arrived on time in both quarters.'
    ],
    explain: [
      'The report says that on-time delivery rose by 16 of every 100 parcels (96 − 80 = 16). Nothing in the report is false: the drivers did mark 96 of every 100 parcels on time. The figure moved by 16 and the real thing moved by 0.',
      'The figure and the real thing are two different events. One is a parcel arriving. The other is a driver tapping a button. While nobody cares about the tap, the two happen together, because a driver taps when a parcel arrives. Once $200 depends on the tap, the cheapest way to get more of them is to tap sooner: at the door before the customer has come to it, or from the van. That costs a driver nothing, and getting parcels to arrive on time costs a great deal. So the tap moved and the parcels did not.'
    ],
    feature: { step: 'M1', option: 'pushed' },
    name: 'The name for this is {o:proxy}. A "target" is a figure that people are asked to reach. "Gaming" means playing the system to reach it, here by tapping instead of delivering. The name is for the situation where people who are judged on a figure raise the figure itself, and not the real thing it was meant to show. Being paid on a figure is not enough: the name needs a way for the people to raise the figure without more of the real thing.',
    act: 'First find out who is paid, ranked or judged on the figure, and who makes it. Then look for a second count of the same real thing that nobody is judged on, such as customers’ own messages or a test with new questions, and see whether it moved as the figure did. Until you have found one, repeat only what the figure says ("marked on time") and not what it stands for ("on time").' },

  { id: 'check-proxy', kind: 'check', after: 'proxy',
    case: 'meas-bugs',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that the team gains from a higher figure and decides how it is made? Tap them.',
           answer: 'gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports' } },

  /* ---------- The first look-alike pair: the same bus company ---------- */
  { id: 'look-proxy-real', kind: 'lookalike', ledger: 'proxy~meas_ok',
    link: 'People reading a headline often cannot tell a figure that was worked on from a claim that holds. This card sets the two side by side.',
    cases: ['meas-bus-logged', 'meas-bus-gps'],
    instruction: 'Both claims are about the same bus company, and both give the same figure: trips on time rose from 78 of every 100 to 90 of every 100. Compare one thing: who makes the figure, and whether they gain if it is high.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-bus-gps' },
    difference: [
      'In Case A the drivers are paid when 90 of every 100 trips are logged on time, and each driver logs the trip with a press of a panel. The figure can rise from 78 to 90 because of what the drivers press, with no bus running any earlier. The first answer is {a:S1.measure}, and its second is {a:M1.pushed}: the case is {o:proxy}.',
      'In Case B nobody is paid on the figure, and a computer logs each trip from the bus’s satellite position, against a timetable that did not change. Nothing but the buses running earlier could move the figure from 78 to 90. Every part holds, so the first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: one figure at two times, said to have risen, and nothing more. The claim is a sound one: {plain:meas_ok}.'
    ] }
]);
