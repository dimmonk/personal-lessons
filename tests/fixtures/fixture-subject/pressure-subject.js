// An eighth made-up subject, used only by the tests: a message that wants something while the clock runs. It exercises the six forms a message
// arrives in (a text, an email, a pop-up, a chat, a call, a banner), a timed group, a call that pushes back, steps put in order, the busy task, the
// saved plan and the own ways in, and a baseline lesson with its one closing line. Never shipped.
FC.subject('pressure', {
  name: 'Under pressure',
  field: 'skills',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-11', change: 'Made for the tests of the message forms, timed groups, the call that pushes back, steps in order, the busy task, the plan and the baseline.' }],
  endResult: 'Decide what to do with a message that wants something, even while the clock runs and the other side pushes.',
  parts: [{ id: '1', title: 'Act, check or leave' }],
  complete: true,
  timed: true,
  lists: {
    action: [{ id: 'act', text: 'Do what it says' }, { id: 'check', text: 'Check it first, a way I already had' }, { id: 'leave', text: 'Leave it' }],
    slip: [{ id: 'acted', text: 'did what a scam asked' }, { id: 'their-way', text: 'checked through the link, number or reply the message gave' },
      { id: 'habit', text: 'did what a real message asked, the way it asked' }]
  },
  facets: {
    genuine: { name: 'Real or a scam', compare: true, values: [{ id: 'genuine', text: 'real messages' }, { id: 'scam', text: 'scams' }] },
    channel: { name: 'How it arrives', values: [{ id: 'sms', text: 'a text' }, { id: 'email', text: 'an email' }, { id: 'popup', text: 'a pop-up' }, { id: 'chat', text: 'a chat' },
      { id: 'call', text: 'a call' }, { id: 'banner', text: 'a banner' }] }
  },
  mix: [],
  danger: { slip: 'acted', facet: 'genuine', risky: 'scam', real: 'genuine' },
  strands: [{ id: 'decide', title: 'Act, check or leave' }],
  own: {
    plan: { into: 'plan', fields: [{ id: 'cue', label: 'When this happens', type: 'text', hint: 'a text wants a code' }, { id: 'then', label: 'Then I will', type: 'text', hint: 'hang up and call the number on my card' }] },
    setup: { into: 'setup', fields: [{ id: 'bank', label: 'Save my bank’s number from the back of my card', type: 'date' }, { id: 'app', label: 'Check my bank’s app is on my phone', type: 'date' }] }
  },
  readingShare: 0.9
});
