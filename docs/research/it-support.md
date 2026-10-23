# IT Support (help desk / desktop support): how skilled technicians troubleshoot and run tickets, and how to teach it (2026-10-22)

Step 2 of the build-subject skill for `it-support`. The question: how do skilled support technicians diagnose a fault and
handle a ticket; how is support work organised and decided; how do they talk to users; what are the CompTIA A+ exams that the
learner is likely to sit; and what does the learning research say about teaching diagnosis and large bodies of exam facts to
an adult career changer. Findings are numbered IT1 to IT29. Each gives the source, what was actually read, the strength, and the
passage it rests on. Quotes are short; where only an abstract, a catalogue record or a search excerpt was read, the finding says so.
Nothing here is carried over from another subject's notes.

Strength words: **strong** (several independent studies or official guidance from several bodies agreeing), **moderate** (one good
study, or one authoritative standard), **limited** (one small study, an abstract only, a secondary summary), **judgement call**
(no passage found that settles it).

## A. How skilled technicians actually troubleshoot

**IT1. The A+ exam does NOT test the six-step troubleshooting method any more; CompTIA keeps it as a recommended "competency
standard".** CompTIA, *A+ 220-1201 (Core 1) V15 Exam Objectives, Document Version 4.0* (2024), section "Troubleshooting
Methodology Knowledge". *Read:* the full official objectives PDF, text extracted, 2026-10-22 (assets via lecbyo.files.cmp.optimizely.com).
Passage: subject matter experts "deemed the troubleshooting methodology an effective best practice that new job incumbents should
be aware of and leverage", but "the decision was made to not include it in the exam"; it "does not constitute a formal objective or
part of the A+ certification exam"; "Training institutions that prepare individuals with very little technical knowledge and
experience are encouraged to leverage this methodology, especially when such individuals might be applying for their first IT job."
The listed steps: Identify the problem. Establish a theory of probable cause (question the obvious), with "Research knowledge
base/internet, if applicable". Test the theory to determine the cause. Establish a plan of action to resolve the problem and
implement the solution. Verify full system functionality and, if applicable, implement preventive measures. Document findings/lessons
learned, actions, and outcomes. *Strength:* strong (the certifier's own document). *Use:* the method is taught as the backbone
because CompTIA itself tells first-job learners to use it, but a course must not promise it as exam content. The older 1101 series
did test it (IT2), so many study books still present it as tested. Checked: the Core 2 objectives (220-1202 V15, Document Version
3.0) contain no methodology section; searched for "methodology", "theory", "plan of action".

**IT2. CompTIA's own change table confirms the method used to be an exam objective (1101 objective 5.1) and is "N/A" in 1201.**
CompTIA, *CompTIA A+ Core 1* exam-objectives comparison sheet, 1101 vs 1201 (Oct 2024, "11570-Oct2024"). *Read:* the full 7-page
sheet, text extracted, 2026-10-22. It lists 1101 "5.1 - Given a scenario, apply the best practice methodology to resolve problems"
against "1201 Objective N/A", and prints the earlier wording: "Always consider corporate policies, procedures, and impacts before
implementing changes"; step 1 includes "Gather information from the user, identify user changes, and, if applicable, perform backups
before making changes" and "Inquire regarding environmental or infrastructure changes"; step 2 is "(question the obvious)"; step 3:
"If the theory is not confirmed, re-establish a new theory or escalate"; step 4: "Refer to the vendor's instructions for guidance".
*Strength:* strong. *Use:* the richer wording of step 1 (ask what the user changed, back up before touching, ask what changed in the
environment) is the best official statement of what a tech asks first; use it as the opening move of the way of thinking (IT-way below).
The "escalate" branch of step 3 links the method to tiers (IT13).

**IT3. Cisco Press: a quick fix from pattern memory ("shoot-from-the-hip") is what both novices and experts do, works for
experts, and the skill is knowing when to stop and go structured.** Amir Ranjbar, *Troubleshooting and Maintaining Cisco IP Networks
(TSHOOT) Foundation Learning Guide* (Cisco Press, 2014/2015), Chapter 1 "Troubleshooting Methods", sections "Troubleshooting
Principles" and "Structured Troubleshooting Approaches". *Read:* the full chapter 1 from the publisher's sample PDF
(ptgmedia.pearsoncmg.com/images/9781587204555/samplepages/9781587204555.pdf), text extracted, 2026-10-22. Passages: shoot-from-the-hip
means "after a very short period of gathering information ... the troubleshooter quickly makes a change to see if it solves the
problem"; "it is not [random]" because it rests on "prior and usually vast knowledge of common symptoms and their corresponding
causes"; it "usually does not yield the same results for the inexperienced troubleshooter"; downside: "if it does not work, you have
not come any closer to a possible solution"; "The key factor ... is knowing when to stop and switch to a more methodical (structured)
approach." Structured work "makes it easier to pick up where you left off or hand the job over to someone else". Also: "The key to
all structured troubleshooting methods is systematic elimination of hypothetical causes and narrowing down on the possible causes."
*Strength:* moderate (one authoritative vendor text; consistent with IT5, IT8). *Use:* teaches the real expert pattern: try the
very-likely cheap fix first, with a time limit, then stop and go structured; and why notes matter (handoff).

**IT4. Cisco's named approaches are search strategies: top-down, bottom-up, divide-and-conquer, follow-the-path, compare
(spot-the-differences), swap (move-the-problem).** Same source and chapter as IT3 (pp. 4-12 of the chapter). Passages:
top-down "find the highest OSI layer that is still working" and rule out everything beneath it; its drawback is that you "need to have
access to the client's application layer software". Bottom-up "is very effective" where problems are hardware related but is
"time-consuming" in large networks; "The best bottom-up approach is to first reduce the scope of the problem using a different strategy".
Divide-and-conquer starts "in the middle of the OSI model's stack (usually the network layer)" with a ping, then goes up or down; "possibly
the most popular". Follow-the-path "usually complements one of the other" methods and removes devices not on the path. Compare-configurations:
good for the "less-experienced", can fix a fault "without clearly revealing the root cause"; works best "when you have an up-to-date and
accessible set of baseline configurations". Swap-components "also called move-the-problem": swap and watch "whether the problem stays in place,
moves with the component, or disappears entirely"; it "assumes that the problem is with a single component". The chapter ends with one
fault worked six ways. *Strength:* moderate. *Use:* for a desktop tech the portable ones are: half-split by a cheap test (can it reach the
network at all? ping a known address), swap a known-good (cable, port, device, user profile, account), compare with a working machine/user, and
trace the path from the user's machine out. Note the layer model is network-specific; a desktop version of "layers" is device -> OS -> app -> account/data -> network.
Third-party CCNA sites (flackbox.com, study-ccna.com) list the same names; they were read as snippets only and are not relied on.

**IT5. Teaching a general strategy plus a functional breakdown of the system doubled the number of faults solved, in less training
time (the best study of teaching troubleshooting to novices).** Schaafstal, Schraagen & van Berlo (2000), "Cognitive task analysis and
innovation of training: The case of structured troubleshooting", *Human Factors* 42(1), 75-86. *Read:* the abstract only (University of
Twente repository and Crossref record, verbatim, 2026-10-22); the full text is not open (TNO says it is available by request). Abstract:
a cognitive task analysis of two observational studies of real troubleshooting led to "structured troubleshooting", "which combines a
domain-independent strategy for troubleshooting with a context-dependent, multiple-level, functional decomposition of systems";
"technicians trained in structured troubleshooting solve twice as many malfunctions, in less time, than those trained in the traditional
way"; it "can be taught in less time"; and "technicians learn to troubleshoot in an explicit and uniform way". A search-tool summary of
the full text (not verified against it) gives the steps as problem description, generating causes, testing, repair and evaluation, and
says novices lean on "topographic" search (walking the physical layout) where experienced technicians use functional representations
(what does this part do for the whole). *Strength:* moderate to strong for the finding (a field-trained evaluation in a real
training programme), limited for the details I could not read. *Use:* the design basis of the subject: teach one explicit strategy,
and teach each system (a PC boot, a network connection, a login) as a few levels of "what does this part do", so fault-finding becomes
narrowing down by function. Not found: the paper's exact step list from the full text.

