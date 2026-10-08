# Critique: newcomer read-through of the exemplar unit

Reviewer lens: a reader who knows no psychology, going card by card through
`docs/lesson-standard/exemplar/learner-view.md` (all 1,774 lines), using only what earlier cards
have shown, and spot-checking against `exemplar/public/subjects/psychology/*.js`.

Status: COMPLETE. 44 problems, 8 SERIOUS, 36 MINOR. Nothing under `public/` was edited.

Tags: SERIOUS = a learner is likely to be confused, misled, or unable to justify an answer;
MINOR = friction, stiffness, or a small inconsistency.

## The short version

The exemplar is far better than what the owner was complaining about: every name is met in a case
before it is named, the key's wording is printed verbatim, and almost every check can be answered
from the cards before it. It is not yet safe to copy 46 times, for four reasons.

1. **The key and the cards disagree with each other in three places** (problems 1, 21, 22). The test
   for telling the first two names apart fails on the two cases that taught the first name. A case the
   unit calls Cognitive dissonance reduction breaks the key's printed condition for that answer. And
   the cards say four times that honest reasoning can end with the view kept, for which the key has no
   answer.
2. **The hardest pair is separated by a phrase that does not separate it** (problem 16).
3. **Two graded steps are never demonstrated before they count** (problems 23, 30).
4. **Wording still drifts** (problems 3, 4, 8, 19, 24, 25, 42): the key's answers are held fixed, but
   the words *around* them (rule, deciding feature, test, sign, mark, move; uneven, special, harder)
   are not, and the validator does not catch it because those strings are typed by hand in the cards.

One piece of practical advice is wrong as written (problem 2).

## Problems

Numbered in reading order. What was checked and found sound is at the end.

### Cards 1 to 13 (Part 1)

1. **SERIOUS. Card 13, "The test that separates them", contradicted by the unit's own two anchor cases (cards 2, 3).**
   Card 13 gives the test: "is the reason being used to make something finished fine, or to decide something still open?" But the two cases that taught Cognitive dissonance reduction are not finished acts. Maya: "She keeps eating." Tom: "he **is doing** 90 in a 70 zone." In both, a step is still open (stop eating, slow down) and the reason is what lets them carry on. A newcomer applying card 13's test to the cases they learned from gets "still open", which the card says is Sunk cost fallacy. Card 5 has the same problem: "The order is always the same: first the act, then the reason", and the key's R2 `when` says "a reason appears **after the act**".
   Fix: either (a) rewrite both anchor cases so the act is over before the reason is spoken (Maya finishes the plate, then says it on the way home; Tom is told afterwards that he was doing 90), or (b) keep them and change the test to the thing that really separates the pair: "What is the reason made of? If it is what has already been spent, and it is being used as the reason for the next step, it is Sunk cost fallacy. If it is a reason why the act does not count or is fine, it is Cognitive dissonance reduction, whether or not the act is still going on." Option (a) is cleaner because the key's wording ("already done", "after the act") then holds without exception.

2. **SERIOUS. Card 12, the "useful question" teaches a wrong rule of thumb.**
   "if I were starting today, with nothing spent, would I begin this?" A reader takes "this" as the whole project. That gives the wrong answer in exactly the cases card 10 says are fine: with one cheap year of a degree left, "would I begin a four-year degree today?" may be no, while "is the last year worth what it gets me?" is yes. Card 10 itself gives "one more year and I am qualified" as sound forward-looking reasoning, and card 25 has Mei ask the right question ("what would the next two years get me?"). Card 12 contradicts both.
   Fix: replace with the question card 25 already uses: "From where I stand today, is what I still have to put in worth what I will get for it?" and add one worked line: "For Dan and Aisha: is another £30,000 worth £10,000 of extra value? No. The £40,000 is not in that sum at all."

