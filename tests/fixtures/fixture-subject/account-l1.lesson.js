// "Told by a friend", lesson 1: the three forms of an account on a teaching screen with the checklist, a worked account, a group with the checklist
// beside the words (a friend's message, a thread, a note), a group without (a written line, four asks, a note with a written line), and a check of four accounts.
FC.lesson('account', {
  id: 'l1', part: '1', title: 'What they did', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'An account comes with a word. Find what the person did first.',
  flow: [
    { title: 'Three ways an account arrives',
      show: [
        { kind: 'message', form: 'friend', from: 'Maya', detail: 'Text message · 9:41 PM', lines: [{ id: 's-a', text: 'Dev is such a selfish roommate.' }, { id: 's-b', text: 'He ate the leftovers I saved for lunch.' }] },
        { kind: 'message', form: 'thread', from: 'Jonas', detail: 'Text thread · Friday evening', lines: [{ id: 't-a', text: 'Can’t do Saturday after all.' }, { id: 't-b', text: 'That is the third time.', me: true }] },
        { kind: 'message', form: 'note', from: 'Your note', detail: 'Written the night after the argument', lines: [{ id: 'n-a', text: 'Sam is so dismissive.' }, { id: 'n-b', text: 'He left the room.' }] },
        { kind: 'panel', rules: ['act'] },
        { kind: 'prose', text: 'Find the line you could have seen or heard.' }
      ] },
    { worked: 'w-1' },
    { set: { items: ['g-1', 'g-2', 'g-3'], order: 'listed', support: { panel: true } } },
    { set: { items: ['h-1', 'h-2', 'h-3'], order: 'listed' } }
  ],
  check: {
    items: ['c-1', 'c-2', 'c-3', 'c-4'], feedback: 'at-end',
    pass: [{ right: { min: 3 } }]
  }
});
