/* ===================== SUBJECT: POLITICAL IDEOLOGIES ===================== */

const IDEOLOGY_OUTCOMES = [
  {id:'marx',n:'Marxism'},{id:'ml',n:'Marxism–Leninism'},{id:'demsoc',n:'Democratic socialism'},
  {id:'socdem',n:'Social democracy'},{id:'anarch',n:'Anarchism / libertarian socialism'},
  {id:'mktsoc',n:'Market socialism'},{id:'clib',n:'Classical liberalism'},
  {id:'react',n:'Reactionary conservatism'},{id:'fasc',n:'Fascism'},{id:'nazi',n:'Nazism'},
  {id:'natpop',n:'National populism'},{id:'idegal',n:'Identity-egalitarianism'},
  {id:'pop',n:'Populism (thin — unresolved)'}
];

const IDEOLOGY_UNITS = [
  {id:'class', n:'Class', sub:'owners vs sellers of labour', keeps:['marx','ml','demsoc','socdem','anarch','mktsoc']},
  {id:'nation',n:'Nation',sub:'organic people / homeland',   keeps:['fasc','nazi','natpop','react']},
  {id:'race-h',n:'Race or identity',sub:'hierarchical valence',keeps:['nazi','fasc']},
  {id:'race-e',n:'Race or identity',sub:'egalitarian valence', keeps:['idegal']},
  {id:'indiv', n:'Individual',sub:'self-directing person',    keeps:['clib']},
  {id:'trad',  n:'Tradition & faith',sub:'throne and altar',   keeps:['react']},
  {id:'people',n:'People vs elite',sub:'real majority vs the few',keeps:['natpop','pop']}
];

const IDEOLOGY_OWNERSHIP = [
  {id:'private', n:'Private, untouched',           keeps:['clib','react','idegal','pop']},
  {id:'directed',n:'Private but state-directed',   keeps:['fasc','nazi','natpop']},
  {id:'public',  n:'State or public ownership',    keeps:['ml','demsoc','marx']},
  {id:'worker',  n:'Worker-collective',            keeps:['anarch','demsoc','marx','mktsoc']},
  {id:'redist',  n:'Private + heavy redistribution',keeps:['socdem','idegal','mktsoc']},
  {id:'unspec',  n:'Not stated in the passage',    keeps:null}
];

const D_UNIT = [
  {q:'The history of all hitherto existing society is the history of class struggles.',a:'Class',w:'Marxist family.'},
  {q:'A people that has forgotten its blood and soil has already begun to die.',a:'Race / blood',w:'Hierarchical valence — the Nazi variant of fascism.'},
  {q:'The nation, humiliated and betrayed, will be reborn through discipline and will.',a:'Nation',w:'Fascism. The rebirth language is decisive.'},
  {q:'Each person is the best judge of their own interest, and the state exists to protect that judgment.',a:'Individual',w:'Classical liberalism.'},
  {q:'The workers of the world have no country.',a:'Class',w:'Class placed explicitly above nation — Marxist internationalism.'},
  {q:'Kings rule by the grace of God, and the Church teaches what no parliament can vote away.',a:'Tradition & faith',w:'Throne and altar. Divine-traditional order, not the nation, is the unit — reactionary conservatism.'},
  {q:'The ordinary decent majority has been betrayed by a small elite that despises them.',a:'People vs elite',w:'Pure people against a corrupt few. Populism — a thin ideology that still needs a host to tell you which family.'}
];
const D_UNIT_OPTS = ['Class','Nation','Race / blood','Individual','Tradition & faith','People vs elite'];

