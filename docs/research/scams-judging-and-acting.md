# Not falling for scams: what the evidence says (2026-10-10)

Gate 1 of the `build-subject` skill for Scams. The real-life task is two kinds of learning at once: **judging** a message
(what it asks, whether that request needs checking) and **a behavior under pressure** (holding off and checking through
your own channel while the message pushes you to act now). `docs/learning-science.md` covers judging and if-then plans
(P22, P25, P26); this file adds what is known about scam and phishing training itself and about acting under pressure.
Each finding says what was read; most are abstracts, press summaries and secondary summaries, and the strength is stated.

## Findings

**SC1. Deciding what to do is a different, easier task than deciding "is this phishing".** In a signal-detection study,
people judged the same emails two ways: detection (is it phishing?) and behavior (what would you do with it?). They were
more accurate and more cautious on the behavior task, while their detection ability was weak (Canfield, Fischhoff &
Davis, 2016, *Human Factors*, doi 10.1177/0018720816665025). *Read: abstract and the authors' earlier poster summary.*
**Design:** practice and test the decision the learner will take (act, check first, ignore), not a "scam or real" label.

**SC2. Experts notice that a message does not fit their life, and a request to act turns that into suspicion.** Interviews
with 21 IT experts about phishing they caught in their own inbox: they try to fit the message into their life, notice
small discrepancies, and a feature of the message, usually a request to act such as a link, makes phishing a plausible
explanation; only then do they investigate and resolve (Wash, 2020, *PACM HCI* CSCW). A survey of 297 ordinary users
found the same broad process (Wash, Nthala & Rader, 2021, SOUPS). *Read: summaries of both.* **Design:** the trigger the
learner trains on is the request ("what does this want me to do?") and whether it fits what they were expecting; the
experts' technical investigation is replaced for a lay learner by checking through their own channel.

**SC3. Training as usually delivered barely changes behavior in the field; people do not read it.** A randomized study of
more than 19,500 employees over eight months: annual awareness training had no significant relation to failing a
simulated phish; embedded training after a failure cut clicking by about 2%; 75% spent a minute or less on the training
page and about a third closed it at once; by month eight more than half had clicked at least once (Ho, Mirian, Luo et
al., 2025, IEEE S&P). A 15-month study of more than 14,000 employees found embedded training did not make people more
resilient and may have had side effects (Lain, Kostiainen & Čapkun, 2022, IEEE S&P). A follow-up found the small effect
comes mainly from the periodic reminder, not the content, and concluded phishing is "an attention problem, rather than a
knowledge one" (Lain et al., CCS 2024, arXiv 2409.01378). *Read: abstracts and the university press release (Ho);
abstracts (Lain).* **Design:** reading about scams is close to worthless; time goes to deciding on real-looking
messages, and the reminders (returns) are part of the treatment, not an add-on.

**SC4. Habit and autopilot lower suspicion, and training effects fade as habits take over.** In the Suspicion, Cognition
and Automaticity Model, tested in two phishing experiments, habitual email handling predicted falling for phish beyond
what people knew; the authors argue cue-spotting training addresses only one cause (Vishwanath, Harrison & Ng, 2016,
*Communication Research*, doi 10.1177/0093650215627483). *Read: university summary and abstract.* **Design:** the check
must become the habitual response to a cue (a request for money, a login, a code), practiced fast and often, not a
deliberate analysis the learner must remember to start.

**SC5. Strong emotion, good or bad, raises the chance of falling for a false offer.** Older and younger adults randomly
put into high-arousal positive, high-arousal negative or calm states: both high-arousal states raised intent to buy
falsely advertised products, in those who actually became aroused; the authors suggest postponing decisions until calm
(Kircanski et al., 2018, *Psychology and Aging*, doi 10.1037/pag0000228). Attending to visceral cues in a phishing email
reduced attention to deception cues (Wang et al., 2012, cited there). *Read: abstract and PMC summary.* **Design:** the
taught move is to delay (hang up, close, call back later); practice includes urgent, frightening and exciting messages
and live exchanges that push.

**SC6. Training attention beats training rules.** 355 university staff and students who already got rule-based guidance:
training on how to allocate attention, notice context and hold off judgment cut responses to a later simulated phish to
7.5% against 13.4% for added rule-based training; format (text or text plus graphics) made no difference (Jensen,
Dinger, Wright & Thatcher, 2017, *JMIS* 34(2)). A follow-up with 453 students found better discrimination of legitimate
from phishing emails (Nguyen, Jensen et al.). *Read: abstract and secondary summary.* **Design:** teach one short
routine of attention (what does it want; was I expecting it; how would I check it myself), not a list of red flags.

**SC7. Active exposure to weakened scam tactics improves discernment and holds for weeks.** 3,000 adults in India,
randomized: a 15-minute game exposing players to weakened scam tactics improved scam discernment more than videos and
tips and more than a control game, and the gain held at 21 days; both the game and the videos at first made people more
skeptical of genuine offers, which faded by day 21 (ShieldUp!, Google, 2025 preprint, arXiv 2503.12341). *Read:
abstract.* Technique-based inoculation against misinformation transfers to new items using the same technique, with a
smaller effect for techniques not covered (Roozenbeek and colleagues, summarized). **Design:** the learner meets the
pressure tactics in action, inside realistic exchanges, and the practice always contains genuine messages.

**SC8. Fraud education must protect discrimination, not raise blanket suspicion; without a reminder it fades.** See
`docs/learning-science.md` P26 (Burke et al., 2022: effect gone by six months without a reminder, kept with one at three
months; text-only worse for the least sophisticated). A small pre-post study found brief phishing training raised
false alarms on legitimate emails (poster, 31 participants; weak). **Design:** real messages are about half of every
practice set; scoring treats "check first" on a real message as safe and acting on a scam as the failure; returns at
weeks to months.

**SC9. If-then plans help held goals with a clear cue; nothing tests them on phishing.** See P26 (Gollwitzer & Sheeran
2006; Sheeran, Listrom & Gollwitzer 2025). A search found no trial of if-then plans against phishing clicks. Plans can
make responses fast but less flexible, which suits a rule ("a request for a code means I hang up") better than a
judgement. *Read: abstracts and secondary summaries.* **Design:** one plan, cued by the request, rehearsed in practice;
never a substitute for practice.

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
- [Canfield, Fischhoff & Davis 2016](https://kilthub.cmu.edu/articles/journal_contribution/Quantifying_Phishing_Susceptibility_for_Detection_and_Behavior_Decisions_/6073301)
- [Wash 2020, How Experts Detect Phishing Scam Emails](https://rickwash.com/papers/journal/phishing-experts.html)
- [Ho et al. 2025, press release](https://today.ucsd.edu/story/cybersecurity-training-programs-dont-prevent-employees-from-falling-for-phishing-scams); [paper](https://sysnet.ucsd.edu/~voelker/pubs/phishtrain-oakland25.pdf)
- [Lain, Kostiainen & Čapkun 2022](https://www.research-collection.ethz.ch/entities/publication/f198243a-72d8-490c-ba98-5d6fee78ac43)
- [Lain et al. 2024, embedded training](https://arxiv.org/abs/2409.01378)
- [Vishwanath et al. 2016, SCAM model (summary)](https://www.buffalo.edu/news/releases/2016/03/062.html)
- [Kircanski et al. 2018, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6005691/)
- [Jensen et al. 2017, JMIS](https://www.jmis-web.org/articles/1343)
- [ShieldUp! 2025](https://arxiv.org/abs/2503.12341)
- [SoK: Human-Centered Phishing Susceptibility](https://arxiv.org/pdf/2202.07905)
