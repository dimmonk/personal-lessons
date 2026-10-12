# Not falling for scams: what the evidence says (2026-10-10)

Gate 1 of the `build-subject` skill for Scams. The real-life task is two kinds of learning at once: **judging** a message
(what it asks, whether that request needs checking) and **a behavior under pressure** (holding off and checking through
your own channel while the message pushes you to act now). `docs/learning-science.md` covers judging and if-then plans
(P22, P25, P26); this file adds what is known about scam and phishing training itself and about acting under pressure.
Each finding says what was read; most are abstracts, press summaries and secondary summaries, and the strength is stated.

## Findings

**SC1. Deciding what to do is a different task from deciding "is this phishing", and people's detection is weak.** In a
signal-detection study (two online experiments, 40 emails each, half phishing), people judged the same emails two ways:
detection (is it phishing?) and behavior (what would you do with it?). Detection was modest (sensitivity d' 0.96; a miss
rate of 44% and a false-alarm rate of 24%). On the behavior task people were cautious, leaning toward not clicking
(response bias c -0.54, against +0.32 for detection), but their sensitivity was lower (d' 0.39; a miss rate of 28% and a
false-alarm rate of 61%). The two tasks were correlated, not separable (r = .61 for sensitivity). The authors' reading:
users have learned what to do about phishing, but not when to do it (Canfield, Fischhoff & Davis, 2016, *Human Factors*,
doi 10.1177/0018720816665025). *Read: full: full text, author manuscript, Results (pp. 15-16) and General Discussion
(pp. 25-26), 2026-10-12.* **Design:** practice and test the decision the learner will take (act, check first, ignore),
not a "scam or real" label; since looking at a message does not reliably tell the learner what it is, the action that
protects is the same whatever the message looks like: check through your own channel. *(Corrected 2026-10-12 against
the full text: the earlier wording said people were "more accurate" on the behavior task; the paper shows more cautious
but less sensitive, with the two tasks closely linked.)* **Decides:** the practice and the test answer with real actions
scored by the action, and the learner checks every request through their own channel instead of being taught to
detect fakes and check only what looks wrong.

**SC2. Experts notice that a message does not fit their life, and a request to act turns that into suspicion.** Interviews
with 21 IT experts about phishing they caught in their own inbox: they try to fit the message into their life, notice
small discrepancies, and a feature of the message, usually a request to act such as a link, makes phishing a plausible
explanation; only then do they investigate and resolve (Wash, 2020, *PACM HCI* CSCW). A survey of 297 ordinary users
found the same broad process (Wash, Nthala & Rader, 2021, SOUPS). *Read: summary: summaries of both.* **Design:** the trigger the
learner trains on is the request ("what does this want me to do?") and whether it fits what they were expecting; the
experts' technical investigation is replaced for a lay learner by checking through their own channel. **Supports.**

**SC3. Training as usually delivered barely changes behavior in the field; people do not read it.** A randomized study of
more than 19,500 employees over eight months and ten simulated campaigns: how recently someone finished annual awareness
training had no significant relation to failing a simulated phish; embedded training after a failure cut the average
failure rate by only 2 percentage points; in over 75% of training sessions people spent under a minute on the page, and
37 to 51% of sessions ended at once with no engagement; fewer than a quarter completed the training; over 56% clicked a
phishing link at some point whether or not they were trained. Static training was negatively related to later outcomes;
for the few who completed interactive training the odds of clicking later fell by 19%, which the authors say may be
selection (Ho, Mirian, Luo et al., 2025, IEEE S&P). A 15-month study of more than 14,000 employees found embedded
training did not make people more resilient and may have had side effects (Lain, Kostiainen & Čapkun, 2022, IEEE S&P).
A follow-up found the small effect comes mainly from the periodic reminder, not the content, which is rarely consumed,
and concluded phishing is "an attention problem, rather than a knowledge one" (Lain et al., CCS 2024, arXiv 2409.01378).
*Read: abstract: full text, Ho et al. §4.2, §5.2 and §6 (engagement), and Lain et al. 2024 abstract and §8, 2026-10-12; Lain
2022 abstract only.* **Design:** reading about scams is close to worthless; time goes to deciding on real-looking
messages, and the reminders (returns) are part of the treatment, not an add-on. *(Corrected 2026-10-12 against the full
text: "about a third closed it at once" is 37 to 51% of sessions; "more than half had clicked" is over 56% at any point in
the study; the 2% is an absolute reduction.)* **Decides:** the reading share (85% of every lesson is deciding, at most two
short screens of reading) and the returns over weeks as part of the treatment, instead of a reading course taught once.

**SC4. Habit and autopilot lower suspicion, and training effects fade as habits take over.** In the Suspicion, Cognition
and Automaticity Model, tested in two phishing experiments, habitual email handling predicted falling for phish beyond
what people knew; the authors argue cue-spotting training addresses only one cause (Vishwanath, Harrison & Ng, 2016,
*Communication Research*, doi 10.1177/0093650215627483). *Read: abstract: university summary and abstract.* **Design:** the check
must become the habitual response to a cue (a request for money, a login, a code), practiced fast and often, not a
deliberate analysis the learner must remember to start. **Supports.**

