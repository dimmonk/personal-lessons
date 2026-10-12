// Ideology, lesson 2 "Socialist, or not?": the six questions of the end check (three thrown from each side; two earned, two not earned and two
// with too little to tell), on plans and places the lesson's groups did not use. Invented plans, places, groups and people.
(() => {
const L = ideoLine, FROM = ideoSpeaker;
FC.items("ideology", [
  ideoItem({
    id: "k-water", side: "right", fit: "earned", rule: "socialist", word: "socialist",
    post: { source: "Comment · @hal_s · 2h", by: "On a right-leaning news page", text: "Socialism, pure and simple." },
    lines: [
      L("a1", "The Clean Water Act would take over the state’s three private water companies."),
      L("a2", "They would be owned and run by the state as a public utility."),
      L("a3", "Customers would pay the state instead of the companies.", "That says who gets the bills, not who owns the companies."),
      FROM("a4", "Said by the bill’s main sponsor.")],
    tap: "a2", has: { "soc-industry": "a1", "soc-owner": "a2" }, deciding: ["a1", "a2"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. “The Clean Water Act would take over the state’s three private water companies” names the industry.",
      "“They would be owned and run by the state as a public utility” puts it in public hands. Both needs are there."]
  }),
  ideoItem({
    id: "k-rents", side: "left", fit: "earned", rule: "market", word: "free-market",
    post: { source: "Comment · @june_l · 3h", by: "On a left-leaning news page", text: "Free-market greed, dressed up as a housing plan." },
    lines: [
      L("r1", "The Open Housing Plan would end all limits on rent.", "That ends the limits, but it does not say who decides the price after."),
      L("r2", "The city would sell its 40 apartment buildings to private owners."),
      L("r3", "Owners could charge whatever tenants are willing to pay."),
      FROM("r4", "Said by a city councilmember on a talk show.")],
    tap: "r3", has: { "fm-private": "r2", "fm-prices": "r3" }, deciding: ["r1", "r2", "r3"],
    reason: ["“Free-market” needs businesses and property in private hands and prices decided by buyers and sellers. “The city would sell its 40 apartment buildings to private owners” puts the buildings in private hands.",
      "“Owners could charge whatever tenants are willing to pay” leaves the prices to buyers and sellers. Both needs are there."]
  }),
  ideoItem({
    id: "k-leave", side: "right", fit: "unearned", rule: "socialist", word: "socialist", name: "socdem",
    post: { source: "Comment · @ivo_c · 4h", by: "On a right-leaning news page", text: "Another socialist scheme." },
    lines: [
      L("n1", "The Family First Plan would give every new parent 12 weeks of paid leave.", "That is what parents get, not who owns anything."),
      L("n2", "A payroll tax of 0.4% would pay for it."),
      L("n3", "The plan would start next January.", "That says when, not what the plan does."),
      FROM("n4", "Said by a state senator in a news release.")],
    tap: "n2", has: { "soc-industry": null, "soc-owner": null }, deciding: ["n1", "n2"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. The plan names no industry and takes nothing over: “A payroll tax of 0.4% would pay for it” is a tax paying for a benefit.",
      "Nothing changes hands, so the label is not earned. Words that only say a tax pays for a benefit are the social democrat idea."],
    need: "To earn “socialist”, the words would have to name an industry and say the public or the workers would own it."
  }),
  ideoItem({
    id: "k-wage", side: "left", fit: "unearned", rule: "socialist", word: "socialist", name: "socdem",
    post: { source: "Post · Rise Together Coalition · 5h", by: "From a left-leaning community group", text: "This is what socialism looks like, and we are proud." },
    lines: [
      L("g1", "The Rise Together Plan would raise the minimum wage to $15 an hour.", "That is a pay rule, not who owns anything."),
      L("g2", "It would make community college free for every resident.", "That is a service paid for by taxes. It says nothing about who owns anything."),
      L("g3", "Both would be paid for by a tax on large estates.", "That says where the money comes from."),
      L("g4", "No company would change hands."),
      FROM("g5", "Said by a spokesperson for the coalition.")],
    tap: "g4", has: { "soc-industry": null, "soc-owner": null }, deciding: ["g2", "g4"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. No industry is named, and “No company would change hands” rules out any new owner.",
      "Free community college paid for by a tax on large estates is a service paid for by taxes, with business left private: a social democrat idea."],
    need: "To earn “socialist”, the words would have to name an industry and say the public or the workers would own it."
  }),
  ideoItem({
    id: "k-unleash", side: "right", fit: "thin", rule: "market", word: "free-market",
    post: { source: "Post · Prairie Business Alliance · 6h", by: "From a right-leaning business group", text: "A free-market plan for a stronger state." },
    lines: [
      L("e1", "We will unleash this state’s economy and let its people prosper.", "That is a hope. It names no business, no owner and no price."),
      L("e2", "Our plan is bold, and our plan is fair.", "That is a boast about the plan, not what it does."),
      FROM("e3", "Said by the alliance’s director.")],
    tap: "none", has: { "fm-private": null, "fm-prices": null }, deciding: [],
    reason: ["“Free-market” needs businesses in private hands and prices decided by buyers and sellers. “We will unleash this state’s economy and let its people prosper” names no business, no owner and no price.",
      "The words cannot show the label and cannot rule it out."],
    need: "To judge “free-market”, the words would have to say who owns the businesses, or who decides the prices."
  }),
  ideoItem({
    id: "k-city", side: "left", fit: "thin", rule: "market", word: "capitalist",
    post: { source: "Comment · @lena_r · 7h", by: "On a left-leaning news page", text: "Capitalist spin, nothing more." },
    lines: [
      L("z1", "We will make this a city where good ideas can grow and good jobs stay.", "That is a hope. It names no business, no owner and no price."),
      L("z2", "The details will come this spring.", "That says when, not what the plan would do."),
      FROM("z3", "Said by the mayor’s economic adviser.")],
    tap: "none", has: { "fm-private": null, "fm-prices": null }, deciding: [],
    reason: ["“Capitalist” is the free-market label. It needs businesses in private hands and prices decided by buyers and sellers. “We will make this a city where good ideas can grow and good jobs stay” names no business, no owner and no price.",
      "The words cannot show the label and cannot rule it out."],
    need: "To judge “capitalist”, the words would have to say who owns the businesses, or who decides the prices."
  })
]);
})();
