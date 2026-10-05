/* ===================== SUBJECT: STATISTICAL CLAIMS ===================== */

const STATS_OUTCOMES = [
  {id:'survivor',   n:'Survivorship bias',                group:'sampling'},
  {id:'selfselect', n:'Self-selection',                   group:'sampling'},
  {id:'nonresp',    n:'Non-response bias',                group:'sampling'},
  {id:'smalln',     n:'Small-number volatility',          group:'sampling'},
  {id:'samp_ok',    n:'Sampling is sound',                group:'sampling'},
  {id:'proxy',      n:'Proxy failure / Goodhart',         group:'measure'},
  {id:'defshift',   n:'Definition or instrument changed', group:'measure'},
  {id:'detection',  n:'Detection effect',                 group:'measure'},
  {id:'meas_ok',    n:'The measure is sound',             group:'measure'},
  {id:'baserate',   n:'Base-rate neglect',                group:'compare'},
  {id:'relrisk',    n:'Relative risk without the absolute',group:'compare'},
  {id:'nocontrol',  n:'No comparison group',              group:'compare'},
  {id:'simpson',    n:'Simpson’s paradox',                group:'compare'},
  {id:'comp_ok',    n:'The comparison is fair',           group:'compare'},
  {id:'confound',   n:'Confounding variable',             group:'cause'},
  {id:'reverse',    n:'Reverse causation',                group:'cause'},
  {id:'regression', n:'Regression to the mean',           group:'cause'},
  {id:'cause_ok',   n:'The causal claim is supported',    group:'cause'}
];

const STATS_GATE = { code:'S1', label:'Where does the claim first break?', options:[
  { id:'sampling', n:'Who got counted',        sub:'which cases are in the data at all',
    keeps:['survivor','selfselect','nonresp','smalln','samp_ok'] },
  { id:'measure',  n:'What the number counts', sub:'the definition, the instrument, the effort',
    keeps:['proxy','defshift','detection','meas_ok'] },
  { id:'compare',  n:'What it’s set against',  sub:'the contrast, the denominator, the base rate',
    keeps:['baserate','relrisk','nocontrol','simpson','comp_ok'] },
  { id:'cause',    n:'What it says caused what', sub:'the leap from pattern to explanation',
    keeps:['confound','reverse','regression','cause_ok'] }
]};

const STATS_STEPS_BY_GATE = {
  sampling: [
    { code:'A1', label:'How did cases get into the data', options:[
        {id:'endpoint', n:'Only the ones that lasted are visible',        keeps:['survivor']},
        {id:'optedin',  n:'Subjects put themselves in',                   keeps:['selfselect']},
        {id:'answered', n:'Only those who answered were counted',         keeps:['nonresp']},
        {id:'frame',    n:'Everyone in the frame was counted',            keeps:['smalln','samp_ok']}
    ]},
    { code:'A2', label:'Picture who is missing — what changes', options:[
        {id:'failures',  n:'The failures would reverse the conclusion',   keeps:['survivor']},
        {id:'motivated', n:'The joiners differ from those who stayed out',keeps:['selfselect']},
        {id:'silent',    n:'The silent differ from the responders',       keeps:['nonresp']},
        {id:'unstable',  n:'Nobody is missing, but the denominator is tiny', keeps:['smalln']},
        {id:'nothing_a', n:'Nothing important is missing, and n is large',keeps:['samp_ok']}
    ]}
  ],
  measure: [
    { code:'M1', label:'What is the number a count of', options:[
        {id:'standin', n:'A stand-in for the thing anyone actually cares about', keeps:['proxy']},
        {id:'newrule', n:'The same word, counted under a new rule',       keeps:['defshift']},
        {id:'found',   n:'Cases found — which depends on how hard anyone looked', keeps:['detection']},
        {id:'thing',   n:'The thing itself, counted the same way throughout', keeps:['meas_ok']}
    ]},
    { code:'M2', label:'If the underlying reality had not moved at all, would this number still have moved', options:[
        {id:'yes_game',   n:'Yes — people optimising the number alone would do it', keeps:['proxy']},
        {id:'yes_rule',   n:'Yes — a definition or threshold change alone would do it', keeps:['defshift']},
        {id:'yes_effort', n:'Yes — more looking alone would do it',       keeps:['detection']},
        {id:'no_m',       n:'No — this number moves only when the thing moves', keeps:['meas_ok']}
    ]}
  ],
  compare: [
    { code:'C1', label:'What is it set against', options:[
        {id:'nothing_c',  n:'Nothing — a single number with no contrast', keeps:['nocontrol']},
        {id:'changeonly', n:'A change, given only as a percentage of itself', keeps:['relrisk']},
        {id:'norate',     n:'A rate, without how common the thing is to begin with', keeps:['baserate']},
        {id:'lumped',     n:'Subgroups lumped into one total',            keeps:['simpson']},
        {id:'likewise',   n:'A like-for-like group',                      keeps:['comp_ok']}
    ]},
    { code:'C2', label:'What would restore the picture', options:[
        {id:'control',   n:'A group that did not get it',                 keeps:['nocontrol']},
        {id:'absolute',  n:'The absolute numbers behind the percentage',  keeps:['relrisk']},
        {id:'prior',     n:'How common it is in the population to start with', keeps:['baserate']},
        {id:'split',     n:'Splitting the total back into its subgroups', keeps:['simpson']},
        {id:'nothing_x', n:'Nothing — the comparison already holds',      keeps:['comp_ok']}
    ]}
  ],
  cause: [
    { code:'K1', label:'What else could produce this exact pattern', options:[
        {id:'third',     n:'Something driving both sides at once',        keeps:['confound']},
        {id:'backwards', n:'The effect could be producing the cause',     keeps:['reverse']},
        {id:'extreme',   n:'The group was picked for being extreme, and drifted back', keeps:['regression']},
        {id:'none_k',    n:'Nothing plausible — the design rules the alternatives out', keeps:['cause_ok']}
    ]},
    { code:'K2', label:'What would settle it', options:[
        {id:'adjust',    n:'Holding the third variable fixed',            keeps:['confound']},
        {id:'timing',    n:'Knowing which one came first',                keeps:['reverse']},
        {id:'untreated', n:'Watching an equally extreme group left alone',keeps:['regression']},
        {id:'already',   n:'Already settled — randomised, or the alternatives are closed off', keeps:['cause_ok']}
    ]}
  ]
};