**IT6. Jonassen & Hung: troubleshooting is a kind of problem solving whose expertise is system knowledge + procedures + strategic
knowledge + experience of earlier cases; their design has a model of the system, a practice simulator, and a library of past cases.**
Jonassen & Hung (2006), "Learning to Troubleshoot: A New Theory-Based Design Architecture", *Educational Psychology Review* 18, 77-114
(DOI 10.1007/s10648-006-9001-8). *Read:* bibliographic record via Crossref, plus the abstract as returned by a search tool; the
Springer full text was behind a login and **was not read**. Abstract-level content: earlier troubleshooting instruction focused on
theory or on procedures and so failed to build transferable skill; the proposed architecture combines experiential, domain and device
knowledge as a layered conceptual model of the system, a simulator where learners test hypotheses, and a case library using
case-based reasoning to give advice from past cases. *Strength:* limited here (abstract only; the paper itself is a theory-based design
argument). *Use:* supports (a) practice on many realistic cases with a chance to test ideas, and (b) a built-in "case file" of solved
tickets that the learner reads and reuses. Needs the full text to cite specific passages if the build wants them.

**IT7. The classic review of troubleshooting experiments: theory alone does not train troubleshooters; guiding the strategy and giving
system knowledge does; task knowledge beats aptitude.** Morris & Rouse (1985), "Review and evaluation of empirical research in
troubleshooting", *Human Factors* 27(5), 503-530. *Read:* only a secondary summary (instructionaldesign.org/?p=306), which lists the
review's five conclusions; the review itself was not reached. Summary passages: performance "degrades as the system increases in
complexity" (and under time pressure); "instruction in theoretical principles is not an effective way to train" good troubleshooters;
the most reliable way to get a strategy used is to "proceduralize the task"; performance improves with "guidance on how to apply
system knowledge"; "task-related knowledge appears to be more important than aptitude". *Strength:* limited to moderate (a major
review, read second-hand). *Use:* the learner needs the strategy written out and practised on specific systems, not lectures on
theory; the build should not open with long concept lessons that are not used straight away.

