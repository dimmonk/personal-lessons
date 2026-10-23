// IT Help Desk, lesson 2 "Getting the story" (part story): the questions. Move 2 of the way of thinking: the user's words first, an open question to
// narrow them, the story said back to check it, plain words, and the desk's knowledge base searched with the fault's own words (research IT17 and the
// A+ 220-1202 objective 4.7: open questions, restate, no argument, no jargon; IT18 and IT14: understand the user first, then search what the desk
// already knows, and read the article's environment; IT19: user and technician work out the problem together, limited evidence).
// Every user and ticket is invented. Shapes: a first reply (four options: an open question and four ways it goes wrong), the story said back, the
// words to search with (a tap), the knowledge base article that matches the symptom and the setup (a table), and calls (an exchange that pushes).
(() => {
const STRAND = "story";
const line = (id, text, extra) => ({ id, text, ...extra });
const email = (from, detail, subject, lines) => ({ kind: "message", form: "email", from, detail, subject, lines: lines.map(l => line(...l)) });
const chat = (from, detail, lines) => ({ kind: "message", form: "chat", from, detail, lines: lines.map(l => line(...l)) });
const call = (from, detail, lines) => ({ kind: "message", form: "call", from, detail, lines: lines.map(l => line(...l)) });
const make = (id, blocks, asks, reason, extra) => ({ id, strand: STRAND, facets: {}, blocks, asks, deciding: [], reason, ...extra });

// a first reply to a first message: one open question and the ways it goes wrong, each worded by the item
const firstReply = (spec) => make(spec.id, [spec.message],
  [{ id: "first", kind: "choose", prompt: "What do you write back first?", shuffle: true, options: spec.options }], spec.reason,
  { deciding: spec.deciding, ...(spec.steps ? { steps: spec.steps } : {}) });
const ok = (id, text, then) => ({ id, text, ok: true, then });
const bad = (id, text, slip, then) => ({ id, text, slip, then });
// the story said back: four ways to answer after hearing it
const sayBack = (spec) => make(spec.id, [spec.message],
  [{ id: "back", kind: "choose", prompt: "You have heard the story. What do you say back?", shuffle: true, options: [
    ok("right", spec.right, "You said it in their words, with the facts in the order they gave them, and gave them the chance to correct you."),
    bad("guess", spec.guess, "guessed-cause", spec.guessThen),
    bad("added", spec.added, "added-fact", spec.addedThen),
    bad("skip", spec.skip, "no-sayback", "Nothing was said back, so a fact you missed or got wrong stays hidden until it costs time."),
    bad("jargon", spec.jargon, "jargon", "The user may not know these words, and a story they cannot follow is a story they cannot correct.")] }],
  spec.reason, { deciding: spec.deciding });
// the words to search with: the line that names the fault
const searchWords = (spec) => make(spec.id, [spec.message],
  [{ id: "tap", kind: "tap", prompt: "Tap the line whose words you would search the knowledge base with.", right: [spec.right] }], spec.reason, { deciding: [spec.right] });
// the article that matches both the symptom and the setup
const articleTable = (title, rows) => ({ kind: "document", form: "table", title, head: ["Article", "Issue", "Environment"], rows: rows.map((r, i) => ({ id: `kb${i + 1}`, cells: r })) });
const article = (spec) => make(spec.id, [spec.message, articleTable(spec.title, spec.rows)],
  [{ id: "pick", kind: "choose", prompt: "Which article is about this user's fault, on this user's setup?", options: spec.rows.map((r, i) => i === spec.right
    ? ok(`a${i + 1}`, r[0], spec.rightThen) : bad(`a${i + 1}`, r[0], "wrong-article", spec.thens[i])) }], spec.reason, { deciding: [`kb${spec.right + 1}`] });
// a call: each turn is what the user says and the replies; `ends` says what happened
const exchange = (spec) => make(spec.id, [{ kind: "prose", text: spec.context }],
  [{ id: "call", kind: "exchange", prompt: spec.prompt, form: "call", from: spec.from, detail: spec.detail, start: "one", turns: spec.turns, ends: spec.ends }], spec.reason);

FC.items("it-support", [
  // ----- the worked ticket: the first guess is a broken printer; the user's answer rules it out -----
  make("l2-w-printer", [
    email("Fidel Lindqvist", "Pharmacy · Monday 9:02 AM", "Printer broken", [["a1", "The printer is broken. Nothing comes out. Fix please."]]),
    email("Fidel Lindqvist", "Pharmacy · Monday 9:08 AM, after your question", "Re: Printer broken", [["b1", "I press Print and it says it went to Printer 3-North. Nothing comes out here on floor 2."], ["b2", "I moved up from floor 3 last Friday."]])],
    [{ id: "first", kind: "choose", prompt: "What do you write back first?", options: [
      ok("open", "Tell me what you see on the screen when you press Print.", "An open question lets them describe it in their own words, and it narrows \"broken\" to what they saw."),
      bad("fix", "I will have someone check the printer for a jam.", "fixed-first", "That acts on a guess made from four words. \"Broken\" could mean many things.")] },
     { id: "back", kind: "choose", prompt: "Now that you have their answer, what do you say back?", options: [
      ok("right", "You pressed Print and it says it went to Printer 3-North. Nothing comes out on floor 2, and you moved up last Friday. Is that right?", "You said it in their words, and they can correct anything you got wrong."),
      bad("guess", "So the printer on floor 2 is broken. I will send someone.", "guessed-cause", "Their answer already rules that out: the page went to a printer on floor 3, not the one on floor 2."),
      bad("skip", "Got it. I will look into it and call you back.", "no-sayback", "Nothing was said back, so a missed fact stays hidden.")] }],
    "The reply to \"broken\" is an open question, not a fix. Their answer names a printer on floor 3 and a move on Friday, which a guess about a broken printer on floor 2 would never have found. Saying it back checks that you have it right before you search or touch anything.",
    { deciding: ["b1", "b2"], steps: [
      { id: "guess", does: "Notice your first guess.", working: "\"The printer is broken\" suggests a jam or no paper. That is a guess made from four words, so you do not act on it yet." },
      { id: "open", does: "Question their openly.", working: "You put it to them openly: what do they see when they press Print? They answer in their own words.", ask: "first" },
      { id: "rule", does: "Let their answer rule your guess out.", working: "It says the page went to Printer 3-North, and they sit on floor 2. A broken printer on floor 2 does not fit that, so the first guess goes." },
      { id: "back", does: "Say the story back.", working: "You repeat what they did and saw, in their words, and let them correct it.", ask: "back" },
      { id: "search", does: "Search what the desk already knows.", working: "Next you search the knowledge base with their own words: \"prints to wrong printer after moving floors\". What changed comes next." }] }),

  // ----- the first group: the deciding words marked -----
  firstReply({ id: "l2-p-open", message: email("Georgia Delgado", "Radiology · Monday 9:12 AM", "Computer slow", [["a1", "My computer has been really slow. Can you fix it?"]]),
    options: [
      ok("open", "What were you doing when it felt slow?", "An open question lets them tell it in their words and narrows \"slow\" to a program, a moment and a symptom."),
      bad("fix", "I will restart your computer from here now, and it should run faster after that.", "fixed-first", "A restart is a guess made before you have heard what they saw, and it can wipe the clues."),
      bad("yn", "Has your computer been restarted since it started to feel slow?", "yes-no", "They can only say yes or no, and you still have not heard what they saw. A closed question like this is for confirming one detail after the story."),
      bad("jargon", "Tell me which processes in Task Manager are using a lot of CPU.", "jargon", "Words like \"processes\" and \"CPU\" may mean nothing to them. A plain question gets their story first.")],
    deciding: ["a1"], reason: "\"Slow\" could be one program, the whole computer, or the network. An open question gets their story in their words before you try anything." }),
  sayBack({ id: "l2-p-sayback", message: call("Priscilla Moore", "Admin · Incoming call · 10:05 AM", [["b1", "I was printing the board packet, 40 pages, and the printer stopped after page 12."], ["b2", "The printer's little screen shows a message about Tray 2."], ["b3", "Then my coworker's job came out, but mine did not."]]),
    right: "So you were printing the 40-page board packet, it stopped after page 12, the printer's screen shows a message about Tray 2, and your coworker's job printed but yours did not. Is that right?",
    guess: "So Tray 2 has run out of paper, which stopped your packet. I will send someone to fill it.", guessThen: "You do not know yet that Tray 2 is empty. The message may say something else, and you told them a cause as if it were a fact.",
    added: "So you were printing the 40-page board packet, it stopped after page 12 when the paper ran out, the screen shows a message about Tray 2, and your coworker's job printed but yours did not. Is that right?", addedThen: "They never said the paper ran out. A fact they did not give, said back as if they had, may be wrong, and they may agree with it just to move on.",
    skip: "Okay, thank you for all the details. I will look at the printer and the packet job and get back to you.",
    jargon: "So the spooler stopped in the middle of the job on a tray fault and your job went behind the next one in the queue.",
    deciding: ["b1", "b2", "b3"], reason: "Saying the story back in their words, with their facts in their order, checks that you heard it right. Naming a cause, or saying nothing, leaves a wrong fact to cost time later." }),
  searchWords({ id: "l2-p-search", message: email("Paige Svensson", "Records · Monday 10:30 AM", "Scheduling program", [
      ["a1", "Hi, I hope your week is going well.", { note: "A greeting names no fault.", slip: "weak-search" }],
      ["a3", "The program is slow, and now and then it freezes for a bit.", { note: "That says how it feels to use. It is not a message on the screen or the name of a part of the program.", slip: "weak-search" }],
      ["a2", "Every time I open the scheduling program, a box says: Update could not finish. Error 1603."],
      ["a4", "Can you fix it soon?", { note: "That is a wish, not a fault.", slip: "weak-search" }],
      ["a5", "It worked fine last week, and I use it all day.", { note: "That says when, but it is not words the desk's records would hold.", slip: "weak-search" }]]),
    right: "a2", reason: "The desk's records hold the fault in words like the message on the screen. Search with the exact message and the program's name, not with how they feel or when it began." }),
  exchange({ id: "l2-p-call", context: "Linda Webb, in intake, calls the help desk. You answer.", prompt: "Linda calls. What do you say?", from: "Linda Webb, Intake", detail: "Incoming call · 9:30 AM",
    turns: {
      one: { lines: [line("c1a", "Hi, it's Linda in intake. My computer is broken."), line("c1b", "I have patients in ten minutes, so please be quick.")], push: "They tell you almost nothing and hurry you.",
        options: [{ id: "open", text: "Tell me what you were doing when it went wrong, and what you saw on the screen.", goto: "two" },
          { id: "fix", text: "Please restart it, and call me back if it still fails.", end: "fixed" },
          { id: "yn", text: "Is it plugged in?", end: "closed" }] },
      two: { lines: [line("c2a", "I was opening the patient list and it went white. A box said something like not responding."), line("c2b", "I do not have time for all this. Just fix it!")], push: "They give you a little, then push you to skip the rest.",
        options: [{ id: "say", text: "Let me say that back: the patient list went white and a box said not responding. Is that right?", end: "story" },
          { id: "skip", text: "Okay. I will restart it from here right now.", end: "restart" },
          { id: "argue", text: "I cannot help you unless you answer my questions.", end: "argued" }] } },
    ends: {
      story: { ok: true, then: "You have what they were doing and what they saw, in their words, and they can correct it. Next you search the desk's records for \"patient list not responding\"." },
      fixed: { ok: false, slip: "fixed-first", then: "A restart before the story throws away what was on the screen. If it comes back, you still know nothing about it." },
      closed: { ok: false, slip: "yes-no", then: "They can only say yes or no, you still do not know what they saw, and their ten minutes are running." },
      restart: { ok: false, slip: "fixed-first", then: "They pushed and you gave in. A restart now loses the box that said not responding, and you never learn if it happened before." },
      argued: { ok: false, slip: "argued", then: "They have patients in ten minutes. Making help depend on their answers turns them against you. Say back what you have, and keep your questions few." } },
    reason: "A user who is short of time still needs their story heard. An open question, then the story said back in a sentence, gets the facts without a fight." }),

  // ----- the second group: nothing marked -----
  firstReply({ id: "l2-q-open", message: chat("Tessa Boyd", "Front desk · Tuesday 8:41 AM", [["a1", "I can't get on the email."]]),
    options: [
      ok("open", "Can you describe what you see on the screen when you try to open your email?", "An open question gets what they see, and \"can't get on\" could mean a dozen things."),
      bad("fix", "Reset your password and try again, and tell me if it still fails.", "fixed-first", "A password reset is a guess, and it changes something before you know what they saw."),
      bad("yn", "Have you tried turning your computer off and on again yet?", "yes-no", "They can only say yes or no, and you learn nothing about what they saw. Put a closed question like this after their story, not instead of it."),
      bad("argued", "Tell me why you cannot get on when email is working for everyone else.", "argued", "That brushes off what they said and tells them it is their fault. They came to you because it is not working for them.")],
    deciding: ["a1"], reason: "\"Can't get on\" could be a wrong password, no network or a closed program. An open question gets their story before you try a fix or defend the system." }),
  article({ id: "l2-q-article", message: chat("Mia Frost", "Lab · Tuesday 9:15 AM", [["a1", "My Mac says the printer is Offline, as if it cannot find it."], ["a2", "The Windows laptops in the lab print to it fine."]]),
    title: "Knowledge base: results for \"printer offline\"",
    rows: [["Printer shows Offline in the Mac print list", "Printer shows Offline in the print list", "Mac, current version of its system"],
      ["Printer shows Offline after sleep", "Printer shows Offline after the laptop wakes", "Windows 11 laptop"],
      ["Printer prints blank pages", "Pages come out blank", "Any computer"]],
    right: 0, rightThen: "Same symptom, same kind of computer: Mia's fault is on a Mac, so the Mac article is the one to read.",
    thens: [null, "Same symptom, but the article is for a Windows laptop, and Mia is on a Mac. The Windows laptops print fine.", "It is a different fault: the pages come out blank, and theirs shows Offline."],
    reason: "An article fits only when the symptom and the setup both match. Mia's fault is Offline on a Mac, so the article for Offline on a Mac fits, not the Windows one with the same symptom." }),
  sayBack({ id: "l2-q-sayback", message: chat("Joon Park", "Accounting · Tuesday 10:02 AM", [["b1", "I got a new laptop on Monday."], ["b2", "I can sign in, but the accounting program says license not found (the permission to run it)."], ["b3", "It ran fine on my old laptop until I handed it back."]]),
    right: "Let me check I have it: you got a new laptop on Monday, you can sign in, the accounting program says license not found, and it ran fine on the old laptop. Did I get that right?",
    guess: "So your license was never moved to the new laptop, and that is why the program stops. Is that right? I will move it.", guessThen: "That may be right, but you do not know yet. You told them a cause as a fact, and acted on it before checking.",
    added: "So you got a new laptop on Monday and reset your password, you can sign in, the accounting program says license not found, and it ran fine on the old laptop until you handed it back. Is that right?", addedThen: "They never said they reset their password. A fact they did not give, said back as if they had, may be wrong, and it sends the search the wrong way.",
    skip: "Thanks for telling me all of that. I will check on the license and let you know what I find.",
    jargon: "So the license binding is tied to the old machine's hardware ID and the new one failed activation.",
    deciding: ["b1", "b2", "b3"], reason: "Saying the story back with their facts in their order lets them correct anything. A guess about the cause, or a bare thanks, skips that check." }),
  exchange({ id: "l2-q-call", context: "Dr. Ellen Park, in radiology, calls the help desk. You answer.", prompt: "Dr. Park calls. What do you say?", from: "Dr. Ellen Park, Radiology", detail: "Incoming call · 11:20 AM",
    turns: {
      one: { lines: [line("c1a", "The internet is down. It's the server, I know it's the server."), line("c1b", "Restart the server.")], push: "They name the cause themself and tell you what to do.",
        options: [{ id: "open", text: "Tell me which page or program you were using when it stopped.", goto: "two" },
          { id: "obey", text: "Okay, I will restart the server.", end: "obeyed" },
          { id: "argue", text: "It cannot be the server.", end: "argued" }] },
      two: { lines: [line("c2a", "The scheduling thing. It just does not work. So it is the server.")], push: "They answer, but they still give you a label and their own cause, not what they saw.",
        options: [{ id: "again", text: "What does the page show on the screen when you open the scheduling program?", goto: "three" },
          { id: "thin", text: "Let me say that back: the scheduling thing does not work because the server is down. Is that right?", end: "thin" },
          { id: "agree", text: "That could be it. I will pass it on as a server problem.", end: "obeyed" }] },
      three: { lines: [line("c3a", "It says page cannot be displayed. My email is open and I can read it."), line("c3b", "So it is the server. Why are you asking me all this?")], push: "They give you the message, then repeat their cause and question your questions.",
        options: [{ id: "say", text: "Let me say that back: the scheduling page will not load, and your email is open. Is that right?", end: "story" },
          { id: "teach", text: "A DNS lookup can fail without the server being down, so I need more detail.", end: "jargon" },
          { id: "agree", text: "That could be it. I will pass it on as a server problem.", end: "obeyed" }] } },
    ends: {
      story: { ok: true, then: "You have the one page that fails and its message, in their words, and you never argued about their guess. An open email does not show that the internet works, so that is the next thing to check." },
      thin: { ok: false, slip: "guessed-cause", then: "Their answer was still a label and their own cause, so you said their guess back as if it were the story. Nothing new was there for them to correct. A second open question gets what they saw." },
      obeyed: { ok: false, slip: "guessed-cause", then: "You took their guess as the cause. Nothing they told you shows the server is down, and a restart could hurt people who are working." },
      argued: { ok: false, slip: "argued", then: "Telling a user they are wrong closes the call down. Their words are still the only evidence you have, so use them." },
      jargon: { ok: false, slip: "jargon", then: "They do not know the words, and they are waiting for an answer. Say it back in their words, then narrow it." } },
    reason: "A user who names the cause is giving a guess, not a fact. You take their words as the story, and when an answer is still only a label you question them again, openly. Once they tell you what they saw, you say it back." }),

  // ----- the third group (mixed with lesson 1) -----
  firstReply({ id: "l2-m-jargon", message: email("Alma Reyes", "Billing · Wednesday 8:50 AM", "Spreadsheet stuck", [["a1", "The spreadsheet thing is stuck and I can't save."]]),
    options: [
      ok("open", "What happens on the screen when you try to save?", "An open question gets what they see, in their words, and narrows \"stuck\"."),
      bad("jargon", "Is the file locked by another process, or is it a permissions problem?", "jargon", "Those words may mean nothing to them, and two guesses in jargon give them nothing to describe."),
      bad("fix", "Close the program, open the file again and try to save once more.", "fixed-first", "That is a fix before the story. If it works they may lose what they typed."),
      bad("guess", "It is probably a permissions problem, so I will change them for you.", "guessed-cause", "You told them a cause you do not know, and you are about to change something because of it.")],
    deciding: ["a1"], reason: "\"Stuck\" and \"can't save\" could be many faults. A plain open question gets their story. Jargon, a fix and a guessed cause all skip it." }),
  article({ id: "l2-m-article", message: email("Sandra Ito", "Pharmacy · Wednesday 9:20 AM", "Email stuck", [["a1", "I'm using the Outlook program on my Windows laptop. A message I sent is stuck in the Outbox (the folder where messages wait to be sent) and won't go."]]),
    title: "Knowledge base: results for \"message stuck in Outbox\"",
    rows: [["Message will not send: Outlook on the web", "Sent message stays in Drafts for the web version", "Outlook in a web browser"],
      ["Message stuck in the Outbox, Outlook phone app", "Sent message stays in the Outbox of the phone app", "Outlook app on a phone"],
      ["Message stuck in the Outbox, Outlook program", "Sent message stays in the Outbox and does not go", "Outlook program on a Windows laptop"]],
    right: 2, rightThen: "The symptom and the setup both match: Outlook installed on a Windows laptop.",
    thens: ["That is about the web version in a browser. Sandra uses the program on their laptop.", "That is about the phone app. Sandra is on a Windows laptop.", null],
    reason: "All three articles share the symptom, so the setup decides. Sandra said they use the Outlook program on a Windows laptop, so the article for that setup fits." }),
  searchWords({ id: "l2-m-search", message: chat("Yolanda Murphy", "Training · Wednesday 1:40 PM", [
      ["a2", "When I plug in the projector, my screen goes black and says No Signal."],
      ["a1", "My laptop is acting weird again.", { note: "\"Weird\" names no fault.", slip: "weak-search" }],
      ["a5", "Then everything gets slow and it hangs for a minute.", { note: "That says how it feels, not the words of a message or the name of a part.", slip: "weak-search" }],
      ["a3", "It is the same projector as always.", { note: "That says what is the same, not what fails.", slip: "weak-search" }],
      ["a4", "I need it for a meeting at 2.", { note: "That is a deadline, not the fault.", slip: "weak-search" }]]),
    right: "a2", reason: "The desk's records hold faults in the words of what is seen. \"Black screen, No Signal, projector\" can match an article. \"Weird\" and \"meeting at 2\" cannot." }),

  // ----- the check: five new questions, two of them calls -----
  firstReply({ id: "l2-k-open", message: email("Teresa Patel", "Lab · Thursday 9:05 AM", "Program closes", [["a1", "The program keeps closing on me. It's driving me nuts."]]),
    options: [
      ok("open", "Which program is it, and what were you doing just before it closed?", "An open question gets the program and the moment from them, in their words."),
      bad("fix", "I will reinstall the program for you so that it stops closing on you.", "fixed-first", "A reinstall is a fix before you know which program or what they were doing, and it can lose their settings."),
      bad("yn", "Does it close every single time you open the program?", "yes-no", "As a first reply it gets only a yes or a no, and you still do not know which program or what they were doing. Once you have their story, a closed question like this can confirm one detail."),
      bad("jargon", "Send me the event log for the application crash from your computer.", "jargon", "They may not know what an event log is or where to find it. Get their story first.")],
    deciding: ["a1"], reason: "\"Keeps closing\" does not say which program or when. An open question gets the program and the moment first." }),
  sayBack({ id: "l2-k-sayback", message: call("Javier Silva", "Scheduling · Incoming call · 2:05 PM", [["b1", "I opened the shared calendar and all of Friday's meetings were gone."], ["b2", "I did not delete anything. I only added a meeting for Thursday."], ["b3", "My team sees the same thing."]]),
    right: "Here is what I heard: Friday's meetings vanished from the shared calendar after you added one for Thursday, you deleted nothing, and your team sees the same. Is that correct?",
    guess: "So someone deleted Friday's meetings from the shared calendar. Is that right? I will check who it was.", guessThen: "You told them a cause you cannot know yet, and it points at a person. Their story does not say anyone deleted anything.",
    added: "So Friday's meetings vanished from the shared calendar after you added one for Thursday, you deleted nothing, and your team has seen the same since this morning. Is that right?", addedThen: "They never said since when their team has seen it. A fact they did not give, said back as if they had, may be wrong, and they may agree to it just to move on.",
    skip: "Okay, thank you for explaining. I will look at the shared calendar and let you know what I see.",
    jargon: "So there was a sync conflict on the shared calendar object after your write.",
    deciding: ["b1", "b2", "b3"], reason: "Saying the story back keeps their facts and their order: the meetings vanished after they added one, they deleted nothing, their team sees it too. A guess at the cause, or a bare \"okay\", loses that." }),
  article({ id: "l2-k-article", message: chat("Camila Nair", "Pharmacy · Thursday 10:40 AM", [["a1", "My Android phone says it is connected to the Wi-Fi, but no pages load."]]),
    title: "Knowledge base: results for \"connected to Wi-Fi, no internet\"",
    rows: [["Wi-Fi connected, no internet: iPhone", "Phone joins Wi-Fi, but pages do not load", "iPhone, current iOS"],
      ["Wi-Fi connected, no internet: Android", "Phone joins Wi-Fi, but pages do not load", "Android phone, current version"],
      ["Wi-Fi connected, no internet: Windows laptop", "Laptop joins Wi-Fi, but pages do not load", "Windows 11 laptop"]],
    right: 1, rightThen: "The symptom and the setup both match: an Android phone.",
    thens: ["Same symptom, but it is for an iPhone. Camila has an Android phone.", null, "Same symptom, but it is for a laptop, and Camila is on a phone."],
    reason: "The three articles share a symptom, so the device decides. Camila has an Android phone, so the Android article fits." }),
  exchange({ id: "l2-k-call1", context: "Melvin Alvarez, in billing, calls the help desk. You answer.", prompt: "Melvin calls. What do you say?", from: "Melvin Alvarez, Billing", detail: "Incoming call · 2:05 PM",
    turns: {
      one: { lines: [line("c1a", "Oh hi, I don't know if this is the right number. My email is slow, and the printer jammed, I think, and my password thing keeps asking me again.")], push: "They run three problems together in one breath.",
        options: [{ id: "listen", text: "Take your time. Which of those is stopping your work right now?", goto: "two" },
          { id: "cut", text: "I will take the email first, and we can come back to the printer and the password afterward.", end: "cut" },
          { id: "fix", text: "Please restart your computer and the printer, and call me back if they are still not right.", end: "fixed" }] },
      two: { lines: [line("c2a", "The printer. I have to print the invoices for the 4 o'clock mail."), line("c2b", "It stops after the first page and a light blinks. Can you just tell me what to press?")], push: "They answer, then hurry you for a quick fix.",
        options: [{ id: "say", text: "Let me say that back: you are printing invoices for the 4 o'clock mail, the printer stops after the first page, and a light blinks. Is that right?", end: "story" },
          { id: "press", text: "Unplug the printer, wait ten seconds, and plug it back in.", end: "fixed" },
          { id: "guess", text: "A blinking light means the paper is jammed. Clear the paper.", end: "guessed" }] } },
    ends: {
      story: { ok: true, then: "You let them finish, found the problem that is stopping their work, and said it back. The other two get their own tickets, so none of the three is lost." },
      cut: { ok: false, slip: "argued", then: "You chose which problem comes first without finding out from them, and pushed aside the two they mentioned. Find out which one is stopping their work, and let them tell you what matters." },
      fixed: { ok: false, slip: "fixed-first", then: "A restart or a power cycle before the story may clear the blinking light, and then you will not know what it meant." },
      guessed: { ok: false, slip: "guessed-cause", then: "A blinking light can mean many things on many printers. You gave a cause you do not know." } },
    reason: "Let them finish, find which problem is stopping their work, and say it back before you press anything. Three problems in one breath are three tickets. You start with the one stopping their work, and none is fixed before it is heard." }),
  exchange({ id: "l2-k-call2", context: "Dr. Ali Hassan, in surgery, calls the help desk. They say they are not good with computers. A certificate warning is a message from the web browser saying it cannot be sure a site is the one it claims to be. You answer.", prompt: "Dr. Hassan calls. What do you say?", from: "Dr. Ali Hassan, Surgery", detail: "Incoming call · 7:50 AM",
    turns: {
      one: { lines: [line("c1a", "I'm not good with computers. A message came up about a certificate, and I clicked something.")], push: "They are anxious and unsure what they saw.",
        options: [{ id: "read", text: "That is fine. Read me the message as close as you can, and take your time.", goto: "two" },
          { id: "jargon", text: "Was it a TLS error, or an expired cert?", end: "jargon" },
          { id: "easy", text: "Don't worry, it is nothing.", end: "guessed" }] },
      two: { lines: [line("c2a", "It said something like: the security certificate for this site is not trusted."), line("c2b", "I clicked the button that said continue anyway. Did I break something?")], push: "They give you the message, then want reassurance you cannot give yet.",
        options: [{ id: "say", text: "Thank you for telling me, I will look into it. Let me say that back: a warning said the site's security was not trusted, and you clicked continue anyway. Which site were you opening?", end: "story" },
          { id: "promise", text: "Please do not worry, it is definitely fine. Nothing bad can come from one click like that.", end: "guessed" },
          { id: "blame", text: "What were you thinking, clicking continue on a warning like that?", end: "blamed" }] } },
    ends: {
      story: { ok: true, then: "You thanked them, took their worry seriously and promised nothing you cannot know. You have their words for the warning and what they did, and the site's name tells you what to search for. This desk's rule: if it was a site they did not mean to open, the ticket also goes to the security team." },
      jargon: { ok: false, slip: "jargon", then: "They said they are not good with computers. Those words may mean nothing to them, and they were already unsure what they saw." },
      guessed: { ok: false, slip: "guessed-cause", then: "You do not know yet whether it is nothing. A certificate warning can be a real sign of a problem, so telling them it is fine is a guess." },
      blamed: { ok: false, slip: "blamed", then: "They are already worried. Telling them off does not help you learn what they saw, and they may stop telling you things." } },
    reason: "A user who says they are not technical needs plain words and time to describe what they saw. You can say back what they did without promising a result." }),

  // ----- the reserve: three new questions for the returns -----
  firstReply({ id: "l2-r-open", message: chat("Christina Moreno", "Pharmacy · Friday 9:30 AM", [["a1", "My phone won't sync."]]),
    options: [
      ok("open", "What were you trying to sync, and what happened instead?", "An open question gets what they tried and what they saw, and \"won't sync\" could be email, calendar or contacts."),
      bad("fix", "Remove your work account from the phone and add it again.", "fixed-first", "That changes the phone before you know what is wrong, and it can lose data that has not synced."),
      bad("yn", "Is the phone connected to the Wi-Fi at the moment?", "yes-no", "As a first reply they can only say yes or no, and \"won't sync\" may have nothing to do with Wi-Fi. A closed question is for confirming a detail after their story."),
      bad("argued", "Phones sync by themselves, so it should not need anything from us.", "argued", "That tells them their problem cannot exist. They have told you it does.")],
    deciding: ["a1"], reason: "\"Won't sync\" does not say what they are trying to sync. An open question gets their story first." }),
  article({ id: "l2-r-article", message: email("Jelena Okoye", "Imaging · Friday 11:00 AM", "Scanner", [["a1", "The Model X scanner on floor 2 will not scan to email. It says cannot connect to server."]]),
    title: "Knowledge base: results for \"scan to email cannot connect to server\"",
    rows: [["Scan to email: cannot connect to server, Model X", "Scanner shows cannot connect to server", "Model X scanner"],
      ["Scan to email: cannot connect to server, Model Y", "Scanner shows cannot connect to server", "Model Y scanner"],
      ["Scan to folder: cannot reach shared folder", "Scanner shows cannot reach the folder", "Model X scanner"]],
    right: 0, rightThen: "The symptom and the model both match.",
    thens: [null, "Same symptom, but it is for a Model Y scanner, and Jelena has a Model X.", "Same model, but a different fault: folder, not email."],
    reason: "Both the symptom and the model must match. Jelena's Model X says cannot connect to server when they scan to email." }),
  exchange({ id: "l2-r-call", context: "Pete Larsen, in purchasing, calls the help desk for the second time today. You answer.", prompt: "Pete calls. What do you say?", from: "Pete Larsen, Purchasing", detail: "Incoming call · 3:40 PM",
    turns: {
      one: { lines: [line("c1a", "This is the second time I am calling. Your last fix did not work."), line("c1b", "Do not make me explain it all again.")], push: "They are annoyed and blame your fix.",
        options: [{ id: "listen", text: "I am sorry it is still happening. What did you see after the last fix?", goto: "two" },
          { id: "defend", text: "My notes say the last fix worked.", end: "argued" },
          { id: "again", text: "I will try the same fix again.", end: "fixed" }] },
      two: { lines: [line("c2a", "The shared drive still will not open. It has the red x again. It worked for an hour after your fix."), line("c2b", "I am losing the whole afternoon.")], push: "They are losing their afternoon and want action now.",
        options: [{ id: "say", text: "Let me say that back: the fix worked for an hour, then the drive showed the red x again. Is that right?", end: "story" },
          { id: "redo", text: "I will redo the fix right away.", end: "fixed" },
          { id: "pass", text: "I will pass it on. Someone will call you.", end: "skipped" }] } },
    ends: {
      story: { ok: true, then: "You owned the miss without arguing, and got the new fact: the fix lasted an hour. That is a pattern to search for and to hand on." },
      argued: { ok: false, slip: "argued", then: "They just told you the fix did not hold. Pointing at your notes brushes that off." },
      fixed: { ok: false, slip: "fixed-first", then: "Repeating a fix that already failed, without hearing what happened after it, is the same guess again." },
      skipped: { ok: false, slip: "no-sayback", then: "They gave you a new fact and you passed it on without saying it back, so a missed detail stays hidden." } },
    reason: "A user who says your fix failed has given you evidence. Take it without arguing, find out what happened after, and say it back." })
]);
})();
