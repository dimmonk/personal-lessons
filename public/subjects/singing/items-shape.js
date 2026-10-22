// Singing: the shape of a judging question (lesson standard 3.5), written once for every lesson that has one. A case is what a singer
// noticed about one line, in a few sentences; the one ask picks from one of the subject's lists what the check found. `means` says, once
// for each answer of that list, what that answer would have looked like; it is shown after a pick that was not the right one. The people in
// every case are invented; no real singer is described. This file makes plain data and registers nothing.
const sgCase = ({ strand, list, prompt, means }) => ({ id, story, right, reason, steps, slips }) => ({
  id, strand, facets: {},
  blocks: [{ kind: 'prose', text: story }],
  asks: [{ id: strand, kind: 'choose', prompt, from: list, right,
    then: Object.fromEntries(Object.keys(means).filter(k => k !== right).map(k => [k, means[k]])), ...(slips ? { slips } : {}) }],
  reason, ...(steps ? { steps } : {})
});
