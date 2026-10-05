/* ===================== SUBJECT: US CIVICS & HISTORY ===================== */

// The key's words are this subject's one vocabulary. Cards, drills, faulty claims and specimens use them exactly.
// The question is always the same four steps: which part of government is acting (the gate), what it is doing,
// what limits it, and then the name for what the case comes to.

const CIVICS_OUTCOMES = [
  {id:'enumerated',  n:'A listed power of Congress (enumerated power)',       group:'congress'},
  {id:'purse',       n:'Congress controls the money (power of the purse)',    group:'congress'},
  {id:'confirm',     n:'The Senate must agree (advice and consent)',          group:'congress'},
  {id:'impeach',     n:'Charging and removing an official (impeachment)',     group:'congress'},
  {id:'beyondcong',  n:'Beyond Congress’s reach',                             group:'congress'},
  {id:'execute',     n:'Carrying out the law',                                group:'president'},
  {id:'commander',   n:'Commanding the armed forces (commander in chief)',    group:'president'},
  {id:'diplomacy',   n:'Dealing with other countries (foreign affairs and treaties)', group:'president'},
  {id:'vetopardon',  n:'Veto and pardon',                                     group:'president'},
  {id:'beyondpres',  n:'Beyond the President’s reach',                        group:'president'},
  {id:'review',      n:'A court checks a law (judicial review)',              group:'courts'},
  {id:'trialrights', n:'Trial rights (due process)',                          group:'courts'},
  {id:'interpret',   n:'A court says what a law means (interpreting a statute)', group:'courts'},
  {id:'notlegal',    n:'A choice for voters, not judges (political question)', group:'courts'},
  {id:'police',      n:'Left to the states (reserved powers)',                group:'states'},
  {id:'localgov',    n:'Handed down to a city or county (local government)',  group:'states'},
  {id:'preempted',   n:'Federal law wins (preemption)',                       group:'states'},
  {id:'concurrent',  n:'Both may act',                                        group:'states'},
  {id:'protected',   n:'Nobody may act — a protected right',                  group:'states'}
];

const CIVICS_GATE = { code:'N1', label:'Which part of government is acting, or being asked to act?', options:[
  { id:'congress',  n:'Congress',                       sub:'the lawmakers',
    keeps:['enumerated','purse','confirm','impeach','beyondcong'] },
  { id:'president', n:'The President and the agencies', sub:'the ones who carry laws out',
    keeps:['execute','commander','diplomacy','vetopardon','beyondpres'] },
  { id:'courts',    n:'The courts',                     sub:'the judges',
    keeps:['review','trialrights','interpret','notlegal'] },
  { id:'states',    n:'A state or a city',              sub:'state and local government',
    keeps:['police','localgov','preempted','concurrent','protected'] }
]};

const CIVICS_STEPS_BY_GATE = {
  congress: [
    { code:'L1', label:'What is Congress doing?', options:[
        {id:'makelaw', n:'Writing a rule that binds the whole country', keeps:['enumerated','beyondcong']},
        {id:'money',   n:'Deciding what gets funded',                   keeps:['purse']},
        {id:'approve', n:'Approving a person or an agreement the President proposes', keeps:['confirm']},
        {id:'remove',  n:'Removing a federal official for misconduct',  keeps:['impeach']}
    ]},
    { code:'L2', label:'Which rule decides whether Congress can do this?', options:[
        {id:'listed',      n:'The Constitution lists this power for Congress', keeps:['enumerated']},
        {id:'barred',      n:'No listed power covers it, or a right forbids it', keeps:['beyondcong']},
        {id:'appropriate', n:'Only Congress can vote money to be spent',    keeps:['purse']},
        {id:'senate23',    n:'The Senate must agree: a majority for a person, two-thirds for a treaty', keeps:['confirm']},
        {id:'housetries',  n:'The House brings the charge; the Senate holds the trial', keeps:['impeach']}
    ]}
  ],
  president: [
    { code:'X1', label:'What is the President, or an agency, doing?', options:[
        {id:'carryout', n:'Applying a law Congress already passed',      keeps:['execute']},
        {id:'military', n:'Directing the armed forces',                  keeps:['commander']},
        {id:'abroad',   n:'Dealing with another country',                keeps:['diplomacy']},
        {id:'onlaw',    n:'Vetoing a bill, or pardoning a federal conviction', keeps:['vetopardon']},
        {id:'newduty',  n:'Ordering something new that no law from Congress allows', keeps:['beyondpres']}
    ]},
    { code:'X2', label:'What limits the President or the agency here?', options:[
        {id:'statute',  n:'An agency may go no further than the law allows', keeps:['execute']},
        {id:'declare',  n:'Only Congress can declare war and pay for it', keeps:['commander']},
        {id:'ratify',   n:'A treaty does not bind anyone until two-thirds of the Senate agree', keeps:['diplomacy']},
        {id:'override', n:'Congress can override a veto with two-thirds of both chambers; a pardon covers federal crimes only', keeps:['vetopardon']},
        {id:'needslaw', n:'Only a law from Congress can do it; an order cannot', keeps:['beyondpres']}
    ]}
  ],
  courts: [
    { code:'J1', label:'What is the court being asked to do?', options:[
        {id:'strike',   n:'Check a law against the Constitution',        keeps:['review']},
        {id:'procprot', n:'Make sure someone’s trial rights are followed', keeps:['trialrights']},
        {id:'meaning',  n:'Say what a law’s words cover',                keeps:['interpret']},
        {id:'wiser',    n:'Decide which policy would be better',         keeps:['notlegal']}
    ]},
    { code:'J2', label:'What makes this a question for the court, or not?', options:[
        {id:'livecase',  n:'A person the law actually harmed has brought a real case', keeps:['review']},
        {id:'guarantee', n:'The Constitution itself promises these steps', keeps:['trialrights']},
        {id:'textprec',  n:'The law’s words and earlier rulings decide it, not the judge’s taste', keeps:['interpret']},
        {id:'elected',   n:'No law is in dispute: it is for voters and the leaders they elect to decide', keeps:['notlegal']}
    ]}
  ],
  states: [
    { code:'F1', label:'Where does the federal government stand?', options:[
        {id:'silent',    n:'It has no power here',                       keeps:['police','localgov']},
        {id:'acted',     n:'It has power here and has already used it',  keeps:['preempted']},
        {id:'bothmay',   n:'It has power here, and so does the state: both may act', keeps:['concurrent']},
        {id:'forbidden', n:'No government may act, federal included: a right protects this', keeps:['protected']}
    ]},
    { code:'F2', label:'Who ends up with the say?', options:[
        {id:'tenth',     n:'The state, because the Constitution leaves this to the states', keeps:['police']},
        {id:'city',      n:'A city or county, because the state handed the power down', keeps:['localgov']},
        {id:'supremacy', n:'Federal law, because it controls and the state rule gives way', keeps:['preempted']},
        {id:'floor',     n:'Both, because the federal rule is a minimum a state may go beyond', keeps:['concurrent']},
        {id:'neither',   n:'Nobody, because a right stops every government', keeps:['protected']}
    ]}
  ]
};

const N1_OPTS = ['Congress','The President and the agencies','The courts','A state or a city'];
const N1_DRILL = [
  {q:'The county board votes to close the county rubbish dump on Sundays.',
   a:'A state or a city', w:'The question that decides it is “Which part of government is acting, or being asked to act?” The detail that gives it away is “county board”: a county is local government, and it is the one making the rule. The answer is A state or a city.'},
  {q:'A bill to raise the federal tax on tobacco passes the House of Representatives and then the Senate.',
   a:'Congress', w:'The question that decides it is “Which part of government is acting, or being asked to act?” The detail that gives it away is “the House of Representatives and then the Senate”, the two chambers of Congress. Writing a tax law is the lawmakers’ job, so the answer is Congress.'},
  {q:'A company charged with dumping waste in a river asks the judge to dismiss the case.',
   a:'The courts', w:'The question that decides it is “Which part of government is acting, or being asked to act?” Prosecutors, who bring the charge, appear in the story, but the story hands the decision to someone else: the company “asks the judge” to rule. When the story ends with a request to a judge, the answer is The courts.'},
  {q:'The immigration service puts a simpler citizenship application form into use and begins accepting it.',
   a:'The President and the agencies', w:'The question is “Which part of government is acting, or being asked to act?” The detail that gives it away is “the immigration service”: an agency running a law that already exists. Agencies belong to The President and the agencies, not to Congress or the courts.'},
  {q:'The state legislature votes to move the state’s primary election to an earlier date.',
   a:'A state or a city', w:'The question is “Which part of government is acting, or being asked to act?” The detail that gives it away is “state legislature”, the lawmaking body of one state. It votes on bills, as Congress does, but it belongs to the state, so the answer is A state or a city.'},
  {q:'The Senate votes against the President’s choice for ambassador.',
   a:'Congress', w:'The question is “Which part of government is acting, or being asked to act?” Both the President and the Senate appear in the story, but the vote that settles it is the Senate’s, and the Senate is one of the two chambers of Congress. The act the story is about is the Senate’s decision, so the answer is Congress.'},
  {q:'The President signs an order telling every federal agency to review its rules on paperwork.',
   a:'The President and the agencies', w:'The question is “Which part of government is acting, or being asked to act?” A written instruction from the President to the agencies is an executive order: the executive branch directing itself. The detail that gives it away is “tells every federal agency”. The answer is The President and the agencies.'},
  {q:'A bakery owner asks a judge to decide whether a new tax on “sweetened drinks” covers her lemonade.',
   a:'The courts', w:'The question is “Which part of government is acting, or being asked to act?” The tax law appears in the story, but the story ends with a request to a judge to say what its words cover. Saying what a law means is a judge’s job, so the answer is The courts.'},
  {q:'A mayor signs a rule that dogs must be kept on a leash in every city park.',
   a:'A state or a city', w:'The question is “Which part of government is acting, or being asked to act?” The details that give it away are “mayor” and “city park”: local government making a local rule. No federal lawmaker, agency or judge is acting, so the answer is A state or a city.'},
  {q:'Lawmakers vote to cut the money for a new federal office building after its costs ran over.',
   a:'Congress', w:'The question is “Which part of government is acting, or being asked to act?” The detail that gives it away is “lawmakers vote”. Voting on how much money to spend is Congress’s job. The word “federal” only says which government the building belongs to; it does not make the President the one acting.'},
  {q:'A federal agency inspects a meat plant and orders it closed until a cleanliness problem is fixed.',
   a:'The President and the agencies', w:'The question is “Which part of government is acting, or being asked to act?” The detail that gives it away is “federal agency … orders it closed”: an agency enforcing a law that already exists. It is an agency, not a lawmaker or a judge, so the answer is The President and the agencies.'},
  {q:'A group of voters asks a federal judge to say what one word in a new voting statute covers.',
   a:'The courts', w:'The question is “Which part of government is acting, or being asked to act?” The statute is Congress’s work, but the story is about the group asking a judge what a word means. The detail that gives it away is “asks a federal judge”. The decision has been put to a judge, so the answer is The courts.'}
];

const N2_OPTS = ['The Declaration of Independence','The original Constitution (1787)','The Bill of Rights (1791)','A later amendment','The Federalist Papers'];
const N2_DRILL = [
  {q:'“Excessive bail shall not be required, nor excessive fines imposed.”',
   a:'The Bill of Rights (1791)', w:'The question is “Which document is it?” Sort it: is it an argument or a rule? It is a rule, a limit on government. Then: 1787 text or amendment? It is the Eighth Amendment, and eight is within the first ten, so it is The Bill of Rights (1791). It is one of the rights behind the name Trial rights (due process).'},
  {q:'“Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.”',
   a:'The Declaration of Independence', w:'The question is “Which document is it?” The detail that gives it away is that the sentence argues for a principle, the people’s right to change a government they no longer accept. It does not tell any part of government what it may do. An argument for why the colonies could separate is the Declaration of Independence, and no step of the key is decided by it.'},
  {q:'“No State shall … deny to any person within its jurisdiction the equal protection of the laws.”',
   a:'A later amendment', w:'The question is “Which document is it?” It is a rule, and it forbids a State from acting. Equal protection of the laws is part of the Fourteenth Amendment (1868). Fourteen is above ten, so it is A later amendment. It is the amendment that lets a right stop a state or a city.'},
  {q:'A text saying a person must be at least thirty-five years old, and born a citizen, to be President.',
   a:'The original Constitution (1787)', w:'The question is “Which document is it?” The detail that gives it away is that it sets up a part of government and says who may hold it. That is the work of the seven articles of the 1787 text (here Article II), not of an amendment.'},
  {q:'A signed newspaper essay from 1788, written under the name “Publius”, argues that each part of government will keep the others from taking too much power.',
   a:'The Federalist Papers', w:'The question is “Which document is it?” The detail that gives it away is “Publius” and the aim of arguing a case. The Federalist Papers argue for the Constitution; they are not a rule in it, so they are not law.'},
  {q:'“In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury …”',
   a:'The Bill of Rights (1791)', w:'The question is “Which document is it?” It is a rule that limits government. The detail that gives it away is “the accused shall enjoy”, a protection for a person charged with a crime. It is the Sixth Amendment, number six, within the first ten, so the answer is The Bill of Rights (1791). It belongs to Trial rights (due process).'},
  {q:'“The right of citizens of the United States to vote shall not be denied … on account of sex.”',
   a:'A later amendment', w:'The question is “Which document is it?” It is a rule, and it is an amendment: the Nineteenth, from 1920. The year is long after 1791 and the number is above ten, so it is A later amendment, not part of the Bill of Rights.'},
  {q:'A text saying that every bill must pass both the House of Representatives and the Senate before it goes to the President.',
   a:'The original Constitution (1787)', w:'The question is “Which document is it?” The detail that gives it away is that it describes how Congress works. Building Congress is the job of Article I, in the 1787 text. No amendment is named and none is needed to say it.'},
  {q:'A list of complaints against King George III, followed by the announcement that the colonies are free and independent states.',
   a:'The Declaration of Independence', w:'The question is “Which document is it?” The detail that gives it away is the list of complaints against the king. It argues why a break was justified and builds nothing, so it is the Declaration of Independence, not law.'},
  {q:'Three of the founders write eighty-five essays over about eight months to persuade the voters of one state to approve the new Constitution.',
   a:'The Federalist Papers', w:'The question is “Which document is it?” The detail that gives it away is “essays … to persuade” voters to approve the Constitution. Essays written to win approval for it are the Federalist Papers. They explain the Constitution and are not part of it, so they are not law.'},
  {q:'Added in 1951 after three-quarters of the states approved it, it says no one may be elected President more than twice.',
   a:'A later amendment', w:'The question is “Which document is it?” It is a rule about the President, but it was added by amendment, and the year 1951 is after 1791. It is the Twenty-second Amendment, so the answer is A later amendment.'},
  {q:'“Congress shall have Power to … coin Money.”',
   a:'The original Constitution (1787)', w:'The question is “Which document is it?” The detail that gives it away is “Congress shall have Power to”. A list of what Congress may do is Article I, in the 1787 text. It is the kind of line behind the key’s answer “The Constitution lists this power for Congress”.'},
  {q:'“The powers not delegated to the United States by the Constitution … are reserved to the States respectively, or to the people.”',
   a:'The Bill of Rights (1791)', w:'The question is “Which document is it?” It limits the federal government and keeps the rest for the states and the people. That is the Tenth Amendment: ten is within the first ten, so The Bill of Rights (1791). It is the source behind the name Left to the states (reserved powers).'}
];

const N3_OPTS = ['The House of Representatives','The Senate','Both chambers','The Vice President'];
const N3_DRILL = [
  {q:'Every one of its seats is up for election every two years.',
   a:'The House of Representatives', w:'The question is “Which chamber or office?” The detail that gives it away is “every two years”. Two-year terms belong to the House, and the Senate’s are six. The House is the chamber with 435 members, seats by population and the short term.'},
  {q:'It holds the trial of an impeached official, and needs two-thirds of its members to remove him.',
   a:'The Senate', w:'The question is “Which chamber or office?” This is the key’s answer “The House brings the charge; the Senate holds the trial”. The detail that gives it away is “holds the trial”, which is the Senate’s half. The House brings the charge.'},
  {q:'A bill must pass in the same form in the House and the Senate before the President can sign it.',
   a:'Both chambers', w:'The question is “Which chamber or office?” The detail that gives it away is “in the same form in the House and the Senate”. A job that needs the two chambers to agree is a job for both chambers, not for either alone.'},
  {q:'A vote in the Senate on a bill to repair the nation’s bridges ends 49 to 49, and a person who is not a senator settles it.',
   a:'The Vice President', w:'The question is “Which chamber or office?” The detail that gives it away is the tie and “a person who is not a senator”. The Vice President presides over the Senate and votes only to break a tie. The Vice President is not a senator.'},
  {q:'Its members serve six-year terms, and only about a third of them face the voters at any one election.',
   a:'The Senate', w:'The question is “Which chamber or office?” The detail that gives it away is “six-year terms”, with only a third of the seats up at a time. The House has two-year terms, and every seat is up each time.'},
  {q:'After a population count, a state that has grown gains seats in this chamber and a state that has shrunk loses one.',
   a:'The House of Representatives', w:'The question is “Which chamber or office?” The detail that gives it away is “seats” that rise and fall with population. Seats divided among the states by population is the House. In the Senate every state keeps two.'},
  {q:'Two-thirds of each of them must agree before an amendment to the Constitution can be proposed.',
   a:'Both chambers', w:'The question is “Which chamber or office?” The detail that gives it away is “two-thirds of each”. Proposing an amendment needs two-thirds in the House and two-thirds in the Senate, so the answer is both chambers.'},
  {q:'A newly named ambassador cannot start work until a majority of this body votes yes.',
   a:'The Senate', w:'The question is “Which chamber or office?” This is the key’s answer “The Senate must agree: a majority for a person, two-thirds for a treaty”. The detail that gives it away is “cannot start work until a majority … votes yes”: approving the President’s choice for a person. Confirming people is the Senate’s job alone.'},
  {q:'If the President dies in office, this officer, and not the Speaker of the House, is the first in line to take over.',
   a:'The Vice President', w:'The question is “Which chamber or office?” The detail that gives it away is “first in line to take over” the presidency. Being first in line is the Vice President’s second job. The Speaker of the House comes next after that.'},
  {q:'A bill to raise taxes has to begin here.',
   a:'The House of Representatives', w:'The question is “Which chamber or office?” The detail that gives it away is “raise taxes … begin here”. Tax bills must begin in the chamber that answers to voters every two years. That is the House.'},
  {q:'It needs two-thirds of the senators present to approve a treaty the President has signed.',
   a:'The Senate', w:'The question is “Which chamber or office?” This is the key’s answer “The Senate must agree: a majority for a person, two-thirds for a treaty”. The detail that gives it away is “two-thirds of the senators present … approve a treaty”. Only the Senate votes on treaties.'},
  {q:'Two-thirds of each is needed to pass a bill over the President’s veto.',
   a:'Both chambers', w:'The question is “Which chamber or office?” This is the first half of the key’s answer “Congress can override a veto with two-thirds of both chambers; a pardon covers federal crimes only”. The detail that gives it away is “two-thirds of each”. Overriding needs the House and the Senate together.'},
  {q:'This office is the only one that both belongs to the executive branch and presides over a chamber of Congress.',
   a:'The Vice President', w:'The question is “Which chamber or office?” The detail that gives it away is “presides over a chamber” while belonging to the executive branch. The Vice President leads the Senate, though not as a member, and the Vice President is part of the President’s branch.'}
];

const N4_OPTS = ['A right everyone here has','A right only citizens have','A duty everyone here has','A duty only citizens have','Not promised by the Constitution'];
const N4_DRILL = [
  {q:'Practising your religion, or none.',
   a:'A right everyone here has', w:'The question is “Right or duty, and who has it?” Sort it first: is it government held back, the law asking something of you, or government giving you something? It is government held back: the First Amendment limits what government may do. The detail that gives it away is that no citizenship is mentioned, so it is a right everyone here has.'},
  {q:'Casting a vote for the President.',
   a:'A right only citizens have', w:'The question is “Right or duty, and who has it?” It is something a person may choose to do, not something the law demands, so it is a right. The detail that gives it away is that voting in federal elections is reserved to citizens. The answer is A right only citizens have.'},
  {q:'Obeying the speed limit on a state highway.',
   a:'A duty everyone here has', w:'The question is “Right or duty, and who has it?” The law is asking something of you, so it is a duty. The detail that gives it away is that the speed limit applies to every driver, whatever their status. The answer is A duty everyone here has.'},
  {q:'Having ordinary people hear your case and decide it, in public and without long delay, when you are charged with a serious crime.',
   a:'A right everyone here has', w:'The question is “Right or duty, and who has it?” It is a protection against government, the Sixth Amendment’s jury trial, part of Trial rights (due process), so it is a right. The words “charged with a serious crime” and no mention of citizenship make it A right everyone here has.'},
  {q:'Free university tuition for everyone who is admitted.',
   a:'Not promised by the Constitution', w:'The question is “Right or duty, and who has it?” The government would be giving you something, not staying out of your way. The Constitution makes no such promise. Where free tuition exists it was created by a statute or a state decision, so the answer is Not promised by the Constitution.'},
  {q:'A retired teacher is picked at random to help decide a federal trial that will last two weeks.',
   a:'A duty only citizens have', w:'The question is “Right or duty, and who has it?” The law requires her to take part, so it is a duty, not a right. The detail that gives it away is “help decide a federal trial”: that is jury service, and federal juries are for citizens. The answer is A duty only citizens have.'},
  {q:'Protection against a search of your home without a warrant or good reason.',
   a:'A right everyone here has', w:'The question is “Right or duty, and who has it?” It is government held back, the Fourth Amendment, written as a limit on police and not as a benefit of citizenship. The answer is A right everyone here has.'},
  {q:'Running for the United States Senate.',
   a:'A right only citizens have', w:'The question is “Right or duty, and who has it?” Standing for office is something a person chooses, so it is a right. Senators must have been citizens for at least nine years, so it is reserved to citizens: A right only citizens have.'},
  {q:'Paying tax on the profit from a market stall you run here.',
   a:'A duty everyone here has', w:'The question is “Right or duty, and who has it?” The law demands it, so it is a duty. The detail that gives it away is “profit from a market stall you run here”: tax follows the income earned here, not the passport. The answer is A duty everyone here has.'},
  {q:'A home provided by the government to anyone who needs one.',
   a:'Not promised by the Constitution', w:'The question is “Right or duty, and who has it?” The government would be giving you something. The Constitution lists limits on government and does not promise housing. Any housing programme exists because of a statute or a state or local decision. The answer is Not promised by the Constitution.'},
  {q:'Writing an article that criticises the government.',
   a:'A right everyone here has', w:'The question is “Right or duty, and who has it?” It is government held back: the First Amendment protects speech and the press from punishment. The detail that gives it away is that no citizenship is mentioned. The answer is A right everyone here has.'},
  {q:'A guaranteed job for anyone who wants to work.',
   a:'Not promised by the Constitution', w:'The question is “Right or duty, and who has it?” A guaranteed job is something government would have to give you. The Constitution has no such promise, which is why jobs programmes come and go with statutes and elections. The answer is Not promised by the Constitution.'}
];

