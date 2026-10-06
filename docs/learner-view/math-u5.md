# Learner view: Basic Math, Unit Five: How many ways something can turn out, or how likely it is

*Five kinds of problem about counting and chance, and a procedure worked out step by step for each.* Unit revision 4, built to lesson standard 1, status: draft.

This file is generated from the data files by `tools/render-learner-view.mjs`. It shows every screen in the order a learner meets it. In the app one card is on screen at a time and the learner moves on when ready.

- **Bold text in quotation marks** is the subject’s own wording for its questions and answers, written once and printed everywhere. Bold names are the names, written once in the same place. Neither is typed anywhere else. "What you must be able to point to" lines and "How to tell them apart" lines are also printed from one place each (the subject’s questions and the pairs it compares).
- ⟦Double brackets⟧ show the words the app marks in a case (one highlight style everywhere).
- The line in italics under each heading is the app’s top bar. The line in square brackets after it is for reviewers and is not shown to the learner.
- Headings, prompt wording and stage instructions that are the same in every unit are the app’s wording, not this unit’s.
- "Shown as soon as you …" is what appears the moment the learner answers. Nothing is hidden behind a second tap the first time a case is met, or after a miss.
- After every answer the app shows: right or wrong; the reason, quoting the marked words; after a miss, one line on the answer the learner chose; and a link to the card that taught it.

---

## Part 1 of 3: Counting the ways: separate lists, one group in order, one group in any order

### 1. Five kinds of problem about counting and chance, and a procedure for each

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 1 of 21*

[reviewers only: card kind `orient`, id `orient-chance`]

After this unit you can take a problem that asks how many different ways something can turn out, or how likely it is, say which of five kinds it is, and solve it with the steps for that kind.

Picture the committee of a town fair, with five questions to settle in one afternoon, all of them about counting or about chance. “The phone stall sells cases in 4 colors and 3 styles: how many different cases is that?” “Eight children run the final race, and medals go to the first three: in how many different ways can the medals be given out?” “The quiz team has 4 places and 9 people have asked to be on it: how many different teams could we pick?” “Each of the three outdoor stalls has a 20% chance of being rained off: how likely is it that at least one of them is?” And the first-aid tent asks: “A quick health test has come back positive: how likely is it that the person really has the illness?”

The first question, which Unit One taught, gives the same answer to all five: **“How many ways something can turn out, or how likely it is”**. But they are five different questions, each with its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. Take 9 things and 4 picks. Depending on how the picks are made, the count of different results can be 6,561, or 3,024, or 126. So first work out what is being counted, or what chance is wanted, and only then solve it.

Four words mean one thing each in this unit. A result is one complete way something can turn out: one particular phone case, one particular team. A list is everything that one choice can be, such as the 3 styles of case. A pick is one thing taken from a list or a group. And a chance is a number that says how likely something is: 0 means it cannot happen, 1 means it is certain, and 0.2, which is the same as 20%, means 1 time in every 5. Many books say probability for what this unit calls a chance.

**What Unit One taught, in one place.** The first question is **“What does the problem ask you to work out?”** Its answers:

- **“How whole numbers split, repeat or are made up”**: give this answer when the problem is about whole numbers and asks whether they split into equal groups with nothing left over, what is left over, what a number is made of, when two things that repeat happen together, where a count ends on a loop such as the days of a week, or whether a number can be written exactly.
- **“A missing number, from a formula, a rate or totals”**: give this answer when the problem leaves out one number, or two, and gives a formula, a rate such as so much for each thing, or totals that the missing number must fit.
- **“What an amount becomes over time, or how long it takes”**: give this answer when the problem follows one amount over time, the amount goes up or down by the same number or is multiplied by the same number each hour, day, month or year, or it changed once and has stayed the same since, and the problem asks what it will be or how long until it reaches a target.
- **“How many ways something can turn out, or how likely it is”**: give this answer when the problem asks how many different ways something can be chosen or ordered, or how likely it is that at least one of several things happens, or that a test result is right. **This unit is about these cases.**
- **“A length, an area or a volume, from a right-angled triangle or the same shape at different sizes”**: give this answer when the problem has a right-angled triangle, or two things of exactly the same shape at different sizes, and asks for a length, an area or a volume, or for how many times more area or volume one has than the other.

Two things are marked separately: the name you give a case, and your answers to the questions on the way to it.

*(One tap on any of these lines opens the card in Unit One that taught it.)*

**The question this unit teaches.** With its answers. Beside each answer is what it leads to. Each card that follows explains one.

What does the problem ask you to count, or find the chance of?
- The ways to make several choices, each from its own list → separate choices, each from its own list
- The ways to pick from one group, when the order counts → picking in order from one group
- The ways to pick a group, when the order does not count → picking a group, in any order
- The chance that at least one of several things happens → at least one of several things happening
- The chance that a test result is right → how far to trust a test result

**The five things, and the name each will get**

- Separate choices, each from its own list: Multiplying the choices
- Picking in order from one group: Permutations
- Picking a group, in any order: Combinations
- At least one of several things happening: Counting the opposite
- How far to trust a test result: Base rate

The unit has three parts, and you can stop after any of them.

1. Counting the ways: separate lists, one group in order, one group in any order
2. How likely: at least one of several things, and trusting a test result
3. The question that tells them apart, then the drill

Each starts from a real case. After each one you answer a quick question, and the reason is shown right away. Nothing here is graded. A miss only decides what comes back.

### 2. Separate choices, each from its own list

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 2 of 21*

[reviewers only: card kind `meet`, id `meet-multprin`]

The first kind of problem is the simplest counting there is: several choices have to be made, and each choice is made from a list of its own.

*The phone cases*

> A phone shop sells cases in 4 colors (black, red, blue, green) and 3 styles (plain, ridged, clear). ⟦A customer picks one color and one style⟧. How many different cases can the shop sell?

- There are two separate choices to make: a color, and a style.
- Each choice has a list of its own: 4 colors and 3 styles. Picking a color uses up none of the styles, and picking a style uses up none of the colors.
- The question asks how many different cases there can be, a count of complete results.

A result here is one whole case, such as “red, ridged”. To see how many there are, write them out. For black there are 3 cases: black plain, black ridged and black clear. Red goes with the same 3 styles, which gives 3 more cases, and blue and green give 3 each. Four colors with 3 cases each is 4 × 3 = 12 different cases.

That is why this kind is multiplication and not addition. Every color can be put with every style, so each of the 4 colors is repeated 3 times, once for each style. The count of results is the count of the first list multiplied by the count of the second.

What makes this kind is that each choice is made from its own full list. Whatever color was chosen, the list of styles is still plain, ridged and clear. Having two numbers to multiply, 4 and 3, is not enough: other kinds of problem have them too.

**What you must be able to point to.** Several separate choices, each made from its own full list, and the question how many different results there are.

A problem like this is **Multiplying the choices**. The “choices” are the separate picks, one from each list, and “multiplying” is what the count needs: the sizes of the lists multiplied together.

You may also hear this called “the multiplication principle” or “the counting principle”. Those words mean the same thing here, and from now on this unit uses one name: **Multiplying the choices**.

### 3. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 3 of 21*

[reviewers only: card kind `check`, id `check-multprin`]

> A bowling alley hires out a ball and a pair of shoes. A customer picks one of 5 ball weights and one of 8 shoe sizes. How many different hires can there be?

**You are asked:** Which words show that each choice is made from its own list? Tap them.

The pieces you can tap:
1. “A bowling alley hires out a ball and a pair of shoes.”
2. “A customer picks one of 5 ball weights and one of 8 shoe sizes.”
3. “How many different hires can there be?”

**Shown as soon as you tap**

- If you are right: “Right: ‘A customer picks one of 5 ball weights and one of 8 shoe sizes.’.” The words “picks one of 5 ball weights and one of 8 shoe sizes” give two separate choices, a ball weight and a shoe size, each from a list of its own, and ask how many different hires there can be. Picking a weight uses up no shoe size, and picking a size uses up no weight. That is **“The ways to make several choices, each from its own list”**. The answer for this case is **“The ways to make several choices, each from its own list”**, and the name is **Multiplying the choices**.
- If you miss: “The words are ‘A customer picks one of 5 ball weights and one of 8 shoe sizes.’.” The same reason follows, and then a line about the piece you tapped:
  - “A bowling alley hires out a ball and a pair of shoes.”: That names the two things that are hired. It does not say how the customer chooses them.
  - “How many different hires can there be?”: That is the question, a count of results. The words that show how the choices are made come in the sentence before it.
- Taught on: “Separate choices, each from its own list” (one tap opens the card).

### 4. Worked: how many different sandwiches?

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 4 of 21*

[reviewers only: card kind `solved`, id `solved-multprin-1`]

Here is the procedure for the first kind with real numbers: a sandwich shop, and every step written out.

**The problem**

> A sandwich shop lets a customer pick one of 3 breads, one of 5 fillings and one of 2 sauces. How many different sandwiches can the shop make?

**The working, step by step**

- Name each choice that has to be made: bread; filling; sauce

Each choice is a separate decision that the customer makes, and each has a list of its own. Naming them first shows what has to be counted: three choices, a bread, a filling and a sauce. A sandwich is one result of all three at once.

- Count the full list for each choice: bread: 3; filling: 5; sauce: 2

