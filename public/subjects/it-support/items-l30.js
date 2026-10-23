// IT Help Desk, lesson 30 "The mock exam": the practice group, four new mixed questions in the style of the exam (one each from hardware, security, operational procedures and operating systems), before the drawn check.
// Strand whole; none is in the check (a drawn check takes its questions from the topic strands only). Facts as in lessons 11, 26, 27 and 21. Invented people; each name here has one job.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const W = 'whole';
  const chat = (id, from, text, prompt, rows, reason) => item({ id, strand: W,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });

  FC.items('it-support', [
    chat('l30-p-raid10', 'Bertil, Server team', 'We are building a small file server with four 1 TB drives configured as RAID 10. How much room will we have for files?',
      'How much usable space does the array give?', [
        ['2 TB, because half of the drives hold mirror copies', true, 'RAID 10 mirrors pairs of drives and stripes across the pairs, so half the space is the copy.'],
        ['4 TB, because all four drives hold files', 'capacity-slip', 'That counts every drive as space. RAID 10 keeps a mirror copy of each pair.'],
        ['3 TB, because one of the four drives holds the parity for the rest', 'capacity-slip', 'One drive of parity is RAID 5, which has no mirrors. RAID 10 gives half.'],
        ['1 TB, because all four drives keep one copy of the same files', 'capacity-slip', 'Every drive holding the same files is a mirror of all four. RAID 10 mirrors pairs.']],
      'RAID 10 mirrors pairs and stripes across them, so four 1 TB drives give 2 TB.'),
    chat('l30-p-tailgate', 'Corvin, Security desk', 'A person in a delivery jacket waited at the badge door of the finance floor, then walked in right behind a worker who had just badged in. Nobody questioned them.',
      'Which attack is this?', [
        ['Tailgating', true, 'Walking through a secured door behind a person who opened it is tailgating.'],
        ['Shoulder surfing', 'wrong-attack', 'Shoulder surfing is watching someone type a password or code. Nobody typed anything here.'],
        ['Vishing', 'wrong-attack', 'Vishing is a phone call. This happened at a door.'],
        ['Whaling', 'wrong-attack', 'Whaling is a phishing email aimed at a senior person, not a walk through a door.']],
      'Following a person through a door they opened with a badge is tailgating.'),
    chat('l30-p-incr', 'Dagny, Accounting', 'We run a full backup on Sunday night and an incremental backup every night after it. My drive failed on Thursday morning and I need everything back.',
      'Which backups do you restore?', [
        ['Sunday’s full backup, then Monday, Tuesday and Wednesday nights in order', true, 'An incremental holds only what changed since the last backup, so the full one and every incremental after it are needed, in order.'],
        ['Sunday’s full backup and Wednesday night’s backup only, as the newest one', 'wrong-backup', 'That is how a differential restore works. An incremental of Wednesday holds only Wednesday’s changes.'],
        ['Wednesday night’s backup only, because it is the newest one and holds the drive', 'wrong-backup', 'An incremental on its own holds only one day’s changes. The full backup is the base.'],
        ['Sunday’s full backup only, since it holds the whole drive from the start', 'wrong-backup', 'It would bring back Sunday’s files and lose three days of work.']],
      'An incremental restore needs the last full backup and every incremental after it, in order.'),
    chat('l30-p-tracert', 'Emrys, Network team', 'Users in the branch office can reach the head office but not our supplier’s site. I want to see each router the traffic crosses on the way to the supplier, and where it stops.',
      'Which command shows that?', [
        ['tracert, which lists each router on the way and where it stops answering', true, 'tracert shows each hop on the path to a site, which is what a path question needs.'],
        ['ipconfig, which lists the address, the gateway and the DNS server of this computer', 'wrong-tool', 'ipconfig shows this computer’s own settings, not the routers beyond it.'],
        ['nslookup, which turns the supplier’s site name into an address and shows which server answered', 'wrong-tool', 'nslookup tests the name lookup. The question is about the path.'],
        ['ping, which says whether the supplier’s site answered', 'wrong-tool', 'ping says whether one address answered, not where the path stops.']],
      'The command that lists each router on the way to a site is tracert.')
  ]);
})();
