/* ===================== SUBJECT: BASIC MATH ===================== */

/* The key. Its wording is the one vocabulary of this subject: the cards, the drills, the faulty claims and the
   specimens all use these exact words. A kind of question has two more questions of its own, then a name. */

const MATH_OUTCOMES = [
  {id:'prime',     n:'Prime check',                                        group:'whole'},
  {id:'factor',    n:'Prime factors',                                      group:'whole'},
  {id:'gcdlcm',    n:'Biggest shared piece or first line-up (GCD / LCM)',  group:'whole'},
  {id:'modrem',    n:'Remainder (mod)',                                    group:'whole'},
  {id:'irrat',     n:'A number with no exact fraction (irrational)',       group:'whole'},

  {id:'rearr',     n:'Rearranging a formula',                              group:'unknown'},
  {id:'prop',      n:'Scaling by a rate (proportion)',                     group:'unknown'},
  {id:'simul',     n:'Two facts, two unknowns (simultaneous equations)',   group:'unknown'},
  {id:'quad',      n:'A squared unknown (quadratic)',                      group:'unknown'},

  {id:'lin',       n:'Adding the same amount each time (linear growth)',   group:'growth'},
  {id:'expg',      n:'Multiplying by the same number each time (exponential growth)', group:'growth'},
  {id:'logsolve',  n:'How many steps to get there (logarithm)',            group:'growth'},
  {id:'logscale',  n:'Equal space for each ×10 (log scale)',               group:'growth'},

  {id:'multprin',  n:'Multiplying the choices (multiplication principle)', group:'chance'},
  {id:'comb',      n:'Picking a group, order ignored (combinations)',      group:'chance'},
  {id:'perm',      n:'Picking in order (permutations)',                    group:'chance'},
  {id:'complement',n:'Counting the opposite (complement rule)',            group:'chance'},
  {id:'baserate',  n:'How rare it was to begin with (base rate)',          group:'chance'},

  {id:'pyth',      n:'Third side of a right-angled triangle (Pythagoras)',        group:'shape'},
  {id:'trig',      n:'Length from an angle (trigonometry)',                group:'shape'},
  {id:'similar',   n:'Same shape, different size (similar triangles)',     group:'shape'},
  {id:'sqcube',    n:'Area and volume grow faster than length (square–cube law)', group:'shape'}
];

const MATH_GATE = { code:'M1', label:'What is the question about?', options:[
  { id:'whole',   n:'Whole numbers',        sub:'how numbers split, what is left over, when cycles line up', keeps:['prime','factor','gcdlcm','modrem','irrat'] },
  { id:'unknown', n:'A missing number',     sub:'work out a hidden number from facts',                        keeps:['rearr','prop','simul','quad'] },
  { id:'growth',  n:'Growth over time',     sub:'how a quantity changes step by step, or numbers from tiny to huge', keeps:['lin','expg','logsolve','logscale'] },
  { id:'chance',  n:'Counting and chances', sub:'how many ways, or how likely',                               keeps:['multprin','comb','perm','complement','baserate'] },
  { id:'shape',   n:'Shapes and sizes',     sub:'lengths, angles, areas, volumes',                            keeps:['pyth','trig','similar','sqcube'] }
]};

const MATH_STEPS_BY_GATE = {
  whole: [
    { code:'W1', label:'What do you want to find out about the number or numbers?', options:[
        {id:'split', n:'Whether one number can be split evenly by anything smaller',        keeps:['prime']},
        {id:'parts', n:'What a number is made of, or what two numbers have in common',      keeps:['factor','gcdlcm']},
        {id:'cycle', n:'Where a count lands after going round and round one loop',          keeps:['modrem']},
        {id:'exact', n:'Whether a number can be written exactly as a fraction',             keeps:['irrat']}
    ]},
    { code:'W2', label:'What do you do to settle it?', options:[
        {id:'divtest',   n:'Try dividing it by each prime up to its square root',           keeps:['prime']},
        {id:'unique',    n:'Keep dividing it into primes until only primes are left',       keeps:['factor']},
        {id:'shared',    n:'Write both numbers as primes and compare them',                 keeps:['gcdlcm']},
        {id:'remainder', n:'Divide by the loop size and keep only what is left over',       keeps:['modrem']},
        {id:'proof',     n:'Show that no fraction can ever equal it (a proof)',             keeps:['irrat']}
    ]}
  ],
  unknown: [
    { code:'A1', label:'How does the missing number show up?', options:[
        {id:'once', n:'One missing number, appearing once and not squared',  keeps:['rearr','prop']},
        {id:'sq',   n:'One missing number, multiplied by itself', sub:'you see t² or x²', keeps:['quad']},
        {id:'two',  n:'Two missing numbers, linked by two facts',            keeps:['simul']}
    ]},
    { code:'A2', label:'What do you want out of it?', options:[
        {id:'isolate',  n:'The same formula, turned around to find a different letter', keeps:['rearr']},
        {id:'scale',    n:'A new amount, at a rate you already know',                  keeps:['prop']},
        {id:'crossing', n:'The one pair of numbers that fits both facts',              keeps:['simul']},
        {id:'roots',    n:'When something reaches zero, or whether it ever does',      keeps:['quad']}
    ]}
  ],
  growth: [
    { code:'G1', label:'At each step, what happens to the quantity?', options:[
        {id:'add',    n:'The same amount is added each time',                          keeps:['lin']},
        {id:'mult',   n:'It is multiplied by the same number each time',               keeps:['expg','logsolve']},
        {id:'spread', n:'Nothing is growing; the numbers just range from tiny to enormous', keeps:['logscale']}
    ]},
    { code:'G2', label:'What are you trying to work out?', options:[
        {id:'total',   n:'The total, after adding the same amount again and again',    keeps:['lin']},
        {id:'size',    n:'The size, after multiplying a known number of times',        keeps:['expg']},
        {id:'steps',   n:'How many steps it takes to reach a known size',              keeps:['logsolve']},
        {id:'display', n:'How to draw or compare numbers that range from tiny to enormous', keeps:['logscale']}
    ]}
  ],
  chance: [
    { code:'C1', label:'What is the question asking for?', options:[
        {id:'arrange', n:'How many ways something can be picked or arranged',          keeps:['multprin','comb','perm']},
        {id:'atleast', n:'How likely it is that at least one of several things happens', keeps:['complement']},
        {id:'given',   n:'How likely something is, now that you have a test result or clue', keeps:['baserate']}
    ]},
    { code:'C2', label:'What detail in the case decides it?', options:[
        {id:'slots', n:'Several separate choices, each with its own list of options',  keeps:['multprin']},
        {id:'group', n:'A group is picked, and the order does not matter',             keeps:['comb']},
        {id:'order', n:'Things are picked in turn, and a different order counts as different', keeps:['perm']},
        {id:'none',  n:'Counting “none of them” is far easier than counting “at least one”', keeps:['complement']},
        {id:'rare',  n:'A rare thing and a test that is not perfect',                  keeps:['baserate']}
    ]}
  ],
  shape: [
    { code:'S1', label:'What do you have to work with?', options:[
        {id:'twosides', n:'Two sides of a right-angled triangle',                      keeps:['pyth']},
        {id:'angleside',n:'One angle and one side',                                    keeps:['trig']},
        {id:'samesh',   n:'Two things with the same shape but different sizes',        keeps:['similar','sqcube']}
    ]},
    { code:'S2', label:'What do you want to find?', options:[
        {id:'third',    n:'The third side of the right-angled triangle',               keeps:['pyth']},
        {id:'unreach',  n:'A length you cannot measure directly, using an angle',      keeps:['trig']},
        {id:'ratiolen', n:'A missing length, using the matching sides of the same shape', keeps:['similar']},
        {id:'areavol',  n:'How the area or volume changes when the length changes',    keeps:['sqcube']}
    ]}
  ]
};

/* Drills: every item is a case that no card uses. The options are the exact names from the cards and the key.
   Each explanation says which question of the key decides the case and which detail in the case gives it away. */

const M1_OPTS = ['Whole numbers','A missing number','Growth over time','Counting and chances','Shapes and sizes'];
const M1_DRILL = [
  {q:`Seven friends share 50 sweets equally, and the sweets that are left over go to the teacher. How many does the teacher get?`,
   a:'Whole numbers', w:`The question “What is the question about?” is decided by “share equally” and “left over”: it is about how one whole number divides by another, and what remains. That is Whole numbers. (50 ÷ 7 = 7 with 1 left over, so the teacher gets 1.)`},
  {q:`Can 221 chairs be set out in equal rows, with more than one chair in each row and more than one row?`,
   a:'Whole numbers', w:`The question “What is the question about?” is decided by “equal rows” with nothing left over: it asks whether 221 can be split evenly by anything smaller. That is about how a whole number divides, so the answer is Whole numbers. (13 × 17 = 221, so yes: 13 rows of 17.)`},
  {q:`A plumber charges a €45 call-out fee plus €30 an hour. Your bill was €135. How many hours did she work?`,
   a:'A missing number', w:`The question “What is the question about?” is decided by what is missing: the hours are not given, and the facts (the fee, the hourly rate and the total) pin them down. A hidden number worked out from facts is A missing number. (45 + 30 × hours = 135, so 30 × hours = 90, so 3 hours.)`},
  {q:`At a school bake sale, cupcakes cost €2 and brownies cost €3. Forty items were sold for €95 in total. How many of each were sold?`,
   a:'A missing number', w:`The question “What is the question about?” is decided by the two hidden counts and the two facts that tie them together (40 items, €95 in total). That is A missing number. It asks “how many”, but it is not Counting and chances: nothing is being arranged or guessed, the facts fix the answer. (25 cupcakes and 15 brownies.)`},
  {q:`A town of 8,000 people grows by 3% every year. About how many people will live there in ten years?`,
   a:'Growth over time', w:`The question “What is the question about?” is decided by “every year” and “grows by 3%”: a quantity changing step by step. That is Growth over time. (Multiply by 1.03 ten times and you get about 10,750.)`},
  {q:`A museum wants one wall chart of time that shows a person’s life (80 years), the pyramids (4,500 years ago), the last ice age (20,000 years ago) and the end of the dinosaurs (66 million years ago).`,
   a:'Growth over time', w:`The question “What is the question about?” is decided by the range: the numbers run from tens to millions, and the problem is how to draw them together. Nothing is added or multiplied, and nothing is changing over time, but numbers from tiny to huge belong to Growth over time. Unit Four teaches how such numbers are drawn on one chart.`},
  {q:`A café lets you choose one of 4 sandwiches and one of 3 soups. How many different lunches are possible?`,
   a:'Counting and chances', w:`The question “What is the question about?” is decided by “how many different”: it counts ways of choosing. That is Counting and chances. (4 × 3 = 12 lunches.)`},
  {q:`A raffle sells 200 tickets and you hold 5 of them. What are your chances of winning the prize?`,
   a:'Counting and chances', w:`The question “What is the question about?” is decided by “your chances”: it asks how likely something is. That is Counting and chances. (5 out of 200 is 5 ÷ 200 = 2.5%.)`},
  {q:`You can pace out 120 m along one shore of a lake and 90 m along another shore, and the two shores meet at a right angle. How far is it across the water between the two far ends?`,
   a:'Shapes and sizes', w:`The question “What is the question about?” is decided by a distance, two measured lengths and a right angle: that is Shapes and sizes. (The distance across is 150 m. Unit Three shows how to find it: 120 × 120 + 90 × 90 = 22,500, and the square root of 22,500 is 150.)`},
  {q:`A model aeroplane is built at one-twentieth of the real size. The model’s wing is 40 cm long. How long is the real wing?`,
   a:'Shapes and sizes', w:`The question “What is the question about?” is decided by two things of the same shape in different sizes, with a length wanted: that is Shapes and sizes. (40 cm × 20 = 800 cm, which is 8 m.) It is not A missing number, because the hidden length comes from comparing two shapes, not from facts about a formula or a total.`}
];

const M2_OPTS = ['Prime check','Prime factors','Biggest shared piece or first line-up (GCD / LCM)','Remainder (mod)','A number with no exact fraction (irrational)'];
const M2_DRILL = [
  {q:`A sports club has 53 members. The coach wants to split them into equal teams, with more than one team and more than one player in each team. Is that possible?`,
   a:'Prime check', w:`“What do you want to find out about the number or numbers?” is answered by “Whether one number can be split evenly by anything smaller”: the coach is asking whether 53 divides into equal groups. You settle it by trying the primes up to its square root: 7 × 7 = 49 and 8 × 8 = 64, so test 2, 3, 5 and 7. None goes in evenly, so 53 is prime and the answer is no. Tool: Prime check.`},
  {q:`A friend says 143 must be prime because it is odd, does not end in 5, and its digits add up to 8, which is not a multiple of 3. Is she right?`,
   a:'Prime check', w:`“What do you want to find out about the number or numbers?” is again “Whether one number can be split evenly by anything smaller”: the detail that gives it away is that the friend is claiming 143 is prime. She stopped too early. 11 × 11 = 121 and 12 × 12 = 144, so the primes to test go up to 11. 143 ÷ 11 = 13 exactly, so 143 = 11 × 13. Tool: Prime check, and she is wrong.`},
  {q:`A caterer has 90 cupcakes and wants to know every way to set them out in equal rows. She starts by asking what 90 is made of.`,
   a:'Prime factors', w:`“What do you want to find out about the number or numbers?” is answered by “What a number is made of, or what two numbers have in common”, and the detail that gives it away is that only one number, 90, is in play and the case asks what it is made of. “What do you do to settle it?” “Keep dividing it into primes until only primes are left”: 90 ÷ 2 = 45, 45 ÷ 3 = 15, 15 ÷ 3 = 5, and 5 is prime, so 90 = 2 × 3 × 3 × 5. Tool: Prime factors.`},
  {q:`A puzzle says 391 is the product of two prime numbers, and asks you to find them.`,
   a:'Prime factors', w:`“What do you want to find out about the number or numbers?” is answered by “What a number is made of, or what two numbers have in common”: one number, and the case asks for the primes it is made of. “What do you do to settle it?” “Keep dividing it into primes until only primes are left”. 19 × 19 = 361 and 20 × 20 = 400, so you only try primes up to 19, and the first that goes in is 17: 391 ÷ 17 = 23, and 23 is prime. 391 = 17 × 23. Tool: Prime factors.`},
  {q:`Two street lights blink, one every 8 seconds and the other every 12 seconds. They blink together now. When do they next blink together?`,
   a:'Biggest shared piece or first line-up (GCD / LCM)', w:`“What do you want to find out about the number or numbers?” is answered by “What a number is made of, or what two numbers have in common”: the detail that gives it away is two numbers, 8 and 12, and two repeating things meeting again. “What do you do to settle it?” “Write both numbers as primes and compare them”: 8 = 2 × 2 × 2 and 12 = 2 × 2 × 3. Take every prime the most times either has it: 2 × 2 × 2 × 3 = 24 seconds. Tool: Biggest shared piece or first line-up (GCD / LCM).`},
  {q:`A carpenter has two boards, 150 cm and 210 cm long. She wants to cut both into identical pieces, as long as possible, with no wood left over.`,
   a:'Biggest shared piece or first line-up (GCD / LCM)', w:`“What do you want to find out about the number or numbers?” is answered by “What a number is made of, or what two numbers have in common”: two numbers, 150 and 210, and the longest piece that fits into both with nothing left. “What do you do to settle it?” “Write both numbers as primes and compare them”: 150 = 2 × 3 × 5 × 5 and 210 = 2 × 3 × 5 × 7. Keep only the primes they share: 2 × 3 × 5 = 30 cm. That gives 5 pieces from one board and 7 from the other. Tool: Biggest shared piece or first line-up (GCD / LCM).`},
  {q:`A string of beads repeats red, green, blue, red, green, blue, and so on. What colour is the 50th bead?`,
   a:'Remainder (mod)', w:`“What do you want to find out about the number or numbers?” is answered by “Where a count lands after going round and round one loop”: the detail that gives it away is one loop, the 3-colour pattern, and one count, 50. “What do you do to settle it?” “Divide by the loop size and keep only what is left over”: 50 ÷ 3 = 16 with 2 left over (3 × 16 = 48). After 48 beads the pattern has just finished a blue, so the 2 left over give red, then green: the 50th bead is green. Tool: Remainder (mod).`},
  {q:`A bus route is a loop of 8 stops, numbered 1 to 8, and then it starts again at 1. You get on at stop 3 and ride 29 stops. Where do you get off?`,
   a:'Remainder (mod)', w:`“What do you want to find out about the number or numbers?” is answered by “Where a count lands after going round and round one loop”: one loop of 8 stops and one count of 29 stops ridden. “What do you do to settle it?” “Divide by the loop size and keep only what is left over”: 29 ÷ 8 = 3 with 5 left over (8 × 3 = 24). Three full loops bring you back to stop 3, and 5 more stops are 4, 5, 6, 7, 8. You get off at stop 8. Tool: Remainder (mod).`},
  {q:`A student says π is exactly 22/7 because that is the number her textbook uses. Is there a fraction that is exactly π?`,
   a:'A number with no exact fraction (irrational)', w:`“What do you want to find out about the number or numbers?” is answered by “Whether a number can be written exactly as a fraction”: that is the whole question. “What do you do to settle it?” “Show that no fraction can ever equal it (a proof)”: it has been proved that none can. 22/7 = 3.142857… and π = 3.141592…, so 22/7 is a handy approximation, not the exact value. Tool: A number with no exact fraction (irrational).`},
  {q:`A square garden has an area of 7 square metres. Can you write the length of one side exactly as a fraction?`,
   a:'A number with no exact fraction (irrational)', w:`“What do you want to find out about the number or numbers?” is answered by “Whether a number can be written exactly as a fraction”: the side is the square root of 7, and the case asks whether a fraction can equal it exactly. 7 is not a perfect square (the nearest are 4 and 9), so its square root cannot be a whole number. 2.6 × 2.6 = 6.76 and 2.7 × 2.7 = 7.29, so it lies between 2.6 and 2.7, at about 2.6458, and its decimals never end or repeat. “What do you do to settle it?” “Show that no fraction can ever equal it (a proof)”: the same kind of proof as for the square root of 2 works here, so the answer is no. Tool: A number with no exact fraction (irrational).`}
];