3. **SERIOUS. The thing each name turns on is called nine different things, with no bridge between them.**
   Each of the five outcomes already has four wordings (plain phrase, key answer, name, aka). That is handled well on the meet cards, which put them in one place. But the thing the learner is supposed to look for is then called: "the rule" and "provisional rule" (cards 2, 3, 8, 9, 14, 15, 18, 19, 24, 25), "the deciding feature" (cards 5, 10, 16, 20, 26), "the one test for it" (card 5), "the test that separates them" (cards 13, 22, 28), "the test to take away" (cards 23, 29), "the move" (every "again" heading, and the key's purpose line), "what the reasoning does" (the key), "the sign to look for" (card 18), "the mark of" (card 23, item 20), and on card 37 "what you must be able to point to". Card 5 opens "You can now recognise the deciding feature" when the words "deciding feature" have never appeared; the last two cards called it "the rule". A newcomer cannot tell whether a rule, a deciding feature, a test, a sign, a mark and a move are six things or one. This is the owner's complaint verbatim ("either stay consistent or match all different ways to express them in the same place").
   Fix: pick two phrases and hold them for the whole standard: "what the reasoning does" (the key's own phrase) for the thing, and "what you must be able to point to" (already the definition of `needs` in key.js, and already the recap's heading) for the evidence of it. On card 5 write "You can now point to the thing that decides it". Remove "deciding feature", "provisional rule", "sign", "mark" and "move" from the card data (`h`, `link`, `rule` fields in `u2.cards-*.js`) and from the key's `purpose` line. Add a validator rule that fails a card using any of those words.

4. **MINOR. "Move" means two different things inside one key, sometimes on one screen.**
   The gate option is "A move between people" (something one person does to another). The key's purpose line for the second question is "Names the **move** the reasoning makes", and five card headings say "the same **move** in a different story" about one person's reasoning. Card 35 prints both within one screen: "A piece of reasoning, a **move** between two people and a person across years…" and then "names the **move** the reasoning makes". Drill items 10 and 22 then ask the learner to choose between "One person's reasoning" and "A move between people".
   Fix: stop using "move" for reasoning. Purpose line: "Names what the reasoning does". "Again" card heading: "<Name>: the same thing in a different story". Card 23: "It is part of the same thing, not a second one."

5. **MINOR. Card 1, the five opening quotations are never tied to the five things, and two of them contradict later cards.**
   "'You can't trust that report.'" alone is not Confirmation bias (card 16: "Testing evidence is not the bias"). "'I looked into it properly and I was right.'" alone is not Motivated reasoning (card 20: "ending up with the answer you wanted" is not it). Card 1 then says "In the first four, the reasoning bends to protect something", which a quotation cannot show, as card 4 goes on to teach.
   Fix: say "Each of these *can* be the sound of one of five different things" and, on card 37, return to the five quotations and say what else you would need to see in each before using the name.

6. **MINOR. Card 1 reminds the learner of one of the first question's three answers, but the unit goes on to use all three.**
   "Unit One taught the first question of the key, 'What kind of thing is this?', and its three answers." Only "One person's reasoning" is then printed. Cards 35 and 36 rule the other two out by description ("She is not doing anything to the people in the club, and one Sunday tells you nothing about how she is across years") and drill items 10, 16 to 22 ask the question with all three options. A learner who did Unit One some days ago has to recall the other two unaided. Fix: print all three answers on card 1, each with its "the case shows…" line from key.js, and say "this unit is about the first".

7. **MINOR. Card 1 preview map is heavy before any case has been seen.**
   Two questions, seven answers, five plain phrases each printed three times, five technical names, arrows and middle dots, all on the first screen. It is labelled a preview, which helps, but a newcomer reads it as something to understand now. Fix: keep the two questions and the five plain phrases with their names (the short list), and move the full arrow map to card 33 where it is taught; or keep it and add "You are not expected to follow this yet. Glance at it and move on."

8. **MINOR. "Clash" appears in card 3's feedback before it is introduced.**
   Card 2 says "does not fit" and "the discomfort". Card 3's feedback says "It is one half of the clash". Cards 5 and 7 then lean on "clash" as if it were a taught word. Fix: introduce it on card 2 ("the two do not fit; call that a clash") or use "does not fit" throughout.

9. **MINOR. Card 2 marks only "It hardly counts" but the excuse is both sentences.**
   "'It's only a splash'" is doing the same job (card 5 would call it "shrinks the act"). A learner who would have tapped the first sentence is implicitly told it is not the reason. Fix: mark both sentences.

10. **MINOR. Card 6 (check) never connects the tapped words to the key's answer or the name.**
    Feedback explains why those words are the added reason, but does not end with "so the key's answer is 'Adds a reason why what they did is fine after all', and the case is Cognitive dissonance reduction." This is the first check in the unit and the one place the learner most needs the three wordings joined. Fix: add that sentence to both the right and the miss feedback.

11. **MINOR. Card 7, "This is wrong, and in two ways", then the two ways are not listed.**
    What follows describes three things (the clash, the discomfort, the reduction) and says "a third thing again". The reader is left to work out which two errors were meant. Fix: "First, the clash is not the dissonance: dissonance is the discomfort the person feels. Second, even the discomfort is not what this unit names: the name is for what the person does about it." Also, most of card 7's useful content ("No added reason, no Cognitive dissonance reduction") was already said on card 5 under "What it is not"; one of the two can go.

12. **MINOR. Template sentence "In everyday talk you will also hear this called…" is false for two of the three akas.**
    "escalation of commitment" (card 8) and "updating" (card 24) are specialist words, not everyday talk. Fix: template reads "You may also hear this called…"; or add a flag in key.js to distinguish everyday from textbook synonyms.

13. **MINOR. Card 9 adds "feeling" to what can be spent; the key says "money, time or effort".**
    "What is spent can be money, time, effort or feeling". The key's `when` and the `sunk` term both list three. Either add it to the key or drop it from the card.

14. **MINOR. Cards 11, 17, 21, 27 ask "Which of the key's answers fits this case?" without printing the key's question.**
    The answers are answers to "What does the reasoning do?", which the learner saw once, in the card 1 preview. Holding the question back until card 33 ("The question you have been answering all along") is a reveal that costs comprehension on four checks. Fix: print it: "The key asks: **'What does the reasoning do?'** Which of its answers fits this case?" Card 33 can still say "you have been answering this since card 11".

15. **MINOR. Cards 13, 22, 28 and 30: cases are labelled "Case A / Case B" but the explanation says "In the first case… In the second case".**
    Fix: write "In Case A… In Case B…" in the four `why` texts.

### Cards 14 to 23 (Part 2)

16. **SERIOUS. The hardest pair is separated by a phrase that does not separate it: "a view already held" versus "an answer chosen before looking".**
    Greg "is sure" traffic is worse before he sees the council's count. Sam (card 22, Case B) "has believed for years". Carol "has already decided". To a newcomer all three had their answer before the evidence. Card 18 says that in Motivated reasoning "something happens earlier: the answer is chosen before any looking is done", but in Confirmation bias the view is also there earlier. What actually differs in every case shown is never stated as the rule: in one, evidence turns up on its own and is judged piece by piece (a neighbour's remark, a council count, a match result); in the other, the person sets out on a search or a decision process that is supposed to produce the answer (interviews, "research", quotes), and the answer was fixed before that search began. Card 22's explanation gets there in passing ("there is no search and no choice being made… events come along") but the test it hands over goes back to "look for an answer chosen before a search began", and card 23's take-away drops the search altogether ("an answer chosen before the looking began").
    Fix: on card 18, after the stripped case, add a paragraph: "Greg also had his answer before the count arrived, so 'had a view first' cannot be the difference. The difference is what the person is doing. Greg was not looking for anything; evidence came to him and he judged it. Carol set out to look. Her interviews were a search that was supposed to give the answer, and she had fixed the answer before the search began. So ask two things: is the person running a search or a process to decide something? If yes, was the answer fixed before it started?" Then make cards 22 and 23 use those same two questions word for word, and add "a search or decision process" to the key's `needs` for Motivated reasoning.

