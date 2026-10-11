// "Under pressure": the questions of the test subject. A message in one of the six forms it arrives in and what to do about it (do what it asks, check
// it first a way you already had, leave it), then how to check; a call that pushes back; steps put in order; banners over the busy task. Invented senders.
(() => {
  const line = (id, text, extra = {}) => ({ id, text, ...extra });
  const message = (form, from, detail, lines, extra = {}) => ({ kind: 'message', form, from, detail, lines, ...extra });
  const choice = (right, genuine, then) => ({ id: 'act', kind: 'choose', prompt: 'What do you do?', from: 'action', right, then,
    slips: right === 'act' ? {} : { act: genuine === 'genuine' ? 'habit' : 'acted' } });
  const via = own => ({ id: 'via', kind: 'choose', prompt: 'How do you check?', when: { ask: 'act', is: ['check'] }, options: [
    { id: 'own', text: own, ok: true, then: 'That is a way you already had, so the sender cannot steer it.' },
    { id: 'link', text: 'The link or number in the message', slip: 'their-way', then: 'The message gave you that, so the sender decides where you land.' },
    { id: 'reply', text: 'Reply and check with them', slip: 'their-way', then: 'The sender answers its own question.' }] });
  // a question: the message, the best action, the way in you already had, a line for each action, and the line that decides it
  const q = (id, genuine, channel, block, right, own, lines, deciding, reason) => ({ id, strand: 'decide', facets: { genuine, channel }, blocks: [block],
    asks: [choice(right, genuine, { act: lines[0], check: lines[1], leave: lines[2] }), via(own)], deciding, reason });
  const three = (a, c, l) => [a, c, l];

  FC.items('pressure', [
    { ...q('w-1', 'scam', 'sms', message('sms', 'Ostrander Bank', 'Text message · 2:14 PM', [line('w1a', 'Your card is locked.'), line('w1b', 'Confirm your sign-in now.')], { link: 'ostrander-secure.example/confirm' }),
      'check', 'The Ostrander app on my phone', three('The page copies the real sign-in and keeps what you type.', 'The app shows nothing wrong, and you have lost a minute.', 'You are safe, though a real lock would wait.'), ['w1b'],
      'It wants your sign-in, you did not start it, and you have an app of your own.'),
      steps: [{ id: 'want', does: 'See what it wants.', working: 'It wants you to confirm your sign-in.' }, { id: 'start', does: 'Find out whether you started it.', working: 'You did not.' },
        { id: 'way', does: 'Find a way you already had.', working: 'The bank app on your phone.' }, { id: 'do', does: 'Choose.', working: 'Check first, in the app.', ask: 'act' }] },
    q('t-1', 'genuine', 'sms', message('sms', 'Larkspur', 'Text message · 9:02 AM', [line('t1a', 'Your code is 481 302.'), line('t1b', 'Enter it on the page you are on.')]),
      'act', 'The Larkspur page I am on', three('You signed in.', 'It cost a minute and was not needed.', 'You did not sign in.'), ['t1b'], 'You asked for this code a moment ago, on the page you are on.'),
    q('t-2', 'scam', 'sms', message('sms', 'Unknown number', 'Text message · 9:04 AM', [line('t2a', 'I sent you a code by mistake.'), line('t2b', 'Read it back to me.')]),
      'leave', 'The Larkspur page', three('They used the code to sign in as you.', 'There is nothing of yours to check.', 'Nothing was shared.'), ['t2b'], 'Nobody has a reason to hear a code read back.'),
    q('t-3', 'scam', 'email', message('email', 'Parcel desk', 'Email · Tuesday', [line('t3a', 'Your parcel is held.'), line('t3b', 'Pay the $2 fee today.')], { subject: 'Parcel held', link: 'parcel-desk.example/pay' }),
      'check', 'The shop order page I already had', three('The page took your card.', 'The shop order page shows no problem.', 'You are safe, but the parcel may be real.'), ['t3b'], 'You expect a parcel, so the shop order page settles it.'),
    q('t-4', 'scam', 'popup', message('popup', 'Security warning', 'On a web page', [line('t4a', 'Your computer is infected.'), line('t4b', 'Call this number now.')], { link: 'Call support' }),
      'leave', 'The security program I installed', three('A stranger took over your screen.', 'You have nothing of theirs to check.', 'You closed it.'), ['t4b'], 'A web page cannot know about your computer.'),
    q('x-0', 'genuine', 'chat', message('chat', 'Dana on Fernbrook Market', 'Chat about the bike', [line('c0a', 'Is it still for sale?'), line('c0b', 'Yes, $120.', { me: true }), line('c0c', 'I can meet tomorrow.')]),
      'act', 'The market app', three('You agreed a time.', 'It cost a minute.', 'You missed a buyer.'), ['c0c'], 'It is the buyer you were talking to, and nothing is asked of you but a time.'),
    q('c-1', 'genuine', 'sms', message('sms', 'Calder Savings', 'Text message · 4:40 PM', [line('k1a', 'Did you spend $212 at Westgate?'), line('k1b', 'Open the Calder app to review.')]),
      'check', 'The Calder app', three('You followed it blindly.', 'The app showed the charge, and you confirmed it.', 'A real alert went unseen.'), ['k1b'], 'A real alert sends you to your own app.'),
    q('c-2', 'scam', 'chat', message('chat', 'Buyer on Fernbrook Market', 'Chat about the lamp', [line('k2a', 'I paid you.'), line('k2b', 'Tap my link to receive it.')], { link: 'fernbrook-pay.example/get' }),
      'check', 'The market app', three('The link took your sign-in.', 'The app showed no payment.', 'You are safe, though a real buyer may wait.'), ['k2b'], 'Payments arrive in your own account, not by a link.'),
    q('c-3', 'scam', 'call', message('call', 'Fraud team', 'Incoming call · 11:10 AM', [line('k3a', 'We blocked your card.'), line('k3b', 'Read me the code on the back.')]),
      'check', 'The number on the back of my card', three('They charged the card.', 'The bank said it had called no one.', 'You are safe.'), ['k3b'], 'A bank never needs the code from the back of your card.'),
    q('c-4', 'genuine', 'email', message('email', 'Iwu Tiling', 'Email · Friday', [line('k4a', 'The invoice for the bathroom is attached.'), line('k4b', 'Pay as on the quote.')], { subject: 'Invoice' }),
      'act', 'My usual way of paying him', three('You paid him the way you agreed.', 'It cost a minute and was not needed.', 'The bill went unpaid.'), ['k4b'], 'It is the job you hired, and the way to pay is the one on the quote.'),
    q('r-1', 'genuine', 'sms', message('sms', 'Salon Wren', 'Text message · 8:00 AM', [line('r1a', 'Your haircut is at 3 PM.')]),
      'leave', 'The Salon Wren page', three('Nothing to do.', 'It cost a minute and was not needed.', 'You did right.'), ['r1a'], 'It wants nothing from you.'),
    q('r-2', 'scam', 'email', message('email', 'Prize team', 'Email · Monday', [line('r2a', 'You won a gift card.'), line('r2b', 'Pay $3 to send it.')], { subject: 'You won', link: 'prize-team.example' }),
      'leave', 'The shop I know', three('The page took your card.', 'There is nothing of yours to check.', 'You are safe.'), ['r2b'], 'You never entered a draw.'),
    q('r-3', 'genuine', 'popup', message('popup', 'Update ready', 'On your phone', [line('r3a', 'An update is ready.')], { link: 'Later' }),
      'leave', 'The settings app', three('You installed it.', 'It cost a minute.', 'You did right.'), ['r3a'], 'It only tells you.'),
    q('y-1', 'scam', 'banner', message('banner', 'Messages', 'now', [line('y1a', 'Pay the fee at fee-desk.example today.')]),
      'check', 'The courier app', three('You paid a fee that was never owed.', 'The courier app shows no fee.', 'You are safe.'), ['y1a'], 'A fee by a link is a trick.'),
    q('y-2', 'genuine', 'banner', message('banner', 'Calder Savings', 'now', [line('y2a', 'Your statement is ready.')]),
      'leave', 'The Calder app', three('Nothing to do.', 'It cost a minute.', 'You did right.'), ['y2a'], 'It only tells you.'),
    // a call that pushes back: pressure rises when the learner holds off
    { id: 'x-1', strand: 'decide', facets: { genuine: 'scam', channel: 'call' }, blocks: [{ kind: 'prose', text: 'Your phone rings.' }],
      asks: [{ id: 'call', kind: 'exchange', prompt: 'A caller says they are your bank.', form: 'call', from: 'Ostrander fraud team', detail: 'Incoming call · 5:20 PM', start: 'one',
        turns: {
          one: { lines: [line('x1a', 'Your account is under attack.'), line('x1b', 'Read me the code we just texted you.')], push: 'It hurries you and frightens you.', options: [
            { id: 'give', text: 'Read out the code', end: 'gave' }, { id: 'wait', text: 'Say you will call the bank back first', goto: 'two' }, { id: 'hang', text: 'Hang up and call the number on my card', end: 'hung' }] },
          two: { lines: [line('x2a', 'Do not hang up, or the money is gone.')], push: 'It uses a threat to keep you on the line.', options: [
            { id: 'give2', text: 'Give in and read the code', end: 'gave' }, { id: 'hang2', text: 'Hang up and call the number on my card', end: 'hung' }] }
        },
        ends: { gave: { ok: false, slip: 'acted', then: 'The code let them in, and they emptied the account.' }, hung: { ok: true, then: 'Your bank said it had not called, and your account was safe.' } } }],
      deciding: [], reason: 'A bank never needs the code it just texted you, and it never needs you to stay on the line.' },
    // steps in order: the first step is what counts
    { id: 'o-1', strand: 'decide', facets: { genuine: 'scam', channel: 'sms' }, blocks: [message('sms', 'You', 'Yesterday', [line('o1a', 'I sent $200 to a caller who said he was my bank.')])],
      asks: [{ id: 'order', kind: 'order', prompt: 'Money already went out. What do you do, in order?', scored: 'whole', steps: [
        { id: 'bank', text: 'Call my bank on the number on my card' }, { id: 'pass', text: 'Change my password on the real site' }, { id: 'report', text: 'Report it' }, { id: 'wait', text: 'Wait a few days' }],
        right: ['bank', 'pass', 'report'], then: 'A bank can sometimes stop a payment in the first hours, so it comes before anything else.' }],
      deciding: ['o1a'], reason: 'The bank first, because time counts.' },
    { id: 'o-2', strand: 'decide', facets: { genuine: 'scam', channel: 'sms' }, blocks: [message('sms', 'You', 'Yesterday', [line('o2a', 'I gave a caller the code from my card.')])],
      asks: [{ id: 'order', kind: 'order', prompt: 'A code went out. What do you do first?', scored: 'first', steps: [
        { id: 'bank', text: 'Call my bank on the number on my card' }, { id: 'pass', text: 'Change my password on the real site' }, { id: 'report', text: 'Report it' }, { id: 'wait', text: 'Wait a few days' }],
        right: ['bank', 'pass', 'report'], then: 'A bank can sometimes stop a payment in the first hours, so it comes first.' }],
      deciding: ['o2a'], reason: 'The bank first, because time counts.' },
    // the baseline
    q('b-1', 'genuine', 'sms', message('sms', 'Larkspur', 'Text message · 7:45 AM', [line('b1a', 'Your code is 220 417.'), line('b1b', 'Enter it on the page you are on.')]),
      'act', 'The Larkspur page I am on', three('You signed in.', 'It cost a minute and was not needed.', 'You did not sign in.'), ['b1b'], 'You asked for this code.'),
    q('b-5', 'genuine', 'email', message('email', 'Calder Savings', 'Email · Friday', [line('b5a', 'Your statement is ready.')], { subject: 'Statement' }),
      'leave', 'The Calder app', three('Nothing to do.', 'It cost a minute and was not needed.', 'You did right.'), ['b5a'], 'It only tells you.'),
    q('b-2', 'scam', 'email', message('email', 'Account team', 'Email · Thursday', [line('b2a', 'Your account will close.'), line('b2b', 'Confirm your details today.')], { subject: 'Closing', link: 'account-team.example' }),
      'check', 'The app I already had', three('The page took your details.', 'The app showed nothing wrong.', 'You are safe.'), ['b2b'], 'It wants your details, and you did not start it.'),
    { id: 'b-3', strand: 'decide', facets: { genuine: 'scam', channel: 'call' }, blocks: [{ kind: 'prose', text: 'Your phone rings.' }],
      asks: [{ id: 'call', kind: 'exchange', prompt: 'A caller says they are your bank.', form: 'call', from: 'Calder fraud team', detail: 'Incoming call · 6:00 PM', start: 'one',
        turns: {
          one: { lines: [line('bx1', 'Move your money to a safe account now.')], push: 'It hurries you.', options: [
            { id: 'move', text: 'Move the money', end: 'gave' }, { id: 'wait', text: 'Say you will think about it', goto: 'two' }, { id: 'hang', text: 'Hang up and call the number on my card', end: 'hung' }] },
          two: { lines: [line('bx2', 'There is no time to think.')], push: 'It uses a threat.', options: [
            { id: 'move2', text: 'Move the money', end: 'gave' }, { id: 'hang2', text: 'Hang up and call the number on my card', end: 'hung' }] }
        },
        ends: { gave: { ok: false, slip: 'acted', then: 'The money was gone.' }, hung: { ok: true, then: 'Your bank said it had not called.' } } }],
      deciding: [], reason: 'A bank never tells you to move money to a safe account.' },
    { id: 'b-4', strand: 'decide', facets: { genuine: 'scam', channel: 'sms' }, blocks: [message('sms', 'You', 'Yesterday', [line('b4a', 'I sent $200 to a caller who said he was my bank.')])],
      asks: [{ id: 'order', kind: 'order', prompt: 'Money already went out. What do you do first?', scored: 'first', steps: [
        { id: 'bank', text: 'Call my bank on the number on my card' }, { id: 'pass', text: 'Change my password on the real site' }, { id: 'report', text: 'Report it' }],
        right: ['bank', 'pass', 'report'], then: 'A bank can sometimes stop a payment in the first hours.' }],
      deciding: ['b4a'], reason: 'The bank first.' }
  ]);
})();
