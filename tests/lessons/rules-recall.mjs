// Section 9, step 9: V84 (a published list of questions names its source). A subject that asks questions from memory against a list somebody else
// publishes (Civics: the 128 questions of USCIS form M-1778) records where the list is and the day it was looked up, so a reader can check it and
// the app can say how old it is (refs, 3; V70 holds each ref's day to be a real one). Nothing here repeats V70.
import { subjectRule, checkEach } from './rule.mjs';

// a text ask checked against accepted answers, unless they are the subject's own lessons' words (`taught`), which no one else publishes
const ASKS_FROM_LIST = item => item.asks.some(a => a.kind === 'text' && 'accept' in a && !a.taught);
export const V84 = subjectRule('V84', (s, check) => {
  if (!Object.values(s.items).some(ASKS_FROM_LIST)) { check(true, ''); return; }
  const refs = s.meta.refs || [];
  checkEach(check, 'the subject record', refs.some(r => /^https:\/\/\S+$/.test(r.source || ''))
    ? [] : ['it asks questions from a published list, and has no ref that names the list (a link to its source, with the day it was looked up)']);
});

export const RULES_RECALL = [V84];