17. **MINOR. Card 20 calls Motivated reasoning "the bias".**
    "Wanting an answer is not the bias". The only "bias" the learner knows is the *other* name in the hardest pair. Fix: "Wanting an answer is not Motivated reasoning".

18. **MINOR. Card 20, "can I believe this?" / "must I believe this?" is too compressed, and the second half is misattributed.**
    As written: the motivated search asks "can I believe this?"; "An open search asks 'must I believe this?'" A newcomer cannot unpack either question, and an open search does not ask "must I believe this?" (that is the question people put to evidence they do *not* want). Fix: spell it out: "For something they want to be true, the person asks 'is there anything that lets me believe this?' and stops at the first yes. For something they do not want to be true, they ask 'is there anything that lets me doubt this?' and stop at the first yes there too. A person searching openly asks the same question of both: 'what would I expect to find if I were wrong, and have I looked there?'"

19. **MINOR. "Provisional rule" wording drifts from the key.**
    Cards 18 and 19: "an answer chosen before the looking **starts**"; key `needs`: "before the looking **began**". Card 14: "evidence on both sides, and a harder test for the side that goes against the view"; key: "a test set for evidence against it that evidence for it never had to pass". If the rule is the key's `needs`, print `needs`; do not retype it.

20. **MINOR. Auto-built wrong-answer lines do not teach.**
    Cards 17, 21, 27: "Give that answer when a step is still to be decided, and the reason given for taking it is the money, time or effort already spent. This case does not show that." The hand-written lines beside them ("Helen is not making anything she did fine. Her reasoning is about what other people's results show") are far better: they say what the case shows instead. Fix: the fallback should end with what this case has in place of the missing thing, built from the right answer's `when`: "This case has no step still to be decided and nothing spent. It has <right answer's needs>."

