// IT Help Desk, lesson 6: One change at a time (part one). Move 6 of the way of thinking: change one thing and look at the result, and when a test rules
// a cause out, cross it off and go to the next, even when the first idea feels sure. Research: docs/research/it-support.md IT9 (experts fixate on the
// first idea; the safeguard is the written list and dropping a cause when its test fails), IT3 (systematic elimination of causes; structured work can be
// picked up by someone else). Plan: docs/subjects/it-support/plan.md, lesson 6.
// One worked ticket (Joy and the office Wi-Fi); a first group of four with the deciding words marked; a second group of four; a third of three mixed with
// lesson 5; and the check: five new questions, no help, 4 of 5 to pass. "One change at a time" is a working habit, not a sourced rule: IT9 and IT3
// give the written list and the dropping of a ruled-out cause, not the single change. The lesson says so. One round, in one order everywhere:
// list, test, cross off, change one thing, look, write it down. Tests assume one fault at a time (IT4).
FC.lesson('it-support', {
  id: 'l6', part: 'one', title: 'One change at a time', rev: 1, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (one change then a look; dropping a cause its test rules out; the first idea that will not let go).' }],
  why: [
    'Joy’s laptop will not join the office Wi-Fi. The Wi-Fi was down last week, so you are sure it is the router (the box that connects the office to the internet). You restart the router, update her Wi-Fi software and clear her saved networks (the Wi-Fi names and passwords her laptop remembers). The laptop joins. What fixed it? Nobody knows, and if it breaks again nobody knows what to do.',
    'You can cut a problem in half and still lose the answer by changing too much at once, or by staying with an idea the test already ruled out. Here you learn to change one thing, look, and cross off what the test rules out.'],
  flow: [
    { title: 'One change, then look',
      show: [{ kind: 'prose', text: [
        'Work in rounds, always in this order. Write down the causes. Run a test, which changes nothing you cannot put straight back, and cross off any cause its result rules out. Then change one thing for the next cause, check whether the problem is gone, and write down what you changed and what happened.',
        'Change two things at once and you cannot tell which one did it. If the problem goes away, you do not know the cause, and the next person cannot tell. If it stays, you cannot cross either one off. And a change you did not need stays in, so the computer is left different for no reason.',
        'It costs a few minutes a round, and it keeps the cause known. The written note lets someone else pick up where you stopped. This is a working habit this course uses, not a sourced rule, and it has no exception: small changes go one at a time too.'] }] },
    { title: 'Cross off what the test rules out',
      show: [{ kind: 'prose', text: [
        'A test rules a cause out when its result could not happen if that cause were the one. Joy’s phone joins the office Wi-Fi, so the office Wi-Fi is working: that cause is ruled out. Cross it off and take the next cause on the list.',
        'Which cause is next? Look at the causes still on the list and take the one with the cheapest test, as when you cut a list in half: the fewest minutes, and the easiest to put back. Ten seconds of looking at a switch comes before an hour of replacing a part.',
        'A cause stays on the list when no test has touched it. The phone never used Joy’s laptop, so her laptop and its own Wi-Fi settings stay. Cross off only what a result rules out. As with the splitting tests before it, this assumes one fault at a time: if two parts are bad, a part that did not help can still be bad.',
        'A part known to work is the clearest test, and a swap can be put back, so it is a test. Put it where the doubtful one was. If the problem stays, the old part is not the cause, even if you were sure it was: put the old part back and cross it off. If the problem goes, keep the new part: that swap is now your one change.'] }] },
    { title: 'The idea that will not let go',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“I am sure it is the cable. A cable known to work did not help, so I will try another cable. And another one.”',
        'The knowledge that makes an expert quick can also make the first idea hard to let go of. A test that came back clean ruled that cause out. Cross it off, and take the next cause on the list.'] }] },
    { worked: 'l6-w-joy' },
    { set: { items: ['l6-p-sam', 'l6-p-gia', 'l6-p-mail', 'l6-p-vik'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l6-s-order', 'l6-s-ken', 'l6-s-dock', 'l6-s-hana'], order: 'shuffle' } },
    { set: { items: ['l6-g-marcus', 'l6-g-quinn', 'l6-g-jun'], order: 'shuffle', mix: { from: ['l4', 'l5'], share: 0.3 } } }
  ],
  check: {
    items: ['l6-k-lila', 'l6-k-pat', 'l6-k-scan', 'l6-k-uma', 'l6-k-order'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }]
  }
});
