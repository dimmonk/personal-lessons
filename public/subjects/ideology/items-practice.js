// Ideology, lesson 2 "Socialist, or not?": the worked example and the twelve questions of the two groups. Invented plans, places, groups and
// people; no real politician is quoted or named, and no party. Every question is a label pinned on words, thrown from the left or from the
// right, and each side throws earned labels, labels the words do not earn, and labels on words that say too little to tell. A question's
// small print says who said the words, in a role and never a party (party cues come back from lesson 4 on).
(() => {
const L = ideoLine, TONE = ideoTone, FROM = ideoSpeaker;
FC.items("ideology", [
  // ----- the worked example: a label on a plan that pays a benefit and leaves the companies alone -----
  ideoItem({
    id: "w-power", side: "right", fit: "unearned", rule: "socialist", word: "socialist", name: "socdem",
    post: { source: "Comment · @dale_k · 2h", by: "On a right-leaning news page", text: "This is socialism, plain and simple." },
    lines: [
      L("p1", "The Cold Winters Plan would pay every household $300 toward its heating bill each year.", "That is what the plan pays, not who owns the power companies."),
      L("p2", "The money would come from a tax on the profits of the state’s power companies.", "That says where the money comes from."),
      L("p3", "The power companies would stay privately owned and keep running as they do now."),
      TONE("p4", "“No family should have to choose between heat and food,” said the sponsor.", "That is the sponsor’s reason, not what the plan does."),
      FROM("p5", "Said by a state senator at a committee hearing.")],
    tap: "p3", has: { "soc-industry": "p2", "soc-owner": null }, deciding: ["p2", "p3"],
    steps: [
      { id: "find", does: "Find what the words say should be done.", working: "The plan pays $300 toward every heating bill, with a tax on the power companies’ profits. The sentence that settles who owns the companies is “The power companies would stay privately owned and keep running as they do now.”", ask: "words" },
      { id: "need", does: "Read what the label needs.", working: "“Socialist” needs a main industry named, and the public or the workers owning it." },
      { id: "check", does: "Check each need against the words.", working: "The industry is there: the power companies. The owner is not, because they stay private. So the label is not earned.", ask: "verdict" },
      { id: "name", does: "Name what the words do earn.", working: "A tax pays a benefit to every household, and the companies stay private. That is the social democrat idea.", ask: "name" }],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. The plan names one, the power companies. But “The power companies would stay privately owned and keep running as they do now”, so no one but private owners owns them.",
      "A tax that pays part of every household’s heating bill is a benefit paid for by taxes, with business left private. That is what a social democrat idea is."],
    need: "To earn “socialist”, the words would have to say the public or the workers would own the power companies."
  }),

  // ----- the first group (what the label needs shown beside the words): a pair, then two more -----
  ideoItem({
    id: "p-fares", side: "right", fit: "unearned", rule: "socialist", word: "socialist", name: "socdem",
    post: { source: "Comment · @maren_t · 5h", by: "On a right-leaning news page", text: "Socialism again. Free buses for everyone." },
    lines: [
      L("f1", "The Free Fares Plan would let everyone ride city buses at no charge.", "That is what riders get, not who owns the buses."),
      L("f2", "A new 1% sales tax would cover the lost fares.", "That says where the money comes from."),
      L("f3", "The buses would still be run by the same private contractors, who would be paid by the city for every trip they run."),
      TONE("f4", "“Getting to work should not cost a day’s pay,” said the mayor’s office.", "That is the reason given, not what the plan does."),
      FROM("f5", "Said by a spokesperson for the city transport office.")],
    tap: "f3", has: { "soc-industry": "f1", "soc-owner": null }, deciding: ["f1", "f3"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. The plan names the city buses, but “The buses would still be run by the same private contractors, who would be paid by the city for every trip they run.” Nothing changes hands.",
      "A tax that pays for free rides is a service paid for by taxes, with the companies left private: a social democrat idea."],
    need: "To earn “socialist”, the words would have to say the city or the drivers would own the bus companies."
  }),
  ideoItem({
    id: "p-bus", side: "left", fit: "earned", rule: "socialist", word: "socialist",
    post: { source: "Post · Dockside Workers Network · 4h", by: "From a left-leaning workers’ group", text: "Yes, this is socialism, and we are proud of it." },
    lines: [
      L("b1", "The Metro Bus Plan would have the city buy the Metro Bus Company from its owners."),
      L("b2", "The city would run it as a public service, with riders and drivers on the board.", "That says how it would be run, once the city owns it."),
      L("b3", "Fares would stay as they are.", "That is about fares, not who owns the buses."),
      FROM("b4", "Said by an organizer for the bus drivers’ union.")],
    tap: "b1", has: { "soc-industry": "b1", "soc-owner": "b1" }, deciding: ["b1", "b2"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. “The Metro Bus Plan would have the city buy the Metro Bus Company from its owners” names the bus company and puts it in the city’s hands.",
      "It would then be run as a public service. Both needs are there."]
  }),
  ideoItem({
    id: "p-jobs", side: "left", fit: "thin", rule: "market", word: "capitalist",
    post: { source: "Comment · @priya_o · 6h", by: "On a left-leaning news page", text: "Capitalist nonsense, as usual." },
    lines: [
      L("j1", "Our plan is to grow the economy and bring good jobs back to the county."),
      L("j2", "We will work with business, workers and local leaders."),
      FROM("j3", "Said by a candidate for county commissioner.")],
    tap: "none", has: { "fm-private": null, "fm-prices": null }, deciding: ["j1", "j2"],
    reason: ["“Capitalist” is the free-market label. It needs businesses in private hands and prices decided by buyers and sellers. “Our plan is to grow the economy and bring good jobs back to the county” says neither.",
      "It names no business, no owner and no price, so the words cannot show the label and cannot rule it out."],
    need: "To judge “capitalist”, the words would have to say who owns the businesses, or who decides the prices."
  }),
  ideoItem({
    id: "p-fortunes", side: "right", fit: "unearned", rule: "communist", word: "communist", name: "socdem",
    post: { source: "Comment · @gus_h · 3h", by: "On a right-leaning news page", text: "Communists, every one of them." },
    lines: [
      L("t1", "The Fair Share Plan would put a 5% tax on fortunes over $50 million.", "That says who pays, not who owns the businesses."),
      L("t2", "The money would pay for pensions and free school meals in every school.", "That says where the money goes."),
      L("t3", "All businesses and property would stay with their private owners."),
      FROM("t4", "Said by a state representative in a speech.")],
    tap: "t3", has: { "com-all": null, "com-plan": null }, deciding: ["t2", "t3"],
    reason: ["“Communist” needs nearly all property and business owned in common or by the state, and one central plan deciding what is made and what it costs. The plan says “All businesses and property would stay with their private owners.” Neither need is there.",
      "A tax on large fortunes that pays for pensions and school meals is a benefit paid by taxes, with business left private: a social democrat idea."],
    need: "To earn “communist”, the words would have to say that nearly all farms, factories and shops would be owned in common or by the state."
  }),

  // ----- the second group (nothing beside the words): four from each side -----
  ideoItem({
    id: "q-sell", side: "left", fit: "earned", rule: "market", word: "free-market",
    post: { source: "Comment · @theo_b · 8h", by: "On a left-leaning news page", text: "Free-market thinking again. Leave it to the market and watch who loses." },
    lines: [
      L("m1", "The Lakeshore Bus Plan would sell the state-owned bus company to private firms."),
      L("m2", "The new owners could charge whatever fares riders will pay.", "That is about fares, once the company is sold."),
      L("m3", "The state would only enforce safety rules and contracts.", "That says what the state would keep doing."),
      FROM("m4", "Said by a state budget official on a radio show.")],
    tap: "m1", has: { "fm-private": "m1", "fm-prices": "m2" }, deciding: ["m1", "m2", "m3"],
    reason: ["“Free-market” needs businesses in private hands and prices decided by buyers and sellers. “The Lakeshore Bus Plan would sell the state-owned bus company to private firms” puts the company in private hands.",
      "“The new owners could charge whatever fares riders will pay” leaves the prices to buyers and sellers. Both needs are there."]
  }),
  ideoItem({
    id: "q-farms", side: "right", fit: "earned", rule: "communist", word: "communist",
    post: { source: "Comment · @walt_p · 7h", by: "On a right-leaning news page", text: "This is communism. Say it out loud." },
    lines: [
      L("c1", "The People’s Economy Act would end private ownership of farms, factories and shops."),
      L("c2", "Everything would be owned in common and run by the state.", "That says how it would be run, once private ownership has ended."),
      L("c3", "One national plan would decide what is made, how much, and at what price."),
      TONE("c4", "Backers say it would end poverty in ten years.", "That is a promise about results, not what the plan does."),
      FROM("c5", "Said by the author of a book on economics.")],
    tap: "c1", has: { "com-all": "c1", "com-plan": "c3" }, deciding: ["c1", "c2", "c3"],
    reason: ["“Communist” needs nearly all property and business owned in common or by the state, and one central plan deciding what is made and what it costs. “The People’s Economy Act would end private ownership of farms, factories and shops” covers nearly everything.",
      "“One national plan would decide what is made, how much, and at what price” is the central plan. Both needs are there."]
  }),
  ideoItem({
    id: "q-coops", side: "left", fit: "earned", rule: "socialist", word: "socialist",
    post: { source: "Post · Fair Work Alliance · 9h", by: "From a left-leaning workers’ group", text: "Yes, this is socialism. It is meant to be." },
    lines: [
      L("w1", "Every company with more than 500 workers would become owned by its workers."),
      L("w2", "Each worker would hold one vote, and the workers would elect the managers.", "That says how the companies would be run, once the workers own them."),
      L("w3", "Owners would be paid a fair price for their shares by a public fund.", "That is how owners are paid, not who will own the companies."),
      FROM("w4", "Said by a spokesperson for the alliance.")],
    tap: "w1", has: { "soc-industry": "w1", "soc-owner": "w1" }, deciding: ["w1", "w2"],
    reason: ["“Socialist” needs a main industry or a big company named and the public or the workers owning it. “Every company with more than 500 workers would become owned by its workers” names the big companies and gives the ownership to the workers.",
      "Both needs are there."]
  }),
  ideoItem({
    id: "q-utilities", side: "left", fit: "unearned", rule: "socdem", word: "social democrat", name: "socialist",
    post: { source: "Post · Greenfield Renters Union · 1d", by: "From a left-leaning tenants’ group", text: "We are social democrats, and this is our plan." },
    lines: [
      L("u1", "The county would take its three biggest power and water companies into public ownership."),
      L("u2", "They would be run by a public board, and the profits would go to the county.", "That says how they would be run, once the county owns them."),
      L("u3", "Rates would stay as they are for now.", "That is about prices, not who owns the companies."),
      FROM("u4", "Said by the union’s president.")],
    tap: "u1", has: { "sd-services": null, "sd-private": null }, deciding: ["u1", "u2"],
    reason: ["A social democrat idea needs taxes paying for broad services or benefits, and businesses staying private. “The county would take its three biggest power and water companies into public ownership” takes main industries out of private hands.",
      "Public ownership of main industries is the socialist idea, so that is the name the words earn."],
    need: "To earn “social democrat”, the words would have to leave the companies in private hands and have taxes pay for services."
  }),
  ideoItem({
    id: "q-economy", side: "left", fit: "thin", rule: "market", word: "capitalist",
    post: { source: "Comment · @nina_v · 10h", by: "On a left-leaning news page", text: "Capitalism at work, as always." },
    lines: [
      L("x1", "Our economy should work better for everyone."),
      L("x2", "We have heard from hundreds of residents, and we are ready to act."),
      FROM("x3", "Said by a state commerce director in a speech.")],
    tap: "none", has: { "fm-private": null, "fm-prices": null }, deciding: ["x1", "x2"],
    reason: ["“Capitalist” is the free-market label. It needs businesses in private hands and prices decided by buyers and sellers. “Our economy should work better for everyone” names no business, no owner and no price.",
      "The words cannot show the label and cannot rule it out."],
    need: "To judge “capitalist”, the words would have to say who owns the businesses, or who decides the prices."
  }),
  ideoItem({
    id: "q-steel", side: "right", fit: "unearned", rule: "market", word: "free-market", name: "none",
    post: { source: "Post · Heartland Business Group · 12h", by: "From a right-leaning business group", text: "A free-market plan to keep our mills open." },
    lines: [
      L("s1", "The Steel Jobs Plan would pay the three steel mills $2 billion over four years.", "That is money paid out, not how prices are decided."),
      L("s2", "The state would also fix the price of steel at $900 a ton, whatever the market says."),
      L("s3", "The mills would stay privately owned.", "That is half of it. The label also needs the prices left to buyers and sellers."),
      FROM("s4", "Said by the group’s chairman.")],
    tap: "s2", has: { "fm-private": "s3", "fm-prices": null }, deciding: ["s2", "s3"],
    reason: ["“Free-market” needs businesses in private hands and prices decided by buyers and sellers. “The mills would stay privately owned” meets the first. But “The state would also fix the price of steel at $900 a ton, whatever the market says” takes the prices away from buyers and sellers.",
      "The words fit none of the four names: the state does not own the mills, no tax pays for a service, and no central plan runs the economy."],
    need: "To earn “free-market”, the words would have to leave the price of steel to buyers and sellers."
  }),
  ideoItem({
    id: "q-ordinary", side: "right", fit: "thin", rule: "socialist", word: "socialist",
    post: { source: "Comment · @ed_m · 11h", by: "On a right-leaning news page", text: "Socialist, obviously." },
    lines: [
      L("v1", "It is time for a government that puts ordinary people first."),
      L("v2", "For too long, working families have been ignored."),
      FROM("v3", "Said by a candidate in a campaign video.")],
    tap: "none", has: { "soc-industry": null, "soc-owner": null }, deciding: ["v1", "v2"],
    reason: ["“Socialist” needs a main industry named and the public or the workers owning it. “It is time for a government that puts ordinary people first” names no industry and says nothing about who would own anything.",
      "The words cannot show the label and cannot rule it out."],
    need: "To judge “socialist”, the words would have to say which industry, and who would own it."
  }),
  ideoItem({
    id: "q-banks", side: "right", fit: "unearned", rule: "communist", word: "communist", name: "socialist",
    post: { source: "Comment · @bo_j · 13h", by: "On a right-leaning news page", text: "Communism, step one." },
    lines: [
      L("k1", "The Public Banking Act would have the state buy the three largest banks and the main railroad.", "That is a few main industries, which is not yet nearly everything."),
      L("k2", "The state would run them for the public.", "That says how they would be run, once the state owns them."),
      L("k3", "All other businesses, farms and shops would stay privately owned."),
      FROM("k4", "Said by the bill’s sponsor.")],
    tap: "k3", has: { "com-all": null, "com-plan": null }, deciding: ["k1", "k2", "k3"],
    reason: ["“Communist” needs nearly all property and business owned in common or by the state, and one central plan. “The Public Banking Act would have the state buy the three largest banks and the main railroad” covers a few industries, and “All other businesses, farms and shops would stay privately owned” leaves the rest alone.",
      "Public ownership of a few main industries is the socialist idea."],
    need: "To earn “communist”, the words would have to say that nearly all farms, factories and shops would be owned in common or by the state."
  })
]);
})();
