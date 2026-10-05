/* ===================== SUBJECT: US CIVICS & HISTORY ===================== */

const CIVICS_OUTCOMES = [
  {id:'enumerated',  n:'An enumerated power of Congress', group:'congress'},
  {id:'purse',       n:'The power of the purse',          group:'congress'},
  {id:'confirm',     n:'Senate advice and consent',       group:'congress'},
  {id:'impeach',     n:'Impeachment and removal',         group:'congress'},
  {id:'beyondcong',  n:'Beyond Congress’s reach',         group:'congress'},
  {id:'execute',     n:'Executing the law',               group:'president'},
  {id:'commander',   n:'Commander in chief',              group:'president'},
  {id:'diplomacy',   n:'Foreign affairs and treaties',    group:'president'},
  {id:'vetopardon',  n:'Veto and pardon',                 group:'president'},
  {id:'beyondpres',  n:'Beyond the President’s reach',    group:'president'},
  {id:'review',      n:'Judicial review',                 group:'courts'},
  {id:'trialrights', n:'Trial and due-process rights',    group:'courts'},
  {id:'interpret',   n:'Interpreting a statute',          group:'courts'},
  {id:'notlegal',    n:'A political question, not a legal one', group:'courts'},
  {id:'police',      n:'Reserved to the states',          group:'states'},
  {id:'localgov',    n:'Delegated to local government',   group:'states'},
  {id:'preempted',   n:'Federal law preempts',            group:'states'},
  {id:'concurrent',  n:'Both may act',                    group:'states'},
  {id:'protected',   n:'Nobody may act — a protected right', group:'states'}
];

const CIVICS_GATE = { code:'N1', label:'Who has the authority here?', options:[
  { id:'congress',  n:'Congress',            sub:'the branch that writes the law',
    keeps:['enumerated','purse','confirm','impeach','beyondcong'] },
  { id:'president', n:'The President and the agencies', sub:'the branch that carries it out',
    keeps:['execute','commander','diplomacy','vetopardon','beyondpres'] },
  { id:'courts',    n:'The courts',          sub:'the branch that says what it means',
    keeps:['review','trialrights','interpret','notlegal'] },
  { id:'states',    n:'The states, or nobody', sub:'outside the federal government entirely',
    keeps:['police','localgov','preempted','concurrent','protected'] }
]};

const CIVICS_STEPS_BY_GATE = {
  congress: [
    { code:'L1', label:'What kind of act is this', options:[
        {id:'makelaw', n:'Writing a rule that binds the whole country', keeps:['enumerated','beyondcong']},
        {id:'money',   n:'Deciding what gets funded',                   keeps:['purse']},
        {id:'approve', n:'Approving a person or an agreement the President proposes', keeps:['confirm']},
        {id:'remove',  n:'Removing a federal official for misconduct',  keeps:['impeach']}
    ]},
    { code:'L2', label:'What settles it', options:[
        {id:'listed',      n:'The power is one of those listed in Article I', keeps:['enumerated']},
        {id:'barred',      n:'No listed power reaches it, or a right forbids it', keeps:['beyondcong']},
        {id:'appropriate', n:'Only Congress can appropriate money from the Treasury', keeps:['purse']},
        {id:'senate23',    n:'The Senate must consent — two-thirds for a treaty', keeps:['confirm']},
        {id:'housetries',  n:'The House brings the charge; the Senate tries it', keeps:['impeach']}
    ]}
  ],
  president: [
    { code:'X1', label:'What is actually being done', options:[
        {id:'carryout', n:'Applying a law Congress already passed',     keeps:['execute']},
        {id:'military', n:'Directing the armed forces',                 keeps:['commander']},
        {id:'abroad',   n:'Dealing with another country',               keeps:['diplomacy']},
        {id:'onlaw',    n:'Acting on a bill, or on a federal conviction',keeps:['vetopardon']},
        {id:'newduty',  n:'Creating an obligation Congress never authorised', keeps:['beyondpres']}
    ]},
    { code:'X2', label:'Where the limit sits', options:[
        {id:'statute',  n:'The agency may go no further than the statute allows', keeps:['execute']},
        {id:'declare',  n:'Only Congress declares war and funds it',    keeps:['commander']},
        {id:'ratify',   n:'A treaty binds nothing until the Senate consents', keeps:['diplomacy']},
        {id:'override', n:'A veto falls to two-thirds of both houses; a pardon reaches federal offences only', keeps:['vetopardon']},
        {id:'needslaw', n:'It needs legislation, and an order cannot substitute', keeps:['beyondpres']}
    ]}
  ],
  courts: [
    { code:'J1', label:'What is the court being asked to do', options:[
        {id:'strike',   n:'Measure a law against the Constitution',     keeps:['review']},
        {id:'procprot', n:'Protect someone’s rights inside a proceeding',keeps:['trialrights']},
        {id:'meaning',  n:'Settle what a statute’s words cover',        keeps:['interpret']},
        {id:'wiser',    n:'Decide which policy would be wiser',         keeps:['notlegal']}
    ]},
    { code:'J2', label:'What makes it the court’s to answer — or not', options:[
        {id:'livecase',  n:'Someone actually injured brought a live case', keeps:['review']},
        {id:'guarantee', n:'The Constitution guarantees the procedure itself', keeps:['trialrights']},
        {id:'textprec',  n:'Text and precedent decide it, not preference', keeps:['interpret']},
        {id:'elected',   n:'Nothing legal is in dispute — it belongs to the elected branches', keeps:['notlegal']}
    ]}
  ],
  states: [
    { code:'F1', label:'What is the federal government’s position', options:[
        {id:'silent',    n:'It has no listed power here',              keeps:['police','localgov']},
        {id:'acted',     n:'It has authority and has already acted',   keeps:['preempted']},
        {id:'bothmay',   n:'Both have authority, and both may act',    keeps:['concurrent']},
        {id:'forbidden', n:'No government may act — a right protects it', keeps:['protected']}
    ]},
    { code:'F2', label:'Where it lands', options:[
        {id:'tenth',     n:'Reserved to the states — the general police power', keeps:['police']},
        {id:'city',      n:'Handed by the state to a city or county',  keeps:['localgov']},
        {id:'supremacy', n:'Federal law controls and the state rule gives way', keeps:['preempted']},
        {id:'floor',     n:'The federal rule is a floor a state may exceed', keeps:['concurrent']},
        {id:'neither',   n:'Neither may act at all',                   keeps:['protected']}
    ]}
  ]
};

