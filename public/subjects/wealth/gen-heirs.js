// Wealth, lesson 10 "Who inherits, and who can act": two kinds of question, made fresh (lesson standard 3, generators).
// Beneficiary pages (research W29, W58, W61, W62, W63): each account with a page goes by the page first, not the will (the law may still help a
// current spouse on a 401(k), or revoke an ex-spouse on an IRA or a life policy in some states: a lawyer's question, so the items ask only
// whether each page needs a fix, which every state agrees on); each page needs
// someone named (not blank, not "my estate"), the right person after a marriage, a divorce or a birth, and a backup. A household's family
// changes and three pages (401(k), IRA, life insurance); one page carries the kind's fault, at a page drawn by the seed, and the other two are each
// drawn sound or faulty (so one, two or three pages need a fix), or none does. Five kinds: ex (a page
// still names the former spouse), estate ("My estate"), blank (no one named), nobackup (no backup), fine (all current: leave).
// The papers and the estate tax line (W30, W59, W60): a will, a durable power of attorney, and everything held against the dated line
// ($15,000,000 for 2026): a paper missing, or an estate over the line, goes to an estate lawyer; everything else is left.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const PEOPLE = ['Maya', 'Jordan', 'Elena', 'Ravi'];
  const SPOUSES = ['Sam', 'Alex', 'Robin', 'Casey'];
  const EXES = ['Chris', 'Morgan', 'Jamie', 'Taylor'];
  const CHILDREN = ['Lily', 'Noah', 'Ava', 'Leo'];
  const PAGES = [{ id: '401k', slot: 'plan', name: '401(k)', said: '401(k)' }, { id: 'ira', slot: 'ira', name: 'IRA', said: 'IRA' }, { id: 'life', slot: 'life', name: 'Life insurance', said: 'life insurance' }];
  // the state of one page: sound, or one of the four faults the rule names
  const FAULT = {
    ex: { primary: n => `${n.ex}, spouse`, backup: n => n.child, why: n => `still names ${n.ex}, divorced in ${n.divorced}` },
    estate: { primary: () => 'My estate', backup: () => 'None named', why: () => 'names “My estate”, so the will decides, not a page' },
    blank: { primary: () => 'None named', backup: () => 'None named', why: () => 'names no one, so the plan’s own default rule decides (often the spouse or the estate)' },
    nobackup: { primary: n => `${n.spouse}, spouse`, backup: () => 'None named', why: n => `names no backup, if ${n.spouse} died first` }
  };
  const STATES = ['sound', 'sound', 'sound', 'ex', 'estate', 'blank', 'nobackup'];
  const PARAMS = { whoAt: [0, 3, 1], spouseAt: [0, 3, 1], exAt: [0, 3, 1], childAt: [0, 3, 1], married1: [2008, 2014, 1], gap: [3, 6, 1], born: [2, 4, 1] };
  // `kind` is the fault forced on one page (drawn by `pageAt`); the other two pages are each drawn sound or faulty, so one, two or all three
  // pages may need a fix and the page to fix is never simply the odd one out. `fine`: every page sound.
  function household(pick, kind){
    const n = { who: PEOPLE[pick('whoAt')], spouse: SPOUSES[pick('spouseAt')], ex: EXES[pick('exAt')], child: CHILDREN[pick('childAt')] };
    const married1 = pick('married1'), divorced = married1 + pick('gap'), married2 = divorced + 2, bornYear = married2 + pick('born');
    const ctx = { ...n, divorced }, at = kind === 'fine' ? -1 : pick('pageAt'), others = kind === 'fine' ? [] : [pick('otherA'), pick('otherB')];
    const states = PAGES.map((_, i) => kind === 'fine' ? 'sound' : i === at ? kind : STATES[others[(i - at + 2) % 3]]);
    const pageOf = state => state === 'sound' ? { primary: `${n.spouse}, spouse`, backup: n.child } : { primary: FAULT[state].primary(ctx), backup: FAULT[state].backup(ctx) };
    const pages = states.map(pageOf), why = (p, state) => state === 'sound' ? `The ${p.said} page names ${n.spouse}, with ${n.child} as backup: leave it.` : `The ${p.said} page ${FAULT[state].why(ctx)}: fix it.`;
    const lines = PAGES.map((p, i) => why(p, states[i])), faulty = PAGES.filter((_, i) => states[i] !== 'sound');
    const slots = {};
    PAGES.forEach((p, i) => { const bad = states[i] !== 'sound'; Object.assign(slots, { [`${p.slot}Call`]: bad ? 'change' : 'leave', [`${p.slot}C`]: bad ? '' : 'fixed-sound', [`${p.slot}L`]: bad ? 'page-missed' : '', [`${p.slot}Why`]: lines[i] }); });
    return {
      ...n, married1, divorced, married2, bornYear, ...slots, faults: faulty.length, states: states.join(' '),
      planWho: pages[0].primary, planBackup: pages[0].backup, iraWho: pages[1].primary, iraBackup: pages[1].backup, lifeWho: pages[2].primary, lifeBackup: pages[2].backup,
      reasonText: faulty.length ? `${lines.filter((_, i) => states[i] !== 'sound').join(' ')} Fix each on the account’s website, or put a day for it in your calendar.` : `Each page names ${n.spouse}, married in ${married2}, with ${n.child} as backup: nothing to fix.`
    };
  }
  const family = { kind: 'document', form: 'table', tab: 'Family', title: 'What changed in {who}’s family', head: ['Year', 'What happened'],
    rows: [{ id: 'y1', cells: ['{married1}', 'Married {ex}'] }, { id: 'y2', cells: ['{divorced}', 'Divorced {ex}'] }, { id: 'y3', cells: ['{married2}', 'Married {spouse}'] },
      { id: 'y4', cells: ['{bornYear}', '{child} born'] }] };
  const SLOT = [['planWho', 'planBackup'], ['iraWho', 'iraBackup'], ['lifeWho', 'lifeBackup']];
  const pageDoc = (tab, i) => ({ kind: 'document', form: 'beneficiary', tab, title: `${tab}: beneficiaries on file for {who}`, head: ['Beneficiary', 'Name'],
    rows: [{ id: `p${i}`, cells: ['Primary (100%)', `{${SLOT[i - 1][0]}}`] }, { id: `b${i}`, cells: ['Backup (contingent)', `{${SLOT[i - 1][1]}}`] }] });
  const LABEL = { '401k': 'The 401(k) page', ira: 'The IRA page', life: 'The life insurance page' };
  const pagesAsk = { id: 'pages', kind: 'form', prompt: 'Read each page against the family: fix it, or leave it?',
    fields: PAGES.map(p => ({ id: p.id, label: LABEL[p.id], type: 'choose', from: 'fixPage', right: `{${p.slot}Call}`,
      slips: { change: `{${p.slot}C}`, leave: `{${p.slot}L}` }, then: { change: `{${p.slot}Why}`, leave: `{${p.slot}Why}` } })) };
  // the will never fixes a page: the one answer every state's law agrees on (who would get the money is a lawyer's question, W62, W63)
  const willAsk = { id: 'will', kind: 'choose', prompt: '{who}’s will leaves everything to {spouse}. Does the will take care of the pages that need a fix?', shuffle: true,
    options: [{ id: 'no', text: 'No: a will does not change a beneficiary page. Fix the page.', ok: true, then: 'The page comes first. The law may sometimes help a current spouse, but that can take a court to sort out; a fixed page does not.' },
      { id: 'yes', text: 'Yes: the will names {spouse}, and the will comes last', slip: 'will-trusted', then: 'An account with a beneficiary page goes by its page, not by the will.' }] };
  const heirsGen = (kind, id) => ({
    id, strand: 'heirs', facets: { call: kind === 'fine' ? 'leave' : 'change' }, params: kind === 'fine' ? PARAMS : { ...PARAMS, pageAt: [0, 2, 1], otherA: [0, 6, 1], otherB: [0, 6, 1] },
    make: pick => household(pick, kind), blocks: [family, pageDoc('401(k)', 1), pageDoc('IRA', 2), pageDoc('Life insurance', 3)],
    asks: [pagesAsk, ...(kind === 'ex' ? [willAsk] : [])],
    steps: [
      { id: 'pages', does: 'Read each page against the family: someone named (not blank, not “my estate”), the right person now, a backup.', working: '{planWhy} {iraWhy} {lifeWhy}', ask: 'pages' },
      ...(kind === 'ex' ? [{ id: 'will', does: 'A will does not change a page.', working: 'Fix the page itself.', ask: 'will' }] : [])],
    deciding: ['y2', 'y3', 'y4', 'p1', 'b1', 'p2', 'b2', 'p3', 'b3'], reason: '{reasonText}'
  });

  /* ---------- the papers, and the estate tax line ---------- */
  const PAPERS = { both: ['Signed {willYear}', 'Signed {willYear}'], noWill: ['None', 'Signed {willYear}'], noPoa: ['Signed {willYear}', 'None'] };
  const ESTATE = { under: [300000, 3000000, 50000], over: [16000000, 30000000, 500000] };
  const papersGen = (papers, size, id) => ({
    id, strand: 'heirs', facets: { call: papers === 'both' && size === 'under' ? 'leave' : 'change' },
    params: { whoAt: [0, 3, 1], estate: ESTATE[size], willYear: [2015, 2024, 1] },
    make: pick => ({ who: PEOPLE[pick('whoAt')], estateText: whole(pick('estate')), willYear: pick('willYear') }),
    blocks: [{ kind: 'document', form: 'table', tab: 'Papers', title: '{who}’s papers', head: ['Paper', 'On file'],
      rows: [{ id: 'w1', cells: ['Will', PAPERS[papers][0]] }, { id: 'w2', cells: ['Durable power of attorney for money', PAPERS[papers][1]] },
        { id: 'w3', cells: ['Everything {who} owns, less what is owed', '{estateText}'] }] }],
    asks: [
      { id: 'missing', kind: 'choose', prompt: 'Is a paper missing?', shuffle: true, options: [
        { id: 'will', text: 'The will', ...(papers === 'noWill' ? { ok: true, then: 'Without a will, nothing of {who}’s own says who gets what has no beneficiary page.' } : { slip: 'fixed-sound', then: 'The will is on file.' }) },
        { id: 'poa', text: 'The power of attorney', ...(papers === 'noPoa' ? { ok: true, then: 'Without one, a court may have to name someone to act on {who}’s money if {who} cannot.' } : { slip: 'fixed-sound', then: 'The power of attorney is on file.' }) },
        { id: 'none', text: 'Neither', ...(papers === 'both' ? { ok: true, then: 'Both papers are on file.' } : { slip: 'paper-missed', then: 'One of the two papers is not on file.' }) }] },
      { id: 'estate', kind: 'choose', prompt: 'Does {who} need an estate lawyer for federal estate tax?', from: 'yesno', right: size === 'over' ? 'yes' : 'no',
        slips: size === 'over' ? { no: 'estate-missed' } : { yes: 'estate-tax-feared' },
        then: size === 'over' ? { no: '{estateText} is over the $15,000,000 line.' } : { yes: '{estateText} is far under the $15,000,000 line: the tax does not reach it.' } }],
    steps: [
      { id: 'papers', does: 'Look for a will and a durable power of attorney.', working: papers === 'both' ? 'Both are on file.' : papers === 'noWill' ? 'No will.' : 'No power of attorney.', ask: 'missing' },
      { id: 'estate', does: 'Hold everything against the estate tax line.', working: size === 'over' ? '{estateText} is over $15,000,000: an estate lawyer.' : '{estateText} is far under $15,000,000: leave it.', ask: 'estate' }],
    deciding: ['w1', 'w2', 'w3'],
    reason: `${papers === 'both' ? 'Both papers are on file.' : papers === 'noWill' ? 'There is no will to cover what has no beneficiary page.' : 'There is no power of attorney naming who can act if {who} cannot.'} ${size === 'over' ? '{estateText} is over the $15,000,000 line: a question for an estate lawyer.' : '{estateText} is far under the $15,000,000 line, so estate tax needs no plan.'}`
  });
  FC.gen('wealth', [heirsGen('ex', 'g-heirs-ex'), heirsGen('estate', 'g-heirs-estate'), heirsGen('blank', 'g-heirs-blank'), heirsGen('nobackup', 'g-heirs-backup'), heirsGen('fine', 'g-heirs-fine'),
    papersGen('both', 'under', 'g-papers-fine'), papersGen('noPoa', 'under', 'g-papers-poa'), papersGen('noWill', 'under', 'g-papers-will'), papersGen('both', 'over', 'g-papers-large')]);

  // the worked household: Maya married Chris in 2012, divorced in 2016, married Sam in 2018, Lily born in 2021; the 401(k) page still names Chris
  FC.items('wealth', [{
    id: 'w-heirs', strand: 'heirs', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'table', tab: 'Family', title: 'What changed in Maya’s family', head: ['Year', 'What happened'],
        rows: [{ id: 'y1', cells: ['2012', 'Married Chris'] }, { id: 'y2', cells: ['2016', 'Divorced Chris'] }, { id: 'y3', cells: ['2018', 'Married Sam'] }, { id: 'y4', cells: ['2021', 'Lily born'] }] },
      { kind: 'document', form: 'beneficiary', tab: '401(k)', title: '401(k): beneficiaries on file for Maya', head: ['Beneficiary', 'Name'],
        rows: [{ id: 'p1', cells: ['Primary (100%)', 'Chris, spouse'] }, { id: 'b1', cells: ['Backup (contingent)', 'Lily'] }] },
      { kind: 'document', form: 'beneficiary', tab: 'IRA', title: 'IRA: beneficiaries on file for Maya', head: ['Beneficiary', 'Name'],
        rows: [{ id: 'p2', cells: ['Primary (100%)', 'Sam, spouse'] }, { id: 'b2', cells: ['Backup (contingent)', 'Lily'] }] },
      { kind: 'document', form: 'beneficiary', tab: 'Life insurance', title: 'Life insurance: beneficiaries on file for Maya', head: ['Beneficiary', 'Name'],
        rows: [{ id: 'p3', cells: ['Primary (100%)', 'Sam, spouse'] }, { id: 'b3', cells: ['Backup (contingent)', 'None named'] }] }],
    asks: [
      { id: 'pages', kind: 'form', prompt: 'Read each page against the family: fix it, or leave it?', fields: [
        { id: '401k', label: 'The 401(k) page', type: 'choose', from: 'fixPage', right: 'change', slips: { leave: 'page-missed' },
          then: { change: 'The 401(k) page still names Chris, divorced in 2016: fix it.', leave: 'The 401(k) page still names Chris, divorced in 2016: fix it.' } },
        { id: 'ira', label: 'The IRA page', type: 'choose', from: 'fixPage', right: 'leave', slips: { change: 'fixed-sound' },
          then: { change: 'The IRA page names Sam, with Lily as backup: leave it.', leave: 'The IRA page names Sam, with Lily as backup: leave it.' } },
        { id: 'life', label: 'The life insurance page', type: 'choose', from: 'fixPage', right: 'change', slips: { leave: 'page-missed' },
          then: { change: 'The life insurance page names no backup, if Sam died first: fix it.', leave: 'The life insurance page names no backup, if Sam died first: fix it.' } }] },
      { id: 'will', kind: 'choose', prompt: 'Maya’s will leaves everything to Sam. Does the will take care of the pages that need a fix?',
        options: [{ id: 'yes', text: 'Yes: the will names Sam, and the will comes last', slip: 'will-trusted', then: 'An account with a beneficiary page goes by its page, not by the will.' },
          { id: 'no', text: 'No: a will does not change a beneficiary page. Fix the page.', ok: true, then: 'The page comes first. The law may sometimes help a current spouse, but that can take a court to sort out; a fixed page does not.' }] }],
    steps: [
      { id: 'pages', does: 'Read each page against the family: someone named (not blank, not “my estate”), the right person now, a backup.', working: 'The 401(k) page still names Chris, divorced in 2016: fix it. The IRA page names Sam, with Lily as backup: leave it. The life insurance page names Sam but no backup: fix it.', ask: 'pages' },
      { id: 'will', does: 'A will does not change a page.', working: 'Fix the pages themselves.', ask: 'will' }],
    deciding: ['y2', 'y3', 'p1', 'p2', 'p3', 'b3'],
    reason: 'The 401(k) page still names Chris, divorced in 2016, and the life insurance page names no backup. The will changes neither: fix both pages on their websites, or put a day for it in your calendar. Who would get the money if Maya died first is a question a court might have to settle; a fixed page settles it now.'
  }]);
})();
