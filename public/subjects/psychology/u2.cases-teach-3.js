// Psychology, Unit Two: teach, parts two and three: fair reasoning, its look-alikes, the near-miss, the check on the question and the worked case.

FC.cases('psychology', 'u2', [
  /* ---------- Following the facts ---------- */
  { id: 'floodlights', use: 'teach', tier: 'clean', setting: 'community', topic: 'night games', name: 'The night games',
    text: "For years Ben told his soccer club's committee that night games under the lights would bring bigger crowds. The club tried it for a season. Then the attendance figures came in: crowds were smaller at every night game. 'I wanted this to work,' Ben told the committee. 'It didn't. I was wrong.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: "It didn't. I was wrong." } },

  { id: 'novel', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a new novel',
    text: "Farah told her book club for a month that her favorite author's new novel would be a masterpiece. She read it over the weekend. 'It's a mess,' she told them on Monday. 'I was wrong about this one.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'I was wrong about this one' },
    reason: { R1: 'Farah had a view and said it out loud, and the book itself was the evidence against it. She gave it no harder check than a book she liked would have got, and her view went where it led: {cue:R1}.' },
    not: { outcome: 'confbias', why: '{o:confbias} would have Farah explaining the evidence away: a rushed edition, the wrong mood. She did not.' } },

  /* ---------- Look-alike pair: a view meets evidence against it ---------- */
  { id: 'hire-fair', use: 'teach', tier: 'varied', setting: 'work', topic: 'a new hire, figures checked',
    text: "Luis thought the new hire, Dana, was not up to the job. At the end of the quarter her sales figures were the best on the team. Luis checked that the figures had been counted the same way for everyone. They had. 'I had her wrong,' he told his manager.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'I had her wrong' } },

  { id: 'hire-uneven', use: 'teach', tier: 'varied', setting: 'work', topic: 'a new hire, figures dismissed',
    text: "Luis thought the new hire, Dana, was not up to the job. At the end of the quarter her sales figures were the best on the team. 'One good quarter proves nothing,' Luis said. Two weeks earlier, when Dana missed a single deadline, he had said, 'That tells you all you need to know.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'One good quarter proves nothing' } },

  /* ---------- The near-miss: a view changes, and it is not fair reasoning ---------- */
  { id: 'convert', use: 'teach', tier: 'misleading', setting: 'money', topic: 'an electric car', name: 'The convert',
    text: "Until last month Jo said electric cars were overpriced toys. Then, on impulse at a car show, she bought one. Now she tells friends that electric cars are 'obviously the future'. She has read nothing about them that she had not read before.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: "electric cars are 'obviously the future'" },
    segments: [
      { text: 'Until last month Jo said electric cars were overpriced toys', note: 'That is the old view. It does not tell you what changed it.' },
      { text: 'on impulse at a car show, she bought one', note: 'That is what came between the two views. It matters, but on its own it does not rule out new facts arriving as well.' },
      { text: "electric cars are 'obviously the future'", note: 'That is the new view. It does not tell you what changed it.' },
      { text: 'She has read nothing about them that she had not read before' }
    ] },

  /* ---------- The check on the question ---------- */
  { id: 'tram', use: 'check', tier: 'varied', setting: 'community', topic: 'a light-rail line',
    text: "A city council has spent $2 million on plans for a light-rail line. A new estimate shows the line would cost four times the original figure and carry half the passengers. 'We cannot walk away from two million dollars of work,' the council president says, and she approves the next stage.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: 'We cannot walk away from two million dollars of work' },
    reason: { R1: 'The reason given for the next stage is {cue:R1}: the money already spent. The new estimate, which is about what the next stage would cost and bring, plays no part.' },
    not: { outcome: 'confbias', why: 'The new estimate goes against going on, but she does not pick it apart. Her reason is not about evidence at all: it is the two million.' } },

  /* ---------- The worked case ---------- */
  { id: 'tasting', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a coffee supplier', name: "Grace's tasting", also: ['scrutiny'],
    text: "Grace owns a café. In March she decided to switch to a new coffee supplier whose sales rep she had liked. In April she held a tasting with her six staff. She wrote down every compliment the new coffee got and none of the complaints. 'The tasting settled it,' she told her accountant.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'she decided to switch to a new coffee supplier',
            R1: ['In March she decided to switch', 'In April she held a tasting'] } }
]);
