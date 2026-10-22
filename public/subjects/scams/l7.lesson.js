// Scams, lesson 7: Bills and payments (part G, the scripts that copy a bill or a payment: changed bank details on a real bill, a small fee by link, an
// official who wants gift cards or crypto now, the buyer who pays too much; each beside the real payment it copies). Four screens, each settled by a step
// of the subject's one rule (plan.md, "The rule"); one worked email; three pairs; nine mixed on a clock with a call that pushes; and the check: nine
// new messages and another call, 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l7", part: "G", title: "Bills and payments", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams on the subject’s one rule. Not tried on a phone yet." }],
  why: [
    "Some scams copy a bill you really owe, or a payment you really make. The money goes to the wrong place.",
    "You see each script beside the real payment, and choose what to do."
  ],
  flow: [
    { title: "A bill whose bank details changed",
      show: [
        { kind: "pair",
          a: scamEmail("Brightline Roofing", "Email", "Your invoice", [{ id: "s1a", text: "Our bank has changed. Pay the $4,200 to the new account below." }]),
          b: scamEmail("Brightline Roofing", "Email", "Your invoice", [{ id: "s1b", text: "Invoice attached: $4,200, to the account on your quote." }]),
          compare: "The same bill. The first changes where the money goes." },
        { kind: "prose", text: "A change of where to send money is checked every time, on the number you already had for them: the one on the quote, the lease or the bill. Never on the email’s number or a reply." }] },
    { title: "A small fee by link",
      show: [
        { kind: "pair",
          a: scamSms("Westway Tolls", "Text message", [{ id: "s2a", text: "You have an unpaid toll of $6.85. Pay today at the link." }], "westway-tollpay.example/pay"),
          b: scamPopup("Westway Toll Pass", "In the app, after you tapped “Add money”", [{ id: "s2b", text: "Add $25 from your saved card?" }], "Add $25"),
          compare: "The first comes to you with a link. The second answers what you just tapped." },
        { kind: "prose", text: "A small sum makes it feel not worth checking. The page is after your card number, not the $6.85." }] },
    { title: "An official who wants gift cards or crypto",
      show: [
        { kind: "pair",
          a: scamCall("Marlow County Sheriff", "Incoming call", [{ id: "s3a", text: "Pay the $800 fine in gift cards in the next hour, or officers come to your home." }]),
          b: scamPopup("Marlow County Treasurer", "On the county site, typed from your tax bill", [{ id: "s3b", text: "Property tax due by November 30: $1,240. Pay from your bank account." }], "Pay"),
          compare: "The first wants gift cards in an hour. The second is a page you opened, with weeks to pay." },
        { kind: "prose", text: "No government office or honest company insists you pay in gift cards, crypto or a wire, and an honest one gives you time. A government office has your records, so treat its name like your bank’s: hang up, and call it on a number you know, from a letter it sent or its own website that you type." }] },
    { title: "The buyer who pays too much",
      show: [
        { kind: "pair",
          a: scamEmail("Buyer", "Email", "Your bike", [{ id: "s4a", text: "I sent a check for $750 by mistake. Deposit it and send back $450." }]),
          b: scamChat("Seller on Bramblecote Market", "Chat, after your offer of $40", [{ id: "s4b", text: "Deal at $40. Tap Pay in the app." }]),
          compare: "The first sends you more than the price and wants some back. The second is the price you offered, in the app." },
        { kind: "prose", tone: "wrong", text: [
          "The money showed up in my account, so the check is good.",
          "It can take weeks for a bank to find a fake check. Then you pay all of it back, and the money you sent is gone."] }] },
    { worked: "l7w-roof" },
    { set: { items: [["l7p-toll-fake", "l7p-toll-real"], ["l7p-sheriff-fake", "l7p-county-real"], ["l7p-overpay-fake", "l7p-buyer-real"]], order: "listed" } },
    { set: { items: ["l7g-landlord-fake", "l7g-split-real", "l7g-dentist-real", "l7g-parcel-fake", "l7g-insure-real", "l7g-crypto-fake", "l7g-gym-real", "l7g-overpay-fake", "l7x-power"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["l7k-plumber-fake", "l7k-grant-fake", "l7k-customs-fake", "l7k-check-fake", "l7k-heater-real", "l7k-power-real", "l7k-cabin-real", "l7k-books-real", "l7x-warrant"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
