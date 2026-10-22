// Scams, lesson 6: Money to strangers (part F, the scripts that want money from someone you know only online, a fee to release a prize, a loan or a job, or a
// fee to get lost money back; and money that family and friends ask for). Four screens, each a script beside what is real and the step of the subject's one
// rule (plan.md, "The rule") that settles it; one worked chat; two pairs; eight mixed messages on a clock with a chat that pushes; and the check: eight new
// messages and another chat, 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l6", part: "F", title: "Money to strangers", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "After the two reviews, judged by the subject’s one rule: money a brother, sister or friend asks for that you had not agreed is checked on the number you have (the FTC’s advice for family emergencies), and only money you agreed beforehand is sent; telling someone you know in person is now its own question after leaving it, not reached through a wrong answer; the online-friend script is paired with a real request you agreed; the prize and loan lines say what the FTC says (real prizes are free; a fee to get a loan is the trick); investment outcomes say what the FBI reports (gains you cannot take out); messages that wanted nothing are replaced." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: a call to the number you have no longer “settles it”, since a stolen phone answers too; the FTC’s second move, asking someone else in the family, is added; “What else do you do?” has a wrong “tell” (the friend from the same group); the job offer shows its odd request first; real payments you agreed no longer always echo you, and one scam does; what a crypto wallet is, and why an employer may want your bank number, are said." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the raffle you entered says you gave your number for the draw; a chat with your real sister, checked on her number and then helped, is practised; “What else” varies its order and fits a dating site or a stranger; a stolen phone, not a copied voice, sends the same text." }],
  why: [
    "Some of the money that is lost goes to someone met only online, to a fee that is said to release a prize, a loan or a job, or to someone who offers to get lost money back.",
    "You see each script beside what is real, and choose what to do."
  ],
  flow: [
    { title: "Someone you only know online",
      show: [
        { kind: "pair",
          a: scamChat("Mei", "Chat on the hobby forum", [{ id: "s1a", text: "I made $4,000 this month with a trading app. Put in $500 at this link." }], "trade-mei.example/join"),
          b: scamSms("Luis (brother)", "Text message, after you agreed at dinner to pay half", [{ id: "s1b", text: "Half the pizza came to $20. Send it in PayLane like you said." }]),
          compare: "You know Luis and agreed this with him. Mei you know only online, and you agreed nothing." },
        { kind: "prose", text: "Someone you know only online is not someone you know: their name, photos and stories all came from them, and a friend in common you also met online changes nothing. So send no money, and tell someone you know in person. Crypto sent to their wallet or app has none of a card’s protections." }] },
    { title: "A fee to get something",
      show: [
        { kind: "pair",
          a: scamEmail("Prize Office", "Email · Friday", "You won", [{ id: "s2a", text: "Congratulations, you won $10,000. Pay a $200 fee to claim it." }], "prize-office-claim.example/fee"),
          b: scamSms("Harbor Café", "Text message, after you bought a raffle ticket there", [{ id: "s2b", text: "Your ticket won the $50 gift card! Reply with your name to collect it." }]),
          compare: "The first wants you to pay before you get anything. The second you entered yourself, and it costs nothing." },
        { kind: "prose", text: "Real prizes are free. A fee called “insurance” before a loan is the trick. No honest employer has you deposit a check and send part of it on." }] },
    { title: "A fee to get your money back",
      show: [
        { kind: "pair",
          a: scamCall("Fund Recovery", "Incoming call · 11:30 AM", [{ id: "s3a", text: "We saw your report, and we can get your $800 back. Pay a $150 fee first." }]),
          b: { kind: "prose", text: "Tell your bank, on the number on your card. Report it at ReportFraud.ftc.gov. Neither one charges you." },
          compare: "The first wants money to get money back. The second costs you nothing." },
        { kind: "prose", text: "Nobody honest who calls you wants a fee up front to get your money back. That offer is another scam: hang up." }] },
    { title: "Someone you know wants money",
      show: [
        { kind: "prose", text: "A sister, friend or grandson wants money you had not agreed. It uses a name you know, so you check: call them on the number you already have. When they answer on that number, in their own voice, and the story fits, that settles it. If anything is off, call someone else in the family." },
        { kind: "prose", tone: "wrong", text: [
          "It came from my sister’s own number, so it must be her.",
          "Phones and chat accounts can be taken over, so a text from her number proves nothing. Your call to the number you have is the check."] }] },
    { worked: "w-trade" },
    { set: { items: [["p-partner-fake", "p-brother-real"], ["p-prize-fake", "p-prize-real"]], order: "listed" } },
    { set: { items: ["g-job-fake", "g-payroll-real", "g-recover-fake", "g-friend-real", "g-loan-fake", "g-loan-real", "g-invest-fake", "g-buy-real", "x-partner", "x-rosa"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["k-crypto-fake", "k-sister-real", "k-prize-fake", "k-gift-real", "k-kit-fake", "k-course-real", "k-fund-fake", "k-lunch-real", "x-invest"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
