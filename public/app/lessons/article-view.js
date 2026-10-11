/* ===================== LESSONS: A NEWS STORY, A POST, AN AD, A REPORT ===================== */
// Lesson standard 26.1.2 (the `article` block). The thing as it arrives on a phone: where it comes from, the headline over the text, the
// text a line at a time. Every line is a segment (tappable, markable); the words are quoted material and may say anything.
//   article { kind: 'article', id?, form: 'news' | 'post' | 'ad' | 'report', source, headline?: Segment, lines: [Segment] }
//   form    news: headline over the story, the paper and section above; post: who posted and when, then what they wrote (no headline);
//           ad: the advertiser, the headline, and the small print last; report: the organization, the title and the summary
//   Segment { id, text, note?, para?: true (starts a new paragraph), fine?: true (small print, drawn small and last) }

// the lines as paragraphs: a line with `para` starts a new one; the small print is gathered into one paragraph of its own, last
function articleParagraphs(lines){
  const body = lines.filter(l => !l.fine);
  const groups = body.reduce((out, seg, i) => i === 0 || seg.para ? [...out, [seg]] : [...out.slice(0, -1), [...out[out.length - 1], seg]], []);
  return { groups, fine: lines.filter(l => l.fine) };
}

function articleHtml(block, ctx){
  const { groups, fine } = articleParagraphs(block.lines);
  const tag = block.form === 'ad' ? SAY.artAd : block.form === 'report' ? SAY.artReport : '';
  const head = block.headline ? `<h3 class="art-head">${segmentHtml(block.headline, ctx)}</h3>` : '';
  const body = groups.map(g => `<p>${g.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>`).join('');
  const small = fine.length ? `<p class="art-fine">${fine.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>` : '';
  return `<article class="block-article art-${esc(block.form)}" data-article="${esc(block.form)}"><p class="art-source">${tag ? `<span class="art-tag">${esc(tag)}</span>` : ''}${esc(block.source)}</p>
    ${head}<div class="art-body">${body}${small}</div></article>`;
}