**IT8. In a network-troubleshooting study, skilled engineers narrowed the problem space by confirming connections between devices;
unskilled engineers searched devices at random.** Ogata, Takeuchi, Fukuda, Yamada, Ochi, Inoue & Ota (2020), "Characteristics of Skilled
and Unskilled System Engineers in Troubleshooting for Network Systems", *IEEE Access* 8, 80779-80791 (DOI 10.1109/ACCESS.2020.2990911).
*Read:* the abstract as returned by a search tool (the DOAJ page returned 403); the full paper was **not** read. Content: six skilled
and unskilled engineers worked on a virtual network of servers, routers and terminals; skilled engineers tended to "narrow down the
problem space" by checks of connection between devices, their checks overlapping each other, and the most skilled named the likely
faulty device early from the information given beforehand; unskilled engineers "did not narrow the problem space" and "randomly searched
for obstacle causes in selected network devices". *Strength:* limited (n = 6; abstract only). *Use:* the observable expert behaviour
is "cut the problem in two with a cheap test, then keep cutting", which is IT4's divide-and-conquer made concrete; the novice
behaviour (poke at whatever device is nearest) is the thing practice cases should catch.

**IT9. Experts can be wrong in a way novices are not: knowledge that makes them fast also makes them fixate.** Besnard &
Bastien-Toniazzo (1999), "Expert error in trouble-shooting: an exploratory study in electronics", *International Journal of
Human-Computer Studies* 50(5). *Read:* a search-tool excerpt and the Crossref record only (no abstract available through Crossref);
the paper was **not** read. Excerpt: the authors tested whether novices "may develop a more efficient diagnostic reasoning than experts",
fewer tests and fewer "fixation errors", and reported that novices did better on their task, which they attributed to experts being
"victims of their own knowledge format". A related 1980 dissertation excerpt (Mehle, Univ. of Oklahoma) says both experts and novices
had trouble generating complete hypothesis sets and were overconfident about their probabilities (excerpt only). *Strength:* limited.
*Use:* two habits taught explicitly: write down more than one candidate cause before testing the favourite, and when the favourite
test fails, drop it. This also answers "what do experts avoid": the safeguard is the written list, not being clever.

## B. How support work is organised and decided

