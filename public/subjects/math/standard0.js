/* ===================== SUBJECT: BASIC MATH ===================== */

const MATH_OUTCOMES = [
  {id:'prime',     n:'Primality test',          group:'whole'},
  {id:'factor',    n:'Prime factorisation',     group:'whole'},
  {id:'gcdlcm',    n:'GCD / LCM',               group:'whole'},
  {id:'modrem',    n:'Remainders (mod)',        group:'whole'},
  {id:'irrat',     n:'Irrational — no fraction',group:'whole'},

  {id:'rearr',     n:'Rearranging a formula',   group:'unknown'},
  {id:'prop',      n:'Proportion',              group:'unknown'},
  {id:'simul',     n:'Simultaneous equations',  group:'unknown'},
  {id:'quad',      n:'Quadratic / discriminant',group:'unknown'},

  {id:'lin',       n:'Linear growth',           group:'growth'},
  {id:'expg',      n:'Exponential growth',      group:'growth'},
  {id:'logsolve',  n:'Logarithm — solve for n', group:'growth'},
  {id:'logscale',  n:'Log scale',               group:'growth'},

  {id:'multprin',  n:'Multiplication principle',group:'chance'},
  {id:'comb',      n:'Combinations',            group:'chance'},
  {id:'perm',      n:'Permutations',            group:'chance'},
  {id:'complement',n:'Complement rule',         group:'chance'},
  {id:'baserate',  n:'Base rate / conditional', group:'chance'},

  {id:'pyth',      n:'Pythagoras',              group:'shape'},
  {id:'trig',      n:'Trig ratio',              group:'shape'},
  {id:'similar',   n:'Similar triangles',       group:'shape'},
  {id:'sqcube',    n:'Square–cube law',         group:'shape'}
];

const MATH_GATE = { code:'M1', label:'What kind of question is this?', options:[
  { id:'whole',   n:'Whole numbers',      sub:'what divides what',          keeps:['prime','factor','gcdlcm','modrem','irrat'] },
  { id:'unknown', n:'An unknown quantity',sub:'pinned down by constraints', keeps:['rearr','prop','simul','quad'] },
  { id:'growth',  n:'Growth & scale',     sub:'changing, or spanning orders of magnitude', keeps:['lin','expg','logsolve','logscale'] },
  { id:'chance',  n:'Counting & chance',  sub:'possibilities, or odds',     keeps:['multprin','comb','perm','complement','baserate'] },
  { id:'shape',   n:'Shape & distance',   sub:'lengths, angles, areas',     keeps:['pyth','trig','similar','sqcube'] }
]};

const MATH_STEPS_BY_GATE = {
  whole: [
    { code:'W1', label:'What is being asked of the number', options:[
        {id:'split', n:'Whether it breaks apart at all',            keeps:['prime']},
        {id:'parts', n:'What it is built out of',                   keeps:['factor','gcdlcm']},
        {id:'cycle', n:'Where it lands after something repeats',    keeps:['modrem']},
        {id:'exact', n:'Whether an exact value exists at all',      keeps:['irrat']}
    ]},
    { code:'W2', label:'What actually settles it', options:[
        {id:'divtest',   n:'Trying divisors up to its square root',       keeps:['prime']},
        {id:'unique',    n:'Breaking one number into primes — one unique way', keeps:['factor']},
        {id:'shared',    n:'Comparing two numbers’ prime ingredients',    keeps:['gcdlcm']},
        {id:'remainder', n:'Dividing and keeping only the remainder',     keeps:['modrem']},
        {id:'proof',     n:'A proof that no fraction can equal it',       keeps:['irrat']}
    ]}
  ],
  unknown: [
    { code:'A1', label:'How the unknown appears', options:[
        {id:'once', n:'One unknown, entering once and linearly',      keeps:['rearr','prop']},
        {id:'sq',   n:'One unknown, multiplied by itself', sub:'an x² is in there', keeps:['quad']},
        {id:'two',  n:'Two unknowns, tied together by two facts',     keeps:['simul']}
    ]},
    { code:'A2', label:'What you want out of it', options:[
        {id:'isolate',  n:'The same formula, solved for a different letter', keeps:['rearr']},
        {id:'scale',    n:'A fourth number, given a ratio that holds',       keeps:['prop']},
        {id:'crossing', n:'The one place where both conditions hold at once',keeps:['simul']},
        {id:'roots',    n:'Where a quantity hits zero — or whether it ever does', keeps:['quad']}
    ]}
  ],
  growth: [
    { code:'G1', label:'How the quantity changes each step', options:[
        {id:'add',    n:'The same amount is added each step',        keeps:['lin']},
        {id:'mult',   n:'The same factor multiplies it each step',   keeps:['expg','logsolve']},
        {id:'spread', n:'It isn’t changing — the numbers just span orders of magnitude', keeps:['logscale']}
    ]},
    { code:'G2', label:'What is unknown', options:[
        {id:'total',   n:'A running total that grows by a fixed amount', keeps:['lin']},
        {id:'size',    n:'The size after a known number of steps',       keeps:['expg']},
        {id:'steps',   n:'The number of steps to reach a known size',    keeps:['logsolve']},
        {id:'display', n:'How to plot or compare the numbers at all',    keeps:['logscale']}
    ]}
  ],
  chance: [
    { code:'C1', label:'What the question turns on', options:[
        {id:'arrange', n:'How many ways something can be chosen or arranged', keeps:['multprin','comb','perm']},
        {id:'atleast', n:'The chance that at least one of many things happens', keeps:['complement']},
        {id:'given',   n:'A chance revised after a test result or a clue',    keeps:['baserate']}
    ]},
    { code:'C2', label:'The decisive detail', options:[
        {id:'slots', n:'Independent slots, each with its own menu',        keeps:['multprin']},
        {id:'group', n:'A group picked out, and order is irrelevant',      keeps:['comb']},
        {id:'order', n:'The same items in another order counts as different', keeps:['perm']},
        {id:'none',  n:'"None of them" is far easier to count than "at least one"', keeps:['complement']},
        {id:'rare',  n:'A rare condition and an imperfect test',           keeps:['baserate']}
    ]}
  ],
  shape: [
    { code:'S1', label:'What you have to work with', options:[
        {id:'twosides', n:'Two sides around a right angle, no angles given', keeps:['pyth']},
        {id:'angleside',n:'An angle and a side',                             keeps:['trig']},
        {id:'samesh',   n:'Two objects of the same shape, different size',   keeps:['similar','sqcube']}
    ]},
    { code:'S2', label:'What you want', options:[
        {id:'third',    n:'The remaining side of a right triangle',          keeps:['pyth']},
        {id:'unreach',  n:'A length you cannot measure directly, from an angle', keeps:['trig']},
        {id:'ratiolen', n:'A missing length, from a matching ratio',         keeps:['similar']},
        {id:'areavol',  n:'How area or volume changed when length changed',  keeps:['sqcube']}
    ]}
  ]
};

