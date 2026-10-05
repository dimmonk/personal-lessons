// Psychology, Unit Two: cases shown inside cards, parts three and four.

FC.cases('psychology', 'u2', [

  /* ---------- Fair reasoning: once with a view that changes, once with a view that stays ---------- */
  { id: 'floodlights', use: 'teach', tier: 'clean', setting: 'community', topic: 'evening matches', name: 'The evening matches',
    text: "For years Ben told his football club's committee that evening matches under floodlights would bring bigger crowds. The club tried it for a season. Then the attendance figures came in: crowds were smaller at every evening match. 'I wanted this to work,' Ben told the committee. 'It didn't. I was wrong.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: "It didn't. I was wrong." } },

  { id: 'prices', use: 'teach', tier: 'clean', setting: 'money', topic: 'two shops and twelve prices', name: 'The twelve prices',
    text: "Pat has always said the corner shop is cheaper than the supermarket. Her son says that cannot be true. So Pat writes down what the same twelve things cost in both shops on the same day. The corner shop comes out £3 cheaper. 'Then I'll keep going there,' she says. 'If it had come out the other way, I'd have switched.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: "If it had come out the other way, I'd have switched" },
    segments: [
      { text: 'Pat has always said the corner shop is cheaper than the supermarket', note: 'That is the view she starts with. Having a view first is not a fault.' },
      { text: 'writes down what the same twelve things cost in both shops on the same day', note: 'That is the test, and it is a fair one: the same things, the same day, both shops. The words asked for are the ones that show her view going wherever the result points.' },
      { text: "Then I'll keep going there", note: 'That is where she ends up, and where a person ends up never decides the name. The next sentence shows why she ends up there.' },
      { text: "If it had come out the other way, I'd have switched" }
    ] },

  { id: 'novel', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a new novel',
    text: "Farah told her book club for a month that her favourite author's new novel would be a masterpiece. She read it over the weekend. 'It's a mess,' she told them on Monday. 'I was wrong about this one.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'I was wrong about this one' },
    reason: { R1: 'Farah had a view and had said it out loud. The book itself was the evidence, and it went against her view. She gave it no harder test for that, and her view went where it pointed: {cue:R1}.' },
    not: { outcome: 'confbias', why: '{o:confbias} would have Farah finding reasons why this evidence does not count: a rushed edition, the wrong mood. She gave it no harder test than a book she liked would have got.' } },

  /* ---------- Look-alike pair: a view meets evidence against it ---------- */
  { id: 'hire-fair', use: 'teach', tier: 'varied', setting: 'work', topic: 'a new hire, figures checked',
    text: "Luis thought the new hire, Dana, was not up to the job. At the end of the quarter her sales figures were the best on the team. Luis checked that the figures had been counted the same way for everyone. They had. 'I had her wrong,' he told his manager.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'I had her wrong' } },

  { id: 'hire-uneven', use: 'teach', tier: 'varied', setting: 'work', topic: 'a new hire, figures dismissed',
    text: "Luis thought the new hire, Dana, was not up to the job. At the end of the quarter her sales figures were the best on the team. 'One good quarter proves nothing,' Luis said. Two weeks earlier, when Dana missed a single deadline, he had said, 'That tells you all you need to know.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { R1: 'One good quarter proves nothing' } },

  /* ---------- Look-alike pair: the same person carries on, for two different reasons ---------- */
  { id: 'stall-spent', use: 'teach', tier: 'varied', setting: 'work', topic: 'a market stall, the year spent',
    text: "Mei opened a market stall selling her own ceramics a year ago. It has lost money every month, and the pitch fee for next year is due. 'I've put a year and most of my savings into this,' she says. 'I'm not walking away from that.' She pays the fee.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "I've put a year and most of my savings into this" } },

  { id: 'stall-ahead', use: 'teach', tier: 'varied', setting: 'work', topic: 'a market stall, the year ahead',
    text: "Mei opened a market stall selling her own ceramics a year ago. It lost money for months, and the pitch fee for next year is due. She goes through her takings: for the last ten weeks the stall has covered its costs with a little to spare, and two shops have started ordering from her. 'Next year should pay for itself,' she says. She pays the fee.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { R1: 'Next year should pay for itself' } },

  /* ---------- The near-miss: a view changes, and it is not fair reasoning ---------- */
  { id: 'convert', use: 'teach', tier: 'misleading', setting: 'money', topic: 'an electric car', name: 'The convert',
    text: "Until last month Jo said electric cars were overpriced toys. Then, on impulse at a motor show, she bought one. Now she tells friends that electric cars are 'obviously the future'. She has read nothing about them that she had not read before.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: "electric cars are 'obviously the future'" },
    segments: [
      { text: 'Until last month Jo said electric cars were overpriced toys', note: 'That is the old view. It does not tell you what changed it.' },
      { text: 'on impulse at a motor show, she bought one', note: 'That is what came between the two views. It matters, but on its own it does not rule out new facts arriving as well.' },
      { text: "electric cars are 'obviously the future'", note: 'That is the new view. It does not tell you what changed it.' },
      { text: 'She has read nothing about them that she had not read before' }
    ] },

  /* ---------- The check on the key's question ---------- */
  { id: 'tram', use: 'check', tier: 'varied', setting: 'community', topic: 'a tram line',
    text: "A city council has spent £2 million on plans for a tram line. A new estimate shows the line would cost four times the original figure and carry half the passengers. 'We cannot walk away from two million pounds of work,' the council leader says, and she approves the next stage.",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: 'We cannot walk away from two million pounds of work' },
    reason: { R1: 'The reason given for the next stage is {cue:R1}: the money already spent. The new estimate, which is about what the next stage would cost and bring, plays no part in it.' },
    not: { outcome: 'confbias', why: 'The new estimate is evidence against going on, but the leader does not give it a harder test than other evidence. She does not test it at all. Her reason is not about evidence; it is the two million.' } },

  /* ---------- The two worked cases: a clean one, then one whose story points the wrong way ---------- */
  { id: 'longrun', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a running club', name: 'The missed long run',
    text: "Noor has told her running club all year that she never misses a training session. On Sunday she stayed in bed instead of doing the long run. 'Rest days are part of training,' she wrote in the club chat that evening. 'Skipping one long run after eight months of them is basically recovery.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'Rest days are part of training',
            R1: 'Skipping one long run after eight months of them is basically recovery' } },

  { id: 'tasting', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a coffee supplier', name: "Grace's tasting", also: ['scrutiny'],
    text: "Grace owns a café. In March she decided to switch to a new coffee supplier whose sales rep she had liked. In April she held a tasting with her six staff. She wrote down every compliment the new coffee got and none of the complaints. 'The tasting settled it,' she told her accountant.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'she decided to switch to a new coffee supplier',
            R1: ['In March she decided to switch', 'In April she held a tasting'] } }
]);
