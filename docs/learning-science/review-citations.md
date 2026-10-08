# Citation-accuracy review of docs/learning-science.md

Lens: citation accuracy. Reviewed 2026-10-04. Line numbers refer to `docs/learning-science.md` as it stands now.

## Headline

No citation is fabricated, garbled or unfindable. All 272 distinct DOIs resolve in Crossref to a record whose first author, year, title and venue match the citation, and for 263 reference entries the first four authors and their order match Crossref. All six non-DOI links load. The tally in section 8 (full 12, abs 230, sec 24, rec 9, total 275) is arithmetically right and matches the tags used in the text.

The problems are about what some sources are said to report, and about rules that cite a source which does not say what the rule needs. There are 2 SERIOUS and 16 MINOR. Both SERIOUS items are rules (a FORBID and a REQUIRE) whose only cited evidence does not support them.

## How this was checked

1. Crossref lookup of every DOI, compared with the citation text and the section 8 entry (authors, year, title, venue, volume, pages).
2. Full-text search of the local copies of Rowland 2014, Brunmair & Richter 2019, Pan & Rickard 2018, Alfieri et al. 2011, Kornell & Bjork 2008, Bisra et al. 2018, Shute 2008, Rosenshine 2012, Burke et al. (working paper), Dunlosky et al. 2013 and the IES practice guide; I also downloaded Karpicke & Blunt 2011 and the Alfieri, Nokes-Malach & Schunn conference abstract. Every figure the document quotes from these was found.
3. Abstracts of about 250 of the 272 DOI sources were retrieved (Crossref, PubMed, Semantic Scholar, ERIC, OpenAlex with a title-match check, publisher pages and search summaries) and the quoted figures, directions and populations compared with them. Where a retrieved abstract did not match the cited paper (several PubMed and OpenAlex hits were for other papers) it was discarded.
4. Every number in the evidence bullets was cross-checked against the four research notes; none came from nowhere.

## Problems

**1. SERIOUS. P16 FORBIDS (line 417), P8 REQUIRES 5 (line 250), section 6 row 2 (line 753): "note-taking" is attributed to Dunlosky et al. (2013) but that paper does not rate it, and what it says is the opposite.**
What is wrong: Dunlosky et al. rate ten techniques (elaborative interrogation, self-explanation, summarisation, highlighting, keyword mnemonic, imagery for text, rereading, practice testing, distributed practice, interleaved practice). Note-taking is not one of them. In the summarisation section they describe Bretzing & Kulhavy (1979), where the summarisation and note-taking groups performed best, and they refer to note-taking as a task known to boost learning. The research note the rule came from (practice.md F19) lists only rereading, highlighting, summarising and learning styles. So the FORBID "Highlighting, note-taking or summarising as a learning mechanism" and the row "...summarising and note-taking are good ways to study" cite evidence that exists only for the other three.
Evidence: https://doi.org/10.1177/1529100612453266 (full text, summarisation section, Fig. 3 discussion).
Correction: in section 6 row 2 drop "and note-taking" from the belief; in P16 FORBIDS and P8 REQUIRES 5 either delete "note-taking" or mark it a judgement call: "(judgement call) the app does not ask the learner to take notes; Dunlosky et al. (2013) did not rate note-taking and describe it as boosting learning in one study". Learner-made highlighting can stay forbidden (Dunlosky: low utility; Ponce et al. 2022: memory g = 0.36, comprehension g = 0.20).

**2. SERIOUS. P17 REQUIRES 5 (line 435), P24 evidence/REQUIRES 5/FORBIDS (lines 568, 576, 580), section 6 row 12 (line 764): "never gate the next unit on a mastery score" rests only on Kulik, Kulik & Bangert-Drowns (1990), whose headline result is the opposite.**
What is wrong: the abstract reports positive effects of mastery learning programmes on examination performance in colleges, high schools and upper elementary grades, stronger for weaker students, and adds only that self-paced mastery programmes often lower completion rates in college classes. That is a meta-analysis of whole mastery programmes, not of gating the next unit in a self-paced app, and P24 cites nothing else for gating. Section 6 quotes only the completion clause.
Evidence: https://doi.org/10.3102/00346543060002265 (abstract).
Correction: mark the no-gate rule **(judgement call)** with the honest rationale (dropout risk in unsupervised self-paced use; no study of unit gating found), state in section 6 and P17 that Kulik et al. found positive performance effects of mastery learning (larger for weaker students) and lower completion for self-paced college versions, and remove "Mastery gating: Kulik et al. (1990), see P17" as the stand-alone evidence line in P24.

