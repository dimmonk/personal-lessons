// "Under pressure", lesson 1: the six forms of a message on a teaching screen, a worked message, a timed group with a pair, a call that pushes back,
// steps in order, banners over the busy task, the plan and the own ways in, a timed group that shows the plan first, and a timed check.
FC.lesson('pressure', {
  id: 'l1', part: '1', title: 'Act, check or leave', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'A message wants something. Decide what to do before the time is up.',
  flow: [
    { title: 'Six ways a message arrives',
      show: [
        { kind: 'message', form: 'sms', from: 'Ostrander Bank', detail: 'Text message · 2:14 PM', lines: [{ id: 'f-a', text: 'Your card is locked.' }, { id: 'f-b', text: 'Confirm your sign-in now.' }], link: 'ostrander-secure.example/confirm' },
        { kind: 'message', form: 'email', from: 'Parcel desk', detail: 'Email · Tuesday', subject: 'Parcel held', lines: [{ id: 'f-c', text: 'Your parcel is held.' }, { id: 'f-d', text: 'Pay the $2 fee today.' }], link: 'parcel-desk.example/pay' },
        { kind: 'message', form: 'popup', from: 'Security warning', detail: 'On a web page', lines: [{ id: 'f-e', text: 'Your computer is infected.' }], link: 'Call support' },
        { kind: 'message', form: 'chat', from: 'Dana on Fernbrook Market', detail: 'Chat about the bike', lines: [{ id: 'f-f', text: 'Is it still for sale?' }, { id: 'f-g', text: 'Yes, $120.', me: true }, { id: 'f-h', text: 'Tap my link to pay.' }], link: 'fernbrook-pay.example/get' },
        { kind: 'message', form: 'call', from: 'Fraud team', detail: 'Incoming call · 11:10 AM', lines: [{ id: 'f-i', text: 'We blocked your card.' }, { id: 'f-j', text: 'Read me the code on the back.' }] },
        { kind: 'message', form: 'banner', from: 'Messages', detail: 'now', lines: [{ id: 'f-k', text: 'Pay the fee at fee-desk.example today.' }] }
      ] },
    { worked: 'w-1' },
    { set: { items: [['t-1', 't-2'], 't-3'], order: 'listed', seconds: 15 } },
    { set: { items: ['x-1'], order: 'listed' } },
    { set: { items: ['o-1', 'o-2'], order: 'listed' } },
    { set: { items: ['y-1', 'y-2'], order: 'listed', seconds: 15, over: 'busy' } },
    { own: 'plan' },
    { own: 'setup' },
    { set: { items: ['t-4'], order: 'listed', seconds: 20, plan: true } }
  ],
  check: { items: ['c-1', 'c-2', 'c-3', 'c-4'], feedback: 'at-end', seconds: 20, order: 'listed', pass: [{ slip: 'acted', max: 0 }, { slip: 'their-way', max: 0 }, { where: { genuine: 'genuine' }, wrong: { max: 1 } }] }
});
