// Debating, lesson 7, which true experience to share (part 7 of the plan's ten lessons; the plan's "share one true experience... plus one fact" was reshaped). Kubin et al. 2021 (15
// studies, read in full on 2026-10-21, docs/research/debating.md, F6) compared experiences that differ in three ways: about the issue or not (Study 7), harm in it or not (Study 8), and
// who it happened to (Study 9). Respect was the outcome and persuasion was set aside; the advantage held for moral disagreements and not for ordinary matters (Study 13). "Plus one
// fact" is dropped: the authors only speculate that facts could follow experiences. "Non-judging" is not taught as an ingredient (Santoro et al. 2025: listening added no persuasion
// to a story). "Short" is the lesson's own advice, said so; lesson 5 already teaches keeping every line true. The practice is one decision: which of the true things that happened
// to you to tell. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l7', part: '7', title: 'Which true experience to share', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, on the full text of Kubin et al. 2021 (15 studies). The plan\'s "plus one fact" was dropped (only a guess by the authors) and so was "non-judging" as an ingredient (listening added no persuasion to a story in the 2025 field test). The practice is one decision: of three true things that happened, which one the studies rank highest.' }],
  why: [
    'Your coworker Gina is against raising the minimum wage. You are for it, and she wants to know, "Why do you care so much?" You have a report with numbers in it, and several true things that have happened to you. Which do you tell her?',
    'In about fifteen minutes you will learn what 15 studies found about which kind of personal experience earns the most respect from someone who disagrees with you, and where that finding stops.'
  ],
  flow: [
    { title: 'What the studies tested',
      show: [
        { kind: 'prose', text: [
          'In 15 studies, mostly online with US adults, people rated an opponent on a moral or political question who backed their stance with a personal experience or with facts. Most were about guns; others were about immigration and other moral or political questions. The one with the experience was rated more reasonable and earned more respect. One test was a real face-to-face talk about guns with people stopped in public.',
          'The opponent had based their own stance on the experience, as you would in answering "Why do you care?" The studies measured respect. They put aside whether anyone changed their mind.'] }
      ] },
    { title: 'Which experience earns more',
      show: [
        { kind: 'prose', text: [
          'Two differences were tested pair by pair. About the issue: an experience about the issue itself earned more respect than facts and more than an unrelated one (a business that went bankrupt, told in a gun debate), and the unrelated one earned no more than facts. With harm in it: an experience involving harm earned more than one with none, though one about the issue with no harm still beat facts.',
          'A third difference was also looked at: who it happened to. Respect rose from something the person had read about, to what happened to a friend or relative, to what happened to the person. The paper gives that as one overall test and three averages, not pair by pair, so the practice here never has you choose between them.'] }
      ] },
    { title: 'Where it stops',
      show: [
        { kind: 'prose', text: [
          'The advantage held for moral disagreements, disputes about right and wrong. In one study, on a plain matter of taste (blenders), facts earned as much respect as experiences. The samples were American as far as the paper says, and the result is respect, not a changed mind.',
          'Length was not tested, so "keep it short" is our advice. The authors guess that experiences might come first and facts later, and did not test it. A story about someone you know was tested too: one study had people hear about a friend or relative who suffered, and it still earned respect. Whatever you tell, keep every line true.'] }
      ] },
    { worked: 'w7-gina' },
    { set: { items: ['a7-hal', 'a7-ines', 'a7-rob'], order: 'listed' } },
    { set: { items: ['b7-lena', 'b7-cal', 'b7-marcus', 'b7-nan', 'b7-owen'], order: 'shuffle' } }
  ],
  check: {
    items: ['c7-jay', 'c7-bill', 'c7-dale', 'c7-wes', 'c7-gil', 'c7-pia', 'c7-sue', 'c7-kim'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
