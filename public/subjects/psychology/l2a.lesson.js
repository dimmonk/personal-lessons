// Psychology, lesson 2a, dissonance in depth (part 2a). The owner asked to understand cognitive dissonance in depth, so this lesson teaches it the way
// the research does: Festinger's theory (1957) and the stake in the self-image (Aronson 1969); the three classic findings (Festinger & Carlsmith 1959,
// Aronson & Mills 1959, Brehm 1956); the five ways a clash is eased, one straight and four bending (trivializing: Simon, Greenberg & Brehm 1995); the
// pyramid of choice; catching it in yourself; and talking to someone caught in it (Tavris & Aronson 2007). Lesson 2 introduces dissonance briefly; this
// one goes deep. One story is worked ask by ask; the practice sets the act-first story beside the answer-first one, then runs the moves, then mixes all
// the names; the check asks eight new stories. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l2a', part: '2a', title: 'Dissonance, in depth', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version: dissonance as the research explains it, the five ways a clash is eased, the pyramid of choice, catching it in yourself and talking to someone caught in it.' }],
  why: [
    'A friend pays $4,000 to join a selling scheme. When it fails, she defends it harder. That is dissonance, and everyone does it.',
    'In about twenty minutes: how researchers explain it, the five ways a clash gets eased, and how to catch it in yourself and others.'
  ],
  flow: [
    { title: 'What dissonance is',
      show: [
        { kind: 'prose', text: [
          'When an act and a belief do not fit ("I smoke", "smoking kills"), it feels bad, and the mind works to stop the feeling.',
          'The push is strongest when the act threatens "I am a good, smart person", so the repair protects the self-image, not the truth.'] },
        { kind: 'prose', text: PSY_QUESTIONS }
      ] },
    { title: 'Three findings',
      show: [
        { kind: 'prose', text: [
          'Paid too little. Students did a dull task, then told the next one it was fun. Paid $20, they still called it dull. Paid $1, they rated it more fun: with no outside reason, the belief slid toward the act.',
          'An embarrassing entry. Women who passed an embarrassing test to join a dull discussion group liked it more than women who got in easily.',
          'After a choice. Choosing between two appliances rated about equal, people then rated the chosen one higher, the other lower.',
          'The thread: the less outside reason you had, and the more the act touched your picture of yourself, the harder the mind defends it.'] }
      ] },
    { title: 'Five ways the clash is eased',
      show: [
        { kind: 'prose', text: [
          'Everyone feels the clash; what counts is how it is eased. A "careful driver" gets a speeding ticket:',
          'The act changes: he now drives at the limit. The straight way.',
          'A new reason, nothing changes: "Everyone does 80 there."',
          'The source is attacked: "That cop just has a quota."',
          'It is made not to matter: "Ten over is nothing" (trivializing).',
          'The belief slides to fit what was done: with nothing new learned, he now thinks a little speeding is safe.',
          'Dissonance: the clash is eased by bending, any of the last four. Ordinary: they took the straight way. An honest change of mind: new evidence, not the act, moved the belief.'] }
      ] },
    { title: 'Look-alikes, signs, and what to do',
      show: [
        { kind: 'prose', text: [
          'Motivated reasoning runs the other way: the answer first, then the looking. Dissonance: the act first, then the story. A decision made only in your head is not yet an act.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'She picked the gray sofa before shopping, then read only its good reviews.' },
          b: { kind: 'prose', text: 'She bought the gray sofa on a whim. When a friend called it cheap: "She only likes expensive things."' },
          compare: 'The first: answer, then looking. The second: act, then story.' },
        { kind: 'prose', text: [
          ...psyRows(['dissonance', 'motivated', 'revision', 'ordinary']),
          'Too little to tell: too few facts to see what is going on (one scene, no context). Reaching for a name does not decide it; find out more.',
          'What to do. Dissonance: in you, say the contradiction plainly and change the act or the belief; in someone else, leave a way out that saves face. Motivated reasoning: say what would change your mind before you look. Otherwise: nothing to fix, or find out more.'] }
      ] },
    { title: 'The pyramid, catching it, and talking to someone',
      show: [
        { kind: 'prose', text: [
          'The pyramid of choice. Two students, both unsure about cheating, face one exam. One cheats a little; one does not. Soon one thinks cheating is no big deal, the other that cheaters should be expelled. Small first steps carry near-twins far apart.',
          'In yourself, the tell: the reason came after the act, and it protects how you see yourself. Test it: would I accept this reason from someone I disagree with?',
          'In someone else: attacking who they are ("how could you fall for that?") raises the stake and hardens the belief. Separate the person from the act ("this fools smart people") and leave a way to change their mind without losing face.',
          'From before: sunk cost (the reason points back at what is spent) and confirmation bias (two standards for evidence). Question 1: a lasting way someone is means the same with many people, for years.'] }
      ] },
    { worked: 'w2a-prophecy' },
    { set: { items: [['d2a-college-mot', 'd2a-college-dis']], order: 'listed' } },
    { set: { items: ['d2a-pickup', 'd2a-offers', 'd2a-movie', 'd2a-loans'], order: 'shuffle' } },
    { set: { items: ['d2a-mlm', 'd2a-meds', 'd2a-sickday', 'd2a-doctor', 'd2a-husky'], order: 'shuffle' } }
  ],
  check: {
    items: ['k2a-tasting', 'k2a-mayor', 'k2a-ring', 'k2a-calls', 'k2a-partner', 'k2a-stadium', 'k2a-divorce', 'k2a-union'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