The count for a choice is how many different things it can be, whatever was picked for the other choices. The shop has 3 breads, 5 fillings and 2 sauces, and a customer who picks rye still has all 5 fillings and both sauces to choose from. That is what makes each list full.

- Multiply the counts: 3 × 5 × 2 = 30 (3 × 5 = 15, then 15 × 2 = 30). That is 30 sandwiches

**You are asked:** This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.

- Every one of the 3 breads can go with every one of the 5 fillings, and every one of those pairs can go with each of the 2 sauces, so the counts multiply.
- 3 + 5 + 2 = 10 is the number of things on the shelf.
- The shop has 3 breads.

**Shown as soon as you answer**

- The one that explains it: Every one of the 3 breads can go with every one of the 5 fillings, and every one of those pairs can go with each of the 2 sauces, so the counts multiply.
  - If you chose “3 + 5 + 2 = 10 is the number of things on the shelf.”: That is true, but it counts single items, a bread or a filling or a sauce, and never a whole sandwich. It does not say why the counts are multiplied.
  - If you chose “The shop has 3 breads.”: That is true, and it is one of the counts, but it does not say what to do with the counts.

Take one bread, say rye. With rye you can have any of the 5 fillings, which gives 5 different sandwiches that start with rye. The next bread, white, also goes with all 5 fillings, which gives 5 more, and so does the third bread. So the breads and fillings together give 3 × 5 = 15 different pairs.

Each of those 15 pairs can then go with either sauce, which doubles the count: every pair appears once with the first sauce and once with the second. 15 × 2 = 30. Had you added instead, 3 + 5 + 2 = 10, you would have counted the single items on the shelf, and a sandwich such as rye, ham and mustard would not be in your count at all.

**The result**

The shop can make 30 different sandwiches, each made of one bread, one filling and one sauce.


### 5. Picking in order from one group

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 5 of 21*

[reviewers only: card kind `meet`, id `meet-perm`]

The first kind gave every choice a list of its own. The second kind keeps the picks one after another, with one change: all the picks come out of the same group, so each pick takes something away from what is left.

*The four runners*

> Four friends, Ana, Ben, Cal and Dev, run a race on the school field. ⟦The first across the line gets a gold medal and the second gets a silver medal⟧. In how many different ways can the two medals be given out?

- There is one group to pick from: four friends, Ana, Ben, Cal and Dev.
- The picks are made one after another: first the gold medal, then the silver medal. The medals are different, so who gets which one matters.
- Whoever wins the gold medal cannot also win the silver, so the second pick has one fewer to choose from.

List the results by who gets gold. If Ana gets gold, the silver can go to Ben, Cal or Dev: 3 results. If Ben gets gold, the silver can go to Ana, Cal or Dev: 3 more. Cal and Dev as gold winners give 3 each. Four gold winners with 3 silver winners each is 4 × 3 = 12 different results.

So the count is a product again, but the second number is 3, not 4. Ana cannot be both gold and silver, so the list for the silver medal is the group with the gold winner taken out. Each pick uses up one member of the group, and the counts fall by one each time: 4, then 3. With a third medal it would be 4 × 3 × 2. In the first kind, picking a color used up none of the styles, so the second list was as long as the first.

The order counts. Ana with gold and Ben with silver is a different result from Ben with gold and Ana with silver, because the medals are different. Both are among the 12.

**What you must be able to point to.** One group to pick from, picks that each leave one fewer to choose from, a different order counting as a different result, and the question how many different results there are.

A problem like this is **Permutations**. The name is for the list of picks itself: things taken one after another from one group, so that the same things in a different order make a different list.

You may also hear this called “arrangements”. That means the same thing here, and from now on this unit uses one name: **Permutations**.

### 6. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 6 of 21*

[reviewers only: card kind `check`, id `check-perm`]

> A small ferry has room for only 2 of the 5 people waiting on the quay. The first to board takes the window seat and the second takes the aisle seat. In how many different ways can the two seats be filled?

**You are asked:** Which words show that the picks come one after another from one group, and that who goes first matters? Tap them.

The pieces you can tap:
1. “A small ferry has room for only 2 of the 5 people waiting on the quay.”
2. “The first to board takes the window seat and the second takes the aisle seat.”
3. “In how many different ways can the two seats be filled?”

**Shown as soon as you tap**

- If you are right: “Right: ‘The first to board takes the window seat and the second takes the aisle seat.’.” The words “The first to board takes the window seat and the second takes the aisle seat” pick two people one after another from one group of 5, and the seats are different, so who boards first matters. Whoever boards first is no longer waiting, so the second pick has one fewer to choose from. That is **“The ways to pick from one group, when the order counts”**. The answer for this case is **“The ways to pick from one group, when the order counts”**, and the name is **Permutations**.
- If you miss: “The words are ‘The first to board takes the window seat and the second takes the aisle seat.’.” The same reason follows, and then a line about the piece you tapped:
  - “A small ferry has room for only 2 of the 5 people waiting on the quay.”: That gives the one group and how many are picked. The words that show how the picks are made come next.
  - “In how many different ways can the two seats be filled?”: That is the question, a count of results. The words that show how the picks are made come in the sentence before it.
- Taught on: “Picking in order from one group” (one tap opens the card).

### 7. Worked: who can fill three jobs in a club?

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 7 of 21*

[reviewers only: card kind `solved`, id `solved-perm-1`]

Here is the procedure for the second kind with real numbers: a hiking club, and every step written out.

**The problem**

> A hiking club with 12 members elects a chair, a secretary and a treasurer. No member may hold more than one of the jobs. In how many different ways can the three jobs be filled?

**The working, step by step**

- Count the group and the picks: Group: 12 members. Picks: 3 (chair, secretary, treasurer)

The group is everyone who can be picked, 12 members, and the picks are the three jobs. The jobs differ from each other, so the order of the picks matters: chair Ana with secretary Ben is not the same as chair Ben with secretary Ana.

- Write how many can be picked each time: chair: 12; secretary: 11; treasurer: 10

**You are asked:** This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.

- Whoever is picked for one job is taken out of the group, because no member may hold two jobs, so each job is picked from a group one smaller than for the job before.
- 12 members are in the club.
- There are three jobs to fill.

**Shown as soon as you answer**

- The one that explains it: Whoever is picked for one job is taken out of the group, because no member may hold two jobs, so each job is picked from a group one smaller than for the job before.
  - If you chose “12 members are in the club.”: That is true, and it is the count for the first job, but it does not say why the counts then fall to 11 and 10.
  - If you chose “There are three jobs to fill.”: That is true, and it is how many counts there are, but it does not say why they are different from one another.

Start with the chair. Any of the 12 members can be chair, so there are 12 choices. Say Ana is chair. Now the secretary: Ana already has a job and may not have another, so the secretary comes from the other 11 members. Say Ben is secretary. For the treasurer, Ana and Ben are both taken, which leaves 10.

The counts do not fall because the problem is awkward. They fall because each pick uses up a member. That is the difference from the first kind, where each choice had a full list of its own. Here every pick comes out of the same group, so the list for the next pick is one shorter.

- Multiply them: 12 × 11 × 10 = 1,320. That is 1,320 ways to fill the jobs

Each pick is a choice from a list of its own, one shorter than the one before, so the counts multiply, as they did in the first kind: for each of the 12 chairs there are 11 secretaries, and for each of those 132 pairs there are 10 treasurers. 12 × 11 = 132, and 132 × 10 = 1,320. Every order is counted separately, because chair Ana with secretary Ben is a different way to fill the jobs from chair Ben with secretary Ana.

**The result**

The club can fill the three jobs in 1,320 different ways.


### 8. Multiplying the choices or Permutations: telling them apart

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 8 of 21*

[reviewers only: card kind `lookalike`, id `look-multprin-perm`]

The first and second kinds both multiply one count for each choice, and both can be about the same people and the same jobs. This card puts them side by side, with one sentence changed.

**Case A**

> A club of 6 members is to fill 3 jobs: president, secretary and treasurer. The same member may hold more than one job. In how many different ways can the jobs be filled?

**Case B**

> A club of 6 members is to fill 3 jobs: president, secretary and treasurer. No member may hold more than one job. In how many different ways can the jobs be filled?

**What to compare.** Both problems are about the same club of 6 members and the same three jobs. Compare one thing: can the same member hold more than one job?

**You are asked:** Which case gives the answer **“The ways to pick from one group, when the order counts”**? (Case A / Case B)

**Shown as soon as you answer.** Case B.

**Why this one and not the other**

In Case A the same member may hold more than one job. So the list for each job is all 6 members, whatever was decided for the other jobs. There are three separate choices, each from a full list of its own: the answer is **“The ways to make several choices, each from its own list”**, and the count is 6 × 6 × 6 = 216.

In Case B no member may hold more than one job. A member given the first job is out for the other two, so the second job is picked from 5 members and the third from 4. That is one group, with each pick using someone up: the answer is **“The ways to pick from one group, when the order counts”**, and the count is 6 × 5 × 4 = 120.

**How to tell them apart**

After one choice has been made, is the next one made from a list of the same length, or from what is left of the same group?

**Side by side**

| | Multiplying the choices | Permutations |
|---|---|---|
| What does the problem ask you to work out? | How many ways something can turn out, or how likely it is | How many ways something can turn out, or how likely it is |
| What does the problem ask you to count, or find the chance of? | The ways to make several choices, each from its own list | The ways to pick from one group, when the order counts |
| What you must be able to point to | Several separate choices, each made from its own full list, and the question how many different results there are | One group to pick from, picks that each leave one fewer to choose from, a different order counting as a different result, and the question how many different results there are |


