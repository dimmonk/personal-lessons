// Psychology, Unit Three: drill cases for the piece stage (the learner taps the words that decide). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('psychology', 'u3', [

  { id: 'p-gas', use: 'drill', tier: 'varied', setting: 'health', topic: 'old pills',
    text: "When Noor started a new blood-pressure pill, her husband Dev took her old prescription to the pharmacy, and the receipt shows he did. Since January, whenever she asks where the old pills went, he says, 'I never touched them,' and later, 'You moved them yourself and forgot,' and later, 'Your memory isn't what it was.' By April Noor has started to ask her daughter whether he is right.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever she asks where the old pills went, he says, 'I never touched them,' and later, 'You moved them yourself and forgot,' and later, 'Your memory isn't what it was.' By April Noor has started to ask her daughter whether he is right." },
    reason: { T1: 'The receipt shows he really did take the prescription. He then tells her it did not happen: {cue:T1} It comes back for months, and Noor has begun to doubt her own memory.' },
    not: { outcome: 'darvo', why: 'There is no single exchange of a denial, an attack and playing the one wronged. The same denial returns for months, until Noor doubts her memory.' } },

  { id: 'p-love', use: 'drill', tier: 'varied', setting: 'community', topic: 'a choir friend',
    text: "A new choir member, Tomas, wrote to Elle every day for two weeks about how special her voice was, gave her a ticket to his sister's concert, and told the choir she was its heart. When Elle said she could not go to the concert, he stopped speaking to her at rehearsals and told a friend she had been 'using him'.",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ["wrote to Elle every day for two weeks about how special her voice was, gave her a ticket to his sister's concert, and told the choir she was its heart", "he stopped speaking to her at rehearsals and told a friend she had been 'using him'"] },
    reason: { T1: 'The attention was far more than two weeks would explain: {cue:T1}. It was pulled back, and turned into criticism, once Elle did not go along.' },
    not: { outcome: 'ordexchange', why: 'Warmth from a new friend would be {o:ordexchange} if it stayed warm. Here it is pulled back and turns critical when Elle says no.' } }
]);