const N5_OPTS = ['Colonies and the founding (to 1800)','Growth and the slavery question (1800 to 1860)','Civil War and Reconstruction (1861 to 1877)','Factories and immigration (1877 to 1914)','World wars, civil rights and today (1914 onward)'];
const N5_DRILL = [
  {q:'Banks fail, a quarter of workers lose their jobs, and new federal agencies begin paying pensions and unemployment benefits.',
   a:'World wars, civil rights and today (1914 onward)', w:'The question that decides it is “Which era does it belong to?” The detail that gives it away is the mass job loss and the new federal agencies: the Great Depression and the New Deal of the 1930s. The agencies were Carrying out the law at a scale the founders never saw.'},
  {q:'Colonists refuse to pay a new tax on newspapers and legal papers, passed by a parliament in which they have no seat.',
   a:'Colonies and the founding (to 1800)', w:'The question is “Which era does it belong to?” The detail that gives it away is colonists taxed by a parliament where they have no seat. That is the founding-era quarrel over consent (the Stamp Act, 1765). It is the history behind the name Congress controls the money (power of the purse).'},
  {q:'Congress agrees that Missouri may keep slavery, Maine will be free, and slavery will be banned north of a line in the rest of the new western lands.',
   a:'Growth and the slavery question (1800 to 1860)', w:'The question is “Which era does it belong to?” The detail that gives it away is “Missouri” and “Maine” with the new western lands: the compromise of 1820. New states forced the question of whether slavery would be allowed, which is why this belongs to the years of growth and the slavery question.'},
  {q:'A large copper statue, a gift from France, is unveiled in New York Harbor.',
   a:'Factories and immigration (1877 to 1914)', w:'The question is “Which era does it belong to?” The detail that gives it away is the gift from France in the harbour: the Statue of Liberty, 1886. It stood for welcome in the years of the great wave of immigration, so the era is Factories and immigration (1877 to 1914).'},
  {q:'A President tells a crowd at a battlefield cemetery that the war is a test of whether a government of, by and for the people can last.',
   a:'Civil War and Reconstruction (1861 to 1877)', w:'The question is “Which era does it belong to?” The detail that gives it away is “the war” and the battlefield cemetery: the Gettysburg Address of 1863, given by Lincoln. It belongs to the Civil War years, so the era is Civil War and Reconstruction (1861 to 1877).'},
  {q:'Airplanes are flown into buildings in New York and near Washington, and a new federal department for homeland security is created.',
   a:'World wars, civil rights and today (1914 onward)', w:'The question is “Which era does it belong to?” The detail that gives it away is the attacks on New York and Washington: September 11, 2001. It is the most recent event the test asks about, so it falls in World wars, civil rights and today (1914 onward). It also changed how immigration is enforced.'},
  {q:'Ten amendments that protect individual rights are added to the new Constitution.',
   a:'Colonies and the founding (to 1800)', w:'The question is “Which era does it belong to?” The detail that gives it away is “ten amendments … added to the new Constitution”: the Bill of Rights, 1791. The founders added it within four years of the Constitution taking effect, so it belongs to Colonies and the founding (to 1800).'},
  {q:'After a war with Mexico, the United States gains California and the Southwest.',
   a:'Growth and the slavery question (1800 to 1860)', w:'The question is “Which era does it belong to?” The detail that gives it away is the war with Mexico, which ended in 1848. The country grew west, and each new region raised the question of slavery. The era is Growth and the slavery question (1800 to 1860).'},
  {q:'Congress passes the first major law that bars a whole group of workers from entering because of where they come from.',
   a:'Factories and immigration (1877 to 1914)', w:'The question is “Which era does it belong to?” The detail that gives it away is “first major law” barring a group by origin: the Chinese Exclusion Act of 1882. It shows immigration becoming a matter for Congress, in the era of Factories and immigration (1877 to 1914).'},
  {q:'A Supreme Court decision says that Black and white students may not be kept in separate public schools.',
   a:'World wars, civil rights and today (1914 onward)', w:'The question is “Which era does it belong to?” The detail that gives it away is the ruling against separate schools: Brown v. Board of Education, 1954. It is a court checking a law against the Constitution, in the civil rights years: World wars, civil rights and today (1914 onward).'},
  {q:'Federal troops leave the South, and the effort to protect freed people’s rights fades.',
   a:'Civil War and Reconstruction (1861 to 1877)', w:'The question is “Which era does it belong to?” The detail that gives it away is the withdrawal of federal troops, in 1877. That ended Reconstruction, the last year of the era Civil War and Reconstruction (1861 to 1877). The three amendments stayed in the Constitution but were not made real for most Black Southerners until the 1960s.'},
  {q:'A general who commanded the army in the war for independence is sworn in as the first President.',
   a:'Colonies and the founding (to 1800)', w:'The question is “Which era does it belong to?” The detail that gives it away is “first President”: George Washington, 1789. The first government under the Constitution is part of the founding, so the era is Colonies and the founding (to 1800).'},
  {q:'An amendment lets Congress tax what people earn.',
   a:'Factories and immigration (1877 to 1914)', w:'The question is “Which era does it belong to?” The detail that gives it away is the amendment about taxing income: the Sixteenth, 1913. It came in the years of big industry and big cities, so the era is Factories and immigration (1877 to 1914). It added to the taxing power already on Congress’s list.'},
  {q:'A poet watches a flag still flying over a fort after a night of bombardment in a war with Britain, and writes the words of a song.',
   a:'Growth and the slavery question (1800 to 1860)', w:'The question is “Which era does it belong to?” The detail that gives it away is the war with Britain and the flag over the fort: the War of 1812, and the words of The Star-Spangled Banner. It falls in the years 1800 to 1860: Growth and the slavery question (1800 to 1860).'},
  {q:'A long standoff with the Soviet Union, with wars in Korea and Vietnam, shapes American foreign policy for decades.',
   a:'World wars, civil rights and today (1914 onward)', w:'The question is “Which era does it belong to?” The detail that gives it away is the Soviet Union: the Cold War, about 1947 to 1991. It came after the Second World War, so it falls in World wars, civil rights and today (1914 onward).'},
  {q:'Women across the country vote in a presidential election for the first time.',
   a:'World wars, civil rights and today (1914 onward)', w:'The question is “Which era does it belong to?” The detail that gives it away is women voting nationwide for the first time: the Nineteenth Amendment, adopted in 1920. It falls after 1914, so the era is World wars, civil rights and today (1914 onward).'}
];

const CIVICS_ERR = [
  {q:'The President makes the laws.',
   w:'The mistake: Giving one part of government another part’s job. The question it skips: “Which part of government is acting, or being asked to act?” The fact that corrects it: Congress writes statutes, and the President signs or vetoes them and then carries them out. An executive order only directs the agencies, and it cannot create a new tax or a new duty. Say instead: “Congress writes the law, and the President carries it out.”'},
  {q:'The Bill of Rights protects only citizens.',
   w:'The mistake: Getting wrong who has a right. The question it skips: “Right or duty, and who has it?” The fact that corrects it: most of the Bill of Rights is written for “persons” or “the people” and never mentions citizens. Speech, religion, a lawyer when you are charged and protection from unreasonable searches are A right everyone here has. Only voting and running for most elected offices are A right only citizens have. Say instead: “These protections are for everyone here. Voting is for citizens.”'},
  {q:'Federal law always beats state law.',
   w:'The mistake: Mixing up the levels of government. The question it skips: “Where does the federal government stand?” The fact that corrects it: federal law wins only where the federal government has power and has already used it, which the key names Federal law wins (preemption). Where it has no power the subject is Left to the states (reserved powers), and where its rule is only a minimum a state may go beyond it, the name is Both may act. Driving, marriage, schools, most crime and renting a home are state law. Say instead: “Federal law controls when it covers the subject. Otherwise the state decides.”'},
  {q:'The Supreme Court can strike down any law it disagrees with.',
   w:'The mistake: Forgetting the limit. The question it skips: “What makes this a question for the court, or not?” The fact that corrects it: a court needs a real case brought by a person the law actually harmed, and it checks only whether the law fits the Constitution. Whether a policy is good is the name A choice for voters, not judges (political question). Say instead: “A court can strike down a law only if it breaks the Constitution, and only in a real case.”'},
  {q:'The Declaration of Independence is the law of the land.',
   w:'The mistake: Treating the wrong document as the law. The question it skips: “Is it an argument or a rule?” The fact that corrects it: the Declaration (1776) explains why the colonies broke from Britain and created no government. The law of the land is the Constitution, in force from 1789: The original Constitution (1787) plus its amendments. Say instead: “The Declaration says why. The Constitution is the law.”'},
  {q:'America has always been a democracy where everyone could vote.',
   w:'The mistake: Telling the history as if it were always settled. The question it skips: “Which era does it belong to?” The fact that corrects it: the right to vote was widened by inches, each time against opposition. Race in 1870 (the Fifteenth Amendment), sex in 1920 (the Nineteenth), the poll tax in 1964 (the Twenty-fourth), and age eighteen in 1971 (the Twenty-sixth). The Voting Rights Act of 1965 made the 1870 promise real, ninety-five years late. Say instead: “The right to vote was won step by step.”'},
  {q:'A law is valid as long as Congress passed it and the President signed it.',
   w:'The mistake: Forgetting the limit. The question it skips: “Which rule decides whether Congress can do this?” The fact that corrects it: Congress needs a power the Constitution lists, and no right may forbid the law. A law outside that is Beyond Congress’s reach, and a court can strike it down in a real case. Say instead: “Passing a law is not enough. Congress also needs the power.”'},
  {q:'The Constitution guarantees every person a job and a home.',
   w:'The mistake: Getting wrong who has a right. The question it skips: “Right or duty, and who has it?” The fact that corrects it: the Constitution mostly lists what government may not do to you, and promises few things for it to give. A job or a home is Not promised by the Constitution. Where a programme exists it was created by a statute or a state, and can change. Say instead: “There is no constitutional right to a job or a home. Programmes exist by statute.”'},
  {q:'Each state sets its own rules for who can become a citizen.',
   w:'The mistake: Mixing up the levels of government. The question it skips: “Where does the federal government stand?” The fact that corrects it: the Constitution’s list gives Congress the power to set one rule for becoming a citizen, and Congress has used it. A state’s own scheme would be pushed aside, and the name is Federal law wins (preemption). Say instead: “Citizenship rules are federal. They come from Congress and apply in every state.”'},
  {q:'The President can declare war.',
   w:'The mistake: Forgetting the limit. The question it skips: “What limits the President or the agency here?” The fact that corrects it: the President commands the armed forces, the name Commanding the armed forces (commander in chief), but only Congress can declare war and pay for it. Say instead: “The President commands the forces. Only Congress can declare war and pay for it.”'},
  {q:'The Civil War was about states’ rights, not slavery.',
   w:'The mistake: Telling the history as if it were always settled. The question it skips: “Which era does it belong to?” and, behind it, “a right to do what?” The fact that corrects it: the declarations of the seceding states name slavery as the cause. Say instead: “The Southern states said they were leaving to protect slavery.” It is the history that sits in the era Civil War and Reconstruction (1861 to 1877).'},
  {q:'An executive order is just as strong as a law, and lasts as long.',
   w:'The mistake: Forgetting the limit. The question it skips: “What limits the President or the agency here?” The fact that corrects it: an order only directs the agencies in carrying out existing laws. It cannot create a new tax, a new crime or a new duty for private people, which is Beyond the President’s reach. The next President can undo it with a signature, and a court can strike it down if it goes past the statute. Say instead: “An order is not a statute.”'},
  {q:'The Bill of Rights is a separate document from the Constitution.',
   w:'The mistake: Treating the wrong document as the law. The question it skips: “Is it the 1787 text or an amendment?” The fact that corrects it: the Bill of Rights is the first ten amendments, added in 1791, so it is part of the Constitution and is law. Say instead: “The Bill of Rights is the first ten amendments to the Constitution.”'},
  {q:'If you are not a citizen, you do not have to pay income tax on the money you earn here.',
   w:'The mistake: Getting wrong who has a right. The question it skips: “Right or duty, and who has it?” The fact that corrects it: tax follows the income, not the passport, so paying tax on income earned here is A duty everyone here has. Say instead: “Income earned here is taxed, whatever your status.”'},
  {q:'Cities and counties have powers of their own that the state cannot touch.',
   w:'The mistake: Mixing up the levels of government. The question it skips: “Who ends up with the say?” The fact that corrects it: a city or county holds the power its state handed down, and the state can usually widen, narrow or take it back. The name is Handed down to a city or county (local government). Say instead: “A city has the power its state gives it.”'},
  {q:'Everyone born in the United States is a citizen, and that has always been the rule.',
   w:'The mistake: Telling the history as if it were always settled. The question it skips: “Which era does it belong to?” The fact that corrects it: birthright citizenship is in the Fourteenth Amendment (1868), added to overturn the 1857 Dred Scott decision, which held that Black people could not be citizens at all. Say instead: “Birthright citizenship has been in the Constitution since 1868.”'},
  {q:'The rules for the citizenship test are written in the Constitution.',
   w:'The mistake: Giving one part of government another part’s job. The question it skips: “Which part of government is acting, or being asked to act?” The fact that corrects it: Congress wrote the statute that requires knowledge of civics and English. The immigration service, an agency, sets the interview and the details, and can change them. That is Carrying out the law. Say instead: “A statute requires the test, and an agency decides the details, so check uscis.gov for the current rules.”'}
];

const CIVICS_SPECIMENS = [
  {q:'A statute sets out how many years a lawful permanent resident must have lived in the country before applying to naturalise, what English and civics knowledge is required, and which offences bar an applicant from establishing good moral character.',
   sub:{N1:['congress'],L1:['makelaw'],L2:['listed']},outcome:'enumerated',
   why:'Which part of government is acting, or being asked to act? Congress: a statute is a law Congress passed. What is Congress doing? Writing a rule that binds the whole country: the statute sets the rules for everyone who applies. Which rule decides whether Congress can do this? The Constitution lists this power for Congress: Article I lets Congress set one rule for becoming a citizen. So the name is A listed power of Congress (enumerated power). In practice this is why the citizenship rules change only when Congress changes the statute, and why an agency can change how a rule is run but not what the rule is.',
   fals:'If the same requirement appeared only in an agency manual with no statute behind it, an agency would be acting, and the question would be whether it had gone past the law. The name could then be Beyond the President’s reach.'},

  {q:'A state sets the age at which a person may hold a driver’s licence, who may marry, what its public schools teach, how its police forces operate, and which professions require a state licence.',
   sub:{N1:['states'],F1:['silent'],F2:['tenth']},outcome:'police',
   why:'Which part of government is acting, or being asked to act? A state or a city: “a state sets” these rules. Where does the federal government stand? It has no power here: driver’s licences, marriage, schools, policing and professional licences are not on the federal list. Who ends up with the say? The state, because the Constitution leaves this to the states, through the Tenth Amendment. The name is Left to the states (reserved powers). This broad power over health, safety and welfare is where most of the law an ordinary person meets lives, which is why moving between states changes more than newcomers expect.',
   fals:'If a state rule treated out-of-state businesses unfairly, or collided with a valid federal statute, the case would move toward Federal law wins (preemption).'},

  {q:'A person fined under a new statute sues, arguing that it breaks a guarantee in the Constitution. The court agrees and rules that the statute cannot be enforced.',
   sub:{N1:['courts'],J1:['strike'],J2:['livecase']},outcome:'review',
   why:'Which part of government is acting, or being asked to act? The courts: the story ends with a court that “rules that the statute cannot be enforced” after a person sues. What is the court being asked to do? Check a law against the Constitution: the person argues that the statute “breaks a guarantee in the Constitution”. What makes this a question for the court, or not? A person the law actually harmed has brought a real case: the person was “fined” under it. The name is A court checks a law (judicial review). The Supreme Court claimed this power in 1803, in Marbury v. Madison, though the Constitution never says it in words.',
   fals:'Without a person actually harmed there is no case, and without a case a court has no power to rule, however plainly unconstitutional the statute might look.'},

  {q:'Congress passes a statute requiring that a product be labelled with its ingredients. An agency then issues detailed regulations specifying type sizes, the wording of warnings, and the testing method, and runs an inspection programme.',
   sub:{N1:['president'],X1:['carryout'],X2:['statute']},outcome:'execute',
   why:'Which part of government is acting, or being asked to act? The President and the agencies: the story ends with “an agency” writing regulations and running inspections. Congress wrote the statute, but that is background. What is the agency doing? Applying a law Congress already passed: the statute requires ingredient labels and the agency fills in the details. What limits the President or the agency here? An agency may go no further than the law allows: type sizes, warnings and testing methods all serve the labelling statute. The name is Carrying out the law. Much of the law an ordinary person meets was written by an agency in just this way, which is why the limit matters.',
   fals:'If the agency’s regulation banned the product outright when the statute only required labelling, the agency would have gone past what Congress allowed, and the name would be Beyond the President’s reach.'},

  {q:'The President announces a major construction programme and directs an agency to begin. Congress declines to include any money for it in the appropriations bill, and the programme cannot proceed.',
   sub:{N1:['congress'],L1:['money'],L2:['appropriate']},outcome:'purse',
   why:'Which part of government is acting, or being asked to act? Congress: the President announces the programme, but the story turns on Congress “declines to include any money” in the bill. What is Congress doing? Deciding what gets funded. Which rule decides whether Congress can do this? Only Congress can vote money to be spent, so without it the programme “cannot proceed”. The name is Congress controls the money (power of the purse). Congress did not need to forbid the programme: leaving out the money was enough, and every budget fight you read about is this rule at work.',
   fals:'If an earlier law had already set aside the money, Congress would have to act again to stop the spending, and the agency spending it would be Carrying out the law. Stopping a funded programme is much harder than not funding one.'},

  {q:'Federal law sets a minimum wage. A state sets its own minimum wage higher, and employers in that state must pay the higher figure. Both the federal government and the state also tax income.',
   sub:{N1:['states'],F1:['bothmay'],F2:['floor']},outcome:'concurrent',
   why:'Which part of government is acting, or being asked to act? A state or a city: “a state sets its own minimum wage higher”. Where does the federal government stand? It has power here, and so does the state: both may act. Federal law “sets a minimum wage”, and both governments also tax income. Who ends up with the say? Both, because the federal rule is a minimum a state may go beyond: an employer who pays the higher figure also meets the federal one. The name is Both may act.',
   fals:'If the federal statute said expressly that no state may require more, the state law would give way and the name would be Federal law wins (preemption). Whether a federal rule is a minimum or the only rule is the whole question.'},

  {q:'A statute bans "vehicles" from a public park. A case arrives asking whether that covers an electric bicycle, which did not exist when the statute was written.',
   sub:{N1:['courts'],J1:['meaning'],J2:['textprec']},outcome:'interpret',
   why:'Which part of government is acting, or being asked to act? The courts: “a case arrives”, and someone must decide it. What is the court being asked to do? Say what a law’s words cover: does “vehicles” include an electric bicycle? What makes this a question for the court, or not? The law’s words and earlier rulings decide it, not the judge’s taste. The court reads the statute’s text, its structure and purpose, and earlier decisions on similar words, and does not ask whether e-bikes in parks are a good idea. The name is A court says what a law means (interpreting a statute). Most of what courts do is this, not constitutional drama.',
   fals:'If the argument were that the lawmakers had no power to ban vehicles at all, the court would be checking a law, and the name would be A court checks a law (judicial review). Here the statute is assumed valid and only its words are in question.'},

  {q:'A bill reaches the President and he returns it unsigned with his objections. Separately, he grants a pardon to a person convicted of a federal offence. A request to pardon someone convicted under state law is refused as outside his power.',
   sub:{N1:['president'],X1:['onlaw'],X2:['override']},outcome:'vetopardon',
   why:'Which part of government is acting, or being asked to act? The President and the agencies: the President returns a bill unsigned and grants a pardon. What is the President doing? Vetoing a bill, or pardoning a federal conviction: both appear in the case. What limits the President or the agency here? Congress can override a veto with two-thirds of both chambers, and a pardon covers federal crimes only, which is why the request for someone convicted under state law was refused. The name is Veto and pardon.',
   fals:'If the President had simply not signed while Congress stayed in session, the bill would have become law without a signature after ten days (Sundays not counted). Doing nothing and vetoing are different acts with different results. A state conviction would need the governor.'},

  {q:'A federal judge is accused, with strong evidence, of taking money to decide cases. The House votes articles by a simple majority; the Senate then holds a trial, and two-thirds vote to convict and remove him from office.',
   sub:{N1:['congress'],L1:['remove'],L2:['housetries']},outcome:'impeach',
   why:'Which part of government is acting, or being asked to act? Congress: “the House votes articles” and “the Senate then holds a trial” are its two chambers. What is Congress doing? Removing a federal official for misconduct: the judge is “accused, with strong evidence, of taking money to decide cases”. Which rule decides whether Congress can do this? The House brings the charge; the Senate holds the trial, with a majority in the House and two-thirds in the Senate to convict. The name is Charging and removing an official (impeachment). Federal judges keep their jobs for as long as they behave well, so impeachment is the only way to remove one. That is how judges are protected from pressure by the other parts of government.',
   fals:'Impeachment decides only whether someone keeps a public job. Any criminal punishment is a separate matter for the ordinary courts. And if the House had charged but the Senate had fallen short of two-thirds, the judge would have stayed in office.'},

  {q:'A city council decides which streets permit overnight parking, what may be built in which neighbourhood, and the opening hours of its libraries. Its authority to do so comes from the state.',
   sub:{N1:['states'],F1:['silent'],F2:['city']},outcome:'localgov',
   why:'Which part of government is acting, or being asked to act? A state or a city: “a city council decides”. Where does the federal government stand? It has no power here: parking, zoning and library hours are local matters. Who ends up with the say? A city or county, because the state handed the power down: the story says its authority “comes from the state”. The name is Handed down to a city or county (local government). A city holds what the state handed it and no more, and the state can widen or take back that grant.',
   fals:'If the state legislature passed a law overriding the zoning decision, the city would lose. The relationship does not run the other way.'},

  {q:'Someone is arrested. He is told he need not answer questions, a lawyer is appointed because he cannot afford one, and he is brought before a judge and tried before a jury in public, within a defined period.',
   sub:{N1:['courts'],J1:['procprot'],J2:['guarantee']},outcome:'trialrights',
   why:'Which part of government is acting, or being asked to act? The courts: the story follows the man into a courtroom, where a lawyer is appointed and a jury tries him. What is the court being asked to do? Make sure someone’s trial rights are followed: silence, a lawyer, a judge, a public jury trial within a set time. What makes this a question for the court, or not? The Constitution itself promises these steps, in the Fourth, Fifth, Sixth and Eighth Amendments. The name is Trial rights (due process). These rights protect everyone here, so immigration status does not remove the right to a lawyer or to silence in a criminal case.',
   fals:'Immigration proceedings are civil, not criminal, and several of these guarantees, appointed counsel in particular, do not apply there in the same way.'},

  {q:'The President orders forces into action abroad. Congress has not declared war; it continues to appropriate money for the operation, and debates a resolution to restrict it.',
   sub:{N1:['president'],X1:['military'],X2:['declare']},outcome:'commander',
   why:'Which part of government is acting, or being asked to act? The President and the agencies: “the President orders forces into action”. Congress appears too, but only as background: it has not declared war and is still debating. What is the President doing? Directing the armed forces. What limits the President or the agency here? Only Congress can declare war and pay for it, and the story shows Congress still voting money and debating a restriction. The name is Commanding the armed forces (commander in chief). The founders gave the commanding to one part and the declaring and paying to another, so that no single part could take the country to war alone. The arguments in every conflict since 1945 are that design at work.',
   fals:'A formal declaration of war would end the argument about this boundary. Such declarations have been rare since the Second World War, which is why the boundary is argued over and not settled.'},

  {q:'The President signs an agreement with another country and nominates a judge to a federal court. Neither the agreement nor the appointment takes effect; both go to the Senate, where the agreement needs the support of two-thirds of those present.',
   sub:{N1:['congress'],L1:['approve'],L2:['senate23']},outcome:'confirm',
   why:'Which part of government is acting, or being asked to act? Congress: the President has already signed and nominated, but the story says “both go to the Senate”, which now has to decide. What is Congress doing? Approving a person or an agreement the President proposes. Which rule decides whether Congress can do this? The Senate must agree: a majority for a person, two-thirds for a treaty, which is why the story says the agreement needs “two-thirds of those present”. The name is The Senate must agree (advice and consent). Neither the agreement nor the appointment takes effect until the Senate votes. The high bar for treaties is why many international commitments are made as executive agreements instead, which need no Senate vote but bind less and last only as long as the next President allows.',
   fals:'If the story had stopped at the President signing, nothing would have been handed to the Senate, and the part acting would be The President and the agencies, with the name Dealing with other countries (foreign affairs and treaties). If the Senate never votes, the agreement is not a treaty.'},

  {q:'The Secretary of State spends two years negotiating a trade and security agreement with another government. The text is agreed by both negotiating teams, and it binds nobody yet.',
   sub:{N1:['president'],X1:['abroad'],X2:['ratify']},outcome:'diplomacy',
   why:'Which part of government is acting, or being asked to act? The President and the agencies: the Secretary of State “spends two years negotiating”. Nothing in the story has gone to the Senate, so the Senate is not yet acting. What is the President doing? Dealing with another country. What limits the President or the agency here? A treaty does not bind anyone until two-thirds of the Senate agree, and the story says it “binds nobody yet”. The name is Dealing with other countries (foreign affairs and treaties). Speaking for the country abroad is the clearest example of presidential power, but negotiating and binding are different acts.',
   fals:'If the story said the agreement had gone to the Senate for a vote, the part acting would be Congress and the name would be The Senate must agree (advice and consent). Same agreement, different moment.'},

  {q:'A state enacts its own scheme deciding which non-citizens may remain in the state, creating state penalties for immigration status and directing state officers to enforce them independently of federal authorities.',
   sub:{N1:['states'],F1:['acted'],F2:['supremacy']},outcome:'preempted',
   why:'Which part of government is acting, or being asked to act? A state or a city: “a state enacts its own scheme”. Where does the federal government stand? It has power here and has already used it: immigration and citizenship are on the federal list, and Congress has written detailed statutes on them. The story does not say so, but that is the fact that decides it. Who ends up with the say? Federal law, because it controls and the state rule gives way: the Constitution makes federal law supreme where it validly applies. The name is Federal law wins (preemption). In practice the rules for anyone’s immigration status come from federal law, however loudly a state legislates.',
   fals:'States keep wide authority over their own benefits, licences and employment rules, and much state law in this area survives because it stays on that side of the line.'},

  {q:'Two parties disagree about whether the top rate of income tax should be 22% or 28%. Both rates are plainly within the taxing power, and both sides ask the courts to settle which is the better policy.',
   sub:{N1:['courts'],J1:['wiser'],J2:['elected']},outcome:'notlegal',
   why:'Which part of government is acting, or being asked to act? The courts: “both sides ask the courts to settle” it. What is the court being asked to do? Decide which policy would be better: whether the top rate should be 22% or 28%. What makes this a question for the court, or not? No law is in dispute: both rates are plainly within the taxing power, so it is for voters and the leaders they elect to decide. The name is A choice for voters, not judges (political question). The answer to a dispute like this is an election, not a lawsuit.',
   fals:'If a tax applied only to members of one religion, a constitutional rule would exist, and it would at once become a legal question that a court could decide.'},

  {q:'A bill makes it a federal crime to publish writing that brings a sitting federal official into contempt or disrepute. It passes both chambers and is signed.',
   sub:{N1:['congress'],L1:['makelaw'],L2:['barred']},outcome:'beyondcong',
   why:'Which part of government is acting, or being asked to act? Congress: the bill “passes both chambers”, and writing a statute is Congress’s work. What is Congress doing? Writing a rule that binds the whole country. Which rule decides whether Congress can do this? No listed power covers it, or a right forbids it: the First Amendment begins “Congress shall make no law” about speech, and criticising officials is the heart of what it protects. Passing a bill properly does not make it valid, so the name is Beyond Congress’s reach. The Sedition Act of 1798 was almost exactly this, and it is remembered as a mistake, not as a model.',
   fals:'A narrow law aimed at a recognised exception, such as inciting violence, could stand inside Congress’s powers. It is the breadth of this bill that puts it beyond reach, not the subject.'},

  {q:'An executive order directs that a new fee be collected from every household, with the proceeds paid into the Treasury. No statute authorises the fee, and Congress has never voted on it.',
   sub:{N1:['president'],X1:['newduty'],X2:['needslaw']},outcome:'beyondpres',
   why:'Which part of government is acting, or being asked to act? The President and the agencies: an executive order is the President’s instruction to the agencies. What is the President doing? Ordering something new that no law from Congress allows: a new fee on every household, with “no statute” behind it. What limits the President or the agency here? Only a law from Congress can do it; an order cannot: taxing is on Congress’s list, and Congress “has never voted on it”. The name is Beyond the President’s reach. An order directs how existing laws are carried out. It is no substitute for a statute, and the test is always whether a statute authorises what the order directs.',
   fals:'An order that changed how an agency sets its priorities in enforcing a fee Congress did create would be Carrying out the law, however big its effects.'},

  {q:'A state passes a law requiring a permit before any religious group may hold a service in a rented hall, and a city ordinance requires approval before a newspaper may be distributed.',
   sub:{N1:['states'],F1:['forbidden'],F2:['neither']},outcome:'protected',
   why:'Which part of government is acting, or being asked to act? A state or a city: “a state passes a law” and “a city ordinance”. Where does the federal government stand? No government may act, federal included: a right protects this. Religion and the press are protected by the First Amendment. Who ends up with the say? Nobody, because a right stops every government. The Bill of Rights first limited only the federal government, and the Fourteenth Amendment is why it now limits every level. The name is Nobody may act — a protected right.',
   fals:'Neutral rules about when and where something happens, such as a noise limit or a permit for closing a street, are a different matter and are generally allowed, because they do not target what is said.'}
];

