# Designing a subject: what the evidence says about the build-subject gates (2026-10-12)

The evidence behind the process itself (`.claude/skills/build-subject/SKILL.md` and `stand-in-review.md`), not behind
any one subject. Each finding says what was read, at the levels of `docs/learning-science.md` section 1 (`full`,
`abs`, `sec`, `rec`); "full" here means the paper's own text was read at the sections named, either directly from the
PDF or through a fetch that extracts the page. Most instructional-design evidence is about classrooms, children and
undergraduates, and much of it is old; the strength lines say so. Nothing here is a rule: the skill's author folds it in.

## Findings

### The end result first, and alignment

**D1. Matching practice to the test produces very large effects on that test, and much smaller ones beyond it.**
Cohen coined "instructional alignment" (the match of stimulus conditions among intended outcome, instruction and
assessment) and reported aligned-versus-misaligned differences of 1.1 to 2.74 SD: in one study, fourth graders taught
to write Arabic numerals after Roman ones lost 40% of their raw score when the test reversed the order (Cohen, 1987,
*Educational Researcher* 16(8), 16–20; the studies are small doctoral experiments with children and immediate
posttests). The other face of the same effect: in group-based mastery learning, effects on experimenter-made tests
keyed to the objectives had a median of about +0.26, and on standardized tests about +0.04, "essentially zero"
(Slavin, 1987, *RER* 57(2), 175–213). *Read: full text, Cohen pp. 16–17; Slavin abstract, pp. 175–177, the Table 1
and Table 2 summaries and the section "Why are achievement effects of group-based mastery learning so modest?",
2026-10-12.* Strength: moderate for the direction (old, small, school studies). **Design:** a check that repeats the
practice items measures recall of those items; the end check and the gate 2 test must be new cases in the real form,
and evidence after use (gate 7) must include a measure the lessons were not built around. **Decides:** gate 7 step 3
(the evidence after use is a delayed test on fresh real-form cases, not the lessons' own end checks); and the
stand-in's Check question "on new material", which would be optional if aligned checks did not inflate.

**D2. Backward design and constructive alignment are well argued and thinly tested.** Wiggins and McTighe's
*Understanding by Design* and Biggs's constructive alignment (1996, *Higher Education* 32, 347–364) are design
frameworks. The controlled evidence found is single courses: students in courses rated more constructively aligned
were more likely to report deep and less likely to report surface approaches (Wang, Su, Cheung, Wong & Kwong, 2013,
*Assessment & Evaluation in Higher Education* 38(4), 477–491); a quasi-experiment and a before-after redesign reported
better grades with no isolation of the cause. The research summaries for UbD are written by its author. No
independent trial was found. *Read: Wang et al., abstract via search; UbD summary and the single-course studies,
search summaries only; Wiggins & McTighe and Biggs, `rec`.* Strength: limited. **Design:** "start from the end result"
rests on D1 and D9 (alignment and transfer), not on these frameworks. **Supports.**

### Telling the learner the goal

**D3. Stating objectives to the learner adds little once there is practice; what an objective names matters, its verb
does not.** 108 undergraduates, a 2x2 design: practice with feedback raised achievement (F(1,104) = 10.41,
eta squared = .09), objectives with review did not, and learners rated objectives the least helpful element (Martin &
Klein, 2008, *J. Educational Multimedia and Hypermedia* 17(2), 171–189); a six-version study found the same for
objectives against practice (Martin, Klein & Sullivan, 2007, *BJET* 38(4), 623–636). Objectives that name the
information to be learned focus learning on it (Hamilton, 1985, *RER*, as quoted); in one dissertation the
specificity of the object helped intentional learning and the specificity of the verb did nothing. The advance
organiser and pretest evidence is in `learning-science.md` P1. *Read: Martin & Klein 2008 full text (abstract,
background, Results), 2026-10-12; Martin et al. 2007 abstract and literature review (OCR copy); Hamilton and the
dissertation, `sec`.* Strength: limited to moderate. **Design:** the owner's paragraph is a design check for the owner
(does this aim at the right thing), not a learning aid; the ban on "know, understand, recognize" in gate 2 is grounded
in alignment (a "know" goal produces a check that is not the real task: D1, D9), not in research on objectives.
**Supports.** (The learner-facing statement of the goal stays cheap and optional: `learning-science.md` P1.)

### Practice: what the learner spends the time doing

**D4. Doing beats listening, and the learner's feeling says the opposite.** 225 studies in undergraduate science and
maths: active learning raised exam scores by g = 0.47 and cut failure from 33.8% to 21.8%; the active share of class
time ranged from 10% to 100% and intensity could not be analysed (Freeman et al., 2014, *PNAS* 111(23), 8410–8415). In
a crossover with 149 physics students, the active class gave 0.46 SD more learning and 0.56 SD less feeling of
learning; perceived fluency of the lecturer predicted the feeling (Deslauriers et al., 2019, *PNAS* 116(39),
19251–19257). *Read: full text on PMC (Freeman: Results, Methods, Discussion; Deslauriers: design, Table 3,
interpretation), through a fetch that extracts the page, 2026-10-12.* Strength: strong for the direction (classroom,
STEM, undergraduates); nothing on a phone app or on a best share. **Design:** most of a lesson is doing; no study
sets the number, so `readingShare` (0.15 in scams) is a judgement call; and a learner's "it felt like a waste" or "I
learned a lot" is weak evidence either way. **Decides:** gate 6's pass rests on the end check passed, not on the
learner's report; "would they come back" and "felt like a waste" are recorded as persistence signals, not as
evidence the lesson teaches.

**D5. For beginners, doing must be guided: unassisted doing loses to being shown.** Two meta-analyses of 164 studies:
unassisted discovery against explicit instruction d = -0.38 (580 comparisons; adults -0.26, adolescents -0.53);
worked examples beat unassisted discovery most (d = -0.63 for discovery); assisted discovery with feedback, worked
examples, scaffolds or elicited explanation beat other instruction, d = 0.30 (unpublished studies -0.54) (Alfieri,
Brooks, Aldrich & Tenenbaum, 2011, *J. Educ. Psych.* 103(1), 1–18). For novices, studying worked examples "seems
invariably superior" to solving the equivalent problems, and the advantage reverses only with expertise (Kirschner,
Sweller & Clark, 2006, *Educational Psychologist* 41(2), 75–86, who also warn against assuming instruction should
"exclusively focus on application"). *Read: full text, Alfieri, abstract and the moderator results for both analyses;
Kirschner et al., abstract, the worked-example section and Conclusions, 2026-10-12.* Strength: strong. **Design:** the
practice of gate 3 starts with the real action shown done (a worked case in the real form), then completed, then done
alone, with feedback; a worked example of the real action is part of the practice, not "reading" to be squeezed by
the share. **Decides:** gate 3 and gate 5's `does` (a shown case of the real action before the first try, and guidance
that fades); if unguided doing worked as well, "the practice is the bulk" could start cold.