### 9. Picking a group, in any order

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 9 of 21*

[reviewers only: card kind `meet`, id `meet-comb`]

The second kind counted every order separately. The third kind starts from exactly the same picks, one group with each pick using someone up, but the order no longer counts, and the count has to be brought down to match.

*The ice at the picnic*

> Four friends, Ana, Ben, Cal and Dev, are at a picnic. ⟦Two of them are sent to fetch ice, and both do the same job⟧. In how many different ways can the pair be picked?

- There is one group to pick from: four friends, Ana, Ben, Cal and Dev.
- Two are picked, and both do the same job: fetching the ice. Nobody is first or second.
- Each pick still uses someone up: once Ana is picked, only Ben, Cal and Dev are left for the other place.

Both friends fetch the ice, so the two picks are not for different things. List the pairs: Ana and Ben, Ana and Cal, Ana and Dev, Ben and Cal, Ben and Dev, Cal and Dev. That is 6 different pairs.

Compare the race. The same four friends and two picks gave 12 results there, because gold for Ana and silver for Ben was a different result from gold for Ben and silver for Ana. Here “Ana and Ben” and “Ben and Ana” are the same pair, so every pair was counted twice in the 12: 12 ÷ 2 = 6.

So this kind is counted in two steps. First count the picks as if the order mattered, as in the second kind: 4 × 3 = 12. Then divide by the number of orders one pair can be put in, 2 × 1 = 2, so that each pair is counted once.

**What you must be able to point to.** One group to pick from, picks that each leave one fewer to choose from, the same things in any order counting as one result, and the question how many different results there are.

A problem like this is **Combinations**. The name is for the group that is picked, whatever order its members were picked in: the same people in a different order are the same group.

You may also hear this called “selections” or “n choose r”. Those words mean the same thing here, and from now on this unit uses one name: **Combinations**.

### 10. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 10 of 21*

[reviewers only: card kind `check`, id `check-comb`]

> A cheese shop makes a sampler box of 3 cheeses picked from the 6 on its counter. The box is the same whichever cheese goes in first. How many different boxes can it make?

**You are asked:** Which words show that the order of the picks does not matter? Tap them.

The pieces you can tap:
1. “A cheese shop makes a sampler box of 3 cheeses picked from the 6 on its counter.”
2. “The box is the same whichever cheese goes in first.”
3. “How many different boxes can it make?”

**Shown as soon as you tap**

- If you are right: “Right: ‘The box is the same whichever cheese goes in first.’.” The words “The box is the same whichever cheese goes in first” pick 3 cheeses from one group of 6, with each pick leaving one fewer, and the same three cheeses in any order are the same box. That is **“The ways to pick a group, when the order does not count”**. The answer for this case is **“The ways to pick a group, when the order does not count”**, and the name is **Combinations**.
- If you miss: “The words are ‘The box is the same whichever cheese goes in first.’.” The same reason follows, and then a line about the piece you tapped:
  - “A cheese shop makes a sampler box of 3 cheeses picked from the 6 on its counter.”: That gives the one group and how many are picked. The words that show whether the order counts come next.
  - “How many different boxes can it make?”: That is the question, a count of results. The words that show whether the order counts come in the sentence before it.
- Taught on: “Picking a group, in any order” (one tap opens the card).

### 11. Worked: how many different quiz teams?

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 11 of 21*

[reviewers only: card kind `solved`, id `solved-comb-1`]

Here is the procedure for the third kind with real numbers: a quiz night, and every step written out.

**The problem**

> A quiz night needs a team of 4 players, and 9 people have put their names forward. Every player on the team has the same part, so the order of the names does not matter. How many different teams can be picked?

**The working, step by step**

- Count the group and the picks: Group: 9 people. Picked: 4

The group is the 9 people who put their names forward, and 4 of them are picked. All four have the same part on the team, so the same four people in a different order are the same team.

- Count the picks as if the order mattered: 9 × 8 × 7 × 6 = 3,024

This is the count of the second kind: each pick uses up a person, so the counts fall, 9, 8, 7, 6, and they multiply. It is not the answer yet, because it counts a team once for every order its four people can be listed in. Ana, Ben, Cal, Dev and Dev, Cal, Ben, Ana are two entries in this count, but they are one team.

- Count the orders one chosen group can be put in: 4 people can be put in order in 4 × 3 × 2 × 1 = 24 ways

A group of 4 can be listed in order in 4 × 3 × 2 × 1 ways: any of the 4 first, then any of the 3 left, then either of the 2 left, then the last. That makes 24 different lists of the same four people.

- Divide the first count by the second: 3,024 ÷ 24 = 126. That is 126 teams

**You are asked:** This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.

- Every team is in the count of 3,024 once for each of the 24 orders its four people can be put in, so dividing by 24 leaves each team once.
- 3,024 ÷ 24 = 126.
- A team of 4 can be put in order in 24 ways.

**Shown as soon as you answer**

- The one that explains it: Every team is in the count of 3,024 once for each of the 24 orders its four people can be put in, so dividing by 24 leaves each team once.
  - If you chose “3,024 ÷ 24 = 126.”: That is true, and it is the working of the step, but it does not say why dividing by 24 is right.
  - If you chose “A team of 4 can be put in order in 24 ways.”: That is true, and it is where the 24 comes from, but it does not say why the count is divided by it.

Think of the count of 3,024 as a long table with one row for every way of picking 4 people in order. Take any one team, Ana, Ben, Cal and Dev. Its 4 people can be put in order in 24 ways, so this team has 24 rows in the table, one for each order. Every other team has exactly 24 rows too.

So the table has 24 rows for every team, and 3,024 rows in all. The number of teams is the number of rows divided by 24: 3,024 ÷ 24 = 126. A check: 126 × 24 = 3,024.

**The result**

The quiz night can pick 126 different teams of 4 from the 9 people.


### 12. Permutations or Combinations: telling them apart

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 1 of 3 · Card 12 of 21*

[reviewers only: card kind `lookalike`, id `look-perm-comb`]

The second and third kinds both start from one group with each pick using someone up, and they have the same first count. This card puts them side by side, with the same group and the same 3 picks.

**Case A**

> A café owner has 6 pastries and puts 3 of them in a row in the window, from left to right. How many different rows can she make?

**Case B**

> A café owner has 6 pastries and puts 3 of them in a box. The box is the same whichever pastry goes in first. How many different boxes can she make?

**What to compare.** Both problems are about the same café owner, the same 6 pastries and the same 3 picks. Compare one thing: does the order the pastries go in matter?

**You are asked:** Which case gives the answer **“The ways to pick a group, when the order does not count”**? (Case A / Case B)

**Shown as soon as you answer.** Case B.

**Why this one and not the other**

In Case A the pastries go in a row, from left to right, so a row with the same pastries in a different order is a different row. The order counts, and the answer is **“The ways to pick from one group, when the order counts”**. The count is 6 × 5 × 4 = 120.

In Case B the pastries go in a box, and the box is the same whichever pastry goes in first. The same three pastries in any order are one box, and the answer is **“The ways to pick a group, when the order does not count”**. The count in order is the same 120, and each box is in it once for every order its three pastries can be put in, 3 × 2 × 1 = 6, so the answer is 120 ÷ 6 = 20.

**How to tell them apart**

Does the same group of things, picked in a different order, count as a different result or as the same one?

**Side by side**

| | Permutations | Combinations |
|---|---|---|
| What does the problem ask you to work out? | How many ways something can turn out, or how likely it is | How many ways something can turn out, or how likely it is |
| What does the problem ask you to count, or find the chance of? | The ways to pick from one group, when the order counts | The ways to pick a group, when the order does not count |
| What you must be able to point to | One group to pick from, picks that each leave one fewer to choose from, a different order counting as a different result, and the question how many different results there are | One group to pick from, picks that each leave one fewer to choose from, the same things in any order counting as one result, and the question how many different results there are |


*End of part 1. You can stop here; your place is kept. Next: part 2, How likely: at least one of several things, and trusting a test result.*

---

## Part 2 of 3: How likely: at least one of several things, and trusting a test result

### 13. At least one of several things happening

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 13 of 21*

[reviewers only: card kind `meet`, id `meet-complement`]

The first three kinds counted results. The fourth kind asks for a chance instead: how likely it is that one or more of a set of separate things happens. It is found by working out the opposite.

*The coin game*

> A game is won if a fair coin lands heads ⟦at least once in 3 flips⟧. Each flip has a chance of 0.5 of landing heads, and one flip does not change the next. How likely is it that the game is won?

- There are 3 separate things that can happen: three flips of a fair coin. Each flip has a chance of 0.5 of landing heads, and one flip does not change the next.
- The game is won if at least one flip lands heads: one head, two or three would all win.
- The question asks how likely that is, a chance, and not a count of results.

Write out every run of 3 flips, with H for heads and T for tails: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. That is 8 runs, all equally likely. Every one of them has at least one head except TTT. So 7 of the 8 runs win, and the chance of winning is 7 ÷ 8 = 0.875, which is 87.5%.

Notice what was easy. Counting the winning runs was a chore, but there is only one losing run, TTT. Each flip is tails with a chance of 0.5, and the flips are separate, so the chance of three tails in a row is 0.5 × 0.5 × 0.5 = 0.125, which is 1 in 8.

