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
come from here: **do it** (I started it), **check first, a way I already had** (I have an account with them or know the
person), **leave it** (neither). The FTC's question names the sender, not the subject of the message, so a pop-up "about your computer" from nobody
you deal with is left, and a text "from" your bank is checked (rule wording settled 2026-10-22, plan.md "The rule").

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

## A2. Added 2026-10-22, after the research review of lessons 1 to 6 (each read on the page named, that day)

**S23. Family and friends asking for money: check through a number you know.** FTC, "Scammers Use Fake Emergencies To Steal Your Money"
(consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money). "Use a phone number you know is right to call or message the family
member" and "Ask them if they're really in trouble"; "Call someone else in your family or circle of friends", even if the caller "said to keep it a
secret"; "don't trust the voice on the line — even if it sounds like your family member or friend"; they ask to pay "by wiring money", "sending
cryptocurrency, using a payment app, or by putting money on a gift card". The page also suggests to "try asking a question only the real person would
know the answer to", so a lesson never marks that move wrong; it offers the call to the number you have instead. *Strength:* moderate (official
guidance, agreeing with the FBI's family secret word, S4). *Use:* step 3 of the rule covers people you know: money they ask for that you had not
agreed is checked on the number you already have, whoever's name is on the message.

**S24. Prizes are free.** FTC, "Fake Prize, Sweepstakes, and Lottery Scams" (consumer.ftc.gov/articles/fake-prize-sweepstakes-and-lottery-scams):
"Real prizes are free"; "If you have to pay to get your prize, it's a scam." The page says nothing about a prize you did not enter, so no lesson says
such a prize cannot exist. *Strength:* moderate (official guidance). *Use:* the settling line on prizes.

**S25. Advance-fee loans: a real lender may charge to apply; a fee to get the loan is the trick.** FTC, "What To Know About Advance-Fee Loans"
(consumer.ftc.gov/articles/what-know-about-advance-fee-loans): "Real lenders can require an application or appraisal fee before they consider your
loan application"; "Any up-front fee that the lender wants to collect before granting the loan is a cue to walk away"; be wary of fees described as
"insurance," "processing," or "paperwork"; "Nobody legit will tell you that paying a fee guarantees that you'll get a loan." *Strength:* moderate.
*Use:* the loan line says "a fee to get a loan you were told is approved", never "a real loan never charges anything".

**S26. A code is for you to type, never to read to someone who contacted you.** FTC consumer alert, "Google Voice scam: How the verification code
scam works and how to avoid it" (consumer.ftc.gov/consumer-alerts/2021/10/...), read 2026-10-22: scammers posing as buyers say they "want to verify
that you're a real person"; with the code "they'll try to use it to create a Google Voice number linked to your phone number"; "No matter what the
story is, don't share your Google Voice verification code", nor "any verification code" with someone "if you didn't contact them first." *Strength:*
moderate. *Use:* the code line is worded "A code is only for you to type, on the page or app you opened yourself. Never read it to anyone." The
outcome of reading it to a buyer is the one the FTC names (a number set up in your name, used to cheat others).

**S27. Investment scams by people met online: gains you cannot take out.** FBI IC3 PSA230314 (ic3.gov/PSA/2023/PSA230314): "Criminals target victims
using dating applications (apps), social media platforms, professional networking sites"; "Once trust is established with victims, criminals introduce
the topic of cryptocurrency"; "When victims attempt to withdraw their money, they are told they need to pay a fee or taxes"; "Victims are unable to get
their money back, even if they pay"; advice: "Do not invest per the advice of someone you meet solely online." *Strength:* moderate (FBI, from
complaints). *Use:* step 4 of the rule (someone met only online is not someone you know) and the investment outcomes.

**S28. Tech support and refund scams, and numbers from a search.** FTC, "How To Spot, Avoid, and Report Tech Support Scams" (as S11), read again
2026-10-22: scammers try to "show up in online search results for tech support or run their own display ads online"; they "ask for remote access
to your computer"; in refund scams they claim they "refunded you too much money" and pressure you to pay it back; to check a charge, contact the
company using "a phone number you know is real". *Strength:* moderate. *Use:* "a number a web search shows" is a wrong way to check (a distractor
that is not from the message); the refund-call reason is the FTC's.

