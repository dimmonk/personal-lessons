---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-12. Fieldcraft is live at https://fieldcraft.web.app. On 2026-10-10 every subject was found to practice
the wrong thing (Singing was story-sorting), so every subject is being rebuilt through the `build-subject` skill on one
new practice engine, each subject's pilot lesson first. On 2026-10-12 the skill itself was audited and found to be prose
nothing enforces; it is being rebuilt to end game, then every subject goes back through it.

## Goal
- **Goal**: Pragmatic knowledge: after a subject, the reader can do the thing in real life, in the moment they meet it.
- **The standard**: every subject starts from its end result and its real moment, never from the app's existing engine;
  before any plan of lessons, one plain paragraph tells the owner what they will be able to do, and the owner says on
  track or not; practice is the real action; every lesson serves a part of the end result and is reviewed as a learner
  before it counts; every design decision cites evidence, and the evidence that decides a design was read in full; the
  skill, the record and the validator ask for the same things, so nothing the skill asks for goes unchecked.
- **How we stay on track**: the skill is end game, not patched (owner, 2026-10-12: "how to build the skill will be in
  your hands. just get everything done"); the owner does the phone tries and the paragraph approvals, nothing else waits
  on them; earlier style rules are inputs, not rules; tests pass before anything is called done; one session owns the
  job: commit, push and deploy as each piece lands.

## Main task
- [x] The skill rewritten to end game (2026-10-12, commit on `ccr-3700e563-5529u1`): gate 0 (your asks, must-keep), your paragraph and the topics list as the one approval of gate 2, a "Reject when" line and a worked rejection per gate, what may be opened per stage, evidence marked decides or supports with full reads, the record's JSON shape in the skill, the stand-in review's files named
- [x] V69 reads the record's shape: asks, principles, goal and topics bound to the approval by fingerprint, parts with checks and topics, lesson blocks tied to their part's check, one `tried` entry per lesson, `opened`; content held while an ask or a topic is in no part; 167 seeded faults; `tools/design/approve.mjs`, `asked.mjs`, `tried.mjs`
- [x] One current standard (749 lines, the rules in force, the vocabulary of 2026-10-12 in 8.1); the old file is `docs/lesson-standard/history-v1.md`; 209 citations rewritten
- [x] Evidence marked in all nine notes: each finding decides or supports; every decides finding read in full (Psychology 2, Math 3, Stats 4, Scams 2, Wealth 2, Civics 2, Singing 2, Ideology 3), several corrected by the full text
- [x] The nine records in the new shape; your words recorded on Psychology (the need-to-know terms and the biases, understanding others and yourself) and your restore decision on the Psychology and Ideology topics; the gate 0 lists of every subject from your course documents and the old units
- [ ] Psychology: paragraph and 27 topics were signed off ("perfect. this is basically a lesson plan."); the approval was cleared on 2026-10-12 because the screen the skill binds now also carries the sentence and the test: the printed screen goes to you again
- [ ] Geography: your "finish these 2" is recorded as your word on the subject's ask, not as a sign-off of the screen; the printed screen (the paragraph, the topics list written from the regions and your three changes, the sentence, the test, your asks and where each lands) goes to you
- [x] The skill finished by the review loop (2026-10-12): seventeen independent reviews (`docs/build-subject-audit.md`, parts D to T); the last found nothing wrong in the gates or the code, only one line of the standard, fixed; signed off. Known limits are named in the skill ("How it runs") and rest on honesty or on your ruleset for `main`
- [x] Geography's gate 2 screen approved: "Do the geography since it easier to do the lessons for me when I'm currently mentally over worked" (chat); Psychology's screen parked at your choice, one subject at a time in the morning (the paragraph, the topics, the sentence, the test, the drops), your word recorded with its source
- [ ] (parked, your choice: one subject at a time) Psychology redesigned through the finished skill on the signed-off screen: gate 1 researched for the new ground (biases in yourself, keeping emotions in check, defense mechanisms), parts covering all 27 topics and the restored asks, lesson blocks, the pilot; the practice in three lines to you
- [ ] **(now)** Geography designed through the finished skill: gate 3 (the practice in three lines, to you), then gates 4 and 5, the record's review, the map capability, the pilot with your three changes (the world first, flags, one line): parts covering the topics, lesson blocks, the pilot; the practice in three lines to you
- [ ] Geography's app capabilities built before its pilot: a tap on a map with no names (regions as shapes, scored by where the tap lands, pinch-zoom), the flag beside the name, one line of what the country is in the feedback; validator and browser checks with seeded faults
- [ ] Psychology's pilot built from its new block (the existing "What did they do?" kept, changed or replaced as the design says), reviewed by a fresh stand-in until it passes, tested
- [ ] Geography's pilot (the world) built from its block, reviewed by a stand-in until it passes, tested
- [ ] Both pilots deployed to https://fieldcraft.web.app; the lock rewritten; the deploy stamp committed
- [ ] The Mac's `~/.claude/skills/build-subject` replaced by a link to the repo's copy, so there is one skill
- [ ] `docs/HANDOFF.md` and `docs/build-subject-audit.md` (part C) brought up to date with what landed
- [x] The `build-subject` skill: seven gates in order, from the kind of learning to a tried pilot
- [x] The gates enforced in the app: design records and V69
- [x] Every subject designed blind and audited: all eight rebuilt from scratch (verdicts in `docs/subjects/<id>/design.md`)
- [x] The weekly review: one review a week across every subject (live)
- [x] The practice engine designed and its core built; the old engine and lessons deleted (tag `old-lessons`)
- [x] Singing's pilot live: the singing answer, the pitch line that fades, your range, "Match a note"
- [x] Basic Math's pilot live: typed numbers, estimate first, fresh prices each try, "Ballpark and check"
- [x] Wealth's pilot live: your own accounts sheet on the phone, statements, dollar costs, dated actions
- [x] Statistical Claims' pilot live: headlines, charts and ads as they appear, tap the line that decides
- [x] Your two bugs fixed and live: phone Back stays in the app; "Find my range again" on the Singing screen
- [x] Political Ideologies' pilot live: labels thrown from both sides, earned or not, results side by side
- [x] Psychology's pilot live: what someone did, told the way it reaches you, "can't tell yet" a right answer
- [x] Scams' pilot and baseline live (service worker v22 on the site, 2026-10-12)
- [x] US Civics' pilot live (service worker v22 on the site, 2026-10-12)
- [x] Stand-in learner reviews of the seven live pilots: Psychology and Singing pass; Ideology, Math, Scams, Stats and Wealth fail (`docs/subjects/<id>/reviews/`)
- [x] The build-subject skill audited from its outputs and its text (2026-10-12, `docs/build-subject-audit.md`, parts A and B)

## Parked (waits for your word on the other seven paragraphs)
- [ ] Three older browser-check faults (X3, X21, X22) also turn X45 and X46 red when every check runs: make each fault turn exactly its own check red
- [ ] The other seven subjects' paragraphs and topics signed off, their dropped topics decided (Math, Wealth, Singing), Ideology's restored topics designed in
- [ ] The five failing pilots fixed from their reviews (raw material on the branch `pilot-fixes-2026-10-12`), re-reviewed, deployed
- [ ] Each subject's other lessons, each with a passing stand-in review, tested and deployed subject by subject
- [x] The misreading of Pan and Rickard's "response congruency" in `docs/research/review-after-lessons.md` (R8) corrected, and the note marked (2026-10-12)
- [x] Singing's pilot reviewed again by a fresh stand-in (2026-10-12): it fails on six places a beginner would stall; Psychology's pilot reviewed again the same day: passes, with fixes recommended (the fifth review of the skill reads that pass as lenient: the check can be passed by position; the next review of the lesson, after its redesign, starts from that)
- [ ] The research document (`docs/learning-science.md`) retired to history once every record cites the per-subject notes only

## Needs your decision
- [ ] Seven paragraphs and their topics lists to read when you have time: Ideology, Math, Stats, Scams, Wealth, Civics, Singing (in the chat of 2026-10-12); one line each, and a word on each dropped topic
- [ ] Geography's topics list (written under your signed-off paragraph): say if anything is missing or wrong, and the approval resets
- [ ] Whenever you have time: try any lesson on your phone; your words overwrite the stand-in review
- [x] Psychology: "On track, record my words on Psychology"; the topics: "perfect. this is basically a lesson plan." (2026-10-12; in the record's prose; the approval is re-asked on the printed screen)
- [x] Geography: "i already signed off psychology and geography so finish these 2" (2026-10-12; your word on the subject's ask; the screen approval is re-asked)
- [x] "restore all the psychology and ideology topics" (2026-10-12), recorded on each item
- [x] The vocabulary: subject, goal, topics, part, lesson, check, item, asks, review ("that holds. make this part of the app", 2026-10-12; standard 8.1)
