# Basic Math: Primes and counting formulas, a refresher

Revision 1, live. Part: Refresher: primes and counting formulas. Where the subject ends up: Work out the number a situation needs (a total, a price per one, a scaled amount, a percent or the price before one, how much paint or soil to buy, how high a ladder reaches, what savings grow to or a loan costs) and tell whether it is sensible, when a receipt, a recipe, a sale tag, a room or an offer hands you some numbers and a question and nobody names the method.

## The why

Is a number prime? What is 12/16 inch on the tape? How many ways can a crew be picked, or a lock code be chosen? Whole numbers and counting.
Three reminders: each fact, one example, then quick questions.

## Step 1: Primes and factors

A prime is a whole number above 1 that only 1 and itself divide: 2, 3, 5, 7, 11, 13, 17 … Every other whole number above 1 is primes multiplied: 84 = 2 × 2 × 3 × 7.
The prime check: try dividing by the primes up to the number’s square root. 143: √143 is 11.96, so try 2, 3, 5, 7 and 11. 143 ÷ 11 = 13, so 143 is not prime. Had none of them divided it, it would be prime: a factor bigger than the square root always comes paired with one smaller.
Common factors put a fraction in lowest terms. Inch fractions only share 2s: halve top and bottom until the top is odd. 12/16 → 6/8 → 3/4.

A wrong idea, marked wrong: “91 is odd and not in the 3 or 5 times tables, so it is prime.”
The right line: 7 divides it: 91 = 7 × 13. Try every prime up to the square root.

## Step 2: Questions

2 questions, listed. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1 (made with fresh numbers; this is seed 1)

A plain table, "Can it be split evenly?":

> Teeth on a gear  |  97

**Is 97 prime?**
(the options come in an order that depends on the seed of the question)
- It is prime (right)
- It is not prime — if chosen: None of the primes up to √97 (2, 3, 5, 7) divides 97, so it is prime: only 97 itself (above 1) divides it.

**What is the smallest number above 1 that divides 97?**
- The learner types a number, with the calculator within reach: [ ].
- Right (within 0.01): 97
- If typed 1: 1 divides every number. The question is the smallest above 1.

After the answer: Reason: √97 is 9.85; trying 2, 3, 5 … up to 7: None of the primes up to √97 (2, 3, 5, 7) divides 97, so it is prime: only 97 itself (above 1) divides it.
The working:
- Say what is asked and what is given.: Asked: whether 97 is prime, then the smallest number above 1 that divides it. Given: 97.
- Bring back the fact.: A prime is a whole number above 1 that only 1 and itself divide. To check, try the primes 2, 3, 5, 7, 11, 13 … up to the square root; a factor bigger than the root comes with a smaller partner.
- Try the primes up to the square root.: √97 is 9.85, so try up to 7: 97 ÷ 2 = 48.5; 97 ÷ 3 = 32.33; 97 ÷ 5 = 19.4; 97 ÷ 7 = 13.86. None of the primes up to √97 (2, 3, 5, 7) divides 97, so it is prime: only 97 itself (above 1) divides it.
- Give the smallest, then look back.: None of the primes up to √97 (2, 3, 5, 7) divides 97, so it is prime: only 97 itself (above 1) divides it. Look back: every prime up to √97 was tried.

#### Item 2 (made with fresh numbers; this is seed 2)

A plain table, "Cut list":

> Rip the board to  |  20/64 inch thick

**What is 20/64 in lowest terms?**
- The learner types a number, with the calculator within reach: [ ]/[ ] inch.
- Right (within 0.01): 5/16 inch
- If typed 10/32 inch: That halves once. The top is still even: halve again until it is odd.