const N1_OPTS = ['Congress','The President and the agencies','The courts','The states, or nobody'];
const N1_DRILL = [
  {q:'Setting the requirements a person must meet to become a naturalised citizen.',
   a:'Congress', w:'Article I gives Congress power "to establish an uniform Rule of Naturalization." Every rule about who may become a citizen traces back to a statute Congress wrote — which is why those rules change when Congress changes them.'},
  {q:'Writing the detailed regulations that put an immigration statute into operation, and running the offices that process the forms.',
   a:'The President and the agencies', w:'Congress writes the statute; the executive branch implements it. An agency may fill in detail, but it may not go further than the statute allows.'},
  {q:'Deciding whether a particular statute conflicts with the Constitution, in a case brought by someone it harmed.',
   a:'The courts', w:'Judicial review, established in Marbury v. Madison (1803). Note the condition: a live case brought by an injured party. Courts do not rule on laws in the abstract.'},
  {q:'Setting the rules for a driver’s licence, a marriage licence, or who may practise law in the state.',
   a:'The states, or nobody', w:'The Tenth Amendment reserves to the states everything not given to the federal government. Licensing, schools, police, most criminal law and family law all sit here.'},
  {q:'Refusing to provide money for a programme the President wants to build.',
   a:'Congress', w:'No money leaves the Treasury without an appropriation. The power of the purse is the oldest and bluntest check the legislature holds.'},
  {q:'Deciding whether a city may require a permit before a religious congregation meets in a rented hall.',
   a:'The states, or nobody', w:'Nobody may — the First Amendment applies against the states through the Fourteenth. Some questions are not about which government decides; the answer is that none of them does.'}
];

const N2_OPTS = ['The Declaration of Independence','The Constitution','The Bill of Rights','The Federalist Papers'];
const N2_DRILL = [
  {q:'Adopted on July 4, 1776, written mainly by Thomas Jefferson, announcing separation from Britain.',
   a:'The Declaration of Independence', w:'It declares independence and states why. It is not law and creates no government — that came eleven years later.'},
  {q:'Says that people have unalienable rights, and that governments derive their just powers from the consent of the governed.',
   a:'The Declaration of Independence', w:'The idea of self-government, stated as a principle before any institution existed to carry it out.'},
  {q:'Begins "We the People," sets out the three branches, and is the supreme law of the land.',
   a:'The Constitution', w:'Written at the Philadelphia convention in 1787, in force from 1789. It has been amended 27 times.'},
  {q:'The first ten amendments, ratified in 1791.',
   a:'The Bill of Rights', w:'Added because several states would not ratify without a written guarantee of individual rights.'},
  {q:'Protects freedom of speech, religion, press, assembly and petition — five freedoms in one amendment.',
   a:'The Bill of Rights', w:'The First Amendment. Being able to list all five is worth more than remembering the number.'},
  {q:'Essays by Alexander Hamilton, James Madison and John Jay, published under the name Publius to argue for ratification.',
   a:'The Federalist Papers', w:'Not law at all — campaign material for the Constitution, still cited as evidence of what its drafters meant.'},
  {q:'Can be changed only by a proposal from two-thirds of both houses, then ratification by three-quarters of the states.',
   a:'The Constitution', w:'Deliberately difficult. It is why 27 amendments exist out of many thousands proposed.'}
];

const N3_OPTS = ['The House of Representatives','The Senate','Both chambers','The Vice President'];
const N3_DRILL = [
  {q:'435 voting members, apportioned by population, each serving a two-year term.',
   a:'The House of Representatives', w:'Two years means the whole chamber faces election constantly — the body designed to track public opinion quickly.'},
  {q:'100 members, two for every state regardless of size, each serving six years.',
   a:'The Senate', w:'Equal representation for states was the compromise that made the Constitution possible. Six-year terms were meant to slow it down.'},
  {q:'Confirms federal judges and cabinet officers, and consents to treaties by a two-thirds vote.',
   a:'The Senate', w:'Advice and consent. The President nominates and negotiates; neither becomes final here without the Senate.'},
  {q:'Brings impeachment charges against a federal official, by majority vote.',
   a:'The House of Representatives', w:'Impeachment is the charge, not the removal — the two steps sit in different chambers on purpose.'},
  {q:'Holds the trial after an impeachment, and needs two-thirds to convict and remove.',
   a:'The Senate', w:'The two-thirds bar means removal requires support well beyond one party in almost any Senate.'},
  {q:'Must pass a bill in identical form before it can go to the President.',
   a:'Both chambers', w:'Bicameralism. A bill that passes one chamber has done nothing yet.'},
  {q:'Two-thirds of each is required to override a presidential veto.',
   a:'Both chambers', w:'The veto is strong but not final. This is checks and balances in its plainest form.'},
  {q:'Presides over the Senate and casts the deciding vote when it is tied.',
   a:'The Vice President', w:'The Vice President is President of the Senate, and is first in the line of succession to the presidency.'}
];

const N4_OPTS = ['Everyone in the United States','Citizens only','A responsibility, not a right','Not a constitutional right at all'];
const N4_DRILL = [
  {q:'Freedom of speech.',
   a:'Everyone in the United States', w:'The First Amendment restrains government from abridging the freedom of speech; it does not limit the protection to citizens. Most of the Bill of Rights speaks of "persons" or "the people," not citizens.'},
  {q:'Voting in a federal election.',
   a:'Citizens only', w:'One of the small set of rights genuinely reserved to citizens — along with holding most federal offices and serving on a federal jury.'},
  {q:'The right to a lawyer, and to remain silent, if you are charged with a crime.',
   a:'Everyone in the United States', w:'The Fifth and Sixth Amendments protect "persons" and "the accused." Immigration status does not remove them in a criminal case.'},
  {q:'Serving on a federal jury when summoned.',
   a:'Citizens only', w:'Restricted to citizens, and treated as an obligation of citizenship rather than a privilege of it.'},
  {q:'Protection against unreasonable searches and seizures.',
   a:'Everyone in the United States', w:'The Fourth Amendment protects "the people" — a protection of persons present, not a benefit of status.'},
  {q:'Paying income tax on money earned in the United States.',
   a:'A responsibility, not a right', w:'It attaches to earning here, not to citizenship. Filing is required of residents and many non-residents alike.'},
  {q:'Serving in the state legislature of the state where you live.',
   a:'Citizens only', w:'Elected office is generally restricted to citizens, with the stricter rules — natural-born status for the presidency — applying at the federal level.'},
  {q:'Being provided with a job or a home by the government.',
   a:'Not a constitutional right at all', w:'The Constitution is mostly a list of things government may not do to you, not a list of things it must give you. That distinction surprises people from countries whose constitutions are written the other way.'},
  {q:'Freedom to practise your religion, or none.',
   a:'Everyone in the United States', w:'The First Amendment both bars an established church and protects free exercise. Applies to everyone present, and against the states as well as the federal government.'}
];