**IT10. ITIL 4 separates the incident (restore service now) from the cause (problem management) and from the request (a fulfilment
of something asked for).** AXELOS, *ITIL 4 Practice Guide: Incident Management* (2020). *Read:* the full guide (view-only copy at
s3.amazonaws.com/thinkific/.../Incident-management.pdf), text extracted, 2026-10-22. Passages: purpose is "to minimize the negative
impact of incidents by restoring normal service operation as quickly as possible"; an incident is "An unplanned interruption to a
service or reduction in the quality of a service"; a workaround "reduces or eliminates the impact of an incident or problem for which
a full resolution is not yet available", but "can increase technical debt", and "The problem management practice can be used to reduce
the technical debt created by incident workarounds". The guide's table of related activities sends "Investigating causes of incidents"
to problem management, "Communicating with users" to the service desk practice, and "Management and fulfilment of service requests"
to service request management. *Strength:* moderate to strong (the standard's own guide). *Use:* three kinds of work at a desk, each
handled differently: broken now (incident: restore, document), cause behind repeated breaks (problem: hand on with evidence), and
asked-for (request: follow the fixed procedure). Not read: the AXELOS Service Request Management and Problem Management practice
guides (the syllabus link returned HTTP 412; Scribd copies are unofficial). The definition of a service request used in the course
is therefore a judgement call, see the last section.

**IT11. ITIL 4 incident flow: the service desk agent triages, registers and classifies; specialists diagnose; closure needs the user's
confirmation and may trigger a problem investigation.** Same guide as IT10, section 3 (value streams and processes). Passages: the "service
desk agent performs the initial triage of the user query, confirming that the query does indeed refer to an incident"; the agent
"performs incident registration" and "initial classification ... this helps to qualify incident impact, identify the team responsible",
and classification can "reveal a previously defined solution"; "If classification does not provide an understanding of a solution,
technical specialist teams perform incident diagnosis. This may involve escalation of the incident between the teams"; closure
procedures include "user confirmation of service restoration" and "problem investigation initiation". The guide also sorts handling
by complexity: simple and recurring incidents use "pre-defined resolution procedures" (incident models, "A repeatable approach to the
management of a particular type of incident"); complex ones go to a specialist group; very complex ones use "swarming". *Strength:*
moderate to strong. *Use:* the order of a ticket (triage, record, classify, try the known fix, diagnose, escalate with what you found,
confirm with the user, close) and the idea that a known pattern deserves a known procedure (ties to KCS, IT14).

**IT12. Priority comes from impact and urgency, but ITIL 4 warns that rating impact and urgency is not itself prioritising; it matters
when people are scarce.** (a) AXELOS Incident Management guide, section 2.4.2.1 "Incident prioritization": "Evaluating the impact and
urgency of an incident ... is not prioritization. However, this evaluation is useful for prioritization"; "Prioritization is needed
only when there is a resource conflict"; incidents "should await processing in a single backlog". (b) ServiceNow documentation, "Define
priority lookup rules" (servicenow.com/docs, *read* 2026-10-22; page says the matrix is sample data): "Impact is a measure of the effect of
an incident, problem, or change on business processes"; "Urgency is a measure of how long the resolution can be delayed"; sample
lookup is High/High = 1 Critical, High/Medium = 2 High, Medium/Medium = 3 Moderate, Low/Low = 4 Low. *Strength:* moderate (one
standard plus one widely used tool; the 3x3 matrix is a tool default, not an ITIL rule). *Use:* teach the two questions (how many people
and how important a process is affected; how long can this wait), the lookup as a way a company turns the answers into an order, and
that a company's own rules (SLA targets) decide what "high" means.

**IT13. Tiers (L1/L2/L3) are a cost-driven ladder that ITIL 4 now describes as historical and often replaced by swarming; the
practical skills are a time-box, a rule for when to escalate, and an escalation that carries everything found.** (a) AXELOS guide
section 4.2.1: "Historically, teams ... had a tiered or levelled structure in which competency, expertise, and specialization
increased with each level. It aimed to resolve most of the incidents at the lowest level possible to reduce costs"; such structures
"can restrain collaboration and information flow"; flatter structures such as swarming "replace tiered ones". (b) Mike Hanson, "Escalation
Overload", HDI Conference site (hdiconference.com/article/escalation-overload/, *read* 2026-10-22, undated): an escalation "often costs
two to three times more to resolve"; causes of needless escalation include knowledge gaps, policies forcing escalation of simple decisions
and "poor communication of defects"; checklists should say "escalate only if certain criteria apply". (c) Vendor blogs (31west.net, itbd.net,
search excerpts only, not relied on): incomplete triage forces Tier 2 to "start the troubleshooting process from scratch"; one example
time-boxes Tier 1 at 20 minutes. *Strength:* moderate (one standard, one practitioner article, vendor practice). *Use:* a new tech is
expected to solve what the knowledge base solves, escalate on stated criteria, and hand over a ticket that says what was tried (so Tier 2
does not repeat it). Not found: HDI's own Support Center Practices report text (the figures quoted by blogs were not verified).

**IT14. Knowledge-Centered Service (KCS): write the knowledge as a by-product of solving, search before and during the work, and fix
what you reuse.** HDI, *KCS Principles Certification Standard, Official Curriculum v6.0* (2017; thinkhdi.com/-/media/HDICorp/Files/Standards/
KCS-Standard-v-6.pdf), built on the Consortium for Service Innovation's KCS v6. *Read:* the full standard, text extracted, 2026-10-22; and
the Consortium's KCS v6 Practices Guide index pages (library.serviceinnovation.org), which gave only headings and one-line summaries.
Passages: the Solve Loop's four practices are Capture ("in the workflow"), Structure ("for reuse"), Reuse and Improve; "Seek to understand
before you seek to solve"; capture "the customer's context", the "Environment in which the issue is occurring", the "Resolution" and
the "Cause (optional)"; "Knowledge is the by-product of interaction"; sample structure "Issue/question, Environment, Resolution/answer,
Cause, Metadata"; "Use Complete Thoughts Not Complete Sentences"; "Search early and search often"; "reuse is review" (an article that
is reused is checked, then flagged or fixed). The standard also lists claimed outcomes (for example, first-contact resolution up 30-50%),
which are vendor/consortium claims and not independently tested here. *Strength:* moderate (an industry standard; outcome figures are
claims). *Use:* the ticket note and the article template are the same four fields: what the user saw (their words), the environment
(device, OS, network, account), what fixed it, what caused it. Searching the knowledge base is step 2 of the way of thinking.

**IT15. A+ Core 2 names the ticket and documentation content a new tech is expected to know.** CompTIA, *A+ 220-1202 V15 Exam
Objectives, v3.0*, objectives 4.1 and 4.2. *Read:* the full objectives PDF, text extracted, 2026-10-22. 4.1 "Given a scenario, implement best
practices associated with documentation and support systems information management": ticketing systems (user information, device
information, description of issues, categories, severity, escalation levels, "Clear, concise written communication": issue description,
progress notes, issue resolution); asset management (inventory lists, configuration management database (CMDB), asset tags and IDs,
warranty and licensing, assigned users); types of documents (incident reports, standard operating procedures, onboarding and off-boarding
checklists, service-level agreements, knowledge base/articles). 4.2 "Given a scenario, apply change management procedures": rollback plan,
backup plan, sandbox testing, request forms, standard vs normal change. *Strength:* strong (the exam's own list). *Use:* these are
exam facts to drill (IT25-IT27) and the vocabulary of the ticket lessons; they line up with ITIL 4 (IT10, IT11) and KCS (IT14).

**IT16. What the job is, from the U.S. occupational database.** O*NET-SOC 15-1232.00 "Computer User Support Specialists" (onetonline.org,
*read* 2026-10-22): "Provide technical assistance to computer users." Tasks include "Use manuals, consult users, or run diagnostics to
resolve problems"; "Answer user questions about hardware or software operation"; "Keep records of data communication activity, problems,
and fixes"; "Refer major hardware or software problems to vendors or technicians". Top skills: Active Listening, Reading Comprehension,
Speaking, Critical Thinking, Writing; top knowledge: Computers and Electronics, Customer and Personal Service. Work context: e-mail used
daily by 100% of respondents and face-to-face discussion by 88% (O*NET's display). *Strength:* moderate (a national survey database, not
Austin-specific). *Use:* the job is as much listening, writing and records as technical repair; the course should weight them so. Not found:
Austin-specific job postings (not searched; see open questions).

## C. Talking with users

**IT17. The A+ objective on user communication is specific about questions: ask open-ended questions to narrow, restate the issue, and
check you understood; do not argue or dismiss; set and meet expectations.** CompTIA, 220-1202 V15 objectives v3.0, 4.7 "Given a scenario, use
proper communication techniques and professionalism". *Read:* the full objectives PDF, 2026-10-22. Items: "Use proper language and avoid
jargon, acronyms, and slang"; "Actively listen and avoid interrupting the customer"; "Appropriately deal with difficult customers or
situations": "Do not argue with customer and/or be defensive", "Avoid dismissing customer issues", "Avoid being judgmental", "Clarify
customer statements (i.e., ask open-ended questions to narrow the scope of the issue, restate the issue, or question to verify
understanding)"; "Set and meet expectations/timeline and communicate status with the customer": "Offer repair/replacement options", "Provide
proper documentation on the services provided", "Follow up with customer/user at a later date to verify satisfaction"; "Appropriately
handle customers' confidential and private materials". *Strength:* strong (the exam's own list). *Use:* defines the question and
status-update drills. The objective says what to do, not how well it works; IT18 to IT20 add evidence.