const M1_OPTS = ['Whole numbers','An unknown quantity','Growth & scale','Counting & chance','Shape & distance'];
const M1_DRILL = [
  {q:'Two gears with 12 and 18 teeth are meshed. After how many turns does the marked pair of teeth meet again?',
   a:'Whole numbers', w:'Divisibility. The answer is the lowest common multiple of 12 and 18 — nothing here is growing, and nothing is uncertain.'},
  {q:'A rumour spreads by each person telling two new people a day. How many know it after two weeks?',
   a:'Growth & scale', w:'Multiplied by three each day, not increased by a fixed number. That single word — multiplied — decides the whole branch.'},
  {q:'A recipe for four people needs 300 g of rice. You are cooking for seven.',
   a:'An unknown quantity', w:'One unknown, one ratio that holds. This is the branch you genuinely do use daily — proportion.'},
  {q:'A padlock has four dials, each with the digits 0–9. How many codes are there?',
   a:'Counting & chance', w:'Counting possibilities. No number is being divided, nothing is growing over time.'},
  {q:'A 16-inch pizza costs twice what an 8-inch one costs. Is that the same deal?',
   a:'Shape & distance', w:'Areas, not lengths. The branch is shape; the tool inside it is the square–cube law.'},
  {q:'Today is Tuesday. What day is it in 100 days?',
   a:'Whole numbers', w:'A cycle of seven and a remainder — modular arithmetic. It looks like a calendar question and is really a division question.'}
];

const M2_OPTS = ['Prime','Composite','Neither'];
const M2_DRILL = [
  {q:'91', a:'Composite', w:'7 × 13. The classic trap — it fails no obvious divisibility rule, so people stop testing too early. You must go up to √91 ≈ 9.5, which means testing 7.'},
  {q:'97', a:'Prime', w:'√97 ≈ 9.8, so you only test 2, 3, 5 and 7. None divide it. Four tests, done.'},
  {q:'1', a:'Neither', w:'Not prime and not composite, by definition. If 1 were prime, every number would have infinitely many factorisations and the fundamental theorem of arithmetic would collapse.'},
  {q:'2', a:'Prime', w:'The only even prime. Every other even number has 2 as a factor by construction.'},
  {q:'51', a:'Composite', w:'3 × 17. Digit sum 5 + 1 = 6, divisible by 3 — the fastest test after checking for even.'},
  {q:'143', a:'Composite', w:'11 × 13. √143 ≈ 12, so 11 is inside the range you must test. Another one people call prime by giving up early.'},
  {q:'101', a:'Prime', w:'√101 ≈ 10, so test 2, 3, 5, 7. Nothing divides it.'}
];

const M3_OPTS = ['Rearranging a formula','Proportion','Simultaneous equations','Quadratic','Pythagoras','Trig ratio','Similar triangles','Square–cube law'];
const M3_DRILL = [
  {q:'The manual gives F = 9C/5 + 32. Your thermostat reads 68 °F and you want it in Celsius.',
   a:'Rearranging a formula', w:'Nothing is unknown in the sense of hidden — you have the relationship and need it solved for the other letter. Inverse operations, in reverse order.'},
  {q:'A 5 m ladder stands with its base 1.5 m from the wall. How far up the wall does it reach?',
   a:'Pythagoras', w:'Two sides around a right angle, no angle given, third side wanted.'},
  {q:'A tree casts a 12 m shadow. You are 1.7 m tall and cast a 1.8 m shadow at the same moment.',
   a:'Similar triangles', w:'Two triangles of the same shape and different size — sun angle identical. Matching ratios give the missing height without measuring it.'},
  {q:'You have 15 notes, all fives and tens, worth €120 in total. How many of each?',
   a:'Simultaneous equations', w:'Two unknowns, two independent facts. Either fact alone leaves infinitely many answers.'},
  {q:'A roof rises at 30° over a horizontal run of 4 m. How much higher is the ridge than the eaves?',
   a:'Trig ratio', w:'An angle and one side, wanting a length you would need a ladder to measure. tan 30° × 4.'},
  {q:'A stone dropped from a bridge has height 20 − 5t² metres after t seconds. When does it hit the water?',
   a:'Quadratic', w:'One unknown, squared, and you want where the quantity reaches zero. Two roots come out; one is negative and gets discarded on physical grounds.'},
  {q:'Paint covers 12 m² per litre. Your wall is 30 m².',
   a:'Proportion', w:'One unknown, one ratio that holds across it. The whole of it is a single multiplication, which is why it never felt like maths.'},
  {q:'You scale a saucepan recipe up by doubling every dimension of the pot. Does it hold twice as much?',
   a:'Square–cube law', w:'Volume goes as the cube of length: doubling every dimension gives eight times the capacity, not two.'}
];

