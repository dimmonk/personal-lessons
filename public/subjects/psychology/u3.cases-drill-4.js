// Psychology, Unit Three: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names
// sounds like (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or that reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's
// "what you must be able to point to" lines). ask.type 'option': the key's question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('psychology', 'u3', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-gaslight', use: 'drill', kind: 'reverse', outcome: 'gaslight', expect: 'hear',
    options: [
      { text: '"I never said that. You always get things muddled. You must have dreamt it."', voice: 'gaslight' },
      { text: '"I didn’t do it. And you’re the one who is always late. I can’t believe you would blame me."', voice: 'darvo' },
      { text: '"You never told me that. Let’s look at the message and see who is right."', voice: 'ordexchange' },
      { text: '"I’ve never felt like this about anyone. Come away with me this weekend."', voice: 'lovebomb' }
    ],
    why: 'It is the same denial of what happened, said over and over, and aimed at the other person’s memory ("you always get things muddled").' },

  { id: 'rev-darvo', use: 'drill', kind: 'reverse', outcome: 'darvo', expect: 'hear',
    options: [
      { text: '"That never happened. You’re the one who always does this. I’m the one being attacked here."', voice: 'darvo' },
      { text: '"You’ve been lying to me about money."', voice: 'projection' },
      { text: '"You always muddle this. We talked about it in March and I never said that."', voice: 'gaslight' },
      { text: '"You’re right, I forgot. I’ll fix it tonight."', voice: 'ordexchange' }
    ],
    why: 'It has all three parts in answer to being raised with: a denial ("that never happened"), an attack ("you’re the one who always does this"), and the speaker as the one wronged ("I’m the one being attacked").' },

  { id: 'rev-lovebomb', use: 'drill', kind: 'reverse', outcome: 'lovebomb', expect: 'find',
    options: [
      { text: 'He was calling her "the one" by the second date, and went cold when she asked for a weekend on her own.', voice: 'lovebomb' },
      { text: 'She accused him of hiding things, while hiding a credit card of her own.', voice: 'projection' },
      { text: 'He said the dent was never there, again and again, for months.', voice: 'gaslight' },
      { text: 'She said thank you for the praise, and asked a question about the schedule.', voice: 'ordexchange' }
    ],
    why: 'That detail has both halves: attention far beyond what the relationship would explain, and then attention pulled back.' },

  { id: 'rev-projection', use: 'drill', kind: 'reverse', outcome: 'projection', expect: 'find',
    options: [
      { text: 'The records show that the person making the accusation is doing exactly what they accuse the other of.', voice: 'projection' },
      { text: 'A message from March shows it happened, and he has denied it every week since.', voice: 'gaslight' },
      { text: 'He was asked about the missing money and answered with a denial, an attack and "I’m the one wronged".', voice: 'darvo' },
      { text: 'He said he was sorry and offered to fix it.', voice: 'ordexchange' }
    ],
    why: 'That detail is the accuser doing what they accuse the other of, which is what the accusation matches. The records showing nothing against the other person is the second half.' },

  { id: 'rev-ordexchange', use: 'drill', kind: 'reverse', outcome: 'ordexchange', expect: 'hear',
    options: [
      { text: '"I disagree, but show me what you would change and we’ll go through it."', voice: 'ordexchange' },
      { text: '"I never said that. You’re imagining it again."', voice: 'gaslight' },
      { text: '"You’re one to talk. I’m the one being picked on here."', voice: 'darvo' },
      { text: '"You’re always on your phone when I’m talking."', voice: 'projection' }
    ],
    why: 'It is a disagreement said as it is: nothing is denied that really happened, nothing is thrown back, no accusation is made that fits the speaker, and there is no flood of attention.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo-keys', use: 'claim',
    text: '"I asked him about the missing keys, and he said he had not taken them. That is turning the blame around."',
    ask: { type: 'missing', name: 'darvo' },
    fault: 'The claim shows a denial and stops there. A denial on its own is not {o:darvo}. The case must show that he did it, and that in answer to being asked he also attacks the person who asked and plays the one wronged. The claim shows none of those.',
    corrected: 'I asked him about what had gone missing, and he said he had not taken it. That is a denial, and so far nothing more. It would be {o:darvo} only if the case showed he had taken them and, when I asked, he denied it, attacked me for asking, and said he was the one being wronged.' },

  { id: 'claim-doubt', use: 'claim',
    text: '"She told me I had the wrong day for our dinner. That is gaslighting."',
    ask: { type: 'missing', name: 'gaslight' },
    fault: 'The claim shows one correction about one dinner. It never shows that something really happened and is being denied, or that the denial comes back for weeks or months, or that the speaker has begun to doubt their own memory. One disagreement about a date is not {o:gaslight}, even when the other person was wrong.',
    corrected: 'She told me I had the wrong day for our dinner. That is a disagreement about what happened. It would be {o:gaslight} only if the case showed the dinner was arranged, she kept telling me for months that it never was, and I began to doubt my own memory.' },

  { id: 'claim-meant', use: 'claim',
    text: '"She honestly believes he is the dishonest one, so it cannot be projection."',
    ask: { type: 'missing', name: 'projection' },
    fault: 'The claim asks what she believes. The questions never ask that, and an honest belief and {o:projection} can go together. What they ask is what is done to the other person, as the case shows it: an accusation, the accuser doing exactly that, and nothing showing the other person doing it.',
    corrected: 'She may honestly believe he is dishonest. It is {o:projection} if the case shows she is the one doing what she accuses him of, and nothing in the case shows him doing it.' },

  { id: 'claim-everywhere', use: 'claim',
    text: '"My boss told me my report was late, and I felt awful for days. She was manipulating me."',
    ask: { type: 'option', step: 'T1', answer: 'plain' },
    fault: 'The claim reasons from how it felt. The questions do not ask how upset anyone was, or whether it was meant. As the case shows it, the boss said the report was late and nothing more. That is the answer {a:T1.plain}.',
    corrected: 'My boss told me my report was late, and I felt awful for days. Feeling awful tells me it hurt. It does not tell me she did one of the four things: she said what it looked like, and nothing more, so the answer is {a:T1.plain}.' },

  { id: 'claim-person', use: 'claim',
    text: '"She went cold for a week after I said no to her. She is a love-bomber."',
    ask: { type: 'missing', name: 'lovebomb' },
    fault: 'The claim names a kind of person and points to one cold week. The names are for what is done in a case, not for what a person is. And the cold week is only the second half: nothing in the claim shows far more attention earlier on.',
    corrected: 'She went cold for a week after I said no to her. That is the pulling back. It would be {o:lovebomb} only if, early on, she had given me far more praise, attention, gifts or plans than we had known each other long enough to explain.' }
]);