const N5_OPTS = ['Colonial and founding (to 1791)','The 1800s before the Civil War','Civil War and Reconstruction','The 20th century'];
const N5_DRILL = [
  {q:'Colonists destroyed a shipment of tea in Boston Harbor in protest at being taxed by a parliament they had no part in electing.',
   a:'Colonial and founding (to 1791)', w:'"No taxation without representation" — the grievance that turned a tax dispute into an argument about consent, which is the argument the Declaration later makes.'},
  {q:'Delegates met in Philadelphia and produced a new framework of government to replace the Articles of Confederation.',
   a:'Colonial and founding (to 1791)', w:'1787. The Articles had left the national government unable to tax or regulate trade, and the convention was called because that was failing.'},
  {q:'The purchase of a vast territory from France roughly doubled the size of the country.',
   a:'The 1800s before the Civil War', w:'The Louisiana Purchase, 1803. Westward expansion is also what forced the question of whether new states would permit slavery — the fight that led to the war.'},
  {q:'A presidential proclamation declared enslaved people in the rebelling states to be free.',
   a:'Civil War and Reconstruction', w:'The Emancipation Proclamation, 1863. It reached the Confederate states; abolition everywhere came with the Thirteenth Amendment in 1865.'},
  {q:'Three amendments abolished slavery, defined citizenship for all born here, and barred denying the vote on account of race.',
   a:'Civil War and Reconstruction', w:'The Thirteenth, Fourteenth and Fifteenth. The Fourteenth is the most consequential amendment ever added — citizenship, due process and equal protection, applied against the states.'},
  {q:'Women won the vote nationwide by constitutional amendment, after a campaign of more than seventy years.',
   a:'The 20th century', w:'The Nineteenth Amendment, 1920. Susan B. Anthony and Elizabeth Cady Stanton began the organised campaign in the 1840s and neither lived to see it.'},
  {q:'The country entered a world war after its Pacific fleet was attacked at Pearl Harbor.',
   a:'The 20th century', w:'December 7, 1941. The United States had entered the earlier world war in 1917.'},
  {q:'A civil rights act outlawed segregation and a voting rights act dismantled the devices used to keep Black citizens from the ballot.',
   a:'The 20th century', w:'1964 and 1965. Note what the second one implies: the Fifteenth Amendment had been law since 1870 and was not a reality for most of that century.'}
];

const CIVICS_ERR = [
  {q:'The President makes the laws.',
   w:'Congress makes them. The President signs or vetoes, and then executes what exists. Most of what is reported as a President "doing" something is either enforcing a statute Congress already passed or issuing an executive order — which binds the executive branch, cannot create an obligation Congress never authorised, and can be reversed by the next President with a signature.'},
  {q:'The Supreme Court can strike down any law it disagrees with.',
   w:'Only when someone actually injured by the law brings a live case, and only on the question of whether it conflicts with the Constitution. There is no power to review laws in the abstract, and no power to strike down a law for being unwise.'},
  {q:'Federal law always beats state law.',
   w:'Only where the federal government has authority to act and has acted. The Supremacy Clause settles conflicts within federal power; the Tenth Amendment leaves everything else with the states. Most law an ordinary person meets — driving, marriage, schools, most crime, landlord and tenant — is state law.'},
  {q:'The Bill of Rights protects citizens.',
   w:'It protects persons. Speech, religion, due process, counsel and protection from unreasonable search are written as limits on government, not as benefits of status, and they apply to everyone present. Voting, most elected office and federal jury service are the genuine citizens-only exceptions.'},
  {q:'America has always been a democracy where everyone could vote.',
   w:'Suffrage was expanded over nearly two centuries, each time by amendment or statute against real opposition: race in 1870, women in 1920, the poll tax abolished in 1964, the age lowered to eighteen in 1971 — with the Voting Rights Act of 1965 needed to make the 1870 guarantee operate. The expansion is the story, and skipping it makes the country unintelligible.'},
  {q:'The Civil War was about states’ rights, not slavery.',
   w:'The secession declarations of the seceding states name slavery explicitly and at length as the cause. "States’ rights" leaves out the question it is standing in for — a right to do what — which is the part the primary documents answer directly.'},
  {q:'Everyone born in the United States is a citizen — that has simply always been the rule.',
   w:'It is the rule because the Fourteenth Amendment put it there in 1868, specifically to overturn the Dred Scott decision, which had held that Black Americans could not be citizens at all. Treating it as timeless custom loses why it was written and what it was written against.'},
  {q:'If you pass the civics test you have to know all of American history.',
   w:'The naturalisation civics test draws on a published list of questions, asked orally, and you are told in advance what is on it. The number asked, the number needed to pass, and which version of the list applies have all changed more than once in recent years — check the current rules at uscis.gov rather than any study guide, this one included.'}
];

