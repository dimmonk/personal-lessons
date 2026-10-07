// Statistical Claims, Unit Four, part one (first half): the opening card and the first name.
// This is a branch unit of an action subject (subject.action is true): every name says what to do (`act`), and the unit ends with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the
// reminder of the questions this unit leans on, the preview map, the heading of a meet card, the key's question and answer on a meet card,
// the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.
// Words this unit keeps to one meaning each: claim (what someone says with a figure in it), figure (the number in a claim), the real
// thing (what the figure is read as showing), found (counted as having something).

FC.cards('stats', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'A number went up. Did the thing it counts go up?',
    canDo: 'Before you believe "burglaries are up 30%" or "waiting times are down a third", check what else could have moved the figure. It is usually one of three things, and each needs a different check.',
    everyday: [
      'You have met claims like these. "Reported burglaries are up 30% since the new hotline." "Diagnoses have doubled in ten years." "Nine in ten deliveries now arrive on time." Each one gives you a figure and tells you what to make of it: more crime, more illness, better service.',
      'A figure is not the thing it stands for. It is what someone wrote down, counted or measured. Most of the time the two move together. Sometimes the figure moves and the real thing stands still.'
    ],
    map: { branch: 'measure' } },

  /* ---------- The first name: people working on the figure ---------- */
  { id: 'meet-proxy', kind: 'meet', outcome: 'proxy',
    link: 'Start with the one every workplace knows: a figure that decides who gets paid.',
    case: 'meas-parcels', mark: 'M1',
    explain: [
      'The report says on-time delivery rose by 16 of every 100 parcels (96 − 80 = 16), and nothing in it is false: the drivers really did mark 96 in 100 on time. But customers’ own messages show 79 in 100 on time in both quarters. The figure moved by 16 and the real thing moved by 0.',
      'Getting a parcel to the door on time is hard. Tapping the button is free. Once $200 depends on the tap, the cheapest way to get more taps is to tap sooner: at the door before the customer comes to it, or from the van. So the taps went up and the parcels did not.'
    ],
    spot: [
      { do: 'Find who is paid on the figure: each driver gets $200 at 95 in 100.', why: 'People work on what they are paid for.' },
      { do: 'Find who makes the figure: the driver taps the button himself.', why: 'The people who gain from a high figure should not be the ones who write it down.' },
      { do: 'Look for the easy way to raise it: tap “on time” before the parcel arrives.', why: 'If raising the figure is easier than raising the real thing, expect it.' }
    ],
    feature: { step: 'M1', option: 'pushed' },
    name: 'This is {o:proxy}. Being paid on a figure is not enough by itself: the people also need an easy way to raise it without raising the real thing.',
    act: [
      { do: 'Look for a count that nobody is paid on: customers’ own messages, or a test with new questions.', why: 'If that count stayed flat while the figure rose, the real thing did not move.' },
      { do: 'Until you find one, repeat only what the figure says: “marked on time”, not “on time”.', why: 'That keeps what you know apart from what you assume.' }
    ] },

  { id: 'check-proxy', kind: 'check', after: 'proxy',
    case: 'meas-bugs',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that the team is paid by the count and decides how problems are split into reports? Tap them.',
           answer: 'gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports' } },

  /* ---------- The first look-alike pair: the same bus company ---------- */
  { id: 'look-proxy-real', kind: 'lookalike', ledger: 'proxy~meas_ok',
    link: 'Two headlines can quote the same rise. In one the figure was worked on, and in the other it moved because the buses did.',
    cases: ['meas-bus-logged', 'meas-bus-gps'],
    instruction: 'Both stories are about the same bus company and give the same figure: trips on time rose from 78 of every 100 to 90 of every 100. Compare one thing: who makes the figure, and whether they gain if it is high.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-bus-gps' },
    difference: [
      'In Story A the drivers get a bonus at 90 in 100, and each driver presses “on time” or “late” himself. The figure can reach 90 without a single bus running earlier. That is {o:proxy}.',
      'In Story B nobody is paid on the figure, and a computer logs each trip from the bus’s satellite position against a timetable that did not change. Only the buses running earlier could move it from 78 to 90. That is {o:meas_ok}.'
    ] }
]);
