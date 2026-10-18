// Psychology, lesson 7, the mixed drill (part 7). From the owner's own course: Lesson 6 (the mixed identification drill), "Scoring your own reasoning" and
// "Honest caveats". Short teaching first (grade the process: the questions in order, the move kept apart from the person, the two answers that give no
// name, your own motivated reasoning; every name with its response; the honest limits), then the course's item 9 worked question by question, one set of every
// family shuffled (the course's two refusals back to back), and a check of ten new stories, eight to pass. A story counts as
// right only when every answer is right. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l7', part: '7', title: 'The mixed drill', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version, on the owner\'s own course: Lesson 6 (mixed identification), "Scoring your own reasoning" and "Honest caveats"; every name with its response, and a check of ten new stories.' }],
  why: [
    'A friend texts you: "My ex is a narcissist, right?" You have heard one angry paragraph. Often the honest answer is "I can\'t tell yet."',
    'In about twenty minutes: how to grade your reasoning, every name with what to do, the honest limits, then stories worked in order. A story counts only when every answer is right; 8 of 10 in the check passes.'
  ],
  flow: [
    { title: 'Grade the process, not just the name',
      show: [
        { kind: 'prose', text: [
          'A right name reached by skipping a step is still wrong.',
          '1. Question 1, what is going on: a mind talking itself into something, a move made on someone, a lasting way someone is, or an ordinary reaction.',
          '2. Question 2, one moment or a pattern: look for a hard time first (grief, stress, illness), then count how often, and with how many people. "Once or twice": the story says it is rare. "The story does not say": one scene, nothing about other times. Naming a pattern before this is a fail.',
          '3 to 5. What it does for them, the nearest look-alike, what would prove it wrong: the feedback works these.',
          'Then the name, only when its signs show together (a lasting way needs years and many people), then the response.',
          'Keep the move apart from the person: one gaslighting-shaped moment does not make a narcissist, and a move repeated on one person is still a move.',
          'Ordinary: the facts show a normal reason (stress, a fair point, a slip put right). Too little to tell: too few facts to see what is going on at all. Someone reaching for a name decides neither.',
          'If you already dislike the person, check your own motivated reasoning; how bad they make you feel is not a sign.'] }
      ] },
    { title: 'Every name, and what to do',
      show: [
        { kind: 'prose', text: [
          'A mind talking itself into something:',
          'Dissonance: the act first, an excuse after, and the belief kept. Say the contradiction plainly, then change the act or the belief.',
          'Motivated reasoning: the answer fixed first, the looking after. Say what would change your mind before you look.',
          'Confirmation bias: a belief already held; evidence against it gets a harder test. Hold both sides to the same standard.',
          'Sunk cost: the reason to go on points back at what is spent. Judge the next step on its own worth.',
          'Mind reading: sure what someone thinks, with no word from them. Test the thought.',
          'An honest change of mind: evidence moved the belief. Nothing to fix.',
          'A move made on someone:',
          'Gaslighting: over and over, what someone knows is denied until they doubt themselves. Trust your record: write things down and check with someone outside.',
          'DARVO (in one exchange: deny, attack, recast the accuser as the one at fault), attack and change the subject (the attack only), projection (accusing someone of what you do yourself; the tie-break with mind reading is the accuser\'s own behavior): bring it back to the one fact, calmly.',
          'Love-bombing, then the cold turn: devotion far too fast, then coldness once you lean on them. Slow down, and keep your own friends and plans.',
          'A lasting way someone is (years, many people):',
          'Some narcissistic traits: a few signs, not all together. Watch and find out more.',
          'Grandiose (loud superiority, hungry for praise, little empathy, contempt when challenged), vulnerable (quietly sure they are special and overlooked, withdrawn), borderline (terror of being left, clinging then fury, an unsteady self): keep firm limits; do not expect to talk them out of it. Borderline responds well to treatment.',
          'Antisocial (routine lies, people used, no remorse): protect yourself; keep secrets and money out of reach.',
          'Ordinary: nothing to fix. Too little to tell: find out more. If you fear for your safety, or the pattern is your own, that overrides the rest: get outside help, not limits.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'She took the Austin job the day it was offered, then read up on the city only for reasons she was right.' },
          b: { kind: 'prose', text: 'She has long believed city schools are worse: a good review of a suburban school is proof; one of a city school "is probably from a teacher".' },
          compare: 'The first decided, then hunted for backing: motivated reasoning. The second decides nothing; an old belief meets two rulers: confirmation bias.' }
      ] },
    { title: 'The honest limits',
      show: [
        { kind: 'prose', text: [
          'This is not a diagnostic tool. A diagnosis needs a clinician, an interview, a history, and other causes ruled out: illness, drugs or alcohol, a recent shock, or trauma, which can look like a personality pattern.',
          'A disorder is pervasive, starts by early adulthood and harms the person\'s life. The signs are family resemblances, not a checklist; the categories overlap and are debated.',
          'From a distance (an ex, a public figure) it is a guess, and culture shapes what confidence and feeling look like. These words are also weapons. For yourself, or a relationship that worries you, see a therapist.'] }
      ] },
    { worked: 'l7-w-credit' },
    { set: { items: ['l7-dis', 'l7-sunk', 'l7-rev', 'l7-gas', 'l7-proj', 'l7-bpd', 'l7-anti', ['l7-few', 'l7-def']], order: 'shuffle' } }
  ],
  check: {
    items: ['k7-text', 'k7-checkout', 'k7-shoes', 'k7-estate', 'k7-interrupt', 'k7-journal', 'k7-invoices', 'k7-quiz', 'k7-meeting', 'k7-quiet'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 8 } }]
  }
});
