# Scams & Social Engineering - comprehension audit

Audited 2026-10-04 against `public/index.html` lines 2023-2485 (subject data) plus the engine at 3480-3560 and 3900-4170. Line numbers below are for that file as it stands (4,531 lines). The lesson text, key and drills were read in full; the rendered app was driven at 360px wide (cards, tables, determination screen) to confirm what the learner actually sees. Nothing under `public/` was edited. Quotes are verbatim except that em dashes are written as hyphens, HTML tags are removed, and where a table cell and its monospace "tell" are quoted together they are joined with a full stop.

Rubric tags: R1 orientation, R2 concept before label, R3 one vocabulary, R4 bridge to application, R5 practice alignment, R6 feedback quality, R7 sequencing and load, R8 transfer, R9 compression.

## Verdict

It does not teach and then apply. The 22 lesson cards (1,895 words) give each of the 15 scam patterns about 21 words and a six-word "tell", and then a 19-case capstone scores the learner on a route through nine questions (39 options) that no card ever asks in those words and no card ever walks a case through. Four causes explain almost everything. (1) The teaching is compressed into table rows while the real explanation (1,264 words of specimen why/fals, 685 of drill feedback) only arrives after the learner has committed to an answer. (2) The lessons teach pattern names but the key asks other questions in other words ("What story carries the ask" right after Unit 1 said to ignore the story; "What the genuine version of this never does"; "What happens once it is in"), and in three of four branches the second question is redundant. (3) The legitimate twin of each category (4 of 19 outcomes, 4 of 19 specimens) is never taught, and the course tells the learner the thing it scores is optional. (4) One concept carries many names (route has four meanings, "verify" has ten phrasings, the four options of one question are labelled G1-G4) and the authored orientation (`intro`, `determinationIntro`) is never rendered. Measured: 21 of 52 practice items cannot be answered and justified from the preceding cards (14 wording-gap, 7 unsupported); only 6 of 19 specimens have every route step licensed.

## Findings by unit

Severity: HIGH means a newcomer cannot get through that point without outside knowledge or guessing; MED means they get through confused or having learned the wrong thing; LOW is friction. Each finding gives the evidence, why it blocks learning, and what the reader needs instead.

### Whole course (applies before and across units)

1. **[R1 · HIGH]** The subject `intro` (2445) and `determinationIntro` (2448-2457) are authored but never rendered. Grep finds no code that reads either, and in the running app the determination screen opens with "DETERMINATION / SPECIMEN 01 / 19" and the passage, nothing else. So the only explanation of how the key works (Step 1 is the ask, Steps 2-3 are branch questions, Step 4 names it, the strip is "a readout, not a control", route is scored) is invisible. What the learner needs: a visible "how this works" before Unit 1 and again before the first specimen, in the same words the screen then uses.

2. **[R1 · HIGH]** The course opening is not honest about the key. Unit 1 tells the learner "the story is the part you should ignore first" (2311), and the key's first branch question for money is "M1 - What story carries the ask" (2060) with five story options (2061-2065). The course teaches one question (the four asks) and previews none of the other eight (M1, M2, A1, A2, I1, I2, F1, F2). The reader needs, up front: "this key asks three questions in a row; here is the first, and the next two depend on your answer".

3. **[R4 · HIGH]** No card anywhere walks a case through the key. There is no worked example of the form "Step 1: they want me to do X, so I choose this option; Step 2 asks Y, I choose this option because..., which leaves one candidate; so the name is Z". The first time the learner meets a case run through steps is by being scored on it (Unit 7, 2439). What the reader needs: at least one fully worked case per branch, shown with the exact option text they will later have to tap.

4. **[R5 · HIGH]** The key's questions are almost never taught. Of 9 key questions (G1, M1, M2, A1, A2, I1, I2, F1, F2) only A1's label is echoed in a card (2360); G1, I2, F1 and F2 are touched only loosely; M1, M2, A2 and I1 are met for the first time inside the scored capstone. The answer options fare better because they echo table cells: of 39, 21 are near-verbatim, 11 partial and 7 not taught (see "Key-wording coverage"). The cards teach what each scam looks like, not which question separates it from its neighbours.

5. **[R9 · HIGH]** The teaching is compressed and the explanation is in the feedback. The four cards that define the 15 scam patterns (2336-2345, 2361-2367, 2384-2389, 2406-2411) total 322 words, about 21 words per pattern. The 19 specimens' `why` plus `fals` total 1,264 words (about 66 per specimen) and the 26 drill `w` plus 7 claim `w` total 685. Feedback therefore carries 1,949 words against 1,895 in all lesson cards. In other words, more explanation arrives after the learner commits than before it. The owner's complaint ("using only 2 phrases to explain something when you need 2 paragraphs") is measurable here: every pattern is a 7-word definition plus a 6-word monospace tell.

6. **[R3 · HIGH]** "Route" has four meanings. (a) Scoring: "a right label reached by the wrong route counts as a miss" (2312, 2437, engine stat "Route" 4101). (b) How you arrived at a page: "The route is the tell" (2363), "The whole route forward is inside their message" (2159). (c) The defence: "Use a route you already had" (2350), "a route you chose" (2287), "only a route you initiated is" (2196). (d) A way in: "Three routes in" (2384). A learner who reads "route" in Unit 1 as a path through questions will misread Unit 3 and Unit 2. Reader needs one word per meaning.

7. **[R2 · HIGH]** The four legitimate outcomes are never taught as categories. Unit 2 has seven patterns for eight money outcomes (2336-2345), Unit 3 "Three mechanisms" for four (2360), Unit 4 "Three routes in" for four (2384), Unit 5 "Two shapes" for three (2406). The missing one in each is the legitimate twin, which is 4 of 19 outcomes and 4 of 19 specimens, and Unit 7 says "Getting those right matters as much as the rest" (2436). The learner meets "Legitimate payment request" and "Legitimate security notice" for the first time as drill options. Reader needs, per category, a card describing the genuine version in positive terms (what it does, not just what it never does).

8. **[R8 · HIGH]** The key cannot be used in the moment it is meant for. Unit 1 says the ask to classify is "what you are being invited to do in the next sixty seconds" (2323), "the ask you can still refuse". But later key questions ask about things that have not happened yet: I2 "What happens once it is in" (2099), M2 "withdrawals stall" (2068), F2 "A verification step, before anything real has happened" (2113). A person facing a real call can answer G1 and sometimes the first branch question; they cannot answer the second. Reader needs the course to say which questions can be answered at the moment of the ask and what to do with only those.

9. **[R8 · HIGH]** There is no in-the-moment checklist and no per-pattern "what to do". The defence is two short paragraphs (2350-2351). The most actionable text in the subject, "contact your bank immediately - payment recall is sometimes possible within hours ... report it ... preserve the messages" (2482), sits in the caveats screen reached from "Where this key stops", not in any unit; per-pattern verification advice ("Ring the number on the original contract", 2233; "Close the tab", 2273) sits in specimen `fals`, shown last in the capstone.

10. **[R6 · MED]** The best application text is in `fals`, shown under the engine's default label "What would falsify this reading" (4168; scams sets no `falsLabel`, unlike Basic Math at 1523, which sets "What would change the tool"). "Falsify" is a statistics word. The content beneath is practical advice ("Hang up and ring the number on your card", 2303). The label tells the learner it is a refutation of their reading, not "what to do".

11. **[R3 · MED]** The subject screen's key blurb reads "3 questions narrow 19 tools to one. 19 unlabelled cases." (engine 3895-3901, shown at 3828 on the subject index). "Tools" is the Basic Math vocabulary (1526, "name the tool last"), carried over by the shared engine; here the learner is naming patterns of fraud, called "pattern" (2311), "mechanism" (2359), "shape" (2165), "category" (2358), "routes in" (2384), and "scam" (outcome names).

12. **[R3 · MED]** Row letters A-G (Unit 2), A-C (Units 3 and 4) and A-B (Unit 5) are restarted per unit and collide with the key's codes: "A" in Unit 3 means Credential phishing (2363) while "A1" in the key is a question (2079). The caveats cross-refer by letter ("Unit Two, pattern D", 2482). The row letters are 9.5px grey (CSS `table.k th`), nearly invisible, yet are the only handle the text offers. Reader needs names, not letters.

13. **[R7 · LOW]** Currency and place are mixed: "$500 ... $60,000" in specimen 1 (2210), "£4,000" in specimen 2 (2215), "national insurance number" (2130). A newcomer has to decide whether the case applies to them before they can classify it.

14. **[R7 · MED]** There is no build-up from simple to hard. The largest and only two-stage branch (money: 8 outcomes, 5 M1 options and 8 M2 options) comes directly after the four-asks unit, before the learner has practised any key question beyond G1; the three branches that follow have 3 or 4 outcomes each and effectively one question. The units are ordered by the key's branches, not by difficulty, and the second question changes kind from branch to branch (a story, what leaves your hands, how the need appeared, what is being collected).

### Unit One - The current ask (2307-2329)

1. **[R1 · HIGH]** Card 1 (2309-2312) opens "The stories are infinite and cost nothing to replace." It never says what the learner will be able to do after the course, what a "key" or a "determination" is, or how the four asks connect to what follows. The only instruction it gives is a scoring rule: "a right label reached by the wrong route counts as a miss. If you cannot say which ask you were answering, you have recognised a story" (2312). "Label" and "route" have not been defined yet. Reader needs: a plain statement of the skill (look at a message, say what it wants you to do right now, and from that, which kind of fraud or legitimate request it is), a preview of the sequence, then the rule.

