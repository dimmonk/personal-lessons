// Political Ideologies: subject record (lesson standard 26.1). Only the pilot, lesson 2, is built: the subject screen lists every other part of
// the design record as not built yet (V69 holds the rest back until the owner has tried the pilot). endResult and parts are the design
// record's, word for word (V80, V71).
FC.subject('ideology', {
  name: "Political Ideologies",
  rev: 6,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the key rewritten in plain words. The two flat questions became a first question with five answers, one of them for a text that speaks for no side, and four branches whose questions end every route in one name. Four names were added where a text says nothing more or nothing extreme, so that such texts have somewhere to go." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-11",
      change: "Step 6, labels: the record holds what lesson 2 needs (the three verdicts, the four names and what each needs, the nine common slips, the side a label is thrown from, and the one topic that comes back in the review), and lesson 2, Socialist, or not?, is added as the pilot." }
  ],
  endResult: "When a speech or a post is called \"socialist\", \"fascist\" or the like, check for yourself which label its own words earn.",
  parts: [
    { id: "1", title: "Find what the words ask for" },
    { id: "2", title: "Economy labels" },
    { id: "3", title: "The US left–right words" },
    { id: "4", title: "Us-and-them labels" },
    { id: "5", title: "Power labels" },
    { id: "6", title: "Labels in the wild" }
  ],
  lists: {
    verdict: [
      { id: "earned", text: "Earned" },
      { id: "not-earned", text: "Not earned" },
      { id: "too-little", text: "Too little to tell" }
    ],
    name: [
      { id: "market", text: "Free-market (capitalist)" },
      { id: "socdem", text: "Social democrat" },
      { id: "socialist", text: "Socialist" },
      { id: "communist", text: "Communist" },
      { id: "none", text: "None of these four" }
    ],
    slip: [
      { id: "believed", text: "said the words earn a label they do not show" },
      { id: "doubted", text: "turned down a label the words earn" },
      { id: "hedged", text: "said there is too little to tell when the words settle it" },
      { id: "overreached", text: "turned down a label on words that say too little to tell" },
      { id: "wrong-name", text: "named an idea the words do not earn" },
      { id: "missed-name", text: "said none of the four names fits when one does" },
      { id: "forced-name", text: "named one of the four when the words fit none" },
      { id: "took-speaker", text: "tapped who said it, not what it would do" },
      { id: "took-tone", text: "tapped the tone or the promise, not what it would do" }
    ]
  },
  rules: {
    market: { name: "Free-market (capitalist)", needs: [
      { id: "fm-private", text: "Businesses and property stay in private hands." },
      { id: "fm-prices", text: "Buyers and sellers decide prices. The government does not fix them or run the business." }
    ] },
    socdem: { name: "Social democrat", needs: [
      { id: "sd-services", text: "Taxes pay for broad services or benefits: health care, schools, pensions or meals." },
      { id: "sd-private", text: "Businesses stay private. They are taxed and regulated, not taken over." }
    ] },
    socialist: { name: "Socialist", needs: [
      { id: "soc-industry", text: "A main industry or a big company is named: such as power, rail, banks or hospitals." },
      { id: "soc-owner", text: "The public or the workers would own it. Taxing it, regulating it or paying for what it sells does not count." }
    ] },
    communist: { name: "Communist", needs: [
      { id: "com-all", text: "Nearly all property and business would be owned in common or by the state: farms, factories and shops, not just a few industries." },
      { id: "com-plan", text: "One central plan, not buyers and sellers, would decide what is made and what it costs." }
    ] }
  },
  facets: {
    side: { name: "Which side threw it", compare: true, values: [
      { id: "left", text: "labels thrown from the left" },
      { id: "right", text: "labels thrown from the right" }
    ] },
    fit: { name: "What the words earn", values: [
      { id: "earned", text: "labels the words earn" },
      { id: "unearned", text: "labels the words do not earn" },
      { id: "thin", text: "words with too little to tell" }
    ] }
  },
  mix: [
    { facet: "side", equal: true },
    { facet: "fit", value: "earned", min: 1 },
    { facet: "fit", value: "unearned", min: 1 },
    { facet: "fit", value: "thin", min: 1 }
  ],
  strands: [{ id: "economy-labels", title: "Economy labels" }],
  readingShare: 0.25
});
