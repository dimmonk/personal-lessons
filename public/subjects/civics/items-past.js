// Civics, lesson 13: 1877 to 1900 (part 13). Decisions of today that rest on a law, a ruling or an event of 1877 to 1900, read the historian's way
// (docs/research/civics.md C11, C12): find the line that names the older thing the decision rests on (where the claim comes from), among other lines
// that name other dates and laws, then say what led to that older thing: its cause came before it and is about the same thing. The first story is real:
// the Supreme Court's ruling of June 30, 2026, which rested on United States v. Wong Kim Ark (1898) (C16). The others are invented news (a made-up
// town, office or group; no real event of today), and every fact of the past in them is from M-1778 or the research note (C16, C17, C23, C24). One is
// worked, four are practice, five are the check, and three are kept for the review.
(() => {
  const TAP = "Tap the line that names the older law, ruling or event that today’s decision rests on.";
  const CAUSE = "What led to that older law, ruling or event?";
  const OTHER = "The decision does not rest on this line.";
  const LATER = "out-of-time";
  // spec: { id, src, head, lines: [Text], key (the line naming what the decision rests on), options: [{ id, text, ok? | then, slip? }], why, fact?, steps? }
  const story = s => ({
    id: s.id, strand: "past", facets: {},
    blocks: [{ kind: "article", form: "news", id: "story", source: s.src, headline: { id: "head", text: s.head },
      lines: s.lines.map((text, i) => ({ id: "l" + (i + 1), text, ...(i + 1 === s.key ? {} : { note: OTHER }) })) }],
    asks: [{ id: "line", kind: "tap", prompt: TAP, in: "story", right: ["l" + s.key] },
      { id: "cause", kind: "choose", prompt: CAUSE, shuffle: true, options: s.options }],
    deciding: ["l" + s.key], reason: s.why, ...(s.fact ? { fact: s.fact } : {}), ...(s.steps ? { steps: s.steps } : {})
  });
  // causes worded once, each with the line said when it is picked for a story it did not lead to
  const EXCLUSION = { id: "exclusion", text: "The Chinese Exclusion Act, under which a man born here was held as no citizen" };
  const LOUISIANA_LAW = { id: "law1890", text: "A Louisiana law that kept Black and white train riders apart" };
  const POLL = { id: "polltax", text: "Poll taxes some southern states used after the Civil War" };
  const LITERACY = { id: "literacy", text: "Reading tests some southern states gave voters after the Civil War" };
  const MAINE = { id: "maine", text: "The sinking of the battleship Maine, after years of Cuban fighting against Spain" };
  const LABOULAYE = { id: "gift", text: "A French idea to honor the Union’s win and the end of slavery" };
  const RESENT = { id: "resent", text: "Other workers’ fear for their jobs, and anti-Chinese pressure from the West" };
  const BROWN = { id: "brown", text: "Brown v. Board of Education and the civil rights acts", slip: LATER };
  const TWENTYSIXTH = { id: "twentysixth", text: "The 26th Amendment, which let citizens 18 and older vote", slip: LATER };
  const SUMTER = { id: "sumter", text: "The shots fired at Fort Sumter" };
  const PROCLAMATION = { id: "proclamation", text: "The Emancipation Proclamation of Lincoln" };
  const COLONY_TAX = { id: "colonies", text: "Taxes Britain laid on colonies that had no vote in Parliament" };
  const NINETEENTH = { id: "nineteenth", text: "The 19th Amendment, which gave women the vote" };
  const PURCHASE = { id: "purchase", text: "The Louisiana Purchase, bought from France" };
  const wrong = (o, then, later) => ({ ...o, then, ...(later ? { slip: LATER } : {}) });
  const right = o => ({ ...o, ok: true });
  FC.items("civics", [
    // worked: the real 2026 ruling
    story({ id: "past-citizens", src: "The Capital Sun", head: "Court strikes down order on citizenship at birth", key: 3, fact: "q97",
      lines: ["On June 30, the Supreme Court struck down an order of the president about who is a citizen at birth.",
        "The order said some children born here would not be citizens if their parents were here for a short time or without permission.",
        "The court said the 14th Amendment makes those children citizens, as the court had said in 1898, in United States v. Wong Kim Ark.",
        "The court said that holds for nearly all children born in the United States."],
      options: [right(EXCLUSION),
        wrong(LITERACY, "Reading tests were about who could vote. The 1898 ruling was about who is a citizen at birth."),
        wrong(PROCLAMATION, "That freed slaves in 1863. The 1898 ruling was about a son of Chinese parents held under the Chinese Exclusion Act."),
        wrong(BROWN, "Those came in the 1950s and 1960s, long after 1898, so they could not have led to the ruling.")],
      why: "The ruling rests on an 1898 one. In it, a man born here to Chinese parents living here was held by the government under the Chinese Exclusion Act, and the court said he was a citizen.",
      steps: [{ id: "find", does: "Find what the decision rests on", working: "One sentence says the court ruled “as the court had said in 1898”: the older ruling, United States v. Wong Kim Ark.", ask: "line" },
        { id: "time", does: "Put it in its time", working: "1898 is after the 14th Amendment of 1868, and after the Chinese Exclusion Act of 1882.", ask: "cause" },
        { id: "cause", does: "Name what led to it, on the same subject", working: "The subject is citizenship at birth. The government held Wong Kim Ark under the Chinese Exclusion Act and said he was not a citizen; the court said the 14th Amendment made him one." }] }),
    // practice
    story({ id: "past-fee", src: "The Lakeview Times", head: "County drops plan for a voting fee", key: 3, fact: "q63",
      lines: ["The county board had planned a $5 fee for each voter, to pay off the voting machines it bought in 2019 under a state law.",
        "Two board members said the fee was fair.",
        "The county’s lawyer then said that since a 1966 Supreme Court ruling, no state or county may charge a fee to vote.",
        "On Tuesday the board dropped the plan, as its county charter lets it."],
      options: [right(POLL),
        wrong(COLONY_TAX, "Those were taxes on goods before independence, not a price to vote. The 1966 ruling answered poll taxes in American states."),
        wrong(LITERACY, "Those tests were about reading, not paying. The ruling was about a fee to vote."),
        wrong(TWENTYSIXTH, "That came in 1971, after 1966, so it could not have led to the ruling.")],
      why: "After the Civil War some southern states made voters pay a poll tax. The 24th Amendment ended it for federal elections in 1964, and a 1966 Supreme Court ruling ended it for state elections." }),
    story({ id: "past-course", src: "The Valley Courier", head: "State changes the history course", key: 2,
      lines: ["The state board of education voted on Thursday to change the high school history course.",
        "Students will now read the Supreme Court’s ruling in Plessy v. Ferguson.",
        "Board members said they were also glad to keep the course’s unit on the 2015 state budget law.",
        "Teachers will get new books in the fall."],
      options: [right(LOUISIANA_LAW),
        wrong(BROWN, "Those ended segregation under state law in the 1950s and 1960s, long after 1896, so they could not have led to the ruling."),
        wrong(EXCLUSION, "That was about Chinese workers and citizenship. Plessy was about a law on train cars."),
        wrong(PROCLAMATION, "That freed slaves in 1863. Plessy was about a Louisiana law of 1890 on train cars.")],
      why: "In 1896, in Plessy v. Ferguson, the Supreme Court upheld a Louisiana law of 1890 that made railroads keep Black and white passengers in separate cars." }),
    story({ id: "past-memorial", src: "The Harbor Gazette", head: "Town will restore an old memorial", key: 4, fact: "q91",
      lines: ["The town council voted on Monday to pay for repairs to the stone memorial in Veterans Park.",
        "The park itself was named in 1931 for a mayor who served under the town charter of 1902.",
        "Work will start in May.",
        "The memorial honors the town’s soldiers in the Spanish-American War."],
      options: [right(MAINE),
        wrong(SUMTER, "Those shots started the Civil War, in 1861. The war with Spain came in 1898, over Cuba."),
        wrong(EXCLUSION, "That was a law about Chinese workers, not a war."),
        wrong({ id: "mexico", text: "The Mexican-American War" }, "That war ended in 1848. The war of 1898 was against Spain, over Cuba.")],
      why: "Cubans had fought Spanish rule for three years. After the U.S. battleship Maine exploded and sank in Havana harbor in February 1898, the United States went to war with Spain." }),
    story({ id: "past-passport", src: "The Metro Post", head: "Passport office approves a baby’s passport", key: 3, fact: "q97",
      lines: ["The passport office approved a passport on Monday for a baby born in Ohio to parents visiting from abroad.",
        "The office, set up under a 1998 travel law, handles about 300 passports a day.",
        "Its letter relied on the 14th Amendment as the Supreme Court read it in United States v. Wong Kim Ark.",
        "The parents’ visit is allowed under a 2015 visitor law."],
      options: [right(EXCLUSION),
        wrong(LOUISIANA_LAW, "That law was about train cars, not citizenship."),
        wrong(POLL, "Poll taxes were about who could vote, not who is a citizen at birth."),
        wrong(BROWN, "Those came in the 1950s and 1960s, long after 1898, so they could not have led to the ruling.")],
      why: "Wong Kim Ark, born here to Chinese parents living here, was held under the Chinese Exclusion Act as no citizen. In 1898 the court said the 14th Amendment made him one." }),
    // check
    story({ id: "past-judge", src: "The Capital Sun", head: "Judge orders passport for man born here", key: 2, fact: "q97",
      lines: ["A federal judge ordered the passport office to give a passport to a man born here while his parents were visiting.",
        "The judge followed United States v. Wong Kim Ark, an 1898 ruling.",
        "The office had said its 2019 rule, written under a travel law, let it ask for more papers.",
        "The man said he will now apply for a job in the city."],
      options: [right(EXCLUSION),
        wrong(PROCLAMATION, "That freed slaves in 1863. The 1898 ruling was about a son of Chinese parents held under the Chinese Exclusion Act."),
        wrong(NINETEENTH, "That came in 1920, after 1898, and it was about voting.", true),
        wrong(POLL, "Poll taxes were about who could vote, not who is a citizen at birth.")],
      why: "The government held Wong Kim Ark under the Chinese Exclusion Act and said he was not a citizen. In 1898 the court said the 14th Amendment made him one." }),
    story({ id: "past-apology", src: "The Lakeview Times", head: "City apologizes to Chinese American families", key: 3,
      lines: ["The city council voted on Tuesday to make a formal apology to the city’s Chinese American families.",
        "A park in the old Chinese neighborhood was rebuilt in 2010 with money from a state law.",
        "The apology is for the Chinese Exclusion Act, which Congress passed in 1882.",
        "A plaque will go up in the park in June, paid for under a city law."],
      options: [right(RESENT),
        wrong(MAINE, "That was 1898, after 1882, so it could not have led to the act.", true),
        wrong(POLL, "Poll taxes were about voting. The 1882 act was about Chinese workers coming here."),
        wrong(PROCLAMATION, "That freed slaves in 1863. The 1882 act was about Chinese workers coming here.")],
      why: "The 1882 act banned Chinese laborers from coming for ten years. Before it, other workers came to resent Chinese laborers who might take their jobs, and politicians from the West pressed for exclusion." }),
    story({ id: "past-quiz", src: "The Valley Courier", head: "County drops a quiz for new voters", key: 3,
      lines: ["The county election office threw out a plan to quiz new voters on the state constitution.",
        "The plan came from a board member elected in 2022 under the new county charter.",
        "The office’s lawyer said the Voting Rights Act forbids such tests.",
        "The board meets again next month, as the county charter says."],
      options: [right(LITERACY),
        wrong(NINETEENTH, "That gave women the vote in 1920. It did not lead to a law against reading tests."),
        wrong(EXCLUSION, "That was about Chinese workers and citizenship, not tests for voters."),
        wrong(TWENTYSIXTH, "That came in 1971, after the Voting Rights Act of 1965, so it could not have led to it.")],
      why: "The Voting Rights Act of 1965 outlawed the reading tests some southern states gave voters after the Civil War, which kept many Black citizens from voting." }),
    story({ id: "past-museum", src: "The Harbor Gazette", head: "Rail museum plans a new display", key: 1,
      lines: ["The rail museum decided to put a display about Plessy v. Ferguson beside its oldest passenger car.",
        "Volunteers will build the display this winter.",
        "The museum’s newest car was built in 1951 under a wartime law.",
        "Entry stays free for children."],
      options: [right(LOUISIANA_LAW),
        wrong(BROWN, "Those came in the 1950s and 1960s, long after 1896, so they could not have led to the ruling."),
        wrong(EXCLUSION, "That was about Chinese workers, not train cars."),
        wrong(NINETEENTH, "That came in 1920, after 1896, and it was about voting.", true)],
      why: "Plessy v. Ferguson, in 1896, upheld a Louisiana law of 1890 that made railroads keep Black and white passengers in separate cars." }),
    story({ id: "past-lights", src: "The Metro Post", head: "Statue of Liberty to be lit for its birthday", key: 2, fact: "q120",
      lines: ["On October 28, the Statue of Liberty will be lit in blue, white and red.",
        "The park service said the lights mark the day the statue was dedicated, in 1886.",
        "The lights were last replaced in 2011, after a 2009 park law.",
        "Ferries will run late that night."],
      options: [right(LABOULAYE),
        wrong(PURCHASE, "That was a purchase of land from France in 1803, not a gift. The statue was a French gift of the 1880s."),
        wrong(EXCLUSION, "That law kept Chinese workers out; it did not lead to the statue."),
        wrong(BROWN, "Those came in the 1950s and 1960s, long after 1886.")],
      why: "A Frenchman, Edouard de Laboulaye, proposed the statue as a gift from France, to honor the Union’s victory in the Civil War and the end of slavery. It was dedicated in 1886." }),
    // kept for the review
    story({ id: "past-marker", src: "The Lakeview Times", head: "Historical group rebuilds a marker", key: 2, fact: "q91",
      lines: ["The county historical group decided to rebuild a marker by the harbor.",
        "It names the county’s sailors who served in the war with Spain in 1898.",
        "The old marker, put up under a 1925 county law, fell in a storm in 1975.",
        "The new one will be ready by summer."],
      options: [right(MAINE),
        wrong(SUMTER, "Those shots started the Civil War, in 1861. The war with Spain came in 1898, over Cuba."),
        wrong(RESENT, "That led to the Chinese Exclusion Act, not to a war."),
        wrong(BROWN, "Those came in the 1950s and 1960s, long after 1898.")],
      why: "After the U.S. battleship Maine sank in Havana harbor in February 1898, during years of Cuban fighting against Spain, the United States went to war with Spain." }),
    story({ id: "past-library", src: "The Valley Courier", head: "Library buys old family letters", key: 4,
      lines: ["The library board opened a new reading room in 2018 with money from a city bond.",
        "On Wednesday the board voted to buy a box of family letters.",
        "The letters will be shown in the spring.",
        "The board bought them because they tell how one family lived under the Chinese Exclusion Act."],
      options: [right(RESENT),
        wrong(LITERACY, "Reading tests were about voting. The act was about Chinese workers coming here."),
        wrong(MAINE, "That was 1898, after the act of 1882, so it could not have led to it.", true),
        wrong(SUMTER, "Those shots started the Civil War in 1861; they did not lead to a law about Chinese workers.")],
      why: "The Chinese Exclusion Act of 1882 banned Chinese laborers for ten years. Other workers had come to resent them as rivals for jobs, and politicians from the West pressed for exclusion." }),
    story({ id: "past-statefee", src: "The Harbor Gazette", head: "State ends a fee at the polls", key: 1, fact: "q63",
      lines: ["The state election office said no voter may be charged to vote for president or Congress, under an amendment of 1964.",
        "A county had asked for a $2 fee at its polling places.",
        "The county’s polling places were rebuilt in 2020 under a state law.",
        "The county will drop the fee."],
      options: [right(POLL),
        wrong(COLONY_TAX, "Those were British taxes before independence, not a price to vote."),
        wrong(NINETEENTH, "That gave women the vote in 1920; it was not about paying to vote."),
        wrong(TWENTYSIXTH, "That came in 1971, after 1964, so it could not have led to the amendment.")],
      why: "After the Civil War some southern states made voters pay a poll tax. The 24th Amendment, in 1964, ended poll taxes in federal elections." })
  ]);
})();