const D_SOC = [
  {q:'We will raise the top marginal rate to 62% and fund universal childcare and free tertiary education. Firms remain private.',a:'Social democracy',w:'Ownership untouched. Transfers are not socialism.'},
  {q:'Federated worker councils will run the mills. We recognize no parliament and no state.',a:'Anarcho-syndicalism',w:'Worker ownership plus rejection of the state.'},
  {q:'The party, as the conscious vanguard, will hold power on behalf of the working class through the transitional period.',a:'Marxism–Leninism',w:'Vanguard language is the giveaway.'},
  {q:'We will win a legislative majority and transfer the utilities, rail, and major banks into public and cooperative ownership.',a:'Democratic socialism',w:'Real ownership transfer, by the electoral route.'},
  {q:'We will deregulate labor markets and cut corporate tax to attract investment that lifts wages.',a:'Not socialist',w:'Supply-side liberalism.'}
];
const D_SOC_OPTS = ['Marxism–Leninism','Democratic socialism','Social democracy','Anarcho-syndicalism','Not socialist'];

const D_FASC = [
  {q:'Censorship of the press',a:'auth',w:'Every dictatorship censors. Near-zero diagnostic weight.'},
  {q:'National youth movement with uniforms and mandatory membership',a:'fasc',w:'Mass mobilisation. Fascism demands participation, not just obedience.'},
  {q:'Torture of political prisoners',a:'auth',w:'Method, not content. Found across every ideology that has held power.'},
  {q:'Doctrine that the current generation is degenerate and must be purified through struggle',a:'fasc',w:'Palingenesis plus the cult of purifying struggle. The ideological core.'},
  {q:'Ban on opposition parties',a:'auth',w:'Universal in single-party states of every stripe.'},
  {q:'Compulsory state-run bodies replacing independent unions, while employers still own the firms',a:'fasc',w:'Corporatism — the fascist answer to Q1.'},
  {q:'Leader who says parliament cannot represent the people because he already is the people’s will',a:'fasc',w:'The leader principle. Not merely a dictator, but a claim about representation itself.'}
];
const D_FASC_OPTS = ['Fascist marker','Merely authoritarian'];

const IDEOLOGY_ERR = [
  {q:'Sweden is a socialist country.',w:'Sweden is a social democracy — private ownership plus a high-tax welfare state. The claim never engages Q1.'},
  {q:'Antifa is just as fascist as the fascists.',w:'Category error. Fascism is a content — rebirth myth, nation-as-organism, leader principle, anti-Marxism — not a level of militancy.'},
  {q:'Fascism is when the government does a lot of stuff.',w:'That is statism at most, and probably just governance. Q1 and Q2 are never engaged.'},
  {q:'The USSR and Nazi Germany were basically the same ideology.',w:'Classification by method. They give opposite answers on Q1 (state ownership vs directed private ownership) and Q2 (class vs race). Comparable in repression, opposite in content.'},
  {q:'Anyone who wants strong borders is a fascist.',w:'Nationalism is not fascism, and border control exists in every state including socialist ones. No rebirth myth, no leader principle, no mobilisation — no fascism.'},
  {q:'Universal healthcare is Marxism.',w:'Marxism is an analysis of capitalism and class, not a list of public services. Q1 is untouched by a healthcare programme.'}
];

