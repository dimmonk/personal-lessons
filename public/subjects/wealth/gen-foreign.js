// Wealth, lesson 9 "Foreign holdings under US rules": a household's accounts in Canada, in US dollars, with each one's highest balance in
// the year and its balance on December 31, made with fresh numbers (lesson standard 3, generators). The rule (research W31, W50-W53, W61):
// the FBAR when the highest balances together pass $10,000; Form 8938 when the December 31 total or the highest total passes the lines for
// the household's filing status; a TFSA, or a Canadian fund outside an RRSP, is a flag for the cross-border preparer; an RRSP alone is not
// (its US tax waits by itself, W33, W51), though it counts in both totals. Four kinds: tfsa and fund (a flag), rrsp (the reports only),
// small (under every line: leave it). Each of the first three draws a Form 8938 case: neither total over its line, only the December 31 total, only the highest total, or both, each a tenth or more from its line.
// The worked household (w-foreign) gives the same flags in the app's `foreign` work when typed in (tests/own-later-pure.mjs).
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const PEOPLE = ['Priya', 'Owen', 'Sophie', 'Felix'];
  const STATUS = [{ text: 'Single, filing alone', end: 50000, any: 75000 }, { text: 'Married, filing jointly', end: 100000, any: 150000 }];
  const THIRD = { tfsa: 'TFSA', fund: 'Investment account: Canadian index ETF' };
  const COMMON = { whoAt: [0, 3, 1], statusAt: [0, 1, 1], checking: [3000, 8000, 100], dropA: [200, 1500, 100], dropB: [200, 2000, 100], dropC: [0, 800, 100] };
  // the Form 8938 case, by its two tests: 0 neither passes, 1 only the December 31 total, 2 only the highest total, 3 both; each total is drawn
  // a tenth or more from its line, so a learner who reads one total, or one line, misses half the cases
  const MODES = { mode: [0, 3, 1], fNone: [0.55, 0.8, 0.05], fEnd: [1.1, 1.18, 0.02], fLowEnd: [0.6, 0.85, 0.05], fAny: [1.12, 1.4, 0.04], fBoth: [1.7, 2.2, 0.1], gap: [3000, 8000, 500] };
  const KINDS = {
    tfsa: { ...MODES, third: [6000, 10000, 500] },
    fund: { ...MODES, third: [6000, 10000, 500] },
    rrsp: { ...MODES },
    small: { checking: [2000, 4000, 100], rrsp: [2000, 4000, 100] }
  };
  const hundred = x => Math.round(x / 100) * 100;
  // the two totals for the drawn case: [December 31, highest]
  function totals(pick, status){
    const mode = pick('mode'), gap = pick('gap');
    if(mode === 0) { const end = hundred(status.end * pick('fNone')); return [end, end + gap]; }
    if(mode === 1) { const end = hundred(status.end * pick('fEnd')); return [end, end + gap]; }
    if(mode === 2) return [hundred(status.end * pick('fLowEnd')), hundred(status.any * pick('fAny'))];
    const end = hundred(status.end * pick('fBoth')); return [end, end + gap];
  }
  function household(pick, kind){
    const status = STATUS[pick('statusAt')];
    const checkHi = pick('checking'), checkEnd = checkHi - Math.min(pick('dropA'), checkHi - 500);
    const third = THIRD[kind] ? pick('third') : 0, thirdEnd = third ? third - pick('dropC') : 0;
    let rrspHi, rrspEnd;
    if(kind === 'small') { rrspHi = pick('rrsp'); rrspEnd = rrspHi - Math.min(pick('dropB'), rrspHi - 500); }
    else { const [end, high] = totals(pick, status); rrspEnd = end - checkEnd - thirdEnd; rrspHi = high - checkHi - third; }
    const highest = checkHi + rrspHi + third, end = checkEnd + rrspEnd + thirdEnd, form = end > status.end || highest > status.any;
    return {
      who: PEOPLE[pick('whoAt')], statusText: status.text, endLine: whole(status.end), anyLine: whole(status.any), lineEnd: status.end, lineAny: status.any,
      checkHiText: whole(checkHi), checkEndText: whole(checkEnd), rrspHiText: whole(rrspHi), rrspEndText: whole(rrspEnd), thirdHiText: whole(third), thirdEndText: whole(thirdEnd),
      highest, highestText: whole(highest), end, endText: whole(end), fbar: highest > 10000 ? 'yes' : 'no', form8938: form ? 'yes' : 'no',
      endSide: end > status.end ? 'over' : 'under', anySide: highest > status.any ? 'over' : 'under',
      // the slip of each wrong answer: none where the answer is right
      formYesSlip: form ? '' : '8938-extra', formNoSlip: form ? '8938-missed' : ''
    };
  }
  const accountsDoc = kind => ({ kind: 'document', form: 'foreign', tab: 'Canada', title: '{who}’s accounts in Canada, in US dollars', head: ['Account', 'Highest this year', 'December 31'],
    rows: [{ id: 'f1', cells: ['Checking', '{checkHiText}', '{checkEndText}'] }, { id: 'f2', cells: ['RRSP', '{rrspHiText}', '{rrspEndText}'] },
      ...(THIRD[kind] ? [{ id: 'f3', cells: [THIRD[kind], '{thirdHiText}', '{thirdEndText}'] }] : [])],
    notes: ['Values from each account’s statements, converted to US dollars.'] });
  const statusDoc = { kind: 'document', form: 'table', tab: 'Tax return', title: '{who}’s US tax return', head: ['Line', 'On the return'], rows: [{ id: 't1', cells: ['Filing status', '{statusText}'] }] };
  // a yes or no on the subject's list; `right` and the slips may be slots the household fills ('' on the right answer)
  const yesNo = (id, prompt, right, slips, then) => ({ id, kind: 'choose', prompt, from: 'yesno', right, slips, then: { yes: then, no: then } });
  // the flag: which account raises a question for the preparer beyond the reports
  const FLAG = {
    tfsa: [{ id: 'third', text: 'The TFSA', ok: true, then: 'Canada does not tax a TFSA, but the US may tax what it earns every year.' },
      { id: 'rrsp', text: 'The RRSP', slip: 'rrsp-flagged', then: 'The RRSP’s US tax waits by itself until money comes out; it only counts in the totals.' },
      { id: 'none', text: 'None of them', slip: 'tfsa-missed', then: 'A TFSA is a flag: the US may tax what it earns every year.' }],
    fund: [{ id: 'third', text: 'The investment account’s Canadian index ETF', ok: true, then: 'A Canadian fund outside an RRSP is usually a passive foreign investment company under US tax: its gains can be taxed at the top rate, plus interest.' },
      { id: 'rrsp', text: 'The RRSP', slip: 'rrsp-flagged', then: 'The RRSP’s US tax waits by itself until money comes out; it only counts in the totals.' },
      { id: 'none', text: 'None of them', slip: 'fund-missed', then: 'A Canadian fund outside an RRSP is a flag: under US tax its gains can be taxed at the top rate, plus interest.' }],
    plain: [{ id: 'none', text: 'None of them', ok: true, then: 'A checking account and an RRSP raise nothing beyond the totals.' },
      { id: 'rrsp', text: 'The RRSP', slip: 'rrsp-flagged', then: 'The RRSP’s US tax waits by itself until money comes out; it only counts in the totals.' },
      { id: 'check', text: 'The checking account', slip: 'flagged-plain', then: 'A checking account only counts in the totals; it raises nothing else.' }]
  };
  const CALL = {
    change: { right: 'change', slips: { leave: 'fbar-missed' }, then: { leave: 'The highest balances together pass $10,000: at the least, an FBAR is due.' } },
    leave: { right: 'leave', slips: { change: 'fbar-extra' }, then: { change: 'Together the highest balances stay under $10,000, and a checking account and an RRSP raise no flag.' } }
  };
  const REASON = {
    tfsa: 'The highest balances add up to {highestText}, over $10,000: an FBAR is due. Form 8938: {form8938} ({endText} on December 31, {highestText} at its highest, against {endLine} and {anyLine}). The TFSA goes to a cross-border preparer; the RRSP only counts in the totals.',
    fund: 'The highest balances add up to {highestText}, over $10,000: an FBAR is due. Form 8938: {form8938} ({endText} on December 31, {highestText} at its highest, against {endLine} and {anyLine}). The Canadian ETF outside the RRSP goes to a cross-border preparer.',
    rrsp: 'The highest balances add up to {highestText}, over $10,000: an FBAR is due. Form 8938: {form8938} ({endText} on December 31, {highestText} at its highest, against {endLine} and {anyLine}). The RRSP raises no other flag.',
    small: 'The highest balances add up to {highestText}, under $10,000: no FBAR, and far under the Form 8938 lines. A checking account and an RRSP raise no flag: nothing to do.'
  };
  const generator = (kind, id) => ({
    id, strand: 'foreign', facets: { call: kind === 'small' ? 'leave' : 'change' }, params: { ...COMMON, ...KINDS[kind] }, make: pick => household(pick, kind),
    blocks: [accountsDoc(kind), statusDoc],
    asks: [
      { id: 'highest', kind: 'number', prompt: 'What do {who}’s accounts in Canada add up to, at their highest?', frame: '$__', places: 0, answer: 'highest', tol: { abs: 1 },
        traps: [{ slip: 'year-end-used', value: 'end', then: 'That adds the December 31 balances. The FBAR counts each account’s highest.' }] },
      yesNo('fbar', 'Is an FBAR due?', kind === 'small' ? 'no' : 'yes', kind === 'small' ? { yes: 'fbar-extra' } : { no: 'fbar-missed' },
        kind === 'small' ? 'The highest balances together stay under $10,000.' : 'The highest balances together pass $10,000.'),
      yesNo('form', 'Does Form 8938 go with {who}’s tax return?', '{form8938}', { yes: '{formYesSlip}', no: '{formNoSlip}' },
        'For “{statusText}”: {endText} on December 31 is {endSide} {endLine}; {highestText} at the highest is {anySide} {anyLine}. Either one over is enough.'),
      { id: 'flag', kind: 'choose', prompt: 'Which account raises a question for the preparer beyond the reports?', shuffle: true, options: FLAG[THIRD[kind] ? kind : 'plain'] },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to do?', from: 'todo', ...CALL[kind === 'small' ? 'leave' : 'change'] }],
    steps: [
      { id: 'highest', does: 'Add each account’s highest balance in the year.', working: THIRD[kind] ? '{checkHiText} + {rrspHiText} + {thirdHiText} = {highestText}.' : '{checkHiText} + {rrspHiText} = {highestText}.', ask: 'highest' },
      { id: 'fbar', does: 'Over $10,000 together: an FBAR.', working: kind === 'small' ? '{highestText} is under $10,000: no FBAR.' : '{highestText} is over $10,000: an FBAR is due.', ask: 'fbar' },
      { id: 'form', does: 'Form 8938: the December 31 total and the highest total against the lines for the filing status.', working: '{endText} on December 31 is {endSide} {endLine}; {highestText} at the highest is {anySide} {anyLine}. Either one over: {form8938}.', ask: 'form' },
      { id: 'flag', does: 'Then the flags: a TFSA, or a Canadian fund outside an RRSP. An RRSP alone is not one.', working: THIRD[kind] ? (kind === 'tfsa' ? 'The TFSA.' : 'The Canadian ETF in the investment account.') : 'None: a checking account and an RRSP.', ask: 'flag' },
      { id: 'call', does: 'Anything due or flagged goes to a preparer who works on both sides of the border.', working: kind === 'small' ? 'Nothing is due and nothing is flagged: leave it.' : 'Book the preparer.', ask: 'call' }],
    deciding: ['f1', 'f2', ...(THIRD[kind] ? ['f3'] : []), 't1'], reason: REASON[kind]
  });
  FC.gen('wealth', [generator('tfsa', 'g-foreign-tfsa'), generator('fund', 'g-foreign-fund'), generator('rrsp', 'g-foreign-rrsp'), generator('small', 'g-foreign-small')]);

  // the worked household: Priya, single; highest 3,400 + 42,000 + 12,000 = 57,400; December 31 2,900 + 40,500 + 12,000 = 55,400 > 50,000
  FC.items('wealth', [{
    id: 'w-foreign', strand: 'foreign', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'foreign', tab: 'Canada', title: 'Priya’s accounts in Canada, in US dollars', head: ['Account', 'Highest this year', 'December 31'],
        rows: [{ id: 'f1', cells: ['Checking', '$3,400', '$2,900'] }, { id: 'f2', cells: ['RRSP', '$42,000', '$40,500'] }, { id: 'f3', cells: ['TFSA', '$12,000', '$12,000'] }],
        notes: ['Values from each account’s statements, converted to US dollars.'] },
      { kind: 'document', form: 'table', tab: 'Tax return', title: 'Priya’s US tax return', head: ['Line', 'On the return'], rows: [{ id: 't1', cells: ['Filing status', 'Single, filing alone'] }] }],
    asks: [
      { id: 'highest', kind: 'number', prompt: 'What do Priya’s accounts in Canada add up to, at their highest?', frame: '$__', places: 0, answer: 57400, tol: { abs: 1 },
        traps: [{ slip: 'year-end-used', value: 55400, then: 'That adds the December 31 balances. The FBAR counts each account’s highest.' }] },
      { id: 'fbar', kind: 'choose', prompt: 'Is an FBAR due?', options: [{ id: 'yes', text: 'Yes', ok: true }, { id: 'no', text: 'No', slip: 'fbar-missed', then: 'The highest balances together pass $10,000.' }] },
      { id: 'form', kind: 'choose', prompt: 'Does Form 8938 go with Priya’s tax return?', options: [{ id: 'yes', text: 'Yes', ok: true },
        { id: 'no', text: 'No', slip: '8938-missed', then: '$55,400 on December 31 is over the $50,000 line for filing alone.' }] },
      { id: 'flag', kind: 'choose', prompt: 'Which account raises a question for the preparer beyond the reports?', options: [
        { id: 'rrsp', text: 'The RRSP', slip: 'rrsp-flagged', then: 'The RRSP’s US tax waits by itself until money comes out; it only counts in the totals.' },
        { id: 'none', text: 'None of them', slip: 'tfsa-missed', then: 'A TFSA is a flag: the US may tax what it earns every year.' },
        { id: 'third', text: 'The TFSA', ok: true, then: 'Canada does not tax a TFSA, but the US may tax what it earns every year.' }] },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to do?', from: 'todo', right: 'change', slips: { leave: 'fbar-missed' },
        then: { leave: 'The highest balances together pass $10,000: at the least, an FBAR is due.' } }],
    steps: [
      { id: 'highest', does: 'Add each account’s highest balance in the year.', working: '$3,400 + $42,000 + $12,000 = $57,400.', ask: 'highest' },
      { id: 'fbar', does: 'Over $10,000 together: an FBAR.', working: '$57,400 is over $10,000: an FBAR is due, filed online with FinCEN by April 15.', ask: 'fbar' },
      { id: 'form', does: 'Form 8938: the December 31 total and the highest total against the lines for the filing status.', working: '$2,900 + $40,500 + $12,000 = $55,400 on December 31, over $50,000 for filing alone: yes.', ask: 'form' },
      { id: 'flag', does: 'Then the flags: a TFSA, or a Canadian fund outside an RRSP. An RRSP alone is not one.', working: 'The TFSA.', ask: 'flag' },
      { id: 'call', does: 'Anything due or flagged goes to a preparer who works on both sides of the border.', working: 'Book the preparer, before the tax return is due.', ask: 'call' }],
    deciding: ['f1', 'f2', 'f3', 't1'],
    reason: 'The highest balances add up to $57,400, over $10,000: an FBAR is due. $55,400 on December 31 passes the $50,000 line for filing alone, so Form 8938 goes with the return. The TFSA goes to a cross-border preparer; the RRSP only counts in the totals.'
  }]);
})();