**D6. Testing yields learning that transfers when the practice and the use share their answers.** 192 effect sizes,
122 experiments: d = 0.40 overall. "Response congruency" is defined as "having the same or very substantially
overlapping answers" on the practice and the final test; example: a definition question at practice ("reliability")
and an application case at the test whose answer is the same word. Without it d = 0.28, with it 0.58; with neither
congruency nor elaborated retrieval 0.21, and the publication-bias-adjusted intercept is "effectively zero".
Problem-solving transfer was weak overall (d = 0.29, n.s.) but split: medical diagnosis and treatment, where practice
and test scenarios were "essentially the same", d = 0.59; worked-example studies about 0.05. The authors' first
principle: transfer is likeliest when the answers on practice and final tests are the same (Pan & Rickard, 2018,
*Psychological Bulletin* 144(7), 710–756). *Read: full text, author copy (rickardlab.ucsd.edu): Abstract, Method
"Response congruency" with footnote 3, Results (single and simultaneous fits, PEESE), the problem-solving category,
Discussion and "Potential Educational and Practical Implications", 2026-10-12.* Strength: moderate (cross-study
moderator; mostly laboratory; the authors flag few category-learning studies). **Design:** this confirms the reading
in `learning-everyday-math.md` M5 and corrects R8 in `review-after-lessons.md`: congruency is about the same correct
answers recurring, not the format of the response (typing versus tapping). It supports practising on real-looking
cases whose correct answer is the real moment's action (hang up and call back; this note; that country), and says
nothing about input modality. **Decides:** gate 3's "the same kind of input and the same kind of response", read as
"cases like the real ones, answered with the action the real moment needs"; gate 4's check uses the same actions on
new cases. A choice of modality (typed, tapped, sung) must cite other evidence or be a judgement call.

