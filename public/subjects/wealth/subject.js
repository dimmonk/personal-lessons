// Wealth Preservation: subject record (lesson standard 26.1). Only the pilot, lesson 2, is built: the subject screen lists every other part of the
// design record as not built yet (V69 holds the rest back until the owner has tried the pilot). endResult and parts are the design record's, word
// for word (V80, V71). The learner's own accounts and dated actions are private data (26.3): the forms below say what the app may ask for.
FC.subject('wealth', {
  name: "Wealth Preservation",
  rev: 7,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks what could lose the money and has a fifth answer for a case in which nothing could; each branch asks one question about what the case shows, not about the fix already chosen; every branch has a name for a case where nothing needs doing; the unsourced claims about lost family fortunes are gone. The old Units Six and Seven are folded into the drills and the full determination, and the old specimens are rewritten as situations to diagnose, with new ones for every name." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US accounts, rules and institutions, US spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-10",
      change: "Step 4, documents and your own data: the record holds what lesson 2 needs (change it or leave it, the slips of reading a fee sheet, the kind of question that comes back in the review) and the private forms for the learner's accounts and dated changes, and lesson 2, What it costs a year, in dollars, is added as the pilot." },
    { rev: 7, date: "2026-10-11",
      change: "After the pilot's stand-in review: two more slips (a fee charged each quarter counted once; a fund of a different category) and the fund-costs papers worded as real ones are." }
  ],
  endResult: "Run the yearly check on your own US accounts: work out what each costs you a year in dollars, your biggest single bet, how far your mix has drifted, whether you take the full employer match, which foreign holdings need a US filing, and who inherits each account; then make the changes it calls for and leave alone what it clears.",
  parts: [
    { id: "1", title: "The list" },
    { id: "2", title: "What it costs a year, in dollars" },
    { id: "3", title: "Your biggest single bet" },
    { id: "4", title: "Mix and drift" },
    { id: "5", title: "The full match" },
    { id: "6", title: "Foreign holdings under US rules" },
    { id: "7", title: "Who inherits, and who can act" },
    { id: "8", title: "The whole check, done and repeated" }
  ],
  lists: {
    call: [{ id: "change", text: "Change it" }, { id: "leave", text: "Leave it" }],
    slip: [
      { id: "percent-as-dollars", text: "used each percent as if it were dollars, without dividing by 100" },
      { id: "left-out-fee", text: "left the plan's own fee out of the total" },
      { id: "quarter-once", text: "counted a fee charged each quarter once, not four times a year" },
      { id: "wrong-row", text: "read the net expense ratio of a different fund" },
      { id: "churned", text: "changed a fund that was already the cheapest of its kind" },
      { id: "overpaid", text: "left a fund that costs more than another of its kind on the same list" },
      { id: "wrong-kind", text: "switched to a fund of a different category because it costs less" }
    ],
    accountType: [
      { id: "401k", text: "401(k) from a job" }, { id: "ira", text: "IRA" }, { id: "roth", text: "Roth IRA" }, { id: "hsa", text: "HSA" },
      { id: "brokerage", text: "Brokerage account" }, { id: "bank", text: "Bank account" }, { id: "foreign", text: "Account outside the US" }
    ],
    kind: [
      { id: "us-stocks", text: "US stocks" }, { id: "intl-stocks", text: "Stocks outside the US" }, { id: "bonds", text: "Bonds" }, { id: "cash", text: "Cash" },
      { id: "target", text: "A fund that mixes by your age" }, { id: "one-company", text: "One company's stock" }, { id: "other", text: "Something else" }
    ],
    trigger: [
      { id: "job", text: "I started a job in the US" }, { id: "account", text: "I opened an account" }, { id: "statement", text: "My yearly statement came" }
    ]
  },
  facets: {
    call: { name: "What the account needs", values: [{ id: "change", text: "accounts to change" }, { id: "leave", text: "accounts to leave alone" }] }
  },
  mix: [{ facet: "call", value: "leave", min: 1 }],
  strands: [{ id: "cost", title: "What an account costs a year" }],
  readingShare: 0.15,
  own: {
    sheet: {
      into: "sheet",
      fields: [
        { id: "type", label: "Kind of account", type: "choose", list: "accountType" },
        { id: "name", label: "A name you will know it by", type: "text", optional: true },
        { id: "balance", label: "What is in it", type: "number", unit: "dollars" },
        { id: "fees", label: "Fees the plan takes from it", type: "number", unit: "dollars a year", optional: true }
      ],
      rows: {
        id: "holdings", label: "Funds",
        fields: [
          { id: "name", label: "Name of the fund", type: "text" },
          { id: "value", label: "What you hold in it", type: "number", unit: "dollars" },
          { id: "expense", label: "Its yearly cost", type: "number", unit: "percent",
            warn: { over: 2, text: "A yearly cost over 2% is very high for a fund. Check the number on your fee sheet." } },
          { id: "kind", label: "What it holds", type: "choose", list: "kind", optional: true }
        ]
      }
    },
    actions: {
      into: "actions",
      fields: [
        { id: "what", label: "What will you do?", type: "text" },
        { id: "where", label: "Where?", type: "text" },
        { id: "when", label: "On which day?", type: "date" }
      ]
    }
  }
});