const V1_OPTS = ['Who got counted','What the number counts','What it’s set against','What it says caused what','Nothing — the claim holds'];
const V1_DRILL = [
  {q:'Every company profiled in the book on enduring greatness follows the same seven habits.',
   a:'Who got counted', w:'The enduring ones were selected for enduring. The companies that had the same seven habits and collapsed were never eligible for the book.'},
  {q:'Since support agents started being paid on tickets closed per hour, tickets closed per hour is up 40%.',
   a:'What the number counts', w:'The number became the target. Ask what a closed ticket now means before asking whether support improved.'},
  {q:'Sales rose 12% last quarter. The rebrand worked.',
   a:'What it’s set against', w:'Break at the earliest stage. Before you argue about the rebrand, ask 12% against what — last quarter, the same quarter last year, the rest of the sector?'},
  {q:'Reported hate crimes in the county rose sharply in the same year the force adopted a new recording standard.',
   a:'What the number counts', w:'A recording standard is a ruler. The word stayed the same; what qualifies for it did not.'},
  {q:'People who drink coffee live longer than people who do not, so coffee extends life.',
   a:'What it says caused what', w:'The counting and the comparison are fine. The break is the last step — the leap from a pattern to an explanation.'},
  {q:'In a randomised trial of 40,000 volunteers, deaths over two years fell from 8 per 1,000 in the placebo arm to 4 per 1,000 in the treatment arm.',
   a:'Nothing — the claim holds', w:'Randomised, both arms reported, absolute numbers given, comparison like for like. Finding no fault is an available answer and you will need it.'}
];

const V2_OPTS = ['Survivorship bias','Self-selection','Non-response bias','Small-number volatility','Sampling is sound'];
const V2_DRILL = [
  {q:'The average fifteen-year return across every fund currently listed on the platform is 9.4%.',
   a:'Survivorship bias', w:'Funds that closed over those fifteen years are not on the platform today. The dead are exactly the bad ones, and they are gone from the average.'},
  {q:'An online poll on the newspaper’s front page finds 78% oppose the new parking scheme.',
   a:'Self-selection', w:'Respondents put themselves in. Angry people click; satisfied people scroll past.'},
  {q:'The engagement survey went to all 4,000 staff. Of the 600 who replied, 88% report high satisfaction.',
   a:'Non-response bias', w:'Eighty-five percent did not reply. Disengaged staff are precisely the people who skip an engagement survey.'},
  {q:'The three schools with the largest test-score gains this year all have fewer than sixty pupils. Small schools work better.',
   a:'Small-number volatility', w:'Tiny denominators swing hardest. Check the bottom of the same table — small schools will crowd that end too.'},
  {q:'The quarterly labour force survey draws a random sample of 40,000 households, chases non-responders by phone and in person, and reports 4.2% unemployment ±0.3 points.',
   a:'Sampling is sound', w:'Random frame, non-response actively pursued, uncertainty stated. This is what a sound sample looks like — learn the shape so you can miss it.'}
];

const V3_OPTS = ['Proxy failure','Definition or instrument changed','Detection effect','The measure is sound'];
const V3_DRILL = [
  {q:'The trust now sees 95% of emergency patients within the four-hour target, up from 68%. Emergency care has improved.',
   a:'Proxy failure', w:'The four-hour figure was a stand-in for good emergency care. Once it became the thing managed, admissions cluster at the boundary and waiting moves to places where the clock has not started.'},
  {q:'Thyroid cancer incidence in the country rose fifteen-fold after a national ultrasound screening push. Deaths from thyroid cancer stayed flat.',
   a:'Detection effect', w:'The flat mortality is decisive. Fifteen times more disease would move the death rate; fifteen times more looking would not.'},
  {q:'Violent crime is up 40% since 2016 — though in 2017 the force began recording each victim of an incident separately.',
   a:'Definition or instrument changed', w:'One incident with three victims used to be one number and is now three. The ruler was rewritten mid-series.'},
  {q:'The reservoir level, read from the same gauge at the same hour each day, has fallen 3 metres since March.',
   a:'The measure is sound', w:'Same instrument, same protocol, direct measurement of the thing itself. Nothing here moves unless the water does.'},
  {q:'Since the district began ranking teachers on year-end test scores, year-end test scores have climbed every year.',
   a:'Proxy failure', w:'Scores stood in for learning until they became the object of effort. Ask what else changed — curriculum narrowing, test practice, which pupils sit the test.'}
];