### Cards 24 to 34 (Part 3)

21. **SERIOUS. Card 29 ("The convert") contradicts the key's own condition for the answer it gives, and contradicts cards 2, 5 and 24.**
    Jo's view "has changed completely", and the card says the case is Cognitive dissonance reduction, key answer "Adds a reason why what they did is fine after all". Four cards later (card 33) the key's condition for that answer is printed: "Give this answer when a reason appears after the act, and it **leaves both the act and what the person believes exactly as they were**." Jo's belief was not left as it was. The same clash is in the drill: item 18 (Nora, "I see it differently these days") and item 7 (Dev) are marked Cognitive dissonance reduction although the belief moved, while item 1's feedback praises the reason because "it leaves both the claim and his belief in honesty where they were". Earlier cards make it worse: card 2 presents changing the belief as an *honest* way out ("I am not as strict a vegan as I tell people… changes something real"); card 5 says someone who "admits the act and drops the claim has taken one of the honest ways out"; card 24 says of the first four names "in every one the person ends exactly where they began". A newcomer reaching Jo has been told three times that a changed belief means it is *not* this name.
    Fix (key.js, `addstory.when`): "a reason appears after the act and makes the act fine; no new fact about the matter has arrived; and the act itself is not undone or admitted to be wrong". Drop "and what the person believes exactly as they were". On card 29 add the bridge the learner needs: "Card 2 said that dropping the claim is an honest way out. Maya's honest way out was to say something true about herself: 'I am not as strict as I say.' Jo did not say 'I bought something I think is a toy.' She changed her opinion about cars, with no new fact, so that the purchase needs no excuse. The new opinion is the excuse." Change card 24's opening to "in every one, nothing the facts said made any difference". Fix item 1's feedback so it does not rely on the belief staying put.

22. **SERIOUS. The key has no answer for honest reasoning that ends with the view kept, yet the cards say four times that such cases exist.**
    Card 5: "A reason that was weighed before acting is a decision, not an excuse." Card 10: "If the reason given is about what the remaining part will bring… the name does not apply." Card 16: "If Greg had put the same three questions to his neighbour, there would be nothing here to name." Card 26: "keeping a view is not a fault. If the facts support it, holding firm is the same honest reasoning with a different result." But "What does the reasoning do?" offers five answers and the fifth requires a change ("Lets the facts **change** their view or their plan"; name "Honest **change** of mind"). A learner who meets Greg-with-fair-questions, or someone finishing a degree for a forward-looking reason, has been told what it is *not* and has nowhere to put it. No drill item, return case or check has "none of the four faults, and nothing changed" as its answer, so the "What it is not" paragraphs are never practised on a whole case (only items 23 and 25 touch them, for two of the five names). `u2.unit.js` build notes admit a "missing 'nothing to name here' answer" and defer it to Unit One's gate; that does not cover these cases, which are plainly "One person's reasoning".
    Fix: widen the fifth outcome so that card 26's own sentence is true of the key. Answer: "Gives the facts a fair hearing, and keeps or changes the view to fit them". Name: "Honest reasoning" (aka "changing your mind", "updating"). Then add one teaching case and two drill cases where the view is kept after a fair test (Greg puts the same three questions to both; someone carries on because "one more year and I am qualified").

23. **SERIOUS. "What is the reasoning about?" is graded on a judgement that no card demonstrates: evidence is in the case, the person ignores it, and the right answer is still "Something they have already done, promised or spent".**
    Card 31 says "Ask first: is anything in the case being weighed as evidence? A study, a count, a result, a quote, somebody's advice." The renovation has a builder's advice in it. The tram (card 34) has "a new estimate". Card 31's only worked example of "a case has both" is Vic, who *does* judge the study, and Mei, where "the key accepts both". The first time the learner must decide "evidence present but not weighed" unaided is drill item 17 (payroll), where "Evidence…" is marked "Right name, wrong route… counts as a miss"; the explanation ("The cost comparison is in the case, but his reasoning does not work on it") arrives only after the miss. Return case 2 (mountain, "the forecast getting worse") repeats it. Meanwhile item 16 (Stefan) accepts either answer, so the learner cannot tell from results which rule is in force.
    Fix: on card 31, under "When a case has both", add a third worked paragraph using a case already taught: "In the renovation, the builder's figures are evidence, and they are in the case. But Dan does not question them, test them or answer them. His reason is the £40,000. Evidence that is in the case but that the person's reasoning never touches does not make this the evidence answer. Give 'Something they have already done, promised or spent'." Then make card 34 (tram) ask this question as well as the second, so it is practised once before it is counted.

