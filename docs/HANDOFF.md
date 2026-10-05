# Handoff: continue the Fieldcraft lesson work

Written 2026-10-05, after the lesson engine was finished and deployed. To continue in a new session or on another account, say: "Read docs/HANDOFF.md in /Users/dim/Documents/PersonalLessons and continue the work from it." Everything needed is here or linked from here.

## 1. What this is
Fieldcraft ("Pragmatic knowledge") is a static learning web app: https://fieldcraft.web.app. Firebase project `fieldcraft-a795f`, site `fieldcraft`; deploy with `firebase deploy --only hosting --project fieldcraft-a795f`. GitHub `dimmonk/personal-lessons`, branch `main` only. Plain HTML/CSS/JS in `public/`, no build step, installable PWA. Seven subjects (ideology, psychology, math, stats, scams, wealth, civics), each a diagnostic key: read a case, answer two or three questions, name it. Name and route are scored separately. Progress lives in localStorage under `pl:`; never change those key names.

## 2. State (commit 18336d2, deployed and pushed)
- `npm test` is green: 2,942 data checks; 14,180 lesson checks plus 84 negative controls; 3,513 browser checks.
- Two lesson formats are live.
  1. **Card format**, every unit except one. Rules: `docs/lesson-pattern.md`. Data: `public/subjects/<id>/standard0.js` (old shape, registered with `FC.legacy`), shown by the old screens in `public/app/*.js`.
  2. **Interactive format**, Psychology Unit Two only. Rules: `docs/lesson-standard.md`. The learner answers before each explanation appears, there is a five-stage drill and spaced returns, and the whole subject uses one vocabulary printed from the key. Data: `public/subjects/psychology/{subject,key,specimens,u1.cases-1,u2.*}.js`. The unit is `status: 'draft'` (no cold read yet).
- The owner judges the interactive format the better lesson. They told me to finish its engine and keep it. It is about five times the text per unit (Unit Two: 151 KB, 38 screens, about 76 cases; a card unit is about 27 KB).

## 3. The engine (finished)
`public/app/registry.js` (the `FC` registry, `FC.ENGINE` is 2) and `public/app/lessons/*.js`:
- Unit player and cards: `view.js` (key lookups, tokens, the app's own wording), `cards.js`, `ask.js` (asking an item, feedback in the fixed order of E5), `drill.js`, `unit.js`, `unit-flow.js`, `taught.js`.
- Record: `records.js` (`pl:<subject>:items`, `:seen`, `:notes`, `pl:log`; returns schedule; plans).
- Screens: Due today and returned sets, Practise again, faulty-claims tile, subject opening map, generated Reference, full determination (only for subjects whose units are all rebuilt), Mixed drill, Progress, Search, Review these first, Back in a drill, log export, wide-screen card list (files `returns.js`, `practice.js`, `key-map.js`, `key-reference.js`, `determination.js`, `mixed-new.js`, `progress-new.js`, `search-new.js`, `review-first.js`; styles in `public/app-screens.css` and one marked section at the end of `public/app.css`).
- Unit kinds: classification branch units, gate units, fact units, procedure units, action subjects (plan card, legitimate-case rule, baseline check, 12-week return), the `separator` drill item. Everything except branch units is proven only on small fixtures in `tests/fixtures/`; no real data exists for them.
- Tests: `npm test` runs `tests/validate-data.mjs`, then `npm run test:lessons` (the data validator `tests/validate-lessons.mjs`, 55-plus rules, and `tests/lessons/negative-controls.mjs`), then `tests/e2e.mjs` (which wires in `e2e-unit`, `e2e-review`, `e2e-screens`, `e2e-kinds`). `npm run lock` rewrites `tests/lessons.lock.json`.

## 4. Not built, exactly
- E3: the "type my reason first" setting (there is no settings screen).
- E10: accuracy on cases first met today beside returned ones.
- E12: the author-facing "under-taught unit" figure.
- E15: the deploy-time list of draft units and unverified `wrongIdeas` (no deploy script prints it).
- Validator: the gate-unit variants of V11 to V15, V20 to V24, V35, V39 and V44 are not written. The fact and procedure fixtures are not standard-conforming (the procedure one fails V5), so their kind-specific rules were shown on fixtures only. The action fixture is not a validator baseline (V37 was checked on Psychology with `action` switched on). Lock entries carry no `deployed` stamp because nothing stamps it.
- Not real yet: any subject other than Psychology Unit Two in the interactive format. Expect to correct section 4 of the standard when the first real fact unit and procedure unit are written.
- Psychology's other units, its full key (gate and the other two branches) and its determination screen are still card-format. Unit Two assumes Unit One, which is card-format.

## 5. What to do next (ask the owner first: see section 7)
1. All of Psychology in the interactive format: key rewrite, Unit One as the gate unit, units Three to Six, specimens re-keyed, then judge it.
2. Then Scams (the first action subject), Math (procedure units), US Civics (fact units), Statistical Claims, Wealth Preservation, Political Ideologies (last: its key needs the biggest restructure). The first unit of each new kind is written, read cold, and the standard's shapes are corrected from it.

## 6. How to rebuild a subject (standard F6, in practice)
1. **Key through K2** (`docs/lesson-standard.md` section 6): each question a plain question a newcomer can answer from a case; each answer says what a case must show (`when`); each name has `plain` and `needs`; a "nothing to name here" answer where the learner meets sound cases (K2.9). The key is the one vocabulary: lessons print it by token and never retype it.
2. **Unit One is the gate unit** (A15). A partly written, never reviewed Fable draft of Psychology Unit One is on disk in `docs/lesson-standard/psychology-u1/` (`learner-view-u1.md` is the readable version).
3. **Branch units in key order**, copying the example: `docs/lesson-standard/exemplar/` (read its `learner-view.md` first: it is the unit as a learner meets it, generated from the data).
4. Re-key the specimens, fold faulty claims into the unit drills, and delete the subject's old data when its last old unit is replaced.
5. **Per unit:** add its files to `public/index.html` and `public/sw.js` SHELL (the data checks fail otherwise); run `npm run test:lessons`; raise `rev` whenever content changes after a deploy; run `npm run lock`; keep `status: 'draft'` until a person with no background has read it cold (A14). Unit and subject revisions start at 1. The lock fails the tests if content changes without a revision bump.
6. **Writers:** Sonnet agents, one per unit, in parallel. Each reads the standard (sections 3 to 8, 15, 16), the example's learner view and the subject's key, with the validator as the check. Then a reviewer reads the learner view as a newcomer and fixes it. Pass `model: 'sonnet'` explicitly and confirm it in the agent's transcript (`grep -o '"model":"[^"]*"'`): an agent with no explicit model does NOT inherit the session model.