2. **[R2 · MED]** Undefined in Unit 1: "a credential" (2311, 2316), "one-time code" (2316), "app permission" (2316), "screen-share" (2317, 2321), "a foothold on your device" (2311), "surfaces" (2310). The key's first question depends on "credential". The first plain explanation of a one-time code is in Unit 3 (2370) and of an app permission in Unit 3 (2373). A smart adult newcomer cannot tell what "Hand over a credential" would cover.

3. **[R3 · MED]** The table rows are labelled G1, G2, G3, G4 (2315-2318). In the key, G1 is the single question and the four asks are its options (2047-2056); there is no G2-G4. The learner sees "G1 - What is it asking you to do right now?" on the determination screen and has been taught that G1 means "Move money".

4. **[R3 · MED]** Four names for the same four things: "your money, a credential, a foothold on your device, or information" (2311); "Move money / Hand over a credential / Let something onto your device / Give information, or nothing yet" (2315-2318); "money, a credential, device access, or information" (2444-2445); unit titles "Money moved by you", "Credentials and codes", "Access to your device", "Information, and nothing yet" (2331, 2356, 2379, 2401). Card 1 also says "only four things a stranger can want" (2311) but the fourth option is "or nothing yet", which is not something wanted.

5. **[R9 · MED]** The four-asks table (2314-2319) is 70 words and is the only place the four categories are defined. Each slogan needs an example and a reason: "Survives being noticed - access persists after the conversation ends" (2316); "Converts one contact into standing access" (2317); "The stage most often mistaken for safety" (2318); "The only one where the loss is immediate and usually final" (2315). A newcomer still would not know why a credential survives being noticed, what "standing access" is, or why "only conversation" counts as an ask. The `tell` slot (11.5px mono) is used for consequences here but for diagnostic signs in Unit 2.

6. **[R4 · HIGH]** The unit never walks a case through G1. Card 3 (2320-2323) gives one example (a refund screen-share) and one rule (classify the ask in the next sixty seconds) but not the step "so on the screen you tap 'Let something onto your device' because...". Four more cases would be needed before the drill, one per option, at least one showing the temptation to answer by goal.

7. **[R5 · HIGH]** W1 item 6 (2132-2133) keys "says their bank has changed and attaches updated details" to "Move money". The unit's own rule says classify the current ask, not the goal (2323), the current ask is to update details, and "an attachment" is listed under device (2317). Invoice redirect is first taught at 2342. Unsupported; the feedback "A payment ask wearing routine clothing" (2133) is a new idea.

8. **[R6 · MED]** W1 item 2 feedback (2125): "the point is the card details you enter to pay it. It still enters as a payment ask." This tells a learner who has just been told to ignore the goal (2323) that the goal is the card details, and it is later contradicted by W5 item 4, where asking for a card number is "Identity harvesting" (2188-2189). Reader needs a sentence that distinguishes "pay a small fee" (a payment) from "confirm your card number" (information).

9. **[R6 · LOW]** W1 feedback introduces new words: "outcome they want" (2123), "the documents are the take" (2131), "The rapport is the product being built" (2129), "A payment ask wearing routine clothing" (2133). The card word was "goal" (2323).

10. **[R2 · MED]** "Smishing" and "vishing" (2326) are named only to be dismissed and never defined. "Spoofed sender IDs, cloned websites, correct logos and synthesised voices" (2327) are used as if known. "Spoofed" recurs at 2196 and 2425 without a definition.

11. **[R7 · LOW]** Card 1 refers to "The frozen tax refund, the offshore engineer, the parcel fee, the recruiter" (2310) as known stories. "Frozen tax refund" appears nowhere else in the subject; the others are first seen in W1 and the specimens.

12. **[R8 · MED]** The unit ends with classification only. For each ask it should say what the learner does next. The only action is in card 3's final sentence ("what you can still refuse") and the counter-move that arrives in Unit 2 (2350).

13. **[R5 · LOW]** The question is phrased three ways: gate "What is it asking you to do right now?" (2047), W1 prompt "What is being asked for right now?" (2460), card "Name the step in front of you" / "what you are being invited to do in the next sixty seconds" (2323). W1 options use the key's "Give information - or nothing yet" (2120); the card says "Give information, or nothing yet" (2318).

### Unit Two - Money moved by you (2331-2354)

1. **[R1 · MED]** The lead (2334) opens with a generalisation: "In almost every pattern here, the victim makes the payment themselves." No statement of what the learner will be able to do, and no link to the key's M1 and M2. The unit title "Money moved by you" does not match the gate option it serves, "Move money".

2. **[R9 · HIGH]** Card 2 (2336-2345) defines seven separate frauds in 119 words, about 17 words each. Example: "Investment grooming - returns exist only inside their platform. The small successful withdrawal is bait, not evidence." A newcomer would not know what the platform is, why returns appear, why the small withdrawal works, where the "tax" in W2 item 1 comes from, or how this differs from Romance (which also starts with months of messages). Each of the seven needs its own card or at least its own paragraph: a short story, what the victim sees at each stage, why it works, what stops it.

3. **[R2 · MED]** Undefined or unexplained in card 2: "grooming" (2338; first used as a concept at 2404), "Authority" (2343; nothing says the caller poses as an official or names any authority; the outcome name is "Authority impersonation", 2031), "They have the list from the first time" (2341; which list?), "irreversibly" (2343), "reverses" (2344), "late" (2342), "Highest value per incident, and it takes finance teams" (2342). The industry name for grooming (pig butchering, the outcome id at 2026) never appears, so a learner reading news coverage will not recognise it.

4. **[R3 · HIGH]** The key's M1 options (2061-2065) appear in no Unit 2 card. The cards carve the money patterns by one-line tell; the key carves them by five stories. Worst case: the key files Recovery under "Money owed to you, waiting to be released" (2062), while the card describes it as "it targets a loss you already suffered" (2341). No sentence connects them, so a learner who correctly recognises a recovery scam must still guess M1. Also M1 option 5, "A purchase or sale you are party to" (2065), bundles Overpayment with the legitimate case.

5. **[R4 · HIGH]** There is no contrast card. The unit's hard distinctions are left to table cells: Investment grooming vs Romance (both start with months of messages; separated by "platform" vs "crisis", 6 words each); Advance fee vs Recovery vs the "tax" inside W2 item 1 (2138); Authority vs Invoice vs Overpayment. The learner never sees two similar cases side by side with the deciding feature named.

6. **[R3 · HIGH]** "The three levers, in every one of them" (2346) is false against the course's own cases. Urgency, isolation and a reason not to verify (2347) all appear in the Authority specimen (2235-2238) and in none of specimens 1, 3, 4, 5 or 7; specimen 2 has a deadline only. Card 3 then says "When you notice those three arriving together, you do not need to know which pattern it is" (2348). The Authority specimen's own `why` lists a different three: "an irreversible payment channel ..., urgency ..., and isolation" (2237). A learner who looks for the three levers in the first specimen will not find them.

7. **[R3 · MED]** Card 4 tells the learner "you do not have to identify the pattern correctly, or at all. You only have to change direction" (2351) and "the response never depends on getting the name right" (2352), and the caveats repeat it (2475). The app then scores name and route and says "Right name by the wrong route counts as a miss" (2312, 2437, engine 4108). The reader is told the thing being scored is optional. The cards need one paragraph reconciling the two: why name it anyway.

8. **[R5 · HIGH]** The W2 drill's eighth option "Legitimate request" (2136) and item 8 (2152) test a category Unit 2 never teaches. The key's M2 option for it, "Nothing - the request is what it appears to be" (2075), is circular. The learner can only get it by elimination or by noticing the item says verification is "welcomed" (2153), which is feedback.

9. **[R7 · MED]** Cards 3 and 4 give general rules (levers, counter-move) before the learner has seen any pattern play out, and card 4 says "Every genuine version of every specimen in this course survives that" (2351). "Specimen" is first defined at Unit 7 (2436).

