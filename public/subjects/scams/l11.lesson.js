// Scams, lesson 11: Your plan, and all of it (part K). The rule once more, in one screen; the learner's own if-then plan, cued by a request (S22, P26);
// twelve mixed messages from every kind the lessons taught and a chat that pushes, half real, with the plan shown first; and the check, the subject's
// real-world test (plan.md): twelve new messages, half real, 20 seconds each, and two calls, one that pushes and one you placed yourself. It comes back
// once, whole, four weeks later on new questions (S19, R4). "It already happened" is lesson 12's, so it is not asked here.
FC.lesson("scams", {
  id: "l11", part: "K", title: "Your plan, and all of it", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams on the subject’s one rule. Not tried on a phone yet." }],
  why: [
    "Real messages and scams come mixed, of every kind, while you are busy. One plan, made now, helps you stop at the right moment.",
    "You write your plan, practice on everything at once, and then take the test you took at the start, on new messages."
  ],
  flow: [
    { title: "The whole rule",
      show: [{ kind: "prose", text: [
        "What does it want? Money, a sign-in or a code, your details, or your phone or computer.",
        "Did I start it, or is it exactly what I agreed, the amount or how it is worked out, and the way to pay? Then do it.",
        "If not: do I deal with them, or know the person? Check first, through a way I already had. A government office counts: it has your records.",
        "If neither, leave it. If it is someone you know only online, a friend or match you have never met (not a buyer you deal with once), and they want money, also tell someone you know in person."] }] },
    { own: "plan" },
    { set: { items: ["l11g-virus-fake", "l11g-update-real", "l11g-signin-fake", "l11g-camera-real", "l11g-parcel-fake", "l11g-lend-real", "l11g-tax-fake", "l11g-yoga-real", "l11g-survey-fake", "l11g-insurer-real", "l11g-ssa-fake", "l11g-doctor-real", "l11x-refund"], order: "shuffle", seconds: 20, plan: true } }
  ],
  check: {
    items: ["l11k-track-fake", "l11k-photos-real", "l11k-code-fake", "l11k-reset-real", "l11k-crypto-fake", "l11k-car-real", "l11k-irs-fake", "l11k-table-real", "l11k-renew-fake", "l11k-shop-real", "l11k-prize-fake", "l11k-mail-real", "l11x-medicare", "l11x-delivery"],
    feedback: "at-end", seconds: 20, order: "shuffle", retest: 28,
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