const CIVICS_COURSE = [

{ tag:'One', title:'Who decides',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a news sentence such as “the government has banned it” and say which part of the government did the banning, and so who could change it, who can challenge it, and whether it could be done at all.</p>
      <p>This matters in ordinary life more than it sounds. A rule that came from Congress can be undone only by Congress. A rule that came from an agency (an office that runs the laws day to day) can be challenged in court. A rule your city made can be overruled by your state. Knowing which part is acting tells you where to look, whom to ask and what can happen next. It is also the idea underneath most of the citizenship test.</p>
      <p>This course asks the same four questions about every case, and we call the whole set <b>who decides</b>. This unit answers the first question:</p>
      <p><b>Which part of government is acting, or being asked to act?</b></p>
      <p>The four possible answers are <b>Congress</b>, <b>The President and the agencies</b>, <b>The courts</b> and <b>A state or a city</b>. For the last answer this unit also teaches two more questions, <b>Where does the federal government stand?</b> and <b>Who ends up with the say?</b>, because that is where most of a newcomer’s daily life is decided.</p>
      <div class="note"><b>Two kinds of material.</b> Units One, Three and Seven teach a method you can use on any case. Units Two, Four and Five are mostly facts to remember (documents, rights and duties, history), arranged so each fact attaches to something the method uses. Unit Four also adds one piece of method. Unit Six is about the mistakes people make with both. When a unit is mostly facts, its first card says so.</div>`},
  {h:'The four steps of the key',
   b:`<p>The “key” is the set of questions you ask about a case, always in the same order. Every case in this course goes through four steps.</p>
      <ol>
        <li><b>Which part of government is acting, or being asked to act?</b> Four answers: Congress, The President and the agencies, The courts, A state or a city.</li>
        <li><b>What is it doing?</b> The question changes with the answer to step 1. For Congress it is “What is Congress doing?”; for the President it is “What is the President, or an agency, doing?”; for the courts, “What is the court being asked to do?”; for a state or a city, “Where does the federal government stand?”</li>
        <li><b>What limits it, or what settles it?</b> Again a different question for each part, such as “Which rule decides whether Congress can do this?” or “Who ends up with the say?”</li>
        <li><b>Name it.</b> Your answers lead to one name out of nineteen, such as “Federal law wins (preemption)” or “Veto and pardon”. The name is the short answer to “what is going on here?”</li>
      </ol>
      <p>Why this order? Because you cannot ask what a part of government is allowed to do until you know which part it is. Once you know that, two short questions narrow nineteen possible names down to one.</p>
      <p>You will learn the questions for each part in the unit that covers it: the states’ questions in this unit, Congress, the President and the courts in Unit Three, and how rights cut across all of them in Unit Four. Unit Seven then gives you cases with nothing labelled.</p>`},
  {h:'Eight words you will meet',
   b:`<p>Government talk is full of words that sound alike. These eight are used the same way everywhere in this course.</p>
      <table class="k pair">
      <tr><th>Word</th><th>What it means, with a plain example</th></tr>
      <tr><td><b>Federal</b></td><td>Belonging to the government of the whole country, based in Washington, D.C. “Federal law” applies in all fifty states. This course says “federal” every time.</td></tr>
      <tr><td><b>Constitution</b></td><td>The country’s founding law, written in 1787. It sets up the government and says what each part may and may not do. Unit Two tells its story.</td></tr>
      <tr><td><b>Bill</b></td><td>A proposed law that has not passed yet.</td></tr>
      <tr><td><b>Statute</b></td><td>A law that Congress has passed. The rules for becoming a citizen are in a statute.</td></tr>
      <tr><td><b>Agency</b></td><td>An office that runs a law day to day, such as the immigration service that processes citizenship applications, or the tax agency.</td></tr>
      <tr><td><b>Regulation</b></td><td>The detailed rules an agency writes so a statute can work in practice, such as how many hours of rest a bus driver must have between shifts.</td></tr>
      <tr><td><b>Executive order</b></td><td>A written instruction from the President to the agencies. It is not a statute. It tells the agencies how to do their job.</td></tr>
      <tr><td><b>Chamber</b></td><td>One of the two halves of Congress: the House of Representatives or the Senate.</td></tr>
      </table>
      <p>The one to hold on to is the difference between a <b>statute</b> and everything below it. Only Congress writes statutes. Regulations and executive orders sit underneath a statute and must stay inside it.</p>`},
  {h:'Congress',
   b:`<p><b>What it is.</b> Congress is the part of the federal government that writes laws. It has two halves, called chambers: the House of Representatives and the Senate. A law that has passed both chambers and been signed is a statute. Congress also decides how much money the government spends, approves or refuses certain appointments and treaties (formal agreements with other countries), and can remove officials who commit serious misconduct. It may use only the powers the Constitution gives it, and Unit Three explains each of these jobs.</p>
      <p><b>Example.</b> Congress passes a law making it a federal crime to counterfeit money. The bill passes the House and the Senate, the President signs it, and from then on it applies in every state. If anyone wanted the law changed, Congress would have to pass a new statute.</p>
      <p><b>Sounds like.</b> “Lawmakers passed a bill.” “The Senate voted.” “Congress cut the funding.” “The budget bill.”</p>
      <p><b>Catch it.</b> Ask: is the thing being done writing or changing a law, voting money, or approving or removing someone? If so, the answer to <b>Which part of government is acting, or being asked to act?</b> is <b>Congress</b>.</p>
      <p><b>What to do.</b> When a story says “the government changed the rules”, find out whether a statute changed. If it did, only Congress can change it back, and arguing with an agency or a judge will not help.</p>
      <p><b>Don’t confuse it with</b> The President and the agencies. The President signs or vetoes a bill, but does not write statutes. “The President signed the law” means Congress passed it first.</p>`},
  {h:'The President and the agencies',
   b:`<p><b>What it is.</b> This is the part of government that carries laws out, which is why it is called the executive branch. The President leads it. Under the President are the agencies, the offices that run particular laws. When Congress passes a statute, an agency usually writes the regulations and does the daily work: processing applications, inspecting factories, collecting taxes. The President also commands the armed forces, deals with other countries, can veto a bill (refuse to sign it) and can pardon someone convicted of a federal crime. The President can also issue executive orders to direct the agencies.</p>
      <p><b>Example.</b> A statute says every new car must have seat belts. The road-safety agency writes the detailed regulations for how strong a belt must be, and crash-tests cars to check.</p>
      <p><b>Sounds like.</b> “The agency announced new rules.” “The White House said.” “The order directs the department to.” “Troops were deployed.”</p>
      <p><b>Catch it.</b> Ask: is someone putting an existing law into practice, commanding the military, dealing with another country, or signing or refusing a bill? If so, the answer to <b>Which part of government is acting, or being asked to act?</b> is <b>The President and the agencies</b>.</p>
      <p><b>What to do.</b> Ask which statute lets them do it. An agency has no power of its own to make law. It can only fill in the detail of what Congress already wrote.</p>
      <p><b>Don’t confuse it with</b> Congress: regulations are not statutes, even though they look like laws. And the federal “State Department”, led by the Secretary of State, is not a state government: it is an agency that handles relations with other countries.</p>`},
  {h:'The courts',
   b:`<p><b>What it is.</b> Courts are the judges. They settle disputes, hold the trials of people accused of crimes, say what a law means in a real situation, and check whether a law fits the Constitution. They do not write laws and do not run programmes. A court acts only when someone brings it a real case, such as a person who has been charged with a crime or a person who says a law has harmed them. The highest federal court is the Supreme Court.</p>
      <p><b>Example.</b> A tenant and a landlord disagree about who must pay to fix a broken heater. Each tells the story to a judge, and the judge decides who is right.</p>
      <p><b>Sounds like.</b> “The judge ruled.” “The court struck it down.” “They are appealing.” “The case was dismissed.”</p>
      <p><b>Catch it.</b> Ask: is someone asking a judge to decide a dispute, hold a trial, say what a law means, or check a law against the Constitution? Even if an agency or a city appears in the story, the story belongs to the courts when it hands the decision to the judge. Then the answer to <b>Which part of government is acting, or being asked to act?</b> is <b>The courts</b>.</p>
      <p><b>What to do.</b> Expect a court to move only after someone has been harmed or accused, and slowly. A ruling can be changed by a higher court, or by changing the law that the ruling was about.</p>
      <p><b>Don’t confuse it with</b> The President and the agencies. Police and prosecutors enforce the law, and they are executive. The judge, who decides, is the court.</p>`},
  {h:'A state or a city',
   b:`<p><b>What it is.</b> Besides the federal government, each of the fifty states has its own government: a legislature (its lawmaking body) that writes state law, a governor (its chief executive), courts and police. Inside every state, cities and counties have governments of their own, such as a city council and a mayor. A rule made by a city or a county is called an ordinance. In this course “A state or a city” means any government below the federal one.</p>
      <p><b>Example.</b> Driving rules, marriage licences, public schools, most crimes and renting a home are all governed mainly by state and local law. A state requires barbers to hold a licence; a city decides where food trucks may park.</p>
      <p><b>Sounds like.</b> “The state legislature passed.” “The governor signed.” “The city council voted.” “A county ordinance.”</p>
      <p><b>Catch it.</b> Ask: is the rule being made, or the thing being done, by a state or by a city or county? If so, the answer to <b>Which part of government is acting, or being asked to act?</b> is <b>A state or a city</b>.</p>
      <p><b>What to do.</b> Look up your own state’s rule instead of assuming it matches another state’s. State rules differ and change when you move. Immigration and citizenship, however, are federal.</p>
      <p><b>Don’t confuse it with</b> the federal government. When a news story says only “the government”, ask which level. A federal court that sits inside your state is still part of the federal government.</p>`},

  {h:'The four answers side by side',
   b:`<p>The key’s first question is <b>Which part of government is acting, or being asked to act?</b> Here are its four answers, with the clue in a case that points to each.</p>
      <table class="k pair">
      <tr><th>What the case shows</th><th>The answer</th></tr>
      <tr><td>Lawmakers voting on a bill, on money, or on approving or removing someone</td><td><b>Congress</b>, the lawmakers</td></tr>
      <tr><td>An agency applying a law, the armed forces, a deal with another country, a signed or refused bill, an order from the President</td><td><b>The President and the agencies</b>, the ones who carry laws out</td></tr>
      <tr><td>A judge being asked to decide a dispute, hold a trial, say what a law means, or check it against the Constitution</td><td><b>The courts</b>, the judges</td></tr>
      <tr><td>A state legislature, a governor, a city council or a mayor making a rule</td><td><b>A state or a city</b>, state and local government</td></tr>
      </table>
      <p>Most stories mention more than one part of government. Use two rules to pick the one that counts. First, find the act the story is about, and whose act it is. Second, if the story hands the decision to another part (“the bill now goes to the Senate”, “the group asks a judge”), that other part is the one acting, or being asked to act.</p>`},
  {h:'Worked example: a story with two parts in it',
   b:`<p class="lead">“The labour agency issues a new rule saying office workers must be paid overtime after forty hours. A trade group says the agency has gone too far and asks a judge to block the rule.”</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b></p>
      <p>Two parts appear. The agency issued the rule, and an agency belongs to The President and the agencies. A first reading would stop there. But the question is about the act the story is about now, and the story ends with a request: the trade group “asks a judge to block the rule”. The decision has been handed to a judge, and a judge is part of The courts.</p>
      <p>So the answer is <b>The courts</b>. The agency is background: it explains why there is a dispute, but it is not the one being asked to decide.</p>
      <p><b>What would change it.</b> If the story had stopped after “the agency issues a new rule”, nobody would have been asked to decide anything else, and the answer would be <b>The President and the agencies</b>.</p>
      <p>The next questions for The courts come in Unit Three. For a state or a city they come next, in this unit.</p>`},
  {h:'Two governments over the same ground',
   b:`<p class="lead">If the answer to the first question is <b>A state or a city</b>, you are in the part of the key where most of daily life is decided, and it takes two more questions.</p>
      <p>You live under several governments at once: the federal government, your state, and your city or county. The Constitution gives the federal government a list of powers. That list includes immigration and citizenship, defending the country, making money, running the mail, and trade between states. Anything the list does not give is left to the states. The Tenth Amendment, an amendment being a change added to the Constitution, says exactly that. In turn each state hands some of its own power down to its cities and counties.</p>
      <p>Often only one level has any say. Sometimes two levels both do, and there are rules for which wins. And a few things are protected so strongly that no level may touch them. Two questions sort these cases:</p>
      <ul>
        <li><b>Where does the federal government stand?</b> Is it absent, already active, sharing the ground, or itself blocked?</li>
        <li><b>Who ends up with the say?</b> The state, a city or county, federal law, both, or nobody.</li>
      </ul>
      <p>Five names come out of those two questions. The next five cards teach them one at a time: Left to the states (reserved powers), Handed down to a city or county (local government), Federal law wins (preemption), Both may act, and Nobody may act — a protected right.</p>
      <div class="note"><b>Why this matters to a newcomer.</b> Immigration and citizenship are federal, and Congress has already written detailed statutes on both, so those rules follow you from state to state unchanged and a state cannot make its own. Driver’s licences, schools, marriage, most criminal law, renting a home and professional licences are mostly state or local, so they change when you move.</div>`},
  {h:'Left to the states (reserved powers)',
   b:`<p><b>What it is.</b> A subject the Constitution does not give to the federal government is left to the states. The Tenth Amendment says so, and lawyers call these “reserved powers”. The broad power a state has over health, safety and welfare is called its “police power”, which covers much more than the police. Most of the law an ordinary person meets lives here: driving, marriage, public schools, most crimes and the police who deal with them, the licences you need to work as a barber or a plumber, and renting a home.</p>
      <p><b>Example.</b> A state decides that anyone who fits pipes for money must pass a test and hold a state licence. Congress has written no federal rule about plumbers, and the Constitution lists none. So the state decides.</p>
      <p><b>Sounds like.</b> “Each state sets its own rules for…” “In this state you need…” “It varies by state.”</p>
      <p><b>Catch it.</b> Ask <b>Where does the federal government stand?</b> If the subject is not on the federal list and no federal law covers it, the answer is <b>It has no power here</b>. Then ask <b>Who ends up with the say?</b> If the state itself is making the rule, the answer is <b>The state, because the Constitution leaves this to the states</b>.</p>
      <p><b>What to do.</b> Look up your own state’s rule. Do not assume that the rule you knew in another state, or the one you saw on television, applies to you.</p>
      <p><b>Don’t confuse it with</b> Handed down to a city or county (local government). Both begin with “the federal government has no power here”. The difference is who is making the rule: the state itself, or a city or county using power the state gave it.</p>`},
  {h:'Handed down to a city or county (local government)',
   b:`<p><b>What it is.</b> Cities, towns and counties are not separate governments with powers taken straight from the Constitution. They hold the power their state gives them, usually in a state law or in a city charter, which is the founding document of a city. A rule a city makes is called an ordinance. The state can usually widen, narrow or take back that power. For most people this is still the level that touches daily life most: streets, parking, zoning (which kinds of building may go where), building permits, rubbish collection, parks and libraries.</p>
      <p><b>Example.</b> A town council passes a rule that front-yard fences may be no taller than four feet, and a county board votes to charge a fee for using its boat ramp. The state’s law lets towns and counties make rules like these.</p>
      <p><b>Sounds like.</b> “The council voted.” “A city ordinance.” “The county board.” “Zoning.” “You need a permit.”</p>
      <p><b>Catch it.</b> The federal government has no power over such a matter, so for <b>Where does the federal government stand?</b> the answer is <b>It has no power here</b>. For <b>Who ends up with the say?</b> ask who is really making the rule. If it is a city or a county, the answer is <b>A city or county, because the state handed the power down</b>.</p>
      <p><b>What to do.</b> For a local rule, check two places: the city or county’s own rules, and the state law above them. If the state has passed a law on the same subject, the state’s law usually wins.</p>
      <p><b>Don’t confuse it with</b> Left to the states (reserved powers). Ask whether the state itself is making the rule, or a city or county is, using power the state gave it.</p>`},
  {h:'Federal law wins (preemption)',
   b:`<p><b>What it is.</b> The Constitution calls federal law the “supreme law of the land”. This sentence is known as the Supremacy Clause. So where the federal government has the power to act, and has already acted, a state rule that gets in its way has to give way. The legal word is preemption: the federal rule pushes the state rule aside. It applies when the two rules clash, or when Congress meant the federal rule to be the only one on that subject.</p>
      <p>Federal law does not always win. It wins only where the federal government has power and has used it. On a subject that belongs to the states, a federal rule has no standing at all.</p>
      <p><b>Example.</b> Federal law gives federal agencies control of the country’s airspace. A state passes a law banning airplanes from flying over its state parks at night. The state rule gives way, because federal law already covers that subject and was meant to be the only rule.</p>
      <p><b>Sounds like.</b> “The state law conflicts with federal law.” “Washington already regulates this.” “Federal law overrides it.”</p>
      <p><b>Catch it.</b> Ask <b>Where does the federal government stand?</b> If the case shows a federal power and a federal law already in place, the answer is <b>It has power here and has already used it</b>. Then <b>Who ends up with the say?</b> is <b>Federal law, because it controls and the state rule gives way</b>.</p>
      <p><b>What to do.</b> Follow the federal rule. If a state or city rule seems to say the opposite, the federal one is the one that counts. Immigration is the everyday case a newcomer meets: Congress has already written detailed immigration statutes, so a state’s own rules about who may stay in the country give way to them.</p>
      <p><b>Don’t confuse it with</b> Both may act. The difference is whether the federal rule is the only rule (a state must give way) or only a minimum that a state may go beyond.</p>`},
  {h:'Both may act',
   b:`<p><b>What it is.</b> Some things both governments may do at the same time. Both tax income. Both run courts. And many federal laws set a minimum, called a floor, and leave states free to require more. When a state goes beyond a federal minimum nothing clashes, because someone who obeys the higher state rule meets the federal one as well.</p>
      <p><b>Example.</b> A federal law gives eligible workers up to twelve weeks of unpaid leave for a new baby. Some states add paid leave on top. Employers there follow both.</p>
      <p><b>Sounds like.</b> “On top of the federal requirement, the state also…” “At least the federal minimum.” “Both federal and state tax.”</p>
      <p><b>Catch it.</b> Ask <b>Where does the federal government stand?</b> If the case shows power on both sides, the answer is <b>It has power here, and so does the state: both may act</b>. Then <b>Who ends up with the say?</b> is <b>Both, because the federal rule is a minimum a state may go beyond</b>.</p>
      <p><b>What to do.</b> Obey whichever rule asks for more, because that satisfies both. If the federal law says it is the only rule on the subject, treat the case as Federal law wins (preemption) instead.</p>
      <p><b>Don’t confuse it with</b> Federal law wins (preemption). In Both may act the state rule adds to the federal one. In Federal law wins (preemption) it contradicts or replaces it.</p>`},
  {h:'Nobody may act — a protected right',
   b:`<p><b>What it is.</b> The Constitution protects some rights so strongly that no government may take them away: not the federal government, not a state, not a city. The First Amendment protects speech, religion, the press, peaceful assembly and the right to petition the government (to ask it to put right a wrong). The first ten amendments, the Bill of Rights, were first written to limit only the federal government. After the Civil War the Fourteenth Amendment (1868) was read to bring those limits to the states, so today they protect you against your state and your city too.</p>
      <p><b>Example.</b> A city passes an ordinance making it a crime to hand out leaflets that criticise the mayor. A city normally controls its own streets, but the right to speak is protected, so the city may not do this.</p>
      <p><b>Sounds like.</b> “It violates the First Amendment.” “You can’t be punished for saying that.” “The state can’t make that illegal.”</p>
      <p><b>Catch it.</b> Ask <b>Where does the federal government stand?</b> If a protected right is at stake, the answer is <b>No government may act, federal included: a right protects this</b>. Then <b>Who ends up with the say?</b> is <b>Nobody, because a right stops every government</b>.</p>
      <p><b>What to do.</b> When a right is involved, stop asking which government has the power: the right comes first. A person who is punished can go to court. Rights have edges, though. A city may still set neutral rules about when and where an event happens, such as a noise limit, as long as the rule does not target what is said.</p>
      <p><b>Don’t confuse it with</b> Left to the states (reserved powers). A state controls its own subjects, but its power stops where a protected right begins. Unit Four shows how this differs from “Beyond Congress’s reach” and “Trial rights (due process)”.</p>`},
  {h:'The states’ questions side by side',
   b:`<p>For a case where <b>A state or a city</b> is acting, the key asks two questions and the pair of answers gives the name.</p>
      <table class="k pair">
      <tr><th>Where does the federal government stand?</th><th>Who ends up with the say?</th><th>Name</th></tr>
      <tr><td>It has no power here</td><td>The state, because the Constitution leaves this to the states</td><td><b>Left to the states (reserved powers)</b></td></tr>
      <tr><td>It has no power here</td><td>A city or county, because the state handed the power down</td><td><b>Handed down to a city or county (local government)</b></td></tr>
      <tr><td>It has power here and has already used it</td><td>Federal law, because it controls and the state rule gives way</td><td><b>Federal law wins (preemption)</b></td></tr>
      <tr><td>It has power here, and so does the state: both may act</td><td>Both, because the federal rule is a minimum a state may go beyond</td><td><b>Both may act</b></td></tr>
      <tr><td>No government may act, federal included: a right protects this</td><td>Nobody, because a right stops every government</td><td><b>Nobody may act — a protected right</b></td></tr>
      </table>
      <p>Read the case in this order. First find who is making the rule. Then check whether the federal government has power over the subject and has used it, or whether a right stands in the way. Last, see who ends up with the say.</p>`},
  {h:'Worked example: a deposit law',
   b:`<p class="lead">“A state passes a law saying a landlord must return a tenant’s security deposit within thirty days of the tenant moving out.”</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b> “A state passes a law”: a state legislature. The answer is <b>A state or a city</b>.</p>
      <p><b>Step 2: Where does the federal government stand?</b> Renting a home is not on the federal list, and the case mentions no federal law about deposits. The answer is <b>It has no power here</b>.</p>
      <p><b>Step 3: Who ends up with the say?</b> The state itself made the rule. No city or county is involved, no federal rule clashes with it, and no protected right is touched. The answer is <b>The state, because the Constitution leaves this to the states</b>.</p>
      <p><b>Step 4: The name</b> is <b>Left to the states (reserved powers)</b>.</p>
      <p><b>What would change it.</b> If a city council had passed the same rule, step 3 would become “A city or county, because the state handed the power down”. If Congress had already set a different deposit deadline for all landlords, step 2 would become “It has power here and has already used it”, and the name would be Federal law wins (preemption). If the law made it a crime for a tenant to criticise a landlord in a newspaper, step 2 would become “No government may act, federal included: a right protects this”, and the name would be Nobody may act — a protected right.</p>`}
  ],
  drill:{kind:'pick', key:'n1'} },

{ tag:'Two', title:'The founding documents',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can say which founding document a sentence comes from, whether it is law, and where it plugs into the key’s answers.</p>
      <p>This is a unit of facts to remember, and it asks no new question of the key. But the key’s answers rest on these documents. “The Constitution lists this power for Congress”, “No listed power covers it, or a right forbids it” and “No government may act, federal included: a right protects this” all point into them. In ordinary life, news stories say “the First Amendment” or “the Constitution says” all the time, and the citizenship interview asks which document says what. Knowing which one a sentence comes from tells you how much weight it carries.</p>
      <p>The unit’s one question is <b>Which document is it?</b> It has five answers, each taught on its own card under the job it does:</p>
      <ul>
        <li><b>The Declaration of Independence</b>: why the country broke from Britain. Not law.</li>
        <li><b>The original Constitution (1787)</b>: how the government is built. Law.</li>
        <li><b>The Bill of Rights (1791)</b>: the first ten amendments, limits on government. Law.</li>
        <li><b>A later amendment</b>: any change added after 1791. Law.</li>
        <li><b>The Federalist Papers</b>: essays arguing for the Constitution. Not law.</li>
      </ul>
      <div class="note"><b>One thing that confuses people born here.</b> The Constitution is the whole of the country’s founding law: the original 1787 text plus all twenty-seven amendments. The Bill of Rights is the first ten of those amendments, so it is part of the Constitution. To keep the two apart, this course calls the 1787 text “the original Constitution”.</div>`},
  {h:'Why the Constitution was needed',
   b:`<p>The Declaration in 1776 announced a break with Britain, not a government. The thirteen former colonies first ran themselves under a plan called the Articles of Confederation, in force from 1781. It left the government of the whole country almost powerless, and within a few years it was plainly failing. In 1787 delegates met in Philadelphia to write a replacement.</p>
      <table class="k pair">
      <tr><th>What failed under the Articles</th><th>The fix in the Constitution</th></tr>
      <tr><td>Congress could not tax. It could only ask the states for money, and they often did not pay.</td><td>Congress may lay and collect taxes (Article I).</td></tr>
      <tr><td>Nobody ran trade between the states, and states taxed each other’s goods.</td><td>Congress may regulate trade between the states and with other countries (Article I).</td></tr>
      <tr><td>There was no President, so nobody carried laws out.</td><td>A President leads the executive branch (Article II).</td></tr>
      <tr><td>There were no national courts.</td><td>Federal courts, with a Supreme Court (Article III).</td></tr>
      <tr><td>Changing the plan needed all thirteen states to agree.</td><td>An amendment needs two-thirds of Congress and three-quarters of the states.</td></tr>
      </table>
      <p><b>Why this matters for “who decides”.</b> Every fix in the table is a power now on the list in Article I, or one of the three parts of government. The delegates also split the power among three parts, Congress, the President and the courts, because they had just fought a war against a government that decided everything. Having read these, you can see why the key’s first question has the answers it does.</p>
      <p>The timeline to remember: 1776 the Declaration; 1781 the Articles take effect; 1787 the convention in Philadelphia; 1789 the new government begins; 1791 the Bill of Rights.</p>`},
  {h:'The Declaration of Independence',
   b:`<p><b>What it is.</b> A statement to the world, adopted on July 4, 1776 and mainly written by Thomas Jefferson. It says the thirteen colonies are separating from Britain, and gives the reasons: a long list of complaints against the king. It also states two ideas that shaped everything after it. People have unalienable rights, meaning rights that cannot be taken away, among them life, liberty and the pursuit of happiness. And a government gets its power from the consent of the governed, meaning the people agreeing to be governed.</p>
      <p><b>Example.</b> A voter says, “Nobody forced us to accept this government, so we get a say in who runs it.” That is the Declaration’s idea of consent, which is why Americans vote. No court can order anyone to give you “the pursuit of happiness”, though, because the Declaration is not a law.</p>
      <p><b>Looks like.</b> “All men are created equal.” “Consent of the governed.” “He has refused…” followed by a charge against the king.</p>
      <p><b>Catch it.</b> Ask: is this an argument for why a government should exist, or why people may break from one, rather than a rule for running one? Then the answer to <b>Which document is it?</b> is <b>The Declaration of Independence</b>. It settles no step of the key. No case is decided by it.</p>
      <p><b>What to do.</b> Use it for the “why”, such as why power comes from the people. Do not cite it as a rule that a court must follow.</p>
      <p><b>Don’t confuse it with</b> The original Constitution (1787). The Declaration says why; the Constitution says how. It created no government, and it came eleven years before the Constitution was written.</p>`},
  {h:'The original Constitution (1787)',
   b:`<p><b>What it is.</b> The founding law, written in Philadelphia in 1787 and in force from 1789. It opens with the words “We the People” and is the supreme law of the land, which means it outranks every other law. The original text has seven articles. The first three build the three parts of government: Article I describes Congress, Article II the President, Article III the courts. It also says what each may do and, in places, what none may do.</p>
      <p><b>Example.</b> Congress passes a law setting up a postal service for the whole country. Where does it get the power? Article I lists the power “to establish Post Offices” among Congress’s powers. So the Constitution is the answer to “by what right?”</p>
      <p><b>Looks like.</b> “The Congress shall have Power to…” “The executive Power shall be vested in a President.” A numbered article and section.</p>
      <p><b>Catch it.</b> Ask: does the text set up a part of government or say what it may do? Then the answer to <b>Which document is it?</b> is <b>The original Constitution (1787)</b>. It is the source behind the key’s answer <b>The Constitution lists this power for Congress</b>.</p>
      <p><b>What to do.</b> When a case asks whether a part of government may do something, begin with the Constitution’s list for that part. The next card gives the list for Congress.</p>
      <p><b>Don’t confuse it with</b> The Bill of Rights (1791). The original Constitution is the 1787 text; the Bill of Rights was added to it four years later. Both are part of the Constitution.</p>`},
  {h:'The list of Congress’s powers (Article I)',
   b:`<p><b>What it is.</b> Article I, Section 8 lists what Congress may do. Congress may use only the powers on the list, plus the power to pass whatever laws are “necessary and proper” to carry them out. A power that is not on the list is not Congress’s. It is left to the states, or it is something no government may do.</p>
      <table class="k pair">
      <tr><th>A power on the list</th><th>What it looks like in life</th></tr>
      <tr><td>Lay and collect taxes; borrow money</td><td>The income tax. Government bonds.</td></tr>
      <tr><td>Regulate trade with other countries and between the states</td><td>Import rules. Rules for goods shipped across state lines.</td></tr>
      <tr><td>Set one rule for becoming a citizen</td><td>Who may naturalise and when.</td></tr>
      <tr><td>Coin money; run the post offices</td><td>The dollar. The mail.</td></tr>
      <tr><td>Declare war; raise and support armies and a navy</td><td>Congress votes a war into being and pays for the forces.</td></tr>
      <tr><td>Create federal courts below the Supreme Court</td><td>The courts a federal case begins in.</td></tr>
      </table>
      <p><b>Example.</b> A law that sets up the postal service is on the list. A rule on how many hours of training a barber needs is not, so the state has it.</p>
      <p><b>Sounds like.</b> “Congress has the power to…” “Article I.” “Under the commerce power” (commerce means trade). “Necessary and proper.”</p>
      <p><b>Catch it.</b> Ask: is the power on the list? If so, the key’s answer is <b>The Constitution lists this power for Congress</b>. If it is not, the key’s answer is <b>No listed power covers it, or a right forbids it</b>.</p>
      <p><b>What to do.</b> Check the list first. How far “trade between the states” reaches is argued in court all the time, so a close case may need a lawyer. The key treats it as a clearly listed power.</p>
      <p><b>Don’t confuse it with</b> a power the President has. The President’s powers come from Article II and are a much shorter list.</p>`},
  {h:'The Bill of Rights (1791)',
   b:`<p><b>What it is.</b> The first ten amendments to the Constitution, added in 1791 because several states refused to approve the Constitution until it promised written protection for individual rights. An amendment is a change added to the Constitution. The Bill of Rights is part of the Constitution and is law. Most of it is written as limits on what government may do to a person.</p>
      <p><b>Example.</b> You are stopped by the police and they want to search your bag without any reason. The Fourth Amendment, one of the ten, restricts unreasonable searches. It is the Bill of Rights doing its job.</p>
      <p><b>Looks like.</b> “Congress shall make no law…” “No person shall be…” “The right of the people…” “Amendment” followed by a number from one to ten.</p>
      <p><b>Catch it.</b> Ask: is it a limit on government, numbered from one to ten, added in 1791? Then the answer to <b>Which document is it?</b> is <b>The Bill of Rights (1791)</b>. It supplies two of the key’s answers: <b>No listed power covers it, or a right forbids it</b> and <b>No government may act, federal included: a right protects this</b>.</p>
      <p><b>What to do.</b> Learn the number-to-subject match on the next card. “The First Amendment” and “the Fifth” in the news point to specific protections.</p>
      <p><b>Don’t confuse it with</b> A later amendment. The Fourteenth Amendment protects rights too, but it is number fourteen, adopted in 1868, so it is not part of the Bill of Rights.</p>`},
  {h:'The rights the key uses',
   b:`<p>Six of the ten amendments matter most for the key. Learn these as number, then protection.</p>
      <table class="k pair">
      <tr><th>Amendment</th><th>What it protects</th><th>Where it plugs into the key</th></tr>
      <tr><td>First</td><td>Freedom of speech, religion, the press, peaceful assembly, and petition (asking the government to fix a wrong)</td><td>Nobody may act — a protected right</td></tr>
      <tr><td>Fourth</td><td>No unreasonable searches or seizures; police generally need a warrant, a judge’s written permission</td><td>Trial rights (due process)</td></tr>
      <tr><td>Fifth</td><td>You cannot be forced to testify against yourself (the right to remain silent). No punishment without due process, meaning fair legal steps. No second trial for the same crime.</td><td>Trial rights (due process)</td></tr>
      <tr><td>Sixth</td><td>A speedy, public jury trial; a lawyer; the right to hear and question the witnesses against you</td><td>Trial rights (due process)</td></tr>
      <tr><td>Eighth</td><td>No excessive bail (money paid to be released before trial) or fines; no cruel and unusual punishment</td><td>Trial rights (due process)</td></tr>
      <tr><td>Tenth</td><td>Powers not given to the federal government are kept by the states or the people</td><td>Left to the states (reserved powers)</td></tr>
      </table>
      <p>The right-hand column shows the name you will meet most often for each amendment. Whether a right blocks Congress, a court case or a state is decided by who is acting, and Unit Four shows how. The names are taught in full in Units One, Three and Four. The point here is the match: a case that mentions a lawyer, silence, a jury or a search is about the middle four.</p>
      <p><b>Why it matters.</b> These are the six that you will hear on the news. Each gives a fast answer to a question the key asks later, namely whether a right is involved.</p>`},
  {h:'A later amendment',
   b:`<p><b>What it is.</b> Any change added to the Constitution after 1791. There are seventeen of them so far (the Eleventh to the Twenty-seventh). Changing the Constitution is deliberately hard: two-thirds of both chambers of Congress must propose the change, and three-quarters of the states must approve it. Thousands have been proposed and only twenty-seven adopted, ten of them together in 1791. A later amendment is law just as the original text is.</p>
      <table class="k pair">
      <tr><th>Amendment (year)</th><th>What it did</th></tr>
      <tr><td>Thirteenth (1865)</td><td>Ended slavery</td></tr>
      <tr><td>Fourteenth (1868)</td><td>Three things. Anyone born here is a citizen. No state may take life, liberty or property without due process (fair legal steps), or deny anyone equal protection of the laws (equal treatment in the same situation). And the courts later read it to apply the Bill of Rights to the states.</td></tr>
      <tr><td>Fifteenth (1870)</td><td>The right to vote cannot be denied because of race</td></tr>
      <tr><td>Nineteenth (1920)</td><td>The right to vote cannot be denied because of sex</td></tr>
      <tr><td>Twenty-fourth (1964)</td><td>No poll tax, a fee to vote, in federal elections</td></tr>
      <tr><td>Twenty-sixth (1971)</td><td>The voting age lowered to eighteen</td></tr>
      </table>
      <p><b>Example.</b> A woman votes in 1924 for the first time. The Nineteenth Amendment, four years old, is why she may.</p>
      <p><b>Looks like.</b> “Amendment XIV.” “The Nineteenth Amendment.” “Ratified in 1920.” A number above ten, or a year after 1791.</p>
      <p><b>Catch it.</b> Ask: is it an amendment with a number above ten, or adopted after 1791? Then the answer to <b>Which document is it?</b> is <b>A later amendment</b>. The Fourteenth is the one the key leans on most: it is the reason a right can stop a state, which is the key’s answer <b>No government may act, federal included: a right protects this</b>.</p>
      <p><b>What to do.</b> When you hear a number, count: one to ten is the Bill of Rights; eleven and above is a later amendment.</p>
      <p><b>Don’t confuse it with</b> The Bill of Rights (1791). Both are amendments; what separates them is the number and the year.</p>`},
  {h:'The Federalist Papers',
   b:`<p><b>What it is.</b> Eighty-five newspaper essays published in New York in 1787 and 1788 under the pen name “Publius”. They were written by Alexander Hamilton, James Madison and John Jay to persuade New York to approve the new Constitution. They are not law. They are the writers’ own argument for why the Constitution is built the way it is.</p>
      <p><b>Example.</b> A judge wants to know why the founders split power among three parts. She quotes an essay from 1788 that argued each part would hold the others in check. The essay does not bind her. It helps her understand what the founders had in mind.</p>
      <p><b>Looks like.</b> A signed essay, “Publius”, arguments about why a part of government is needed, and “the people” as readers.</p>
      <p><b>Catch it.</b> Ask: is it an argument made to persuade people to approve the Constitution? Then the answer to <b>Which document is it?</b> is <b>The Federalist Papers</b>. It plugs into no step of the key, because it is not law.</p>
      <p><b>What to do.</b> Use it to understand intent, never as a rule. If someone says “the Federalist Papers require”, they have made the mistake.</p>
      <p><b>Don’t confuse it with</b> The original Constitution (1787). The essays defend the Constitution; they are not part of it.</p>`},
  {h:'The five documents side by side',
   b:`<p>The unit’s question is <b>Which document is it?</b> Here are its five answers, with what each one does and whether it is law.</p>
      <table class="k pair">
      <tr><th>Document</th><th>What it does</th><th>Law?</th></tr>
      <tr><td><b>The Declaration of Independence</b></td><td>Says why the colonies are leaving Britain: rights and consent</td><td>No</td></tr>
      <tr><td><b>The original Constitution (1787)</b></td><td>Builds the government: Congress, the President, the courts; lists Congress’s powers</td><td>Yes</td></tr>
      <tr><td><b>The Bill of Rights (1791)</b></td><td>The first ten amendments: limits on government</td><td>Yes</td></tr>
      <tr><td><b>A later amendment</b></td><td>Any change after 1791: ends slavery, widens the vote, and more</td><td>Yes</td></tr>
      <tr><td><b>The Federalist Papers</b></td><td>Essays that argued for approving the Constitution</td><td>No</td></tr>
      </table>
      <p>To decide quickly, ask two things. First: is it an argument or a rule? Arguments are the Declaration and the Federalist Papers. Second, for a rule: is it the 1787 text, or an amendment? An amendment numbered one to ten is the Bill of Rights, and eleven or above is a later amendment.</p>`},
  {h:'Worked example: whose words are these?',
   b:`<p class="lead">A speaker says, “The Constitution gives you the right to remain silent. It is in the Fifth Amendment.” Which document is that sentence from?</p>
      <p><b>Is it an argument or a rule?</b> “The right to remain silent” limits what the government may do to a person who is questioned. It is a rule, so it is law. That rules out the Declaration of Independence and the Federalist Papers, which are arguments.</p>
      <p><b>Is it the 1787 text or an amendment?</b> The speaker names “the Fifth Amendment”. An amendment is a later addition, so this is not the original Constitution (1787).</p>
      <p><b>What number?</b> Five is between one and ten, and the first ten were added together in 1791. So the answer is <b>The Bill of Rights (1791)</b>.</p>
      <p>The speaker also said “the Constitution”, and that is true too, because the Bill of Rights is part of the Constitution. The names in this course keep the two apart so that the question has one answer.</p>
      <p><b>Why it matters.</b> A right to silence is one of the trial rights, so this is the source behind the key’s name <b>Trial rights (due process)</b>.</p>
      <p><b>What would change it.</b> If the speaker had said “the Nineteenth Amendment”, the number is above ten and the answer would be A later amendment. If the speaker had said “Article III”, there is no amendment and the answer would be The original Constitution (1787).</p>`}
  ],
  drill:{kind:'pick', key:'n2'} },