10. **[R2 · MED]** Card 1 (2335) packs three claims into one sentence: "A payment you authorise defeats fraud detection, is hard to reverse, and is much harder to report". None is explained (what "authorise" means for a bank transfer; why the bank's fraud systems let it through; why reporting is harder because "it means describing a decision you made").

11. **[R6 · MED]** W2 feedback adds facts no card taught: "No tax authority takes vouchers, and none conducts arrests by phone" (2143), "usually from the list you ended up on the first time" (2147), "The original payment reverses later" (2149). These are the explanations, and they come after the answer.

12. **[R8 · MED]** Card 4, "The counter-move" (2349-2352), is two paragraphs and a note. It says "Verify from that direction" but gives no worked how-to for each pattern: how to check an invoice change (ring the number on the contract, 2233), a romance emergency, a recovery firm, an overpayment (refuse to split the transaction, 2243). All of that is in specimen `fals`, after the capstone.

13. **[R7 · LOW]** At 360px the seven-row table is 740px tall (measured), a whole screen of table; tells are 11.5px monospace. It reads and does not scroll sideways, but the diagnostic content is in the smallest type on the card.

### Unit Three - Credentials and codes (2356-2377)

1. **[R1 · MED]** The lead (2359) is the best orientation in the course (a credential is "a loss of unknown size that continues after the conversation ends") but states no objective, and its second paragraph, "Three mechanisms, distinguished by what actually leaves your hands" (2360), promises three while the key's branch and W3 have four outcomes.

2. **[R2 · MED]** Used without being explained: "one-time code" (2364, 2370; never said who sends it or why it exists), "consent screen" (2365, 2373), "granted-apps list" (2375), "password manager" (2367), "phishing" (outcome names 2034, 2036; never defined), "second factor" (W3 feedback 2163, specimen 2262; defined nowhere), "scopes" (specimen 2260). "the mailbox that resets every other password" (2359) is the right idea but is asserted, not shown.

3. **[R3 · HIGH]** The key's A2 question, "What the genuine version of this never does" (2085), is a question the unit never asks. Of its three "never" options only one is taught: "Nobody ever needs a one-time code read back to them" (2370). "Never routes you to a login page from a message" (2086) is only hinted by "The route is the tell" (2363). "Never needs a third-party app to fix your account" (2088) is not taught, and the specimen it serves is a shared-document consent screen (2260), not fixing an account.

4. **[R4 · HIGH]** A1 and A2 are redundant. Every A1 option keeps exactly one outcome (2080-2083) and every A2 option keeps the same one (2086-2089); after A1 only one candidate is left and A2 can only confirm or contradict it. The same holds for I1/I2 (2094-2103) and F1/F2 (2108-2115). Only the money branch narrows in two stages. A learner cannot be taught what the second question adds because it adds nothing, yet route is scored on it. Reader needs either a different second question that adds information (for example "what would the real one do") taught with an example, or the key to say honestly that the second question is a check.

5. **[R5 · HIGH]** W3's fourth option "Legitimate security notice" (2156) is not described in any Unit 3 card; the unit teaches "Three mechanisms" (2360). Item 4's feedback is the first teaching: "Informational, in the app you opened yourself, asking nothing. Learn this shape." (2165).

6. **[R5 · MED]** Question and answers do not fit. W3's prompt is "What would actually leave your hands?" (2462) but the options are pattern names (2156), not things that leave your hands. Same for W4 "How is the device being reached?" (2463) and W5 "What is being collected, and why?" (2464).

7. **[R6 · MED]** W3 item 3 feedback (2163) says "No password is stolen and the second factor is never touched". "Second factor" is not defined in the course.

8. **[R9 · HIGH]** Card 2 (2362-2367) covers three mechanisms in 85 words. The one-time-code row reads "a real code, read back to a caller. The code is genuine and arrives on cue, because it is authorising them." The mechanism (the caller is at that moment logging in or moving your money, the bank's system texts you the code to approve it, and the caller asks you to read it out "to cancel" or "to verify") is only stated in the specimen's `why` (2257). A newcomer reading the card could not explain why a genuine code is dangerous.

9. **[R9 · MED]** "Only the first is defeated by a password manager, and only the first two by changing your password" (2367): two claims, no explanation. Why a password manager defeats a fake login page (it will not offer your password on the wrong domain), why a changed password does not remove a granted app.

10. **[R8 · MED]** Card 4 closes "Audit the granted-apps list ... It takes two minutes" (2375) with no instruction on where the list is for the common providers. The phishing defence ("typing the address yourself or opening the app", 2253) is only in specimen `fals`.

11. **[R3 · MED]** "The route is the tell, not the quality of the copy" (2363) uses route in the "how you arrived" sense, a third meaning in three units (see whole-course 6). Outcome names mix "phishing" with "interception" (2035), so the one-time-code scam is not called phishing though the card calls all three "credential" loss.

### Unit Four - Access to your device (2379-2399)

1. **[R1 · MED]** Lead (2382): "This category converts a single conversation into a position on your machine". No objective. "Consent is the point. Nothing has to be broken into, so nothing raises an alarm" (2383) is a compressed claim a newcomer must unpack alone.

2. **[R2 · MED]** Undefined: "remote-control software", "standing access" (2381), "an attachment run by you", "executable" (W4 item 2, 2172), "elevated rights" and "admin prompt" (2395, heading 2394), "search adverts" and "paid result" (2397), "operator" (2392), "payload" (W4 feedback 2173), "remorse" (2392). The first mention of what remote-access software does is the lead sentence.

3. **[R9 · HIGH]** Card 2 (2385-2389) is 56 words for three scams. "Malicious installer - a file arrives with a covering story. Success looks exactly like nothing happening." Not said: what the file does (steal passwords, watch the screen, lock files), why a recruiter is a common cover, what to do instead. "Tech-support / fake alert - the warning exists to produce a phone call": nothing on how the call proceeds; that is in the specimen `why` only (2272).

4. **[R5 · HIGH]** I2 "What happens once it is in" (2099-2104) asks about events after the ask. For Tech-support, option "You are shown alarming output and sold a fix" (2100) is not taught in any card, and the specimen (2270-2273) ends before the technician shows anything. The route cell is unsupported and, in a real call, unanswerable at the moment the learner could still say no.

5. **[R8 · MED]** Unit 4's premise is the ask you can still refuse (2321), yet the key's second question is about what happens after you stop refusing. The unit should teach which of the two is available in the moment and what the learner does with only I1.

6. **[R3 · MED]** Device naming: unit title "Access to your device" (2379), gate "Let something onto your device" (2052), drill title "Device access" (2463), "a position on your machine" (2382), W4 prompt "How is the device being reached?" (2463), I1 "How the need for software appeared" (2093). Device/machine, access/foothold/position.

7. **[R3 · LOW]** "Malicious installer" (outcome 2039, id `fakeupdate`) is described as "a file arrives with a covering story" (2387) and the specimen is an executable "assessment" (2275). The name says installer; the card says file; the id says fake update.

8. **[R6 · MED]** W4 feedback uses terms the unit never defined: "The file is the payload" (2173), "The excess never existed; what you send does" (2175). Card 3's explanation (2392) is better than the feedback built on it.

9. **[R7 · LOW]** Uneven depth: the refund scam gets a whole card (2390-2393) and Tech-support and Malicious installer get one table row each, though both are equally likely to be met by a newcomer. The card heading "The refund scam is worth its own card" (2390) describes the card, not the idea.

10. **[R9 · MED]** "Search adverts" (2397) is one sentence carrying a major mechanism (how people reach a scam support number by searching for the real one). It needs an example and an instruction (use the bookmark or type the address).

11. **[R8 · MED]** The only action in the unit is "End the session and check the balance on a different device" (2393). "Close the tab" (2273) and "Assessments run on the employer's platform, in a browser" (2278) are only in specimen `fals`.

### Unit Five - Information, and nothing yet (2401-2417)

1. **[R1 · MED]** The lead (2404-2405) is strong on why the stage matters ("people wait for the ask before starting to assess") but states no objective, and the unit title "Information, and nothing yet" is a third wording of the gate option (2054).

2. **[R2 · MED]** Undefined: "grooming" (2404), "Reconnaissance" (2409), "liveness checks" (2408; this is the entire tell for identity harvesting), "identity package" (2411), "Manufactured coincidence" (2409), "the take" (2411).

3. **[R9 · HIGH]** Card 2 (2407-2411) defines two scams in 62 words. Reconnaissance is "warmth from a stranger who reached you by accident. Manufactured coincidence, then patience." A newcomer could not tell this from networking, a friendly neighbour or a real wrong number. Missing: what is being collected, what the later ask looks like, how a real wrong number ends, and what to do.

4. **[R5 · MED]** W5 item 2 (2184-2185) is "Someone adds you after a conference ... asks about your work and your team for a fortnight, and requests nothing" keyed to Reconnaissance. The card's tell is "a stranger who reached you by accident" (2409); a conference contact is not an accident, and the closing note says a request "inside something you started" is ordinary (2415). The keyed answer cannot be derived from the card. Feedback "Either grooming or targeting" (2185) hedges instead of explaining.

5. **[R3 · MED]** The unit's one portable test, "Does the data match the reason given?" (2412-2414), is not a key step. The key's F2 is "What justifies the request" (2112) with options that are three stories, none of which asks whether the data matches the reason. The test the learner is told is most portable is not the question the screen asks.

6. **[R4 · MED]** Documents-before-anything-real is both the scam (row A, 2408) and the legitimate case (letting agency asks for references and proof of income before drawing up the tenancy, W5 item 3, 2186). The only separator is a clause in a closing note: "A request inside something you started, verifiable independently, is ordinary" (2415). Needs its own card with two cases side by side.

7. **[R6 · MED]** W5 feedback is obscure: "The documents are not a step toward the grant; they are the grant, to them" (2183). "Either grooming or targeting" (2185) uses two terms the course has not defined for this meaning.

8. **[R3 · LOW]** W5 item 4 files a card-number request under "Identity harvesting" (2188-2189), but row A says "documents" (2408) and F1 says "Identity documents, or the numbers on them" (2108). A card number is neither.

9. **[R8 · MED]** "Direction of contact carries most of the weight here" (2415) is one clause in a note, yet it is the most transferable idea in the subject and is what separates every legitimate case from its twin (2115, 2302). It needs its own card with the bank call-back as the worked example.

10. **[R7 · LOW]** "An absent ask is a stage" (2405) is first needed at W1 item 4 (2128), three units earlier.

### Unit Six - What people believe instead (2419-2430)

1. **[R1 · HIGH]** The unit is not connected to the key. Nothing says how beliefs relate to the four asks. The drill instruction (engine 4022) tells the learner to "Name which diagnostic question the claim fails to engage", but no card names a diagnostic question in the sense of the key and none of the seven claims' feedback (2193-2206) refers to one.

2. **[R5 · HIGH]** Claim 3 (2197-2198), "The site had a padlock and a valid certificate", has no card. Card 1 lists "obviously wrong logos" (2422) and Unit 1 mentions "cloned websites" (2327). Feedback introduces "attests", "domain" and "issued in minutes" for the first time.

3. **[R5 · MED]** Claim 7 (2205-2206), "I rang them", is only partly taught. Cards say "Use a route you already had" (2350) and warn about search adverts (2397), but Unit 5 says "Direction of contact carries most of the weight" (2415) and the specimen says "Direction of contact is doing all the work here" (2302). The claim is a direct counterexample to that rule and no card says so.

4. **[R6 · MED]** The faulty-claims drill is self-graded ("State the fault out loud or in writing before revealing it") with a "Show the fault" button; there is no scoring and no way for the learner to learn they were wrong. Feedback adds new content: typos "were a filter" (2194), certificates (2198).

5. **[R9 · MED]** Card 1 (2421-2423) names five dead tells in one lead sentence and then says what they do to the reader. It does not say what to look at instead, which is the unit's job. The unit title "What people believe instead" does not match the contents (what people wrongly believe).

6. **[R3 · LOW]** The same thing is called "tells" (2421), "beliefs" (2424), "claims" (2471), "defence" (2422), "surface cues" (2423, 2478).

7. **[R2 · MED]** Used without definition: "Sender IDs and caller ID are spoofable" (2425), "Breach data is abundant and cheap" (2426), "surface cues" (2423), "generated text and synthesised voice" (2422). The reader needs one sentence each: what a sender ID is, what spoofing means in practice, what breach data is and why a scammer holds it.

### Unit Seven - Full determination (2432-2439)

1. **[R1 · HIGH]** One card of 95 words (2434-2437) introduces a 19-case, 3-step, scored task. It tells the learner to "work the two questions under that ask" without naming one, never mentions the step codes (G1, M1...), the locked steps, the readout, or that the name step is labelled "ID". The text that would (2448-2457) is not shown (whole-course 1).

2. **[R4 · HIGH]** This is the learner's first encounter with eight of the nine key questions, and it is scored. Specimen 1's first branch question shows five story options (2061-2065), none taught in those words.

3. **[R5 · HIGH]** The capstone tests step wording never taught. Of 76 route cells across the 19 specimens, 56 are licensed by an earlier card, 15 are wording gaps and 5 are unsupported; only 6 of 19 specimens are fully supported (table below).

4. **[R5 · HIGH]** Specimen 12 (Legitimate security notice, 2265-2268) is keyed G1 = "Hand over a credential" (sub, 2266), though nothing is asked of the learner. G1's fourth option reads "Give information - or nothing yet" (2054), exactly where Unit 1's rule ("classify the ask") sends a notice that asks for nothing. No card files a security notice under credentials. A learner who follows the lessons is guaranteed a route miss.

5. **[R5 · HIGH]** Specimen 4 (Recovery, 2225) needs M1 "Money owed to you, waiting to be released", which the card never connects to recovery (Unit Two 4). Specimen 11 (App-permission, 2260) needs A2 "Never needs a third-party app to fix your account" for a document-share consent screen (Unit Three 3). Specimen 13 (Tech-support, 2270) needs I2 "shown alarming output and sold a fix", which is not in the cards and not in the specimen text (Unit Four 4). Specimen 8 (Legitimate payment request, 2245) needs M2 "Nothing - the request is what it appears to be" (Unit Two 8).

6. **[R3 · MED]** M1's last option "A purchase or sale you are party to" (2065) bundles Overpayment with the legitimate case. Specimen 8 is a tenancy deposit (2245); "A routine business payment" (2063) is the natural reading and leaves only Invoice redirect, so a careful learner is steered away from the right answer.

7. **[R6 · MED]** Specimen `why` text does not explain the route. Specimen 1's (2212) never says why M1 is "relationship" or M2 is "platform"; the verdict screen separately says "Step M2 wanted ..." (engine 4161-4164), using a code the lessons never introduced. Legit specimen 8's `why` ends "Every property in this specimen is the negation of one in the others" (2247), which explains nothing to a newcomer.

8. **[R6 · MED]** Specimen feedback is where the explaining happens, and it uses a new vocabulary: "the mechanism" (2139, 2212), "the instrument" (2217, 2282), "the wrapper" (2277), "the payload" (2278), "a rendering, not an account" (2212), "the investment" (2141). None is introduced in a card.

9. **[R7 · MED]** After six units that contain almost no key content, the learner faces 19 cases and 39 options with no refresher. Specimens are 50 words on average (942 words total) with several sentences of incidental detail ("capital gains deposit", "intestate", "probate duty"); the clue that decides the route is often a single clause.

## Learner simulation

Method. For each practice item the question was: could a reader who has read only the cards before it in the course (Unit N's drill: Units 1 to N; the capstone: Units 1 to 6) answer it and justify it using only what those cards said? SUPPORTED means a card sentence, quoted, licenses the answer in words close enough to the option or step text. WORDING-GAP means the idea is present but under different words, or the answer can only be reached by elimination, or another category fits the clue equally well. UNSUPPORTED means the cards never taught it, or teach something that points the other way. For the quick drills the learner must pick a pattern name; for the specimens each route step (G1, the two branch steps) and the name are judged separately because route is scored separately. Judgement calls are marked; they were made against the card text only, not against what a knowledgeable reader would know.

### W1 Which ask (after Unit 1: cards 2310-2327)

| Item | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. Bank "fraud team" caller wants a screen-share (2122) | SUPPORTED | Licence: "the thing being asked for now is access to your device" (2321) and "screen-share" listed under device (2317). Near-copy of the card example. |
| 2. Pay a £1.99 redelivery fee at a link (2124) | SUPPORTED | "Move money" with "transfer, card, crypto, vouchers" (2315). Feedback then says "the point is the card details" (2125), which the learner was told to ignore (2323) and which Unit 5 files under identity (2188). |
| 3. "Microsoft support" wants a code read back (2126) | SUPPORTED | "Hand over a credential" with "password, one-time code, app permission" (2316). "One-time code" is not explained until 2370. |
| 4. Wrong-number stranger, three weeks, asks nothing (2128) | SUPPORTED | "Give information, or nothing yet" with "documents, details, or only conversation" (2318). Rests on a four-word tell; "An absent ask is a stage" is not taught until 2405. |
| 5. Recruiter wants passport + NI number before contract (2130) | SUPPORTED | "documents, details" under the information ask (2318). |
| 6. Supplier emails changed bank details for this month's invoice (2132) | UNSUPPORTED | Keyed "Move money". Nothing in Unit 1 says changed bank details are a money ask; invoice redirect is first taught at 2342. Card 1.3 says classify "what you are being invited to do in the next sixty seconds" (2323), which here is update details/open an attachment, and "an attachment" is filed under device (2317). Feedback "A payment ask wearing routine clothing" (2133) is a new idea. |

Subtotal: 5 supported, 0 wording-gap, 1 unsupported of 6.

### W2 Money patterns (after Unit 2: cards 2334-2351)

| Item | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. Four months of messages, platform, small withdrawals work, "tax" to release (2138) | SUPPORTED | Row A: "returns exist only inside their platform ... The small successful withdrawal is bait" (2338). Trap: the "tax" that must be paid before release (2138) also fits Advance fee (2340); no card says which wins. |
| 2. Eight months, never met, hospital, advance clears Monday (2140) | SUPPORTED | Row B: "a crisis at a permanent distance ... Months of asking for nothing is the investment" (2339). |
| 3. Caller: unpaid tax, warrant, settle today in gift cards (2142) | WORDING-GAP | Row F: "pay now, irreversibly, and tell no one" (2343). The unit never says Authority means someone posing as an official, never says what "irreversibly" covers, and the item has no "tell no one". |
| 4. Lottery you never entered, customs fee (2144) | SUPPORTED | Row C: "money must go out before money comes in ... Lottery" (2340). |
| 5. Firm offers to recover crypto lost last year, retainer (2146) | SUPPORTED | Row D: "it targets a loss you already suffered" (2341). "The list" is unexplained. |
| 6. Buyer pays £900 for £600, wants difference sent elsewhere (2148) | SUPPORTED | Row G: "they send too much and want the difference. Their payment reverses; yours does not." (2344). |
| 7. Lookalike-domain email in genuine thread, bank details changed (2150) | SUPPORTED | Row E: "late change of bank details, by message" (2342). "Lookalike domain" is not taught; the answer does not need it. |
| 8. Builder sends agreed invoice, welcomes a call to the known number (2152) | WORDING-GAP | The unit teaches seven patterns, none of them legitimate. Only hint: "Every genuine version ... survives that" (2351). The learner can answer by elimination; "welcomed rather than deflected" (2153) is new. Option text "Legitimate request" (2136) differs from the key's "Legitimate payment request" (2033). |

Subtotal: 6 supported, 2 wording-gap, 0 unsupported of 8.

### W3 Credentials (after Unit 3: cards 2359-2375)

| Item | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. "Unusual sign-in detected. Confirm your identity here", link to a look-alike login (2158) | SUPPORTED | Row A: "a password, on a page reached from their message. The route is the tell" (2363). |
| 2. "read me the six-digit code we have just sent you" (2160) | SUPPORTED | "Nobody ever needs a one-time code read back to them" (2370); row B (2364). |
| 3. Doc-share prompt asks ongoing permission over mail and contacts (2162) | SUPPORTED | Row C: "a real consent screen, granting a real app ... survives a password change" (2365); card 3.4 (2373-2374). Feedback uses "second factor" (2163), never defined. |
| 4. Provider's app shows new sign-in, no link, nothing to do (2164) | WORDING-GAP | Unit 3 teaches "Three mechanisms" (2360); "Legitimate security notice" is never described. Learner can reach it by elimination only. Feedback: "Learn this shape" (2165) is the first teaching of it. |

Subtotal: 3 supported, 1 wording-gap, 0 unsupported of 4.

### W4 Device access (after Unit 4: cards 2382-2397)

| Item | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. Full-screen alarm warning with a number to call (2170) | SUPPORTED | Row A: "the warning exists to produce a phone call. Real security software never asks you to telephone anyone." (2386). |
| 2. Recruiter sends "skills assessment" executable (2172) | SUPPORTED | Row B: "a file arrives with a covering story" (2387). "Executable" is not defined. |
| 3. After screen-share refund, shown £4,000 overpayment, asked to send back (2174) | SUPPORTED | Card 4.3 (2392): "shown an apparent overpayment, told it will come out of the caller's wages, and asked to put it right". |
| 4. Vendor site, download, admin prompt, nobody on phone (2176) | SUPPORTED | Card 4.4 (2396): "You navigated to the vendor yourself and downloaded it: ordinary." |

Subtotal: 4 supported, 0 wording-gap, 0 unsupported of 4.

### W5 Information (after Unit 5: cards 2404-2415)

| Item | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. "Government grant" portal wants DOB, NI number, licence photo (2182) | SUPPORTED | Row A "documents before anything real has happened" (2408) and the data-vs-reason test (2413). |
| 2. Someone adds you after a conference, warm for a fortnight, requests nothing (2184) | WORDING-GAP | Row B: "warmth from a stranger who reached you by accident" (2409). A conference contact is not an accident, and the closing note (2415) calls a request "inside something you started" ordinary. The keyed answer cannot be derived from the card; feedback "Either grooming or targeting" (2185) hedges. |
| 3. Letting agency wants references and proof of income before the tenancy (2186) | SUPPORTED | Note (2415): "A request inside something you started, verifiable independently, is ordinary." Trap: row A says documents "before anything real has happened" (2408) - the agency does the same; only a clause separates them. |
| 4. Delivery firm wants full card number to "verify the address" (2188) | WORDING-GAP | Card 5.3 first example (2413) says it "fails" the test, but never says what to call it. "Identity harvesting" is defined as "documents" (2408, 2108); a card number is neither a document nor identity. Answer by elimination only. Recall of the card's own example. |

Subtotal: 2 supported, 2 wording-gap, 0 unsupported of 4.

### Unit Six faulty claims (errDrill, after cards 2422-2427; plus earlier units)

| Claim | Verdict | Licensing sentence or what is missing |
|---|---|---|
| 1. "Scam messages are always full of spelling mistakes." (2193) | SUPPORTED | Card 6.1: "bad spelling, odd phrasing, obviously wrong logos ..." (2422). Feedback adds an untaught idea: typos "were a filter" (2194). |
| 2. "It came from my bank's real number, so it was genuine." (2195) | SUPPORTED | Card 6.2: "It came from their real number. Sender IDs and caller ID are spoofable" (2425). |
| 3. "The site had a padlock and a valid certificate, so it was the real site." (2197) | UNSUPPORTED | No card mentions padlocks, certificates or encryption. Feedback introduces "attests", "domain", "issued in minutes" (2198) for the first time. |
| 4. "They knew my address and the last four digits of my card" (2199) | SUPPORTED | Card 6.2: "They knew my details, so it was really them. Breach data is abundant" (2426). |
| 5. "Only greedy or naive people fall for these." (2201) | SUPPORTED | Card 6.2: "It would never work on me ... being busy, being mid-transaction ... alone" (2427). |
| 6. "I would know, because a scammer would ask for money straight away." (2203) | SUPPORTED | Card 5.1: "An absent ask is a stage" (2405); row B tell (2339). |
| 7. "It cannot be a scam - I rang them, they did not ring me." (2205) | WORDING-GAP | Pieces exist: "Use a route you already had - the number on the card" (2350); search adverts (2397). But Unit 5 says "Direction of contact carries most of the weight" (2415) and the specimen says "Direction of contact is doing all the work" (2302), which points the other way. The fix ("ask where the number came from") is not taught. |

Subtotal: 5 supported, 1 wording-gap, 1 unsupported of 7.

### Full determination: the 19 specimens, every step of the correct route separately

Each row is one route cell. A learner is scored on G1 and both branch steps (route) and on the name; a miss on any route step is a route miss. "Taught" means taught in the cards before Unit 7 (2332-2427).

| # | Specimen (line) | Step | Verdict | Licensing sentence or what is missing |
|---|---|---|---|---|
| 1 | Investment grooming (2210) | G1 Move money | SUPPORTED | $60,000 in, 20% "deposit" to release (2210); (2315). |
|  |  | M1 A relationship built over weeks or months | WORDING-GAP | Row A (2338) never says relationship or months; only row B does (2339). |
|  |  | M2 Returns only inside their app, withdrawals stall | WORDING-GAP | Cards teach that withdrawals WORK at first ("bait", 2338); "stall" and "app" are key wording only. |
|  |  | Name | SUPPORTED | Row A name. |
| 2 | Romance scam (2215) | G1 Move money | SUPPORTED | (2315) |
|  |  | M1 A relationship ... | SUPPORTED | Row B "Months of asking for nothing" (2339), weak. |
|  |  | M2 A crisis at a distance, never met in person | SUPPORTED | Row B "a crisis at a permanent distance" (2339). |
|  |  | Name | SUPPORTED | Row B. |
| 3 | Advance fee (2220) | G1 Move money | SUPPORTED | (2315) |
|  |  | M1 Money owed to you, waiting to be released | WORDING-GAP | Row C lists "inheritance" (2340); the key's phrase is never used. |
|  |  | M2 Send money before you receive any | SUPPORTED | Row C "money must go out before money comes in" (2340). |
|  |  | Name | SUPPORTED | Row C. |
| 4 | Recovery scam (2225) | G1 Move money | SUPPORTED | (2315) |
|  |  | M1 Money owed to you, waiting to be released | UNSUPPORTED | Row D files recovery under "a loss you already suffered" (2341); no sentence links recovery to money "waiting to be released". Same M1 option as Advance fee. |
|  |  | M2 Targets a loss you have already suffered | SUPPORTED | Word-for-word row D (2341). |
|  |  | Name | SUPPORTED | Row D. |
| 5 | Invoice redirect (2230) | G1 Move money | WORDING-GAP | Ask now is "use these details"; Unit 1 rule (2323) says classify the current ask. Only W1 feedback (2133) calls this money. |
|  |  | M1 A routine business payment | WORDING-GAP | Row E says "finance teams" (2342), not "routine business payment". |
|  |  | M2 Bank details changed late, by message | SUPPORTED | Row E (2342). |
|  |  | Name | SUPPORTED | Row E. |
| 6 | Authority impersonation (2235) | G1 Move money | SUPPORTED | Vouchers (2315). |
|  |  | M1 An official penalty, arrest or seizure | WORDING-GAP | Row F never names penalties, arrests or officials (2343). |
|  |  | M2 Payment demanded now, irreversible channel | SUPPORTED | Row F "pay now, irreversibly" (2343). |
|  |  | Name | SUPPORTED | Row F. |
| 7 | Overpayment / fake buyer (2240) | G1 Move money | SUPPORTED | (2315) |
|  |  | M1 A purchase or sale you are party to | WORDING-GAP | Row G (2344) never frames it as a sale. |
|  |  | M2 They send too much and ask for the difference back | SUPPORTED | Row G (2344). |
|  |  | Name | SUPPORTED | Row G. |
| 8 | Legitimate payment request (2245) | G1 Move money | SUPPORTED | Deposit payable (2315). |
|  |  | M1 A purchase or sale you are party to | WORDING-GAP | A tenancy deposit is as likely to be filed under "A routine business payment" (2063), which leaves only Invoice redirect. |
|  |  | M2 Nothing - the request is what it appears to be | UNSUPPORTED | No card teaches what a legitimate payment request looks like (Unit 2 has seven patterns, none legitimate); the option is circular. |
|  |  | Name | WORDING-GAP | Only by elimination. |
| 9 | Credential phishing (2250) | G1 Hand over a credential | SUPPORTED | (2316) |
|  |  | A1 A password, on a page reached from their message | SUPPORTED | Verbatim row A (2363). |
|  |  | A2 Never routes you to a login page from a message | WORDING-GAP | Row A says "The route is the tell" (2363); the genuine-never framing is only in the specimen fals (2253). |
|  |  | Name | SUPPORTED | Row A. |
| 10 | One-time-code interception (2255) | G1 Hand over a credential | SUPPORTED | (2316) |
|  |  | A1 A code that just arrived on your own device | SUPPORTED | Row B (2364). |
|  |  | A2 Never asks you to read a code back to anyone | SUPPORTED | Card 3.3 (2370). |
|  |  | Name | SUPPORTED | Row B. |
| 11 | App-permission phishing (2260) | G1 Hand over a credential | SUPPORTED | "app permission" (2316). |
|  |  | A1 Permission for an app to act on your account | SUPPORTED | Row C (2365). |
|  |  | A2 Never needs a third-party app to fix your account | UNSUPPORTED | Not taught anywhere, and the specimen is a shared document, not a request to fix your account (2260). Card 3.4 lists pretexts: "a shared document, an urgent scan, a productivity tool" (2374). |
|  |  | Name | SUPPORTED | Row C. |
| 12 | Legitimate security notice (2265) | G1 Hand over a credential | UNSUPPORTED | Nothing is asked. Option 4 of G1 reads "Give information - or nothing yet" (2054, 2318); a learner who classifies "the ask now" goes there. No sentence files a security notice under credentials. |
|  |  | A1 Nothing - you are only told something happened | WORDING-GAP | "Three mechanisms, distinguished by what actually leaves your hands" (2360) implies nothing-leaves; never stated. |
|  |  | A2 Nothing is asked - the notice is informational | WORDING-GAP | Duplicate of A1; not taught. |
|  |  | Name | WORDING-GAP | Category never described in Unit 3; first described in W3 feedback (2165). |
| 13 | Tech-support / fake alert (2270) | G1 Let something onto your device | SUPPORTED | Remote-support tool (2317). |
|  |  | I1 A warning appeared and gave you a number to call | SUPPORTED | Row A (2386). |
|  |  | I2 You are shown alarming output and sold a fix | UNSUPPORTED | Nothing in Unit 4 says the technician shows alarming output or sells a fix; the specimen ends before that happens (2270). Only specimen why (2272) says so. |
|  |  | Name | SUPPORTED | Row A. |
| 14 | Malicious installer (2275) | G1 Let something onto your device | SUPPORTED | (2317) |
|  |  | I1 A file or link arrived in a message | SUPPORTED | Row B (2387). |
|  |  | I2 It runs quietly and asks for nothing further | SUPPORTED | Row B tell: "Success looks exactly like nothing happening" (2387). |
|  |  | Name | SUPPORTED | Row B. |
| 15 | Refund scam (2280) | G1 Let something onto your device | SUPPORTED | Taught exactly (2321, 2323). |
|  |  | I1 They asked to see your screen to sort out a payment | SUPPORTED | Row C (2388). |
|  |  | I2 Your banking screen is manipulated and an overpayment claimed | SUPPORTED | Card 4.3 (2392). |
|  |  | Name | SUPPORTED | Row C. |
| 16 | Legitimate software prompt (2285) | G1 Let something onto your device | SUPPORTED | Installer (2317). |
|  |  | I1 You went to the vendor yourself | SUPPORTED | Card 4.4 (2396). |
|  |  | I2 An ordinary installation, with nobody watching | SUPPORTED | Card 4.4 "ordinary" (2396). |
|  |  | Name | SUPPORTED | Card 4.4 title and body. |
| 17 | Identity harvesting (2290) | G1 Give information - or nothing yet | SUPPORTED | "documents" (2318). |
|  |  | F1 Identity documents, or the numbers on them | SUPPORTED | Row A (2408). |
|  |  | F2 A verification step, before anything real has happened | SUPPORTED | Row A "before anything real has happened" (2408). |
|  |  | Name | SUPPORTED | Row A. "Liveness checks" is never defined. |
| 18 | Reconnaissance - no ask yet (2295) | G1 Give information - or nothing yet | SUPPORTED | "only conversation" (2318). |
|  |  | F1 Nothing yet - conversation and familiarity | SUPPORTED | Card 5.1 (2404). |
|  |  | F2 A wrong number, a stray add, an unusually warm stranger | WORDING-GAP | Row B "reached you by accident" (2409); "stray add" is slang no card uses. |
|  |  | Name | SUPPORTED | Row B. |
| 19 | Legitimate information request (2300) | G1 Give information - or nothing yet | SUPPORTED | "details" (2318). |
|  |  | F1 Ordinary details any counterparty would need | WORDING-GAP | Note says "ordinary" (2415), not "details any counterparty would need"; "confirm details from your own account to identify you" resembles "Identity documents, or the numbers on them" (2108). |
|  |  | F2 A relationship you began and can verify independently | SUPPORTED | Note (2415): "inside something you started, verifiable independently". |
|  |  | Name | SUPPORTED | Note (2415). |

Route cells: 56 supported, 15 wording-gap, 5 unsupported of 76.
Specimens where every cell is supported: 6 of 19. At least one wording-gap (no unsupported): 8. At least one unsupported cell: 5.
Specimens with an unsupported cell: #4 Recovery scam, #8 Legitimate payment request, #11 App-permission phishing, #12 Legitimate security notice, #13 Tech-support / fake alert.
Specimens with all cells supported: #2 Romance scam, #10 One-time-code interception, #14 Malicious installer, #15 Refund scam, #16 Legitimate software prompt, #17 Identity harvesting.

### Totals

| Practice | Items | Supported | Wording-gap | Unsupported | Not cleanly answerable |
|---|---|---|---|---|---|
| W1 Which ask | 6 | 5 | 0 | 1 | 1 |
| W2 Money patterns | 8 | 6 | 2 | 0 | 2 |
| W3 Credentials | 4 | 3 | 1 | 0 | 1 |
| W4 Device access | 4 | 4 | 0 | 0 | 0 |
| W5 Information | 4 | 2 | 2 | 0 | 2 |
| Faulty claims (errDrill) | 7 | 5 | 1 | 1 | 2 |
| Specimens (worst cell per specimen) | 19 | 6 | 8 | 5 | 13 |
| **All practice items** | **52** | **31** | **14** | **7** | **21** |

So 21 of 52 practice items (40%) cannot be answered and justified from the preceding cards alone. At the level of individual route steps in the capstone, 20 of 76 cells are not licensed by the cards. Of the 25 quick-drill and faulty-claim items marked supported, most are the card's own example or a one-clause paraphrase of a table row, so they test recall of the card rather than use of the idea on a new case.

## Vocabulary map

One concept, every variant verbatim, with line numbers. Where a row has more than one variant the learner meets all of them between the first card and the last specimen.

| Concept | Every variant verbatim | Where |
|---|---|---|
| Step 1 question | "What is it asking you to do right now?" / "What is being asked for right now?" / "classify what is actually being asked for right now" / "The ask now, not the goal eventually" / "Name the step in front of you" / "what you are being invited to do in the next sixty seconds" / "decide what is being asked for right now" / "Classify the ask you can still refuse, not the outcome they want" | gate 2047; W1 prompt 2460; blurb 2444; card 2320; 2323; 2435; W1 w 2123 |
| What they get | "the goal" / "the outcome they want" / "the take" / "the product" / "the payload" / "the investment" | 2323; 2123; 2131, 2411; 2129; 2173, 2278; 2141 |
| The four categories | "your money, a credential, a foothold on your device, or information" / "G1 Move money, G2 Hand over a credential, G3 Let something onto your device, G4 Give information, or nothing yet" / "Move money / Hand over a credential / Let something onto your device / Give information - or nothing yet" / "money, a credential, device access, or information" / "Money moved by you", "Credentials and codes", "Access to your device", "Information, and nothing yet" / "Which ask", "Money patterns", "Credentials", "Device access", "Information" | 2311; 2315-2318; 2048-2054; 2444-2445; 2331, 2356, 2379, 2401; 2460-2464 |
| A thing to be named (outcome) | "pattern" / "mechanism" / "shape" / "category" / "routes in" / "tools" / "scam" / "specimen" | 2311, 2351, 2437; 2359, 2479; 2165, 2406; 2326, 2358; 2384; engine 3900; outcome names 2027, 2029, 2040; 2351, 2436 |
| "route" | scoring: "a right label reached by the wrong route counts as a miss" / "Right name from the wrong route counts as a miss"; arrival: "The route is the tell" / "The whole route forward is inside their message"; defence: "Use a route you already had" / "a route you chose" / "a route that was already in your possession" / "only a route you initiated is"; way in: "Three routes in" | 2312, 2437; 2363, 2159; 2350, 2287, 2302, 2196; 2384 |
| The defence (verify) | "Use a route you already had ... Verify from that direction, not the one offered" / "change direction" / "Direction of contact" / "verifiable independently" / "can verify independently" / "independent channel" / "a route you initiated" / "a route you chose" / "the app you opened yourself" / "typing the address yourself or opening the app" / "Only a number you already had counts as calling them" | 2350; 2351; 2415, 2302; 2415; 2115, 2187; 2476; 2196; 2287; 2165; 2253; 2206 |
| Legitimate outcomes | "Legitimate payment request" / "Legitimate request" / "Nothing - the request is what it appears to be" / "Legitimate security notice" / "Nothing is asked - the notice is informational" / "Legitimate software prompt" / "An ordinary installation, with nobody watching" / "Legitimate information request" / "Ordinary details any counterparty would need" / "ordinary" | 2033; 2136; 2075; 2037, 2156; 2089; 2041, 2168; 2103; 2044, 2180; 2110; 2396, 2415 |
| Investment grooming | "Investment grooming" / "Returns exist only inside their app, and withdrawals stall" / "returns exist only inside their platform" / "The small successful withdrawal is bait, not evidence" / "is the mechanism, not a reassurance" / "bought cheaply to justify the deposit" / "grooming" (as a general term) / `pigbutcher` | 2026, 2136, 2338; 2068; 2338; 2338; 2139; 2212; 2204, 2404; 2026 |
| Romance | "Romance scam" / "Romance" / "a crisis at a permanent distance" / "A crisis at a distance, from someone never met in person" / "a permanent, structurally explained distance" | 2027; 2339; 2339; 2069; 2141, 2217 |
| Recovery | "Recovery scam" / "Recovery" / "it targets a loss you already suffered" / "It targets a loss you have already suffered" / "Money owed to you, waiting to be released" (the key's M1 for it) | 2029; 2341; 2341; 2071; 2062 |
| Invoice redirect | "Invoice redirect" / "late change of bank details, by message" / "Bank details changed late, by message" / "A routine business payment" / "A payment ask wearing routine clothing" | 2030, 2342; 2342; 2072; 2063; 2133 |
| Authority | "Authority impersonation" / "Authority" / "pay now, irreversibly, and tell no one" / "Payment demanded now, in a channel that cannot be reversed" / "An official penalty, arrest or seizure" / `threat` | 2031, 2136; 2343; 2343; 2073; 2064; 2064 |
| Overpayment | "Overpayment / fake buyer" / "Overpayment" / "they send too much and want the difference" / "They send too much and ask for the difference back" / "A purchase or sale you are party to" | 2032; 2136, 2344; 2344; 2074; 2065 |
| The three pressure tactics | "Urgency, Isolation, A reason not to verify" / "an irreversible payment channel ..., urgency ..., and isolation" / "manufactured urgency" / "isolation instructions" | 2347; 2237; 2143; 2237 |
| One-time-code scam | "One-time-code interception" / "a real code, read back to a caller" / "A code that just arrived on your own device" / "Nobody ever needs a one-time code read back to them" / "Never asks you to read a code back to anyone" / "six-digit code" | 2035, 2364; 2364; 2081; 2370; 2087; 2160, 2255 |
| App-permission scam | "App-permission phishing" / "a real consent screen, granting a real app" / "Permission for an app to act on your account" / "ongoing permission" / "permanent permission" / "standing permission" / "Never needs a third-party app to fix your account" / "scopes" / "granted-apps list" | 2036, 2365; 2365; 2082; 2162; 2260; 2263; 2088; 2260; 2263, 2375 |
| Fake-login scam | "Credential phishing" / "a password, on a page reached from their message" / "A password, on a page reached from their message" / "Never routes you to a login page from a message" | 2034, 2363; 2363; 2080; 2086 |
| Tech-support scam | "Tech-support / fake alert" / "A warning appeared and gave you a number to call" / "the warning exists to produce a phone call" / "You are shown alarming output and sold a fix" | 2038, 2386; 2094; 2386; 2100 |
| File-sent scam | "Malicious installer" / `fakeupdate` / "a file arrives with a covering story" / "A file or link arrived in a message" / "executable" / "technical assessment" as a file | 2039; 2039; 2387; 2095; 2172; 2275 |
| Refund scam | "Refund scam" / "a screen-share to fix a payment" / "They asked to see your screen to sort out a payment" / "a screen-share to arrange a refund" | 2040; 2388; 2096; 2451 |
| Identity harvesting | "Identity harvesting" / "documents before anything real has happened" / "Identity documents, or the numbers on them" / "A verification step, before anything real has happened" / "an identity package" / "a complete identity package" / (a card number, W5 item 4) | 2042; 2408; 2108; 2113; 2411; 2292; 2188 |
| Reconnaissance | "Reconnaissance - no ask yet" / "warmth from a stranger who reached you by accident" / "Nothing yet - conversation and familiarity" / "A wrong number, a stray add, an unusually warm stranger" / "Manufactured coincidence" / "manufactured coincidence" / "rapport" / "grooming or targeting" | 2043; 2409; 2109; 2114; 2409; 2297; 2129; 2185 |
| A diagnostic sign | "tell" / "diagnostic" / "signature" / "giveaway" / "cues" / "property" / "shape" | 2315 (class), 2189; 2343; 2194; 2292; 2423; 2247; 2165, 2217, 2257 |
| Spoofing | "Spoofed sender IDs" / "Sender IDs and caller ID are spoofable" / "Caller ID and SMS sender IDs are trivially spoofed" | 2327; 2425; 2196 |
| The instrument itself | "the key" / "the determination" / "Full determination" / "Diagnostic instrument" / "ID - Name it" / "The strip" / "readout" | 2436, 2479; 2437, 2447; 2432; 2443; engine 4076; 2455; engine 4093 |
| Practice cases | "specimen" / "scenario" / "case" / "item" / "claim" | 2351, 2436; 2435; engine 3901 ("19 unlabelled cases"); engine 3979 ("Item 01 / 6"); 2193 |

## Key-wording coverage

For every key question (the label the learner sees after the code, e.g. "M1 - What story carries the ask") and every option, was it taught before the capstone in words the learner can match? yes = same words or a near-verbatim paraphrase in a card; partly = the idea is in a card under different words, or only for some of the outcomes it keeps; no = not in any card before Unit 7.

Positives that should be kept: the four options of G1 are taught verbatim (2315-2318, apart from "or" vs a dash); the units run in the same order as the gate's branches (money, credential, device, information); A1's label "What exactly would leave your hands" echoes Unit 3's own sentence (2360); W1's options are exactly the gate's options.

| Step | Question label (line) | Taught? | Options (line) and whether taught |
|---|---|---|---|
| G1 | "What is it asking you to do right now?" (2047) | partly: "what you are being invited to do in the next sixty seconds" (2323) | Move money (2048): yes. Hand over a credential (2050): yes. Let something onto your device (2052): yes. Give information - or nothing yet (2054): yes. |
| M1 | "What story carries the ask" (2060) | no, and contradicted by "ignore the story" (2311) | A relationship built over weeks or months (2061): partly, only row B says months (2339). Money owed to you, waiting to be released (2062): partly, fits "inheritance" (2340) but not recovery (2341). A routine business payment (2063): partly, row E says "finance teams" (2342). An official penalty, arrest or seizure (2064): no. A purchase or sale you are party to (2065): no. |
| M2 | "What actually decides it" (2067) | no | Returns exist only inside their app, and withdrawals stall (2068): partly, cards say withdrawals work (2338). A crisis at a distance, from someone never met in person (2069): yes (2339). You must send money before you receive any (2070): yes (2340). It targets a loss you have already suffered (2071): yes (2341). Bank details changed late, by message (2072): yes (2342). Payment demanded now, in a channel that cannot be reversed (2073): yes (2343). They send too much and ask for the difference back (2074): yes (2344). Nothing - the request is what it appears to be (2075): no. |
| A1 | "What exactly would leave your hands" (2079) | yes (2360) | A password, on a page reached from their message (2080): yes, verbatim (2363). A code that just arrived on your own device (2081): partly (2364). Permission for an app to act on your account (2082): partly (2365). Nothing - you are only told something happened (2083): no. |
| A2 | "What the genuine version of this never does" (2085) | no | Never routes you to a login page from a message (2086): partly (2363). Never asks you to read a code back to anyone (2087): yes (2370). Never needs a third-party app to fix your account (2088): no. Nothing is asked - the notice is informational (2089): no. |
| I1 | "How the need for software appeared" (2093) | no | A warning appeared and gave you a number to call (2094): yes (2386). A file or link arrived in a message (2095): yes (2387). They asked to see your screen to sort out a payment (2096): yes (2388). You went to the vendor yourself (2097): yes (2396). |
| I2 | "What happens once it is in" (2099) | partly (the table says what each does, 2386-2388) | You are shown alarming output and sold a fix (2100): no. It runs quietly and asks for nothing further (2101): yes (2387). Your banking screen is manipulated and an overpayment claimed (2102): yes (2392). An ordinary installation, with nobody watching (2103): partly (2396). |
| F1 | "What is being collected" (2107) | partly: "Does the data match the reason given?" (2412) | Identity documents, or the numbers on them (2108): yes (2408). Nothing yet - conversation and familiarity (2109): partly (2404). Ordinary details any counterparty would need (2110): partly, "ordinary" only (2415). |
| F2 | "What justifies the request" (2112) | partly: "the reason given" (2413) | A verification step, before anything real has happened (2113): yes (2408). A wrong number, a stray add, an unusually warm stranger (2114): partly, "reached you by accident" (2409); "stray add" is not used by any card. A relationship you began and can verify independently (2115): yes (2415). |

Counts. Questions (9): taught 1 (A1), partly 4 (G1, I2, F1, F2), no 4 (M1, M2, A2, I1). Options (39): yes 21, partly 11, no 7. The options that fail are concentrated where the learner most needs help: all five M1 options are at best partial, and every legitimate branch ("nothing" options) is untaught. The cards teach what each scam looks like; the key asks which question separates the candidates, and the cards never teach the questions.

Other wording problems in the key. A1 and A2 are the same question twice (every option keeps the same single outcome), as are I1/I2 and F1/F2 (see Unit Three 4). G1's option 4 ("Give information - or nothing yet") overlaps the legitimate security notice, which asks nothing (see Unit Seven 4). The step labels "What actually decides it" (M2) and "What the genuine version of this never does" (A2) do not say what to look at.

## Under-explained ideas

Every idea below is given a phrase, a table cell or one sentence where a newcomer needs a paragraph and an example. The owner's test: "using only 2 phrases to explain something when you need 2 paragraphs is not a good solution".

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| Investment grooming | "Investment grooming - returns exist only inside their platform. The small successful withdrawal is bait, not evidence." (2338) | What "their platform" is (a fake trading site that displays invented balances), how a months-long chat turns into an investment tip, why the first small withdrawal is allowed to work, why a "tax" or fee appears at the large one, how this differs from Romance, what "grooming" means. |
| Romance | "a crisis at a permanent distance. Months of asking for nothing is the investment." (2339) | Why the person is always far away and never on video, what the typical crises are, why the ask comes after months, what the victim should do while still emotionally attached, how it differs from Investment grooming. |
| Advance fee | "money must go out before money comes in. Lottery, inheritance, loan approval, job equipment." (2340) | Where the promised money supposedly comes from, why a fee feels plausible (customs, probate), why it is never the last fee, what genuine costs look like. |
| Recovery | "it targets a loss you already suffered. They have the list from the first time." (2341) | What list; how a stranger can know about a private loss; why a real-sounding firm asks for money up front; why this is often the same operation again. |
| Invoice redirect | "late change of bank details, by message. Highest value per incident, and it takes finance teams." (2342) | How the criminal gets into a genuine email thread (a hacked mailbox or a one-letter-different address); what "late" means (after the arrangement was already running); that it also hits individuals (a builder, a solicitor, a house purchase); how to check. |
| Authority | "pay now, irreversibly, and tell no one. The isolation instruction is diagnostic on its own." (2343) | Who is impersonated and what threats are made; which payment methods are "irreversible" and why scammers choose them; why the caller wants silence; that the real bodies do not behave this way. |
| Overpayment | "they send too much and want the difference. Their payment reverses; yours does not." (2344) | Why the buyer's payment looks real and then disappears (a recalled transfer, a stolen card, a bad cheque), why they want the difference sent to a different account, what to do instead. |
| Three levers | "Urgency removes the interval in which you would have checked. Isolation removes the person who would have said stop ... A reason not to verify is supplied in advance" (2347) | What each sounds like in real words; that most of the course's own specimens do not contain all three; what to do when only one is present. |
| The counter-move | "Stop. Use a route you already had ... Verify from that direction, not the one offered." (2350) | Exactly how, for each ask: what number, what to say, what to do if the real organisation seems to confirm the story, what to do if you cannot reach them. |
| Authorised payments | "A payment you authorise defeats fraud detection, is hard to reverse, and is much harder to report" (2335) | What "authorise" means, why the bank lets it through, why reporting is harder, what recovery is possible. |
| Credential loss | "A credential is a loss of unknown size that continues after the conversation ends - the mailbox that resets every other password" (2359) | How a mailbox resets other accounts, what an attacker does with it, what "vouches for you to your contacts" looks like in practice. |
| One-time code | "a real code, read back to a caller ... The code is genuine and arrives on cue, because it is authorising them." (2364) | The actual sequence: the caller is at that moment logging in or moving your money, the real system texts you, the caller asks you to read it out "to cancel" or "to verify". Why a genuine code is the danger. |
| Password manager and password change | "Only the first is defeated by a password manager, and only the first two by changing your password." (2367) | Why a password manager defeats a fake login page and why a new password does not remove a granted app. |
| App permission | "The grant then sits there, unaffected by password resets and unnoticed by anything watching for logins." (2374) | What a "grant" is, what a consent screen looks like, where the list is in common providers, how to revoke. |
| Standing access | "Consent is the point. Nothing has to be broken into, so nothing raises an alarm." (2383) | What remote-access software lets someone do, why security software does not object, how to remove it. |
| Tech-support | "the warning exists to produce a phone call." (2386) | How the warning page is made and why it is hard to close, what the call does, what they sell. |
| Malicious installer | "a file arrives with a covering story. Success looks exactly like nothing happening." (2387) | What the file does afterwards, why a recruiter is a common cover, what a genuine assessment looks like. |
| Search adverts | "The paid result above the real one is bought by whoever pays" (2397) | An example, and the habit to use instead (a bookmark or typing the address). |
| Identity harvesting | "A selfie holding your passport defeats bank liveness checks." (2408) | What a liveness check is, what the package is used for (opening accounts and loans), how long until harm appears. |
| Reconnaissance | "warmth from a stranger who reached you by accident. Manufactured coincidence, then patience." (2409) | What is being gathered and how it is used later, how to tell it from ordinary friendliness or a real wrong number, what to do. |
| Direction of contact | "Direction of contact carries most of the weight here." (2415) | Worked examples (you rang the card number vs they rang you; you opened the app vs followed a link) and the exception that a number in a message or advert is theirs even if you dial it (2206). |
| Dead tells | "Every one of those has been cheap to fix for years, and generated text and synthesised voice have finished the job." (2422) | What a cloned-voice call or a generated message looks like, and what to check instead. |
| Risk factors | "being busy, being mid-transaction so the message is expected, and being alone with the decision" (2427) | What each looks like in the learner's own week and what to do about it. |
| The legitimate version | not in any card | What a real bank fraud call, tax letter, recruiter, installer or letting agency does, in positive terms, so the learner has something to compare against. |

## What a good version of this subject's units would contain

Principles applied (all general instructional design, none specific to this app): show a worked example before asking for the same move; name an idea in plain words and with an everyday example before attaching its label; put two easily confused cases side by side and name the deciding feature; use the same words in the lesson, the question, the option and the feedback; give explanation as much room as it needs (the owner has set no limit, so a card can be several paragraphs and a pattern can have its own card). The unit order already matches the key's branches and should stay.

### Before Unit 1: a "start here" card
- State the skill in plain words: given a message, call or request, say what it wants you to do right now, then which kind of fraud (or which legitimate request) it is, then what to do.
- Walk one complete case through the key, showing the exact option text on screen at each step and the readout crossing candidates off.
- Name the three questions the key will always ask (the ask, then two for that ask) and say which can be answered at the moment of the call.
- Explain the scoring (name and route) and, in the same card, why the name still matters when the defence is the same for every pattern (2351).
- Define the words used throughout (ask, pattern, key, specimen, route as the scored sequence) once, and use only those.

### Unit One - The current ask
- One card per ask (four cards): plain definition, two everyday cases in the scammer's actual words, what the genuine version of that ask looks like, and the key's option text.
- Define credential, one-time code, app permission and screen-share with an everyday example the first time each appears.
- A card on "the ask now, not the goal" with three worked cases walked through G1: the refund screen-share, the £1.99 parcel fee against a request to confirm a card number, and a recruiter asking for documents.
- A card that settles the awkward placements: a notice that asks for nothing, a bank-details change, an attachment. Decide where each goes and say so, in key wording.
- Drill in the same words as the key. Remove or defer W1 item 6 (supplier bank change) until it is taught; fix the G1-G4 row labels so they match one question with four options.

### Unit Two - Money moved by you
- Split the seven-row table into paired lessons with a card each: slow relationships (Investment grooming vs Romance), release fees (Advance fee vs Recovery), pressure and routine payments (Authority, Invoice redirect), a sale (Overpayment), and the legitimate payment request.
- For each pattern: a short narrated story from first contact to loss, what the victim sees at each stage, why it works, the one question that identifies it in the key's words, the genuine version, and what to do.
- A contrast card per pair naming the deciding feature (platform vs crisis; payment to get paid vs a loss already suffered; late change of details vs a threat).
- A worked walk through G1, M1, M2 for a Recovery case, with the key either reworded so Recovery has an M1 option that fits it, or the card saying why "money owed to you" is the M1 answer.
- State honestly which patterns use urgency, isolation and a reason not to verify, instead of "in every one of them"; give real phrases for each.
- The counter-move as a per-pattern script (who to call, which number, what to say, what a real organisation does when you check).

### Unit Three - Credentials and codes
- Plain definition of a credential and what the three kinds are, with a card each.
- The one-time-code scam as a step-by-step sequence (the caller is logging in or moving money, the real system texts you, the caller asks you to read it out), with the wording of real code messages.
- A fake-login card: how a look-alike page works, why a password manager does not offer your password there, why the route you arrived by matters, and which meaning of "route" is in use.
- A consent-screen card describing what the screen says, what a grant allows, and exactly where to review and revoke grants in the common providers.
- A card on the genuine version: what a real security notice looks like (inside the app, no link, nothing to confirm) and where the key files it, so specimen 12 is teachable.
- Replace the redundant A2 with a question that adds information, or teach it explicitly as a confirmation; align "never needs a third-party app to fix your account" with what the oauth specimen actually shows.

### Unit Four - Access to your device
- Define remote-access software, executable, admin prompt and standing access with everyday examples.
- One card per way in: the fake alert (the full call, what is sold), the file sent with a covering story (what it does, why a recruiter), the refund scam (keep, and add the question to ask), and search adverts as a door into fake support (with the habit to use instead).
- A card on the genuine version: how a real installation or a real support session differs, in positive terms (you started it, vendor's own site, nobody on the phone).
- Say plainly which question can be answered at the moment of the ask (I1) and which only afterwards (I2), and what the learner does with only I1.
- Walk a refund-scam case and a legitimate-installer case through the key.

### Unit Five - Information, and nothing yet
- A timeline of a wrong-number or conference contact: what is said each week, what is being gathered, how it turns into an ask, and how a genuine contact differs.
- Identity harvesting explained with what a package is worth and what liveness checks are; real onboarding vs fake side by side (the letting agency and the fake employer).
- The data-matches-the-reason test as a card in its own right with four worked examples, and the F2 question reworded to ask exactly that.
- A direction-of-contact card with the bank call-back as the worked example and the exception that a number from a message or advert is theirs.
- Settle where a card-number request belongs and use one name for it everywhere.

### Unit Six - What people believe instead
- Retitle around what to check instead, and tie each belief to the key question it fails.
- Add the padlock/certificate belief, with a plain explanation.
- Make the drill scored: the learner picks the key question the claim ignores, and the feedback names it, as the instruction at engine 4022 already promises.
- Move the "if it has already happened" guidance (2482) into a card here so it is learned, not hidden in the caveats.

### Unit Seven - Full determination
- Show the existing orientation (2448-2457) before the first specimen, plus one worked specimen with the readout, in the screen's own words.
- A short "what this step asks" reminder on each step linking to the card that taught it.
- Rewrite each specimen `why` to explain the route step by step in the key's option wording, and show `fals` under a label such as "What to do next" instead of "What would falsify this reading".
- Teach the four legitimate outcomes before this unit so the capstone is not the first time they are met.