**3. MINOR. P17 evidence "Fading" (line 424): "Paas (1992) ... completion problems did best".**
The abstract says both the completion and the worked strategy beat the conventional strategy for transfer, and singles out the worked strategy as best. Completion is not singled out.
Evidence: https://doi.org/10.1037/0022-0663.84.4.429.
Correction: "worked-out and completion problems both beat conventional problems for transfer, the worked strategy most clearly". The fading ramp is still supported by Renkl et al. (2002) and Atkinson et al. (2003).

**4. MINOR. P4 evidence (line 158) and section 6 row 7 (line 758): McNamara et al. (2010) is said to show that readability indexes "failed to separate" high- from low-cohesion versions.**
The abstract says the opposite way round: the readability indexes (e.g. Flesch-Kincaid) inappropriately distinguished the low- and high-cohesion versions, while the cohesion indices distinguished them correctly. The formulas did separate the versions, wrongly.
Evidence: https://doi.org/10.1080/01638530902959943 (abstract; also in OpenAlex).
Correction: "readability indexes such as Flesch-Kincaid gave the high- and low-cohesion versions different scores in a way that did not track cohesion, while the Coh-Metrix cohesion indices tracked it". The conclusion (do not gate on a readability score) is unaffected.

**5. MINOR. P20 evidence bullet 2 and REQUIRES 1 (lines 482, 487), and section 5 (line 734): wrong attribution and an unsupported reason.**
(a) "Shute (2008), a meta-analysis of 15 studies found no relationship between the amount of information in feedback and its effects" is Schimmel (1983), a meta-analysis of computer-based and programmed instruction, reported in Shute (2008, "No Effect of Feedback Complexity"). The "one undergraduate study" is Kulhavy, White, Topp, Chan & Adams (1985). Neither is in the reference list, and Shute herself calls the complexity findings "inconsistent".
(b) "The decisive sentence is first because many learners read only the first lines" is not what Timmers & Veldkamp (2011) report. They found that about half of respondents attended only to feedback on incorrect answers and about a quarter paid it no attention at all; nothing about reading only the first lines.
Evidence: Shute, https://doi.org/10.3102/0034654307313795 (section "Feedback complexity"); Timmers & Veldkamp, https://doi.org/10.1016/j.compedu.2010.11.007.
Correction: attribute to Schimmel (1983) and Kulhavy et al. (1985) "as reported by Shute (2008)"; reword the reason to "many learners skip feedback altogether, especially on correct answers (Timmers & Veldkamp 2011)" and mark decisive-first ordering a judgement call.

**6. MINOR. P10 evidence (line 286) and section 4.1 (line 668): Likourezos & Kalyuga (2017) is listed as "Against" the problem-first designs, and section 4.1 says "several head-to-head tests favour instruction first".**
The abstract reports no differences between the three groups on the transfer post-test, although the fully guided worked-example start reduced cognitive load and some motivation sub-scales differed; the authors conclude similar outcomes can be reached by different sequences. The research note (instruction.md F7) states this correctly; the document does not.
Evidence: https://doi.org/10.1007/s11251-016-9399-4.
Correction: move it out of the "instruction first won" list: "found no difference in delayed transfer between worked-example, partly guided and unguided starts (the worked-example start lowered cognitive load)". Section 4.1 then rests on Fyfe, DeCaro & Rittle-Johnson (2014) and Matlen & Klahr (2013) plus the reversal for grades 2 to 5 in Sinha & Kapur.