const M4_OPTS = ['Linear','Exponential','Neither — a one-off jump'];
const M4_DRILL = [
  {q:'He puts €200 into savings every month, in a shoebox. "It’s growing exponentially."',
   a:'Linear', w:'A fixed amount added each period is linear, however large the amount. "Exponential" in everyday speech usually just means "fast", and that is the single most common maths error in ordinary conversation.'},
  {q:'A colony of bacteria divides every 20 minutes.',
   a:'Exponential', w:'Multiplied by a fixed factor each period. Doubling every 20 minutes is a thousandfold in about three hours.'},
  {q:'The rent went from €900 to €1,400 when the landlord changed, then stayed there for three years.',
   a:'Neither — a one-off jump', w:'A step change, not a growth rate. Fitting any growth curve to a single jump is how people talk themselves into false projections.'},
  {q:'A debt at 19% APR, unpaid, with the interest charged on the balance including previous interest.',
   a:'Exponential', w:'Interest on interest is multiplication by 1.19 each year. This is the compounding that credit works on, and it is the reason a balance you ignore does not grow by a steady amount.'},
  {q:'A car loses a fixed €1,500 of value every year in the dealer’s table.',
   a:'Linear', w:'A fixed subtraction each year. Real depreciation is closer to a fixed percentage — which would be exponential decay — so the table is a simplification.'},
  {q:'Every person who hears the rumour tells two new people the next day.',
   a:'Exponential', w:'Multiplied by three each day. After 20 days it exceeds the population of most countries, which is the standard tell that a model has left reality behind.'}
];

const M5_OPTS = ['Multiplication principle','Combinations','Permutations','Complement rule','Base rate'];
const M5_DRILL = [
  {q:'A padlock has four dials, each 0–9. How many codes?',
   a:'Multiplication principle', w:'Independent slots, each with its own menu: 10 × 10 × 10 × 10 = 10,000. Nothing is being removed from a pool.'},
  {q:'Six numbers are drawn from 49. How many possible tickets?',
   a:'Combinations', w:'Order of the balls is irrelevant to whether you won — 13,983,816 tickets. If order mattered it would be 720 times larger.'},
  {q:'Eight runners in a final. How many possible gold–silver–bronze results?',
   a:'Permutations', w:'The same three runners in a different order is a different result: 8 × 7 × 6 = 336.'},
  {q:'Twenty-three people in a room. What is the chance that two share a birthday?',
   a:'Complement rule', w:'Counting "at least one match" directly means counting an enormous number of cases. Counting "no match at all" is one clean product, then subtract from 1. The answer is about 50.7%.'},
  {q:'A test is 99% accurate. The disease affects 1 person in 10,000. You test positive.',
   a:'Base rate', w:'Out of a million people, about 100 have it and about 10,000 healthy people test positive anyway. Roughly a 1% chance you are ill — the accuracy figure alone tells you almost nothing.'},
  {q:'A menu has 4 starters, 6 mains and 3 desserts. How many three-course meals?',
   a:'Multiplication principle', w:'4 × 6 × 3 = 72. Independent slots again — the giveaway is that choosing one course never removes an option from another.'}
];

const MATH_ERR = [
  {q:'"Red has come up six times in a row, so black is due."',
   w:'The wheel has no memory. Independent trials: the chance stays the same every spin. The gambler’s fallacy is the mirror image of the base-rate error — both come from treating a probability as a physical force rather than a bookkeeping ratio.'},
  {q:'"My savings are growing exponentially" — said of a fixed €200 a month.',
   w:'Fixed amount added each period is linear. The word only earns its keep when the increase is proportional to the current size, so the increase itself grows.'},
  {q:'"The test is 99% accurate and I tested positive, so I’m 99% likely to have it."',
   w:'Accuracy is P(positive | ill). You want P(ill | positive). With a rare condition the false positives from the huge healthy majority swamp the true positives. The base rate is the missing number, and the claim never asks for it.'},
  {q:'"Prime numbers are the textbook example of maths you never use."',
   w:'Every HTTPS connection you have ever made rests on the asymmetry between multiplying two large primes and factorising the product. It is unused by you in the same sense that the gearbox is: constantly, and never by hand.'},
  {q:'"The 16-inch pizza is twice the price of the 8-inch, so it’s the same value."',
   w:'Doubling the diameter quadruples the area. Length scales as n, area as n², volume as n³ — the square–cube law, which also governs why large animals have thick legs and why a doubled pot holds eight times as much.'},
  {q:'"Statistically, 1 in 4 people are X, and there are four of us, so one of us is."',
   w:'A rate over a population is not a quota over a sample. Four independent draws at 1/4 gives about a 68% chance of at least one — and a 32% chance of none. This is a complement-rule calculation being replaced by a division.'}
];

