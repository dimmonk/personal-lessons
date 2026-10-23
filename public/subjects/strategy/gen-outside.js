// Strategy, lesson 12 "How did others like it do?": a table of similar ventures made fresh (lesson standard 3.5, a generator). The outside view
// (research ST12): before trusting a plan's own story, find how ventures like it turned out, and start the forecast from that share. Three years of
// openings in the county, with how many were still open three years on; the learner estimates the share still open, works it out, and says where
// the owner's forecast should start. The counts are invented but set near the national record (research ST20: about six in ten new US
// establishments are still open three years after opening): each year opens 12 to 20, and keeps 55% to 68% of them, rounded to whole shops,
// so the share lies between about 52% and 70% and the trap (the share that closed, under 48%) is never within a point of it.
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
    params: { kind: [0, 5, 1], openA: [12, 20, 1], openB: [12, 20, 1], openC: [12, 20, 1], rateA: [55, 68, 1], rateB: [55, 68, 1], rateC: [55, 68, 1] },
    make: pick => {
      const k = KINDS[pick("kind")];
      const opened = [pick("openA"), pick("openB"), pick("openC")];
      const rates = [pick("rateA"), pick("rateB"), pick("rateC")];
      const open = opened.map((n, i) => Math.round(n * rates[i] / 100));
      const total = opened[0] + opened[1] + opened[2], still = open[0] + open[1] + open[2];
      const share = still / total * 100;
      return {
        what: k.what, one: k.one, who: k.who, plan: k.plan,
        openA: opened[0], openB: opened[1], openC: opened[2], keptA: open[0], keptB: open[1], keptC: open[2],
        total, still, share, closed: 100 - share, shareText: pct(share), closedText: pct(100 - share)
      };
    },
    blocks: [
      { kind: "prose", text: "{who}’s plan for {plan} says it is sure to be open in three years. Here is how others like it did." },
      { kind: "document", form: "table", title: "{what} in the county, and how many were still open three years later", head: ["Year opened", "Opened", "Still open after three years"],
        rows: [
          { id: "y1", cells: ["2019", "{openA}", "{keptA}"] },
          { id: "y2", cells: ["2020", "{openB}", "{keptB}"] },
          { id: "y3", cells: ["2021", "{openC}", "{keptC}"] }] }],
    asks: [
      { id: "est", kind: "number", prompt: "Roughly, what share of them were still open after three years?", frame: "__%", answer: "share", estimate: true, tol: { abs: 10 },
        traps: [{ slip: "counted-wrong-group", value: "closed", then: "That is near the share that closed. Count the ones still open over all that opened." }] },
      { id: "share", kind: "number", prompt: "Now work it out: what share were still open after three years?", frame: "__%", answer: "share", tol: { abs: 1 },
        traps: [{ slip: "counted-wrong-group", value: "closed", then: "That is the share that closed. Count the ones still open over all that opened." }] },
      { id: "start", kind: "choose", prompt: "Where should {who}’s forecast for the new {one} start?", shuffle: true, options: [
        { id: "table", text: "Near {shareText}, the share of others like it still open, moved only for a real difference", ok: true },
        { id: "plan", text: "Near 100%, as the plan says: {who} knows this business better than any table does", slip: "inside-view", then: "Knowing the trade moves a forecast a little, not to 100%, and {closedText} of the owners in the table, most of them sure of their plan, closed within three years. Start from how they did." },
        { id: "best", text: "Near 50%: a new {one} either makes it or it does not", then: "Even odds is a guess; the table says how many like it did. Start from the share it gives." }] }],
    steps: [
      { id: "est", does: "Read the table roughly: about how many of each year’s openings were still open?", working: "Each year more than half, but far from all of them.", ask: "est" },
      { id: "share", does: "Add those still open, add all that opened, and divide.", working: "{still} ÷ {total} = {shareText}", ask: "share" },
      { id: "start", does: "Start the forecast from that share, not from the plan.", working: "Begin near {shareText}; move from it only for a real difference between {who}’s {one} and the others.", ask: "start" }],
    deciding: ["y1", "y2", "y3"],
    reason: "Of {total} that opened, {still} were still open three years later: {shareText}. {who}’s forecast starts there, and moves only for a real difference, not because the plan is convincing."
  }]);
})();