**IT18. HDI's KCS curriculum states the same rule from the other side: understand the requestor's issue first by listening and asking
clarifying questions, and the knowledge base second.** HDI KCS Principles standard (see IT14): "Seek to understand the requestor's (or
customer's) issue - listen and ask clarifying questions to understand as much as possible about the situation"; "Seek to understand
what is collectively known about this issue - ... searching the knowledge base early in the process, and often after that."
*Strength:* moderate (industry curriculum). *Use:* two parallel searches at the start of a ticket: the user's account of the problem,
and the organisation's record of it.

**IT19. A conversation-analysis study of real helpdesk calls found that agent and caller work together to define, diagnose and solve the
problem; the call has a typical structure.** Steehouder (2007), "How Helpdesk Agents Help Clients", *Proceedings of the IEEE International
Professional Communication Conference (IPCC 2007)*, Seattle. *Read:* the abstract on the University of Twente repository only, 2026-10-22
(full text not reached). Abstract (paraphrased): telephone helpdesk calls are analysed by conversation analysis; agent and client share the
goal of understanding and solving a technical problem; "the two parties work together closely to define and diagnose the issue"; the paper
outlines the typical call structure and strategies participants use to make calls succeed. Related, by search description only: Firth,
Emmison & Baker (eds.), *Calling for Help* (Benjamins, 2005), where an agent adjusts to the technical competence the caller shows.
*Strength:* limited (abstract only). *Use:* supports teaching the user as a partner in diagnosis (ask them to describe, show, try one
thing) and adjusting vocabulary to the caller. Needs the full text before the build quotes call structure.

**IT20. For frustrated users, the peer-reviewed support is for explaining and apologising; there is no help-desk-specific trial.** Search
descriptions only (full papers not read): a service-failure scenario study (Emerald, *Journal of Services Marketing*, double-deviation and
explanation) found apologies and excuses gave higher satisfaction than justifications when the explanation was judged high quality; a
2023 *Psychology Research and Behavior Management* study found an employee's explanation lowered complaint intention through reducing
anger; a banking study of real failures found anger explains recovery satisfaction and that over half of recovery attempts reinforce
dissatisfaction. A business-press study (Corporate Visions with a Warwick professor) put an offer of repair first, then responsibility,
explanation and regret; it is not peer-reviewed and is not relied on. *Strength:* limited. *Use:* the lesson on upset users teaches
acknowledging the problem, saying what happens next and when, and explaining plainly, without promising a result; it presents these as
supported by service-recovery studies, not as proven for IT desks. Needs the actual papers to cite properly.

