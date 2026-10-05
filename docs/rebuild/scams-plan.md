# Scams & Social Engineering: key rewrite and unit plan

Written 2026-10-05 against `docs/lesson-standard.md` (version 1, with sections 15 and 16), the audit `docs/comprehension-audit/scams.md`, and the old data `public/subjects/scams/standard0.js`. The new key is `public/subjects/scams/key.js`; the subject record is `public/subjects/scams/subject.js`. No unit is written yet.

## The key in one view

First question, `D1` (Unit One): **What is it asking you to do right now?** Five answers, listed in the order that wins when a request asks for two (yieldsTo): device > access > money > details; the fifth needs none.

| Answer | Family | Then | Names |
|---|---|---|---|
| Install something, open a file, or share your screen | `device` | `I1` How did it come to you? (4 answers, one name each) | Tech-support scam, Refund scam, Malware, Real installation (legit) |
| Sign in, give a code, or allow an app | `access` | `A1` What does it want you to type in or press? (3) then `A2` Does it fit something you started? (2) | Phishing, One-time code scam, App permission scam, Real sign-in (legit) |
| Pay or send money | `money` | `M1` What does the request say the money is for? (6) then `M2` What does it ask you to do with the money? (8) | Pig-butchering scam, Romance scam, Advance-fee scam, Recovery scam, Invoice fraud, Fake official scam, Fake payment link, Overpayment scam, Real payment request (legit) |
| Tell them about yourself | `details` | `F1` What do they want to know about you? (2) then `F2` Does it fit something you started? (2) | Identity theft, Friendly chat before the ask, Real request for details (legit) |
| Nothing: it only tells you something (legit) | `nothing` | no branch | no further name |

Grids (which answers keep which names):

- `A1` × `A2`: password {Phishing, Real sign-in}, code {One-time code scam, Real sign-in}, allow {App permission scam, Real sign-in}; fits {Real sign-in}, notfit {the three scams}.
- `M1` × `M2`: online {Pig-butchering, Romance}, prize {Advance-fee}, lost {Recovery}, bill {Invoice fraud, Fake payment link, Real payment}, official {Fake official, Fake payment link, Real payment}, deal {Overpayment, Fake payment link, Real payment}; site {Pig-butchering}, crisis {Romance}, fee {Advance-fee, Recovery}, newdetails {Invoice fraud}, link {Fake payment link}, rush {Fake official}, sendback {Overpayment}, agreed {Real payment}.
- `F1` × `F2`: identify {Identity theft, Real request}, life {Friendly chat}; fits {Real request}, notfit {Identity theft, Friendly chat}.

Every outcome is isolated by exactly one combination; no question of a two-question branch has every answer keep one name (V55); every question first separates at least one pair (listed under the unit plan). Every question can be answered at the moment of the request, from the message, call or screen itself.

## (a) Key changes (this becomes `build.keyChanges` in the units that teach each step)

### The first question

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| D1 (was G1) | "What is it asking you to do right now? If nothing, what is it about?" | "What is it asking you to do right now?" | The second half sent a notice that asks nothing to the family of what it is about, against the unit's own rule to answer by the ask (audit Unit Seven 4: the security-notice specimen was a guaranteed route miss). A message that asks nothing now has its own answer (K2.9). |
| D1 answers | money, access, install, info (four), any order | device, access, money, details, nothing, in tie-break order | A request that asks for two things now has a tie-break in data (K2.8), and the order of the list is the order of the tie-break, so the list itself teaches it. The refund call (screen-share, then money back) gets the device answer; a fee page that also takes a card number gets the money answer. |
| D1.device | "Put something on your device" | "Install something, open a file, or share your screen" | An answer is what an observer can point to (K2.4): the three things you would actually be asked to do. Its `when` also covers a warning that gives you someone to ring to fix your device, so the tech-support pop-up has an answer at the moment it appears. |
| D1.access | "Give a way into your account" | "Sign in, give a code, or allow an app" | Same reason: three concrete acts, not the abstract "a way into", which the audit found undefined in Unit One. |
| D1.money | "Send money" | "Pay or send money" | Covers paying a bill or fee as well as sending; yields to device and access. |
| D1.details | "Give details, or only chat so far" | "Tell them about yourself" | "or only chat so far" was not something asked. A friendly chat does ask: about your work, home and family. Yields to the three above. |
| D1.nothing | (none) | "Nothing: it only tells you something", `legit: true`, no branch | Real notices (a new sign-in shown in your own app, a delivery update) need somewhere to go (K2.9, P25 requires 5). Its `when` requires that it give no number, link or app of its own, which is exactly what separates it from a copied notice with a button. |