The game is either won or lost, so the chance of winning and the chance of losing add up to 1: the chance of winning is 1 − 0.125 = 0.875. That is how this kind works: to find the chance that at least one thing happens, find the chance that none of them happens, which is the opposite, and take it away from 1. The things must be separate, because that is what allows the chances of “none” to be multiplied.

**What you must be able to point to.** Several separate things, the chance of each, and the question how likely it is that at least one of them happens.

A problem like this is **Counting the opposite**. “The opposite” of at least one thing happening is that none of them happens, and the procedure works that out and takes it away from 1.

You may also hear this called “the complement rule”. That means the same thing here, and from now on this unit uses one name: **Counting the opposite**.

### 14. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 14 of 21*

[reviewers only: card kind `check`, id `check-complement`]

> A town has 2 ambulances. Each one is out of action on 5% of days, and the two are separate: one being out of action does not change the chance for the other. How likely is it that at least one ambulance is out of action on a given day?

**You are asked:** Which words show what has to be found about the separate things? Tap them.

The pieces you can tap:
1. “A town has 2 ambulances.”
2. “Each one is out of action on 5% of days, and the two are separate: one being out of action does not change the chance for the other.”
3. “How likely is it that at least one ambulance is out of action on a given day?”

**Shown as soon as you tap**

- If you are right: “Right: ‘How likely is it that at least one ambulance is out of action on a given day?’.” The words “at least one ambulance is out of action on a given day” give the chance for each of 2 separate ambulances and ask how likely it is that at least one of them is out of action. That is **“The chance that at least one of several things happens”**. The answer for this case is **“The chance that at least one of several things happens”**, and the name is **Counting the opposite**.
- If you miss: “The words are ‘How likely is it that at least one ambulance is out of action on a given day?’.” The same reason follows, and then a line about the piece you tapped:
  - “A town has 2 ambulances.”: That says how many separate things there are. It does not say what has to be found about them.
  - “Each one is out of action on 5% of days, and the two are separate: one being out of action does not change the chance for the other.”: That gives the chance for each, and says that they are separate. It does not say what has to be found about them.
- Taught on: “At least one of several things happening” (one tap opens the card).

### 15. Worked: a bus that is late at least once in a week

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 15 of 21*

[reviewers only: card kind `solved`, id `solved-complement-1`]

Here is the procedure for the fourth kind with real numbers: a commuter and her bus, and every step written out.

**The problem**

> A commuter’s bus is late on 20% of days, and one day’s lateness does not change the chance on another day. How likely is it that the bus is late at least once in a working week of 5 days?

**The working, step by step**

- Find the chance that each thing does not happen: Each day: 1 − 0.2 = 0.8

The bus is late on 20% of days, which is a chance of 0.2, or 20 days in every 100. On any day it is either late or not late, so the chance that it is not late is what is left of 1: 1 − 0.2 = 0.8, or 80 days in 100.

- Multiply those chances: the chance that none of them happens: 0.8 × 0.8 × 0.8 × 0.8 × 0.8 = 0.32768

For the bus to be on time on all 5 days, it must be on time on the first day, and the second, and the third, and the fourth, and the fifth. The days are separate, so the chances multiply. That is the product: 0.8 × 0.8 × 0.8 × 0.8 × 0.8 = 0.32768, about 33 weeks in 100.

- Take that chance away from 1: the chance that at least one happens: 1 − 0.32768 = 0.67232, which is 67.2%

**You are asked:** This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.

- Either the bus is late at least once, or it is never late. These two cannot both happen and nothing else can, so their chances add up to 1, and the chance of at least one late day is 1 minus the chance of none.
- The chance of a week with no late day is 0.32768.
- The bus is late on 20% of days.

**Shown as soon as you answer**

- The one that explains it: Either the bus is late at least once, or it is never late. These two cannot both happen and nothing else can, so their chances add up to 1, and the chance of at least one late day is 1 minus the chance of none.
  - If you chose “The chance of a week with no late day is 0.32768.”: That is true, and it was found in the step before, but it is the chance of the opposite of what is asked. It does not say why taking it from 1 gives the answer.
  - If you chose “The bus is late on 20% of days.”: That is true, but it is the chance for one day, and it does not say how the chance for the whole week is found.

Imagine 100 weeks. In about 33 of them the bus is on time every day. In every other week at least one day is late. So the weeks with at least one late day are the 100 − 33 that are left, about 67 in 100.

This is why the procedure goes the long way round. The chance of at least one late day would mean adding up the chances of exactly one late day, exactly two, three, four and five. The chance of none is a single product, and the answer is what is left of 1.

**The result**

The bus is late at least once in a working week about 67 times in 100, a chance of 67.2%.


### 16. How far to trust a test result

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 16 of 21*

[reviewers only: card kind `meet`, id `meet-baserate`]

The fourth kind found the chance of something that is still to happen. The fifth kind asks for a chance after the event: a test has already given a result, and the question is how far to trust it.

*The village clinic*

> In a village of 1,000 people, 1 person in 50 has a skin condition. ⟦A test shows the condition in 90% of the people who have it, and wrongly shows it in 5% of the people who do not⟧. A person’s test shows the condition. How likely is it that the person has it?

- A test has given a result: this person’s test shows the skin condition.
- The condition is rare in the village: 1 person in 50 has it.
- The test is not perfect: it shows the condition in 90% of the people who have it, and it wrongly shows it in 5% of the people who do not.
- The question asks how likely it is that the result is right: that this person really has the condition.

It is tempting to answer “90%”, because the test finds the condition in 90% of the people who have it. But that is the chance of a positive result for someone who has the condition. The question is the other way round: the chance of having the condition for someone who has a positive result.

Chances like these are hard to combine in your head, but counts of people are easy, so imagine the whole village of 1,000 people and count them. 1 person in 50 has the condition: that is 20 people, and the other 980 do not. The test shows the condition in 90% of the 20 who have it, which is 18 people. It also shows the condition, wrongly, in 5% of the 980 who do not have it: 49 people.

Now look at everyone whose test shows the condition: 18 + 49 = 67 people. Only 18 of them really have it. So a person whose test shows the condition has it with a chance of 18 out of 67, which is about 27%, and not 90%. 980 people do not have the condition, so even a small rate of wrong results, 5%, makes 49 wrong ones, far more than the 18 right ones. If the thing were common, most of the positive results would be right.

**What you must be able to point to.** A test or a check that has given a result, how rare the thing it looks for is, how often the test is wrong, and the question how likely the result is to be right.

A problem like this is **Base rate**. The name is for how common the thing is in the group before anyone is tested: here 1 in 50. It is the number people forget, and the whole answer depends on it.

You may also hear this called “the base rate fallacy”. That means the same thing here, and from now on this unit uses one name: **Base rate**.

### 17. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 17 of 21*

[reviewers only: card kind `check`, id `check-baserate`]

> A building’s alarm sensor has sounded. A real fire hazard is present on 1 morning in 2,000. The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one. How likely is it that the ring means a real hazard?

**You are asked:** Which words say how often the sensor is right and how often it is wrong? Tap them.

The pieces you can tap:
1. “A building’s alarm sensor has sounded.”
2. “A real fire hazard is present on 1 morning in 2,000.”
3. “The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one.”
4. “How likely is it that the ring means a real hazard?”

**Shown as soon as you tap**

- If you are right: “Right: ‘The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one.’.” The words “rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one” say how often the sensor is right and wrong, after it has sounded and when a real hazard is rare. That is a result to be read, and the question is how far to trust it, which is **“The chance that a test result is right”**. The answer for this case is **“The chance that a test result is right”**, and the name is **Base rate**.
- If you miss: “The words are ‘The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one.’.” The same reason follows, and then a line about the piece you tapped:
  - “A building’s alarm sensor has sounded.”: That says a result has come in. It does not say how often the sensor is right or wrong.
  - “A real fire hazard is present on 1 morning in 2,000.”: That says how rare the thing is, and it matters. But the words that say how often the sensor is right and wrong come next.
  - “How likely is it that the ring means a real hazard?”: That is the question. The words that say how often the sensor is right and wrong come before it.
- Taught on: “How far to trust a test result” (one tap opens the card).

### 18. Worked: how far to trust a positive test

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 2 of 3 · Card 18 of 21*

[reviewers only: card kind `solved`, id `solved-baserate-1`]

Here is the procedure for the fifth kind with real numbers: a quick test for an infection, and every step written out.

**The problem**

> In a town, 1 person in 100 has a particular infection. A quick test finds the infection in 90% of the people who have it, and wrongly shows it in 5% of the people who do not. A person’s test is positive. How likely is it that the person has the infection?

**The working, step by step**

- Imagine a large group and split it into those who have the thing and those who do not: Imagine 10,000 people. 1 in 100 have it: 100 have it and 9,900 do not

Chances are hard to combine in your head, but counts of imagined people are easy. A group of 10,000 is chosen because 1 in 100, 90% and 5% all come out as whole numbers of people. 1 in 100 of 10,000 is 100 people with the infection, and the other 10,000 − 100 = 9,900 do not have it.

- Count the positive results among those who have it: 90% of 100 = 90

The test finds the infection in 90% of the people who have it, so 90% of those 100 people get a positive result: 90 of them. The other 10 people who have the infection get a negative result, because the test misses them.

- Count the positive results among those who do not have it: 5% of 9,900 = 495

**You are asked:** This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.