After the answer: Reason: 20/64 halved until the top is odd is 5/16: the same length, the same mark on the tape.
The working:
- Say what is asked and what is given.: Asked: 20/64 inch in lowest terms, as a tape marks it. Given: 20/64.
- Bring back the fact.: A fraction is in lowest terms when no number above 1 divides both top and bottom. Inch fractions only ever share 2s: halve both until the top is odd.
- Halve both, then look back.: Halve both: 10/32, then 5/16. Look back: 5 is odd, so nothing more divides both.

Then a screen: you can stop here, your place is kept.

## Step 3: Counting orders

How many orders can 5 jobs be done in? How many ways to fill first, second and third place? First: does the order matter? Check whether swapping two of the ones picked gives a different result.
When it does, multiply the choices for each place, one fewer each time: any of 5 first, any of the 4 left second, and so on: 5 × 4 × 3 × 2 × 1 = 120. All n of them in order is written n! (n factorial). For only the first few places, stop early: first, second and third of 8 racers is 8 × 7 × 6 = 336.
Look back: one number for each place, each one less than the last.

## Step 4: Questions

2 questions, listed. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 3 (made with fresh numbers; this is seed 3)

A plain table, "How many ways?":

> 8 jobs on today’s list

**How many different orders could you do them in?**
- The learner types a number, with the calculator within reach: [ ] orders.
- Right (within 0.01): 40,320 orders
- If typed 36 orders: That adds 8 + … + 1. The choices multiply: 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.
- If typed 64 orders: That is 8 × 8. Each place has one fewer to choose from: 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.

After the answer: Reason: 8 first choices, then 8 − 1 … : 8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40,320.
The working:
- Say what is asked and what is given.: Asked: how many different orders you could do them in. Given: 8 of them.
- Bring back the fact.: Every order of all 8: any of 8 first, any of the rest second, and so on, one fewer each time: 8! (8 factorial).
- Work it out exactly on the calculator, then look back.: 8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40,320. On the calculator, multiply them in turn. Look back: each place has one fewer to choose from.

#### Item 4 (made with fresh numbers; this is seed 4)

A plain table, "How many ways?":

> 12 bidders for the work
> You want  |  one bidder for each of 2 different jobs

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters (right)
- The order does not matter — if chosen: Here each bidder gets a different job, so swapping two of them is a different result: the order matters.

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 132 ways
- If typed 144 ways: That lets one be picked twice. Each place has one fewer left: 12 × 11.
- If typed 66 ways: That divides out the orders, as if swapping two changed nothing. Here each bidder gets a different job, so swapping two of them is a different result: keep them, 12 × 11.

After the answer: Reason: Here each bidder gets a different job, so swapping two of them is a different result, so count the orders: 12 × 11 = 132 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 12 to pick from, 2 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 12 × (12 − 1) × … for 2; if not, divide that by the orders of the 2 picked, 2! = 2 × 1.
- Decide whether the order matters.: Here each bidder gets a different job, so swapping two of them is a different result: the order matters.
- Work it out exactly on the calculator, then look back.: 12 for the first, one fewer for each next: 12 × 11. On the calculator: 12 × 11 = shows 132. Look back: 2 numbers multiplied, one for each place.

Then a screen: you can stop here, your place is kept.

## Step 5: Counting groups

Swap two of the ones picked: if nothing changes, the order does not matter. A crew of 3 from 8 workers, all on one job, is the same crew whichever is picked first. But 3 of 8 workers for 3 different jobs is not: swapping two gives each a different job, so there the order matters.
Count the orders as before, then divide by the orders of the ones chosen: 8 × 7 × 6 = 336 orders, and each crew of 3 turns up 3 × 2 × 1 = 6 times among them, so 336 ÷ 6 = 56 crews. School calls it “8 choose 3”, a combination.
Look back: fewer groups than orders.

A wrong idea, marked wrong: “First, second and third place among 8 racers: 56 ways.”
The right line: The places differ, so the order matters: 8 × 7 × 6 = 336.

## Step 6: Questions

2 questions, listed. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5 (made with fresh numbers; this is seed 5)

