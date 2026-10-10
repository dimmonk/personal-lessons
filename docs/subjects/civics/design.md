---
{
  "subject": "civics",
  "kinds": [
    "judging",
    "facts"
  ],
  "endResult": "Read a news story about the US government and know who made the final call and whether they were allowed to; answer the citizenship interview questions.",
  "realMoment": "A news story about a law, an order or a ruling; the citizenship interview.",
  "test": "Interview: a mock interview of 20 questions drawn at random from the 128, heard (or read) with no options, answered from memory in a few words; at least 16 right (the real bar is 12), on two mock interviews at least a week apart. News: six new news-style stories never seen before; for each, name who made the call (level and body), whether it is theirs to make, and who could stop or undo it; at least 5 of 6 fully right.",
  "practice": "Facts: hear or read each of the 128 questions and produce the answer from memory (say it, then type it), the accepted answers shown at once; missed items return in the session until right, then on later days until right in three separate sessions (the app decides). News: short news-style stories, new each time, answered with three taps (who decided, theirs to make, who can stop it), the decisive sentence and the interview fact it uses shown after each. Reading is a minute per lesson at most.",
  "approved": {
    "endResult": "2026-10-10",
    "practice": "2026-10-10",
    "pilot": "2026-10-10"
  },
  "parts": [
    {
      "id": "1",
      "title": "Who does what"
    },
    {
      "id": "2",
      "title": "Who made the call"
    },
    {
      "id": "3",
      "title": "Congress, the presidency and the courts"
    },
    {
      "id": "4",
      "title": "Federal or state, and your own answers"
    },
    {
      "id": "5",
      "title": "Theirs to make?"
    },
    {
      "id": "6",
      "title": "Who can stop it"
    },
    {
      "id": "7",
      "title": "Principles and founding documents"
    },
    {
      "id": "8",
      "title": "Rights and responsibilities"
    },
    {
      "id": "9",
      "title": "Colonies and independence"
    },
    {
      "id": "10",
      "title": "The 1800s"
    },
    {
      "id": "11",
      "title": "The 1900s to now"
    },
    {
      "id": "12",
      "title": "Symbols and holidays"
    },
    {
      "id": "13",
      "title": "Whole stories"
    },
    {
      "id": "14",
      "title": "The interview"
    }
  ],
  "pilot": "l1",
  "tried": {
    "pilot": null
  }
}
---
# civics: design record (build-subject skill)

Written 2026-10-10. Gates 2 and 3 are drafts waiting for the owner's approval; until then V69 keeps every lesson of this
subject as it is. The content that exists predates the gates and is audited against this record (gates 4 and 5, designed
blind) before anything is kept.

Approved by the owner: 2026-10-10, "approve all, keep going" (gates 2, 3 and the pilot, for every subject; the pilot is still to be tried on a phone, and what it shows comes back into this record).

## Gate 1. Kind of learning and evidence
Written 2026-10-10, blind (no unit, card, case, key or learner view of this subject read before gates 1 to 5).

Kinds, from what the learner must do in real life:
- **Knowing facts**: the citizenship interview is an officer asking up to 20 of 128 published questions out loud; the
  applicant answers from memory in a few words; 12 right passes (C1, C2).
- **Judging situations**: reading a news story about a law, an order or a ruling, and telling who made the call, whether
  it is theirs to make and who could stop it. It rests on the same facts (who writes laws, who vetoes, what courts do,
  what is federal and what is state), used on a text.

Evidence: `docs/research/civics-interview-and-news.md` (C1–C7, written for this gate: the 2025 test from USCIS's own
documents, recall for a spoken answer, background knowledge and reading); `docs/research/review-after-lessons.md`
(R1–R9); `docs/learning-science.md` P10, P12, P16, P19, P22, P24, P25, P30, used for its sources only. Its framing of
every subject as "diagnostic classification" with a key is **not** adopted: the interview is not classification at all,
and the news judgment is three plain questions, not a key with named outcomes.

The principles that drive the design:
1. **Practice in the interview's own form: a question, no options, the answer produced from memory** (C1, C4; R8: transfer
   d ≈ 0.58 when the practice response matches the real one, 0.28 when not). Multiple choice is never the practice.
