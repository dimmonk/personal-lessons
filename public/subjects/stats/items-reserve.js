// Stats, lesson 1 "What it claims, and the number it rests on": three questions held in reserve. No lesson names them; the weekly review asks one of them
// when the topic comes back, so the learner meets a question they have not seen. One of each answer. Invented outlets and products.
FC.items("stats", [
  statsStanding({
    id: "r-solar", strand: "claim-number", fit: "outruns", claim: ["Brightwater panels pay for themselves in 5 years", [["Brightwater panels pay for themselves in 5 years in a home that uses twice the usual electricity", "mixed-who"], ["Brightwater customers save $2,400 a year", "mixed-claim"]]], line: "s1",
    blocks: [{ kind: "article", form: "ad", source: "Brightwater Solar",
      headline: statsLine("h", "Solar panels that pay for themselves in 5 years."),
      lines: [
        statsLine("s1", "A typical Brightwater home saves $2,400 a year on electric bills."),
        statsLine("s2", "Free quote in 24 hours.", { note: "That is how fast a quote comes, not a saving." }),
        statsLine("f1", "Based on a home that uses twice the electricity of the typical home in our area, with a one-time rebate that ended in March.", { fine: true })] }],
    deciding: ["h", "s1", "f1"],
    reason: ["The headline says the panels will pay for themselves in 5 years. The small print says the $2,400 comes from a home that uses twice the typical electricity and a rebate that has ended, so it does not describe a typical home today."],
    need: "You would need the savings and the price for a home that uses the usual amount of electricity, with no rebate that has ended."
  }),
  statsStanding({
    id: "r-stopsign", strand: "claim-number", fit: "holds", claim: ["More than half of Maple Street’s households asked for a stop sign", [["Most households in the city want a stop sign", "mixed-who"], ["A stop sign will make Maple Street safer", "mixed-claim"]]], line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · Neighbors",
      headline: statsLine("h", "Most Maple Street households want a stop sign, petition shows"),
      lines: [
        statsLine("s1", "A petition asking the city for a stop sign at Maple and 4th has been signed by 87 of the 112 households on the street, organizers said."),
        statsLine("s2", "The city traffic office has the petition and will review it next month.", { para: true, note: "That is what happens next, not a count of households." })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says “most” households on Maple Street want the sign. The petition was signed by 87 of the 112 households on the street, which is more than half, and the headline claims only about the households on that street."],
    need: "The count covers Maple Street. For the whole city you would need the counts from the other streets."
  }),
  statsStanding({
    id: "r-debt", strand: "claim-number", fit: "unclear", claim: ["Credit card debt is higher than it has ever been", [["High prices make credit card debt reach a record level", "heard-cause"], ["Most households carry credit card debt", "mixed-claim"]]], line: null,
    blocks: [{ kind: "article", form: "report", source: "Consumer Finance Council · Summary",
      headline: statsLine("h", "Credit card debt reaches record level, report says"),
      lines: [
        statsLine("s1", "Households are carrying more credit card debt than at any time on record, the council said, as prices stay high."),
        statsLine("s2", "The full figures will be released at the council’s annual meeting.", { para: true })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says the debt is at a record, and the summary says the same in words, but it gives no amount and no year to compare with. The figures come later, so from this text you cannot tell."],
    need: "You would need the amount of debt now and the amount in the year before, from the council’s figures."
  })
]);
