// Psychology, Unit Two: the faulty claims of the last stage.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the "what you must be able
// to point to" lines of each name). ask.type 'option': the question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('psychology', 'u2', [

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo', use: 'claim',
    text: '"She sold the condo at a loss after ten years. That’s the sunk cost fallacy."',
    ask: { type: 'missing', name: 'sunkcost' },
    fault: 'The claim points at money lost and stops there. Losing money is not {o:sunkcost}, and neither is stopping. The name goes with the answer {a:R1.backward}, and she did not keep going. Nothing in the claim shows her reasoning at all.',
    corrected: 'She sold the condo at a loss after ten years. That tells you what she decided, not how she reasoned. It would be {o:sunkcost} only if she had refused to sell, and had given the ten years or the money already paid as her reason.' },

  { id: 'claim-mismatch', use: 'claim',
    text: '"He says he cares about the climate, and he flies every month. Classic cognitive dissonance reduction."',
    ask: { type: 'missing', name: 'dissonance' },
    fault: 'The claim points at two things that do not fit, what he says and what he does, and stops there. It never shows him giving a reason why the flying is fine. Two things that do not fit are not yet {o:dissonance}. They are not even {t:cd}, which is a discomfort he may or may not feel.',
    corrected: 'He says he cares about the climate, and he flies every month. Those two do not fit. It becomes {o:dissonance} only if he gives a reason why the flying is fine after all.' },

  { id: 'claim-waste', use: 'claim',
    text: '"If she leaves the course now, the two years she has done will have been for nothing."',
    ask: { type: 'option', step: 'R1', answer: 'backward' },
    fault: 'The speaker is reasoning on her behalf, and the reason is the two years already spent. Those are spent whether she stays or leaves.',
    corrected: 'The two years are spent whether she stays or leaves. What she can still decide is the next two, so the question is what those would cost her and what they would bring.' }
]);
