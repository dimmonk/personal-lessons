// Strategy, lesson 12 "How did others like it do?": a table of similar ventures made fresh (lesson standard 3.5, a generator). The outside view
// (research ST12): before trusting a plan's own story, find how ventures like it turned out, and start the forecast from that share. Three years of
// openings in the county, with how many were still open three years on; the learner estimates the share still open, works it out, and says where
// the owner's forecast should start. Each year opens 12 to 20 and keeps 2 to 5, so the share lies between 10% and 42% and the trap (the share that
// closed) is never within a point of it. Invented counties and counts.
(() => {
  const pct = n => `${Math.round(n * 10) / 10}%`;
  const KINDS = [
    { what: "New cafes", one: "cafe", who: "Priya", plan: "a second cafe" },
    { what: "New gyms", one: "gym", who: "Mark", plan: "a second gym" },
    { what: "New bike shops", one: "bike shop", who: "Leo", plan: "a second bike shop" },
    { what: "New bakeries", one: "bakery", who: "Dana", plan: "a second bakery" },
    { what: "New hair salons", one: "salon", who: "Grace", plan: "a second salon" },
    { what: "New diners", one: "diner", who: "Sam", plan: "a second diner" }
  ];
  FC.gen("strategy", [{
    id: "g-base", strand: "outside-view", facets: { scale: "owner" },
    params: { kind: [0, 5, 1], openA: [12, 20, 1], openB: [12, 20, 1], openC: [12, 20, 1], keptA: [2, 5, 1], keptB: [2, 5, 1], keptC: [2, 5, 1] },
    make: pick => {
      const k = KINDS[pick("kind")];
      const opened = [pick("openA"), pick("openB"), pick("openC")], open = [pick("keptA"), pick("keptB"), pick("keptC")];
      const total = opened[0] + opened[1] + opened[2], still = open[0] + open[1] + open[2];
      const share = still / total * 100;
      return {
        what: k.what, one: k.one, who: k.who, plan: k.plan,
        openA: opened[0], openB: opened[1], openC: opened[2], keptA: open[0], keptB: open[1], keptC: open[2],
        total, still, share, closed: 100 - share, shareText: pct(share)
      };
    },
    blocks: [
      { kind: "prose", text: "{who}’s plan for {plan} says it will surely still be open in three years. Here is how others like it did." },
      { kind: "document", form: "table", title: "{what} in the county, and how many were still open three years later", head: ["Year opened", "Opened", "Still open after three years"],
        rows: [
          { id: "y1", cells: ["2019", "{openA}", "{keptA}"] },
          { id: "y2", cells: ["2020", "{openB}", "{keptB}"] },
          { id: "y3", cells: ["2021", "{openC}", "{keptC}"] }] }],
    asks: [
      { id: "est", kind: "number", prompt: "Roughly, what share of them were still open after three years?", frame: "__%", answer: "share", estimate: true },
      { id: "share", kind: "number", prompt: "Now work it out: what share were still open after three years?", frame: "__%", answer: "share", tol: { abs: 1 },
        traps: [{ slip: "counted-wrong-group", value: "closed", then: "That is the share that closed. Count the ones still open over all that opened." }] },
      { id: "start", kind: "choose", prompt: "Where should {who}’s forecast for the new {one} start?", shuffle: true, options: [
        { id: "table", text: "From {shareText}, the share of others like it still open, then adjust only for real differences", ok: true },
        { id: "plan", text: "From the plan: {who} knows this business better than any table does", slip: "inside-view", then: "Every owner in the table knew their business and had a plan; most were not open three years later. Start from how they did." },
        { id: "best", text: "From the one {one} in town that {who} knows did well", slip: "surface-analogy", then: "One success that looks alike says little; the table shows how many like it did. Start from the share." }] }],
    steps: [
      { id: "est", does: "Read the table roughly: about how many of each year’s openings were still open?", working: "Each year a few out of a dozen or more, well under half.", ask: "est" },
      { id: "share", does: "Add those still open, add all that opened, and divide.", working: "{still} ÷ {total} = {shareText}", ask: "share" },
      { id: "start", does: "Start the forecast from that share, not from the plan.", working: "Begin at {shareText}; move from it only for a real difference between {who}’s {one} and the others.", ask: "start" }],
    deciding: ["y1", "y2", "y3"],
    reason: "Of {total} that opened, {still} were still open three years later: {shareText}. {who}’s forecast starts there, and moves only for a real difference, not because the plan is convincing."
  }]);
})();
