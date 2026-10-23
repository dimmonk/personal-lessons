// IT Help Desk, lesson 27: the six questions of the check, all new, no help: two for backup and safety, one each for change and evidence. Facts as in items-l27.js. Invented people. Pronouns: named ticket people are named or "they" (ruling 22).
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TYPE = 'wrong-change-type', APPR = 'skipped-approval', BACK = 'wrong-backup', ONE = 'one-copy', STAT = 'static-risk', PWR = 'wrong-guard-power', GEAR = 'wrong-gear',
    EVID = 'touched-evidence', VOL = 'lost-volatile', LIC = 'wrong-license', LEAK = 'leaked-data', UNREAD = 'ran-unread', REM = 'wrong-remote', EXPOSE = 'exposed-remote',
    TRUST = 'trusted-ai', VIRT = 'wrong-virtual', CLOUD = 'wrong-cloud', TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', SKIP = 'skipped-step', NOSPLIT = 'no-split';

  FC.items('it-support', [
    chat('l27-k-change', 'change', 'Chidi, Network', 'I changed the branch firewall rules (the filter between networks) yesterday. Today the branch cannot reach the main office, and nobody wrote down any steps for undoing what I did.',
      'Which part of change management was missing?', [
        ['A rollback plan, the exact steps to undo the change', true, 'A rollback plan is the written steps to undo a change that fails. Without one, there is no quick way back.'],
        ['End-user acceptance, where users confirm that it works', TYPE, 'Acceptance comes after the work and confirms it. It does not give the way back.'],
        ['A change freeze, a time when changes are not allowed at all', TYPE, 'A freeze blocks changes during a period. It is not a plan for undoing one.'],
        ['A risk analysis, which rates how likely harm is', TYPE, 'A risk analysis rates the danger before the change. It does not say how to undo it.']],
      'Steps for undoing a change that goes wrong are the rollback plan, one of the four things that must be ready before approval.'),
    recall('l27-k-backup', 'backup', 'A rotation keeps daily, weekly and monthly copies, each kept longer than the one before.', 'What is the rotation called? Type its short name.',
      ['gfs', 'grandfather-father-son'], 'The rotation is GFS: grandfather, father, son.'),
    chat('l27-k-safety', 'safety', 'Wade, Server room', 'The fans in the rack are thick with dust and the rack is warm. I want to clean it this afternoon.',
      'How is the dust removed?', [
        ['With the rack switched off and unplugged, blow it out with compressed air, fans held still, goggles on', true, 'Power comes off first. Compressed air does it, with the fan held so it does not spin, and goggles and a mask against the dust. An ESD-safe vacuum works too.'],
        ['Blow it out with compressed air while the rack keeps running, fans left free to spin', GEAR, 'Air can spin a fan far faster than it is built for, and the equipment is switched off and unplugged before any cleaning.'],
        ['Spray cleaner on the fans and let them dry themselves on power', GEAR, 'Liquid on a running fan can short it, and the cleaner can damage the parts.'],
        ['Leave it', GEAR, 'Dust clogs fans and heat sinks, so parts run hot and fail. It is a real problem.']],
      'Dust is cleaned with compressed air (fans held still, goggles and mask) or an ESD-safe vacuum, never with liquid on live parts.'),
    chat('l27-k-evidence', 'evidence', 'Chiara, Security', 'I made an exact copy of a suspect drive for an investigation. A lawyer will want proof later that the copy is identical to the original.',
      'How is that proven?', [
        ['By checking both with a hash, a fingerprint number that must match', true, 'A hash is a number computed from the data. If the two are the same, the copy is exact, which shows integrity.'],
        ['By leaving the original powered on beside the copy until the trial', EVID, 'Leaving the original running changes it, and the hash is what shows the match.'],
        ['By writing “same as original” on the label of the copy', EVID, 'A label is a claim. A hash is a check anyone can repeat.'],
        ['By opening both drives and comparing the files by eye', EVID, 'Opening the original changes it, and eyes cannot compare every byte.']],
      'An exact copy of a drive is checked against the original with a hash, so the original stays unchanged and the match can be shown.'),
    chat('l27-k-incr', 'backup', 'Stephen, Systems', 'We make a full backup on Sunday. Each night after that, we copy only what changed since the night before. The server failed on Friday morning.',
      'Which backups does the restore need?', [
        ['Sunday’s full and the nightly backups from Monday to Thursday, in order', true, 'Each night holds only that day’s changes, so these are incremental backups. A restore needs the last full and every incremental after it, in order.'],
        ['Sunday’s full and Thursday night’s backup, which holds all the changes', BACK, 'That is how a differential restore goes. Thursday’s here holds only Thursday’s changes, so the other nights are needed too.'],
        ['Thursday night’s backup alone', BACK, 'Thursday’s holds only one day of changes. Everything else lives in the full and the earlier nights.'],
        ['Sunday’s full alone', BACK, 'That brings back Sunday’s files and loses every change made from Monday to Thursday.']],
      'Nightly copies of only what changed since the last backup are incremental. A restore needs the last full and every incremental after it, in order.'),
    chat('l27-k-lift', 'safety', 'Ora, Stockroom', 'I have to move a heavy UPS (a battery box) from the floor to a shelf in the server room. I am on my own today, and it is awkward to hold.',
      'What is the safe way to move it?', [
        ['Bend the knees, keep the back straight, hold it close or use a cart', true, 'Lifting technique protects the back: bend the knees, keep the back straight and hold the load close. A cart or a second person helps with a heavy load.'],
        ['Bend over from the waist and lift quickly so the strain is over fast', GEAR, 'Lifting with a bent back is how backs are injured. The legs should do the work.'],
        ['Twist at the waist to swing it onto the shelf in one movement', GEAR, 'Twisting under a load strains the back. Turn the feet, not the waist.'],
        ['Put on an ESD strap first', GEAR, 'The strap guards parts from static. It does nothing for the weight of the load.']],
      'A heavy load is lifted with the knees bent, the back straight and the load close, or moved with a cart or a second person.'),
  ]);
})();