const IDEOLOGY_SPECIMENS = [
  {q:'The soil of the fatherland has been poisoned by soft men and foreign ideas. We do not ask for votes; we ask for obedience, and in return we will give you a nation your grandchildren will die for gladly.',
   sub:{Q2:['nation'],Q1:['unspec']},outcome:'fasc',
   why:'Q2 is the nation; Q3 is decline followed by rebirth; Q4 openly abolishes electoral legitimacy. Add the cult of sacrifice and the fascist cluster is complete.',
   fals:'Pure restorationist monarchism with no mass mobilisation and no rebirth myth would make this reactionary conservatism.'},
  {q:'Wages appear to be payment for a day’s work. They are not. The worker produces more value in a day than he is paid for; the remainder is taken. This is not theft by a bad employer — it is the ordinary functioning of the system.',
   sub:{Q2:['class'],Q1:['unspec']},outcome:'marx',
   why:'Surplus value stated almost verbatim. The decisive tell is the last sentence: systemic framing, not moral. Marxism indicts the mode of production, not bad actors inside it.',
   fals:'If the remedy were merely higher wages within capitalism, this is labour reformism borrowing Marxist vocabulary.'},
  {q:'We propose a national minimum wage, sectoral bargaining, twelve months’ parental leave, and free university. Business will continue to be privately owned and we will keep the budget balanced.',
   sub:{Q2:['class'],Q1:['redist']},outcome:'socdem',
   why:'Q1 is answered explicitly and in the negative: ownership does not move. Floors, rights and transfers plus fiscal orthodoxy.',
   fals:'A nationalisation plank would push it into democratic socialism.'},
  {q:'The state, however benevolent, is a machine for coercion. We will not capture it; we will dissolve it. Production will be run by the assemblies of those who do the producing.',
   sub:{Q2:['class'],Q1:['worker']},outcome:'anarch',
   why:'Anti-capitalist and anti-statist at once — that pairing belongs to no other family. Refusing to capture the state rules out every parliamentary and vanguard route.',
   fals:'Any transitional-state or vanguard language would make it Leninist.'},
  {q:'Order requires that men know their place. The monarchy, the church, and the family were dismantled by ideologues, and nothing built since has replaced them. We seek restoration, not revolution.',
   sub:{Q2:['trad'],Q1:['unspec']},outcome:'react',
   why:'Q3 is restoration of a divine-traditional order, and the final clause explicitly disclaims revolution. That disclaimer is what rules out fascism.',
   fals:'Add a mass movement, a leader principle and rebirth-through-violence and it crosses into fascism — the aesthetics would barely change.'},
  {q:'The masses cannot arrive at revolutionary consciousness on their own; left alone they achieve only trade-union consciousness. They require a disciplined party to lead them.',
   sub:{Q2:['class'],Q1:['unspec']},outcome:'ml',
   why:'A near-paraphrase of the vanguard argument. The acting subject of history has shifted from the class to the party — that shift is the whole of Leninism.',
   fals:'If the party were subordinated to elected worker assemblies, you are closer to council communism.'},
  {q:'Government’s role is to enforce contracts, defend the borders, and otherwise leave people alone. Prosperity is what happens when free individuals trade without permission.',
   sub:{Q2:['indiv'],Q1:['private']},outcome:'clib',
   why:'Q2 individual, Q1 private, Q4 defend-and-limit. Note that border enforcement appears here too — it carries no nationalist weight on its own.',
   fals:'A strong nationalist or traditionalist obligation overriding individual choice would pull it toward fusionist or national conservatism.'},
  {q:'There are no classes in a healthy nation — only Germans, or Italians, or Frenchmen, arranged in their proper function. Those who preach class war are agents of dissolution and will be dealt with as such.',
   sub:{Q2:['nation'],Q1:['unspec']},outcome:'fasc',
   why:'The decisive line is the explicit substitution of national unity for class, plus the threat against those who insist on class. That anti-Marxist plank separates fascism from every left ideology.',
   fals:'Almost none. This is textbook.'},
  {q:'Real people, the ones who work and pay and follow the rules, have been sold out by a corrupt establishment. We will take the country back for them.',
   sub:{Q2:['people'],Q1:['unspec']},outcome:'pop',
   why:'No answer to Q1 and nothing in Q2 beyond "the people." Populism is thin: it needs a host, and no host is visible. Naming a fuller ideology would be over-classification.',
   fals:'This item trains withholding. Ask who counts as the people, who the elite are, and what happens to ownership — then classify.'},
  {q:'We accept the market. We reject that the market should decide who receives medicine, education, and shelter. Those are removed from the market entirely; everything else stays in it.',
   sub:{Q2:['class'],Q1:['redist']},outcome:'socdem',
   why:'Decommodifying three sectors while accepting markets elsewhere does not settle Q1 for production as a whole. Most likely social democracy — but market socialism stays live until you ask who owns those sectors.',
   fals:'If they pass to worker or social ownership rather than state purchase, it moves toward market socialism.'},
  {q:'The old parties are finished. Only a movement that speaks for the forgotten majority, protects our borders and culture, and uses the full power of the state to break the grip of global finance and bureaucratic elites can restore the nation’s strength. Private enterprise will be directed toward national goals.',
   sub:{Q2:['people','nation'],Q1:['directed']},outcome:'natpop',
   why:'Watch the two questions work together: Q2 narrows to the populist pair, Q1 narrows to the state-directing trio, and only national populism survives both. It lacks the fascist cluster — no rebirth myth, no leader-as-embodied-will, no paramilitary mobilisation, no cult of purifying violence.',
   fals:'Add an explicit rebirth myth and a rejection of parliamentary legitimacy and it crosses into fascism. Stay inside electoral contestation and it does not.'},
  {q:'Structural barriers rooted in race, gender, and other identity categories continue to produce unequal outcomes even when formal legal equality exists. True justice requires that institutions actively identify and dismantle those barriers, and that resources and opportunities be redistributed until outcomes are equitable. Color-blindness and formal equality are not enough; they preserve the status quo.',
   sub:{Q2:['race-e'],Q1:['redist','private']},outcome:'idegal',
   why:'The unit is race — but the valence is egalitarian: hierarchy is named as unjust and slated for dismantling. Q1 goes largely untouched, which separates this from Marxism; rejecting formal equality as sufficient separates it from classical liberalism.',
   fals:'If the analysis recentred on ownership of the means of production as the fundamental antagonism, it moves into Marxist territory. Whether it descends from the critical-theory lineage or is an independent liberal-egalitarian development is genuinely disputed.'}
];