const CIVICS_SPECIMENS = [
  {q:'A statute sets out how many years a lawful permanent resident must have lived in the country before applying to naturalise, what English and civics knowledge is required, and which offences bar an applicant from establishing good moral character.',
   sub:{N1:['congress'],L1:['makelaw'],L2:['listed']},outcome:'enumerated',
   why:'Article I, Section 8 gives Congress the power "to establish an uniform Rule of Naturalization," and this is that power being used. It is worth knowing precisely, because it explains why the requirements for citizenship change when Congress changes them and not otherwise — and why an agency can alter how a rule is administered but not what the rule is.',
   fals:'If the same requirement appeared only in an agency manual with no statute behind it, you would be looking at the executive branch exceeding what Congress authorised, which is a different determination entirely.'},

  {q:'A bill makes it a federal crime to publish writing that brings a sitting federal official into contempt or disrepute. It passes both chambers and is signed.',
   sub:{N1:['congress'],L1:['makelaw'],L2:['barred']},outcome:'beyondcong',
   why:'The First Amendment begins "Congress shall make no law," and criticism of officials is the core of what it protects. Passing a bill properly does not make it constitutional — the procedure and the power are separate questions. The Sedition Act of 1798 was almost exactly this, and it is remembered as a mistake rather than a precedent.',
   fals:'A narrow statute against a recognised exception — genuine incitement, or defamation with actual malice — sits inside Congress’s power. The breadth is what fails here, not the subject.'},

  {q:'The President announces a major construction programme and directs an agency to begin. Congress declines to include any money for it in the appropriations bill, and the programme cannot proceed.',
   sub:{N1:['congress'],L1:['money'],L2:['appropriate']},outcome:'purse',
   why:'No money is drawn from the Treasury except by appropriation made by law. This is the oldest and bluntest legislative check there is: Congress need not forbid a policy, because declining to fund it is sufficient. Every budget confrontation you will read about is this provision operating.',
   fals:'If an existing permanent appropriation already covered the spending, Congress would have to act affirmatively to stop it — a much harder thing than simply not funding it.'},

  {q:'The President signs an agreement with another country and nominates a judge to a federal court. Neither the agreement nor the appointment takes effect; both go to the Senate, where the agreement needs the support of two-thirds of those present.',
   sub:{N1:['congress'],L1:['approve'],L2:['senate23']},outcome:'confirm',
   why:'Advice and consent. The President nominates and negotiates, and the Senate decides whether either becomes real — by simple majority for appointments, by two-thirds for a treaty. The high bar for treaties is why many international commitments are made instead as executive agreements, which bind less and last only as long as the next President allows.',
   fals:'An executive agreement needing no Senate vote is a different instrument with different force. If the Senate never votes, it was never a treaty.'},

  {q:'A federal judge is credibly accused of taking money to decide cases. The House votes articles by a simple majority; the Senate then holds a trial, and two-thirds vote to convict and remove him from office.',
   sub:{N1:['congress'],L1:['remove'],L2:['housetries']},outcome:'impeach',
   why:'The charge and the trial sit in different chambers deliberately, so that no single body both accuses and removes. Federal judges serve during good behaviour rather than for a fixed term, and impeachment is the only route by which they can be removed — which is what judicial independence means in practice.',
   fals:'Impeachment removes someone from office and no more. Any criminal punishment is a separate matter for the ordinary courts.'},

  {q:'Congress passes a statute requiring that a product be labelled with its ingredients. An agency then issues detailed regulations specifying type sizes, the wording of warnings, and the testing method, and runs an inspection programme.',
   sub:{N1:['president'],X1:['carryout'],X2:['statute']},outcome:'execute',
   why:'This is the executive branch doing what it exists to do: taking a statute and making it operable. The detail is genuinely the agency’s, which is why so much of the law an ordinary person meets was written by an agency rather than by Congress — and why the limit matters.',
   fals:'If the regulation banned the product outright when the statute only required labelling, the agency would have gone past what Congress authorised, and it moves to beyond the President’s reach.'},

  {q:'The President orders forces into action abroad. Congress has not declared war; it continues to appropriate money for the operation, and debates a resolution to restrict it.',
   sub:{N1:['president'],X1:['military'],X2:['declare']},outcome:'commander',
   why:'The Constitution splits this power on purpose: the President commands the forces, and Congress alone declares war and pays for it. The founders separated the ability to start a war from the ability to fund one so that neither could act alone — and the resulting friction, visible in every conflict since 1945, is the design working rather than failing.',
   fals:'A formal declaration of war would put the question beyond argument. Their rarity since the Second World War is why this boundary is contested rather than settled.'},

  {q:'The Secretary of State spends two years negotiating a trade and security agreement with another government. The text is agreed and initialled by both delegations, and it binds nobody yet.',
   sub:{N1:['president'],X1:['abroad'],X2:['ratify']},outcome:'diplomacy',
   why:'Conducting foreign relations is the President’s, and it is the clearest area of executive primacy — one voice speaks for the country abroad. But negotiating and binding are different acts, and the second needs two-thirds of the Senate.',
   fals:'If the subject were one Congress had already legislated on and the agreement contradicted the statute, negotiation alone could not change domestic law.'},

  {q:'A bill reaches the President and he returns it unsigned with his objections. Separately, he grants a pardon to a person convicted of a federal offence. A request to pardon someone convicted under state law is refused as outside his power.',
   sub:{N1:['president'],X1:['onlaw'],X2:['override']},outcome:'vetopardon',
   why:'Two powers that act directly on the work of the other branches, each with a limit worth knowing. A veto is not final — two-thirds of both chambers overrides it. A pardon is nearly unreviewable but reaches federal offences only, which is why state convictions lie entirely outside it.',
   fals:'Had the President simply not signed while Congress remained in session, the bill would become law without him after ten days. Doing nothing and vetoing are different acts with different outcomes.'},

  {q:'An executive order directs that a new fee be collected from every household, with the proceeds paid into the Treasury. No statute authorises the fee, and Congress has never voted on it.',
   sub:{N1:['president'],X1:['newduty'],X2:['needslaw']},outcome:'beyondpres',
   why:'Taxing is an enumerated power of Congress, and an executive order cannot reach it. An order directs the executive branch in how it carries out existing law; it is not a substitute for legislation, and the test is always whether a statute authorises what the order directs.',
   fals:'An order adjusting how an agency prioritises enforcement of a fee Congress did create is ordinary execution of the law, however consequential it turns out to be.'},

  {q:'A person penalised under a new statute sues, arguing it conflicts with a constitutional guarantee. The court agrees and holds the statute unenforceable.',
   sub:{N1:['courts'],J1:['strike'],J2:['livecase']},outcome:'review',
   why:'Judicial review, which Marbury v. Madison established in 1803 and which the Constitution never states in so many words. Note the precondition in the facts: a person actually penalised, bringing a real case. Courts cannot review a law because someone dislikes it, and cannot issue an opinion on a bill that has not yet injured anyone.',
   fals:'Without an injured plaintiff there is no case, and without a case there is no power — however plainly unconstitutional the statute may look.'},

  {q:'Someone is arrested. He is told he need not answer questions, a lawyer is appointed because he cannot afford one, and he is brought before a judge and tried before a jury in public, within a defined period.',
   sub:{N1:['courts'],J1:['procprot'],J2:['guarantee']},outcome:'trialrights',
   why:'The Fourth, Fifth, Sixth and Eighth Amendments together describe a procedure the government must follow before it may punish anyone. These protect persons, not citizens — immigration status does not remove the right to counsel or to silence in a criminal case, which is among the most practically important things on this list to know.',
   fals:'Immigration proceedings are civil rather than criminal, and several of these guarantees — appointed counsel in particular — do not apply there in the same way. The distinction matters enormously and is widely misunderstood.'},

  {q:'A statute bans "vehicles" from a public park. A case arrives asking whether that covers an electric bicycle, which did not exist when the statute was written.',
   sub:{N1:['courts'],J1:['meaning'],J2:['textprec']},outcome:'interpret',
   why:'Most of what courts actually do is this, not constitutional drama: deciding what words cover in a situation the drafters never pictured. The dispute is resolved from the text, the statute’s structure and purpose, and prior decisions — not from the judge’s view of whether e-bikes in parks are a good idea.',
   fals:'If the argument were that the legislature lacked power to ban vehicles at all, it would be judicial review instead. The question here assumes a valid statute and asks only what it says.'},

  {q:'Two parties disagree about whether the top rate of income tax should be 22% or 28%. Both rates are plainly within the taxing power, and both sides ask the courts to settle which is the better policy.',
   sub:{N1:['courts'],J1:['wiser'],J2:['elected']},outcome:'notlegal',
   why:'There is no legal question here at all. Where the Constitution commits a choice to the elected branches and supplies no standard a court could apply, the answer is an election, not a lawsuit. Recognising which disputes are political rather than legal is most of what people get wrong about the courts.',
   fals:'If a tax applied only to members of one religion, a constitutional standard would exist and it would become a legal question immediately.'},

  {q:'A state sets the age at which a person may hold a driver’s licence, who may marry, what its public schools teach, how its police forces operate, and which professions require a state licence.',
   sub:{N1:['states'],F1:['silent'],F2:['tenth']},outcome:'police',
   why:'The Tenth Amendment reserves to the states, or to the people, everything not delegated to the federal government. This general police power over health, safety, morals and welfare is where most law an ordinary person encounters actually lives — which is why moving between states changes more about daily life than newcomers expect.',
   fals:'Where a state rule discriminates against out-of-state commerce or collides with a valid federal statute, the analysis moves to preemption.'},

  {q:'A city council decides which streets permit overnight parking, what may be built in which neighbourhood, and the opening hours of its libraries. Its authority to do so comes from the state.',
   sub:{N1:['states'],F1:['silent'],F2:['city']},outcome:'localgov',
   why:'Cities and counties are creatures of their state rather than a third sovereign — they hold what the state has handed them and no more, and a state can expand or withdraw that grant. For most residents this is nevertheless the layer of government whose decisions touch them daily.',
   fals:'If the state legislature passed a law overriding the zoning decision, the city would simply lose. That relationship does not run the other way.'},

  {q:'A state enacts its own scheme deciding which non-citizens may remain in the state, creating state penalties for immigration status and directing state officers to enforce them independently of federal authorities.',
   sub:{N1:['states'],F1:['acted'],F2:['supremacy']},outcome:'preempted',
   why:'Immigration and naturalisation are committed to the federal government, and Congress has legislated comprehensively, so a parallel state system cannot stand — the Supremacy Clause makes federal law controlling where it validly applies. The practical consequence for anyone navigating status is that the rules come from federal law however loudly a state legislates.',
   fals:'States retain wide authority over their own benefits, licences and employment rules, and much state legislation in this area survives precisely because it stays on that side of the line.'},

  {q:'Federal law sets a minimum wage. A state sets its own minimum wage higher, and employers in that state must pay the higher figure. Both the federal government and the state also tax income.',
   sub:{N1:['states'],F1:['bothmay'],F2:['floor']},outcome:'concurrent',
   why:'Many federal statutes set a floor rather than a ceiling, leaving states free to go further, and some powers — taxing, spending, maintaining courts — simply belong to both. Where a federal rule is a minimum, a stricter state rule is not a conflict with it.',
   fals:'If the federal statute said expressly that no state may require more, the state law would be preempted. Whether a federal rule is a floor or a ceiling is the whole question.'},

  {q:'A state passes a law requiring a permit before any religious congregation may hold a service in a rented hall, and a city ordinance requires approval before a newspaper may be distributed.',
   sub:{N1:['states'],F1:['forbidden'],F2:['neither']},outcome:'protected',
   why:'Neither government may do this. The Bill of Rights originally restrained only the federal government; the Fourteenth Amendment, and a long line of cases applying its guarantees against the states, is why it now restrains every level. Some questions are not about which government has the say — the answer is that none of them does.',
   fals:'Content-neutral rules about time, place and manner — a noise limit, a permit for closing a street — are a different matter, and are generally allowed.'}
];