## D. The CompTIA A+ exams

**IT21. Current A+ is two exams, each up to 90 questions in 90 minutes, multiple-choice and performance-based; both must be passed.**
CompTIA, *A+ 220-1201 (Core 1) V15 Exam Objectives v4.0* and *220-1202 (Core 2) V15 Exam Objectives v3.0* (copyright 2024), "Test details".
*Read:* both full objectives PDFs, 2026-10-22, plus CompTIA's Core 1 and Core 2 V15 certification web pages (comptia.org/en-us/certifications/a/
core-1-v15/ and core-2-v15/, read via page fetch). Core 1 (220-1201): "Maximum of 90" questions, "Multiple-choice and performance-based",
90 minutes, passing score 675 on a scale of 100-900. Core 2 (220-1202): maximum 90, 90 minutes, passing score 700 on 100-900. Recommended
experience: "12 months of hands-on experience in an IT support specialist job role". The web pages also list drag-and-drop and multiple
response question types and say the exams usually retire three years after launch (estimated 2028). The objectives say the bulleted
examples "are not exhaustive lists", so other items "may also be included". *Strength:* strong. *Use:* scopes an exam-prep part. Not
read: CompTIA's description of how performance-based questions are built or scored (not found); price and testing-centre details (not
needed for the course).

**IT22. Core 1 (220-1201) domains and weights.** Same objectives (Core 1 v4.0, "Exam objectives (domains)" table; the 1101 weights are
in CompTIA's comparison sheet, IT2): 1.0 Mobile Devices 13% (was 15%); 2.0 Networking 23% (was 20%); 3.0 Hardware 25% (was 25%);
4.0 Virtualization and Cloud Computing 11% (was 11%); 5.0 Hardware and Network Troubleshooting 28% (was 29%). Domain 5 objectives:
5.1 motherboards, RAM, CPUs and power; 5.2 drive and RAID; 5.3 video, projector and display; 5.4 common mobile device issues; 5.5 network
issues; 5.6 printer issues. Each lists "Common symptoms" (for example POST beeps, no power, overheating; bootable device not found, S.M.A.R.T.
failure; intermittent wireless connectivity, slow network speeds, limited connectivity, authentication failures; paper jams, garbled print).
*Strength:* strong. *Use:* symptom lists are the exam's way of saying what a tech must recognise; symptom-to-likely-cause tables are the drill.

**IT23. Core 2 (220-1202) domains and weights.** Same source (Core 2 v3.0 table; the 1102 weights in the Core 2 comparison sheet): 1.0 Operating
Systems 28% (was 31%); 2.0 Security 28% (was 25%); 3.0 Software Troubleshooting 23% (was 22%); 4.0 Operational Procedures 21% (was 22%).
Domain 3: 3.1 Windows OS issues (BSOD, degraded performance, boot issues, services not starting, "No OS found", slow profile load, time
drift); 3.2 mobile OS and app issues; 3.3 mobile OS and application security issues; 3.4 personal computer security issues (unable to
access the network, browser pop-ups, certificate warnings, redirection). Domain 4: 4.1 documentation and support systems; 4.2 change
management; 4.3 backup and recovery; 4.4 safety (ESD, electrical, personal); 4.5 environmental impact; 4.6 prohibited content,
privacy, licensing, policy (incident response, chain of custody, regulated data, AUP); 4.7 communication and professionalism; 4.8 scripting
basics; 4.9 remote access (RDP, VPN, VNC, SSH, RMM); 4.10 AI basics (limitations: bias, hallucinations, accuracy). *Read:* the full
Core 2 PDF (4.3 is "workstation backup and recovery methods": full, incremental, differential, 3-2-1 rule). *Strength:* strong.
*Use:* Core 2 is where tickets, change control, communication and security triage live, so it is the nearer match to the job's
"operational" half; weights tell how much drill each domain earns.

**IT24. The six-step method is not exam content in V15 (IT1), but CompTIA's exam still tests troubleshooting as scenario items.** The
domains named "Troubleshooting" (Core 1 domain 5, 28%; Core 2 domain 3, 23%) are 51% of the two exams' weight, and every objective in them
begins "Given a scenario". *Strength:* strong for the fact, judgement call for what the scenarios look like (no sample questions were
read). *Use:* practice must be scenario to likely cause to next step, not definitions. Third-party study sites still say the
six steps are tested "in a fixed order" under an objective number; that is true of the older 1101/1102 exams and not confirmed for V15 (see IT1).

## E. How to teach this kind of skill and how to learn the exam facts

**IT25. Practice testing and spaced practice are the two best-supported study techniques in a large review; rereading and highlighting
are weak; interleaving is promising but less tested.** Dunlosky, Rawson, Marsh, Nathan & Willingham (2013), "Improving students' learning
with effective learning techniques", *Psychological Science in the Public Interest* 14(1), 4-58. *Read:* the full paper (gwern.net copy),
text extracted, 2026-10-22. Passages: "Practice testing and distributed practice received high utility assessments because they benefit
learners of different ages and abilities and have been shown to boost students' performance across many criterion tasks"; "Elaborative
interrogation, self-explanation, and interleaved practice received moderate utility assessments"; rereading and highlighting rated low
(abstract/overview); practice testing with feedback is "extremely robust"; for testing, "longer is better" for the gaps between sessions
and repeated tests packed into one session had "minimal or nonexistent effects" compared with spaced tests. Interleaving: students
alternate "different kinds of items or problems" instead of blocking one kind; "many fewer studies" support it. *Strength:* strong.
*Use:* the exam-facts part is built from self-quizzing with feedback, scheduled over weeks; fault-finding cases are shuffled across
systems so the learner must choose the approach, not just apply the last lesson's.

**IT26. Testing beats restudy on delayed tests, though restudy feels better.** Roediger & Karpicke (2006), "Test-enhanced learning: Taking
memory tests improves long-term retention", *Psychological Science* 17(3), 249-255. *Read:* the full paper (gwern.net copy), 2026-10-22.
Abstract: students studied prose passages and took free-recall tests without feedback or restudied; after 5 minutes "repeated studying
improved recall relative to repeated testing. However, on the delayed tests, prior testing produced substantially greater retention than
studying, even though repeated studying increased students' confidence in their ability to remember the material." *Strength:* strong for
the effect (replicated widely, per IT25), moderate for transfer to technical facts (the materials were prose passages). *Use:* tell the
learner that feeling fluent after rereading is not evidence; quiz first, then check.

**IT27. The best gap between reviews depends on how long you must remember: about 20-40% of the delay for a week, 5-10% for a year.**
Cepeda, Vul, Rohrer, Wixted & Pashler (2008), "Spacing effects in learning: A temporal ridgeline of optimal retention", *Psychological
Science* 19(11), 1095-1102; and Cepeda, Pashler, Vul, Wixted & Rohrer (2006), "Distributed practice in verbal recall tasks: A review and
quantitative synthesis", *Psychological Bulletin* 132(3), 354-380. *Read:* abstracts only, as returned by search tools (PubMed would
not load for fetch); the 2006 abstract: 839 assessments from 317 experiments in 184 articles, and the best interstudy interval grew
as the retention interval lengthened. The 2008 abstract (1,350+ participants, final test up to a year later) gives the optimal gap as a
proportion of the test delay: roughly 20-40% for a one-week test delay and 5-10% for a one-year delay. *Strength:* strong for "gap should
grow with the delay", moderate for the specific percentages (word-pair facts in the lab). *Use:* review schedule for the exam facts: if the
exam is about 8 weeks off, the first review gap is several days, later ones longer; the course schedules reviews against the learner's
chosen exam date. Full papers not read.

