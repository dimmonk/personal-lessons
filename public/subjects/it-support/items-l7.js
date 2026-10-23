// IT Help Desk, lesson 7 "Finishing: confirm, hand on, write it up" (moves 7 to 9): the worked ticket and the questions of the three groups.
// Sources: IT11 (ITIL 4: closure needs the user's confirmation of service restoration; a problem is the cause behind repeating incidents, a desk's rule decides the count), IT13 (a hand-on
// carries what was tried so the next person does not start over), IT14 (KCS: the note holds the user's words, the environment, the resolution
// and the cause, in complete thoughts), IT15 and the A+ Core 2 objective 4.1 (ticket content: user and device information, description,
// progress notes, resolution), objective 4.7 (set and meet expectations, offer options, follow up). All people, tickets and desks are invented.
(() => {
  const F = "finish";
  const S = (id, text, extra) => ({ id, text, ...extra });
  const mail = (from, detail, subject, lines) => ({ kind: "message", form: "email", from, detail, subject, lines });
  const chat = (from, detail, lines) => ({ kind: "message", form: "chat", from, detail, lines });
  const note = (from, detail, lines, id) => ({ kind: "message", form: "email", from: "Desk ticket", detail, subject: from, lines, ...(id ? { id } : {}) });
  const quietRule = { kind: "document", form: "table", title: "This desk’s rule", head: ["Rule"], rows: [{ id: "q1", cells: ["After a fix, follow up on day 1, day 3 and day 5, a different way each time (chat, email or phone). The ticket stays open until the user says it works. With no answer after day 5, write “no answer” in the note and tell the desk lead; the ticket stays open."] }] };
  const table = (title, head, rows, notes) => ({ kind: "document", form: "table", title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })), ...(notes ? { notes } : {}) });
  const prose = text => ({ kind: "prose", text });
  const ok = (id, text, then) => ({ id, text, ok: true, ...(then ? { then } : {}) });
  const no = (id, text, slip, then) => ({ id, text, ...(slip ? { slip } : {}), then });
  // one question with one choice
  const pick = ({ id, blocks, prompt, opts, reason, deciding, need }) => ({ id, strand: F, facets: {}, blocks,
    asks: [{ id: "pick", kind: "choose", prompt, shuffle: true, options: opts }], deciding: deciding || [], reason, ...(need ? { need } : {}) });
  // Thabo's ticket, the worked example (a first guess that the second test rules out)
  const worked = {
    id: "l7-w-drive", strand: F, facets: {},
    blocks: [
      prose("A shared drive is a folder on a company server that shows up on your computer as a letter, here S:."),
      mail("Thabo Nair, Accounts", "Email · 9:02 AM", "S: drive has a red X", [
        S("a1", "Since this morning the S: drive on my laptop has a red X and I cannot open the month-end folder."),
        S("a2", "I changed my password on Monday."), S("a3", "Closing is due at 3 and I need that folder.")]),
      table("Your log for Thabo’s ticket", ["Time", "What you did", "What it showed"], [
        ["r1", "9:05", "Restarted their laptop", "Red X still there"],
        ["r2", "9:10", "Had Margaret, at the next desk, open S: on their laptop", "It opens, so the file server is up"],
        ["r3", "9:15", "Disconnected S: on Thabo’s laptop and connected it again", "S: opens and the month-end folder is there"]])],
    steps: [
      { id: "guess", does: "Start from your first guess.", working: "Your first guess was that the file server was down, since the drive lives on it. Margaret opened the same drive on their laptop, so the server is up. That test ruled the guess out: the fault is on Thabo’s laptop, so you connected the drive again there." },
      { id: "confirm", does: "Check that it works for them.", working: "The drive opened on your screen, but that is your test. Thabo needs the month-end folder. Have them open it themself and tell you what they see. They say it opens. Next you write the note, and then the ticket closes.", ask: "confirm" },
      { id: "write", does: "Write what the next tech needs.", working: "Their words: “red X on S:, cannot open the month-end folder.” Setup: Thabo’s Windows 11 laptop, office Wi-Fi, signed in as pnair. Fixed by: disconnecting S: and connecting it again. Cause: not known; it began after their password change on Monday, so the drive may have kept the old sign-in. Now the ticket closes." }],
    asks: [{ id: "confirm", kind: "choose", prompt: "The drive opens on your screen. What do you do before closing?", shuffle: true, options: [
      ok("o1", "Have Thabo open the folder themself, then write the note and close once they say it opens", "They opened the folder and wrote “yes, it is there.” You write the note, then the ticket closes."),
      no("o2", "Close the ticket, since S: opened on your screen and the server is up", "closed-early", "Thabo has not tried it. If their folder still fails, they find out at 2:55, with the ticket closed."),
      no("o3", "Tell them what you changed, close the ticket, and tell them to write back if the red X returns", "closed-early", "They were never asked to try. A ticket closed on your test makes them start a new one.")] }],
    deciding: ["a3", "r3"],
    reason: "The drive opening on your screen is your test, not Thabo’s work. The ticket closes when they say the month-end folder opens for them, after you write the note that gives the next tech their words, their setup, the fix, and the cause as far as you know it." };

  // ----- the first group: the deciding words are marked -----
  const group1 = [
    pick({ id: "l7-p-printer", blocks: [prose("You fixed the shared printer by adding it again. A test page printed from the printer’s own screen."),
      chat("Harriet Okafor", "Chat · 10:40 AM", [S("b1", "I am in meetings until 3, but the printer was dead at 9."), S("b2", "Did you fix it?")])],
      prompt: "What do you do?", deciding: ["b2"],
      opts: [ok("o1", "Tell them what you changed, have them print one page from their own laptop after their meetings, and keep the ticket open until they say it printed", "At 3:10 they printed a page and wrote back. The ticket closes."),
        no("o2", "Close the ticket, since the test page printed, and tell them to write back after their meetings if their own laptop still cannot print to it", "closed-early", "The test page came from the printer, not from Harriet’s laptop. If their laptop still cannot print, they learn it with the ticket closed."),
        no("o3", "Reply that the printer is fixed and they can try it from their laptop after their meetings, then leave the ticket open and wait for them to write", "no-next", "They do not know what you changed, what to try, or how to reach you if it fails. “Fixed” leaves their guessing.")],
      reason: "Your test page came from the printer, not from Harriet’s laptop, and their laptop is where it broke. Tell them what you changed and what to try, and close when they say it printed." }),
    pick({ id: "l7-p-wait", blocks: [prose("Meredith’s docking station (the box that connects their laptop to two monitors) is broken. The new one arrives Thursday. The desk has one loaner dock free."),
      chat("Meredith Patel", "Chat · 2:15 PM", [S("c1", "So do I just wait?"), S("c2", "I need both screens for the budget review on Wednesday.")])],
      prompt: "What do you tell Meredith?", deciding: ["c2"],
      opts: [no("o2", "The new one arrives Thursday; close the ticket now since the part is ordered, and they can write back on Thursday if it does not work", "closed-early", "Nothing works for them yet, and their review is a day before the part comes."),
        ok("o1", "The new one arrives Thursday; until then a loaner dock if there is one, or the laptop screen alone, and the ticket stays open until the new one works", "Meredith takes the free loaner for Wednesday. On Thursday, after they say both screens work, you write the note and close the ticket."),
        no("o3", "The new one arrives Thursday; you will write them as soon as it is in, and until then there is nothing more you can do about their review", "no-next", "They still have no way to work on Wednesday.")],
      reason: "The real fix cannot happen until Thursday, but their work is on Wednesday. Say what happens next and when, and give them a workaround (a way to keep working until the fix). The ticket stays open until the new dock works for them." }),
    pick({ id: "l7-p-limit", blocks: [prose("Lena Ortiz works from home and cannot reach the company through the VPN (the private connection from their laptop to the company’s network). You started at 2:00 and it is now 2:20."),
      table("Your log, 20 minutes in", ["Time", "What you did", "What it showed"], [
        ["r1", "2:00", "Restarted their laptop", "Same message: it cannot reach the server"],
        ["r2", "2:08", "Reinstalled the VPN app", "Same message"],
        ["r3", "2:15", "Tried their phone’s hotspot (its internet connection, shared with the laptop) instead of their home Wi-Fi", "Same message, so their home network is not the cause"]]),
      { kind: "document", form: "table", title: "This desk’s rule", head: ["Rule"], rows: [{ id: "q1", cells: ["Hand on any VPN problem to the network team after 20 minutes on one ticket."] }] }],
      prompt: "What do you do now?", deciding: ["q1"],
      opts: [no("o2", "Try a fourth fix, such as reinstalling the Wi-Fi driver (the software that runs their Wi-Fi card), since you still have ideas", "kept-guessing", "The desk’s rule says to hand on at 20 minutes. More guesses cost Lena more hours."),
        no("o3", "Tell Lena it is a network problem, give them the network team’s number, and have them call the team themself", "empty-handon", "Lena has to explain everything again, and the team gets none of your tests."),
        ok("o1", "Hand it to the network team with their words, their laptop, the three tries and what each showed, and tell Lena who has it now", "The network team starts from your third test and does not repeat the first two.")],
      reason: "The desk’s rule sends VPN problems to the network team after 20 minutes, and the 20 minutes are up. You hand it on with everything you found, and tell Lena who has it." }),
    pick({ id: "l7-p-pair", blocks: [note("Hand-on note A", "To the network team", [S("m1", "Lena Ortiz says: “It says it cannot reach the server.”"),
        S("m2", "Their work laptop, Windows 11, at home on their own Wi-Fi."),
        S("m3", "Tried: restarted the laptop; reinstalled the VPN app. Same message both times."),
        S("m4", "Same message on their phone’s hotspot, so their home network is not the cause.")]),
      note("Hand-on note B", "To the network team", [S("n1", "Lena can’t get on the VPN from home. I restarted their laptop, reinstalled the VPN app and tried their hotspot. Nothing worked. Please look into it as soon as you can.")])],
      prompt: "Which one can the network team use without calling Lena again?", deciding: ["m1", "m2", "m3", "m4"],
      opts: [ok("oA", "Note A", "The team begins with the hotspot test and skips what you already did."),
        no("oB", "Note B", "empty-handon", "It lists what was tried but not their words, their device or what each test showed. The team has to go back to Lena.")],
      reason: "Note A carries their words, their device, what you tried and what each test showed. Note B says what was done, but not what happened after each try, so the next person cannot use it." })
  ];

  // ----- the second group: no help -----
  const group2 = [
    pick({ id: "l7-q-field", blocks: [note("Ticket note", "Excel freezes", [S("n1", "Their words: “Excel freezes whenever I open the budget file.”"),
      S("n2", "Fixed by: repairing Microsoft Office from the Settings app, then restarting."), S("n3", "Cause: likely a damaged Office file after an update; not proved.")], "note")],
      prompt: "A ticket note should hold four things: their words, the setup, what fixed it, and what caused it. Which one is missing here?",
      opts: [no("o3", "What fixed it: what you did that made it work", "", "The second line has it."), ok("o1", "The setup: which computer and what it runs on", "Without the setup, the next tech cannot tell whether this fits their user’s laptop."),
        no("o2", "Their words: what the user saw", "", "The first line has them, in quotation marks."), no("o4", "What caused it: why it happened", "", "The third line has it.")],
      reason: "The note has the user’s words, the fix and the cause, but not which computer, which version of Windows or which network. The setup is what lets the next tech tell whether the same fix fits." }),
    pick({ id: "l7-q-pick", blocks: [note("Note A", "Wi-Fi in meeting room 3", [S("a1", "Their words: “The Wi-Fi keeps dropping me in meeting room 3.”"),
        S("a2", "Setup: Dell laptop, Windows 11, office Wi-Fi, second floor."), S("a3", "Fixed by: forgetting the office Wi-Fi network and joining it again."),
        S("a4", "Cause: not known. It began after Tuesday’s update.")]),
      note("Note B", "Wi-Fi in meeting room 3", [S("b1", "Wi-Fi problem fixed after an hour with Jun."),
        S("b2", "Looked at the router, checked the cable, then the driver (the software that runs a part), and in the end it worked again. Jun was happy."), S("b3", "Closed.")])],
      prompt: "The same complaint comes in next month. Which note will the next tech use?",
      opts: [no("oB", "Note B", "vague-note", "It is longer and tells the story of the hour, but not what the user saw, which computer it was, or what fixed it."),
        ok("oA", "Note A", "The next tech searches “dropping Wi-Fi”, finds this, sees the setup matches, and tries the same fix first.")],
      reason: "Note A has the four things: the user’s words, the setup, what fixed it, and what caused it, as far as known. Note B tells the story of the hour but not what to try next time.", deciding: ["a1", "a2", "a3", "a4"] }),
    { id: "l7-q-tap", strand: F, facets: {},
      blocks: [note("Ticket note", "Teams shows offline", [S("t1", "Their words: “Teams shows me offline all morning but my email works.”"),
        S("t2", "Setup: MacBook Air, home Wi-Fi, the company Teams app.", { note: "That is the setup, not the fix." }),
        S("t3", "Tried: restarted the laptop. No change.", { note: "That was tried, and it did not fix it." }),
        S("t4", "Tried: Teams on their phone works, so their account is fine.", { note: "That test ruled out the account. It did not fix anything." }),
        S("t5", "Tried: cleared the app’s saved temporary files (its cache). Still offline.", { note: "That was a change, and it did not fix it." }),
        S("t6", "Signed out of Teams and back in. It shows online."),
        S("t7", "Cause: not known.")], "note")],
      asks: [{ id: "tap", kind: "tap", prompt: "Tap the line that tells the next tech what fixed it.", right: ["t6"] }], deciding: ["t6"],
      reason: "The fix is the one change that changed the symptom: signing out and back in. The restart and the cleared files changed nothing, and the phone test only showed the account was fine." },
    pick({ id: "l7-q-problem", blocks: [table("Printer tickets this week", ["Day", "Who", "Ticket", "What fixed it"], [
      ["r1", "Mon", "Douglas", "Third floor printer offline", "Restarted the printer"], ["r2", "Tue", "Ronan", "Third floor printer offline", "Restarted the printer"],
      ["r3", "Wed", "Chloe", "Third floor printer offline", "Restarted the printer"], ["r4", "Thu", "Leah (yours)", "Third floor printer offline", "Not yet"]]),
      table("This desk’s rule", ["Rule"], [["q1", "The same fault on three tickets in a week is raised as a problem."]])],
      prompt: "You restart the printer for Leah and it prints. What do you do?", deciding: ["r1", "r2", "r3", "q1"],
      opts: [no("o2", "Close Leah’s ticket after they confirm, and write in the note that restarting the printer fixed it, as it did last time", "dropped-pattern", "The note is right, but nobody sees that four people lost time to one printer. The cause is never looked for."),
        no("o3", "Tell Leah to restart the printer themself whenever it goes offline in the future, and close their ticket once they confirm it works again", "dropped-pattern", "That hides the pattern. The desk never learns that four people lost time to one printer."),
        ok("o1", "Close Leah’s ticket after they confirm, and hand on the pattern as a problem: four tickets, one printer, the same fix each time", "The desk can now look for why the printer keeps going offline instead of restarting it weekly.")],
      reason: "The same fault on the same printer four times in a week meets the desk’s rule for a problem: something keeps happening. Fix Leah’s, then hand on the pattern with the tickets as evidence." }),
    { id: "l7-q-order", strand: F, facets: {}, blocks: [prose("You have just fixed a user’s laptop. Put the end of the ticket in order.")],
      asks: [{ id: "order", kind: "order", prompt: "Tap the steps in the order you do them.", steps: [
        { id: "tell", text: "Tell the user what you did, what to try and how to reach you" }, { id: "try", text: "The user tries it and says it works" },
        { id: "note", text: "Write the note: their words, the setup, what fixed it, what caused it" }, { id: "close", text: "Close the ticket" }],
        right: ["tell", "try", "note", "close"], then: "The user’s yes comes before the note and the note before the close, so the note says what really fixed it and the ticket is not closed on your test." }],
      deciding: [], reason: "The ticket closes last, after the user says it works. The note comes just before it, once you know what fixed it." }
  ];

  // ----- the third group: no help, new tickets -----
  const group3 = [
    pick({ id: "l7-r-quiet", blocks: [prose("You fixed the calendar on Kendall Cole’s phone on Monday. On Tuesday, day 1, you emailed them what you changed and how to check it. It is now Thursday, day 3. They have not answered."), quietRule],
      prompt: "What do you do today?", deciding: ["q1"],
      opts: [no("o2", "Close it as “fixed”: they have had two days, and they can write back if the calendar fails", "closed-early", "They have not said it works, and the desk’s rule does not allow “fixed” without a yes."),
        no("o4", "Write “no answer” in the note and tell the desk lead, since they have not replied in two days", "no-next", "The rule has you do that only after day 5. Today is day 3, and the follow-up comes first."),
        no("o3", "Leave the ticket open with a note that it is fixed, and wait for them to write back", "no-next", "The rule calls for a follow-up today, and a note saying “fixed” is not them yes."),
        ok("o1", "Write them on chat this time: what you changed, and how to check the calendar", "When they answer, they can check in a minute, and the ticket closes on them yes. If they stay silent, day 5 is next.")],
      reason: "Silence is not a yes. The desk’s rule says to follow up on day 3 by another way, and the ticket stays open until they say it works. If day 5 passes in silence, the note says so and the desk lead is told." }),
    pick({ id: "l7-r-three", blocks: [note("Hand-on A", "To the network team", [S("a1", "Lena Ortiz cannot reach the VPN from home. I restarted their laptop and reinstalled the VPN app. It did not work. They say it started after they changed their password. Please look.")]),
      note("Hand-on B", "To the network team", [S("b1", "Lena Ortiz says: “It says it cannot reach the server.” Their work laptop, Windows 11, at home on their own Wi-Fi. They say it started after they changed their password."),
        S("b2", "Restarted and reinstalled the VPN app: same message. Same message on their phone’s hotspot, so their home network is not the cause.")]),
      note("Hand-on C", "To the network team", [S("c1", "Lena Ortiz says: “It says it cannot reach the server.” Their work laptop, Windows 11, at home on their own Wi-Fi. They have been without the VPN since 2:00 and have a deadline.")])],
      prompt: "Which one can the network team use without going back to Lena?", deciding: ["b1", "b2"],
      opts: [no("oA", "Hand-on A", "empty-handon", "It says what you did, but not their words, their device or what each try showed. The team may repeat the restart and the reinstall."),
        ok("oB", "Hand-on B", "It has their words, their device, what you tried and what each test showed."),
        no("oC", "Hand-on C", "empty-handon", "It has their words and their device but nothing you tried. The team repeats the restart and the reinstall.")],
      reason: "Only B has everything the next person needs: the words, the device, what was tried and what each test showed. A and C each leave out half of it." }),
    pick({ id: "l7-r-tell", blocks: [prose("You handed Lena’s ticket to the network team. The desk’s table says that team answers within 4 working hours. It is 2:30 PM.")],
      prompt: "What do you tell Lena?",
      opts: [no("o2", "The network team has the ticket with everything you tried, and they will get back to you soon, so there is nothing more for them to do", "no-next", "“Soon” gives them nothing to plan on, and they do not know whether to explain it again."),
        no("o3", "It is out of your hands now that the network team has the ticket, and they can call them themself if they want news or have anything to add", "no-next", "They are left to chase it themself, and do not know what was passed on."),
        ok("o1", "The network team has the ticket with everything you tried, they answer within 4 working hours, and you will write them at 5:00 with where it stands", "They know who has it, how long to wait, and they do not have to explain it again.")],
      reason: "Handing on does not end your part with the user. Tell them who has it now, what has been passed on and when they will hear." }),
    pick({ id: "l7-r-cause", blocks: [prose("Kendall’s calendar stopped syncing on their phone the day after they changed their company password. You had them sign out of the calendar on the phone and back in, and it syncs again. You are writing the “caused by” line.")],
      prompt: "Which line goes in the note?",
      opts: [no("o2", "Caused by: the calendar app on the phone was out of date, so it stopped syncing with their account", "cause-as-fact", "Nothing you saw shows an old app. It sends the next tech to update the app first."),
        no("o3", "Caused by: Kendall changed their password and did not sign in again on the phone afterwards, which is their mistake", "blamed", "It puts the blame on Kendall, and it states a guess as a fact."),
        ok("o1", "Cause: not confirmed; it began the day after their password change, so the phone probably kept the old password", "The next tech sees what to check first when a sync stops after a password change.")],
      reason: "A cause line says what the next tech can check, and says so when it is a likely cause rather than a proved one." }),
    pick({ id: "l7-r-words", blocks: [chat("Sanjay Reyes", "Chat · 11:20 AM", [S("o1", "It is just slow, you know, since the update, mostly when I open the big spreadsheet from the sales folder. Your update ruined my laptop.")]), prose("This course leaves insults out of the note and keeps the facts.")],
      prompt: "Which line goes under “their words” in the note?",
      opts: [no("o2", "“It has been slow for ages, you know, and it is driving me up the wall at work.”", "vague-note", "It is their wording, but it drops the clues: since the update, and only that spreadsheet."),
        no("o3", "Performance problem with a large spreadsheet file after the latest update", "vague-note", "That is your label. A search for their words would never find it."),
        ok("o1", "“Slow since the update, mostly when I open the big spreadsheet from the sales folder.”", "It keeps the details a label would drop, and leaves out the insult, which is not a fact.")],
      reason: "The first field is what the user said, shortened but not relabelled. Leave out the insult and keep details such as “since the update”, which a later search will match.", deciding: ["o1"] })
  ];

  // ----- the check: six new tickets, no help -----
  const check = [
    pick({ id: "l7-k-sam", blocks: [prose("Gunnar Idowu said their email stopped receiving new mail. You repaired their mail profile (the saved settings that connect their mail program to their account), and new mail arrived on your test."),
      chat("Gunnar Idowu", "Chat · 4:50 PM", [S("s1", "I am leaving in ten minutes."), S("s2", "Is it done?")])],
      prompt: "What do you do?",
      opts: [no("o1", "Tell them what you changed and close the ticket now, since new mail arrived on your test and they are about to leave", "closed-early", "Gunnar has not seen their own mail arrive."),
        no("o3", "Tell them it is done and tell them to write back tomorrow if new mail is still missing", "no-next", "They do not know what changed or how to reach you. If it fails, they find out tomorrow, with the ticket closed."),
        ok("o2", "Tell them what you changed, have them check for new mail before they leave, and close once they say they see it", "They see the new mail at 4:55 and the ticket closes.")],
      reason: "Their mail arriving on your test is not their mail arriving. They have ten minutes: use them to have them check, then close." }),
    pick({ id: "l7-k-pick", blocks: [note("Note A", "Word closes on its own", [S("a1", "Their words: Word instability when saving large documents."),
        S("a2", "Setup: HP laptop."), S("a3", "Fixed by: moved the file."), S("a4", "Cause: the shared drive is slow.")]),
      note("Note B", "Word closes on its own", [S("b1", "Their words: “Word closes by itself when I save a long file.”"), S("b2", "Setup: HP laptop, Windows 11, Office 365, files on the S: drive."),
        S("b3", "Fixed by: moving the file to the desktop, saving there, moving it back."), S("b4", "Cause: not known; the shared drive may be slow.")])],
      prompt: "Which note will help the next tech who gets the same complaint?", deciding: ["b1", "b2", "b3", "b4"],
      opts: [no("oA", "Note A", "cause-as-fact", "It relabels what the user said, leaves out the system and the program version, says only “moved the file”, and states a guess about the drive as the cause."),
        ok("oB", "Note B", "It has the words to search for, the setup, the fix and a hedged cause.")],
      reason: "Note B has the four things: the user’s own words, the full setup, the exact fix and a hedged cause. Note A has the same four headings but relabels their words and states a guess as the cause." }),
    pick({ id: "l7-k-hand", blocks: [prose("Pedro Alves can print from Excel but not from Word. You restarted the print service (the part of Windows that sends pages to the printer), then added the printer again; Word still fails and Excel still works."),
      table("This desk’s rule", ["Rule"], [["q1", "Hand on any Office problem to the software team after 20 minutes on one ticket."]]),
      prose("Your 20 minutes are up."),
      note("Draft X", "To the software team", [S("x1", "Pedro Alves can’t print from Word. I restarted the print service and added the printer again, and it did not help. Please look.")]),
      note("Draft Y", "To the software team", [S("y1", "Pedro Alves says: “Word does nothing when I press print, but Excel prints fine.” Windows 11, Office 365, the second floor printer."),
        S("y2", "Restarted the print service: no change. Added the printer again: no change. Excel still prints, so the printer and the connection to it work.")]),
      note("Draft Z", "To the software team", [S("z1", "Pedro Alves says: “Word does nothing when I press print, but Excel prints fine.” Windows 11, Office 365, the second floor printer. They need it printed today.")])],
      prompt: "Which draft do you send?", deciding: ["y1", "y2"],
      opts: [no("oX", "Draft X", "empty-handon", "It has your tries but not what they saw, their setup, or the Excel test that points at Word."),
        no("oZ", "Draft Z", "empty-handon", "It has their words and their setup, but nothing you tried, so the team repeats it."),
        ok("oY", "Draft Y", "The software team starts from the Excel test: the printer works, so the fault is in Word.")],
      reason: "Draft Y has their words, the setup, what you tried and what each test showed. The Excel result is the most useful line, because it tells the software team where to look." }),
    { id: "l7-k-none", strand: F, facets: {},
      blocks: [note("Hand-on note", "To the network team", [S("h1", "Russell Moreau says: “The VPN window just spins and spins.”"),
        S("h2", "Their work laptop, Windows 11, at home on their own Wi-Fi."), S("h3", "Tried: restarted the laptop and reinstalled the VPN app.", { note: "That says what was tried, not what it showed.", slip: "empty-handon" }),
        S("h4", "Handed on at 3:10 because the desk’s 20 minutes were up.", { note: "That says when and why, not what the tests showed." })], "note")],
      asks: [{ id: "tap", kind: "tap", prompt: "Tap the line that says what your tests showed. If the note has none, tap Not given.", right: "none", none: "Not given" }], deciding: [],
      reason: "The note says what was tried and why it was handed on, but never what happened after each try. The team cannot tell whether the restart changed anything, so they may repeat it." },
    pick({ id: "l7-k-problem", blocks: [table("Meeting room tickets this month", ["Date", "Who", "What they said", "What fixed it"], [
      ["r1", "3rd", "Jun", "Wi-Fi drops in room 3", "Joined the Wi-Fi again"], ["r2", "10th", "Tucker", "Wi-Fi drops in room 3", "Joined the Wi-Fi again"],
      ["r3", "17th", "Kevin (yours)", "Wi-Fi drops in room 3", "Not yet"]]),
      table("This desk’s rule", ["Rule"], [["q1", "The same fault on three tickets in a month is raised as a problem."]])],
      prompt: "You fix Kevin’s the same way and they say it works. What else do you do?", deciding: ["r1", "r2", "q1"],
      opts: [no("o1", "Close their ticket after they confirm and note that joining the Wi-Fi again fixed it, the same as for Jun and Tucker", "dropped-pattern", "The note is right, but three people in one room is a pattern, and no one is looking for the cause."),
        ok("o2", "Close their ticket after they confirm, and hand on the pattern with all three tickets as a problem about room 3", "Someone can now look at room 3 itself, instead of the fourth user."),
        no("o3", "Tell Kevin to join the Wi-Fi again whenever it drops in room 3, and close their ticket once they confirm it works", "dropped-pattern", "That fixes Kevin’s next time but hides the pattern from the desk.")],
      reason: "The same fault in the same place three times meets the desk’s rule for a problem, not three separate incidents. Fix Kevin’s, then hand on the pattern with the tickets as evidence." }),
    pick({ id: "l7-k-quiet", blocks: [prose("You fixed the scan-to-email on Eunice Adeyemi’s office printer on Monday of last week. You emailed them on day 1, wrote on chat on day 3 and left a voicemail on day 5. It is day 6. They have not answered."), quietRule],
      prompt: "What do you do today?", deciding: ["q1"],
      opts: [no("o1", "Close it as “fixed”: they had three chances to say it failed, and nothing came back", "closed-early", "Nobody has said it works. “Fixed” needs them yes."),
        ok("o2", "Note “no answer” with the three follow-ups, tell the desk lead, and leave the ticket open", "The schedule is used up. The note shows what was done and that they never confirmed, and the desk lead knows."),
        no("o3", "Send a fourth message and keep going every day until they answer, however long that takes, since silence may only mean they are busy", "", "The desk’s rule ends the follow-ups at day 5 and sends the ticket to the desk lead."),
        no("o4", "Close it as “no answer, not confirmed”, since the follow-ups are used up", "closed-early", "No ticket closes without the user’s yes, even with a different label.")],
      reason: "Silence is never a yes, so the ticket is not closed, under any label. After day 5 with no answer, the desk’s rule is to write “no answer” in the note and tell the desk lead." })
  ];

  // ----- reserve: kept for the review -----
  const reserve = [
    pick({ id: "l7-s-confirm", blocks: [prose("Jess Ward called to say they are locked out of their account. They answered the desk’s identity questions (the ones it puts to be sure the caller is who they say), and you reset their password. The sign-in page took the new one on your test."), chat("Jess Ward", "Chat · 8:30 AM", [S("j1", "Thanks, I will try it when I am at my desk.")])],
      prompt: "What do you do with the ticket?",
      opts: [no("o2", "Close it, since they said thanks and the identity check passed earlier", "closed-early", "Thanks is not “it works.” They have not tried it."),
        no("o3", "Close it, since the new password worked when you tested it yourself", "closed-early", "Your test is not Jess signing in on their own computer."),
        ok("o1", "Keep it open until they sign in themself and tell you it worked", "They sign in at 9:15 and write back. The ticket closes.")],
      reason: "Only Jess can show it works for them, after the desk has checked it is them. “Thanks” before they try it is not a confirmation." }),
    pick({ id: "l7-s-pick", blocks: [note("Note A", "Phone will not charge", [S("a1", "Charging problem solved after a long call."), S("a2", "The user was very patient and we tried the charger, two cables and a restart before it worked."), S("a3", "Closed.")]),
      note("Note B", "Phone will not charge", [S("b1", "Their words: “My phone only charges if I hold the cable at an angle.”"), S("b2", "Setup: company phone, USB-C cable from the supply cabinet."),
        S("b3", "Fixed by: new cable from the cabinet."), S("b4", "Cause: worn cable end; a lint-clogged port is the other thing to check.")])],
      prompt: "Which note helps the next tech?", deciding: ["b1", "b2", "b3", "b4"],
      opts: [ok("oB", "Note B", "It has the words, the setup, the fix, and a likely cause with the next thing to check."),
        no("oA", "Note A", "vague-note", "It is polite and says what was tried, but nothing the next tech can use.")],
      reason: "Note B holds the four things. Note A says that time passed and the user was patient." }),
    pick({ id: "l7-s-field", blocks: [note("Ticket note", "Cannot open a PDF", [S("n1", "Their words: “My PDFs open as a blank page.”"), S("n2", "Setup: Dell laptop, Windows 11, the PDF reader from the software list."),
        S("n3", "Caused by: a damaged settings file in the reader.")])],
      prompt: "A note holds their words, the setup, what fixed it and what caused it. Which one is missing?",
      opts: [no("o2", "Their words: what the user saw", "", "The first line has them."), no("o3", "The setup: the computer and what it runs", "", "The second line has it."),
        ok("o1", "What fixed it: what made it work again", "The note says what was wrong but not what you did about it."), no("o4", "What caused it: why it happened", "", "The third line has it.")],
      reason: "The cause is written, but not the fix, which is the line the next tech needs first." }),
    pick({ id: "l7-s-hand", blocks: [prose("Iain Wu’s laptop will not start up after an update. You tried a restart, a forced shutdown, and unplugging the charger and trying again. It shows the same black screen after each. The desk’s rule sends start-up problems to the desktop team after 20 minutes on one ticket, and the 20 minutes are up."),
      note("Hand-on P", "To the desktop team", [S("p1", "Iain’s laptop won’t start after an update. I tried a restart, a forced shutdown and unplugging the charger. Please look as soon as you can.")]),
      note("Hand-on Q", "To the desktop team", [S("q1", "Iain Wu says: “It showed an update, then went black and stays black.” Their work laptop, Windows 11, in the office."),
        S("q2", "Restarted, forced shutdown, unplugged the charger: the same black screen after each. The power light is on after each.")])],
      prompt: "Which one do you send?", deciding: ["q1", "q2"],
      opts: [no("oP", "Hand-on P", "empty-handon", "It lists the tries but not their words, their setup or what each showed, so the team repeats them."), ok("oQ", "Hand-on Q", "It has their words, the device, the three tries and what each showed.")],
      reason: "Q carries their words, their device, what you tried, and what each try showed. P leaves the team to repeat all three tries." })
  ];

  FC.items("it-support", [worked, ...group1, ...group2, ...group3, ...check, ...reserve]);
})();