## 7. Open decisions for the owner (not answered yet)
1. Which subjects to rebuild in the interactive format, and in what order. Suggested: all of Psychology, then judge.
2. Who writes the units: Sonnet (suggested) or Fable.
3. How many practice cases per unit (76 in Unit Two). This is the cost dial.
4. The owner has another account with full tokens; the old one was nearly out of its session and weekly quota.

## 8. The owner's working rules (they repeated these forcefully)
- Ask short, specific questions, each with a recommendation, at real forks: deleting or replacing work, choosing between versions, big spends. Never delete either lesson format unasked. Do not ask about routine choices or things they already answered.
- Say what you are about to do before every action (text before tool calls or agent launches), and report afterwards. Never act silently.
- Never change things as a reaction to being scolded. Answer the question asked and wait.
- Write one sample inline first and take the direct path. No research reviews, competing designs or new standards unasked. Tokens are finite: state the cost before any fan-out. Never give guessed time estimates.
- Lessons must teach and then show how to apply, in one vocabulary everywhere, in plain words, with no codes (Q1, D2, R1) in anything a reader sees. There is no length limit on explanations.
- Use Sonnet for volume and code; Fable only for rare design work.
- No coloured single-side border accents; no browser `confirm()`/`alert()`/`prompt()`; build new objects instead of mutating; files under about 800 lines.
- Run `npm test` before saying anything is done. Deploy after green tests. Commit small, with plain messages and the attribution trailer.

## 9. Measured costs (for planning)
- Card rewrite of all seven subjects: 4.77M tokens, 14 agents, 46 minutes.
- Finishing the engine: 1.33M tokens (screens agent 0.38M and 27 minutes; unit-kinds agent 0.46M and 38 minutes; reviewer 0.49M and 27 minutes). The first engine pass: 0.74M tokens, 57 minutes.
- Unit Two's data is 151,218 bytes. By arithmetic, all 46 units in that format are about five times the 4.77M of the card rewrite. That is arithmetic, not a promise.

## 10. Reference
- Tracked: `docs/lesson-pattern.md` (card format), `docs/lesson-standard.md` (interactive format; sections 15 and 16 are the 2026-10-05 changelog), `docs/learning-science.md` (30 principles behind the standard, sources verified), `docs/lesson-standard/exemplar/` (Psychology Unit Two as data, its checker tools and `learner-view.md`).
- On disk only (untracked): `docs/comprehension-audit/` (seven audits of the old lessons), `docs/learning-science/` (research notes and reviews), `docs/lesson-standard/psychology-u1/`, the two losing designs and their examples, `_drafts-sonnet/`. Do not build from the losing designs.
- Stale: `docs/lesson-rebuild-todo.md` and the worklist page https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv describe an earlier plan.

## 11. Leftovers
Math has 8 names with no specimen (factor, irrat, rearr, logscale, multprin, perm, trig, similar). A few drill-only answer options are not in the key (Psychology Unit One "None of these: an ordinary reaction", Math "Neither — a one-off jump", Ideology "Just a dictatorship (authoritarianism)"). Specimen case texts keep some British spellings. Old subject records still carry unused `intro` and `determinationIntro` strings. `.claude/launch.json` is a local preview helper that points at a scratchpad path.