**D7. Whole-task practice beats training the parts apart, for complex skills.** Programmes built with 4C/ID (whole
real tasks from simple to complex, with support that fades) had d = 0.79 on performance, larger in higher education
(Costa, Miranda & Melo, 2022, *Learning Environments Research* 25, 445–463); a whole-task group beat a part-task group
on acquisition and transfer (Lim, Reiser & Olina, 2009, *ETR&D*). Merrill's first principles (problem-centred,
activation, demonstration, application, integration) are a synthesis of design theories, not a tested model (Merrill,
2002, *ETR&D* 50(3), 43–59); their support is correlational self-report: 140 students in 89 courses, strong
correlations between perceived use of the principles, learning time and perceived mastery (Frick et al., 2009,
*ETR&D* 57, 705–720). *Read: Costa et al., abstract via the repository record; Lim et al., abstract via a listing,
`sec`; Merrill, `abs`; Frick et al., full text (abstract and Results), 2026-10-12.* Strength: moderate for whole-task
design; limited for Merrill. **Design:** gate 4's parts are best practised as simpler versions of the whole real
moment, not as isolated sub-skills taught first and joined at the end; this matches the skill's "each check is a
smaller gate 2 test". **Supports.** (Would decide that every lesson after the first includes a simplified whole task;
full texts not read: a judgement call.)

**D8. "Deliberate practice" is not the model for a beginner's app.** Accumulated deliberate practice explained 26% of
performance variance in games, 21% in music, 18% in sports, 4% in education and under 1% in professions (Macnamara,
Hambrick & Oswald, 2014, *Psychological Science* 25(8), 1608–1618), and its definition is contested. *Read: abstract
figures via search and a commentary by the same group, `sec`.* Strength: moderate that it explains less than claimed.
**Design:** the practice of this app rests on retrieval, feedback and worked examples (D5, D6, `learning-science.md`
P16 to P21), not on expert-performance research; the "doer effect" in online courseware (doing worth several times
reading or watching; Koedinger et al., 2015, L@S, observational causal modelling, replicated by the vendor) points the
same way. *Read: Koedinger, `sec`.* **Supports.**

### Trying it on a learner: the pilot and the stand-in

**D9. Trying materials on learners and revising them improves learning; how is less settled.** 38 of 40 design models
prescribe tryout and revision. Revised versions beat originals after learner tryouts (Baker 1970; Abedor 1971;
Kandaswamy, Stolovitch & Thiagarajan 1976); one-to-one and group tryouts did equally well (Kandaswamy; Wager 1983);
revision from mixed-aptitude learners beat revision from high or low alone, and the two groups found different
problems (Wager). Against it: revision by intuition also beat the original (Rosen 1968), and editing guidelines did
as well as learner data (Golas 1982); expert rankings of materials correlated negatively with student achievement
(Rothkopf 1963) (all in Weston, 1986, *Canadian Journal of Educational Communication* 15(1), 5–17). A later controlled
study separating tryout from revision: only versions revised with learner feedback improved learning, and the reviser
mattered more than expected (Weston, Le Maistre, McAlpine & Bordonaro, 1997, *Instructional Science* 25, 369–386).
*Read: Weston 1986 full text, pp. 5–8 and "Selection of learners", 2026-10-12 (the primary studies, `sec` through
it); Weston et al. 1997, abstract.* Strength: moderate that learner tryouts improve materials; limited on how many and
which learners. **Design:** a pilot tried by someone who did not build it, before scale, caps the cost of a wrong
design; the author or a subject expert is not that someone (also `learning-science.md` P27). **Decides:** gate 6
(one pilot built and tried before any other lesson is written).