const V4_OPTS = ['Base-rate neglect','Relative risk without the absolute','No comparison group','Simpson’s paradox','The comparison is fair'];
const V4_DRILL = [
  {q:'The test is 99% accurate and yours came back positive, so there is a 99% chance you have it. The condition affects about 1 in 10,000 people.',
   a:'Base-rate neglect', w:'Among 10,000 people, roughly 100 test positive and one of them actually has it. The accuracy figure says nothing without the prevalence.'},
  {q:'Two rashers of bacon a day raises your risk of bowel cancer by 18%.',
   a:'Relative risk without the absolute', w:'Eighteen percent of a small baseline. In absolute terms lifetime risk moves from roughly 6% to roughly 7% — real, and not what 18% sounds like.'},
  {q:'Ninety percent of people who took the remedy said their cold had cleared within a week.',
   a:'No comparison group', w:'So did ninety percent of the people who took nothing. Without an untreated group the number is uninterpretable.'},
  {q:'Hospital A’s overall surgical mortality is 3.1%; Hospital B’s is 1.9%. A is the region’s trauma referral centre.',
   a:'Simpson’s paradox', w:'The totals mix case mixes. Split by severity and A can beat B in every single category while losing on the combined figure.'},
  {q:'Both cities measured pedestrian injuries per 100,000 residents over the same three years using the same national reporting standard.',
   a:'The comparison is fair', w:'Same denominator, same window, same definition. This is the shape you are checking every other item against.'}
];

const V5_OPTS = ['Confounding variable','Reverse causation','Regression to the mean','The causal claim is supported'];
const V5_DRILL = [
  {q:'Children who take music lessons score higher on standardised tests. Music training builds the brain.',
   a:'Confounding variable', w:'Household income and parental involvement drive both the lessons and the scores. Name the variable and say which way it pushes — do not just say confound.'},
  {q:'Employees who use the company gym take fewer sick days, so the gym is keeping staff healthy.',
   a:'Reverse causation', w:'Being well enough to go is a precondition for going. Illness suppresses gym use at least as strongly as gym use suppresses illness.'},
  {q:'Pilots praised after an excellent landing did worse next time; pilots reprimanded after a bad one did better. Criticism works and praise backfires.',
   a:'Regression to the mean', w:'Both groups were selected for an extreme result, and extremes are followed by ordinary ones whatever you say afterwards.'},
  {q:'Forty thousand volunteers were randomly assigned to the vaccine or a placebo; the treatment arm had 8 cases, the placebo arm 162.',
   a:'The causal claim is supported', w:'Randomisation closes off confounding and reverse causation by design. Nothing left to explain the gap.'},
  {q:'The clinic enrolled the patients with the very worst symptom scores, treated them, and reports large average improvement.',
   a:'Regression to the mean', w:'Selecting on the worst scores guarantees improvement on re-measurement. Without an equally extreme untreated group the treatment cannot be credited.'}
];

const STATS_ERR = [
  {q:'Nine out of ten dentists recommend it.',
   w:'There is nothing here to run the key on. Ten of whom, asked what, against which alternative? The claim survives only by never engaging a single question.'},
  {q:'Correlation does not imply causation, so the study proves nothing.',
   w:'The mirror-image error. Confounding and reverse causation are questions to ask (K1), not a verdict to deliver. Used this way the phrase dismisses all observational evidence at zero cost.'},
  {q:'Crime in the neighbourhood is up 200%.',
   w:'Three incidents instead of one. A percentage with a tiny denominator behind it is small-number volatility wearing a suit — ask for the counts.'},
  {q:'The average household has 1.9 children, so most households have about two.',
   w:'An average is not a typical case. Many households have none and some have four; the mean never engages the distribution.'},
  {q:'It is a peer-reviewed study in a top journal, so the finding is settled.',
   w:'Provenance is not design. Peer review does not fix a selection effect, an unmeasured confound, or a proxy that stopped tracking the thing.'},
  {q:'This diet worked for me and everyone I know.',
   w:'A self-selected handful with no untreated comparison — A1 and C1 both fail. Note also that the people it did not work for stopped talking about it.'},
  {q:'Ninety-seven percent of the people we surveyed at the rally support the movement.',
   w:'The sampling frame is the conclusion. Where you stood to ask decided the answer before anyone spoke.'}
];