const M3_OPTS = ['Rearranging a formula','Scaling by a rate (proportion)','Two facts, two unknowns (simultaneous equations)','A squared unknown (quadratic)','Third side of a right-angled triangle (Pythagoras)','Length from an angle (trigonometry)','Same shape, different size (similar triangles)','Area and volume grow faster than length (square–cube law)'];
const M3_DRILL = [
  {q:`Your electricity bill is €8 a month plus €0.25 for each unit (kWh) you use. This month’s bill was €38. How many units did you use?`,
   a:'Rearranging a formula', w:`“What do you want out of it?” is answered by “The same formula, turned around to find a different letter”: the rule bill = 8 + 0.25 × units is known, and you want it solved for units instead of for the bill. The missing number appears once and is not squared. Undo in reverse order: 38 − 8 = 30, then 30 ÷ 0.25 = 120 units. Tool: Rearranging a formula.`},
  {q:`A room is 24 square metres in area and 6 metres long. The area of a rectangle is its length times its width. How wide is the room?`,
   a:'Rearranging a formula', w:`“What do you want out of it?” is answered by “The same formula, turned around to find a different letter”: the formula area = length × width is given, and the letter you want is width, not area. Undo the multiplication: 24 ÷ 6 = 4 metres. It is not Scaling by a rate, because you are turning a formula around, not applying a rate to a new amount. Tool: Rearranging a formula.`},
  {q:`A recipe for 4 people uses 300 g of rice. You are cooking for 7 people.`,
   a:'Scaling by a rate (proportion)', w:`“What do you want out of it?” is answered by “A new amount, at a rate you already know”: the rate is 300 g for 4 people, which is 75 g each, and the new amount is for 7 people. 300 ÷ 4 = 75, then 75 × 7 = 525 g. Tool: Scaling by a rate (proportion).`},
  {q:`A print shop charges €18 for 12 photo prints. How much will 30 prints cost at the same rate?`,
   a:'Scaling by a rate (proportion)', w:`“What do you want out of it?” is answered by “A new amount, at a rate you already know”: the rate is €18 for 12 prints, which is €1.50 a print, and the new amount is 30 prints. 18 ÷ 12 = 1.50, then 1.50 × 30 = €45. Tool: Scaling by a rate (proportion).`},
  {q:`At a café, 2 coffees and 1 muffin cost €7.50. 1 coffee and 2 muffins cost €6.00. What does one coffee cost?`,
   a:'Two facts, two unknowns (simultaneous equations)', w:`“How does the missing number show up?” is answered by “Two missing numbers, linked by two facts”: the price of a coffee and the price of a muffin, with one fact for each order. “What do you want out of it?” “The one pair of numbers that fits both facts”. From the second order, coffee = 6.00 − 2 × muffin. Put that into the first: 2 × (6.00 − 2m) + m = 7.50, so 12 − 4m + m = 7.50, so 3m = 4.50 and m = 1.50. Then a coffee is 6.00 − 3.00 = €3.00. Tool: Two facts, two unknowns (simultaneous equations).`},
  {q:`A farmer’s chickens and goats together have 30 heads and 80 legs. How many of each does she have?`,
   a:'Two facts, two unknowns (simultaneous equations)', w:`“How does the missing number show up?” is answered by “Two missing numbers, linked by two facts”: the number of chickens and the number of goats, with one fact about heads and one about legs. With c chickens and g goats: c + g = 30 and 2c + 4g = 80. From the first, c = 30 − g, so 2 × (30 − g) + 4g = 80, so 60 + 2g = 80 and g = 10. Then c = 20. Check: 20 × 2 + 10 × 4 = 80. Tool: Two facts, two unknowns (simultaneous equations).`},
  {q:`A company’s profit, in thousands of euros, is −x² + 12x − 20 when it sells x thousand items. At how many thousand items does the profit hit zero, so that it breaks even?`,
   a:'A squared unknown (quadratic)', w:`“How does the missing number show up?” is answered by “One missing number, multiplied by itself”: x appears squared. “What do you want out of it?” “When something reaches zero, or whether it ever does”: break-even is where the profit is zero. Multiply every part of the equation by −1 to get x² − 12x + 20 = 0. Two numbers that multiply to 20 and add to −12 are −2 and −10, so (x − 2)(x − 10) = 0 and x = 2 or x = 10. The company breaks even at 2 thousand items and again at 10 thousand. Tool: A squared unknown (quadratic).`},
  {q:`Two whole numbers that follow each other, like 4 and 5, multiply to give 56. What are the numbers?`,
   a:'A squared unknown (quadratic)', w:`“How does the missing number show up?” is answered by “One missing number, multiplied by itself”: call the smaller number n, so the numbers are n and n + 1, and n × (n + 1) = n² + n has n squared. “What do you want out of it?” “When something reaches zero, or whether it ever does”: rewrite it as n² + n − 56 = 0. Two numbers that multiply to −56 and add to 1 are 8 and −7, so (n + 8)(n − 7) = 0 and n = 7 or n = −8. The case means positive numbers, so they are 7 and 8 (7 × 8 = 56); −8 and −7 would also fit. Tool: A squared unknown (quadratic).`},
  {q:`A phone screen is 6 cm wide and 13 cm tall. How long is the screen measured across, corner to corner?`,
   a:'Third side of a right-angled triangle (Pythagoras)', w:`“What do you have to work with?” is answered by “Two sides of a right-angled triangle”: the width and the height meet at a corner of the screen, which is a right angle, and the diagonal closes the triangle. “What do you want to find?” “The third side of the right-angled triangle”. The diagonal is the longest side, so add the squares: 6 × 6 = 36, 13 × 13 = 169, 36 + 169 = 205, and the square root of 205 is about 14.3 cm. Tool: Third side of a right-angled triangle (Pythagoras).`},
  {q:`A straight road climbs a hillside. It is 130 m long and rises 50 m. How far does it go along level ground, that is, what is the horizontal distance?`,
   a:'Third side of a right-angled triangle (Pythagoras)', w:`“What do you have to work with?” is answered by “Two sides of a right-angled triangle”: the road is 130 m, the rise is 50 m, and the rise is measured straight up from level ground, at a right angle to it. No angle is given. “What do you want to find?” “The third side of the right-angled triangle”: the distance along the ground. The road is the longest side, so subtract the squares: 130 × 130 = 16,900, 50 × 50 = 2,500, 16,900 − 2,500 = 14,400, and the square root of 14,400 is 120 m. Tool: Third side of a right-angled triangle (Pythagoras).`},
  {q:`A wheelchair ramp rises at an angle of 5° and runs 12 m along the ground. How high does it climb?`,
   a:'Length from an angle (trigonometry)', w:`“What do you have to work with?” is answered by “One angle and one side”: the 5° angle and the 12 m along the ground. “What do you want to find?” “A length you cannot measure directly, using an angle”: the height gained. The side you know is next to the angle and the side you want is opposite it, so use tan: height = 12 × tan 5° = 12 × 0.0875 = about 1.05 m. Tool: Length from an angle (trigonometry).`},
  {q:`A 6 m ladder leans against a wall at an angle of 70° to the ground. How high up the wall does it reach?`,
   a:'Length from an angle (trigonometry)', w:`“What do you have to work with?” is answered by “One angle and one side”: the 70° angle and the 6 m ladder. (A ladder where you know its length and its distance from the wall would be two sides, and a different tool.) “What do you want to find?” “A length you cannot measure directly, using an angle”: the height up the wall. The ladder is the longest side and the height is opposite the angle, so use sin: height = 6 × sin 70° = 6 × 0.9397 = about 5.64 m. Tool: Length from an angle (trigonometry).`},
  {q:`A scale model of a bridge is built at 1 to 50. A tower on the model is 36 cm tall. How tall is the real tower?`,
   a:'Same shape, different size (similar triangles)', w:`“What do you have to work with?” is answered by “Two things with the same shape but different sizes”: the model and the bridge. “What do you want to find?” “A missing length, using the matching sides of the same shape”: every length on the real bridge is 50 times the matching length on the model, so 36 × 50 = 1,800 cm, which is 18 m. Nothing asks how area or volume change, only a length. Tool: Same shape, different size (similar triangles).`},
  {q:`A 1.5 m child casts a shadow 2 m long. At the same moment a lamp post casts a shadow 10 m long. How tall is the lamp post?`,
   a:'Same shape, different size (similar triangles)', w:`“What do you have to work with?” is answered by “Two things with the same shape but different sizes”: the child with her shadow and the lamp post with its shadow make two right-angled triangles with the same angles, because the sun is at the same angle for both. “What do you want to find?” “A missing length, using the matching sides of the same shape”: the post’s shadow is 10 ÷ 2 = 5 times the child’s, so its height is 1.5 × 5 = 7.5 m. Tool: Same shape, different size (similar triangles).`},
  {q:`Two paint tins have the same shape. The big one is 3 times as tall and 3 times as wide as the small one. How many times more paint does it hold?`,
   a:'Area and volume grow faster than length (square–cube law)', w:`“What do you have to work with?” is answered by “Two things with the same shape but different sizes”: two tins of the same shape. “What do you want to find?” “How the area or volume changes when the length changes”: paint fills volume, and every length is multiplied by 3, so the volume is multiplied by 3 × 3 × 3 = 27. Tool: Area and volume grow faster than length (square–cube law).`},
  {q:`A square window 1 m wide is replaced by one 3 m wide. How many times more glass does the new window need?`,
   a:'Area and volume grow faster than length (square–cube law)', w:`“What do you have to work with?” is answered by “Two things with the same shape but different sizes”: two square windows. “What do you want to find?” “How the area or volume changes when the length changes”: glass covers area, and the width is multiplied by 3, so the area is multiplied by 3 × 3 = 9 (from 1 square metre to 9). Tool: Area and volume grow faster than length (square–cube law).`}
];

const M4_OPTS = ['Adding the same amount each time (linear growth)','Multiplying by the same number each time (exponential growth)','How many steps to get there (logarithm)','Equal space for each ×10 (log scale)','Neither — a one-off jump'];
const M4_DRILL = [
  {q:`A street musician earns €15 an hour. How much has she earned after 6 hours?`,
   a:'Adding the same amount each time (linear growth)', w:`“At each step, what happens to the quantity?” is answered by “The same amount is added each time”: €15 is added every hour, never a share of what she already has. “What are you trying to work out?” “The total, after adding the same amount again and again”: 6 × 15 = €90. Tool: Adding the same amount each time (linear growth).`},
  {q:`A candle is 20 cm tall and burns down 2 cm every hour. How tall is it after 7 hours?`,
   a:'Adding the same amount each time (linear growth)', w:`“At each step, what happens to the quantity?” is answered by “The same amount is added each time”: the same 2 cm is taken away every hour, which is the same as adding −2 each time. “What are you trying to work out?” “The total, after adding the same amount again and again”: 20 − 7 × 2 = 6 cm. Tool: Adding the same amount each time (linear growth).`},
  {q:`A sample of bacteria starts at 500 and doubles every 3 hours. How many bacteria are there after 12 hours?`,
   a:'Multiplying by the same number each time (exponential growth)', w:`“At each step, what happens to the quantity?” is answered by “It is multiplied by the same number each time”: every 3 hours the count is multiplied by 2. “What are you trying to work out?” “The size, after multiplying a known number of times”: 12 hours is 4 steps of 3 hours, so 500 × 2 × 2 × 2 × 2 = 8,000. Tool: Multiplying by the same number each time (exponential growth).`},
  {q:`A car cost €20,000 new and loses 15% of its value every year. What is it worth after 3 years?`,
   a:'Multiplying by the same number each time (exponential growth)', w:`“At each step, what happens to the quantity?” is answered by “It is multiplied by the same number each time”: losing 15% means keeping 85%, so the value is multiplied by 0.85 every year (a number below 1 makes it shrink). “What are you trying to work out?” “The size, after multiplying a known number of times”: 20,000 × 0.85 = 17,000, then × 0.85 = 14,450, then × 0.85 = 12,282.50. Tool: Multiplying by the same number each time (exponential growth).`},
  {q:`A credit-card debt of €2,000 is charged 24% interest a year, and nothing is paid off. How much is owed after 2 years?`,
   a:'Multiplying by the same number each time (exponential growth)', w:`“At each step, what happens to the quantity?” is answered by “It is multiplied by the same number each time”: 24% a year means multiplying by 1.24, because next year’s interest is charged on this year’s interest too. “What are you trying to work out?” “The size, after multiplying a known number of times”: 2,000 × 1.24 = 2,480, then 2,480 × 1.24 = 3,075.20. Tool: Multiplying by the same number each time (exponential growth).`},
  {q:`You put money in an account paying 4% a year. About how many years until it has doubled?`,
   a:'How many steps to get there (logarithm)', w:`“At each step, what happens to the quantity?” is answered by “It is multiplied by the same number each time”: ×1.04 every year. “What are you trying to work out?” “How many steps it takes to reach a known size”: the size is double and you want the number of years. 1.04 multiplied by itself 17 times is 1.95 and 18 times is 2.03, so it is about 17.7 years (log 2 ÷ log 1.04 = 0.301 ÷ 0.0170). Tool: How many steps to get there (logarithm).`},
  {q:`Pond weed doubles its coverage every day. It covers 1 square metre today, and the pond is 1,000 square metres. After how many days will it cover the whole pond?`,
   a:'How many steps to get there (logarithm)', w:`“At each step, what happens to the quantity?” is answered by “It is multiplied by the same number each time”: ×2 every day. “What are you trying to work out?” “How many steps it takes to reach a known size”: the size is 1,000 and you want the number of days. Doubling 10 times gives 1,024, just over 1,000, so it takes about 10 days. Tool: How many steps to get there (logarithm).`},
  {q:`A science site wants one chart that shows a virus (0.00001 mm), a human cell (0.01 mm) and a grain of sand (1 mm) side by side.`,
   a:'Equal space for each ×10 (log scale)', w:`“At each step, what happens to the quantity?” is answered by “Nothing is growing; the numbers just range from tiny to enormous”: the grain of sand is 100,000 times the width of the virus, and none of them is changing. “What are you trying to work out?” “How to draw or compare numbers that range from tiny to enormous”. On an ordinary axis the virus and the cell would sit on top of each other at zero. Tool: Equal space for each ×10 (log scale).`},
  {q:`A report plots the populations of 200 cities in one bar chart, from villages of 2,000 people to megacities of 30 million.`,
   a:'Equal space for each ×10 (log scale)', w:`“At each step, what happens to the quantity?” is answered by “Nothing is growing; the numbers just range from tiny to enormous”: the cities are very different sizes, but nothing is changing over time. “What are you trying to work out?” “How to draw or compare numbers that range from tiny to enormous”: on an ordinary axis a bar for 2,000 people would be 1/15,000 as tall as a bar for 30 million, a speck. Giving each ×10 the same space makes every city readable. Tool: Equal space for each ×10 (log scale).`},
  {q:`A phone plan cost €20 a month, then the company changed the price to €26, and it has stayed at €26 for two years.`,
   a:'Neither — a one-off jump', w:`“At each step, what happens to the quantity?” Look at the steps: nothing is added or multiplied over and over. There was one change, from 20 to 26, and then no change at all. A single jump is not a pattern of adding or multiplying, and it is not a case of numbers from tiny to enormous either. So none of the four growth tools fits: Neither — a one-off jump. Do not stretch a trend out of it.`},
  {q:`A shop sold about 400 coffees a week for months. When a new road opened it began selling about 650 a week, and has stayed there since.`,
   a:'Neither — a one-off jump', w:`“At each step, what happens to the quantity?” Week after week the number stayed the same, then made one jump, then stayed the same again. There is no same amount added each time and no same number multiplied each time. Tool: Neither — a one-off jump. Projecting 650, 900, 1,150 and so on (adding 250 a week) from one jump would be an invented trend.`}
];