**IT28. Cognitive apprenticeship: make the expert's thinking visible, support the learner, then fade the support, and vary the situations.**
Collins, Brown & Holum (1991), "Cognitive Apprenticeship: Making Thinking Visible", *American Educator*, a summary of Collins, Brown & Newman
(1989). *Read:* the article (isls-naples.psy.uni-muenchen.de PDF), text extracted, 2026-10-22. Passages: in traditional apprenticeship
"the processes of the activity are visible", while in school "the processes of thinking are often invisible to both the students and
the teacher"; the model "works to make thinking visible"; its methods are modeling, coaching, scaffolding with fading, then articulation,
reflection and exploration; teachers should "identify the processes of the task and make them visible to students" and "vary the
diversity of situations and articulate the common aspects so that students can transfer what they learn"; solutions that hide the
"exploration in searching for a good method" are misleading, so learners should see experts handle problems that are hard for them. *Strength:*
moderate (a well-cited design framework, evidence is from classroom cases in reading, writing and mathematics, not IT). *Use:* the worked
tickets show the expert's reasoning aloud including dead ends; later cases give fewer hints; the learner explains their reasoning.

**IT29. Novices learn from studied worked examples, and later benefit from being asked to complete more of the steps; for people with more
skill, solving beats studying.** MIT Teaching + Learning Lab summary, "Worked and faded examples" (openlearning.mit.edu, *read*
2026-10-22; secondary summary citing Renkl 2014, Sweller & Cooper 1985, Kalyuga et al. 2001, Kalyuga & Renkl 2010, Salden et al. 2009);
the cited originals were not read. Summary: non-experts learn new concepts better by studying fully solved problems; the benefit depends on
learners self-explaining the steps and seeing "multiple, varied examples"; support should fade by "asking them to solve more and more
steps"; "Experts benefit more from attempting to solve problems than from studying worked examples" (the expertise-reversal effect). A
search description of Schwonke et al. (2009) reports faded examples gave more efficient learning and deeper conceptual knowledge in
geometry than supported problem solving (not verified). *Strength:* moderate (a large literature seen second-hand). *Use:* each fault type
starts with a fully worked ticket, then one with the last step blank, then the diagnosis blank, then cold; and the course drops the worked
step when the learner already gets it right (the learner's own record decides).

## The way of thinking, in plain words

What a good help desk tech does with a new ticket, in order. Each step is the literature's, not invented; the finding numbers are the support.

1. **Sort it.** Is it broken now (incident), asked for (service request), or the same thing breaking again and again (problem)? Rate how
   many people and how important a process are hit (impact) and how long it can wait (urgency); the company's rules turn that into an
   order. (IT10, IT11, IT12)
2. **Listen first, then search.** Let the user say it in their words, ask open questions to narrow it, say it back to check. At the same
   time search the knowledge base for the same symptom. (IT17, IT18, IT14, IT19)
3. **Ask what changed and protect their data.** What did you or the environment change recently (update, new device, moved, password)?
   Can it be made to happen again? Back up before touching anything. (IT2, IT17)
4. **Try the likely cheap fix, with a limit.** Pattern knowledge is the expert's fastest tool and is not the same as a beginner's guess;
   decide in advance how long you will guess. (IT3)
5. **Then go structured: cut the problem in two.** Write down more than one possible cause. Run the cheapest test that splits the system
   into working and not working (can it reach the network? does it fail for another user or on another machine? does it fail at boot or
   after login?). Keep halving. Swap a known-good part or compare with a working machine where it fits. (IT4, IT5, IT8, IT9)
6. **Test one change at a time; drop a cause the test rules out.** Fixation on the first idea is the expert's own trap. (IT9, IT3)
7. **Fix, then check the whole thing works for the user, and tell them what you did and what happens next.** Follow company rules and
   change control; offer workarounds when the fix cannot be done now. (IT2, IT10, IT15, IT17)
8. **Escalate by rule, with everything you found.** If your time-box or criteria are met, hand on with symptoms, steps tried, results and
   environment so the next person does not start over. (IT13, IT3)
9. **Write it so the next tech can use it.** Ticket: user, device, issue, category, severity, progress notes, resolution; a reusable article:
   issue, environment, resolution, cause. Get the user's confirmation before closing; flag a repeat for problem management. (IT11, IT14, IT15)

## Open questions / judgement calls

- **The six-step method is not exam content (IT1).** Decision needed: teach it as the spine anyway (CompTIA recommends it for first-job
  learners) while labelling it "not tested"? The research favours teaching one explicit strategy (IT5, IT7); exam-prep material should still
  cover the symptom lists and "given a scenario" items (IT22-IT24).
- **Service request: no primary definition read.** The AXELOS Service Request Management guide could not be reached. The course would
  define it as a user's pre-defined, routine ask handled by a fixed procedure; confirm against the guide before it ships.
- **Network layers for a desktop tech.** Cisco's layered approaches (IT4) are network-specific. A desktop version (device, OS, application,
  account/data, network) is my adaptation; no source gives it. Judgement call.
