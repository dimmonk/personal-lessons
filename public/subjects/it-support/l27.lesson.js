// IT Help Desk, lesson 27: Changes, backups, safety and evidence (part procedures). Core 2 objectives 4.2 (change management), 4.3 (backup and recovery), 4.4 (safety), 4.5 (environment and power) and the evidence part of 4.6 (incident response) of the A+ map
// (docs/research/it-support-aplus.md). These are recall objectives, so each group is taught by the decision it answers on a ticket (who must approve this change, which backup restores fastest, what to do
// with this drive), then asked from memory and as a choice (IT25, IT26, IT27: self-quizzing with feedback, spaced, beats rereading; IT28, IT9: the worked tickets show a wrong first guess that one check rules out;
// IT13 and IT14: hand on and write it up, for the evidence ticket). Plan: docs/subjects/it-support/plan.md, lesson 27; rulings-l1-8.md and rulings-l9-13.md.
// Order of volatility is shown simplified (RFC 3227 lists registers and cache, memory, swap, disk, remote logs, backups). Pronouns: named ticket people are named or "they" (ruling 22).
// Strands: change, backup, safety, evidence. Two worked tickets; a first group of five with the help shown; a second of seven; a third of six mixed with lessons 25 and 26; the check: six new questions,
// 5 of 6 to pass. Three reserve questions for each strand.
FC.lesson('it-support', {
  id: 'l27', part: 'procedures', title: 'Changes, backups, safety and evidence', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, split from the first draft of lesson 27 (change management, backup kinds and 3-2-1, safety and the environment, evidence and chain of custody; each taught by the decision it answers on a ticket, then asked from memory and as a choice).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'It is Friday at 4:30. A manager writes: “Please update the firmware (the built-in software of the hardware) on the accounting server tonight. It only takes ten minutes.” A technician who does it alone, with no approval, no copy of the data and no way back, can stop payroll on Monday. The desk has rules for what to get approved, copy, wear and keep.',
    'Here are four small groups of those rules. Each answers a question from a ticket: who must approve this change, which backup restores fastest, what do I wear and do before I open this, what do I do with this drive. You read each rule once, watch it used, then answer from memory and as a choice.'],
  flow: [
    { title: 'Changes: who approves, and what must be ready',
      show: [{ kind: 'prose', text: [
        'A change is anything done to a company system that could stop someone working. Change management means a written request, then approval, then the work, then a check.'] },
      { kind: 'document', form: 'table', title: 'The three types of change', head: ['Type', 'What it is', 'Who approves it'], rows: [
        { id: 'c1', cells: ['Standard', 'Low risk and routine, from a written procedure', 'Approved once, ahead of time'] },
        { id: 'c2', cells: ['Normal', 'Anything not routine; the whole process', 'The change board, a group that reviews the risk'] },
        { id: 'c3', cells: ['Emergency', 'Must be done now to stop an outage or an attack', 'A quick approval from a few named people; the paperwork follows'] }] },
      { kind: 'prose', text: [
        'The request form states the purpose (why), the scope (what is and is not included), the type, the date and time, the systems affected and the risk level from a risk analysis (how likely is harm, and how bad). Four things are ready before approval: a rollback plan (steps to undo the change), a backup plan (data and settings copied first), sandbox testing (a trial in a safe copy) and the responsible staff (named people who do the work).',
        'A maintenance window is a time agreed for changes, when few people work. A change freeze is a time when no changes are allowed, such as the week the books close. After approval comes the work (implementation), a peer review (a second technician checks it), then end-user acceptance (the users confirm it works for them).'] }] },
    { title: 'Backups: which kind, and where',
      show: [{ kind: 'prose', text: ['A backup is a copy kept somewhere else so data can come back after a loss. RAID is not one. The four kinds differ in what they copy and what a restore needs.'] },
      { kind: 'document', form: 'table', title: 'The four kinds of backup', head: ['Kind', 'What it copies', 'Making it', 'Restoring it'], rows: [
        { id: 'b1', cells: ['Full', 'Everything, every time', 'Slowest and biggest', 'Fastest: one backup'] },
        { id: 'b2', cells: ['Incremental', 'Only what changed since the last backup of any kind', 'Fastest and smallest', 'Slowest: the last full plus every incremental, in order'] },
        { id: 'b3', cells: ['Differential', 'Everything changed since the last full', 'Grows a little each day', 'The last full plus the latest differential only'] },
        { id: 'b4', cells: ['Synthetic full', 'A new full built on the backup server from the last full plus the changes', 'Light load on the computer', 'One backup, like a full'] }] },
      { kind: 'prose', text: [
        'A restore goes in place (over the originals, replacing what is there) or to an alternate location (another folder or machine, so you can compare first). A backup nobody has restored from is untested, so restore a sample on a regular schedule.',
        'Onsite copies restore fast but burn with the building; offsite copies survive it. GFS (grandfather, father, son) is a rotation of daily (son), weekly (father) and monthly (grandfather) copies, each kept longer. The 3-2-1 rule: 3 copies of the data (the original counts), on 2 kinds of media, 1 copy offsite.'] }] },
    { title: 'Safety: before you open it, lift it or plug it in',
      show: [{ kind: 'document', form: 'table', title: 'The hazard and what answers it', head: ['Hazard', 'What to use or do'], rows: [
        { id: 's1', cells: ['Static (ESD): a spark you cannot feel can kill a chip', 'An ESD strap on your wrist clipped to bare metal of the computer’s frame, which keeps you and the frame at the same charge; or an ESD mat; keep spare parts in antistatic bags'] },
        { id: 's2', cells: ['Shock', 'Disconnect power before a repair; use grounded outlets (equipment grounding) and never cut off the third pin'] },
        { id: 's3', cells: ['A heavy load', 'Lifting technique: bend the knees, back straight, load close; use a cart or a second person'] },
        { id: 's4', cells: ['Tripping', 'Cable management: tie cables together and keep them out of walkways'] },
        { id: 's5', cells: ['Fire', 'Know where the fire extinguisher is and what kind it is; never water on an electrical fire; leave and call emergency services'] },
        { id: 's6', cells: ['Dust, chips and toner', 'Safety goggles for the eyes; an air filter mask for the lungs'] }] },
      { kind: 'prose', text: ['Do not wear an ESD strap inside a power supply or an old CRT (tube) monitor: they hold a charge that can shock you. Government safety regulations apply as well.'] }] },
    { title: 'The room: heat, dust, power and the data sheet',
      show: [{ kind: 'document', form: 'table', title: 'The environment and its controls', head: ['Problem', 'What it does', 'Control'], rows: [
        { id: 'e1', cells: ['Heat', 'Parts overheat, slow down and fail', 'A cool room; ventilation: leave vents and fans clear, with space around the equipment'] },
        { id: 'e2', cells: ['Humidity too high or too low', 'Too humid: moisture and corrosion. Too dry: static', 'Keep the humidity in range'] },
        { id: 'e3', cells: ['Dust', 'Clogs fans and heat sinks (metal fins that carry heat off a chip), so parts run hot', 'With the equipment switched off and unplugged: compressed air (hold the fan still, wear goggles) or an ESD-safe vacuum'] },
        { id: 'e4', cells: ['Power surge: a spike above normal voltage', 'Burns out parts', 'A surge suppressor'] },
        { id: 'e5', cells: ['Under-voltage: a brownout, where voltage sags', 'Crashes and damage', 'A UPS (uninterruptible power supply), a battery box; most also even out the voltage'] },
        { id: 'e6', cells: ['Power loss: a blackout', 'Unsaved work and open files are lost', 'A UPS gives minutes to save and shut down; a surge suppressor cannot keep power on'] }] },
      { kind: 'prose', text: ['An MSDS (material safety data sheet, now often called an SDS) comes with products such as batteries and toner. It says what is inside, the hazards, and how to handle, store and dispose of it. Batteries and toner do not go in the regular trash.'] }] },
    { title: 'Evidence: you find something on a drive you were sent to repair',
      show: [{ kind: 'prose', text: [
        'Prohibited content (illegal files) or signs of a crime or attack: you stop repairing and start protecting evidence. Leave the computer as it is, and do not power it off, because memory is lost when the power goes: delete nothing, clean nothing, run no scan. Tell your manager (inform management), who decides whether to call law enforcement. Write down what you saw, when, and everything you touched (incident documentation).'] },
      { kind: 'document', form: 'table', title: 'Order of volatility (simplified): collect what disappears first', head: ['Order', 'What', 'Why this place'], rows: [
        { id: 'v1', cells: ['1', 'Memory (RAM), the swap file and the running state', 'Gone when the power is off'] },
        { id: 'v2', cells: ['2', 'Files on the drive', 'Stay until something overwrites them'] },
        { id: 'v3', cells: ['3', 'Logs and backups kept elsewhere', 'Last to change'] }] },
      { kind: 'prose', text: [
        'Chain of custody is the written record of who held the evidence, when, where, and what they did with it. Without an unbroken record, the evidence may not be accepted. Nobody works on the original drive: make an exact copy (an image), check it with a hash (a fingerprint number that must match), and examine the copy.'] }] },
    { title: 'Doing the change first and writing it up Monday',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It is a ten-minute job. I will do it tonight and put it in the ticket on Monday.”',
        'The same shortcut hides in every group here: a change with no approval and no way back, a backup on the machine it protects, a drive cleaned that should have been left alone. It works until the one time it does not, and then there is no copy, no plan and no record.'] }] },
    { worked: 'l27-w-change' },
    { worked: 'l27-w-evid' },
    { set: { items: ['l27-p-type', 'l27-p-backup', 'l27-p-esd', 'l27-q-ups', 'l27-q-custody'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l27-q-freeze', 'l27-q-diff', 'l27-q-321', 'l27-q-humid', 'l27-q-full', 'l27-g-emerg', 'l27-g-fire'], order: 'shuffle' } },
    { set: { items: ['l27-g-restore', 'l27-g-order', 'l27-g-synth', 'l27-g-scope', 'l27-g-image', 'l27-g-msds'], order: 'shuffle', mix: { from: ['l25', 'l26'], share: 0.3 } } }
  ],
  check: {
    items: ['l27-k-change', 'l27-k-backup', 'l27-k-incr', 'l27-k-safety', 'l27-k-lift', 'l27-k-evidence'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