**7. MINOR. Section 7 "CONFLICT: varied worked examples" (line 795) and P13 boundary text (line 348): Paas & van Merriënboer (1994) is described as confirming "only that worked examples supported transfer". It is not conflicting.**
The abstract describes four groups (low or high variability, crossed with conventional practice or worked examples; computer-controlled machinery programming; 60 secondary technical students per the usual description). Students who studied worked examples gained most from high-variability examples and spent less time and effort in practice; high variability did not help with conventional practice problems.
Evidence: https://doi.org/10.1037/0022-0663.86.1.122.
Correction: delete the conflict, and cite this paper in P13 as support for varied examples inside worked-example study (and as a caution that variety did not help with high-load problem solving).

**8. MINOR. P22 boundary conditions (line 526): Brunmair & Richter (2019) population caveat omitted.**
The meta-analysis reports larger interleaving effects in younger samples (k = 85, b = -0.04 per year, p < .001) and no significant age effect within university-student samples alone (k = 49, p = .19). The document says samples are "children, undergraduates or medical trainees" but not that effects were larger in younger samples, which matters for an adult audience.
Evidence: https://doi.org/10.1037/bul0000209 (full text, moderator analyses).
Correction: add "effects were larger in younger samples".

**9. MINOR. P12 evidence "What to compare" (line 325) and boundary conditions (line 328).**
(a) Rittle-Johnson, Star & Durkin (2009): the abstract says students who did not attempt algebraic methods at pretest benefited most from studying examples sequentially or from comparing problem types, rather than from comparing solution methods. The document leaves out the sequential-study arm: for true novices, comparing problem types did not beat sequential study.
(b) "'Find the similarities' ... and 'see the differences between categories' ... do not conflict when applied to different pairings" is the document's inference, not a finding. Alfieri et al. (2013) found learners benefit most when asked only to find the similarities, and (conference abstract) suggest learners can be distracted by differences.
Evidence: https://doi.org/10.1037/a0016026; https://doi.org/10.1080/00461520.2013.775712.
Correction: add the sequential-study tie to (a); label (b) as the notes' reading, untested, and note that the look-alike pair in REQUIRES 1(b) asks for difference-finding, which the comparison meta-analysis does not support directly.

**10. MINOR. P19 evidence (line 466) and REQUIRES 2 (line 471): Attali & van der Kleij (2017) reported only in its favourable half.**
The abstract: immediate feedback with a delayed review gave higher performance than delayed feedback after incorrect first responses, but lower performance after correct first responses. REQUIRES 2 calls this design "the best-supported compromise".
Evidence: https://doi.org/10.1016/j.compedu.2017.03.012.
Correction: add the "lower after correct first responses" clause and soften "best-supported" to "supported by one large study for incorrect first responses".

**11. MINOR. P15 evidence "Constraints" (line 386): Chamberland et al. (2015).**
Stated: "explaining cases themselves and then hearing residents' explanations did better a week later". The abstract credits the group that heard residents' explanations with prompts (Group 1) with the gain over control and, on different cases, over the no-prompt group (p = .018); a benefit for the no-prompt group is not reported.
Evidence: https://doi.org/10.1111/medu.12623.
Correction: "explaining cases themselves and then studying residents' explanations with specific prompts did better a week later; without prompts no such benefit is reported".

**12. MINOR. Strength labels for P3 (line 139) and P27 (line 630) are stronger than the document's own scale (section 1: "strong = several independent meta-analyses or large replicated experiments agree in direction").**
P3 "strong" rests on one meta-analysis with a small average effect (Strohmaier et al. 2023, g = 0.15; reducing complexity and increasing cohesion had no significant effect) plus experiments mostly from one lab group; Wittwer & Renkl (2010) found the benefit of instructional explanations per se to be minimal. P27 "strong (the bias)" rests on Hinds (1999, two experiments) and Nathan & Petrosino (2003, N = 48).
Evidence: https://doi.org/10.1016/j.edurev.2023.100533; https://doi.org/10.1007/s10648-010-9136-5; https://doi.org/10.1037/1076-898x.5.2.205; https://doi.org/10.3102/00028312040004905.
Correction: P3 "moderate (consistent direction in experiments; the one meta-analysis found a small effect and no benefit from cohesion cues alone)"; P27 "moderate" or add further curse-of-knowledge sources. Section 5 leans on P3, so the label matters.

