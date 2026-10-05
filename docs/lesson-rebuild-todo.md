# Lesson rebuild: every subject in the interactive format

Started and finished 2026-10-05, in one session. Keys on Opus, units on Sonnet (one agent per unit), engine and validator gaps fixed at the root as real data hit them (`docs/lesson-standard.md` section 17). The state and how to continue: `docs/HANDOFF.md`.

## Subjects
- [x] Psychology: 4 units (gate, reasoning, between two people, lasting ways), 16 specimens
- [x] Statistical Claims: 6 units, 23 specimens
- [x] Scams: 6 units (one a fact unit), 27 specimens
- [x] Wealth Preservation: 5 units, 27 specimens
- [x] US Civics: 10 units (five fact units), 20 specimens
- [x] Political Ideologies: 5 units, 30 specimens
- [x] Basic Math: 6 units (five procedure units), 35 specimens
- [x] Old card-format data deleted from every subject

## Engine, validator, tools, tests
- [x] Gate, fact and procedure units on real data; chains (`continues`); cross-branch look-alike pairs; `act` and V59; names and terms of assumed units; earlier problem types in later drills and Mixed; unmet names shown by plain words; an empty Mixed drill explains itself
- [x] Learner-view tool for every unit kind (`tools/learner-view/`); all 42 units rendered in `docs/learner-view/`
- [x] Browser tests read their expectations from the data
- [x] npm test green: data, about 1.6 million lesson checks, 86 negative controls, about 57,000 browser checks

## Finish
- [x] Lock written for 42 units; HANDOFF.md rewritten
- [ ] Commit, deploy, push

## Needs your decision
- Currency: Scams and Wealth Preservation use pounds (as the old lessons did), Statistical Claims uses dollars, and Civics is US. My pick: dollars everywhere if you are in the US.
- The old card-format screens are no longer used by any subject. Delete them (and `docs/lesson-pattern.md`)? My pick: yes, now that nothing uses them.
- Cold read: read any unit as a beginner and say what is unclear (start with Psychology Unit One).