{ tag:'Three', title:'How the branches work',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a case where Congress, the President or a court is acting, say exactly what it is doing and what limits it, and give it a name. Fourteen of the key’s nineteen names live here.</p>
      <p>Every news story about a bill, a veto, an order, a nomination or a ruling is one of these cases. The citizenship test also asks which chamber does what, so that is taught first, as facts to remember. Its question is <b>Which chamber or office?</b>, with four answers: <b>The House of Representatives</b>, <b>The Senate</b>, <b>Both chambers</b> and <b>The Vice President</b>. These facts matter for what follows, because several of the key’s answers say things like “the House brings the charge” or “the Senate must agree”. Then comes the method, in three parts, one for each part of government. For each part the key asks the same two kinds of question, in these exact words:</p>
      <table class="k pair">
      <tr><th>If the answer to “Which part of government is acting, or being asked to act?” is</th><th>the key asks</th></tr>
      <tr><td><b>Congress</b></td><td>What is Congress doing? Then: Which rule decides whether Congress can do this?</td></tr>
      <tr><td><b>The President and the agencies</b></td><td>What is the President, or an agency, doing? Then: What limits the President or the agency here?</td></tr>
      <tr><td><b>The courts</b></td><td>What is the court being asked to do? Then: What makes this a question for the court, or not?</td></tr>
      </table>
      <p>Each of those pairs leads to one name. Congress has five names, the President five, the courts four. For each name you get a card with what it is, an example, how to spot it and what to do. Each part ends with a table that puts its questions and names side by side, and a worked example. The unit closes with how the three parts check one another.</p>
      <div class="note">The fourth answer, <b>A state or a city</b>, was taught in Unit One. And Unit Four takes up one more thing that cuts across all of these: who a right protects.</div>`},
  {h:'The House of Representatives',
   b:`<p><b>What it is.</b> One of the two chambers of Congress. It has 435 voting members. Seats are divided among the states by population, so a state with more people has more representatives. Each member serves a two-year term, so every seat is up for election every two years, which keeps the House close to the voters’ mood. It chooses its own leader, called the Speaker of the House. It also has two special jobs: it brings the charge in an impeachment (explained further down), and bills to raise taxes must begin here.</p>
      <p><b>Example.</b> A state with 40 million people has dozens of representatives; a state with a few hundred thousand has one. Everyone lives in one district and has one representative for it.</p>
      <p><b>Sounds like.</b> “The House passed.” “Representative.” “The Speaker.” “Voted 230 to 200.”</p>
      <p><b>Catch it.</b> Ask: does the clue mention 435 members, population, two-year terms, a tax bill starting, or the charge in an impeachment? Then the answer to <b>Which chamber or office?</b> is <b>The House of Representatives</b>. The last clue is the first half of the key’s answer <b>The House brings the charge; the Senate holds the trial</b>.</p>
      <p><b>What to do.</b> You have one representative, for your district. The test wants the name of yours, so look it up fresh rather than memorising a list.</p>
      <p><b>Don’t confuse it with</b> The Senate. The House is bigger, based on population, with the short term. The Senate is smaller, two per state, with the long term.</p>`},
  {h:'The Senate',
   b:`<p><b>What it is.</b> The other chamber of Congress. It has 100 members, two for every state, however big or small the state is. A senator serves six years, and about a third of the seats are up for election every two years. The Senate has three special jobs. It approves (“confirms”) the President’s choices for federal judges and top officials, called nominees, by a majority. It approves treaties, by two-thirds of the senators present. And it holds the trial after an impeachment.</p>
      <p><b>Example.</b> A very small state and a very large one each send two senators. This was the compromise of 1787: big states got more seats in the House, and small states got equality in the Senate.</p>
      <p><b>Sounds like.</b> “The Senate confirmed.” “Confirmation hearing.” “Two senators.” “Ratified the treaty.”</p>
      <p><b>Catch it.</b> Ask: does the clue mention 100 members, two per state, six-year terms, confirming a nominee, approving a treaty, or holding an impeachment trial? Then the answer to <b>Which chamber or office?</b> is <b>The Senate</b>. Two of those are the key’s answers: <b>The Senate must agree: a majority for a person, two-thirds for a treaty</b>, and the second half of <b>The House brings the charge; the Senate holds the trial</b>.</p>
      <p><b>What to do.</b> When a story says the President “picked” someone for a top job or signed a treaty, ask whether the Senate has voted yet. Until it does, the pick is only a nomination.</p>
      <p><b>Don’t confuse it with</b> The House of Representatives. Count the members and the years in a term, and the difference is clear.</p>`},
  {h:'Both chambers',
   b:`<p><b>What it is.</b> Some things need the whole of Congress, meaning the House and the Senate together. A bill must pass both chambers in the same form, word for word, before it can go to the President. To override a veto, two-thirds of each chamber must vote. To propose an amendment to the Constitution, two-thirds of each chamber must agree. A bill that has passed only one chamber has done nothing yet.</p>
      <p><b>Example.</b> The House passes a bill about airport security. The Senate changes one section and passes its own version. Until the two chambers agree on a single text, the President has nothing to sign.</p>
      <p><b>Sounds like.</b> “Passed both chambers.” “Congress sent the President a bill.” “Two-thirds of both chambers.”</p>
      <p><b>Catch it.</b> Ask: does the action need both chambers to agree? Then the answer to <b>Which chamber or office?</b> is <b>Both chambers</b>. Writing a rule that binds the whole country needs exactly that, which is why it is one of the key’s answers to <b>What is Congress doing?</b>: <b>Writing a rule that binds the whole country</b>.</p>
      <p><b>What to do.</b> When you read “the House passed a bill”, remember it is only halfway. The Senate and the President still have to act.</p>
      <p><b>Don’t confuse it with</b> a job that belongs to one chamber alone. Bringing the charge in an impeachment is the House’s alone, and confirming a nominee is the Senate’s alone.</p>`},
  {h:'The Vice President',
   b:`<p><b>What it is.</b> The Vice President is elected along with the President and has two jobs. One is to preside over the Senate and cast the deciding vote only when the senators are tied. The other is to be first in line to become President if the President dies, resigns or is removed. After the Vice President, the next in line is the Speaker of the House, who leads the House. The Vice President belongs to the executive branch, not to Congress.</p>
      <p><b>Example.</b> In 1974 President Nixon resigned. Within hours Vice President Gerald Ford took the oath of office and became President, because the Vice President is first in line.</p>
      <p><b>Sounds like.</b> “Broke the tie.” “President of the Senate.” “Next in line.” “Sworn in after the President resigned.”</p>
      <p><b>Catch it.</b> Ask: does the clue mention breaking a tie in the Senate, or taking over for the President? Then the answer to <b>Which chamber or office?</b> is <b>The Vice President</b>. It is a fact to remember, with no step of the key attached.</p>
      <p><b>What to do.</b> Remember that the Vice President votes in the Senate only to break a tie. The test also asks who the current Vice President is, which changes, so look it up.</p>
      <p><b>Don’t confuse it with</b> a senator. The Vice President is not a member of the Senate and does not vote except to break a tie.</p>`},
  {h:'The four answers side by side',
   b:`<p>The unit’s question is <b>Which chamber or office?</b> Here are its four answers.</p>
      <table class="k pair">
      <tr><th>Name</th><th>Size and term</th><th>What only it does</th></tr>
      <tr><td><b>The House of Representatives</b></td><td>435 voting members, by population. Two years.</td><td>Brings the charge in an impeachment. Tax bills begin here.</td></tr>
      <tr><td><b>The Senate</b></td><td>100 members, two per state. Six years.</td><td>Confirms nominees. Approves treaties by two-thirds. Holds the impeachment trial.</td></tr>
      <tr><td><b>Both chambers</b></td><td>The House and the Senate together</td><td>Pass every bill in the same form. Override a veto, and propose an amendment, with two-thirds of each.</td></tr>
      <tr><td><b>The Vice President</b></td><td>One person, elected with the President. Four years.</td><td>Breaks ties in the Senate. First in line to become President.</td></tr>
      </table>
      <p>The easiest way to keep these straight is to ask what the clue counts: members, years, or tied votes. Counting 435 or two-year terms points to the House; 100 or six years points to the Senate; tied points to the Vice President; and “identical form” or “two-thirds of each” points to both chambers.</p>`},
  {h:'Congress: two questions, five names',
   b:`<p class="lead">When the answer to the first question is <b>Congress</b>, the key asks <b>What is Congress doing?</b> and then <b>Which rule decides whether Congress can do this?</b></p>
      <p>The first question sorts the act into four kinds: <b>Writing a rule that binds the whole country</b>, <b>Deciding what gets funded</b>, <b>Approving a person or an agreement the President proposes</b>, and <b>Removing a federal official for misconduct</b>. The second question gives the rule that decides whether Congress is allowed to do it. Together they lead to five names, and the next five cards teach them one at a time.</p>
      <p>Writing a rule that binds the whole country leads to two names, because the same act can be either allowed or not. The other three kinds each lead to one name.</p>
      <div class="note"><b>Why bother with the second question?</b> Because Congress is not free to do everything. A bill can pass both chambers and be signed, and still be invalid if the Constitution gives Congress no such power. The second question is how you tell.</div>`},
  {h:'A listed power of Congress (enumerated power)',
   b:`<p><b>What it is.</b> Congress writing a rule for the whole country using a power the Constitution lists for it. The list is in Article I (Unit Two). Lawyers call a power on that list an “enumerated” power, meaning one written out item by item. Both chambers pass a bill, the President signs it, and it becomes a statute that applies everywhere.</p>
      <p><b>Example.</b> Congress sets a federal tax on gasoline. Taxing is on the list, so Congress may do it.</p>
      <p><b>Sounds like.</b> “Congress passed a law requiring…” “Under its power to tax.” “Under its power to regulate trade between the states.” “The statute sets…”</p>
      <p><b>Catch it.</b> Ask <b>What is Congress doing?</b> If it is writing a rule for the whole country, the answer is <b>Writing a rule that binds the whole country</b>. Then ask <b>Which rule decides whether Congress can do this?</b> If the power is on the list, the answer is <b>The Constitution lists this power for Congress</b>.</p>
      <p><b>What to do.</b> Treat the rule as valid and as binding in every state. Only Congress can change a statute, so a protest to an agency will not undo it.</p>
      <p><b>Don’t confuse it with</b> Beyond Congress’s reach. Both begin with Congress writing a rule. The difference is the second answer: here the power is on the list, and there it is not, or a right forbids it.</p>`},
  {h:'Congress controls the money (power of the purse)',
   b:`<p><b>What it is.</b> The government may spend nothing unless Congress votes the money. A law that sets money aside for a purpose is called an appropriation. Congress also raises the money, by taxes. Together this is called the power of the purse. It means Congress can stop a programme without forbidding it: it just does not fund it.</p>
      <p><b>Example.</b> Congress and the President cannot agree on a budget by the deadline, so the money runs out. National parks close their gates and many federal workers are sent home without pay until Congress votes the money. Nobody has forbidden anything. The money simply is not there.</p>
      <p><b>Sounds like.</b> “The budget.” “The spending bill.” “Congress cut the funding.” “A government shutdown”, which happens when the money has not been voted.</p>
      <p><b>Catch it.</b> Ask <b>What is Congress doing?</b> If it is choosing what gets paid for, the answer is <b>Deciding what gets funded</b>. Then ask <b>Which rule decides whether Congress can do this?</b> The answer is <b>Only Congress can vote money to be spent</b>.</p>
      <p><b>What to do.</b> When a programme is stuck, ask where its money comes from. Whether it is funded is Congress’s decision, and to change it you speak to the people in Congress.</p>
      <p><b>Don’t confuse it with</b> Carrying out the law. An agency spends the money after Congress has voted it, but the agency does not decide how much there is.</p>`},
  {h:'The Senate must agree (advice and consent)',
   b:`<p><b>What it is.</b> Some actions of the President take effect only if the Senate agrees. For a person, such as a judge, an ambassador or the head of an agency, a majority of the senators must vote yes. For a treaty, which is a formal agreement with another country, two-thirds of the senators present must vote yes, which is called ratifying the treaty. The Constitution calls this the Senate’s “advice and consent”. The House has no part in it.</p>
      <p><b>Example.</b> The President names someone to run the tax agency. The Senate holds a hearing and votes. Only if a majority says yes does she take the job. Until then she is only a nominee.</p>
      <p><b>Sounds like.</b> “The Senate confirmed.” “A confirmation hearing.” “The Senate ratified the treaty.” “Awaiting Senate approval.”</p>
      <p><b>Catch it.</b> Ask <b>What is Congress doing?</b> If the Senate is being asked to approve someone or something the President put forward, the answer is <b>Approving a person or an agreement the President proposes</b>. Then ask <b>Which rule decides whether Congress can do this?</b> The answer is <b>The Senate must agree: a majority for a person, two-thirds for a treaty</b>.</p>
      <p><b>What to do.</b> Do not call someone “appointed” until the Senate has voted. The two different thresholds are worth remembering: a majority for a person, two-thirds for a treaty.</p>
      <p><b>Don’t confuse it with</b> Dealing with other countries (foreign affairs and treaties). That is the President’s side: negotiating and signing. This card is the Senate’s side, deciding whether the agreement binds. The same treaty is both, at different moments.</p>`},
  {h:'Charging and removing an official (impeachment)',
   b:`<p><b>What it is.</b> The way Congress can remove a federal official, such as a judge or even the President, for serious misconduct. It takes two steps in two chambers. First the House votes by majority to bring the charge, in a document called articles of impeachment. That is called impeaching, and it does not remove anyone. Then the Senate holds a trial, and two-thirds of the senators must vote to convict. Only then is the official removed. It is not a criminal punishment: if the official also broke a criminal law, the ordinary courts deal with that separately.</p>
      <p><b>Example.</b> The House impeaches a cabinet officer, one of the President’s department heads, for lying under oath to Congress. In the Senate trial, fifty-two senators vote to convict, fewer than the two-thirds needed. The officer is impeached but stays in the job.</p>
      <p><b>Sounds like.</b> “Articles of impeachment.” “The House impeached.” “The Senate trial.” “Convicted and removed.”</p>
      <p><b>Catch it.</b> Ask <b>What is Congress doing?</b> If it is trying to get rid of an official for misconduct, the answer is <b>Removing a federal official for misconduct</b>. Then ask <b>Which rule decides whether Congress can do this?</b> The answer is <b>The House brings the charge; the Senate holds the trial</b>.</p>
      <p><b>What to do.</b> In a news story keep the two steps apart: “impeached” means charged, and “removed” means convicted by the Senate.</p>
      <p><b>Don’t confuse it with</b> a criminal trial. Impeachment decides only whether someone keeps a public job, and nobody goes to prison because of it.</p>`},
  {h:'Beyond Congress’s reach',
   b:`<p><b>What it is.</b> Congress acts, but the Constitution gives it no power for that, or a right forbids it. A bill that passed both chambers and was signed is still not valid. Two things put an act beyond Congress’s reach. One is that the power is not on the list, so it belongs to the states. The other is that a right forbids it: the First Amendment begins “Congress shall make no law…”. A court can strike such a law down.</p>
      <p><b>Example.</b> Congress passes a law ordering every newspaper to print a government notice on its front page each week. The right to a free press forbids it, however the vote went. A second example: Congress passes a law fixing the hours that barbers may work in every state. Barber rules are not on Congress’s list, so they are left to the states.</p>
      <p><b>Sounds like.</b> “Congress overstepped.” “Unconstitutional.” “The Constitution gives Congress no power to…”</p>
      <p><b>Catch it.</b> Ask <b>What is Congress doing?</b> It is <b>Writing a rule that binds the whole country</b>. Then ask <b>Which rule decides whether Congress can do this?</b> If no listed power covers it, or a right forbids it, the answer is <b>No listed power covers it, or a right forbids it</b>.</p>
      <p><b>What to do.</b> Never assume a law is valid because it passed. Ask which power or which right. A person the law has actually harmed can take it to court (see “A court checks a law (judicial review)”, below).</p>
      <p><b>Don’t confuse it with</b> A listed power of Congress (enumerated power), where the second answer is the opposite, or with Nobody may act — a protected right, which is the name used when a state or a city is the one acting.</p>`},

  {h:'Congress’s questions side by side',
   b:`<p>For a case where <b>Congress</b> is acting, the key asks two questions and the pair of answers gives the name.</p>
      <table class="k pair">
      <tr><th>What is Congress doing?</th><th>Which rule decides whether Congress can do this?</th><th>Name</th></tr>
      <tr><td>Writing a rule that binds the whole country</td><td>The Constitution lists this power for Congress</td><td><b>A listed power of Congress (enumerated power)</b></td></tr>
      <tr><td>Writing a rule that binds the whole country</td><td>No listed power covers it, or a right forbids it</td><td><b>Beyond Congress’s reach</b></td></tr>
      <tr><td>Deciding what gets funded</td><td>Only Congress can vote money to be spent</td><td><b>Congress controls the money (power of the purse)</b></td></tr>
      <tr><td>Approving a person or an agreement the President proposes</td><td>The Senate must agree: a majority for a person, two-thirds for a treaty</td><td><b>The Senate must agree (advice and consent)</b></td></tr>
      <tr><td>Removing a federal official for misconduct</td><td>The House brings the charge; the Senate holds the trial</td><td><b>Charging and removing an official (impeachment)</b></td></tr>
      </table>
      <p>The first question tells you what kind of act it is. The second tells you whether Congress had the right to do it, or what has to happen next. Only the first kind of act leads to two names, so it is the one to look at most carefully.</p>`},
  {h:'Worked example: a budget fight',
   b:`<p class="lead">“A city’s new airport terminal depends on a federal grant. The spending bill Congress passes this year has no money for the grant, so the city puts the building off.”</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b> Two parts could be involved: the agency that would pay out the grant, and Congress, which passed the spending bill. But the thing that settles the story is what the spending bill contains. The story is about the bill “Congress passes”, and the answer is <b>Congress</b>.</p>
      <p><b>Step 2: What is Congress doing?</b> It is choosing which items get paid for: the bill has “no money for the grant”. The answer is <b>Deciding what gets funded</b>.</p>
      <p><b>Step 3: Which rule decides whether Congress can do this?</b> Nothing is spent unless Congress votes the money, so an agency cannot pay a grant that has no money behind it. The answer is <b>Only Congress can vote money to be spent</b>.</p>
      <p><b>Step 4: The name</b> is <b>Congress controls the money (power of the purse)</b>.</p>
      <p><b>What would change it.</b> If the money had already been voted and an agency were now paying the grant out, the first answer would be The President and the agencies, and the name would be Carrying out the law. If the story were about the Senate voting on the President’s choice to run the airport agency, step 2 would be “Approving a person or an agreement the President proposes”.</p>`},
  {h:'The President: two questions, five names',
   b:`<p class="lead">When the answer to the first question is <b>The President and the agencies</b>, the key asks <b>What is the President, or an agency, doing?</b> and then <b>What limits the President or the agency here?</b></p>
      <p>Article II of the Constitution gives the President the job of carrying out the laws. The President serves a four-year term, and the Twenty-second Amendment limits anyone to being elected twice. Everything the President does falls into five kinds: <b>Applying a law Congress already passed</b>, <b>Directing the armed forces</b>, <b>Dealing with another country</b>, <b>Vetoing a bill, or pardoning a federal conviction</b>, and <b>Ordering something new that no law from Congress allows</b>.</p>
      <p>The second question is always about a limit, because almost every presidential power has one built in. Knowing the limit is what lets you spot when someone has gone past it.</p>
      <div class="note"><b>The President is not a king, and not a lawmaker.</b> The President carries out what Congress passes and has a handful of powers of his or her own. Most stories that say “the President did X” are really about an agency or about one of these five.</div>`},
  {h:'Carrying out the law',
   b:`<p><b>What it is.</b> The executive branch putting a statute into practice. Congress writes the law in general terms. The agencies write the detailed rules (regulations), process applications, inspect, collect and enforce. An agency’s power is borrowed from the statute, so it may go no further than the statute allows.</p>
      <p><b>Example.</b> A statute creates a student-loan programme. The education agency writes the forms, sets how the interest is calculated within the statute’s limits, and processes the applications.</p>
      <p><b>Sounds like.</b> “The agency announced new rules.” “Implementing the law.” “Enforcement.” “The inspection found…”</p>
      <p><b>Catch it.</b> Ask <b>What is the President, or an agency, doing?</b> If it is putting an existing law into practice, the answer is <b>Applying a law Congress already passed</b>. Then ask <b>What limits the President or the agency here?</b> The answer is <b>An agency may go no further than the law allows</b>.</p>
      <p><b>What to do.</b> Ask which statute stands behind the rule. A rule that goes past its statute can be challenged in court. For immigration, a form or a fee is usually an agency’s rule under a statute Congress wrote.</p>
      <p><b>Don’t confuse it with</b> Beyond the President’s reach. Both can be an agency’s rule. The difference is whether a statute stands behind it, or whether it goes beyond the statute.</p>`},
  {h:'Commanding the armed forces (commander in chief)',
   b:`<p><b>What it is.</b> The President is “commander in chief” of the army, navy, air force and other armed forces. The President gives them orders and chooses their leaders. But the power is split on purpose: only Congress can declare war, and Congress votes the money to pay for the forces. So the one who commands the forces is not the one who starts a war or pays for it.</p>
      <p><b>Example.</b> The President orders a ship carrying troops to begin a long exercise with an allied navy. That is a command.</p>
      <p><b>Sounds like.</b> “The commander in chief ordered.” “Troops were deployed.” “The Pentagon said.”</p>
      <p><b>Catch it.</b> Ask <b>What is the President, or an agency, doing?</b> If it is giving orders to the armed forces, the answer is <b>Directing the armed forces</b>. Then ask <b>What limits the President or the agency here?</b> The answer is <b>Only Congress can declare war and pay for it</b>.</p>
      <p><b>What to do.</b> When a story says the President “declared war”, check: only Congress can. Ask whether Congress has voted, and whether it is paying.</p>
      <p><b>Don’t confuse it with</b> Congress controls the money (power of the purse). The President commands; Congress pays. Both appear in most war stories.</p>`},
  {h:'Dealing with other countries (foreign affairs and treaties)',
   b:`<p><b>What it is.</b> The President speaks for the country abroad. The President receives other countries’ leaders, chooses ambassadors (the Senate must approve them) and negotiates agreements. A treaty is a formal agreement with another country. The President negotiates and signs it, but it does not bind the country until two-thirds of the Senate approve. Presidents also make “executive agreements”, which need no Senate vote but bind less and can be changed by the next President.</p>
      <p><b>Example.</b> The President meets a foreign leader and they agree on new arrangements for exchange students. Whether it becomes a treaty depends on whether it goes to the Senate.</p>
      <p><b>Sounds like.</b> “The administration negotiated.” “A summit.” “Signed an agreement.” “Awaiting ratification.”</p>
      <p><b>Catch it.</b> Ask <b>What is the President, or an agency, doing?</b> If it is dealing with another country, the answer is <b>Dealing with another country</b>. Then ask <b>What limits the President or the agency here?</b> The answer is <b>A treaty does not bind anyone until two-thirds of the Senate agree</b>.</p>
      <p><b>What to do.</b> For a “deal” with another country, ask whether the Senate has approved it. If not, it is not yet a treaty.</p>
      <p><b>Don’t confuse it with</b> The Senate must agree (advice and consent). It is the same treaty seen from the other side. If the story is about the negotiating, the President is acting. If the story hands the agreement to the Senate to vote on, the Senate is acting.</p>`},
  {h:'Veto and pardon',
   b:`<p><b>What it is.</b> Two powers. A veto is the President’s refusal to sign a bill: the bill goes back to Congress with the President’s objections, and Congress can pass it anyway by a two-thirds vote in each chamber. If the President neither signs nor vetoes within ten days (Sundays not counted) while Congress is in session, the bill becomes law without a signature. A pardon is forgiveness for a federal crime. It reaches federal crimes only; a person convicted under state law has to ask the governor of the state.</p>
      <p><b>Example.</b> A bill on farm payments reaches the President, who vetoes it. Two-thirds of the House vote to override but the Senate falls short. The bill dies. In another case a person convicted of federal tax fraud receives a presidential pardon.</p>
      <p><b>Sounds like.</b> “Vetoed.” “Overridden.” “Granted a pardon.”</p>
      <p><b>Catch it.</b> Ask <b>What is the President, or an agency, doing?</b> If it is refusing a bill or forgiving a federal conviction, the answer is <b>Vetoing a bill, or pardoning a federal conviction</b>. Then ask <b>What limits the President or the agency here?</b> The answer is <b>Congress can override a veto with two-thirds of both chambers; a pardon covers federal crimes only</b>.</p>
      <p><b>What to do.</b> A state conviction cannot be pardoned by the President. Look to the governor.</p>
      <p><b>Don’t confuse it with</b> a court decision. A pardon does not say the person was innocent. It forgives the punishment, and no judge is involved.</p>`},
  {h:'Beyond the President’s reach',
   b:`<p><b>What it is.</b> The President or an agency acts, but no law from Congress allows it. An executive order, a written instruction from the President to the agencies, can tell the executive branch how to carry out laws that already exist. It cannot create a new tax, a new crime or a new duty for private people, because those need a statute. An order can also be reversed by the next President with another order, and a court can strike one down if it goes past the law.</p>
      <p><b>Example.</b> The President signs an order requiring every private company to pay each worker ten per cent more. No statute gives the President that power. The name for this is <b>Beyond the President’s reach</b>.</p>
      <p><b>Sounds like.</b> “An executive order requires…” “Without Congress.” “Exceeds his authority.” “Challenged in court.”</p>
      <p><b>Catch it.</b> Ask <b>What is the President, or an agency, doing?</b> If it is demanding something new, the answer is <b>Ordering something new that no law from Congress allows</b>. Then ask <b>What limits the President or the agency here?</b> The answer is <b>Only a law from Congress can do it; an order cannot</b>.</p>
      <p><b>What to do.</b> Ask which statute authorises it. If there is none, expect a court challenge, and expect that a new President could undo it with a signature.</p>
      <p><b>Don’t confuse it with</b> Carrying out the law. Both can be an order or a rule. In Carrying out the law a statute stands behind it, and here none does.</p>`},
  {h:'The President’s questions side by side',
   b:`<p>For a case where <b>The President and the agencies</b> are acting, the key asks two questions and the pair of answers gives the name.</p>
      <table class="k pair">
      <tr><th>What is the President, or an agency, doing?</th><th>What limits the President or the agency here?</th><th>Name</th></tr>
      <tr><td>Applying a law Congress already passed</td><td>An agency may go no further than the law allows</td><td><b>Carrying out the law</b></td></tr>
      <tr><td>Directing the armed forces</td><td>Only Congress can declare war and pay for it</td><td><b>Commanding the armed forces (commander in chief)</b></td></tr>
      <tr><td>Dealing with another country</td><td>A treaty does not bind anyone until two-thirds of the Senate agree</td><td><b>Dealing with other countries (foreign affairs and treaties)</b></td></tr>
      <tr><td>Vetoing a bill, or pardoning a federal conviction</td><td>Congress can override a veto with two-thirds of both chambers; a pardon covers federal crimes only</td><td><b>Veto and pardon</b></td></tr>
      <tr><td>Ordering something new that no law from Congress allows</td><td>Only a law from Congress can do it; an order cannot</td><td><b>Beyond the President’s reach</b></td></tr>
      </table>
      <p>Each row pairs an act with its limit. The fifth row is the odd one out, because there the limit is the whole point: the act is one that only Congress could have done.</p>`},
  {h:'Worked example: an airline rule',
   b:`<p class="lead">“A statute says airlines must tell passengers about delays. The transport agency then writes a rule saying the notice must be sent within thirty minutes of the delay.”</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b> The story ends with an agency writing a rule. An agency belongs to <b>The President and the agencies</b>. Congress wrote the statute, but that is background.</p>
      <p><b>Step 2: What is the President, or an agency, doing?</b> The agency is working out the details of a law that already exists: “a statute says… the agency then writes a rule”. The answer is <b>Applying a law Congress already passed</b>.</p>
      <p><b>Step 3: What limits the President or the agency here?</b> The rule is about delay notices, exactly what the statute covers. The agency has stayed inside its statute. The answer is <b>An agency may go no further than the law allows</b>.</p>
      <p><b>Step 4: The name</b> is <b>Carrying out the law</b>.</p>
      <p><b>What would change it.</b> If the agency’s rule had banned flights on holidays, nothing in the statute allows that. Step 2 would be “Ordering something new that no law from Congress allows”, and the name would be Beyond the President’s reach. If the story had been about the President ordering warships to a harbour, step 2 would be “Directing the armed forces”.</p>`},

  {h:'The courts: two questions, four names',
   b:`<p class="lead">When the answer to the first question is <b>The courts</b>, the key asks <b>What is the court being asked to do?</b> and then <b>What makes this a question for the court, or not?</b></p>
      <p>Federal courts are the third part of the federal government. The Supreme Court has nine justices, a number set by Congress and not by the Constitution. Federal judges are nominated by the President, confirmed by the Senate, and serve “during good behaviour”, which in practice means for life. A court acts only on a real case, never on a general question, so the second question is always some version of “is this really the court’s to decide?”</p>
      <p>What a court is asked to do falls into four kinds: <b>Check a law against the Constitution</b>, <b>Make sure someone’s trial rights are followed</b>, <b>Say what a law’s words cover</b>, and <b>Decide which policy would be better</b>. The last is the one a court should refuse. The next four cards teach the four names.</p>`},
  {h:'A court checks a law (judicial review)',
   b:`<p><b>What it is.</b> A court compares a law, or an act of government, with the Constitution. If the two clash, the court refuses to apply the law, which is called striking it down. The Constitution never says in words that courts may do this. The Supreme Court claimed the power in <i>Marbury v. Madison</i> in 1803, and it has been used ever since. There is a firm limit: the court needs a real case brought by a person the law has actually harmed. It does not rule on a law just because someone asks whether it is allowed, and it does not give advice in advance.</p>
      <p><b>Example.</b> A city bans street musicians. A woman fined for singing on a corner sues, saying the ban breaks the First Amendment. The court agrees, and the city can no longer enforce the ban.</p>
      <p><b>Sounds like.</b> “Struck down.” “Ruled unconstitutional.” “The court held that the law violates…”</p>
      <p><b>Catch it.</b> Ask <b>What is the court being asked to do?</b> If it is asked whether a law fits the Constitution, the answer is <b>Check a law against the Constitution</b>. Then ask <b>What makes this a question for the court, or not?</b> If someone harmed by the law has brought a real case, the answer is <b>A person the law actually harmed has brought a real case</b>.</p>
      <p><b>What to do.</b> If a law harms you, a lawsuit is the route, and you will need to show the harm. Do not expect a court to answer “is this law a good idea?” (see “A choice for voters, not judges (political question)”, below).</p>
      <p><b>Don’t confuse it with</b> A court says what a law means (interpreting a statute). Here the law itself is under attack; there the law is accepted, and the question is only what its words cover.</p>`},
  {h:'Trial rights (due process)',
   b:`<p><b>What it is.</b> When the government accuses someone of a crime, the Constitution requires fair steps before any punishment. These steps are called due process. The main ones: no unreasonable searches (Fourth Amendment); the right to stay silent, and no punishment without fair legal steps (Fifth); a speedy public trial by a jury, a lawyer, and the right to question the witnesses against you (Sixth); no excessive bail and no cruel and unusual punishment (Eighth). If you cannot pay for a lawyer in a criminal case, one is appointed for you. The court’s job is to make sure these steps are followed. These rights protect everyone, not only citizens (Unit Four).</p>
      <p><b>Example.</b> A man arrested for theft says the police kept questioning him after he asked for a lawyer. The judge decides whether his statements can be used at trial.</p>
      <p><b>Sounds like.</b> “Read his rights.” “A fair trial.” “Due process.” “The right to counsel.”</p>
      <p><b>Catch it.</b> Ask <b>What is the court being asked to do?</b> If it is protecting someone accused of a crime, the answer is <b>Make sure someone’s trial rights are followed</b>. Then ask <b>What makes this a question for the court, or not?</b> The answer is <b>The Constitution itself promises these steps</b>.</p>
      <p><b>What to do.</b> If you are ever arrested or questioned in a criminal case, you may say that you want a lawyer and that you will stay silent. Immigration proceedings are civil, not criminal, meaning the person is not on trial for a crime, so some of these rights work differently there (Unit Four).</p>
      <p><b>Don’t confuse it with</b> A court checks a law (judicial review). Here nobody argues that the law is invalid. The question is whether the steps of the process were followed.</p>`},
  {h:'A court says what a law means (interpreting a statute)',
   b:`<p><b>What it is.</b> Most of what courts do. A statute’s words have to be applied to situations the writers never pictured. The judge looks at the words, the rest of the statute, what it was for, and earlier court decisions on the same words, called precedent, which later cases follow as guidance. The judge’s own view of whether the rule is a good one does not decide it. If Congress disagrees with the ruling, it can rewrite the statute.</p>
      <p><b>Example.</b> A statute gives a tax break for “a dwelling”. A woman who lives on a houseboat claims it. The court has to decide whether a houseboat is a dwelling.</p>
      <p><b>Sounds like.</b> “The court interpreted the statute.” “The ruling clarifies.” “The word ‘dwelling’ includes…”</p>
      <p><b>Catch it.</b> Ask <b>What is the court being asked to do?</b> If it is asked what a law’s words cover, the answer is <b>Say what a law’s words cover</b>. Then ask <b>What makes this a question for the court, or not?</b> The answer is <b>The law’s words and earlier rulings decide it, not the judge’s taste</b>.</p>
      <p><b>What to do.</b> Read the statute’s words and look for earlier rulings on them. Once a court has ruled, the ruling guides everyone else in a similar position.</p>
      <p><b>Don’t confuse it with</b> A court checks a law (judicial review). Here the law is valid, and the question is only how far its words reach.</p>`},
  {h:'A choice for voters, not judges (political question)',
   b:`<p><b>What it is.</b> Some disputes are about which policy is better, not about what the law says. The Constitution leaves those choices to voters and the leaders they elect, and a court will decline. Lawyers call this a political question. “Political” here does not mean partisan. It means a choice made by voting, not by a legal test.</p>
      <p><b>Example.</b> A group of citizens asks a judge to order Congress to pass a law that lowers the price of gasoline. No law or constitutional rule requires it, so there is nothing for the judge to apply, and the answer is that the citizens should use their votes.</p>
      <p><b>Sounds like.</b> “The court declined to decide.” “That is a matter for the legislature.” “Not for the courts.”</p>
      <p><b>Catch it.</b> Ask <b>What is the court being asked to do?</b> If it is asked which policy would be better, the answer is <b>Decide which policy would be better</b>. Then ask <b>What makes this a question for the court, or not?</b> The answer is <b>No law is in dispute: it is for voters and the leaders they elect to decide</b>.</p>
      <p><b>What to do.</b> If you want a policy changed, use votes, petitions, letters to your representatives and organised campaigns. A lawsuit will not do it.</p>
      <p><b>Don’t confuse it with</b> A court checks a law (judicial review). If the policy breaks the Constitution, for example by singling out a religion, that is a legal question, and the court can decide it.</p>`},
  {h:'The courts’ questions side by side',
   b:`<p>For a case where <b>The courts</b> are being asked to act, the key asks two questions and the pair of answers gives the name.</p>
      <table class="k pair">
      <tr><th>What is the court being asked to do?</th><th>What makes this a question for the court, or not?</th><th>Name</th></tr>
      <tr><td>Check a law against the Constitution</td><td>A person the law actually harmed has brought a real case</td><td><b>A court checks a law (judicial review)</b></td></tr>
      <tr><td>Make sure someone’s trial rights are followed</td><td>The Constitution itself promises these steps</td><td><b>Trial rights (due process)</b></td></tr>
      <tr><td>Say what a law’s words cover</td><td>The law’s words and earlier rulings decide it, not the judge’s taste</td><td><b>A court says what a law means (interpreting a statute)</b></td></tr>
      <tr><td>Decide which policy would be better</td><td>No law is in dispute: it is for voters and the leaders they elect to decide</td><td><b>A choice for voters, not judges (political question)</b></td></tr>
      </table>
      <p>Three of the four rows are things a court does. The fourth is something a court is asked to do and should decline, so its second answer is a reason not to act.</p>`},
  {h:'Worked example: a sign ban',
   b:`<p class="lead">“A town bans protest signs within 500 feet of City Hall. A group is fined for carrying signs there, and one member sues, saying the ban breaks the First Amendment.”</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b> The town acted first, but the story ends with a member who “sues”. The decision has been handed to a judge. The answer is <b>The courts</b>.</p>
      <p><b>Step 2: What is the court being asked to do?</b> The member says the ban “breaks the First Amendment”, so the court is being asked whether a law fits the Constitution. The answer is <b>Check a law against the Constitution</b>.</p>
      <p><b>Step 3: What makes this a question for the court, or not?</b> The group was “fined”: a person the law actually harmed has brought a real case. The answer is <b>A person the law actually harmed has brought a real case</b>.</p>
      <p><b>Step 4: The name</b> is <b>A court checks a law (judicial review)</b>.</p>
      <p><b>What would change it.</b> If the member had asked what “sign” means, and whether a T-shirt counts, step 2 would be “Say what a law’s words cover” and the name would be A court says what a law means (interpreting a statute). If the group had asked the judge to order the town to spend more on parks, step 2 would be “Decide which policy would be better”, and the name would be A choice for voters, not judges (political question). If a member had been arrested and denied a lawyer, step 2 would be “Make sure someone’s trial rights are followed”.</p>`},
  {h:'How the parts check one another',
   b:`<p>The founders built the three parts so that none could decide everything alone. That is why so many limits in the key are things another part can do. Here is how they fit together.</p>
      <table class="k pair">
      <tr><th>When this happens</th><th>This part can respond</th><th>How</th></tr>
      <tr><td>Congress passes a bill</td><td>The President</td><td>Veto it. Congress can override with two-thirds of both chambers.</td></tr>
      <tr><td>The President names a judge or signs a treaty</td><td>The Senate</td><td>Agree or refuse: a majority for a person, two-thirds for a treaty.</td></tr>
      <tr><td>The President commands the armed forces</td><td>Congress</td><td>Declare the war, or refuse the money.</td></tr>
      <tr><td>Congress or the President acts</td><td>The courts</td><td>Check the act against the Constitution, if a harmed person brings a case.</td></tr>
      <tr><td>The courts strike a law down</td><td>Congress and the states</td><td>Change the Constitution by amendment, which takes two-thirds of Congress and three-quarters of the states.</td></tr>
      <tr><td>An official misbehaves</td><td>The House and the Senate</td><td>The House brings the charge; the Senate holds the trial.</td></tr>
      </table>
      <p>People sometimes call this system dysfunction, because it is slow. It is the design. A rule that needs two chambers, a signature and survival in court cannot be pushed through quickly by one majority, and for the same reason a rule that has been made is hard to remove.</p>
      <p><b>What to do with this.</b> When a story says “the government did X”, ask which part acted and which other part could respond. That tells you how durable the act is and where a challenge would have to begin.</p>`}
  ],
  drill:{kind:'pick', key:'n3'} },

{ tag:'Four', title:'Rights, duties and the oath',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a right or a duty, say who has it, and say what it stops government from doing. You can also tell apart three names in the key that all mean “a right blocks a government”.</p>
      <p>This matters in real life because the question “am I allowed?” has a different answer for a citizen, for a permanent resident and for a visitor, and many people guess wrong in both directions. Some assume that without citizenship they have no protection at all. Others assume that whatever their home country guaranteed them, such as a job or free medical care, is guaranteed here too.</p>
      <p>The unit asks one question: <b>Right or duty, and who has it?</b> It has five answers, each taught on its own card:</p>
      <ul>
        <li><b>A right everyone here has</b></li>
        <li><b>A right only citizens have</b></li>
        <li><b>A duty everyone here has</b></li>
        <li><b>A duty only citizens have</b></li>
        <li><b>Not promised by the Constitution</b></li>
      </ul>
      <p>Those are facts to remember, with a method for each. The unit then ties them to the key, in the exact words of its answers: <b>No listed power covers it, or a right forbids it</b>, <b>The Constitution itself promises these steps</b> and <b>No government may act, federal included: a right protects this</b>. It ends with two practical cards on the oath and the test.</p>`},
  {h:'A right everyone here has',
   b:`<p><b>What it is.</b> A protection against government that does not depend on citizenship. Most of the Bill of Rights is written as a limit on what government may do to a person, using words such as “no person”, “the people” and “the accused”, and none of them says “citizen”. These protections apply to everyone in the United States, whatever their immigration status. They include freedom of speech, religion, the press and peaceful assembly; protection from unreasonable searches; the right to remain silent and to have a lawyer when charged with a crime; and the guarantee of fair legal steps (due process) before government takes your liberty.</p>
      <p><b>Example.</b> A man here on a student visa is charged with a crime. He has the same right to a lawyer, and to stay silent, as a citizen would.</p>
      <p><b>Looks like.</b> “No person shall…” “The right of the people…” “The accused shall enjoy…” A sentence that restrains government and does not mention citizenship.</p>
      <p><b>Catch it.</b> Ask: is it written as a limit on government, with no mention of citizens? Then the answer to <b>Right or duty, and who has it?</b> is <b>A right everyone here has</b>. These rights are where the key’s answer <b>No government may act, federal included: a right protects this</b> comes from.</p>
      <p><b>What to do.</b> Know that these protections are yours whether or not you are a citizen. If police question you in a criminal matter, you may say that you want a lawyer and that you will stay silent.</p>
      <p><b>Don’t confuse it with</b> A right only citizens have. The short list of citizens-only rights is on the next card. Everything else in the Bill of Rights belongs to everyone here.</p>`},
  {h:'A right only citizens have',
   b:`<p><b>What it is.</b> The short list of rights reserved for citizens. The main ones are voting in federal elections and running for most elected offices. The President must be a natural-born citizen (a citizen from birth), at least thirty-five years old and a resident for fourteen years. (A few cities allow non-citizens to vote in local elections, but federal elections are for citizens only.) The citizenship test accepts voting as an example of a responsibility only for citizens. This course files it under rights, because no law makes anyone vote.</p>
      <p><b>Example.</b> A permanent resident who has lived here for twenty years cannot vote in a federal election until she has naturalised. After she takes the oath, she can register.</p>
      <p><b>Looks like.</b> “Only citizens may vote.” “Must be a natural-born citizen.” “A citizen for at least nine years” (for the Senate).</p>
      <p><b>Catch it.</b> Ask: does the law reserve it to citizens, and is it something a person may choose to use? Then the answer is <b>A right only citizens have</b>. It settles no step of the key, but it tells you whether you can claim the right.</p>
      <p><b>What to do.</b> Do not vote in a federal election until you are a citizen. Voting while not a citizen is a crime and can ruin both a citizenship application and a residence permit.</p>
      <p><b>Don’t confuse it with</b> A right everyone here has. Speech, religion and a fair trial need no citizenship. Voting and running for office do.</p>`},
  {h:'A duty everyone here has',
   b:`<p><b>What it is.</b> Something the law requires of you, whatever your status. The main ones are to obey the law and to pay tax on income earned here. A right is the government held back from you. A duty is the government asking something of you. Men aged 18 to 25 who live here, citizens or not, must also register for Selective Service, so that the country could organise a draft if one were ever called.</p>
      <p><b>Example.</b> A person on a work visa earns wages and files a tax return each year, just as a citizen does.</p>
      <p><b>Sounds like.</b> “Required by law.” “You must file.” “Failure to comply is an offence.”</p>
      <p><b>Catch it.</b> Ask: is the law requiring it of you, and does it apply whether or not you are a citizen? Then the answer is <b>A duty everyone here has</b>. No step of the key asks about duties, because the key is about what government may do.</p>
      <p><b>What to do.</b> File taxes on time, follow the rules, and ask the agency when unsure. Not knowing a requirement does not excuse missing it.</p>
      <p><b>Don’t confuse it with</b> A duty only citizens have. The duties on the next card need citizenship, and this one does not.</p>`},
  {h:'A duty only citizens have',
   b:`<p><b>What it is.</b> A duty that the law places on citizens alone. The clearest is jury service: when a citizen is summoned to serve on a jury, she must go, unless she is excused for a reason such as illness or hardship. Only citizens may serve on federal juries. Jury service is a duty and a privilege together, because a person cannot be kept off a jury on grounds of race.</p>
      <p><b>Example.</b> A citizen receives a letter summoning her to the federal courthouse on a Monday. She must attend, or ask in advance to be excused.</p>
      <p><b>Sounds like.</b> “Jury summons.” “Called for jury duty.” “Serve when summoned.”</p>
      <p><b>Catch it.</b> Ask: does the law require it, and only of citizens? Then the answer is <b>A duty only citizens have</b>.</p>
      <p><b>What to do.</b> Answer a summons. If you cannot go, ask formally to be excused, and do not just ignore the letter.</p>
      <p><b>Don’t confuse it with</b> the right to a jury trial. If you are accused of a crime, a jury trial is a right everyone here has (the Sixth Amendment). Being one of the twelve people on the jury is the duty, and it is for citizens.</p>`},
  {h:'Not promised by the Constitution',
   b:`<p><b>What it is.</b> The Constitution mostly lists what government may not do to you. It does not promise to give you things. There is no federal constitutional right to a job, a home, healthcare or food. Where government provides these, it is because a statute or a state or local programme was created, and what a statute gives, a later statute can change. (State constitutions do promise public schooling, so education is the exception at state level.)</p>
      <p><b>Example.</b> A newcomer from a country whose constitution guarantees free medical care assumes the United States does the same. Here the programme called Medicare exists because Congress passed a statute, not because the Constitution requires it, and so it can be argued over and altered in every election.</p>
      <p><b>Sounds like.</b> “Everyone has a right to a job.” “The government has to give me housing.” “It’s a basic human right, so it must be in the Constitution.”</p>
      <p><b>Catch it.</b> Ask: would it be government giving you something, instead of government staying out of your way? Then the answer is <b>Not promised by the Constitution</b>. No right stops government from refusing, so who decides is a matter for Congress, or for the state, and for voters.</p>
      <p><b>What to do.</b> Find the statute or the programme that provides it, and read its qualifications. To change it, use the political process: votes, petitions, the people who write the statutes.</p>
      <p><b>Don’t confuse it with</b> A right everyone here has. A right is a limit on government. A promise to provide something is a different thing, and the Constitution makes few of them.</p>`},

  {h:'The five answers side by side',
   b:`<p>The unit’s question is <b>Right or duty, and who has it?</b> Here are its five answers with the clue that points to each.</p>
      <table class="k pair">
      <tr><th>What the case shows</th><th>Right or duty, and who has it?</th></tr>
      <tr><td>A limit on government that never mentions citizens: speech, religion, a lawyer, silence, a search</td><td><b>A right everyone here has</b></td></tr>
      <tr><td>The law reserves it to citizens, and a person may choose to use it: voting, running for office</td><td><b>A right only citizens have</b></td></tr>
      <tr><td>The law requires it of you, citizen or not: obeying the law, paying tax on income earned here</td><td><b>A duty everyone here has</b></td></tr>
      <tr><td>The law requires it of citizens alone: serving on a federal jury</td><td><b>A duty only citizens have</b></td></tr>
      <tr><td>Government would have to give you something: a job, a home, healthcare</td><td><b>Not promised by the Constitution</b></td></tr>
      </table>
      <p>Two questions sort every case. First: is it government held back from you (a right), the law asking something of you (a duty), or government giving you something (not promised)? Second, for a right or a duty: does it apply to everyone here, or to citizens alone?</p>`},
  {h:'Worked example: what the neighbour said',
   b:`<p class="lead">A neighbour tells a woman who has lived here ten years as a permanent resident: “You can’t have a lawyer if you’re charged with a crime, because you’re not a citizen. But at least you don’t have to pay income tax.” Which of the two claims is right?</p>
      <p><b>The lawyer.</b> Ask <b>Right or duty, and who has it?</b> A lawyer when you are charged is government held back from you: it is a protection, not a requirement and not a gift. It is written for “the accused”, and the words never mention citizens. So it is <b>A right everyone here has</b>, and the neighbour is wrong. In the key, it is part of <b>Trial rights (due process)</b>.</p>
      <p><b>The tax.</b> The law asks something of her, so it is a duty and not a right. It applies to income earned here, whether or not she is a citizen. So it is <b>A duty everyone here has</b>, and the neighbour is wrong again.</p>
      <p><b>What would change it.</b> If the neighbour had said she cannot vote in a federal election, the law does reserve voting to citizens and it is a thing she may choose to do. That would be <b>A right only citizens have</b>, and the neighbour would be right.</p>`},
  {h:'When a right blocks a government: three names that look alike',
   b:`<p>Three of the key’s names say that a right stops a government: <b>Beyond Congress’s reach</b>, <b>Trial rights (due process)</b> and <b>Nobody may act — a protected right</b>. They sound alike, and they are told apart by the key’s first question, <b>Which part of government is acting, or being asked to act?</b></p>
      <table class="k pair">
      <tr><th>Who is acting (the key’s first question)</th><th>What the right does</th><th>Name</th></tr>
      <tr><td>Congress</td><td>A right, or the lack of a listed power, stops Congress’s rule</td><td><b>Beyond Congress’s reach</b></td></tr>
      <tr><td>The courts</td><td>The court makes sure the steps promised to an accused person are followed</td><td><b>Trial rights (due process)</b></td></tr>
      <tr><td>A state or a city</td><td>A right stops a state or a city from acting</td><td><b>Nobody may act — a protected right</b></td></tr>
      </table>
      <p><b>Three cases, told in the key’s order.</b> Start with who is acting.</p>
      <ul>
        <li>“Congress passes a law banning any group from holding a political rally in a public park.” Congress is acting, and the right to assemble forbids it. The name is <b>Beyond Congress’s reach</b>.</li>
        <li>“A judge appoints a free lawyer for a man charged with robbery who cannot afford one.” The court is acting, and it is applying a promise of the Constitution to an accused person. The name is <b>Trial rights (due process)</b>.</li>
        <li>“A city orders a newsstand to stop selling a magazine because the mayor dislikes it.” A city is acting, and the right to a free press stops every government. The name is <b>Nobody may act — a protected right</b>.</li>
      </ul>
      <p><b>What to do.</b> The same amendment, the First, protects the right in the first case and in the third. What changes is who is acting, so start there. The right alone does not tell you which name to give.</p>
      <p><b>Don’t confuse them with</b> each other. Beyond Congress’s reach is only about Congress. Trial rights (due process) are only about a court dealing with someone accused. Nobody may act is the one used when a state or a city is the one acting.</p>`},
  {h:'The oath of allegiance',
   b:`<p><b>What it is.</b> Naturalisation ends with a ceremony where the applicant takes the Oath of Allegiance. Allegiance means loyalty. In the oath you give up loyalty to other countries, swear to support and defend the Constitution and the laws of the United States, promise true faith and loyalty to them, and promise to serve the country in the armed forces or in civilian work of national importance when the law requires it. The Constitution is the document that settles who decides, so the oath is a promise to respect that settlement.</p>
      <p><b>Example.</b> A hundred people from forty countries stand in a courtroom, raise their right hands and say the words together. When they finish, a judge or an official declares them citizens.</p>
      <p><b>Sounds like.</b> “I will support and defend the Constitution and laws of the United States of America against all enemies.” “I take this obligation freely.”</p>
      <p><b>Catch it.</b> Ask: is this a promise made once, at the ceremony that makes you a citizen? Then it is the Oath of Allegiance.</p>
      <p><b>What to do.</b> Giving up loyalty to other countries is part of the oath. Whether your country of origin treats that as giving up its citizenship depends on that country’s law, and the answer varies a great deal. Check it with that country’s authorities before the ceremony and do not assume.</p>
      <p><b>Don’t confuse it with</b> the Pledge of Allegiance, the few lines schoolchildren say to the flag. The pledge is not part of becoming a citizen. The oath is.</p>`},
  {h:'The test, and who decides how it works',
   b:`<p class="lead">The civics test is spoken. You are asked questions from a published list, and you are told in advance what is on it. It comes alongside an assessment of English reading, writing and speaking. There are exemptions and adjustments based on age and years of residence, and for certain medical conditions.</p>
      <p>The test’s rules seem to change from time to time. The key shows why, by asking who decides how the test works.</p>
      <p><b>Step 1: Which part of government is acting, or being asked to act?</b> Congress wrote the statute that says an applicant must show knowledge of civics and English. But the immigration service, an agency, runs the interview and sets the details. For the details the answer is <b>The President and the agencies</b>.</p>
      <p><b>Step 2: What is the President, or an agency, doing?</b> The agency is putting a statute into practice. The answer is <b>Applying a law Congress already passed</b>.</p>
      <p><b>Step 3: What limits the President or the agency here?</b> <b>An agency may go no further than the law allows</b>. Inside that limit the agency decides, so the question list, how many are asked and the pass mark can change by the agency’s decision, and have changed more than once, without Congress passing anything. The name is <b>Carrying out the law</b>.</p>
      <div class="note"><b>Take the question list from uscis.gov, not from here.</b> Which version applies can depend on when you filed. This course is for understanding the material. The official list is the thing to memorise.</div>
      <p><b>What to do.</b> Study the official list for your own filing date. Several official answers also depend on the date or your address: the current President and Vice President, the Speaker, the Chief Justice, your own state’s governor, your senators and your representative. Look those up fresh. They are deliberately absent from this course.</p>`}
  ],
  drill:{kind:'pick', key:'n4'} },

