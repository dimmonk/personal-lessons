// Stats, lesson 3 "A risk, before and after": the worked example, the questions of the groups and the check. "Cuts your risk by half" is a change; the
// size is where the risk started and what it became, in so many in 1,000 over the time stated, and each size in the headline is checked against that:
// a share of the risk ("halves", "by a third") against the drop as a share, a number of people ("spares 1 in 1,000", "keeps half of patients") against
// how many fewer have it. The same words ("halves", "keeps ... from", "slashes") sit on claims that hold and on claims that do not; the numbers decide.
// Every claim that one thing makes another happen and holds rests on groups split by chance. Invented pills, programs and studies; each question's
// numbers are written once and its words and answers are made from them.
(() => {
  const BA = "from __ in 1,000 to __ in 1,000";
  const LP = "Tap the sentence that gives the number for how common it was without it.";
  const per = (count, group) => statsRate(count, group);
  // the typed before and after, and the slips: the starting number twice, the two numbers the wrong way round
  const traps = (before, after, extra = []) => [
    ...extra,
    { slip: "kept-before", value: [before, before], then: "That is the starting number twice. The second blank is the number after the change." },
    { slip: "swapped-order", value: [after, before] }
  ];
  const percentTrap = (before, cutPct) => ({ slip: "percent-as-people", value: [before, cutPct], then: `${cutPct}% is the size of the change, not the number of people. Take that share off ${before}.` });
  const story = s => statsSized({
    id: s.id, strand: "size-risk", fit: s.fit, line: s.line, linePrompt: LP, claim: s.claim,
    blocks: [{ kind: "article", form: s.form, source: s.source, ...(s.headline ? { headline: statsLine("h", s.headline) } : {}), lines: s.lines }],
    size: s.size ? { prompt: s.size.prompt, frame: BA, answer: [s.size.before, s.size.after], traps: traps(s.size.before, s.size.after, s.size.extra) } : null,
    deciding: s.deciding, reason: s.reason, need: s.need, ...(s.steps ? { steps: s.steps } : {}), ...(s.figure ? { figure: s.figure } : {})
  });
  const changeNote = "That is the change as a percent. It does not say how common it was to begin with.";
  const chance = "That says how the groups were split, not how many had it.";

  FC.items("stats", [
    // ----- the worked example: a pill that "spares half of patients" -----
    story({
      id: "w-stroke", fit: "outruns", form: "news", source: "Eastbay Courier · Health", line: "s2",
      headline: "New pill spares half of patients a stroke",
      claim: ["Zelvin keeps half of the people who take it from having a stroke", [["People who take Zelvin have fewer strokes", "heard-link"], ["Zelvin keeps half of the people who have had a stroke from having another", "mixed-who"]]],
      lines: [
        statsLine("s1", "In a five-year study where a coin toss decided who got Zelvin and who got a dummy pill, people on Zelvin had 50% fewer strokes, the Eastbay University team reported.", { note: changeNote }),
        statsLine("s2", "Without Zelvin, about 4 in every 1,000 people aged 50 to 60, like those in the study, have a stroke within five years."),
        statsLine("s3", "The pill is taken once a day.", { para: true })],
      size: { prompt: "Without Zelvin, then with it: how many in every 1,000 have a stroke within five years?", before: 4, after: 2, extra: [percentTrap(4, 50)] },
      steps: [
        { id: "claim", does: "Find what the headline claims.", working: "“Spares half of patients” says half of the people who take the pill are kept from a stroke.", ask: "claim" },
        { id: "line", does: "Find where the risk started.", working: "The second sentence: without the pill, about 4 in every 1,000 people have a stroke in five years.", ask: "line" },
        { id: "size", does: "Take the change off the starting number.", working: "50% fewer than 4 is 2. So from 4 in 1,000 to 2 in 1,000 over five years.", ask: "size" },
        { id: "verdict", does: "Check the headline’s size against that.", working: "The headline’s size is a number of people: half of them. The pill spares 2 people in every 1,000, not half. It halves a small risk, which is not the same as sparing half the people.", ask: "verdict" }],
      deciding: ["h", "s1", "s2"],
      reason: ["“Half” is the size of the change, 50%. The risk was 4 in every 1,000 people, and the pill brings it to 2 in 1,000 over five years, which spares 2 people in every 1,000, not half of the people who take it."],
      need: "You would need a headline that says what the study found: from 4 in 1,000 to 2 in 1,000 over five years.",
      figure: { kind: "figure", type: "people", data: { caption: "Strokes in five years, out of 1,000 people", rows: [{ label: "Without Zelvin", count: 4 }, { label: "With Zelvin", count: 2 }] } }
    }),

    // ----- the first group (the numbers marked): a share that fits, a share of people, a share the counts do not reach, and no starting number -----
    (() => {
      const g = 500, dummy = 150, spray = 100, before = per(dummy, g), after = per(spray, g);   // 300 and 200
      return story({
        id: "p-nasal", fit: "holds", form: "ad", source: "NasalCare Spray", line: "s2",
        headline: "NasalCare slashes winter colds by a third.",
        claim: ["NasalCare spray makes a winter cold a third less likely", [["People who use NasalCare spray caught fewer colds", "heard-link"], ["NasalCare spray makes a cold a third less likely for children too", "mixed-who"]]],
        lines: [
          statsLine("s1", "In a winter-long study of adults, a coin toss decided who got NasalCare and who got a plain saltwater spray."),
          statsLine("s2", `${dummy} of ${g} people given the saltwater spray caught a cold, and ${spray} of ${g} given NasalCare did.`),
          statsLine("s3", "Sold in drugstores for $9 a bottle.", { fine: true, note: "That is the price, not a count of colds." })],
        size: { prompt: "Without the spray, then with it: how many in every 1,000 caught a cold over the winter?", before, after, extra: [{ slip: "bare-count", value: [dummy, spray], then: `Those are counts out of ${g} people. ${dummy} ÷ ${g} × 1,000 = ${before}.` }] },
        deciding: ["h", "s1", "s2"],
        reason: [`${dummy} in ${g} is ${before} in 1,000, and ${spray} in ${g} is ${after} in 1,000: a drop of a third, as the ad says, and the coin toss means the spray made the difference. “Slashes” is a strong word, but 100 fewer colds in every 1,000 people is a big change.`],
        need: "The study was of adults. For children you would need a study of children."
      });
    })(),
    (() => {
      const before = 80, after = 60;
      return story({
        id: "p-heart", fit: "outruns", form: "ad", source: "Cardiol Pharma", line: "s2",
        headline: "Cardiol protects a quarter of patients from heart attack.",
        claim: ["Cardiol keeps a quarter of the people who take it from having a heart attack", [["People who take Cardiol have fewer heart attacks", "heard-link"], ["Cardiol protects a quarter of patients from a stroke", "mixed-claim"]]],
        lines: [
          statsLine("s1", "In a ten-year trial where a coin toss decided who got Cardiol and who got a dummy pill, Cardiol cut the risk of a heart attack by 25%.", { note: changeNote }),
          statsLine("s2", "Without Cardiol, about 80 in every 1,000 adults with heart disease have a heart attack within ten years."),
          statsLine("f1", "Ask your doctor if Cardiol is right for you.", { fine: true })],
        size: { prompt: "Without Cardiol, then with it: how many in every 1,000 have a heart attack within ten years?", before, after, extra: [percentTrap(before, 25)] },
        deciding: ["h", "s1", "s2"],
        reason: ["A 25% cut in a risk of 80 in 1,000 brings it to 60 in 1,000 over ten years. Cardiol spares 20 people in every 1,000, which is 1 in 50, not a quarter of the people who take it."],
        need: "You would need a headline that says what the trial found: from 80 in 1,000 to 60 in 1,000 over ten years."
      });
    })(),
    (() => {
      const before = 60, after = 45;
      return story({
        id: "p-falls", fit: "outruns", form: "news", source: "Silver Lake Times · Health", line: "s1",
        headline: "Ravel pill halves falls in older adults",
        claim: ["Ravel makes a fall half as likely for adults over 75", [["Adults over 75 who take Ravel fall less often", "heard-link"], ["Ravel makes a fall half as likely for adults over 50", "mixed-who"]]],
        lines: [
          statsLine("s1", `In a one-year trial of 10,000 adults over 75, ${before} in every 1,000 given a dummy pill had a fall, compared with ${after} in every 1,000 given Ravel.`),
          statsLine("s2", "A coin toss decided who got which pill.", { para: true })],
        size: { prompt: "Dummy pill, then Ravel: how many in every 1,000 had a fall within the year?", before, after },
        deciding: ["h", "s1"],
        reason: ["From 60 to 45 in every 1,000 is 15 fewer, a cut of a quarter, not a half. The coin toss shows the pill made a difference, but the headline makes it twice as big."],
        need: "You would need a headline that gives what the trial found: from 60 in 1,000 to 45 in 1,000 a year."
      });
    })(),
    story({
      id: "p-serum", fit: "unclear", form: "post", source: "Lumina Hair Care · 3h", line: null,
      claim: ["1 in 3 women who use Lumina are spared thinning hair", [["Women who use Lumina serum have less thinning hair", "heard-link"], ["Lumina serum keeps 1 in 3 men from thinning hair", "mixed-who"]]],
      lines: [
        statsLine("s1", "Lumina serum keeps 1 in 3 women from thinning hair!", { note: "That is the claim. It does not say how common thinning hair was without the serum." }),
        statsLine("s2", "In our trial, where a coin toss decided who got Lumina and who got a plain lotion, 40% fewer women on Lumina had thinning hair.", { note: changeNote }),
        statsLine("s3", "Try it for 30 days.", { note: "That is how long to try it, not a count of women." })],
      size: null, deciding: ["s1", "s2"],
      reason: ["The post claims a number of people: 1 in 3 women spared. The trial gives only the change, 40% fewer, and not how many women had thinning hair with the plain lotion, so you cannot work out how many were spared."],
      need: "You would need how many in every 1,000 women had thinning hair with the plain lotion, and with Lumina."
    }),

    // ----- the second group (nothing marked) -----
    (() => {
      const before = 6, after = 3;
      return story({
        id: "q-hip", fit: "holds", form: "news", source: "Cedar Valley News · Health", line: "s2",
        headline: "Ostrel supplement halves the chance of a broken hip after 70",
        claim: ["Ostrel makes a broken hip half as likely for people over 70", [["People over 70 who take Ostrel break fewer hips", "heard-link"], ["Ostrel makes a broken hip half as likely for people over 50", "mixed-who"]]],
        lines: [
          statsLine("s1", "In a five-year trial of 20,000 adults over 70, a coin toss decided which half got Ostrel and which half got a dummy pill.", { note: chance }),
          statsLine("s2", `About ${before} in every 1,000 on the dummy pill broke a hip, and ${after} in every 1,000 on Ostrel did.`, { para: true })],
        size: { prompt: "Dummy pill, then Ostrel: how many in every 1,000 broke a hip within five years?", before, after },
        deciding: ["h", "s1", "s2"],
        reason: ["From 6 to 3 in every 1,000 is half, which is what “halves” says, and it says it for people over 70, as the trial was. The coin toss means Ostrel made the difference."],
        need: "Nothing more is needed for people over 70. For younger people you would need a trial of younger people."
      });
    })(),
    (() => {
      const before = 40, after = 30;
      return story({
        id: "q-statin", fit: "holds", form: "news", source: "Marlow Daily · Health", line: "s2",
        headline: "Tolpex spares 1 in 100 adults with high cholesterol a heart attack over ten years",
        claim: ["Over ten years Tolpex prevents a heart attack in 1 in every 100 adults with high cholesterol", [["Adults who take Tolpex have fewer heart attacks", "heard-link"], ["Tolpex spares a quarter of adults with high cholesterol a heart attack over ten years", "mixed-claim"]]],
        lines: [
          statsLine("s1", "In a ten-year trial of 10,000 adults with high cholesterol, where a coin toss decided who got Tolpex and who got a dummy pill, Tolpex cut the risk of a heart attack by 25%.", { note: changeNote }),
          statsLine("s2", "Without Tolpex, about 40 in every 1,000 of these adults have a heart attack within ten years."),
          statsLine("s3", "Doctors say the drug is safe for most people.", { para: true })],
        size: { prompt: "Without Tolpex, then with it: how many in every 1,000 have a heart attack within ten years?", before, after, extra: [percentTrap(before, 25)] },
        deciding: ["h", "s1", "s2"],
        reason: ["A 25% cut in 40 in 1,000 brings it to 30 in 1,000 over ten years: 10 fewer in every 1,000, which is 1 in 100, just what the headline says. The coin toss means the drug made the difference."],
        need: "Nothing more is needed. The headline claims no more than the trial shows."
      });
    })(),
    story({
      id: "q-fish", fit: "unclear", form: "news", source: "Greenfield Gazette · Wellness", line: null,
      headline: "Calmex capsules spare 1 in 10 adults from depression",
      claim: ["Calmex spares 1 in 10 adults who take it from depression", [["Adults who take Calmex are less often depressed", "heard-link"], ["Calmex spares 1 in 10 children from depression", "mixed-who"]]],
      lines: [
        statsLine("s1", "In a one-year trial, where a coin toss decided who got Calmex and who got a dummy capsule, Calmex users were 30% less likely to become depressed.", { note: changeNote }),
        statsLine("s2", "The researchers did not report how many in each group became depressed.", { para: true })],
      size: null, deciding: ["h", "s1", "s2"],
      reason: ["The headline claims a number of people: 1 in 10 adults spared. The trial gives only the change, 30% less likely, and the story says it does not give how many in each group became depressed, so you cannot work out how many were spared."],
      need: "You would need how many in every 1,000 became depressed on the dummy capsule and on Calmex."
    }),
    (() => {
      const before = 5, after = 2;
      return story({
        id: "q-helmet", fit: "outruns", form: "post", source: "Bike Safe Coalition · 2h", line: "s2",
        claim: ["60% of cyclists are protected from head injury by the law", [["Cyclists in towns with the law have fewer head injuries", "heard-link"], ["Our helmet law protects 60% of children who ride from head injury", "mixed-who"]]],
        lines: [
          statsLine("s1", "Our helmet law protects 60% of cyclists from head injury! The numbers prove it.", { note: "That is the claim. It does not say how many cyclists were hurt." }),
          statsLine("s2", "Before the law, about 5 in every 1,000 cyclists in town had a head injury each year. After the law, 2 in every 1,000 did.")],
        size: { prompt: "Before the law, then after: how many in every 1,000 cyclists had a head injury in a year?", before, after, extra: [percentTrap(before, 60)] },
        deciding: ["s1", "s2"],
        reason: ["The drop from 5 to 2 in every 1,000 is a cut of 60%, but it spares 3 cyclists in every 1,000, not 60% of all cyclists: most were never hurt, before or after. With only before and after and no town to compare, the law may not even be the reason."],
        need: "You would need a post that says what the numbers say: from 5 in 1,000 to 2 in 1,000 a year."
      });
    })(),
    story({
      id: "q-mats", fit: "unclear", form: "news", source: "Bayview Herald · Seniors", line: "s1",
      headline: "SafeStep floor mats prevent 20 falls a year in every 1,000 nursing home residents",
      claim: ["Each year the mats spare 20 of every 1,000 nursing home residents a fall", [["Homes with SafeStep mats have fewer falls", "heard-link"], ["SafeStep floor mats prevent 20 falls a year in every 1,000 people living at home", "mixed-who"]]],
      lines: [
        statsLine("s1", "Without the mats, about 60 in every 1,000 nursing home residents fall in a year, the maker says."),
        statsLine("s2", "The maker has not released how many residents fell on the mats.", { para: true })],
      size: null, deciding: ["h", "s1", "s2"],
      reason: ["The text gives how common falls are without the mats, 60 in every 1,000 a year, but not how many fell with them. The starting number is there; the number after is not, so you cannot check the 20."],
      need: "You would need how many in every 1,000 residents fell with the mats, from a fair test."
    }),
    story({
      id: "q-kelp", fit: "outruns", form: "news", source: "Northfield Courier · Health", line: null,
      headline: "Kelvo nose drops spare half of users a cold this winter",
      claim: ["Kelvo keeps half of the people who use it from catching a cold", [["People who use Kelvo catch fewer colds", "heard-link"], ["Kelvo keeps half of the children who use it from catching a cold", "mixed-who"]]],
      lines: [
        statsLine("s1", "In a winter-long trial, where a coin toss decided who got Kelvo and who got salt water, half as many Kelvo users caught a cold."),
        statsLine("s2", "Colds were rare in both groups: most people in the trial never caught one.", { para: true })],
      size: null, deciding: ["h", "s2"],
      reason: ["“Spare half of users” says half of the people who use it are kept from a cold. The text says most people in the trial never caught one, so Kelvo spared only a small share of them, even with half as many colds."],
      need: "You would need how many in every 1,000 caught a cold with salt water and with Kelvo, and a headline that says that."
    }),

    // ----- the third group's question that cannot be told -----
    story({
      id: "q-eyes", fit: "unclear", form: "post", source: "ClearView Eyecare · 5h", line: null,
      claim: ["6 of every 100 people using the drops are kept from an eye infection", [["People who use ClearView drops get fewer eye infections", "heard-link"], ["ClearView drops spare 6 in every 100 users every eye problem", "mixed-claim"]]],
      lines: [
        statsLine("s1", "ClearView drops spare 6 in every 100 users an eye infection!", { note: "That is the claim. It does not say how common infections were without the drops." }),
        statsLine("s2", "In a trial where a coin toss decided who got ClearView and who got plain drops, eye infections fell by 60%.", { note: changeNote }),
        statsLine("s3", "Order two bottles and save.")],
      size: null, deciding: ["s1", "s2"],
      reason: ["The post claims a number of people: 6 in every 100 users spared. The trial gives only the change, 60%, and not how many people got an infection to begin with, so you cannot check the 6 in 100."],
      need: "You would need how many in every 1,000 people got an eye infection with plain drops, and with ClearView."
    }),

    // ----- the check: five new questions (sports, cars, school, work, a toothpaste ad) -----
    (() => {
      const g = 1000, none = 80, warm = 40;
      return story({
        id: "k-warmup", fit: "holds", form: "news", source: "Riverton Herald · Sports", line: "s2",
        headline: "Warm-up routine halves soccer injuries, league finds",
        claim: ["A warm-up routine makes a soccer injury half as likely", [["Teams that warm up have fewer injuries", "heard-link"], ["A warm-up routine makes a soccer injury half as likely for adult players", "mixed-who"]]],
        lines: [
          statsLine("s1", "The league picked by lottery which youth teams did a 15-minute warm-up before every game this season.", { note: chance }),
          statsLine("s2", `${warm} of ${statsN(g)} players on teams that did the warm-up were injured, compared with ${none} of ${statsN(g)} on teams that did not.`, { para: true }),
          statsLine("s3", "Coaches say the routine takes four minutes to learn.", { note: "That is how long it takes to learn, not a count of injuries." })],
        size: { prompt: "No warm-up, then a warm-up: how many in every 1,000 players were injured this season?", before: none, after: warm },
        deciding: ["h", "s1", "s2"],
        reason: ["80 injured in every 1,000 players without the warm-up and 40 with it: 40 is half of 80, as “halves” says. The lottery means the two groups were alike apart from the warm-up."],
        need: "Nothing more is needed for youth soccer. For other sports you would need counts from those sports."
      });
    })(),
    (() => {
      const g = 1000, none = 50, seat = 30;
      return story({
        id: "k-seat", fit: "holds", form: "report", source: "Pinecrest Safety Council · Study summary", line: "s1",
        headline: "Children in booster seats hurt 40% less often in crashes",
        claim: ["Children in booster seats were hurt 40% less often in crashes than children without them", [["Booster seats cut injuries to children by 40%", "heard-cause"], ["Children aged 8 to 12 in booster seats were hurt 40% less often in crashes", "mixed-who"]]],
        lines: [
          statsLine("s1", `${none} of ${statsN(g)} children aged 4 to 7 in car crashes without a booster seat were hurt, compared with ${seat} of ${statsN(g)} children of the same ages in a booster seat.`),
          statsLine("s2", "The council counted every crash in the county over three years.", { para: true })],
        size: { prompt: "Without a booster seat, then with one: how many in every 1,000 children in crashes were hurt?", before: none, after: seat },
        deciding: ["h", "s1"],
        reason: ["50 hurt in every 1,000 children without a booster seat and 30 with one is 40% fewer. The headline says only that children in booster seats were hurt less often, not that the seats did it, and the counts show that."],
        need: "Nothing more is needed for what the headline says. To say the seats did it you would need children split by chance, and the headline does not claim that."
      });
    })(),
    (() => {
      const before = 100, after = 80;
      return story({
        id: "k-tutor", fit: "outruns", form: "news", source: "Eastport Sun · Schools", line: "s2",
        headline: "Tutoring keeps 1 in 5 students from failing math",
        claim: ["1 in 5 students are kept from failing math by tutoring", [["Students who get tutoring fail math less often", "heard-link"], ["Tutoring keeps 1 in 5 students from failing English", "mixed-claim"]]],
        lines: [
          statsLine("s1", "Students in the Eastport tutoring program were 20% less likely to fail math than students outside it, the district said.", { note: changeNote }),
          statsLine("s2", "Without tutoring, about 100 in every 1,000 Eastport students fail math in a year."),
          statsLine("s3", "Students sign up for the program themselves; it meets after school on Tuesdays.", { para: true })],
        size: { prompt: "Without tutoring, then with it: how many in every 1,000 students fail math in a year?", before, after, extra: [percentTrap(before, 20)] },
        deciding: ["h", "s1", "s2"],
        reason: ["A 20% cut in 100 in every 1,000 brings it to 80 in every 1,000: 20 students in every 1,000, which is 1 in 50, not 1 in 5. And students sign up for it themselves, so the groups were not split by chance, and the program may not be the reason at all."],
        need: "You would need a headline that says what the district found: from 100 in 1,000 to 80 in 1,000."
      });
    })(),
    (() => {
      const before = 40, after = 30;
      return story({
        id: "k-training", fit: "outruns", form: "report", source: "Millbrook Builders Association · Report", line: "s2",
        headline: "Safety training slashes site accidents by half",
        claim: ["Safety training makes a site accident half as likely", [["Sites with safety training have fewer accidents", "heard-link"], ["Safety training makes an office accident half as likely", "mixed-who"]]],
        lines: [
          statsLine("s1", "The association picked by lottery which of its building sites got the training; 10,000 workers were counted in all.", { note: "That says how the sites were picked and how many workers were counted, not how many had an accident." }),
          statsLine("s2", `Over the next year, ${before} in every 1,000 workers at sites without the training had an accident, and ${after} in every 1,000 at sites with it.`, { para: true }),
          statsLine("s3", "Training takes one morning.")],
        size: { prompt: "Without the training, then with it: how many in every 1,000 workers had an accident that year?", before, after },
        deciding: ["h", "s2"],
        reason: ["From 40 to 30 in every 1,000 is 10 fewer, a cut of a quarter, not a half. The lottery shows the training helped, but the headline makes it twice as big."],
        need: "You would need a headline that gives what the sites found: from 40 in 1,000 to 30 in 1,000 a year."
      });
    })(),
    story({
      id: "k-paste", fit: "unclear", form: "ad", source: "BrightSmile Toothpaste", line: "s1",
      headline: "BrightSmile keeps 1 in 5 users from a cavity.",
      claim: ["BrightSmile keeps 1 in 5 of the people who use it from a cavity", [["People who use BrightSmile get fewer cavities", "heard-link"], ["BrightSmile keeps 1 in 5 children from a cavity", "mixed-who"]]],
      lines: [
        statsLine("s1", "Without BrightSmile, about 300 in every 1,000 people get a cavity within two years."),
        statsLine("s2", "Ask your dentist about BrightSmile."),
        statsLine("f1", "BrightSmile users’ own cavity counts have not been published.", { fine: true })],
      size: null, deciding: ["h", "s1", "f1"],
      reason: ["The ad gives how common cavities are without it, 300 in every 1,000 over two years, but not how many users got one. With the starting number and no number after, you cannot check the 1 in 5."],
      need: "You would need how many in every 1,000 people got a cavity with BrightSmile and with a plain toothpaste, from a fair test."
    })
  ]);
})();
