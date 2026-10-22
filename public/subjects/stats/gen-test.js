// Stats, lesson 4 "A test says yes": the same question with fresh numbers, in two forms that read alike. In one only a few of the people tested have
// it, so most positives are false alarms; in the other many do, so most positives are real. Both draw the same headlines ("N% accurate", "usually
// means"), each scoped to the group the count is about, and, for the most part, the same groups (people with a cough, people with a fever), so the learner has to count 1,000 people through the
// test to see which.
// Invented tests and conditions. Both forms draw the same accuracy figures, and they never repeat a fixed question's (lesson 4 uses finds 80 and
// 90 of 100; these use 70, 75, 85 and 95).
(() => {
  const TESTS = ["Marlin test", "Verrin screen", "Orrel swab", "Tessa blood test"];
  const CONDS = ["Ashby fever", "Marsh cough", "Calder rash", "Orrel disease"];
  const works = "That is how well the test works. It does not say how common it is.";
  // the headline and the group, by a word (never three numbers: the engine reads three numbers as a range)
  // the headline names the group the count is about, as a claim about the people counted must; claiming it for anyone tested is the slip
  const HEADS = { accurate: "For {who}, the {test} is {sens}% accurate: a positive result most likely means {cond}", usually: "For {who}, a positive result on the {test} usually means {cond}" };
  const WHO = { fair: "adults tested at a health fair", cough: "people who come to a clinic with a cough", fever: "people sent for testing with a high fever", retest: "people sent for a second test after a first positive" };
  const GROUPS = {
    fair: "Among adults tested at a health fair, about {p} in every 1,000 have {cond}.",
    cough: "Among people who come to a clinic with a cough, about {p} in every 1,000 have {cond}.",
    fever: "Among people their doctor sends for testing with a high fever, about {p} in every 1,000 have {cond}.",
    retest: "Among people sent for a second test after a first positive one, about {p} in every 1,000 have {cond}."
  };
  const fill = (text, v) => text.replace(/\{(\w+)\}/g, (_, k) => String(v[k]));
  const body = (fit, groups, reason, need, params) => ({
    ...statsSized({
      id: `g-test-${fit}`, strand: "size-test", fit: fit === "low" ? "outruns" : "holds", line: "s2", linePrompt: "Tap the sentence that tells how common it is.",
      claim: ["For {whoText}, most people who test positive on the {test} have {cond}", [["For {whoText}, a negative result on the {test} means you most likely do not have {cond}", "mixed-claim"], ["For anyone tested, a positive result on the {test} usually means {cond}", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "{test} · Health News", headline: statsLine("h", "{headline}"),
        lines: [
          statsLine("s1", "The test finds {sens} of every 100 people who have {cond}, and wrongly flags {fpr} of every 100 who do not.", { note: works }),
          statsLine("s2", "{groupText}"),
          statsLine("s3", "Results come back in two days.", { para: true })] }],
      size: { prompt: "Picture 1,000 people. Of those who test positive, how many have it?", frame: "__ of the __ who test positive have it", answer: ["found", "positives"],
        traps: [
          { slip: "only-true-yes", value: ["found", "found"], then: "That leaves out the false alarms: people who do not have it but test positive anyway. Count those too." },
          { slip: "all-yes-real", value: ["positives", "positives"], then: "Not every positive is real. Some are false alarms." },
          { slip: "test-accuracy", value: ["sens", 100], then: "{sens} of 100 is how many people who have it the test finds. The question is how many of those who test positive have it." }] },
      deciding: ["h", "s1", "s2"], reason, need
    }),
    params: { ...params, head: Object.keys(HEADS), group: groups },
    make: pick => {
      const v = { p: pick("p"), sens: pick("sens"), fpr: pick("fpr"), test: pick("test"), cond: pick("cond"), who: WHO[pick("group")] };
      const found = v.p * v.sens / 100, flagged = (1000 - v.p) * v.fpr / 100, positives = found + flagged;
      return { found, flagged, positives, rest: 1000 - v.p, share: `about ${Math.round(found / positives * 10)} in 10`,
        whoText: v.who, headline: fill(HEADS[pick("head")], v), groupText: fill(GROUPS[pick("group")], v) };
    }
  });
  FC.gen("stats", [
    body("low", ["fair", "cough", "fever", "fair"],
      ["Out of 1,000 people, {p} have {cond} and the test finds {found}. Of the {rest} who do not, it wrongly flags {flagged}, so {positives} test positive and only {found} of them have it, fewer than half: most positives are false alarms."],
      "You would need a test with fewer false alarms, or a group of people among whom many more have it.",
      { test: TESTS, cond: CONDS, p: [20, 40], sens: [70, 75, 85, 95], fpr: [5, 10] }),
    body("high", ["fever", "retest", "cough", "retest"],
      ["Out of 1,000 people, {p} have {cond} and the test finds {found}. Of the {rest} who do not, it wrongly flags {flagged}, so {positives} test positive and {found} of them have it, {share}: among people like these a positive most likely is real."],
      "Nothing more is needed for people like these. For people with no symptoms you would need new counts.",
      { test: TESTS, cond: CONDS, p: [300, 400, 500, 600], sens: [70, 75, 85, 95], fpr: [5, 10] })
  ]);
})();