- **Full texts not reached:** Schaafstal et al. 2000 (abstract only), Jonassen & Hung 2006 (abstract via search), Morris & Rouse 1985
  (secondary summary), Ogata et al. 2020 (abstract), Besnard & Bastien-Toniazzo 1999 (excerpt), Rasmussen's search strategies (paper not
  found; topographic vs symptomatic search is only from a search summary of Schaafstal), Cepeda 2006/2008 (abstracts), Steehouder 2007
  (abstract), service-recovery studies (search descriptions), worked-example originals. The build should not quote these beyond what is
  stated here.
- **No help-desk-specific expert/novice study found.** The expert evidence is from network, electronics and industrial technicians.
  Whether first-line desk techs show the same pattern is unstudied in what I reached.
- **HDI's own Support Center Practices material was not reachable** (paywalled/blog-only); tier and first-contact figures in blogs are unverified.
- **Austin employer reality not researched.** Large-company desks may use ServiceNow, Jira Service Management, Intune/Active Directory/Okta or
  Mac tooling; job postings were not sampled. A short posting sample would show whether A+ is required, preferred or ignored.
- **Performance-based questions:** CompTIA's description of their format was not found; do not promise simulator-style practice until
  checked against CompTIA's own sample.
- **Exam dates:** V15 retirement is "estimated 2028" per CompTIA's page; check before the learner books.
- **De-escalating an angry user (IT20)** rests on service-recovery studies from retail and banking, not IT desks.