- The test wrongly shows the infection in 5% of the people who do not have it, and there are far more of those people than people who have it, so even a small share of them is a large number of positive results.
- 5% of 9,900 is 495.
- The test finds the infection in 90% of the people who have it.

**Shown as soon as you answer**

- The one that explains it: The test wrongly shows the infection in 5% of the people who do not have it, and there are far more of those people than people who have it, so even a small share of them is a large number of positive results.
  - If you chose “5% of 9,900 is 495.”: That is true, and it is the working of the step, but it does not say why this step is needed.
  - If you chose “The test finds the infection in 90% of the people who have it.”: That is true, but it belongs to the step before. It does not say why the people who do not have the infection must be counted too.

A positive result can come from two kinds of people: people who have the infection, and people who do not but whom the test wrongly flags. The second kind starts from 9,900 people, nearly everyone, so a rate as small as 5% of them gives 495 positive results.

This is the step that people leave out. The test is wrong about only 5 in 100 healthy people, which sounds small, but there are 99 healthy people for every person who has the infection. Counting only the 90 who are rightly flagged, and forgetting the 495 who are wrongly flagged, makes the test look far more trustworthy than it is.

- Add the two counts to get every positive result: 90 + 495 = 585

These are all the people whose test is positive: 90 who have the infection and 495 who do not. The person in the problem is one of these 585, and nothing else is known about them, so this is the whole group the person comes from.

- Divide the right positive results by every positive result: 90 ÷ 585 = 0.1538, which is about 15.4%

Of the 585 positive results, only the 90 from people who have the infection are right, so the chance that this person has the infection is 90 out of 585, which is 0.1538. Notice that it is nowhere near 90%, the share of infected people that the test finds. That figure starts from people who have the infection. This question starts from people with a positive result.

**The result**

A positive test means that the person has the infection about 15 times in 100, a chance of about 15.4%, even though the test finds the infection in 90% of the people who have it.


*End of part 2. You can stop here; your place is kept. Next: part 3, The question that tells them apart, then the drill.*

---

## Part 3 of 3: The question that tells them apart, then the drill

### 19. The one question that tells the five kinds apart

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 3 of 3 · Card 19 of 21*

[reviewers only: card kind `question`, id `q-c1`]

At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its five answers in one place and says why it is asked before any working.

**The question:** **“What does the problem ask you to count, or find the chance of?”**

**What it is for.** Tells apart three ways of counting how many results there are, and two ways of finding a chance.

**Its answers**

Each answer leads to one name, and so rules out the other four.

- **“The ways to make several choices, each from its own list”**
  - Give this answer when the problem has several separate choices, such as a size, a topping and a crust, or each wheel of a lock, each made from its own full list, and asks how many different results there are.
  - It leads to **Multiplying the choices**.
- **“The ways to pick from one group, when the order counts”**
  - Give this answer when the problem picks things one after another from one group, each pick leaves one fewer to choose from, and a different order counts as a different result, as with gold, silver and bronze.
  - It leads to **Permutations**.
- **“The ways to pick a group, when the order does not count”**
  - Give this answer when the problem picks several things from one group, each pick leaves one fewer to choose from, and the same things in a different order count as the same result, as with a team or a set of lottery numbers.
  - It leads to **Combinations**.
- **“The chance that at least one of several things happens”**
  - Give this answer when the problem gives the chance of each of several separate things and asks how likely it is that at least one of them happens.
  - It leads to **Counting the opposite**.
- **“The chance that a test result is right”**
  - Give this answer when a test or a check has given a result, the thing it looks for is rare, the test is sometimes wrong, and the problem asks how likely it is that the result is right.
  - It leads to **Base rate**.

**Why it decides**

The same numbers give very different answers depending on how the choices are made and what is asked: whether each choice has its own list, whether each pick leaves one fewer to choose from, whether the order counts, whether the chance is for at least one of several things, or whether a test result is being read. Each needs its own procedure.

A wrong procedure gives a number as neat as the right one, and nothing in the number says which was meant. Only the words of the problem do.

**How to answer it from a case**

Read the last sentence of the problem first, because the question is usually there, and find what it asks: how many different results there are, or how likely something is. Mark those words, and then look for the words that say how the choices are made.

If it asks how many, ask whether each choice has a list of its own (**“The ways to make several choices, each from its own list”**) or whether the picks come out of one group. If they come out of one group, ask whether a different order is a different result (**“The ways to pick from one group, when the order counts”**) or the same one (**“The ways to pick a group, when the order does not count”**). If it asks how likely, ask whether it is how likely it is that one or more of a set of separate things happens (**“The chance that at least one of several things happens”**) or how likely it is that a result is right (**“The chance that a test result is right”**).

**When two answers both seem to fit**

A problem can seem to be both **Multiplying the choices** and **Combinations**, or both **Counting the opposite** and **Multiplying the choices** or **Base rate**. The line for each pair below says what settles it.

- Multiplying the choices or Permutations: After one choice has been made, is the next one made from a list of the same length, or from what is left of the same group?
- Permutations or Combinations: Does the same group of things, picked in a different order, count as a different result or as the same one?
- Multiplying the choices or Combinations: Are there several separate lists with one pick from each, or one list with several picks from it?
- Counting the opposite or Multiplying the choices: Is the answer wanted a count of results, or the chance that something happens?
- Counting the opposite or Base rate: Are there several separate things, with a chance for each, that have yet to happen, or is there one result that has already come in and a question about how far to trust it?


### 20. A question about a new case

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 3 of 3 · Card 20 of 21*

[reviewers only: card kind `check`, id `check-c1`]

> A radio presenter picks 4 of her 10 new songs and plays them one after another, in an order she fixes in advance. How many different running orders are possible?

**The question:** **“What does the problem ask you to count, or find the chance of?”**

- The ways to make several choices, each from its own list
- The ways to pick from one group, when the order counts
- The ways to pick a group, when the order does not count
- The chance that at least one of several things happens
- The chance that a test result is right

**Shown as soon as you answer**

- If you are right: “Right: **The ways to pick from one group, when the order counts.**” The words “plays them one after another, in an order she fixes in advance” pick 4 songs from one group of 10, one after another, and fix the order as part of the result. Each song played is no longer available, and a different order is a different running order. That is **“The ways to pick from one group, when the order counts”**. This answer leads to **Permutations**.
- If you miss: “The answer is **The ways to pick from one group, when the order counts.**” The same reason follows, then one line on the answer you chose:
  - Any wrong answer: one line on what that answer needs, and what this case shows instead.
- Taught on: “The one question that tells the five kinds apart” (one tap opens the card).

### The drill

The cards are out of view, and every case is new. Cases that are easy to mix up sit next to each other on purpose. Two of the cases come from an earlier unit. Nothing is graded. What you miss comes back before the drill ends and on later days.

After each answer, look at the slip named behind a wrong choice: every wrong choice is the answer one particular slip produces. Some of the problems tell a story that points the wrong way, on purpose: how the picks are made, and what is asked, decide the kind, and nothing else in the story does.

#### Last stage. No help. Answer the questions, say what kind of problem it is, then solve it.

Each question is shown with all of its answers, in order, and the names offered are the five this unit teaches.

**Drill item 1 of 13**

*(Drawn by the app from the bank of Unit One: its drill and return cases, due ones first. The learner is not told which unit it is from. This is a sample.)*

> Dev has 57 stamps. He wants to put them into albums so that every album holds the same number of stamps, with more than one album and more than one stamp in each. Is it possible?

**You are asked:** What does the problem ask you to work out?

- How whole numbers split, repeat or are made up
- A missing number, from a formula, a rate or totals
- What an amount becomes over time, or how long it takes
- How many ways something can turn out, or how likely it is
- A length, an area or a volume, from a right-angled triangle or the same shape at different sizes

**Shown as soon as you answer**

- If you are right: “Right: **How whole numbers split, repeat or are made up.**” The problem asks whether 57 stamps can be shared evenly between albums: “every album holds the same number of stamps” and “Is it possible?”. There is nothing else to work out: no price, no time passing, no shape.
- If you miss: “The answer is …”, the same reason, then one line on the answer you chose.
- Then, right or wrong: “The rest of this case comes in a later unit.”

**Drill item 2 of 13**

*(Drawn by the app from the bank of Unit One: its drill and return cases, due ones first. The learner is not told which unit it is from. This is a sample.)*

> A hardware store sells 6 meters of chain for $15. Leila wants 20 meters. How much will it cost her?

**You are asked:** What does the problem ask you to work out?

- How whole numbers split, repeat or are made up
- A missing number, from a formula, a rate or totals
- What an amount becomes over time, or how long it takes
- How many ways something can turn out, or how likely it is
- A length, an area or a volume, from a right-angled triangle or the same shape at different sizes

**Shown as soon as you answer**

- If you are right: “Right: **A missing number, from a formula, a rate or totals.**” The problem gives a rate, so much for so many meters, and a new amount to scale it to: “sells 6 meters of chain for $15” and “How much will it cost her?”. The price is the number it leaves out.
- If you miss: “The answer is …”, the same reason, then one line on the answer you chose.
- Then, right or wrong: “The rest of this case comes in a later unit.”

**Drill item 3 of 13**

> A driver can go from town A to town B by 4 different roads, and from town B to town C by 3 different roads. How many different ways are there to drive from A to C, going through B?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 12 ways
- 7 ways
- 4 ways

**Shown as soon as you answer**