**SC5. Strong emotion, good or bad, raises the chance of falling for a false offer.** Older and younger adults randomly
put into high-arousal positive, high-arousal negative or calm states: both high-arousal states raised intent to buy
falsely advertised products, in those who actually became aroused; the authors suggest postponing decisions until calm
(Kircanski et al., 2018, *Psychology and Aging*, doi 10.1037/pag0000228). Attending to visceral cues in a phishing email
reduced attention to deception cues (Wang et al., 2012, cited there). *Read: abstract: abstract and PMC summary.* **Design:** the
taught move is to delay (hang up, close, call back later); practice includes urgent, frightening and exciting messages
and live exchanges that push. **Supports.**

**SC6. Training attention beats training rules.** 355 university staff and students who already got rule-based guidance:
training on how to allocate attention, notice context and hold off judgment cut responses to a later simulated phish to
7.5% against 13.4% for added rule-based training; format (text or text plus graphics) made no difference (Jensen,
Dinger, Wright & Thatcher, 2017, *JMIS* 34(2)). A follow-up with 453 students found better discrimination of legitimate
from phishing emails (Nguyen, Jensen et al.). *Read: abstract: abstract and secondary summary.* **Design:** teach one short
routine of attention (what does it want; was I expecting it; how would I check it myself), not a list of red flags.
**Supports** (would decide the one short routine in place of a list of red flags; full text not reachable 2026-10-12: a
judgement call).

**SC7. Active exposure to weakened scam tactics improves discernment and holds for weeks.** 3,000 adults in India,
randomized: a 15-minute game exposing players to weakened scam tactics improved scam discernment more than videos and
tips and more than a control game, and the gain held at 21 days; both the game and the videos at first made people more
skeptical of genuine offers, which faded by day 21 (ShieldUp!, Google, 2025 preprint, arXiv 2503.12341). *Read: abstract: abstract.* Technique-based inoculation against misinformation transfers to new items using the same technique, with a
smaller effect for techniques not covered (Roozenbeek and colleagues, summarized). **Design:** the learner meets the
pressure tactics in action, inside realistic exchanges, and the practice always contains genuine messages. **Supports.**

**SC8. Fraud education must protect discrimination, not raise blanket suspicion; without a reminder it fades.** See
`docs/learning-science.md` P26 (Burke et al., 2022: effect gone by six months without a reminder, kept with one at three
months; text-only worse for the least sophisticated). A small pre-post study found brief phishing training raised
false alarms on legitimate emails (poster, 31 participants; weak). *Read: full: Burke et al. in full (working-paper version),
as P26 records it; the poster, summary only.* **Design:** real messages are about half of every
practice set; scoring treats "check first" on a real message as safe and acting on a scam as the failure; returns at
weeks to months. **Supports.**

**SC9. If-then plans help held goals with a clear cue; nothing tests them on phishing.** See P26 (Gollwitzer & Sheeran
2006; Sheeran, Listrom & Gollwitzer 2025). A search found no trial of if-then plans against phishing clicks. Plans can
make responses fast but less flexible, which suits a rule ("a request for a code means I hang up") better than a
judgement. *Read: abstract: abstracts and secondary summaries.* **Design:** one plan, cued by the request, rehearsed in practice;
never a substitute for practice. **Supports.**

**General findings used** (`docs/research/review-after-lessons.md`): practice in the form of real use (R8, Pan & Rickard
2018), feedback after each answer (R7), mixed practice of confusable items (R9), spaced successive relearning decided by
the app (R2 to R5).

## What the evidence does not settle
- No study was found of a self-study phone course that changed real scam losses. Ho and Lain show what does not work in
  workplaces; what works for individuals is inferred from lab and short field studies.
- Whether practice under a timer transfers to real pressure is untested here; it is a judgement call.
- The rule "check through a channel you already had" is the standard consumer-protection advice, not a learning finding;
  it is the subject's content, not one of these principles.

## Sources
- [Canfield, Fischhoff & Davis 2016, author manuscript](https://kilthub.cmu.edu/articles/journal_contribution/Quantifying_Phishing_Susceptibility_for_Detection_and_Behavior_Decisions_/6073301)
- [Wash 2020, How Experts Detect Phishing Scam Emails](https://rickwash.com/papers/journal/phishing-experts.html)
- [Ho et al. 2025, press release](https://today.ucsd.edu/story/cybersecurity-training-programs-dont-prevent-employees-from-falling-for-phishing-scams); [paper](https://sysnet.ucsd.edu/~voelker/pubs/phishtrain-oakland25.pdf)
- [Lain, Kostiainen & Čapkun 2022](https://www.research-collection.ethz.ch/entities/publication/f198243a-72d8-490c-ba98-5d6fee78ac43)
- [Lain et al. 2024, embedded training](https://arxiv.org/abs/2409.01378)
- [Vishwanath et al. 2016, SCAM model (summary)](https://www.buffalo.edu/news/releases/2016/03/062.html)
- [Kircanski et al. 2018, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6005691/)
- [Jensen et al. 2017, JMIS](https://www.jmis-web.org/articles/1343)
- [ShieldUp! 2025](https://arxiv.org/abs/2503.12341)
- [SoK: Human-Centered Phishing Susceptibility](https://arxiv.org/pdf/2202.07905)