A plain table, "How many ways?":

> 10 bidders for the work
> You want  |  4 bidders to do one job together

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters — if chosen: Here they all do the same job, so swapping two of them changes nothing: the order does not matter.
- The order does not matter (right)

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 210 ways
- If typed 5,040 ways: That counts every order of the same group. Here they all do the same job, so swapping two of them changes nothing: divide by the 24 orders of 4, 5,040 ÷ 24.
- If typed 40 ways: That is 10 × 4. Count the orders, 10 × 9 × 8 × 7, then divide by 4 × 3 × 2 × 1.

After the answer: Reason: Here they all do the same job, so swapping two of them changes nothing, so 10 × 9 × 8 × 7 ÷ (4 × 3 × 2 × 1) = 210 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 10 to pick from, 4 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 10 × (10 − 1) × … for 4; if not, divide that by the orders of the 4 picked, 4! = 4 × 3 × 2 × 1.
- Decide whether the order matters.: Here they all do the same job, so swapping two of them changes nothing: the order does not matter.
- Work it out exactly on the calculator, then look back.: 10 × 9 × 8 × 7 = 5,040 orders; each group of 4 came up 24 times (4 × 3 × 2 × 1), so 5,040 ÷ 24 = 210. On the calculator: 10 × 9 × 8 × 7 ÷ 4 ÷ 3 ÷ 2 ÷ 1 = shows 210. Look back: fewer groups than orders.

#### Item 6 (made with fresh numbers; this is seed 6)

A plain table, "How many ways?":

> 9 paint colors on the chart
> You want  |  a sample pack of 2 colors

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters — if chosen: Here a pack is the same pack in any order, so swapping two changes nothing: the order does not matter.
- The order does not matter (right)

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 36 ways
- If typed 72 ways: That counts every order of the same group. Here a pack is the same pack in any order, so swapping two changes nothing: divide by the 2 orders of 2, 72 ÷ 2.
- If typed 18 ways: That is 9 × 2. Count the orders, 9 × 8, then divide by 2 × 1.

After the answer: Reason: Here a pack is the same pack in any order, so swapping two changes nothing, so 9 × 8 ÷ (2 × 1) = 36 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 9 to pick from, 2 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 9 × (9 − 1) × … for 2; if not, divide that by the orders of the 2 picked, 2! = 2 × 1.
- Decide whether the order matters.: Here a pack is the same pack in any order, so swapping two changes nothing: the order does not matter.
- Work it out exactly on the calculator, then look back.: 9 × 8 = 72 orders; each group of 2 came up 2 times (2 × 1), so 72 ÷ 2 = 36. On the calculator: 9 × 8 ÷ 2 ÷ 1 = shows 36. Look back: fewer groups than orders.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

5 questions, shuffle, with each inner pair asked one after the other, in a random order, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 7 (made with fresh numbers; this is seed 7)

A plain table, "How many ways?":

> 6 toppings on the menu
> You want  |  one topping on each of 2 different pizzas

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters (right)
- The order does not matter — if chosen: Here each pizza gets its own topping, so swapping two is a different result: the order matters.

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 30 ways
- If typed 36 ways: That lets one be picked twice. Each place has one fewer left: 6 × 5.
- If typed 15 ways: That divides out the orders, as if swapping two changed nothing. Here each pizza gets its own topping, so swapping two is a different result: keep them, 6 × 5.

After the answer: Reason: Here each pizza gets its own topping, so swapping two is a different result, so count the orders: 6 × 5 = 30 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 6 to pick from, 2 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 6 × (6 − 1) × … for 2; if not, divide that by the orders of the 2 picked, 2! = 2 × 1.
- Decide whether the order matters.: Here each pizza gets its own topping, so swapping two is a different result: the order matters.
- Work it out exactly on the calculator, then look back.: 6 for the first, one fewer for each next: 6 × 5. On the calculator: 6 × 5 = shows 30. Look back: 2 numbers multiplied, one for each place.

