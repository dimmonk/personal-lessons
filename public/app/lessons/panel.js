/* ===================== LESSONS: WHAT A LABEL NEEDS ===================== */
// Lesson standard 26.1 (`rules`, `has`, a facet that is compared) and 26.1.2 (the `panel` block and the label on a `post`). Pure: no page and
// no storage, so the player, the validator and the tests all read what a label needs, and what the words show of it, the same way.
//   subject.rules   { [ruleId]: { name, needs: [{ id, text }], heading? } }   what a label (or a word) needs; need ids are different across the subject.
//                   A rule with a `heading` is a checklist of its own (what counts as what someone did): the heading stands over its needs in
//                   the panel and over the needs found or missing in the feedback, in place of "What the label needs", and the rule is alone in its panel
//   panel block     { kind: 'panel', rules: [ruleId] }              those rules, printed from the subject's record, beside the question while
//                                                                   its group has the help `panel`; always on a teaching screen
//   item.has        { [needId]: segmentId | [segmentId] | null }    each need of the question's panel found (the line, or the lines, that show it) or missing
//   rule.feedback   'on-miss'                                       the needs found or missing are listed in the feedback only after a miss, or when a need
//                                                                   is missing (a checklist that would otherwise repeat the answer after every right one)
//   post label      { text, by, side }                              the commenter's words that carry the label, how the commenter is known,
//                                                                   and the side they throw it from: 'left' or 'right'
//   facet.compare   true: the end of a check and of the review show the facet's values side by side ("3 of 3" beside "2 of 3")

const LABEL_SIDES = ['left', 'right'];
const panelBlocksOf = item => item.blocks.filter(b => b.kind === 'panel');
const itemRuleIds = item => [...new Set(panelBlocksOf(item).flatMap(b => b.rules))];
const ruleOf = (data, id) => (data.meta.rules || {})[id] || lessonFail(`unknown rule ${id}`);
const ruleNeeds = (data, ids) => ids.flatMap(id => ruleOf(data, id).needs);
// the posts of a question that carry a label
const labelledPostsOf = item => item.blocks.filter(b => b.kind === 'article' && b.label);

// For each rule of the question's panel: its name, and each of its needs with the lines of the text that show it (none when the words do not
// show it). [{ id, name, heading, onMiss, needs: [{ id, text, found: [Segment] }] }]
function hasLines(data, item) {
  const lines = item.blocks.flatMap(segmentsOf), has = item.has || {};
  return itemRuleIds(item).map(id => {
    const rule = ruleOf(data, id);
    return { id, name: rule.name, heading: rule.heading, onMiss: rule.feedback === 'on-miss',
      needs: rule.needs.map(n => ({ ...n, found: asList(has[n.id]).map(lineId => lines.find(s => s.id === lineId)).filter(Boolean) })) };
  });
}

// The facets a subject compares (`compare: true`) as rows of a run, for the end of a check and of the review: only when at least two of the
// facet's values were met, because one value beside nothing compares nothing. outcomes: [{ facets, ok }]
// -> [{ name, rows: [[Value text, "3 of 3"]] }]
function facetSplits(data, outcomes) {
  return Object.entries(data.meta.facets).filter(([, f]) => f.compare).flatMap(([facet, def]) => {
    const rows = def.values.map(v => {
      const mine = outcomes.filter(o => (o.facets || {})[facet] === v.id);
      return mine.length ? [cap(v.text), `${mine.filter(o => o.ok).length} of ${mine.length}`] : null;
    }).filter(Boolean);
    return rows.length > 1 ? [{ name: def.name, rows }] : [];
  });
}