const MATH_SPECIMENS = [
  {q:'Someone tells you 91 is prime. You have thirty seconds and no calculator to decide whether to believe them.',
   sub:{M1:['whole'],W1:['split'],W2:['divtest']}, outcome:'prime',
   why:'M1 is whole numbers; the only thing asked is whether it breaks apart. Trial division to √91 ≈ 9.5 means testing 2, 3, 5, 7 — and 7 × 13 = 91. Four tests, no calculator.',
   fals:'If the number were large — say 30 digits — trial division stops being the tool and you need a probabilistic primality test. The route changes with scale, not with the question.'},
  {q:'Two meshed gears carry 12 and 18 teeth. A tooth on each is marked with paint. You want to know how many turns of the small gear before the two marks meet again.',
   sub:{M1:['whole'],W1:['parts'],W2:['shared']}, outcome:'gcdlcm',
   why:'Two numbers, and the question is about what they share. The marks realign at the lowest common multiple of 12 and 18, which is 36 — three turns of the small gear, two of the large.',
   fals:'If the gears were not meshed but driven independently at unrelated speeds, this stops being a divisibility question and becomes one about ratios of real numbers.'},
  {q:'Today is a Tuesday. A delivery is promised in 100 days and you want the weekday without counting on a calendar.',
   sub:{M1:['whole'],W1:['cycle'],W2:['remainder']}, outcome:'modrem',
   why:'A cycle of seven and a remainder: 100 ÷ 7 leaves 2, so two days past Tuesday is Thursday. The dividend is irrelevant — only the remainder survives.',
   fals:'Nothing about the calendar makes this harder except a leap-year boundary, which affects the date but never the seven-day cycle.'},
  {q:'You have fifteen banknotes, all fives and tens, and they come to €120 exactly. You want to know how many of each you are holding.',
   sub:{M1:['unknown'],A1:['two'],A2:['crossing']}, outcome:'simul',
   why:'Two unknowns, and two independent facts about them — the count and the total. Either fact alone leaves many answers; together they leave exactly one: six fives and nine tens.',
   fals:'A third denomination in the pile gives three unknowns and only two facts — underdetermined, and no amount of algebra fixes that.'},
  {q:'A stone is dropped from a bridge. Its height above the water is 20 − 5t² metres after t seconds, and you want to know when it lands.',
   sub:{M1:['unknown'],A1:['sq'],A2:['roots']}, outcome:'quad',
   why:'One unknown, squared, and the question is where the quantity reaches zero. t = 2 seconds. The other root, t = −2, is arithmetically real and physically discarded.',
   fals:'If you wanted the height at a given time rather than the time at a given height, no equation-solving is needed at all — you would just substitute.'},
  {q:'Paint covers twelve square metres a litre. The wall is thirty square metres and you are standing in the shop.',
   sub:{M1:['unknown'],A1:['once'],A2:['scale']}, outcome:'prop',
   why:'One ratio, holding across the problem: 30 ÷ 12 = 2.5 litres. This is the branch that people do use daily, which is exactly why it stopped feeling like mathematics.',
   fals:'Two coats, or absorbent bare plaster, changes the ratio but not the tool. A wall so large that a different paint is used would break the proportion itself.'},
  {q:'A friend says his savings are growing exponentially. He puts two hundred euros in a shoebox on the first of every month.',
   sub:{M1:['growth'],G1:['add'],G2:['total']}, outcome:'lin',
   why:'A fixed amount added each period is linear, regardless of the size of the amount. Exponential requires the increase to be proportional to what is already there.',
   fals:'Move the money into an account paying compound interest and the same story becomes genuinely exponential — the shoebox is what makes it linear.'},
  {q:'A rumour starts with one person. Each person who hears it tells two new people the following day, and you want to know the reach after two weeks.',
   sub:{M1:['growth'],G1:['mult'],G2:['size']}, outcome:'expg',
   why:'Multiplied by three each day, and the unknown is the size after a known number of steps: 3¹⁴, about 4.8 million.',
   fals:'The model fails the moment it exceeds the number of people who have not yet heard it — which is why real spread curves flatten into an S rather than continuing upward.'},
  {q:'Your account pays 7% a year. A colleague says your money will roughly double in ten years, and you want to know where the ten came from.',
   sub:{M1:['growth'],G1:['mult'],G2:['steps']}, outcome:'logsolve',
   why:'Multiplication each period, and the unknown is the number of periods: solve 1.07ⁿ = 2, which is n = log 2 / log 1.07 ≈ 10.2. The rule of 72 is this logarithm, rounded for mental use.',
   fals:'If the rate itself changed year to year there is no single exponent to solve for, and the rule of 72 stops applying.'},
  {q:'Twenty-three people are in a room and someone bets you that two of them share a birthday. You want to know whether to take it.',
   sub:{M1:['chance'],C1:['atleast'],C2:['none']}, outcome:'complement',
   why:'"At least one match" is enormous to count directly; "no match at all" is a single product — 365/365 × 364/365 × … — and one minus it gives 50.7%. Decline the bet.',
   fals:'Birthdays are not quite uniformly distributed across the year, which nudges the real figure slightly higher, not lower.'},
  {q:'A screening test is 99% accurate. The condition it screens for affects about one person in ten thousand. Your result comes back positive.',
   sub:{M1:['chance'],C1:['given'],C2:['rare']}, outcome:'baserate',
   why:'Of a million people, roughly 100 have it and about 9,999 healthy people test positive anyway. Your chance of being ill is near 1%, not 99%. The accuracy figure alone answers a different question than the one you are asking.',
   fals:'If the condition were common — one in ten rather than one in ten thousand — the same 99% accuracy would make a positive result genuinely alarming. The base rate, not the test, does the work.'},
  {q:'Six numbers are drawn from forty-nine. Someone asks how many different tickets exist.',
   sub:{M1:['chance'],C1:['arrange'],C2:['group']}, outcome:'comb',
   why:'A group is picked out and the order of the draw does not affect whether you won: 49!/(6!·43!) = 13,983,816.',
   fals:'If the prize depended on matching the balls in drawn order, the same problem becomes a permutation and the count is 720 times larger.'},
  {q:'A five-metre ladder is standing with its base a metre and a half from the wall. You want to know what height it reaches.',
   sub:{M1:['shape'],S1:['twosides'],S2:['third']}, outcome:'pyth',
   why:'Two sides around a right angle, no angle given, third side wanted: √(25 − 2.25) ≈ 4.77 m.',
   fals:'If the ground sloped, the angle at the base is no longer a right angle and Pythagoras does not apply — you would need the cosine rule.'},
  {q:'A sixteen-inch pizza is priced at exactly twice the eight-inch. Someone at the table says that makes them the same value.',
   sub:{M1:['shape'],S1:['samesh'],S2:['areavol']}, outcome:'sqcube',
   why:'Same shape, different size, and the question is what happened to area. Doubling the diameter quadruples the area — the large one is twice the price for four times the pizza.',
   fals:'A deeper base or a wider crust ring on the small one eats into the advantage. The scaling law holds for the geometry; the topping is an empirical matter.'}
];

