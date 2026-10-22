# Scams & Social Engineering: how fraud and security practitioners decide, and what they do (2026-10-22)

Step 2 of the build-subject skill for `scams`. The question: how do fraud investigators, consumer-protection agencies, bank
fraud teams and security professionals decide that a contact is a scam, and what do they do about it; and what does the
learning research say about teaching that to a lay adult. Findings are numbered S1 to S22. Each gives the source, what was
read, the strength, and the passage it rests on. Quotes are short; where only an abstract, a summary or a search excerpt was
read, the finding says so. The old note `scams-judging-and-acting.md` (SC1 to SC9) was checked where its sources could be
reached again; what is reused from it is marked "checked against SC<n>".

Strength words: **strong** (several independent studies or official guidance from several agencies agreeing),
**moderate** (one good study, or agencies agreeing without study), **limited** (one small study, a case collection, an
abstract only), **judgement call** (no passage found that settles it).

## A. What practitioners look at first, and the distinctions they use

**S1. Experts' suspicion starts at a request to act, after the message fails to fit their life.** Wash (2020), "How Experts
Detect Phishing Scam Emails", *PACM HCI* 4 (CSCW2), interviews with 21 IT experts about phishing they caught in their own
inboxes. *Read:* the abstract on the author's page (rickwash.com/papers/journal/phishing-experts.html); the PDF is a scanned
image and could not be read as text, 2026-10-22. Abstract: in the first stage "the email recipient tries to make sense of
the email"; they notice discrepancies, little things that are off; the trigger that makes phishing a plausible explanation
is "usually, the presence of a link requesting an action"; then "they become suspicious (stage two) and investigate", and
in stage three "deal with the email by deleting it or reporting it". *Strength:* limited to moderate (one qualitative study,
21 experts; a follow-up survey of 297 non-experts, Wash, Nthala & Rader 2021, found the same broad process, per SC2).
*Use:* the first two things the learner looks at are **what it wants me to do** and **whether it fits what I was doing**.
The experts' third step, technical investigation, is not taught (S9). Checked against SC2.

**S2. US consumer protection's own sorting rule is the same two questions, then a fork: delete, or contact the company a way
you know.** FTC, "How To Recognize and Avoid Phishing Scams" (consumer.ftc.gov, read 2026-10-22). If a message asks you to
click a link, first ask "Do I have an account with the company or know the person who contacted me?"; if not, report and
delete it; if so, "contact the company using a phone number or website you know is real — not the information in the
email". *Strength:* moderate (official guidance, not a study; it agrees with S3 to S5). *Use:* the subject's three actions
come from here: **do it** (I started it), **check first, a way I already had** (it involves something of mine), **leave
it** (nothing of mine is involved).

**S3. The FTC's four signs are about what the contact claims and asks, never about how it looks.** FTC, "How To Avoid a
Scam" (consumer.ftc.gov, read 2026-10-22): "Scammers PRETEND to be from an organization you know"; "say there's a PROBLEM
or a PRIZE"; "PRESSURE you to act immediately"; "tell you to PAY in a specific way" (cryptocurrency, gift cards, a check to
deposit and send money back). Its five avoid steps: block; "Don't give your personal or financial information in response
to a request that you didn't expect" and "Don't call a number they gave you or the number from your caller ID"; "Honest
businesses will give you time to make a decision"; "Never pay someone who insists that you can only pay with
cryptocurrency" (and gift cards, wires); "Stop and talk to someone you trust". *Strength:* moderate (official guidance).
*Use:* pressure and the way of paying are taught as signals that settle it; "talk to someone you trust" is a real move.

**S4. The verification channel must be one the claimant did not give you: out-of-band, found yourself.** CISA, "Avoiding
Social Engineering and Phishing Attacks" (cisa.gov, read 2026-10-22): "try to verify it by contacting the company directly.
Do not use contact information provided on a website connected to the request; instead, check previous statements for
contact information." UK Finance, Take Five (takefive-stopfraud.org.uk, read 2026-10-22): "Can you verify the request using
contact details you found yourself?" and "Go directly to the organisation's official website or app using details you
trust." FBI IC3 PSA I-091124 on business email compromise (read 2026-10-22): "Use secondary channels and/or two-factor
authentication to verify requests for changes in account information." FBI IC3 PSA I-120324 on AI in fraud (read
2026-10-22): verify a caller "by hanging up the phone" and calling the organization on a number you look up yourself; and
"Create a secret word or phrase with your family to verify their identity." *Strength:* strong as professional consensus
(four agencies in two countries agree); it is guidance, not a tested intervention. *Use:* the core move of the subject.