const M5_OPTS = ['Multiplying the choices (multiplication principle)','Picking a group, order ignored (combinations)','Picking in order (permutations)','Counting the opposite (complement rule)','How rare it was to begin with (base rate)'];
const M5_DRILL = [
  {q:`A bike lock has three wheels, each showing a digit from 0 to 9. How many different codes are possible?`,
   a:'Multiplying the choices (multiplication principle)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”: the number of codes. “What detail in the case decides it?” “Several separate choices, each with its own list of options”: each wheel is its own choice of 10 digits, and one wheel does not use up a digit from another. 10 × 10 × 10 = 1,000 codes. Tool: Multiplying the choices (multiplication principle).`},
  {q:`A pizza place offers 3 sizes, 8 toppings (you choose one) and 2 crust types. How many different pizzas can you order?`,
   a:'Multiplying the choices (multiplication principle)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”. “What detail in the case decides it?” “Several separate choices, each with its own list of options”: size, topping and crust are three separate choices, and choosing a size removes nothing from the other lists. 3 × 8 × 2 = 48 pizzas. Tool: Multiplying the choices (multiplication principle).`},
  {q:`Twelve runners are in a final. In how many different ways can the gold, silver and bronze medals be given out?`,
   a:'Picking in order (permutations)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”: medal results. “What detail in the case decides it?” “Things are picked in turn, and a different order counts as different”: the same three runners with the medals swapped round is a different result. 12 choices for gold, then 11 for silver, then 10 for bronze: 12 × 11 × 10 = 1,320. Tool: Picking in order (permutations).`},
  {q:`Seven different books are put on a shelf in a row. How many different orders are possible?`,
   a:'Picking in order (permutations)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”: orders of the books. “What detail in the case decides it?” “Things are picked in turn, and a different order counts as different”: swapping two books gives a different shelf. 7 choices for the first place, 6 for the next, and so on: 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5,040. Tool: Picking in order (permutations).`},
  {q:`A teacher chooses 4 students from a class of 9 to go on a trip. How many different groups of 4 are possible?`,
   a:'Picking a group, order ignored (combinations)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”. “What detail in the case decides it?” “A group is picked, and the order does not matter”: the same four students make the same trip group whichever order she named them in. If order counted there would be 9 × 8 × 7 × 6 = 3,024 ways. Each group of 4 appears 4 × 3 × 2 × 1 = 24 times, so divide: 3,024 ÷ 24 = 126. Tool: Picking a group, order ignored (combinations).`},
  {q:`A pizza is made with 3 different toppings chosen from 8 available ones. How many different pizzas are possible?`,
   a:'Picking a group, order ignored (combinations)', w:`“What is the question asking for?” is answered by “How many ways something can be picked or arranged”. “What detail in the case decides it?” “A group is picked, and the order does not matter”: ham, olives and onion is the same pizza as onion, ham and olives. In order there would be 8 × 7 × 6 = 336 ways, and each group of 3 appears 3 × 2 × 1 = 6 times, so 336 ÷ 6 = 56. Tool: Picking a group, order ignored (combinations).`},
  {q:`The forecast gives a 20% chance of rain on each of the next 3 days, and the days do not affect each other. How likely is it that it rains on at least one of them?`,
   a:'Counting the opposite (complement rule)', w:`“What is the question asking for?” is answered by “How likely it is that at least one of several things happens”: rain on at least one day. “What detail in the case decides it?” “Counting “none of them” is far easier than counting “at least one””: “no rain on any day” is one product, while “at least one” has many cases. Each day stays dry with chance 0.8, and the days are separate, so multiply: 0.8 × 0.8 × 0.8 = 0.512. At least one wet day: 1 − 0.512 = 0.488, about 49%. Tool: Counting the opposite (complement rule).`},
  {q:`A website runs on 30 servers. Each one has a 1% chance of crashing on a given night, and they crash independently of each other. How likely is it that at least one server crashes tonight?`,
   a:'Counting the opposite (complement rule)', w:`“What is the question asking for?” is answered by “How likely it is that at least one of several things happens”: at least one crash. “What detail in the case decides it?” “Counting “none of them” is far easier than counting “at least one””: “all 30 stay up” is one product. Each server stays up with chance 0.99, so all 30 stay up with chance 0.99 multiplied by itself 30 times, about 0.740. At least one crash: 1 − 0.740 = 0.260, about 26%. A 1% chance sounds tiny, yet across 30 servers a crash somewhere is about a one-in-four night. Tool: Counting the opposite (complement rule).`},
  {q:`At an airport, 1 bag in 2,000 holds a banned item. The scanner flags 98% of the bags that do, and wrongly flags 4% of the harmless ones. A bag is flagged. How likely is it that it holds a banned item?`,
   a:'How rare it was to begin with (base rate)', w:`“What is the question asking for?” is answered by “How likely something is, now that you have a test result or clue”: the bag has been flagged and you want the chance it is guilty. “What detail in the case decides it?” “A rare thing and a test that is not perfect”: 1 bag in 2,000 is rare, and the scanner also flags harmless bags. Take 100,000 bags: 50 hold a banned item and 98% of them, 49, are flagged. 99,950 are harmless and 4% of them, 3,998, are flagged. So 49 + 3,998 = 4,047 bags are flagged and 49 of them are guilty: 49 ÷ 4,047 = about 1.2%. Tool: How rare it was to begin with (base rate).`},
  {q:`One employee in 100 uses a banned drug. A drug test catches 99% of users and wrongly flags 2% of non-users. An employee tests positive. How likely is it that they are a user?`,
   a:'How rare it was to begin with (base rate)', w:`“What is the question asking for?” is answered by “How likely something is, now that you have a test result or clue”. “What detail in the case decides it?” “A rare thing and a test that is not perfect”: 1 in 100 are users, and the test wrongly flags some non-users. Take 10,000 employees: 100 are users and 99 of them test positive. 9,900 are not users and 2% of them, 198, test positive. So 99 + 198 = 297 test positive and 99 of them are users: 99 ÷ 297 = one third. A positive test means a user only one time in three. Tool: How rare it was to begin with (base rate).`}
];

/* Faulty claims: each one skips a question of the key. The fault names the question in the key's words, the tool
   the claim should have used, and puts the real numbers in. */

const MATH_ERR = [
  {q:`“Our sales have grown exponentially. They are up €3,000 every single month this year.”`,
   w:`The fault: steady growth is being called exponential. The question the claim skips is “At each step, what happens to the quantity?” The answer here is “The same amount is added each time”: €3,000 a month, whatever the size of the sales. That is Adding the same amount each time (linear growth). It would be exponential only if each month’s increase were bigger than the last, because the total was multiplied by the same number each time.`},
  {q:`“Rents went up 10% a year for three years, so they are up 30% altogether.”`,
   w:`The fault: the three rises are added together, but a percentage change is a multiplier, and each year’s 10% is taken on a bigger amount. The question the claim skips is “At each step, what happens to the quantity?” Its answer is “It is multiplied by the same number each time”: up 10% means × 1.1, and three years multiply together. Start at 100: 100 × 1.1 = 110, then 110 × 1.1 = 121, then 121 × 1.1 = 133.1. Rents are up about 33%, not 30%. Tool: Multiplying by the same number each time (exponential growth).`},
  {q:`“The test is 95% accurate and I tested positive, so there is a 95% chance I have it.” (The condition affects 1 person in 200.)`,
   w:`The fault: the accuracy of the test is mistaken for the chance that you are ill. The question the claim skips is “What detail in the case decides it?” The answer is “A rare thing and a test that is not perfect”. Take 20,000 people: 100 are ill and the test catches 95 of them. 19,900 are healthy and 5% of them, 995, test positive by mistake. So 95 of the 1,090 positive results are real, about 8.7%, not 95%. Tool: How rare it was to begin with (base rate).`},
  {q:`“My new shed is 3 m by 3 m. My old one was 1 m by 1 m. So the new one is three times the size.”`,
   w:`The fault: a length is being treated as a size. The question the claim skips is “What do you want to find?” The answer is “How the area or volume changes when the length changes”. Each side is 3 times as long, so the floor is 3 × 3 = 9 times as big (9 square metres against 1), and if the height also tripled the space inside would be 3 × 3 × 3 = 27 times as big. Tool: Area and volume grow faster than length (square–cube law).`},
  {q:`“There is a 1 in 6 chance of a six each time you roll a die, so if I roll six times I am certain to get a six.”`,
   w:`The fault: the chances are added up, but “at least one” has to be worked out through its opposite. The question the claim skips is “What is the question asking for?” The answer is “How likely it is that at least one of several things happens”, and the detail that decides it is “Counting “none of them” is far easier than counting “at least one””. No six on one roll has chance 5/6, so no six in six rolls is 5/6 multiplied by itself 6 times, about 0.335. At least one six is 1 − 0.335 = 0.665, about 67%, not 100%. Tool: Counting the opposite (complement rule).`},
  {q:`“The roulette wheel has landed on red six times in a row, so black is due.”`,
   w:`The fault: the wheel is being treated as if it remembered. The question the claim skips is “What detail in the case decides it?” The answer is “Several separate choices, each with its own list of options”: every spin is a separate choice with the same list of results, and earlier spins do not use any of them up or change them. The chance of black on the seventh spin is the same as on the first, 18 in 37 on a European wheel, about 49%. Six reds in a row was unlikely before the wheel was spun, but once it has happened the next spin starts fresh. Tool: Multiplying the choices (multiplication principle).`},
  {q:`“The garden is 5 m by 12 m, so walking diagonally across it is 5 + 12 = 17 m.”`,
   w:`The fault: the two sides are added. The question the claim skips is “What do you have to work with?” The answer is “Two sides of a right-angled triangle”, and what you want is “The third side of the right-angled triangle”, which is found by squaring: 5 × 5 = 25, 12 × 12 = 144, 25 + 144 = 169, and the square root of 169 is 13. The diagonal is 13 m, shorter than walking along two sides. Tool: Third side of a right-angled triangle (Pythagoras).`},
  {q:`“At 10% a year my savings will double in 10 years: 10 years at 10% is 100%.”`,
   w:`The fault: the 10% is added every year instead of multiplied. The question the claim skips is “At each step, what happens to the quantity?” The answer is “It is multiplied by the same number each time”, because interest is paid on earlier interest, so the real question is “How many steps it takes to reach a known size”. 1.1 multiplied by itself 7 times is 1.95 and 8 times is 2.14, so the money doubles in a little over 7 years (72 ÷ 10 = 7.2), not 10. Tool: How many steps to get there (logarithm).`},
  {q:`“Today is Monday. In 50 days it will be a Monday again, since 50 days is almost seven weeks.”`,
   w:`The fault: the days left over are thrown away, and “almost” is exactly the part that matters. The question the claim skips is “What do you want to find out about the number or numbers?” The answer is “Where a count lands after going round and round one loop”, and you settle it with “Divide by the loop size and keep only what is left over”: 50 ÷ 7 = 7 with 1 left over (7 × 7 = 49). The 49 days land on a Monday and the 1 left over makes it a Tuesday. Tool: Remainder (mod).`},
  {q:`“133 is not even, does not end in 5, and its digits add up to 7, so it is not a multiple of 3. It must be prime.”`,
   w:`The fault: the check stopped too soon. The question the claim skips is “What do you do to settle it?” The answer is “Try dividing it by each prime up to its square root”. 11 × 11 = 121 and 12 × 12 = 144, so the primes to test go up to 11, and the claim only tested 2, 3 and 5. 133 ÷ 7 = 19 exactly, so 133 = 7 × 19 and it is not prime. Tool: Prime check.`}
];

/* Specimens: a new case, run through the key from the first question to the name. Each explanation asks the key's
   questions in order, says which words in the case decide each answer, and ends in the name. */

const MATH_SPECIMENS = [
  {q:'Someone tells you 91 is prime. You have thirty seconds and no calculator to decide whether to believe them.',
   sub:{M1:['whole'],W1:['split'],W2:['divtest']}, outcome:'prime',
   why:`“What is the question about?” Whole numbers: it is about one whole number and whether it divides up. “What do you want to find out about the number or numbers?” “Whether one number can be split evenly by anything smaller”: “prime” means exactly that, nothing smaller except 1 goes into it. “What do you do to settle it?” “Try dividing it by each prime up to its square root”: 9 × 9 = 81 and 10 × 10 = 100, so the square root of 91 is between 9 and 10, and the primes to test are 2, 3, 5 and 7. 91 ÷ 2, 91 ÷ 3 and 91 ÷ 5 all leave something over, but 91 ÷ 7 = 13 exactly, so 91 = 7 × 13. Name: Prime check. The claim is false, 91 is not prime.`,
   fals:`If you were asked what 91 is made of, rather than whether it is prime, you would keep dividing until only primes are left and answer 7 × 13: that is Prime factors. If the number had 30 digits, the same check would still be the right one but far too slow to do by hand.`},
  {q:'Two meshed gears carry 12 and 18 teeth. A tooth on each is marked with paint. You want to know how many turns of the small gear before the two marks meet again.',
   sub:{M1:['whole'],W1:['parts'],W2:['shared']}, outcome:'gcdlcm',
   why:`“What is the question about?” Whole numbers: two counts of teeth, nothing growing and nothing hidden. “What do you want to find out about the number or numbers?” “What a number is made of, or what two numbers have in common”: the case gives two numbers, 12 and 18, and asks when two repeating things meet again, which depends on what the two numbers share. (One count going round one loop would be a different answer, “Where a count lands after going round and round one loop”.) “What do you do to settle it?” “Write both numbers as primes and compare them”: 12 = 2 × 2 × 3 and 18 = 2 × 3 × 3. The marks meet again when the count holds every prime that either number has, as many times as either has it: 2 × 2 × 3 × 3 = 36 teeth. The small gear turns 36 ÷ 12 = 3 times, the large gear 36 ÷ 18 = 2 times. Name: Biggest shared piece or first line-up (GCD / LCM), the first line-up half.`,
   fals:`If the question asked for the biggest identical pieces that 12 and 18 can both be cut into, you would keep only the primes they share, 2 × 3 = 6: the same name, the other half. If the gears had 12 and 13 teeth they would share nothing, and the marks would meet again only after 12 × 13 = 156 teeth.`},
  {q:'Today is a Tuesday. A delivery is promised in 100 days and you want the weekday without counting on a calendar.',
   sub:{M1:['whole'],W1:['cycle'],W2:['remainder']}, outcome:'modrem',
   why:`“What is the question about?” Whole numbers: days of the week, counted in a repeating seven. “What do you want to find out about the number or numbers?” “Where a count lands after going round and round one loop”: there is one loop, a week of 7 days, and one count, 100 days. “What do you do to settle it?” “Divide by the loop size and keep only what is left over”: 100 ÷ 7 = 14 with 2 left over (7 × 14 = 98 and 100 − 98 = 2). The 14 whole weeks bring you back to Tuesday, so only the 2 matters: two days after Tuesday is Thursday. Name: Remainder (mod).`,
   fals:`If the case gave two repeating schedules, a delivery every 7 days and a check every 4 days, and asked when both fall on the same day, there would be two loops instead of one, and the tool would change to Biggest shared piece or first line-up (GCD / LCM).`},
  {q:'You have fifteen banknotes, all fives and tens, and they come to €120 exactly. You want to know how many of each you are holding.',
   sub:{M1:['unknown'],A1:['two'],A2:['crossing']}, outcome:'simul',
   why:`“What is the question about?” A missing number: you are not told how many fives or tens. “How does the missing number show up?” “Two missing numbers, linked by two facts”: the number of fives and the number of tens, and two facts about them, there are 15 notes and they add up to €120. “What do you want out of it?” “The one pair of numbers that fits both facts”. Working: call the fives f and the tens t. Then f + t = 15 and 5f + 10t = 120. From the first, f = 15 − t. Put that into the second: 5 × (15 − t) + 10t = 120, so 75 + 5t = 120, so t = 9 and f = 6. Check: 6 × 5 + 9 × 10 = 30 + 90 = 120. Name: Two facts, two unknowns (simultaneous equations).`,
   fals:`With only one of the facts, many mixes would fit: twelve tens and no fives, or ten tens and four fives, both come to €120. You need the second fact to pin down one pair. And with a third kind of note in the pile there would be three missing numbers and still only two facts, so again many answers.`},
  {q:'A stone is dropped from a bridge. Its height above the water is 20 − 5t² metres after t seconds, and you want to know when it lands.',
   sub:{M1:['unknown'],A1:['sq'],A2:['roots']}, outcome:'quad',
   why:`“What is the question about?” A missing number: the time t is not known. “How does the missing number show up?” “One missing number, multiplied by itself”: the t is squared, 5t². “What do you want out of it?” “When something reaches zero, or whether it ever does”: the stone lands when its height is zero. Working: 20 − 5t² = 0, so 5t² = 20, so t² = 4, so t = 2 or t = −2. A time cannot be negative, so the answer is 2 seconds. Name: A squared unknown (quadratic).`,
   fals:`If you wanted the height after 1 second, nothing would be missing: 20 − 5 × 1 × 1 = 15 metres, and you only put the number in. If the formula were 20 + 5t², the height could never be zero, and the answer to “whether it ever does” would be no.`},
  {q:'Paint covers twelve square metres a litre. The wall is thirty square metres and you are standing in the shop.',
   sub:{M1:['unknown'],A1:['once'],A2:['scale']}, outcome:'prop',
   why:`“What is the question about?” A missing number: how much paint to buy. “How does the missing number show up?” “One missing number, appearing once and not squared”: the litres, used once. “What do you want out of it?” “A new amount, at a rate you already know”: the rate is 12 square metres for every litre, and the new amount to cover is 30 square metres. Working: 30 ÷ 12 = 2.5 litres. Check: 2.5 × 12 = 30. Name: Scaling by a rate (proportion).`,
   fals:`Two coats would simply double the amount, 2 × 2.5 = 5 litres, with the same tool. But if the wall were rough bare plaster that soaks paint up, the rate of 12 square metres a litre would no longer hold, and the answer would be wrong however carefully you divided.`},
  {q:'A friend says his savings are growing exponentially. He puts two hundred euros in a shoebox on the first of every month.',
   sub:{M1:['growth'],G1:['add'],G2:['total']}, outcome:'lin',
   why:`“What is the question about?” Growth over time: money goes in month after month. “At each step, what happens to the quantity?” “The same amount is added each time”: €200 goes in every month, never a share of what is already in the box. “What are you trying to work out?” “The total, after adding the same amount again and again”: the claim is about how the total grows. Working: after 1 month there is 200, after 2 months 400, after 3 months 600, so after 12 months 12 × 200 = 2,400. The extra each month is always 200, which is steady growth, not exponential. Name: Adding the same amount each time (linear growth). The claim “exponential” is wrong.`,
   fals:`If the money were in an account paying interest on the whole balance, each month would add more than the month before, the balance would be multiplied by the same number each time, and the tool would change to Multiplying by the same number each time (exponential growth). The shoebox is what makes it steady.`},
  {q:'A rumour starts with one person. Every day, each person who knows it tells two people who have not heard it yet, and you want to know how many know it after two weeks.',
   sub:{M1:['growth'],G1:['mult'],G2:['size']}, outcome:'expg',
   why:`“What is the question about?” Growth over time: the number who know changes day by day. “At each step, what happens to the quantity?” “It is multiplied by the same number each time”: everyone who knows tells two new people, so each day the group keeps everyone it had and gains two more for each of them: 1 person becomes 1 + 2 = 3, then 3 people become 3 × 3 = 9, so the group is multiplied by 3 every day. “What are you trying to work out?” “The size, after multiplying a known number of times”: the number who know after 14 days. Working: fourteen 3s multiplied together (written 3¹⁴) = 4,782,969, about 4.8 million. Name: Multiplying by the same number each time (exponential growth).`,
   fals:`The multiplying cannot go on for ever: the rumour runs out of people who have not yet heard it, so real spread slows down long before 4.8 million unless the town is that big. The tool is right while there are plenty of new listeners, and its numbers stop being trustworthy after that.`},
  {q:'Your account pays 7% a year. A colleague says your money will roughly double in ten years, and you want to know where the ten came from.',
   sub:{M1:['growth'],G1:['mult'],G2:['steps']}, outcome:'logsolve',
   why:`“What is the question about?” Growth over time: money in an account, year by year. “At each step, what happens to the quantity?” “It is multiplied by the same number each time”: 7% a year means multiplying by 1.07 every year. “What are you trying to work out?” “How many steps it takes to reach a known size”: the size is double, and the question is how many years that takes. Working: you need 1.07 multiplied by itself n times to make 2. Ten times gives 1.97, just under 2. Eleven times gives 2.10, over. So the answer is between 10 and 11, and the log button gives it exactly: n = log 2 ÷ log 1.07 = 0.301 ÷ 0.0294 = about 10.2 years. Name: How many steps to get there (logarithm). Your colleague’s “about ten” is right.`,
   fals:`If the rate changed from year to year, 7% one year and 3% the next, there would be no single number to multiply by each time, and 10.2 years would stop being the answer.`},
  {q:'Twenty-three people are in a room and someone bets you that two of them share a birthday. You want to know whether to take it.',
   sub:{M1:['chance'],C1:['atleast'],C2:['none']}, outcome:'complement',
   why:`“What is the question about?” Counting and chances. “What is the question asking for?” “How likely it is that at least one of several things happens”: at least one pair among the 23 shares a birthday. “What detail in the case decides it?” “Counting “none of them” is far easier than counting “at least one””: listing every way some people could match never ends, but “nobody matches” is one product. Working: the first person can have any birthday, 365 out of 365. The second must avoid that day: 364 out of 365. The third must avoid two days: 363 out of 365. Keep going to the 23rd, 343 out of 365. Multiply the 23 fractions and you get about 0.493, so “nobody matches” has a 49.3% chance and “at least one match” has 1 − 0.493 = 0.507, about 50.7%. Name: Counting the opposite (complement rule). The person betting on a match wins just over half the time, so do not take the other side at even money.`,
   fals:`Birthdays are not spread perfectly evenly over the year, which makes a match slightly more likely than 50.7%, never less. And if the question were about someone matching your birthday in particular, the chance would be far smaller: that is a different question.`},
  {q:'A screening test is 99% accurate. The condition it screens for affects about one person in ten thousand. Your result comes back positive.',
   sub:{M1:['chance'],C1:['given'],C2:['rare']}, outcome:'baserate',
   why:`“What is the question about?” Counting and chances. “What is the question asking for?” “How likely something is, now that you have a test result or clue”: you tested positive and want to know how likely it is that you are ill. “What detail in the case decides it?” “A rare thing and a test that is not perfect”: one person in ten thousand has it, and a test that is 99% accurate is wrong 1% of the time for healthy people too. Working with a million people: 100 are ill and the test catches 99 of them. 999,900 are healthy and 1% of them, 9,999, test positive by mistake. So 99 + 9,999 = 10,098 people test positive and only 99 of them are ill: 99 ÷ 10,098 = about 1%. Name: How rare it was to begin with (base rate). Your chance is about 1 in 100, not 99 in 100.`,
   fals:`If the condition were common, one person in ten instead of one in ten thousand, the same test would mean a positive result is very likely right: of 10,000 people, 1,000 are ill and 990 test positive, while only 90 of the 9,000 healthy people do, so 990 ÷ 1,080 = about 92%. The rarity of the condition does the work, not the test.`},
  {q:'Six numbers are drawn from forty-nine. Someone asks how many different tickets exist.',
   sub:{M1:['chance'],C1:['arrange'],C2:['group']}, outcome:'comb',
   why:`“What is the question about?” Counting and chances. “What is the question asking for?” “How many ways something can be picked or arranged”: how many different tickets are possible. “What detail in the case decides it?” “A group is picked, and the order does not matter”: a ticket wins whichever order its six balls came out in. Working: if order did matter there would be 49 × 48 × 47 × 46 × 45 × 44 = 10,068,347,520 ways, because each ball leaves one fewer to choose from. Every group of six can come out in 6 × 5 × 4 × 3 × 2 × 1 = 720 different orders, so each group has been counted 720 times. Divide: 10,068,347,520 ÷ 720 = 13,983,816. Name: Picking a group, order ignored (combinations).`,
   fals:`If the prize went only to a ticket matching the balls in the exact order drawn, the order would matter and the count would be the bigger number, 10,068,347,520, which is Picking in order (permutations): 720 times as many.`},
  {q:'A five-metre ladder is standing with its base a metre and a half from the wall. You want to know what height it reaches.',
   sub:{M1:['shape'],S1:['twosides'],S2:['third']}, outcome:'pyth',
   why:`“What is the question about?” Shapes and sizes: a ladder, a wall and the ground. “What do you have to work with?” “Two sides of a right-angled triangle”: the ladder is 5 m, the foot of it is 1.5 m from the wall, and the wall meets the ground at a right angle, like the corner of a page. “What do you want to find?” “The third side of the right-angled triangle”: how high up the wall the ladder reaches. The ladder is the longest side, so you subtract: 5 × 5 = 25, 1.5 × 1.5 = 2.25, 25 − 2.25 = 22.75, and the square root of 22.75 is 4.77. The ladder reaches 4.77 m up the wall. Name: Third side of a right-angled triangle (Pythagoras).`,
   fals:`If you were given the angle the ladder makes with the ground, say 70°, and its length, instead of the distance from the wall, you would have one angle and one side, and the tool would change to Length from an angle (trigonometry). If the ground sloped, the corner would no longer be a right angle and this tool would not apply.`},
  {q:'A sixteen-inch pizza is priced at exactly twice the eight-inch. Someone at the table says that makes them the same value.',
   sub:{M1:['shape'],S1:['samesh'],S2:['areavol']}, outcome:'sqcube',
   why:`“What is the question about?” Shapes and sizes. “What do you have to work with?” “Two things with the same shape but different sizes”: two round pizzas, one twice as wide as the other. “What do you want to find?” “How the area or volume changes when the length changes”: what you eat depends on the area, not on the width. Working: doubling the width multiplies the area by 2 × 2 = 4. To see it in numbers, a circle’s area is 3.14 × radius × radius, and the radius is half the width. The 8-inch pizza has a radius of 4, so about 50 square inches (3.14 × 4 × 4 = 50.24). The 16-inch has a radius of 8, so about 201 (3.14 × 8 × 8 = 200.96), four times as much. So the large one costs twice as much for four times the pizza: it is the better deal. Name: Area and volume grow faster than length (square–cube law).`,
   fals:`If the small pizza were a deep-dish one, you would have to compare volume as well as area, and doubling every length multiplies volume by 2 × 2 × 2 = 8. The tool is the same, and the number you multiply by changes with what you are comparing.`}
];

const MATH_COURSE = [
{ tag:'One', title:'What kind of question is it?',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a question that involves numbers and say which of five kinds it is.</p>
      <p>These questions turn up everywhere: a recipe for four that you must stretch to seven, a loan with a percentage on it, a pizza that costs twice as much, a lottery ticket, a ladder against a wall. Each one hides a different kind of maths. The most common mistake is not a slip in the arithmetic. It is using the wrong kind: adding when the thing multiplies, or counting when the question was about odds.</p>
      <p>School handed you the methods with the chapter headings attached, so the heading told you which method to use. Real life has no chapter headings, and the sorting is the part nobody practised. That is what this course practises.</p>
      <p>The whole course is one key: a short list of questions that sorts any number problem into a named tool. This unit teaches the first question of the key, in its exact words: <i>What is the question about?</i> It has five answers: <i>Whole numbers</i>, <i>A missing number</i>, <i>Growth over time</i>, <i>Counting and chances</i> and <i>Shapes and sizes</i>. At the end you get ten new cases to sort.</p>`},
  {h:'How the key works',
   b:`<p class="lead">The key is a short list of questions, asked in order. Your answers narrow the field until one named tool is left.</p>
      <p>There are three moves, and every case in this course goes through them in the same order.</p>
      <ol>
        <li><b>Sort it.</b> Ask <i>What is the question about?</i> and pick one of five kinds. This is the work of this unit.</li>
        <li><b>Ask the two questions for that kind.</b> Each kind has two questions of its own, and they are different for each kind. Units Two to Five teach them, one kind at a time.</li>
        <li><b>Name the tool.</b> The two answers point to one named tool, such as <i>Prime check</i> or <i>Counting the opposite (complement rule)</i>. The name is a fixed phrase. You will see it in exactly the same words on the card that teaches it, in the practice, and in the feedback.</li>
      </ol>
      <p>Once you have the name, you know which tool to use and what to do with the numbers. Each unit teaches its tools with real numbers, worked step by step, before it asks you for them. The key also has a readout: as you answer, the list of 22 tools crosses off the ones your answers have ruled out. You will see it in Unit Seven.</p>`},
  {h:'Whole numbers',
   b:`<p><b>What it is.</b> Questions about whole numbers (1, 2, 3 and so on, with no fractions or decimals) and how they split, fit and repeat. People ask four kinds of thing: can this be split into equal groups, what is left over after sharing, when do two repeating things meet again, and can this number be written as an exact fraction.</p>
      <p><b>Example.</b> A farm packs 83 eggs into boxes of 12. That makes 6 full boxes (6 × 12 = 72) with 11 eggs left over, so 83 = 6 × 12 + 11. Nothing is growing, nothing is hidden and nothing is a shape. The question is only about how 83 divides by 12.</p>
      <p><b>Sounds like.</b> “Will these split evenly?” “What is left over?” “Can I put them in equal rows?” “When will the two cycles line up again?” “What day will it be in 45 days?”</p>
      <p><b>Catch it.</b> Ask yourself: is the point of the question how one whole number divides, fits into, or repeats against another? If so, the answer to <i>What is the question about?</i> is <i>Whole numbers</i>.</p>
      <p><b>What to do.</b> Go to Unit Two. It teaches five tools for this kind, each worked with real numbers.</p>
      <p><b>Don’t confuse it with</b> <i>Counting and chances</i>. Counting asks how many ways something can be picked or arranged, such as four friends in a row. Whole numbers asks how numbers divide. “How many ways” is counting, even though the answer is a whole number.</p>`},
  {h:'A missing number',
   b:`<p><b>What it is.</b> A question where one number, or two, is hidden, and the facts you are given are enough to pin it down. You work backwards from what you know to what you do not.</p>
      <p><b>Example.</b> You buy 3 pens and a €2 notebook and pay €8.45 in total. How much is one pen? Take away the notebook: 8.45 − 2 = 6.45. Share that between the 3 pens: 6.45 ÷ 3 = 2.15. One pen costs €2.15. The hidden number was the price of a pen, and the facts fixed it.</p>
      <p><b>Sounds like.</b> “How much do I need?” “How many of each?” “What must it be for the total to come to…?” “When will it reach zero?”</p>
      <p><b>Catch it.</b> Ask yourself: is there a number I am not told, and do the facts I am given pin it down? If so, the answer to <i>What is the question about?</i> is <i>A missing number</i>.</p>
      <p><b>What to do.</b> Go to Unit Three. It teaches four tools for a hidden number: turning a formula around, scaling by a rate, two facts with two unknowns, and a squared unknown.</p>
      <p><b>Don’t confuse it with</b> <i>Growth over time</i>. A missing number is found once, from facts that stay fixed. Growth is about a quantity that keeps changing, step after step. “The taxi fare was €27, how many kilometres did we ride?” is a hidden number. “What will the fare be after ten years if it rises 5% a year?” is growth.</p>`},
  {h:'Growth over time',
   b:`<p><b>What it is.</b> Questions about a quantity that changes step by step (every day, month or year), or about numbers so different in size that they are hard to draw on one chart. Two patterns matter. Either the same amount is added each time, or the quantity is multiplied by the same number each time. They look alike for a while and then pull far apart.</p>
      <p><b>Example.</b> A plant is 10 cm tall and grows 3 cm every week: 10, 13, 16, 19. Now put €1,000 in an account that pays 5% a year: 1,000, then 1,050, then 1,102.50. The plant gains the same 3 each week. The money gains a little more each year, because each year’s 5% is taken on a bigger amount. Both are growth over time, and Unit Four teaches you to tell them apart.</p>
      <p><b>Sounds like.</b> “Per year.” “Doubles every.” “Grows by 3%.” “After ten years.” “How long until it doubles?” Or a chart that must show a very small number and a very large one together, such as the distance to the Moon next to the distance to the nearest star.</p>
      <p><b>Catch it.</b> Ask yourself: is a quantity changing step after step, or are the numbers so spread out that they are hard to draw together? If so, the answer to <i>What is the question about?</i> is <i>Growth over time</i>.</p>
      <p><b>What to do.</b> Go to Unit Four. It teaches four tools: adding the same amount each time, multiplying by the same number each time, how many steps to get there, and a chart axis that gives each ×10 equal space.</p>
      <p><b>Don’t confuse it with</b> <i>A missing number</i>. If the question gives a rule and a total and asks for one hidden value, nothing is changing again and again: it is a missing number. If the question asks what a quantity becomes after many steps, it is growth.</p>`},
  {h:'Counting and chances',
   b:`<p><b>What it is.</b> Questions about how many ways something can happen, or how likely it is. Counting asks for a number of possibilities. Chances ask for a share of those possibilities, such as 1 in 6 or 25%.</p>
      <p><b>Example.</b> You have 2 hats and 3 scarves. Each hat goes with any of the 3 scarves, so there are 2 × 3 = 6 different looks. Nothing is hidden, nothing grows and there is no shape: you are counting ways. If you then pick a hat and a scarf with your eyes closed, the chance of getting your favourite pair is 1 in 6.</p>
      <p><b>Sounds like.</b> “How many different…?” “How many ways…?” “What are the odds?” “How likely is it that…?” “What is the chance of at least one…?”</p>
      <p><b>Catch it.</b> Ask yourself: is the question about how many ways something can be picked or arranged, or about how likely something is? If so, the answer to <i>What is the question about?</i> is <i>Counting and chances</i>.</p>
      <p><b>What to do.</b> Go to Unit Five. It teaches five tools: multiplying the choices, picking in order, picking a group, counting the opposite, and how rare it was to begin with.</p>
      <p><b>Don’t confuse it with</b> <i>Whole numbers</i>. “How many ways can four friends sit in a row?” is counting ways. “Can 24 friends be put into equal rows?” is Whole numbers, because it asks how 24 divides. Both have whole-number answers. What matters is what is being asked.</p>`},
  {h:'Shapes and sizes',
   b:`<p><b>What it is.</b> Questions about lengths, angles, areas and volumes: how far, how tall, how much surface, how much space inside. Some give you a right angle (a square corner, like the corner of a page), some give an angle you can measure, and some ask what happens to area and volume when something is made bigger or smaller.</p>
      <p><b>Example.</b> A rectangular room is 6 m by 8 m. How far is it from one corner to the opposite corner? The two walls meet at a right angle, and the straight line across is 10 m: 6 × 6 = 36, 8 × 8 = 64, 36 + 64 = 100, and the square root of 100 (the number that multiplies by itself to make 100) is 10. You do not need to know why that works yet; Unit Three teaches it. The point here is that the question is about a shape, so it is a shape question.</p>
      <p><b>Sounds like.</b> “How far across?” “How tall is it?” “At an angle of…” “Twice as wide: how much more?” “A model at one-fiftieth of the real size.”</p>
      <p><b>Catch it.</b> Ask yourself: is the question about lengths, angles, areas or volumes of something with a shape? If so, the answer to <i>What is the question about?</i> is <i>Shapes and sizes</i>.</p>
      <p><b>What to do.</b> Go to Unit Three, second half. It teaches four tools: the third side of a right-angled triangle, a length from an angle, the same shape in a different size, and how area and volume grow.</p>
      <p><b>Don’t confuse it with</b> <i>A missing number</i>. Even when you are hunting for a hidden length, if the case gives you a shape, a right angle or an angle to work with, it is a shape question. A missing-number question gives you facts and totals, not a shape.</p>`},
  {h:'The five kinds side by side',
   b:`<p>The first question of the key is <i>What is the question about?</i> Here are its five answers in the key’s exact words, with the clue to look for and the tools each one leads to.</p>
      <table class="k">
      <tr><td><b>Whole numbers</b></td><td>how numbers split, what is left over, when cycles line up. Leads to: Prime check, Prime factors, Biggest shared piece or first line-up (GCD / LCM), Remainder (mod), A number with no exact fraction (irrational). Unit Two.</td></tr>
      <tr><td><b>A missing number</b></td><td>work out a hidden number from facts. Leads to: Rearranging a formula, Scaling by a rate (proportion), Two facts, two unknowns (simultaneous equations), A squared unknown (quadratic). Unit Three, first half.</td></tr>
      <tr><td><b>Growth over time</b></td><td>how a quantity changes step by step, or numbers from tiny to huge. Leads to: Adding the same amount each time (linear growth), Multiplying by the same number each time (exponential growth), How many steps to get there (logarithm), Equal space for each ×10 (log scale). Unit Four.</td></tr>
      <tr><td><b>Counting and chances</b></td><td>how many ways, or how likely. Leads to: Multiplying the choices (multiplication principle), Picking a group, order ignored (combinations), Picking in order (permutations), Counting the opposite (complement rule), How rare it was to begin with (base rate). Unit Five.</td></tr>
      <tr><td><b>Shapes and sizes</b></td><td>lengths, angles, areas, volumes. Leads to: Third side of a right-angled triangle (Pythagoras), Length from an angle (trigonometry), Same shape, different size (similar triangles), Area and volume grow faster than length (square–cube law). Unit Three, second half.</td></tr>
      </table>
      <p>You do not need to remember the tools yet. Each unit teaches its own. For now, the job is the sorting: read the case, find the giveaway words, and pick the answer whose clue is there.</p>`},
  {h:'Sorting a new question, step by step',
   b:`<p class="lead">Here is a case you have not seen. Read it, then ask <i>What is the question about?</i> and test each answer against it.</p>
      <p><i>A baker has 24 rolls and 36 muffins. She wants to pack identical boxes, each with the same number of rolls and the same number of muffins, with nothing left over. What is the largest number of boxes she can make?</i></p>
      <ol>
        <li><b>Shapes and sizes?</b> There are no lengths, angles, areas or volumes. That answer is out.</li>
        <li><b>Growth over time?</b> Nothing changes step by step: no “per week”, no percentage, no doubling. That answer is out.</li>
        <li><b>Counting and chances?</b> The case does not ask how many ways to pack the boxes, and nothing is left to chance. That answer is out.</li>
        <li><b>A missing number?</b> There is a number to find, the number of boxes, but there is no rule or total to work backwards from. There are only two counts, 24 and 36, and a request to split both evenly. That answer does not fit as well as the next one.</li>
        <li><b>Whole numbers?</b> The words that decide it are “identical boxes” and “nothing left over”. They say that 24 and 36 must both divide evenly into the same number of boxes. That is how whole numbers divide, so the answer is <i>Whole numbers</i>.</li>
      </ol>
      <p>That is the whole job of this unit. Unit Two will give the tool for this exact case: it is <i>Biggest shared piece or first line-up (GCD / LCM)</i>, and it gives 12 boxes, each with 2 rolls and 3 muffins (24 ÷ 12 = 2 and 36 ÷ 12 = 3). You can sort the case without knowing how to run the tool.</p>
      <p>On your own cases, do the same: read the question, find the words that give it away, and test the five answers against them.</p>`}
  ],
  drill:{kind:'pick', key:'m1'} },
{ tag:'Two', title:'Whole numbers: splitting, leftovers and lining up',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a question about whole numbers and say which of five tools it needs, and you can run the first four on real numbers.</p>
      <p>This kind of question turns up when you split things into equal groups, tile or cut something with no waste, work out when two schedules meet again, or ask what day or time it will be after a long wait. It also turns up behind the scenes in codes and passwords, which are built on primes.</p>
      <p>This unit answers two questions of the key, in the key’s exact words. The first is <i>What do you want to find out about the number or numbers?</i> The second is <i>What do you do to settle it?</i> Together they lead to one of five tools: <i>Prime check</i>, <i>Prime factors</i>, <i>Biggest shared piece or first line-up (GCD / LCM)</i>, <i>Remainder (mod)</i> and <i>A number with no exact fraction (irrational)</i>.</p>
      <p>Every tool is worked with real numbers, step by step, before the practice asks you for it. The practice then gives you ten new cases and asks which tool settles each.</p>`},
  {h:'Words first: factor, prime, composite, square root',
   b:`<p class="lead">A few words are used all through this unit. Each one is shown with numbers.</p>
      <p><b>Factor.</b> A factor of a number is a whole number that divides it exactly. 12 = 3 × 4, so 3 and 4 are factors of 12. So are 1, 2, 6 and 12, because 12 = 1 × 12 and 12 = 2 × 6. Factors come in pairs, and each pair multiplies to give the number.</p>
      <p><b>Prime.</b> A prime is a whole number above 1 whose only factors are 1 and itself. 7 is prime: the only way to make 7 is 1 × 7. The first primes are 2, 3, 5, 7, 11, 13, 17, 19 and 23. 2 is the only even prime.</p>
      <p><b>Composite.</b> A composite number is a whole number above 1 that is not prime, so it has a factor pair besides 1 × itself. 12 is composite because 12 = 3 × 4. So are 4, 6, 8, 9, 10 and 15.</p>
      <p><b>Neither.</b> The number 1 is neither prime nor composite: its only factor is itself. It is left out of the primes on purpose. If 1 counted as a prime, 12 = 2 × 2 × 3 could also be written 1 × 2 × 2 × 3, and 1 × 1 × 2 × 2 × 3, and so on for ever, and a number would no longer have one single set of prime pieces. That one set is what Prime factors, below, depends on.</p>
      <p><b>Square root.</b> The square root of a number is the number that multiplies by itself to give it. 6 × 6 = 36, so the square root of 36 is 6. Most numbers are not made that way, so you bracket them: for 50, 7 × 7 = 49 and 8 × 8 = 64, so the square root of 50 is just above 7. For this unit you only need to know which two whole numbers a square root sits between. A calculator has a √ key if you want the exact figure.</p>
      <p><b>What to do.</b> When a question gives you a number and asks about its pieces, write down its factor pairs or its square root bracket first. Every tool in this unit starts from one of those two things.</p>`},
  {h:'Prime check',
   b:`<p><b>What it is.</b> A check that tells you whether a whole number can be split evenly by anything smaller than itself, other than 1. If nothing can split it, it is prime. If something can, it is composite. The check is to divide the number by each prime up to its square root. You never need to test a divisor above the square root, and the reason is further down.</p>
      <p><b>Example.</b> Is 67 prime?</p>
      <ol>
        <li>Bracket the square root: 8 × 8 = 64 and 9 × 9 = 81, so the square root of 67 is between 8 and 9. Test the primes up to 8: 2, 3, 5 and 7.</li>
        <li>67 ÷ 2 = 33.5. Not exact. (67 is odd.)</li>
        <li>67 ÷ 3 = 22.33… Not exact. (3 × 22 = 66, with 1 left over.)</li>
        <li>67 ÷ 5 = 13.4. Not exact. (It does not end in 0 or 5.)</li>
        <li>67 ÷ 7 = 9.57… Not exact. (7 × 9 = 63 and 7 × 10 = 70.)</li>
      </ol>
      <p>Nothing goes in, so 67 is prime. Now try 119. 10 × 10 = 100 and 11 × 11 = 121, so the square root of 119 is just under 11 and you test 2, 3, 5 and 7. 119 is odd. 3 × 39 = 117, which leaves 2. It does not end in 0 or 5. But 7 × 17 = 119 exactly, so 119 is composite: 119 = 7 × 17. It passes the easy tests, and it takes the 7 to catch it.</p>
      <p>Why stop at the square root? Because factors come in pairs, and in every pair one member is at or below the square root. Take 36: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6. Every pair has a member of 6 or less, and 6 is the square root of 36. So if a number has any factor pair at all, you will meet the smaller member by the time you reach the square root. For 119 = 7 × 17, the 7 is below 10.9 and the 17 is above it. Once you have tested up to 7, there is nothing left to find.</p>
      <p><b>Sounds like.</b> “Is it prime?” “Can I lay these out in a grid, with more than one row and more than one in each row?” “Is there any way to divide this evenly?”</p>
      <p><b>Catch it.</b> Ask yourself: is the question whether one number can be split evenly by anything smaller? That is the answer <i>Whether one number can be split evenly by anything smaller</i> to the question <i>What do you want to find out about the number or numbers?</i> You then settle it with <i>Try dividing it by each prime up to its square root</i>. Together they give the tool <i>Prime check</i>.</p>
      <p><b>What to do.</b> List the primes up to the square root, divide the number by each in turn, and stop at the first one that goes in exactly: the number is composite, and you have found a factor. If none goes in, it is prime. In real life, a prime count can only be set out in one row (13 chairs can only be one row of 13), so if you need equal groups, add or remove one to reach a composite number.</p>
      <p><b>Don’t confuse it with</b> <i>Prime factors</i>. The prime check gives a yes or no. Prime factors gives all the pieces: 119 passes the check as “composite”, and Prime factors says 7 × 17.</p>`},
  {h:'Prime factors',
   b:`<p><b>What it is.</b> Breaking one number into primes that multiply together to make it. Every whole number above 1 breaks into primes in exactly one way (the order does not count). That is why primes are called the building blocks of numbers. You find the pieces by dividing by the smallest prime that goes in, again and again, until what is left is itself a prime.</p>
      <p><b>Example.</b> Break 84 into primes.</p>
      <ol>
        <li>84 ÷ 2 = 42. 2 goes in, so 2 is the first prime piece.</li>
        <li>42 ÷ 2 = 21. 2 goes in again, so it is a piece again.</li>
        <li>21 ÷ 2 does not work, so try the next prime: 21 ÷ 3 = 7. 3 is a piece.</li>
        <li>7 is prime, so stop. It is the last piece.</li>
      </ol>
      <p>84 = 2 × 2 × 3 × 7. Check: 2 × 2 = 4, 4 × 3 = 12, 12 × 7 = 84. Start a different way and you reach the same pieces: 84 = 12 × 7 = 3 × 4 × 7 = 3 × 2 × 2 × 7, the same four primes.</p>
      <p><b>Sounds like.</b> “What is this number made of?” “Break it down as far as it goes.” “Every way to set these out in equal rows.” That last one comes straight from the primes of 84: any row length is a product of some of them, so 84 chairs can be set out in rows of 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42 or 84.</p>
      <p><b>Catch it.</b> Ask yourself: is it one number, and do I want to know what it is made of? That is the answer <i>What a number is made of, or what two numbers have in common</i> to the question <i>What do you want to find out about the number or numbers?</i> With only one number in play, you settle it with <i>Keep dividing it into primes until only primes are left</i>. Together they give the tool <i>Prime factors</i>.</p>
      <p><b>What to do.</b> Divide by 2 while it goes in, then by 3, then by 5, and so on up the primes, writing down each prime that goes in. Stop when what is left is itself prime. Multiply the pieces back together to check that you get the number you started with. The pieces are the starting point for the next tool, and for simplifying fractions.</p>
      <p><b>Don’t confuse it with</b> <i>Prime check</i> and <i>Biggest shared piece or first line-up (GCD / LCM)</i>. The prime check only says yes or no. The next tool compares two numbers, while Prime factors starts from just one.</p>`},
  {h:'Biggest shared piece or first line-up (GCD / LCM)',
   b:`<p><b>What it is.</b> Two questions about a pair of whole numbers, answered by the same method. The <b>biggest shared piece</b> (the greatest common divisor, GCD) is the largest number that divides both numbers exactly. The <b>first line-up</b> (the lowest common multiple, LCM) is the smallest number that both numbers divide into exactly. To find either, write each number as primes and compare them. The biggest shared piece keeps only the primes the two numbers have in common. The first line-up keeps every prime that either has, as many times as either has it.</p>
      <p><b>Example 1, the biggest shared piece.</b> A workshop has a panel 60 cm by 84 cm and wants to cut it into the largest square tiles possible, with nothing wasted.</p>
      <ol>
        <li>Write each number as primes: 60 = 2 × 2 × 3 × 5 and 84 = 2 × 2 × 3 × 7.</li>
        <li>Keep the primes they share: 2, 2 and 3. The 5 is only in 60 and the 7 is only in 84, so both are dropped.</li>
        <li>Multiply what you kept: 2 × 2 × 3 = 12.</li>
      </ol>
      <p>The tiles are 12 cm squares. Check: 60 ÷ 12 = 5 and 84 ÷ 12 = 7, both exact, so the panel is 5 tiles by 7 tiles, 35 tiles in all. No bigger square works, because 12 is the largest number that goes into both.</p>
      <p><b>Example 2, the first line-up.</b> One bus leaves a stop every 20 minutes and another every 30 minutes. Both leave at 8:00. When do they next leave together?</p>
      <ol>
        <li>Write each number as primes: 20 = 2 × 2 × 5 and 30 = 2 × 3 × 5.</li>
        <li>Take every prime that either has, as many times as either has it: 2 and 2 (from 20), 3 (from 30), and 5 once (both have one).</li>
        <li>Multiply: 2 × 2 × 3 × 5 = 60.</li>
      </ol>
      <p>They leave together again after 60 minutes, at 9:00. Check: 60 ÷ 20 = 3 trips and 60 ÷ 30 = 2 trips, both exact, and no smaller number works.</p>
      <p><b>Sounds like.</b> For the biggest shared piece: “the largest equal pieces”, “the biggest square that fits both”, “split into identical groups with nothing left over”, “simplify this fraction”. For the first line-up: “when do they next happen together?”, “when do the two cycles meet again?”, “the smallest number that both go into”.</p>
      <p><b>Catch it.</b> Ask yourself: are there two numbers, and is the question about what they share or when they meet? That is the answer <i>What a number is made of, or what two numbers have in common</i> to the question <i>What do you want to find out about the number or numbers?</i> With two numbers, you settle it with <i>Write both numbers as primes and compare them</i>. Together they give the tool <i>Biggest shared piece or first line-up (GCD / LCM)</i>.</p>
      <p><b>What to do.</b> Write both numbers as primes. If the question is about cutting, sharing or splitting into identical pieces, keep only the shared primes: that is the biggest shared piece. If the question is about things that repeat and meet again, keep every prime the most times either has it: that is the first line-up. Use the biggest shared piece to simplify a fraction too: 60/84 becomes 5/7 when you divide top and bottom by 12.</p>
      <p><b>Don’t confuse it with</b> <i>Remainder (mod)</i>, and do not mix up the two halves. A remainder has one loop and one count, while a line-up compares two repeating things. And the biggest shared piece can never be bigger than the smaller number, while the first line-up can never be smaller than the bigger number. If your answer breaks that rule, you used the wrong half.</p>`},
  {h:'Remainder (mod)',
   b:`<p><b>What it is.</b> What is left over when you divide one whole number by another. It is the tool for anything that goes round and round a loop of a fixed size: hours on a clock, days in a week, seats around a table, stops on a circular route. After you have gone round a whole number of times, only the part left over decides where you are. Mathematicians write it “mod”: 50 mod 12 means the remainder of 50 ÷ 12.</p>
      <p><b>Example.</b> It is 9 o’clock. What time will it be in 50 hours?</p>
      <ol>
        <li>A clock face is a loop of 12 hours. Divide the count by the loop size: 50 ÷ 12 is 4 with some left over, because 12 × 4 = 48.</li>
        <li>Keep only what is left over: 50 − 48 = 2. The four full turns of the clock bring you back to 9 o’clock and change nothing.</li>
        <li>Move on from the start by the leftover 2 hours: 9 + 2 = 11.</li>
      </ol>
      <p>It will be 11 o’clock. If the sum had passed 12 you would wrap round: 9 + 5 = 14, which is 2 o’clock.</p>
      <p><b>Sounds like.</b> “What day will it be in…?” “What time will it be after…?” “Which seat or stop will I be on?” “Every fifth person gets one.”</p>
      <p><b>Catch it.</b> Ask yourself: is there one loop of a fixed size and a count of steps, and do I want to know where I land? That is the answer <i>Where a count lands after going round and round one loop</i> to the question <i>What do you want to find out about the number or numbers?</i> You settle it with <i>Divide by the loop size and keep only what is left over</i>. Together they give the tool <i>Remainder (mod)</i>.</p>
      <p><b>What to do.</b> Divide the count by the loop size, ignore the whole laps, and move on from your starting point by the remainder. Count steps, not positions: if you start at stop 3 and ride 5 stops, you land on stop 8, because the start already counts as stop 3. If the remainder is 0, you land exactly where you started.</p>
      <p><b>Don’t confuse it with</b> <i>Biggest shared piece or first line-up (GCD / LCM)</i>. A remainder has one loop and one count. A line-up compares two repeating things. A question about weekdays has one loop, the week. A question about when two buses next leave together has two.</p>`},
  {h:'A number with no exact fraction (irrational)',
   b:`<p><b>What it is.</b> A fraction is one whole number over another, like 3/4 or 7/5. Most numbers you meet can be written as one: 0.5 is 1/2, and even 0.333… (the 3 repeating for ever) is 1/3. An irrational number is one that cannot be written as any fraction, however large the whole numbers. In decimals it never ends and never settles into a repeating pattern. The square root of 2 and π are the best-known examples. In practice you use a rounded decimal and know that it is not exact.</p>
      <p><b>Example.</b> The diagonal of a square with sides of 1 m is the square root of 2 metres, because 1 × 1 + 1 × 1 = 2. Try some fractions. 7/5 = 1.4, and 1.4 × 1.4 = 1.96, which is too small. 17/12 = 1.41666…, and its square is 2.00694…, a little too big. 99/70 = 1.414285…, and its square is 2.0002…, closer still. Each fraction squares to something nearer to 2, and none of them hits 2 exactly. The square root of 2 is 1.41421356…, and its digits go on without a pattern.</p>
      <p>Why can no fraction work? Here is the short proof. Suppose the square root of 2 equalled a fraction a/b, already reduced as far as possible, so a and b share no factor. Square both sides: a × a = 2 × b × b. So a × a is even, which means a is even (an odd number times itself is odd). Write a = 2c. Then 4 × c × c = 2 × b × b, so b × b = 2 × c × c, which means b is even too. But then a and b are both even, so the fraction was not reduced as far as possible. That contradiction shows no such fraction exists.</p>
      <p>The same is true of the square root of most whole numbers. A whole number made by multiplying a whole number by itself (4 = 2 × 2, 9 = 3 × 3, 16, 25, 36 and so on) is called a perfect square, and its square root is a whole number. For every other whole number the square root is irrational. So the square roots of 3, 5, 6, 7 and 8 are all irrational, because they sit between the perfect squares 1, 4 and 9, while the square root of 9 is just the whole number 3. A quick test: if you can bracket the number between two perfect squares without hitting one, its square root has no exact fraction.</p>
      <p><b>Sounds like.</b> “Can it be written exactly as a fraction?” “Is it exact, or just very close?” “The diagonal of a square.” “The decimals never end.”</p>
      <p><b>Catch it.</b> Ask yourself: is the question whether the number can be written exactly as a fraction? That is the answer <i>Whether a number can be written exactly as a fraction</i> to the question <i>What do you want to find out about the number or numbers?</i> You settle it with <i>Show that no fraction can ever equal it (a proof)</i>. Together they give the tool <i>A number with no exact fraction (irrational)</i>.</p>
      <p><b>What to do.</b> In daily life use a rounded decimal (the square root of 2 is about 1.414) and expect a small error, rounding only at the end of a calculation. If exactness matters, keep the root symbol, √2, until the last step. Do not hunt for the fraction: there is not one.</p>
      <p><b>Don’t confuse it with</b> a long decimal that repeats. 0.363636… goes on for ever, but it is the fraction 4/11 (check: 4 ÷ 11 = 0.3636…). A number is irrational only when no fraction at all equals it and its decimals never repeat.</p>`},
  {h:'The five tools side by side',
   b:`<p>This unit answers two questions of the key. The first is <i>What do you want to find out about the number or numbers?</i> The second is <i>What do you do to settle it?</i> Here are the answers in the key’s exact words, and the tool each pair leads to. In each row, the first line answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>Whether one number can be split evenly by anything smaller<br><br>Try dividing it by each prime up to its square root</td><td><b>Prime check</b></td></tr>
      <tr><td>What a number is made of, or what two numbers have in common<br>(one number)<br><br>Keep dividing it into primes until only primes are left</td><td><b>Prime factors</b></td></tr>
      <tr><td>What a number is made of, or what two numbers have in common<br>(two numbers)<br><br>Write both numbers as primes and compare them</td><td><b>Biggest shared piece or first line-up (GCD / LCM)</b></td></tr>
      <tr><td>Where a count lands after going round and round one loop<br><br>Divide by the loop size and keep only what is left over</td><td><b>Remainder (mod)</b></td></tr>
      <tr><td>Whether a number can be written exactly as a fraction<br><br>Show that no fraction can ever equal it (a proof)</td><td><b>A number with no exact fraction (irrational)</b></td></tr>
      </table>
      <p>Two quick tests tell the middle tools apart: how many numbers are in play (one or two), and how many loops (one loop and a count, or two repeating things).</p>`},
  {h:'Running the two questions on a new case',
   b:`<p class="lead">Here is a case that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>A farmer is putting up a straight fence along two sides of a field, one 126 m long and the other 90 m long. She wants posts at equal gaps, with a post exactly at both ends of each side, and she wants the gaps as large as possible so she needs the fewest posts. How far apart should the posts be?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>Whole numbers</i>. The words “equal gaps” and “a post exactly at both ends” mean that the gap must divide both 126 and 90 with nothing left over. It is about how whole numbers divide.</li>
        <li><b>What do you want to find out about the number or numbers?</b> There are two numbers, 126 and 90, and the gap has to fit into both. That is <i>What a number is made of, or what two numbers have in common</i>. It is not a prime question (nobody asks whether 126 can be split at all), and there is no loop going round and round.</li>
        <li><b>What do you do to settle it?</b> With two numbers you <i>Write both numbers as primes and compare them</i>. 126 = 2 × 3 × 3 × 7 and 90 = 2 × 3 × 3 × 5. They share 2, 3 and 3. Multiply what they share: 2 × 3 × 3 = 18.</li>
        <li><b>Name the tool.</b> <i>Biggest shared piece or first line-up (GCD / LCM)</i>, the biggest shared piece half, because the case is about cutting something into equal pieces, not about things that repeat and meet again.</li>
      </ol>
      <p>The posts go 18 m apart. Check: 126 ÷ 18 = 7 gaps and 90 ÷ 18 = 5 gaps, both exact. That means 8 posts along one side and 6 along the other. A bigger gap would not fit into both lengths, and a smaller gap would need more posts.</p>`}
  ],
  drill:{kind:'pick', key:'m2'} },
{ tag:'Three', title:'Missing numbers and shapes',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case with a hidden number, or a shape in it, and say which of eight tools it needs, and you can run each tool on real numbers.</p>
      <p>The first half is about <i>A missing number</i>: the paint you must buy, the flour for a double batch, how many of each ticket were sold, when something thrown in the air comes down. The second half is about <i>Shapes and sizes</i>: how far across, how high a ladder reaches, how tall a tree is from its shadow, and why a pizza twice as wide is not twice as much pizza.</p>
      <p>This unit answers four questions of the key, in the key’s exact words. For a missing number: <i>How does the missing number show up?</i> and <i>What do you want out of it?</i> For a shape: <i>What do you have to work with?</i> and <i>What do you want to find?</i> Each pair of answers leads to one of eight tools.</p>
      <p>Every tool is worked with real numbers, step by step, before the practice asks you for it. The practice then gives you sixteen new cases and asks which of the eight tools settles each.</p>`},
  {h:'Rearranging a formula',
   b:`<p><b>What it is.</b> A formula is a rule that links numbers, such as fare = fixed fee + rate × distance. It is usually written to give one result from the others. Rearranging means turning it around so a different letter comes out. The method is to undo, in reverse order, whatever was done to the missing number, until it stands alone. Whatever you do to one side, you do to the other.</p>
      <p><b>Example.</b> A recipe site gives oven temperatures as F = 9C/5 + 32, where C is degrees Celsius and F is degrees Fahrenheit. Your old oven shows 392 °F. What is that in Celsius?</p>
      <ol>
        <li>Put the known number in: 392 = 9C/5 + 32. The missing number, C, appears once and is not squared.</li>
        <li>The last thing done to C was adding 32, so undo that first: 392 − 32 = 360, and 360 = 9C/5.</li>
        <li>Before that, C was multiplied by 9 and divided by 5. Undo the division by multiplying by 5: 360 × 5 = 1,800 = 9C.</li>
        <li>Undo the multiplication by dividing by 9: C = 1,800 ÷ 9 = 200.</li>
      </ol>
      <p>The oven is at 200 °C. Check: 9 × 200 ÷ 5 + 32 = 360 + 32 = 392. Another one: distance = speed × time. You drove 180 km at 60 km an hour. Turn the formula around: time = distance ÷ speed = 180 ÷ 60 = 3 hours.</p>
      <p><b>Sounds like.</b> “I know the total, so what was the amount?” “What must it be for this to come out right?” “Solve for t.” “Use the formula backwards.”</p>
      <p><b>Catch it.</b> Ask yourself: is there a formula I know, with the missing number in it once and not squared, and do I want it turned around? In the key, that is the answer <i>One missing number, appearing once and not squared</i> to the question <i>How does the missing number show up?</i>, and the answer <i>The same formula, turned around to find a different letter</i> to the question <i>What do you want out of it?</i> Together they give the tool <i>Rearranging a formula</i>.</p>
      <p><b>What to do.</b> Write the formula and put the known numbers in. Undo the operations on the missing number in the reverse order from how they were applied, doing the same to both sides each time. Put your answer back into the formula to check that it gives the number you were told.</p>
      <p><b>Don’t confuse it with</b> <i>Scaling by a rate (proportion)</i>, which also has one missing number. The difference: rearranging starts from a result you already know (the oven shows 392 °F) and works backwards to an input. Scaling starts from a rate you already know (6 litres per 100 km) and works forwards to a new amount. A comparison card, two cards on, puts the two side by side.</p>`},
  {h:'Scaling by a rate (proportion)',
   b:`<p><b>What it is.</b> A rate says how much of one thing goes with one unit of another: 6 litres of fuel for every 100 km, €2.50 for every kilogram. If the same rate carries on, a new amount is the rate times the new quantity. Double the quantity and you double the answer. The method is to find the rate for one unit, then multiply by the new quantity.</p>
      <p><b>Example.</b> A car uses 6 litres of fuel for every 100 km. How much fuel for 250 km?</p>
      <ol>
        <li>Find the rate for one kilometre: 6 ÷ 100 = 0.06 litres each kilometre.</li>
        <li>Multiply by the new quantity: 250 × 0.06 = 15 litres.</li>
      </ol>
      <p>A sense check: 200 km would need 12 litres and 300 km would need 18, and 15 sits halfway between. Another one: 5 kg of apples cost €12.50. How much for 8 kg? The rate is 12.50 ÷ 5 = €2.50 a kilogram, and 2.50 × 8 = €20.</p>
      <p><b>Sounds like.</b> “At this rate…” “Per kilogram.” “The same recipe for more people.” “If this costs that, what does the other cost?” “How much will I need?”</p>
      <p><b>Catch it.</b> Ask yourself: do I have a rate that carries on, and do I want the amount for a new quantity? In the key, that is the answer <i>One missing number, appearing once and not squared</i> to the question <i>How does the missing number show up?</i>, and the answer <i>A new amount, at a rate you already know</i> to the question <i>What do you want out of it?</i> Together they give the tool <i>Scaling by a rate (proportion)</i>.</p>
      <p><b>What to do.</b> Divide to get the rate for one unit, multiply by the new quantity, and check that more in gives more out. Before you trust the answer, ask whether the rate really stays the same: a bulk discount, a fixed fee or a recipe whose cooking time does not double will break it.</p>
      <p><b>Don’t confuse it with</b> <i>Rearranging a formula</i>. Both hide one number, but scaling uses a rate to go forward to a new amount, and rearranging uses a formula to work backwards from a result. The next card shows how to tell them apart.</p>`},
  {h:'Rearranging or scaling? Same look, different ask',
   b:`<p class="lead">Both tools have one missing number that appears once and is not squared, so the first question of this half cannot tell them apart. The second question, <i>What do you want out of it?</i>, can.</p>
      <p>Here are two cases that look alike.</p>
      <ul>
        <li><b>Case A.</b> A gym charges €10 a month plus €2 for each class. This month you paid €30. How many classes did you take?</li>
        <li><b>Case B.</b> A gym charges €2 for each class, nothing else. You took 5 classes and paid €10. How much would 14 classes cost?</li>
      </ul>
      <p>In case A, you know the result (€30) and want to work back to the number of classes: 30 = 10 + 2 × classes, so 30 − 10 = 20 and 20 ÷ 2 = 10 classes. That is <i>The same formula, turned around to find a different letter</i>, so the tool is <i>Rearranging a formula</i>. In case B, you know a rate (€2 a class) and want a new amount for a new quantity: 14 × 2 = €28. That is <i>A new amount, at a rate you already know</i>, so the tool is <i>Scaling by a rate (proportion)</i>.</p>
      <table class="k">
      <tr><td><b>Rearranging a formula</b></td><td>You are given a rule and its result. You work backwards, undoing steps. Doubling the input need not double the output, because a fixed fee gets in the way.</td></tr>
      <tr><td><b>Scaling by a rate (proportion)</b></td><td>You are given a rate and a new quantity. You work forwards, multiplying. Doubling the input always doubles the output.</td></tr>
      </table>
      <p>The doubling test is the quickest. In case A, doubling the classes to 20 would not double the €30 bill, because of the €10 fee (it would be €50). In case B, 10 classes cost €20 and 20 classes cost €40.</p>`},
  {h:'Two facts, two unknowns (simultaneous equations)',
   b:`<p><b>What it is.</b> Two numbers you do not know, and two separate facts that link them. One fact alone leaves many answers: if all you know is that two numbers add up to 10, they could be 1 and 9, or 2 and 8, or 3 and 7. A second fact picks out one pair. The method is to use one fact to write one unknown in terms of the other, put that into the second fact, and solve for the one unknown that is left. (Mathematicians call this substitution.)</p>
      <p><b>Example.</b> A theatre sells adult tickets at €12 and child tickets at €7. It sold 10 tickets in all and took €95. How many of each?</p>
      <ol>
        <li>Call the number of adult tickets a and the number of child tickets c. The first fact is a + c = 10. The second fact is 12a + 7c = 95.</li>
        <li>From the first fact, c = 10 − a.</li>
        <li>Put that into the second fact: 12a + 7 × (10 − a) = 95. That gives 12a + 70 − 7a = 95, so 5a + 70 = 95, so 5a = 25, so a = 5.</li>
        <li>Then c = 10 − 5 = 5.</li>
      </ol>
      <p>5 adult tickets and 5 child tickets. Check both facts: 5 + 5 = 10, and 5 × 12 + 5 × 7 = 60 + 35 = 95.</p>
      <p><b>Sounds like.</b> “How many of each?” “Two prices, two orders.” “Adults and children.” “So many heads and so many legs.”</p>
      <p><b>Catch it.</b> Ask yourself: are two numbers hidden, and do I have two facts that link them? In the key, that is the answer <i>Two missing numbers, linked by two facts</i> to the question <i>How does the missing number show up?</i>, and the answer <i>The one pair of numbers that fits both facts</i> to the question <i>What do you want out of it?</i> Together they give the tool <i>Two facts, two unknowns (simultaneous equations)</i>.</p>
      <p><b>What to do.</b> Name the two unknowns with letters. Write each fact as an equation. Solve the first for one letter, put it into the second, solve, then find the other letter, and check the answer against both facts. If you can find only one fact, there is no single answer, so look for the second fact. With three unknowns you need three facts.</p>
      <p><b>Don’t confuse it with</b> <i>Scaling by a rate (proportion)</i> and <i>Rearranging a formula</i>, where only one number is hidden. If you count two hidden numbers, look for two facts.</p>`},
  {h:'A squared unknown (quadratic)',
   b:`<p><b>What it is.</b> A case where the missing number multiplies by itself, so it appears squared, written t² or x². It shows up when area is involved (a length times a width where one depends on the other) and when something falls or is thrown (how far it goes depends on time times time). Squared unknowns often have two answers, and one of them may make no sense in real life, so you drop it. The method is to write the equation with zero on one side, then find two numbers that multiply to the last number and add to the middle one. (If there is no neat pair, a formula, below, always works.)</p>
      <p><b>Example.</b> A rectangular garden is 3 m longer than it is wide, and its area is 40 square metres. How wide is it?</p>
      <ol>
        <li>Call the width w. The length is w + 3, and the area is w × (w + 3) = 40.</li>
        <li>Multiply out: w² + 3w = 40. Move everything to one side so the other side is zero: w² + 3w − 40 = 0.</li>
        <li>Find two numbers that multiply to −40 and add to 3. They are 8 and −5, because 8 × (−5) = −40 and 8 + (−5) = 3. So (w + 8) × (w − 5) = 0. (If the squared part is negative, as in −x² + 12x − 20 = 0, multiply every part by −1 first so that it becomes positive. If the equation is x² − 12x + 20 = 0, the numbers you want multiply to 20 and add to −12, which are −2 and −10, so it is (x − 2)(x − 10) = 0.)</li>
        <li>A product is zero only if one of its parts is zero. So w + 8 = 0 or w − 5 = 0, which gives w = −8 or w = 5.</li>
        <li>A width cannot be negative, so w = 5 m, and the length is 5 + 3 = 8 m.</li>
      </ol>
      <p>Check: 5 × 8 = 40. When no neat pair of numbers shows up, use the formula. Write the equation as a × w² + b × w + c = 0; here a = 1, b = 3 and c = −40. Then w = (−b ± √(b² − 4ac)) ÷ (2 × a). The ± means “do it once with plus and once with minus”, which gives the two answers. Put the numbers in: b² − 4ac = 3 × 3 − 4 × 1 × (−40) = 9 + 160 = 169, and the square root of 169 is 13. So w = (−3 ± 13) ÷ 2, which is 10 ÷ 2 = 5 or −16 ÷ 2 = −8: the same two answers again.</p>
      <p><b>Sounds like.</b> “t²” or “x²” in the problem. “The area is…” “When will it hit the ground?” “Two numbers that follow each other multiply to…” “When does the profit reach zero?”</p>
      <p><b>Catch it.</b> Ask yourself: do I see the missing number squared, and do I want to know when something reaches zero? In the key, that is the answer <i>One missing number, multiplied by itself</i> (you see t² or x²) to the question <i>How does the missing number show up?</i>, and the answer <i>When something reaches zero, or whether it ever does</i> to the question <i>What do you want out of it?</i> Together they give the tool <i>A squared unknown (quadratic)</i>.</p>
      <p><b>What to do.</b> Write the equation so one side is zero. Look for the pair of numbers, or use the formula. Test each answer in the real situation, and drop the ones that make no sense (a negative length, a time before the start).</p>
      <p><b>Don’t confuse it with</b> <i>Rearranging a formula</i>. Both have one missing letter, but a squared letter is the clue for this tool. The square in <i>Area and volume grow faster than length (square–cube law)</i>, later in this unit, is something else: there, whole shapes are scaled, and nothing is unknown.</p>`},
  {h:'Does an answer exist? Reading the discriminant',
   b:`<p><b>What it is.</b> This is the second half of the tool above, the half in the words <i>whether it ever does</i>. Before solving a squared unknown, one number tells you how many answers there are. Write the equation as a × t² + b × t + c = 0, and work out b² − 4ac. This number is called the discriminant. If it is positive, there are two answers. If it is zero, there is exactly one. If it is negative, there are none: the quantity never reaches zero.</p>
      <p><b>Example.</b> A ball thrown straight up has height h = 6t − t² metres after t seconds. Does it ever reach a given height?</p>
      <ol>
        <li><b>8 m.</b> 6t − t² = 8 becomes t² − 6t + 8 = 0, so a = 1, b = −6 and c = 8. b² − 4ac = 36 − 32 = 4. That is positive, so there are two answers: t = (6 ± 2) ÷ 2 = 4 or 2. The ball passes 8 m going up at 2 seconds and again coming down at 4 seconds.</li>
        <li><b>9 m.</b> t² − 6t + 9 = 0 gives b² − 4ac = 36 − 36 = 0. That is exactly one answer, t = 3 seconds: the very top of its flight.</li>
        <li><b>10 m.</b> t² − 6t + 10 = 0 gives b² − 4ac = 36 − 40 = −4. That is negative, so there is no answer. The ball never reaches 10 m. Its highest point is 9 m.</li>
      </ol>
      <p><b>Looks like.</b> “Can it ever reach…?” “Is there any solution?” “Will it ever break even?” “Does this line ever touch zero?”</p>
      <p><b>Catch it.</b> Ask yourself: am I being asked whether something ever reaches zero or a given value, and is the missing number squared? That is the same pair of key answers as the card before: <i>One missing number, multiplied by itself</i> and <i>When something reaches zero, or whether it ever does</i>. The tool is <i>A squared unknown (quadratic)</i>.</p>
      <p><b>What to do.</b> Work out b² − 4ac first and read its sign. If it is negative, say “never” and stop: no amount of solving will produce an answer. If it is zero or positive, go on and find the answers.</p>
      <p><b>Don’t confuse it with</b> finding the answers. The discriminant only counts them. It does not say what they are.</p>`},
  {h:'The four missing-number tools side by side',
   b:`<p>The first question is <i>How does the missing number show up?</i> The second is <i>What do you want out of it?</i> Here are their answers in the key’s exact words, with the tool each pair leads to. In each row, the first line answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>One missing number, appearing once and not squared<br><br>The same formula, turned around to find a different letter</td><td><b>Rearranging a formula</b></td></tr>
      <tr><td>One missing number, appearing once and not squared<br><br>A new amount, at a rate you already know</td><td><b>Scaling by a rate (proportion)</b></td></tr>
      <tr><td>Two missing numbers, linked by two facts<br><br>The one pair of numbers that fits both facts</td><td><b>Two facts, two unknowns (simultaneous equations)</b></td></tr>
      <tr><td>One missing number, multiplied by itself (you see t² or x²)<br><br>When something reaches zero, or whether it ever does</td><td><b>A squared unknown (quadratic)</b></td></tr>
      </table>
      <p>The first question separates the squared unknown and the two unknowns from the rest. When it gives the first answer, the second question decides between rearranging and scaling.</p>`},
  {h:'Running the two questions on a missing number',
   b:`<p class="lead">Here is a case that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>You hire a bike for a flat fee of €6 plus €4 for every hour. You paid €26 in total. For how many hours did you hire it?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>A missing number</i>. The hours are not given, and the facts (the fee, the hourly price and the total) pin them down.</li>
        <li><b>How does the missing number show up?</b> The hours appear once, in cost = 6 + 4 × hours, and are not squared. There is only one hidden number. That is <i>One missing number, appearing once and not squared</i>.</li>
        <li><b>What do you want out of it?</b> You know the result, €26, and want to work back to the hours. That is <i>The same formula, turned around to find a different letter</i>. It is not <i>A new amount, at a rate you already know</i>, because the €6 fee spoils the rate: 5 hours cost €26 but 10 hours would cost €46, not €52. The doubling test fails, so it is not scaling.</li>
        <li><b>Name the tool.</b> <i>Rearranging a formula</i>.</li>
      </ol>
      <p>Working: 26 = 6 + 4 × hours. Undo the fee: 26 − 6 = 20. Undo the multiplication: 20 ÷ 4 = 5. Five hours. Check: 6 + 4 × 5 = 26.</p>
      <p>Change the case and the tool changes. If the bike had no fee, only €4 an hour, and the question asked what 7 hours would cost, the rate would carry straight over: 7 × 4 = €28. That is <i>A new amount, at a rate you already know</i>, and the tool would be <i>Scaling by a rate (proportion)</i>.</p>`},
  {h:'Third side of a right-angled triangle (Pythagoras)',
   b:`<p><b>What it is.</b> In a right-angled triangle, one corner is a right angle, a square corner like the corner of a page. The side facing that corner is the longest one, called the hypotenuse; call it the long side. The rule: the long side multiplied by itself equals the other two sides each multiplied by themselves and added together. So any two sides give you the third. (Squaring a number means multiplying it by itself: 6 squared is 6 × 6 = 36.)</p>
      <p><b>Example 1, finding the long side.</b> A rectangular yard is 30 m by 40 m. How far is it from one corner to the opposite corner?</p>
      <ol>
        <li>The two sides of the yard meet at a right angle, and the diagonal is the long side of the triangle they make.</li>
        <li>Square the two short sides and add: 30 × 30 = 900 and 40 × 40 = 1,600, and 900 + 1,600 = 2,500.</li>
        <li>That is the long side squared. Take the square root: the square root of 2,500 is 50.</li>
      </ol>
      <p>The diagonal is 50 m. Walking across saves 20 m over walking along two sides (30 + 40 = 70).</p>
      <p><b>Example 2, finding a short side.</b> A 10 m cable runs from the top of a pole to the ground, 6 m from the foot of the pole. How tall is the pole?</p>
      <ol>
        <li>The pole stands at a right angle to the ground. The cable is the long side (10 m). The distance along the ground is one short side (6 m). The height is the other short side.</li>
        <li>Subtract: 10 × 10 = 100 and 6 × 6 = 36, and 100 − 36 = 64.</li>
        <li>The square root of 64 is 8.</li>
      </ol>
      <p>The pole is 8 m tall. The rule to keep: if you want the long side, add the squares. If you want a short side, subtract.</p>
      <p><b>Sounds like.</b> “How far is the diagonal?” “How far across?” “How high does it reach?” “The shortest way.” “Does it fit round the corner?”</p>
      <p><b>Catch it.</b> Ask yourself: do I have two sides of a triangle with a right angle in it, and no angle to measure? In the key, that is the answer <i>Two sides of a right-angled triangle</i> to the question <i>What do you have to work with?</i>, and the answer <i>The third side of the right-angled triangle</i> to the question <i>What do you want to find?</i> Together they give the tool <i>Third side of a right-angled triangle (Pythagoras)</i>.</p>
      <p><b>What to do.</b> Sketch the triangle and mark the right angle. Mark the long side, the one facing the right angle. If it is the one you want, add the squares and take the square root. If you want a short side, subtract the squares and take the square root. Check that the long side comes out as the longest of the three. The rule works only if there is a right angle, so check for one before you use it.</p>
      <p><b>Don’t confuse it with</b> <i>Length from an angle (trigonometry)</i>. Here you are given two sides and no angle to work with. There you are given one angle and one side.</p>`},
  {h:'Length from an angle (trigonometry)',
   b:`<p><b>What it is.</b> When a right-angled triangle gives you one angle (besides the right angle) and one side, trigonometry gives you the other sides. Look at the angle you know. The side facing it is the <b>opposite</b>. The side next to it, which is not the long side, is the <b>adjacent</b>. The long side is the <b>hypotenuse</b>. There are three ratios: sin = opposite ÷ long side, cos = adjacent ÷ long side, and tan = opposite ÷ adjacent. A calculator has sin, cos and tan keys, set to degrees. You pick the ratio that contains the side you know and the side you want.</p>
      <p><b>Example 1.</b> You stand 30 m from the foot of a tower and look up at its top at an angle of 35° above the ground. How tall is the tower above your eye level?</p>
      <ol>
        <li>You know the angle (35°) and the side next to it (30 m, the adjacent). You want the height, the side facing the angle (the opposite).</li>
        <li>The ratio with opposite and adjacent is tan: tan 35° = opposite ÷ 30.</li>
        <li>The calculator gives tan 35° = 0.700. So the opposite = 30 × 0.700 = 21 m.</li>
      </ol>
      <p>The tower is about 21 m above your eye level. <b>Example 2.</b> A kite string is 50 m long and makes an angle of 40° with the ground. How high is the kite? You know the long side (50 m) and want the opposite, so use sin: sin 40° = 0.643, and 50 × 0.643 = 32.1 m.</p>
      <p><b>Sounds like.</b> “At an angle of…” “Looking up at 35°.” “The slope is…” “The pitch of the roof.” “I cannot climb up there to measure it.”</p>
      <p><b>Catch it.</b> Ask yourself: do I have one angle and one side, and a length I cannot measure directly? In the key, that is the answer <i>One angle and one side</i> to the question <i>What do you have to work with?</i>, and the answer <i>A length you cannot measure directly, using an angle</i> to the question <i>What do you want to find?</i> Together they give the tool <i>Length from an angle (trigonometry)</i>.</p>
      <p><b>What to do.</b> Sketch the triangle. Mark the angle, then label the sides opposite, adjacent and long relative to that angle. Pick the ratio that holds the side you know and the side you want: sin for opposite and long side, cos for adjacent and long side, tan for opposite and adjacent. Multiply or divide accordingly. A handy way to remember them is SOH, CAH, TOA: sin is opposite over long side, cos is adjacent over long side, tan is opposite over adjacent.</p>
      <p><b>Don’t confuse it with</b> <i>Third side of a right-angled triangle (Pythagoras)</i>, which uses two sides and no angle, and with <i>Same shape, different size (similar triangles)</i>, which compares two shapes and needs no sin, cos or tan.</p>`},
  {h:'Same shape, different size (similar triangles)',
   b:`<p><b>What it is.</b> Two things have the same shape when one is an exact scaled copy of the other: the angles match, and every length is multiplied by the same number, called the scale factor. (Here “factor” just means a multiplier. It is not the “factor” of Unit Two, which divides a number.) So if you know the scale factor, you know every matching length. You find it by dividing a pair of matching lengths where you know both. It works for triangles, photos, maps and scale models.</p>
      <p><b>Example.</b> A photo is 10 cm by 15 cm. You enlarge it so that the short side is 40 cm. How long is the long side?</p>
      <ol>
        <li>The matching sides are the two short sides: 10 cm on the small photo and 40 cm on the big one. The scale factor is 40 ÷ 10 = 4.</li>
        <li>Every length is multiplied by 4. The long side is 15 × 4 = 60 cm.</li>
      </ol>
      <p>Check that the shape is the same: 10 : 15 and 40 : 60 are both 2 : 3.</p>
      <p><b>Example 2, a shadow.</b> At noon a 1.8 m person casts a shadow 1.2 m long. At the same moment a tree casts a shadow 9 m long. How tall is the tree?</p>
      <ol>
        <li>The sun is at the same angle for both, so the person with their shadow and the tree with its shadow make two triangles of the same shape, one small and one big.</li>
        <li>The matching sides are the two shadows: 1.2 m and 9 m. The scale factor is 9 ÷ 1.2 = 7.5.</li>
        <li>The matching heights are in the same proportion: 1.8 × 7.5 = 13.5 m.</li>
      </ol>
      <p>The tree is 13.5 m tall. A scale model works the same way. “A model at 1 to 50” means every real length is 50 times the matching length on the model, so a 12 cm tower on the model is 12 × 50 = 600 cm, which is 6 m, on the real building.</p>
      <p><b>Sounds like.</b> “A scale model.” “Enlarge to this width.” “At the same moment, the shadow of…” “The same shape but bigger.” “One to fifty.”</p>
      <p><b>Catch it.</b> Ask yourself: are there two things of the same shape in different sizes, and do I want a missing length? In the key, that is the answer <i>Two things with the same shape but different sizes</i> to the question <i>What do you have to work with?</i>, and the answer <i>A missing length, using the matching sides of the same shape</i> to the question <i>What do you want to find?</i> Together they give the tool <i>Same shape, different size (similar triangles)</i>.</p>
      <p><b>What to do.</b> Find a pair of matching sides where you know both lengths and divide to get the scale factor. Multiply the side you know on the first shape by it to get the matching side on the other. Shadows are a handy way to do this when you cannot climb up to measure: measure two shadows at the same moment, and divide them to get the scale factor.</p>
      <p><b>Don’t confuse it with</b> <i>Area and volume grow faster than length (square–cube law)</i>. Here the question is one missing length. In the next card the question is what happens to area or volume. And do not confuse it with <i>Scaling by a rate (proportion)</i>, where the rate is something per unit, such as litres per kilometre, not a ratio between two shapes.</p>`},
  {h:'Area and volume grow faster than length (square–cube law)',
   b:`<p><b>What it is.</b> When you make something n times as long, n times as wide and n times as tall, its surface area is multiplied by n × n and its volume (the space inside) by n × n × n. So doubling every length gives 4 times the area and 8 times the volume. The reason: a 2 m by 2 m square is made of 4 squares of 1 m by 1 m, and a cube 2 m on each side is made of 8 little cubes.</p>
      <p><b>Example.</b> Compare a cube with 10 cm sides and one with 20 cm sides.</p>
      <ol>
        <li>The 10 cm cube: one face is 10 × 10 = 100 square centimetres. Six faces give 600 square centimetres. The volume is 10 × 10 × 10 = 1,000 cubic centimetres.</li>
        <li>The 20 cm cube: one face is 20 × 20 = 400 square centimetres. Six faces give 2,400. The volume is 20 × 20 × 20 = 8,000.</li>
        <li>The sides doubled. The surface went from 600 to 2,400, which is 4 times. The volume went from 1,000 to 8,000, which is 8 times.</li>
      </ol>
      <p>The same law catches a quoted length that hides a bigger difference. A TV is sold by its diagonal. A 65-inch TV against a 55-inch one is 65 ÷ 55 = 1.18 times as long, so the screen has 1.18 × 1.18 = 1.40 times the area: about 40% more screen for 18% more on the box.</p>
      <p><b>Sounds like.</b> “Twice as wide.” “Double every side.” “A bigger size.” “How much more paint, glass or dough?” Any price or size quoted as one length for something you care about by area or volume.</p>
      <p><b>Catch it.</b> Ask yourself: are there two things of the same shape in different sizes, and do I want to know how area or volume changes when the length does? In the key, that is the answer <i>Two things with the same shape but different sizes</i> to the question <i>What do you have to work with?</i>, and the answer <i>How the area or volume changes when the length changes</i> to the question <i>What do you want to find?</i> Together they give the tool <i>Area and volume grow faster than length (square–cube law)</i>.</p>
      <p><b>What to do.</b> Write how many times longer each length is, and call it n. For area use n × n and for volume use n × n × n. Compare prices, paint, glass, dough or heating time with that number, not with n. A box with doubled sides holds 8 times as much but takes only 4 times the cardboard, which is why bigger packs are often better value, and why a bigger pot takes much longer to heat through.</p>
      <p><b>Don’t confuse it with</b> <i>Same shape, different size (similar triangles)</i>, which finds one missing length. This tool answers how area or volume change.</p>`},
  {h:'The four shape tools side by side',
   b:`<p>The first question is <i>What do you have to work with?</i> The second is <i>What do you want to find?</i> Here are their answers in the key’s exact words, with the tool each pair leads to. In each row, the first line answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>Two sides of a right-angled triangle<br><br>The third side of the right-angled triangle</td><td><b>Third side of a right-angled triangle (Pythagoras)</b></td></tr>
      <tr><td>One angle and one side<br><br>A length you cannot measure directly, using an angle</td><td><b>Length from an angle (trigonometry)</b></td></tr>
      <tr><td>Two things with the same shape but different sizes<br><br>A missing length, using the matching sides of the same shape</td><td><b>Same shape, different size (similar triangles)</b></td></tr>
      <tr><td>Two things with the same shape but different sizes<br><br>How the area or volume changes when the length changes</td><td><b>Area and volume grow faster than length (square–cube law)</b></td></tr>
      </table>
      <p>The first question has three answers. When it gives the third, the second question decides between the last two tools: a length wanted, or area and volume.</p>`},
  {h:'Running the two questions on a shape',
   b:`<p class="lead">Here is a case that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>A builder knows that a roof rises 2.4 m over a horizontal run of 3.2 m. She needs to order a rafter that follows the slope. How long is it?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>Shapes and sizes</i>. It is about the lengths of a roof.</li>
        <li><b>What do you have to work with?</b> The rise and the run are two sides of a triangle, and the wall meets the ground at a right angle. No angle is given. That is <i>Two sides of a right-angled triangle</i>.</li>
        <li><b>What do you want to find?</b> The rafter is the sloping side, the third side. That is <i>The third side of the right-angled triangle</i>.</li>
        <li><b>Name the tool.</b> <i>Third side of a right-angled triangle (Pythagoras)</i>.</li>
      </ol>
      <p>Working: the rafter is the long side, so add the squares. 2.4 × 2.4 = 5.76 and 3.2 × 3.2 = 10.24, and 5.76 + 10.24 = 16. The square root of 16 is 4. The rafter is 4 m long.</p>
      <p>Change the case and the tool changes. If the builder knew the roof pitch, 37°, and the run, 3.2 m, but not the rise, she would have <i>One angle and one side</i>, and she would want <i>A length you cannot measure directly, using an angle</i>. The tool would be <i>Length from an angle (trigonometry)</i>: the rise is 3.2 × tan 37° = 3.2 × 0.7536 = 2.41 m.</p>`}
  ],
  drill:{kind:'pick', key:'m3'} },
{ tag:'Four', title:'Growth over time',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case where something changes step by step, or where numbers range from tiny to huge, and say which of four tools it needs, or that it is not growth at all, and you can run each tool on real numbers.</p>
      <p>It turns up with savings and debts, subscriptions, populations, how fast something spreads, and any chart whose numbers run from a few to millions. The most common mistake is to treat growth that multiplies as if it only added, so people underestimate debts, and call steady growth “exponential” because it is fast.</p>
      <p>This unit answers two questions of the key, in the key’s exact words: <i>At each step, what happens to the quantity?</i> and <i>What are you trying to work out?</i> Together they lead to one of four tools: <i>Adding the same amount each time (linear growth)</i>, <i>Multiplying by the same number each time (exponential growth)</i>, <i>How many steps to get there (logarithm)</i> and <i>Equal space for each ×10 (log scale)</i>. There is also a fifth case, <i>Neither — a one-off jump</i>, for a number that changed once and then stopped.</p>
      <p>Every tool is worked with real numbers, step by step, before the practice asks you for it. The practice then gives you eleven new cases and asks which of the five fits each.</p>`},
  {h:'Adding the same amount each time (linear growth)',
   b:`<p><b>What it is.</b> Growth where the same amount is added at every step, whatever the size of the total so far. Taking away the same amount each time counts too: that is adding a negative number. After n steps, the value is the start plus the amount added each step times n. Drawn on a chart, it is a straight line.</p>
      <p><b>Example.</b> A water tank holds 20 litres, and a tap adds 4 litres every minute.</p>
      <ol>
        <li>After each minute: 20, 24, 28, 32. The difference between one step and the next is 4 every time.</li>
        <li>After n minutes: 20 + 4 × n. After 15 minutes: 20 + 4 × 15 = 20 + 60 = 80 litres.</li>
      </ol>
      <p>Taking away works the same way: a car that loses €1,500 of value every year goes 12,000, 10,500, 9,000, and after 4 years it is worth 12,000 − 4 × 1,500 = €6,000.</p>
      <p><b>Sounds like.</b> “A fixed amount every month.” “A flat rate.” “It adds X each week.” “Steady.” “It earns X an hour.”</p>
      <p><b>Catch it.</b> Ask yourself: is the same amount added each step? To test, subtract each step from the next. If the difference is the same every time, it is this. In the key, that is the answer <i>The same amount is added each time</i> to the question <i>At each step, what happens to the quantity?</i>, and, when you want the running total, the answer <i>The total, after adding the same amount again and again</i> to the question <i>What are you trying to work out?</i> Together they give the tool <i>Adding the same amount each time (linear growth)</i>.</p>
      <p><b>What to do.</b> Total after n steps = start + (amount each step) × n. To forecast, multiply and add. To check a claim, look at the differences between steps. A rise of €5,000 every month is fast, and it is still steady.</p>
      <p><b>Don’t confuse it with</b> <i>Multiplying by the same number each time (exponential growth)</i>. In everyday speech “exponential” has come to mean “fast”, but fast growth can be linear. The difference test tells them apart: a constant difference is adding.</p>`},
  {h:'Multiplying by the same number each time (exponential growth)',
   b:`<p><b>What it is.</b> Growth where the quantity is multiplied by the same number at every step. Each step’s increase is bigger than the one before, because it is a share of an ever bigger total. A percentage growth is multiplying: 5% a year means multiply by 1.05 every year. After n steps, the size is the start times the multiplier multiplied by itself n times. That repeated multiplying is written with a small raised n: 1.05³ means 1.05 × 1.05 × 1.05. Drawn on a chart, the line curves up ever more steeply.</p>
      <p><b>Example 1.</b> A video has 100 views on its first day, and the number of views doubles every day: 100, 200, 400, 800, 1,600. The differences are 100, 200, 400, 800, which keep growing, while the ratio (each day divided by the day before: 200 ÷ 100, 400 ÷ 200 and so on) is always 2. After 10 doublings: 100 × 1,024 = 102,400 views.</p>
      <p><b>Example 2.</b> You put €1,000 in an account that pays 5% a year.</p>
      <ol>
        <li>Year 1: 1,000 × 1.05 = 1,050.</li>
        <li>Year 2: 1,050 × 1.05 = 1,102.50.</li>
        <li>Year 3: 1,102.50 × 1.05 = 1,157.63.</li>
      </ol>
      <p>Or in one go: 1,000 × 1.05 × 1.05 × 1.05 = 1,157.63. The gains were 50, 52.50 and 55.13: each year the interest is charged on the interest too. The ratios 1,050 ÷ 1,000 and 1,102.50 ÷ 1,050 are both 1.05.</p>
      <p><b>Example 3, spreading by word of mouth.</b> A rumour starts with 1 person. Every day, each person who knows it tells 2 people who have not heard it yet.</p>
      <ol>
        <li>Each person who knows it stays in the group and brings in 2 more, so every person becomes 3 people.</li>
        <li>The group is multiplied by 3 every day: 1, then 3, then 9, then 27.</li>
        <li>After 5 days: 3 × 3 × 3 × 3 × 3 = 243 people.</li>
      </ol>
      <p>The multiplier is 3, not 2, because the people who already knew are still in the group. Spreading through people can work this way for a while: the more who have it, the more there are to pass it on.</p>
      <p><b>Sounds like.</b> “Doubles every…” “Grows by 5% a year.” “Interest on interest.” “Each sick person passes it to two more.” “It compounds.”</p>
      <p><b>Catch it.</b> Ask yourself: is the quantity multiplied by the same number each step? To test, divide each step by the one before. If the ratio is the same every time, it is this. In the key, that is the answer <i>It is multiplied by the same number each time</i> to the question <i>At each step, what happens to the quantity?</i>, and, when you want a size after a set number of steps, the answer <i>The size, after multiplying a known number of times</i> to the question <i>What are you trying to work out?</i> Together they give the tool <i>Multiplying by the same number each time (exponential growth)</i>.</p>
      <p><b>What to do.</b> Find the multiplier: 1 plus the percentage as a decimal, or the doubling number. Then size after n steps = start × multiplier multiplied by itself n times. Your calculator has a power key (written ^ or xʸ) for this. And remember that nothing multiplies for ever: a rumour runs out of listeners and bacteria run out of food, so a model that goes past its limits is wrong even if the arithmetic is right.</p>
      <p><b>Don’t confuse it with</b> <i>Adding the same amount each time (linear growth)</i>. Adding gives a constant difference. Multiplying gives a constant ratio.</p>`},
  {h:'Percentages are multipliers',
   b:`<p><b>What it is.</b> A percentage change is multiplication in disguise. To go up by a percentage, multiply by 1 plus the percentage as a decimal. To go down by a percentage, multiply by 1 minus it. Two changes in a row multiply together. They never add.</p>
      <table class="k">
      <tr><th>Up 5%</th><td>× 1.05</td></tr>
      <tr><th>Up 24%</th><td>× 1.24</td></tr>
      <tr><th>Up 100%</th><td>× 2</td></tr>
      <tr><th>Down 15%</th><td>× 0.85</td></tr>
      <tr><th>Down 50%</th><td>× 0.5</td></tr>
      </table>
      <p><b>Example.</b> A shop takes 20% off a jacket, then another 10% off the new price. Is that 30% off?</p>
      <ol>
        <li>20% off is × 0.80. A further 10% off is × 0.90.</li>
        <li>Multiply them: 0.80 × 0.90 = 0.72. The jacket costs 72% of the original price, which is 28% off, not 30%.</li>
        <li>On a €50 jacket: 50 × 0.80 = 40, then 40 × 0.90 = 36, and 36 is 72% of 50.</li>
      </ol>
      <p><b>Sounds like.</b> “Up 7% a year.” “Down 15% a year.” “20% off, then 10% off.” “Interest of 24%.” “It loses a tenth of its value every year.”</p>
      <p><b>Catch it.</b> Ask yourself: does the case give a percentage change? That is how you find the key’s answer <i>It is multiplied by the same number each time</i> to the question <i>At each step, what happens to the quantity?</i> when no multiplier is stated: the percentage tells you the multiplier.</p>
      <p><b>What to do.</b> Turn each percentage into its multiplier and multiply them in order. To see what a multiplier below 1 does over time, multiply repeatedly: a value that loses 10% a year is × 0.90 each year, so 1,000 becomes 900, then 810, then 729.</p>
      <p><b>Don’t confuse it with</b> adding percentages. 20% and then 10% do not make 30%, because the second percentage is taken from a smaller amount.</p>`},
  {h:'Neither — a one-off jump',
   b:`<p><b>What it is.</b> A quantity that changes once, by a single step, and then stays where it is. That is not growth: there is no repeating step that adds the same amount or multiplies by the same number. The key is built for quantities that keep changing in a pattern, so a one-off jump does not fit any of its answers. It is a fifth case: none of the four tools.</p>
      <p><b>Example.</b> A bus fare was €2.00 for years, then rose to €2.40 on 1 January and has stayed there. Look at the steps year by year: 2.00, 2.00, 2.00, 2.40, 2.40, 2.40. The differences are 0, 0, 0.40, 0, 0. They are not the same every time, so it is not adding. The ratios are 1, 1, 1.2, 1, 1. They are not the same every time, so it is not multiplying. There was one jump of 40 cents, which is 20%, and then nothing.</p>
      <p><b>Sounds like.</b> “Since the change.” “After the new law.” “It went up and stayed there.” “A new price.” “Since the road opened.”</p>
      <p><b>Catch it.</b> Look at the steps, one after the other. Is there a pattern of the same amount added, or the same number multiplied, at every step? If the quantity changed once and then stayed level, the answer is <i>Neither — a one-off jump</i>.</p>
      <p><b>What to do.</b> Describe the jump as a before and an after, and say how big it was: from 2.00 to 2.40 is up 20%, once. Do not stretch a trend out of it. Projecting “another 40 cents next year” from one rise is an invention. Ask whether another jump is expected, and why.</p>
      <p><b>Don’t confuse it with</b> <i>Adding the same amount each time (linear growth)</i>. A linear quantity jumps by the same amount at every step. If the fare rose by 40 cents again the next year, and the year after, it would be linear.</p>`},
  {h:'How many steps to get there (logarithm)',
   b:`<p><b>What it is.</b> The tool for the question “how many steps?” In multiplying growth, you know the multiplier and the size you want to reach, and you need the number of steps. The unknown is the small raised number in 1.05ⁿ, which is called the exponent: how many times to multiply. Finding it is called taking a logarithm, and your calculator has a “log” key for it. The pair go together: exponential growth gives “how big after n steps” and a logarithm gives “how many steps to get that big”. They are the same relationship read from opposite ends.</p>
      <p><b>Example.</b> €1,000 grows at 5% a year. When has it doubled?</p>
      <ol>
        <li>Each year multiplies by 1.05, so you need 1.05 multiplied by itself n times to equal 2.</li>
        <li>Try by hand to get close: after 14 years, 1.05 multiplied by itself 14 times is 1.98, just under 2. After 15 years it is 2.08, over. So the answer is between 14 and 15 years.</li>
        <li>The log key gives it exactly: n = log 2 ÷ log 1.05 = 0.3010 ÷ 0.0212 = 14.2 years.</li>
      </ol>
      <p>A shortcut for doubling is the rule of 72: divide 72 by the percentage. 72 ÷ 5 = 14.4 years, close to 14.2. At 9% it gives 72 ÷ 9 = 8 years, and the true figure is 8.04. It works well for rates between about 2% and 15%.</p>
      <p><b>Sounds like.</b> “How long until it doubles?” “When will it reach…?” “How many years, days or rounds?” “How many times must I double it to get to…?”</p>
      <p><b>Catch it.</b> Ask yourself: is the quantity multiplied by the same number each step, and do I want to know how many steps it takes? In the key, that is the answer <i>It is multiplied by the same number each time</i> to the question <i>At each step, what happens to the quantity?</i>, and the answer <i>How many steps it takes to reach a known size</i> to the question <i>What are you trying to work out?</i> Together they give the tool <i>How many steps to get there (logarithm)</i>.</p>
      <p><b>What to do.</b> Write the multiplier, the start and the target. Work out target ÷ start (2 in the example). Get a rough answer by trial, then use n = log (target ÷ start) ÷ log (multiplier) with the log key. Check by multiplying back: 1.05 multiplied by itself 14 times is about 2.</p>
      <p><b>Don’t confuse it with</b> <i>Multiplying by the same number each time (exponential growth)</i>, which asks for the size after a known number of steps. The logarithm runs the other way: the size is known, and the steps are what you want.</p>`},
  {h:'Equal space for each ×10 (log scale)',
   b:`<p><b>What it is.</b> Not a calculation but a way of drawing. On an ordinary chart axis, equal spaces mean equal amounts: 0, 10, 20, 30. On a log axis, equal spaces mean equal multiples: 1, 10, 100, 1,000, 10,000 are evenly spaced, because each is ×10 the one before. You use it when the numbers range from tiny to huge, and on an ordinary axis the small ones would be squashed flat against zero. Each ×10 is called an order of magnitude.</p>
      <p><b>Example.</b> Three animals weigh 0.02 kg (a mouse), 70 kg (a person) and 150,000 kg (a blue whale).</p>
      <ol>
        <li>On an ordinary axis up to 150,000 kg, the person at 70 kg sits at 0.05% of the way along, and the mouse at 0.02 kg is invisible. Both look like zero.</li>
        <li>From the mouse to the person is a rise of 70 ÷ 0.02 = 3,500 times, and from the person to the whale 150,000 ÷ 70 = about 2,100 times. Each is a bit over three ×10 steps (10 × 10 × 10 = 1,000).</li>
        <li>On a log axis, those two gaps look nearly the same size, and all three animals are easy to read.</li>
      </ol>
      <p>You already meet these scales. An earthquake rated one step higher has about 10 times the ground movement. Every 10 decibels louder is 10 times the sound power. Each step of pH is 10 times more acidic.</p>
      <p><b>Sounds like.</b> “From … all the way to … on one chart.” “Orders of magnitude.” “Plotted on a log axis.” “Magnitude”, “decibels” and “pH”.</p>
      <p><b>Catch it.</b> Ask yourself: is anything actually growing, or are the numbers simply spread from tiny to enormous? In the key, that is the answer <i>Nothing is growing; the numbers just range from tiny to enormous</i> to the question <i>At each step, what happens to the quantity?</i>, and the answer <i>How to draw or compare numbers that range from tiny to enormous</i> to the question <i>What are you trying to work out?</i> Together they give the tool <i>Equal space for each ×10 (log scale)</i>.</p>
      <p><b>What to do.</b> When the biggest number is thousands of times the smallest, draw it with a log axis. When you read a chart, look at the axis labels: if 1, 10, 100, 1,000 are evenly spaced, it is a log axis. A warning: on a log axis, a quantity that multiplies each step draws as a straight line, so explosive growth can look calm. A chart of a doubling quantity bends sharply upward on an ordinary axis and looks like a gentle straight line on a log one.</p>
      <p><b>Don’t confuse it with</b> <i>Multiplying by the same number each time (exponential growth)</i>. Exponential growth is a quantity that changes. A log scale is a way of drawing numbers, and nothing needs to be changing.</p>`},
  {h:'The growth tools side by side',
   b:`<p>The first question is <i>At each step, what happens to the quantity?</i> The second is <i>What are you trying to work out?</i> Here are their answers in the key’s exact words, with the tool each pair leads to. In each row, the first line answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>The same amount is added each time<br><br>The total, after adding the same amount again and again</td><td><b>Adding the same amount each time (linear growth)</b></td></tr>
      <tr><td>It is multiplied by the same number each time<br><br>The size, after multiplying a known number of times</td><td><b>Multiplying by the same number each time (exponential growth)</b></td></tr>
      <tr><td>It is multiplied by the same number each time<br><br>How many steps it takes to reach a known size</td><td><b>How many steps to get there (logarithm)</b></td></tr>
      <tr><td>Nothing is growing; the numbers just range from tiny to enormous<br><br>How to draw or compare numbers that range from tiny to enormous</td><td><b>Equal space for each ×10 (log scale)</b></td></tr>
      </table>
      <p>Before you use the key, check that the quantity really repeats. If it changed once and then stopped, none of the four fits and the answer is <i>Neither — a one-off jump</i>. The first question splits adding, multiplying and spread. The second question separates the two tools that start from multiplying: a size after known steps, or the steps to a known size.</p>`},
  {h:'Running the two questions on growth',
   b:`<p class="lead">Here is a case that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>A new app has 2,000 users and grows by 10% every week. How many users will it have after 4 weeks?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>Growth over time</i>. The words “every week” and “grows by 10%” describe a quantity changing step by step.</li>
        <li><b>At each step, what happens to the quantity?</b> A percentage growth is a multiplier: 10% more is × 1.10. Each week’s increase is bigger than the last (200, then 220, then 242), so the differences change while the ratio stays at 1.10. That is <i>It is multiplied by the same number each time</i>.</li>
        <li><b>What are you trying to work out?</b> The number of users after a known number of weeks, 4. That is <i>The size, after multiplying a known number of times</i>.</li>
        <li><b>Name the tool.</b> <i>Multiplying by the same number each time (exponential growth)</i>.</li>
      </ol>
      <p>Working: 2,000 × 1.1 = 2,200. Then 2,200 × 1.1 = 2,420. Then 2,420 × 1.1 = 2,662. Then 2,662 × 1.1 = 2,928.2. After 4 weeks the app has about 2,928 users.</p>
      <p>Change the case and the tool changes. If the question asked how many weeks until the app has doubled to 4,000, the second answer would be <i>How many steps it takes to reach a known size</i> and the tool would be <i>How many steps to get there (logarithm)</i>: n = log 2 ÷ log 1.1 = 0.3010 ÷ 0.0414 = about 7.3 weeks (the rule of 72 gives 72 ÷ 10 = 7.2). And if the app instead gained a fixed 200 users every week, the first answer would be <i>The same amount is added each time</i>, and the tool would be <i>Adding the same amount each time (linear growth)</i>: 2,000 + 4 × 200 = 2,800.</p>`}
  ],
  drill:{kind:'pick', key:'m4'} },
{ tag:'Five', title:'Counting and chances',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a counting or chance case and say which of five tools it needs, and you can run each tool on real numbers.</p>
      <p>It turns up with codes and passwords, menus and options, lottery tickets, weather forecasts, quality checks on a batch, and medical or security tests. The common mistakes are counting in the wrong way (using the method for a group when the order mattered), adding chances that should be multiplied, and believing a test’s accuracy answers “am I ill?”</p>
      <p>This unit answers two questions of the key, in the key’s exact words: <i>What is the question asking for?</i> and <i>What detail in the case decides it?</i> Together they lead to one of five tools: <i>Multiplying the choices (multiplication principle)</i>, <i>Picking in order (permutations)</i>, <i>Picking a group, order ignored (combinations)</i>, <i>Counting the opposite (complement rule)</i> and <i>How rare it was to begin with (base rate)</i>.</p>
      <p>Every tool is worked with real numbers, step by step, before the practice asks you for it. The practice then gives you ten new cases and asks which of the five settles each.</p>`},
  {h:'Multiplying the choices (multiplication principle)',
   b:`<p><b>What it is.</b> When you make several separate choices, each from its own list, the total number of possible combinations is the lengths of the lists multiplied together. For every option in the first list, the whole of the second list is available again, and so on. “Separate” means that choosing from one list never removes or changes the options in another.</p>
      <p><b>Example.</b> A new car can be ordered in 5 colours, with 3 engines and 2 trim levels (basic or luxury). How many different cars can you order?</p>
      <ol>
        <li>Pick a colour (5 options). With each colour, any of the 3 engines can go: 5 × 3 = 15 colour and engine pairs.</li>
        <li>With each of those pairs, either trim can go: 15 × 2 = 30.</li>
      </ol>
      <p>5 × 3 × 2 = 30 different cars. Check by listing: each colour gives 3 engines × 2 trims = 6 cars, and 5 colours give 5 × 6 = 30. If the same list is chosen from again and again, as in a code made of digits, you multiply the same number by itself: a 2-digit code from the digits 0 to 9 has 10 × 10 = 100 possibilities.</p>
      <p><b>Sounds like.</b> “How many different outfits, meals, codes or combinations?” “Choose one from each.” “For each … there is a choice of…”</p>
      <p><b>Catch it.</b> Ask yourself: do I choose from each list separately, and does choosing from one list leave the other lists untouched? In the key, that is the answer <i>How many ways something can be picked or arranged</i> to the question <i>What is the question asking for?</i>, and the answer <i>Several separate choices, each with its own list of options</i> to the question <i>What detail in the case decides it?</i> Together they give the tool <i>Multiplying the choices (multiplication principle)</i>.</p>
      <p><b>What to do.</b> List each choice and write down how many options it has. Multiply the numbers. Then sense-check: is the answer much bigger than any single list? It should be. The same test settles a gambler’s claim. Each spin of a roulette wheel is a separate choice with the same list of results, and an earlier spin never uses one up. So six reds in a row do not make black “due”: the chance of black on the next spin is the same as on the first.</p>
      <p><b>Don’t confuse it with</b> <i>Picking in order (permutations)</i>. The test is the length of the list at each pick. If it is the same every time, the choices are separate and you multiply. If it shrinks because a pick uses up an option, you are picking from one pool in turn.</p>`},
  {h:'Picking in order (permutations)',
   b:`<p><b>What it is.</b> Picking from one pool of things, one after another, where each thing can be used only once, and where a different order gives a different result. The list shrinks at each pick: all the options for the first, one fewer for the second, two fewer for the third, and so on.</p>
      <p><b>Example.</b> A club of 10 people elects a president, a secretary and a treasurer, three different people for three different jobs. How many ways can the jobs be filled?</p>
      <ol>
        <li>President: any of the 10 people.</li>
        <li>Secretary: anyone except the president, so 9 are left.</li>
        <li>Treasurer: anyone except those two, so 8 are left.</li>
      </ol>
      <p>10 × 9 × 8 = 720 ways. Order matters because Ana as president and Bo as secretary is a different result from Bo as president and Ana as secretary. If you arrange all of them, you keep multiplying down to 1. Five people in a line for a photo can stand in 5 × 4 × 3 × 2 × 1 = 120 orders. A product like 5 × 4 × 3 × 2 × 1 is written 5! and called “5 factorial”.</p>
      <p><b>Sounds like.</b> “In how many different orders?” “First, second and third place.” “Who sits where?” “Different jobs.”</p>
      <p><b>Catch it.</b> Ask yourself: am I picking from one pool in turn, and would swapping two picks give a different result? In the key, that is the answer <i>How many ways something can be picked or arranged</i> to the question <i>What is the question asking for?</i>, and the answer <i>Things are picked in turn, and a different order counts as different</i> to the question <i>What detail in the case decides it?</i> Together they give the tool <i>Picking in order (permutations)</i>.</p>
      <p><b>What to do.</b> Count the places to fill. Start with the whole pool for the first place and take one off for each place after it, and multiply. Stop when every place is filled.</p>
      <p><b>Don’t confuse it with</b> <i>Multiplying the choices (multiplication principle)</i>, where the list stays the same length, and with <i>Picking a group, order ignored (combinations)</i>, where the same picks in a different order count as one. The next card shows that difference with the same club.</p>`},
  {h:'Picking a group, order ignored (combinations)',
   b:`<p><b>What it is.</b> Choosing a group from one pool when only who is in the group matters, not the order they were picked in. Start by counting as if order mattered, then divide by the number of ways to order each group. Every group has been counted once for each order it could have been picked in, and the division removes the repeats.</p>
      <p><b>Example.</b> The same club of 10 chooses a committee of 3. All three have the same role, so Ana, Bo and Cy is the same committee as Cy, Ana and Bo.</p>
      <ol>
        <li>Count as if order mattered: 10 × 9 × 8 = 720.</li>
        <li>How many orders does one committee have? Three people can be put in order in 3 × 2 × 1 = 6 ways. So each committee was counted 6 times.</li>
        <li>Divide: 720 ÷ 6 = 120 different committees.</li>
      </ol>
      <p><b>Sounds like.</b> “How many different groups, teams or hands?” “Choose 3 from 10.” “Does the order matter?” “No, only who is in.”</p>
      <p><b>Catch it.</b> Ask yourself: if I swap two picks, do I get the same result? If yes, it is this. In the key, that is the answer <i>How many ways something can be picked or arranged</i> to the question <i>What is the question asking for?</i>, and the answer <i>A group is picked, and the order does not matter</i> to the question <i>What detail in the case decides it?</i> Together they give the tool <i>Picking a group, order ignored (combinations)</i>.</p>
      <p><b>What to do.</b> Count in order first. Then divide by the number of orders of one group: 2 for a group of 2, 6 for a group of 3, 24 for a group of 4 (4 × 3 × 2 × 1), 120 for a group of 5. Check that the answer is smaller than the in-order count.</p>
      <p><b>Don’t confuse it with</b> <i>Picking in order (permutations)</i>. Both start by picking in turn from one pool. The only difference is whether swapping two picks matters. Three different jobs: 720 ways. A committee of 3 with no jobs: 120. If swapping changes the result, do not divide.</p>`},
  {h:'Counting the opposite (complement rule)',
   b:`<p><b>What it is.</b> “At least one” can happen in many different ways, but “none at all” happens in just one way. So you work out the chance of none, and take it away from 1 (which is 100%). For several separate tries, the chance of none is the chance of “not” on each try, multiplied together. When the tries are independent, which means that the result of one does not change the chances of the next, the chance is the same on every try. When one result does change the next chance, you still multiply, but you work out each chance given what has already happened.</p>
      <p><b>Example.</b> An inspector tests 4 bulbs from a batch. Each bulb has a 10% chance of being faulty, and the bulbs do not affect each other. What is the chance that at least one is faulty?</p>
      <ol>
        <li>Counting “at least one” directly means adding up exactly one faulty, exactly two, exactly three and all four. That is a lot of cases.</li>
        <li>Count the opposite: no bulb is faulty. One bulb is fine with chance 0.9.</li>
        <li>Four bulbs are all fine: 0.9 × 0.9 × 0.9 × 0.9 = 0.6561.</li>
        <li>At least one faulty: 1 − 0.6561 = 0.3439, about 34%.</li>
      </ol>
      <p>Sometimes the chance changes as you go along. In a room of 3 people, how likely is it that at least two share a birthday? The opposite is that all three birthdays are different.</p>
      <ol>
        <li>The first person can have any birthday: 365 out of 365.</li>
        <li>The second must avoid the first person’s day: 364 out of 365.</li>
        <li>The third must avoid both days: 363 out of 365.</li>
        <li>Multiply: 365/365 × 364/365 × 363/365 = 0.992. At least two share: 1 − 0.992 = 0.008, about 0.8%.</li>
      </ol>
      <p>That is small for 3 people. The chance climbs quickly as the room fills up, and with 23 people it passes 50%. Unit Seven runs the full case.</p>
      <p><b>Sounds like.</b> “At least one.” “Any of them.” “One or more.” “At some point.” “Even once.”</p>
      <p><b>Catch it.</b> Ask yourself: does the question ask whether at least one of several things happens, and would “none of them” be easier to count? In the key, that is the answer <i>How likely it is that at least one of several things happens</i> to the question <i>What is the question asking for?</i>, and the answer <i>Counting “none of them” is far easier than counting “at least one”</i> to the question <i>What detail in the case decides it?</i> Together they give the tool <i>Counting the opposite (complement rule)</i>.</p>
      <p><b>What to do.</b> First, the chance of “not” on one try. Second, multiply that across all the tries. Third, subtract the result from 1. Before multiplying, ask whether one result changes the chances of the next. If it does not, as with the bulbs, multiply the same chance each time. If it does, as with the birthdays, work out each chance given what has already happened, and multiply those.</p>
      <p><b>Don’t confuse it with</b> adding up the chances. Four bulbs at 10% each do not make 40%: they make 34%, because adding counts the cases with two or more faulty bulbs more than once.</p>`},
  {h:'How rare it was to begin with (base rate)',
   b:`<p><b>What it is.</b> When a test or a clue points to something rare, most positive results can be false alarms. The reason is that the huge number of people who do not have it, even with a small error rate, outnumber the few who do. So the chance that you have it after a positive result depends on how rare it was to begin with (the base rate). The method is to imagine a big group of people and count.</p>
      <p><b>Example.</b> One person in 1,000 has a condition. A test finds 90% of the people who have it, and wrongly flags 5% of the people who do not. You test positive. How likely is it that you have it?</p>
      <p>Take 100,000 people. One in 1,000 has it, which is 100 people, and 99,900 do not.</p>
      <table class="k">
      <tr><th>Group</th><td>Test positive</td><td>Test negative</td></tr>
      <tr><th>Have it (100)</th><td>90</td><td>10</td></tr>
      <tr><th>Do not (99,900)</th><td>4,995</td><td>94,905</td></tr>
      </table>
      <ol>
        <li>The test finds 90% of the 100 who have it: 90 positives.</li>
        <li>It wrongly flags 5% of the 99,900 who do not: 4,995 positives.</li>
        <li>All the positives: 90 + 4,995 = 5,085. Only 90 of them really have it.</li>
        <li>The chance: 90 ÷ 5,085 = 0.0177, about 1.8%.</li>
      </ol>
      <p>A positive result raised the chance from 0.1% to 1.8%, which is a big change, and it is still 98 chances in 100 that you are fine.</p>
      <p><b>Sounds like.</b> “My result came back positive, and the lab says the test is very reliable.” “What are the chances I really have it?” “The alarm went off.” “The screening flagged her.”</p>
      <p><b>Catch it.</b> Ask yourself: is there a test result or a clue, is the thing it points to rare, and is the test imperfect? In the key, that is the answer <i>How likely something is, now that you have a test result or clue</i> to the question <i>What is the question asking for?</i>, and the answer <i>A rare thing and a test that is not perfect</i> to the question <i>What detail in the case decides it?</i> Together they give the tool <i>How rare it was to begin with (base rate)</i>.</p>
      <p><b>What to do.</b> Pick a round group size such as 10,000 or 100,000. Count how many have the thing, then how many of those test positive. Count how many do not have it but test positive anyway. Divide the real positives by all the positives. Do not answer with the test’s accuracy: that answers a different question. When a test is described as “99% accurate”, check what the number covers. It usually means the test catches 99% of the people who have the thing, and also wrongly flags 1% of the people who do not. Both of those errors are in the count above, and the second one matters most when the thing is rare.</p>
      <p><b>Don’t confuse it with</b> the accuracy itself. “How likely is a positive result if you are ill?” (90%) and “How likely are you ill if the result is positive?” (1.8%) are two different questions, and the gap between them is the base rate.</p>`},
  {h:'The five counting and chance tools side by side',
   b:`<p>The first question is <i>What is the question asking for?</i> The second is <i>What detail in the case decides it?</i> Here are their answers in the key’s exact words, with the tool each pair leads to. In each row, the first line answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>How many ways something can be picked or arranged<br><br>Several separate choices, each with its own list of options</td><td><b>Multiplying the choices (multiplication principle)</b></td></tr>
      <tr><td>How many ways something can be picked or arranged<br><br>Things are picked in turn, and a different order counts as different</td><td><b>Picking in order (permutations)</b></td></tr>
      <tr><td>How many ways something can be picked or arranged<br><br>A group is picked, and the order does not matter</td><td><b>Picking a group, order ignored (combinations)</b></td></tr>
      <tr><td>How likely it is that at least one of several things happens<br><br>Counting “none of them” is far easier than counting “at least one”</td><td><b>Counting the opposite (complement rule)</b></td></tr>
      <tr><td>How likely something is, now that you have a test result or clue<br><br>A rare thing and a test that is not perfect</td><td><b>How rare it was to begin with (base rate)</b></td></tr>
      </table>
      <p>The first three differ only in the second answer. Two quick tests sort them: is the list the same length at every pick (multiply the choices) or does it shrink (picking from one pool), and if it shrinks, does swapping two picks change the result (in order) or not (a group)?</p>`},
  {h:'Running the two questions on a counting case',
   b:`<p class="lead">Here is a case that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>You are putting together a party cheese board and want 2 different cheeses from the 6 on offer. How many different pairs could you choose?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>Counting and chances</i>. The words “how many different pairs” ask for a number of ways.</li>
        <li><b>What is the question asking for?</b> A number of ways to pick two from six. That is <i>How many ways something can be picked or arranged</i>.</li>
        <li><b>What detail in the case decides it?</b> Brie with cheddar is the same pair as cheddar with brie, and the two cheeses have no different roles. That is <i>A group is picked, and the order does not matter</i>. It is not <i>Several separate choices, each with its own list of options</i>, because picking one cheese uses it up. And it is not <i>Things are picked in turn, and a different order counts as different</i>, because swapping them changes nothing.</li>
        <li><b>Name the tool.</b> <i>Picking a group, order ignored (combinations)</i>.</li>
      </ol>
      <p>Working: count in order first. 6 choices for the first cheese and 5 for the second: 6 × 5 = 30. Each pair has been counted twice, once in each order (2 × 1 = 2). Divide: 30 ÷ 2 = 15 pairs.</p>
      <p>Change the case and the tool changes. If one cheese is to go in the centre and the other on the edge, so that the two have different roles, order matters and the count stays 30: <i>Picking in order (permutations)</i>. And if the case asked how likely it is that at least one of your 4 guests is allergic to dairy, each independently with a 1 in 20 chance, the first answer would be <i>How likely it is that at least one of several things happens</i>, and the tool would be <i>Counting the opposite (complement rule)</i>.</p>`}
  ],
  drill:{kind:'pick', key:'m5'} },
{ tag:'Six', title:'Taking a faulty claim apart',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can hear a claim with numbers in it, such as an advert, a headline or something a friend says, and name the question of the key that it skipped.</p>
      <p>Most wrong number claims are not arithmetic slips. The sums in them are often correct. The fault is that the claim used one kind of maths when the case needed another, or answered a different question from the one being asked. The questions of the key are exactly the questions such a claim fails to ask.</p>
      <p>The practice for this unit gives you ten claims. For each one, say the fault out loud or on paper first, name the question the claim skipped, in the key’s own words, and name the tool it should have used. Then reveal the answer and compare.</p>`},
  {h:'How to take a claim apart',
   b:`<p><b>What it is.</b> A way to test any claim that has numbers in it: rebuild the answer with the key, then compare your answer with the claim’s. A faulty claim almost always shows a gap at one particular question.</p>
      <p><b>Example.</b> A savings flyer says: “Earn 3% a year, and over 20 years you will have earned 60%.”</p>
      <ol>
        <li><b>What is the question about?</b> <i>Growth over time</i>: “a year”, “over 20 years”.</li>
        <li><b>At each step, what happens to the quantity?</b> Interest is paid on earlier interest, so <i>It is multiplied by the same number each time</i>: × 1.03 every year. The flyer added instead: 20 × 3 = 60.</li>
        <li><b>What are you trying to work out?</b> <i>The size, after multiplying a known number of times</i>: 20 years of it.</li>
        <li><b>Run the tool.</b> <i>Multiplying by the same number each time (exponential growth)</i>: 1.03 multiplied by itself 20 times is 1.806. You will have earned about 81%, not 60%.</li>
      </ol>
      <p>The gap is at the second question. The flyer’s arithmetic was right (20 × 3 = 60). Its tool was wrong, because it never asked what happens at each step.</p>
      <p><b>Sounds like.</b> A number followed by “so”, “which means” or “therefore”: “so it must be…”, “which means we are…”, “so that makes it…”</p>
      <p><b>Catch it.</b> Ask yourself: which question of the key did this claim skip? Say it in the key’s words. That is the fault.</p>
      <p><b>What to do.</b> Four steps. First, sort the case: <i>What is the question about?</i> Second, answer the two questions for that kind, from the case itself and not from the claim. Third, name the tool and run it with the claim’s own numbers. Fourth, compare your result with the claim’s. If they differ, the question where your answer and the claim’s assumption part ways is the one the claim skipped.</p>
      <p><b>Don’t confuse it with</b> a mistake in the arithmetic. If a claim’s sum is right and its conclusion is wrong, the tool was wrong. Check the question before you check the sum.</p>`},
  {h:'The questions faulty claims skip most often',
   b:`<p>These are the faults you will meet most often, with the question each one skips, in the key’s words, and the tool the claim should have used. In each row, the first line is the faulty claim, the second line is the question it skips, and the bold name is the tool.</p>
      <table class="k">
      <tr><td>Calls a steady rise “exponential”, because it is fast<br><br>At each step, what happens to the quantity?</td><td><b>Adding the same amount each time (linear growth)</b></td></tr>
      <tr><td>Adds percentages that should be multiplied<br><br>At each step, what happens to the quantity?</td><td><b>Multiplying by the same number each time (exponential growth)</b></td></tr>
      <tr><td>Reads a straight line on a chart without checking the axis<br><br>At each step, what happens to the quantity?</td><td><b>Equal space for each ×10 (log scale)</b>, then the multiplying tool</td></tr>
      <tr><td>Adds a rate up to get a doubling time<br><br>What are you trying to work out? How many steps it takes to reach a known size</td><td><b>How many steps to get there (logarithm)</b></td></tr>
      <tr><td>Quotes a test’s accuracy as the chance you are ill<br><br>What detail in the case decides it? A rare thing and a test that is not perfect</td><td><b>How rare it was to begin with (base rate)</b></td></tr>
      <tr><td>Adds chances up to get “certain”<br><br>What is the question asking for? How likely it is that at least one of several things happens</td><td><b>Counting the opposite (complement rule)</b></td></tr>
      <tr><td>Says a result is “due” after a run<br><br>What detail in the case decides it? Several separate choices, each with its own list of options</td><td><b>Multiplying the choices (multiplication principle)</b></td></tr>
      <tr><td>Compares sizes by one length: a width, a diagonal<br><br>What do you want to find? How the area or volume changes when the length changes</td><td><b>Area and volume grow faster than length (square–cube law)</b></td></tr>
      <tr><td>Adds two sides to get the third<br><br>What do you have to work with? Two sides of a right-angled triangle</td><td><b>Third side of a right-angled triangle (Pythagoras)</b></td></tr>
      <tr><td>Drops the days or items left over in a cycle<br><br>What do you want to find out about the number or numbers? Where a count lands after going round and round one loop</td><td><b>Remainder (mod)</b></td></tr>
      <tr><td>Stops a prime check too early<br><br>What do you do to settle it? Try dividing it by each prime up to its square root</td><td><b>Prime check</b></td></tr>
      </table>
      <p>Not every claim fits one row, and some tools do not appear here. The point is the habit: for any claim, ask which question it did not ask.</p>`},
  {h:'Taking apart a claim about a chart',
   b:`<p class="lead">Here is a claim that has not appeared yet. Work through it in the order of the key.</p>
      <p><i>A start-up shows a chart of its monthly sales as a perfectly straight line climbing across the page, and says: “Look, steady, reliable growth.” The vertical axis is labelled 1, 10, 100, 1,000 and 10,000, evenly spaced.</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>Growth over time</i>: sales, month after month.</li>
        <li><b>What did the claim skip?</b> It skipped reading the axis, and so it never asked <i>At each step, what happens to the quantity?</i> On an ordinary axis, a straight line does mean the same amount added each time. But this axis is evenly spaced for 1, 10, 100, 1,000 and 10,000, which means each ×10 gets the same space. That is <i>Equal space for each ×10 (log scale)</i>. On such an axis, a straight line means the quantity is multiplied by the same number each time.</li>
        <li><b>What are the real numbers?</b> If the line climbs one gap every month, sales are 10 in month 1, 100 in month 2, 1,000 in month 3 and 10,000 in month 4: multiplied by 10 each month. Steady adding would look like 10, 20, 30, 40.</li>
        <li><b>Name the tool.</b> The quantity is <i>Multiplying by the same number each time (exponential growth)</i>, and the chart draws it with <i>Equal space for each ×10 (log scale)</i>. The claim read a straight line as “steady”, and the first question it skipped was what happens at each step.</li>
      </ol>
      <p>What to do: always read the axis labels before you read the shape of a line. If the numbers on the axis are evenly spaced multiples of 10, a straight line is growth that multiplies, which is the opposite of calm.</p>`}
  ],
  drill:{kind:'err'} },
{ tag:'Seven', title:'Running the whole key',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a case that does not say which chapter it comes from, run it through the whole key from the first question to the name, and say which words in the case decided each answer.</p>
      <p>This is what real cases are like. A question about a loan, a ramp or a test result arrives with no label on it. You have learned the five kinds, the two questions for each kind, and the 22 named tools. Now you use all of it together.</p>
      <p>For each case in the practice, you read it, answer the first question, <i>What is the question about?</i>, then answer the two questions that belong to that kind, then name the tool. Between the case and the questions there is a readout, a list of all 22 tools. It crosses off the ones your answers have ruled out. You cannot tap it: it only shows you what is still possible.</p>
      <p>Your name and your route are counted separately. The route is the answers you gave to the questions. If you reach the right name through an answer the case does not support, that is flagged and counts as a miss, because recognising a familiar-looking case is the habit this course is built to replace. After you record an answer, you see the right name and the explanation: the key’s questions asked in order, the words in the case that decided each one, and what change to the case would change the tool.</p>`},
  {h:'The whole key on one page',
   b:`<p>This is the full key in the key’s exact words. Every question and answer is one you have already met in Units One to Five. In each table, the first line of a row answers the first question, the second line answers the second question, and the bold name is the tool.</p>
      <p><b>The first question:</b> <i>What is the question about?</i> Its five answers are <i>Whole numbers</i>, <i>A missing number</i>, <i>Growth over time</i>, <i>Counting and chances</i> and <i>Shapes and sizes</i>.</p>
      <p><b>Whole numbers.</b> The two questions are <i>What do you want to find out about the number or numbers?</i> and <i>What do you do to settle it?</i></p>
      <table class="k">
      <tr><td>Whether one number can be split evenly by anything smaller<br><br>Try dividing it by each prime up to its square root</td><td><b>Prime check</b></td></tr>
      <tr><td>What a number is made of, or what two numbers have in common (one number)<br><br>Keep dividing it into primes until only primes are left</td><td><b>Prime factors</b></td></tr>
      <tr><td>What a number is made of, or what two numbers have in common (two numbers)<br><br>Write both numbers as primes and compare them</td><td><b>Biggest shared piece or first line-up (GCD / LCM)</b></td></tr>
      <tr><td>Where a count lands after going round and round one loop<br><br>Divide by the loop size and keep only what is left over</td><td><b>Remainder (mod)</b></td></tr>
      <tr><td>Whether a number can be written exactly as a fraction<br><br>Show that no fraction can ever equal it (a proof)</td><td><b>A number with no exact fraction (irrational)</b></td></tr>
      </table>
      <p><b>A missing number.</b> The two questions are <i>How does the missing number show up?</i> and <i>What do you want out of it?</i></p>
      <table class="k">
      <tr><td>One missing number, appearing once and not squared<br><br>The same formula, turned around to find a different letter</td><td><b>Rearranging a formula</b></td></tr>
      <tr><td>One missing number, appearing once and not squared<br><br>A new amount, at a rate you already know</td><td><b>Scaling by a rate (proportion)</b></td></tr>
      <tr><td>Two missing numbers, linked by two facts<br><br>The one pair of numbers that fits both facts</td><td><b>Two facts, two unknowns (simultaneous equations)</b></td></tr>
      <tr><td>One missing number, multiplied by itself<br><br>When something reaches zero, or whether it ever does</td><td><b>A squared unknown (quadratic)</b></td></tr>
      </table>
      <p><b>Growth over time.</b> The two questions are <i>At each step, what happens to the quantity?</i> and <i>What are you trying to work out?</i></p>
      <table class="k">
      <tr><td>The same amount is added each time<br><br>The total, after adding the same amount again and again</td><td><b>Adding the same amount each time (linear growth)</b></td></tr>
      <tr><td>It is multiplied by the same number each time<br><br>The size, after multiplying a known number of times</td><td><b>Multiplying by the same number each time (exponential growth)</b></td></tr>
      <tr><td>It is multiplied by the same number each time<br><br>How many steps it takes to reach a known size</td><td><b>How many steps to get there (logarithm)</b></td></tr>
      <tr><td>Nothing is growing; the numbers just range from tiny to enormous<br><br>How to draw or compare numbers that range from tiny to enormous</td><td><b>Equal space for each ×10 (log scale)</b></td></tr>
      </table>
      <p><b>Counting and chances.</b> The two questions are <i>What is the question asking for?</i> and <i>What detail in the case decides it?</i></p>
      <table class="k">
      <tr><td>How many ways something can be picked or arranged<br><br>Several separate choices, each with its own list of options</td><td><b>Multiplying the choices (multiplication principle)</b></td></tr>
      <tr><td>How many ways something can be picked or arranged<br><br>Things are picked in turn, and a different order counts as different</td><td><b>Picking in order (permutations)</b></td></tr>
      <tr><td>How many ways something can be picked or arranged<br><br>A group is picked, and the order does not matter</td><td><b>Picking a group, order ignored (combinations)</b></td></tr>
      <tr><td>How likely it is that at least one of several things happens<br><br>Counting “none of them” is far easier than counting “at least one”</td><td><b>Counting the opposite (complement rule)</b></td></tr>
      <tr><td>How likely something is, now that you have a test result or clue<br><br>A rare thing and a test that is not perfect</td><td><b>How rare it was to begin with (base rate)</b></td></tr>
      </table>
      <p><b>Shapes and sizes.</b> The two questions are <i>What do you have to work with?</i> and <i>What do you want to find?</i></p>
      <table class="k">
      <tr><td>Two sides of a right-angled triangle<br><br>The third side of the right-angled triangle</td><td><b>Third side of a right-angled triangle (Pythagoras)</b></td></tr>
      <tr><td>One angle and one side<br><br>A length you cannot measure directly, using an angle</td><td><b>Length from an angle (trigonometry)</b></td></tr>
      <tr><td>Two things with the same shape but different sizes<br><br>A missing length, using the matching sides of the same shape</td><td><b>Same shape, different size (similar triangles)</b></td></tr>
      <tr><td>Two things with the same shape but different sizes<br><br>How the area or volume changes when the length changes</td><td><b>Area and volume grow faster than length (square–cube law)</b></td></tr>
      </table>
      <p><b>What to do.</b> When you are stuck on a case, come back to this page. Find the kind in the first question, read down that kind’s table until two lines match the case, and read off the tool. Then turn to the tool’s card for how to run it.</p>`},
  {h:'A full run, with the readout',
   b:`<p class="lead">Here is a case that has not appeared yet. Run it from the first question to the name, and watch the readout.</p>
      <p><i>At a market stall, 2 kg of tomatoes and 3 kg of onions cost €12 together. 1 kg of each costs €5. What does 1 kg of tomatoes cost?</i></p>
      <ol>
        <li><b>What is the question about?</b> <i>A missing number</i>. The price of tomatoes is not given, and the facts about what was bought pin it down. The readout starts with all 22 tools. This answer crosses off 18 of them. Left: Rearranging a formula, Scaling by a rate (proportion), Two facts, two unknowns (simultaneous equations) and A squared unknown (quadratic).</li>
        <li><b>How does the missing number show up?</b> There are two hidden prices, tomatoes and onions, and two facts about them: the first purchase and the second. That is <i>Two missing numbers, linked by two facts</i>. The readout drops to one tool: Two facts, two unknowns (simultaneous equations).</li>
        <li><b>What do you want out of it?</b> One price for tomatoes, which must fit both purchases. That is <i>The one pair of numbers that fits both facts</i>. The readout still shows one tool.</li>
        <li><b>Name the tool.</b> <i>Two facts, two unknowns (simultaneous equations)</i>.</li>
      </ol>
      <p>Working: call a kilogram of tomatoes T and a kilogram of onions O. The facts are T + O = 5 and 2T + 3O = 12. From the first, T = 5 − O. Put that into the second: 2 × (5 − O) + 3O = 12, so 10 − 2O + 3O = 12, so O = 2. Then T = 5 − 2 = 3. Tomatoes cost €3 a kilogram. Check both facts: 3 + 2 = 5, and 2 × 3 + 3 × 2 = 6 + 6 = 12.</p>
      <p>Change the case and the tool changes. If only the first purchase were known, with a single fact about two prices, there would be many answers. If the stall simply said “tomatoes €3 a kilo” and asked what 7 kg cost, the first question would still give <i>A missing number</i>, but the answers would change to <i>One missing number, appearing once and not squared</i> and <i>A new amount, at a rate you already know</i>, and the tool would be <i>Scaling by a rate (proportion)</i>.</p>`},
  {h:'Using the key on your own case',
   b:`<p><b>What it is.</b> The key is not only for the practice. Any question with numbers in your own life can be run through it, and the name tells you which method to use and which card to turn to.</p>
      <p><b>Example.</b> Your landlord says the rent, €900 now, will go up 4% a year. What will you pay in 5 years?</p>
      <ol>
        <li>Write the case in one sentence: “€900 rising 4% a year for 5 years: what then?”</li>
        <li><i>What is the question about?</i> “A year” and “rise 4%”: <i>Growth over time</i>.</li>
        <li><i>At each step, what happens to the quantity?</i> A percentage is a multiplier: × 1.04. That is <i>It is multiplied by the same number each time</i>. <i>What are you trying to work out?</i> The rent after 5 steps: <i>The size, after multiplying a known number of times</i>.</li>
        <li>The tool is <i>Multiplying by the same number each time (exponential growth)</i>. Run it: 900 × 1.04 × 1.04 × 1.04 × 1.04 × 1.04 = 900 × 1.2167 = about €1,095.</li>
        <li>Sense-check: 5 years of 4% should be a bit more than 5 × 4% = 20%, and 1,095 is 21.7% more than 900.</li>
      </ol>
      <p><b>Sounds like.</b> Every number question you meet: a bill, a quote, a loan, a recipe, a forecast, a test result.</p>
      <p><b>Catch it.</b> Write the case in one sentence that says what you know and what you want. Then find the giveaway words for each answer, and test each answer against them.</p>
      <p><b>What to do.</b> Run the questions in order. If two answers at one question both seem to fit, use the tests from the units: does doubling the input double the output (scaling, not rearranging); is there one loop or two (a remainder or a line-up); does the list stay the same length at each pick or shrink (multiply the choices or pick in order); is the difference or the ratio the same at each step (adding or multiplying). Then name the tool, turn to its card, follow its “What to do”, and check the answer by putting it back or by a sense-check of its size.</p>
      <p><b>Don’t confuse it with</b> a rule that works every time. The key is only as good as the case it is given. Check what it assumes: that the rate really stays the same, that separate tries really are separate, that growth really can carry on. If the case is not a pattern at all, as with a one-off jump, the answer is that no tool fits.</p>`}
  ],
  drill:{kind:'det'} },
];

const MATH = {
  id:'math', name:'Basic Math', rev:1,
  blurb:'Real-life maths taught as a key: sort a question about numbers into one of five kinds, answer two more questions, and land on a named tool you can run with real numbers.',
  topics:'Primes · Missing numbers · Growth · Chances · Shapes',
  intro:'Work out which kind of question a case is before you reach for a method. The key has three moves: sort it, answer two questions for that kind, name the tool. Your name and your route are scored separately.',
  falsLabel:'What would change the tool',
  outcomes: MATH_OUTCOMES,
  determination: { gateCode:'M1', steps:[MATH_GATE], stepsByGate:MATH_STEPS_BY_GATE },
  determinationIntro:`<p>You are running each case through the key. Sort it first, answer the two questions for that kind, and name the tool last.</p>
      <ol>
        <li>Read the case.</li>
        <li>Answer <i>What is the question about?</i> The later questions unlock in order, and they change depending on this answer.</li>
        <li>Answer the two questions that belong to that kind.</li>
        <li>Name the tool, and record your answer.</li>
      </ol>
      <p>The list of tools between the case and the first question is a readout, not a control. It crosses off the tools your answers have ruled out. Nothing there can be tapped.</p>
      <p>Your name and your route are scored separately. The right name reached through an answer the case does not support counts as a miss.</p>`,
  specimens: MATH_SPECIMENS,
  quickDrills: [
    {key:'m1', title:'Which kind',                  prompt:'What is the question about?', items:M1_DRILL, opts:M1_OPTS},
    {key:'m2', title:'Whole-number tools',          prompt:'Which tool settles it?',      items:M2_DRILL, opts:M2_OPTS},
    {key:'m3', title:'Missing numbers and shapes',  prompt:'Which tool settles it?',      items:M3_DRILL, opts:M3_OPTS},
    {key:'m4', title:'Growth tools',                prompt:'Which tool settles it?',      items:M4_DRILL, opts:M4_OPTS},
    {key:'m5', title:'Counting and chance tools',   prompt:'Which tool settles it?',      items:M5_DRILL, opts:M5_OPTS}
  ],
  errDrill: MATH_ERR,
  course: MATH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'m1', label:'Which kind'}, {key:'m2', label:'Whole-number tools'}, {key:'m3', label:'Missing numbers and shapes'},
    {key:'m4', label:'Growth tools'}, {key:'m5', label:'Counting and chance tools'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>This is a practical key, not the whole of maths.</b> It covers the 22 tools people use most in everyday life, worked with real numbers. It does not cover everything a maths course would.</li>
    <li><b>“I never use any of this” is half true.</b> You rarely do the long calculations by hand. But the questions come up all the time, and proportion, compounding, base rates and the square–cube law are used against you in prices and statistics whether or not you use them yourself.</li>
    <li><b>Rules of thumb are approximations.</b> The rule of 72 is a rounded logarithm and drifts at high rates. The birthday figure assumes birthdays are spread evenly over the year, which is very slightly false.</li>
    <li><b>Real chance problems are usually about the assumptions, not the arithmetic.</b> Whether separate tries really are separate, whether a sample looks like you, whether the quoted base rate applies to you: the formula cannot check these, and it quietly assumes them.</li>
    <li><b>Multiplying growth always breaks in the end.</b> Nothing multiplies for ever. Rumours run out of listeners and bacteria run out of food. A model that goes past its own assumptions is wrong even when the arithmetic is right.</li>
    <li><b>Some cases are not any of the 22 tools.</b> A one-off jump is one. When a case does not fit, say so and look for another kind of maths, instead of forcing a fit.</li>
    <li><b>Being bad at maths at school says more about the course than about you.</b> The point of a key like this is to make the sorting something you can learn on purpose.</li>
  </ul>`
};

