/* ===================== LESSONS: TAPPING A LINE OF THE TEXT ===================== */
// Lesson standard 26.1 (the `tap` ask). The lines of a block become tappable; the learner taps the one that decides it, or says it is not
// there. Pure: no page and no storage, so the player, the validator and the tests all score a tap the same way.
//   ask    { id, kind: 'tap', prompt, in?: id of a block, pick?: n, right: [segmentId] | 'none', meets?: true, none?: Text, when? }
//   `in` names one block of the question (it carries that `id`); without it every line of every block can be tapped. `pick` is how many
//   lines the learner taps (1 by default: the tap is the answer; more than 1: tap that many, then Answer). `none` is the words of the
//   button for "it is not there" ("Not given"); it is needed when `right` is 'none' and is offered whenever it is given.
//   `meets` (one line wanted, a label the words earn): the question's own `has` puts each need of the label in a line, and a label with
//   several needs can have them in several lines. Then any line that `has` shows meeting a need is right, and `right` is the first of them
//   (the one the answer prints first). No line that meets a need is ever called wrong.
//   A tapped line may carry `note`, the one line shown after a miss, and `slip`, the id of a slip of the subject.
//   answer  [segmentId, ...] or ['none']        result  'ok', a slip id, or 'no'

const TAP_NONE = 'none';   // the answer of "Not given", so no line may have this id
const tapPick = ask => ask.pick || 1;
// the lines that meet a need of the label, as the question's `has` finds them, each once
const tapMeeting = item => [...new Set(Object.values(item.has || {}).flatMap(asList))];
// the answer(s) that are right: `item` is needed for a tap that `meets`
const tapRightIds = (ask, item) => ask.right === TAP_NONE ? [TAP_NONE] : ask.meets ? tapMeeting(item) : asList(ask.right);
const tapBlocks = (item, ask) => ask.in ? item.blocks.filter(b => b.id === ask.in) : item.blocks;
// the lines of a block that can be tapped: its `lines`, not its headline (a headline can be marked, not tapped), and a pair's two sides
const tapLinesOf = block => block.kind === 'pair' ? [...tapLinesOf(block.a), ...tapLinesOf(block.b)] : (block.lines || []);
const tapSegments = (item, ask) => tapBlocks(item, ask).flatMap(tapLinesOf);

// 'ok' when exactly the right lines were tapped (or "Not given" when nothing is there to find); else the slip of a wrong line that has one; else 'no'
function scoreTap(data, ask, answer, item){
  const picked = asList(answer), right = tapRightIds(ask, item);
  if(ask.meets ? picked.length === 1 && right.includes(picked[0]) : sameIds(picked, right)) return 'ok';
  const slipped = picked.map(id => tapSegments(item, ask).find(s => s.id === id)).find(s => s && s.slip && !right.includes(s.id));
  return slipped ? slipped.slip : 'no';
}
// the answer in words: the lines that decide it, or the words of the "not there" button
function tapRightText(ask, item){
  if(ask.right === TAP_NONE) return paras(ask.none).join(' ');
  const segs = tapSegments(item, ask);
  return tapRightIds(ask, item).map(id => (segs.find(s => s.id === id) || { text: id }).text).join(' ');
}
// what a learner tapped, in words, for the line about a miss: a line is cut short at 80 characters
const tapClip = text => text.length > 80 ? text.slice(0, 80).replace(/\s+\S*$/, '') + '…' : text;
// An answer is ready when the learner has tapped as many lines as the ask wants.
const tapReady = (ask, picked) => picked.length === tapPick(ask);