**S5. The classic case of why a channel the claimant gives is worthless.** Stajano & Wilson, *Understanding scam victims:
seven principles for systems security*, Cambridge TR-754 (2009; refereed as CACM 54(3), 2011). *Read:* the full technical
report, text extracted from the PDF, 2026-10-22. Footnote in section 3: early episodes advised asking a purported policeman
for his badge and calling the number on it; "Clearly this is not the best advice, as the fraudster can make a fake badge
with the phone number of an accomplice. A better suggestion ... is to call the police station through the number found in
the phone book or some other higher-integrity channel." Section 3 also: people "are not very good at all at authenticating
strangers, whether over a network, over the phone or even in person." *Strength:* moderate (a case collection by a security
researcher and a professional hustler, not an experiment; the logic is the point). *Use:* the worked reason behind S4, in
the lesson on your own way in: anything that arrives with the request belongs to the sender.

**S6. What con artists exploit is a short list of states of the victim, and time pressure switches reasoning off.**
Stajano & Wilson (S5), section 3, the seven principles: Distraction ("While you are distracted by what retains your
interest, hustlers can do anything to you and you won't notice"); Social Compliance ("Society trains people not to question
authority"); Herd; Dishonesty ("Anything illegal you do will be used against you"); Deception ("Things and people are not
what they seem"); Need and Greed ("Your needs and desires make you vulnerable"); Time ("When you are under time pressure to
make an important choice, you use a different decision strategy. Hustlers steer you towards a strategy involving less
reasoning"; "it's very difficult for people to stop and assess the situation properly"). *Strength:* moderate (qualitative,
consistent with S7 and with the arousal experiment in SC5, Kircanski et al. 2018). *Use:* the lesson on pushing teaches
that urgency, fear, authority and excitement are the reason to stop, not the reason to act; the busy task trains the
Distraction case.

**S7. Real fraud pitches stack many influence tactics; the most common are riches, scarcity and a credible source.** NASD
(now FINRA) Investor Education Foundation, *Investor Fraud Study Final Report* (Consumer Fraud Research Group: Pratkanis,
Shadel and others; WISE Senior Services, May 2006). *Read:* the full report, text extracted from the PDF, 2026-10-22. Phase
One coded 128 undercover tapes of real pitches: "an average of 8.6 tactics per transcript", thirteen tactics, the top being
"Phantom Fixation (dangling the prospect of wealth and riches) (248)", "Scarcity (168)", "Source Credibility (claiming to
be from a known legitimate business) (121)", then Comparison, Friendship, Commitment, Social Consensus, Reciprocity,
Landscaping, Profiling, Fear, Authority, Dependent. *Strength:* moderate (real recordings; investment and lottery pitches to
older people). *Use:* the scripts lessons show each scam with the tactics it uses in its own lines; tactics are marked in
feedback (the `exchange` ask already marks pushing lines), never quizzed as a vocabulary list (Cialdini's principles are
the source of most of these names; the study is the evidence they occur in real fraud).

**S8. Knowing about money is not what protects; victims of investment fraud knew more, and listened to more pitches.** NASD
2006 (S7), Executive Summary: "Investment fraud victims demonstrated a better understanding of basic financial literacy
than non-victims"; "Both victim types were more likely to listen to sales pitches from unknown sales persons"; financial
literacy programs "are necessary but probably not sufficient to prevent fraud". Recommendation 1: "Teach Persuasion and
Social Influence ... like teaching poker players the difference between a full-house and three-of-a-kind and nothing about
the role of bluffing." Lea, Fischer & Evans (2009), *The psychology of scams*, OFT1070, University of Exeter for the UK
Office of Fair Trading; *read:* the Stanford Center on Longevity summary only: scam texts relied on "appeals to
trust/authority & visceral (vividly emotional) triggers"; "no evidence that any of the decision error propensities
distinguished victims"; victims reported "trying harder to understand scams", possibly because non-victims discarded the
material unread. *Strength:* moderate (NASD, survey of 165 victims and 150 non-victims, victims not randomly sampled);
limited for OFT (summary). *Use:* the subject teaches the move and the scripts, not domain knowledge; and the protective
behavior is **not engaging**: not reading on, not listening on (S10).

