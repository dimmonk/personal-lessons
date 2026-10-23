// Strategy, lesson 1 "Goal, wish, or strategy?": the worked plan, the questions of the groups, the check and three held back for the review.
// The one rule (research ST5, ST10): a strategy names the challenge (what is in the way, and why), one approach to it, and actions that follow
// from that approach. With no challenge named, a plan that is only a target or a wish is a goal; one that lists things to do is a to-do list,
// even with a target on top. A challenge with actions that do not follow from one approach to it is a to-do list too. A number that fell is not
// a challenge until the plan says what made it fall. Every plan is an owner's own note; invented businesses.
(() => {
  const ONLY = ["goal", "todo", "strategy"];
  // what follows a wrong pick, by the right answer and then the pick; an item may give its own line
  const THEN = {
    goal: { todo: "It lists no real steps; it only says where the owner wants to be.", strategy: "No line says what is in the way, so there is nothing for a plan to get past." },
    todo: { goal: "It does list things to do, and with no challenge behind them they are a list.", strategy: "No line says what is in the way, so the steps have nothing to answer." },
    "todo-scattered": { goal: "It names a challenge and lists steps, but the steps do not follow from one way past it.", strategy: "The steps go in different directions: none of them is a way past the challenge it names." },
    strategy: { goal: "It does more than name a target: it says what is in the way and how the steps get past it.", todo: "The steps are not a loose list: each follows from the one approach to the challenge." }
  };
  const SLIPS = {
    goal: { strategy: "goal-as-strategy" }, todo: { strategy: "list-not-choice" }, "todo-scattered": { strategy: "list-not-choice" },
    strategy: { goal: "missed-strategy", todo: "missed-strategy" }
  };
  // a plan: who wrote it, its lines ([id, text, note?]), the challenge line (or null), the verdict ("todo-scattered": a to-do list that names a challenge)
  function kernel({ id, from, detail, lines, challenge, verdict, reason, deciding, then = {}, write, steps }) {
    const right = verdict === "todo-scattered" ? "todo" : verdict;
    const wrong = ONLY.filter(v => v !== right);
    return {
      id, strand: "kernel", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "plan", form: "note", from, detail,
        lines: lines.map(([lid, text, note]) => ({ id: lid, text, ...(note ? { note } : {}) })) }],
      asks: [
        { id: "line", kind: "tap", prompt: "Tap the line that says what is in the way.", in: "plan", right: challenge ? [challenge] : "none", none: "No line says what is in the way" },
        { id: "verdict", kind: "choose", prompt: "What is this plan?", from: "verdict", only: ONLY, right,
          then: Object.fromEntries(wrong.map(w => [w, then[w] || THEN[verdict][w]])),
          ...(Object.keys(SLIPS[verdict]).length ? { slips: SLIPS[verdict] } : {}) },
        ...(write ? [{ id: "write", kind: "text", prompt: "What would the plan need to say first? Write the missing line.", model: write }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: challenge ? [challenge, ...deciding.filter(d => d !== challenge)] : deciding,
      reason
    };
  }
  const TARGET = "That is a target: where the owner wants to be, not what is in the way.";
  const WISH = "That is a wish. It says nothing about what stands in the way.";
  const STEP = "That is a step to take, not what is in the way.";
  const FELL = "That is a number that fell. It does not say what made it fall.";
  const BACKGROUND = "That is background about the business. It says nothing is in the way.";
  const NOWHERE = "That sounds like an approach, but no line says what is in the way, so it answers nothing.";

  FC.items("strategy", [
    // ----- the worked plan: a strategy -----
    kernel({
      id: "w-bakery", from: "Dana’s plan for her bakery", detail: "Written in January",
      lines: [
        ["c1", "Since the supermarket opened its own bakery, our bread sales fell by a third: it sells a loaf for half our price."],
        ["c2", "We cannot beat that price, so we stop selling everyday bread on price and sell what the supermarket cannot make: whole cakes to order, for birthdays and weddings.", "That is the approach, the one way past the challenge."],
        ["c3", "Move our morning bread baker over to cakes.", STEP],
        ["c4", "Put cake photos and an order form on our website and in the window.", STEP],
        ["c5", "Keep only the three loaves our regulars buy with their coffee.", STEP]],
      challenge: "c1", verdict: "strategy", deciding: ["c1", "c2"],
      steps: [
        { id: "challenge", does: "Find what is in the way, and why.", working: "The first line: a supermarket sells bread at half Dana’s price, and that is why her bread sales fell.", ask: "line" },
        { id: "approach", does: "Find the one approach to it, then check the steps against it.", working: "The second line: stop competing on price and sell what the supermarket cannot make. Each step serves it: a baker moved to cakes, cakes shown and ordered, the bread cut back. So it is a strategy.", ask: "verdict" }],
      reason: "The first line says what is in the way and why: a rival selling bread at half the price. The second gives one way past it, and every step after it serves that way, so it is a strategy."
    }),

    // ----- the first group (the deciding lines marked) -----
    kernel({
      id: "p-landscape", from: "Luis’s plan for his landscaping crew", detail: "Written in the fall",
      lines: [
        ["c1", "Next year: sales of $600,000.", TARGET],
        ["c2", "Our crews sit idle all winter."],
        ["c3", "So we keep the crews busy all year: snow removal for the same homes and offices we mow for in summer.", "That is the approach to the challenge."],
        ["c4", "Buy two plows for the trucks we already have.", STEP],
        ["c5", "Sell one contract that covers mowing in summer and snow in winter.", STEP],
        ["c6", "Pay the crew a wage all year round, because a crew paid through the winter is still ours in April and does not need training again.", STEP]],
      challenge: "c2", verdict: "strategy", deciding: ["c2", "c3"],
      reason: "The short second line says what is in the way: crews idle all winter. Snow removal for the same customers is one way past it, and the plows, the year-round contract and the year-round wage all follow from it, so it is a strategy; the sales target on top does not change that."
    }),
    kernel({
      id: "p-cafe", from: "Priya’s plan for her cafe", detail: "Written in March",
      lines: [
        ["c1", "Turn the cafe into the place people who work from home sit and work on Mondays and Fridays.", "That is the approach. Look for what it answers."],
        ["c2", "Put a plug and fast Wi-Fi at every table.", STEP],
        ["c3", "Sell a weekday pass: coffee all day and a seat.", STEP],
        ["c4", "Since the office towers went to three days a week, the room is empty on Mondays and Fridays, the days the office workers stay home."],
        ["c5", "Keep the full lunch menu for Tuesday to Thursday, when the offices are full.", STEP]],
      challenge: "c4", verdict: "strategy", deciding: ["c4", "c1"],
      reason: "The line about the office towers says what is in the way: on Mondays and Fridays the customers stay home. Becoming the place they work from on those days is one way past it, and the plugs, the pass and the lunch days all fit it, so it is a strategy, even with the challenge written low on the page."
    }),
    kernel({
      id: "p-gym", from: "Mark’s plan for his gym", detail: "Written in December",
      lines: [
        ["c5", "We opened in 2019 in the old furniture store on Elm Street, and we now have 520 members and six trainers.", BACKGROUND],
        ["c1", "Be the number one gym in town.", WISH],
        ["c2", "Grow to 800 members by next December.", TARGET],
        ["c3", "Give every member a great experience.", WISH],
        ["c4", "Everyone works hard and smart.", WISH]],
      challenge: null, verdict: "goal", deciding: ["c1", "c2"],
      reason: "No line says what is in the way of 800 members; it is a target, three wishes and a line about how the gym began. With nothing to get past and no steps, it is a goal."
    }),
    kernel({
      id: "p-shop", from: "Ann’s plan for her gift shop", detail: "Written in January",
      lines: [
        ["c1", "Goal for the year: sales up 20%.", TARGET],
        ["c7", "So we push harder on getting our name out.", NOWHERE],
        ["c2", "Start an Instagram page.", STEP],
        ["c3", "Sell gift cards.", STEP],
        ["c4", "Open on Sundays.", STEP],
        ["c5", "Hire a part-time salesperson.", STEP],
        ["c6", "Paint a new sign out front.", STEP]],
      challenge: null, verdict: "todo", deciding: ["c1", "c2", "c4"],
      reason: "It lists five steps under a target, and “push harder” is an approach to nothing: no line says what is in the way of more sales. It is a to-do list."
    }),
    kernel({
      id: "p-plumb", from: "Ray’s plan for his plumbing business", detail: "Written in the spring",
      lines: [
        ["c1", "Launch a new logo and paint it on the vans.", STEP],
        ["c2", "We lose about one job in four because we cannot reach emergency calls the same day."],
        ["c3", "Start selling water heaters online.", STEP],
        ["c4", "Sponsor the high school football team.", STEP],
        ["c5", "Raise prices 5%, because the parts we buy cost more this year and we have not raised our prices since 2022.", STEP]],
      challenge: "c2", verdict: "todo-scattered", deciding: ["c2", "c1", "c3"],
      reason: "The second line names a real challenge: same-day emergency calls are lost. But none of the steps reaches those calls faster, so with no approach tying them to it, it is a to-do list."
    }),

    // ----- the second group (nothing marked) -----
    kernel({
      id: "q-salon", from: "Grace’s plan for her hair salon", detail: "Written in February",
      lines: [
        ["c1", "Our mission: make every client feel beautiful.", WISH],
        ["c2", "Become the best-loved salon on Main Street.", WISH],
        ["c3", "Reach $400,000 in sales.", TARGET]],
      challenge: null, verdict: "goal", deciding: ["c1", "c3"],
      write: "What stands in the way, and why. For example: “Half of new clients never book a second visit, because we have no evening times and they work days.”",
      reason: "It is a mission, a wish and a target, and no line says what stands in the way of them. That makes it a goal."
    }),
    kernel({
      id: "q-print", from: "Omar’s plan for his print shop", detail: "Written in September",
      lines: [
        ["c1", "Online printers undercut us on cards and flyers."],
        ["c2", "Our answer: become the shop local businesses call for rush jobs and tricky ones, and stop chasing small, simple orders.", "That is the approach to the challenge."],
        ["c3", "Promise same-day printing on orders in by 10 a.m.", STEP],
        ["c4", "Have one person check every file before it prints, so tricky jobs come out right.", STEP],
        ["c5", "Drop our cut-price business card deal.", STEP]],
      challenge: "c1", verdict: "strategy", deciding: ["c1", "c2"],
      reason: "The first line says what is in the way, in a few words: online printers beat Omar on price for simple orders. Becoming the shop for rush and tricky jobs is one way past it, and same-day printing, the file check and dropping the card deal all serve it, so it is a strategy."
    }),
    kernel({
      id: "q-truck", from: "Sam’s plan for his food truck", detail: "Written in May",
      lines: [
        ["c1", "Add a breakfast menu.", STEP],
        ["c2", "Repaint the truck.", STEP],
        ["c3", "A third of our weekday line gives up and leaves, because the wait reaches twenty minutes."],
        ["c4", "Start a loyalty card.", STEP],
        ["c5", "Go to the Saturday farmers market, because the crowd there is bigger than any weekday lunch we have had.", STEP]],
      challenge: "c3", verdict: "todo-scattered", deciding: ["c3", "c1", "c4"],
      reason: "The line about people leaving the line names the challenge: a twenty-minute wait drives away the people already in line. Breakfast, paint, a loyalty card and a Saturday market do nothing to serve them faster, so it is a to-do list."
    }),
    kernel({
      id: "q-daycare", from: "Ruth’s plan for her day care", detail: "Written in August",
      lines: [
        ["c1", "Our vision: the best start in life for every child.", WISH],
        ["c2", "Double the number of children we care for by 2028.", TARGET],
        ["c3", "Be known as the warmest day care in the county.", WISH],
        ["c4", "So we put the children first in everything we do.", NOWHERE]],
      challenge: null, verdict: "goal", deciding: ["c2"],
      reason: "A vision, a target and two wishes: no line says what stands in the way of doubling, and nothing says what to do. It is a goal."
    }),
    kernel({
      id: "q-heating", from: "Tom’s plan for his heating and cooling business", detail: "Written in January",
      lines: [
        ["c1", "Sales fell 12% last year.", FELL],
        ["c2", "Get sales back to where they were.", TARGET],
        ["c3", "Run a spring discount on tune-ups.", STEP],
        ["c4", "Mail a postcard to every past customer.", STEP]],
      challenge: null, verdict: "todo", deciding: ["c1", "c3"],
      reason: "“Sales fell 12%” is a number that fell, not a challenge: nothing says what made it fall. Under it are a target and two steps, so it is a to-do list."
    }),

    // ----- the check -----
    kernel({
      id: "k-hardware", from: "Joe’s plan for his hardware store", detail: "Written in March",
      lines: [
        ["c1", "Open at 6 a.m. for the contractors.", STEP],
        ["c2", "The home center across town carries more stock than we do and sells it all for less."],
        ["c3", "From now on we serve the people who need one part fast and advice with it, contractors and neighbors in the middle of a repair, not weekend shoppers.", "That is the approach to the challenge."],
        ["c4", "Keep staff on the floor who can tell you which part you need.", STEP],
        ["c5", "Close the garden section, which the home center does better.", STEP]],
      challenge: "c2", verdict: "strategy", deciding: ["c2", "c3"],
      reason: "The line about the home center says what is in the way: a bigger rival with lower prices. Serving people who need one part fast, with advice, is one way past it, and the early hours, the staff and closing the garden section all follow from it, so it is a strategy."
    }),
    kernel({
      id: "k-kitchens", from: "Lena’s plan for her kitchen remodeling firm", detail: "Written in December",
      lines: [
        ["c4", "We have built kitchens in this county for eleven years, and last year we finished 48 of them with a crew of nine.", BACKGROUND],
        ["c1", "This year we break $1 million in sales.", TARGET],
        ["c5", "We have built kitchens in this county for twelve years.", BACKGROUND],
        ["c2", "Be the first name people think of for kitchens in the county.", WISH],
        ["c3", "Every job done on time, every time.", WISH]],
      challenge: null, verdict: "goal", deciding: ["c1", "c2"],
      reason: "A target, two wishes and two lines of background about the firm, and no line says what is in the way of the target. It is a goal."
    }),
    kernel({
      id: "k-dentist", from: "Dr. Patel’s plan for her dental office", detail: "Written in June",
      lines: [
        ["c5", "This year we grow on every front at once.", NOWHERE],
        ["c1", "Get more five-star reviews online.", STEP],
        ["c2", "Buy a new X-ray machine.", STEP],
        ["c3", "Offer teeth whitening.", STEP],
        ["c4", "Send every patient a birthday card.", STEP]],
      challenge: null, verdict: "todo", deciding: ["c1", "c3"],
      reason: "Four steps, and no line says what problem they are meant to solve; growing on every front answers nothing named. It is a to-do list."
    }),
    kernel({
      id: "k-carwash", from: "Mike’s plan for his car wash", detail: "Written in April",
      lines: [
        ["c1", "Add a coffee stand by the exit.", STEP],
        ["c2", "Buy new brushes, because the old ones leave streaks on dark cars and customers have started to complain.", STEP],
        ["c3", "Start a TikTok page.", STEP],
        ["c4", "Rainy weeks bring no cars, but full wages."]],
      challenge: "c4", verdict: "todo-scattered", deciding: ["c4", "c1"],
      reason: "The last line names a real challenge: rainy weeks bring no cars while the wages stay the same. Coffee, brushes and a TikTok page do nothing about rainy weeks, so it is a to-do list."
    }),
    kernel({
      id: "k-tutor", from: "Kim’s plan for her tutoring business", detail: "Written in August",
      lines: [
        ["c1", "Free videos now teach what our recorded packs did."],
        ["c3", "Start every session with the student’s homework.", STEP],
        ["c2", "A tutor who checks the student’s own work every week and tells the parent how it is going is what we sell now: a video cannot give that.", "That is the approach to the challenge."],
        ["c4", "Send each parent a short progress note every Friday.", STEP],
        ["c5", "Stop selling the recorded lesson packs.", STEP]],
      challenge: "c1", verdict: "strategy", deciding: ["c1", "c2"],
      reason: "The first line says what is in the way: free videos took the market for recorded packs. A tutor who checks the student’s own work is one way past it, and the homework, the Friday notes and dropping the packs all fit it, so it is a strategy."
    }),
    kernel({
      id: "k-diner", from: "Carlos’s plan for his diner", detail: "Written in January",
      lines: [
        ["c1", "Profit fell to $40,000 last year.", FELL],
        ["c2", "Get profit back to $90,000.", TARGET],
        ["c3", "Be the best diner in the valley.", WISH]],
      challenge: null, verdict: "goal", deciding: ["c1", "c2"],
      reason: "Profit fell, but no line says what made it fall, so nothing is named as in the way. A target and a wish make it a goal."
    }),

    // ----- held back for the review -----
    kernel({
      id: "r-movers", from: "Bea’s plan for her moving company", detail: "Written in October",
      lines: [
        ["c1", "Our trucks are booked solid from May to August and half empty the rest of the year."],
        ["c2", "Storage and office moves do not depend on the moving season, and they will be our work for the quiet months.", "That is the approach to the challenge."],
        ["c3", "Rent a small warehouse for storage.", STEP],
        ["c4", "Offer offices a weekend move at a lower price from October to March.", STEP]],
      challenge: "c1", verdict: "strategy", deciding: ["c1", "c2"],
      reason: "The first line says what is in the way: trucks that sit half empty eight months a year. Storage and off-season office moves are one way past it, and both steps follow, so it is a strategy."
    }),
    kernel({
      id: "r-florist", from: "June’s plan for her flower shop", detail: "Written in January",
      lines: [
        ["c1", "Be the florist everyone in town loves.", WISH],
        ["c2", "Sell $250,000 this year.", TARGET]],
      challenge: null, verdict: "goal", deciding: ["c1", "c2"],
      reason: "A wish and a target, with nothing named as in the way and no steps. It is a goal."
    }),
    kernel({
      id: "r-garage", from: "Ed’s plan for his auto repair shop", detail: "Written in March",
      lines: [
        ["c1", "A three-week wait sends customers to the dealer."],
        ["c2", "Buy a new sign.", STEP],
        ["c3", "Sell tires online, because the tire shop on Route 9 closed and its old customers now order from far away.", STEP],
        ["c4", "Start a customer newsletter.", STEP]],
      challenge: "c1", verdict: "todo-scattered", deciding: ["c1", "c2"],
      reason: "The first line names a real challenge: a three-week wait sends customers to the dealer. A sign, online tires and a newsletter do not shorten the wait, so it is a to-do list."
    })
  ]);
})();