**13. MINOR. Reference list, the two "Mayer (n.d.)" entries (lines 967, 968): authors, year and edition are wrong or missing.**
The 13-of-16, d = 0.75 figure is from Mayer, R. E., & Pilegard, C. (2014), Principles for managing essential processing in multimedia learning: Segmenting, pre-training, and modality principles, in R. E. Mayer (Ed.), The Cambridge Handbook of Multimedia Learning (2nd ed.). The 5-of-5, d = 0.85 figure is Mayer, R. E. (2009), The pre-training principle, ch. 10 of Multimedia Learning (2nd ed.), pp. 189-199, and refers to problem-solving transfer tests.
Evidence: the two Cambridge pages already linked.
Correction: replace "(n.d.)" with the above.

**14. MINOR. Reference list, van Gog, Kester & Paas (2011) (line 897): volume given as "36(3)" with no pages. Pages are 212-218.**
Evidence: Crossref record for https://doi.org/10.1016/j.cedpsych.2010.10.004.

**15. MINOR. Reference list, Pierrot (2017) (line 1097): "first name and title not given".**
Author is Yves Pierrot; title "Guest post - The effects of terminology consistency on the reader's comprehension and attitude", I'd Rather Be Writing, 10 March 2017. The page says experimental data on the question are scarce and that the author could not find cognitive experiments on it, which matches how the document uses it.
Evidence: https://idratherbewriting.com/2017/03/10/effects-of-terminology-consistency-guest-post/.

**16. MINOR. P4 evidence (line 157): "Shulman et al. (2020) and Bullock et al. (2019), N = 650 adults: jargon impaired processing fluency and perceived understanding even when defined".**
Only Shulman et al.'s abstract says the jargon terms were defined. Bullock et al.'s abstract reports impaired processing leading to resistance to persuasion, higher risk perception and lower support for the technology; it says nothing about definitions or perceived understanding. Both abstracts give N = 650 and appear to describe the same experiment.
Evidence: https://doi.org/10.1177/0261927x20902177; https://doi.org/10.1177/0963662519865687.
Correction: attribute "even when defined" and "perceived understanding" to Shulman et al. only, and give Bullock et al.'s outcomes as persuasion, risk perception and support.

**17. MINOR. P24 evidence (line 567): Kerfoot et al. (2007) "effect sizes 1.01 and 0.73".**
The abstract gives those as the effect for the students who finished urology 6 to 8 and 9 to 11 months earlier (the largest subgroups), not an overall effect; the overall result is reported only as p < 0.001. "71 percent finished" is not in the abstract (the practice note says it came from the study).
Evidence: https://doi.org/10.1111/j.1365-2929.2006.02644.x.
Correction: "largest for students tested 6 to 8 and 9 to 11 months after the rotation (d = 1.01 and 0.73)".

**18. MINOR. Tag precision: some `abs` items quote figures that are not in the abstract.**
Britton & Gülgöz (1991) "170 undergraduates and 125 Air Force recruits"; Harp & Mayer (1998) "357 undergraduates"; Sadoski, Goetz & Fritz (1993) "221 college students"; Paas (1992) "46 Dutch"; Kerfoot "71 percent finished". I could not find these in the abstracts or in any accessible source; they trace to the notes (ERIC-style records). Taylor & Rohrer (2010): the practice-session percentages (99/98 versus 68/79) are not in its abstract but are in Dunlosky et al. (2013), full text, which I confirmed (99 vs 68 partial problems, 98 vs 79 full problems, 77 vs 38 on the test). Conversely, Karpicke & Aue (2015) and Rawson (2015) are tagged `rec`/"titles only" although their abstracts state their arguments (section 7 "unread arguments" can be closed).
Correction: footnote these as "figure from the full text or a secondary record, not the abstract", or drop the figure.

## Could not verify (flagged, not found wrong)