**S29. A sign-in approval you did not start means someone has your password.** CISA, "Implementing Number Matching in MFA Applications" (fact sheet,
October 2022, text extracted from the PDF): the login flow is "1. The user enters their username and password", then a push the user accepts; in "MFA
fatigue" the "threat actor bombards a user with mobile application push notifications until the user either approves the request by accident or out of
annoyance". *Strength:* moderate (agency guidance). *Use:* the approval pair in lesson 5: approve only the sign-in you are doing now; an approval you
did not start is checked by opening the account's own app and changing the password (step 3). That a push can only come after the password was typed
is read from CISA's login flow; that changing the password is the next move is S13's advice for a password given away.

**S30. Apps and what they may reach.** FTC, "How To Protect Your Privacy on Apps" (consumer.ftc.gov/articles/how-protect-your-privacy-apps): "Some
apps may ask for access to information from your device, like your location, your contacts, or your photos"; "Consider turning off unnecessary
permissions or deleting apps that request a lot of permissions." *Strength:* moderate for that much. *Judgement call:* the page gives no test for
"needs"; the lessons do not teach one. An "Allow" request is judged by the rule: it is done when it answers what you just tapped in an app you got
yourself (the camera after "Scan"), and left when it answers nothing you did (an app from an ad that asks for your texts). That an app reading your
texts can read the codes sent to you by text is a judgement call drawn from S26 (codes arrive by text) and is said as a possibility, never as what
always happens. FTC, "Job Scams" (consumer.ftc.gov/articles/job-scams): "No honest potential employer will ever send you a check to deposit and then
tell you to send on part of the money"; work-from-home offers that leave you "paying for starter kits, so-called training, or certifications".

**S31. Government imposters: hang up and call the agency at a number you know.** FTC, "How To Avoid a Government Impersonation Scam"
(consumer.ftc.gov/articles/how-avoid-government-impersonation-scam), read 2026-10-22: "Government agencies will never call, email, text, or message
you on social media to ask for money or personal information"; "No government agency will demand you wire money or pay with gift cards,
cryptocurrency, or a payment app"; "Neither the IRS nor its debt collectors will threaten to arrest you"; "Hang up the phone and call the government
agency directly at a number you know is correct", not the number given or the caller ID; with no number, find the official one on the agency's
website. *Strength:* moderate (official guidance). *Use:* the rule's step 3 counts an agency as one you deal with (it holds your records), so its
name is checked on a number you know, never paid. The family-word line follows S4 and S23 together: a caller who cannot say the word is not
believed, and you hang up and call the person on the number you have; the lessons do not claim such a caller cannot be family.
On sign-in codes and approvals: S29 shows one way a push comes (after the password); S26 shows a code can be made to come with no password at all.
So the lessons say "a code or approval you did not ask for means someone is trying to get into that account", never "someone has your password".
On reading texts: only Android lets an app ask to read text messages (judgement call from the platforms' own permission lists, not a cited page);
the lessons say "on an Android phone".

## A3. Added 2026-10-22 for lessons 7 to 12 (each read on the page named, that day)

**S32. What your details are worth, and quizzes that collect them.** FTC, "What To Know About Identity Theft"
(consumer.ftc.gov/articles/what-know-about-identity-theft): thieves with your information can "buy things with your credit cards", "get new credit
cards in your name", "open a phone, electricity, or gas account in your name", "steal your tax refund"; "If you think someone stole your identity,
report it to the Federal Trade Commission", at IdentityTheft.gov; a credit freeze: "contact each of the three credit bureaus"; "Get and review your credit
reports. Accounts in your name that you don't recognize could be a sign of identity theft." AARP, "Online quizzes" (aarp.org/money/scams-fraud/info-2023/online-quiz):
quiz answers "might even match your answers to the security questions you use to log in"; "If, for example, you share the name of your childhood pet, you
may be disclosing part of one of your passwords"; "When accounts require security questions, treat your answers like passwords by making them random
and long." FTC fake emergencies (as S23): "The scammer may already know a lot about you", "They may know your name, where you live, and other information
they could have found on social media sites". *Strength:* moderate (official guidance; AARP is a consumer group, not a study). *Use:* lesson 8 (what
details let someone do, quizzes, security answers) and lesson 9's belief "they knew my details". The outcomes in lesson 8 are drawn from the FTC's list.

