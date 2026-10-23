// IT Help Desk, lesson 8 "When the user is upset" (move 2 under pressure): the worked ticket, the calls and chats of the groups, the check and the reserve.
// Sources: IT17 and the A+ Core 2 objective 4.7 (do not argue or be defensive, do not dismiss, do not judge; restate the issue and put open questions;
// set and meet expectations, communicate status, follow up; use plain language), IT18 (understand the user first), IT19 (agent and caller work out
// the problem together), IT20 (apologizing and explaining in service-recovery studies of shops and banks, not tested on IT desks: the
// lesson says so), the desk’s own rule against impersonation (confirm who is asking before a reset or unlock; A+ Core 2 2.5 lists impersonation as an attack, not a procedure). All people, tickets and desks are invented.
(() => {
  const U = "upset";
  const S = (id, text, extra) => ({ id, text, ...extra });
  const mail = (from, detail, subject, lines) => ({ kind: "message", form: "email", from, detail, subject, lines });
  const table = (title, head, rows) => ({ kind: "document", form: "table", title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const chat = (from, detail, lines) => ({ kind: "message", form: "chat", from, detail, lines });
  const note = (from, detail, lines, id) => ({ kind: "message", form: "email", from: "Desk ticket", detail, subject: from, lines, ...(id ? { id } : {}) });
  const prose = text => ({ kind: "prose", text });
  const ok = (id, text, then) => ({ id, text, ok: true, ...(then ? { then } : {}) });
  const no = (id, text, slip, then) => ({ id, text, ...(slip ? { slip } : {}), then });
  const pick = ({ id, blocks, prompt, opts, reason, deciding }) => ({ id, strand: U, facets: {}, blocks,
    asks: [{ id: "pick", kind: "choose", prompt, shuffle: true, options: opts }], deciding: deciding || [], reason });
  const hash = text => [...text].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 9973, 7);
  // A call or chat in turns. Each turn: what the user says, how it pushes, a reply that ends it badly, a reply that holds off (more pressure follows),
  // and a reply that ends it well. The last turn has no reply that holds off. The order of the three replies changes from turn to turn.
  const exchange = spec => {
    const last = spec.turns.length - 1;
    const names = ["one", "two", "three"];
    const turns = {}, ends = {};
    spec.turns.forEach((t, n) => {
      const opts = [
        { id: `bad${n}`, text: t.bad[0], end: `bad${n}` },
        ...(n < last ? [{ id: `hold${n}`, text: t.hold, goto: names[n + 1] }] : []),
        { id: `good${n}`, text: t.good[0], end: `good${n}` }];
      const turn = (hash(spec.id) + n) % opts.length;
      turns[names[n]] = { lines: t.lines.map((text, k) => ({ id: `${spec.id}-${n}${k}`, text })), push: t.push, options: [...opts.slice(turn), ...opts.slice(0, turn)] };
      ends[`bad${n}`] = { ok: false, slip: t.bad[1], then: t.bad[2] };
      ends[`good${n}`] = { ok: true, then: t.good[1] };
    });
    return { id: spec.id, strand: U, facets: {}, blocks: [prose(spec.context)],
      asks: [{ id: "call", kind: "exchange", prompt: spec.prompt, form: spec.form, from: spec.from, detail: spec.detail, start: "one", turns, ends }],
      deciding: [], reason: spec.reason };
  };

  // Rui’s ticket, the worked example
  const worked = {
    id: "l8-w-lockout", strand: U, facets: {},
    blocks: [mail("Rui Santos, Sales", "Email · 11:40 AM", "Locked out AGAIN", [
      S("a1", "This is the THIRD time this week my laptop has locked me out."), S("a2", "Nobody there knows what they are doing."),
      S("a3", "I have a client call at 2 and I cannot even sign in.")]),
      prose("Rui has three tickets this week for the same lockout."), table("This desk’s rule", ["Rule"], [["q1", "The same fault on three tickets in a week is raised as a problem."]])],
    steps: [
      { id: "defend", does: "Do not defend the desk.", working: "He is right that it has happened three times. Explaining why the earlier tickets were closed would be arguing, and it does not get him to the call. Say that you heard him." },
      { id: "who", does: "Confirm it is him.", working: "He is upset and in a hurry, which is how someone pretending to be him would sound too. Before any unlock, the desk’s own check comes first: its usual questions, answered correctly." },
      { id: "next", does: "Say what happens next, and when.", working: "He needs to know that someone has it and when he will hear. Your steps and a time you will report back are in your hands. A result such as “it will never lock you out again” is not.", ask: "reply" },
      { id: "follow", does: "Follow up at the time you said.", working: "At 1:00 you write to him, even if you have no answer yet. A user who hears nothing feels ignored a second time. The desk’s rule raises the same fault on three tickets in a week as a problem, and Rui has three, so you hand the pattern on as a problem." }],
    asks: [{ id: "reply", kind: "choose", prompt: "What is your first reply to Rui?", shuffle: true, options: [
      ok("o1", "Three lockouts in a week, with a client call at 2, is a real problem and I am sorry. I need to check it is you with the desk’s usual questions; then I unlock you, and I will write you by 1:00 either way.", "Rui answers the questions and signs in at 11:50. At 1:00 you write him that you found the cause is still open and when you will write again."),
      no("o2", "I am sorry about the trouble, Rui, but the earlier tickets were closed because nobody answered our follow-up. After the desk’s questions I unlock you, and I will write you by 1:00 either way.", "argued", "Rui reads it as “it is your fault”. He writes back angrier and the call is still at 2."),
      no("o3", "I am sorry about the three lockouts, Rui. After the desk’s questions I unlock you now, and I guarantee it will never lock you out again. I will write you by 1:00 either way.", "false-promise", "You do not know the cause yet. If it locks him out on Friday, he remembers the guarantee.")] }],
    deciding: ["a1", "a3"],
    reason: "He is upset because his work is stopped. The reply says that you heard it (three times, a call at 2), says you are sorry for the trouble, does the desk’s check, and gives your next steps and a time. It does not argue about the earlier tickets and it does not promise a result you do not control." };

  // ----- the first group: the deciding words are marked -----
  const group1 = [
    pick({ id: "l8-p-first", blocks: [mail("Sofia Brandt, Finance", "Email · 9:30 AM", "Printer on 3 STILL broken", [
      S("b1", "This is the fourth time I have reported the printer on 3."), S("b2", "I have invoices to print by noon and nobody has even called me back.")]), prose("A technician is free to go to the printer now.")],
      prompt: "What is your first reply?", deciding: ["b1", "b2"],
      opts: [no("o2", "I am sorry you are frustrated, Sofia, but our records show the earlier tickets were closed after you did not reply. I will write you by 11:30 either way.", "argued", "She hears a defense. Nothing in it helps her print by noon."),
        no("o3", "I am sorry about the wait. The print spooler (the part of Windows that lines up pages for the printer) on the print server has hung, so I am restarting the service now, and I will write you by 11:30 either way.", "jargon", "She has no idea what that means or when it will print. She wanted neither the cause nor the parts."),
        ok("o1", "Four reports, and invoices due at noon: I am sorry nobody called you back. I am sending someone to the printer now, and I will write you by 11:30.", "Sofia has a person coming and a time to hear from you.")],
      reason: "She is upset that nobody called her back and that noon is close. Say you heard both, say what happens now, and give a time you will write. Defending the desk or using machine words does not help her." }),
    { id: "l8-p-tap", strand: U, facets: {},
      blocks: [prose("Hal Cole is angry that his laptop has been slow for a week. A colleague wrote this reply and wants you to look at it before it is sent."),
        { kind: "message", form: "email", from: "A colleague", subject: "Draft reply", detail: "To Hal Cole", id: "draft", lines: [S("d1", "Hi Mr. Cole,"), S("d2", "I am sorry about the trouble with your laptop.", { note: "That line says sorry. It is fine." }),
          S("d3", "It is probably nothing serious; these things happen all the time.", { note: "That brushes his problem off." }),
          S("d4", "I will check the update logs (the list of updates installed on his laptop) and call you at 1:00 with what I find.", { note: "That says what happens next and when. It is fine." })] }],
      asks: [{ id: "tap", kind: "tap", prompt: "Tap the line that dismisses Hal’s problem.", right: ["d3"] }], deciding: ["d3"],
      reason: "“It is probably nothing” tells him his week of trouble does not matter. The other lines say sorry and say what happens next and when, and they can stay." },
    pick({ id: "l8-p-next", blocks: [prose("You have said you are sorry that Ana Pires’s laptop shut off during a presentation. A loaner is a spare laptop you lend while hers is looked at, and the desk has one free. She answers:"),
      chat("Ana Pires", "Chat · 3:05 PM", [S("c1", "OK, but what happens now? When will I have a laptop I can trust?")])],
      prompt: "What do you tell her?", deciding: ["c1"],
      opts: [no("o2", "I am sorry, Ana. It will definitely be fixed by 3:30, and I will message you the moment it is done. Please do not worry about the presentation.", "false-promise", "You do not know that. If the fault is not what you expect, she remembers the word “definitely”."),
        no("o3", "I am sorry, Ana. I am putting in a new battery now, which takes about 20 minutes, so you can present on your own laptop, and I will message you at 3:30 either way.", "part-first", "You have not tested anything yet. If the battery is not the cause, she has lost the 20 minutes and her trust."),
        ok("o1", "I am lending you a spare laptop now so you can present, and testing yours to find out why it shut off. I will message you at 3:30 with the result.", "She presents on the loaner, and at 3:30 she has your message with the test result."),
        no("o4", "I am sorry, Ana. It should be soon. I will look into what happened to your laptop and let you know as soon as I can.", "no-next", "“Soon” gives her nothing to plan on, and she does not know what you are doing.")],
      reason: "She wants to know what happens now and when. Give your own steps, a way to keep working, and a time you will report back; a first check comes before a part. A promised result you do not control, or “soon”, leaves her worse off." }),
    exchange({ id: "l8-p-lockout", form: "call", from: "Daniel Ruiz", detail: "Incoming call · 11:40 AM", prompt: "Daniel has been locked out of his laptop for the third time this week. What do you say?",
      context: "Daniel Ruiz is in Sales. It is 11:40, and he has a client call at 2. The desk’s rule: confirm who is calling with its usual questions before any unlock. Another rule: the same fault on three tickets in a week is raised as a problem, and Daniel has three tickets this week for this lockout.",
      turns: [
        { lines: ["This is the third time this week! You people keep telling me it is fixed.", "I have a client call at 2 and I cannot even sign in."], push: "He is angry and blames the whole desk.",
          bad: ["I am sorry, Daniel, but the earlier tickets were closed because you did not answer our follow-up. I will write you by 1:00.", "argued", "Daniel hangs up and writes to your manager. His laptop is still locked."],
          hold: "I understand. Let me take a look at this.",
          good: ["Three lockouts in a week, with a call at 2: I am sorry. Let me put the desk’s usual questions to confirm it is you, and then I unlock you while we talk.", "Daniel answers them and signs in two minutes later. You tell him you will write by 1:00 with what you found, and you raise the three lockouts as a problem so the cause is looked for."] },
        { lines: ["Take a look? That is what the last one said!", "When exactly will I be able to sign in?"], push: "He repeats the old complaint and wants a time.",
          bad: ["I am sorry about the wait. It depends on a lot of things, so I cannot say when.", "no-next", "He gives up on you and starts looking for another way in. He is angrier when he calls again."],
          good: ["You are right to want a time. Answer my questions and I unlock you now. I stay on the line until you are signed in.", "He answers, signs in, and is still annoyed, but he lets you tell him you will write by 1:00."] }],
      reason: "He is upset about three lockouts and a call at 2. Hearing it and saying sorry comes first, then the desk’s check, your next step and a time. “Let me take a look” gives him nothing to hold on to, so the pressure goes up." })
  ];

  // ----- the second group -----
  const group2 = [
    exchange({ id: "l8-q-chat", form: "chat", from: "Marta Lindqvist, HR", detail: "Chat · 10:05 AM", prompt: "Marta’s shared inbox is not delivering mail again. What do you write?",
      context: "Marta runs HR. A shared inbox is a mailbox several people use. You fixed hers last week, and it has stopped delivering mail again.",
      turns: [
        { lines: ["You said it was fixed last week.", "I am done with this."], push: "She is angry and says she is giving up on the desk.",
          bad: ["I am sorry, Marta, but last week’s fix was for a different problem, so you must have changed something. I will write you by 10:30.", "blamed", "Marta stops writing and calls your manager. Her inbox is still broken."],
          hold: "Let me look into it.",
          good: ["You were told it was fixed and it stopped again, and I am sorry. I am checking the inbox now, and I will write you by 10:30 with what I find.", "Marta replies “OK.” At 10:30 you write her what you found."] },
        { lines: ["Look into it? Last week that meant nothing happened.", "What are you doing right now?"], push: "She does not trust a vague reply.",
          bad: ["I am looking at it now, and I am sorry. It should only take a little while.", "no-next", "She cannot plan around “a little while”, and writes to your manager."],
          good: ["Right now I am opening the inbox’s settings to see where the mail stops. I will write you at 10:30 whatever I have found.", "She says “fine” and waits for 10:30."] }],
      reason: "She is angry that the fix did not hold. Say sorry that it stopped again, then give a step and a time. “I will look into it” is what she says did nothing last week." }),
    exchange({ id: "l8-q-jargon", form: "call", from: "Mr. Okoye", detail: "Incoming call · 1:15 PM", prompt: "Mr. Okoye does not understand what you are telling him. What do you say?",
      context: "Mr. Okoye runs a small office and cannot receive email at his new address. A colleague told him it was a “DNS and cache problem” (DNS is the internet’s address book; a cache is a computer’s saved copy of an old answer). Your colleague found that the new address works, but some computers still look in the old place and have not caught up.",
      turns: [
        { lines: ["Your colleague keeps saying DNS and cache. I just need my email.", "I do not understand a word of it."], push: "He is angry and feels talked down to.",
          bad: ["I am sorry. It is a DNS propagation issue: the old record is cached until the TTL expires. I will call you at 3.", "jargon", "He says “you are not helping” and ends the call."],
          hold: "I am sorry. It is a technical problem.",
          good: ["That is fair, and I am sorry. In plain words, the new address is ready, but some computers are still looking in the old place. I cannot say exactly when they catch up, so I will call you at 3 to check.", "He says “now I can tell my staff.”"] },
        { lines: ["A technical problem? I know it is technical. What do I tell my staff?"], push: "He is still unhappy and wants something to say.",
          bad: ["Just tell them it is a DNS issue. I will call you at 3 either way.", "jargon", "He has the same words and no meaning, and he is more frustrated."],
          good: ["Tell them the new address is ready and some computers have not caught up yet. I will call you at 3 either way.", "He writes it on a note for his staff."] }],
      reason: "He is not upset about the problem but about being talked over. Plain words (some computers still look in the old place), a call-back time and no promise of when it clears answer what he needs. Technical words, even right ones, do not." }),
    pick({ id: "l8-q-follow", blocks: [prose("At 11 you told Imogen Park that you would update her at 3 about her laptop. It is 3:00. You have nothing new: the part has not come.")],
      prompt: "What do you do?",
      opts: [no("o1", "Wait until the part arrives so your message has real news in it, then write her the moment it is in", "no-next", "At 3:00 she looks for your message. Silence tells her she was forgotten."),
        no("o3", "Write tomorrow morning, when the part is due, so she gets one message with the answer and no empty updates", "no-next", "You missed the time you gave her. Even a message with no news keeps your word."),
        ok("o2", "Write at 3:00 anyway: the part has not come, what you are doing about it, and when you will write next", "She is not pleased, but she knows where it stands and when she will hear again.")],
      reason: "The time you gave is a promise. Keep it with no news: say that, say what you are doing, and say when you will write next." }),
    pick({ id: "l8-q-plain", blocks: [prose("Karl Brandt’s laptop keeps shutting off when it is unplugged. You found the battery is worn out. He writes:"), chat("Karl Brandt", "Chat · 2:40 PM", [S("k1", "Why does this keep happening to me?")])],
      prompt: "What do you tell Karl?",
      opts: [no("o2", "It happens when people let the battery run flat too often, so it helps to charge it more regularly. I am swapping it today and will write you when it is done.", "blamed", "Karl hears that it is his fault, and it is not."),
        ok("o1", "The battery is worn out, so the laptop shuts off as soon as it is not plugged in. I am swapping it today and I will write you when it is done.", "Karl knows what happened, that it was not him, and what comes next."),
        no("o3", "The battery’s cycle count passed its design limit, so the firmware (the laptop’s built-in software) is cutting power. I am swapping it today and will write you when it is done.", "jargon", "None of that tells Karl what is wrong in words he can use.")],
      reason: "He wants to know why. Give the cause in words he can use, without blaming him and without terms he does not know, then say what happens next." }),
    pick({ id: "l8-q-id", blocks: [chat("Carla Vega", "Chat · 9:35 AM", [S("v1", "I am locked out and I have a board meeting in ten minutes!"), S("v2", "I do not remember my employee number. Just unlock it, this is ridiculous.")]),
      table("This desk’s rule", ["Rule"], [["q1", "Before any unlock, the desk checks the caller against the company directory: it calls the number on file for the employee, or the employee’s manager, looked up in the directory, vouches for them by phone. A number or name the caller gives is never used."]])],
      prompt: "What do you write?", deciding: ["v2", "q1"],
      opts: [no("o2", "I am sorry about the timing. I will unlock it now and you can pass the check afterwards, so you are in before your meeting, and I will write you by 9:50.", "no-id-check", "Anyone could write this message. An unlock before the check can hand a stranger the account."),
        no("o3", "I am sorry, but the rule is the rule, so there is no unlock without the check. Please sort it out and call back when you can, and I will write you by 9:50 to see how it went.", "argued", "She is left with a no and nothing to do about the meeting."),
        ok("o1", "Ten minutes is tight, and I am sorry. I cannot unlock without the check, so I look up your manager in the directory and call them to vouch for you. I do it now.", "The manager vouches, and you unlock the account before the meeting.")],
      reason: "An upset person in a hurry still has to pass the desk’s check, because someone pretending to be her sounds the same. Say sorry, say what you can do instead, and move at once." })
  ];

  // ----- the third group (lesson 7 questions mixed in) -----
  const group3 = [
    exchange({ id: "l8-r-handon", form: "call", from: "Lena Ortiz", detail: "Incoming call · 3:20 PM", prompt: "Lena’s ticket has just moved to the network team. What do you say?",
      context: "Lena Ortiz works from home. Under the desk’s rule you handed her VPN ticket (the VPN is the private connection to the company’s network) to the network team, with everything you tried. The desk’s table says that team answers within 4 working hours. She calls.",
      turns: [
        { lines: ["So now my ticket goes to somebody else?", "Do I have to explain all of it again to them?"], push: "She is annoyed and expects to start over.",
          bad: ["I am sorry, but that is our procedure and I cannot change it. The network team answers within 4 working hours.", "argued", "She hangs up annoyed. She calls the network team to explain it all again."],
          hold: "I will pass it on.",
          good: ["You do not have to repeat anything: they have your words, your laptop and what each try showed. They answer within 4 working hours, and I will check back at 5:00.", "She says “good”, and goes back to her day."] },
        { lines: ["Pass it on to who? When will I hear anything?"], push: "She wants a name and a time.",
          bad: ["It is with another team now, and I am sorry for the wait. I will let you know.", "no-next", "She still does not know who, or when. She calls again in an hour."],
          good: ["The network team has it. They answer within 4 working hours, and I will write you at 5:00 with where it stands.", "She writes down the time and waits."] }],
      reason: "She is upset because she thinks she must start over. Tell her what went with the ticket, who has it, and when she will hear. “It is our procedure” is defending the desk." }),
    exchange({ id: "l8-r-chat", form: "chat", from: "Hana Weiss", detail: "Chat · 4:10 PM", prompt: "Hana says she will complain about you. What do you write?",
      context: "Hana Weiss has waited two days for a new mouse and keyboard. The stock room may hold her order; if it does, you can bring it to her desk in 20 minutes. She writes to the chat.",
      turns: [
        { lines: ["This is ridiculous. Two days for a mouse!", "I am going to complain to your manager."], push: "She threatens to complain.",
          bad: ["I am sorry you are unhappy, but a complaint will not move your order up the waiting list. I will write you by 4:30.", "argued", "She does complain, and her mouse is still not there."],
          hold: "I am sorry you feel that way.",
          good: ["Two days without a mouse is too long, and I am sorry. I am checking the stock room for your order now, and I will write you by 4:30 with when it reaches your desk.", "She says “fine”, and at 4:30 you write her."] },
        { lines: ["“Feel that way”? I do not feel anything. It is two days."], push: "She hears a brush-off.",
          bad: ["I am sorry, but I cannot control how long deliveries take. I will write you by 4:30.", "argued", "She hears a defense, and her complaint stays."],
          good: ["You are right, it is two days. I am checking the stock room; if it is there I bring it up in 20 minutes and write you when it is on your desk.", "She says thanks and waits."] }],
      reason: "A threat to complain is not an insult to answer. Hear the real complaint (two days), say sorry for the time, and give a step and a time. “I am sorry you feel that way” puts the problem in her feelings." }),
    pick({ id: "l8-r-confirm", blocks: [prose("Daniel Ruiz is calmer now. You checked it was him with the desk’s questions, unlocked his laptop, and a test sign-in worked."), chat("Daniel Ruiz", "Chat · 12:05 PM", [S("e1", "Fine. Just close it, I do not care, I have to prepare for the call.")])],
      prompt: "What do you do?", deciding: ["e1"],
      opts: [no("o1", "Close the ticket as he wants, since he has a call to prepare for and your own test sign-in worked just fine", "closed-early", "He never tried to sign in himself. If it locks him out at 1:45, the ticket is closed and he is angrier."),
        no("o3", "Tell him you will leave it open for a week to be safe, and write him on Friday to see how it went for him", "no-next", "He wanted it done. A week open says nothing about what he should do now."),
        ok("o2", "Tell him you are sorry to take one more minute, have him sign in himself now, and once it works write the note and close the ticket", "He signs in. You write the note, and the ticket closes with his yes.")],
      reason: "He tells you to close it, but your test is not his sign-in. A polite one-minute check by him keeps the ticket honest and keeps his time." }),
    pick({ id: "l8-r-words", blocks: [prose("You are writing the note on Daniel’s ticket. He wrote: “Locked out of my laptop for the third time this week, nobody here knows what they are doing, I have a client call at 2.” This course leaves insults out of the note and keeps the facts.")],
      prompt: "What goes under “their words”?",
      opts: [no("o2", "“Locked out of my laptop for the third time this week, nobody here knows what they are doing, I have a client call at 2.”", "vague-note", "It keeps the insult, which is not a fact the next tech can use."),
        no("o3", "User was rude and very angry, third time this week, wants it fixed now and fast", "blamed", "The next tech learns about his mood and not about the problem."),
        ok("o1", "“Locked out of my laptop for the third time this week; I have a client call at 2.”", "The note keeps the facts the next tech can search and leaves the insult out.")],
      reason: "The words in the note are the facts of what the user saw, in their wording. Leave out the insult and your judgment of their mood; keep the facts, such as three times and the call at 2." })
  ];

  // ----- the check: five new calls, no help -----
  const check = [
    exchange({ id: "l8-k-meeting", form: "call", from: "Mr. Hollis", detail: "Incoming call · 9:50 AM", prompt: "Mr. Hollis’s video call dropped in front of the board. What do you say?",
      context: "Mr. Hollis is a director. His video call dropped twice this morning during a board meeting. You know almost nothing yet about what happened.",
      turns: [
        { lines: ["My call dropped twice in front of the board this morning!", "This is unacceptable."], push: "He is angry and embarrassed.",
          bad: ["I am sorry, Mr. Hollis, but your Wi-Fi at home is not our responsibility. I will call you by 10:30.", "blamed", "He says “then what are you for?” and wants your manager."],
          hold: "I will check the logs (the computer’s written record of what happened).",
          good: ["A call dropping in front of the board is awful, and I am sorry. Tell me what you saw when it dropped, from when you joined.", "He calms enough to tell you: it froze, then the app closed. Now you can narrow it down."] },
        { lines: ["The logs? Do you know who I am?", "I need this fixed before 2."], push: "He leans on his position.",
          bad: ["I am sorry, but the call dropped because of your connection, not our systems. I will call you at 11.", "blamed", "He says it is the desk’s job to find out, and complains to your manager."],
          good: ["I know it matters, and I am sorry. I am testing your connection and the meeting app now, and I will call you at 11 with what I found and what happens before 2.", "He says “call me at 11.” You call at 11."] }],
      reason: "Being important does not change the moves. Say sorry for what happened, put an open question so he tells you what he saw, and give a step and a time. Blaming his connection judges him before you know." }),
    exchange({ id: "l8-k-promise", form: "chat", from: "Eun Park, Design", detail: "Chat · 1:30 PM", prompt: "Eun wants a yes or no on tomorrow. What do you write?",
      context: "Eun’s laptop is waiting for a part. You do not know when it arrives. A loaner (a spare laptop you lend) may be available.",
      turns: [
        { lines: ["Is my laptop going to be fixed by tomorrow?", "Just say yes or I am complaining to your manager."], push: "She demands a promise.",
          bad: ["I am sorry for the wait. Yes, definitely by tomorrow, and I will write you at 4.", "false-promise", "She plans her day on it. The part does not come, and she is now angrier."],
          hold: "I will do my best.",
          good: ["I am sorry, but I cannot promise tomorrow, because the part has not arrived. I can promise to write you by 4 today with whatever the supplier has told me, even if that is no news, and to check for a loaner for tomorrow.", "She says “OK, a loaner works.” You write at 4."] },
        { lines: ["“Do my best” is not an answer. Yes or no?"], push: "She repeats the demand.",
          bad: ["I am sorry. Yes, I will make sure it is ready, and I will write you by 4.", "false-promise", "You have no part. She will find out tomorrow."],
          good: ["I cannot say yes, because the part is not here and I do not want to give you something I cannot keep. By 4 today I will write you with whatever the supplier has told me, even if that is no news, and tell you whether a loaner is ready.", "She does not like it, but she accepts it."] }],
      reason: "She wants a promise the part decides. Offer what is in your hands: a time you will write, and a way to keep working (a loaner). A false yes feels better for an hour and then costs more." }),
    exchange({ id: "l8-k-meaning", form: "call", from: "Ms. Lindgren", detail: "Incoming call · 2:10 PM", prompt: "Ms. Lindgren wants to know what “we are working on it” means. What do you say?",
      context: "Ms. Lindgren has had “we are working on it” in three updates for a broken shared folder. You have checked that the folder exists and that her account can reach it, and next you will test the folder from another account.",
      turns: [
        { lines: ["You people always say “we are working on it”.", "What does that even mean?"], push: "She is sarcastic and wants a real answer.",
          bad: ["I am sorry. It means we are working on it, and these things take time.", "no-next", "She hangs up. She now thinks no one is working on it."],
          hold: "I understand. It is frustrating.",
          good: ["Fair question, and I am sorry the updates told you nothing. So far I have checked that the folder exists and that your account can reach it. Next I test it from another account, to see whether the fault is your account or the folder. I will call you at 3 either way.", "She says “thank you, that is what I wanted to know.”"] },
        { lines: ["You understand? Then tell me what has been done."], push: "She hears a brush-off.",
          bad: ["I understand the frustration, but I cannot go into the details. I will call you at 3.", "argued", "She puts the phone down and writes to your manager."],
          good: ["So far: I checked that the folder exists and that your account can reach it. Next: I test it from another account. I will call you at 3 either way.", "She says “fine.” At 3 you call her."] }],
      reason: "“Working on it” tells her nothing. Say what you did, what you do next, and when she hears. Saying you understand without a fact only adds to the sarcasm." }),
    exchange({ id: "l8-k-policy", form: "chat", from: "Tomas Reyes", detail: "Chat · 11:00 AM", prompt: "Tomas calls the software rule stupid. What do you write?",
      context: "Tomas needs a program on his laptop today. Staff cannot install programs themselves; the desk installs the ones on the approved list (the programs the company allows), and for a program not on the list the desk can send an approval request.",
      turns: [
        { lines: ["I just need to install one program today, it is one time.", "Your rule is stupid."], push: "He is angry about the rule.",
          bad: ["I am sorry, but the rule exists for a reason and it is not changing. I will write you by 1:00.", "argued", "He stops writing and finds a way around it. Your desk loses the ticket."],
          hold: "I am sorry you feel that way.",
          good: ["I can see it blocks your work today, and I am sorry. I can install it for you if it is on the approved list. Which program is it, and what do you need it for?", "He tells you. It is on the list, and you install it in 10 minutes."] },
        { lines: ["I do not feel anything, I need it today."], push: "He wants a way forward, not sympathy.",
          bad: ["I am sorry, but policy is policy. I will write you by 1:00.", "argued", "He ends the chat and goes to someone else."],
          good: ["Understood. Name the program: if it is approved I install it today, if not I send the approval request now. I write you by 1:00.", "He sends the name. You have a step and a time."] }],
      reason: "He is angry about a rule you cannot change. Do not defend it. Hear that it blocks his work, put a question to find out what he needs, and offer the way the rule allows, with a time." }),
    pick({ id: "l8-k-id", blocks: [chat("Marcus Webb", "Chat · 8:15 AM", [S("w1", "My boss Ms. Alvarez is locked out, she is on a plane in two hours and furious."), S("w2", "Reset her password and send the new one to me, I will pass it on.")]),
      table("This desk’s rule", ["Rule"], [["q1", "A password reset goes only to the account owner, after the desk’s check on the owner. The check uses the number on file in the company directory, never a number the caller gives."]])],
      prompt: "What do you write?", deciding: ["w2", "q1"],
      opts: [no("o1", "I am sorry she is stuck. I will reset it now and send the new password to you, and I will write you by 8:45. She can then sign in before her flight.", "no-id-check", "You do not know who Marcus is. The new password goes to someone who has not passed the owner’s check."),
        no("o3", "I am sorry, but asking for someone else’s password is not something I can do, and I will not discuss it any further. I will write you by 8:45.", "blamed", "It judges Marcus, and Ms. Alvarez is still locked out."),
        ok("o2", "Two hours is tight, and I am sorry. The reset can only go to her, after our check. Have her call the desk now, or I call her on the number the company has on file.", "Ms. Alvarez calls, passes the check, and signs in before she leaves for the airport.")],
      reason: "The caller may be who he says and still not be the owner. A reset goes to the owner after the desk’s check, however upset the room is. Say sorry, say how it can still happen quickly." })
  ];

  // ----- reserve: kept for the review -----
  const reserve = [
    exchange({ id: "l8-s-monitor", form: "call", from: "Mrs. Abara", detail: "Incoming call · 10:20 AM", prompt: "Mrs. Abara’s monitor has flickered for a week. What do you say?",
      context: "Mrs. Abara has reported a flickering monitor three times this week.",
      turns: [
        { lines: ["I have been polite for a week, and my monitor still flickers.", "Three tickets. Nothing."], push: "She feels ignored.",
          bad: ["I am sorry, but the earlier tickets were closed because the flicker stopped when we tested it. I will write you by noon.", "argued", "She hears “you imagined it” and her next call is to your manager."],
          hold: "I am sorry. Let me see what I can do.",
          good: ["A week of flicker after three reports is too long, and I am sorry. Today I test your monitor on another computer and another monitor on yours, to see which one is the fault. I will write you by noon with what that showed.", "She says “thank you.” At noon you write her."] },
        { lines: ["See what you can do? You said that to me on Tuesday."], push: "She hears the same empty line again.",
          bad: ["I am sorry, but I cannot promise a time.", "no-next", "She has nothing to plan on and calls again in an hour."],
          good: ["You are right, I did not give you a time before. I run the test today, and I will write you at noon with the result and what happens next.", "She says “OK.” At noon you write her."] }],
      reason: "Three reports and no result make her feel ignored. Say sorry for the week, then give a step and a time. “See what I can do” repeats what she heard on Tuesday." }),
    exchange({ id: "l8-s-update", form: "chat", from: "Leo Fischer", detail: "Chat · 8:45 AM", prompt: "Leo says your update broke his laptop. What do you write?",
      context: "A Windows update installed overnight. Leo’s laptop now starts slowly and he lost twenty minutes.",
      turns: [
        { lines: ["Your update broke my laptop.", "I wasted my whole morning."], push: "He blames the desk.",
          bad: ["I am sorry, but you should have restarted when we asked you to. That would have avoided it. I will write by 9:30.", "blamed", "He now believes the desk blames its users."],
          hold: "These updates sometimes cause problems.",
          good: ["Twenty minutes of your morning gone to a slow start is real, and I am sorry. I am checking what the update changed on your laptop, and I will write you by 9:30 with what I find.", "He says “OK.” At 9:30 you write him."] },
        { lines: ["“Sometimes cause problems”? So it is not my problem, it is yours?"], push: "He wants an owner, not a shrug.",
          bad: ["I am sorry, but there is nothing unusual about this. I will write you by 9:30.", "argued", "He takes it to your manager."],
          good: ["It is a problem we need to fix, and I am on it. I am checking what the update changed, and I will write you by 9:30.", "He says “OK” and waits."] }],
      reason: "He is angry that his morning went. Hear that, say sorry for the time, and give a step and a time. Blaming him for the restart and the shrug of “sometimes” are both on the wrong side." }),
    pick({ id: "l8-s-start", blocks: [prose("A caller starts with, “You people are useless!” before you have said anything. His printer has not worked since Monday.")],
      prompt: "What do you say first?",
      opts: [no("o2", "I am sorry you are upset, but there is no need to be rude. Tell me about the printer and we will see what we can do.", "blamed", "You have judged his tone before hearing his problem, and he gets louder."),
        ok("o1", "I am sorry this has cost you the week. Tell me what is happening with the printer, and I will start there.", "He tells you in his own words, and the call has something to work with."),
        no("o3", "I am sorry you feel that way, but shouting will not get this fixed any faster than staying calm will.", "blamed", "It scolds him, and the printer is still broken.")],
      reason: "The first words are for what he has lost and for letting him tell it. Judging his tone comes before you know what happened, and it adds to the anger." }) ];

  FC.items("it-support", [worked, ...group1, ...group2, ...group3, ...check, ...reserve]);
})();
