// Psychology, lesson 2, a mind talking itself into something (part 2). From the owner's own course, Lesson 2, and the way researchers tell these
// biases apart: what came first, the act, the answer or the evidence (dissonance, Festinger 1957; motivated reasoning, Kunda 1990; an honest change
// of mind), how the evidence is treated (confirmation bias, Nickerson 1998), and which way the reason points (sunk cost, Arkes & Blumer 1985).
// Dissonance is introduced here and taken in depth in lesson 2a. One story is worked question by question; the practice runs each name beside its
// nearest look-alike, then all of them shuffled with two stories on the five questions; the check names eight stories in shapes the practice never
// showed. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l2', part: '2', title: 'A mind talking itself into something', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version, on the owner\'s own course (Lesson 2, Drills 2.1 and 2.2): dissonance, confirmation bias, motivated reasoning, sunk cost, an honest change of mind, told apart by what came first and how the evidence is treated.' }],
  why: [
    'A friend who says she never gossips spends lunch on a coworker\'s divorce, then says, "That was not gossip, I was worried." Your uncle keeps a timeshare he hates: "We have paid into it for ten years." Both sound like reasons; they are different machines.',
    'In about twenty minutes you will learn four ways a mind talks itself into something, and the honest change of mind.'
  ],
  flow: [
    { title: 'Three checks',
      show: [
        { kind: 'prose', text: [
          'The five questions still run in order. Question 1, what is going on, has four answers: a mind talking itself into something, a move made on someone, a lasting way someone is (years, many people), or an ordinary reaction. Question 2, one moment or a pattern: a reaction to a hard time, once or twice, over and over for months or years, or the story does not say.',
          'These stories are the first answer: one person reasoning toward what they want. Three checks tell them apart.',
          'A. What came first? An act against their own belief, then the mind eases the clash: dissonance. An answer they want, then looking for reasons: motivated reasoning. The evidence, then the belief moves: an honest change of mind.',
          'B. How is the evidence treated? A belief already held, what fits it waved through, what goes against it picked apart or never looked at: confirmation bias.',
          'C. Which way does the reason point? Back at money or time already spent: sunk cost. This check wins when another also fits.'] }
      ] },
    { title: 'Act first, or answer first',
      show: [
        { kind: 'prose', text: [
          'Dissonance: what you did clashes with what you believe or how you see yourself. Facing it changes the act. Dodging it eases the clash: an excuse, a jab at whoever brought the bad news, making it not matter, or the belief sliding to fit what was done.',
          'Motivated reasoning starts with the answer the person wants. If the answer was picked before the looking, it is motivated reasoning, even when the looking is one-sided too.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'Before seeing a single house, she decided on the Maple Street one, then toured five others to list what was wrong with them.' },
          b: { kind: 'prose', text: 'She bought the Maple Street house in a rush. Six months later, with the roof leaking, she said, "Honestly, a leaky roof is character."' },
          compare: 'In the first, the answer came before the looking. In the second, the act came before the story.' }
      ] },
    { title: 'Two standards, and what is spent',
      show: [
        { kind: 'prose', text: [
          'Confirmation bias needs only a belief already held. The test: would they accept this evidence if it pointed the other way?'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'She believes in her horoscope. She counts every time it was right and forgets the misses.' },
          b: { kind: 'prose', text: 'She believes in her horoscope. She writes its predictions down first, then checks every one.' },
          compare: 'The first has two standards. The second has one.' },
        { kind: 'prose', text: [
          'Sunk cost: what is spent is gone either way; only what the next step is worth counts. Dissonance often feeds it: quitting would admit the waste.',
          'An honest change of mind is not a bias: the evidence led, and they can say what moved them, and what would have moved them the other way.'] }
      ] },
    { title: 'The signs, and what to do',
      show: [
        { kind: 'prose', text: [
          ...psyRows(['dissonance', 'confirmation', 'motivated', 'sunk', 'revision']),
          'What to do. Dissonance: say the clash plainly, then change the act or the belief. Confirmation bias: one standard for both sides. Motivated reasoning: say what would change your mind before you look. Sunk cost: judge the next step on its own worth. An honest change of mind: nothing to fix.',
          'Ordinary: the facts show a normal reason (a fair point, a slip put right); nothing to fix. Too little to tell: too few facts to see what is going on; find out more.'] }
      ] },
    { worked: 'w2-nephew' },
    { set: { items: [['p-dinner', 'p-denver'], 'p-shirt'], order: 'listed' } },
    { set: { items: [['p-buffet', 'p-basement'], ['p-store', 'p-thermo']], order: 'listed' } },
    { set: { items: ['p-card', 'p-quiet', 'p-shop', 'p-feature', 'p-vitamin', 'p-potluck', 'p-coffee', 'e-gas', 'e-hospital', 'e-complaints'], order: 'shuffle' } }
  ],
  check: {
    items: ['k-sauce', 'k-choir', 'k-steak', 'k-sixyears', 'k-email', 'k-vote', 'k-house', 'k-metric'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