#### Item 8 (made with fresh numbers; this is seed 8)

A plain table, "How many ways?":

> 7 racers in the heat
> You want  |  the 3 racers who go through to the final

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters — if chosen: Here going through is the same for all 3, so swapping two changes nothing: the order does not matter.
- The order does not matter (right)

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 35 ways
- If typed 210 ways: That counts every order of the same group. Here going through is the same for all 3, so swapping two changes nothing: divide by the 6 orders of 3, 210 ÷ 6.
- If typed 21 ways: That is 7 × 3. Count the orders, 7 × 6 × 5, then divide by 3 × 2 × 1.

After the answer: Reason: Here going through is the same for all 3, so swapping two changes nothing, so 7 × 6 × 5 ÷ (3 × 2 × 1) = 35 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 7 to pick from, 3 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 7 × (7 − 1) × … for 3; if not, divide that by the orders of the 3 picked, 3! = 3 × 2 × 1.
- Decide whether the order matters.: Here going through is the same for all 3, so swapping two changes nothing: the order does not matter.
- Work it out exactly on the calculator, then look back.: 7 × 6 × 5 = 210 orders; each group of 3 came up 6 times (3 × 2 × 1), so 210 ÷ 6 = 35. On the calculator: 7 × 6 × 5 ÷ 3 ÷ 2 ÷ 1 = shows 35. Look back: fewer groups than orders.

#### Item 9 (made with fresh numbers; this is seed 9)

A plain table, "How many ways?":

> 5 trucks to load at the dock, one at a time

**How many different orders could you load them in?**
- The learner types a number, with the calculator within reach: [ ] orders.
- Right (within 0.01): 120 orders
- If typed 15 orders: That adds 5 + … + 1. The choices multiply: 5 × 4 × 3 × 2 × 1.
- If typed 25 orders: That is 5 × 5. Each place has one fewer to choose from: 5 × 4 × 3 × 2 × 1.

After the answer: Reason: 5 first choices, then 5 − 1 … : 5! = 5 × 4 × 3 × 2 × 1 = 120.
The working:
- Say what is asked and what is given.: Asked: how many different orders you could load them in. Given: 5 of them.
- Bring back the fact.: Every order of all 5: any of 5 first, any of the rest second, and so on, one fewer each time: 5! (5 factorial).
- Work it out exactly on the calculator, then look back.: 5! = 5 × 4 × 3 × 2 × 1 = 120. On the calculator, multiply them in turn. Look back: each place has one fewer to choose from.

#### Item 10 (made with fresh numbers; this is seed 10)

A plain table, "Can it be split evenly?":

> Tiles along a wall  |  151

**Is 151 prime?**
(the options come in an order that depends on the seed of the question)
- It is prime (right)
- It is not prime — if chosen: None of the primes up to √151 (2, 3, 5, 7, 11) divides 151, so it is prime: only 151 itself (above 1) divides it.

**What is the smallest number above 1 that divides 151?**
- The learner types a number, with the calculator within reach: [ ].
- Right (within 0.01): 151
- If typed 1: 1 divides every number. The question is the smallest above 1.

After the answer: Reason: √151 is 12.29; trying 2, 3, 5 … up to 11: None of the primes up to √151 (2, 3, 5, 7, 11) divides 151, so it is prime: only 151 itself (above 1) divides it.
The working:
- Say what is asked and what is given.: Asked: whether 151 is prime, then the smallest number above 1 that divides it. Given: 151.
- Bring back the fact.: A prime is a whole number above 1 that only 1 and itself divide. To check, try the primes 2, 3, 5, 7, 11, 13 … up to the square root; a factor bigger than the root comes with a smaller partner.
- Try the primes up to the square root.: √151 is 12.29, so try up to 11: 151 ÷ 2 = 75.5; 151 ÷ 3 = 50.33; 151 ÷ 5 = 30.2; 151 ÷ 7 = 21.57; 151 ÷ 11 = 13.73. None of the primes up to √151 (2, 3, 5, 7, 11) divides 151, so it is prime: only 151 itself (above 1) divides it.
- Give the smallest, then look back.: None of the primes up to √151 (2, 3, 5, 7, 11) divides 151, so it is prime: only 151 itself (above 1) divides it. Look back: every prime up to √151 was tried.