const STATS_SPECIMENS = [
  {q:'We pulled every mutual fund available on the platform today and measured what each returned over the last fifteen years. The average came to 9.4% a year, comfortably ahead of the index. Active management earns its fee after all.',
   sub:{S1:['sampling'],A1:['endpoint'],A2:['failures']},outcome:'survivor',
   why:'The population was defined at the end of the window, not the start. Funds that performed badly enough to close over those fifteen years are not on the platform today, so the worst performers were removed from the average by the act of assembling it.',
   fals:'If the dataset were fixed at the funds that existed in year one — dead ones included at their final value — and the average still beat the index, the claim would stand.'},

  {q:'Two thousand readers responded to our website questionnaire on the proposed low-traffic zone. Seventy-eight percent are opposed. The council should take note that the public has spoken.',
   sub:{S1:['sampling'],A1:['optedin'],A2:['motivated']},outcome:'selfselect',
   why:'Nobody drew this sample; it assembled itself out of people who read that outlet, saw the item, and felt strongly enough to answer. Opposition is exactly the motivation that converts a reader into a respondent.',
   fals:'A randomly drawn sample of residents returning the same 78% would make the finding real. Size is not the fix — two thousand self-selected responses do not beat four hundred randomly drawn ones.'},

  {q:'The wellbeing survey was sent to all 4,000 employees. Six hundred completed it, and 88% of those agree that they feel supported by their manager. Support scores remain strong across the organisation.',
   sub:{S1:['sampling'],A1:['answered'],A2:['silent']},outcome:'nonresp',
   why:'Everyone was invited, so the frame is right; the problem is who came back. Eighty-five percent are silent, and the people least supported by their manager are the least likely to fill in their manager’s survey.',
   fals:'If a random subsample of the non-responders were chased down and returned similar answers, the headline would hold. That check is cheap and almost never done.'},

  {q:'Of the twenty districts in the state, the five with the lowest rates of kidney cancer are all small, rural and sparsely populated. Something about rural living is protective.',
   sub:{S1:['sampling'],A1:['frame'],A2:['unstable']},outcome:'smalln',
   why:'Every district is counted, so nothing is missing — the fault is that a rate computed over a few thousand people moves enormously on one or two cases. Small populations produce the extremes at both ends.',
   fals:'Look at the five *highest* districts. If they are large and urban, rurality may be doing something. If they are also small and rural, the pattern is arithmetic, not epidemiology.'},

  {q:'The quarterly labour force survey draws a fresh random sample of 40,000 households from the national address register, follows up non-responders by telephone and in person over three weeks, and reports unemployment at 4.2%, with a margin of error of ±0.3 percentage points.',
   sub:{S1:['sampling'],A1:['frame'],A2:['nothing_a']},outcome:'samp_ok',
   why:'Random draw from a full frame, non-response actively pursued rather than ignored, and the uncertainty published alongside the estimate. There is no sampling fault to find here.',
   fals:'If response rates had quietly collapsed and the follow-up been dropped, this becomes non-response bias — the same sentence, minus the three weeks of chasing.'},

  {q:'Two years ago the trust made the four-hour emergency target the central performance measure for the department. Ninety-five percent of patients are now seen inside four hours, against 68% before. Emergency care in this trust has been transformed.',
   sub:{S1:['measure'],M1:['standin'],M2:['yes_game']},outcome:'proxy',
   why:'The four-hour figure was a stand-in for timely care, and it stopped being a measurement the moment it became the thing managed. Admission decisions cluster just inside the boundary, and waiting relocates to the ambulance bay and the corridor, where the clock has not started.',
   fals:'If time-to-treatment measured from the 999 call, and outcomes at 30 days, had improved alongside it, the target would be tracking the thing it stands for.'},

  {q:'Recorded violent crime in the county has risen 40% since 2016. In 2017 the constabulary adopted the national recording standard, under which each victim named in an incident is recorded as a separate offence.',
   sub:{S1:['measure'],M1:['newrule'],M2:['yes_rule']},outcome:'defshift',
   why:'The word "offence" survived the change; its definition did not. A single incident with three victims used to enter the series once and now enters it three times, which produces a rise with no change in what happened on the street.',
   fals:'Recompute the whole series under one standard, or check a measure the change did not touch — homicides, or emergency admissions for assault. If those rose 40% too, the increase is real.'},

  {q:'Following the introduction of a national ultrasound screening programme, diagnoses of thyroid cancer rose more than fifteen-fold in a decade. Deaths from thyroid cancer over the same decade were flat.',
   sub:{S1:['measure'],M1:['found'],M2:['yes_effort']},outcome:'detection',
   why:'What rose is cases found, and finding depends on looking. The flat mortality is the decisive tell: a genuine fifteen-fold rise in disease would move the death rate, whereas fifteen times more scanning of small indolent tumours would not.',
   fals:'A matching rise in deaths, or a rise in advanced-stage presentations, would mean incidence really moved and screening merely revealed it.'},

  {q:'The reservoir gauge is read from the same marked post, at the same hour, by the same protocol it has used since 1994. The level has fallen 3.4 metres since March, against a March-to-September average fall of 1.1 metres over the previous twenty years.',
   sub:{S1:['measure'],M1:['thing'],M2:['no_m']},outcome:'meas_ok',
   why:'This is direct measurement of the quantity itself, by an unchanged instrument on an unchanged protocol, and it is set against a like-for-like seasonal baseline. There is nothing standing in for anything, no rule was rewritten, and no amount of looking harder moves a water line.',
   fals:'A replaced or relocated gauge, or a change in the reading hour, would reintroduce a definition change — the series would break at exactly the point the equipment did.'},

  {q:'The screening test correctly flags 99% of people who have the condition and correctly clears 99% of those who do not. Your result came back positive. The clinic tells you there is therefore a 99% chance you have it. The condition affects roughly one person in ten thousand.',
   sub:{S1:['compare'],C1:['norate'],C2:['prior']},outcome:'baserate',
   why:'Accuracy is being read as if it were the answer to a different question. In ten thousand people, one has the condition and about a hundred healthy people test positive anyway — so a positive result carries a probability closer to 1% than 99%.',
   fals:'Raise the prevalence and the reading changes: in a group where one in five has the condition, a positive result really does mean it is very likely.'},

  {q:'A large cohort study reports that eating two rashers of processed meat a day is associated with an 18% higher risk of bowel cancer. Coverage advises readers to give up bacon.',
   sub:{S1:['compare'],C1:['changeonly'],C2:['absolute']},outcome:'relrisk',
   why:'Eighteen percent is a change expressed only as a proportion of itself. Lifetime risk of bowel cancer runs around 6%, so the increase moves it to roughly 7% — one extra case per hundred or so people eating that way for life.',
   fals:'If the baseline were 40% rather than 6%, the same 18% would be a large and genuinely alarming absolute increase. The relative figure is not wrong, it is unreadable alone.'},

  {q:'Nine in ten of the patients who completed our twelve-week programme report that their lower back pain has substantially improved. The programme works.',
   sub:{S1:['compare'],C1:['nothing_c'],C2:['control']},outcome:'nocontrol',
   why:'There is one number and nothing behind it. Most episodes of acute lower back pain improve substantially within twelve weeks with no treatment at all, so this figure is consistent with the programme doing nothing.',
   fals:'A comparison arm of similar patients on a waiting list, with a materially lower improvement rate, would make this evidence rather than an anecdote at scale.'},

  {q:'Overall surgical mortality is 3.1% at Hospital A and 1.9% at Hospital B. Patients choosing between them should choose B. Hospital A is the region’s designated trauma and transplant referral centre; Hospital B is a district general.',
   sub:{S1:['compare'],C1:['lumped'],C2:['split']},outcome:'simpson',
   why:'The two totals are computed over different case mixes, and the passage says so. Once you split by severity, A can have the lower mortality in every single category and still lose on the combined number, because it operates on far more of the hardest cases.',
   fals:'If A were worse than B within each severity band, the aggregate would be telling the truth and the referral role would be an excuse rather than an explanation.'},

  {q:'Both cities recorded pedestrian injuries per 100,000 residents over the same three calendar years, under the same national reporting standard, and the northern city’s rate is 30% higher.',
   sub:{S1:['compare'],C1:['likewise'],C2:['nothing_x']},outcome:'comp_ok',
   why:'Same definition, same window, same denominator basis. The comparison is doing what a comparison is supposed to do — whatever explains the gap is a separate question from whether the contrast is legitimate.',
   fals:'If one city counted only injuries attended by ambulance and the other every reported collision, this collapses into a definition change wearing the costume of a fair comparison.'},

  {q:'Children who take music lessons outperform their peers on standardised tests by a wide margin, and the gap grows with years of tuition. Music training builds the cognitive skills that schooling rewards.',
   sub:{S1:['cause'],K1:['third'],K2:['adjust']},outcome:'confound',
   why:'Household income and parental involvement independently produce both the lessons and the test scores, and years of tuition tracks years of a household able to afford them. The dose-response pattern is exactly what the confound predicts too.',
   fals:'Random assignment of free lessons, or a comparison within families of similar income and parental engagement, showing the same gap.'},

  {q:'Employees who use the company gym take 30% fewer sick days than those who never badge in. The gym is keeping our workforce healthy and should be expanded.',
   sub:{S1:['cause'],K1:['backwards'],K2:['timing']},outcome:'reverse',
   why:'Being well enough to train is a precondition for badging in. Illness suppresses gym attendance directly and immediately, which produces this correlation with no health benefit from the gym at all.',
   fals:'Look at the sequence: if gym use in one quarter predicts fewer sick days in the *next* one, among people healthy at baseline, the arrow starts pointing the way the claim says.'},

  {q:'The clinic enrolled the hundred patients with the worst symptom scores on the register, delivered the new protocol for six weeks, and re-scored them. Average symptoms improved by nearly a third. The protocol is effective.',
   sub:{S1:['cause'],K1:['extreme'],K2:['untreated']},outcome:'regression',
   why:'The cohort was selected for being at its worst, and a score at its worst is part real severity and part bad luck on the day. Re-measure and the luck component averages out, producing improvement that would appear if the six weeks had been spent doing nothing.',
   fals:'An equally extreme group left untreated and re-scored at six weeks. If they improve by a quarter and the treated group by a third, the protocol is worth roughly the difference, not the headline.'},

  {q:'Forty thousand volunteers were randomly assigned to the vaccine or a saline placebo, with allocation concealed from participants and assessors. Over the follow-up period there were 8 confirmed cases in the vaccine arm and 162 in the placebo arm.',
   sub:{S1:['cause'],K1:['none_k'],K2:['already']},outcome:'cause_ok',
   why:'Randomisation is what closes off the alternatives: confounders are distributed by chance across both arms, and reverse causation cannot operate on an assignment made before any outcome existed. Both arms are reported in counts.',
   fals:'Broken blinding, differential dropout between arms, or outcomes ascertained more keenly in one arm would reopen every question randomisation was meant to close.'}
];