- The answer: **12 ways**, and the kind of problem is **Multiplying the choices**.
- The working, step by step:
  - Name each choice that has to be made: first leg; second leg
  - Count the full list for each choice: first leg: 4; second leg: 3
  - Multiply the counts: 4 × 3 = 12. That is 12 ways to go
  Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.
- If you chose 7 ways: You chose **7 ways**. That is the answer you get when you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.
- If you chose 4 ways: You chose **4 ways**. That is the answer you get when you leave the last choice out of the product, so every result is missing one part.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different ways are there to drive from A to C, going through B?” ask how many different ways there are to go, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to make several choices, each from its own list.** The words “from town A to town B by 4 different roads, and from town B to town C by 3 different roads” give two separate choices, a road for the first leg and a road for the second, each from a list of its own, and ask how many different ways there are to go, so the answer is **“The ways to make several choices, each from its own list”**.
  - If you chose **Permutations**: Picking from one group, so that each pick takes something off the list for the next, would be **Permutations**. Here every choice has a full list of its own, and nothing picked on one list changes another.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different sandwiches?” (one tap opens the card).

**Drill item 4 of 13**

> A raffle has 20 tickets in a drum and a first, a second and a third prize. Each ticket can win at most one prize. In how many different ways can the three prizes go to tickets?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 6,840 ways to give out the prizes
- 60 ways to give out the prizes
- 8,000 ways to give out the prizes

**Shown as soon as you answer**

- The answer: **6,840 ways to give out the prizes**, and the kind of problem is **Permutations**.
- The working, step by step:
  - Count the group and the picks: Group: 20 tickets. Picks: 3 (first prize, second prize, third prize)
  - Write how many can be picked each time: first prize: 20; second prize: 19; third prize: 18
  - Multiply them: 20 × 19 × 18 = 6,840. That is 6,840 ways to give out the prizes
  The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.
- If you chose 60 ways to give out the prizes: You chose **60 ways to give out the prizes**. That is the answer you get when you multiply the size of the group by the number of picks, 20 × 3, so no pick ever uses anyone up.
- If you chose 8,000 ways to give out the prizes: You chose **8,000 ways to give out the prizes**. That is the answer you get when you let the same one be picked every time, so each pick still has all 20 to choose from.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “In how many different ways can the three prizes go to tickets?” ask in how many different ways the prizes can go to tickets, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick from one group, when the order counts.** The words “a first, a second and a third prize. Each ticket can win at most one prize” show three different prizes drawn one after another from one drum of 20 tickets, with no ticket winning twice, and ask how many different ways there are, so the answer is **“The ways to pick from one group, when the order counts”**.
  - If you chose **Combinations**: If the same things in a different order were the same result, it would be **Combinations**. Here a different order is a different result, so every order is counted.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: who can fill three jobs in a club?” (one tap opens the card).

**Drill item 5 of 13**

> A card game is played with a special pack of 12 cards, and each player is dealt a hand of 4. A hand is the same hand whatever order the cards are held in. How many different hands are there?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 495 hands
- 11,880 hands
- 2,970 hands

**Shown as soon as you answer**

- The answer: **495 hands**, and the kind of problem is **Combinations**.
- The working, step by step:
  - Count the group and the picks: Group: 12 cards. Picked: 4
  - Count the picks as if the order mattered: 12 × 11 × 10 × 9 = 11,880
  - Count the orders one chosen group can be put in: 4 cards can be put in order in 4 × 3 × 2 × 1 = 24 ways
  - Divide the first count by the second: 11,880 ÷ 24 = 495. That is 495 hands
  Counting the picks in order counts every group once for every order its 4 cards can be put in, and that is 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of different groups, and dividing by 24 leaves each group counted once.
- If you chose 11,880 hands: You chose **11,880 hands**. That is the answer you get when you stop after counting the picks in order, so each group is counted once for every order it can be put in.
- If you chose 2,970 hands: You chose **2,970 hands**. That is the answer you get when you divide by the number of picks, 4, instead of by the number of orders one group can be put in, 24.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different hands are there?” ask how many different hands there are, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick a group, when the order does not count.** The words “A hand is the same hand whatever order the cards are held in” show 4 cards taken from a pack of 12, where a hand is the same in any order, so that the same cards held in a different order are one hand, so the answer is **“The ways to pick a group, when the order does not count”**.
  - If you chose **Permutations**: If a different order counted as a different result, it would be **Permutations**. Here the same things in any order are one result, so the count in order has to be divided down.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different quiz teams?” (one tap opens the card).

**Drill item 6 of 13**

> A roofer finishes 5 joints on a roof. Each joint has a 2% chance of leaking, and the joints are separate. How likely is it that at least one joint leaks?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 9.6%
- 10%
- 90.4%

**Shown as soon as you answer**

- The answer: **9.6%**, and the kind of problem is **Counting the opposite**.
- The working, step by step:
  - Find the chance that each thing does not happen: Each joint: 1 − 0.02 = 0.98
  - Multiply those chances: the chance that none of them happens: 0.98 × 0.98 × 0.98 × 0.98 × 0.98 = 0.9039207968
  - Take that chance away from 1: the chance that at least one happens: 1 − 0.9039207968 = 0.0960792032, which is 9.6%
  Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.
- If you chose 10%: You chose **10%**. That is the answer you get when you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.
- If you chose 90.4%: You chose **90.4%**. That is the answer you get when you stop at the chance that none of them happens and never take it away from 1.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that at least one joint leaks?” ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that at least one of several things happens.** The words “Each joint has a 2% chance of leaking, and the joints are separate. How likely is it that at least one joint leaks?” give the chance of each of 5 separate joints leaking and ask how likely it is that at least one leaks, so the answer is **“The chance that at least one of several things happens”**.
  - If you chose **Multiplying the choices**: The problem asks for a chance, not a count of results. **Multiplying the choices** would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: a bus that is late at least once in a week” (one tap opens the card).

**Drill item 7 of 13**

> 1 house in 25 in a town has damp in its walls. A damp detector shows damp in 90% of the houses that have it, and wrongly shows damp in 6% of the houses that do not. The detector shows damp in a house. How likely is it that the house has damp?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 38.5%
- 90%
- 3.6%

**Shown as soon as you answer**

- The answer: **38.5%**, and the kind of problem is **Base rate**.
- The working, step by step:
  - Imagine a large group and split it into those who have the thing and those who do not: Imagine 10,000 houses. 1 in 25 have damp: 400 have damp and 9,600 do not
  - Count the positive results among those who have it: 90% of 400 = 360
  - Count the positive results among those who do not have it: 6% of 9,600 = 576
  - Add the two counts to get every positive result: 360 + 576 = 936
  - Divide the right positive results by every positive result: 360 ÷ 936 = 0.3846, which is about 38.5%
  A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.
- If you chose 90%: You chose **90%**. That is the answer you get when you take the share of people who have it that the test catches, 90%, as the chance that a positive result is right.
- If you chose 3.6%: You chose **3.6%**. That is the answer you get when you divide the right positive results by the whole group, 360 ÷ 10,000, instead of by the positive results.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that the house has damp?” ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that a test result is right.** The words “A damp detector shows damp in 90% of the houses that have it, and wrongly shows damp in 6% of the houses that do not” give a detector that has shown a result, how common damp is, and how often the detector is right and wrong, and ask how likely it is that the result is right, so the answer is **“The chance that a test result is right”**.
  - If you chose **Counting the opposite**: The problem is not about at least one of several separate things happening, which is **Counting the opposite**. A test has given one result, and the question is how far to trust it.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how far to trust a positive test” (one tap opens the card).

**Drill item 8 of 13**

> Seven applicants have asked for an interview, but only 4 can be seen in the morning, one after another, and the panel fixes the order of the four. How many different morning lists are possible?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 840 lists
- 28 lists
- 2,401 lists

**Shown as soon as you answer**

- The answer: **840 lists**, and the kind of problem is **Permutations**.
- The working, step by step:
  - Count the group and the picks: Group: 7 applicants. Picks: 4 (first interview, second interview, third interview, fourth interview)
  - Write how many can be picked each time: first interview: 7; second interview: 6; third interview: 5; fourth interview: 4
  - Multiply them: 7 × 6 × 5 × 4 = 840. That is 840 lists
  The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.
- If you chose 28 lists: You chose **28 lists**. That is the answer you get when you multiply the size of the group by the number of picks, 7 × 4, so no pick ever uses anyone up.
- If you chose 2,401 lists: You chose **2,401 lists**. That is the answer you get when you let the same one be picked every time, so each pick still has all 7 to choose from.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different morning lists are possible?” ask how many different morning lists are possible, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick from one group, when the order counts.** The words “only 4 can be seen in the morning, one after another, and the panel fixes the order of the four” show 4 of 7 applicants taken one after another, with the order of the four fixed, so that the order is part of the result, so the answer is **“The ways to pick from one group, when the order counts”**.
  - If you chose **Combinations**: If the same things in a different order were the same result, it would be **Combinations**. Here a different order is a different result, so every order is counted.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: who can fill three jobs in a club?” (one tap opens the card).

**Drill item 9 of 13**

> A company will pick 3 of its 11 managers to sit on an appeals panel. All three have an equal say and sit around one table. How many different panels can the company pick?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 165 panels
- 990 panels
- 330 panels

**Shown as soon as you answer**