### Install something, open a file, or share your screen (was "install")

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| I1 | "How did the software or access come up?" (I1) then "What happens next?" (I2) | one question: "How did it come to you?" | Every answer of each question kept one name, so the second added nothing (K2.2, audit Unit Three 4), and "What happens next?" could only be answered after the harm (audit Unit Four 4, 5). The branch says it has one question, in its `why`. |
| I1.support | "A warning on your screen told you to call a number" | "Someone offering to fix a problem with your device" | Widened to a call, a message or a search advert offering support, so a fake support number found by searching has an answer (old "Search adverts" card). Yields to the refund answer. |
| I1.refund | "Someone asked to see your screen to sort out a payment" | "Someone sorting out a refund or your bank account" | Also covers the fake bank that wants to see your screen to "protect" the account. |
| I1.file | "A file or link arrived in a message" | "A file or a link in a message, for you to open" | "nobody is on a call with you" in `when` separates it from the support and refund calls that also send files. |
| I1.own | "You went to the company's own website yourself" | "Your own visit to the company's website or app store" | Uses the taught term "a way you already had", so a search advert does not count. |
| fakeupdate → `malware` | "Harmful file (malware)" | "Malware" | Real-life word; "harmful file" goes to `aka`. Brackets are not allowed in a name (V1). |
| techsupport | "Fake virus alert (tech-support scam)" | "Tech-support scam" | The real-life name; "fake virus alert" to `aka`. |
| legit_inst → `realinstall` | "Real software installation" | "Real installation" | Shorter plain words; id without an underscore (V4). |

### Sign in, give a code, or allow an app (was "access")

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| A1 | "What would you be handing over?" (4 answers incl. "Nothing") | "What does it want you to type in or press?" (password, code, allow) | "Handing over" did not fit a real sign-in, where you type your own password into the real site. The "Nothing" answer is gone because a notice that asks nothing now leaves at the first question. Each answer now keeps a scam and the real sign-in. |
| A2 | "What would a real one never do?" (4 answers, one name each) | "Does it fit something you started?" (yes / no) | The old A2 repeated A1 (K2.2), and one answer ("never ask an unfamiliar app standing access") did not fit its own specimen (audit Unit Three 3). The new question is the one thing that separates every real sign-in, code or Allow from its copy, and it can be asked out loud at the moment. Its "No" answer covers both "it came to you" and "it asks for more than you set out to do", so the free CV checker you visited yourself, which wants to delete all your mail, is still an App permission scam. |
| A1.code `yieldsTo` password | (none) | a copied sign-in page that asks for the password and then the code is answered "Your password" | Real pages and copied pages both ask for a password and then a code; the name follows the password. |
| legit_access (Real security notice) | an outcome of this branch | moved to the first question's answer "Nothing: it only tells you something" | It asked nothing, so it never belonged to a branch about what you hand over (audit Unit Seven 4). |
| `realsignin` (new) | (none) | "Real sign-in", legit | The real twin of all three scams: a code you asked for, typed into the site you opened; an Allow for an app you went looking for that asks only what it needs (P26 requires 1). |
| phish → `phishing` | "Fake login page (phishing)" | "Phishing" | Real-life word; "fake login page" to `aka`. |
| otp → `codescam` | "Code read-out scam" | "One-time code scam" | Uses the taught term; "OTP scam" to `aka`. |
| oauth → `appscam` | "App permission trap" | "App permission scam" | One noun ("scam") for the scam names that are not real-life words. |

