// IT Help Desk, lesson 8: When the user is upset (part upset). Move 2 (their words first) under pressure.
// Findings: IT17 and the A+ Core 2 objective 4.7 (do not argue or be defensive, do not dismiss, do not judge; restate the issue and put open
// questions; set and meet expectations, communicate status, follow up; plain language; confirming who is asking before a reset or unlock is the desk’s own rule against impersonation; A+ Core 2 2.5 lists impersonation as an attack and gives no procedure for the check), IT18 (understand the user first), IT19 (agent and caller
// work out the problem together), IT20 (apologizing and explaining in service-recovery studies of shops and banks; not tested on help desks, and
// the lesson says so). Rulings 6 and 8 of rulings-l1-8.md. One worked ticket; a first group with the deciding words marked; a second with none; a third that mixes in lesson 7;
// a check of five new calls and chats, no help.
FC.lesson("it-support", {
  id: "l8", part: "upset", title: "When the user is upset", rev: 2, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: do not argue, dismiss or judge; say what happens next and when; explain plainly; follow up at the time you gave." }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    "Rui writes: this is the third time this week their laptop has locked them out, nobody there knows what they are doing, and they have a client call at 2. Almost anything you could say first makes it worse: the earlier tickets were closed because they did not answer, or it is probably nothing.",
    "You learn here what to say in the first minute with an upset user: show you heard them, say what happens next and when, and keep the time you gave, without promising a result you do not control."
  ],
  flow: [
    { title: "Three things not to do",
      show: [
        { kind: "prose", text: [
          "A user who cannot do their work is often upset. Three replies feel natural and make it worse:",
          "Arguing or defending the desk (“the earlier tickets were closed because you did not reply”). Dismissing the problem (“it is probably nothing”). Judging the user (“you should have restarted when we told you”).",
          "The A+ list for dealing with difficult users names the same three: do not argue or be defensive, do not dismiss their problem, and do not be judgmental."] },
        { kind: "prose", tone: "wrong", text: [
          "“I know why it happened, so I will explain whose fault it was.”",
          "Telling them whose fault it was is arguing, even when you are right. First show you heard them, then say what you will do and when."] }
      ] },
    { title: "What to do instead",
      show: [
        { kind: "prose", text: [
          "Let them finish, and do not interrupt. Then say back what they told you, including what it has stopped them doing (“three lockouts this week, and a call at 2”), and say you are sorry for the trouble. “I understand” alone is not saying it back: it repeats nothing they said. Being sorry for what happened to them is not the same as saying the desk was at fault.",
          "Put an open question if you need more, one that needs more than yes or no (“tell me what you saw when it dropped”). When you do not yet know enough to act, the question can be your whole first move. Otherwise say what happens next and when, in words they know: your next step, and the time you will write or call.",
          "Before you reset a password or unlock an account for a caller or a chat, confirm that they are who they say, with the desk’s own check, which uses something the caller did not supply: the number on file, the company directory, a manager looked up there. This is the desk’s own rule against impersonation. An upset person asking for a reset in a hurry is exactly what someone pretending to be them sounds like. If the check fails, say sorry, say what you can do instead, and give a time.",
          "Promise your steps and the times you will report back, never a result that is not in your hands (“it will never happen again”). Then keep the time, even if all you have is “no news yet, and here is what I am doing”.",
          "A polite check is not arguing. If the user says to close the ticket, you can still tell them you need one minute for them to try the fix themselves."] }
      ] },
    { title: "What backs this up",
      show: [
        { kind: "prose", text: [
          "The evidence is limited and comes from shops and banks, not help desks: an apology together with a good explanation raised satisfaction, and an employee’s explanation of what went wrong lowered anger. So when the user wants to know why, give the cause in plain words (“the roller that pulls paper in is worn, so it jams”); do not use an explanation to defend the desk (“the earlier tickets were closed because you did not reply”). The first tells them what is wrong with the printer; the second tells them whose fault the history was. The A+ exam list names the same three things not to do."] }
      ] },
    { worked: "l8-w-lockout" },
    { set: { items: ["l8-p-first", "l8-p-tap", "l8-p-next", "l8-p-lockout"], order: "listed", support: { shown: true } } },
    { set: { items: ["l8-q-chat", "l8-q-jargon", "l8-q-follow", "l8-q-plain", "l8-q-id"], order: "shuffle" } },
    { set: { items: ["l8-r-handon", "l8-r-chat", "l8-r-confirm", "l8-r-words"], order: "shuffle", mix: { from: ["l6", "l7"], share: 0.3 } } }
  ],
  check: {
    items: ["l8-k-meeting", "l8-k-promise", "l8-k-meaning", "l8-k-policy", "l8-k-id"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "argued", max: 0 }, { slip: "blamed", max: 0 }, { slip: "false-promise", max: 0 }, { slip: "no-id-check", max: 0 }]
  }
});