const MATH_COURSE = [
{ tag:'One', title:'Why none of it stuck',
  cards:[
  {h:'You were taught the procedure, not the question',
   b:`<p class="lead">The complaint is almost always true about the procedure and almost always false about the question. Nobody completes the square at the supermarket. But "how much is this actually growing?" and "how many ways can this go?" are ordinary questions, and school handed you the answers to them in a form that hid what they were for.</p>
      <p>So this course runs backwards from how it was taught. Instead of a method looking for a problem, you start with a situation and work out <i>which question it is</i>. Once the question is named, the procedure is looked up — that part was never the skill.</p>
      <div class="note">Throughout, a right answer reached by the wrong route counts as a miss. If you cannot say <i>which question</i> decided it, you have pattern-matched a school exercise, not identified a problem.</div>`},
  {h:'The five questions',
   b:`<table class="k">
      <tr><th>M1</th><td><b>What kind of question is this?</b><br>whole numbers / an unknown quantity / growth &amp; scale / counting &amp; chance / shape &amp; distance<span class="tell">The fastest discriminator — it decides which key you even need.</span></td></tr>
      <tr><th>M2</th><td><b>What exactly is unknown, and what is given?</b><span class="tell">Most people can’t answer this, which is why the sum feels impossible rather than merely unfamiliar.</span></td></tr>
      <tr><th>M3</th><td><b>Does it change by adding, or by multiplying?</b><span class="tell">The single most consequential distinction in everyday numeracy.</span></td></tr>
      <tr><th>M4</th><td><b>What is the nearest look-alike tool, and what separates them?</b></td></tr>
      <tr><th>M5</th><td><b>What would make this the wrong tool?</b><br>keeps a method from being applied out of habit</td></tr>
      </table>
      <p>M1 and M2 do most of the work. M3 catches the most common live error. The last two are what stop a tool being used past the edge of where it holds.</p>`},
  {h:'M1 routes you to a key',
   b:`<p>Answer M1 and you have already chosen which part of this course applies:</p>
      <ul>
        <li><b>Whole numbers</b> — primes, factors, remainders. What divides what. <span class="tell">Lesson Two</span></li>
        <li><b>An unknown quantity</b> — algebra: one relationship, or two, pinning a number down. <span class="tell">Lesson Three</span></li>
        <li><b>Growth &amp; scale</b> — exponentials and logarithms. <span class="tell">Lesson Four</span></li>
        <li><b>Counting &amp; chance</b> — combinatorics and probability. <span class="tell">Lesson Five</span></li>
        <li><b>Shape &amp; distance</b> — Pythagoras, trig, similarity, scaling laws. <span class="tell">Lesson Three</span></li>
      </ul>
      <p>These are genuinely different kinds of question. Treating a growth question as an arithmetic one, or a conditional-probability question as a straight-probability one, is not a slip in the calculation — it is a mis-sort at M1, and no amount of care further down recovers from it.</p>`},
  {h:'The trap: recognising a school exercise',
   b:`<p>The failure mode this course is built against is reaching for the tool the wording resembles rather than the one the situation needs.</p>
      <div class="warn"><strong>"Two trains leave a station" triggers a method; a real situation triggers nothing.</strong> That is the whole gap. School problems were pre-sorted for you — the chapter heading told you which tool to use. Life does not come with chapter headings, and the sorting is the part you were never drilled on.</div>
      <p>So M1 is drilled first, on its own, before any tool at all.</p>`}
  ],
  drill:{kind:'pick', key:'m1'} },

{ tag:'Two', title:'Primes and what divides what',
  cards:[
  {h:'Primes are the atoms',
   b:`<p class="lead">A prime is a whole number above 1 divisible only by 1 and itself. That definition is dull. What makes it load-bearing is the <b>fundamental theorem of arithmetic</b>: every whole number above 1 is a product of primes in exactly one way.</p>
      <p>60 is 2 × 2 × 3 × 5 and there is no second route to it. Not "usually", not "if you factor carefully" — exactly one. That uniqueness is what makes primes the atoms rather than merely an odd category, and it is why 1 is deliberately excluded: admit it, and every number would have infinitely many factorisations.</p>
      <span class="tell">Tell: a question about what a number is <i>built from</i> is a factorisation question. A question about whether it breaks apart <i>at all</i> is a primality question. They feel identical and take different work.</span>`},
  {h:'How you actually test one',
   b:`<p>Trial division, stopping at the square root. To test 91 you try 2, 3, 5, 7 — and stop, because √91 ≈ 9.5.</p>
      <p>Why the square root? If <i>n</i> has a factor above √n, it must also have the matching one below it. Checking past the square root is checking the same pairs a second time from the other end.</p>
      <div class="note">This one bound turns testing 91 from ninety divisions into four, and it is the reason 91 is the standard trap: people test 2, 3 and 5, find nothing, and declare it prime — having stopped one divisor early.</div>`},
  {h:'Where primes are used constantly, and never by hand',
   b:`<p>Multiplying two 300-digit primes takes a computer no time. Recovering those two primes from the product is, as far as anyone has publicly demonstrated, infeasible. That asymmetry — easy one way, hard the other — is the whole of RSA.</p>
      <p>Every HTTPS connection you have ever made has leaned on it. So the honest form of "I never use primes" is: you use them the way you use a gearbox — constantly, and never by hand.</p>
      <span class="tell">Elsewhere: hash tables size themselves to primes to spread collisions; cicadas emerge on 13- and 17-year cycles, which are prime precisely because that minimises coincidence with predator cycles.</span>`},
  {h:'The rest of the whole-number kit',
   b:`<table class="k">
      <tr><th>GCD</th><td>The largest number dividing both. Reducing a fraction; cutting a 96 × 60 cm sheet into the largest equal squares.</td></tr>
      <tr><th>LCM</th><td>The smallest number both divide. When two meshed gears realign; when two schedules of different lengths coincide again.</td></tr>
      <tr><th>mod</th><td>Divide and keep only the remainder. Weekdays, clock arithmetic, IBAN and ISBN check digits, and every hashing scheme in use.</td></tr>
      <tr><th>irrational</th><td>Some quantities are no fraction at all. The diagonal of a 1 × 1 square is √2, and the proof that no fraction equals it is two lines long and about 2,400 years old.</td></tr>
      </table>
      <p>The drill next is primality only, because that is where the early-stopping error lives.</p>`}
  ],
  drill:{kind:'pick', key:'m2'} },

{ tag:'Three', title:'Unknowns and shapes',
  cards:[
  {h:'An equation is a constraint, not a puzzle',
   b:`<p class="lead">An equation says: whatever this number is, it satisfies this. Solving is not cleverness — it is undoing the operations in reverse order until the unknown stands alone.</p>
      <p>What decides which tool you need is not difficulty. It is <b>how many unknowns there are, and how they enter</b>:</p>
      <table class="k">
      <tr><th>Rearrange</th><td>One unknown, entering once. You have the relationship and want it solved for a different letter. <span class="tell">°F to °C; a mortgage formula solved for the payment.</span></td></tr>
      <tr><th>Proportion</th><td>One ratio holding across the problem. <span class="tell">Paint coverage, recipe scaling, unit prices — the one you genuinely use weekly.</span></td></tr>
      <tr><th>Simultaneous</th><td>Two unknowns, two independent facts. <span class="tell">Fifteen notes worth €120. Either fact alone leaves many answers.</span></td></tr>
      <tr><th>Quadratic</th><td>The unknown multiplied by itself. <span class="tell">Anything under gravity; anything where area is fixed and sides are not.</span></td></tr>
      </table>`},
  {h:'The discriminant answers a question worth asking',
   b:`<p>Before solving <i>ax² + bx + c = 0</i>, the quantity <i>b² − 4ac</i> tells you whether any real solution exists at all — positive means two, zero means one, negative means none.</p>
      <p>"Is there any answer?" is a better first question than "what is the answer?", and it is the only part of the quadratic apparatus that generalises into ordinary judgment: knowing that a set of constraints admits no solution is itself the result.</p>
      <div class="note">Two unknowns and one fact is underdetermined — infinitely many answers, and no method fixes that. Recognising an underdetermined problem stops a lot of wasted effort, in and out of mathematics.</div>`},
  {h:'Shape: four things worth keeping',
   b:`<table class="k">
      <tr><th>Pythagoras</th><td>Two sides around a right angle give the third. <span class="tell">Ladders, diagonals, whether the sofa clears the corner.</span></td></tr>
      <tr><th>Trig ratio</th><td>An angle and one side give any other side. <span class="tell">Heights you cannot climb; roof pitch; ramp gradients.</span></td></tr>
      <tr><th>Similar triangles</th><td>Same shape, different size — matching ratios give the missing length. <span class="tell">Measuring a tree by its shadow, with no trigonometry at all.</span></td></tr>
      <tr><th>Square–cube</th><td>Scale a length by n: area scales by n², volume by n³. <span class="tell">Pizza sizes, TV diagonals, doubling a recipe in a pot.</span></td></tr>
      </table>`},
  {h:'The square–cube law is the one that pays',
   b:`<p>It is the least taught and the most used. A 16-inch pizza has four times the area of an 8-inch, not twice. A 65-inch TV has about 45% more screen than a 55-inch, though the number on the box rose by 18%. A pot with every dimension doubled holds eight times as much and takes far longer to heat through.</p>
      <p>It also explains things that look like biology: large animals need disproportionately thick legs because weight grows with volume while bone strength grows with cross-sectional area. Same law, different subject.</p>
      <span class="tell">Tell: any time a single length is quoted for something you care about by area or volume — screens, pizzas, pipes, tanks — the quoted number is understating the difference.</span>`}
  ],
  drill:{kind:'pick', key:'m3'} },

{ tag:'Four', title:'Growth you cannot picture',
  cards:[
  {h:'Adding versus multiplying',
   b:`<p class="lead">This is the distinction that matters most and gets confused most. <b>Linear:</b> the same amount is added each period. <b>Exponential:</b> the same factor multiplies it each period, so the increase itself grows.</p>
      <p>€200 a month into a shoebox is linear, however impressive the total. A balance rising 7% a year is exponential, however dull the percentage. In everyday speech "exponential" has come to mean "fast", which is why people call the shoebox exponential and a debt at 19% merely expensive.</p>
      <span class="tell">Tell: ask what happens between two consecutive periods. If the difference is constant, it is linear. If the ratio is constant, it is exponential.</span>`},
  {h:'Doubling time, and the rule of 72',
   b:`<p>Human intuition about exponentials is bad, reliably and in one direction: we underestimate. The repair is not a better feel for curves; it is a number — <b>the doubling time</b>.</p>
      <p>Divide 72 by the percentage rate and you get roughly the years to double. At 7%, about ten years. At 3%, about twenty-four. At 19% on an unpaid card, under four.</p>
      <div class="note">The rule of 72 is a logarithm rounded for mental arithmetic: the exact answer is log 2 / log(1 + r). It is accurate to within a few percent for any rate you meet in ordinary life.</div>`},
  {h:'A logarithm is a question, not a button',
   b:`<p>The question is: <b>what exponent gets me there?</b> If growth is ×1.07 a year and you want to know when the money doubles, you are solving 1.07ⁿ = 2 — and n is the logarithm.</p>
      <p>Exponentials answer "how big after n steps". Logarithms answer "how many steps to reach that size". They are the same relationship read from opposite ends, and school taught them a year apart, which is most of why they feel unrelated.</p>`},
  {h:'Log scales, and how they mislead',
   b:`<p>When numbers span orders of magnitude, plotting them raw is useless — the small ones flatten to nothing. A log scale gives each ×10 the same width.</p>
      <p>You have been reading them for years: Richter (7.0 releases about 32× the energy of 6.0), decibels, pH, star magnitudes, film speed.</p>
      <div class="warn"><strong>The cost is that a log axis makes explosive growth look like a gentle straight line.</strong> A chart of a doubling quantity looks alarming on a linear axis and calm on a log one. Neither is dishonest; you just have to know which you are reading, and a great many published charts do not label it prominently.</div>`}
  ],
  drill:{kind:'pick', key:'m4'} },

{ tag:'Five', title:'Counting and chance',
  cards:[
  {h:'Count the slots, then ask whether order matters',
   b:`<table class="k">
      <tr><th>Slots</th><td><b>Multiplication principle</b> — independent choices, each with its own menu. 4 starters × 6 mains × 3 desserts = 72. <span class="tell">Tell: picking one thing never removes an option elsewhere.</span></td></tr>
      <tr><th>Order matters</th><td><b>Permutations</b> — gold, silver, bronze from 8 runners: 8 × 7 × 6 = 336.</td></tr>
      <tr><th>Order doesn’t</th><td><b>Combinations</b> — 6 lottery balls from 49: 13,983,816. Order irrelevant to whether you won, so divide out the 720 orderings.</td></tr>
      </table>
      <p>Nearly every counting mistake is answering one of these with the method for another. Ask the order question explicitly, out loud, before counting anything.</p>`},
  {h:'The complement trick',
   b:`<p class="lead">When a question asks for the chance of <b>at least one</b>, count the opposite instead and subtract from 1. "At least one" is an enormous number of cases; "none at all" is usually a single product.</p>
      <p>Twenty-three people, any shared birthday: computing it directly is a nightmare, and computing "all birthdays different" is one clean chain — 365/365 × 364/365 × … — which comes to about 0.493. So the answer is 50.7%, and it surprises people every time.</p>
      <span class="tell">Tell: the words "at least one" in a probability question are an instruction to flip it.</span>`},
  {h:'Base rates',
   b:`<p>A test is 99% accurate. The condition affects 1 in 10,000. You test positive. Most people say 99%. The answer is about 1%.</p>
      <p>Take a million people: about 100 have it, of whom 99 test positive. About 999,900 do not, of whom roughly 9,999 test positive anyway. Your positive is one of about 10,098 — of which 99 are real.</p>
      <div class="warn"><strong>"99% accurate" answers P(positive given ill). You are asking P(ill given positive).</strong> They are different numbers and the gap between them is the base rate. This same inversion drives false confidence in DNA matches, security screening, and any rare-event alarm.</div>`},
  {h:'Independence, and the fallacy that follows it',
   b:`<p>Six reds in a row does not make black due. The wheel has no memory, and each spin is independent.</p>
      <p>The mirror error: "1 in 4 people are X, there are four of us, so one of us is." A rate over a population is not a quota over a sample. Four independent draws at 1/4 gives about a 68% chance of at least one — and 32% of none. Which is, again, the complement rule.</p>
      <span class="tell">Tell: before combining probabilities, say whether the events are independent. If you cannot say, you cannot multiply.</span>`}
  ],
  drill:{kind:'pick', key:'m5'} },

{ tag:'Six', title:'Faulty claims',
  cards:[
  {h:'Where the errors actually happen',
   b:`<p class="lead">Almost none of the numerical errors people make in ordinary life are arithmetic. They are mis-sorts at M1, or a tool applied past its edge.</p>
      <p>The six claims in this drill are the ones you will meet most often. Each fails at a specific question — usually M3 (adding versus multiplying) or the base rate — and none of them fails because someone got a sum wrong.</p>
      <p>For each one, state the fault out loud before revealing it. Name the question the claim skipped.</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Everything so far has drilled one branch at a time. Now you run the full sequence on unlabelled situations, none of which announce which chapter they came from.</p>
      <p>For each: answer M1, then the two questions specific to that branch, and only then name the tool. A readout between the situation and the questions crosses off tools your answers have eliminated.</p>
      <h3>How this is scored</h3>
      <p>Your <b>name</b> and your <b>route</b> are counted separately. Getting the right tool from the wrong answers is flagged and counts as a miss — because recognising a familiar-looking problem is exactly the habit this course is trying to replace.</p>
      <div class="note">Naming the tool is where this stops. Executing it is a lookup, and always was.</div>`}
  ],
  drill:{kind:'det'} }
];

