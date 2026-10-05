// Civics, Unit Four: the reverse items of stage two (one for each name), the cases of stage three, and the faulty
// claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names
// sounds like (voice), so no choice is a false statement. The app words the question from `expect`.
// Stage three shows the first answer and asks the learner to finish the route, so its cases carry marked words and a
// reason for the first question as well.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's
// "what you must be able to point to" lines). ask.type 'option': the key's question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('civics', 'u4', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'e-rev-execute', use: 'drill', kind: 'reverse', outcome: 'execute', expect: 'hear',
    options: [
      { text: '"Under the new law, applicants must send in this form by June."', voice: 'execute' },
      { text: '"The President sent the bill back with a letter of objections."', voice: 'veto' },
      { text: '"The President ordered two ships to the port."', voice: 'commander' },
      { text: '"No law lets them demand this, and nobody voted on it."', voice: 'beyondpres' }
    ],
    why: 'It is an office saying how a law that already exists is to be followed ("under the new law", "this form").' },

  { id: 'e-rev-beyondpres', use: 'drill', kind: 'reverse', outcome: 'beyondpres', expect: 'hear',
    options: [
      { text: '"Inspectors will check each form, as the law requires."', voice: 'execute' },
      { text: '"No law lets them demand this, and nobody voted on it."', voice: 'beyondpres' },
      { text: '"He walked out of the prison this morning."', voice: 'pardon' },
      { text: '"The two leaders signed it on Thursday."', voice: 'diplomacy' }
    ],
    why: 'It says that a demand is made with no law behind it ("no law lets them").' },

  { id: 'e-rev-commander', use: 'drill', kind: 'reverse', outcome: 'commander', expect: 'find',
    options: [
      { text: 'An official acting for the President signed an agreement with another country.', voice: 'diplomacy' },
      { text: 'A clerk checked a form against the list in the law.', voice: 'execute' },
      { text: 'The President told the navy to leave port on Friday.', voice: 'commander' },
      { text: 'The President signed a paper that frees a man from prison.', voice: 'pardon' }
    ],
    why: 'That detail is an order to the armed forces: where they are to go and when.' },

  { id: 'e-rev-diplomacy', use: 'drill', kind: 'reverse', outcome: 'diplomacy', expect: 'hear',
    options: [
      { text: '"The army will leave at dawn."', voice: 'commander' },
      { text: '"We talked for two days and signed on the last evening."', voice: 'diplomacy' },
      { text: '"I will not sign this bill."', voice: 'veto' },
      { text: '"The form must be filled in by June."', voice: 'execute' }
    ],
    why: 'It is the President, or someone speaking for the President, talking and signing with another country ("we talked", "signed").' },

  { id: 'e-rev-veto', use: 'drill', kind: 'reverse', outcome: 'veto', expect: 'find',
    options: [
      { text: 'The man’s sentence no longer applied.', voice: 'pardon' },
      { text: 'The bill went back to Congress with a letter of objections.', voice: 'veto' },
      { text: 'The office published the date from which the rule applies.', voice: 'execute' },
      { text: 'The two leaders shook hands in the capital.', voice: 'diplomacy' }
    ],
    why: 'That detail is a bill that Congress passed being sent back by the President.' },

  { id: 'e-rev-pardon', use: 'drill', kind: 'reverse', outcome: 'pardon', expect: 'hear',
    options: [
      { text: '"The bill is back on the desks of Congress."', voice: 'veto' },
      { text: '"The ships sail on Tuesday."', voice: 'commander' },
      { text: '"The sentence no longer applies."', voice: 'pardon' },
      { text: '"No law gives them the power to ask for it."', voice: 'beyondpres' }
    ],
    why: 'It is a punishment being lifted by the President ("no longer applies").' },

  /* ---------- Stage three: the first answer is shown; the learner answers this unit’s question and gives the name ---------- */
  { id: 'e-f-pools', use: 'drill', tier: 'varied', setting: 'community', topic: 'fences round public pools',
    text: "A law Congress passed says that every public pool built with federal money must have a fence. Last month the federal housing office published what height the fence must be and how it must be inspected. This week its inspectors visited the first pools.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the federal housing office published what height the fence must be', E1: 'published what height the fence must be and how it must be inspected' },
    reason: { D1: 'The last decision in the case is an office’s: {cue:D1}. It is an office of the government of the whole country, and nobody votes or judges.',
              E1: 'The law came first, and the office says how it is followed: {cue:E1}. The fence itself is the law’s demand, and the office adds none of its own.' },
    not: { outcome: 'beyondpres', why: 'The office’s rule is about how to follow a law that exists. It does not ask for anything the law does not already require.' } },

  { id: 'e-f-leaves', use: 'drill', tier: 'varied', setting: 'home', topic: 'a fee for collecting leaves',
    text: "The President signed an executive order that tells every home owner in the country to pay a yearly $30 fee for the collection of leaves. No law that Congress passed lets the government charge the fee, and the order does not name one.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'The President signed an executive order that tells every home owner in the country to pay a yearly $30 fee', E1: 'No law that Congress passed lets the government charge the fee' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}. Nobody votes, and no judge is asked anything.',
              E1: 'A new fee falls on every home owner, and the case says that no law allows it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'There is no law for the order to be carrying out. The order names none, and the fee goes to people outside the government.' } },

  { id: 'e-f-snow', use: 'drill', tier: 'varied', setting: 'travel', topic: 'snow-clearing machines for an island',
    text: "Ten days before the holiday, snow closed the roads to the island of Marsh. The President ordered the army to send snow-clearing machines and drivers on the ferry that same night.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'The President ordered the army to send snow-clearing machines and drivers on the ferry that same night', E1: 'The President ordered the army to send snow-clearing machines and drivers' },
    reason: { D1: 'The last decision is the President’s: {cue:D1}.',
              E1: 'The order goes to the army, which is part of the armed forces: {cue:E1}. No law is named and nobody outside the forces is commanded.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The order goes to the army, and the island is the country’s own.' } },

  { id: 'e-f-school', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a school for diplomats’ children',
    text: "The President met the prime minister of Estria in the capital for a morning, and the two agreed to open a joint school for the children of diplomats. They signed the agreement before lunch.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { D1: 'The President met the prime minister of Estria in the capital for a morning', E1: 'the two agreed to open a joint school for the children of diplomats' },
    reason: { D1: 'The last decision is the President’s: {cue:D1}. Nobody votes, and no judge appears.',
              E1: 'Two countries’ leaders agree something between them: {cue:E1}. The President sits down with another country’s leader, and signs for it.' },
    not: { outcome: 'commander', why: 'Nobody in the armed forces is given an order. The two leaders agree something between their countries.' } },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'e-claim-demo', use: 'claim',
    text: '"The federal transport office published a rule that tells airlines how to give passengers notice of delays. Only Congress makes laws, so that rule is beyond the President’s power."',
    ask: { type: 'missing', name: 'beyondpres' },
    fault: 'The claim points at a rule that an office wrote, and stops there. A rule does not go past what the President can do just because an office wrote it: offices write the rules for laws every day. The name needs more than that: {needs:beyondpres}. The claim never shows that no law stands behind the rule.',
    corrected: 'The office published a rule about delay notices. That tells you who made it, and not whether it is allowed. It is {o:beyondpres} only if no law Congress passed allows what it demands. If a law Congress passed stands behind it, and the office stays inside, it is {o:execute}.' },

  { id: 'e-claim-war', use: 'claim',
    text: '"Of course the President can declare war. The President is the head of the army and the navy."',
    ask: { type: 'option', step: 'D1', answer: 'congress' },
    fault: 'The claim treats the power to command the forces as the power to declare a war. They are different decisions made by different people. A declaration of war is made by Congress, which also votes the money for the forces.',
    corrected: 'The President is the head of the army and the navy, and gives them their orders. Only Congress can declare war, and it also votes the money for the forces.' },

  { id: 'e-claim-order', use: 'claim',
    text: '"The President signed an executive order that tells the offices how to do their work. That means it is as strong as a law, and it will last as long."',
    ask: { type: 'missing', name: 'execute' },
    fault: 'The claim treats a written order as if it were a law. An {t:order} is an instruction to the offices. It can tell them how to carry out a law, which is {o:execute}, but nobody in Congress voted on it, and the next President can undo it by signing another.',
    corrected: 'The President signed an {t:order} that tells the offices how to do their work. It is an instruction to them, and not a law. The next President can undo it by signing another.' },

  { id: 'e-claim-test', use: 'claim',
    text: '"The rules for the citizenship test are written in the Constitution, so only a change to the Constitution can change them."',
    ask: { type: 'missing', name: 'execute' },
    fault: 'The claim looks for the rules in the wrong place. Congress passed a law that requires a test, and the immigration service, a federal office, decides the details. It can change them without Congress passing anything, as long as it stays inside what the law allows. That is a federal office putting a law into practice.',
    corrected: 'A law that Congress passed requires the test. The immigration service decides the details, such as the question list, and can change them within what the law allows. So check uscis.gov for the rules that apply to you.' },

  { id: 'e-claim-pardon', use: 'claim',
    text: '"The President can pardon anyone convicted of any crime, whether the law they broke was a state’s or the country’s."',
    ask: { type: 'missing', name: 'pardon' },
    fault: 'The claim stops at who the President is, and ignores which law was broken. {needs:pardon} The President’s forgiveness reaches crimes against federal law only. For a crime against a state’s own law, only that state can forgive it, through its governor.',
    corrected: 'The President can forgive someone convicted of a federal crime. If the law that was broken is a state’s, only that state’s governor can forgive it.' },

  { id: 'e-claim-veto', use: 'claim',
    text: '"The President can stop any bill for good by refusing to sign it."',
    ask: { type: 'option', step: 'E1', answer: 'sendback' },
    fault: 'The claim is right that the President can refuse to sign a bill and send it back. It is wrong that this stops the bill for good. Congress can pass the bill anyway, if two-thirds of the House and two-thirds of the Senate vote for it again.',
    corrected: 'The President can refuse to sign a bill and send it back to Congress with objections. Congress can still pass the bill, if two-thirds of the House and two-thirds of the Senate vote for it again.' }
]);
