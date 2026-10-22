# Statistical Claims: how experts judge a claim made with numbers (research note, 2026-10-22)

Step 2 of the build-subject skill for the subject `stats` (field Numbers & Money). Finding ids carry the prefix **T**.
This note is drawn from this field's own literature: statisticians who write for the public (Spiegelhalter, Gal, Tufte),
risk-literacy researchers (Gigerenzer, Woloshin and Schwartz, the Cochrane review of risk formats), epidemiology (Hill),
working fact-checkers (Full Fact, the Stanford fact-checker study), data journalists and science writers (Bergstrom and
West, Blastland and Dilnot), the study of exaggeration in health news (Sumner and colleagues), and the training studies
of statistical reasoning (Fong, Krantz and Nisbett; Woloshin and colleagues; Nsangi and colleagues). The older note
`docs/research/judging-statistical-claims.md` was read; a finding of it is reused below only where the source was checked
again in this pass, and says so.

**How each finding is marked.** *Read* says what was actually read. *Strength*: **strong** (several independent studies or
reviews agree), **moderate** (one good review or trial, or several studies with caveats), **limited** (one study,
secondary report, or expert opinion), **expert practice** (what the field's practitioners say they do; not an experiment,
but it is the field's own account of its reasoning, which is what this subject teaches). A choice whose passage could not
be found is marked **judgement call**.

---

## Part 1. How skilled practitioners judge a claim with a number

### T1. Statisticians split the judgment into three questions: the number itself, the conclusion drawn from it, and the way it is told.
- **Source.** Spiegelhalter, D. (2017). Trust in numbers. *Journal of the Royal Statistical Society A* 180(4), 949–965
  (his presidential address). **Read:** the accepted manuscript in full (Cambridge repository, handle 1810/266626),
  sections "Numbers in the news" and "Improving the assessment of trustworthiness".
- **Passage.** "Three aspects of a story can be critiqued: Questions about the research – i.e. the trustworthiness of the
  number itself ('internal validity'); Questions about the interpretation – i.e. the trustworthiness of the conclusions
  drawn (external validity); Questions about the communication – i.e. the trustworthiness of the source and what we are
  being told (spin)." (section "Improving the assessment of trustworthiness").
- **Strength.** Expert practice (the field's best-known public statistician, writing as president of the Royal
  Statistical Society). No experiment tests the three-way split.
- **What it means here.** A claim can fail in the number (who was counted, how), in the step from number to conclusion
  (cause, who it applies to, how big), or in the telling (headline, relative risk, chart). The lessons' questions should
  cover all three, and the verdict is about whether the *conclusion* is shown, not whether the number is "true".

### T2. The commonest distortions are known and short to list: a cause from a link, relative risks without absolute ones, no comparison or context, exaggerated importance, a headline loosely tied to the story, an uninformative graphic.
- **Source.** Spiegelhalter (2017), Table 3, "Some highly questionable interpretation and communication practices
  (QICPs)", section "Numbers in the news". **Read:** in full.
- **Passage (the table's rows, verbatim).** "Don't report uncertainties"; "Don't provide context or comparative
  perspective, such as a time series."; "Suggest a cause when only an association is observed."; "Exaggerate relevance
  and importance of findings"; "Only provide relative and not absolute risks"; "Use positive or negative framing
  depending on whether aim is to reassure or frighten"; "Don't dwell on conflicts of interest or alternative views";
  "Use a sexy but uninformative graphic"; "Write a headline which may have little connection to the story but will
  encourage clicks." He adds that the problem is mostly "manipulation and exaggeration through inappropriate
  interpretation of 'facts' that may be technically correct", not invention, and that "the newspaper article was, as
  usual, much better than the headline".
- **Strength.** Expert practice; the frequencies are supported by T3.
- **What it means here.** The subject's questions are the counters to this list: what exactly is claimed (headline
  against story), how big in absolute terms, compared with what, cause or link, and the chart. Invented numbers are rare
  (he cites about 2% of scientists admitting falsification), which supports keeping fraud detection out of scope.
- **In the same paper, on the number itself** (section "What's the cause of this 'crisis'?", headings verbatim):
  "Sampling things that are convenient rather than appropriate"; "Leading questions or misleading wording"; "Too small a
  sample". These are the "who was counted, and how" faults.

### T3. In health news, the overreach usually starts before the headline, and has three main forms: advice stronger than the study, cause from a correlation, and people from animal or cell studies.
- **Source.** Sumner, P. et al. (2014). The association between exaggeration in health related science news and
  academic press releases. *BMJ* 349, g7015. **Read:** the abstract and Results on PMC4262123 (checked again in this pass;
  the older note had read the full text).
- **Passage.** Of 462 press releases from 20 UK universities: 40% "contained exaggerated advice", 33% "exaggerated causal
  claims", 36% "exaggerated inference to humans from animal research"; when the release exaggerated, news did too (58%,
  81%, 86%, against 17%, 18%, 10% when it did not); "there was little evidence that exaggeration in press releases
  increased the uptake of news." Spiegelhalter (2017) cites the same figures.
