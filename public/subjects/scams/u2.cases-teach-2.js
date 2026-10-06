// Scams, Unit Two: cases shown inside cards, part two: someone offering to fix a problem with your device, and someone
// sorting out a refund or your bank account. Field guide: see u2.cases-teach-1.js.
// The two named exceptions are here: a case where the person went looking and still reached the scam (a paid advert),
// and a case that shows a fault and a refund together (the key takes the refund).

FC.cases('scams', 'u2', [

  /* ---------- Tech-support scam ---------- */
  { id: 'dv-popup-alarm', use: 'teach', tier: 'clean', setting: 'home', topic: 'a siren page with a number to call', name: 'The siren page',
    text: "While Joan reads the news on her laptop, a red page fills the whole window and a loud alarm sounds: 'WARNING: your computer is infected. Do not switch it off. Call Support now at (800) 555-0188.' The page does not close when she presses the X. She calls the number. A man says he is a technician and asks her to open a web page and type in a code he reads out, so that he can see her computer and remove the problem.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Do not switch it off. Call Support now at (800) 555-0188', 'so that he can see her computer and remove the problem'] } },

  { id: 'dv-c-walt-call', use: 'check', tier: 'clean', setting: 'home', topic: 'a call about errors on the computer',
    text: "A woman calls Walt: 'I am from the technical team at your computer's maker. We have detected errors coming from your computer. If you let me see your screen I can fix them now.' Walt has not contacted anyone, and his computer has been working well.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['We have detected errors coming from your computer', 'If you let me see your screen I can fix them now'] },
    reason: { I1: 'A caller says that there is a problem with Walt’s device and offers to fix it: {cue:I1}. Nobody could know that from outside, and the caller wants to see his device to fix it.' } },

  { id: 'dv-helpdesk-call', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a broadband help desk called from the bill', name: 'The help desk call',
    text: "Kemal's broadband has been slow for days. He finds the company's number on his last bill and calls it. A helper answers: 'I can look at it from here if you open the meeting app and press Share, so that I can see your screen.' Kemal presses Share. Nobody had contacted him about the problem.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ["finds the company's number on his last bill and calls it", 'Nobody had contacted him about the problem'] },
    segments: [
      { text: "Kemal's broadband has been slow for days", note: 'That is the problem he wants fixed. It does not say how the call began.' },
      { text: "finds the company's number on his last bill and calls it" },
      { text: "A helper answers: 'I can look at it from here if you open the meeting app and press Share, so that I can see your screen.' Kemal presses Share", note: 'That is the request to share the device. It is the same request that a scam call makes, so it cannot settle which this is.' },
      { text: 'Nobody had contacted him about the problem', note: 'That is true, and it matters, but it says what did not happen. The words that show how the call began are about his bill.' }
    ] },

  { id: 'dv-search-broadband', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a broadband helpline found in a search', name: 'The helpline search',
    text: "Ivy's wifi has dropped, and she cannot get a connection. On her phone she types 'Brightnet broadband helpline' into a search page and calls the number at the top of the results, the one with a small 'Ad' label beside it. A man answers: 'Brightnet support.' He asks her to open a web page and type in a code so that he can see her laptop and fix the problem.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ["calls the number at the top of the results, the one with a small 'Ad' label beside it", 'so that he can see her laptop and fix the problem'] },
    segments: [
      { text: "Ivy's wifi has dropped, and she cannot get a connection", note: 'That is the problem she is trying to fix. It does not say where the number she calls came from.' },
      { text: "On her phone she types 'Brightnet broadband helpline' into a search page and", note: 'She did type the company’s name herself, and that is why it can feel like her own visit. But the results that come back are not hers: the search page chose what to show. The words that settle it are in the next piece.' },
      { text: "calls the number at the top of the results, the one with a small 'Ad' label beside it" },
      { text: 'A man answers: \'Brightnet support.\' He asks her to open a web page and type in a code so that he can see her laptop and fix the problem', note: 'That is what the man asks once she has called. It shows what she is being asked to do, not where the number came from.' }
    ] },

  /* ---------- Refund scam ---------- */
  { id: 'dv-energy-refund', use: 'teach', tier: 'clean', setting: 'home', topic: 'a refund after a meter check', name: 'The energy refund',
    text: "A man calls Harold: 'This is Brightwatt Energy. Our meter checks show that we have overcharged you $312, and I want to put that right today. Please open a web page and type in the number I read out, so that I can see your screen and send the refund.' Harold had not asked about a refund.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['we have overcharged you $312', 'so that I can see your screen and send the refund'] } },

  { id: 'dv-c-gym-refund', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a double charge at the gym',
    text: "Dev's phone rings: 'This is the billing team at your gym. You were charged twice this month, so $40 is coming back to you. Open the meeting app and press Share so that I can put it through while you watch.' Dev has not asked for anything.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['You were charged twice this month, so $40 is coming back to you', 'press Share so that I can put it through while you watch'] },
    reason: { I1: 'The caller says that Dev is owed money, and asks him to share his device while it is put through: {cue:I1}. The reason given is a refund, and Dev has not asked for one.' } },

  { id: 'dv-lk-hal-popup', use: 'teach', tier: 'clean', setting: 'home', topic: 'a locked laptop and a helpline', name: 'The locked laptop',
    text: "Hal's laptop starts beeping, and a page says: 'Your computer is locked. Call the helpline at (800) 555-0172.' He calls, and a man says: 'I can fix this today, but I need to see your screen. Press Share in the meeting app and I will tell you what to click.'",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { I1: ['Your computer is locked. Call the helpline at (800) 555-0172', 'I can fix this today'] } },

  { id: 'dv-lk-hal-refund', use: 'teach', tier: 'clean', setting: 'home', topic: 'a double charge by a phone company', name: 'The double charge',
    text: "Hal's phone rings. A woman says: 'I am from your phone company. You have been charged twice this year, so I owe you $60. I can put it back today, but I need to see your screen. Press Share in the meeting app and I will do it while you watch.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['You have been charged twice this year, so I owe you $60', 'I can put it back today'] } },

  { id: 'dv-license-refund', use: 'teach', tier: 'misleading', setting: 'shopping', topic: 'a lapsed license refunded by a technician', name: 'The license refund', also: ['support'],
    text: "A page fills Nia's computer: 'Your computer is at risk. Call (800) 555-0165 now.' She calls, and a man says he will clear the problem. Then he says: 'I see your protection license ran out, and that you were charged twice for it, so I owe you $199 back. Let me see your screen and I will send the refund.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { I1: ['you were charged twice for it, so I owe you $199 back', 'Let me see your screen and I will send the refund'] },
    segments: [
      { text: "A page fills Nia's computer: 'Your computer is at risk. Call (800) 555-0165 now.'", note: 'That is a warning that gives her a number to call. It is why the case can look like someone offering to fix a problem. It is not the part that settles which of the two answers this case gets.' },
      { text: 'She calls, and a man says he will clear the problem', note: 'That is a man offering to fix a problem with her device. It fits one answer. The case has a second reason in it, and the second reason is the one that wins.' },
      { text: 'you were charged twice for it, so I owe you $199 back' },
      { text: 'Let me see your screen and I will send the refund', note: 'That is the request, and it is the same request whichever answer the case gets, so it cannot settle which one it is.' }
    ] },

  { id: 'dv-w-form', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a refund form to open while on the phone', name: 'The refund form',
    text: "Mara's phone rings. 'I am from your phone company,' a man says. 'We have charged you twice this year, so I owe you $60. I am emailing you a form now. Open it and run it, and I will be able to see your screen and put the money back while you wait.' An email with a file arrives as he speaks.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Open it and run it', I1: ['We have charged you twice this year, so I owe you $60', 'put the money back while you wait'] } },

  /* ---------- the check on the key's question ---------- */
  { id: 'dv-c-update-menu', use: 'check', tier: 'clean', setting: 'home', topic: 'an update from the phone’s own menu',
    text: "Dina's phone shows a red dot beside Settings. She opens Settings herself, taps Software update and presses Install. Nobody has messaged or called her about it.",
    outcome: 'realinstall', route: { D1: ['device'], I1: ['own'] },
    cues: { I1: ['She opens Settings herself, taps Software update and presses Install', 'Nobody has messaged or called her about it'] },
    reason: { I1: 'Dina started it herself, through her phone’s own update menu: {cue:I1}. Nobody contacted her first, so nothing came to her.' } }
]);
