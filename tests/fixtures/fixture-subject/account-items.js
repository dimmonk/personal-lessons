// "Told by a friend": the questions of the test subject. An account in one of three forms, the line that says what they did, and (on some)
// a line to write against a model, or four asks that open one after the other. Each question has the checklist of what counts as what they did.
(() => {
  const line = (id, text, extra = {}) => ({ id, text, ...extra });
  const guess = (id, text) => line(id, text, { note: 'That is a guess about why, not what they did.', slip: 'took-guess' });
  const label = (id, text) => line(id, text, { note: 'That is a word for the person, not what they did.', slip: 'took-label' });
  const message = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines });
  const panel = { kind: 'panel', rules: ['act'] };
  const tap = (right, name = 'Dev') => ({ id: 'act', kind: 'tap', prompt: `Tap the line that says what ${name} did.`, none: 'Nothing here says what they did', right: [right] });
  const write = model => ({ id: 'say', kind: 'text', prompt: 'Say it without the word, in your own words.', model });
  const account = (id, facet, blocks, asks, act, reason) => ({ id, strand: 'one', facets: { account: facet }, blocks: [...blocks, panel], asks,
    has: { 'act-did': act, 'act-seen': act }, deciding: [act], reason });

  // a friend writes: the act, a word for him, a guess, a feeling
  const friend = (id, facet, asks, { name = 'Dev', who = 'Maya' } = {}) => account(id, facet,
    [message('friend', who, 'Text message · 9:41 PM', [label(`${id}-a`, `${name} is such a selfish roommate.`), line(`${id}-b`, `He ate the leftovers I saved for lunch.`),
      guess(`${id}-c`, `He does not think about anyone but himself.`), line(`${id}-d`, `It made me so mad.`, { note: 'That is how it felt, not what they did.', slip: 'took-guess' })])],
    asks, `${id}-b`, `“He ate the leftovers I saved for lunch” is the only line you could have seen. The others are a word for ${name}, a guess about his mind and a feeling.`);
  // a thread you are in: one line from them, three of your own
  const thread = (id, facet, asks, name = 'Jonas') => account(id, facet,
    [message('thread', name, 'Text thread · Friday evening', [line(`${id}-a`, 'Can’t do Saturday after all. Work called me in.'), line(`${id}-b`, 'That is the third time you have flaked on me.', { me: true, note: 'That is your word for it, not what they did.', slip: 'took-label' }),
      line(`${id}-c`, 'You obviously do not care about our plans.', { me: true, note: 'That is a guess about why, not what they did.', slip: 'took-guess' })])],
    asks, `${id}-a`, `“Can’t do Saturday after all” is what ${name} did. The other two lines are yours: a word for him and a guess about why.`);
  // your own note
  const note = (id, facet, asks) => account(id, facet,
    [message('note', 'Your note', 'Written the night after the argument', [label(`${id}-a`, 'Sam is so dismissive.'), line(`${id}-b`, 'When I said I wanted to move the date, he told me it was not happening and left the room.'),
      guess(`${id}-c`, 'He just wants everything his way.')])],
    asks, `${id}-b`, 'He told me it was not happening and left the room: that is what Sam did. The others are a word and a guess.');
  // four asks: the line, what else would explain it, whether the word fits, and (only for some answers) the next step
  const four = (id, facet, name = 'Dev') => ({ ...friend(id, facet, [], { name }),
    asks: [tap(`${id}-b`, name),
      { id: 'else', kind: 'choose', prompt: 'What else could explain it?', options: [{ id: 'busy', text: 'He was in a hurry and did not think.', ok: true }, { id: 'cruel', text: 'He wanted to hurt her.', then: 'The account gives no sign of that.' }] },
      { id: 'word', kind: 'choose', prompt: 'Does the word fit?', from: 'verdict', right: 'ordinary', then: { fits: 'One act is not yet a pattern.', unclear: 'The account is enough to say it is one act.', control: 'One act is not a pattern of control.' } },
      { id: 'next', kind: 'choose', prompt: 'What is the next step?', from: 'step', right: 'limit', when: { ask: 'word', is: ['fits', 'control'] }, then: { 'find-out': 'There is something to name.', watch: 'There is something to name.', help: 'That is for a safety matter.' }, slips: { 'find-out': 'jumped-ahead' } }] });

  FC.items('account', [
    { ...friend('w-1', 'ordinary', []), asks: [tap('w-1-b'), { id: 'say', kind: 'choose', prompt: 'Which line says what he did instead of the word “selfish”?',
      options: [{ id: 'act', text: 'He ate the leftovers Maya saved for lunch.', ok: true, then: 'It says what happened.' }, { id: 'kept', text: 'He never thinks about anyone but himself.', then: 'That is still a reading of him.' }] }],
      steps: [{ id: 'find', does: 'Find the line you could have seen.', working: 'He ate the leftovers I saved for lunch.', ask: 'act' }, { id: 'say', does: 'Say it without the word.', working: 'He ate the leftovers Maya saved for lunch.', ask: 'say' }] },
    friend('g-1', 'ordinary', [tap('g-1-b')]),
    thread('g-2', 'ordinary', [tap('g-2-a', 'Jonas')]),
    note('g-3', 'unclear', [tap('g-3-b', 'Sam')]),
    friend('h-1', 'ordinary', [tap('h-1-b'), write('Dev ate Maya’s saved lunch.')]),
    four('h-2', 'ordinary'),
    note('h-3', 'unclear', [tap('h-3-b', 'Sam'), write('He said it was not happening and left the room.')]),
    friend('c-1', 'ordinary', [tap('c-1-b')]),
    thread('c-2', 'ordinary', [tap('c-2-a', 'Jonas')]),
    note('c-3', 'unclear', [tap('c-3-b', 'Sam'), write('He said it was not happening and left the room.')]),
    four('c-4', 'ordinary'),
    friend('r-1', 'ordinary', [tap('r-1-b')]), thread('r-2', 'ordinary', [tap('r-2-a', 'Jonas')]), note('r-3', 'unclear', [tap('r-3-b', 'Sam')])
  ]);
})();