- Schneider et al. (2018): 103 studies and N = 12,201 confirmed; g about 0.53 (retention) and 0.33 (transfer) not found. The abstract says prior knowledge was not identified as a moderator of signalling, whereas the document says findings on that are inconsistent.
- Delgado et al. (2018) and Clinton (2019): figures confirmed; Clinton's g = -0.32 is for expository text, so the document's attribution to "the second" is right.
- van der Meij & Lazonder (1993) "about 50% more tasks": abstract not retrievable.
- Britton & Gülgöz, Harp & Mayer, Sadoski et al. sample sizes: see item 18.
- Reder & Anderson (1980, 1982), Reder et al. (1986), Stein et al. (1978), Tulving & Thomson (1973), Allen & Brooks (1991), Weaver et al. (2018), Fong et al. (1986), Gick & Holyoak (1983): existence and title confirmed by Crossref; findings not independently checked (the document tags these `sec`/`abs` as appropriate).
- Karpicke & Blunt (2011): d = 1.50 and 1.07 found in the full text; the third value (1.01) was not located in the text I could extract.

## Checked and found correct

Figures, directions and populations confirmed against full text or abstract:
- Rowland 2014 (g = 0.50, k = 159; 0.41 and 0.69 by interval; feedback 0.73 vs 0.39; no-feedback bands 0.03, 0.29, 0.56; feedback with low initial success 0.99; delayed 1.38 (k = 6) vs immediate 0.66 (k = 46); cued recall 0.61, recognition and free recall 0.29).
- Brunmair & Richter 2019 (59 studies, 238 effects, g = 0.42; paintings 0.67, photographs 0.35, mathematics 0.34, words -0.39; adjacent 0.73 vs separated 0.22; I-squared 77.3%).
- Pan & Rickard 2018 (192 effects, 122 experiments, N = 10,382, d = 0.40; -0.053 and 0.90, 0.58 bias-adjusted).
- Alfieri et al. 2011 (164 studies; d = -0.38 over 580 comparisons; 0.30 over 360); Alfieri, Nokes-Malach & Schunn 2013 (57 experiments, 336 tests, d = .50, CI .44-.56, four of 15 moderators).
- Bisra et al. 2018 (64 reports, 69 effects, g = .55; by level .48, .43, .61, .68; instructor's explanation .35; multiple choice .24; metacognitive .19; fail-safe checks).
- Kornell & Bjork 2008 (61% vs 35%, d = .99; 59% vs 36%, d = 1.28; 78% and 78%); Karpicke & Blunt 2011 (80 and 120 students, d = 1.50 and 1.07, students predicted repeated study best).
- Rosenshine 2012 (23 vs 11 of 40 minutes; 82 vs 73 percent; about 80 percent); IES guide (spacing, worked examples, graphics, concrete-abstract all moderate; quizzes-to-re-expose strong; pre-questions and delayed JOLs low; recall formats preferred); Dunlosky 2013 ratings (high: practice testing, distributed practice; moderate: interleaving, self-explanation, elaborative interrogation; low: five named techniques); the Dunlosky interleaving recommendation (introduce, then interleave with earlier types) and its Taylor & Rohrer figures.
- Wisniewski et al. 2020 (435 studies, d = .48; .24, .46, .99; motivational .33 vs cognitive .51, read in the open-access text); Van der Kleij et al. 2015 (40 studies, 70 effects; .49, .32, .05); Kluger & DeNisi 1996; Rhodes & Tauber 2011 (g = .93 and .08); Kulik & Kulik 1988 (53 studies); Butler et al. 2007, 2008, Hays et al. 2013, Mullet et al. 2014, Butler & Roediger 2008, Little et al. 2012, Roediger & Marsh 2005.
- Tetzlaff et al. 2025 (60 studies, 176 effects, N = 5,924, d = .505 and -.428); Strohmaier et al. 2023 (45 studies, N = 6,477, g = .15; personalization, clarity and elaboration helped; complexity and cohesion did not); Ginns et al. 2013 (.30, .54, 35-minute boundary); Ginns 2006 (50 studies); Rey 2012 (39 effects); Rey et al. 2019 (56 investigations, 88 comparisons; also confirmed for system-paced); Sundararajan & Adesope 2020 (58 studies, g = -.33 via search summary); Alpizar et al. 2020 (29 studies, 44 effects, d = .38); Ponce et al. 2022 (36 articles, 85 effects, .36, .20, .44); Barbieri et al. 2023 (55 studies, 181 effects, g = .48, prompts moderate negatively); Wittwer & Renkl 2010 (21 studies); Lazonder & Harmsen 2016 (72 studies, d = .50); Sinha & Kapur 2021 (53 studies, 166 comparisons, g = .36, reversal for grades 2-5 and domain-general skills, .87 bias-adjusted); Stahl & Fairbanks 1986 (.97, .30); Latimier et al. 2021 (29 studies, g = .74 and .034); Cepeda 2006 (839, 317, 184) and 2008 (1,350; 20-40% and 5-10%).
- Adesope et al. 2017 (118 articles, 272 effects); Yang et al. 2021 (222 studies, 48,478, g = .499); Agarwal et al. 2021; Bertsch 2007 (86 studies, 445 effects, .40); Firth et al. 2021 (26 studies); Rohrer 2015 (126, d = .42 and .79) and 2020 (54 classes, 61% vs 38%, d = .83); Taylor & Rohrer 2010 (38% vs 77%); Hatala 2003 (46% vs 30%); Rozenshtein 2016 (57% vs 43%, induction p = .10); Samani & Pan 2021; Larsen 2009 (39% vs 26%, d = .91, 19 + 21 completers); Meyer & Logan 2013; Rawson & Dunlosky 2011 (533 students, 3 correct recalls, 3 relearnings); Janes 2020; Rawson, Dunlosky & Janes 2020 (431 students, d = .28).
- Burke et al. (working paper): 1,976 completions, three-minute video or text, no effect at six months without a reminder, reminder at three months, text-only worse for lower-sophistication readers, muted effect on legitimate offers; Scheibe 2014; Gollwitzer & Sheeran 2006 (94 tests, d = .65); Webb & Sheeran 2006 (.66, .36); Adriaanse 2011 (.51, .29); Sheeran, Webb & Gollwitzer 2005; Morewedge 2015; Sellier 2019 (N = 290, 19%); Aczel 2015; Abrami 2015 (341 effects, g = .30); Sala & Gobet 2017; Barnett & Ceci 2002; Fong & Nisbett 1991.
- Norman 2014 (44.5% vs 45.0%, two cohorts of 96 and 108); Sherbino 2014 (191); Lambe 2016 (28 studies); Norman 2017; Ark 2007 (48 novices, held at one week); Eva 2007; Kok 2015 (84 students, 45.8%); Fyfe & Rittle-Johnson 2016 (N = 108 and 101); Hinds 1999; Nathan & Petrosino 2003 (N = 48); Pashler 2008; Rogowsky 2015; Sweller 2023; de Jong 2010; Pan & Sana 2021 (N = 1,573); Carpenter et al. 2018; Toftness 2018; Soderstrom & Bjork 2023; Bender, Renkl & Eitel 2021 (N = 194, harm only for the uninformed group); Mayer et al. 1996; Garner et al. 1989 (20 adults, 36 seventh graders); Kolers & Gonzalez 1980 (intralingual synonyms weaker); Oversteegen & van Wijk 2003 (more attractive, less comprehensible, slower; per search summary); Yue et al. 2013 (small mismatch helped, large mismatch as poor as identical); McNamara et al. 2011 and O'Reilly & McNamara 2007 (n = 143); Linderholm 2000 (difficult text only); Sayfi 2024 (488 adults, 19.8 points for one of two recommendations); Elliott 2023 (295 parents); Davison & Kantor 1982.
- Other reference details: Chan et al. correction DOI (bul0000312) is a real correction notice for the cited paper; Zamary & Rawson 2018 (online 2016) as stated; section 8 tallies; Rosenshine, IES, Pierrot and ERIC links resolve; every in-text DOI points to the paper named beside it (279 occurrences).