2. **Feedback with the accepted answers right after every answer**, wrong or right (R7, C4: short answer beats multiple
   choice only with feedback).
3. **Successive relearning, scheduled by the app**: an item missed returns in the session until right, then on later
   days until right in three separate sessions; the learner never drops items (R2, R3, P24).
4. **The gap follows the interview date** (R4: about a week for a month's retention, three to five weeks for a year's).
   Naturalization usually comes years after arriving, so the last relearning rounds belong in the months before the
   interview, and the question list must be checked again then (C1: it changed in 2008 and 2025).
5. **One plain sentence of meaning per item, then the short official answer** (C6), grouped under the idea it serves
   (P24 requires 7). About 20 of the 128 are "why" questions; their answer is a reason, and a reason is learned as one.
6. **Say it, then type it; rehearse the real thing spoken** (C5: response mode changes the testing effect little; the
   production effect is real but small). Typed recall is the everyday practice; the mock interview is heard and spoken.
7. **The government facts first, then used on news** (C7: domain knowledge is what makes a text readable). The news
   stories' feedback names the interview fact each answer rests on, so the two kinds feed each other.
8. **Judging is practised on new, real-looking stories, a worked one first, look-alike decisions side by side then
   mixed** (P25, R8; P10; P12, P22, with their stated caveat that evidence for verbal categories is limited).
9. **Reviews mix due items in the real form** (R8, R9): questions to answer, a new story to read; never cards to reread.

## Gate 2. End result
- **After this subject you can** read a news story about the US government and know who made the final call and
  whether they were allowed to; and answer the citizenship interview questions.
- **Real moment**: a news story about a law, an order or a ruling, read on the phone; the citizenship interview, where an
  officer asks the questions out loud and you answer from memory.