const MATH = {
  id:'math', name:'Basic Math', rev:1,
  blurb:'The high-school syllabus, sorted by the question each piece answers rather than the procedure it uses — primes, growth, chance, and the scaling law nobody taught you.',
  topics:'Primes · Growth & logs · Counting & chance · Scaling laws',
  intro:'Work out which question a situation is before reaching for a method. A right tool named by the wrong route is scored as a miss.',
  falsLabel:'What would change the tool',
  outcomes: MATH_OUTCOMES,
  determination: { gateCode:'M1', steps:[MATH_GATE], stepsByGate:MATH_STEPS_BY_GATE },
  determinationIntro:`<p>You are running each situation through the key. Sort it first, work the two questions for that branch, and name the tool last.</p>
      <ol>
        <li>Read the situation.</li>
        <li><b>Step 1</b> — which kind of question is this? The later steps unlock in order, and change depending on this answer.</li>
        <li><b>Steps 2–3</b> — the two questions specific to that branch.</li>
        <li><b>Step 4</b> — now name the tool, and record your determination.</li>
      </ol>
      <p>The strip between the situation and step 1 is a readout, not a control. It crosses off tools your answers have ruled out. Nothing there is tappable.</p>
      <p>Your name and your route are scored separately. Right tool from the wrong steps counts as a miss.</p>`,
  specimens: MATH_SPECIMENS,
  quickDrills: [
    {key:'m1', title:'Which branch',    prompt:'Which kind of question is this (M1)?', items:M1_DRILL, opts:M1_OPTS},
    {key:'m2', title:'Prime or not',    prompt:'Prime, composite, or neither?',        items:M2_DRILL, opts:M2_OPTS, plain:true},
    {key:'m3', title:'Which tool',      prompt:'Which tool settles it?',               items:M3_DRILL, opts:M3_OPTS},
    {key:'m4', title:'Growth check',    prompt:'Linear, exponential, or neither?',     items:M4_DRILL, opts:M4_OPTS},
    {key:'m5', title:'Counting rule',   prompt:'Which counting rule applies?',         items:M5_DRILL, opts:M5_OPTS}
  ],
  errDrill: MATH_ERR,
  course: MATH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'m1', label:'Which branch'}, {key:'m2', label:'Prime or not'}, {key:'m3', label:'Which tool'},
    {key:'m4', label:'Growth check'}, {key:'m5', label:'Counting rule'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>This is a sorting key, not a syllabus.</b> It teaches you which question a situation is, and stops there. Executing the method — the long division, the algebra, the actual integral — is a separate skill and mostly a lookup.</li>
    <li><b>"Never used in daily life" is half true.</b> The procedures genuinely are unused by hand. The questions are not, and several of these — proportion, compounding, base rates, the square–cube law — are used against you commercially whether or not you use them yourself.</li>
    <li><b>The rules of thumb are approximations.</b> The rule of 72 is a rounded logarithm; it drifts at high rates. The birthday figure assumes uniform birthdays, which is very slightly false.</li>
    <li><b>Real probability problems are usually about the model, not the arithmetic.</b> Whether events are independent, whether a sample is representative, whether the base rate quoted applies to you — those are judgment calls that the formula cannot make and will silently assume.</li>
    <li><b>Exponential models always break.</b> Nothing compounds forever; rumours run out of listeners, bacteria run out of sugar. A model that projects past its own assumptions is wrong even when the arithmetic is right.</li>
    <li><b>School mathematics is a small and old corner of the subject.</b> Almost none of what working mathematicians do resembles anything in this key, and "I was bad at maths at school" is evidence about a curriculum more than about a mind.</li>
    <li><b>Numeracy is not a personality.</b> The point of a key like this is to make the sorting explicit so it can be learned deliberately, not to sort people into those who see it and those who don’t.</li>
  </ul>`
};

FC.legacy('math', MATH);
