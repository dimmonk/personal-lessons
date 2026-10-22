/* ===================== LESSONS: A NEWS STORY, A POST, AN AD, A REPORT ===================== */
// Lesson standard 3.9 (the `article` block). The thing as it arrives on a phone: where it comes from, the headline over the text, the
// text a line at a time. Every line is a segment (tappable, markable); the words are quoted material and may say anything.
//   article { kind: 'article', id?, form: 'news' | 'post' | 'ad' | 'report', source, headline?: Segment, lines: [Segment] }
//   form    news: headline over the story, the paper and section above; post: who posted and when, then what they wrote (no headline);
//           ad: the advertiser, the headline, and the small print last; report: the organization, the title and the summary
//   Segment { id, text, note?, para?: true (starts a new paragraph), fine?: true (small print, drawn small and last) }
//   A post may carry a label (3.9): { text, by, side }. It is then drawn as a label pinned on words: who posted, how the commenter is known
//   (`by`), the commenter's own words (`text`, which carry the label), and under them, in a box of their own, the words the label is pinned
//   on (the lines): quoted words or a policy, with who said them as small print last. `side` is 'left' or 'right' and is not drawn: it is
//   the side the label is thrown from, kept for the results (panel.js).

// the lines as paragraphs: a line with `para` starts a new one; the small print is gathered into one paragraph of its own, last
function articleParagraphs(lines){
  const body = lines.filter(l => !l.fine);
  return { groups: segmentGroups(body), fine: lines.filter(l => l.fine) };
}

// a label pinned on words: the commenter and their words over the words they pinned the label on
function labelledPostHtml(block, groups, fine, ctx){
  const body = groups.flat().map(seg => `<p>${segmentHtml(seg, ctx)}</p>`).join('');   // each line of the quoted words stands alone: it is what is tapped
  const small = fine.length ? `<p class="art-fine">${fine.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>` : '';
  return `<article class="block-article art-post art-labelled" data-article="post" data-side="${esc(block.label.side)}"><p class="art-source">${esc(block.source)}</p>
    <p class="art-by">${esc(block.label.by)}</p><p class="art-label">${esc(block.label.text)}</p>
    <div class="art-quoted"><p class="art-pinned">${esc(SAY.pinnedOn)}</p><div class="art-body">${body}${small}</div></div></article>`;
}

function articleHtml(block, ctx){
  const { groups, fine } = articleParagraphs(block.lines);
  if(block.label) return labelledPostHtml(block, groups, fine, ctx);
  const tag = block.form === 'ad' ? SAY.artAd : block.form === 'report' ? SAY.artReport : '';
  const head = block.headline ? `<h3 class="art-head">${segmentHtml(block.headline, ctx)}</h3>` : '';
  const body = groups.map(g => `<p>${g.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>`).join('');
  const small = fine.length ? `<p class="art-fine">${fine.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>` : '';
  return `<article class="block-article art-${esc(block.form)}" data-article="${esc(block.form)}"><p class="art-source">${tag ? `<span class="art-tag">${esc(tag)}</span>` : ''}${esc(block.source)}</p>
    ${head}<div class="art-body">${body}${small}</div></article>`;
}