24. **MINOR. Parts 1 and 2 are the two answers to "What is the reasoning about?" under different words, and the learner is not told.**
    Part titles: "Explaining something already done" / "Judging evidence". Key answers: "Something they have already done, promised or spent" / "Evidence about a question: facts, results or advice". Card 14's opening teaches the distinction in a third wording ("was what I did all right?" versus "what is true?"), card 25 in a fourth ("on different ground"), cards 30 and 31 in a fifth ("what the reasoning is working on"), and feedback in a sixth and seventh ("is dealing with", "her subject"). The question itself is not shown until card 31.
    Fix: title the parts with the key's answers. Open card 14 with: "The key asks 'What is the reasoning about?' Every case in part 1 had the answer 'Something they have already done, promised or spent'. Every case in this part has the answer 'Evidence about a question: facts, results or advice'." Use "is about" in feedback, never "is working on", "is dealing with" or "subject". Card 31 then consolidates something the learner has already used.

25. **MINOR. Confirmation bias's deciding feature has six labels.**
    "two standards" (card 14), "a harder test" (14, key), "the uneven test" (16, 22), "uneven treatment of evidence" (23), "a special test" (24, 27), "a special standard" (26), "handles evidence unevenly" (22, ledger). Fix: use "a harder test for one side" everywhere, since it is closest to the key's "Tests evidence against their view harder".

26. **MINOR. Card 26, "is being led by the act and not by the facts", is too compressed where it stands.**
    This is the whole of card 29 squeezed into a clause, three cards early, with no example. Fix: add "(someone buys the thing they used to mock, and the next day thinks it is wonderful; a later card works through one)" or move the paragraph to card 29.

27. **MINOR. Card 31, "a quote" is ambiguous.**
    In the list "A study, a count, a result, a quote, somebody's advice" a newcomer reads "quote" as something someone said. Card 22 used "quotes" for builders' prices. Fix: "a price quote".

28. **MINOR. Card 33 is padded and tiring.**
    Each of the five answers "Keeps" exactly one name, so the five "Rules out <the other four>" lines carry no information; the three side-by-side tables repeat strings printed a few lines above (and the first row of two of them is identical in both columns). The list of tests to use "when two answers both seem to fit" gives three of the four taught tests and omits card 28's ("were the same questions put to the welcome kind?"). Fix: drop "Rules out" on this card (keep it on card 31 where it does work); replace the three tables with the four tests, one line each, each naming the pair it separates.

29. **MINOR. Card 24, "updating" is introduced as everyday talk and then banned.**
    See problem 12. Also "without it… every firm view looks like a fault" promises that this name covers a firm view; it does not (see problem 22).

### Cards 35, 36 and the drill (Part 4)

30. **SERIOUS. Last stage (items 23 to 25): a new task with no demonstration, and item 25 has two defensible answers.**
    "Which of the key's questions has this claim left unanswered?" has not been modelled on any card; the only preparation is one sentence in the stage heading. For item 25 ("Of course she thinks the merger was a good idea. She was promoted because of it. That's motivated reasoning.") the claim also never says what her reasoning is about (no evidence and no act of hers is mentioned), so "What is the reasoning about?" is as unanswered as "What does the reasoning do?". For item 23 a careful learner can argue for the first question too: the claim shows no reasoning at all, so it is not yet established that this is "One person's reasoning… how one person reaches, defends or changes a view". The feedback explains only why the intended answer is right; it has no line for either other choice. I could guess the intended answer (the last question is the one that names) but could not rule out the others from the cards.
    Fix: change the question to one with a single answer the cards license (card 7, card 20 "What it is not"): "What would you need to see before this name could be used?" with options built from `needs` ("a reason he adds for why the flying is fine" / "evidence he tested harder" / …). Or keep the format and (a) add one worked claim to card 36's close, and (b) write a line for each wrong choice ("The claim does tell you what the reasoning would be about: something he does. What it never shows is any reasoning from him.").

31. **MINOR. Stage one (items 1 to 5) can be answered without reading the case.**
    The third line shown ("What does the reasoning do? **Adds a reason why…**") determines the name one-to-one, as card 33 says ("Each answer belongs to exactly one name"). So the stage tests recall of five answer-name pairs, and the marked case, the "why not" line and the look-alike rule on a miss are idle. Fix: say so ("This stage practises one thing: which name goes with which answer") and shorten the feedback to the pairing; or show only the first two answers here and merge with stage three.

