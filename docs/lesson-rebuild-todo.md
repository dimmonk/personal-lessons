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
- [ ] **(now)** The skill rewritten to end game (`.claude/skills/build-subject/`): the slogan as the goal; a "Reject when" line and one worked rejection per gate; your paragraph first in gate 2, the thing you approve; gate 4 opens with the form the real moment forces; "May open" per stage; evidence marked decides or supports, decides read in full; the record's JSON shape in the skill; the stand-in review's files named; points to the short standard
- [ ] The record shape and V69 rewritten to match the skill: `goal`, `out`, `feedback`, `delivery`, `form`, `readingShare`, `principles` (decides needs `read: full`), parts with a `check`, `lessons` blocks tied to their part's check, `approved` bound to the text by fingerprint, one `tried` entry per lesson (owner or stand-in, the verdict read from the review file), `opened`; a live lesson needs a passing review (V45's own `tried` goes); V71 compares parts by id and title; V80 adds readingShare; seeded faults for each new refusal; the fixture records rewritten; `tools/design/approve.mjs` writes an approval with its fingerprint
- [ ] One current standard: `docs/lesson-standard.md` rewritten as the rules in force only (the core, the skill and V69, section 26 with the as-built decisions folded in, the V and X tables); the old file kept whole as `docs/lesson-standard/history-v1.md`; the 256 citations of old section numbers in code, tests and docs rewritten from a mapping table, zero old numbers left
- [ ] Evidence marked: in every research note, each finding marked decides or supports; every decides finding read in full (open-access text) with where it was read, or re-marked supports with the design choice called a judgement call
- [ ] The nine records migrated to the new shape: your paragraph written for each (eight from the approved end result; Geography new), parts' checks, lessons blocks, delivery lists, the seven reviews recorded as stand-in entries with your waiver, `opened` lists; the eight approvals of 2026-10-10 carried over onto the paragraphs with a note; `npm run test:lessons` green
- [ ] The five failing pilots fixed from their reviews (Math's calculator; Scams' rule and key agreeing on real messages; Stats' claim kinds; Wealth's real papers and the tax line; Ideology's two-line taps), each re-reviewed by a fresh stand-in until it passes, its rev raised, the lock rewritten, the relevant browser checks run
- [ ] Deployed: the fixed pilots on https://fieldcraft.web.app, the deploy stamp committed
- [ ] Geography's record rerun through the fixed skill with your three changes (the world first, flags as a third form of each country, one line of what the country is in the feedback); its paragraph and practice put in front of you; nothing built until you approve
- [ ] The Mac's `~/.claude/skills/build-subject` replaced by a link to the repo's copy, so there is one skill
- [ ] `docs/HANDOFF.md` and `docs/build-subject-audit.md` (part C) brought up to date with what landed
- [ ] Each subject's other lessons (about 50), each from its block, each with a passing stand-in review, tested and deployed subject by subject
- [x] The `build-subject` skill: seven gates in order, from the kind of learning to a tried pilot
- [x] The gates enforced in the app: design records and V69 (standard sections 23 and 26.7)
- [x] Every subject designed blind and audited: all eight rebuilt from scratch (verdicts in `docs/subjects/<id>/design.md`)
- [x] The weekly review: one review a week across every subject (section 24; live)
- [x] The practice engine designed (section 26) and its core built; the old engine and lessons deleted (tag `old-lessons`)
- [x] Singing's pilot live: the singing answer, the pitch line that fades, your range, "Match a note"
- [x] Basic Math's pilot live: typed numbers, estimate first, fresh prices each try, "Ballpark and check"
- [x] Wealth's pilot live: your own accounts sheet on the phone, statements, dollar costs, dated actions
- [x] Statistical Claims' pilot live: headlines, charts and ads as they appear, tap the line that decides
- [x] Your two bugs fixed and live: phone Back stays in the app; "Find my range again" on the Singing screen
- [x] Political Ideologies' pilot live: labels thrown from both sides, earned or not, results side by side
- [x] Psychology's pilot live: what someone did, told the way it reaches you, "can't tell yet" a right answer
- [x] Scams' pilot and baseline live (service worker v22 on the site, 2026-10-12): messages as they arrive in six forms, act / check first / leave, a clock, a call that pushes back
- [x] US Civics' pilot live (service worker v22 on the site, 2026-10-12): the 17 questions of part 1 in the list's own words, read aloud when you tap, answered from memory and checked, "my answer means the same", your own answers and interview date, the mock interview (on the test subject)
- [x] Stand-in learner reviews (the gain gate) of the seven live pilots: Psychology and Singing pass; Ideology, Math, Scams, Stats and Wealth fail (`docs/subjects/<id>/reviews/`)
- [x] The build-subject skill audited from its outputs (2026-10-12, `docs/build-subject-audit.md`, part A): the design gates have
  never said no; the stand-in gain review says no and finds real defects (5 of 7 pilots fail); none of the five is fixed yet;
  the records share one shape; most evidence is read from abstracts; the approvals and the phone try assume an owner with time
- [x] The skill's own text audited (part B, 2026-10-12, `docs/build-subject-audit.md`): B5 passes (a three-line approval);
  B1, B2, B3, B4, B6, B7, B8 fail; first fix is B8, the record's JSON shape in the skill with one `tried` shape V69 reads

## Parked
- [ ] The research document (`docs/learning-science.md`) reorganized by kind of learning, or retired to history once every record cites the per-subject notes only

## Needs your decision
- [ ] Nine paragraphs to read, one line each: on track or not (written in this session; the eight existing subjects keep going on your approval of 2026-10-10 until you say otherwise; Geography waits)
- [ ] Whenever you have time: try any lesson on your phone; your words overwrite the stand-in review
- [x] Your approvals: "approve all, keep going" (2026-10-10), recorded in all eight design records
- [x] The skill copied into the repo (2026-10-12, `.claude/skills/build-subject/`, commit 0e8cb55)
- [x] The skill's fixes: yours to decide after part B → handed to this session (2026-10-12, "just get everything done")
- [x] The helpline in Psychology's pilot checked against thehotline.org (2026-10-11): 1.800.799.SAFE (7233) and text START to 88788, as written