### Pay or send money (was "money")

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| M1 | "What reason is given for paying?" (5 answers) | "What does the request say the money is for?" (6 answers) | "Money you are told is waiting for you: a prize, an inheritance, or funds you lost" kept both the advance fee and the recovery scam, and nothing linked recovery to "waiting" (audit Unit Two 4, specimen 4). Split into "A prize, an inheritance, a grant or a loan waiting for you" and "Getting back money you lost", with a tie-break (prize yields to lost). The real payment request is now kept by three reasons (a bill, a fine or tax, a deal), because real requests come with all three; the old key kept it only under "a deal". |
| M2 | "What is the odd part of the request?" (8 answers, one name each) | "What does it ask you to do with the money?" (8 answers) | Every old answer kept one name, so M1 did no work (V55). Now "Pay a fee before the money reaches you" keeps both the advance fee and the recovery scam, and M1 separates them. "The odd part" assumed something odd; the real request's answer is now a positive description ("Pay what you agreed or owe, to details that pass the check") instead of "Nothing odd" (audit: the legitimate option was circular). |
| M2.site | "Your profits show only on their own app or site, and you cannot take them out" | "Put it into a trading site or app that they showed you" | The old answer could only be given after money had gone in and a withdrawal failed (audit R8 8). The new one is true from the first deposit. A fee to withdraw from that site is answered `site` (fee yields to site). |
| M2.link (new) and `fakelink` (new) | (none) | "Pay on a page reached from a link in the message" → "Fake payment link" | The most common scam text of all (a parcel fee, a toll, a fine, a lapsed subscription, paid through a link) had no name: the old drill sent it to "Send money" and stopped (old W1 item 2), and its feedback contradicted Unit Five. Its real twin is in the old drill (W2 item 13: the same charge found in the courier's own app). Kept by the bill, official and deal reasons. |
| M2.rush | "You must pay right now, in a way that cannot be undone" | "Pay at once, in a way that cannot be undone, and tell no one" | Names the methods (gift cards, crypto, cash, a transfer to an account they give you) and the secrecy. Hurry and secrecy appear in many money scams, so `rush` yields to every more specific answer (site, crisis, fee, link, sendback); it is the answer only for the fake official, where nothing more specific shows (audit Unit Two 6: the old card claimed "the three levers, in every one of them"). |
| M2.agreed | "Nothing odd: you started it, nothing changed, and you can check it" | "Pay what you agreed or owe, to details that pass the check" | Says what the real one does, in the taught term "the check" (audit finding 7: the real twin described only by what it is not). |
| M1.official `yieldsTo` prize; M1.deal `yieldsTo` online | (none) | tie-breaks | A "tax refund waiting, pay a fee" message is an advance-fee scam, not a fake official; an "investment" from an online friend is not a deal you started. |
| bec → `invoicefraud` | "Changed bank details (invoice fraud)" | "Invoice fraud" | Real-life name; the rest to `aka`. |
| authority → `fakeofficial` | "Fake official demanding payment" | "Fake official scam" | One noun for scam names; "impersonation scam", "safe account scam" to `aka`. |
| pigbutcher | "Fake investment friend (pig butchering)" | "Pig-butchering scam" | The real-life name the learner meets in news (K4); the old name was the app's own coinage; "investment scam" to `aka`. The word is explained in the sentence that gives the name (K6). |
| advfee, overpay | "Fee to unlock a payout (advance fee)", "Overpayment trick (fake buyer)" | "Advance-fee scam", "Overpayment scam" | Real-life names, no brackets (V1). |
| legit_money → `realpayment` | "Real payment request" | unchanged name, new id, new `needs` | Id without an underscore. |

### Tell them about yourself (was "info")

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| F1 | "What are they collecting?" (3 answers, one name each) | "What do they want to know about you?" (2 answers) | Every old answer kept one name and F2 did the same (K2.2). Now "Facts that identify you" keeps both the scam and the real request, so the second question has work to do. The card-number request the audit could not place (W5 item 4) is now named in the answer. |
| F2 | "Who started it, and why do they need it?" (3 answers, one name each) | "Does it fit something you started?" (yes / no), the same wording as A2 | The old F2 bundled two questions. The new one is the question Unit Three teaches, asked of a request for facts; its "No" covers "they contacted you" and "it asks for more than the reason needs", which is the old card's "Does the reason need the details?" test, now a key answer (audit Unit Five 5). |
| identity → `identitytheft` | "Identity grab (identity theft)" | "Identity theft" | Real-life name. |
| recon → `friendlychat` | "Friendly chat before the ask" | unchanged name, new `needs` | Its `needs` now requires someone known only through messages who reached you by chance, so a friend from your club is outside the key (subject limits) and the conference contact the audit flagged (W5 item 2) is answerable. |
| legit_info → `realdetails` | "Real request for details" | unchanged name, new id | Id without an underscore. |

### Terms and words to avoid

- New terms (Unit One): "a way you already had" (the audit's ten phrasings of the defence and four meanings of "route" become one taught phrase; a number that came with the message never counts, even if you dial it), "the check" (stop, and contact them yourself through a way you already had), "one-time code", "permission screen", "screen-sharing". Unit Two: "search advert".
- `avoid`: the old jargon the audit listed (credential, verify, legitimate, genuine, spoofing, payload, mechanism, giveaway, executable, liveness, scopes, consent screen, second factor, irreversible, isolation, urgency, foothold, pretext, harvesting, interception, odd part, falsify) and the standard's own (deciding feature, provisional, the rule). "Route" is not avoided: it is the app's word for a learner's answers (K9), and its other old meanings are replaced by "a way you already had".

## (b) Unit plan

Order: the gate unit, then the four branches in the key's order, which runs from the simplest branch (one question) to the largest (two questions, nine names), with the shared question "Does it fit something you started?" taught in Unit Three before Unit Four's "pass the check" and Unit Five's reuse of it (audit R7 14: no build-up). Then one fact unit. Every unit is an action-subject unit: a legit case in every case stage (V37), four return cases per name (V44, E9), a `plan` card (V25).

The app shows the old unit at each position until it is rebuilt (`state.js` maps by position while nothing is rebuilt). **When Unit One is rebuilt, the old course entries in `standard0.js` must be given ids by this map, or the app throws:** old One → (replaced by u1, remove), old Two → `u4`, old Three → `u3`, old Four → `u2`, old Five → `u5`, old Six → `u6`, old Seven → `u7`.

### u1 · kind C, gate unit (A15) · "What it is asking you to do" (`title: { text }`)

- Teaches: step `D1`; families `device`, `access`, `money`, `details`, `nothing`; terms `already`, `check`, `code`, `permission`, `screenshare`. Assumes nothing.
- Parts (A13: one per pair of families, then the questions): (1) the check and a way you already had, then `nothing` (the real notice, first, so the learner meets the real thing before any scam); (2) `access` and `device` (terms code, permission, screen-sharing before them); (3) `money` and `details`; (4) the question card, worked cases, drill, close.
- Ledger (families): `access~nothing` (a copied notice with a button against the real notice with none: the same words; lookalike card, same company and same story), `device~access` ("allow this app to make changes to your device" against "Allow, so that an app can use your account"; lookalike), `money~details` (pay a £1.99 fee against "confirm your card number, nothing will be charged"; lookalike), `details~nothing` (a stranger's chat against a notice; taughtIn the question card), `device~money` (exception with the tie-break: the refund call, screen-share first, money back later), `access~money` (exception with the tie-break: "sign in to your bank to pay the fine").
- Refute (P29), not in the first three cards: "Scam messages are full of spelling mistakes" (old claim 1); "Only careless people are caught" (old claim 6). Sources to find and verify (V22).
- Claims for the `claim` stage (asked of D1): old claims 1 (perfect writing) and 10 (he was so polite), each rewritten with the situation in `context`.
- Baseline (E21), six cases with `use: 'baseline'` in this unit's collection, then listed in `subject.baseline`: three real (a new sign-in shown in your own banking app, `nothing`; a tiler's invoice that matches her quote, `money`; a code you asked for, typed into the site you opened, `access`) and three scams (a parcel fee through a link, `money`; a caller who wants the code, `access`; a refund caller who wants to see your screen, `device`).
- Replaces old Unit One (all its cards), the old W1 drill, the old "Real ones that look like scams" card (now the `nothing` family and the lookalikes), and the "check" half of old Unit Two's counter-move card.

### u2 · kind C, branch · title from key `D1.device`

- Teaches: step `I1`; outcomes `techsupport`, `refundscam`, `malware`, `realinstall`; term `searchad`. Assumes `u1`.
- One question, so no `separator` items; every answer leads to one name, which the question card says once (E2).
- Parts: (1) `realinstall` then `malware` (the installer box is the same on both; what differs is how it came); (2) `techsupport` (term card for search advert before it) then `refundscam`; (3) question card, worked cases, drill, close.
- Ledger: `malware~realinstall` (lookalike), `techsupport~refundscam` (lookalike: both want to see your screen; one is about the device, one about money), `techsupport~realinstall` (exception: you searched for the company yourself and rang the advert's number; looks like your own visit, is the tech-support scam), `techsupport~malware` (taughtIn the question card). Tie-break taught: support yields to refund.
- Pairs first separated by I1: every pair, since it is the branch's only question.
- Refute: "A warning that will not close must be real" (a page that fills the screen is only a web page). Claim: old claim 8 (I found the helpline number with a search).
- Replaces old Unit Four (all its cards; "Words you need" becomes term cards and portraits), the old W4 drill, specimens 13 to 16.

### u3 · kind C, branch · title from key `D1.access`

- Teaches: steps `A1`, `A2`; outcomes `phishing`, `codescam`, `appscam`, `realsignin`. Assumes `u1`, `u2` (for the earlier-unit items).
- Parts (by A1's answers): (1) password: `realsignin` (the real one first), then `phishing`; (2) code: `codescam`; (3) allow: `appscam`; (4) the two question cards, worked cases, drill, close.
- Ledger: `phishing~realsignin`, `codescam~realsignin`, `appscam~realsignin` (the three twins; lookalike cards that keep the same person and service, so only "who started it" differs), `phishing~codescam` (exception with the tie-break: a copied page that asks for the password and then the code), `phishing~appscam` and `codescam~appscam` (taughtIn the A1 question card).
- Pairs first separated: A1 separates the three scams from each other; A2 separates each from the real sign-in.
- Refute: "The padlock means the site is safe" (old claim 3), "It came in the same thread as my bank's real texts" (old claim 2).
- Separator items: `phishing~realsignin` (only A2 separates it), `codescam~appscam` (only A1).
- Replaces old Unit Three (all its cards; "What stops what" becomes the portraits' `typical` and `ask` lines), the old W3 drill (items 4 and 8 move to u1 as `nothing` cases), specimens 9 to 11 (12 moves to u1).

### u4 · kind C, branch · title from key `D1.money`

- Teaches: steps `M1`, `M2`; outcomes `pigbutcher`, `romance`, `advancefee`, `recovery`, `invoicefraud`, `fakeofficial`, `fakelink`, `overpayment`, `realpayment`. Assumes `u1`, `u3` (for "pass the check" and the shared question's idea).
- **One unit, not the paired units of section 11.** V16 requires every answer of a question to keep an outcome whose `meet` card is in the same unit before the question card, and every answer of `M2` keeps a different name, so the unit that teaches `M2` must teach all nine. Splitting the branch across units would need a branch whose questions each belong to a different unit, which no route could finish. The split the section asks for is kept as parts.
- Parts (A13, by M1's answers): (1) someone you know only online: `romance`, `pigbutcher`; (2) money waiting or lost: `advancefee`, `recovery`; (3) a bill, a fine or a deal: `realpayment` (first, so the real thing is met before its three copies), `invoicefraud`, `fakelink`, `fakeofficial`, `overpayment`; (4) the two question cards, worked cases, drill, close. A `term`-free unit; it leans on "a way you already had" and "the check" from u1.
- Ledger (keeps-together pairs): `pigbutcher~romance`, `advancefee~recovery`, `invoicefraud~realpayment`, `fakelink~realpayment`, `fakeofficial~realpayment`, `overpayment~realpayment` (lookalike cards; the four real-or-fake twins keep the same person and story), `invoicefraud~fakelink`, `fakeofficial~fakelink`, `overpayment~fakelink` (taughtIn the M2 question card). Confused pairs with tie-breaks, as exception cards: `pigbutcher~advancefee` (a fee to withdraw your profits: fee yields to site), `advancefee~recovery` exception as well (recovered money "waiting to be released": prize yields to lost), `advancefee~fakeofficial` (a "tax refund" that needs a fee first: official yields to prize).
- Pairs first separated: M1 separates across the reasons (and advance fee from recovery); M2 separates the twins and pig-butchering from romance.
- Separator items: `pigbutcher~romance` (M2 only), `advancefee~recovery` (M1 only).
- Refute: "My bank would have stopped it if it were a scam" (old claim 9: a payment you send yourself goes through). Claim: old claim 5 (registration number and certificate).
- Replaces old Unit Two (all its cards; "Hurry, secrecy and no checking" becomes the `rush` question-card content and portraits), the old W2 drill, specimens 1 to 8. Size: about sixty cards and forty-five drill items, with thirty-six return cases (nine names × four). That is what nine names need; there is no cap (section 3).

### u5 · kind C, branch · title from key `D1.details`

- Teaches: steps `F1`, `F2`; outcomes `identitytheft`, `friendlychat`, `realdetails`. Assumes `u1`, `u3`, `u4` (earlier-unit items; the F2 question card restates that it is the question Unit Three taught, asked of facts).
- Parts: (1) `realdetails` then `identitytheft` (same facts asked, one fits, one does not); (2) `friendlychat`, and how it turns into the online-only reason of Unit Four; (3) question cards, worked cases, drill, close.
- Ledger: `identitytheft~realdetails` (lookalike: the job you applied for asking for your passport after the offer, against before any contract with a photo of you holding it), `identitytheft~friendlychat` (lookalike), `friendlychat~realdetails` (taughtIn the F1 question card).
- Separator: `identitytheft~realdetails` (F2 only), `identitytheft~friendlychat` (F1 only).
- Refute: "They knew my name and address, so they were real" (old claim 4), "She has chatted for weeks and never mentioned money" (old claim 7).
- Replaces old Unit Five (all its cards; "Does the reason need the details?" and "Who started it?" become the F2 question card, the second already a term card in u1), the old W5 drill, specimens 17 to 19.

### u6 · kind F, fact unit · "If it has already happened" (`title: { text }`)

- Teaches no step and no outcome (A12). `orient` says it is facts to hold, and why: in the first hours some losses can be stopped.
- Concepts and their facts (one `concept` card, one `facts` card, one check per row): (1) money sent (who to ring, on which number, what to say, how fast, report and keep the messages); (2) a way in given (a password typed into a copied page, a code read out, an app allowed: what to change, where to remove an app, why a new password does not remove an app); (3) software installed or a screen shared (disconnect, uninstall, change passwords from another device, ring the bank); (4) papers or numbers sent (tell the bank, a fraud warning on your credit file, watch your accounts); (5) the second scam (anyone who contacts you offering to get it back). Each `facts` card's rows have different answers (V57), and the ledger pairs the rows people swap (changing a password against removing an app).
- Replaces old Unit Six's "If it has already happened" card, the old caveat of the same name, and the `wouldChange`-style "what to do" text of the old specimens. Old Unit Six's ten beliefs become refute cards and claims in u1 to u5, as listed above (F6: faulty claims folded into unit drills).

### u7 · not a unit of the plan

The old "Putting it all together" unit, listed in `subject.units` only so the old course keeps its seven units while `standard0.js` is in place. Its job is done by the worked cases in every unit and by the determination (E13) over the re-keyed specimens. Remove `u7` from `subject.units` in the commit that deletes `standard0.js`.

## (c) Every old specimen, run against the new key one question at a time

D1 is the first question; the branch questions follow. "Keeps" means the case keeps its old name; "Rewrite" lists what the new `cues`, `reason` and text need.

| # | Old name | D1 | Branch | New name | Verdict |
|---|---|---|---|---|---|
| 1 | Fake investment friend | money ("pay a 20% deposit before release") | M1 online ("You matched four months ago", "the trading platform her uncle runs"); M2 site, `also: ['fee']` (fee yields to site) | Pig-butchering scam | Keeps. Rewrite: dollars to pounds (audit LOW 13); the `also` is taught by the pig-butchering~advance-fee exception. |
| 2 | Romance scam | money ("asking you … for £4,000") | M1 online ("Eight months of daily messages"); M2 crisis ("the video never connects", "daughter … in hospital") | Romance scam | Keeps. |
| 3 | Fee to unlock a payout | money ("probate duty of £3,400") | M1 prize ("traced heir to £2.1m"); M2 fee ("released once … settled") | Advance-fee scam | Keeps. Rewrite: "intestate", "probate duty", "traced heir" into plain words. |
| 4 | Fake recovery service | money ("a £2,500 retainer") | M1 lost ("Ten months after you lost money"); M2 fee | Recovery scam | Keeps; the audit's unsupported M1 cell is fixed by the new "Getting back money you lost". |
| 5 | Changed bank details | money ("please use these from now on") | M1 bill ("Your builder has invoiced monthly"); M2 newdetails ("moved them to a new bank — details attached") | Invoice fraud | Keeps. Rewrite: the ask must read as a payment ("pay this month's invoice into the new account"), not only "use these details" (audit W1 item 6). |
| 6 | Fake official demanding payment | money ("buy the vouchers") | M1 official ("an officer of the tax authority", "a warrant"); M2 rush ("officers will attend today", "not to discuss it with staff") | Fake official scam | Keeps. |
| 7 | Overpayment trick | money ("send the £640 difference") | M1 deal ("the £600 camera you listed"); M2 sendback | Overpayment scam | Keeps. |
| 8 | Real payment request | money ("deposit payable") | M1 deal ("The letting agency you approached", a tenancy); M2 agreed ("a client account registered with a deposit protection scheme whose number you can check", "the office number matches the one on the listing you found independently") | Real payment request | Keeps; M1 "bill" does not fit (nothing paid yet), so the audit's steer to "routine business payment" is gone. |
| 9 | Fake login page | access ("secure your account now" with a button that opens a sign-in page) | A1 password; A2 notfit (it came in a message) | Phishing | Keeps. Rewrite: the page must be shown asking for the password in words, so A1 has marked words. |
| 10 | Code read-out scam | access ("he needs the six-digit code") | A1 code; A2 notfit ("A caller from your bank's fraud team") | One-time code scam | Keeps. It is not money: he asks for a code, not a payment. |
| 11 | App permission trap | access ("allow … permanent permission") | A1 allow; A2 notfit ("A shared document notification leads to", and far more than opening a document needs) | App permission scam | Keeps; the audit's unsupported A2 cell ("fix your account") is gone. Rewrite: "consent screen", "scopes" are on the avoid list. |
| 12 | Real security notice | nothing ("no link, nothing to confirm … an entry in a list of sessions you can end yourself") | none | none: the family `nothing` | **Cannot stay a specimen**: a specimen needs an outcome (S6), and this answer has no branch. It becomes a Unit One case of the `nothing` family (a good baseline case). |
| 13 | Fake virus alert | device ("asks you to install a remote-support tool") | I1 support ("A page opens full-screen with an alarm tone … displays a support number") | Tech-support scam | Keeps; the old unanswerable I2 is gone. |
| 14 | Harmful file | device ("a file to run") | I1 file ("sends a 'technical assessment' as a file"; nobody on a call) | Malware | Keeps. |
| 15 | Refund scam | device ("install a support tool"), `also: ['money']` ("send back the difference"); device wins by the tie-break | I1 refund ("you are owed £48 for an outage") | Refund scam | Keeps; this is the u1 exception case for device~money. |
| 16 | Real software installation | device ("download the installer") | I1 own ("a site you navigated to yourself", nobody on the phone) | Real installation | Keeps. Rewrite: "navigated to yourself" must say typed or bookmarked, because a search advert does not count. |
| 17 | Identity grab | details ("upload a passport scan, your national insurance number …") | F1 identify; F2 notfit ("Before the contract is issued", a photo holding the passport, "a domain registered last month": more than the reason needs) | Identity theft | Keeps, as a misleading case: you did apply, so it is the "asks for more than it needs" half of the answer. |
| 18 | Friendly chat before the ask | details (the chat is about "your work, your city, your weekends") | F1 life ("from an unknown number: sorry, wrong contact"); F2 notfit | Friendly chat before the ask | Keeps. Rewrite: the text says "Nothing has been asked for", which pulls toward `nothing`; the questions he asks must be in the text as his words, so D1 has marked words. |
| 19 | Real request for details | details ("confirm details from your own account to identify you") | F1 identify; F2 fits ("You rang the number on the back of your card") | Real request for details | Keeps. |

Result: 18 of 19 re-key with a defensible answer to every question; #12 moves to Unit One. Every specimen still needs new `cues` and `reason` for every question, `not`, and `wouldChange` (S6), and V52 (no specimen shares a topic with a unit case of its name) will force new topics or new unit cases. Two names have no old specimen and need new ones: Real sign-in and Fake payment link. F6 asks for specimens "re-keyed and rewritten as new cases"; the routes above are the re-keying.

### The old drill items and claims, briefly

- W1 (the ask): items 1, 2, 3, 4, 5, 7, 8, 9, 10 get the same family; item 6 (a notice inside your email app that asks nothing) changes from access to `nothing`. Item 2 (toll fee at a link) now has a name: Fake payment link (M1 official, M2 link). Item 9 (SlotBook) needs rewriting so that "more than the task needs" is visible.
- W2 (money): all thirteen keep their names; items 8, 9 and 13 are Real payment request under M1 deal (13 is the twin of Fake payment link: the same £6.20 charge found in the courier's own app).
- W3 (access): items 1, 2, 3, 5, 6, 7 keep; items 4 and 8 (notices that ask nothing) move to the `nothing` family. Item 3 (a CV checker you visited yourself) is an App permission scam by the "asks for more" half of A2.
- W4 (device): all eight keep.
- W5 (details): all nine keep; item 6 (a gym front desk) needs "the company's own office in person", which the term "a way you already had" now includes; item 9 (rang back on the number on the policy) is Real request for details.
- Old claims 1 to 10 are placed above under the unit that asks them; claims 6 and 7 become refute cards.

## (d) Gaps the units will hit

1. **Money cannot be split into paired units** (V16, explained under u4). Section 11 of the standard asks for "paired units"; the key's two-question branch makes that impossible without breaking routes. The standard's note should be corrected to "parts".
2. **A first-question answer with no branch cannot be a specimen.** S6 requires a specimen to have an `outcome`, so the determination (E13) can never show a message that asks nothing, though telling the real notice from the copied one is a core skill. Psychology's "A passing moment" has the same gap. The `nothing` family is practised only in Unit One's drill, returns and the baseline.
3. **u6 would be the first real fact unit.** F6 puts Civics' fact unit first as the exemplar of that kind, after Scams. Either u6 is read cold as the fact-unit exemplar, or it waits until Civics' is. Also unsettled: whether the action subject's 12-week return (E9) applies to fact rows, and whether a fact unit in an action subject needs a `plan` card (V25 says a plan card closes the unit if `subject.action`; A12 says a fact unit closes with `recap` only).
4. **Cross-unit look-alikes have no home.** Some of the most likely confusions are between names in different branches: Overpayment scam and Refund scam (both "send back the difference"), One-time code scam and Fake official scam (both "your bank's fraud team"), App permission scam and Real installation (both "Allow"). A ledger entry pairs two outcomes of one unit (S3, V14), so only the family-level pair (`device~access`) can be taught in u1. A later unit cannot name an outcome taught by an assumed unit in a lookalike card.
5. **No field for what to do.** P26 and the audit want a per-name counter-move ("ring the number on your contract before paying new details"). The `portrait` card's `ask` is "the question to ask when you spot it", not an action, and `plan` cues are the learner's own. Until the standard adds one, the counter-move goes into `portrait.typical` and the `plan` card's example cues, and u6 holds the after-the-fact steps.
6. **The legacy course is matched by position now and by id later.** `state.js` maps old units by position while nothing is rebuilt and by `id` once anything is; the old scams entries have no ids. Whoever rebuilds u1 must add the ids listed under the unit plan, in the same commit, or the app throws at load for every subject.
7. **Baseline not listed yet.** `subject.baseline` must name existing case ids (V0), so it waits for u1's case file.
8. **The lock.** `node tests/validate-lessons.mjs` reports `V46 scams: no lock entry`. The lock file is under `tests/`, which this pass may not touch; `node tests/lessons/lock.mjs` adds it.
9. **V2 and V8 will be strict on ordinary words.** Outcome names that are ordinary words ("Phishing", "Malware", "Real installation") and the term "the check" may not be typed in any card, ledger line or feedback; they must be tokens. "The check" also matches "the checkout" as a substring. The `aka` "virus" means no card may say "virus" outside quotation marks or a case's text.
10. **One question, two steps.** A2 and F2 have the same question and answer wording on purpose (one meaning, one wording, K9). The engine treats them as separate steps, so "Taught on" links, results and returns count them apart; a learner who has mastered A2 meets F2 as new. That is acceptable but untested: no subject has done it before.
11. **`rush` yields to five answers.** Hurry and secrecy show up in most money scams, so most money cases will list `also: ['rush']`, and the generated "You chose … It also shows …" line will appear often. The M2 question card's `whenBoth` must teach this, with one exception card.
12. **Gate-unit rules are partly unwritten** (standard section 8: V11 to V15, V20 to V24, V35, V39, V44 for families), so u1's family coverage will be checked only by the cold read until they are.