**D10. One tryout finds a minority of the problems.** In usability testing, one user uncovers about 31% of the
problems on average and five about 85%; Nielsen recommends several small rounds, retesting after each fix, and
separate testers for different kinds of user (Nielsen, 2000, from Nielsen & Landauer, 1993). Heuristic review by
experts missed about half of what watching users found, in compiled comparisons (`sec`). *Read: Nielsen's article in
full, 2026-10-12; the 1993 model paper and the compilations, `sec`.* Strength: limited (software interfaces, not
lessons). **Design:** a single pass is a floor, not proof; fixes are re-checked by a fresh tryer (as the skill does),
and two tryers who differ (D9's mixed aptitude) find more than one. **Supports.** (Would decide two stand-in reviews per
pilot instead of one; a judgement call to measure.)

**D11. A language model told to be a beginner is not a beginner; nothing validates the stand-in review as a learner
tryout.** No model-prompt pair matched average students across subjects and grades; strong models outperform students
at every grade unless forced (Srivatsa, Maurya & Kochmar, 2025, BEA). Simulated classrooms predicted real item
difficulty with correlations up to 0.75 to 0.82, and weaker models did better than stronger ones (Acquaye et al.,
2026, arXiv 2601.09953). Teachers who tutored simulated students found them too articulate, unnaturally attentive and
inconsistent (Martynova et al., 2025, BEA). A position paper names the "competence paradox" (a capable model asked to
act partly knowing) and reports no test of its own (Yuan et al., 2026, arXiv 2601.05473). As judges, models agree with
people about 80% of the time on chat preferences, with position, length and self-enhancement biases (Zheng et al.,
2023, arXiv 2306.05685), and they recognise and favour their own writing (Panickssery, Bowman & Feng, 2024, NeurIPS).
*Read: Yuan et al. full text (html, through a fetch); the others abstracts, 2026-10-12.* Strength: limited, recent,
mostly preprints. **Design:** the stand-in is closest to an expert review with a checklist (D9's Golas: guideline-based
revision helped), not a learner tryout. Its "before" (what I can do now) is the least valid part, so a "Gain: yes"
from it is weak; it is most useful for defects it can show (a step the lesson never taught, a key that contradicts
the lesson, a check passable without the lesson). A reviewer of the builder's own model family may favour the
builder's text. **Supports.** (Would decide that a stand-in pass needs no unresolved shown defect rather than a
claimed gain, and that the owner's own try, or end-check data after use, is the only evidence of gain; no study
tests either: a judgement call.)

### Transfer and the real moment

**D12. Far transfer is rare; near transfer of a specific skill, practised in the form of use, is what works.**
Barnett and Ceci's nine dimensions (domain, physical, temporal, functional, social context, modality and three of
content) make "near" and "far" measurable and show far transfer is rare but conditional (2002, *Psych. Bulletin*
128(4), 612–637); training general skills (chess, music, working memory) shows small effects that shrink with better
designs (Sala & Gobet, 2017). *Read: abstracts, as in `learning-science.md` P25.* Strength: strong. **Design:** gate
2's real moment names the context dimensions (where, when, on what device, under what pressure), and the test sits in
them; no subject promises general thinking. **Supports.** (The skill already does this; the taxonomy is a checklist
for writing `realMoment`, not a finding that decides a different gate.)

### The owner's asks

**D13. Client involvement helps on average, conditionally; nothing measures the cost of dropping what a client
asked for in instruction.** 87 empirical studies of user involvement in software: 52 found it helps system success,
12 found harm, 23 were unclear; the relation is "neither direct nor binary" (Bano & Zowghi, 2015, *Information and
Software Technology* 58, 148–169). Choice raises motivation and effort (Patall et al., 2008, in `learning-science.md`
P28). No study was found on learner- or client-set content against designer-set content in instructional design, on
needs analysis improving outcomes, or on scope creep against dropped requirements. *Read: Bano & Zowghi abstract
via search; Patall, `abs`.* Strength: limited, indirect. **Design:** gate 0 rests on the owner's standing and on the
one-learner situation (the owner is the client and the learner), not on evidence. **Supports.**

### Designing blind

