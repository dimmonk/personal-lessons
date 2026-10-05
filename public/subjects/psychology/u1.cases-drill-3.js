// Psychology, Unit One: drill items that are not stories. Reverse items (first stage) and faulty claims (last stage).
// A reverse item gives the kind and asks what you would expect to hear or find. Every option is what one of the
// four kinds sounds like; voice says which. In a gate unit a reverse item carries `family`, not `outcome`.
// A claim is something a person might say. ask is either
//   { type: 'missing', name: family }   "the claim treats this as <that kind>: what would you need to see?" (choices: the key's needs lines)
//   { type: 'option', step, answer }    the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('psychology', 'u1', [

  /* ---------- reverse items: one for each kind ---------- */
  { id: 'g-rev-reasoning', use: 'drill', kind: 'reverse', outcome: 'reasoning', expect: 'hear',
    options: [
      { text: '"I thought about it for a week, and the numbers don’t add up, so I said no."', voice: 'reasoning' },
      { text: '"You’re imagining it. You always do this."', voice: 'tactic' },
      { text: '"He has been the same since school, with everyone."', voice: 'pattern' },
      { text: '"She has had no sleep since the break-in."', voice: 'none' }
    ],
    why: 'It gives a choice of the speaker’s own ("I said no") and the reasons for it. Nobody else is spoken to, and nobody else is spoken about.' },

  { id: 'g-rev-tactic', use: 'drill', kind: 'reverse', outcome: 'tactic', expect: 'find',
    options: [
      { text: 'She wrote down three reasons for selling the car, and showed them to nobody.', voice: 'reasoning' },
      { text: 'He told her that she was the problem, and she spent the night wondering whether she was.', voice: 'tactic' },
      { text: 'People who knew him in four cities, over thirty years, all said the same thing.', voice: 'pattern' },
      { text: 'It was the week of the funeral, and by the end of the month it had passed.', voice: 'none' }
    ],
    why: 'That detail has two people in it, something one of them says to the other about her, and where it leaves her.' },

  { id: 'g-rev-pattern', use: 'drill', kind: 'reverse', outcome: 'pattern', expect: 'find',
    options: [
      { text: 'It started on the day the letter came, and stopped when the answer arrived.', voice: 'none' },
      { text: 'He said it to her face, and she apologised.', voice: 'tactic' },
      { text: 'Her school friends, her first employer and her grown-up children all describe it.', voice: 'pattern' },
      { text: 'He listed what the old van had cost him and what a new one would.', voice: 'reasoning' }
    ],
    why: 'That detail gives you years (from school to grown-up children), more than one place, and more than one set of people who say the same.' },

  { id: 'g-rev-none', use: 'drill', kind: 'reverse', outcome: 'none', expect: 'hear',
    options: [
      { text: '"He has been bad-tempered all week, since the news about the factory."', voice: 'none' },
      { text: '"I’m not going, because last time it was a waste of money."', voice: 'reasoning' },
      { text: '"You made me do it. You know how you get."', voice: 'tactic' },
      { text: '"Every job she has ever had, it ends the same way."', voice: 'pattern' }
    ],
    why: 'It ties the behaviour to one week and to something real that happened, and it claims nothing more.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'g-claim-demo', use: 'claim',
    text: '"He has barely spoken to any of us since his dog died. He’s punishing us."',
    ask: { type: 'missing', name: 'tactic' },
    fault: 'The claim turns a quiet stretch after a loss into something done to "us". But it shows nothing said or done to any one person about them. Being quiet with everyone is not about anyone.',
    corrected: 'He has barely spoken to anyone since his dog died. That is how a person can be for a while after a loss. It would be {a:D1.tactic} only if you could point to this: {needs:tactic}.' },

  { id: 'g-claim-once', use: 'claim',
    text: '"I saw how he spoke to his mother at that one lunch. That told me everything I need to know about him."',
    ask: { type: 'missing', name: 'pattern' },
    fault: 'The claim rests a view of a whole man on one lunch. One lunch can be vivid, and it is still one occasion, in one place, with one person. "Everything I need to know about him" is a claim about years, and the speaker has an hour.',
    corrected: 'I saw how he spoke to his mother at one lunch. That is something one person said to another, on one occasion, and it tells me what happened at that lunch. To know what he is like, I would need to point to this: {needs:pattern}.' },

  { id: 'g-claim-clinical', use: 'claim',
    text: '"She has been tearful and jumpy ever since the burglary. Honestly, she’s unstable."',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim describes one short stretch that began with something real, and then uses a word for a whole person. Being tearful and jumpy after a burglary fits what happened. The claim shows no reasoning, nothing said to anyone about them, and no years.',
    corrected: 'She has been tearful and jumpy since the burglary. Something frightening happened, and she is still shaken. That is {a:D1.none}, and there is nothing more to name.' },

  { id: 'g-claim-row', use: 'claim',
    text: '"They have been together a month, and last night he told her she had imagined the whole conversation. He’s a born liar."',
    ask: { type: 'option', step: 'D1', answer: 'tactic' },
    fault: 'What the claim describes is one evening between two people: something he said to her about what had passed between them. "A born liar" is a claim about his whole life, and the claim shows one night of it.',
    corrected: 'Last night he told her she had imagined the whole conversation. That is {a:D1.tactic}, and it deserves to be looked at as that. Whether it is how he is with everyone, and has been for years, is something one evening cannot show.' },

  { id: 'g-claim-van', use: 'claim',
    text: '"He spent ten minutes telling me why he is keeping that old van. He always has to be right. It’s who he is."',
    ask: { type: 'option', step: 'D1', answer: 'reasoning' },
    fault: 'What the claim describes is one man giving his reasons for one choice. "He always has to be right" and "it’s who he is" are claims about years, and the claim shows ten minutes.',
    corrected: 'He spent ten minutes telling me why he is keeping the van. That is {a:D1.reasoning}: one choice, and his reasons for it. Whether the reasons are good is a fair thing to ask next. What he is like in general is something ten minutes cannot show.' }
]);
