// Scams, lesson 9: What looks prove nothing (part I, the ten wrong beliefs the owner listed, each corrected: P29, S3, S7, S8, S9, S23, S27, S33). Three
// screens of wrong ideas set right; one worked email; three pairs, each a polished or familiar scam beside a clumsy or plain real message; eight mixed on
// a clock; and the check: eight new, 20 seconds each, nothing shown until the end. Every answer is the subject's one rule (plan.md, "The rule").
FC.lesson("scams", {
  id: "l9", part: "I", title: "What looks prove nothing", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams on the subject’s one rule. Not tried on a phone yet." }],
  why: [
    "Ten things people believe make a message look real or fake. Each one has fooled someone.",
    "You see each belief corrected, then messages where it would mislead you."
  ],
  flow: [
    { title: "How it looks",
      show: [
        { kind: "prose", tone: "wrong", text: ["Spelling mistakes mean a scam, and a well-written message is real.", "Scams can be written perfectly, and real messages have typos. Look at what it wants."] },
        { kind: "prose", tone: "wrong", text: ["It had the bank’s logo and an official name.", "Anyone can copy a logo or make up an official-sounding name."] },
        { kind: "prose", tone: "wrong", text: ["The website had the padlock, so it was safe.", "Most copied websites show the padlock too. It proves nothing."] }] },
    { title: "What they knew and how they sounded",
      show: [
        { kind: "prose", tone: "wrong", text: ["The number on my screen was my bank’s.", "The name and number on your screen can be changed to show anything."] },
        { kind: "prose", tone: "wrong", text: ["They knew my name, my address and my grandson’s name, and it sounded just like him.", "Scammers find a lot about you online, and voices can be copied. Knowing you proves nothing."] },
        { kind: "prose", tone: "wrong", text: ["I rang the number myself, so it was them.", "If the number came from the pop-up, the text or a web search, you rang whoever put it there."] },
        { kind: "prose", tone: "wrong", text: ["He was so calm, friendly and helpful.", "Sounding like a real company is one of the commonest tricks, and being friendly is part of the script."] }] },
    { title: "Who gets caught",
      show: [
        { kind: "prose", tone: "wrong", text: ["Only greedy or careless people get caught.", "People who lost money to investment scams knew more about money than people who did not. Anyone busy or worried can be caught."] },
        { kind: "prose", tone: "wrong", text: ["We have chatted for months and they never wanted money, so they are real.", "The money comes after the trust. Months of chat is how it starts."] },
        { kind: "prose", tone: "wrong", text: ["My bank would have stopped it.", "A payment you make yourself goes through. Once it is sent, it is hard to get back."] }] },
    { worked: "l9w-perfect" },
    { set: { items: [["l9p-logo-fake", "l9p-typo-real"], ["l9p-callerid-fake", "l9p-callerid-real"], ["l9p-padlock-fake", "l9p-padlock-real"]], order: "listed" } },
    { set: { items: ["l9g-grandson-fake", "l9g-friendly-fake", "l9g-months-fake", "l9g-seal-fake", "l9g-alert-real", "l9g-sitter-real", "l9g-plain-real", "l9g-paper-real"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["l9k-order-fake", "l9k-safe-fake", "l9k-rang-fake", "l9k-trip-fake", "l9k-cleaner-real", "l9k-card-real", "l9k-water-real", "l9k-catalog-real"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
