// Every rule of section 26.7, in id order.
import { RULES_SHAPE } from './rules-shape.mjs';
import { RULES_VOCAB } from './rules-vocab.mjs';
import { RULES_LESSON } from './rules-lesson.mjs';
import { RULES_REVISIONS } from './rules-revisions.mjs';
import { RULES_DESIGN } from './rules-design.mjs';
import { RULES_SING } from './rules-sing.mjs';

const number = id => Number(id.slice(1));
export const RULES = [...RULES_SHAPE, ...RULES_VOCAB, ...RULES_LESSON, ...RULES_REVISIONS, ...RULES_DESIGN, ...RULES_SING].sort((a, b) => number(a.id) - number(b.id));