- The answer: **165 panels**, and the kind of problem is **Combinations**.
- The working, step by step:
  - Count the group and the picks: Group: 11 managers. Picked: 3
  - Count the picks as if the order mattered: 11 × 10 × 9 = 990
  - Count the orders one chosen group can be put in: 3 managers can be put in order in 3 × 2 × 1 = 6 ways
  - Divide the first count by the second: 990 ÷ 6 = 165. That is 165 panels
  Counting the picks in order counts every group once for every order its 3 managers can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.
- If you chose 990 panels: You chose **990 panels**. That is the answer you get when you stop after counting the picks in order, so each group is counted once for every order it can be put in.
- If you chose 330 panels: You chose **330 panels**. That is the answer you get when you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different panels can the company pick?” ask how many different panels can be picked, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick a group, when the order does not count.** The words “All three have an equal say and sit around one table” show 3 managers taken from 11 who have an equal say, so that no order or role separates one panel from another with the same three, so the answer is **“The ways to pick a group, when the order does not count”**.
  - If you chose **Permutations**: If a different order counted as a different result, it would be **Permutations**. Here the same things in any order are one result, so the count in order has to be divided down.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different quiz teams?” (one tap opens the card).

**Drill item 10 of 13**

> A bike lock has 3 rings, and each ring is marked 0 to 9. The lock is called a combination lock, and a thief wants to try every combination. How many different combinations does it have?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 1,000 settings
- 30 settings
- 100 settings

**Shown as soon as you answer**

- The answer: **1,000 settings**, and the kind of problem is **Multiplying the choices**.
- The working, step by step:
  - Name each choice that has to be made: first ring; second ring; third ring
  - Count the full list for each choice: first ring: 10; second ring: 10; third ring: 10
  - Multiply the counts: 10 × 10 × 10 = 1,000. That is 1,000 settings
  Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.
- If you chose 30 settings: You chose **30 settings**. That is the answer you get when you multiply the size of the list by the number of choices, 10 × 3, instead of using the full list once for each choice.
- If you chose 100 settings: You chose **100 settings**. That is the answer you get when you leave the last choice out of the product, so every result is missing one part.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different combinations does it have?” ask how many different codes the lock has, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to make several choices, each from its own list.** The words “3 rings, and each ring is marked 0 to 9” give three separate choices, one for each ring, each from the same full list of ten digits, and ask how many different settings there are, whatever the lock is called, so the answer is **“The ways to make several choices, each from its own list”**.
  - If you chose **Combinations**: The lock has the word “combination” in its name, but nothing is picked from a group and the order of the digits matters: 3, 5, 1 is a different setting from 1, 5, 3. Each ring is a separate choice from a full list. **Combinations** is the name for the kind in which the same picks in any order are one result.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different sandwiches?” (one tap opens the card).

**Drill item 11 of 13**

> A small safe has 3 dials, and each dial is marked 0 to 9. The code must use 3 different digits, so no digit can be used twice, and 3, 5, 1 is a different code from 1, 5, 3. How many different codes are possible?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 720 codes
- 30 codes
- 1,000 codes

**Shown as soon as you answer**

- The answer: **720 codes**, and the kind of problem is **Permutations**.
- The working, step by step:
  - Count the group and the picks: Group: 10 digits. Picks: 3 (first dial, second dial, third dial)
  - Write how many can be picked each time: first dial: 10; second dial: 9; third dial: 8
  - Multiply them: 10 × 9 × 8 = 720. That is 720 codes
  The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.
- If you chose 30 codes: You chose **30 codes**. That is the answer you get when you multiply the size of the group by the number of picks, 10 × 3, so no pick ever uses anyone up.
- If you chose 1,000 codes: You chose **1,000 codes**. That is the answer you get when you let the same one be picked every time, so each pick still has all 10 to choose from.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different codes are possible?” ask how many different codes are possible, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick from one group, when the order counts.** The words “no digit can be used twice” and “is a different code from” show 3 digits taken from the 10, with no digit used twice, so each dial has one fewer to choose from, and a different order giving a different code, so the answer is **“The ways to pick from one group, when the order counts”**.
  - If you chose **Multiplying the choices**: Three dials marked 0 to 9 look like three separate choices, each from its own full list, which is **Multiplying the choices**. But here no digit may be used twice, so the second dial has only 9 digits left and the third only 8.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: who can fill three jobs in a club?” (one tap opens the card).

**Drill item 12 of 13**

> A quiz wheel has 4 equal slices, one of them red. The wheel has not landed on red in the last 8 spins. Each spin is separate from the others. How likely is it that it lands on red at least once in the next 3 spins?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 57.8%
- 95.8%
- 42.2%

**Shown as soon as you answer**

- The answer: **57.8%**, and the kind of problem is **Counting the opposite**.
- The working, step by step:
  - Find the chance that each thing does not happen: Each spin: 1 − 0.25 = 0.75
  - Multiply those chances: the chance that none of them happens: 0.75 × 0.75 × 0.75 = 0.421875
  - Take that chance away from 1: the chance that at least one happens: 1 − 0.421875 = 0.578125, which is 57.8%
  Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.
- If you chose 95.8%: You chose **95.8%**. That is the answer you get when you count the 8 spins that are over as well as the 3 still to come, as if red had to make up for them.
- If you chose 42.2%: You chose **42.2%**. That is the answer you get when you stop at the chance that none of the 3 spins is red and never take it away from 1.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that it lands on red at least once in the next 3 spins?” ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that at least one of several things happens.** The words “Each spin is separate from the others. How likely is it that it lands on red at least once in the next 3 spins?” give the chance of red on each of 3 separate spins still to come and ask how likely it is that red comes up at least once; the 8 spins that are over do not change it, so the answer is **“The chance that at least one of several things happens”**.
  - If you chose **Multiplying the choices**: Spins that are multiplied together can look like **Multiplying the choices**, which also multiplies separate things. But the problem asks how likely something is, not how many different results there are, and it asks for at least one.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: a bus that is late at least once in a week” (one tap opens the card).

**Drill item 13 of 13**

> A screening test for an illness is described as 99% accurate: it finds the illness in 99 of every 100 people who have it, and wrongly flags 1 of every 100 who do not. The illness affects 1 person in 1,000. A person’s test comes back positive. How likely is it that the person has the illness?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 9%
- 99%
- 0.1%

**Shown as soon as you answer**

- The answer: **9%**, and the kind of problem is **Base rate**.
- The working, step by step:
  - Imagine a large group and split it into those who have the thing and those who do not: Imagine 100,000 people. 1 in 1,000 have it: 100 have it and 99,900 do not
  - Count the positive results among those who have it: 99% of 100 = 99
  - Count the positive results among those who do not have it: 1% of 99,900 = 999
  - Add the two counts to get every positive result: 99 + 999 = 1,098
  - Divide the right positive results by every positive result: 99 ÷ 1,098 = 0.0902, which is about 9%
  A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.
- If you chose 99%: You chose **99%**. That is the answer you get when you take the share of people who have it that the test catches, 99%, as the chance that a positive result is right.
- If you chose 0.1%: You chose **0.1%**. That is the answer you get when you divide the right positive results by the whole group, 99 ÷ 100,000, instead of by the positive results.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that the person has the illness?” ask how likely it is that a result is right, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that a test result is right.** The words “described as 99% accurate” and “The illness affects 1 person in 1,000” give a test that has come back positive, call it 99% accurate, and say the illness affects 1 person in 1,000, and ask how likely it is that the result is right, so the answer is **“The chance that a test result is right”**.
  - If you chose **Counting the opposite**: Two chances of 99% and 1% can look like separate things to be combined, as in **Counting the opposite**. But no list of separate things is asked about, and nothing is at least one of them: a test has given one result, the illness is rare, and the question is how far to trust the result.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how far to trust a positive test” (one tap opens the card).

**When the drill ends.** The learner sees their own results: first-try accuracy for each stage, whole cases beside single questions, the pair of names they mixed up most often, and what will come back and when. Anything missed was asked again before the drill ended. Nothing here is graded. A miss only decides what comes back.

### 21. What to carry away

*Unit Five · rev 4 · Draft: not yet read by a newcomer · Part 3 of 3 · Card 21 of 21*

[reviewers only: card kind `recap`, id `recap-chance`]

You have now worked problems of all five kinds on your own. This card puts the unit in one place.

**This unit’s questions and answers**

What does the problem ask you to count, or find the chance of?
- The ways to make several choices, each from its own list → Multiplying the choices
- The ways to pick from one group, when the order counts → Permutations
- The ways to pick a group, when the order does not count → Combinations
- The chance that at least one of several things happens → Counting the opposite
- The chance that a test result is right → Base rate

**For each name: what you must be able to point to, and the question to ask when you spot it**

- **Multiplying the choices**: several separate choices, each made from its own full list, and the question how many different results there are.
- **Permutations**: one group to pick from, picks that each leave one fewer to choose from, a different order counting as a different result, and the question how many different results there are.
- **Combinations**: one group to pick from, picks that each leave one fewer to choose from, the same things in any order counting as one result, and the question how many different results there are.
- **Counting the opposite**: several separate things, the chance of each, and the question how likely it is that at least one of them happens.
- **Base rate**: a test or a check that has given a result, how rare the thing it looks for is, how often the test is wrong, and the question how likely the result is to be right.

**To carry away**