**S9. How a message looks proves nothing, in either direction.** (a) Heiding, Lermen, Kao, Schneier & Vishwanath (2024),
arXiv 2412.00586, *read:* abstract: click-through 54% for fully AI-written spear phishing, 54% for emails by human experts,
12% for a control of arbitrary phishing. (b) Herley (2012), "Why do Nigerian scammers say they are from Nigeria?", WEIS;
*read:* abstract on the Microsoft Research page: "By sending an email that repels all but the most gullible the scammer gets
the most promising marks to self-select", so clumsy mass scams are clumsy on purpose, and targeted ones need not be. (c)
FTC (S3): scammers "use technology to change the phone number that appears on your caller ID"; FTC phishing page: a scammer
may copy a trusted company's logo. (d) Phishing sites using HTTPS rose from under 5% (end 2016) to over 70% by 2019
(APWG and PhishLabs figures, *read:* search excerpts only). Against this, FBI IC3 (S4) still advises checking that a URL
and sender address match the business. *Strength:* strong that polish, logos, caller ID and the padlock do not show a
message is genuine; the IC3 advice to read addresses is for workplaces with training. *Use:* the owner's "What people
wrongly believe" unit is kept and grounded here; reading links and sender addresses is not taught to a lay learner, because
the out-of-band check (S4) makes it unnecessary and a look-alike address defeats a hurried reader (judgement call for the
last clause; S12 is the nearest evidence).

**S10. Victimization needs two-way engagement; most people who are targeted and do not engage lose nothing.** Stanford
Center on Longevity, FINRA Investor Education Foundation and BBB Institute, *Exposed to Scams: What Separates Victims from
Non-Victims?* (2019). *Read:* the Stanford page's introduction ("Victimization by scams and fraud depends, in part, on
two-way engagement between the target of the scam and the fraudster"; three groups: never engage, engage then stop, engage
and lose) and a search summary of the report's figures (about 47% of targets did not engage; 30% engaged and lost nothing;
23% engaged and lost money; prior knowledge of the scam type went with not engaging; victims more often said the scammer
seemed official, they felt time pressure, they liked the person). The report PDF was not machine-readable here. *Strength:*
limited to moderate (one survey of reported targets; the figures are from a secondary summary). *Use:* "leave it" and
"end it" are actions taught as safe and normal; knowing a scam's script is protective (also S16), so the scripts stay.

**S11. A real organization's "never" list is the fastest settle.** FTC, tech support scams: "Real security pop-up warnings
and messages will never ask you to call a phone number"; "Legitimate tech companies won't contact you by phone, email, or
text message" about a computer problem. FTC, refund and recovery scams: "Government agencies and legitimate organizations
will never ask for money to help you get a refund"; "Never pay upfront for a refund". FTC, romance scams: "Never send money
or gifts to a sweetheart you haven't met in person." FTC (S3): never pay someone who insists on crypto, gift cards or a
wire; never deposit a check and send money back. Take Five (S4) quick checks: "Have you been asked to move money to a new
or 'safe' account?" and "Are you being asked to share a one-time passcode, password or PIN?" ABA, *Banks Never Ask That*
(banksneveraskthat.com, read 2026-10-22): "Hang up!" when they ask you to keep it a secret; "Verify first!" when they ask you
to click, pay or respond. *Strength:* strong as guidance (several agencies). *Use:* one short list of requests no honest
sender makes; a contact that makes one is settled at once: leave it, or end it. It replaces red-flag lists of looks.

