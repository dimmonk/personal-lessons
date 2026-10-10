// Every rule of section 8, in id order, with V0 first.
import { RULES_SHAPE } from './rules-shape.mjs';
import { RULES_VOCAB } from './rules-vocab.mjs';
import { RULES_TAUGHT } from './rules-taught.mjs';
import { RULES_ANATOMY } from './rules-anatomy.mjs';
import { RULES_CASES } from './rules-cases.mjs';
import { RULES_DRILL } from './rules-drill.mjs';
import { RULES_REVISIONS } from './rules-revisions.mjs';
import { RULES_AUDIO } from './rules-audio.mjs';

const number = id => Number(id.slice(1));
export const RULES = [...RULES_SHAPE, ...RULES_VOCAB, ...RULES_TAUGHT, ...RULES_ANATOMY, ...RULES_CASES, ...RULES_DRILL, ...RULES_REVISIONS, ...RULES_AUDIO].sort((a, b) => number(a.id) - number(b.id));
