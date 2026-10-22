// Civics, lesson 7: Who is telling you (part 7). Sixteen invented pages and posts (a made-up town, paper and group; no real group or page). Two forms:
// a page of search results about a source or a claim, where you tap the one to open first, and a story or post with where it reached you, where you decide
// to take it as it stands or check before you rely on it (the one rule, CIVICS_SOURCE_RULE in items-shape.js).
// Search results: the right one is an outside report that says who is behind the source, or the original record (the bill, the transcript, the office
// that runs the thing). The wrong ones are the source under its own name, however official it looks or however much it seems to ask about itself (a .org, a seal, "nonpartisan", "who funds us?"),
// someone's telling (a post, a video, a comment), a paid result, or an outside page that names no one behind it. Nothing marks a page as the source's own
// but its name, as in a real list of results, and the right one stands first, second, third and fourth in equal number across the eight pages.
// Take or check: both halves of the rule are put against each other (a paper you checked with a sudden alarming story; the original record you went to
// yourself, with an unfamiliar name; an official-looking site you have not looked up, with an ordinary story). One is worked, seven are practice, five are
// the check, and three are kept for the review. items-shape.js turns each into a question.
(() => {
  const OWN_PAGE = "This is the source speaking about itself, whatever its name or look.";
  const PAID = "A paid result is someone paying to be seen, not a check.";
  const results = [
    // worked (right: 2nd)
    { id: "l7-safe", worked: true, situation: "A flyer in your mailbox says a group called Safe Streets Now wants a new state law. You have never heard of the group. You search its name and see these four results.",
      results: [
        { text: "SafeStreetsNow.org: Who pays for us? Our funding, explained by us", note: OWN_PAGE },
        { text: "The Harbor Gazette: Who pays for Safe Streets Now? A look at its donors", ok: true },
        { text: "Safe Streets Now: Donate today", note: OWN_PAGE },
        { text: "Sponsored: Safe Streets Now, trusted by police", note: PAID }],
      steps: [{ id: "want", does: "Say what you want to know", working: "You want to know who is behind the group." },
        { id: "leave", does: "Leave the group’s own pages", working: "The page titled “Who pays for us?” sits on the group’s own site, so its answer is the group’s word about itself. A report by people outside the group can say who pays for it.", ask: "open" }],
      why: "A report by people who do not work for the group can tell you who is behind it. The group’s own pages, even one titled “Who pays for us?”, say only what the group wants you to read." },
    // practice (right: 4th, 1st, 3rd)
    { id: "l7-truth", situation: "A post says a new federal law will ban cash. It comes from a page called Daily Truth Report. You search the page’s name.",
      results: [
        { text: "Daily Truth Report: Who runs this site? Read our own story", note: OWN_PAGE },
        { text: "Daily Truth Report: About us. “Trusted by millions.”", note: OWN_PAGE },
        { text: "The Metro Post: “We are the honest news,” a statement from Daily Truth Report, printed as sent", note: "A paper you know can print a source’s own words. This is still the source speaking about itself." },
        { text: "The Capital Sun: Who runs the Daily Truth Report? We asked its owners", ok: true }],
      why: "A paper that went and asked who runs the page tells you more than the page says about itself, even when another paper prints that statement." },
    { id: "l7-mail", situation: "A friend sends a screenshot: “Congress just passed a law ending the mail on Saturdays!” You want the bill’s own words. You search the claim.",
      results: [
        { text: "Congress.gov, the record of Congress: the bill’s page, with its full text and every vote", ok: true },
        { text: "National Postal Facts Center (.org, with an eagle seal): the official word, Saturday mail ends now", note: "A seal and a .org can be put on any site. This one is telling you about the bill, not showing it." },
        { text: "A video: Saturday mail is dead!", note: "A video about a law is someone’s telling of it, not the law." },
        { text: "A post by a friend of a friend, shared 4,000 times", note: "Many shares do not make a post the original." }],
      why: "The original of a bill is its page in Congress’s own record. Everything else, however official it looks, is someone’s telling of it." },
    { id: "l7-ban", situation: "A post says the Ridgefield City Council voted to ban all cars downtown. You want to know if it is true. You search the claim.",
      results: [
        { text: "CityHallFacts.org: The downtown car ban, the official facts", note: "“Official” and .org are words anyone can use. Nothing says who runs this site." },
        { text: "The Downtown Driver: The car ban is real, share now", note: "A paper’s kind of name says nothing about who is behind it, and this page tells you to share, not what the vote said." },
        { text: "Ridgefield City Council: minutes of Tuesday’s meeting, with every vote", ok: true },
        { text: "The Harbor Gazette: Opinion: Why I would ban every car downtown", note: "An opinion column is one writer’s view, even in a paper you know. It does not say what the council voted." }],
      why: "The council’s own minutes are the original record of what it voted. A site that calls itself official, a page that tells you to share, and an opinion column are not." },
    // check (right: 4th, 3rd, 1st)
    { id: "l7-garden", situation: "A video says a new state law bans home gardens. You search the claim.",
      results: [
        { text: "The video’s own page: “Watch before it is taken down!”", note: OWN_PAGE },
        { text: "Sponsored: Fact check: the garden ban, line by line, from GardenFreedom.org", note: PAID },
        { text: "The Valley Courier: Garden Freedom Alliance says the state will ban home gardens (the group’s press release, printed in full)", note: "A paper you know can reprint a group’s press release. It is still the group’s own words, not a check." },
        { text: "Riverbend Public Radio, its reporter named: What the new garden law says, line by line, with a link to the law", ok: true }],
      why: "A named reporter going through the law line by line, with the law linked, is the outside work to read first, even from a newsroom you have not heard of." },
    { id: "l7-facts", situation: "A group called Americans for Real Facts sends you a long report about a new federal law. You search the group’s name to learn who is behind it.",
      results: [
        { text: "Americans for Real Facts: Our mission. “Nonpartisan research since 1998.”", note: OWN_PAGE },
        { text: "Americans for Real Facts: Who funds us? Our donors, in our own words", note: OWN_PAGE },
        { text: "Openbook Reporting, its reporters named: Who funds Americans for Real Facts? We read its tax filings", ok: true },
        { text: "A blog with no author’s name: Americans for Real Facts is the best", note: "A page that names no one behind it is no check on anyone." }],
      why: "Reporters who name themselves and went through the group’s tax filings can say who is behind it. The group calling itself nonpartisan cannot." },
    { id: "l7-quote", situation: "A post says the president said, “We will close every national park.” You want the president’s own words. You search the quote.",
      results: [
        { text: "The transcript of the speech, posted by the president’s office", ok: true },
        { text: "The Patriot Herald: What the president really meant about the parks", note: "A paper’s name does not make it the original. This is someone’s telling of the speech." },
        { text: "A news channel’s talk show about the quote", note: "A talk show is people discussing the words, not the words." },
        { text: "A meme with the quote over a photo", note: "A meme can cut or change the words." }],
      why: "The original words are in the transcript of the speech. A telling, a show and a meme only pass them on." },
    // kept for the review (right: 2nd)
    { id: "l7-voter", situation: "A website called National Voter Guide says your state’s election day has moved. You have never heard of it. You search for a way to check.",
      results: [
        { text: "National Voter Guide: About us. “Nonpartisan since 1990.”", note: OWN_PAGE },
        { text: "Your state’s election office: the election dates", ok: true },
        { text: "National Voter Guide: Official polling day finder", note: OWN_PAGE },
        { text: "A post: “Election day moved! Tell everyone!”", note: "A post is someone else passing it on." }],
      why: "The office that runs your state’s elections fixes the dates, so its own page is the original. Look it up yourself instead of using a link." }
  ];
  const sources = [
    // practice: one of each case of the rule
    { id: "l7-school", form: "news", src: "The Harbor Gazette", head: "School board moves start time",
      lines: ["The Brookside school board voted 4 to 1 on Monday to start high school classes at 8:30 a.m. next fall.", "Classes at every high school now begin at 7:45.", "Parents packed the meeting room to speak before the vote."],
      seen: "You looked up the Harbor Gazette last month: a daily paper that names its editor, and other papers quote it.", check: "take",
      why: "You have checked this paper, and this is an ordinary report of a vote. Both halves hold." },
    { id: "l7-freeze", form: "post", src: "A post shared by a friend",
      lines: ["BREAKING: The government will freeze every bank account on Friday. Pass it on!"],
      seen: "The post comes from an account called Real Patriots United, started this month. You do not know who runs it.", check: "check",
      why: "You cannot place the source, and the claim is alarming. Look up who is behind it before you pass it on." },
    { id: "l7-sudden", form: "news", src: "The Capital Sun", head: "Congress votes to end Social Security checks next month",
      lines: ["The House and the Senate voted late Thursday to stop all Social Security payments starting next month.", "Retirees said they were stunned."],
      seen: "You have read the Capital Sun for years and looked up who owns it last month.", check: "check",
      why: "You know this paper, but the claim is huge and sudden. Find the bill itself, or what other papers report, before you rely on it." },
    { id: "l7-county", form: "report", src: "Lakeview County Elections Office", head: "Polling places for the November election",
      lines: ["The county lists 14 polling places, open 7 a.m. to 8 p.m.", "Pine Park School is the polling place for the north side."],
      seen: "You typed the county’s own website address yourself, from the card the county mailed you, and found this page there.", check: "take",
      why: "This is the original record, which you reached yourself, and what it says is ordinary. You do not need an outside report to tell you what the office itself posts." },
    // check
    { id: "l7-bridges", form: "news", src: "The Capital Sun", head: "House passes bridge repair bill",
      lines: ["The House voted 280 to 150 on Thursday to pass a bill that adds money for bridge repairs.", "The bill now goes to the Senate.", "Repair crews said they have a list of all 30 bridges in need."],
      seen: "You checked the Capital Sun when you started reading it: a long-running daily with a named editor, quoted by other papers.", check: "take",
      why: "You have checked this paper, and this is an ordinary report of a vote." },
    { id: "l7-statehouse", form: "news", src: "The Statehouse Report", head: "Legislature names a state bird",
      lines: ["The state legislature voted on Monday to make the cardinal the official state bird.", "A fourth-grade class had asked for the change."],
      seen: "The site has the state seal at the top and calls itself “the record of the statehouse.” You have not looked up who runs it.", check: "check",
      why: "The story is ordinary, but you cannot place the source, and a seal can be put on any page. Leave it and see who is behind it before you rely on it." },
    // kept for the review
    { id: "l7-gas", form: "post", src: "A post shared by a friend",
      lines: ["A new federal rule bans all gas cars next month. Share before they hide it!"],
      seen: "The post comes from an account that was made last week. You do not know who runs it.", check: "check",
      why: "You cannot place the source, and the claim is big and sudden. Look up who is behind it first." },
    { id: "l7-fair", form: "news", src: "The Valley Courier", head: "Governor signs bill to close every state park for good",
      lines: ["The governor signed a bill on Monday that closes every state park in the state for good and sells the land.", "Campers and hikers said they were stunned."],
      seen: "Last month you looked into the Valley Courier: a daily paper with a named editor, and other papers quote it.", check: "check",
      why: "You know this paper, but closing every state park for good is a big change to many people, out of nowhere. Find the bill itself or other reports first." }
  ];
  FC.items("civics", [...results.map(civicsResults), ...sources.map(civicsSourceItem)]);
})();