- **Real-world test** (two parts, both must pass):
  - *Interview*: a mock interview of 20 questions drawn at random from the 128, heard (or read where speech is not
    available), no options, answered from memory in a few words. At least **16 of 20** right (the real bar is 12; the
    margin covers nerves and an officer's voice), on **two mock interviews at least a week apart**.
  - *News*: six new news-style stories never seen before (headline and two or three paragraphs, mixed federal, state and
    local). For each: who made the call (level and body), is it theirs to make, who could stop or undo it. At least
    **5 of 6** with all three right.
- The approved sentence is kept. Sharpened after approval: the pass marks, the two-sittings rule, and "who could stop or
  undo it", which is how "whether they were allowed to" is answered in a story (a court, a veto, the next law).
- **Out**: the English reading, writing and speaking test (a separate skill; add it only if the owner needs it); the
  N-400 questions about the applicant's own history; how to immigrate or qualify; state-by-state law; history beyond the
  128; contested constitutional questions a court has not settled (a story counts as clear only when its own words make it
  clear); the 65/20 special list; party politics. The app does not store officials' names: the learner enters them from
  uscis.gov/citizenship/testupdates.

## Gate 3. Practice, and whether the app can deliver it
**Method.** Facts: the question is shown and spoken; the learner says the answer, then types it; the accepted answers
appear at once with one sentence of meaning; a miss returns later in the session until right, then on later days until
right in three separate sessions (principles 1–6). News: a short news-style story, new each time; three taps (who
decided; theirs to make or not; who can stop it); after each, the sentence in the story that decides it is highlighted
and the interview fact it rests on is named (principles 7–8).

**Time.** In every lesson at least four fifths of the time is answering: recalling or judging. Reading is a minute at
most (what this group is for, and a map of who does what), plus one worked story in the news lessons.

**Feedback.** From the app, after every answer: the accepted answers (all of them, so the learner sees which they gave),
or the decisive sentence and the reason. The mock interview gives none until the end, like the real one.

**Delivery check** (what the app must do; each is built before the first lesson, or the lesson waits):
1. Take a typed free answer and check it against a question's accepted answers: case, punctuation and small misspellings
   forgiven, words in brackets optional, "27" equal to "twenty-seven", and for "name two/three/five" the distinct
   accepted answers counted. A "my answer means the same" claim is allowed, logged, and the item still returns.
2. Speak a question aloud (the browser's speech synthesis).
3. Hear a spoken answer (speech recognition) for the mock interview: wanted, not required; without it, the learner says
   the answer aloud and types it.
4. A per-item record across days and a schedule that brings items back until right in three separate sessions, with the
   gaps set from an optional interview date.
5. Answers the learner enters for the eight variable questions (their senators, representative, governor, state capital,
   and the current President, Vice President, Speaker and Chief Justice), with the link to look them up and a prompt to
   check them again before a mock interview.
6. A news story with three tap questions and the decisive sentence highlighted in the feedback.
7. A mock interview mode: 20 random questions from all 128, spoken, answered without feedback, scored at the end.
8. Content: the 128 with accepted answers (USCIS M-1778, 09/25), and a bank of news-style stories large enough that every
   end check and review uses stories the learner has not seen (about 70).

## Gate 4. The parts of the end result
Fact parts are the 128 questions grouped by the idea they serve (USCIS numbering); news parts are the three questions of
the news test. Every fact part's check: every item of the part asked once more, mixed, no options, from memory; **at least
9 in 10 right on the first try** (misses stay in the queue). Every news part's check: **5 new stories, at least 4 right**.

| # | Part | Items or skill | Check |
|---|---|---|---|
| 1 | **Who does what**: the three branches | Q15–20, 40–47, 50–52 (17) | fact check |
| 2 | **Who made the call** in a story | tap the body that decided: Congress, President, a federal agency, a federal court, the Supreme Court | news check |
| 3 | **Congress, the presidency and the courts**: numbers, terms, reasons | Q21, 22, 24–28, 31–37, 48, 49, 53–56 (20) | fact check |
| 4 | **Federal or state, and your own answers** | Q58–60; Q23, 29, 30, 38, 39, 57, 61, 62 entered by the learner (11) | fact check |
| 5 | **Theirs to make?** in a story, now with states, cities and counties | tap: theirs to make / not theirs / being challenged in court (only when the story says so) | news check |
| 6 | **Who can stop it** in a story | tap: the President's veto, the courts, Congress changing the law, the next President, federal law over a state | news check |
| 7 | **Principles and founding documents** | Q1–14 (14) | fact check |
| 8 | **Rights and responsibilities** | Q63–72 (10) | fact check |
| 9 | **Colonies and independence** | Q73–89 (17) | fact check |
| 10 | **The 1800s** | Q90–99 (10) | fact check |
| 11 | **The 1900s to now** | Q100–118 (19) | fact check |
| 12 | **Symbols and holidays** | Q119–128 (10) | fact check |
| 13 | **Whole stories** | all three news questions on mixed stories | the gate 2 news test |
| 14 | **The interview** | all 128, spoken, mixed | the gate 2 interview test |

Order: the government facts (1, 3, 4) each come just before the news part that uses them (2, 5, 6); principles and
history (7–12) need nothing from the news parts; the two whole tests come last. Map both ways: parts 1, 3, 4, 7–12 hold
17 + 20 + 11 + 14 + 10 + 17 + 10 + 19 + 10 = 128 questions, each exactly once; parts 2, 5, 6 are the three questions of the
news test; 13 and 14 are the gate 2 test itself. If every part passes and the returns hold, the gate 2 test passes.

"If the learner did only this, would they be closer to the end result?" Every fact part: yes, it is a share of the 128
answered in the interview's form. Every news part: yes, it is one of the three questions asked of a real-looking story.

## Gate 5. Each lesson
Fact lessons share one shape, about 12 to 15 minutes: one minute on what this group is for (with a map for lessons 1, 3
and 4, P30); then each question shown and spoken, the learner says and types an answer (first sight: "not yet" is
allowed and counts as a try), the accepted answers and one sentence of meaning after; misses come back later in the
lesson until right; then the part's check. News lessons, about 12 minutes: one minute with the map, one worked story with
the decisive sentence marked (two minutes), ten stories answered by tap with feedback (eight minutes), the part's check.

1. **Who does what** (part 1). Do: 17 questions, recall with feedback, misses repeated until right; the map of the three
   branches shown first. Feedback: accepted answers + meaning. Check: part 1. Why: principles 1, 2, 3, 5 (Q15's "why").
   **The pilot.**
2. **Who made the call** (part 2). Do: worked story; ten stories in contrast pairs first (a bill passed by Congress and
   the same bill signed; an executive order and a law; an agency rule and the law it rests on; a district court and the
   Supreme Court), then mixed. Feedback: decisive sentence + the fact (for example "only Congress writes laws, Q18").
   Check: part 2. Why: principles 7, 8.
3. **Congress, the presidency and the courts** (part 3). Do: 20 questions, as lesson 1, with lesson 1's due items mixed
   in. Check: part 3. Why: principles 1–5, 9.
4. **Federal or state, and your own answers** (part 4). Do: look up and enter the eight variable answers (about three
   minutes, the one step that is not recall, because no app can know them), then recall all 11. Check: part 4. Why:
   principles 1–3; C2.
5. **Theirs to make?** (part 5). Do: worked story; ten stories, pairs first (a state sets driver's license rules / a state
   prints its own money; Congress declares war / a governor declares war; a city zoning rule / a city immigration rule;
   the President signs a bill / the President "passes" a law alone), then mixed. Feedback: the decisive sentence + Q58,
   Q59, Q60 or Q18. Check: part 5. Why: principles 7, 8.
6. **Who can stop it** (part 6). Do: worked story; ten stories (a bill vetoed; a law struck down by a court; an order
   reversed by the next President; a state law overridden by federal law; a court ruling answered by a new law). Feedback:
   decisive sentence + Q44, Q51 or Q15. Check: part 6. Why: principles 7, 8.
7. **Principles and founding documents** (part 7). Do: 14 questions as lesson 1. Check: part 7. Why: principles 1–5.
8. **Rights and responsibilities** (part 8). Do: 10 questions. Check: part 8. Why: principles 1–5.
9. **Colonies and independence** (part 9). Do: 17 questions, the people questions (Q86–89) after the events they belong
   to. Check: part 9. Why: principles 1–5.
10. **The 1800s** (part 10). Do: 10 questions. Check: part 10. Why: principles 1–5.
11. **The 1900s to now** (part 11). Do: 19 questions, the "why did the US enter" questions together so their reasons
    are compared. Check: part 11. Why: principles 1–5.
12. **Symbols and holidays** (part 12). Do: 10 questions. Check: part 12. Why: principles 1–5.
13. **Whole stories** (part 13). Do: twelve new stories, mixed federal, state and local, all three questions each,
    feedback after each. Check: the gate 2 news test (six more new stories). Why: principles 8, 9.
14. **The interview** (part 14). Do: check the eight entered answers; a 20-question mock interview, spoken, no feedback
    until the end, misses then go to the queue; a second mock a week or more later. Check: the gate 2 interview test.
    Why: principles 1, 4, 6; C1.

The weekly review for Civics: the due items from every finished fact lesson, mixed, asked in the interview's form, plus
two new news stories (R8, R9). Before an entered interview date, the app adds relearning rounds about a week apart
(principle 4).

## Gates 6 and 7
Not started. Lesson 1 is the pilot; it needs delivery items 1, 2 and 4 first.

## Audit of the existing lessons (2026-10-10)
Read after gates 1 to 5 were written: `public/subjects/civics/*.js` (units, cards, cases, key, specimens) and
`docs/learner-view/civics-u*.md`. What the existing course is: four fact units and six classification units built on
the shared key template (a gate question, then a branch question per body, about twenty named outcomes such as
"Beyond Congress's power", "The power of the purse", "Left to the voters", "Both rules stand").

| Unit | Verdict | Why |
|---|---|---|
| u1 Which government decided this? | **changes** | The nearest to gate 5: short news-style stories, "who makes the final call", feedback quoting the decisive words (part 2). But about half of it is reading (13 teaching cards before 16 drill items), the last stage judges a person's *claim* instead of a story, and no feedback names the interview fact behind the answer. Its stories are good material for lesson 2. |
| u2 The Constitution and its amendments | **changes** | Part 7 (and a few of 3, 4, 8) is right; the practice is not: "from memory" is three options taken from the same card, and the questions are its own, not the test's. Much is off the list (Articles I–III, the shares needed to amend, 1787/1789/1791, incorporation, due process) while test items are missing or not asked (rule of law, the economic system, a document that influenced the Constitution). Items replaced by Q1–14. |
| u3 What did Congress just do? | **goes** | Teaches five named outcomes (within power, beyond power, purse, Senate approval, impeachment). Naming the kind of act serves no part: the news test asks who decided, whether it is theirs, who can stop it. Its "beyond Congress's power" stories can be reused in lesson 5. |
| u4 The President or a federal agency | **goes** | Six named outcomes (carrying out the law, beyond power, commander in chief, diplomacy, veto, pardon). Same reason as u3. Its veto and "order with no law behind it" stories can be reused in lessons 5 and 6. |
| u5 What a judge is really being asked | **goes** | Four lawyer's outcomes (judicial review, interpreting, left to the voters, rights of the accused). Only "a court strikes the law down" serves a part (6). "Left to the voters" serves none. |
| u6 Whose rule is it, and what else covers it? | **changes** | Its part is right: a state's or city's power, federal law winning, a right blocking a rule (parts 5 and 6). Its practice is a two-question route to five named outcomes. It should become the three plain questions on mixed stories. |
| u7 Congress, the President and the courts in numbers | **changes** | Part 3 is right; the practice is three-option recognition. It holds facts the test does not ask (the President's age and years of residence, where tax bills start, who comes after the Vice President) and misses ones it does (why House terms are shorter, why two senators, the Electoral College, five justices to decide, why justices serve for life). Items replaced by part 3's list. |
| u8 Rights and duties | **changes** | Part 8 is partly right (rights of everyone, the oath, Selective Service, jury). The practice is recognition. It adds off-list material (immigration hearings, criminal versus civil cases, what the Constitution does not promise). It also leaves out the test's format on purpose, which means the learner never practises the real 20 questions with 12 to pass. |
| u9 US history up to 1877 | **changes** | Parts 9 and 10 are right; the practice is recognition. Many items ask years and topics the test never asks (indentured servants, the 1820 and 1850 deals, Dred Scott, the end of Reconstruction). Test items are missing: Revolution events, five of the 13 states, Benjamin Franklin, what Hamilton is famous for, and Civil War events. |
| u10 History since 1877 | **changes** | Parts 11 and 12 are partly right; the practice is recognition. It asks years the test does not (the Chinese Exclusion Act, Ellis Island, the Statue of Liberty's dedication, the Twenty-fourth and Twenty-sixth Amendments, how many died on September 11). It misses Eisenhower, the Gulf War, why the US entered World War I (only the year is asked), a tribe, an innovation, "E Pluribus Unum", Memorial Day, Veterans Day and the holidays list. |

Not covered by any unit: part 1 as recall (the branch questions Q15–20, 40–47 and 50–52 are spread through key cards and
never asked in the test's words), part 4's own answers (left out on purpose), part 13 apart from the twenty specimens,
and part 14 (no mock interview).

**Verdict: rebuild from scratch.** Every unit that keeps its part still needs its practice and its items replaced. The
three classification units that go are half the course. What carries over is raw material: u1's stories and some stories
from u3–u6, for the news lessons. No unit carries over as it is.

**The three most important problems**
1. **The facts are not the interview's.** The questions are the course's own, written from older material. Many are
   not on the 2025 list (years, Article numbers, the President's age), and many on it are missing. A search of all content for 41
   test terms found 15 questions with no matching material, among them the Electoral College, the rule of law, the economic system,
   the Great Compromise, "E Pluribus Unum", Eisenhower, the Gulf War, the holidays, a tribe and an innovation. The test
   format (20 asked, 12 to pass, spoken) is left out on purpose. A learner who mastered the course could still fail.
2. **"From memory" is recognition.** Every fact is a choice among three answers from the same card, and the form of the
   answer often gives it away. The interview shows no options and wants a spoken answer. The practice does not match the
   real moment (R8, C1, C4).
3. **The news skill was built as a taxonomy, not as reading the news.** About twenty named outcomes on the Scams
   template ("The power of the purse", "Both rules stand", "Left to the voters") are learned through long card
   sequences and tidy invented stories. The facts and the news stories sit in separate units that never refer to each
   other. The end result needs three plain questions asked of real-looking stories, with the government facts as the
   reason for each answer.
