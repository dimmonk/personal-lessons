// Civics, lesson 4: Who acted, and at which level (part 4). Sixteen invented news stories (a made-up town, paper and group; no real event), each asked two
// questions: which level of government acted, and what the one who acted did. One is worked, six are practice (two groups of three, one story from each
// level, on one topic), six are the check (two from each level), and three are kept for the review. The paper each comes from is handed out by
// civicsPress, so no paper goes with one level. Four local stories name the president, who did not act in them (the wrong idea of the lesson, tempted).
// items-shape.js turns each into a question.
(() => {
  const PAPERS = ["The Harbor Gazette", "The Capital Sun", "The Valley Courier", "The Metro Post", "The Lakeview Times"];
  const stories = [
    // worked
    { id: "l4-plows", worked: true, lvl: "local", br: "carries", head: "Mayor sends plows to school routes first",
      lines: ["Snow fell all night in Ridgefield, and the roads were still covered by morning.", "The mayor of Ridgefield ordered the city’s snow plows to clear the roads around schools first.", "Parents said the buses ran on time."],
      who: "the mayor of Ridgefield", did: "ordered the city’s snow plows to clear the roads around schools first", key: 2,
      why: "A mayor runs a city, and sending the plows is the city doing its work. No president is in this story." },
    // practice, group 1: schools
    { id: "l4-lunch", lvl: "federal", br: "writes", head: "Congress adds money for school lunches",
      lines: ["The House and the Senate both voted on Thursday to add money to the national school lunch program.", "The bill now goes to the president.", "Lunch workers said the extra money will help schools buy fresh fruit."],
      who: "Congress", did: "voted to add money to the national school lunch program", key: 1,
      why: "Congress writes the country’s laws, and a vote on a bill is writing one. That is federal." },
    { id: "l4-alarms", lead: "Parents have worried about school safety this year.", lvl: "state", br: "carries", head: "State checks school fire alarms",
      lines: ["The state fire marshal’s office checked 40 schools this week and ordered three to fix broken fire alarms.", "The three schools have until Friday.", "Parents were told the schools stayed open."],
      who: "the state fire marshal’s office", did: "checked 40 schools and ordered three to fix broken fire alarms", key: 1,
      why: "The fire marshal’s office belongs to the state, and checking schools is the state carrying out its safety rules." },
    { id: "l4-bell", lead: "Many parents have complained about early mornings.", lvl: "local", br: "writes", head: "School board moves start time",
      lines: ["The Brookside school board voted 4 to 1 on Monday to start high school classes at 8:30 a.m. next fall.", "Classes now begin at 7:45.", "The president said in a speech last spring that teenagers need more sleep, and parents quoted him at the meeting."],
      who: "the Brookside school board", did: "voted 4 to 1 to start high school classes at 8:30 a.m. next fall", key: 1,
      why: "A school board is a local government, and its vote makes a rule for its own schools. The president only gave a speech; the board acted." },
    // practice, group 2: driving and roads
    { id: "l4-eye", lvl: "state", br: "writes", head: "Lawmakers pass eye test for license renewals",
      lines: ["The state senate and the state house of representatives passed a bill on Tuesday that makes drivers take an eye test to renew a license.", "The governor has not said whether she will sign it.", "Drivers now renew by mail."],
      who: "the state legislature", did: "passed a bill that makes drivers take an eye test to renew a license", key: 1,
      why: "A state legislature writes the state’s laws, and driver’s licenses are a state matter." },
    { id: "l4-pipe", lead: "Main Street has been busy all week.", lvl: "local", br: "carries", head: "City crews close Main Street",
      lines: ["Ridgefield’s public works department closed Main Street on Monday to repair a broken water pipe.", "Crews said the street will reopen on Thursday.", "The president has asked Congress for money to replace old water pipes across the country, but none of it has reached Ridgefield."],
      who: "Ridgefield’s public works department", did: "closed Main Street to repair a broken water pipe", key: 1,
      why: "Public works is part of the city, and its crews are doing the city’s work. The president asked for money; the city acted." },
    { id: "l4-trucks", lead: "Highway traffic is heavy this month.", lvl: "federal", br: "carries", head: "Inspectors pull trucks off the road",
      lines: ["Inspectors from the federal Department of Transportation checked 300 trucks at a highway stop on Tuesday and pulled 40 off the road for broken brakes.", "The drivers can return once the brakes are fixed.", "Another stop is planned for next month."],
      many: true, who: "inspectors from the federal Department of Transportation", did: "checked 300 trucks and pulled 40 off the road for broken brakes", key: 1,
      why: "A federal department is part of the executive branch, and its inspectors are enforcing federal safety rules." },
    // check
    { id: "l4-oil", lvl: "federal", br: "judges", head: "Judge fines shipping company",
      lines: ["A federal judge ruled on Friday that a shipping company must pay a $2 million fine for dumping oil into a river.", "The judge said the dumping broke a federal pollution law.", "The company said it will pay."],
      who: "a federal judge", did: "ruled that a shipping company must pay a $2 million fine for dumping oil into a river", key: 1,
      why: "A judge settles a dispute and says what a law means, and a federal judge sits in the federal courts." },
    { id: "l4-park", lvl: "federal", br: "writes", head: "Senate passes new national park bill",
      lines: ["The Senate voted 62 to 38 on Wednesday to create a new national park along the coast.", "The House passed the same bill last month.", "It now goes to the president."],
      who: "the Senate", did: "voted 62 to 38 to create a new national park along the coast", key: 1,
      why: "The Senate is one part of Congress, which writes the country’s laws." },
    { id: "l4-pay", lvl: "state", br: "judges", head: "State supreme court backs teacher pay law",
      lines: ["The state supreme court ruled on Tuesday that a state law on teacher pay does not break the state constitution.", "Five of the seven judges agreed.", "A teachers’ union had asked the court to strike the law down."],
      who: "the state supreme court", did: "ruled that a state law on teacher pay does not break the state constitution", key: 1,
      why: "A court settles disputes about what a law means, and a state supreme court belongs to the state." },
    { id: "l4-guard", lead: "Rain has fallen for four days.", lvl: "state", br: "carries", head: "Governor sends Guard to flood towns",
      lines: ["The governor ordered the state’s National Guard on Thursday to help towns along the river after the floods.", "About 400 soldiers will fill sandbags and move families to shelters.", "The river is expected to crest on Saturday."],
      who: "the governor", did: "ordered the state’s National Guard to help towns along the river after the floods", key: 1,
      why: "A governor leads the state’s executive branch, and sending the Guard is the state doing its job of keeping people safe." },
    { id: "l4-fireworks", lead: "Summer is coming.", lvl: "local", br: "writes", head: "County bans fireworks on county land",
      lines: ["The Lakeview County board voted 3 to 2 on Wednesday to ban fireworks on county land.", "Fines start at $100.", "The ban starts in May."],
      who: "the Lakeview County board", did: "voted 3 to 2 to ban fireworks on county land", key: 1,
      why: "A county board is a local government, and its vote makes a rule for the county." },
    { id: "l4-fire", lvl: "local", br: "carries", head: "Firefighters save old warehouse",
      lines: ["Brookside firefighters put out a fire at an empty warehouse early Monday.", "No one was hurt.", "The president thanked firefighters across the country in a speech the same day."],
      many: true, who: "Brookside firefighters", did: "put out a fire at an empty warehouse", key: 1,
      why: "The fire department is part of the city, doing the city’s work of keeping people safe. The president only gave thanks." },
    // kept for the review
    { id: "l4-sailors", lead: "The sea was rough on Sunday.", lvl: "federal", br: "carries", head: "Coast Guard rescues four sailors",
      lines: ["The Coast Guard rescued four sailors from a sinking boat off the coast on Sunday.", "A helicopter lifted them out of the water.", "All four are in good health."],
      who: "the Coast Guard", did: "rescued four sailors from a sinking boat", key: 1,
      why: "The Coast Guard is part of the federal government, doing its job at sea." },
    { id: "l4-bird", lvl: "state", br: "writes", head: "Lawmakers pick a state bird",
      lines: ["The state legislature voted on Monday to make the cardinal the official state bird.", "A fourth-grade class had asked for the change.", "The students watched from the gallery."],
      who: "the state legislature", did: "voted to make the cardinal the official state bird", key: 1,
      why: "A state legislature writes the state’s laws, and naming a state bird is a state law." },
    { id: "l4-trees", lvl: "local", br: "carries", head: "City plants 200 trees",
      lines: ["Ridgefield’s parks department planted 200 trees in Pine Park on Saturday.", "The president had asked every town to plant trees this year.", "Volunteers helped dig."],
      who: "Ridgefield’s parks department", did: "planted 200 trees in Pine Park", key: 1,
      why: "The parks department is part of the city, doing the city’s work. The president only asked." }
  ];
  FC.items("civics", civicsPress(stories, PAPERS).map(s => civicsStory(s, "level")));
})();