**S12. Lay people's detection is weak; their actions are more cautious but no more discerning.** Canfield, Fischhoff & Davis
(2016), *Human Factors*, two online experiments, 40 emails each. *Read:* the abstract (Scholars' Mine, MetaTOC) 2026-10-22;
the full text was read for SC1 on 2026-10-12 (detection d' 0.96; behavior d' 0.39 with a cautious bias; r = .61 between
them). Abstract: people were cautious in what they did, but weak detection left them vulnerable; they suggest feedback on
ability and information about consequences. *Strength:* moderate. *Use:* practice asks the action, not "scam or real?", and
the safe action does not depend on detecting (check through your own way). Checked against SC1.

**S13. Fraud teams treat speed as the whole game once money has gone; the first call is the bank or the payment company.**
FTC, "What To Do if You Were Scammed" (read 2026-10-22): for a bank transfer or Zelle "Report it to your bank or credit union
immediately" and "Ask them to reverse the payment"; wire: "Report it to the wire transfer company immediately"; gift card:
"Contact the gift card issuer immediately" and "Keep the gift card and the receipt"; crypto: contact the exchange or ATM
operator, noting crypto lacks card protections; a password given and you can still sign in: "Create a new, strong password"
and "Turn on two-factor authentication"; computer access: update security software, "Run a scan", change passwords; Social
Security number used: IdentityTheft.gov; then report at ReportFraud.ftc.gov. CFPB (Ask CFPB 1017, read 2026-10-22): for an
unauthorized debit or electronic transfer reported within two business days, liability is at most $50; after that, up to
$500; transactions on a statement not reported within 60 days may not be recoverable. FTC credit freezes: "There's no cost
to place or lift a credit freeze"; a freeze is placed at all three bureaus, while a fraud alert at one bureau "must" be
passed to the other two. FTC refund and recovery scams (S11): the offer to get your money back that follows a loss is
itself a scam; scammers buy "sucker lists" of people who already paid. *Strength:* strong (official, current US rules). Note:
a payment the victim sent themselves may not count as "unauthorized" under the CFPB rule; speed matters either way
(judgement call on how the lesson words this; it says "ask", never "you will get it back"). *Use:* the last lesson.

**S14. Professional social engineers defend with prepared scripts and by weighing what the information is worth.** Hadnagy,
*Social Engineering: The Art of Human Hacking* (Wiley, 2010), chapter 9 "Prevention and Mitigation". *Read:* the table of
contents only (sections: learning to identify social engineering attacks; creating a personal security awareness culture;
being aware of the value of the information you are being asked for; developing scripts). *Strength:* judgement call (the
chapter text was not read). *Use:* supports, but does not decide, a rehearsed exit line ("I'll call you back on the number
I have") and the family secret word (S4, FBI).

**S15. Non-experts check with the people around them, and agencies endorse it.** Nthala & Wash (non-expert sensemaking,
per the search summary of their work, 2026-10-22): non-experts "rely on their social connections as an investigative
tool". FTC (S3): "Before you do anything else, tell someone ... Talking about it could help you realize it's a scam"; FTC
romance scams: "Talk to someone you trust." *Strength:* limited (summary) plus guidance. *Use:* for the one case with no
channel of your own (someone known only online), the move is: no money, and tell someone you know in person.

**S16. Losses concentrate in a few kinds of request and ways of paying; the request kinds are the ones to teach.** FTC press
release, 2025-03 (Consumer Sentinel 2024, read 2026-10-22): "more than $12.5 billion" lost in 2024; investment scams "$5.7
billion"; imposter scams the most reported, "$2.95 billion"; government imposters "$789 million"; job scams' losses rose from
$90 million to $501 million (2020 to 2024); bank transfers and cryptocurrency carried more losses "than all other payment
methods combined"; email the most common contact, then phone calls, then texts. *Strength:* strong for what is reported
(reports undercount). *Use:* the scripts lessons weight bank and government imposters, investment and online-only contacts,
and payment by transfer, crypto and gift card; a job offer that asks for money or a check to deposit belongs in the money
lesson.

## B. What the learning research says about this kind of skill

The skill is two things at once: judging a contact (what it wants, whether it fits) and a behavior under pressure (stop,
leave or go in your own way). Both must work in seconds, on autopilot, with emotion running.

**S17. Training as read-once content barely changes behavior; people do not read it.** Ho, Mirian, Luo et al. (2025), IEEE
S&P, 19,500+ employees: in over 75% of sessions people spent under a minute on the training page; annual training's recency
had no significant relation to failing; embedded training cut failure by about 2 points. Lain, Kostiainen & Čapkun (2022,
2024): embedded training did not raise resilience; the small effect came from the reminder, phishing being "an attention
problem, rather than a knowledge one". *Read:* checked against SC3 (full text of Ho §4 to §6 and Lain 2024 §8, 2026-10-12);
not re-read today. *Strength:* strong (large field trials), for workplace phishing. *Use:* each lesson is mostly deciding on
real-looking cases; reading is the way of thinking and one worked case, no more.

**S18. Training attention and context beats adding rules.** Jensen, Dinger, Wright & Thatcher (2017), *JMIS* 34(2),
597-626, 355 university staff and students already given rule-based guidance. *Read:* the abstract (JMIS page and search
excerpt) 2026-10-22: the mindfulness training covered "dynamically allocating attention during message evaluation,
increasing awareness of context, and forestalling judgment of suspicious messages"; ten days later those trained this way
were better able to avoid a phishing attack (SC6 records 7.5% against 13.4%). *Strength:* moderate (one field experiment;
the full text not read). *Use:* the way of thinking is three questions of attention (what does it want; did I start it; how
would I get there myself), not a red-flag list.

**S19. Forewarning works, including a warning about a different scam, and fades; a reminder keeps it.** Scheibe, Notthoff,
Menkin, Ross, Shadel, Deevy & Carstensen (2014), *Basic and Applied Social Psychology* 36(3), 272-279 (PMC4199235). *Read:*
the article on PMC, 2026-10-22: past telemarketing victims were called with a mock scam two or four weeks after a warning;
the control group showed "almost 50% unequivocal acceptance"; both warnings reduced it; the same-scam warning raised
outright refusals but faded by four weeks; the different-scam warning held at both delays, working through doubt. The
warning scripts ended: "advise the caller you do not conduct business over the telephone or, better yet, simply hang up."
Burke, Kieffer, Mottola & Perez-Arce (2022), *JEBO*: effect gone by six months without a reminder, kept with one at three
months (P26, read in full there). *Strength:* moderate. *Use:* the scripts lessons teach specific scams (the owner's ask)
and the review brings them back at weeks to months; a scripted exit line is part of the practice.

**S20. Active practice against weakened tactics beats videos and tips; both raise suspicion of genuine offers at first.**
Roy, G & Mukherjee (2025), *ShieldUp!*, arXiv 2503.12341, RCT, 3,000 adults in India. *Read:* the abstract, 2026-10-22: a
15-minute game gave "a significant improvement in their ability to identify scams" over awareness videos and tips and over
a control game, held at 21 days; both the game and the awareness material first made users more skeptical of genuine
offers, which faded by day 21. Sheng, Holbrook, Kumaraguru, Cranor & Downs (2010), "Who Falls for Phish?", CHI, 1,001
respondents. *Read:* the abstract as reproduced by CybSafe: education cut entering information into phishing pages by
40%, but some materials "slightly reduced participants' tendency to click legitimate links". *Strength:* moderate. *Use:*
practice is the learner acting on cases with consequences; about half of every set is genuine, and checking a genuine
message is scored right (P26 requires 1).

**S21. Practice must be the decision, in the form it arrives in, fast.** From the general notes: tests transfer when
practice and use share their answers (D6, R8); feedback after each answer (R7, P19); mix confusable cases (P22, R9); habit
lowers suspicion (SC4, Vishwanath et al. 2016, abstract only). Timed practice transferring to real pressure is untested: a
**judgement call**, kept because S6 says pressure is where the reasoning fails.

**S22. If-then plans help a held goal with a clear cue.** P26 (Gollwitzer & Sheeran 2006; Sheeran, Listrom & Gollwitzer
2025); no trial against phishing or phone fraud was found (SC9). *Strength:* moderate in general, limited here. *Use:* one
plan, cued by a request ("If anyone I did not call asks for a code, money or my sign-in, I end it and call back on the
number I have"), rehearsed in practice, never a substitute for it.

## C. The way of thinking, in plain words

What practitioners do, put together from S1 to S16:

1. **Look at what it wants, not at how it looks** (S1, S3, S9). A request to pay, sign in, give a code, give details, or
   install or let someone onto your device is what turns a message into something to decide. Polish, logos, caller ID,
   the padlock and knowing your details prove nothing.
2. **Ask whether it fits something you started** (S1, S2). A code you just asked for, a bill you always pay the usual way:
   act normally. Out of the blue: go on.
3. **If it involves something of yours, go in your own way; if not, leave it** (S2, S4, S5). Your bank's app, the number on
   your card, the site you type yourself, the family secret word. Never the link, number, reply or transfer the contact
   gives you, because those belong to the sender.
4. **Pressure is the sign to stop, and some requests settle it outright** (S3, S6, S11). Hurry, secrecy, fear, a prize, a
   "safe account", a code read back, a gift card or crypto, a fee to get your money back, money to someone you have not met:
   end it. Ending a contact is free; honest senders give you time (S3, S10).
5. **When there is no channel of your own, tell someone you know in person** (S15).
6. **If something already went out, speed decides: the bank or payment company first, on its own number, then passwords,
   then reports, and ignore the offer to recover it** (S13).

What experts know that novices do not, and that the lessons correct (P29): the look test (S9); trusting the number the
caller gives or the caller ID (S4, S5); "they knew my details" (S9c); "only greedy or careless people get caught" (S8);
"my bank would stop it" and "I rang them" (S4, S13); staying on the line to be polite (S10, S19).

## What the evidence does not settle

- No study tests a self-study phone course against real losses. Everything here is lab, survey, field-phishing or guidance.
- Whether timed practice carries into real pressure (S21): judgement call.
- Whether naming a scam's tactics helps beyond knowing its script: NASD recommends teaching persuasion (S7, S8) but its own
  call for a test was not answered in what was found; Scheibe (S19) tested warnings about scripts, not tactic names.
- Hadnagy's chapter (S14) and the 2019 Exposed to Scams figures (S10) were read only as a table of contents and a summary.

## Sources

- Wash 2020: https://rickwash.com/papers/journal/phishing-experts.html
- FTC, How to recognize and avoid phishing scams: https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams
- FTC, How to avoid a scam: https://consumer.ftc.gov/articles/how-avoid-scam
- CISA, Avoiding social engineering and phishing attacks: https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks
- Take Five: https://www.takefive-stopfraud.org.uk/advice/general-advice/
- FBI IC3 PSA I-091124 (BEC): https://www.ic3.gov/PSA/2024/PSA240911 ; PSA I-120324 (AI): https://www.ic3.gov/PSA/2024/PSA241203
- Stajano & Wilson 2009: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-754.pdf
- NASD Investor Fraud Study 2006: https://www.finrafoundation.org/sites/finrafoundation/files/investor-fraud-study.pdf
- Lea, Fischer & Evans 2009 (summary): https://longevity.stanford.edu/the-psychology-of-scams-provoking-and-committing-errors-of-judgment/
- Exposed to Scams 2019: https://longevity.stanford.edu/scamtracker ; https://finrafoundation.org/exposed-to-scams
- Heiding et al. 2024: https://arxiv.org/abs/2412.00586
- Herley 2012: https://www.microsoft.com/en-us/research/publication/why-do-nigerian-scammers-say-they-are-from-nigeria/
- APWG trends (2017): https://docs.apwg.org/reports/apwg_trends_report_q4_2017.pdf
- ABA, Banks Never Ask That: https://www.banksneveraskthat.com/
- FTC tech support, recovery, romance, credit freeze, what to do if scammed: consumer.ftc.gov articles of those names
- CFPB Ask 1017: https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discovered-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
- FTC Consumer Sentinel 2024 release: https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024
- Hadnagy 2010, contents: https://oreilly.com/library/view/social-engineering-the/9780470639535
- Canfield et al. 2016: https://scholarsmine.mst.edu/engman_syseng_facwork/545
- Jensen et al. 2017: https://jmis-web.org/articles/1343
- Scheibe et al. 2014: https://pmc.ncbi.nlm.nih.gov/articles/PMC4199235
- ShieldUp! 2025: https://arxiv.org/abs/2503.12341
- Sheng et al. 2010 (abstract): https://www.cybsafe.com/research/who-falls-for-phish-a-demographic-analysis-of-phishing-susceptibility-and-effectiveness-of-interventions
- Ho et al. 2025, Lain et al. 2022/2024, Vishwanath et al. 2016, Kircanski et al. 2018: as listed in scams-judging-and-acting.md
