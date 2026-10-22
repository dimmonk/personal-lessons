// Scams, lesson 8: About you (part H, the scripts that want your details: a message that wants who you are, the friendly stranger's questions, a call
// that wants to "confirm" you; each beside the real request for details that you started). Three screens, each settled by a step of the subject's one
// rule (plan.md, "The rule"); one worked text; three pairs; nine mixed on a clock with a call that pushes; and the check: nine new messages and a chat,
// 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l8", part: "H", title: "About you", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams on the subject’s one rule. Not tried on a phone yet." }],
  why: [
    "Some messages want your details: your Social Security number, your birthday, your address, the answers to your security questions.",
    "You see each script beside a real request for details, and choose what to do."
  ],
  flow: [
    { title: "A message that wants who you are",
      show: [
        { kind: "pair",
          a: scamSms("Ashgrove Bank", "Text message", [{ id: "s1a", text: "Enter your Social Security number and date of birth at the link by tonight." }], "ashgrove-verify.example/id"),
          b: scamPopup("Penhallow CU", "In the app, after you tapped “Open a savings account”", [{ id: "s1b", text: "To open your savings account, enter your Social Security number." }], "Continue"),
          compare: "The first comes to you. In the second, you opened the app and chose to open an account." },
        { kind: "prose", text: "With your number, your birthday and your address, someone can pass as you: open a card or a phone account in your name, or take your tax refund. Give them inside something you started: an app or site you opened, a call you made to a number you already had." }] },
    { title: "The friendly stranger’s questions",
      show: [
        { kind: "pair",
          a: scamChat("Fun Quizzes", "Message on a social app", [{ id: "s2a", text: "Tell us your first pet’s name and the street you grew up on." }]),
          b: scamPopup("Alderwick", "In the app, as you make your account", [{ id: "s2b", text: "Pick a security question and type your answer." }], "Save"),
          compare: "The quiz collects the answers. The second is where you choose them." },
        { kind: "prose", text: "A first pet, a childhood street, a first car: these are the answers to common security questions. When you choose an answer yourself, make it one nobody could guess, like a second password." }] },
    { title: "A call that wants to confirm you",
      show: [
        { kind: "pair",
          a: scamCall("Calderwood Bank", "Incoming call", [{ id: "s3a", text: "Give me your full card number, the date on it and your birthday." }]),
          b: scamCall("Calderwood Bank", "Your call to the number on your card", [{ id: "s3b", text: "First, what is your date of birth?" }]),
          compare: "The same name. You placed the second call, on your own number." },
        { kind: "prose", tone: "wrong", text: [
          "They only want my birthday, not money, so there is no harm.",
          "Your details are how someone passes as you. When they call you, hang up and call the number you had."] }] },
    { worked: "l8w-ssn" },
    { set: { items: [["l8p-ssn-fake", "l8p-ssn-real"], ["l8p-quiz-fake", "l8p-question-real"], ["l8p-verify-fake", "l8p-verify-real"]], order: "listed" } },
    { set: { items: ["l8g-job-fake", "l8g-portal-real", "l8g-survey-fake", "l8g-lease-real", "l8g-address-real", "l8g-sweep-fake", "l8g-pharmacy-real", "l8g-census-fake", "l8x-fraud"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["l8k-hr-fake", "l8k-quiz-fake", "l8k-cruise-fake", "l8k-carrier-fake", "l8k-clinic-real", "l8k-bank-real", "l8k-school-real", "l8k-coupon-real", "l8x-gift"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