32. **MINOR. Cards 35 and 36: the words marked for "What kind of thing is this?" do not show why the answer is "One person's reasoning".**
    Card 35 marks "she wrote in the club chat that evening"; card 36 marks "The tasting settled it". Neither is "how one person reaches, defends or changes a view or a choice". In card 35 the marked words (writing to a club) point, if anything, toward "A move between people". Fix: mark the sentence in which the person gives their own account or reason ("Skipping one long run… is basically recovery"; "In March she decided to switch"), or mark nothing for this question and say why.

33. **MINOR. Card 36's closing question is answered by the three lines above it.**
    "Tap the words in the case that settle it" → "In March she decided to switch to a new coffee supplier", which was the marked phrase and the stated reason for question 3 immediately before. The learner copies; nothing is retrieved. Fix: ask the question card 35 asks (three true statements, choose the one that settles it), or ask it before question 3 is shown.

34. **MINOR. "A second check: does it look like a case you know?" is taught twice and never practised.**
    Cards 35 and 36 each spend two paragraphs on comparing the key's answer with a resemblance, including what to do "when the two disagree". No drill item, return case or check asks the learner to do it, and both worked cases are ones where the checks agree, so the disagreement procedure is described in the abstract only ("see which check those words support"). It also arrives under four labels: "second check", "resemblance", "second opinion", "remind you of". Fix: either give one drill item where the resemblance misleads and the learner must say which case it resembles and why the key overrules it, or cut the section to one sentence.

35. **MINOR. Drill item 15 (warehouse) reuses card 36's surface cue.**
    Card 36: "In March she decided… In April she held a tasting." Item 15: "chose the Leeds site… in March. In April she hired a consultant." Card 4 says the story never decides, but the same two months in the same order let the learner match on dates. Fix: change item 15 to different timing words ("before the board met… afterwards").

36. **MINOR. Drill item 6 (bus) is recorded as Confirmation bias with evidence on one side only.**
    The drill asks only the first question for it, which is sound. But `u2.cases-drill-1.js` gives its route as "Tests evidence against their view harder…" with the reason "Her own impression, which supports her view, was never tested". The key's condition is "evidence on both sides is **in the case**", and card 16 says the name applies "only when the two sides are tested differently". No evidence for Sunita's view is in the case. Compare card 34, where the council leader who waves away an estimate "does not test it at all" and so is *not* Confirmation bias. If this case ever returns as a whole route, its answer is unlicensed. Fix: add one clause to the case ("Last week, when a colleague said the 14 had been late, she said 'See?'") or mark the case as first-question-only in data.

37. **MINOR. Unaided whole-case practice is thin: one case per name (two for Honest change of mind).**
    After 36 cards the learner runs six of this unit's cases alone (items 16 to 21), then five more across three later returns. The pair the unit calls "the hardest" (Confirmation bias / Motivated reasoning) gets one unaided case in which the tie-break matters (item 20). For a unit whose stated outcome is "read a short account… and say which of five things", this is the part that should be largest. Fix: at least two unaided whole cases per name in stage four, with the hardest pair adjacent, and enough return cases that each of the three scheduled returns shows a case not seen before (15, not 5).

38. **MINOR. Item 11 teaches nothing.**
    "Which of this unit's two questions tells Confirmation bias and Motivated reasoning apart?" The answer is the second question for every pair within a branch, by construction. Fix: replace with "What would you look for to tell them apart?" with the four taught tests as options.

39. **MINOR. Stakes are described four ways.**
    Card 1: "The drill at the end is where your answers are counted." Drill intro: "a miss costs nothing." Stage three: "counts as a miss." End of drill: "There is no grade." Fix: one sentence, used everywhere: "Nothing here is graded. A miss only decides what comes back."

### Across the unit

40. **MINOR. Card 1's reason for learning this ("each calls for a different response") is never delivered.**
    Confirmed after reading cards 37 and 38 and `u2.cards-4.js` (the subject is flagged `action: false`, so there is no plan card). The only "what to do about it" in the unit is card 12's question, which is wrong as worded (problem 2). The app's tagline is practical knowledge; a learner finishes able to name five things and is not told what naming buys them. Fix: either cut the sentence, or add to card 37 one line per name: what to do when you spot it in someone else, and in yourself (for example, Sunk cost fallacy: "ask what the next step costs and brings, and leave what is spent out of the sum").