const STATS_COURSE = [
{ tag:'One', title:'The pipeline',
  cards:[
  {h:'Audit the pipeline, not the number',
   b:`<p class="lead">Almost nobody lies with statistics by inventing a figure. The number is usually correct. What goes wrong happened before the number existed — in who was counted, in what was counted, in what it was set against, and in what it was said to prove.</p>
      <p>So arguing with the figure is the wrong move, and so is the reflex of distrusting anything numerical. Both leave you unable to tell a good claim from a bad one, which is the only skill worth having here.</p>
      <p>Every statistical claim is the output of a pipeline with four stages. This course walks the pipeline in order and asks one question at each stage.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which stage</i> broke, you have registered a smell, not diagnosed a claim.</div>`},
  {h:'The four stages',
   b:`<table class="k">
      <tr><th>S1</th><td><b>Who got counted?</b><br>which cases made it into the data at all<span class="tell">Faults here cannot be repaired downstream.</span></td></tr>
      <tr><th>S2</th><td><b>What does the number count?</b><br>the definition, the instrument, the effort spent looking<span class="tell">Ask what would have to change in the world for this number to move.</span></td></tr>
      <tr><th>S3</th><td><b>What is it set against?</b><br>the contrast, the denominator, the base rate<span class="tell">A number alone carries no information.</span></td></tr>
      <tr><th>S4</th><td><b>What does it say caused what?</b><br>the leap from a pattern to an explanation<span class="tell">The famous stage, and the least often decisive.</span></td></tr>
      </table>
      <p>Run them in that order. They are not a menu.</p>`},
  {h:'Stop at the first break',
   b:`<p>The stages are sequential, and a fault upstream contaminates everything after it. If the sample was assembled out of survivors, there is no point debating whether the correlation is causal — you are reasoning about a population that does not exist.</p>
      <p>So the diagnostic question is not <i>what is wrong with this claim</i>, which usually has several answers. It is <b>where does it first break</b>, which has one.</p>
      <div class="warn"><strong>This is the discipline the key enforces.</strong> A claim can be guilty at three stages at once. Name the earliest, because that is the one that decides whether anything downstream is worth examining.</div>`},
  {h:'"No fault" is a real answer',
   b:`<p>Every stage in this course has a sound option, and roughly one specimen in five is clean. This is deliberate.</p>
      <p>A key that only ever outputs faults is not a diagnostic instrument, it is a mood. The person who can say <i>this one is fine, and here is why</i> is the one whose objections are worth listening to when they do object.</p>
      <p>Learn the shape of a sound claim — random frame with non-response chased, a stable definition, a like-for-like contrast, randomised assignment — so that its absence is something you notice rather than something you argue yourself into.</p>`}
  ],
  drill:{kind:'pick', key:'v1'} },

{ tag:'Two', title:'Who got counted',
  cards:[
  {h:'The move: picture who is missing',
   b:`<p class="lead">Sampling faults share one shape. The data was assembled by a process that had opinions about which cases to include, and the excluded cases are the ones that would change the answer.</p>
      <p>The move is always the same: describe the cases that are not in front of you, then ask what they would do to the conclusion. If you cannot answer, you do not yet know what the number means.</p>`},
  {h:'The four sampling faults',
   b:`<table class="k">
      <tr><th>A</th><td><b>Survivorship</b> — the population was defined at the end of the window<span class="tell">The failures were removed by the act of assembling the data.</span></td></tr>
      <tr><th>B</th><td><b>Self-selection</b> — subjects put themselves in<span class="tell">Whatever motivated them to join also predicts their answer.</span></td></tr>
      <tr><th>C</th><td><b>Non-response</b> — the frame was right, the returns were not<span class="tell">The silent differ from the responders in the direction of the question.</span></td></tr>
      <tr><th>D</th><td><b>Small-number volatility</b> — nobody is missing, the denominator is tiny<span class="tell">Extremes at both ends of the table are the same phenomenon.</span></td></tr>
      </table>
      <p>The first three are about who is absent. The fourth is about how few are present — no bias at all, just arithmetic.</p>`},
  {h:'Small numbers deserve their own reflex',
   b:`<p>Give a rate a denominator of a few thousand and it will swing violently on one or two cases. This produces league tables in which the very best and the very worst entries are both small, and it produces "clusters" that are the expected clumping of random points.</p>
      <div class="note"><strong>The check takes five seconds:</strong> look at the other end of the same table. If small units dominate the top <i>and</i> the bottom, size is producing the ranking, not quality.</div>
      <p>Percentages hide this completely. "Up 200%" is three cases where there was one.</p>`},
  {h:'Size does not fix selection',
   b:`<p>The most persistent error in this stage is believing that a big enough sample repairs a bad one. It does not, and it never has.</p>
      <p>Two thousand self-selected website respondents are worse than four hundred randomly drawn ones, because increasing n reduces random error while leaving the systematic error exactly where it was. A large biased sample is a precise estimate of the wrong quantity.</p>
      <div class="warn"><strong>Watch for size cited as a defence.</strong> "We surveyed forty thousand people" answers a question nobody asked if all forty thousand opted in.</div>`}
  ],
  drill:{kind:'pick', key:'v2'} },

{ tag:'Three', title:'What the number counts',
  cards:[
  {h:'The counterfactual test',
   b:`<p class="lead">At this stage the sample is fine and the arithmetic is fine. The question is whether the number is still attached to the thing it is supposed to represent.</p>
      <p>One question does most of the work here: <b>if the underlying reality had not moved at all, could this number still have moved?</b> Three answers say yes, and each names a different fault.</p>`},
  {h:'Three ways a number detaches',
   b:`<table class="k">
      <tr><th>A</th><td><b>Proxy failure</b> — the measure became the target<span class="tell">Goodhart: a measure that becomes a target stops being a good measure.</span></td></tr>
      <tr><th>B</th><td><b>Definition changed</b> — same word, new counting rule<span class="tell">The ruler was rewritten mid-series.</span></td></tr>
      <tr><th>C</th><td><b>Detection effect</b> — more looking, not more happening<span class="tell">Screening, reporting drives, new awareness campaigns.</span></td></tr>
      </table>
      <p>All three produce a moving series over a still world. They are told apart by what moved: the incentive, the rule, or the effort.</p>`},
  {h:'Proxies are not lies, they are load-bearing approximations',
   b:`<p>Waiting times stand in for good emergency care. Test scores stand in for learning. Tickets closed stand in for support quality. Every one of these is a reasonable proxy right up until someone is paid on it.</p>
      <p>Then effort flows to the number rather than the thing, the two come apart, and the series improves while the world does not. The improvement is real — as a measurement of the measurement.</p>
      <div class="note"><strong>The tell is a target announced.</strong> Whenever a passage says a metric became the central measure, ask what happened to the parts of the job the metric does not see.</div>`},
  {h:'Detection: the mortality check',
   b:`<p>Detection effects are the hardest of the three to see, because a genuine rise and a rise in looking produce the same headline.</p>
      <p>The check is to find a downstream measure that harder looking cannot inflate. For disease, that is deaths and advanced-stage presentations. If diagnoses rise fifteen-fold and deaths are flat, the extra fourteen-fold was always there, unfound and mostly harmless.</p>
      <p>The same trick generalises. For crime, ask about homicides or hospital admissions for assault — the offences whose recording barely depends on whether anyone was asked to look.</p>`}
  ],
  drill:{kind:'pick', key:'v3'} },

{ tag:'Four', title:'What it is set against',
  cards:[
  {h:'A number alone carries no information',
   b:`<p class="lead">Ninety percent improved. Risk up 18%. Mortality 3.1%. None of these means anything until you know the quantity it is being held against — and the most effective way to mislead with a true number is to publish it without its comparison.</p>
      <p>Four faults live here, and each is repaired by supplying one specific missing quantity.</p>`},
  {h:'What each one is missing',
   b:`<table class="k">
      <tr><th>A</th><td><b>No comparison group</b> → supply an untreated group<span class="tell">Most conditions improve on their own; that rate is the floor.</span></td></tr>
      <tr><th>B</th><td><b>Relative risk alone</b> → supply the absolute numbers<span class="tell">18% of a 6% baseline is one extra case per hundred.</span></td></tr>
      <tr><th>C</th><td><b>Base-rate neglect</b> → supply the prevalence<span class="tell">Test accuracy is not the probability you are ill.</span></td></tr>
      <tr><th>D</th><td><b>Simpson’s paradox</b> → split the total back into subgroups<span class="tell">The aggregate can reverse every subgroup at once.</span></td></tr>
      </table>`},
  {h:'Base rates: the hundred-people move',
   b:`<p>Conditional probability defeats intuition reliably enough that you should stop trying to reason about it in percentages and just count bodies.</p>
      <p>Ten thousand people. One in ten thousand has the condition, so one person has it, and the test finds them. The test also wrongly flags 1% of the 9,999 who do not — about a hundred people. So a hundred and one positives, of whom one is real.</p>
      <div class="note"><strong>A 99% accurate test yielded a positive result that is roughly 99% likely to be wrong.</strong> Nothing about the test is faulty. The prevalence was doing the work all along.</div>`},
  {h:'Simpson’s paradox is not an exotic case',
   b:`<p>It appears wherever a total is computed across subgroups of different sizes and different underlying rates — hospital mortality, university admissions, batting averages, treatment success by clinic.</p>
      <p>The referral hospital takes the hardest cases. Its combined mortality is worse than the district general even when it is better in every category. Both numbers are correct; only one answers the question a patient is asking.</p>
      <p>Whenever a comparison rests on two totals, ask what the totals are averaging over — and whether the mix differs between them.</p>`}
  ],
  drill:{kind:'pick', key:'v4'} },

{ tag:'Five', title:'What caused what',
  cards:[
  {h:'Three alternatives, not one slogan',
   b:`<p class="lead">"Correlation does not imply causation" is where most people stop, and stopping there is nearly as bad as not knowing it. It names no alternative, so it cannot be checked, and it dismisses good and bad studies at exactly the same cost.</p>
      <p>There are three specific alternatives to a causal reading. Name the one you mean, and say which way it would push.</p>`},
  {h:'The three alternatives',
   b:`<table class="k">
      <tr><th>A</th><td><b>Confounding</b> — a third thing drives both<span class="tell">Name the variable. "Income" is an argument; "confound" is not.</span></td></tr>
      <tr><th>B</th><td><b>Reverse causation</b> — the effect is producing the cause<span class="tell">Settled by sequence: which one moved first?</span></td></tr>
      <tr><th>C</th><td><b>Regression to the mean</b> — the group was selected for being extreme<span class="tell">Needs no mechanism and no third variable. Pure measurement.</span></td></tr>
      </table>`},
  {h:'Regression to the mean is the one you will miss',
   b:`<p>Any measurement is part real signal and part noise on the day. Select a group for having the most extreme scores and you have selected, among other things, for the ones whose noise ran hardest in one direction. Measure again and that component averages out.</p>
      <p>The group improves. Nothing caused it. Whatever you did in between gets the credit.</p>
      <div class="warn"><strong>This is why "we treated the worst cases and they improved" is not evidence.</strong> It is also why praise appears to backfire and criticism appears to work: both are administered after extreme performances, and both are followed by ordinary ones.</div>`},
  {h:'What randomisation actually buys',
   b:`<p>Random assignment closes off confounding and reverse causation by construction — unmeasured third variables land in both arms by chance, and an assignment made before any outcome exists cannot have been caused by one.</p>
      <p>That is why the sound specimens in this course are almost all randomised. It is also why the check does not end there: broken blinding, differential dropout, or outcomes ascertained more keenly in one arm reopen the questions randomisation was meant to close.</p>
      <div class="note"><strong>Observational evidence is not worthless.</strong> A named confound that has been measured and adjusted for, a dose-response relationship, and a plausible mechanism together can carry a causal claim. Demanding a trial for everything is a way of never updating.</div>`}
  ],
  drill:{kind:'pick', key:'v5'} },

{ tag:'Six', title:'Claims that engage nothing',
  cards:[
  {h:'The residual category',
   b:`<p class="lead">Some claims cannot be run through the key at all. There is no sample to describe, no definition to check, no contrast to supply — just a number-shaped object doing rhetorical work.</p>
      <p>These are not hard cases. They are the most common ones, and the failure mode is treating them as though they deserve the full procedure.</p>`},
  {h:'Two symmetrical errors',
   b:`<p>The first is the credulous one: a figure is quoted, it sounds specific, and specificity is mistaken for evidence. Nine out of ten dentists.</p>
      <p>The second is the corrosive one: <i>correlation is not causation</i>, <i>you can prove anything with statistics</i>, <i>that study was funded by someone</i> — deployed to dismiss without engaging a single stage of the pipeline.</p>
      <div class="warn"><strong>Both errors have the same structure.</strong> Neither asks a question that could come back with an answer. The drill below is practice at saying exactly which question a claim refuses to engage.</div>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Now the stages come without labels. Read the claim, decide where it first breaks, work the two questions under that stage, and name the fault.</p>
      <p>The readout crosses off what your answers have ruled out. Your name and your route are scored separately, and a right name from the wrong route counts as a miss — because a fault you cannot locate is one you will not find again in an unfamiliar claim.</p>
      <div class="note">Roughly one specimen in five is sound. Naming it sound is a determination, not a pass.</div>`}
  ],
  drill:{kind:'det'} }
];