{ tag:'Five', title:'The history you are expected to know',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can place an event in the right era, say in a sentence why it mattered, and say how it changed who decides.</p>
      <p>This is a unit of facts to remember. The citizenship test asks about people, dates and events, and in daily life the same history sits underneath arguments about voting, immigration and rights. The facts are easier to hold when they attach to one story, so this unit tells it as the story of who gets a say, and who had to fight to get one.</p>
      <p>The unit’s question is <b>Which era does it belong to?</b> Five answers, each taught on its own card:</p>
      <ul>
        <li><b>Colonies and the founding (to 1800)</b></li>
        <li><b>Growth and the slavery question (1800 to 1860)</b></li>
        <li><b>Civil War and Reconstruction (1861 to 1877)</b></li>
        <li><b>Factories and immigration (1877 to 1914)</b></li>
        <li><b>World wars, civil rights and today (1914 onward)</b></li>
      </ul>
      <p>Each era also explains one of the key’s names, so the history and the method support each other. The founding explains why <b>Congress controls the money (power of the purse)</b>. The years before the Civil War show a court deciding that something was <b>Beyond Congress’s reach</b>. Reconstruction is where <b>Nobody may act — a protected right</b> reached the states. The factory years are when immigration became federal, so <b>Federal law wins (preemption)</b> over a state’s own immigration rules. And the twentieth century is when <b>Carrying out the law</b> grew into the huge machinery of agencies you meet today. After the five eras, one card follows the right to vote through all of them, and one covers the places and symbols the test asks about.</p>
      <div class="note">The dates in the card headings are rough edges, not rules. The test wants the events and their order, and no exact boundary is needed.</div>`},
  {h:'Colonies and the founding (to 1800)',
   b:`<p><b>What it is.</b> The years from the first settlements until about 1800. People came to the colonies for religious freedom, political liberty and economic opportunity, and to escape persecution. Many did not come freely: some arrived as indentured servants, who worked for years to pay off their passage, and from 1619 many were brought as enslaved people. Native nations already lived on the land.</p>
      <p>The quarrel with Britain was about consent. Parliament, where the colonists elected nobody, taxed them. “No taxation without representation” is the short form. The Declaration of Independence followed on <b>July 4, 1776</b>; the war ended in 1783; the Constitution was written in <b>1787</b> and took effect in 1789; the Bill of Rights was added in <b>1791</b>. George Washington, who had commanded the army, became the first President in 1789 and is called the Father of Our Country. The capital moved to Washington, D.C., in 1800.</p>
      <p><b>Example.</b> In 1773 colonists in Boston protested a tax on tea by throwing a ship’s cargo into the harbour. This is the Boston Tea Party. The point was not the price of tea, but that the tax was laid by a body that would not listen to them.</p>
      <p><b>Looks like.</b> “Colonists.” “King George.” “No taxation without representation.” “The Articles.” “Founders.” A date before 1800.</p>
      <p><b>Catch it.</b> Ask <b>Which era does it belong to?</b> If the clue is about the colonies, breaking from Britain or setting up the new government, the answer is <b>Colonies and the founding (to 1800)</b>.</p>
      <p><b>What to do.</b> Remember the chain: taxes without consent, the Declaration (1776), a weak first government, the Constitution (1787), the Bill of Rights (1791). The colonists’ complaint is why the Constitution gives the power to tax to the lawmakers, so it is the history behind <b>Congress controls the money (power of the purse)</b>.</p>
      <p><b>Don’t confuse it with</b> Growth and the slavery question (1800 to 1860). The founders wrote the Constitution; the generations after it argued over what it left unsettled.</p>`},
  {h:'Growth and the slavery question (1800 to 1860)',
   b:`<p><b>What it is.</b> Sixty years of expansion and of a question the founders put off. In 1803 the Louisiana Purchase, bought from France, roughly doubled the size of the country. The War of 1812 against Britain followed, and during it the national anthem, <i>The Star-Spangled Banner</i>, was written. The country kept growing west, and after a war with Mexico (1846 to 1848) it gained California and the Southwest. All of this land was inhabited by Native nations, who were removed from it by treaty, by purchase and by force, as in the forced marches of the 1830s now called the Trail of Tears.</p>
      <p>Each new state raised the question of whether slavery would be allowed there. Congress tried to settle it with compromises, in 1820 and 1850: for example, in 1820 Missouri was admitted as a slave state and Maine as a free one. Each deal bought time without settling the matter. In 1857 the Supreme Court, in the <i>Dred Scott</i> decision, ruled that Black people could not be citizens and that Congress had no power to ban slavery in the territories.</p>
      <p><b>Example.</b> In 1850 a family sets out west in a wagon, and every new territory they cross is debated in Congress: slave or free?</p>
      <p><b>Looks like.</b> “Louisiana Purchase.” “Pioneers.” “Territory.” “Compromise.” “Dred Scott.” A date between 1800 and 1860.</p>
      <p><b>Catch it.</b> Ask <b>Which era does it belong to?</b> If the clue is about the country expanding or the argument over slavery before the war, the answer is <b>Growth and the slavery question (1800 to 1860)</b>.</p>
      <p><b>What to do.</b> Keep two threads together: growth, and the question growth forced. <i>Dred Scott</i> is a case where the Court said a law of Congress was <b>Beyond Congress’s reach</b>. The decision is now widely seen as one of the worst the Court ever made, and the Fourteenth Amendment was written to reverse the citizenship part of it.</p>
      <p><b>Don’t confuse it with</b> Civil War and Reconstruction (1861 to 1877). The compromises tried to avoid a war. The next era is the war.</p>`},
  {h:'Civil War and Reconstruction (1861 to 1877)',
   b:`<p><b>What it is.</b> After Abraham Lincoln’s election in 1860, eleven Southern states seceded, meaning they declared that they were leaving the Union, and formed their own government. The war ran from 1861 to 1865 and killed more than 600,000 people. Lincoln was President throughout. On January 1, 1863, the Emancipation Proclamation declared the people enslaved in the rebelling states free, and later that year the Gettysburg Address described the war as a test of whether government of, by and for the people could last. The Union won in 1865.</p>
      <p>Then came Reconstruction, the years from 1865 to 1877 when the country tried to rebuild and to settle what freedom meant. Three amendments were added: the <b>Thirteenth</b> (1865) abolished slavery, the <b>Fourteenth</b> (1868) made everyone born here a citizen and promised due process and equal protection, and the <b>Fifteenth</b> (1870) said the vote could not be denied because of race. In 1877 federal troops left the South and Reconstruction ended. Southern states then passed segregation laws, which kept Black and white people apart in schools, transport and public places, and used barriers such as poll taxes (a fee to vote) to keep Black citizens from voting, for most of the next century.</p>
      <p><b>Example.</b> On New Year’s Day 1863, crowds gather in churches and streets to hear the Emancipation Proclamation read, waiting to see whether it will be made real.</p>
      <p><b>Looks like.</b> “The Union.” “The Confederacy.” “Lincoln.” “Emancipation.” “The Thirteenth, Fourteenth and Fifteenth.” Dates from 1861 to 1877.</p>
      <p><b>Catch it.</b> Ask <b>Which era does it belong to?</b> If the clue is about the war, the end of slavery or the amendments that followed, the answer is <b>Civil War and Reconstruction (1861 to 1877)</b>.</p>
      <p><b>What to do.</b> Hold the three amendments in order: freed, citizens, vote. The Fourteenth is the one that put protected rights above every state, which is why <b>Nobody may act — a protected right</b> applies to a state or a city. And when someone says the war was about “states’ rights”, note that the declarations of the seceding states name slavery as the cause. The real question to ask is “a right to do what?”</p>
      <p><b>Don’t confuse it with</b> Factories and immigration (1877 to 1914). Reconstruction ended in 1877, and the amendments it produced were not made real for most Black Southerners until the 1960s.</p>`},

  {h:'Factories and immigration (1877 to 1914)',
   b:`<p><b>What it is.</b> After Reconstruction the country industrialised. Railways crossed the continent, steel mills and factories grew, and cities swelled. Millions of immigrants arrived, mostly from Europe, to work in them. The Statue of Liberty, a gift from France, was dedicated in New York Harbor in 1886 and became a symbol of welcome. Ellis Island, in the same harbour, opened in 1892 as the federal immigration station, and about twelve million people passed through it before it closed in 1954.</p>
      <p>This was also the era when immigration became a federal matter. In the 1870s the Supreme Court struck down a California law that put its own conditions on arriving immigrants, saying the power belonged to the federal government. In 1882 Congress passed the Chinese Exclusion Act, the first major law to bar a group of people by where they came from. Reformers and labour unions pushed for shorter hours and an end to child labour. In 1913 two amendments were added: the Sixteenth allowed a federal income tax, and the Seventeenth made senators elected by voters instead of by state legislatures.</p>
      <p><b>Example.</b> A family of four, off a steamship in 1905, is led through the great hall at Ellis Island: a doctor checks them, an inspector asks their names, where they are going and whether anyone is waiting for them. Most are admitted within a day.</p>
      <p><b>Looks like.</b> “Railroads.” “Steel.” “Ellis Island.” “The Statue of Liberty.” “Immigrants from Europe.” “The Chinese Exclusion Act.” A date from 1877 to 1914.</p>
      <p><b>Catch it.</b> Ask <b>Which era does it belong to?</b> If the clue is about factories, big cities, or the great wave of immigration, the answer is <b>Factories and immigration (1877 to 1914)</b>.</p>
      <p><b>What to do.</b> Remember that this is when immigration became a federal responsibility, which is why today the rules come from Congress and are run by an agency. A state’s own immigration scheme would run into the key’s name <b>Federal law wins (preemption)</b>. That fits the history of immigration, and it tells you why your own case is handled in a federal office and not at the state capital.</p>
      <p><b>Don’t confuse it with</b> World wars, civil rights and today (1914 onward). The factory boom and the first great wave of immigration were at their height before the First World War began in 1914.</p>`},
  {h:'World wars, civil rights and today (1914 onward)',
   b:`<p><b>What it is.</b> More than a century of wars, hard times and fights over equal rights, which together changed what the federal government does. In rough order:</p>
      <ul>
        <li><b>1917.</b> The United States enters the <b>First World War</b>.</li>
        <li><b>1920.</b> The Nineteenth Amendment gives women the vote, after a campaign that began in 1848 and was led by Susan B. Anthony, Elizabeth Cady Stanton and others, most of whom did not live to see it.</li>
        <li><b>1929 onward.</b> The <b>Great Depression</b>: banks fail and about a quarter of workers lose their jobs. President Franklin D. Roosevelt’s New Deal responds with new programmes such as Social Security, run by new federal agencies. The federal government takes a far larger role in daily life.</li>
        <li><b>1941 to 1945.</b> The United States enters the <b>Second World War</b> after Japan attacks Pearl Harbor on December 7, 1941.</li>
        <li><b>About 1947 to 1991.</b> The <b>Cold War</b>, a long standoff with the Soviet Union that includes wars in Korea and Vietnam, shapes American foreign policy.</li>
        <li><b>1954 to 1965.</b> The <b>civil rights movement</b> pushes to end segregation. In 1954 the Supreme Court rules in <i>Brown v. Board of Education</i> that separate public schools for Black and white children are unequal. Martin Luther King Jr. and thousands of others lead marches and boycotts. Congress passes the Civil Rights Act of 1964, which outlaws segregation and discrimination, and the Voting Rights Act of 1965, which puts federal officials behind the Fifteenth Amendment’s promise ninety-five years after it was written.</li>
        <li><b>September 11, 2001.</b> Terrorists hijack four airplanes and attack the World Trade Center in New York and the Pentagon near Washington, killing nearly 3,000 people. New security rules, a new federal department for homeland security and changes in immigration enforcement follow.</li>
      </ul>
      <p><b>Example.</b> In March 1965 marchers set out from Selma, Alabama, toward the state capital to demand the right to vote. Months later Congress passed the Voting Rights Act, and federal examiners began registering Black voters across the South.</p>
      <p><b>Looks like.</b> “World War.” “The Depression.” “New Deal.” “Pearl Harbor.” “Cold War.” “Civil rights.” “September 11.” A date after 1914.</p>
      <p><b>Catch it.</b> Ask <b>Which era does it belong to?</b> If the clue is about a world war, the Depression, the Cold War, the civil rights movement or September 11, the answer is <b>World wars, civil rights and today (1914 onward)</b>.</p>
      <p><b>What to do.</b> Link each big event to the part of government that acted. <i>Brown</i> was <b>A court checks a law (judicial review)</b>. The Civil Rights Act and the Voting Rights Act were Congress writing rules, and the New Deal agencies were <b>Carrying out the law</b> at a scale the founders never saw.</p>
      <p><b>Don’t confuse it with</b> Civil War and Reconstruction (1861 to 1877). Both are about equal rights. The twentieth-century movement is the long effort to make the Reconstruction amendments real.</p>`},
  {h:'The right to vote, widened by inches',
   b:`<p>The vote is the clearest example of history as the story of who gets a say. At the founding it was mostly limited to white men who owned property. Each widening was won against opposition, and several needed an amendment or an Act of Congress.</p>
      <table class="k pair">
      <tr><th>Year</th><th>What changed</th><th>Era</th></tr>
      <tr><td>1870</td><td>Fifteenth Amendment: the vote cannot be denied because of race</td><td>Civil War and Reconstruction (1861 to 1877)</td></tr>
      <tr><td>1920</td><td>Nineteenth Amendment: the vote cannot be denied because of sex</td><td>World wars, civil rights and today (1914 onward)</td></tr>
      <tr><td>1964</td><td>Twenty-fourth Amendment: no poll tax, a fee to vote, in federal elections</td><td>World wars, civil rights and today (1914 onward)</td></tr>
      <tr><td>1965</td><td>Voting Rights Act: federal officials make the Fifteenth Amendment’s promise real</td><td>World wars, civil rights and today (1914 onward)</td></tr>
      <tr><td>1971</td><td>Twenty-sixth Amendment: the voting age lowered to eighteen</td><td>World wars, civil rights and today (1914 onward)</td></tr>
      </table>
      <p>The gap between 1870 and 1965 is ninety-five years, the single most useful fact for understanding arguments about voting today. A right written in the Constitution had not been made real, and it took Congress and federal agencies to do it. In the key’s words this is <b>Carrying out the law</b>, applied to a right.</p>
      <p>Throughout this course the words are “the vote” and “the right to vote”. You may see older books call it “suffrage”, which means the same thing.</p>`},
  {h:'Places and symbols',
   b:`<p>These are the simple facts the test asks. Each belongs to an era, so you can hang it on the story you already know.</p>
      <table class="k pair">
      <tr><th>Fact</th><th>Era</th></tr>
      <tr><td>The flag has 13 stripes, for the original colonies, and 50 stars, one for each state.</td><td>Colonies and the founding (to 1800)</td></tr>
      <tr><td>Independence Day is July 4, the day the Declaration was adopted.</td><td>Colonies and the founding (to 1800)</td></tr>
      <tr><td>The capital is Washington, D.C., which became the capital in 1800.</td><td>Colonies and the founding (to 1800)</td></tr>
      <tr><td>The national anthem is <i>The Star-Spangled Banner</i>, written during the War of 1812.</td><td>Growth and the slavery question (1800 to 1860)</td></tr>
      <tr><td>The Statue of Liberty stands in New York Harbor and was a gift from France in 1886.</td><td>Factories and immigration (1877 to 1914)</td></tr>
      </table>
      <p>There are 50 states. The territories, Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands, are part of the United States without being states, and the political rights of people who live there differ from those of people in the states. If you ever live in one, check how.</p>
      <p>The two major political parties are the Democratic Party and the Republican Party.</p>`},
  {h:'The five eras side by side',
   b:`<p>The unit’s question is <b>Which era does it belong to?</b> Here are the five answers, each with the clue words that point to it.</p>
      <table class="k pair">
      <tr><th>Clue words</th><th>Which era does it belong to?</th></tr>
      <tr><td>Colonists, king, taxes without a say, the Declaration, the Constitution, the first President</td><td><b>Colonies and the founding (to 1800)</b></td></tr>
      <tr><td>Louisiana Purchase, pioneers, the compromises, <i>Dred Scott</i>, the anthem</td><td><b>Growth and the slavery question (1800 to 1860)</b></td></tr>
      <tr><td>Lincoln, the Union and the Confederacy, emancipation, the Thirteenth, Fourteenth and Fifteenth Amendments</td><td><b>Civil War and Reconstruction (1861 to 1877)</b></td></tr>
      <tr><td>Railroads, steel, Ellis Island, the Statue of Liberty, the first immigration law</td><td><b>Factories and immigration (1877 to 1914)</b></td></tr>
      <tr><td>World wars, the Depression, the Cold War, civil rights, September 11</td><td><b>World wars, civil rights and today (1914 onward)</b></td></tr>
      </table>
      <p>If a clue gives a date, the date usually settles it. If it gives only a name, use the table: the name belongs to exactly one era.</p>`},
  {h:'Worked example: placing a clue',
   b:`<p class="lead">“A statue of an American hero is unveiled. Next to it, a sign says that after the war ended in 1865, three amendments gave citizenship, due process and the right to vote to formerly enslaved people.”</p>
      <p><b>What does the clue name?</b> “The war ended in 1865” and “three amendments” giving citizenship, due process and the vote: these are the Thirteenth, Fourteenth and Fifteenth Amendments. They belong to the years right after the Civil War.</p>
      <p><b>Which era does it belong to?</b> The date and the three amendments both say the same thing: <b>Civil War and Reconstruction (1861 to 1877)</b>. The other eras would not fit, because 1865 is in the middle of this one.</p>
      <p><b>Why it matters.</b> Citizenship, due process and equal protection against a state are the idea behind <b>Nobody may act — a protected right</b>. The clue is history, and it is also the reason that name exists.</p>
      <p><b>What would change it.</b> If the sign had said that in 1920 an amendment gave women the vote, the date and the amendment would say <b>World wars, civil rights and today (1914 onward)</b>. If it had said that in 1892 a federal station opened on Ellis Island, in New York Harbor, to check arriving immigrants, the answer would be <b>Factories and immigration (1877 to 1914)</b>.</p>`}
  ],
  drill:{kind:'pick', key:'n5'} },

{ tag:'Six', title:'What people get wrong',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can hear a claim about government or history, say which question it skips, and say the one fact that corrects it.</p>
      <p>This turns up in every news story, family argument and social-media post. Americans themselves misstate their own system all the time, and some of the mistakes make a whole category of news unintelligible. A claim such as “the President just banned it” is only worth believing if you know what the President can ban. The questions in this course are the quickest way to test a claim: each claim below goes wrong by skipping one of them.</p>
      <p>Six kinds of mistake are taught, each on its own card:</p>
      <ul>
        <li><b>Giving one part of government another part’s job</b></li>
        <li><b>Forgetting the limit</b></li>
        <li><b>Mixing up the levels of government</b></li>
        <li><b>Getting wrong who has a right</b></li>
        <li><b>Treating the wrong document as the law</b></li>
        <li><b>Telling the history as if it were always settled</b></li>
      </ul>
      <p>The practice at the end shows you claims and asks you to say, before you look, which question each one skips and what fact fixes it. That is more useful than knowing the claim is wrong, because it is the thing you will say out loud.</p>`},
  {h:'Giving one part of government another part’s job',
   b:`<p><b>What it is.</b> Crediting Congress, the President or the courts with something that belongs to another part. People do it because the news says “the government” and nobody checks which part.</p>
      <p><b>Example.</b> “Congress gives the army its orders.” Congress declares war and votes the money, but the President commands the armed forces.</p>
      <p><b>Sounds like.</b> “The Supreme Court passed a law.” “The Senate decides who is guilty.” “The Vice President can veto a bill.”</p>
      <p><b>Catch it.</b> The question it skips is <b>Which part of government is acting, or being asked to act?</b> Ask it first, then check that the part named can do the job.</p>
      <p><b>What to do.</b> Say it back with the right part: “Congress writes the law, the President carries it out, and the courts say what it means.” That one sentence corrects most claims in this group.</p>
      <p><b>Don’t confuse it with</b> Forgetting the limit. Here the wrong part is named. In the next kind the right part is named but its limits are forgotten.</p>`},
  {h:'Forgetting the limit',
   b:`<p><b>What it is.</b> Naming the right part of government and then treating its power as having no edge. In the key, every part has a second question about its limit, because every part has one. People forget the limit because a news story reports the act and skips the rule that restrains it.</p>
      <p><b>Example.</b> “In an emergency the President can do whatever is needed.” The President commands the forces and carries out the laws, but cannot make a new tax, a new crime or a declaration of war.</p>
      <p><b>Sounds like.</b> “Nothing can stop it.” “He can just sign an order.” “It passed, so it is legal.”</p>
      <p><b>Catch it.</b> The question it skips is the second question for that part: <b>Which rule decides whether Congress can do this?</b>, or <b>What limits the President or the agency here?</b>, or <b>What makes this a question for the court, or not?</b>.</p>
      <p><b>What to do.</b> Name the limit in one sentence: “Congress needs a listed power and may not break a right; an agency may go no further than the statute; a court needs a real case.”</p>
      <p><b>Don’t confuse it with</b> Giving one part of government another part’s job. Here the part is right and the limit is forgotten.</p>`},
  {h:'Mixing up the levels of government',
   b:`<p><b>What it is.</b> Treating the federal government, the state and the city as one thing. People do this because “the government” in a headline can mean any of the three.</p>
      <p><b>Example.</b> “My city can make any rule it likes, because it is the government closest to the people.” A city has only the power its state handed it, and a state’s law can override a city’s.</p>
      <p><b>Sounds like.</b> “Washington requires it.” “It’s the state’s decision.” “Why does each state have different rules?”</p>
      <p><b>Catch it.</b> The question it skips is <b>Where does the federal government stand?</b>, with its four answers: <b>It has no power here</b>, <b>It has power here and has already used it</b>, <b>It has power here, and so does the state: both may act</b> and <b>No government may act, federal included: a right protects this</b>. When the claim is about whether a city or a state has power of its own, it also skips <b>Who ends up with the say?</b>, whose five answers are taught on the five name cards in Unit One.</p>
      <p><b>What to do.</b> Ask which level is making the rule, and whether the federal government has power over the subject and has used it. Federal law controls only where the federal government has power and has acted.</p>
      <p><b>Don’t confuse it with</b> Giving one part of government another part’s job. That mistake is between Congress, the President and the courts. This one is between the national government, the state and the city.</p>`},
  {h:'Getting wrong who has a right',
   b:`<p><b>What it is.</b> Making rights depend on citizenship when they do not, or assuming the Constitution promises things it does not. The first leaves people who are not citizens thinking they have no protection. The second leaves people from other countries expecting guarantees that are not there. The same mix-up happens with duties: some people think a duty such as paying tax on income earned here applies only to citizens, when it applies to everyone here.</p>
      <p><b>Example.</b> “A tourist has no free-speech rights while visiting.” Speech is a right everyone here has. A tourist, a student and a citizen are all protected from being punished by government for what they say.</p>
      <p><b>Sounds like.</b> “You’re not a citizen, so you can’t.” “It’s my constitutional right to a good job.”</p>
      <p><b>Catch it.</b> The question it skips is <b>Right or duty, and who has it?</b> Five answers: <b>A right everyone here has</b>, <b>A right only citizens have</b>, <b>A duty everyone here has</b>, <b>A duty only citizens have</b>, <b>Not promised by the Constitution</b>.</p>
      <p><b>What to do.</b> Sort the claim: is it government held back, the law asking something of you, or government giving something? Then ask who has it.</p>
      <p><b>Don’t confuse it with</b> Mixing up the levels of government. This is about who is protected, not which government is acting.</p>`},
  {h:'Treating the wrong document as the law',
   b:`<p><b>What it is.</b> Quoting a founding document as binding when it is an argument, or treating the Constitution and the Bill of Rights as two unrelated texts. People do it because all of them feel equally “founding”.</p>
      <p><b>Example.</b> “The Federalist Papers are part of the Constitution.” They are essays arguing for it, not law.</p>
      <p><b>Sounds like.</b> “The Declaration says you can’t…” “It’s in the Federalist Papers, so it’s the law.”</p>
      <p><b>Catch it.</b> The questions it skips are <b>Is it an argument or a rule?</b> and, for a rule, <b>is it the 1787 text or an amendment?</b>. Then use the five names: <b>The Declaration of Independence</b>, <b>The original Constitution (1787)</b>, <b>The Bill of Rights (1791)</b>, <b>A later amendment</b>, <b>The Federalist Papers</b>.</p>
      <p><b>What to do.</b> Name the document and say whether it is law. The Bill of Rights is the first ten amendments and is part of the Constitution. The Declaration and the Federalist Papers are arguments.</p>
      <p><b>Don’t confuse it with</b> Getting wrong who has a right. This is about the source of the rule; that one is about whom the rule protects.</p>`},
  {h:'Telling the history as if it were always settled',
   b:`<p><b>What it is.</b> Reading today’s arrangements back into the past. The result is a story with no struggle in it, and that makes later arguments, about the vote, about citizenship, about rights, hard to understand.</p>
      <p><b>Example.</b> “The Constitution ended slavery when it was written in 1787.” It did not. Slavery ended in 1865 with the Thirteenth Amendment, after a war.</p>
      <p><b>Sounds like.</b> “It’s always been that way.” “The founders already settled that.”</p>
      <p><b>Catch it.</b> The question it skips is <b>Which era does it belong to?</b> Then ask what changed, who changed it and who opposed it. The five eras are <b>Colonies and the founding (to 1800)</b>, <b>Growth and the slavery question (1800 to 1860)</b>, <b>Civil War and Reconstruction (1861 to 1877)</b>, <b>Factories and immigration (1877 to 1914)</b> and <b>World wars, civil rights and today (1914 onward)</b>.</p>
      <p><b>What to do.</b> Put a date and an event beside the claim. “When was that settled, and by what?” is almost always enough.</p>
      <p><b>Don’t confuse it with</b> a mistake about a document. Here the document may be named correctly, but the claim about when something happened is wrong.</p>`},
  {h:'The six mistakes side by side',
   b:`<table class="k pair">
      <tr><th>The mistake</th><th>The question it skips</th></tr>
      <tr><td><b>Giving one part of government another part’s job</b></td><td>Which part of government is acting, or being asked to act?</td></tr>
      <tr><td><b>Forgetting the limit</b></td><td>The second question for that part: Which rule decides whether Congress can do this? What limits the President or the agency here? What makes this a question for the court, or not?</td></tr>
      <tr><td><b>Mixing up the levels of government</b></td><td>Where does the federal government stand? Who ends up with the say?</td></tr>
      <tr><td><b>Getting wrong who has a right</b></td><td>Right or duty, and who has it?</td></tr>
      <tr><td><b>Treating the wrong document as the law</b></td><td>Is it an argument or a rule?</td></tr>
      <tr><td><b>Telling the history as if it were always settled</b></td><td>Which era does it belong to?</td></tr>
      </table>
      <p>When you hear a claim, find the verb in it: who does it, what are they doing, what is the limit, who is protected, when did it happen. One of those will be missing. That is the question it skips.</p>`},
  {h:'Worked example: a speech at a town meeting',
   b:`<p class="lead">“The President just signed an order cutting the tax on gasoline, so prices will fall. Next week a judge will decide whether cutting the tax was a good idea. And at least my town can ban street preachers, because the First Amendment is only for Washington.”</p>
      <p><b>Claim 1: the order.</b> Ask <b>What is the President, or an agency, doing?</b> The order changes a tax. A tax can be created or changed only by Congress, so the answer is <b>Ordering something new that no law from Congress allows</b>. The limit the speaker forgot is <b>Only a law from Congress can do it; an order cannot</b>. This is the mistake Forgetting the limit, and the name is <b>Beyond the President’s reach</b>.</p>
      <p><b>Claim 2: the judge.</b> Ask <b>What is the court being asked to do?</b> The speaker says the judge will decide whether the cut was “a good idea”, which is <b>Decide which policy would be better</b>. Then ask <b>What makes this a question for the court, or not?</b> The answer is <b>No law is in dispute: it is for voters and the leaders they elect to decide</b>. A judge can check a law against the Constitution, but does not choose between policies. This is the mistake Forgetting the limit, and the name is <b>A choice for voters, not judges (political question)</b>.</p>
      <p><b>Claim 3: the town.</b> Ask <b>Where does the federal government stand?</b> Preaching in the street is speech and religion, and the First Amendment protects them against states and cities as well as against the federal government. So the answer is <b>No government may act, federal included: a right protects this</b>, and the name is <b>Nobody may act — a protected right</b>. Treating a limit on Washington as the only limit is the mistake Mixing up the levels of government.</p>
      <p><b>What to say instead.</b> “An order cannot change a tax: only a law from Congress can. A judge can check whether a law is allowed, but whether a tax cut is wise is for voters. And the First Amendment stops a town as well as Washington.”</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a case with nothing labelled, ask the key’s questions in order, and arrive at one of the nineteen names, then say why.</p>
      <p>This is where the method from Units One, Three and Four is put to work on whole cases, the way you will meet them: in a news story, in a form, in a conversation. Nothing is labelled and nothing tells you which part of government to start with. You find the answer in the case itself. The practice that follows has nineteen cases, in a mixed order, and each one goes through all four steps:</p>
      <ol>
        <li><b>Which part of government is acting, or being asked to act?</b> Congress, The President and the agencies, The courts, or A state or a city.</li>
        <li><b>The first question for that part.</b> What is Congress doing? What is the President, or an agency, doing? What is the court being asked to do? Where does the federal government stand?</li>
        <li><b>The second question for that part.</b> Which rule decides whether Congress can do this? What limits the President or the agency here? What makes this a question for the court, or not? Who ends up with the say?</li>
        <li><b>The name.</b> One of nineteen.</li>
      </ol>
      <p>Everything in the cases has been taught. If you are unsure of an answer, go back to the card for that name, in Unit One for the states, in Unit Three for Congress, the President and the courts, and in Unit Four for the right-blocks-government names.</p>`},
  {h:'How the practice screen works',
   b:`<p>Each case appears as a short passage. Below it is a list of the nineteen names, called the readout. As you answer, it crosses off the names your answers have ruled out. It is only a display, and nothing on it can be tapped.</p>
      <ul>
        <li><b>The questions come one at a time.</b> You answer the first, then the next one opens. Each question has a short tag in front of it. The tag is only a label for the screen. Answer the question.</li>
        <li><b>The second and third questions change</b> with your answer to the first. If you answer Congress you get Congress’s questions. If you answer A state or a city you get the states’ questions.</li>
        <li><b>Name it.</b> When every question is answered, the names left on the readout are the ones your answers allow. Pick one, then record your determination.</li>
        <li><b>You can go back.</b> Tap an answered question to change it. Changing the first question starts the others again.</li>
      </ul>
      <p><b>How you are scored.</b> Your name and your route are scored separately. The route is your set of answers to the questions. Right name by the wrong route counts as a miss, because a name you cannot work out from the questions will not survive an unfamiliar case. After each case you see the name, which step went wrong if one did, and a walk through the questions in order.</p>`},
  {h:'The whole key in one place',
   b:`<p>The first question is always <b>Which part of government is acting, or being asked to act?</b> After that, each part has its own pair of questions.</p>
      <table class="k pair">
      <tr><th>If the answer is</th><th>Ask first</th><th>Ask second</th></tr>
      <tr><td><b>Congress</b></td><td>What is Congress doing?</td><td>Which rule decides whether Congress can do this?</td></tr>
      <tr><td><b>The President and the agencies</b></td><td>What is the President, or an agency, doing?</td><td>What limits the President or the agency here?</td></tr>
      <tr><td><b>The courts</b></td><td>What is the court being asked to do?</td><td>What makes this a question for the court, or not?</td></tr>
      <tr><td><b>A state or a city</b></td><td>Where does the federal government stand?</td><td>Who ends up with the say?</td></tr>
      </table>
      <p><b>The nineteen names, by part:</b></p>
      <ul>
        <li><b>Congress:</b> A listed power of Congress (enumerated power); Congress controls the money (power of the purse); The Senate must agree (advice and consent); Charging and removing an official (impeachment); Beyond Congress’s reach.</li>
        <li><b>The President and the agencies:</b> Carrying out the law; Commanding the armed forces (commander in chief); Dealing with other countries (foreign affairs and treaties); Veto and pardon; Beyond the President’s reach.</li>
        <li><b>The courts:</b> A court checks a law (judicial review); Trial rights (due process); A court says what a law means (interpreting a statute); A choice for voters, not judges (political question).</li>
        <li><b>A state or a city:</b> Left to the states (reserved powers); Handed down to a city or county (local government); Federal law wins (preemption); Both may act; Nobody may act — a protected right.</li>
      </ul>
      <p>Each name was taught on its own card, with an example, how to spot it and what to do. The side-by-side cards in Units One and Three show which answers lead to which name.</p>`},
  {h:'When names look alike',
   b:`<p>Most mistakes in this practice come from a few look-alike pairs. For each, one question separates them.</p>
      <table class="k pair">
      <tr><th>The look-alikes</th><th>The question that separates them</th></tr>
      <tr><td><b>The Senate must agree (advice and consent)</b> and <b>Dealing with other countries (foreign affairs and treaties)</b></td><td>Which part of government is acting, or being asked to act? If the case hands the agreement to the Senate to vote on, the Senate is acting. If it is only about negotiating, the President is.</td></tr>
      <tr><td><b>A listed power of Congress (enumerated power)</b> and <b>Beyond Congress’s reach</b></td><td>Which rule decides whether Congress can do this? Is the power on the Constitution’s list, and does no right forbid it?</td></tr>
      <tr><td><b>Carrying out the law</b> and <b>Beyond the President’s reach</b></td><td>What is the President, or an agency, doing? Applying a law Congress already passed, or ordering something new that no law allows?</td></tr>
      <tr><td><b>A court checks a law (judicial review)</b>, <b>A court says what a law means (interpreting a statute)</b> and <b>A choice for voters, not judges (political question)</b></td><td>What is the court being asked to do? Check a law against the Constitution, say what a law’s words cover, or decide which policy would be better?</td></tr>
      <tr><td><b>Federal law wins (preemption)</b> and <b>Both may act</b></td><td>Where does the federal government stand? Is its rule the only one, or a minimum a state may go beyond?</td></tr>
      <tr><td><b>Beyond Congress’s reach</b>, <b>Trial rights (due process)</b> and <b>Nobody may act — a protected right</b></td><td>Which part of government is acting, or being asked to act? Congress, a court dealing with an accused person, or a state or a city?</td></tr>
      </table>
      <p>When two parts of government appear in a case, use the two rules from Unit One. Find the act the story is about and whose act it is. And if the story hands the decision to another part, that other part is the one acting.</p>`},

  {h:'Worked example: a new fee',
   b:`<p class="lead">“Congress raises the fee for a passport by statute. A week later the passport agency starts charging the new amount.”</p>
      <p><b>Which part of government is acting, or being asked to act?</b> Two parts appear. Congress passed the statute, but the story ends with the agency “starts charging”. The act the story is about now is the agency’s. The answer is <b>The President and the agencies</b>.</p>
      <p><b>What is the President, or an agency, doing?</b> The agency is putting a law into practice: it charges the amount Congress set. The answer is <b>Applying a law Congress already passed</b>.</p>
      <p><b>What limits the President or the agency here?</b> The agency charges the figure in the statute and no more. It has stayed inside the law. The answer is <b>An agency may go no further than the law allows</b>.</p>
      <p><b>The name</b> is <b>Carrying out the law</b>.</p>
      <p><b>What would change it.</b> If the story had been only “Congress raises the fee by statute”, the part acting would be Congress, the first answer would be “Writing a rule that binds the whole country”, and the name would be A listed power of Congress (enumerated power). If the agency had charged double the statute’s figure, it would be “Ordering something new that no law from Congress allows”, and the name would be Beyond the President’s reach.</p>`},
  {h:'Worked example: a crib law',
   b:`<p class="lead">“A federal statute says every baby crib sold in the country must meet one safety standard, and that no state may set a different one. A state passes a law with a stricter standard.”</p>
      <p><b>Which part of government is acting, or being asked to act?</b> The story ends with “a state passes a law”. The federal statute is background. The answer is <b>A state or a city</b>.</p>
      <p><b>Where does the federal government stand?</b> It has already written a statute on cribs, and it says “no state may set a different one”. It has power here, because selling cribs across the country is trade between the states, which is on Congress’s list, and it has used that power. The answer is <b>It has power here and has already used it</b>.</p>
      <p><b>Who ends up with the say?</b> The statute is meant to be the only rule, so the state’s stricter standard cannot stand. The answer is <b>Federal law, because it controls and the state rule gives way</b>.</p>
      <p><b>The name</b> is <b>Federal law wins (preemption)</b>.</p>
      <p><b>What would change it.</b> If the statute had set only a minimum standard and said nothing against stricter ones, step 2 would be “It has power here, and so does the state: both may act”, step 3 would be “Both, because the federal rule is a minimum a state may go beyond”, and the name would be Both may act.</p>`},
  {h:'Worked example: a request to a judge',
   b:`<p class="lead">“A group of voters asks a judge to order Congress to make Election Day a national holiday.”</p>
      <p><b>Which part of government is acting, or being asked to act?</b> Congress appears, but the story is about a request to a judge: the voters “ask a judge”. The decision has been handed to a court. The answer is <b>The courts</b>.</p>
      <p><b>What is the court being asked to do?</b> No law is being checked, no accused person is involved, and no word of a statute needs explaining. The voters want the judge to say that a holiday is the better policy and to make Congress adopt it. The answer is <b>Decide which policy would be better</b>.</p>
      <p><b>What makes this a question for the court, or not?</b> No law is in dispute. Whether to have an election holiday is a policy choice, and the people to ask are those the voters elect, and the voters themselves. The answer is <b>No law is in dispute: it is for voters and the leaders they elect to decide</b>.</p>
      <p><b>The name</b> is <b>A choice for voters, not judges (political question)</b>.</p>
      <p><b>What would change it.</b> If a law required every employer to give the day off and a fined employer sued, saying the law broke the Constitution, the court would be asked to “Check a law against the Constitution”, and the name would be A court checks a law (judicial review).</p>`},
  {h:'Using the key on a real news item',
   b:`<p class="lead">Real stories do not label themselves, and they bundle several events together. Here is a made-up news item with three events in it. Read it first, then see how the questions handle each one.</p>
      <p>“The Senate voted 54 to 46 on Tuesday to approve the President’s choice to lead the energy agency. The agency later published a rule saying that appliance labels must show the yearly running cost. Last week a county board in the same state banned gas leaf-blowers, and a landscaping company says the ban breaks its rights.”</p>
      <p><b>Event 1.</b> Which part of government is acting? The Senate, which belongs to <b>Congress</b>. What is Congress doing? <b>Approving a person or an agreement the President proposes</b>. Which rule decides? <b>The Senate must agree: a majority for a person, two-thirds for a treaty</b>. The name is <b>The Senate must agree (advice and consent)</b>.</p>
      <p><b>Event 2.</b> An agency “published a rule”: <b>The President and the agencies</b>, applying a law, with the limit that an agency may go no further than the law allows. The name is <b>Carrying out the law</b>.</p>
      <p><b>Event 3.</b> A county board is <b>A state or a city</b>. The federal government has no power over gas leaf-blowers, so the first answer is <b>It has no power here</b>. The county is using power its state gave it, so the second answer is <b>A city or county, because the state handed the power down</b>, and the name is <b>Handed down to a city or county (local government)</b>. The company says the ban “breaks its rights”. That is only its claim. For the name to change to Nobody may act — a protected right, a protected right such as speech or religion has to be at stake, and a leaf-blower is not one.</p>
      <p><b>What to look for in any real item.</b> Ask who is acting. Ask whether a statute stands behind what they are doing. Ask where the money comes from. Ask whether a protected right is in play. And ask which level of government it is: federal, state or city. Those five questions get you most of the way before you ever reach the key’s own questions.</p>`}
  ],
  drill:{kind:'det'} },

];

