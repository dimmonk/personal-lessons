// Stats, lesson 4 "A test says yes": the worked example, the questions of the groups and the check. Picture 1,000 people (or cars, or seed batches): how
// many have it, how many of those the test finds, how many of the rest it flags anyway (false alarms), so how many of the positives are real. The same
// headlines ("N% accurate", "usually right") sit on claims that hold and on claims that do not, and the sentence that says how common it is moves: the
// count decides. Invented tests, conditions and products. Each question's numbers are written once (how many in 1,000 have it, the share of them found,
// the share of the others flagged), and its words and its answer are made from them; a table that does not come to whole numbers stops the file.
(() => {
  const LP = "Tap the sentence that tells how common it is.";
  const works = "That is how well the test works. It does not say how common it is.";
  const counts = ({ p, sens, fpr }) => {
    const found = p * sens / 100, flagged = (1000 - p) * fpr / 100;
    if (!Number.isInteger(found) || !Number.isInteger(flagged)) throw new Error(`a test table of ${p}, ${sens}, ${fpr} does not come to whole numbers`);
    return { found, flagged, positives: found + flagged };
  };
  const traps = (t, c) => [
    { slip: "only-true-yes", value: [c.found, c.found], then: "That leaves out the false alarms: the ones that do not have it but test positive anyway. Count those too." },
    { slip: "all-yes-real", value: [c.positives, c.positives], then: "Not every positive is real. Some are false alarms." },
    { slip: "test-accuracy", value: [t.sens, 100], then: `${t.sens} of 100 is how many that have it the test finds. The question is how many of those that test positive have it.` }
  ];
  // spec: id, fit, form, source, headline, t: { p, sens, fpr }, who (the sentence that says how common it is), test (how well it works), last,
  // order (where the sentence of how common it is stands: 1 to 3), unit ("people", "cars"), prompt, frame, rows (the figure's three labels), claim,
  // reason (made from the counts), need, steps?
  const story = spec => {
    const t = spec.t, c = counts(t), unit = spec.unit || "people";
    const roles = [["who", spec.who], ["test", spec.test, { note: works }], ["last", spec.last]];
    const at = spec.order || 2, order = [roles[1], roles[2]];
    order.splice(at - 1, 0, roles[0]);
    const lines = order.map(([role, text, extra], i) => statsLine(`s${i + 1}`, text, { ...(extra || {}), ...(i === 2 ? { para: true } : {}) }));
    const whoId = `s${order.findIndex(r => r[0] === "who") + 1}`;
    return statsSized({
      id: spec.id, strand: "size-test", fit: spec.fit, line: whoId, linePrompt: LP, claim: spec.claim,
      blocks: [{ kind: "article", form: spec.form, source: spec.source, headline: statsLine("h", spec.headline), lines }],
      size: { prompt: spec.prompt || `Picture 1,000 ${unit}. Of those that test positive, how many have it?`, frame: spec.frame || "__ of the __ who test positive have it", answer: [c.found, c.positives], traps: traps(t, c) },
      deciding: ["h", ...lines.filter(l => l.id === whoId || l.note === works).map(l => l.id)], reason: spec.reason(c), need: spec.need,
      ...(spec.steps ? { steps: spec.steps(c) } : {}),
      figure: { kind: "figure", type: "people", data: { caption: `Out of 1,000 ${unit}`, rows: [
        { label: (spec.rows || [])[0] || "Have it", count: t.p }, { label: (spec.rows || [])[1] || "Have it and test positive", count: c.found },
        { label: (spec.rows || [])[2] || "Do not have it but test positive", count: c.flagged }] } }
    });
  };
  const finds = (t, cond, unit = "people") => `The test finds ${t.sens} of every 100 ${unit} who have ${cond}, and wrongly flags ${t.fpr} of every 100 who do not.`;

  FC.items("stats", [
    // ----- the worked example: a test "80% accurate" whose positives are mostly false alarms -----
    (() => {
      const t = { p: 20, sens: 80, fpr: 5 };
      return story({
        id: "w-test", fit: "outruns", form: "news", source: "Eastbay Courier · Health", t,
        headline: "New blood test is 80% accurate: a positive result means you most likely have Verrin syndrome",
        claim: ["Most people who test positive have Verrin syndrome", [["A negative result means you most likely do not have Verrin syndrome", "mixed-claim"], ["For people with symptoms, a positive result means you most likely have Verrin syndrome", "mixed-who"]]],
        test: finds(t, "Verrin syndrome"), who: "Among adults in the county, about 20 in every 1,000 have Verrin syndrome.", last: "The test is offered at county clinics.",
        steps: c => [
          { id: "claim", does: "Find what the headline claims.", working: "“A positive result means you most likely have it” says most people who test positive have Verrin syndrome.", ask: "claim" },
          { id: "line", does: "Find how common it is.", working: "The second sentence: about 20 in every 1,000 adults have Verrin syndrome.", ask: "line" },
          { id: "size", does: "Count 1,000 people through the test.", working: `20 have it, and the test finds 8 in 10 of them: ${c.found}. The other 980 do not have it, and the test wrongly flags 5 in 100 of them, 980 ÷ 100 × 5 = ${c.flagged} false alarms. In all ${c.positives} test positive, and ${c.found} of them have it.`, ask: "size" },
          { id: "verdict", does: "Check the headline against that.", working: `${c.found} of ${c.positives} is about 1 in 4. A positive result most likely does not mean you have it, so the headline says more than the numbers show.`, ask: "verdict" }],
        reason: c => [`Out of 1,000 people, 20 have Verrin syndrome and the test finds ${c.found} of them. Of the 980 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them have it, about 1 in 4: most positives are false alarms, because so few people have it.`],
        need: "You would need a test with fewer false alarms, or a group of people among whom many more have it."
      });
    })(),

    // ----- the first group (the numbers marked): an ad that outruns, a clinic that holds, an ad with nothing to count, and a count with one number missing -----
    (() => {
      const t = { p: 40, sens: 90, fpr: 5 };
      return story({
        id: "p-rapid", fit: "outruns", form: "ad", source: "Tarnwell Home Tests", t, order: 1,
        headline: "Our home test is 90% accurate: if it says yes, you most likely have Tarn fever.",
        claim: ["Most people the home test says yes to have Tarn fever", [["If it says no, you most likely do not have Tarn fever", "mixed-claim"], ["For people who feel sick, if it says yes, you most likely have Tarn fever", "mixed-who"]]],
        who: "Among people who feel fine, about 40 in every 1,000 have Tarn fever.", test: finds(t, "Tarn fever"), last: "Order now and get your results fast.",
        reason: c => [`Out of 1,000 people, 40 have Tarn fever and the test finds ${c.found}. Of the 960 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them have it, fewer than half.`],
        need: "You would need a test with fewer false alarms, or people who already have symptoms, among whom many more have it."
      });
    })(),
    (() => {
      const t = { p: 400, sens: 90, fpr: 5 };
      return story({
        id: "p-screen", fit: "holds", form: "report", source: "Marsh County Clinic · Notes", t, order: 3,
        headline: "At our clinic, a positive Marsh fever test is almost always right",
        claim: ["Nearly every patient the clinic finds positive for Marsh fever really has it", [["At our clinic, a negative Marsh fever test is almost always right", "mixed-claim"], ["At a walk-in clinic, a positive Marsh fever test is almost always right", "mixed-who"]]],
        test: finds(t, "Marsh fever"), last: "Results come back the same day.", who: "Of the patients the clinic sends for testing with a high temperature, about 400 in every 1,000 have Marsh fever.",
        reason: c => [`Out of 1,000 of these patients, 400 have Marsh fever and the test finds ${c.found}. Of the 600 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and ${c.found} of them have it, over 9 in 10. Among patients like these the claim holds.`],
        need: "The claim is about patients the clinic sends for testing. For people with no symptoms you would need new counts."
      });
    })(),
    statsSized({
      id: "p-quick", strand: "size-test", fit: "unclear", line: null, linePrompt: LP,
      claim: ["Most people the quick test says yes to have Gleaner’s rash", [["If the quick test says no, you most likely do not have Gleaner’s rash", "mixed-claim"], ["For people who have a rash, if the quick test says yes, you most likely have Gleaner’s rash", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Gleaner Labs",
        headline: statsLine("h", "99% accurate: if the quick test says yes, you most likely have Gleaner’s rash."),
        lines: [
          statsLine("s1", "Ask your pharmacist for a quick test."),
          statsLine("s2", "In our lab, the test found 99 of every 100 people who have Gleaner’s rash.", { note: works })] }],
      size: null, deciding: ["h", "s2"],
      reason: ["The ad says how many people with the rash the test finds, but not how often it flags people who do not have it, and not how common the rash is. To count 1,000 people through the test you need both."],
      need: "You would need how common Gleaner’s rash is, and how often the test wrongly says yes."
    }),
    statsSized({
      id: "p-delling", strand: "size-test", fit: "unclear", line: "s1", linePrompt: LP,
      claim: ["Most people with a positive Delling swab have Delling fever", [["A negative means you most likely do not have Delling fever", "mixed-claim"], ["For people with no cough, a positive means you most likely have Delling fever", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Hollis Ledger · Health",
        headline: statsLine("h", "Delling swab is 95% accurate: a positive means you most likely have Delling fever"),
        lines: [
          statsLine("s1", "In winter, about 150 in every 1,000 adults who come to a clinic with a cough have Delling fever, the county says."),
          statsLine("s2", "The swab finds 95 of every 100 people who have it.", { note: works }),
          statsLine("s3", "The county did not say how often the swab says yes for people who do not have Delling fever.", { para: true })] }],
      size: null, deciding: ["h", "s1", "s3"],
      reason: ["The text gives how common it is, 150 in every 1,000, and how many of them the swab finds, but not how often it says yes for people without it. Without the false alarms you cannot count how many positives are real."],
      need: "You would need how often the swab says yes for people who do not have Delling fever."
    }),

    // ----- the second group (nothing marked) -----
    (() => {
      const t = { p: 10, sens: 90, fpr: 10 };
      return story({
        id: "q-drug", fit: "outruns", form: "news", source: "Hollis Ledger · Work", t, order: 3, unit: "workers",
        headline: "Plant’s drug test is 90% accurate: a positive most likely means the worker uses drugs",
        claim: ["Most workers the plant’s drug test flags use drugs", [["A negative most likely means the worker does not use drugs", "mixed-claim"], ["For workers seen using drugs, a positive most likely means the worker uses drugs", "mixed-who"]]],
        test: finds(t, "a drug habit", "workers"), last: "The plant tests workers once a year.", who: "Of the plant’s workers, about 10 in every 1,000 use drugs, the company estimates.",
        prompt: "Picture 1,000 workers. Of those who test positive, how many use drugs?", frame: "__ of the __ who test positive use drugs",
        rows: ["Use drugs", "Use drugs and test positive", "Do not but test positive"],
        reason: c => [`Out of 1,000 workers, 10 use drugs and the test finds ${c.found}. Of the 990 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them use drugs, fewer than 1 in 10.`],
        need: "You would need a test with far fewer false alarms, or a second test to check every positive."
      });
    })(),
    (() => {
      const t = { p: 300, sens: 90, fpr: 10 };
      return story({
        id: "q-strep", fit: "holds", form: "report", source: "Pinecrest Pediatrics · Notice", t, order: 1, unit: "children",
        headline: "A positive strep swab at our office is usually right",
        claim: ["Most children with a positive strep swab at the office have strep throat", [["A negative strep swab at our office is usually right", "mixed-claim"], ["A positive strep swab at a school nurse’s office is usually right", "mixed-who"]]],
        who: "Among children brought in with a sore throat and fever, about 300 in every 1,000 have strep throat.", test: finds(t, "strep throat", "children"), last: "Swabs take five minutes.",
        reason: c => [`Out of 1,000 children like these, 300 have strep throat and the swab finds ${c.found}. Of the 700 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and ${c.found} of them have strep, about 8 in 10: among children like these, “usually right” holds.`],
        need: "The claim is about children with a sore throat and fever. For children with no symptoms you would need new counts."
      });
    })(),
    statsSized({
      id: "q-fraud", strand: "size-test", fit: "outruns", line: null, linePrompt: LP,
      claim: ["Most payments that raise an alert are fraud", [["If an alert does not fire, you can be sure the payment is not fraud", "mixed-claim"], ["If an alert fires on a payment abroad, you can be sure the payment is fraud", "mixed-who"]]],
      blocks: [{ kind: "article", form: "post", source: "First Meridian Bank · 2h",
        lines: [
          statsLine("s1", "Our fraud alerts are 95% accurate. If an alert fires, you can be sure the payment is fraud.", { note: "That is a claim about how well the alerts work. It does not say how common fraud is." }),
          statsLine("s2", "In our own review last year, most payments that set off an alert turned out to be real customers’ purchases.")] }],
      size: null, deciding: ["s1", "s2"],
      reason: ["The post gives no count of how common fraud is, so you cannot count 1,000 payments through the alerts yourself. But the bank’s own review says most payments that raised an alert were real purchases, so the text itself shows an alert does not most likely mean fraud."],
      need: "You would need how many alerts were fraud and how many were real purchases, and they would have to be mostly fraud."
    }),
    (() => {
      const t = { p: 40, sens: 80, fpr: 5 };
      return story({
        id: "q-allergy", fit: "outruns", form: "news", source: "Cedar Valley News · Health", t,
        headline: "Allergy blood test is 80% accurate: a positive means you most likely have the allergy",
        claim: ["Most people with a positive allergy test have the allergy", [["A negative means you most likely do not have the allergy", "mixed-claim"], ["For people who react to the food, a positive means you most likely have the allergy", "mixed-who"]]],
        test: finds(t, "the allergy"), who: "Among people tested at the clinic, about 40 in every 1,000 have the allergy.", last: "The test needs one small blood sample.",
        reason: c => [`Out of 1,000 people tested, 40 have the allergy and the test finds ${c.found}. Of the 960 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them have it, fewer than half: most positives are false alarms.`],
        need: "You would need a test with fewer false alarms, or people with symptoms, among whom many more have the allergy."
      });
    })(),
    (() => {
      const t = { p: 30, sens: 90, fpr: 10 };
      return story({
        id: "q-rash", fit: "outruns", form: "report", source: "Lindale Skin Clinic · Notice", t, order: 1,
        headline: "A positive Calder rash swab at our clinic is usually right",
        claim: ["Most people with a positive Calder swab at the clinic have Calder rash", [["A negative Calder rash swab at our clinic is usually right", "mixed-claim"], ["A positive Calder rash swab at our clinic is usually right for people who have had it before", "mixed-who"]]],
        who: "Among people who come in with an itchy rash, about 30 in every 1,000 have Calder rash.", test: finds(t, "Calder rash"), last: "Swabs are free for clinic members.",
        reason: c => [`Out of 1,000 people with an itchy rash, 30 have Calder rash and the swab finds ${c.found}. Of the 970 who do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them have it, about 1 in 5. “Usually right” is the clinic’s word; the count says otherwise.`],
        need: "You would need a swab with far fewer false alarms, or a group among whom many more have Calder rash."
      });
    })(),

    statsSized({
      id: "q-hearing", strand: "size-test", fit: "unclear", line: null, linePrompt: LP,
      claim: ["Most people EarlyHear flags have hearing loss", [["If EarlyHear does not flag you, you most likely hear fine", "mixed-claim"], ["For people who struggle to hear, if EarlyHear flags hearing loss, you most likely have it", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "EarlyHear App",
        headline: statsLine("h", "92% accurate: if EarlyHear flags hearing loss, you most likely have it."),
        lines: [
          statsLine("s1", "Try it free for a week."),
          statsLine("s2", "In our study, EarlyHear flagged 92 of every 100 people who had hearing loss.", { note: works })] }],
      size: null, deciding: ["h", "s2"],
      reason: ["The ad says how many people with hearing loss the app flags, but not how often it flags people who hear fine, and not how common hearing loss is among its users. Without both you cannot count how many flags are real."],
      need: "You would need how common hearing loss is among the app’s users, and how often it flags people who hear fine."
    }),

    // ----- the third group's question that cannot be told -----
    statsSized({
      id: "q-leak", strand: "size-test", fit: "unclear", line: null, linePrompt: LP,
      claim: ["Most times the detector beeps, there is a leak", [["When it stays quiet, you most likely have no leak", "mixed-claim"], ["In an old house, when it beeps, you most likely have a leak", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "DripStop Detectors",
        headline: statsLine("h", "DripStop is 90% accurate: when it beeps, you most likely have a leak."),
        lines: [
          statsLine("s1", "In our trial, DripStop beeped for 9 of every 10 leaks.", { note: works }),
          statsLine("s2", "Pick one up at your hardware store.")] }],
      size: null, deciding: ["h", "s1"],
      reason: ["The ad says how many leaks the detector catches, but not how often it beeps when there is no leak, and not how many homes have a leak. Without both you cannot count how many beeps are real."],
      need: "You would need how often the detector beeps with no leak, and how many homes have a leak."
    }),

    // ----- the check: four new questions (a car, school, a garden, an app) -----
    (() => {
      const t = { p: 600, sens: 90, fpr: 5 };
      return story({
        id: "k-engine", fit: "holds", form: "ad", source: "Riverton Auto Service", t, order: 1, unit: "cars",
        headline: "For cars brought in with a warning light, our code reader is 90% accurate: a fault code most likely means a real fault.",
        claim: ["Most cars brought in with a warning light that show a fault code have a real fault", [["For cars brought in with a warning light, no fault code most likely means no fault", "mixed-claim"], ["For cars with no warning light, a fault code most likely means a real fault", "mixed-who"]]],
        who: "Of the cars brought in with a warning light on, about 600 in every 1,000 have a real fault.",
        test: "The reader finds 90 of every 100 cars that have a fault, and wrongly shows a code for 5 of every 100 that do not.", last: "Readings take ten minutes.",
        prompt: "Picture 1,000 cars. Of those that show a fault code, how many have a real fault?", frame: "__ of the __ that show a code have a real fault",
        rows: ["Have a fault", "Have a fault and show a code", "No fault but show a code"],
        reason: c => [`Out of 1,000 cars like these, 600 have a real fault and the reader finds ${c.found}. Of the 400 with none, it wrongly shows a code for ${c.flagged}, so ${c.positives} show a code and ${c.found} of them have a real fault, over 9 in 10: for cars with a warning light on, the claim holds.`],
        need: "The claim is about cars with a warning light on. For cars with none you would need new counts."
      });
    })(),
    (() => {
      const t = { p: 50, sens: 90, fpr: 10 };
      return story({
        id: "k-screen", fit: "outruns", form: "news", source: "Eastport Sun · Schools", t, order: 3, unit: "children",
        headline: "A child the reading screening flags usually has a reading problem",
        claim: ["Most children the screening flags have a reading problem", [["A child the reading screening does not flag usually has no reading problem", "mixed-claim"], ["A child the reading screening flags in first grade usually has a reading problem", "mixed-who"]]],
        test: "The screening flags 90 of every 100 second graders who have a reading problem, and wrongly flags 10 of every 100 who do not.", last: "Parents get the results by mail.",
        who: "In the district, about 50 in every 1,000 second graders have a reading problem.",
        prompt: "Picture 1,000 second graders. Of those the screening flags, how many have a reading problem?", frame: "__ of the __ flagged children have a reading problem",
        rows: ["Have a reading problem", "Have one and are flagged", "Do not but are flagged"],
        reason: c => [`Out of 1,000 second graders, 50 have a reading problem and the screening flags ${c.found}. Of the 950 who do not, it wrongly flags ${c.flagged}, so ${c.positives} are flagged and only ${c.found} of them have a problem, about 1 in 3: most flagged children read fine.`],
        need: "You would need a screening that flags fewer children who read fine, or a second check of each child it flags."
      });
    })(),
    (() => {
      const t = { p: 30, sens: 80, fpr: 10 };
      return story({
        id: "k-seed", fit: "outruns", form: "report", source: "Calder Gardens Association · Notice", t, unit: "batches",
        headline: "Lab seed test is 80% accurate: a positive batch most likely holds invasive weed seeds",
        claim: ["Most seed batches that test positive hold invasive weed seeds", [["A negative batch most likely holds no invasive weed seeds", "mixed-claim"], ["For batches from a weedy farm, a positive batch most likely holds invasive weed seeds", "mixed-who"]]],
        test: "The test finds 80 of every 100 batches that hold invasive seeds, and wrongly flags 10 of every 100 that do not.", last: "Results are posted on the association’s board.",
        who: "Of the seed batches sent to the lab, about 30 in every 1,000 hold invasive seeds.",
        prompt: "Picture 1,000 seed batches. Of those that test positive, how many hold invasive seeds?", frame: "__ of the __ batches that test positive hold invasive seeds",
        rows: ["Hold invasive seeds", "Hold them and test positive", "Do not but test positive"],
        reason: c => [`Out of 1,000 batches, 30 hold invasive seeds and the test finds ${c.found}. Of the 970 that do not, it wrongly flags ${c.flagged}, so ${c.positives} test positive and only ${c.found} of them hold invasive seeds, about 1 in 5.`],
        need: "You would need a test with far fewer false alarms, or a second test of every positive batch."
      });
    })(),
    statsSized({
      id: "k-gym", strand: "size-test", fit: "unclear", line: "s1", linePrompt: LP,
      claim: ["Most people FitScan says are at risk of heart trouble really are", [["If your FitScan says you’re fine, you most likely are", "mixed-claim"], ["For people with chest pain, if FitScan says you’re at risk, you most likely are", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "FitScan App",
        headline: statsLine("h", "95% accurate: if your FitScan says you’re at risk, you most likely are."),
        lines: [
          statsLine("s1", "About 100 in every 1,000 adults who use FitScan are at risk of heart trouble."),
          statsLine("s2", "In our study, FitScan found 95 of every 100 people who were at risk.", { note: works }),
          statsLine("s3", "Download it free today.")] }],
      size: null, deciding: ["h", "s1", "s2"],
      reason: ["The ad says how common it is, 100 in every 1,000 users, and how many of them the scan finds, but not how often it says “at risk” to people who are fine. Without the false alarms you cannot count how many warnings are real."],
      need: "You would need how often the scan says “at risk” to someone who is fine."
    })
  ]);
})();
