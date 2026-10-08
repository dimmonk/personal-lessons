// Singing, Unit Three, part one: the opening card and the first three names. A breath that works is taught first (the real
// thing, so you know what the other four are measured against), then a shallow breath, then unplanned breaths, each next to
// its nearest neighbor. This is an ACTION subject and a BRANCH unit: the first question already said the trouble is the air,
// and this unit teaches the one question that gives each trouble its name.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet
// card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// Key wording is never typed here: tokens are filled in from key.js. A meet card is its story, then the idea (explain), then
// how to spot it (spot: numbered steps, an action and one short sentence of why), the name, and what to do (act: steps too).

FC.cards('singing', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Most “I have no breath” problems are one of four habits',
    canDo: 'When the air gives out in a line, you can tell which of five things is happening before you change anything: four habits, each with a fix you can try the same day, and one where nothing is wrong. A hand on your belly, a mirror and your own ears are enough.',
    everyday: [
      'You grab a breath at the end of a long line and the air is gone halfway through the next. Or you hear a hiss in the soft parts. Or you shout the chorus and your throat is tired for the rest of the night. Or you find yourself gasping in the middle of a word. All of these feel like “I have no breath”, and each one has a different fix.',
      'Most of the time it is one of four habits. Sometimes the breath was fine all along, and the fix is to leave it alone.'
    ],
    map: { branch: 'breath' } },

  /* ---------- A breath that works ---------- */
  { id: 'meet-breathfine', kind: 'meet', outcome: 'breathfine',
    link: 'Start with the one that needs no fix, so you know what the other four are measured against.',
    case: 'b-meet-quiet', mark: 'B1',
    explain: [
      'Rosa was sure she had no breath, so she checked instead of guessing. Her belly moved out, her shoulders stayed still, the breath made no sound, and there was air left when the line ended. Nothing is wrong with a breath like that.',
      'Feeling short of air in a line is the usual complaint, and it does not always mean the breath is wrong. Rosa could have spent a week changing a breath that already worked. The check takes a few seconds.'
    ],
    spot: [
      { do: 'Put a hand on your belly and breathe in: Rosa’s belly moved out.', why: 'A belly that moves out means the breath went low.' },
      { do: 'Watch your shoulders in a mirror: Rosa’s did not move.', why: 'Shoulders that stay still mean the breath is not high.' },
      { do: 'Listen to the breath: Rosa’s was too quiet to hear.', why: 'A quiet breath is not a gasp.' },
      { do: 'Check the end of the line: Rosa still had air left.', why: 'Air left over means the breath was enough for the line.' }
    ],
    feature: { step: 'B1', option: 'lasts' },
    name: 'This is {o:breathfine}. Nothing is wrong here. It has a name so that you do not try to fix a breath that already works.',
    act: [
      { do: 'Change nothing about how you breathe.', why: 'Nothing here needs a fix.' },
      { do: 'When the doubt comes back, run the check again: a hand on your belly, your shoulders in a mirror, and a listen to the breath.', why: 'It tells you whether the breath is the problem.' },
      { do: 'If the line still sounds wrong, ask again: {q:D1}', why: 'Then the trouble is somewhere other than the air.' }
    ] },

  { id: 'check-breathfine', kind: 'check', after: 'breathfine',
    case: 'b-check-pew',
    ask: { type: 'phrase', step: 'B1', say: 'Which words show that Walt’s breath works? Tap them.',
           answer: 'it moves out, his shoulders do not lift, and the breath makes no sound' } },

  /* ---------- A shallow breath ---------- */
  { id: 'meet-shallowbreath', kind: 'meet', outcome: 'shallowbreath',
    link: 'Now the opposite of {o:breathfine}: a breath that is quick and stays high.',
    case: 'b-meet-gasp', mark: 'B1',
    explain: [
      'Marcus took a quick, noisy gasp, and his shoulders jumped. A breath that lifts the shoulders is a high one, and a high one gives out sooner than a low one. Halfway through the line his air was gone, and the last words came out squeezed.'
    ],
    spot: [
      { do: 'Watch your shoulders as you breathe in: Marcus’s jumped up.', why: 'Shoulders or a chest that lift mean the breath is high.' },
      { do: 'Listen to the breath: Marcus’s was a quick, noisy gasp.', why: 'A low breath is quiet.' },
      { do: 'Check the middle of the line: Marcus’s air was gone halfway through.', why: 'A low breath lasts the whole line.' },
      { do: 'Listen to the end of the line: Marcus’s last words were squeezed.', why: 'A squeezed ending comes when the air is gone.' }
    ],
    feature: { step: 'B1', option: 'gone' },
    name: 'This is {o:shallowbreath}. The breath is the problem: it is taken quickly and high, so the air is gone early.',
    act: [
      { do: 'Breathe low, the way you breathe lying down, with a hand on your belly.', why: 'Your belly should move out and your shoulders should stay still.' },
      { do: 'Breathe in through your mouth, quietly, as if you were surprised.', why: 'That makes the breath quiet instead of a gasp.' },
      { do: 'Practice a slow hiss: breathe low, then hiss “sss” as long as you can while you count.', why: 'Your count will grow over the days, which shows the breath is lasting longer.' },
      { do: 'In the song, start your breath a beat early.', why: 'That leaves time for a low breath instead of a gasp.' }
    ] },

  { id: 'check-shallowbreath', kind: 'check', after: 'shallowbreath',
    case: 'b-check-rehearsal',
    ask: { type: 'option', step: 'B1', among: ['lasts', 'gone'] } },

  { id: 'look-shallowbreath-breathfine', kind: 'lookalike', ledger: 'shallowbreath~breathfine',
    link: 'Both can leave you feeling short of air, so here they are side by side.',
    cases: ['b-lk-ballad-fine', 'b-lk-ballad-gasp'],
    instruction: 'Both stories are about Owen and the same ballad. Compare one thing: what his breath does as he breathes in.',
    prompt: { kind: 'which', option: 'B1.gone', answer: 'b-lk-ballad-gasp' },
    difference: [
      'In Story A Owen puts a hand on his belly: it moves out, his shoulders stay still, and the breath is quiet. He has air left at the end. That is {a:B1.lasts}, so it is {o:breathfine}.',
      'In Story B his shoulders jump up as he gasps in, and the air is gone before the end. That is {a:B1.gone}, so it is {o:shallowbreath}.',
      'Same singer, same song, same long line. Owen can tell them apart in a second, with a hand on his belly and a look at his shoulders.'
    ] },

  /* ---------- Unplanned breaths ---------- */
  { id: 'meet-unplanned', kind: 'meet', outcome: 'unplanned',
    link: 'Next, a breath that is low and full, but taken in the wrong place.',
    case: 'b-meet-midword', mark: 'B1',
    explain: [
      'Beth’s breaths are fine. They are low and full, with her belly out and her shoulders still. The trouble is where she takes them: she waits until she runs out, so a breath lands in the middle of a word and the line comes out in chunks.',
      'Nobody planned those breaths, and that is the whole problem. A breath at a comma goes unnoticed. A breath forced into the middle of a word breaks the word in two.'
    ],
    spot: [
      { do: 'Check the breath itself: Beth’s was low and full.', why: 'If it were a quick gasp with the shoulders up, it would be {o:shallowbreath}.' },
      { do: 'Find where she breathed in: in the middle of “tomorrow”.', why: 'A breath in the middle of a word was taken when she ran out, not when she chose.' },
      { do: 'Listen to the line: it came out in chunks.', why: 'Every breath taken wherever the air gave out chops the line there.' },
      { do: 'Look in your copy of the words for marks that say where to breathe: Beth had none.', why: 'With no marks, running out is the only signal to breathe.' }
    ],
    feature: { step: 'B1', option: 'grabbed' },
    name: 'This is {o:unplanned}. The breath is fine. What is missing is a plan for where to take it.',
    act: [
      { do: 'Read the words and mark where to breathe with a tick: at commas, at the ends of lines, and before a long phrase.', why: 'Then each breath has a place before you need it.' },
      { do: 'Take a breath early at a marked spot, even before you need it.', why: 'That way you do not run out in the middle of a word.' },
      { do: 'If a line is too long, sneak a quick breath at a comma instead of in the middle of a word.', why: 'A comma is a natural place to pause, and the middle of a word is not.' },
      { do: 'Speak the words in rhythm with your marked breaths before you sing them.', why: 'The places are in your head by the time you sing.' }
    ] },

  { id: 'check-unplanned', kind: 'check', after: 'unplanned',
    case: 'b-check-toast',
    ask: { type: 'option', step: 'B1', among: ['lasts', 'gone', 'grabbed'] } },

  { id: 'look-shallowbreath-unplanned', kind: 'lookalike', ledger: 'shallowbreath~unplanned',
    link: 'In both, you run out partway through a line, so these two are easy to mix up.',
    cases: ['b-lk-bedtime-gasp', 'b-lk-bedtime-grab'],
    instruction: 'Both stories are about Amara and the same bedtime song. Compare one thing: what her breath is like when she takes it.',
    prompt: { kind: 'which', option: 'B1.grabbed', answer: 'b-lk-bedtime-grab' },
    difference: [
      'In Story A the breath is a quick, high gasp with her shoulders rising, and the air is gone by the middle of the line. That is {a:B1.gone}, so it is {o:shallowbreath}.',
      'In Story B the breath is low and full, but she takes it only when she runs out, so it lands in the middle of a word. That is {a:B1.grabbed}, so it is {o:unplanned}.',
      'The air runs short in both. In Story A the breath is the problem. In Story B the breath is fine and the place is the problem.'
    ] }
]);