const CIVICS = {
  id:'civics', name:'US Civics & History', rev:1,
  blurb:'The civics a newcomer is expected to know, taught through the question underneath most of it: who decides? You learn to read any case in the same four steps, and the facts you have to memorise are tied to them.',
  intro:'The civics a newcomer is expected to know, taught through the question underneath most of it: who decides? Every case is read in four steps: which part of government is acting, what it is doing, what limits it, and the name for what it comes to. Right name by the wrong route counts as a miss.',
  outcomes: CIVICS_OUTCOMES,
  determination: { gateCode:'N1', steps:[CIVICS_GATE], stepsByGate:CIVICS_STEPS_BY_GATE },
  determinationIntro:`<p>You are working out which part of government is acting in each case, then what it is doing and what limits it.</p>
      <ol>
        <li>Read the case.</li>
        <li><b>First question</b>: which part of government is acting, or being asked to act? Congress, the President and the agencies, the courts, or a state or a city.</li>
        <li><b>The next two questions</b> depend on that answer. They open one after the other.</li>
        <li><b>Name it</b>, then record your determination.</li>
      </ol>
      <p>The list of names between the case and the first question is a readout, not a control. It crosses off the names your answers have ruled out. Nothing there can be tapped.</p>
      <p>Several cases end at a limit rather than a power: something a part of government may not do. Those count like any other determination.</p>
      <p>Your name and your route are scored separately. Right name by the wrong route counts as a miss.</p>
`,
  specimens: CIVICS_SPECIMENS,
  falsLabel: 'What would change the answer',
  quickDrills: [
    {key:'n1', title:'Who decides', prompt:'Which part of government is acting, or being asked to act?', items:N1_DRILL, opts:N1_OPTS},
    {key:'n2', title:'Founding documents', prompt:'Which document is it?', items:N2_DRILL, opts:N2_OPTS},
    {key:'n3', title:'The chambers', prompt:'Which chamber or office?', items:N3_DRILL, opts:N3_OPTS},
    {key:'n4', title:'Rights and duties', prompt:'Right or duty, and who has it?', items:N4_DRILL, opts:N4_OPTS},
    {key:'n5', title:'Which era', prompt:'Which era does it belong to?', items:N5_DRILL, opts:N5_OPTS}
  ],
  errDrill: CIVICS_ERR,
  course: CIVICS_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'n1', label:'Who decides'}, {key:'n2', label:'Documents'}, {key:'n3', label:'The chambers'},
    {key:'n4', label:'Rights and duties'}, {key:'n5', label:'Which era'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Office-holders are deliberately left out.</b> The President, Vice President, Speaker, Chief Justice, your governor, your senators and your representative are all test answers, and all of them change with elections or with where you live. Look them up fresh.</li>
    <li><b>Take the test details from uscis.gov.</b> Which version of the question list applies, how many are asked, the pass mark and the age-and-residence exemptions have changed more than once and can depend on your filing date. The material here is stable. The procedure around it is not.</li>
    <li><b>The official answers are short on purpose.</b> Where this course adds context the test leaves out, such as the removal of Native nations, the ninety-five years between the Fifteenth Amendment and the Voting Rights Act, or the causes of the Civil War, that context is well documented. The interview, however, wants the short answer.</li>
    <li><b>How to read the Constitution is argued over.</b> How far the power over trade between the states reaches, what the Second Amendment protects, and where religious liberty ends are live arguments among people who know the material well. This course teaches the structure those arguments happen inside.</li>
    <li><b>Where the key simplifies.</b> Asking “who decides?” treats as clean a line that is often argued in court for years, above all the limits of what an agency may do. It is a reliable first reading, not a settled map.</li>
    <li><b>State law varies enormously.</b> This course covers the federal structure and the questions that sort federal, state and city power. Marriage, licensing, schooling, criminal law, renting a home and professional qualifications all differ by state, and moving changes them.</li>
    <li><b>Not covered:</b> the immigration process itself: eligibility, forms, fees, timelines and interviews. It is a much larger subject than the civics, and the one where current information matters most.</li>
  </ul>`
};