- Before any working, ask what is being counted, or what chance is wanted, and point to the words that say it. The question is: **“What does the problem ask you to count, or find the chance of?”**
- A choice with a full list of its own for each pick leads to **Multiplying the choices**. One group with each pick using someone up leads to **Permutations** when the order counts, and to **Combinations** when it does not. The chance that one or more of a set of separate things happens leads to **Counting the opposite**. A test result and how far to trust it lead to **Base rate**.
- For **Multiplying the choices**: name each choice, count its full list, and multiply the counts.
- For **Permutations**: write how many can be picked each time, falling by one for each pick, and multiply them.
- For **Combinations**: count the picks in order, as for **Permutations**, then divide by the number of orders one chosen group can be put in.
- For **Counting the opposite**: multiply the chances that each thing does not happen, and take that away from 1. Do not add the chances.
- For **Base rate**: imagine a large group, count the right and the wrong positive results, and divide the right ones by all of them. How rare the thing is decides it.

*End of Unit Five. Every name comes back on later days with a new case: what you missed first, in a day or two, and the rest a little later.*

---

## After the unit: what comes back on later days

A name that is due returns as a case the learner has not seen, next to a case of the name they most often confuse it with. Each is run as a whole case: every question, then the name. These are the fresh cases held back for that purpose: three for each name, one for each scheduled return. The first return is about two days after the drill, the next about a week after that, the next about three and a half weeks later.

**Return case 1 of 5**

> A hospital lunch order has a main from 7, a side from 5 and a drink from 4, one of each. How many different lunches can a patient order?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 140 lunches
- 16 lunches
- 35 lunches

**Shown as soon as you answer**

- The answer: **140 lunches**, and the kind of problem is **Multiplying the choices**.
- The working, step by step:
  - Name each choice that has to be made: main; side; drink
  - Count the full list for each choice: main: 7; side: 5; drink: 4
  - Multiply the counts: 7 × 5 × 4 = 140 (7 × 5 = 35, then 35 × 4 = 140). That is 140 lunches
  Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.
- If you chose 16 lunches: You chose **16 lunches**. That is the answer you get when you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.
- If you chose 35 lunches: You chose **35 lunches**. That is the answer you get when you leave the last choice out of the product, so every result is missing one part.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different lunches can a patient order?” ask how many different lunches can be ordered, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to make several choices, each from its own list.** The words “a main from 7, a side from 5 and a drink from 4, one of each” give three separate choices, a main, a side and a drink, each from a list of its own, and ask how many different lunches there are, so the answer is **“The ways to make several choices, each from its own list”**.
  - If you chose **Permutations**: Picking from one group, so that each pick takes something off the list for the next, would be **Permutations**. Here every choice has a full list of its own, and nothing picked on one list changes another.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different sandwiches?” (one tap opens the card).

**Return case 2 of 5**

> Four friends join a queue at a ticket window, one behind another. In how many different orders can they stand in the queue?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 24 orders
- 16 orders
- 256 orders

**Shown as soon as you answer**

- The answer: **24 orders**, and the kind of problem is **Permutations**.
- The working, step by step:
  - Count the group and the picks: Group: 4 friends. Picks: 4 (first in the queue, second, third, fourth)
  - Write how many can be picked each time: first in the queue: 4; second: 3; third: 2; fourth: 1
  - Multiply them: 4 × 3 × 2 × 1 = 24. That is 24 orders
  The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.
- If you chose 16 orders: You chose **16 orders**. That is the answer you get when you multiply the size of the group by the number of picks, 4 × 4, so no pick ever uses anyone up.
- If you chose 256 orders: You chose **256 orders**. That is the answer you get when you let the same one be picked every time, so each pick still has all 4 to choose from.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “In how many different orders can they stand in the queue?” ask in how many different orders the friends can stand, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick from one group, when the order counts.** The words “Four friends join a queue at a ticket window, one behind another” show one group of 4 friends placed one behind another, so that each place uses a friend up, and ask how many different orders there are, so the answer is **“The ways to pick from one group, when the order counts”**.
  - If you chose **Combinations**: If the same things in a different order were the same result, it would be **Combinations**. Here a different order is a different result, so every order is counted.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: who can fill three jobs in a club?” (one tap opens the card).

**Return case 3 of 5**

> A shop packs a gift of 3 different sample jars, picked from the 10 on its shelf. The gift is the same whichever jar goes in first. How many different gifts can the shop pack?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 120 gifts
- 720 gifts
- 240 gifts

**Shown as soon as you answer**

- The answer: **120 gifts**, and the kind of problem is **Combinations**.
- The working, step by step:
  - Count the group and the picks: Group: 10 jars. Picked: 3
  - Count the picks as if the order mattered: 10 × 9 × 8 = 720
  - Count the orders one chosen group can be put in: 3 jars can be put in order in 3 × 2 × 1 = 6 ways
  - Divide the first count by the second: 720 ÷ 6 = 120. That is 120 gifts
  Counting the picks in order counts every group once for every order its 3 jars can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.
- If you chose 720 gifts: You chose **720 gifts**. That is the answer you get when you stop after counting the picks in order, so each group is counted once for every order it can be put in.
- If you chose 240 gifts: You chose **240 gifts**. That is the answer you get when you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How many different gifts can the shop pack?” ask how many different gifts can be packed, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The ways to pick a group, when the order does not count.** The words “The gift is the same whichever jar goes in first” show 3 different jars taken from 10, where the gift is the same whichever goes in first, so that the same 3 jars in any order are one gift, so the answer is **“The ways to pick a group, when the order does not count”**.
  - If you chose **Permutations**: If a different order counted as a different result, it would be **Permutations**. Here the same things in any order are one result, so the count in order has to be divided down.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how many different quiz teams?” (one tap opens the card).

**Return case 4 of 5**

> A shop expects 3 separate deliveries. The chance that each is late is 30% for the first, 20% for the second and 10% for the third, and one being late does not change the chance for another. How likely is it that at least one delivery is late?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 49.6%
- 60%
- 50.4%

**Shown as soon as you answer**

- The answer: **49.6%**, and the kind of problem is **Counting the opposite**.
- The working, step by step:
  - Find the chance that each thing does not happen: first delivery: 1 − 0.3 = 0.7; second delivery: 1 − 0.2 = 0.8; third delivery: 1 − 0.1 = 0.9
  - Multiply those chances: the chance that none of them happens: 0.7 × 0.8 × 0.9 = 0.504
  - Take that chance away from 1: the chance that at least one happens: 1 − 0.504 = 0.496, which is 49.6%
  Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.
- If you chose 60%: You chose **60%**. That is the answer you get when you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.
- If you chose 50.4%: You chose **50.4%**. That is the answer you get when you stop at the chance that none of them happens and never take it away from 1.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that at least one delivery is late?” ask how likely it is that something happens, a chance and not a count. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that at least one of several things happens.** The words “The chance that each is late is 30% for the first, 20% for the second and 10% for the third” give a different chance for each of 3 separate deliveries being late and ask how likely it is that at least one is, so the answer is **“The chance that at least one of several things happens”**.
  - If you chose **Multiplying the choices**: The problem asks for a chance, not a count of results. **Multiplying the choices** would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: a bus that is late at least once in a week” (one tap opens the card).

**Return case 5 of 5**

> 1 passenger in 1,000 at an airport carries a banned item. A body scanner alarms for 99% of the passengers who carry one, and also for 2% of the passengers who do not. The scanner alarms for a passenger. How likely is it that the passenger carries a banned item?

**You are asked first, in order:** What does the problem ask you to work out? → What does the problem ask you to count, or find the chance of? → What kind of problem is it?

**You are asked:** Now work the problem with that procedure and choose the answer.

- 4.7%
- 99%
- 0.1%

**Shown as soon as you answer**

- The answer: **4.7%**, and the kind of problem is **Base rate**.
- The working, step by step:
  - Imagine a large group and split it into those who have the thing and those who do not: Imagine 100,000 passengers. 1 in 1,000 carry one: 100 carry one and 99,900 do not
  - Count the positive results among those who have it: 99% of 100 = 99
  - Count the positive results among those who do not have it: 2% of 99,900 = 1,998
  - Add the two counts to get every positive result: 99 + 1,998 = 2,097
  - Divide the right positive results by every positive result: 99 ÷ 2,097 = 0.0472, which is about 4.7%
  A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.
- If you chose 99%: You chose **99%**. That is the answer you get when you take the share of people who have it that the test catches, 99%, as the chance that a positive result is right.
- If you chose 0.1%: You chose **0.1%**. That is the answer you get when you divide the right positive results by the whole group, 99 ÷ 100,000, instead of by the positive results.
- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:
  - What does the problem ask you to work out? **How many ways something can turn out, or how likely it is.** The words “How likely is it that the passenger carries a banned item?” ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is **“How many ways something can turn out, or how likely it is”**.
  - What does the problem ask you to count, or find the chance of? **The chance that a test result is right.** The words “A body scanner alarms for 99% of the passengers who carry one, and also for 2% of the passengers who do not” give a scanner that has alarmed, how rare banned items are, and how often the scanner is right and wrong, and ask how likely it is that the alarm is right, so the answer is **“The chance that a test result is right”**.
  - If you chose **Counting the opposite**: The problem is not about at least one of several separate things happening, which is **Counting the opposite**. A test has given one result, and the question is how far to trust it.
  - Any other name: one line on what that name needs, and what this case shows instead.
- Taught on: “Worked: how far to trust a positive test” (one tap opens the card).