- **Strength.** Moderate (one large observational study, one country, one year; replicated in kind by the same group).
- **What it means here.** "Cause or just a link" and "who it was about" are core, not extras. The check a phone reader can
  make is the headline against its own article, which often states the limits lower down (T2's "the article was much
  better than the headline").

### T4. Readers do not tell "linked to" from "may cause" from "can cause" the way writers intend: they hear three levels at most.
- **Source.** Adams, R. C. et al. (2017). How readers understand causal and correlational expressions used in news
  headlines. *Journal of Experimental Psychology: Applied* 23(1), 1–14. **Read:** search-returned abstract wording and a
  secondary summary only (the repository refused access).
- **Passage (abstract, as returned).** "Our results suggest that participants differentiate between 3 distinct categories
  of relationship": direct causal verbs strongest, "can" phrasing in the middle, and "might", "linked" and "associated
  with" together at the bottom.
- **Strength.** Limited (one paper, read second hand).
- **What it means here.** The distinction worth teaching is the one readers can actually hear: does the headline say
  that one thing *makes* another happen ("cuts", "boosts", "causes", "can cause"), or only that they went together
  ("linked to", "people who ... had ...")? A finer taxonomy of claim kinds has no support in this literature
  (**judgement call** to drop the five-kind label of the pilot in favour of this one distinction plus "about whom").

### T5. Size: absolute risks, in counts out of a stated number of people, are what experts ask for; relative risks persuade more without being better understood.
- **Sources.**
  - Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M. & Woloshin, S. (2007). Helping doctors and patients
    make sense of health statistics. *Psychological Science in the Public Interest* 8(2), 53–96. **Read:** full text
    (Konstanz repository PDF), the summary, pp. 54–55, 65–66, 77, 83.
  - Akl, E. A. et al. (2011). Using alternative statistical formats for presenting risks and risk reductions. *Cochrane
    Database of Systematic Reviews* CD006776. **Read:** abstract and authors' conclusions on PMC6464912, checked again
    in this pass.
- **Passages.** Gigerenzer et al., summary (p. 53): the claim that screening "reduces the risk of dying from breast cancer
  by 25% in fact means that 1 less woman out of 1,000 will die of the disease"; they "recommend using frequency
  statements instead of single-event probabilities, absolute risks instead of relative risks, mortality rates instead of
  survival rates, and natural frequencies instead of conditional probabilities". P. 54: "Absolute risks are typically
  small numbers while the corresponding relative changes tend to look big—particularly when the base rate is low." P. 65:
  the same screening benefit drew 80% acceptance as a relative reduction against 53% as an absolute one ("from around 3
  in 1,000 to around 2 in 1,000") and 43% as a number needed to screen. P. 66: "the most important way to clarify risk
  reductions is to present the fundamental information about the absolute risks in each group (e.g., 'Drug X lowered the
  risk of heart attack by 10 in 100: from 20 in 100 to 10 in 100 over 10 years')"; writing "percentage points" "may be
  too subtle for many readers". Akl et al.: relative reductions were understood no better than absolute ones (SMD 0.02)
  but "perceived to be larger (SMD 0.41)" and "more persuasive (SMD 0.66)"; "the baseline risk or the absolute change in
  risk should also be presented".
- **Strength.** Strong for the persuasion gap (a Cochrane review plus the experiments Gigerenzer et al. review);
  expert practice for the recommendation.
- **What it means here.** Every claim of a change in risk is turned into "so many in 1,000 before, so many after, over
  this long". The time span belongs in the size (Gigerenzer's examples always carry "over 10 years"). Percentage points
  are taught only as a word to recognize and turn back into counts, because the authors say the term is too subtle.

### T6. "Is that a big number?": a count or a sum means nothing until it is set against how many people, how much time, or the usual level.
- **Source.** Blastland, M. & Dilnot, A., authors of *The Tiger That Isn't* (2007) and of BBC Radio 4's *More or Less*,
  writing in *Times Higher Education* (node 92388, "Is £300m really a lot of money?"), an extract-length piece built on
  the book. **Read:** that article; the book itself was not available. A reader's review (S. J. Howard) confirms the
  book's per-person-per-week method.
- **Passage.** "Three hundred million? Is that a big number?"; "£300 million divided by a million places is £300 per
  place ... Over five years, that's £60 a year, or a bit more than £1 per place per week."
- **Strength.** Expert practice, limited (read second hand from the book).
- **What it means here.** A bare count ("1,200 attacks", "$40 million") is sized by asking "out of how many, over how
  long", and turned into a rate per person or per 1,000. This is the same move as T5 for counts and sums.

### T7. "Compared with what?" is the central question of quantitative reasoning, and the comparison must be fair: like with like.
- **Sources.** Tufte, E. R. (1990). *Envisioning Information*, Graphics Press: "At the heart of quantitative reasoning is a
  single question: Compared to what?" (**Read:** the line as quoted in secondary collections; page not seen.)
  Bergstrom, C. T. & West, J. D. (2020), *Calling Bullshit*; their University of Washington course syllabus
  (callingbullshit.org/syllabus.html, read) lists, under "Statistical traps and trickery", "Simpson's paradox", "data
  censoring", "means versus medians"; secondary summaries of the book give the question "Is the claim comparing like with
  like?" Informed Health Choices Key Concepts (informedhealthchoices.org/key-concepts, read): "Messages with no
  comparison" and "Similar comparison groups".
- **Strength.** Expert practice, from three independent traditions (graphic design and statistics, data science
  teaching, evidence-based medicine).
- **What it means here.** One lesson asks: is there a comparison at all, and is it fair (same kind of people or places,
  same period, same way of counting at both ends, rates rather than totals when sizes differ, the same mix inside the
  totals).

### T8. Experts ask where the data came from, who was in the sample, how it was measured, whether a graph distorts, and whether something is missing.
- **Source.** Gal, I. (1999), "Statistical literacy: Conceptual and instructional issues", background paper for the first
  SRTL forum; the same list is Table 2 of Gal (2002), Adults' statistical literacy: meanings, components,
  responsibilities, *International Statistical Review* 70(1), 1–25. **Read:** the ten questions as reproduced verbatim
  by the Dartmouth Chance course (chance.dartmouth.edu/course/Articles/talk.html); the 2002 paper itself was blocked.
- **Passage (Gal's "worry questions", selected, verbatim).** "Where did the data (on which this statement is based) come
  from? What kind of study was it?"; "Was a sample used? How was it sampled? Is the sample large enough? Did the sample
  include people/things which are representative of the population?"; "How reliable or accurate were the measures used
  to generate the reported data?"; "Is a given graph drawn appropriately, or does it distort trends in the data?";
  "Overall, are the claims made here sensible? Are they supported by the data? (e.g., confusing correlation with
  causation)"; "Should additional information or procedures be made available ... Is something missing?"; "Are there
  alternative interpretations for the meaning of the findings, different explanations for what caused them ...?" Gal
  argues such teaching should aim at consumers, not producers, of statistics.
- **Strength.** Expert practice (the standard framework of the statistics-education field for adult statistical
  literacy).
- **What it means here.** "Is something missing?" is a real verdict, not a failure to answer: it is the source of
  "Cannot tell from this". Who was sampled, how it was measured and the graph each earn a question. Gal's items on
  distribution shape and choice of average are statistician's questions a phone reader rarely can answer from an
  article; they are left out (**judgement call**, on Gal's own consumer framing).

### T9. To judge cause, epidemiologists ask one question: is there any other way of explaining the facts? A fair experiment answers it best.
- **Source.** Hill, A. B. (1965). The environment and disease: association or causation? *Proceedings of the Royal Society
  of Medicine* 58, 295–300. **Read:** the original could not be opened (PMC served images only); the passages are read as
  reproduced in Wakeford (2015), *JRSM* 108(1), 4–6 (PMC4291331) and in the standard summaries.
- **Passage.** "None of my nine viewpoints can bring indisputable evidence for or against the cause-and-effect hypothesis
  and none can be required as a sine qua non. What they can do ... is to help us to make up our minds on the fundamental
  question – is there any other way of explaining the set of facts before us, is there any other answer equally, or more,
  likely than cause and effect?" "No formal tests of significance can answer those questions." The nine viewpoints are
  strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy.
- **Strength.** Expert practice, the founding text of causal judgment in epidemiology; strong in its field.
- **What it means here.** The lesson on cause does not teach Hill's list (it is for weighing a body of studies, which a
  phone reader does not have). It teaches his fundamental question, asked of one article: what else could explain this?
  The usual answers are named (other differences between the groups, the arrow running the other way, a bounce back from
  an extreme, nothing to compare with), and the case where the answer is "only luck, the groups were split by chance"
  (Hill's "experiment") is the claim that holds, when the groups are big enough and the gap clear enough for luck to be
  unlikely. Temporality (which came first) is the "arrow" answer. Hill starts from an association already "beyond what we
  would care to attribute to the play of chance" (his opening, as quoted in the standard summaries), and Wakeford (2015) names
  chance beside bias and confounding: chance is the first other explanation, so a split by chance leaves luck, and a trial of
  a handful of people does not settle it (added 2026-10-22 after the research review of lessons 6 to 9).
- **Supporting.** Bergstrom & West's syllabus (read) lists under "Causality": "Regression to the mean pitched as treatment
  effect" and "Selection masked as transformation" (corrected 2026-10-22 to the page's wording). Spiegelhalter
  (2017), T2: "Suggest a cause when only an association is observed." Informed Health Choices: "Belief that association
  means causation".

### T10. Test results: the number that matters is how many of the positives are real, and natural frequencies make it visible.
- **Source.** Gigerenzer et al. (2007), pp. 55, 77, 83. **Read:** full text.
- **Passage.** Of 160 gynecologists given a test's sensitivity, false-positive rate and prevalence as percentages, 21%
  found that about 1 in 10 positive women has cancer; after learning to translate into natural frequencies ("Ten out of
  every 1,000 women have breast cancer; of these 10 ... 9 test positive; of the 990 women without cancer, about 89
  nevertheless test positive"), 87% did (p. 55). "Nontransparent forms include relative risks, conditional probabilities
  such as sensitivities and specificities, survival rates, and statements about single events that do not specify the
  reference class" (p. 77). Akl et al. (2011) confirm natural frequencies are better understood for test results (SMD
  0.69).
- **Strength.** Strong (replicated across many studies; the Cochrane review).
- **What it means here.** A claim about a test ("99% accurate", "a positive result means ...") is sized by counting 1,000
  people: how many have it, how many of them test positive, how many of the rest test positive anyway. This is the
  owner's "base rate" ask, taught as a counting procedure, not a named fallacy.
- **Also on p. 53–54:** survival rates after screening mislead (lead time and overdiagnosis); mortality rates do not.
  Not given a lesson (it needs a two-step explanation rare in phone news): **judgement call**; it can appear as one
  "compared with what" item.

### T11. Charts: read the numbers on the axis; knowing the trick does not stop it working.
- **Source.** Yang, B. W., Vargas Restrepo, C., Stanley, M. L. & Marsh, E. J. (2021). Truncating bar graphs persistently
  misleads viewers. *Journal of Applied Research in Memory and Cognition* 10(2), 298–311. **Read:** the abstract as
  returned by Duke's record (this pass); the older note read the full manuscript. Gal (1999), T8: "Is a given graph
  drawn appropriately, or does it distort trends in the data?" Spiegelhalter (2017), T2: "Use a sexy but uninformative
  graphic." Bergstrom & West's syllabus: "misleading axes and proportional ink".
- **Passage.** Across five studies, truncation made differences look larger for 83.5% of participants; the effect
  "persisted even after viewers were taught about y-axis truncation"; graph literacy did not predict it.
- **Strength.** Moderate (five studies, one group; the remedy of reading the numbers is not itself tested:
  **judgement call**).
- **What it means here.** Chart practice is reading where the axis starts and working out the real change from the
  numbers, not naming the trick. The time window (where a line chart starts and ends) is the chart form of "compared
  with what".

### T12. Fact-checkers first pin down exactly what was said, then go to the primary source and check the assumption under the claim as well as the number.
- **Source.** Full Fact, "How we fact check" (fullfact.org/how-we-fact-check, read in this pass).
- **Passage.** "First we need to understand what has been said or printed." "We don't only fact check the evidence used in
  a claim, but also the underlying assumption." "Factually correct information can be used to make a point which is
  misleading or incorrect". They prefer "data tables, legal documents, or other primary sources" and contact the
  claimant "to ask them about their source".
- **Strength.** Expert practice (a leading IFCN-signatory fact-checker).
- **What it means here.** The first move on any item is to state the claim exactly, separate from its number; the
  verdict is about whether the number supports *that claim*. A true number used to make an unsupported point is the
  commonest "does not show it". Contacting a claimant or fetching a data table is not something the learner does on a
  phone in the moment; the nearest is "what would you need to see?" (the item's `need`).

### T13. Expert fact-checkers leave the page to find out who is behind it; this is a separate skill from judging the number.
- **Source.** Wineburg, S. & McGrew, S. (2019). Lateral reading and the nature of expertise. *Teachers College Record*
  121(11). **Read:** the project's summary page and search-returned descriptions only. Civic Online Reasoning
  (cor.inquirygroup.org, read): "Who's behind the information? What's the evidence? What do other sources say?", drawn
  "from observing professional fact-checkers".
- **Strength.** Moderate for the finding that fact-checkers outperformed historians and students by reading laterally
  (one study of 45 people, plus later classroom trials); read second hand.
- **What it means here.** "Who is behind it and what do they gain" is part of the expert's judgment of a number
  (Bergstrom, as quoted in *Times Higher Education*: trace a statistic back to its source; Informed Health Choices: "Trust
  that there are no competing interests"). Inside an item, the learner can see who did the counting (a seller's own test,
  a survey by the industry). Searching the web for the source is a different skill and stays out of this subject
  (**judgement call**, kept from the owner-approved design).

### T14. A layperson does not need the technical method: put the jargon in a box and judge what went in and what is claimed to come out.
- **Source.** Bergstrom, quoted in *Times Higher Education* (comment 57319, read): "Put it in a black box – you don't
  have to think about it; don't let them intimidate or bully you with that." The same interview gives the lay checks:
  whether the sample represents the group, correlation taken for causation, many variables tested, averages that hide,
  and whether a study measures what it claims.
- **Strength.** Expert practice, limited (an interview).
- **What it means here.** The subject never teaches significance tests, regression or methods sections (the
  owner-approved "out" list agrees). Every question is answerable from what any reader sees.

---

## Part 2. What the learning research says about this skill

### T15. Statistical rules taught briefly, by rule and by examples, are used on everyday problems, including untaught areas; the effect fades without return.
- **Sources.** Fong, G. T., Krantz, D. H. & Nisbett, R. E. (1986). The effects of statistical training on thinking about
  everyday problems. *Cognitive Psychology* 18, 253–292. **Read:** the abstract as returned by search (Deep Blue refused
  the PDF). Lehman, Lempert & Nisbett (1988), *American Psychologist* 43, 431–442, as in the older note (not re-read).
  Fong & Nisbett (1991), via `docs/learning-science.md` P25.
- **Passage (abstract, as returned).** Training on the law of large numbers by formal rule, or by "guided induction"
  through examples, improved reasoning; learning from examples "was abstracted to such an extent that subjects showed
  just as much improvement on domains where the rule was not taught as on domains where it was". Fong & Nisbett (1991):
  the untrained-domain benefit declined over two weeks but stayed above controls.
- **Strength.** Moderate (several experiments, one group; undergraduates).
- **What it means here.** Each question is taught as an explicit rule with cases from at least two areas of life, checked
  in a third, and brought back after days (P25, P24).

### T16. A short primer on risk numbers raised adults' ability to interpret medical statistics, in two randomized trials, including a low-income group.
- **Source.** Woloshin, S., Schwartz, L. M. & Welch, H. G. (2007). The effectiveness of a primer to help people understand
  risk: two randomized trials in distinct populations. *Annals of Internal Medicine* 146(4), 256–265. **Read:** the full
  abstract (PubMed 17310049).
- **Passage.** "In the high SES trial, 74% of participants in the primer group received a 'passing grade' ... versus 56% in
  the control group"; "In the low SES trial, 44% versus 26% 'passed'". "The primer, however, did not improve participants'
  confidence". "The authors did not assess whether better data interpretation skills improved decision-making."
- **Strength.** Moderate (two RCTs, adults, a text booklet: close to this app's learner and format).
- **What it means here.** Adults reading alone can learn to read risk numbers from text. Gains were smaller in the
  lower-education group, so the sizing lessons need a worked example with real numbers before practice (P10), not prose
  alone. Confidence did not rise with skill: the app shows results, not reassurance (P23).

### T17. Building the frequency picture is learned fast and lasts; learning the formula fades.
- **Source.** Sedlmeier, P. & Gigerenzer, G. (2001). Teaching Bayesian reasoning in less than two hours. *JEP: General*
  130, 380–400, as reported by Gigerenzer et al. (2007), p. 83 (read in full).
- **Passage.** "Computer-programmed tutorials showed that people can learn how to translate conditional probabilities into
  natural frequencies in less than 2 hours ... learning was not only fast but also remained stable after weeks of
  subsequent tests, whereas students who were taught how to insert probabilities into Bayes's rule ... forgot fairly
  quickly".
- **Strength.** Moderate (the original experiments, reported by an author).
- **What it means here.** The size procedure is "count 1,000 people", worked on the item's numbers, and typed by the
  learner; no formula.

### T18. A small set of concepts for judging claims, taught with practice, is learned and kept a year later.
- **Source.** Nsangi, A. et al. (2020). Effects of the Informed Health Choices primary school intervention ... 1-year
  follow-up: a cluster-randomised trial. *Trials* 21. **Read:** the abstract via Crossref (this pass); the result figures
  from the older note (80% versus 52% passing after one year).
- **Strength.** Moderate (a large cluster RCT; children with a teacher, not adults on a phone).
- **What it means here.** A handful of questions, each practised, is the right size; a catalogue of named fallacies is
  not needed for the skill.

### T19. Explicit teaching plus practice of each category is what improves reasoning; categories only taught, not practised, gain little.
- **Source.** Heijltjes, van Gog & Paas (2014), *Applied Cognitive Psychology* 28, 518–530, as read in full by the older
  note (C2); **not re-read in this pass**, so treated as limited here.
- **Passage (older note).** Practised tasks F(4, 135) = 12.43, partial eta squared .27; tasks instructed but not
  practised, partial eta squared .07.
- **Strength.** Limited here (not re-checked).
- **What it means here.** Every question taught gets its own items; nothing is "covered" by a card alone.

### T20. Training that teaches doubt can make people doubt everything; discrimination must be scored on sound claims too.
- **Source.** Modirrousta-Galian & Higham (2023), *JEP: General* 152(9), from the older note (abstract level; contested by
  later work). Burke et al. (2022) in `docs/learning-science.md` P26.
- **Strength.** Contested.
- **What it means here.** Every set holds claims that hold up; turning down a sound claim is a named slip and counted.

### T21. Mixed practice helps people tell statistical problem types apart.
- **Source.** Sana, Yan & Kim (2017), *Journal of Educational Psychology*, in `docs/learning-science.md` P22 (abstract
  read there).
- **Strength.** Limited to moderate (the one study of statistical concepts).
- **What it means here.** Once two questions are taught, sets mix items whose deciding question differs, unlabelled.

---

## Part 3. The way of thinking, in plain words

The field has no single checklist; Spiegelhalter, Gal, Full Fact and Gigerenzer each give their own. What they share,
and the order a reader can run it in on a phone:

1. **Say exactly what it claims, and find the number it rests on** (T12, T3, T4). Does it say one thing *makes* another
   happen, or only that they went together? About whom? Read the article, not only the headline: the limits are often
   lower down (T2).
2. **How big is it, really?** Out of how many, over how long; risks as "so many in 1,000 before, so many after"; a test
   result as how many of the positives are real (T5, T6, T10).
3. **Compared with what, and is it fair?** (T7, T2.)
4. **Who was counted, and how?** Enough of them, picked fairly, the people the claim is about, counted the same way, by
   whom (T8, T2, T13).
5. **Could anything else explain it?** (T9.) If the groups were split by chance, usually not; otherwise name the other
   explanation.
6. **Then the verdict**: it holds up; it does not show what it claims (name what breaks it); or you cannot tell from this
   (something needed is missing: T8's "Is something missing?").

Charts are the same questions asked of the axis and the time window (T11). The judgment is about the conclusion drawn
from the number, not the number alone (T1, T12).

**What novices do that experts do not** (from the sources above): take the headline as the claim's evidence (T2, T3);
hear "linked to" as "causes" (T4); take a relative change as the size (T5); read a test's accuracy as the chance a
positive is real (T10); read a bar chart's height instead of its numbers (T11); and, after training in doubt, reject
sound claims (T20).

## What the evidence does not settle

- No study tests adults alone on a phone judging real articles with numbers; T16 (text primer, adults) is the nearest.
- Whether the skill is used unprompted (the habit) is unmeasured; T16 explicitly did not test decisions.
- The order of the six moves is a **judgement call**: it follows how fact-checkers start (T12: understand the claim
  first) and how Spiegelhalter groups the questions (T1), but no source fixes an order, and an item fails on whichever
  question breaks it.
- The pass marks of the real-world test are ours; no source gives one.

## Sources read in this pass
- [Spiegelhalter 2017, Trust in numbers (accepted manuscript)](https://www.repository.cam.ac.uk/handle/1810/266626)
- [Gigerenzer et al. 2007, PSPI (Konstanz repository)](https://kops.uni-konstanz.de/bitstream/123456789/28029/1/Gigerenzer_280290.pdf)
- [Akl et al. 2011, Cochrane (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6464912/)
- [Sumner et al. 2014, BMJ (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4262123/)
- [Woloshin, Schwartz & Welch 2007 (PubMed 17310049)](https://pubmed.ncbi.nlm.nih.gov/17310049/)
- [Gal's questions, Dartmouth Chance](https://chance.dartmouth.edu/course/Articles/talk.html)
- [Wakeford 2015 on Hill 1965 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4291331)
- [Full Fact, How we fact check](https://fullfact.org/how-we-fact-check/)
- [Civic Online Reasoning](https://cor.inquirygroup.org/)
- [Calling Bullshit syllabus](https://callingbullshit.org/syllabus.html)
- [Bergstrom in Times Higher Education](https://www.timeshighereducation.com/comment/57319)
- [Blastland & Dilnot in Times Higher Education](https://www.timeshighereducation.com/node/92388)
- [Informed Health Choices Key Concepts](https://www.informedhealthchoices.org/key-concepts/)
- [Yang et al. 2021 (Duke record)](https://scholars.duke.edu/publication/1474486)