41. **MINOR. Wording that reads as documentation or is stiff.**
    - Card 5: "so that you know the thing when you meet it and not only the one test for it." → "so you can spot it in real life, where nobody marks the words for you."
    - Card 14: "The matter in hand is no longer…" → "The question is no longer…".
    - Card 35: "The resemblance is a second opinion… see which check those words support." Abstract; see problem 34.
    - Stage three heading is one 45-word sentence that also carries the marking rule. Split: heading, then "From here on your route is marked as well as the name."
    - Last-stage heading: three sentences of instructions before the learner has seen an example; see problem 30.
    - Auto-built lines: "«That name» needs «…». This case does not show that." and "You chose «that answer». Give that answer when «…». This case does not show that." Correct, but they read like a form letter beside the hand-written lines; see problem 20.
    - Card 31 and card 33 "Keeps… Rules out…" under every answer; see problem 28.

42. **MINOR. Three more near-synonym sets a newcomer has to reconcile unaided.**
    - Cognitive dissonance reduction: "what they believe" (key), "what she says about herself" (card 2), "the claim" (card 5), "the belief" (card 6), "what he said for a year" (item 7).
    - Sunk cost: "a step still to be decided" (key, cards 8, 9), "something still open" / "no step left to decide" (card 13, ledger, card 35).
    - Motivated reasoning: "the looking" (key), "a search", "a process", "a collection" (card 18), "the asking" (item 20), "research" (card 19).
    Fix: use the key's noun in each case, and where a case needs another word (interviews, quotes) say once "that is the looking".

43. **MINOR. Drill item 21 (Amit) strains the key's printed condition for its answer.**
    Card 33: "Give this answer when facts arrive that **go against** what the person thought or planned, and the view or plan changes to fit them." Amit "hoped the cheaper supplier would turn out to be good enough", and the facts agreed with his hope. The item is answerable from card 26 ("It can end on the answer the person was hoping for… the looking came first, and it could have gone the other way"), but a learner who checks the key's condition finds the case does not meet it. Fix (key.js, `updates.when`): "facts arrive, they get the same test whichever way they point, and the view or plan ends up where they point". This is the same change problem 22 asks for.

44. **MINOR. The top bar shows the card's internal kind: "orient", "meet", "again", "lens", "portrait", "check", "refute", "lookalike", "exception", "question", "worked", "recap", "transfer".**
    The learner view prints, for example, "Unit Two · rev 1 · Part 1 of 4 · Card 4 of 38 · lens" and says this line "is the app's top bar". The standard's own example of the top bar (section 5, and R4) stops at "Card 15 of 38". If the kind is shown in the app, it is thirteen unexplained labels, several of them jargon. Fix: do not show it; or, if it is only there for reviewers, make `render-learner-view.mjs` print it on a separate line marked as not shown to the learner.

## What I checked and found sound

**Method.** Read all 1,774 lines of `learner-view.md` in order, in eight chunks, noting at each card only what earlier cards had shown. Then read `key.js`, `u2.unit.js` and `u2.cards-4.js` in full, the first 48 lines of `u2.cards-1.js`, `u2.cases-drill-2.js` from line 20, the recorded routes in `u2.cases-drill-1.js` and `u2.cases-teach-2.js` (by search), the Maya and Tom entries in `u2.cases-teach-1.js`, the first part of `specimens.js`, `subject.js` and `u1.cases-1.js`, and searched the card files for the hand-typed rule strings. I did not run the app or the validator, and I did not read the standard itself beyond its headings and the lines that define the top bar and the second check. Drill items 10 and 22 depend on Unit One, which is not rebuilt, so I could not judge whether they are licensed.

**Sound.**