const IDEOLOGY_COURSE = [
{ tag:'One', title:'The five questions',
  cards:[
  {h:'Classify by content, never by method',
   b:`<p class="lead">Most misidentification happens because people classify by how a movement <i>behaves</i> rather than what it <i>claims</i>.</p>
      <p>Rallies, censorship, secret police, purges and personality cults appear across regimes with completely opposite beliefs. They travel freely. They tell you almost nothing about ideology.</p>
      <p>What does not travel is the answer to a small set of questions about ownership, allegiance and purpose. Those are the key characters. This course teaches five of them, then drills them.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which question</i> decided it, you have recognised a style, not identified an ideology.</div>`},
  {h:'The five key characters',
   b:`<table class="k">
      <tr><th>Q1</th><td><b>Who owns the means of production?</b><br>private / state / worker-collective / private-but-state-directed<span class="tell">Separates economic left from right, and socialism from fascism.</span></td></tr>
      <tr><th>Q2</th><td><b>What is the primary unit of analysis?</b><br>class / nation / race or identity / individual / tradition &amp; faith / people vs elite<span class="tell">The fastest single discriminator.</span></td></tr>
      <tr><th>Q3</th><td><b>What is the engine of history?</b><br>material conflict / national decline &amp; rebirth / racial struggle / expanding liberty / divine order / people vs elite</td></tr>
      <tr><th>Q4</th><td><b>Attitude to liberal democracy?</b><br>fulfil &amp; expand / transcend / abolish / defend or restore<span class="tell">Separates democratic socialists from Leninists, conservatives from fascists.</span></td></tr>
      <tr><th>Q5</th><td><b>Desired end state?</b><br>classless stateless society / regenerated nation / racial hierarchy / pluralist competition / restored order / open-ended</td></tr>
      </table>
      <p>Q1 and Q2 do most of the work. The other three usually confirm rather than decide.</p>`},
  {h:'Q2 routes you to a family',
   b:`<p>Answer Q2 and you have already eliminated most of the field:</p>
      <ul>
        <li><b>Class</b> → the Marxist and socialist family</li>
        <li><b>Nation</b> → fascism, national populism, reactionary conservatism</li>
        <li><b>Individual</b> → the liberal family</li>
        <li><b>Tradition &amp; faith</b> → reactionary conservatism</li>
        <li><b>People vs elite</b> → populism, and whatever host it has attached to</li>
        <li><b>Race or identity</b> → <b>depends entirely on valence.</b> Next card.</li>
      </ul>
      <p>Then Q1 narrows what survives. In practice two questions are often enough to get to one answer, and you will see that happen in the final unit.</p>`},
  {h:'The valence trap',
   b:`<p>Q2 asks <i>which</i> unit. For race and identity you must also ask <i>in which direction</i> — because the same noun points to opposite families.</p>
      <table class="k">
        <tr><th>Valence</th><th>The claim</th><th>Family</th></tr>
        <tr><td>Hierarchical</td><td>The group has an inherent nature and a rightful rank. Hierarchy is natural and must be preserved.</td><td>Nazism, racialist fascism</td></tr>
        <tr><td>Egalitarian</td><td>The group is a category of disadvantage produced by institutions. Hierarchy is unjust and must be dismantled.</td><td>Identity-egalitarianism</td></tr>
      </table>
      <div class="warn"><strong>Both organise politics around race. They are opposites.</strong> Stopping at "this text sorts people by racial category" and jumping to fascism is the single most likely error this key produces — and it fails in both directions, since the mirror mistake is treating a racial-hierarchy claim as merely conservative.</div>
      <p>Run the valence check every time before assigning a family.</p>`}
  ],
  drill:{kind:'pick', key:'unit'} },

{ tag:'Two', title:'The socialist family',
  cards:[
  {h:'Ownership, not taxation',
   b:`<p class="lead">Socialism is social ownership or democratic control of the means of production.</p>
      <p>Ownership. Not taxation, not regulation, not spending. If productive assets stay privately owned and the state only taxes and redistributes, that is a welfare state.</p>
      <div class="warn"><strong>The most common error in English-language politics.</strong> "Government does a thing" is not socialism. Public roads, central banks, militaries and food inspection exist in every capitalist state on earth. Always ask Q1: did ownership of productive assets actually change hands?</div>
      <p>The word covers at least four incompatible things. The next cards separate them.</p>`},
  {h:'Marxism and Marxism–Leninism',
   b:`<h3>Marxism</h3>
      <p>An analytical framework more than a programme.</p>
      <ul><li>Historical materialism: economic relations drive history</li>
      <li>Class conflict between owners of capital and sellers of labour</li>
      <li>Surplus value: profit is unpaid labour, extracted as a matter of system rather than malice</li>
      <li>End state: classless, stateless, moneyless</li></ul>
      <span class="tell">Tell: modes of production, class, material conditions, contradictions.</span>
      <h3>Marxism–Leninism</h3>
      <p>Marxism plus a theory of how to seize and hold power: a vanguard party of professionals, democratic centralism, the dictatorship of the proletariat as a transitional stage, a one-party state.</p>
      <span class="tell">Tell: the party, not the class, is the acting subject of history.</span>`},
  {h:'Democratic socialism vs social democracy',
   b:`<p>These two get conflated constantly, and the difference is exactly Q1.</p>
      <h3>Democratic socialism</h3>
      <p>Genuinely wants social ownership of major productive assets — utilities, rail, banks — but pursues it through elections and inside democratic institutions. Rejects vanguardism and revolutionary seizure.</p>
      <h3>Social democracy</h3>
      <p>Not socialism under the ownership definition. Accepts private ownership and markets; constrains capitalism through the welfare state, labour rights, progressive taxation and regulation. Historically it grew out of socialism and then abandoned the ownership demand.</p>
      <span class="tell">Tell: redistribution, floors and rights — never who owns the factory.</span>
      <div class="note">Whether social democracy still "counts as" socialism is a live dispute, not a settled fact. It depends on whether you define socialism by ownership or by egalitarian outcome. This course uses ownership because it discriminates better.</div>`},
  {h:'Anarchism and market socialism',
   b:`<h3>Anarchism / libertarian socialism / syndicalism</h3>
      <p>Socialist economics, but the state is an enemy too. Ownership goes to workers' councils, communes or unions — never to a central state.</p>
      <span class="tell">Tell: anti-capitalist and anti-statist at the same time. No other family holds both.</span>
      <h3>Market socialism</h3>
      <p>Worker-owned or socially-owned firms competing in real markets at real prices. Coherent in theory, rare in durable practice — but it matters for classification, because it is the answer whenever someone accepts markets while moving ownership.</p>`}
  ],
  drill:{kind:'pick', key:'soc'} },

{ tag:'Three', title:'Fascism',
  cards:[
  {h:'A definition with actual content',
   b:`<p class="lead">A mass, anti-liberal, anti-Marxist movement organised around a myth of national decline and rebirth, pursuing regeneration through unity, discipline and often violence, led by a leader who embodies the popular will, in which the individual exists to serve the organic nation.</p>
      <p>This is the most abused word on the list. Used loosely it means "authoritarian and unpleasant," which makes it useless. Used precisely it picks out a specific thing.</p>
      <div class="note">Fascism's definition is genuinely contested among historians. Paxton emphasises process and stages, Griffin the rebirth myth, Eco a family-resemblance list; some restrict the term largely to interwar Europe. Treat what follows as a family resemblance, not a checklist requiring every item.</div>`},
  {h:'The ten markers — look for the cluster',
   b:`<ul>
      <li><b>Palingenetic ultranationalism</b> — the nation is decadent and will be reborn. The ideological core.</li>
      <li><b>Mythic past</b> — a lost golden age, usually historically fictional.</li>
      <li><b>Nation as organism</b> — a body with one will; the individual is a cell.</li>
      <li><b>Enemies both weak and strong</b> — contemptible yet about to overwhelm you.</li>
      <li><b>Cult of action and violence</b> — struggle purifies; deliberation is weakness.</li>
      <li><b>Leader principle</b> — the leader intuits the true will; parliaments are theatre.</li>
      <li><b>Mass mobilisation</b> — uniforms, rallies, paramilitaries, youth wings.</li>
      <li><b>Anti-liberal <i>and</i> anti-Marxist</b> — class struggle denounced as foreign and divisive, replaced by national unity. Critical.</li>
      <li><b>Corporatism</b> — private ownership retained under state-directed bodies; independent unions abolished.</li>
      <li><b>Militarism</b> — expansion as proof of vitality.</li>
      </ul>
      <p>No single item is decisive. The cluster is.</p>`},
  {h:'Three things fascism is not',
   b:`<h3>Not Nazism, exactly</h3>
      <p>Nazism is the variant where biological race, not the nation-state, is the primary unit, with antisemitism as cosmology and extermination as policy. All Nazism is fascist; not all fascism is Nazi.</p>
      <h3>Not ordinary authoritarianism</h3>
      <p>A junta or personalist dictator who wants power and quiet is authoritarian. Fascism demands <i>active participation</i>. Authoritarianism demands passivity. This is why the marker drill matters: repression is shared, mobilisation is not.</p>
      <h3>Not reactionary conservatism</h3>
      <p>The reactionary wants to <i>restore</i> throne, altar and hierarchy. The fascist wants to <i>create something new</i> through national rebirth, and will smash traditional elites to do it. Fascism is revolutionary in method however traditionalist its aesthetics.</p>`},
  {h:'"But the Nazis were socialists"',
   b:`<p>Resolve it with Q1 and Q2, not the party name.</p>
      <p><b>Q1 — ownership.</b> It stayed private. The regime privatised major state holdings in the 1930s, banned independent trade unions, destroyed the workers' parties, and directed private industry through contracts and controls. That is state-directed capitalism, not social ownership.</p>
      <p><b>Q2 — primary unit.</b> Race, constructed in explicit opposition to class. Marxism was the movement's declared mortal enemy.</p>
      <p>The name was a recruitment device aimed at working-class voters.</p>
      <div class="note">Party names are marketing. This is the same reason "Democratic People's Republic" tells you nothing about a state. Always check the answers, never the label.</div>`}
  ],
  drill:{kind:'pick', key:'fasc'} },

{ tag:'Four', title:'Look-alikes',
  cards:[
  {h:'Terms that are not ideologies',
   b:`<p>Several words in common use describe a <i>method</i>, a <i>degree</i>, or a <i>fragment</i> rather than a belief system. Mistaking them for ideologies causes most bad classification.</p>
      <table class="k">
      <tr><th>Term</th><th>What it actually is</th></tr>
      <tr><td>Authoritarianism</td><td>A method of rule. Compatible with almost any ideology.</td></tr>
      <tr><td>Totalitarianism</td><td>Ambition to penetrate all of life. A degree of control, not a content.</td></tr>
      <tr><td>Populism</td><td>A thin ideology: pure people vs corrupt elite. Attaches to hosts on left and right.</td></tr>
      <tr><td>Corporatism</td><td>Economy organised into state-recognised blocs of labour and capital. Not "rule by corporations."</td></tr>
      <tr><td>Nationalism</td><td>Prioritisation of the nation. Necessary but far from sufficient for fascism.</td></tr>
      <tr><td>Statism</td><td>A large, active state. A dial, not a doctrine.</td></tr>
      <tr><td>Technocracy</td><td>Rule by credentialed expertise rather than mandate.</td></tr>
      </table>`},
  {h:'The horseshoe error',
   b:`<p>Leninism and fascism look alike because they share methods: one-party rule, leader cult, secret police, mobilised masses, mass violence.</p>
      <p>They give <b>opposite</b> answers on both decisive questions. Q1: state ownership versus directed private ownership. Q2: class versus race or nation. One abolished the owning class; the other made an alliance with it against the workers' movement.</p>
      <div class="warn"><strong>Never classify by method.</strong> Methods travel; content does not. Comparable in repression is not the same as comparable in ideology — and noticing that two regimes were both murderous is a moral observation, not a diagnostic one.</div>`},
  {h:'National populism',
   b:`<p>Not a classical ideology — a composite, fusing thin populism onto a nationalist host. Very common now, and very often misnamed fascism.</p>
      <table class="k">
      <tr><th>Q1</th><td>Private, retained — but directed toward national ends</td></tr>
      <tr><th>Q2</th><td>The "real people" against a cosmopolitan elite</td></tr>
      <tr><th>Q3</th><td>The nation was sold out from above and outside; recover its strength</td></tr>
      <tr><th>Q4</th><td>Works inside elections; attacks courts, press and bureaucracy as unrepresentative without abolishing the vote</td></tr>
      <tr><th>Q5</th><td>A sovereign, culturally cohesive nation — restored, not transfigured</td></tr>
      </table>
      <p><b>Separates from fascism by four absences:</b> no palingenetic rebirth myth, no leader-as-embodied-will replacing elections, no paramilitary mobilisation, no cult of purifying violence. Where those appear, the classification changes.</p>
      <span class="tell">Tell: sovereignty, borders, globalists, the establishment, industrial policy — pursued through ballots.</span>`},
  {h:'Identity-egalitarianism',
   b:`<p>The other common composite, and the one the valence trap was built for.</p>
      <table class="k">
      <tr><th>Q1</th><td>Markets and private ownership largely accepted; the demand is on distribution and institutional design</td></tr>
      <tr><th>Q2</th><td>Identity categories as structurally positioned groups — <b>egalitarian valence</b></td></tr>
      <tr><th>Q3</th><td>Formally neutral institutions reproduce inherited disadvantage</td></tr>
      <tr><th>Q4</th><td>Fulfil and expand it — charges liberalism with failing its own promises</td></tr>
      <tr><th>Q5</th><td>Equitable outcomes across groups; open-ended</td></tr>
      </table>
      <p><b>Separates from Marxism by:</b> class and ownership are not the root analytic, so Q1 goes largely untouched. <b>From classical liberalism by:</b> rejecting formal equality as sufficient.</p>
      <span class="tell">Tell: structural, systemic, disparate outcomes, equity distinct from equality, colour-blindness as insufficient.</span>
      <div class="note">Genuinely contested: whether this descends from the Marxist and critical-theory lineage or is an independent liberal-egalitarian development is disputed among scholars. The five questions classify it without requiring you to settle that.</div>`},
  {h:'Both of these are also insults',
   b:`<p>The two formations you just learned are, in live political speech, more often used to condemn than to describe. So is "fascist." So is "socialist."</p>
      <p>Analytic use and rhetorical use are different activities. The drill you are about to do is six statements that fail as analysis — most of them because they never engage Q1 or Q2 at all.</p>
      <p>For each one, say the fault out loud before revealing it. Name the question the claim skipped.</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Five', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Everything so far has drilled one character at a time. Now you run the full sequence on unlabelled passages.</p>
      <p>For each specimen: answer Q2, then Q1, then name the family. A readout between the passage and the questions crosses off families your answers have eliminated — watch it, because on some specimens two questions get you to a single survivor.</p>
      <h3>How this is scored</h3>
      <p>Your <b>name</b> and your <b>route</b> are counted separately. Getting the right family from the wrong Q1/Q2 answers is flagged and counts as a miss, because a label you cannot derive from the key will not survive an unfamiliar passage.</p>
      <div class="note">Two of the twelve are traps for over-classification: the honest answer is that the passage does not contain enough to name a full ideology. Withholding is a skill, not a failure.</div>`}
  ],
  drill:{kind:'det'} }
];