const CIVICS_COURSE = [
{ tag:'One', title:'Who decides',
  cards:[
  {h:'One question answers most of them',
   b:`<p class="lead">The naturalisation civics test asks about branches, amendments and dates. Underneath almost every one of those questions is a single practical question: <b>who gets to decide this?</b> Learn to answer that and the list stops being a hundred unrelated facts.</p>
      <p>It is also the most useful thing to know as someone new here. Americans argue constantly about what should be done, and a surprising share of those arguments are really about who is allowed to do it — which is a question with an answer.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which authority</i> decided it, you have memorised an answer rather than understood a system.</div>`},
  {h:'Three branches, and a fourth answer',
   b:`<table class="k">
      <tr><th>N1</th><td><b>Congress</b> — writes the law<span class="tell">Only powers listed in Article I. Naturalisation is one of them.</span></td></tr>
      <tr><th>N2</th><td><b>The President and the agencies</b> — carry it out<span class="tell">May go no further than a statute allows.</span></td></tr>
      <tr><th>N3</th><td><b>The courts</b> — say what it means<span class="tell">Only in a live case brought by someone injured.</span></td></tr>
      <tr><th>N4</th><td><b>The states, or nobody</b> — everything else<span class="tell">The Tenth Amendment, and rights that bind every level.</span></td></tr>
      </table>
      <p>The fourth is the one newcomers underestimate. Most law you will actually meet — driving, marriage, schools, most crime, landlord and tenant — is state law, and it changes when you move.</p>`},
  {h:'Separation of powers, and why it is slow',
   b:`<p>The founders had just fought a war against concentrated authority, and built a system designed to make action difficult rather than efficient. A bill must pass two chambers in identical form and survive a veto that takes two-thirds of both to override. Appointments and treaties need the Senate. Spending needs an appropriation. Courts can void what the other two agree on.</p>
      <p>People often describe this as dysfunction. It is the design, and it is worth understanding before forming a view: a government that cannot act quickly also cannot be captured quickly.</p>
      <div class="warn"><strong>The practical version:</strong> when someone says the government has done something, ask which part. The answer usually tells you how durable it is — a statute outlives an administration, an executive order frequently does not.</div>`},
  {h:'Federalism: two governments over the same ground',
   b:`<p>You live under a state government and a national one at once, each with its own constitution, legislature, courts and police. The federal government holds the powers the Constitution lists; everything else was reserved to the states by the Tenth Amendment.</p>
      <p>Where both have authority, federal law controls any genuine conflict — the Supremacy Clause. Where the federal rule is a floor rather than a ceiling, a state may go further. And where a right is at stake, neither may act.</p>
      <div class="note"><strong>For an immigrant this ordering matters directly.</strong> Immigration and naturalisation are federal, so those rules follow you across state lines unchanged. Licences, benefits, employment rules and schooling are largely state, and do not.</div>`}
  ],
  drill:{kind:'pick', key:'n1'} },

{ tag:'Two', title:'The founding documents',
  cards:[
  {h:'Three documents, three different jobs',
   b:`<p class="lead">They are constantly confused, including by people born here, and the confusion matters because only one of them is law.</p>
      <p>The <b>Declaration of Independence</b> (1776) announced separation from Britain and said why. It created no government and is not enforceable — it is the statement of principle, written mainly by Thomas Jefferson, that people hold unalienable rights and that governments derive their just powers from the consent of the governed.</p>
      <p>The <b>Constitution</b> (written 1787, in force 1789) is the law: it builds the institutions and says what each may do. It opens "We the People" and is the supreme law of the land.</p>
      <p>The <b>Bill of Rights</b> (1791) is the first ten amendments, added because several states would not ratify without written guarantees.</p>`},
  {h:'Eleven years of failure in between',
   b:`<p>Independence in 1776 did not produce the Constitution. The country spent its first years under the Articles of Confederation, which gave the national government no power to tax and no power to regulate trade between the states. It did not work, and the convention of 1787 was called because it was visibly failing.</p>
      <p>That gap explains the document. The taxing power, the commerce power, a single executive and a national judiciary are all answers to specific failures the delegates had just lived through.</p>
      <div class="note">The <b>Federalist Papers</b> — essays by Hamilton, Madison and Jay, published as "Publius" — were written to persuade New York to ratify. They are not law, and are still cited as the best evidence of what the drafters meant.</div>`},
  {h:'Amending it is meant to be hard',
   b:`<p>An amendment needs two-thirds of both houses of Congress to propose and three-quarters of the states to ratify. Thousands have been proposed. <b>Twenty-seven</b> have been adopted, and ten of those arrived together in 1791.</p>
      <p>The difficulty is why so much constitutional change in practice comes through the courts interpreting old text rather than through new text — and why arguments about how judges should read it are a permanent feature of American politics rather than a passing controversy.</p>`},
  {h:'The amendments that changed the country most',
   b:`<table class="k">
      <tr><th>1</th><td><b>First</b> — speech, religion, press, assembly, petition<span class="tell">Five freedoms. Learn the list, not the number.</span></td></tr>
      <tr><th>13</th><td><b>Thirteenth</b> (1865) — abolished slavery</td></tr>
      <tr><th>14</th><td><b>Fourteenth</b> (1868) — citizenship by birth, due process, equal protection, and the rest of the Bill of Rights applied against the states<span class="tell">Arguably the most consequential amendment ever added.</span></td></tr>
      <tr><th>15</th><td><b>Fifteenth</b> (1870) — the vote regardless of race</td></tr>
      <tr><th>19</th><td><b>Nineteenth</b> (1920) — the vote regardless of sex</td></tr>
      <tr><th>26</th><td><b>Twenty-sixth</b> (1971) — the voting age lowered to eighteen</td></tr>
      </table>`}
  ],
  drill:{kind:'pick', key:'n2'} },

{ tag:'Three', title:'How the branches work',
  cards:[
  {h:'Congress: two chambers, built to disagree',
   b:`<p class="lead">The <b>House of Representatives</b> has 435 voting members, apportioned by population, each serving two years. The <b>Senate</b> has 100 — two per state regardless of size — each serving six.</p>
      <p>That difference is the central compromise of 1787: large states got representation by population, small states got equality. It is why a bill must pass two bodies that answer to different constituencies on different clocks, and why so much proposed legislation dies.</p>
      <p>A bill must pass both chambers in identical form before it reaches the President.</p>`},
  {h:'The President: execute, command, negotiate, veto, pardon',
   b:`<p>Four-year term, limited to two terms by the Twenty-second Amendment. The office executes the laws through the agencies, commands the armed forces, conducts relations with other countries, signs or vetoes bills, and pardons federal offences.</p>
      <p>Each has a limit worth memorising: agencies may not exceed their statute, only Congress declares war and funds it, treaties need two-thirds of the Senate, a veto falls to two-thirds of both chambers, and a pardon cannot touch a state conviction.</p>
      <div class="note">The <b>Vice President</b> is President of the Senate, breaks ties there, and is first in the line of succession — followed by the Speaker of the House.</div>`},
  {h:'The courts: nine justices, and one case at a time',
   b:`<p>The Supreme Court has <b>nine</b> justices, a number set by Congress rather than by the Constitution — it has been as low as five and as high as ten. Federal judges are nominated by the President, confirmed by the Senate, and serve during good behaviour, which in practice means for life.</p>
      <p>In <i>Marbury v. Madison</i> (1803) the Court held that it could refuse to apply a statute conflicting with the Constitution. Judicial review is the single most important power in American government that the Constitution never actually mentions.</p>
      <div class="warn"><strong>The limit people forget:</strong> a court needs a live case brought by someone actually injured. It cannot advise, cannot rule on a bill in advance, and cannot strike down a law for being unwise.</div>`},
  {h:'Checks and balances, concretely',
   b:`<ul>
        <li>Congress passes a law — the President can veto it — two-thirds of both chambers can override.</li>
        <li>The President nominates judges and officers — the Senate confirms or refuses.</li>
        <li>The President negotiates treaties — two-thirds of the Senate consents, or they bind nothing.</li>
        <li>The President commands the military — Congress declares war and controls the money.</li>
        <li>Courts may void acts of both — Congress and the states may amend the Constitution over them.</li>
        <li>The House impeaches; the Senate tries and needs two-thirds to remove.</li>
      </ul>
      <p>Memorise two or three of these as pairs rather than as separate facts. Every one of them is a case of one branch holding something another branch needs.</p>`}
  ],
  drill:{kind:'pick', key:'n3'} },

{ tag:'Four', title:'Rights, duties and the oath',
  cards:[
  {h:'Persons, not citizens',
   b:`<p class="lead">The most practically important thing on this list: most constitutional protections apply to <b>persons</b>, not to citizens. Speech, religion, due process, counsel in a criminal case, protection from unreasonable search — all are written as limits on what government may do to anyone present.</p>
      <p>The genuine citizens-only set is small: voting in federal elections, most elected office, and federal jury service. Nearly everything else in the Bill of Rights reaches everyone.</p>
      <div class="warn"><strong>One distinction worth carrying carefully.</strong> Immigration proceedings are civil, not criminal, and several criminal protections — counsel provided at public expense in particular — do not apply there in the same way. This is widely misunderstood and the difference is consequential.</div>`},
  {h:'What the Constitution does not promise',
   b:`<p>It is mostly a list of things government may not do to you, rather than things it must provide. There is no constitutional right to a job, a home, healthcare or an education at the federal level.</p>
      <p>People arriving from countries whose constitutions are written the other way — with guarantees of work, housing or medical care — often misread American political argument badly because of this. Those things are provided, where they are provided, by statute and by the states, which is exactly why they are fought over election by election rather than settled.</p>`},
  {h:'Responsibilities, and the oath',
   b:`<p>The duties conventionally listed: obey the law, pay taxes on income earned here, serve on a jury when summoned, and — for citizens — vote. Men in a defined age range, citizens and many non-citizens alike, must register with the Selective Service.</p>
      <p>Naturalisation ends with the <b>Oath of Allegiance</b>, in which the applicant gives up allegiance to other countries, swears to support and defend the Constitution and the laws, to obey them, and to serve the nation — in the armed forces or in civilian work of national importance — if required.</p>
      <div class="note">Giving up prior allegiance is part of the oath. Whether your country of origin treats that as renouncing its citizenship is a question of <i>that</i> country’s law, and the answer varies a great deal — check it rather than assuming.</div>`},
  {h:'About the test itself',
   b:`<p>The civics test is <b>oral</b>, from a published list of questions you are told in advance, and it comes alongside an English reading, writing and speaking assessment. There are long-standing exemptions and accommodations based on age and years of residence, and for certain medical conditions.</p>
      <div class="note"><strong>Take the question list from uscis.gov, not from here.</strong> How many are asked, how many you need right, and which version of the list applies have all changed more than once, and can depend on when you filed. This course is for understanding the material; the official list is the thing to memorise.</div>
      <p>Several official answers also change with the calendar or your address — the current President and Vice President, the Speaker, the Chief Justice, your own state’s governor, your senators and your representative. Look those up fresh; they are deliberately absent from this course.</p>`}
  ],
  drill:{kind:'pick', key:'n4'} },

{ tag:'Five', title:'The history you are expected to know',
  cards:[
  {h:'Colonies to independence',
   b:`<p class="lead">People came to the colonies for religious freedom, political liberty and economic opportunity, and to escape persecution — and many did not come freely at all, arriving as indentured servants or as enslaved people. Both facts belong in the story.</p>
      <p>The quarrel with Britain was about <b>consent</b>: taxes imposed by a parliament in which the colonists elected nobody. "No taxation without representation" is the compressed version, and the Boston Tea Party of 1773 is its most famous expression.</p>
      <p>The Declaration followed on <b>July 4, 1776</b>. The war ended in 1783; the Constitution was written in <b>1787</b>; the Bill of Rights was ratified in <b>1791</b>. George Washington, the commander of the army, became the first President and is called the Father of Our Country.</p>`},
  {h:'Expansion, and the question it forced',
   b:`<p>The <b>Louisiana Purchase</b> of 1803 roughly doubled the country’s size, and expansion continued west across the century — onto land inhabited by Native nations, who were removed from it by treaty, by purchase and by force. That dispossession is part of the national history and is not seriously disputed.</p>
      <p>Expansion also forced the question the founders had deferred. Each new state raised whether slavery would be permitted there, and every compromise reached — 1820, 1850 — bought time without settling anything.</p>`},
  {h:'Civil War and Reconstruction',
   b:`<p>Eleven states seceded and the war ran from <b>1861 to 1865</b>, killing roughly 600,000 people. Abraham Lincoln was President throughout; the <b>Emancipation Proclamation</b> of 1863 declared enslaved people in the rebelling states free, and the Gettysburg Address of the same year recast the war as a test of whether government of, by and for the people could survive.</p>
      <p>Three amendments followed: the <b>Thirteenth</b> abolished slavery (1865), the <b>Fourteenth</b> made everyone born here a citizen and guaranteed due process and equal protection against the states (1868), and the <b>Fifteenth</b> barred denying the vote on account of race (1870).</p>
      <div class="warn"><strong>On the cause.</strong> The declarations issued by the seceding states name slavery explicitly and at length. "States’ rights" as an explanation leaves out the question it stands in for — a right to do what — which those documents answer directly.</div>`},
  {h:'The vote, widened by inches',
   b:`<p>At the founding, the franchise was largely limited to white men who owned property. Everything after that was contested and won slowly:</p>
      <ul>
        <li><b>1870</b> — the Fifteenth Amendment: no racial bar to voting.</li>
        <li><b>1920</b> — the Nineteenth: women, after a campaign begun in the 1840s by Susan B. Anthony, Elizabeth Cady Stanton and others, neither of whom lived to see it.</li>
        <li><b>1964</b> — the Twenty-fourth: the poll tax abolished in federal elections.</li>
        <li><b>1965</b> — the Voting Rights Act, which finally made the 1870 guarantee operate, ninety-five years late.</li>
        <li><b>1971</b> — the Twenty-sixth: the voting age lowered to eighteen.</li>
      </ul>
      <p>That ninety-five-year gap between the Fifteenth Amendment and the Voting Rights Act is the single most useful fact for understanding American argument about voting today.</p>`},
  {h:'The twentieth century',
   b:`<p>The United States entered the First World War in <b>1917</b>. The Great Depression began in 1929 and reshaped what Americans expected government to do. The Second World War was entered after the attack on <b>Pearl Harbor on December 7, 1941</b>, and ended in 1945, leaving the country the dominant economic and military power.</p>
      <p>The <b>Cold War</b> that followed — containment of the Soviet Union — organised American foreign policy until about 1991. At home, the <b>civil rights movement</b> dismantled legal segregation: <i>Brown v. Board of Education</i> in 1954, Martin Luther King Jr. and the campaigns of the following decade, the Civil Rights Act of 1964 and the Voting Rights Act of 1965.</p>
      <p>The attacks of <b>September 11, 2001</b> are the modern event the test asks about, and reshaped security, surveillance and immigration policy in ways still visible in every airport and every visa queue.</p>`},
  {h:'Geography and symbols',
   b:`<p><b>50</b> states. <b>13</b> stripes on the flag for the thirteen original colonies, <b>50</b> stars for the states. The capital is <b>Washington, D.C.</b>; the Statue of Liberty stands in New York Harbor and was a gift from France. The national anthem is <i>The Star-Spangled Banner</i>, written during the War of 1812.</p>
      <p>The territories — Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands — are part of the United States without being states, and their residents’ political rights differ from those of state residents in ways worth knowing if you ever live there.</p>
      <p>Independence Day is July 4. The two major political parties are the Democratic and Republican parties.</p>`}
  ],
  drill:{kind:'pick', key:'n5'} },

{ tag:'Six', title:'What people get wrong',
  cards:[
  {h:'Including people born here',
   b:`<p class="lead">Americans routinely misstate their own system, and some of the errors are load-bearing — they make political argument unintelligible to anyone who accepts them.</p>
      <p>The commonest are structural: that the President makes law, that courts may strike down anything they dislike, that federal law always wins, that the Bill of Rights is a benefit of citizenship. Each is corrected by a single fact, and each correction makes a whole category of news reports readable.</p>`},
  {h:'And two about the history',
   b:`<p><b>That the country was always a democracy for everyone.</b> It was not, and the expansion of the franchise against sustained opposition is the main plot of two centuries. Treating the current arrangement as the original one removes the reason for most of what followed.</p>
      <p><b>That birthright citizenship is simply ancient custom.</b> It is in the Fourteenth Amendment, put there in 1868 to overturn the <i>Dred Scott</i> decision, which had held that Black Americans could not be citizens at all. Knowing what it was written against is knowing what it is for.</p>
      <div class="note">The drill below is practice at saying exactly which fact corrects each claim — which is more useful than knowing the claim is wrong.</div>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Now the situations come without labels. Read what is happening, decide who actually has the authority, work the two questions under that branch, and name what is going on.</p>
      <p>Several specimens resolve to a limit rather than a power — beyond Congress’s reach, beyond the President’s, a political question, or a protected right no government may touch. Those are the ones worth getting right, because the limits are the part of the system that newcomers are rarely taught and that the test only gestures at.</p>
      <div class="note">Your name and your route are scored separately. Right answer from the wrong branch counts as a miss.</div>`}
  ],
  drill:{kind:'det'} }
];