- **Key wording is held fixed.** Every question and answer on cards 11, 17, 21, 27, 31 to 34, in the two worked cases, the drill and the return cases matches `key.js` (`q`, `n`, `when`) as far as I could compare by eye; I found no difference. Names are identical everywhere. The three taught terms (cognitive dissonance, sunk cost, fallacy) are each defined in the sentence where they first appear, in the key's own words.
- **Order inside each name works.** Case, then the case stripped to four lines, then the explanation in plain words, then the rule, then the key's fixed words, then the name, then other names for it. No name is used before its case. This is the opposite of the failure the owner described.
- **Explanations are full length.** Cards 2, 8, 14, 18 and 24 each take the paragraphs they need. The only places where a clause stands in for a paragraph are the ones listed (problems 16, 18, 21, 23, 26).
- **Card 4 (the story never decides) and card 30 (Vic's two weeks)** are the clearest cards in the unit. Card 23 is honest that the tie-break is the key's rule and not a fact about people.
- **Either answer is accepted where it should be.** Mei and Stefan are recorded with both answers to "What is the reasoning about?" (`R1: ['own', 'evidence']`), and card 31 says so in advance.
- **Feedback written by hand teaches the route.** It quotes the words in the case, says what they do, and says what the nearest wrong name would have needed. Examples: card 11 (Omar), card 17 first wrong option (Helen), card 21 third wrong option (Raj), items 8, 9, 16 to 21.
- **Cases are not reused** between cards, checks, drill and returns, except Carol on card 23, which is deliberate and said to be.

**Each check and drill item, and the sentence that licenses its answer.**

| Item | Answer | Licensed by |
|---|---|---|
| Card 3 (Tom) | the "everyone drives at this speed" sentence | Card 2: "After the act, she adds a reason that makes the act fine" |
| Card 6 (Priya) | "One order makes no difference to anyone" | Card 2 rule; card 5 "It shrinks the act" |
| Card 9 (Lena) | "We've already sat through an hour" | Card 8: "points backward, at what has been spent, and uses it as the reason to spend more" |
| Card 11 (Omar) | Gives what is already spent… | Card 8 key words; card 10 "I've already paid for it" |
| Card 13 (Rosa) | Case A | Card 8 rule against card 2 rule (but see problem 1 for the test it then states) |
| Card 15 (Nadia) | "One game was enough when he scored" | Card 14: "two standards" |
| Card 17 (Helen) | Tests evidence… harder | Card 16: "a result that goes against the view is called an exception, while one that fits is called proof" |
| Card 19 (Ines) | "decided… the moment she saw it" | Card 18: "She had the answer first" |
| Card 21 (Raj) | Collects support… | Card 18 rule |
| Card 22 (Sam) | Case A | Card 18, with the reservation in problem 16 |
| Card 23 (Carol) | "Before the interviews she has already decided" | Card 22: "look for an answer chosen before a search began" |
| Card 25 (Mei) | "She transfers to nursing" | Card 24: "the person's view or plan changes to fit them" |
| Card 27 (Farah) | Lets the facts change… | Card 24 rule |
| Card 28 (Luis) | Case B | Card 16 "What it is not"; card 26 "Checking is fine. A special standard is not." |
| Card 29 (Jo) | "She has read nothing… she had not read before" | Card 26: "with no new facts in between" (but the name given conflicts with the key: problem 21) |
| Card 30 (Vic) | Case B | Card 14 opening paragraph |
| Card 32 (Ana) | Something they have already done, promised or spent | Card 31: "something they did, promised or paid" |
| Card 34 (tram) | Gives what is already spent… | Card 8 |
| Items 1 to 5 | names | The route shown (see problem 31) |
| Items 6, 7 | first unit question | Card 31 |
| Items 8, 9 | second unit question | Cards 8 and 2 |
| Items 10, 22 | Unit One answers | Not checkable here |
| Item 11 | What does the reasoning do? | Card 33 table (see problem 38) |
| Items 12, 13 | expected sentence / detail | Cards 10 and 16, "Where you will hear it" and "What it is usually like" |
| Item 14 (Lin) | Confirmation bias | Card 16 |
| Item 15 (warehouse) | Motivated reasoning | Cards 18, 36 (see problem 35) |
| Item 16 (Stefan) | Honest change of mind, either first answer | Card 25 (Mei); card 31 "the key accepts both" |
| Item 17 (payroll) | Sunk cost fallacy | Second question: card 8. First question: **unsupported** (problem 23) |
| Item 18 (Nora) | Cognitive dissonance reduction | Card 29, against the key's printed condition (problem 21) |
| Item 19 (Arun) | Confirmation bias | Card 30, Case B |
| Item 20 (Olga) | Motivated reasoning | Card 23 take-away |
| Item 21 (Amit) | Honest change of mind | Card 26 last bullet (see problem 43) |
| Item 23 | What does the reasoning do? | Card 7, but the other options are not ruled out (problem 30) |
| Item 24 | Gives what is already spent… | Card 12 |
| Item 25 | What does the reasoning do? | Card 20 "What it is not"; **a second answer is equally defensible** (problem 30) |
| Return 1 (Rita) | Cognitive dissonance reduction | Card 2 rule |
| Return 3 (Edu) | Confirmation bias | Card 16, second bullet |
| Return 4 (grant) | Motivated reasoning | Card 23 take-away |
| Return 5 (Tess) | Honest change of mind | Card 24 rule; card 29 test ("what came between the old view and the new one?") |
| Return 2 (mountain) | Sunk cost fallacy | Second question: card 8. First question: **unsupported** (problem 23) |
