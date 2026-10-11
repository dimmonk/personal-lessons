// Words the learner never sees outside a quotation: the maintainers' names for the parts of the lesson machinery, which a beginner
// has no reason to know (lesson standard K9, and the engine's own words from 26.7). One list, read by the lesson validator (V50, on
// every lesson, item and subject record) and by the browser tests (on every screen as shown).
// Say instead: "question" for an item, "group of questions" for a set, "help" for support, "topic" for a strand, "the way it is
// sorted" for a facet; "case" is a story, an example or a situation.
export const APP_JARGON = ['key', 'keys', 'route', 'routes', 'gate', 'gates', 'branch', 'branches', 'determination', 'specimen', 'specimens', 'ledger',
  'strand', 'strands', 'facet', 'facets', 'ask', 'asks', 'item', 'items', 'set', 'sets', 'generator', 'generators', 'support', 'supports'];

// Abstract and textbook words, in every subject (lesson standard section 20). A beginner reads every card for "what do I do
// with this, or how do I spot it in real life?", and these words answer neither. Each says what to write instead.
// Read by the lesson validator (V62, on every unit, key line and subject record) and by the browser tests (on every screen).
export const ABSTRACT = [
  { word: 'kind of thing', say: 'say what it is: a choice, something done to someone' },
  { word: 'what it is made of', say: 'say what you see in it' },
  { word: 'point to', say: 'look for, or spot' },
  { word: 'the reasons they give for it', say: 'their reasons' },
  { word: 'stripped of its story', say: 'nothing: give the idea plainly' },
  { word: 'case', say: 'story, or name it: "Leila’s story", "the email"' },
  { word: 'cases', say: 'stories' },
  { word: 'in terms of', say: 'say the actual thing' },
  { word: 'with respect to', say: 'about' },
  { word: 'in order to', say: 'to' },
  { word: 'prior to', say: 'before' },
  { word: 'subsequently', say: 'later' },
  { word: 'utilize', say: 'use' },
  { word: 'facilitate', say: 'help' },
  { word: 'constitutes', say: 'is' },
  { word: 'whereby', say: 'so that, or where' },
  { word: 'thereby', say: 'so' },
  { word: 'notion', say: 'idea' },
  { word: 'phenomenon', say: 'say what happens' },
  { word: 'individuals', say: 'people' },
  { word: 'appropriate', say: 'say the actual thing' },
  { word: 'suitable', say: 'say the actual thing' },
  { word: 'aforementioned', say: 'name it again' }
];
// uses of "case" that are ordinary English, not the lesson's word for an example
// (no word break is required before the qualifier: a screen's text can run two headings together, "somethingCriminal case")
const ALLOWED_CASE = /(court|legal|lawsuit|test|criminal|civil)\s+cases?\b|\bin (any|that|this|which|either|each|every|such a|the) case\b|\bjust in case\b|\bin case\b|\bcase (law|number)\b|\b(upper|lower)case\b/gi;
const abstractPattern = word => new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+')}\\b`, 'i');
// The abstract words found in a piece of text, as their list entries.
export const abstractIn = text => {
  const plain = text.replace(ALLOWED_CASE, ' ');
  return ABSTRACT.filter(entry => abstractPattern(entry.word).test(plain));
};
