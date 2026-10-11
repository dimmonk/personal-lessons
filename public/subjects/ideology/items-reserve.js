// Ideology, lesson 2 "Socialist, or not?": four questions held in reserve. No lesson names them; the weekly review asks one of them when the
// topic comes back, so the learner meets a label they have not seen. Two from each side: a label the words earn, two they do not, and one with
// too little to tell. Invented plans, places, groups and people.
(() => {
const L = ideoLine, FROM = ideoSpeaker;
FC.items("ideology", [
  ideoItem({
    id: "r-pensions", side: "right", fit: "unearned", rule: "communist", word: "communist", name: "socdem",
    post: { source: "Comment · @tom_k · 1d", by: "On a right-leaning news page", text: "Communist handouts." },
    lines: [
      L("h1", "The Golden Years Plan would add $200 a month to every pension.", "That is what the plan pays, not who owns the businesses."),
      L("h2", "A 3% tax on stock sales would pay for it.", "That says where the money comes from."),
      L("h3", "No business or property would change owners."),
      FROM("h4", "Said by a retired teacher at a public meeting.")],
    tap: "h3", has: { "com-all": null, "com-plan": null }, deciding: ["h1", "h3"],
    reason: ["“Communist” needs nearly all property and business owned in common or by the state, and one central plan. “No business or property would change owners” leaves out both.",
      "A tax that pays for higher pensions is a benefit paid by taxes, with business left private: a social democrat idea."],
    need: "To earn “communist”, the words would have to say that nearly all farms, factories and shops would be owned in common or by the state."
  }),
  ideoItem({
    id: "r-grocery", side: "left", fit: "earned", rule: "socialist", word: "socialist",
    post: { source: "Post · Neighborhood Food Co-op · 1d", by: "From a left-leaning neighborhood group", text: "Socialism for groceries. Yes, please." },
    lines: [
      L("o1", "The city would buy each of its four large grocery chains."),
      L("o2", "A board elected by shoppers and staff would run them.", "That says how they would be run, once the city owns them."),
      L("o3", "Prices would be set to cover costs, not to make a profit.", "That is about prices, not who owns the chains."),
      FROM("o4", "Said by a co-op volunteer.")],
    tap: "o1", has: { "soc-industry": "o1", "soc-owner": "o1" }, deciding: ["o1", "o2"],
    reason: ["“Socialist” needs a main industry or a big company named and the public or the workers owning it. “The city would buy each of its four large grocery chains” names the companies and puts them in public hands.",
      "Both needs are there."]
  }),
  ideoItem({
    id: "r-left-behind", side: "right", fit: "thin", rule: "socialist", word: "socialist",
    post: { source: "Comment · @cal_d · 2d", by: "On a right-leaning news page", text: "Socialist talk." },
    lines: [
      L("y1", "This is a plan for people who feel left behind."),
      L("y2", "We are listening, and we will act."),
      FROM("y3", "Said by a candidate at a rally.")],
    tap: "none", has: { "soc-industry": null, "soc-owner": null }, deciding: ["y1", "y2"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. “This is a plan for people who feel left behind” names no industry and says nothing about who would own anything.",
      "The words cannot show the label and cannot rule it out."],
    need: "To judge “socialist”, the words would have to say which industry, and who would own it."
  }),
  ideoItem({
    id: "r-pipeline", side: "left", fit: "unearned", rule: "market", word: "capitalist", name: "none",
    post: { source: "Comment · @sky_n · 3d", by: "On a left-leaning news page", text: "Capitalism at its finest." },
    lines: [
      L("i1", "The state would pay a private company $500 million to build a new pipeline.", "That is money paid out, not how prices are decided."),
      L("i2", "It would guarantee the company a fixed price for every barrel it carries for twenty years."),
      L("i3", "The company would own the pipeline.", "That is half of it. The label also needs the prices left to buyers and sellers."),
      FROM("i4", "Said by the state energy director.")],
    tap: "i2", has: { "fm-private": "i3", "fm-prices": null }, deciding: ["i2", "i3"],
    reason: ["“Free-market” needs businesses in private hands and prices decided by buyers and sellers. “The company would own the pipeline” meets the first. But “It would guarantee the company a fixed price for every barrel it carries for twenty years” takes the price away from buyers and sellers.",
      "The words fit none of the four names: the state does not own the pipeline, no tax pays for a service, and no central plan runs the economy."],
    need: "To earn “free-market”, the words would have to leave the price to buyers and sellers."
  })
]);
})();