**S33. Official names, caller ID and payments you made yourself.** FTC, "How To Avoid a Scam" (as S3), read again: scammers "make up a name that sounds
official"; "They use technology to change the phone number that appears on your caller ID. So the name and number you see might not be real."
FTC, "Mobile Payment Apps: How To Avoid a Scam When You Use One" (consumer.ftc.gov/articles/mobile-payment-apps-how-avoid-scam-when-you-use-one):
scammers want payment by app because "once you do, it's hard for you to get your money back." *Strength:* moderate. *Use:* lesson 9's beliefs "it
looked official", "the number on my screen was my bank's", "my bank would have stopped it" (said as "a payment you make yourself goes through; once
it is sent, it is hard to get back", never "the bank cannot see it"). The padlock belief rests on S9d (search excerpts only, limited), so the lesson
says "most copied websites show the padlock too", not a figure. The "friendly and helpful" belief rests on S7 (Friendship and Source Credibility among
the commonest tactics in real pitches) and S10 (victims more often said they liked the person).

**S34. The first steps after a loss, by kind.** FTC, "What To Do if You Were Scammed" (as S13), read again for each kind: bank transfer: "Report it
to your bank or credit union immediately" and "Ask them to reverse the payment and refund your money"; payment app: "Report it to the payment app
immediately"; wire: "Report it to the wire transfer company immediately", "Tell them a scammer tricked you"; gift card: "Contact the gift card issuer
immediately. Use the number on the back of the card", "Keep the gift card and the receipt, if you have it"; cryptocurrency: "Contact the cryptocurrency
exchange or ATM operator immediately", "Ask them to reverse the transaction"; debit card: "Use the number on the back of your card or log in to your
account online or through their app"; username and password: "Create a new, strong password for the account that was compromised" and "Turn on
two-factor authentication on the account"; remote access: "Update your security software", "Run a scan and delete anything it identifies as a
problem", "Change your passwords and turn on two-factor authentication"; Social Security number: "Go to IdentityTheft.gov to report it", "Get a
customized recovery plan"; then "Report a scammer to the FTC at ReportFraud.ftc.gov". FTC, "How To Recover Your Hacked Email or Social Media Account":
"First, make sure your computer security software is up to date, then run a scan." FTC, "How To Recognize, Remove, and Avoid Malware": "Immediately stop
logging into online accounts". FTC, "Lost or Stolen Credit, ATM, and Debit Cards": "don't wait to report it"; "Follow up immediately in writing"; for a
debit card "what you owe depends on how quickly you report it." *Strength:* strong (official, current US guidance). *Use:* lesson 12's first step for
each kind of loss and the two after it. Where the sources give no order between two steps (a freeze and the credit reports; two-step sign-in and the
change on other accounts), the lesson asks for both as "the next two", not an order (a departure from the plan's "order the next two", made so that no
order is invented).

