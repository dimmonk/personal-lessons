// Psychology: specimens for the full determination. Only the five that belong to Unit Two's branch are here.
// The scenario text is the app's existing text (dashes replaced by full stops or commas). What changes: the route
// uses the rewritten key, every question has its own marked words and its own reason (so a wrong route can be
// explained question by question, starting with the first), and the old "What would falsify this reading" text is
// kept under a plain label: "What would make it a different name".
// A specimen is offered only when the unit that teaches its outcome is done (specimen.outcome -> key outcome.unit).
// Order: clean before varied before misleading, with look-alike names next to each other (lesson standard E13).
// Specimens are never used for returns: they are the determination's own material.

FC.specimens('psychology', [
  { id: 'sp-phd', tier: 'clean', setting: 'learning', topic: 'a PhD',
    text: "Three years into a PhD she no longer wants, she tells her advisor she'll finish anyway: \"I can't have wasted three years for nothing.\"",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: "she tells her advisor she'll finish anyway", R1: "I can't have wasted three years for nothing" },
    reason: { D1: 'One person is giving her reason for a choice of her own: {cue:D1}.',
              R1: 'Her reason for finishing is {cue:R1}: the three years already spent. Nothing in it is about what finishing would bring.' },
    not: { outcome: 'dissonance', why: 'She is not giving a reason why something she did is fine. A next step is still to be decided, the remaining years, and the years already spent are her reason for taking it.' },
    wouldChange: 'If finishing would bring her something she wants, and that were her reason, carrying on would be {o:fair}.' },

  { id: 'sp-plant', tier: 'clean', setting: 'work', topic: 'a manufacturing process',
    text: "For years he assumed the new manufacturing process was more expensive. When the plant finally ran the actual numbers, it was cheaper. He was the first to say so in the meeting, and asked for the analysis to be circulated.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'For years he assumed the new manufacturing process was more expensive', R1: 'He was the first to say so in the meeting' },
    reason: { D1: 'The case shows how one person changes a view of his own: {cue:D1}, until the numbers were run.',
              R1: 'The numbers went against what he had assumed for years. He gave them no harder test for that, and his view went where they pointed: {cue:R1}.' },
    not: { outcome: 'confbias', why: '{o:confbias} would have him asking how the numbers were run because they went against him. He asked for them to be sent round.' },
    wouldChange: 'If he had spent those years keeping the numbers from being run, this would be giving in, not going where the facts point.' },

  { id: 'sp-analysts', tier: 'varied', setting: 'work', topic: 'analysts in a report',
    text: "The report cites six analysts who back her thesis and dismisses the two who don't as \"not understanding the sector\", a phrase she doesn't apply to any of the six, several of whom have less sector experience than the two she dismissed.",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'who back her thesis', R1: "a phrase she doesn't apply to any of the six" },
    reason: { D1: 'The case shows how one person defends a view of her own, her thesis: the report cites analysts {cue:D1} and dismisses those who do not.',
              R1: 'The two analysts against her view are tested on their knowledge of the sector. The six for it are not: it is {cue:R1}. One side gets a harder test.' },
    not: { outcome: 'motivated', why: 'The case does not show a search she set out on with the answer chosen beforehand. It shows a view, and one test applied to one side only.' },
    wouldChange: 'If the two dismissed analysts had a real fault in their method that the six did not share, and she had checked all eight for it, the dismissal would be earned, and this would be {o:fair}.' },

  { id: 'sp-invest', tier: 'varied', setting: 'money', topic: 'an investment', also: ['scrutiny'],
    text: "He'd already decided to invest before he asked anyone's opinion. Every \"due diligence\" conversation after that was really just him listening for agreement, and getting irritated at anyone who raised a concern.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'him listening for agreement', R1: "He'd already decided to invest before he asked anyone's opinion" },
    reason: { D1: 'The case shows how one person backs up a choice of his own: the conversations were {cue:D1}.',
              R1: 'He set out on a search, the "due diligence" conversations, and the answer came before it: {cue:R1}. The conversations could only supply support.' },
    not: { outcome: 'confbias', why: 'He is harder on concern than on agreement, which would fit {o:confbias}. But he set out on a search, and the answer was chosen before it began. When a case shows both, that decides it.' },
    wouldChange: 'If he could say what he would have needed to hear to walk away, and would have walked away on hearing it, the asking would have been a real search, and this would be {o:fair}.' },

  { id: 'sp-different', tier: 'misleading', setting: 'home', topic: 'a promise to leave',
    text: "\"I know I promised myself I'd leave if it happened again, but this time really is different. He explained why it wasn't his fault.\"",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: "I promised myself I'd leave if it happened again", R1: 'this time really is different' },
    reason: { D1: 'The case is one person’s account of a choice of her own. She made herself a promise, {cue:D1}, and she is explaining why she is not keeping it.',
              R1: 'She did something that does not fit her promise: she stayed. {cue:R1} is the reason she gives afterwards for why staying is fine. His explanation is in the case, but she has not tested it; she is using it.' },
    not: { outcome: 'fair', why: 'Her plan changed, but no checked fact came between the promise and the staying. An explanation from the person she promised to leave is not something she tested.' },
    wouldChange: 'If "this time is different" could be checked by something other than his word, and she had checked it, this would be {o:fair}.' }
]);
