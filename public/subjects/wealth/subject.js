// Wealth Preservation: subject record (lesson standard 3), built to docs/subjects/wealth/plan.md: twelve parts in four units, the planner's
// yearly check, every part built (complete). The learner's own accounts and dated actions are private data
// (5): the forms below say what the app may ask for, and `limits` are the thresholds the lessons teach (docs/research/wealth.md, W40).
FC.subject('wealth', {
  name: "Wealth Preservation",
  field: "numbers",
  rev: 9,
  standard: 2,
  complete: true,
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
    { rev: 7, date: "2026-10-20", change: "Placed on a field of the library (numbers), one of the shelves Field, Subject, Unit, Lesson." },
    { rev: 8, date: "2026-10-22",
      change: "Rebuilt to the plan (docs/subjects/wealth/plan.md): twelve parts in four units, the end result in the plan's words, a topic and its slips for each of lessons 1 to 6, the values looked up for 2026 (FDIC, SIPC, the contribution limits, the loss limit, the foreign-account thresholds), the sheet's new groups (what you spend, the bills ahead, the match, the insurance limits, the mix you chose, income after work), its limits, the kinds of account outside the US, and the moment of retiring. The pilot moves to part 3. After the first reviews: the sheet asks for the bank or firm, whose name a bank account is in, which company a holding is, a match in two steps and the tax rate and bond payouts, and a fund's yearly cost is optional; the slips of the new questions (two banks, a joint account, a bill already in savings, a match in steps, a switch inside a 401(k), where to sell)." },
    { rev: 9, date: "2026-10-22",
      change: "Lessons 7 to 12 built, so the subject is complete: the slips, lists and topics of the mix and its drift, a loss you could not pay, accounts outside the US, beneficiary pages and papers, the spending rate and the whole yearly check; the values looked up for the spending rate, the estate tax line and the yearly gift exclusion; the spending rate is held against the value looked up for this year, not a fixed 4% on the sheet." }
  ],
  endResult: "Run a planner's yearly check on your own US accounts: list everything, see what money you need soon is exposed and what single loss could ruin you, find the certain leaks (yearly costs in dollars, a missed match, tax in the wrong place, foreign filings) and the risks you did not choose (one big bet, a drifted mix), check who inherits and who can act, and change only what the check calls for.",
  parts: [
    { id: "1", title: "Your list, and what could lose it" },
    { id: "2", title: "Money you need soon" },
    { id: "3", title: "What it costs a year, in dollars" },
    { id: "4", title: "The full match, then the order of saving" },
    { id: "5", title: "Taxes: where each fund sits, sell or wait, a loss used" },
    { id: "6", title: "Your biggest single bet" },
    { id: "7", title: "Mix and drift, and your own hands" },
    { id: "8", title: "A loss you could not pay" },
    { id: "9", title: "Foreign holdings under US rules" },
    { id: "10", title: "Who inherits, and who can act" },
    { id: "11", title: "The spending rate" },
    { id: "12", title: "The whole check, done and repeated" }
  ],
  units: [
    { id: "a", title: "See it all", parts: ["1", "2"] },
    { id: "b", title: "The certain leaks", parts: ["3", "4", "5"] },
    { id: "c", title: "Risks you did not choose", parts: ["6", "7", "8"] },
    { id: "d", title: "US rules, handover, the long run", parts: ["9", "10", "11", "12"] }
  ],
  lists: {
    call: [{ id: "change", text: "Change it" }, { id: "leave", text: "Leave it" }],
    guard: [
      { id: "fdic", text: "FDIC, if the bank fails" }, { id: "sipc", text: "SIPC, if the brokerage firm fails" }, { id: "none", text: "Neither" }
    ],
    payer: [{ id: "nobody", text: "Nobody" }, { id: "sipc", text: "SIPC" }, { id: "fdic", text: "FDIC" }],
    cash: [
      { id: "short", text: "Too little cash: build it up" }, { id: "stocks", text: "Move the bill’s money out of stocks" },
      { id: "idle", text: "More cash than it needs: invest the rest" }, { id: "fine", text: "Enough, in the right place: leave it" }
    ],
    yesno: [{ id: "yes", text: "Yes" }, { id: "no", text: "No" }],
    todo: [{ id: "change", text: "Book a preparer who works on both sides of the border" }, { id: "leave", text: "Nothing is due or flagged: leave it" }],
    risk: [{ id: "keep", text: "Keep it: pay it yourself if it comes" }, { id: "pass", text: "Pass it on: insurance, or an LLC for a rental or a business" },
      { id: "avoid", text: "Avoid it: do not take it on, or take less" }],
    fixPage: [{ id: "change", text: "Fix it" }, { id: "leave", text: "Leave it" }],
    billKept: [{ id: "cash", text: "In savings or another bank account" }, { id: "stocks", text: "In stocks or a stock fund" }, { id: "none", text: "Not put aside yet" }],
    ownership: [{ id: "me", text: "In my name alone" }, { id: "joint", text: "Joint, with one other person" }, { id: "other", text: "Another way (a trust, a business, payable on death)" }],
    slip: [
      // reading the papers and adding them up (lesson 1)
      { id: "left-out-account", text: "left an account out of the total" },
      { id: "insured-fall", text: "took FDIC or SIPC for cover against a fall in prices" },
      { id: "wrong-cover", text: "named the wrong cover for what happened" },
      { id: "per-account-limit", text: "checked each account against the limit instead of everything at one bank" },
      { id: "moved-covered", text: "moved money that was already covered" },
      { id: "banks-added", text: "added two banks together against one FDIC limit" },
      { id: "owners-added", text: "added a joint account to accounts in one name against one limit" },
      { id: "fix-into-stocks", text: "moved money that needs a bank’s cover into something that can fall" },
      // money needed soon (lesson 2)
      { id: "one-account", text: "counted one account’s cash, not all of it" },
      { id: "bill-counted", text: "counted a bill’s money as months of spending" },
      { id: "nerve-not-room", text: "left money for a bill due soon in stocks" },
      { id: "short-missed", text: "left a cash buffer under three months as it was" },
      { id: "idle-missed", text: "left far more cash than the buffer and the bills need" },
      { id: "moved-fine", text: "changed cash that was already enough and in the right place" },
      // what it costs (lesson 3)
      { id: "percent-as-dollars", text: "used each percent as if it were dollars, without dividing by 100" },
      { id: "left-out-fee", text: "left the plan's own fee out of the total" },
      { id: "top-rate-on-all", text: "used the costly fund's yearly cost on everything in the account" },
      { id: "wrong-row", text: "read the yearly cost of a different fund" },
      { id: "churned", text: "changed a fund that was already the cheapest of its kind" },
      { id: "overpaid", text: "left a fund that costs more than another of its kind on the same list" },
      { id: "wrong-kind", text: "switched to a fund of a different kind because it costs less" },
      // the match and the order of saving (lesson 4)
      { id: "share-as-rate", text: "took the share the employer adds for the rate you must put in" },
      { id: "dollars-as-rate", text: "took the dollars on the pay stub for the share of pay" },
      { id: "first-step-only", text: "stopped at the first step of a match in steps" },
      { id: "whole-match", text: "counted the whole match instead of the part left" },
      { id: "match-missed", text: "left a rate under the match as it was" },
      { id: "raised-for-nothing", text: "raised a rate that already takes the whole match" },
      // taxes (lesson 5)
      { id: "same-mix-each", text: "kept the same mix in every account instead of placing bonds where they are not taxed each year" },
      { id: "moved-placed", text: "moved a fund that already sits in the right place" },
      { id: "payout-as-tax", text: "took the payout itself for the tax on it" },
      { id: "gain-rate-wrong", text: "taxed a gain held over a year at the rate on interest" },
      { id: "waited-costly", text: "waited when the dearer fund costs more than the tax saved" },
      { id: "year-not-months", text: "counted a whole year of the fee gap, not the months of waiting" },
      { id: "gain-as-base", text: "took the fee gap on the gain, not on the fund’s value" },
      { id: "swapped-nothing", text: "swapped when the retirement account held no stocks to swap" },
      { id: "sold-short-term", text: "sold a gain a month or two short of a year" },
      { id: "waited-in-plan", text: "waited to switch inside a 401(k), where a switch is not taxed" },
      { id: "wash-missed", text: "used a loss after buying the same fund back within 30 days" },
      { id: "loss-dropped", text: "threw away a loss that does count" },
      // one big bet (lesson 6)
      { id: "one-account-share", text: "counted one company in one account, not across all of them" },
      { id: "fund-as-one-bet", text: "counted a fund of hundreds of companies as one bet" },
      { id: "bet-missed", text: "left one company over 10% of everything as it was" },
      { id: "sold-small-bet", text: "sold a holding that was under 10% of everything" },
      { id: "sold-taxed-first", text: "sold the shares that are taxed before the ones in the 401(k)" },
      // the mix and your own hands (lesson 7)
      { id: "bank-in-mix", text: "counted the bank's cash buffer in the mix" },
      { id: "one-account-mix", text: "worked out the mix of one account, not of all of them" },
      { id: "drift-missed", text: "left a mix 5 or more points off as it was" },
      { id: "traded-in-band", text: "traded when the mix was less than 5 points off" },
      { id: "wrong-way", text: "moved money toward the side that was already over" },
      { id: "sold-on-news", text: "sold or traded because of news of a fall" },
      { id: "target-traded", text: "traded on top of a fund that keeps its own mix" },
      // a loss you could not pay (lesson 8)
      { id: "insured-small", text: "paid to escape a small loss you could pay yourself" },
      { id: "kept-ruinous", text: "kept a loss you could not pay" },
      { id: "avoided-insurable", text: "gave up something an insurer would carry for a price" },
      { id: "no-insurer", text: "looked for someone to carry a loss no insurer carries" },
      { id: "counted-shielded", text: "counted a 401(k) as something a claim could reach" },
      { id: "owed-left-out", text: "counted the home without taking off what is owed on it" },
      { id: "umbrella-missed", text: "left the umbrella policy out of the cover" },
      { id: "cover-missed", text: "left a claim bigger than the cover as it was" },
      { id: "wrong-policy", text: "used the limit of a policy the claim does not fall under" },
      // accounts outside the US (lesson 9)
      { id: "year-end-used", text: "added the December 31 balances where the FBAR counts the highest" },
      { id: "fbar-missed", text: "missed an FBAR that was due" },
      { id: "fbar-extra", text: "called for an FBAR when the accounts stayed under the line" },
      { id: "8938-missed", text: "missed a Form 8938 that was due" },
      { id: "8938-extra", text: "called for Form 8938 when the totals stayed under its lines" },
      { id: "rrsp-flagged", text: "flagged an RRSP, whose US tax waits by itself" },
      { id: "tfsa-missed", text: "left a TFSA unflagged" },
      { id: "fund-missed", text: "left a Canadian fund outside an RRSP unflagged" },
      { id: "flagged-plain", text: "flagged a plain bank account that only counts in the totals" },
      // who inherits, and who can act (lesson 10)
      { id: "will-trusted", text: "took the will over the beneficiary page" },
      { id: "page-missed", text: "left a stale or empty beneficiary page as it was" },
      { id: "fixed-sound", text: "changed a page or a paper that was already right" },
      { id: "paper-missed", text: "left a missing will or power of attorney as it was" },
      { id: "estate-tax-feared", text: "planned for estate tax far under its line" },
      { id: "estate-missed", text: "left an estate over the tax line without a lawyer" },
      // the spending rate (lesson 11)
      { id: "income-left-out", text: "left out the income that keeps coming" },
      { id: "tax-left-out", text: "left out the tax on what comes out of a 401(k) or IRA" },
      { id: "bank-in-pot", text: "counted the bank's cash buffer in the accounts drawn from" },
      { id: "rate-missed", text: "left a spending rate over the estimate as it was" },
      { id: "cut-needlessly", text: "cut a spending rate already under the estimate" },
      { id: "prices-left-out", text: "kept next year's amount the same instead of raising it for prices" },
      { id: "drew-more", text: "took more from the accounts right after a fall" },
      // the whole yearly check (lesson 12)
      { id: "missed-flag", text: "left a line its rule calls to change" },
      { id: "changed-sound", text: "changed a line its rule leaves alone" }
    ],
    accountType: [
      { id: "401k", text: "401(k) from a job" }, { id: "ira", text: "IRA" }, { id: "roth", text: "Roth IRA" }, { id: "hsa", text: "HSA" },
      { id: "brokerage", text: "Brokerage account" }, { id: "bank", text: "Bank account" },
      { id: "rrsp", text: "RRSP or RRIF (Canada)" }, { id: "tfsa", text: "TFSA (Canada)" }, { id: "foreign", text: "Other account outside the US" }
    ],
    kind: [
      { id: "us-stocks", text: "US stocks" }, { id: "intl-stocks", text: "Stocks outside the US" }, { id: "bonds", text: "Bonds" }, { id: "cash", text: "Cash" },
      { id: "target", text: "A fund that mixes by your age" }, { id: "one-company", text: "One company's stock" }, { id: "other", text: "Something else" }
    ],
    trigger: [
      { id: "job", text: "I started a job in the US" }, { id: "account", text: "I opened an account" }, { id: "statement", text: "My yearly statement came" },
      { id: "retire", text: "I will stop working within a year" }
    ]
  },
  facets: {
    call: { name: "What the account needs", values: [{ id: "change", text: "accounts to change" }, { id: "leave", text: "accounts to leave alone" }] }
  },
  mix: [{ facet: "call", value: "leave", min: 1 }],
  strands: [
    { id: "list", title: "The whole list, and what protects it" },
    { id: "cash", title: "Cash against spending and bills" },
    { id: "cost", title: "What an account costs a year" },
    { id: "match", title: "The full match" },
    { id: "order", title: "The order of saving" },
    { id: "tax", title: "Taxes on where, when and a loss" },
    { id: "share", title: "One company across all accounts" },
    { id: "mix", title: "The mix against the one you chose" },
    { id: "risk", title: "Keep a loss, pass it on, or avoid it" },
    { id: "cover", title: "What a claim could reach, against the cover" },
    { id: "foreign", title: "Accounts outside the US" },
    { id: "heirs", title: "Beneficiary pages and papers" },
    { id: "rate", title: "The spending rate" },
    { id: "year", title: "The whole yearly check" }
  ],
  readingShare: 0.2,
  refs: [
    { id: "fdic", text: "FDIC insurance, per person, per kind of ownership, at each insured bank", value: "$250,000", asOf: "2026-10-22", source: "FDIC, Understanding Deposit Insurance (fdic.gov)" },
    { id: "sipc", text: "SIPC protection when a brokerage firm fails, for each customer in each capacity (alone, joint, an IRA), and of it the most for cash alone; never a fall in prices", value: "$500,000; $250,000", asOf: "2026-10-22", source: "SIPC, What SIPC Protects (sipc.org)" },
    { id: "limit401k", text: "The most you may put into a 401(k) yourself in 2026, under age 50 (the employer’s match is on top)", value: "$24,500", asOf: "2026-10-22", source: "IRS news release IR-2025-111 (irs.gov)" },
    { id: "limitIra", text: "The most you may put into IRAs in 2026, under age 50", value: "$7,500", asOf: "2026-10-22", source: "IRS news release IR-2025-111 (irs.gov)" },
    { id: "limitHsa", text: "The most that may go into an HSA in 2026: self-only cover; family cover", value: "$4,400; $8,750", asOf: "2026-10-22", source: "IRS Publication 969 (irs.gov)" },
    { id: "lossLimit", text: "The most a year’s net loss on sales may cut from your other income (half for married filing separately)", value: "$3,000", asOf: "2026-10-22", source: "IRS Publication 550 and Tax Topic 409 (irs.gov)" },
    { id: "fbar", text: "Accounts outside the US that together go over this at any time in the year need a report of foreign accounts (FBAR)", value: "$10,000", asOf: "2026-10-22", source: "IRS, Report of Foreign Bank and Financial Accounts (irs.gov)" },
    { id: "form8938", text: "Form 8938, living in the US. Filing alone: over the first on December 31, or over the second at any time in the year. Married filing jointly: over the third on December 31, or over the fourth at any time", value: "$50,000; $75,000; $100,000; $150,000", asOf: "2026-10-22", source: "IRS, Comparison of Form 8938 and FBAR Requirements (irs.gov)" },
    { id: "safeRate", text: "The highest starting spending rate, raised each year for prices, that would last 30 years in 90 of 100 simulated futures for a balanced mix, for someone retiring in 2026 (taxes come out of it)", value: "3.9%", asOf: "2026-10-22", source: "Morningstar, The State of Retirement Income, December 2025 (morningstar.com)" },
    { id: "estateTax", text: "Federal estate tax: an estate over this needs a return, in 2026", value: "$15,000,000", asOf: "2026-10-22", source: "IRS, Estate Tax (irs.gov)" },
    { id: "gift", text: "Gifts to one person in a year up to this much are not taxable gifts, in 2026", value: "$19,000", asOf: "2026-10-22", source: "IRS, Frequently asked questions on gift taxes (irs.gov)" }
  ],
  own: {
    sheet: {
      into: "sheet",
      fields: [
        { id: "type", label: "Kind of account", type: "choose", list: "accountType" },
        { id: "name", label: "A name you will know it by", type: "text", optional: true },
        { id: "institution", label: "The bank or firm that holds it", type: "text", hint: "Type it the same way for each account there", for: ["bank", "brokerage"] },
        { id: "owner", label: "Whose name it is in", type: "choose", list: "ownership", for: ["bank", "brokerage"] },
        { id: "balance", label: "What is in it", type: "number", unit: "dollars" },
        { id: "fees", label: "Fees the plan takes from it", type: "number", unit: "dollars a year", optional: true },
        { id: "highest", label: "The highest it was this year", type: "number", unit: "dollars", optional: true, for: ["rrsp", "tfsa", "foreign"] }
      ],
      rows: {
        id: "holdings", label: "Funds",
        fields: [
          { id: "name", label: "Name of the fund", type: "text" },
          { id: "value", label: "What you hold in it", type: "number", unit: "dollars" },
          { id: "expense", label: "Its yearly cost (the expense ratio on your fee sheet)", type: "number", unit: "percent", optional: true,
            warn: { over: 2, text: "A yearly cost over 2% is very high for a fund. Check the number on your fee sheet." } },
          { id: "kind", label: "What it holds", type: "choose", list: "kind", optional: true },
          { id: "company", label: "If it is one company’s stock: which company", type: "text", optional: true }
        ]
      },
      groups: [
        { id: "spending", label: "What you spend", how: "Your rent or mortgage, food, bills and the rest: a usual month. Count a yearly bill, such as insurance, as a twelfth of it.",
          fields: [{ id: "monthly", label: "What you spend in a month", type: "number", unit: "dollars" }] },
        { id: "bills", label: "Big bills you know are coming", many: true, how: "A home down payment, a car, school. Leave it blank if there are none.",
          fields: [
            { id: "what", label: "What for", type: "text" },
            { id: "amount", label: "How much", type: "number", unit: "dollars" },
            { id: "year", label: "The year it is due", type: "number", warn: { under: 2000, text: "Type the year as four digits, like 2029." } },
            { id: "kept", label: "Where its money is now", type: "choose", list: "billKept" }] },
        { id: "match", label: "Your employer’s match", optional: true, how: "The match rule is in your plan’s summary, not on the pay stub. If your stub shows dollars, what goes in each paycheck ÷ your gross pay that paycheck × 100 is your percent. Leave it blank if there is no match.",
          fields: [
            { id: "pay", label: "Your yearly pay", type: "number", unit: "dollars" },
            { id: "mine", label: "What you put in", type: "number", unit: "percent of pay" },
            { id: "share", label: "What the employer adds for each dollar you put in", type: "number", unit: "cents" },
            { id: "upTo", label: "On what you put in, up to", type: "number", unit: "percent of pay" },
            { id: "share2", label: "A second step, if the rule has one: cents for each dollar", type: "number", unit: "cents", optional: true },
            { id: "next", label: "The second step covers the next", type: "number", unit: "percent of pay", optional: true }],
          together: [["share2", "next"]] },
        { id: "tax", label: "Your tax rate", optional: true, how: "Your top federal tax bracket, from last year’s return or a tax table, and what your bond funds in a brokerage account paid out last year (on the brokerage’s Form 1099).",
          fields: [
            { id: "rate", label: "Your top tax bracket", type: "number", unit: "percent" },
            { id: "bondIncome", label: "What bond funds in a brokerage account paid out last year", type: "number", unit: "dollars", optional: true }] },
        { id: "cover", label: "Your insurance limits", optional: true, how: "The liability limits on the first page of each policy.",
          fields: [
            { id: "auto", label: "Car insurance, liability limit", type: "number", unit: "dollars", optional: true },
            { id: "home", label: "Home or renter’s insurance, liability limit", type: "number", unit: "dollars", optional: true },
            { id: "umbrella", label: "Umbrella policy", type: "number", unit: "dollars", optional: true },
            { id: "other", label: "What else you own, less what you owe", type: "number", unit: "dollars", optional: true }] },
        { id: "mix", label: "The mix you chose", how: "The share of your funds you want in stocks. The rest goes in bonds and cash.",
          fields: [{ id: "stocks", label: "In stocks", type: "number", unit: "percent" }] },
        { id: "retire", label: "Income after you stop working", optional: true, how: "Social Security, a pension: what keeps coming each year. And the tax you expect to pay on what you take out of a 401(k) or an IRA (a preparer can estimate it).",
          fields: [{ id: "income", label: "Income each year", type: "number", unit: "dollars" },
            { id: "tax", label: "Tax on what you take out, a year", type: "number", unit: "dollars", optional: true }] }
      ],
      limits: { bufferMonths: 3, idleMonths: 6, soonYears: 5, oneBet: 10, band: 5 }
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