*Final round, 2026-10-22 (after the research review of lessons 7 to 12):* the FTC lost-card page also says that for a credit card "The maximum you
might be responsible for is $50", while for a debit card "what you owe depends on how quickly you report it", so lesson 12 says each. The FTC's
wording for money is "Ask them to reverse the payment and refund your money"; the lessons say "request that they reverse it", never that they will.
For a number that has already been used to open an account, the IdentityTheft.gov recovery steps begin with calling the company where the fraud
happened (per the reviewer's search; the page did not render as text here), which the first-step list does not offer, so lesson 12 uses only numbers
that went out and have not been used (a leak, a call, a stolen card).

**S35. One password per account.** CISA, "Use Strong Passwords" (cisa.gov/secure-our-world/use-strong-passwords): "Use a different strong password for
each account"; its story: Emma knew she'd been hacked "because she'd used the same password on both accounts", after "her password was a part of a
company breach that was posted online." *Strength:* moderate (agency guidance). *Use:* lesson 12's "change it anywhere you used the same one".

**S36. Fake checks and toll texts.** FTC, "How To Spot, Avoid, and Report Fake Check Scams" (consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams):
buyers "'accidentally' send a check for too much, and ask you to refund the balance"; "Even if you see the funds in your account, that doesn't mean it's a
good check"; "It can take weeks for a bank to figure out that the check is a fake"; "you're stuck paying the money back to the bank"; "Never use money
from a check to send gift cards, money orders, cryptocurrency, or to wire money". FTC consumer alert on unpaid-toll texts (consumer.ftc.gov/consumer-alerts/2025/01/got-text-about-unpaid-tolls-its-probably-scam):
"You get a text out of the blue that says you have unpaid tolls and need to pay immediately"; the link goes to "a page to enter your bank or credit card
info"; "Reach out to the state's tolling agency using a phone number or website you know is real — not the info from the text." *Strength:* moderate.
*Use:* lesson 7 (the overpaying buyer; the small fee by link, checked in your own toll account's app when you have one, left when you have none).
A change of bank details on a real bill is S4 (FBI IC3 PSA I-091124: verify "requests for changes in account information" by a second channel).

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
3. **If you did not start it and you have an account with them or know the person, go in your own way; if neither, leave it** (S2, S4, S5,
   S23; the FTC's own test is "Do I have an account with the company or know the person who contacted me?"). Your bank's app, the number on
   your card, the site you type yourself, the family secret word. Never the link, number, reply or transfer the contact
   gives you, because those belong to the sender.
4. **Pressure is the sign to stop, and some requests settle it outright** (S3, S6, S11). Hurry, secrecy, fear, a prize, a
   "safe account", a code read back, a gift card or crypto, a fee to get your money back, money to someone you have not met:
   end it. Ending a contact is free; honest senders give you time (S3, S10).
5. **When there is no channel of your own (someone known only online), leave it and tell someone you know in person** (S15, S27).
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
- FTC fake emergencies: https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money
- FTC prizes: https://consumer.ftc.gov/articles/fake-prize-sweepstakes-and-lottery-scams ; advance-fee loans: https://consumer.ftc.gov/articles/what-know-about-advance-fee-loans ; job scams: https://consumer.ftc.gov/articles/job-scams
- FTC Google Voice code alert: https://consumer.ftc.gov/consumer-alerts/2021/10/google-voice-scam-how-verification-code-scam-works-and-how-avoid-it
- FBI IC3 PSA230314: https://www.ic3.gov/PSA/2023/PSA230314
- FTC tech support: https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams ; apps: https://consumer.ftc.gov/articles/how-protect-your-privacy-apps
- CISA number matching fact sheet: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implement-number-matching-in-mfa-applications-508c.pdf
- FTC government impersonation: https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam
- Hadnagy 2010, contents: https://oreilly.com/library/view/social-engineering-the/9780470639535
- Canfield et al. 2016: https://scholarsmine.mst.edu/engman_syseng_facwork/545
- Jensen et al. 2017: https://jmis-web.org/articles/1343
- Scheibe et al. 2014: https://pmc.ncbi.nlm.nih.gov/articles/PMC4199235
- ShieldUp! 2025: https://arxiv.org/abs/2503.12341
- Sheng et al. 2010 (abstract): https://www.cybsafe.com/research/who-falls-for-phish-a-demographic-analysis-of-phishing-susceptibility-and-effectiveness-of-interventions
- Ho et al. 2025, Lain et al. 2022/2024, Vishwanath et al. 2016, Kircanski et al. 2018: as listed in scams-judging-and-acting.md
- FTC identity theft: https://consumer.ftc.gov/articles/what-know-about-identity-theft ; AARP quizzes: https://www.aarp.org/money/scams-fraud/info-2023/online-quiz
- FTC payment apps: https://consumer.ftc.gov/articles/mobile-payment-apps-how-avoid-scam-when-you-use-one ; lost or stolen cards: https://consumer.ftc.gov/articles/lost-or-stolen-credit-atm-and-debit-cards
- FTC hacked accounts: https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account ; malware: https://consumer.ftc.gov/articles/how-recognize-remove-avoid-malware
- CISA strong passwords: https://www.cisa.gov/secure-our-world/use-strong-passwords
- FTC fake checks: https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams ; toll texts: https://consumer.ftc.gov/consumer-alerts/2025/01/got-text-about-unpaid-tolls-its-probably-scam