**D14. Seeing an existing solution makes designers reuse its features, and telling them not to does not reliably
stop it.** Designers shown an example reproduced its features, including flaws that contradicted the brief (Jansson &
Smith, 1991, *Design Studies* 12(1), 3–11); fixation persisted when participants were told to avoid the example's
features (Jansson & Smith; Perttula & Sipilä 2007) or to diverge from it (Smith et al. 1993); only an explicit ban on
named negative features removed it in one study (Chrysikou & Weisberg 2005). Experts may fixate more than novices
(Kim & Ryu 2014). The 25 experiments vary widely in method, and part of "fixation" may be designers adopting an
existing solution because it seems to meet the requirements (Vasconcelos & Crilly, 2016, *Design Studies* 42, 1–32).
*Read: Vasconcelos & Crilly full text, section 1, section 2.2.4 "Instructions for reproduction" and the discussion of
explanations, 2026-10-12; the primary studies through it, `sec`.* Strength: moderate (short idea-generation tasks,
mostly students). **Design:** reading the old lessons with a warning not to copy them is not equivalent to not
reading them; the existing content is opened only after the design is written. The same finding says why gate 0 is
needed: blind to solutions must not mean blind to requirements, so the owner's asks are read from the sources while
the old lessons are not. **Decides:** the "Must not open" column for gates 2 to 5, against "open it, but don't copy".

### Mastery and checks

**D15. Mastery learning helps on tests aligned to it; the criterion number is a convention.** 108 controlled
evaluations: positive effects on examinations, larger for weaker students; self-paced mastery often lowered completion
in college (Kulik, Kulik & Bangert-Drowns, 1990, *RER* 60(2), 265–299). Group-based mastery in schools: modest effects
on its own tests, none on standardized ones (D1). Criteria are "usually in the range of 80–90%" (Slavin, 1987); 95%
gave higher achievement and worse attitudes than 85% (Block, 1971, as reported); a dissertation found 90% no better
than 80%. *Read: Kulik abstract; Slavin full text as in D1; Block and the dissertation, `sec`.* Strength: moderate for
mastery, limited for any number. **Design:** "8 of 10" or "four of five notes" is a starting value tuned on data;
the check's form (D6) matters more than its threshold; a hard gate risks dropout (`learning-science.md` P17, P28).
Returns after a lesson are in `review-after-lessons.md` (R1 to R9), not repeated here. **Supports.**

### What does not help

**D16. Tempting choices the evidence does not support.** Teaching to learning styles (Pashler et al., 2008: no adequate
evidence; `learning-science.md` section 6). Unassisted discovery (D5). Problem-first designs ("productive failure")
are contested: a 2021 meta-analysis reported benefits for conceptual knowledge only under conditions (enough prior
knowledge, a well-designed problem, groups, older learners; Sinha & Kapur, *RER*), which a lone adult beginner on a
phone does not meet; *read: press summaries only*. Stating objectives in place of practice (D3). Judging a lesson by
how it feels, the learner's or the builder's (D4, D11). Training general thinking (D12). Long explanations before the
first try have no direct test against short ones; what the evidence supports is explanation that is complete but
followed at once by guided practice (D5, `learning-science.md` section 5). Strength: as cited. *Read: the sources as the notes cited read them; no source of its own.* **Supports.**

## What the evidence does not settle

- A best reading share, number of items, criterion or lesson length: no study sets them (D4, D15).
- Whether a language-model review predicts a real beginner's gain: untested (D11).
- The cost of a dropped ask against the cost of scope: no study in instruction (D13).
- Self-study adults on a phone: almost every study here is a classroom or a laboratory.

## What this means for the skill