const IDEOLOGY = {
  id:'ideology', name:'Political Ideologies', rev:1,
  blurb:'Identify an ideology by the questions it answers — ownership, allegiance, purpose — rather than by how loudly it behaves.',
  topics:'The five questions · Socialist family · Fascism · Look-alikes',
  intro:'Run each passage through the key characters before naming it. A correct label reached by the wrong route is scored as a miss.',
  outcomes: IDEOLOGY_OUTCOMES,
  determination: { gateCode:null, steps:[
    {code:'Q2', label:'Primary unit of analysis', options:IDEOLOGY_UNITS},
    {code:'Q1', label:'Ownership of the means of production', options:IDEOLOGY_OWNERSHIP}
  ], stepsByGate:null },
  determinationIntro:`<p>You are running each passage through the key, the way you would identify a plant. Work the characters first, name the specimen last.</p>
      <ol>
        <li>Read the passage.</li>
        <li><b>Step 1</b> — tap the primary unit of analysis (Q2).</li>
        <li><b>Step 2</b> — tap who owns the means of production (Q1). Pick <i>Not stated</i> when the passage genuinely doesn't say.</li>
        <li><b>Step 3</b> — now name the family, and record it.</li>
      </ol>
      <p>The strip between the passage and step 1 is a readout, not a control. It crosses off families your answers have ruled out. Nothing there is tappable.</p>
      <p>Your name and your route are scored separately. Right name from the wrong steps counts as a miss.</p>`,
  specimens: IDEOLOGY_SPECIMENS,
  quickDrills: [
    {key:'unit', title:'Primary unit', prompt:'Which unit of analysis is primary?', items:D_UNIT, opts:D_UNIT_OPTS},
    {key:'soc', title:'Socialist family', prompt:'Which branch — if any?', items:D_SOC, opts:D_SOC_OPTS},
    {key:'fasc', title:'Marker sort', prompt:'Specifically fascist, or merely authoritarian?', items:D_FASC, opts:D_FASC_OPTS, plain:true,
     answer:it=>it.a==='fasc'?'Fascist marker':'Merely authoritarian'}
  ],
  errDrill: IDEOLOGY_ERR,
  course: IDEOLOGY_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'unit', label:'Primary unit'}, {key:'soc', label:'Socialist family'}, {key:'fasc', label:'Marker sort'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Fascism's definition is contested.</b> Paxton emphasises process and stages; Griffin the rebirth myth; Eco a family-resemblance list. Some historians restrict the term largely to interwar Europe.</li>
    <li><b>Whether social democracy counts as socialism</b> depends on defining socialism by ownership or by egalitarian outcome. Both definitions are in wide use.</li>
    <li><b>Classical vs modern "liberal."</b> In American usage the word often means something closer to social democracy. Check Q1–Q5, not the word.</li>
    <li><b>These terms are also weapons.</b> In live speech they are used to condemn rather than describe. Analytic and rhetorical use are different activities.</li>
    <li><b>Applying this to current parties is contested terrain.</b> Informed people land differently on the same evidence. The key tells you which questions to ask; it does not hand you verdicts on living cases.</li>
    <li><b>Non-Western, theocratic and technocratic systems</b> are lightly covered. The five questions still apply, but additional primary units — faith, civilisation, expertise — become relevant.</li>
  </ul>`
};
