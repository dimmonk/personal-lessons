// Sound in the learner view (lesson standard section 21 item 7). The view cannot play a sound, so it prints, in its place, what the
// card says about it: the block's `says`, each button's label with its tokens filled in, and for a note check the notes the learner can
// pick and the three sentences the tool can answer with, in the key's own words. The sentences the app prints around the sound are
// the app's, read from SAY in view.js (say.mjs), and are never typed here. The order is the order of the app's block (audio-card.js).
import { paras } from './load.mjs';

// the notes a note check offers when the block names none (section 21 item 2); the app's buttons show the letter without the octave
export const DEFAULT_NOTES = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
const letter = note => note.slice(0, -1);
// the three answers of a note check, in the order of the needle from under to over, with what each means for the reader of this file
const ANSWERS = [['under', 'The note you sing is under the picked note'], ['on', 'It is on the picked note'], ['over', 'It is over the picked note']];

export function makeAudioRenderer(v, T, line) {
  const need = () => { if (!line) throw new Error('a card has sound and the app’s sentences for sound were not loaded'); return line; };

  const tones = (audio, say) => [
    ...paras(audio.says).map(p => T.t(p)), '',
    'Buttons, one for each sound. A tap plays the sound; while it plays the button reads “' + say('audioPlaying') + '” and a second tap stops it (“' + say('audioStop') + '”):',
    ...audio.examples.map(e => `- ${T.t(e.label)}`)
  ];

  const check = (audio, say) => {
    const [code] = audio.answers.under.split('.');
    const answer = key => { const [step, id] = audio.answers[key].split('.'); return v.option(step, id).n; };
    return [
      ...paras(audio.says).map(p => T.t(p)), '',
      say('notePick'), `The note buttons: ${(audio.notes || DEFAULT_NOTES).map(letter).join(', ')}.`, '',
      `A button: **${say('micStart')}**. While the microphone is on it reads **${say('micStop')}**.`, '',
      say('micPrivate'), '',
      say('noteSing'), say('noteAnyRange'), '',
      'Once the microphone is on, the tool shows one line and a needle:',
      `- While the app’s own note is sounding: “${say('micWait')}”`,
      `- Until it hears a steady note: “${say('micListening')}”`,
      `- Then one of three lines, the key’s own wording for the answers to ${T.q(code)}`,
      ...ANSWERS.map(([k, meaning]) => `  - ${meaning}: **“${answer(k)}”**`),
      `- If no note was picked yet: “${say('micPickFirst')}”`,
      `- If the microphone is refused: “${say('micDenied')}”`,
      `- If there is none: “${say('micMissing')}”`
    ];
  };

  // the block as printed, with its heading (the app's audioHear for sound examples, audioTry for the note tool)
  return card => {
    if (!card.audio) return [];
    const say = need();
    const audio = card.audio;
    return [`**${audio.kind === 'tones' ? say('audioHear') : say('audioTry')}**`, '', ...(audio.kind === 'tones' ? tones(audio, say) : check(audio, say)), ''];
  };
}