- **Gate 0 (the owner's asks).** Rests on judgement and the owner's standing, not on evidence (D13). D14 supports
  keeping the asks list separate from the blind design: requirements are read, old solutions are not.
- **Gate 1 (kind and evidence).** Supported as written; D6 and D1 show why "read in full" matters (R8's misreading
  came from a summary). The one-learner app has almost no direct evidence, so most principles will be supports.
- **Gate 2 (paragraph, topics, test).** The test "in the form of the real moment, done not said" is supported by D1,
  D6, D12. The ban on know/understand verbs is supported by alignment, not by objectives research (D3). The paragraph
  as a precheck for the owner is judgement; its value to the learner is small (D3).
- **Gate 3 (practice).** Supported (D4, D6), with two changes: practice for beginners is guided, starting from the
  real action shown (D5), and a shown worked case is practice, not reading; "same kind of response" means the same
  answer or action, not the same input device (D6). The number in `readingShare` is a judgement call (D4).
- **Gate 4 (form, parts, checks).** Checks as smaller real tasks are supported (D1, D6, D7); D7 favours parts practised
  as simplified wholes. The threshold of a check is a convention (D15). Checks must use new cases (D1).
- **Gate 5 (each lesson on paper).** Supported as alignment (D1); no study tests paper design itself. `why` citing
  principles is the project's own discipline, not a finding.
- **Gate 6 (pilot).** Trying a pilot on a non-builder before scale is supported (D9). One try finds a minority of
  problems (D10). The pass should rest on the end check, not on how the lesson felt (D4).
- **Gate 7 (the rest, then evidence).** Each lesson tried: supported (D9). Evidence after use should include a delayed
  test on fresh real-form cases, not only the lessons' own checks, which overstate (D1).
- **Stand-in review.** No literature validates it as a learner tryout; the nearest evidence (D11) says a model cannot
  reliably not-know, favours its own text, and is best at showing concrete defects. Its Gain verdict is the weakest
  part; its Clear and Check findings are the strongest. The owner's try and end-check data are the only real tests.
- **Design blind.** Decided by D14: a warning does not undo exposure, so the old content stays closed until the design
  is written.

## Sources
- [Cohen 1987, JSTOR copy](https://www.uky.edu/~gmswan3/EDC608/instructional_alignment.pdf)
- [Slavin 1987](https://www.gwern.net/doc/psychology/1987-slavin.pdf)
- [Wang et al. 2013, HKBU record](https://scholars.hkbu.edu.hk/en/publications/an-exploration-of-biggs-constructive-alignment-in-course-design-a/)
- [Martin & Klein 2008](https://myweb.fsu.edu/jklein/articles/Martin_Klein_2008.pdf); [Martin, Klein & Sullivan 2007](https://myweb.fsu.edu/jklein/articles/Martin_Sullivan_2007.pdf)
- [Freeman et al. 2014, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4060654/); [Deslauriers et al. 2019, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6765278/)
- [Alfieri et al. 2011](https://www.fisme.science.uu.nl/publicaties/literatuur/2011_alfieri_discovery_learning.pdf); [Kirschner, Sweller & Clark 2006](https://www.davidlewisphd.com/courses/EDD8121/readings/2006-Kirschner_et_al.pdf)
- [Pan & Rickard 2018, author copy](https://rickardlab.ucsd.edu/pdf/PR_2018.pdf)
- [Costa, Miranda & Melo 2022, record](https://repositorio.iscte-iul.pt/handle/10071/23015); [Frick et al. 2009](https://bio.tedfrick.me/etrd/FrickTALQ2009.pdf); [Merrill 2002, record](https://mail.editlib.org/p/165609)
- [Macnamara et al. 2014, commentary](https://pmc.ncbi.nlm.nih.gov/articles/PMC4101876/); [Doer effect replication](https://research.vitalsource.com/publications/the-doer-effect-replicating-findings-that-doing-causes-learning)
- [Weston 1986, CJEC](https://cjlt.ca/index.php/cjlt/article/download/26887/20800/77441); [Weston et al. 1997](https://link.springer.com/doi/10.1007/BF00118558)
- [Nielsen, test with 5 users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/)
- [Srivatsa et al. 2025](https://arxiv.org/abs/2507.08232); [Acquaye et al. 2026](https://arxiv.org/abs/2601.09953); [Martynova et al. 2025](https://aclanthology.org/2025.bea-1.8); [Yuan et al. 2026](https://arxiv.org/html/2601.05473v1)
- [Zheng et al. 2023](https://arxiv.org/abs/2306.05685); [Panickssery et al. 2024](https://arxiv.org/abs/2404.13076v1)
- [Bano & Zowghi 2015, accepted manuscript](https://opus.lib.uts.edu.au/bitstream/10453/32295/1/Accepted%20IST%20manuscript.pdf)
- [Vasconcelos & Crilly 2016](https://www.repository.cam.ac.uk/handle/1810/252511)
- [Kulik et al. 1990, record](https://www.academia.edu/81783373/Effectiveness_of_Mastery_Learning_Programs_A_Meta_Analysis)