const CIVICS = {
  id:'civics', name:'US Civics & History', rev:1,
  blurb:'The civics an immigrant is required to know, taught through the question underneath most of it: who actually has the authority here?',
  intro:'The civics an immigrant is required to know, taught through the question underneath most of it: who actually has the authority here? A correct answer reached by the wrong route is scored as a miss.',
  outcomes: CIVICS_OUTCOMES,
  determination: { gateCode:'N1', steps:[CIVICS_GATE], stepsByGate:CIVICS_STEPS_BY_GATE },
  determinationIntro:`<p>You are deciding who holds the authority in each situation, then what exactly is being exercised — or what limit is being hit.</p>
      <ol>
        <li>Read the situation.</li>
        <li><b>Step 1</b> — who has the say: Congress, the President and the agencies, the courts, or the states and nobody?</li>
        <li><b>Steps 2–3</b> — the two questions specific to that branch. They unlock in order and change with your Step 1 answer.</li>
        <li><b>Step 4</b> — now name it, and record your determination.</li>
      </ol>
      <p>The strip between the situation and step 1 is a readout, not a control. It crosses off answers your route has ruled out. Nothing there is tappable.</p>
      <p>Several specimens end at a limit rather than a power — something no branch may do at all. Those count like any other determination.</p>
      <p>Your name and your route are scored separately. Right answer from the wrong branch counts as a miss.</p>
`,
  specimens: CIVICS_SPECIMENS,
  quickDrills: [
    {key:'n1', title:'Who decides', prompt:'Who holds the authority here?', items:N1_DRILL, opts:N1_OPTS},
    {key:'n2', title:'Founding documents', prompt:'Which document?', items:N2_DRILL, opts:N2_OPTS},
    {key:'n3', title:'The chambers', prompt:'Which chamber or office?', items:N3_DRILL, opts:N3_OPTS},
    {key:'n4', title:'Who holds it', prompt:'Everyone, citizens only, or neither?', items:N4_DRILL, opts:N4_OPTS},
    {key:'n5', title:'Which era', prompt:'When did this happen?', items:N5_DRILL, opts:N5_OPTS}
  ],
  errDrill: CIVICS_ERR,
  course: CIVICS_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'n1', label:'Who decides'}, {key:'n2', label:'Documents'}, {key:'n3', label:'The chambers'},
    {key:'n4', label:'Who holds it'}, {key:'n5', label:'Which era'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Office-holders are deliberately absent.</b> The President, Vice President, Speaker, Chief Justice, your governor, your senators and your representative are all test answers, and all of them change with elections or with where you live. Look them up fresh.</li>
    <li><b>Take the test specifics from uscis.gov.</b> Which version of the question list applies, how many are asked, the pass mark and the age-and-residence exemptions have all changed more than once and can depend on your filing date. The material here is stable; the procedure around it is not.</li>
    <li><b>The official answers are short by design.</b> Where this course adds context the test leaves out — dispossession of Native nations, the ninety-five years between the Fifteenth Amendment and the Voting Rights Act, the causes of the Civil War — that context is well documented, but the interview wants the short answer.</li>
    <li><b>Interpretation is genuinely contested.</b> How far the commerce power reaches, how the Constitution should be read, what the Second Amendment protects, where religious liberty ends — these are live arguments among people who know the material cold. This course teaches the structure the arguments happen inside.</li>
    <li><b>Where the key simplifies.</b> "Who decides" treats as clean a boundary that is often litigated for years, the limits of agency authority above all. It is a reliable first approximation, not a settled map.</li>
    <li><b>State law varies enormously</b>, and this covers the federal structure only. Marriage, licensing, schooling, criminal law, tenancy and professional qualification all differ by state, and moving changes them.</li>
    <li><b>Not covered:</b> the immigration process itself — eligibility, forms, fees, timelines, interviews — which is a much larger subject than the civics, and the one where getting current information actually matters.</li>
  </ul>`
};

FC.legacy('civics', CIVICS);
