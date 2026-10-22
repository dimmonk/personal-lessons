# Changes to the shared Math helpers (kit.js, number.js) after lessons 9 to 15 started

For the builder of lessons 9 to 15, who uses `MATH.problem` and the number ask in this clone.

- **2026-10-22, `public/app/lessons/number.js`, `scoreNumber`.**
  - **Change:** a number question with `wild` now returns its wild slip whenever the answer is more than double or less than half the right one. This happens before any trap is matched; previously a matching trap won.
  - **Effect on your questions:** an answer that matches one of your traps and is also wild is stored as `wild`. The feedback still prints that trap's own line: `numberMissHtml` now takes the question and finds the trap from the numbers typed, and `item-view.js` passes the question. A trap within half to double still keeps its own name.
  - **Effect on your pass rules:** if a check counts a slip that is always wild-sized (a misplaced decimal point, a rate upside down), count `{ slip: 'wild', max: 0 }` instead.
  - **New name:** `numberTrapOf(ask, typed, item)` returns the trap whose value the typed numbers match.
- **`kit.js`:** not changed this round. `MATH.problem` still adds `wild: 'wild'` to every exact answer and scores every rough answer within a fifth.
- **`subject.js`:** two slips added, `one-coat` and `memory-not-cleared`.

## Round 3 (2026-10-22)

- **`number.js`, `withinTol`, `round` tolerance.**
  - **Change:** an answer exactly half way between two steps (for example $20.225 to the cent) is now right rounded either way.
  - **What you need to do:** let a money answer stay unrounded in `make`, and use the rounded value only for its text. A half-cent answer then accepts both neighbors.
- **`number.js`, `scoreNumber` for rough answers (`estimate: true`).**
  - **Change:** a trap on a rough answer may now sit inside its band. When the typed number is nearer that trap than the answer, the result is the trap's slip; `numberMissHtml` prints the trap's line for a rough answer decided this way.
  - **Validator (V75):** refuses a rough-answer trap within 4% (`ESTIMATE_TRAP_GAP`) of the answer, because a rough answer cannot tell those apart.
  - **Tests:** a seeded fault in `controls-table.mjs` and pure tests in `number-pure.mjs`.
  - **Effect on lessons 9–15:** none for your questions unless you add traps to a rough answer.
- **`kit.js`:** not changed.