#### Item 11 (made with fresh numbers; this is seed 11)

A plain table, "Cut list":

> Rip the board to  |  8/64 inch thick

**What is 8/64 in lowest terms?**
- The learner types a number, with the calculator within reach: [ ]/[ ] inch.
- Right (within 0.01): 1/8 inch
- If typed 4/32 inch: That halves once. The top is still even: halve again until it is odd.

After the answer: Reason: 8/64 halved until the top is odd is 1/8: the same length, the same mark on the tape.
The working:
- Say what is asked and what is given.: Asked: 8/64 inch in lowest terms, as a tape marks it. Given: 8/64.
- Bring back the fact.: A fraction is in lowest terms when no number above 1 divides both top and bottom. Inch fractions only ever share 2s: halve both until the top is odd.
- Halve both, then look back.: Halve both: 4/32, then 2/16, then 1/8. Look back: 1 is odd, so nothing more divides both.

Then a screen: you can stop here, your place is kept.

## The check

5 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 4 right
- None gave an answer more than double or less than half the right one

#### Check question 12 (made with fresh numbers; this is seed 12)

A plain table, "Can it be split evenly?":

> Teeth on a gear  |  91

**Is 91 prime?**
(the options come in an order that depends on the seed of the question)
- It is prime — if chosen: 7 divides it: 91 = 7 × 13.
- It is not prime (right)

**What is the smallest number above 1 that divides 91?**
- The learner types a number, with the calculator within reach: [ ].
- Right (within 0.01): 7
- If typed 1: 1 divides every number. The question is the smallest above 1.

After the answer: Reason: √91 is 9.54; trying 2, 3, 5 … up to 7: 7 divides it: 91 = 7 × 13.
The working:
- Say what is asked and what is given.: Asked: whether 91 is prime, then the smallest number above 1 that divides it. Given: 91.
- Bring back the fact.: A prime is a whole number above 1 that only 1 and itself divide. To check, try the primes 2, 3, 5, 7, 11, 13 … up to the square root; a factor bigger than the root comes with a smaller partner.
- Try the primes up to the square root.: √91 is 9.54, so try up to 7: 91 ÷ 2 = 45.5; 91 ÷ 3 = 30.33; 91 ÷ 5 = 18.2; 91 ÷ 7 = 13. 7 divides it: 91 = 7 × 13.
- Give the smallest, then look back.: 7 divides it: 91 = 7 × 13. Look back: every prime up to √91 was tried.

#### Check question 13 (made with fresh numbers; this is seed 13)

A plain table, "Cut list":

> Rip the board to  |  20/32 inch thick

**What is 20/32 in lowest terms?**
- The learner types a number, with the calculator within reach: [ ]/[ ] inch.
- Right (within 0.01): 5/8 inch
- If typed 10/16 inch: That halves once. The top is still even: halve again until it is odd.

After the answer: Reason: 20/32 halved until the top is odd is 5/8: the same length, the same mark on the tape.
The working:
- Say what is asked and what is given.: Asked: 20/32 inch in lowest terms, as a tape marks it. Given: 20/32.
- Bring back the fact.: A fraction is in lowest terms when no number above 1 divides both top and bottom. Inch fractions only ever share 2s: halve both until the top is odd.
- Halve both, then look back.: Halve both: 10/16, then 5/8. Look back: 5 is odd, so nothing more divides both.

#### Check question 14 (made with fresh numbers; this is seed 14)

