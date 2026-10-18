// Psychology, lesson 6, moves made on someone (part 6). The way of thinking: a move is named by its whole sequence and what it does, never by one
// uncomfortable moment, and safety comes before any name. The five questions restated by what they ask; the defenses everyone uses (Vaillant 1992),
// told apart from moves by Question 3; then gaslighting (Sweet 2019: over and over, the doubt, a power gap), DARVO and its near cousin (Freyd 1997:
// the response of the one who did it, so the story shows it happened), love-bombing then the cold turn (early idealization, then devaluation), and
// projection, each with its signs and its response on its own screen; when it is not safe (the US National Domestic Violence Hotline); and the trap
// of calling everything manipulation, with what is wrong in each faulty claim of the owner's course (Drill 5.2). One story worked question by
// question; a guided set (two earlier lessons, gaslighting against an ordinary disagreement), then one shuffled set of every name; the check names
// eight new stories, and asks the response where it is a real choice. Plan: docs/subjects/psychology/plan.md.
(() => {
  const RESPONSE = {
    gaslighting: 'Response: trust your record; write things down, check with someone outside.',
    darvo: 'Response: bring it back to the one fact, calmly. Do not take the bait.',
    deflect: 'Response: bring it back to the one fact, calmly.',
    lovebomb: 'Response: slow down, and keep your own friends and plans.',
    projection: 'Response: stay with the one fact, calmly. Do not argue the feeling.'
  };
  const row = id => `${psyRows([id])[0]} ${RESPONSE[id]}`;
  FC.lesson('psychology', {
    id: 'l6', part: '6', title: 'Moves made on someone', rev: 2, status: 'draft',
    history: [
      { rev: 1, date: '2026-10-18', change: 'First version, on the owner\'s own course (Lesson 5, Drills 5.1 and 5.2): defense mechanisms, gaslighting, DARVO, attack and deflect, love-bombing, projection, the trap of calling everything manipulation, and the response to each.' },
      { rev: 2, date: '2026-10-18', change: 'Rewritten after review: one screen per move with its signs and response, safety on its own screen, what is wrong with each faulty claim, DARVO stories that show the denial is false, no story shaped like another lesson\'s, and twenty minutes measured.' }
    ],
    why: [
      'Your sister says her ex "gaslit" her. A coworker calls a hard question "DARVO". Sometimes they are right; often it was one bad moment.',
      'In about 19 minutes: five moves people make, the ordinary twin of each, and what to do.'
    ],
    flow: [
      { title: 'The questions, for moves',
        show: [
          { kind: 'prose', text: [
            'Five questions, name last: 1 what is going on, 2 one moment or over and over, 3 what it does for them, 4 the nearest look-alike, 5 what would prove you wrong. A move is named by its whole sequence and what it does, never by one uncomfortable moment.',
            '"Ordinary": the facts show a normal reason (a hard time, a fair point, a slip put right); nothing to fix. "Too little to tell": too few facts to see anything; find out more first.'] }
        ] },
      { title: 'Defenses',
        show: [
          { kind: 'prose', text: [
            'Denial (refusing a fact), projection (seeing your own feeling in others), rationalization (a reason made up afterward), displacement (a feeling sent to a safer target), intellectualization (talking in facts, not feelings).',
            'Question 3, what it does: a defense shields a person from their own pain; it is not aimed at you. In a hard time it is ordinary.'] }
        ] },
      { title: 'Gaslighting',
        show: [
          { kind: 'prose', text: [
            row('gaslighting'),
            'It escalates, often across a power gap: a boss, a parent.'] },
          { kind: 'pair',
            a: { kind: 'prose', text: '“I never said that.” You show the text. “Huh. You\'re right.”' },
            b: { kind: 'prose', text: '“I never said that, you always get confused.” A year of it, and you now doubt yourself first.' },
            compare: 'Only the second repeats and plants the doubt.' }
        ] },
      { title: 'DARVO, and its near cousin',
        show: [
          { kind: 'prose', text: [
            row('darvo'),
            row('deflect'),
            'The story must show it happened; one part alone is not DARVO.'] },
          { kind: 'pair',
            a: { kind: 'prose', text: 'Your bike came back flat, his helmet on it. “I never touched it. You always blame me. I\'m the one being attacked here.”' },
            b: { kind: 'prose', text: 'The same bike: “I never touched it. Anyway, you lost my charger.”' },
            compare: 'Only the first flips who is the victim.' }
        ] },
      { title: 'Love-bombing',
        show: [
          { kind: 'prose', text: [
            row('lovebomb'),
            'Speed alone is common; without the cold turn, too little to tell.'] },
          { kind: 'pair',
            a: { kind: 'prose', text: 'On the third date he says she is "the one". When she keeps a night with friends, he goes quiet for days.' },
            b: { kind: 'prose', text: 'After a month she is crazy about him; he wants to go slower. Both keep their friends.' },
            compare: 'Only the first outruns what he could know, then turns cold. The second is ordinary.' }
        ] },
      { title: 'Projection, as a move',
        show: [
          { kind: 'prose', text: [
            row('projection'),
            'Both must show: their own act, and no fact behind it.'] },
          { kind: 'pair',
            a: { kind: 'prose', text: 'He has been late to every family dinner this month. He tells his sister, always on time, "You never respect anyone\'s time."' },
            b: { kind: 'prose', text: 'His sister has been late to every dinner this month. He says the same.' },
            compare: 'Only the second has a record behind it.' }
        ] },
      { title: 'When it is not safe',
        show: [
          { kind: 'prose', text: [
            'Safety comes before naming. If the story shows fear of the other person, or control (a phone read, friends picked, a door blocked), get outside help: a therapist, or in the US the National Domestic Violence Hotline, 1-800-799-7233, or text START to 88788. Wanting more time together is a preference, not control.'] }
        ] },
      { title: 'The trap: everything becomes manipulation',
        show: [
          { kind: 'prose', text: [
            'What is wrong with each claim?',
            '"He disagreed with me, that\'s gaslighting": one disagreement, no repeat, no doubt.',
            '"That\'s literally DARVO", about a calm explanation: no false denial, no attack, no flip.',
            '"He love-bombed me", about two warm years: the warmth fit how well he knew her, and never turned cold.'] }
        ] },
      { worked: 'w6-plans' },
      { set: { items: ['x6-e-deposit', 'x6-e-pills', ['x6-g-dog', 'x6-g-edits']], order: 'listed' } },
      { set: { items: [['x6-d-camera', 'x6-d-check'], ['x6-l-bomb', 'x6-l-early'], 'x6-p-lamp', 'x6-l-control', 'x6-d-facts', 'x6-m-hurt'], order: 'shuffle' } }
    ],
    check: {
      items: ['k6-wallet', 'k6-club', 'k6-swim', 'k6-golf', 'k6-snippy', 'k6-door', 'k6-text', 'k6-savings'],
      feedback: 'at-end', order: 'shuffle',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