const STATISTICS = {
  id:'stats', name:'Statistical Claims', rev:1,
  blurb:'Walk a claim back down the pipeline — who was counted, what was counted, what it is set against — and name the earliest stage that breaks.',
  intro:'Walk each claim down the pipeline — who was counted, what was counted, what it is set against, what it is said to prove — and name the earliest stage that breaks. A correct label reached by the wrong route is scored as a miss.',
  outcomes: STATS_OUTCOMES,
  determination: { gateCode:'S1', steps:[STATS_GATE], stepsByGate:STATS_STEPS_BY_GATE },
  determinationIntro:`<p>You are walking each claim down a four-stage pipeline. Find the earliest stage that breaks, work the two questions under it, and name the fault last.</p>
      <ol>
        <li>Read the claim.</li>
        <li><b>Step 1</b> — where does it <i>first</i> break: who got counted, what the number counts, what it is set against, or what it says caused what? Several stages may be faulty; name the earliest, because it decides whether anything downstream is worth examining.</li>
        <li><b>Steps 2–3</b> — the two questions specific to that stage. They unlock in order and change with your Step 1 answer.</li>
        <li><b>Step 4</b> — now name it, and record your determination.</li>
      </ol>
      <p>The strip between the claim and step 1 is a readout, not a control. It crosses off faults your answers have ruled out. Nothing there is tappable.</p>
      <p>Roughly one specimen in five is sound, and every stage offers a no-fault option. Naming a claim sound is a determination like any other.</p>
      <p>Your name and your route are scored separately. Right name from the wrong steps counts as a miss.</p>`,
  specimens: STATS_SPECIMENS,
  quickDrills: [
    {key:'v1', title:'Which stage', prompt:'Where does this claim first break?', items:V1_DRILL, opts:V1_OPTS},
    {key:'v2', title:'Who got counted', prompt:'Which sampling fault — if any?', items:V2_DRILL, opts:V2_OPTS},
    {key:'v3', title:'What it counts', prompt:'What happened to the measure?', items:V3_DRILL, opts:V3_OPTS},
    {key:'v4', title:'The comparison', prompt:'What is missing from the contrast?', items:V4_DRILL, opts:V4_OPTS},
    {key:'v5', title:'Cause or pattern', prompt:'Which alternative to the causal reading?', items:V5_DRILL, opts:V5_OPTS}
  ],
  errDrill: STATS_ERR,
  course: STATS_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'v1', label:'Which stage'}, {key:'v2', label:'Who got counted'}, {key:'v3', label:'What it counts'},
    {key:'v4', label:'The comparison'}, {key:'v5', label:'Cause or pattern'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Naming a fault is not refuting a claim.</b> "Confound" on its own is a noise. Name the variable, say which direction it would push, and estimate whether it is big enough to account for the effect — otherwise you have raised a possibility, not an objection.</li>
    <li><b>Real claims often break at several stages at once.</b> "Where does it first break" is a teaching convention that forces a single defensible answer; it is not a law about how claims fail.</li>
    <li><b>Professional statistics has tools for all of these</b> — weighting, adjustment, instrumental variables, sensitivity analysis, inverse-probability weighting for non-response. A confound that has been measured and handled is in a different category from one that was never mentioned.</li>
    <li><b>Absence of a fault you can name is not proof a claim is true.</b> The key finds specific breakages. A claim can pass all four stages and still be wrong, underpowered, or a fluke.</li>
    <li><b>This key is about validity, not magnitude.</b> It says nothing about effect sizes, confidence intervals, or whether a real effect is large enough to act on — which is usually the question that actually matters.</li>
    <li><b>Faults of the literature sit outside the pipeline.</b> Publication bias, p-hacking, multiple comparisons and the garden of forking paths are properties of how a body of research was produced, not of the sentence in front of you. A single well-built study drawn from a badly built literature will pass this key cleanly.</li>
    <li><b>These terms are also weapons.</b> "Cherry-picked," "biased sample," "correlation isn’t causation" are used to dismiss unwelcome findings at least as often as to examine them. Applying the key selectively to claims you dislike is the failure mode this course is most likely to produce.</li>
  </ul>`
};

FC.legacy('stats', STATISTICS);