A plain table, "How many ways?":

> 6 wires to land on the terminal block, one to a screw

**How many different orders could you land them in?**
- The learner types a number, with the calculator within reach: [ ] orders.
- Right (within 0.01): 720 orders
- If typed 21 orders: That adds 6 + … + 1. The choices multiply: 6 × 5 × 4 × 3 × 2 × 1.
- If typed 36 orders: That is 6 × 6. Each place has one fewer to choose from: 6 × 5 × 4 × 3 × 2 × 1.

After the answer: Reason: 6 first choices, then 6 − 1 … : 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.
The working:
- Say what is asked and what is given.: Asked: how many different orders you could land them in. Given: 6 of them.
- Bring back the fact.: Every order of all 6: any of 6 first, any of the rest second, and so on, one fewer each time: 6! (6 factorial).
- Work it out exactly on the calculator, then look back.: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720. On the calculator, multiply them in turn. Look back: each place has one fewer to choose from.

#### Check question 15 (made with fresh numbers; this is seed 15)

A plain table, "How many ways?":

> 7 racers in the heat
> You want  |  the racers in places 1 to 3, in order

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters (right)
- The order does not matter — if chosen: Here each place is different, so swapping two racers is a different result: the order matters.

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 210 ways
- If typed 343 ways: That lets one be picked twice. Each place has one fewer left: 7 × 6 × 5.
- If typed 35 ways: That divides out the orders, as if swapping two changed nothing. Here each place is different, so swapping two racers is a different result: keep them, 7 × 6 × 5.

After the answer: Reason: Here each place is different, so swapping two racers is a different result, so count the orders: 7 × 6 × 5 = 210 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 7 to pick from, 3 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 7 × (7 − 1) × … for 3; if not, divide that by the orders of the 3 picked, 3! = 3 × 2 × 1.
- Decide whether the order matters.: Here each place is different, so swapping two racers is a different result: the order matters.
- Work it out exactly on the calculator, then look back.: 7 for the first, one fewer for each next: 7 × 6 × 5. On the calculator: 7 × 6 × 5 = shows 210. Look back: 3 numbers multiplied, one for each place.

#### Check question 16 (made with fresh numbers; this is seed 16)

A plain table, "How many ways?":

> 10 toppings on the menu
> You want  |  2 toppings together on one pizza

**Does the order matter here?**
(the options come in an order that depends on the seed of the question)
- The order matters — if chosen: Here one pizza with the same toppings is the same pizza, so swapping two changes nothing: the order does not matter.
- The order does not matter (right)

**How many different ways?**
- The learner types a number, with the calculator within reach: [ ] ways.
- Right (within 0.01): 45 ways
- If typed 90 ways: That counts every order of the same group. Here one pizza with the same toppings is the same pizza, so swapping two changes nothing: divide by the 2 orders of 2, 90 ÷ 2.
- If typed 20 ways: That is 10 × 2. Count the orders, 10 × 9, then divide by 2 × 1.

After the answer: Reason: Here one pizza with the same toppings is the same pizza, so swapping two changes nothing, so 10 × 9 ÷ (2 × 1) = 45 ways.
The working:
- Say what is asked and what is given.: Asked: how many different ways to pick them. Given: 10 to pick from, 2 picked, none twice.
- Bring back the fact.: Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, 10 × (10 − 1) × … for 2; if not, divide that by the orders of the 2 picked, 2! = 2 × 1.
- Decide whether the order matters.: Here one pizza with the same toppings is the same pizza, so swapping two changes nothing: the order does not matter.
- Work it out exactly on the calculator, then look back.: 10 × 9 = 90 orders; each group of 2 came up 2 times (2 × 1), so 90 ÷ 2 = 45. On the calculator: 10 × 9 ÷ 2 ÷ 1 = shows 45. Look back: fewer groups than orders.

## The result

For example "4 of 5: passed" or "3 of 5: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
