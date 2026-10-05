/* ===================== SUBJECT: POLITICAL IDEOLOGIES ===================== */

/* The key: two questions, asked in this order. The reader-facing words for every question, answer and name
   are typed here once. Cards, drills, feedback and specimen explanations use exactly these words.
   Step codes (Q2, Q1) and ids are data only. They are not reader-facing words. */

const IDEOLOGY_OUTCOMES = [
  {id:'marx',n:'Marxism'},{id:'ml',n:'Marxism–Leninism'},{id:'demsoc',n:'Democratic socialism'},
  {id:'socdem',n:'Social democracy'},{id:'anarch',n:'Anarchism'},
  {id:'mktsoc',n:'Market socialism'},{id:'clib',n:'Classical liberalism'},
  {id:'react',n:'Reactionary conservatism'},{id:'fasc',n:'Fascism'},{id:'nazi',n:'Nazism'},
  {id:'natpop',n:'National populism'},{id:'idegal',n:'Group equality'},
  {id:'pop',n:'Populism with nothing attached'}
];
const IDEOLOGY_NAME = id => IDEOLOGY_OUTCOMES.find(o => o.id === id).n;

/* First question: Who or what does the text put first? */
const IDEOLOGY_UNITS = [
  {id:'class', n:'Workers against owners',          sub:'people who work for wages vs people who own the businesses', keeps:['marx','ml','demsoc','socdem','anarch','mktsoc']},
  {id:'nation',n:'The nation',                      sub:'one people with one homeland and one future',                keeps:['fasc','nazi','natpop','react']},
  {id:'race-h',n:'One race ranked above the others',sub:'people sorted by birth into higher and lower groups',        keeps:['nazi','fasc']},
  {id:'race-e',n:'Groups held back by unfair systems',sub:'rules that look neutral keep some groups behind; none is placed above another', keeps:['idegal']},
  {id:'indiv', n:'The individual',                  sub:'each person running their own life',                         keeps:['clib']},
  {id:'trad',  n:'Tradition and faith',             sub:'the old order of church, crown and family',                  keeps:['react']},
  {id:'people',n:'Ordinary people against an elite',sub:'the real majority vs a small, corrupt few',                  keeps:['natpop','pop']}
];

/* Second question: Who should own the farms, factories, shops and banks? */
const IDEOLOGY_OWNERSHIP = [
  {id:'private', n:'Private owners, left alone',                       sub:'the state keeps out of how businesses run and trade',           keeps:['clib','react','idegal','pop']},
  {id:'directed',n:'Private owners, steered by the state',             sub:'owners keep the businesses but must serve the state’s goals',   keeps:['fasc','nazi','natpop']},
  {id:'public',  n:'The state or the public',                          sub:'the state or public bodies own the businesses',                 keeps:['ml','demsoc','marx']},
  {id:'worker',  n:'The workers themselves',                           sub:'those who work in a business own and run it together',          keeps:['anarch','demsoc','marx','mktsoc']},
  {id:'redist',  n:'Private owners, with the state evening things out',sub:'owners keep the businesses; taxes, wage floors and public services share out the results', keeps:['socdem','idegal','mktsoc']},
  {id:'unspec',  n:'The text does not say',                            sub:'the passage is silent on who owns or runs businesses', keeps:null}
];

/* ---- Drill: the first question. Every case is new; no card uses these passages. ---- */
const D_UNIT = [
  {q:"The warehouse has made record profits every year, and the people who pack the boxes have not had a rise in four. Whoever owns the place and whoever works in it will never want the same things.",
   a:"Workers against owners",
   w:"First question. The giveaway is the split between “the people who pack the boxes” and “whoever owns the place”. The text sorts everyone by whether they work for wages or own the business, and says their interests are opposed."},
  {q:"Look at who sits on the board and who cleans the building. Every rule in this country is written for one of them, and it is not the cleaner.",
   a:"Workers against owners",
   w:"First question. “Sits on the board” and “cleans the building” divide people into owners and wage earners, and the text says politics is a contest between the two."},
  {q:"A national minimum wage is not charity. It is the one thing working people have won from their employers after a hundred years of strikes.",
   a:"Workers against owners",
   w:"First question. The giveaway is “working people” and “their employers”. The word “national” only means the wage applies countrywide: it is not putting the nation first. The text is about workers and owners."},
  {q:"Whatever else divides us, we are one people on one soil. When the country is humiliated, every one of us is humiliated, and a country that stops believing in itself will not last.",
   a:"The nation",
   w:"First question. The giveaway is “one people on one soil” and “when the country is humiliated, every one of us is humiliated”. The country as a whole, not any group or person inside it, is what the text puts first."},
  {q:"We share a language, a flag and a history. A country that forgets that has nothing left to defend, and whatever weakens the country weakens each of us.",
   a:"The nation",
   w:"First question. “A language, a flag and a history” describe one people with one homeland. Nothing ranks groups by birth and nothing is about wages or owners, so the answer is the nation."},
  {q:"There is no rich or poor in a healthy country, only countrymen. Anyone who sets one group against another is betraying all of us.",
   a:"The nation",
   w:"First question. The text denies the split between rich and poor and puts the country first: “only countrymen”. A text that mentions classes in order to refuse them is not putting workers against owners."},
  {q:"Some peoples are born to lead and some to follow. Our children must marry within our own kind, or the best of us will be bred out.",
   a:"One race ranked above the others",
   w:"First question. “Born to lead and some to follow” ranks groups by birth, and “marry within our own kind” is about keeping the higher group pure. The ranking is what decides it: the text says some groups are worth more than others."},
  {q:"The history of the world is a contest between races, and the strongest must rule the rest. Charity to the weaker races only slows the natural order.",
   a:"One race ranked above the others",
   w:"First question. “The strongest must rule the rest” and “weaker races” put races on a ladder and call the ladder natural. That ranking is what the answer needs."},
  {q:"Loans in this city go to some neighbourhoods and not to others. No rule says why, but the lenders’ maps, drawn decades ago, keep sending the same streets to the back of the queue. The maps have to be redrawn.",
   a:"Groups held back by unfair systems",
   w:"First question. The giveaway is a system that looks neutral (“no rule says why”) but keeps holding the same groups back (“the same streets”), with the fix being to change the system. No group is placed above another."},
  {q:"A student who uses a wheelchair is told that everyone sits the exam in the same hall on the same terms. The rule treats everyone alike and keeps one group out, so the rule is what has to change.",
   a:"Groups held back by unfair systems",
   w:"First question. “The rule treats everyone alike and keeps one group out”: a group is held back by a system that looks neutral, and the text wants the system changed."},
  {q:"If I am not harming anyone, nobody has the right to tell me what to read, what to say or what to sell. Each person knows their own good.",
   a:"The individual",
   w:"First question. “Nobody has the right to tell me” and “each person knows their own good” start from the single person. No group is named as the one that matters."},
  {q:"Rights belong to people, not to crowds. A person who owns their own life and work can choose their own company and their own faith.",
   a:"The individual",
   w:"First question. “Rights belong to people, not to crowds” puts the single person ahead of any group."},
  {q:"A country that no longer kneels in its churches or honours its elders has lost what held it together. The old customs of faith and family are not up for a vote.",
   a:"Tradition and faith",
   w:"First question. “Churches”, “elders” and “the old customs of faith and family” are treated as what holds everything together, above any vote. The word “country” appears, but only as the place where the old order is being lost: the text puts the inherited order first, not the nation."},
  {q:"God set kings to rule and fathers to guide, and every rank has its duty. To tear that apart is to tear apart the world.",
   a:"Tradition and faith",
   w:"First question. “God set kings to rule and fathers to guide” and “every rank has its duty” put an order given by faith and custom first."},
  {q:"The ones who run this place went to the same schools, eat at the same dinners and have never once been told no. The rest of us pay the bills.",
   a:"Ordinary people against an elite",
   w:"First question. “The ones who run this place” against “the rest of us”: a small group at the top and everyone else. Nothing in the text is about wages versus ownership, so it is not workers against owners."},
  {q:"Honest, ordinary people built this country, and a clique of insiders keeps selling off what they built behind closed doors.",
   a:"Ordinary people against an elite",
   w:"First question. “Honest, ordinary people” against “a clique of insiders”: a good majority and a corrupt few."}
];
const D_UNIT_OPTS = IDEOLOGY_UNITS.map(u => u.n);

/* ---- Drill: the socialist family. All six names answer the first question the same way. ---- */
const D_SOC = [
  {q:"Landlords, factory owners and shareholders all live off what other people produce. Swap one owner for a kinder one and nothing changes, because the system itself needs the gap between what workers make and what they are paid.",
   a:"Marxism",
   w:"First question: workers against owners (the owners against those who produce). Second question: nothing about who should own the businesses, so the text does not say, and all six names are left. What decides it: the gap between what workers make and are paid is explained as something “the system itself” needs, with no party, no election and no plan. That is Marxism."},
  {q:"In every age, the people who own the land or the machines have ruled over the people who work them. That conflict is what moves history, and in the end the working side will win it.",
   a:"Marxism",
   w:"First question: workers against owners (those who own the machines against those who work them). Second question: no word on who should own what, so the text does not say. What decides it: the text explains how history moves through the fight between owners and workers, and offers no party, no election and no plan. That is Marxism."},
  {q:"Workers will never free themselves by voting or striking alone. Only a tight band of full-time revolutionaries can lead them. When the party wins, it will own the mines and the mills in the working class’s name, and it will not hand power back.",
   a:"Marxism–Leninism",
   w:"First question: workers against owners (the working class). Second question: the state or the public (the party owns the mines and the mills). What decides it: a tight band of full-time revolutionaries takes power for the workers and keeps it. When the party, not the workers themselves, is the one that acts, the name is Marxism–Leninism."},
  {q:"The leadership argues, then decides, and every member must carry out the decision. The party will govern for the working class, with no rival parties, until classes disappear.",
   a:"Marxism–Leninism",
   w:"First question: workers against owners (the working class, classes disappearing). Second question: nothing about who should own businesses, so the text does not say. What decides it: “the leadership argues, then decides, and every member must carry out the decision” is democratic centralism, and a party that governs for the workers with no rivals is the vanguard party. That is Marxism–Leninism."},
  {q:"Those who keep the lights on should not be working for shareholders’ profit. We will put the energy companies and the biggest insurers under public ownership by law, pay the old shareholders fairly, and let voters judge us at the next election.",
   a:"Democratic socialism",
   w:"First question: workers against owners (those who keep the lights on against shareholders). Second question: the state or the public. What decides it: public ownership is to be won and judged through elections (“by law”, “let voters judge us”). Public ownership by the ballot box is Democratic socialism. If the party meant to rule without voters, it would be Marxism–Leninism."},
  {q:"Miners dig the coal and the owners count the money. The mines and the steelworks should belong to the public. We will win a majority first, and the change will pass through parliament and the courts like any other law.",
   a:"Democratic socialism",
   w:"First question: workers against owners (miners against owners). Second question: the state or the public. What decides it: “win a majority first” and “pass through parliament and the courts like any other law” keep the change inside elections and law. That is Democratic socialism."},
  {q:"Keep the companies private and the market running. But tax the largest incomes much more, pay for free childcare and strong pensions, and set a wage that no employer may go below. Working families should not carry all the risk.",
   a:"Social democracy",
   w:"First question: workers against owners (working families, employers). Second question: private owners, with the state evening things out (companies stay private; taxes, childcare, pensions and a wage floor). What decides it: nobody changes owners. Two names are left, Social democracy and Market socialism, and because the firms stay private it is Social democracy."},
  {q:"Unions will bargain with employers sector by sector, and the state will guarantee sick pay and unemployment pay, funded from taxes. We have no plan to take over any company.",
   a:"Social democracy",
   w:"First question: workers against owners (unions against employers). Second question: private owners, with the state evening things out (“no plan to take over any company”, pay funded from taxes). What decides it: “no plan to take over any company” means ownership stays private, so it is Social democracy and not Democratic socialism."},
  {q:"No bosses and no government. Neighbourhood assemblies decide local matters and workplaces are run by the people in them. A new state would only be a new boss.",
   a:"Anarchism",
   w:"First question: workers against owners (no bosses, workplaces run by those in them). Second question: the workers themselves. What decides it: “no government” and “a new state would only be a new boss”. The text wants the state gone, not used. That is Anarchism."},
  {q:"The union should run the docks directly, and the unions should link up with each other. We will not run for parliament, because the state is exactly what we want to get rid of.",
   a:"Anarchism",
   w:"First question: workers against owners (the union against whoever owns the docks). Second question: the workers themselves (“the union should run the docks directly”). What decides it: “the state is exactly what we want to get rid of”, so no election and no state. That is Anarchism."},
  {q:"No outside shareholders. Each firm belongs to its own workers, but firms still have to win customers, set their prices and answer to the market.",
   a:"Market socialism",
   w:"First question: workers against owners (no outside shareholders; the firm belongs to the people who work in it). Second question: the workers themselves. What decides it: the firms “still have to win customers, set their prices and answer to the market”. Workers owning firms that compete in a real market is Market socialism."},
  {q:"The print shops, the cafés and the taxi firms should each be owned by the people who work in them. Each will compete with the others for customers and live or die by the market.",
   a:"Market socialism",
   w:"First question: workers against owners (each firm owned by its own workers). Second question: the workers themselves. What decides it: “compete with the others for customers and live or die by the market”. Worker-owned firms in a real market is Market socialism."}
];
const D_SOC_OPTS = ['marx','ml','demsoc','socdem','anarch','mktsoc'].map(IDEOLOGY_NAME);

/* ---- Drill: fascism and its look-alikes. The four names that “The nation” leaves, plus a dictatorship with no belief. ---- */
const IDEOLOGY_DICTATORSHIP = 'Just a dictatorship (authoritarianism)';
const D_FASC = [
  {q:"The old men in their chamber have talked for a hundred years and left us weak. One leader will say what we all want, because he wants it too. Every child in the youth corps, every worker in the national guild, all of us marching, and the nation will be great again.",
   a:"Fascism",
   w:"First question: the nation. Second question: “national guild” hints at state-run bodies, but nothing says who owns the businesses, so the text does not say. Four names are left. What decides it: a leader who “will say what we all want” (he is the people’s will, so the chamber is pointless), a rebirth story (“great again”), and everyone marching. No ranking of races (not Nazism), no old order to restore (not Reactionary conservatism), and no elections to win (not National populism). That is Fascism."},
  {q:"Weakness rotted this country from the inside, and we will burn it out. Strikes and class war are foreign poisons: there is only the nation, and the nation has one voice. Those who stand apart will be broken.",
   a:"Fascism",
   w:"First question: the nation (“there is only the nation”). Second question: the text does not say. What decides it: class war is denounced and replaced by national unity, violence is promised as a cure (“burn it out”, “will be broken”), and the nation has “one voice”. Rejecting class struggle, rebirth through struggle and one will: Fascism."},
  {q:"Forget elections: the leader is the nation’s will and cannot be outvoted by a rabble. We will rebuild our glory through discipline and, if need be, through war, and every factory owner will build what the nation demands.",
   a:"Fascism",
   w:"First question: the nation. Second question: private owners, steered by the state (“every factory owner will build what the nation demands”). What decides it: “the leader is the nation’s will”, so elections are pointless; “rebuild our glory” is the rebirth story; war is welcomed. That is Fascism."},
  {q:"Our history is the story of our blood against the others. The pure must be set apart from the mixed, and the lower races driven out of public life. Everything else is secondary.",
   a:"Nazism",
   w:"First question: one race ranked above the others (“the pure”, “the lower races”). Second question: the text does not say. Two names are left, Nazism and Fascism. What decides it: the whole text is about blood and purity, and “everything else is secondary”. When race ranking is the centre, the name is Nazism."},
  {q:"Our blood is the oldest and the highest, and the leader’s task is to keep it pure and put the lower stocks in their place. Industry will run for the nation, and every owner will answer to the leader.",
   a:"Nazism",
   w:"First question: one race ranked above the others (“the highest”, “the lower stocks”). Second question: private owners, steered by the state (“every owner will answer to the leader”). Two names are left, Nazism and Fascism. What decides it: the story is built on the rank of the blood, not mainly on the nation’s rebirth. That is Nazism."},
  {q:"Kings were put there by God, bishops keep the people honest, and fathers rule their homes. We do not want a new world. We want the old one back, and we will not pretend that every voice is equal.",
   a:"Reactionary conservatism",
   w:"First question: tradition and faith (kings put there by God, bishops, fathers). Second question: the text does not say. What decides it: “we want the old one back” is an old order of faith and rank restored, not something new built through a movement. That is Reactionary conservatism, not Fascism."},
  {q:"The revolutions broke the old order and brought nothing but noise. Bring back the crown, the church courts and the ranks of birth. People were happier when each knew their place.",
   a:"Reactionary conservatism",
   w:"First question: tradition and faith (the crown, the church courts, ranks of birth). Second question: the text does not say. What decides it: “bring back” the old ranks and “each knew their place”: the goal is to restore an old order. Nothing about a nation reborn or a leader who is the people’s will. That is Reactionary conservatism."},
  {q:"What this age destroyed, it destroyed on purpose: the altar, the throne, the old duties that tied the rich to the poor. We ask for no mass movement and no strong man, only that what was taken be given back.",
   a:"Reactionary conservatism",
   w:"First question: tradition and faith (the altar, the throne, the old duties of rich to poor). Second question: the text does not say. What decides it: “what was taken be given back” asks for the old order, and “no mass movement and no strong man” rules out the new mass movement that Fascism needs. That is Reactionary conservatism."},
  {q:"The capital’s insiders sold off our factories and left our borders open. Take back control: secure the borders, make the big companies put the country’s needs first, and let the voters judge whether we deliver. If we fail, vote us out.",
   a:"National populism",
   w:"First question: ordinary people against an elite (“the capital’s insiders”; the nation is also a fair reading). Second question: private owners, steered by the state (“make the big companies put the country’s needs first”). What decides it: “let the voters judge” and “vote us out”. The elections stay, and there is no rebirth story and no leader who is the people’s will. That is National populism, not Fascism."},
  {q:"The people who run the banks and the broadcasters have never been elected to anything, yet they decide what we may say and what we pay. Give us a mandate and we will take that power back and make the banks lend to our own farms and factories first.",
   a:"National populism",
   w:"First question: ordinary people against an elite (the unelected who run the banks and the broadcasters). Second question: private owners, steered by the state (“make the banks lend to our own farms and factories first”: the banks stay private, but must serve national goals). What decides it: “give us a mandate”: the movement works through elections. That is National populism."},
  {q:"The establishment talks about the world; we talk about home. Put our workers, our culture and our industry first, tell the big firms what the country needs, and let the people decide in a free election.",
   a:"National populism",
   w:"First question: ordinary people against an elite (“the establishment”; the nation is also a fair reading). Second question: private owners, steered by the state (“tell the big firms what the country needs”). What decides it: “let the people decide in a free election”. That is National populism."},
  {q:"The general has closed the newspapers, banned every party and arrested his rivals. He says the army will rule until order returns. He has not said what the country is for.",
   a:IDEOLOGY_DICTATORSHIP,
   w:"First question: there is nothing to point to. The text names no nation’s story, no race, no faith, no class and no people against an elite. It describes only methods of rule (closed papers, banned parties, arrests). With no belief to point to, it is a dictatorship and nothing more: Just a dictatorship (authoritarianism)."},
  {q:"Anyone who criticises the ruler disappears, the radio plays his speeches all day, and the secret police read the letters. The ruler says only that he knows best.",
   a:IDEOLOGY_DICTATORSHIP,
   w:"First question: there is nothing to point to. Censorship, secret police and praise of the ruler are methods that any dictatorship uses. “He knows best” is a claim about himself, not a claim that he is the nation’s will, and it gives no belief about nation, class or race. That is Just a dictatorship (authoritarianism)."}
];
const D_FASC_OPTS = ['fasc','nazi','react','natpop'].map(IDEOLOGY_NAME).concat([IDEOLOGY_DICTATORSHIP]);

/* ---- Faulty claims: each one fails because it skips a question of the key, or goes by a word instead of the answers. ---- */
const IDEOLOGY_ERR = [
  {q:'Sweden is a socialist country.',
   w:'The claim skips the second question: who should own the farms, factories, shops and banks? In Sweden private owners keep them, and the state taxes heavily and pays for services. That answer is “Private owners, with the state evening things out”, and it leads to Social democracy. A socialist name needs the businesses themselves to change hands.'},
  {q:'Anyone who brawls in the street for their cause is a fascist.',
   w:'Street violence is a method that groups of every belief use, so it tells you nothing about what a group believes. The claim skips the first question: who or what does the text put first? To call something fascist you would need to point to a nation reborn under one leader, the rejection of elections and the rest of the cluster, not to a fight in the street.'},
  {q:'Fascism is when the government does a lot of stuff.',
   w:'That describes statism: how much the state does. It is a dial, not a belief, and a state can do a lot for any purpose. The claim skips both questions: it never asks who or what the text puts first, or who should own the businesses. Fascism needs the nation first and businesses steered by the state, together with the rest of the cluster.'},
  {q:'Communism and fascism are the same thing, because both ban opposition parties.',
   w:'This is the horseshoe mistake: grouping by shared methods (banned parties, a secret police, mass rallies) instead of by the answers. Here “communism” means Marxism–Leninism. On the first question they differ: it puts workers against owners, and Fascism puts the nation. On the second question they differ too: “The state or the public”, against “Private owners, steered by the state”. Similar methods, opposite answers.'},
  {q:'Anyone who wants strong borders is a fascist.',
   w:'Wanting strong borders is nationalism at most, and nationalism is only the first answer: the nation. Four names sit under that answer, and Fascism also needs the rebirth story, a leader who is the people’s will, and the rejection of elections. The claim stops at the first question and skips everything that decides between the four.'},
  {q:'A government that taxes the rich heavily must be Marxist.',
   w:'The claim skips the second question: who should own the farms, factories, shops and banks? Heavy taxes on the rich, paid out as services and benefits, leave the owners where they are: “Private owners, with the state evening things out”, which leads to Social democracy. Marxism is an explanation of profit as unpaid work built into the system, not a tax policy.'},
  {q:'She says a small elite is robbing ordinary people, so she must be a socialist.',
   w:'Blaming an elite is only the first answer: ordinary people against an elite. The claim skips the second question: nothing says who should own the businesses, so the answer is “The text does not say”. With nothing else attached, the name is Populism with nothing attached. She could turn out to be a Democratic socialist, a National populist or neither.'},
  {q:'Anyone who puts the country first and distrusts the establishment is basically a fascist.',
   w:'That fits National populism: it works through elections and has no rebirth story, no leader who is the people’s will and no rejection of the vote. The claim skips the extra check that separates it from Fascism: what does the text want done with elections, courts and a free press? National populism keeps the vote and attacks the unelected; Fascism does away with it.'},
  {q:'A speech about how racial groups are held back is no different from Nazism, because both are about race.',
   w:'The claim stops at the noun. The first question has two race answers that point in opposite directions: “One race ranked above the others” (Nazism) and “Groups held back by unfair systems” (Group equality). Ask which way the text points: does it place one group higher, or does it name unfair systems as the problem?'},
  {q:'“Liberal” always means left-wing.',
   w:'The claim skips both questions and goes by a word. In the United States “liberal” means centre-left, but Classical liberalism answers “The individual” to the first question and “Private owners, left alone” to the second. Check the answers, never the label.'},
  {q:'Social democracy and democratic socialism are the same thing with two names.',
   w:'The second question separates them. Social democracy keeps private owners and evens things out with taxes and services: “Private owners, with the state evening things out”. Democratic socialism wants “The state or the public” to own the major businesses, and wants to get there through elections.'},
  {q:'The Nazi government controlled the whole economy, so it must have been socialist.',
   w:'The claim mixes up control with ownership, so it skips the second question: who should own the farms, factories, shops and banks? Under Nazism owners kept their businesses and had to obey the state: “Private owners, steered by the state”. Steering is not owning. A big, active state is only statism, a dial and not a belief. The first question points the same way: Nazism puts one race ranked above the others first, not workers against owners.'},
  {q:'He talks only about the nation and never mentions business, so he must want the government to stay out of the economy.',
   w:'The claim skips the second question: who should own the farms, factories, shops and banks? A text that never mentions business has not answered it, so the answer is “The text does not say”. “Private owners, left alone” needs a stated wish for the state to keep out. Silence is not agreement. Four names stay under “The nation”, and the extra checks, not a guess about business, choose between them.'}
];

/* ---- Specimens: the full key. Each explanation walks the first question, then the second, then what decides the name. ---- */
const IDEOLOGY_SPECIMENS = [
  {q:'The soil of the fatherland has been poisoned by soft men and foreign ideas. We do not ask for votes; we ask for obedience, and in return we will give you a nation your grandchildren will die for gladly.',
   sub:{Q2:['nation'],Q1:['unspec']},outcome:'fasc',
   why:'First question: “fatherland” and “a nation your grandchildren will die for” put the nation first. (“Soil” does not make it a race: nothing here ranks people by birth.) Second question: nothing is said about who should own businesses, so the text does not say. That leaves four names: Fascism, Nazism, National populism and Reactionary conservatism. What decides it: “we do not ask for votes” rejects elections (not National populism); nothing ranks races (not Nazism); “poisoned by soft men” is a story of decay that wants a new national spirit, not a return to throne and altar (not Reactionary conservatism); and “obedience” and “die for gladly” demand sacrifice for the nation. That is Fascism.',
   fals:'If the text wanted to bring back a king and the church’s authority and said nothing about a new nation, it would be Reactionary conservatism. If it ranked people by blood, it would be Nazism. If it asked for votes, it would be National populism.'},
  {q:'Wages appear to be payment for a day’s work. They are not. The worker produces more value in a day than he is paid for; the remainder is taken. This is not theft by a bad employer — it is the ordinary functioning of the system.',
   sub:{Q2:['class'],Q1:['unspec']},outcome:'marx',
   why:'First question: the text is about what the worker is paid against what he produces, and who takes the rest: workers against owners. Second question: it explains the system but never says who should own the businesses, so the text does not say. All six socialist names are left. What decides it: “not theft by a bad employer — it is the ordinary functioning of the system” explains profit as unpaid work built into the system, with no party, no election and no plan. That is Marxism.',
   fals:'If the text went on to say that a party must seize power and lead the workers, it would be Marxism–Leninism. If it only asked for higher wages and kept the system as it is, it would be Social democracy.'},
  {q:'We propose a national minimum wage, union bargaining with employers sector by sector, twelve months’ parental leave, and free university. Business will continue to be privately owned and we will keep the budget balanced.',
   sub:{Q2:['class'],Q1:['redist']},outcome:'socdem',
   why:'First question: a wage floor, bargaining with employers, leave and free study are all aimed at the security of working people against what the market alone would give them: workers against owners. (“National” only means countrywide.) Second question: “business will continue to be privately owned”, yet the state sets a wage floor and pays for leave and university: private owners, with the state evening things out. Two names are left, Social democracy and Market socialism. What decides it: the businesses stay with private owners and nothing says they should pass to their workers. That is Social democracy.',
   fals:'If the text proposed to take the biggest firms into public ownership, the second answer would be “The state or the public” and the name would be Democratic socialism.'},
  {q:'The state, however benevolent, is a machine for coercion. We will not capture it; we will dissolve it. Production will be run by the assemblies of those who do the producing.',
   sub:{Q2:['class'],Q1:['worker']},outcome:'anarch',
   why:'First question: the text puts “those who do the producing” first and wants production in their hands: workers against owners. Second question: “run by the assemblies of those who do the producing”: the workers themselves. Four names are left: Anarchism, Democratic socialism, Marxism and Market socialism. What decides it: “we will not capture it; we will dissolve it”. The state is to be dissolved, not used, which rules out a party that holds the state (Marxism–Leninism) and elections to take over industries (Democratic socialism). That is Anarchism.',
   fals:'If the text spoke of a party or a transition period that uses the state first, it would be Marxism–Leninism. If firms owned by their workers were to compete in a market and the state stayed, it would be Market socialism.'},
  {q:'Order requires that men know their place. The monarchy, the church, and the family were dismantled by ideologues, and nothing built since has replaced them. We seek restoration, not revolution.',
   sub:{Q2:['trad'],Q1:['unspec']},outcome:'react',
   why:'First question: “the monarchy, the church, and the family” are the inherited order the text puts first: tradition and faith. Second question: nothing about who should own businesses, so the text does not say. One name is left: Reactionary conservatism. What decides it: “we seek restoration, not revolution” asks for an old order to be put back, not for a new nation built through a mass movement. That is Reactionary conservatism.',
   fals:'If the text added a mass movement, a leader who is the nation’s will and a rebirth of the nation through struggle, it would be Fascism, even if the style stayed the same.'},
  {q:'The masses cannot arrive at revolutionary consciousness on their own; left alone they achieve only trade-union consciousness. They require a disciplined party to lead them.',
   sub:{Q2:['class'],Q1:['unspec']},outcome:'ml',
   why:'First question: “revolutionary consciousness” and “trade-union consciousness” are about the workers’ struggle, so the answer is workers against owners. (“The masses” could tempt you toward ordinary people against an elite, but no elite is named and “trade-union” ties it to workers.) Second question: nothing about who should own businesses, so the text does not say. Six names are left. What decides it: the workers cannot get there alone, so “a disciplined party” must lead them. When the party, not the workers themselves, is the one that acts, it is Marxism–Leninism.',
   fals:'If the text trusted workers to organise themselves and had no party, it would be Anarchism when it also wanted no state, or Marxism when it only explained the system.'},
  {q:'Government’s role is to enforce contracts, defend the borders, and otherwise leave people alone. Prosperity is what happens when free individuals trade without permission.',
   sub:{Q2:['indiv'],Q1:['private']},outcome:'clib',
   why:'First question: “free individuals” puts the individual first. Second question: “otherwise leave people alone” and “trade without permission” say outright that private owners should be left alone. One name is left after the first question: Classical liberalism. “Defend the borders” is one of the state’s few jobs here, not the nation put first.',
   fals:'If the text said the individual must serve the nation’s greatness, it would move to the names under “The nation”. If it wanted to restore faith and tradition, it would be Reactionary conservatism.'},
  {q:'There are no classes in a healthy nation — only Germans, or Italians, or Frenchmen, arranged in their proper function. Those who preach class war are agents of dissolution and will be dealt with as such.',
   sub:{Q2:['nation'],Q1:['unspec']},outcome:'fasc',
   why:'First question: the word “classes” appears twice, but only to deny them: “only Germans, or Italians, or Frenchmen” puts the nation first. Second question: “arranged in their proper function” is about each person’s place in the nation, not about who should own businesses, so the text does not say. Four names are left. What decides it: class war is denounced and replaced by national unity, and those who insist on it “will be dealt with”. Nothing ranks races (not Nazism), nothing restores an old order (not Reactionary conservatism), and nothing asks for votes (not National populism). That is Fascism.',
   fals:'If the text said much the same but asked for votes and blamed an elite for betraying the people, it would be National populism.'},
  {q:'Real people, the ones who work and pay and follow the rules, have been sold out by a corrupt establishment. We will take the country back for them.',
   sub:{Q2:['people'],Q1:['unspec']},outcome:'pop',
   why:'First question: “real people” against “a corrupt establishment”: ordinary people against an elite. Second question: nothing about who should own businesses, so the text does not say. Two names are left: National populism and Populism with nothing attached. What decides it: “take the country back” is a slogan, not a plan. National populism needs more than the slogan: borders, culture or a state that steers industry. Nothing here says who counts as the nation, nothing mentions borders or culture, and nothing says the state should steer industry. With nothing attached, the honest name is Populism with nothing attached.',
   fals:'If the text added who counts as the nation and said the state should steer industry toward national goals, it would be National populism. If it added public ownership of the big businesses, it would be Democratic socialism.'},
  {q:'We accept the market. We reject that a worker’s wages should decide whether their family gets medicine, education and shelter. Those three are taken out of the market entirely; everything else stays in it.',
   sub:{Q2:['class'],Q1:['redist']},outcome:'socdem',
   why:'First question: “a worker’s wages” and “their family” put working people first, against what the market alone would give them: workers against owners. Second question: owners keep their businesses (“we accept the market”, “everything else stays in it”), and the state takes medicine, education and shelter out of the market and pays for them: private owners, with the state evening things out. Two names are left, Social democracy and Market socialism. What decides it: nothing says the firms should change hands or belong to their workers. That is Social democracy.',
   fals:'If the firms themselves were to belong to the people who work in them and still compete in the market, it would be Market socialism. If the state were to take over the farms, factories, shops and banks, it would be Democratic socialism.'},
  {q:'The old parties are finished. Only a movement that speaks for the forgotten majority, protects our borders and culture, and uses the full power of the state to break the grip of global finance and bureaucratic elites can restore the nation’s strength. Private enterprise will be directed toward national goals.',
   sub:{Q2:['people','nation'],Q1:['directed']},outcome:'natpop',
   why:'First question: “the forgotten majority” against “global finance and bureaucratic elites” puts ordinary people against an elite (“restore the nation’s strength” also makes “The nation” a fair answer, and the key accepts both). Second question: “private enterprise will be directed toward national goals”: private owners, steered by the state. With the first answer, one name is left: National populism. With “The nation” you also have Fascism and Nazism. What decides it: the movement wants to win and use state power, with no rebirth myth, no leader who is the people’s will and no ban on elections. That is National populism.',
   fals:'If the text added a story of national rebirth through struggle and a rejection of elections, it would be Fascism. If it said nothing about the nation or business, it would be Populism with nothing attached.'},
  {q:'Structural barriers rooted in race, gender, and other identity categories continue to produce unequal outcomes even when formal legal equality exists. True justice requires that institutions actively identify and dismantle those barriers, and that resources and opportunities be redistributed until outcomes are equitable. Colour-blindness and formal equality are not enough; they preserve the status quo.',
   sub:{Q2:['race-e'],Q1:['redist','unspec']},outcome:'idegal',
   why:'First question: “structural barriers rooted in race, gender” and “institutions actively identify and dismantle those barriers” name groups held back by unfair systems, and no group is placed above another. Second question: “resources and opportunities be redistributed” asks the state to share out the results, which is “Private owners, with the state evening things out”. “The text does not say” is also accepted: nothing here says who should own the businesses, because the text is about how institutions treat groups. “Private owners, left alone” does not fit, because this text wants the state to do a great deal. One name is left: Group equality. It is not Nazism (same noun, opposite direction), and not Marxism (the problem named is how institutions treat groups, not owners against workers).',
   fals:'If the text said the root of the problem is owners against workers, the first answer would be Workers against owners, and the name would come from the socialist family. If it said formal equality is enough, the first answer would be The individual and the name Classical liberalism.'},
  {q:'History is a ledger of blood: the kinds that build and the kinds that borrow. Our task is to keep our own line clean and to see that no other line shares our streets, our schools or our beds. The factories stay with their owners, but every owner answers to the leader, and the leader answers to the race.',
   sub:{Q2:['race-h'],Q1:['directed']},outcome:'nazi',
   why:'First question: “the kinds that build and the kinds that borrow” and “keep our own line clean” rank groups by birth: one race ranked above the others. Second question: “the factories stay with their owners, but every owner answers to the leader”: private owners, steered by the state. Two names are left: Nazism and Fascism. What decides it: the whole story is built on blood and purity (“a ledger of blood”, “the leader answers to the race”), not mainly on the rebirth of a nation. When race ranking is at the centre, the name is Nazism.',
   fals:'If the text built its story on the nation’s rebirth and a leader and mentioned race only in passing, it would be Fascism. If it said the opposite about rank (no group above another), it would be Group equality.'},
  {q:'The people who keep the telephone network, the post and the biggest banks running are paid by owners who take the profits. We will bring all three into public ownership by an act of parliament, pay the old shareholders fairly, and face the voters at the next election. If they tell us to stop, we stop.',
   sub:{Q2:['class'],Q1:['public']},outcome:'demsoc',
   why:'First question: “the people who keep [them] running” against “owners who take the profits”: workers against owners. Second question: “bring all three into public ownership”: the state or the public. Three names are left: Marxism–Leninism, Democratic socialism and Marxism. What decides it: “an act of parliament”, “face the voters” and “if they tell us to stop, we stop” keep the change inside elections. That is Democratic socialism.',
   fals:'If the text said the party would rule on the workers’ behalf and would not face the voters, it would be Marxism–Leninism. If the owners were to keep their businesses and the text only wanted higher taxes and services, it would be Social democracy.'},
  {q:'The factory should be ours, not the shareholders’, who have never touched a machine. We will elect the managers, set our own wages and share what is left. And we are not asking for a ministry to run things: let customers decide which factories survive. A factory that makes what people want will grow, and one that does not will close.',
   sub:{Q2:['class'],Q1:['worker']},outcome:'mktsoc',
   why:'First question: “ours, not the shareholders’, who have never touched a machine” sets the people who work in the factory against the owners: workers against owners. Second question: “we will elect the managers, set our own wages and share what is left”: the workers themselves. Four names are left: Anarchism, Democratic socialism, Marxism and Market socialism. What decides it: “let customers decide which factories survive” and “we are not asking for a ministry to run things”: worker-owned firms in a real market, with no planning from above. That is Market socialism.',
   fals:'If the text said there should be no state at all, it would be Anarchism. If the state were to own the industries, won through elections, it would be Democratic socialism.'}
];

const IDEOLOGY_COURSE = [
{ tag:'One', title:'The two questions',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a short political text and answer two plain questions about it. The two answers cross most of the possible names off the list.</p>
      <p>You already hear these words every week: socialist, fascist, populist, liberal, conservative. They are mostly thrown around as insults, and most people who use them could not say what they mean. This course gives you a method instead of a feeling. The method is a key, like the one botanists use to name a plant. You do not guess from the general look of it. You check one feature at a time, and the key leads you to a name.</p>
      <p>This key asks two questions, always in this order:</p>
      <ol>
        <li><b>Who or what does the text put first?</b> This is the first question.</li>
        <li><b>Who should own the farms, factories, shops and banks?</b> This is the second question.</li>
      </ol>
      <p>These two work well because a text usually shows its answer in a few lines, and because they separate the names far better than tone does. Two movements can use the same rallies, the same anger and the same secret police. What they put first, and who they want to own the businesses, are much harder to share.</p>
      <p>This unit teaches both questions and every answer to each. Near the end, one card, "What else to check", shows three extra checks. They are not part of the key. You use them when the two questions leave more than one name. The last card walks two whole texts through the key. Then you practise the first question.</p>`},
  {h:'The first question: who or what does the text put first?',
   b:`<p class="lead">Every political text has a hero, a victim and a villain, even when it never says so. The first question asks who the text is really about.</p>
      <p><b>What it is.</b> Read the text and ask who or what it treats as the thing that matters most. Is it about workers and owners? The nation? A race? The single person? The old faith? The ordinary people against a few at the top? The key has seven answers, and each gets its own card next. The answer is the one thing the text builds everything else around.</p>
      <p><b>Example.</b> Take one piece of news: a factory in a small town is closing and moving abroad. Seven different speakers can describe it, and each puts something different first.</p>
      <ul>
        <li><b>Workers against owners:</b> "The owners are throwing away thirty years of our work to squeeze out a bigger profit."</li>
        <li><b>The nation:</b> "A great country does not let its industry walk out of the door. What we build belongs to all of us."</li>
        <li><b>One race ranked above the others:</b> "Our own kind built this town. A higher people should not be made poorer by lesser ones."</li>
        <li><b>Groups held back by unfair systems:</b> "Look at who is laid off first. The rules look neutral, but they keep landing on the same groups."</li>
        <li><b>The individual:</b> "Nobody owes you a job. Each of us is free to start a business or move to where the work is, and a company is free to move too."</li>
        <li><b>Tradition and faith:</b> "A town with its church at the centre and families who stayed for generations is being cut up for money. We are forgetting what holds a community together."</li>
        <li><b>Ordinary people against an elite:</b> "The people who made this deal will never feel it. Ordinary people have been sold out by a small, corrupt few."</li>
      </ul>
      <p><b>Looks like.</b> The facts are the same in all seven. What changes is who the speaker treats as the one that matters. Look at who is called "we" and who is called "they", who is the victim, and who is to blame.</p>
      <p><b>Catch it.</b> Ask yourself: if I take out the details, who or what is this text really about? That is the first question.</p>
      <p><b>What to do.</b> Underline the words for "we" and "they". Decide from who the text sorts people into and which side it takes. Then pick the one answer that fits best. Each of the seven has its own card next.</p>
      <p><b>Don't confuse it with</b> the topic. A text about a factory, a school or a tax can give any of the seven answers. The topic is what the text talks about. The first question asks who it puts first.</p>`},
  {h:'Workers against owners (class)',
   b:`<p><b>What it is.</b> The text sees society as split between people who work for wages and people who own the businesses they work in, and treats that split as the main fact about politics. Laws, culture and government are read as results of who has the money and who does the work. Writers call these two groups "classes", so you will often see this idea called "class".</p>
      <p><b>Example.</b> A bus depot's drivers are told their pay is frozen while the company's profits hit a record. A leaflet says: "The company is a machine for turning our work into someone else's money. Drivers and owners want opposite things, and both cannot win."</p>
      <p><b>Sounds like.</b> "Bosses and workers." "The working class." "Profit comes out of our pay." "Solidarity." "The owners." "The ones who do the work." "Those who do the producing."</p>
      <p><b>Catch it.</b> Does the text sort people by whether they work for wages or own the business? The text can side with the workers without ever naming the owners: wanting production run by "those who do the producing" counts. If yes, the answer to the first question is <b>Workers against owners</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves six names: Marxism, Marxism–Leninism, Democratic socialism, Social democracy, Anarchism and Market socialism. A text can put workers first and be mild (Social democracy) or stern (Marxism–Leninism), so the first answer alone does not tell you which. Unit Two sorts the six.</p>
      <p><b>Don't confuse it with</b> <b>Ordinary people against an elite</b>. There the line runs between a good majority and a corrupt few, and the few can be politicians, officials or the media as well as rich owners. Here the line is the job: wages against ownership.</p>`},
  {h:'The nation',
   b:`<p><b>What it is.</b> The text treats the country as one people with a shared past and one shared future, and judges everything by whether it is good for that people. Differences inside the nation, such as rich and poor or left and right, count for less than what holds it together. "Nation" here means the people as a whole and their homeland, not just the government.</p>
      <p><b>Example.</b> A candidate says: "Forget bosses and workers, left and right. We are one people, and years of division have left our country weak. Every decision should ask one thing: does it make the nation stronger?"</p>
      <p><b>Sounds like.</b> "Our country." "Our people." "National unity." "The homeland." "National greatness." "The fatherland." "Our soil." "Foreign influence." "Put the nation first."</p>
      <p><b>Catch it.</b> Does the text keep asking what is good for the nation as one body, and treat divisions inside it as a weakness? If yes, the answer to the first question is <b>The nation</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves four names: Fascism, Nazism, National populism and Reactionary conservatism. Unit Three teaches how to tell them apart. Loving your country is not enough to give this answer, because nearly everyone does. Ask whether the nation is put above everything else.</p>
      <p><b>Don't confuse it with</b> <b>One race ranked above the others</b>. The nation puts one whole people first, tied to a homeland. Words like "soil" and "fatherland" are about the place and the people, so they do not make a text racial. A ranked race splits people by birth into higher and lower groups, and the higher group counts for more.</p>`},
  {h:'One race ranked above the others',
   b:`<p><b>What it is.</b> The text treats people as belonging to races or ethnic groups by birth, says these groups differ in worth, and wants the higher one to rule or to stay "pure". The two words that matter are birth and rank. The same noun, race, can point the other way: see the next card, "Groups held back by unfair systems".</p>
      <p><b>Example.</b> A pamphlet says: "A people's strength is in its blood. Mixing weakens it. The strong race has a right and a duty to lead, and the weak must serve."</p>
      <p><b>Sounds like.</b> "Blood." "Pure." "Racial stock." "Inferior." "Master race." "Mixing."</p>
      <p><b>Catch it.</b> Does the text sort people by birth into higher and lower groups and say the order is natural? If yes, the answer to the first question is <b>One race ranked above the others</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves two names: Nazism and Fascism. Unit Three says when to pick which. You do not need to wait for rallies, uniforms or violence: the ranking itself is the sign.</p>
      <p><b>Don't confuse it with</b> <b>Groups held back by unfair systems</b>. Both talk about race, and they point in opposite directions. One places a group higher. The other says no group should be higher and that unfair systems keep some down.</p>`},
  {h:'Groups held back by unfair systems',
   b:`<p><b>What it is.</b> The text sees society as made of groups defined by things like race, gender or disability, and says that rules and institutions that look neutral keep some groups behind. It treats that as unjust and wants it changed. Writers call these "structural" or "systemic" barriers.</p>
      <p><b>Example.</b> A report finds that two shops with equally qualified applicants invite people back for interview at very different rates, depending on the applicant's name. It says: "Nobody needs to intend harm. The process keeps landing on the same groups, and the process has to change."</p>
      <p><b>Sounds like.</b> "Systemic." "Structural barriers." "Equity." "Unequal outcomes." "A level playing field is not enough." "Underrepresented groups."</p>
      <p><b>Catch it.</b> Does the text name groups, say that unfair systems hold them back, and want those systems changed so that no group sits above another? If yes, the answer to the first question is <b>Groups held back by unfair systems</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves one name: Group equality. The second question still matters, because it shows what the text wants done about money and ownership.</p>
      <p><b>Don't confuse it with</b> <b>One race ranked above the others</b>, its mirror image. Ask which way the text points. Does it place one group higher? Or does it say no group should be higher and name the system as the problem? Also not with <b>Workers against owners</b>: here the groups are defined by identity, not by wages against ownership.</p>`},
  {h:'The individual',
   b:`<p><b>What it is.</b> The text starts from the single person, free to run their own life, speak, own things and trade. Groups such as the nation or a class come second, or count as threats to that freedom. The state exists to protect each person's rights, not to pursue a group's goal.</p>
      <p><b>Example.</b> A columnist writes: "A free adult chooses their own work, their own company and their own beliefs. A government that tells me what to want has gone too far."</p>
      <p><b>Sounds like.</b> "Individual rights." "Freedom of choice." "Personal responsibility." "Keep what you earn." "The state should step aside."</p>
      <p><b>Catch it.</b> Does the text defend the single person's freedom and treat group labels as less important? If yes, the answer to the first question is <b>The individual</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves one name: Classical liberalism. Expect "Private owners, left alone" as the second answer, and check that the text really starts from the person and not from a group.</p>
      <p><b>Don't confuse it with</b> <b>Ordinary people against an elite</b>. "The people" is a group, and the text speaks for the group. "The individual" speaks for each person's freedom, whatever the majority wants.</p>`},
  {h:'Tradition and faith',
   b:`<p><b>What it is.</b> The text treats a settled order, shaped by religion, family and inherited custom, as what holds society together, and says it should be defended or brought back. Order and duty come before individual choice. People sometimes call this "throne and altar": the crown and the church.</p>
      <p><b>Example.</b> A priest preaches: "A people that gives up the customs and faith of its fathers loses its way. The family, the parish and the crown gave us order, and what has replaced them has given us nothing."</p>
      <p><b>Sounds like.</b> "The old ways." "Our faith." "The natural order." "Know your place." "Duty." "Sacred."</p>
      <p><b>Catch it.</b> Does the text treat an inherited order of faith and custom as the highest authority, higher than the nation or the individual? If yes, the answer to the first question is <b>Tradition and faith</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves one name: Reactionary conservatism. Texts like this are often silent on business, so "The text does not say" is common. Being religious or traditional yourself does not give this answer. It is for texts that put the old order above everything else.</p>
      <p><b>Don't confuse it with</b> <b>The nation</b>. A text can love the nation without any faith or crown. Ask whether the highest authority is the inherited order of faith and custom or the nation as one people.</p>`},
  {h:'Ordinary people against an elite',
   b:`<p><b>What it is.</b> The text divides the country into "the real people" (honest, hard-working, ignored) and "the elite" (a small, corrupt group that has betrayed them). It does not say much more than that.</p>
      <p><b>Example.</b> A rally speaker says: "The people at the top look down on ordinary folk. They make the rules and we pay. It is time the people ran this place again."</p>
      <p><b>Sounds like.</b> "The establishment." "The elites." "The real people." "The silent majority." "Career politicians." "They don't care about you."</p>
      <p><b>Catch it.</b> Is there a good majority and a bad few, and does the text mostly blame the few? The elite can be bankers, politicians, officials, the media or "globalists": whoever the text names. If yes, the answer to the first question is <b>Ordinary people against an elite</b>.</p>
      <p><b>What to do.</b> Go on to the second question. This answer leaves two names: National populism and Populism with nothing attached. If the text says nothing more, you can usually only name Populism with nothing attached. Unit Four explains why.</p>
      <p><b>Don't confuse it with</b> <b>Workers against owners</b>. There the line is wages against ownership. Here the elite can be politicians or officials who own nothing, and "the people" can include small business owners.</p>`},
  {h:'The first question, side by side',
   b:`<p class="lead">Here is the first question with all seven answers, in the key's exact words, and the names each answer leaves.</p>
      <p>The question is <b>Who or what does the text put first?</b></p>
      <table class="k">
        <tr><th>Answer</th><th>Names left</th></tr>
        <tr><td><b>Workers against owners</b></td><td>Marxism, Marxism–Leninism, Democratic socialism, Social democracy, Anarchism, Market socialism</td></tr>
        <tr><td><b>The nation</b></td><td>Fascism, Nazism, National populism, Reactionary conservatism</td></tr>
        <tr><td><b>One race ranked above the others</b></td><td>Nazism, Fascism</td></tr>
        <tr><td><b>Groups held back by unfair systems</b></td><td>Group equality</td></tr>
        <tr><td><b>The individual</b></td><td>Classical liberalism</td></tr>
        <tr><td><b>Tradition and faith</b></td><td>Reactionary conservatism</td></tr>
        <tr><td><b>Ordinary people against an elite</b></td><td>National populism, Populism with nothing attached</td></tr>
      </table>
      <p>Use this as a map. You do not need to know the names yet: each one gets its own card in the units ahead. Notice how much the first question does. Five of the seven answers leave only one or two names. "Workers against owners" and "The nation" leave the most, so the second question and the check on each name's card have more to do there.</p>
      <p>Two answers deserve a second look before you move on. <b>One race ranked above the others</b> and <b>Groups held back by unfair systems</b> both talk about race or identity, and they leave completely different names. Always ask which way the text points.</p>`},
  {h:'The second question: who should own the farms, factories, shops and banks?',
   b:`<p class="lead">The first question tells you which side the text is on. The second asks what it wants done about who owns the businesses.</p>
      <p><b>What it is.</b> Farms, factories, shops and banks are the places where things are made, sold and lent. Whoever owns them decides how they run and who gets the profit. Economists call them the "means of production". The second question asks who the text says should own them: private owners, the state, the workers, or someone else.</p>
      <p><b>Example.</b> Take a bakery. One person owns it and employs eight bakers. A text could say: leave it as it is. Or: let the state tell the owner what to bake. Or: let the state own it. Or: let the eight bakers own it together. Or: leave the owner in place but tax them heavily and pay for services for everyone. Each of those is a different answer, and each has a card ahead.</p>
      <p><b>Looks like.</b> Words about owning and running: "nationalise", "privatise", "co-operative", "workers' councils", "free market", "the state will direct industry", "shareholders", "public ownership".</p>
      <p><b>Catch it.</b> Is there a word in the text about who owns, runs or controls businesses? If yes, find which of the six answers it matches. If you cannot point to a word, the answer is <b>The text does not say</b>. Silence is a real answer. Do not fill it in by guessing what the speaker would probably want.</p>
      <p><b>What to do.</b> Keep ownership separate from taxes and services. A state can tax a lot and pay for hospitals, schools and pensions while the businesses stay in private hands. That changes who gets what, not who owns what. So a text that only talks about taxes and services has left the owners where they are, and its answer is "Private owners, with the state evening things out". Only a text that moves the farms, factories, shops and banks to the state or to the workers changes who owns them.</p>
      <p><b>Don't confuse it with</b> the first question. The first asks who the text speaks for. The second asks what the text wants done about the businesses. Two texts can agree on one and differ on the other, which is why the key needs both.</p>
      <p>There are six answers. The next six cards take them one at a time.</p>`},
  {h:'Private owners, left alone',
   b:`<p><b>What it is.</b> The text takes it for granted that businesses belong to private owners, and wants the state to keep out of how they run and trade. There is no takeover, no steering by the state, and no big programme to share things out.</p>
      <p><b>Example.</b> A candidate says: "Business owners know their trade. Cut the red tape, keep taxes low, and let people sell what they like to whom they like."</p>
      <p><b>Sounds like.</b> "Free markets." "Free trade." "Keep taxes low." "Less red tape." "The state should step aside." "Let people trade."</p>
      <p><b>Catch it.</b> Does the text say outright that the state should keep out of how businesses run and trade? If yes, the answer to the second question is <b>Private owners, left alone</b>. If the text never mentions business, the answer is "The text does not say". Silence is not the same as "left alone".</p>
      <p><b>What to do.</b> This answer leaves four names: Classical liberalism, Reactionary conservatism, Group equality and Populism with nothing attached. The first question has usually already narrowed these to one, so use it to check.</p>
      <p><b>Don't confuse it with</b> <b>The text does not say</b>. "Left alone" is a stated wish for the state to stay out. Silence is only silence. Also not with <b>Private owners, steered by the state</b>: there the owners are told what to do.</p>`},
  {h:'Private owners, steered by the state',
   b:`<p><b>What it is.</b> Owners keep their businesses and their profits, but the state tells them what to serve: national goals, plans, quotas. Unions and employers may be pulled into state-run bodies, and owners who refuse can lose the business. People sometimes call this "state-directed capitalism", and in a stricter form "corporatism".</p>
      <p><b>Example.</b> A minister says: "Every factory in this country serves the national plan. Owners will build what the nation needs, at the prices we set, and the old unions will be replaced by state bodies in which owners and workers answer to the government."</p>
      <p><b>Sounds like.</b> "The national plan." "Serve national goals." "Industry will be directed." "The old unions are finished." "Owners must serve the nation."</p>
      <p><b>Catch it.</b> Do the owners keep their businesses, but answer to the state about what to make and for whom? If yes, the answer to the second question is <b>Private owners, steered by the state</b>.</p>
      <p><b>What to do.</b> This answer leaves three names: Fascism, Nazism and National populism. Unit Three teaches how to tell them apart.</p>
      <p><b>Don't confuse it with</b> <b>The state or the public</b>. Here the state does not own the businesses, and the owners stay. Also not with <b>Private owners, with the state evening things out</b>, which is about sharing out the results through taxes and services, not about telling owners what to do.</p>`},
  {h:'The state or the public',
   b:`<p><b>What it is.</b> The text wants the farms, factories, shops, railways or banks to be owned by the state or by public bodies on behalf of everyone. This is often called "nationalisation" or "public ownership". The profits would go to the public, and the state or public bodies would decide how the businesses run.</p>
      <p><b>Example.</b> A manifesto says: "The railways and the power grid should belong to the people, not to shareholders. We will buy them out and run them as public services."</p>
      <p><b>Sounds like.</b> "Nationalise." "Bring it into public ownership." "State-owned." "Take back control of the railways."</p>
      <p><b>Catch it.</b> Does the text say the state or public bodies should own the businesses themselves? Public schools and hospitals paid for by taxes do not count on their own. The question is about businesses that make and sell things or handle money. If yes, the answer to the second question is <b>The state or the public</b>.</p>
      <p><b>What to do.</b> This answer leaves three names: Marxism–Leninism, Democratic socialism and Marxism. Unit Two shows how to tell them apart.</p>
      <p><b>Don't confuse it with</b> <b>The workers themselves</b>. Here the whole public owns the business through the state. There, the people who work in each business own it together. Also not with <b>Private owners, with the state evening things out</b>: paying for services is not owning.</p>`},
  {h:'The workers themselves',
   b:`<p><b>What it is.</b> The text wants each business to be owned and run by the people who work in it, together, through councils, co-operatives or unions. There is no outside owner, and no state owner either.</p>
      <p><b>Example.</b> A union pamphlet says: "The bus company should belong to the drivers and the mechanics who keep it running. They would vote on the routes and share the profit."</p>
      <p><b>Sounds like.</b> "Worker co-operative." "Workers' councils." "Run by the people who do the work." "The workplace belongs to the workers." "Unions take over production."</p>
      <p><b>Catch it.</b> Do the people who work in a business own it and run it together? If yes, the answer to the second question is <b>The workers themselves</b>.</p>
      <p><b>What to do.</b> This answer leaves four names: Anarchism, Democratic socialism, Marxism and Market socialism. Unit Two sorts them.</p>
      <p><b>Don't confuse it with</b> staff owning a few shares in a company that private shareholders still control. That does not hand the business to its workers. Also not with <b>The state or the public</b>: here the state does not own anything, the workers do.</p>`},
  {h:'Private owners, with the state evening things out',
   b:`<p><b>What it is.</b> Owners keep their businesses, but the state takes a lot in tax, sets floors for wages and working conditions, and uses the money for public services and benefits, so that results are more even. Economists call this "redistribution". It changes who gets what, not who owns what.</p>
      <p><b>Example.</b> A party says: "Healthcare for everyone, paid through taxes. A wage floor no employer may go below. Strong benefits when someone loses a job. The firms stay private."</p>
      <p><b>Sounds like.</b> "Progressive taxes." "Minimum wage." "Free university." "Welfare state." "Safety net." "The market stays, but the state steps in."</p>
      <p><b>Catch it.</b> Does the text keep private owners, but ask the state to share out the results through taxes, wage rules and services? If yes, the answer to the second question is <b>Private owners, with the state evening things out</b>.</p>
      <p><b>What to do.</b> This answer leaves three names: Social democracy, Group equality and Market socialism. The first question has usually already narrowed these, so use it to check.</p>
      <p><b>Don't confuse it with</b> <b>Private owners, left alone</b>. There the text asks the state to stay out. Here it asks the state to do a lot. Also not with <b>The state or the public</b>: spending on services is not owning the businesses.</p>`},
  {h:'The text does not say',
   b:`<p><b>What it is.</b> The passage gives no answer about who should own or run businesses. Many texts, such as a speech about the nation, a sermon or a slogan, never mention it. In the key, this answer crosses no name off the list. The first question has to do the work, and the checks on each name's card do the rest.</p>
      <p><b>Example.</b> A short speech says: "Our country will be great again. Stand up, be proud, and we will rebuild our honour." There is not a word about business.</p>
      <p><b>Sounds like.</b> A text full of feelings, groups and enemies, with no word on business, trade, wages, taxes, nationalising or privatising.</p>
      <p><b>Catch it.</b> Is there any word in the text about who owns, runs, taxes or controls businesses? If you cannot point to one, the answer to the second question is <b>The text does not say</b>.</p>
      <p><b>What to do.</b> Give this answer without worry. It is correct, not lazy. Do not read an answer into a text because you think the speaker would probably want one.</p>
      <p><b>Don't confuse it with</b> <b>Private owners, left alone</b>. "Left alone" is a stated wish for the state to stay out. Silence is only silence.</p>`},
  {h:'The second question, side by side',
   b:`<p class="lead">Here is the second question with all six answers, in the key's exact words, and the names each answer leaves.</p>
      <p>The question is <b>Who should own the farms, factories, shops and banks?</b></p>
      <table class="k">
        <tr><th>Answer</th><th>Names left</th></tr>
        <tr><td><b>Private owners, left alone</b></td><td>Classical liberalism, Reactionary conservatism, Group equality, Populism with nothing attached</td></tr>
        <tr><td><b>Private owners, steered by the state</b></td><td>Fascism, Nazism, National populism</td></tr>
        <tr><td><b>The state or the public</b></td><td>Marxism–Leninism, Democratic socialism, Marxism</td></tr>
        <tr><td><b>The workers themselves</b></td><td>Anarchism, Democratic socialism, Marxism, Market socialism</td></tr>
        <tr><td><b>Private owners, with the state evening things out</b></td><td>Social democracy, Group equality, Market socialism</td></tr>
        <tr><td><b>The text does not say</b></td><td>No name is crossed off</td></tr>
      </table>
      <p>Read the two tables together. The first question gives a list. The second question crosses names off that list, and only the names that are on both lists stay. For example, "Workers against owners" leaves six names, and "Private owners, with the state evening things out" then keeps two of them: Social democracy and Market socialism. (Group equality is on the second list too, but the first question already crossed it off.)</p>
      <p>When the answer is "The text does not say", nothing is crossed off, so the first question's list stands as it is. If your two answers leave no names at all, you have misread one of them. Go back and check which answer you can point to words for.</p>`},
  {h:'Try the second question',
   b:`<p class="lead">Six short texts, one for each answer. Cover the answers underneath and decide for each one: who should own the farms, factories, shops and banks?</p>
      <ol>
        <li>"The ports should be run by the dockers' own committee, and by no one else."</li>
        <li>"Let the market alone. Stop licensing taxi drivers and let anyone compete."</li>
        <li>"We will tax large fortunes heavily and use the money for free dental care and a pay floor."</li>
        <li>"The national airline will stay in private hands, but its routes and prices will follow the government's plan for the country."</li>
        <li>"The whole coal industry will pass to the state."</li>
        <li>"This nation has been betrayed, and it is time to take it back."</li>
      </ol>
      <p><b>Answers.</b> 1: The workers themselves. 2: Private owners, left alone. 3: Private owners, with the state evening things out. 4: Private owners, steered by the state. 5: The state or the public. 6: The text does not say.</p>
      <p>If you missed one, reread that answer's card. The usual slip is number 3: taxes and public services are not ownership, so the owners stay private.</p>`},
  {h:'What else to check (not part of the key)',
   b:`<p class="lead">The key asks two questions. Sometimes they leave more than one name. This card gives three extra checks for when that happens. They are not part of the key. The key never asks them, and the drills and the full run score only the two key questions.</p>
      <p>Why are they left out of the key? Because a short text often does not say enough about them. When it does, they are very useful. When it does not, say so and stop at the names the key left.</p>
      <p><b>Check 1: What does the text say went wrong?</b> Every political text has a story about how things got bad. Owners take what workers make. The nation fell and must be reborn. The races are in a struggle. An old order was torn down. A corrupt few betrayed the people. The story often separates two names that give the same two answers.</p>
      <p><b>Check 2: What does the text want done with elections, courts and a free press?</b> Some texts want to use them and widen them. Some want to go beyond them. Some want to do away with them. Some want to protect them, or to bring back an older order that came before them. This check most often separates Fascism from National populism: one does away with the vote, the other works through it.</p>
      <p><b>Check 3: What is the goal at the end?</b> A society with no classes and no state. A nation reborn. A race on top. A free society with plenty of competition. A restored order. Or no fixed goal at all. This often separates names that talk in a similar way but want different endings.</p>
      <p><b>Example.</b> A speaker says: "The nation fell, and one leader will raise it again. Parliament only gets in his way." The first question gives <b>The nation</b> and the second gives <b>The text does not say</b>, so four names are left. Check 1 finds a fall and a rise. Check 2 finds parliament brushed aside. Together they point to Fascism and away from National populism, which keeps the vote.</p>
      <p><b>Catch it.</b> After the two questions, are there still several names left? If yes, you need a check. If only one is left, you do not.</p>
      <p><b>What to do.</b> Run the two key questions first and look at the names left. If more than one is left, use these three checks, and the check on each name's card in the units ahead, to choose. If the text gives you no answer to any of them, the honest result is the list of names left, not a guess.</p>
      <p><b>Don't confuse them with</b> the key's two questions. The key's questions always get an answer, even if that answer is "The text does not say". These three are extra: use them only to choose between names the key has left.</p>`},
  {h:'Two whole texts, run through the key',
   b:`<p class="lead">Here are two new texts, each walked through the two questions in order. The first narrows to one name. The second stops at three.</p>
      <p><b>Text A.</b> "Nobody should need a licence to cut hair, sell soup or hire a neighbour. People know their own business better than any official. Remove the rules and let people get on with it."</p>
      <ol>
        <li><b>First question: who or what does the text put first?</b> "Nobody should need a licence" and "people know their own business better than any official" start from the single person's freedom, against officials. The answer is <b>The individual</b>. One name is left: Classical liberalism.</li>
        <li><b>Second question: who should own the farms, factories, shops and banks?</b> Cutting hair, selling soup and hiring a neighbour are small businesses, and "remove the rules and let people get on with it" asks the state to stay out. The answer is <b>Private owners, left alone</b>. The name is still Classical liberalism.</li>
      </ol>
      <p>Result: Classical liberalism. There is nothing left to choose between, so there is nothing more to check.</p>
      <p><b>Text B.</b> "The people who built this plant have given thirty years to it, and the owners are shipping the machines abroad to save a few pounds. Public ownership of the plant would keep the jobs here."</p>
      <ol>
        <li><b>First question.</b> "The people who built this plant" are set against "the owners". The answer is <b>Workers against owners</b>. Six names are left.</li>
        <li><b>Second question.</b> "Public ownership of the plant" is a plain ownership answer: <b>The state or the public</b>. Three names are left: Marxism–Leninism, Democratic socialism and Marxism.</li>
      </ol>
      <p>Now stop and look. Does the text say how public ownership would come about? No. Does it explain profit as unpaid work built into the system? No. Does it say a party would rule for the workers? No. So the extra checks have nothing to work with. The honest result is: one of these three, and the text cannot settle it. What to do is ask the speaker one question: would you get there by winning elections, or by a party taking power?</p>`},
  ],
  drill:{kind:'pick', key:'unit'} },

{ tag:'Two', title:'The socialist family',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a text that puts workers against owners first and say which of six names it is.</p>
      <p>In Unit One you learned that the answer <b>Workers against owners</b> to the first question ("Who or what does the text put first?") leaves six names: Marxism, Marxism–Leninism, Democratic socialism, Social democracy, Anarchism and Market socialism. People call these the socialist family, because all six speak for working people against owners. All six give the same answer to the first question, so the first question cannot separate them. This unit is about what can.</p>
      <p>Two things separate them. The first is the second question: <b>Who should own the farms, factories, shops and banks?</b> The answers run from "Private owners, with the state evening things out" to "The workers themselves". The second is one check on each name's card, such as whether the text wants a ruling party, wants elections, or wants no state at all.</p>
      <p>Real life makes this harder than it should be. In everyday talk, "socialist" is used for all six, and also for plans that are none of them. Learn the six as six different things, and the word stops being confusing.</p>`},
  {h:'One bakery, six futures',
   b:`<p class="lead">Before the names, one picture. Go back to the bakery from Unit One: one owner, Dana, and eight bakers. Here is what six different texts that all put workers against owners would do with it.</p>
      <ul>
        <li><b>Leave Dana as the owner and even things out.</b> She keeps the bakery. The state taxes her profit heavily, sets a wage floor for her bakers, and pays for their pensions, healthcare and childcare. Nothing about who owns the bakery changes. This is Social democracy.</li>
        <li><b>Vote the bakery into public ownership.</b> Parliament passes a law. The bakery becomes publicly owned, Dana is paid fairly for it, and voters can judge the result at the next election. This is Democratic socialism.</li>
        <li><b>Have a party take it.</b> A party takes power in the name of the workers, and the state owns and runs the bakery under the party's direction. This is Marxism–Leninism.</li>
        <li><b>Let the bakers run it, with no state.</b> The eight bakers own it and run it through an assembly, in a town that also has no government above it. This is Anarchism.</li>
        <li><b>Let the bakers own it and compete.</b> The eight bakers own it together, but it still competes with the bakery down the road, sets its own prices and can fail. This is Market socialism.</li>
        <li><b>Explain the bakery's profit.</b> Dana pays each baker £80 a day. In a day a baker makes bread worth £128, once the flour and the oven's running costs are taken off. The £48 gap is Dana's profit. Marxists say it is built into the arrangement: even a kind owner would have to keep a gap like it. This is Marxism.</li>
      </ul>
      <p>The first five are plans: what to do with the bakery. The sixth is an explanation: why a bakery makes a profit at all. Marxism is the odd one out, and its card says why.</p>
      <p>You do not need to remember the names yet. Notice what the six futures answer: who ends up owning the bakery, and how do we get there? The next six cards take each name in turn.</p>`},
  {h:'Marxism',
   b:`<p><b>What it is.</b> Marxism is first of all an explanation of how a society works, written by Karl Marx in the 1800s. It says that in every society the people who own the land, the factories and the banks, and the people who have to work for them, are in a standing conflict, and that this conflict is what moves history.</p>
      <p>Its best-known idea is "surplus value", and the bakery shows it. A baker is paid £80 a day. In that day she makes bread worth £128, once flour and running costs are taken off. The owner keeps the £48 difference. Marxists say profit is that gap: work that was done but never paid for. They add that this is not because owners are cruel. Even a kind owner has to keep the gap to survive against competitors, so it is the system doing it, not the person. The cure, they say, is for the workers to take over the farms, factories and banks together, and the end is a society without classes and, in time, without a state or money. Marxism says more about what is wrong than about what to do on Monday: it is an explanation more than a programme.</p>
      <p><b>Example.</b> A pamphlet says: "A call-centre team earns the firm £400,000 in a month and is paid £250,000. The company calls the rest 'value created by the firm'. Who created it? The team did, and the arrangement is built to take it. This is not a scandal. It is how the system works."</p>
      <p><b>Sounds like.</b> "Class struggle." "Exploitation." "Surplus." "The owning class." "Capital." "It is the system, not one greedy boss."</p>
      <p><b>Catch it.</b> Does the text explain low pay or profit as a gap between what workers make and what they are paid, built into the system, with no villain needed? In the key: first question, <b>Workers against owners</b>. Second question: often <b>The text does not say</b>, because an explanation does not have to say who should own the businesses. If it does say, it is <b>The state or the public</b> or <b>The workers themselves</b>.</p>
      <p><b>What to do.</b> Name it Marxism when the text is explaining the system and offers no party, no election and no plan. If it adds a party that must lead, it is Marxism–Leninism.</p>
      <p><b>Don't confuse it with</b> Marxism–Leninism, which adds a party and a plan to the explanation. And not with every left-wing opinion: a high minimum wage or free healthcare is not Marxism. A text becomes Marxism when it explains the system through the fight between owners and workers.</p>`},
  {h:'Marxism–Leninism',
   b:`<p><b>What it is.</b> Marxism plus an answer to a question Marx left open: how do workers actually win? Lenin, who led the Russian revolution of 1917, argued that workers left to themselves will only fight for better pay inside the system. He called this "trade-union consciousness". So a small, disciplined party of full-time revolutionaries, called the "vanguard" (the ones out in front), must lead them.</p>
      <p>After the revolution, the party rules in the workers' name. Marx's phrase for that period was "the dictatorship of the proletariat", which meant rule by the working class. In practice it meant rule by the party. The state owns the farms, factories, shops and banks, there is one party, and inside it works "democratic centralism": members argue until the leadership decides, and then everyone must carry out the decision. People often call states run this way "communist". The Soviet Union is the best-known example.</p>
      <p><b>Example.</b> A party pamphlet says: "Strikes will win a pay rise and no more. For anything bigger the working class needs a staff of professional organisers who think ahead of the crowd, take the state, and keep it until the old owners are gone."</p>
      <p><b>Sounds like.</b> "The vanguard." "The leading role of the party." "Democratic centralism." "The dictatorship of the proletariat." "Iron discipline."</p>
      <p><b>Catch it.</b> Is it the party, not the workers themselves, that acts and decides? In the key: first question, <b>Workers against owners</b>. Second question: <b>The state or the public</b>.</p>
      <p><b>What to do.</b> Name it Marxism–Leninism when the text puts a party in charge on the workers' behalf. If the text says the party must also leave power when voters say so, it is not this.</p>
      <p><b>Don't confuse it with</b> Marxism (the explanation, which needs no party) and Democratic socialism (public ownership too, but won through elections that can be lost). Also not with Fascism: they share methods such as one-party rule, secret police and mass rallies, but they give opposite answers to both questions. Unit Four returns to this.</p>`},
  {h:'Democratic socialism',
   b:`<p><b>What it is.</b> Democratic socialists want the major industries, such as energy, railways and banks, to be owned by the public, and want to get there by winning elections inside a free, multi-party democracy. Parties can lose, the courts and the press stay free, and the change goes through the same laws as any other. They often also want workers to have a say in how companies are run. What marks them out is the pair: ownership really does change, and the vote decides it.</p>
      <p><b>Example.</b> A party leader says: "The water companies and the steelworks will belong to the public. We will win a mandate first, bring the change in through parliament, and accept it if voters send us out."</p>
      <p><b>Sounds like.</b> "Public ownership." "By democratic means." "Through parliament." "The ballot box." "Common ownership of the big industries."</p>
      <p><b>Catch it.</b> Does the text want industries owned by the public (or by workers), and want to get there by winning elections? In the key: first question, <b>Workers against owners</b>. Second question: <b>The state or the public</b> (or <b>The workers themselves</b>).</p>
      <p><b>What to do.</b> Name it Democratic socialism when ownership is to change and elections are the way. Be careful with the label itself: in everyday talk, many people who call themselves democratic socialists want what this course calls Social democracy. Go by the second question, not by what the speaker calls themselves.</p>
      <p><b>Don't confuse it with</b> Social democracy, which keeps private owners and only taxes and spends. The difference is the second question: does the text change who owns the businesses? Also not with Marxism–Leninism, where a party rules and elections are not a way of losing power.</p>`},
  {h:'Social democracy',
   b:`<p><b>What it is.</b> Social democrats keep a market economy with private owners. They use taxes and rules to build a generous welfare state, strong unions and workers' rights, so that ordinary people are protected from the ups and downs of the market. The idea grew out of the socialist movement, which is why it still speaks for working people. It gave up the demand to take over the businesses. The Nordic countries are the usual example.</p>
      <p><b>Example.</b> A party platform says: "A year of paid leave for new parents, a doctor you do not pay at the door, pensions you can live on, a wage floor and the right to bargain together. Business stays private and pays its share."</p>
      <p><b>Sounds like.</b> "The welfare state." "The safety net." "Universal healthcare." "Progressive taxes." "Workers' rights." "A mixed economy."</p>
      <p><b>Catch it.</b> Does the text keep businesses in private hands while asking the state to even things out through taxes, wage rules and services? In the key: first question, <b>Workers against owners</b>. Second question: <b>Private owners, with the state evening things out</b>.</p>
      <p><b>What to do.</b> Name it Social democracy when the owners stay private and the plan is taxes, rules and services. If the text takes industries into public ownership, the second answer changes and so does the name.</p>
      <p><b>Don't confuse it with</b> Democratic socialism, which does change who owns the businesses. In everyday American talk, what this course calls Social democracy is often called "socialism", and whether it counts as socialism is a real argument: by ownership it does not, by fairer results it might. This course goes by ownership, because that is what the second question can check.</p>`},
  {h:'Anarchism (libertarian socialism)',
   b:`<p><b>What it is.</b> Anarchists want workplaces owned and run by the people who work in them, through councils, communes or unions, and they want no state at all. They are against both the boss and the ruler. They do not want chaos. They want an orderly society organised from below, by free groups that agree things among themselves. The version built on unions is called syndicalism, and the whole tradition is also called libertarian socialism.</p>
      <p><b>Example.</b> A zine says: "The bakery should belong to its bakers, and the town should be run by open meetings, not by a council or a capital city. We want rules we make together, not rulers."</p>
      <p><b>Sounds like.</b> "No masters, no rulers." "Abolish the state." "Mutual aid." "Direct democracy." "Workers' self-management."</p>
      <p><b>Catch it.</b> Does the text want workers to own and run things and also want to get rid of the state, now rather than later? In the key: first question, <b>Workers against owners</b>. Second question: <b>The workers themselves</b>.</p>
      <p><b>What to do.</b> Name it Anarchism when the text refuses to use the state at all, not even for a while.</p>
      <p><b>Don't confuse it with</b> Marxism. Marxists also hope for a stateless society in the end, but they use a state to get there. Anarchists refuse that route, and the route is what the check looks at. Also not with the everyday meaning of "anarchy", which is disorder.</p>`},
  {h:'Market socialism',
   b:`<p><b>What it is.</b> Market socialists want businesses to belong to their workers (or to the public), but still want those businesses to compete with each other for customers, set prices, and win or fail, in a real market. The aim is socialist ownership without a central office planning everything. The best-known real case is Yugoslavia, which for decades ran worker-managed firms in a market. Some versions also pay every citizen a share of the profits.</p>
      <p><b>Example.</b> A co-operative's founders say: "We are twelve owners and no bosses. We vote on pay, but we sell at the market price, and if our bread is worse than the next shop's, we go out of business."</p>
      <p><b>Sounds like.</b> "Worker-owned and competing." "Co-ops in a market." "Socialism without central planning." "A share of the profits for every citizen."</p>
      <p><b>Catch it.</b> Does the text change who owns the firms while keeping real markets, with firms competing and able to fail? In the key: first question, <b>Workers against owners</b>. Second question: <b>The workers themselves</b>. (The key also lists it under <b>Private owners, with the state evening things out</b>, for versions that pay everyone a share of the profits.)</p>
      <p><b>What to do.</b> Name it Market socialism when workers (or the public) own the firms and the firms still compete in a market. If the text says workers own the firms and says nothing about markets, you cannot yet tell it from Anarchism, Democratic socialism or Marxism. Use the check on each of their cards.</p>
      <p><b>Don't confuse it with</b> Social democracy, where owners stay private and only the taxes and services change. Also not with Anarchism: both can have workers owning firms, but Anarchism is marked by having no state, and Market socialism is marked by firms competing in a market.</p>`},
  {h:'The six, side by side',
   b:`<p class="lead">Here are the six names with the second-question answer each gives, in the key's exact words, and the one check that separates it from the others. All six give <b>Workers against owners</b> to the first question.</p>
      <table class="k">
        <tr><th>Name</th><th>Second question</th><th>The check</th></tr>
        <tr><td><b>Marxism</b></td><td>The text does not say</td><td>Explains profit as unpaid work built into the system. No party, no plan.</td></tr>
        <tr><td><b>Marxism–Leninism</b></td><td>The state or the public</td><td>A party leads and decides for the workers.</td></tr>
        <tr><td><b>Democratic socialism</b></td><td>The state or the public</td><td>Ownership changes by winning elections.</td></tr>
        <tr><td><b>Social democracy</b></td><td>Private owners, with the state evening things out</td><td>Owners stay. Taxes, wage floors, services.</td></tr>
        <tr><td><b>Anarchism</b></td><td>The workers themselves</td><td>No state at all, from the start.</td></tr>
        <tr><td><b>Market socialism</b></td><td>The workers themselves</td><td>The firms still compete in a real market.</td></tr>
      </table>
      <p>Some names can also give other second answers: Marxism gives "The state or the public" or "The workers themselves" when the text says who should own the businesses, Democratic socialism can give "The workers themselves", and Market socialism can give "Private owners, with the state evening things out". The middle column shows the usual one.</p>
      <p><b>How to use it.</b> Ask these in order of how easy they are to spot:</p>
      <ul>
        <li>Do the owners stay private, with taxes and services doing the work? Social democracy.</li>
        <li>Does a party rule on the workers' behalf? Marxism–Leninism.</li>
        <li>Does the text want no state at all? Anarchism.</li>
        <li>Do worker-owned firms compete in a market? Market socialism.</li>
        <li>Is public ownership to be won at the ballot box? Democratic socialism.</li>
        <li>Is it only an explanation of why profit exists? Marxism.</li>
      </ul>`},
  {h:'A worked example',
   b:`<p class="lead">A new text, walked through the key in order, ending in a name.</p>
      <p><b>The text.</b> "The ferry crews do the work and the shareholders take the profit. Bring the company into public ownership by act of parliament, pay the shareholders fairly, and let voters judge us at the next election."</p>
      <ol>
        <li><b>First question: who or what does the text put first?</b> "The ferry crews do the work and the shareholders take the profit" sets people who work for wages against the people who own the company. The answer is <b>Workers against owners</b>. Six names are left: the whole socialist family.</li>
        <li><b>Second question: who should own the farms, factories, shops and banks?</b> "Bring the company into public ownership" is a plain ownership answer: <b>The state or the public</b>. Three names are left: Marxism–Leninism, Democratic socialism and Marxism.</li>
        <li><b>The check.</b> "By act of parliament" and "let voters judge us at the next election" put the change inside elections. A party that rules for the workers and does not offer to be judged is Marxism–Leninism, and a text that only explains the system is Marxism. This text has a plan and puts it to the voters, so the name is <b>Democratic socialism</b>.</li>
      </ol>
      <p>Change one thing and the name changes. If the last sentence read "the party will run the ferries until the owners are gone", the first two answers would stay the same and the check would give Marxism–Leninism. If the text kept the shareholders and only taxed the company more, the second answer would be "Private owners, with the state evening things out" and the name would be Social democracy.</p>`},
  ],
  drill:{kind:'pick', key:'soc'} },

{ tag:'Three', title:'Fascism and its look-alikes',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a text that puts the nation first and say whether it is Fascism, Nazism, National populism or Reactionary conservatism, or only a dictatorship with no belief to name.</p>
      <p>In Unit One you saw that the answer <b>The nation</b> to the first question ("Who or what does the text put first?") leaves four names: Fascism, Nazism, National populism and Reactionary conservatism. A fifth case turns up often in real life: a text that describes only how a country is ruled, with no belief the key can answer. That is a dictatorship. It is taught here too, because it is the thing people most often call fascist by mistake.</p>
      <p>"Fascist" is the most overused word on the list. Used loosely it means "authoritarian and unpleasant", which makes it useless. Used precisely it points at a specific thing. This unit teaches the precise use, and the names that sit next to it.</p>
      <p>The two key questions get you most of the way. The first gives "The nation" or, for Nazism, "One race ranked above the others". The second ("Who should own the farms, factories, shops and banks?") gives "Private owners, steered by the state" or "The text does not say". That still leaves several names, so this unit leans on the three extra checks from Unit One: what does the text say went wrong, what does it want done with elections, courts and a free press, and what is the goal at the end?</p>`},
  {h:'Fascism',
   b:`<p><b>What it is.</b> Fascism is a movement that puts the nation first and says the nation is sick, humiliated or decadent and can be reborn through unity, discipline and struggle under one leader. It treats the nation as a single body with one will, and the individual as there to serve it. It rejects both liberalism (elections, free debate, individual rights) and Marxism (class struggle, which it replaces with national unity). And it expects everyone to take an active part in the national project, not just to obey.</p>
      <p>That is a lot of parts, and no single part is enough on its own. A text that loves its country is not fascist. A text that bans elections is not necessarily fascist. It is the combination, around the story of a nation that must be reborn, that makes it fascism. The next card shows how to look for that combination.</p>
      <p><b>Example.</b> A broadcast says: "Our grandfathers built something great, and we have let it rot. The ballot box gave us weakness. Put your son in the youth corps, put your faith in the leader who is the nation's will, and together we make the country new."</p>
      <p><b>Sounds like.</b> "National rebirth." "Decadence." "The people have one will." "The leader speaks for the nation." "Parliament is a talking shop." "Unity." "Purify."</p>
      <p><b>Catch it.</b> Does the text want the nation reborn through one leader and active struggle, and reject both elections and class struggle? In the key: first question, <b>The nation</b>. Second question: <b>Private owners, steered by the state</b>, or <b>The text does not say</b>.</p>
      <p><b>What to do.</b> Treat the cluster as the test, not a single word. Say "fascist" only when several marks from the next card appear together. Otherwise name what the text does support: Reactionary conservatism, National populism, or just a dictatorship.</p>
      <p><b>Don't confuse it with</b> the look-alikes in this unit, which each share one or two of its marks. The next cards take them in turn.</p>`},
  {h:'How fascism shows up: look for a cluster',
   b:`<p class="lead">Fascism is recognised by a cluster of marks, not by one. Here they are in four groups, each with a line of how it sounds.</p>
      <p><b>What it is.</b> A mark is one feature that fascist texts tend to have. A cluster is several marks that turn up together. One mark can belong to many beliefs, so it proves little. Several marks together, built around the story of a nation to be reborn, are what make a text fascist.</p>
      <p><b>Example.</b> A rally speaker says: "We were great, and the weak men in parliament let us rot. The leader already knows what you want, so why vote? Join the marches." That is a story of fall and rebirth, a leader who is the people's will, and everyone taking part: marks from three of the four groups below. A speaker who only says "Join the march on Saturday" has one mark, and one mark is not a cluster.</p>
      <p><b>Sounds like.</b> Each group below has lines in quotation marks, the way that mark would sound in a speech.</p>
      <p><b>1. What it says about the nation.</b></p>
      <ul>
        <li>A story of fall and rebirth: "We were great, we were betrayed, we will rise again." The golden past is usually partly invented.</li>
        <li>The nation as one body with one will: "There is no me, only us, and us has one voice."</li>
        <li>Enemies who are both weak and mighty: "They are contemptible, and they are about to swallow us."</li>
      </ul>
      <p><b>2. How it treats elections and opponents.</b></p>
      <ul>
        <li>The leader claims to be the people's will: "Why vote? He already knows what you want." This is not the same as praising a ruler. It is a claim that elections and parliament are unnecessary because the leader is the nation's will.</li>
        <li>Hostility to both liberals and Marxists: "Individual rights are a luxury, and class struggle is a foreign poison." Class struggle is replaced with national unity.</li>
        <li>Violence as a cure: "Struggle purifies. Debate is weakness." Street violence on its own proves nothing, because groups of every belief use it. It counts when it comes with the story of decay and rebirth and the brushing aside of elections.</li>
      </ul>
      <p><b>3. How it organises people.</b></p>
      <ul>
        <li>Everyone must take part: youth corps, marches, uniforms, service. Obedience is not enough, because the nation wants you to join in. Rallies and uniforms prove nothing on their own, since many regimes use them. They count when they serve the first two groups.</li>
        <li>War and conquest as proof of vitality: "A strong nation expands."</li>
      </ul>
      <p><b>4. The economy.</b></p>
      <ul>
        <li>"Corporatism": owners keep their businesses, but state-run bodies of employers and workers replace independent unions, and all must serve national goals. This is the key's answer "Private owners, steered by the state".</li>
      </ul>
      <p><b>How many are enough?</b> There is no fixed count, because short texts rarely show them all. Look at the names the key left and ask which one the marks fit best. Marks from groups 1 and 2 together are the strongest sign: a story of national decay or rebirth, plus a brushing aside of elections, opponents or class struggle. A text with one lone mark is a look-alike.</p>
      <p><b>Catch it.</b> Can I point to words for marks in at least the first two groups: a story of national decay and rebirth, and elections or opponents brushed aside? If yes, the text may be Fascism. If not, it is a look-alike.</p>
      <p><b>What to do.</b> Read the text once for each of the four groups and ask whether you can point to words for it. Say "fascist" only when you can point to marks from at least the first two groups. If you can point to only one mark, name the look-alike the next cards describe, or say that the text cannot settle it.</p>
      <p><b>Don't confuse it with</b> a checklist you score. The marks are clues to read together, and the key's two questions still come first.</p>`},
  {h:'Just a dictatorship (authoritarianism)',
   b:`<p><b>What it is.</b> A way of ruling, called authoritarianism: one person or a small group holds power without real elections or limits. It is a method, not a belief. A dictatorship can be on the left, on the right, or have no belief at all. The usual tools are censorship, a secret police, banned parties, torture, show trials and a cult around the ruler, and almost every dictatorship has most of them. "Totalitarian" describes a dictatorship that tries to control every part of life. That is a matter of degree, and it is still not a belief.</p>
      <p><b>Example.</b> A colonel takes power in a coup. The radio stations are taken over, the courts answer to him, and an official notice says the ruling council will govern "for as long as the situation requires". No speech mentions a creed or a plan for the country.</p>
      <p><b>Sounds like.</b> "Order comes first." "Emergency powers." "Parties are suspended." "The ruler knows best."</p>
      <p><b>Catch it.</b> Apart from how it rules, can I point to anything the text believes: a nation to be reborn, a class, a race, a faith? If I cannot, there is no answer to give to the key. The name is <b>Just a dictatorship (authoritarianism)</b>.</p>
      <p><b>What to do.</b> Describe the method ("a dictatorship") and do not pin a belief on it. If the same people later publish a programme, run the two questions on that.</p>
      <p><b>Don't confuse it with</b> Fascism. Fascism is a belief that is usually run as a dictatorship, and it demands that people take an active part in a national rebirth. A plain dictator wants power and quiet. Also, praise of the ruler is not the same as the leader being the people's will. A cult says "he is wonderful". Fascism says "he is the nation's will, so elections are pointless".</p>`},
  {h:'Nazism',
   b:`<p><b>What it is.</b> Nazism was German fascism under Hitler from 1933 to 1945. In this key it names fascism where race, not just the nation, comes first: people are sorted by birth into higher and lower races, the "pure" race must rule, and hatred of Jews is used to explain everything that has gone wrong. It led to mass murder, including the Holocaust. All Nazism is fascist. Not all fascism is Nazi.</p>
      <p><b>Example.</b> A school poster reads: "Every child of the master race has a duty to the blood. Keep it clean. Those of lower stock are to serve, and then be set aside."</p>
      <p><b>Sounds like.</b> "Racial purity." "Inferior races." "The master race." "Our blood." "Parasites."</p>
      <p><b>Catch it.</b> Does the text rank people by race and say the "pure" one must rule, with the others removed or put beneath it? In the key: first question, <b>One race ranked above the others</b>. Second question: <b>Private owners, steered by the state</b>, or <b>The text does not say</b>.</p>
      <p><b>What to do.</b> When the first answer is "One race ranked above the others", the key leaves Nazism and Fascism. Name Nazism when the ranking of races is the centre of the text and the whole story is about blood and purity. Name Fascism when the story is mainly about the nation's rebirth and a leader, and race comes in only in passing.</p>
      <p><b>Don't confuse it with</b> Group equality. Both talk about race, in opposite directions. Nazism ranks races and wants the "higher" one on top. Group equality says no group should be higher and that unfair systems hold some groups back. Also not with Fascism in general, which puts the nation, not the race, first.</p>`},
  {h:'Reactionary conservatism',
   b:`<p><b>What it is.</b> The text wants to bring back an older order that it says was wrongly torn down: the king, the church's authority, fixed ranks in society, the family as the basic unit. "Reactionary" means reacting against modern change and wanting to roll it back. It is not ordinary conservatism, which prefers slow change and accepts elections and a free press. In everyday talk "reactionary" is an insult. In this course it is only a label for what the text wants.</p>
      <p><b>Example.</b> A bishop writes: "Parliaments and party politics have made us weak. We must restore the throne, the bishops and the old ranks of society, and teach people their duties again."</p>
      <p><b>Sounds like.</b> "Restoration." "Throne and altar." "The divine order." "Know your place." "The good old order."</p>
      <p><b>Catch it.</b> Does the text want to put an old order of faith and rank back, rather than build something new? In the key: first question, <b>Tradition and faith</b> (or <b>The nation</b>, when the text wraps the old order in the nation). Second question: usually <b>The text does not say</b>.</p>
      <p><b>What to do.</b> Name it Reactionary conservatism when the goal is to bring back, not to create. Words like "restore" and "bring back" are a strong sign.</p>
      <p><b>Don't confuse it with</b> Fascism. Fascism wants to create something new through a mass movement, and it will smash old elites to do it. Reactionary conservatism wants the old elites back and is wary of mass movements and strong men. Also not with the ordinary conservative who accepts elections, slow change and a free press.</p>`},
  {h:'National populism',
   b:`<p><b>What it is.</b> The text says the real people and the nation have been sold out by an elite that looks abroad (global finance, foreign bodies, unelected officials, courts, the media), and promises to take back control: of borders, of culture, and of industry, with the state steering businesses toward national goals. It works through elections. It wants to win them, not abolish them. Compared with Fascism, four things are missing: no story of national rebirth, no leader who replaces elections, no paramilitary mobilisation, and no cult of purifying violence.</p>
      <p><b>Example.</b> A campaign leaflet says: "Rule by officials nobody elected, in distant bodies, has cost us our industries. We will steer investment to our own towns, control who comes in, and ask the voters for a mandate to do it."</p>
      <p><b>Sounds like.</b> "Take back control." "Sovereignty." "Globalists." "Our culture." "The establishment." "Protect our industry." These phrases alone are not enough: a bare "take the country back", with nothing about borders, culture or industry, is only a slogan.</p>
      <p><b>Catch it.</b> Does the text blame an elite for betraying the nation, want the state to steer industry and borders, and still work through elections? In the key: first question, <b>Ordinary people against an elite</b> (or <b>The nation</b>). Second question: <b>Private owners, steered by the state</b>.</p>
      <p><b>What to do.</b> Name it National populism when the elite-blaming meets the nation and the vote stays. Check for fascism's marks. If the text rejects elections or promises national rebirth through struggle, the name changes.</p>
      <p><b>Don't confuse it with</b> Fascism, which does away with the vote and wants a reborn nation under one leader. Also not with Populism with nothing attached, which has the elite-blaming but nothing else: no story of the nation and no plan for business. Unit Four takes that up.</p>`},
  {h:'The names side by side',
   b:`<p class="lead">Here are the four names that "The nation" leaves, and the case with no belief at all, with the first-question answer each gives, in the key's exact words, and the one check that tells it apart.</p>
      <table class="k">
        <tr><th>Name</th><th>First question</th><th>The check</th></tr>
        <tr><td><b>Fascism</b></td><td>The nation</td><td>A nation to be reborn through one leader; no elections, no class struggle.</td></tr>
        <tr><td><b>Nazism</b></td><td>One race ranked above the others</td><td>People ranked by blood; purity is the centre.</td></tr>
        <tr><td><b>Reactionary conservatism</b></td><td>Tradition and faith (or The nation)</td><td>An old order of faith and rank put back, not something new.</td></tr>
        <tr><td><b>National populism</b></td><td>Ordinary people against an elite (or The nation)</td><td>An elite blamed and industry steered, but the vote stays.</td></tr>
        <tr><td><b>Just a dictatorship (authoritarianism)</b></td><td>Nothing to point to</td><td>Only methods of rule. No belief.</td></tr>
      </table>
      <p><b>How to use it.</b> When the key leaves more than one of these, ask in this order:</p>
      <ol>
        <li>Does the text rank people by race, with blood and purity at the centre? Then it is Nazism.</li>
        <li>Does it want an old order of faith and rank brought back? Then it is Reactionary conservatism.</li>
        <li>Does it keep elections and work through them? Then it is National populism.</li>
        <li>Does it want a nation reborn under one leader, with no elections and no class struggle? Then it is Fascism.</li>
        <li>Does it say nothing about belief at all, only how the country is ruled? Then it is Just a dictatorship (authoritarianism).</li>
      </ol>
      <p>Numbers 2, 3 and 4 in that list use the three extra checks from Unit One: what does the text say went wrong, what does it want done with elections, courts and a free press, and what is the goal at the end?</p>`},
  {h:'"But the Nazis were socialists"',
   b:`<p class="lead">This is the most common challenge to what you have just learned, and the key answers it.</p>
      <p><b>What it is.</b> The claim is that the Nazi party's full name had "socialist" in it, so Nazism must be socialism. It is a good test of the method, because you answer it with the two questions and not with the name.</p>
      <p><b>Example.</b> Someone says: "National Socialist German Workers' Party. It's right there in the name."</p>
      <p><b>Sounds like.</b> "Their own name proves it." "They were socialists, not right-wing."</p>
      <p><b>Catch it.</b> Run the two questions on what the regime said and did. First question: Nazism puts <b>One race ranked above the others</b> first, and it set race against class, treating Marxism as its mortal enemy. Second question: owners kept their businesses under state direction, so the answer is <b>Private owners, steered by the state</b>. The regime sold off some state-owned firms in the 1930s, banned independent trade unions and crushed the workers' parties. That is not social ownership.</p>
      <p><b>What to do.</b> Treat the name as a label aimed at working-class voters, and answer the two questions.</p>
      <p><b>Don't confuse it with</b> a real argument about definitions. A party's name is marketing. It is the same reason "Democratic People's Republic" in a state's name tells you nothing about whether the state is democratic. Check the answers, never the label.</p>`},
  {h:'A worked example',
   b:`<p class="lead">A new text, walked through the key in order, ending in a name.</p>
      <p><b>The text.</b> "We were a proud people. Then the weak men in parliament, and the foreigners they let in, broke us. One man can mend that. He does not argue, he acts, and he is the will of everyone here. Parents, give us your children for the youth corps. Factory owners, you keep your factories, but you will build what the nation needs, and the old trade unions are finished."</p>
      <ol>
        <li><b>First question: who or what does the text put first?</b> "A proud people", "the foreigners", "the will of everyone here": the text speaks for the nation as one body. The answer is <b>The nation</b>. Four names are left.</li>
        <li><b>Second question: who should own the farms, factories, shops and banks?</b> "You keep your factories, but you will build what the nation needs" is owners keeping their businesses under orders. The answer is <b>Private owners, steered by the state</b>. Three names are left: Fascism, Nazism and National populism.</li>
        <li><b>The checks.</b> Does it rank people by race? No, so it is not Nazism. Does it keep elections? "The weak men in parliament" are blamed and "he is the will of everyone here" makes a vote pointless, so it is not National populism. What went wrong, and what is the fix? "We were a proud people... broke us. One man can mend that": a fall and a rebirth. Add the youth corps (everyone takes part) and "the old trade unions are finished" (state-run bodies instead). The name is <b>Fascism</b>.</li>
      </ol>
      <p>Change one thing and the name changes. If the last lines were "let the voters decide in March, and we will accept the result", the vote would stay and the name would be National populism.</p>`},
  ],
  drill:{kind:'pick', key:'fasc'} },

{ tag:'Four', title:'The other names, and words that mislead',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can name the last three names on the list, avoid four common mistakes in how political words are used, and answer an insult with the two questions.</p>
      <p>Three names are left: Classical liberalism, Populism with nothing attached, and Group equality. Each gets a card, and each is easy to mix up with something you already know. Classical liberalism sounds like what Americans call "liberal". Populism with nothing attached sounds like National populism. Group equality shares a noun, race, with Nazism.</p>
      <p>The rest of the unit is about words that mislead. "Nationalism", "statism" and the "horseshoe" idea are used all the time as if they were names from the key. They are not. They describe a feeling, a size and a shape. Knowing that stops you from using them to call something fascist or socialist.</p>
      <p>The drill for this unit is thirteen faulty claims, each one a mistake you will hear. For each, work out what is wrong before the explanation is shown. The explanation says which question of the key the claim skipped: "Who or what does the text put first?" or "Who should own the farms, factories, shops and banks?"</p>`},
  {h:'Classical liberalism',
   b:`<p><b>What it is.</b> Classical liberalism is the original liberalism of the 1700s and 1800s. It holds that each person has rights, to speak, to worship, to own property and to trade, and that the state's job is limited: protect those rights, keep the peace, enforce contracts and defend the country. Markets work best when left alone. "Classical" means the older version. Its living relatives are usually called libertarians or market liberals.</p>
      <p>Be careful with the word "liberal". In the United States it now usually means centre-left, closer to Social democracy or Group equality. That is a different thing. In this course, "Classical liberalism" always means the old view that puts the individual first.</p>
      <p><b>Example.</b> A columnist writes: "Let people keep what they earn, say what they think and trade with whom they like. A state that spends its time protecting those freedoms has done enough."</p>
      <p><b>Sounds like.</b> "Individual rights." "Free trade." "Limited government." "The rule of law." "Personal responsibility." "Free speech."</p>
      <p><b>Catch it.</b> Does the text put the single person's freedom first and want the state kept small? In the key: first question, <b>The individual</b>. Second question: <b>Private owners, left alone</b>.</p>
      <p><b>What to do.</b> Name it Classical liberalism when the person comes first and the state is kept to a few jobs. A mention of defending the borders does not make it nationalist: protecting people from outside force is one of the state's few jobs here.</p>
      <p><b>Don't confuse it with</b> the American "liberal", who usually wants the state to do more, not less. Also not with Reactionary conservatism, which puts order and tradition above the individual's choice, and not with Fascism, which puts the nation above the individual.</p>`},
  {h:'Populism with nothing attached (thin populism)',
   b:`<p><b>What it is.</b> Populism is the idea that society is split between "the real people" and "a corrupt elite", and that politics should do what the people want. It is called "thin" because that is all it says. It says nothing about who should own the businesses, what the nation is, or what the goal is. To say more, it has to attach to a fuller set of beliefs. Political scientists call that fuller set its "host".</p>
      <p>The same thin core can attach to different hosts. Add the nation, borders and a state that steers industry, and it becomes National populism. Add a split between owners and workers and public ownership of the big firms, and the first answer changes to "Workers against owners", so the text is on the socialist side, for instance Democratic socialism. When a text has only the people-against-the-elite line, you cannot tell which way it will go. The honest name is Populism with nothing attached.</p>
      <p><b>Example.</b> A radio caller says: "They live in big houses and ignore us. The politicians and the press are all in it together. It is time to give the country back to ordinary people."</p>
      <p><b>Sounds like.</b> "The real people." "The system is rigged." "Career politicians." "They don't care about you." "Give it back to the people."</p>
      <p><b>Catch it.</b> Besides blaming an elite, is there anything attached: a story of the nation, a plan for businesses, a group other than "the people"? A bare slogan such as "take the country back", with nothing about borders, culture or industry, is not an attachment. If there is nothing attached, the name is <b>Populism with nothing attached</b>. In the key: first question, <b>Ordinary people against an elite</b>. Second question: <b>The text does not say</b>.</p>
      <p><b>What to do.</b> Say "this is populism, and it does not yet say what kind". Then ask the speaker three things. Who counts as the people? Who is the elite? What would you do about who owns the businesses? Run the key again on the answers.</p>
      <p><b>Don't confuse it with</b> National populism, which adds the nation and a state that steers industry. Also not with a vague speech that merely criticises politicians: populism needs the split between a good majority and a corrupt few.</p>`},
  {h:'Group equality (identity-egalitarianism)',
   b:`<p><b>What it is.</b> The text says groups defined by things like race, gender or disability are held back by rules and habits that look neutral but produce unequal results. It wants institutions to find and remove those barriers actively, and to share out resources until results across groups are fair. Writers separate "equality" (the same treatment for everyone) from "equity" (treatment that aims at fair results), and say equality alone leaves the gaps where they are. Its focus is on how institutions treat groups, and it mostly leaves the question of who owns the businesses alone.</p>
      <p>The longer name is "identity-egalitarianism". People also call it "identity politics", usually as criticism. Scholars disagree about where the idea comes from, and the key does not need you to settle that.</p>
      <p><b>Example.</b> A speaker says: "Look at who gets promoted, who gets stopped by the police and who waits longest for treatment. The rules say everyone is treated the same, yet the results differ by group every time. Treating everyone the same leaves the gaps where they are. The institutions have to change."</p>
      <p><b>Sounds like.</b> "Systemic." "Structural." "Disparities." "Equity." "Privilege." "Colour-blindness is not enough." "Underrepresented."</p>
      <p><b>Catch it.</b> Are groups defined by identity, held back by systems, with the fix being to change those systems? In the key: first question, <b>Groups held back by unfair systems</b>. Second question: <b>Private owners, with the state evening things out</b>, or <b>The text does not say</b> when the text is only about how institutions treat groups.</p>
      <p><b>What to do.</b> Name it Group equality when the text points the way described above. Check the direction first: if the text places one group above the others, it is Nazism.</p>
      <p><b>Don't confuse it with</b> Nazism (the same noun, race, but the opposite direction), Marxism (which explains things through owners and workers, where here the problem is how institutions treat groups) and Classical liberalism (which says treating everyone the same is enough, where Group equality says it is not).</p>`},
  {h:'The three side by side',
   b:`<p class="lead">Here are the three names with the answers they give to both questions, in the key's exact words.</p>
      <table class="k">
        <tr><th>Name</th><th>First question</th><th>Second question</th></tr>
        <tr><td><b>Classical liberalism</b></td><td>The individual</td><td>Private owners, left alone</td></tr>
        <tr><td><b>Populism with nothing attached</b></td><td>Ordinary people against an elite</td><td>The text does not say</td></tr>
        <tr><td><b>Group equality</b></td><td>Groups held back by unfair systems</td><td>Private owners, with the state evening things out (or The text does not say)</td></tr>
      </table>
      <p>Two of the three are settled by the first question alone: "The individual" leaves only Classical liberalism, and "Groups held back by unfair systems" leaves only Group equality. Populism with nothing attached needs a check, because "Ordinary people against an elite" leaves two names. The check is: is anything attached? If the text has a story of the nation and wants the state to steer industry, it is National populism. If it has nothing more, it is Populism with nothing attached.</p>
      <p>Two warnings. First, Group equality and Nazism share the noun race but sit at opposite answers to the first question. Second, Classical liberalism and the American "liberal" share a word and give opposite second answers: one wants private owners left alone, the other usually wants the state to do more.</p>`},
  {h:'Nationalism',
   b:`<p><b>What it is.</b> Nationalism is putting your nation's interests first: loving it, wanting it strong and governing itself. Most countries have plenty of it. It is a stance or a feeling, not a full set of beliefs, so it is not a name the key can lead to.</p>
      <p><b>Example.</b> A voter wants fewer people coming in and the national team to win. A trade unionist wants tariffs to protect local jobs. Both are putting the nation first, and neither has said anything about a leader, an old order or a rebirth.</p>
      <p><b>Sounds like.</b> "Our country first." "The national interest." "Protect our jobs." "Sovereignty."</p>
      <p><b>Catch it.</b> Does the text only put the nation's interests first? Or does it also tell a story of rebirth, make the leader the nation's will and reject elections? Nationalism alone gives only the first answer in the key: <b>The nation</b>.</p>
      <p><b>What to do.</b> Do not name Fascism on nationalism alone. Four names sit under "The nation", and Unit Three is about what else must be there.</p>
      <p><b>Don't confuse it with</b> Fascism (nationalism plus much more) and National populism (nationalism plus blaming an elite and working through elections).</p>`},
  {h:'Statism',
   b:`<p><b>What it is.</b> Statism means a big, active state: more laws, more spending, more control. It is a dial from less to more, not a belief about what the state is for. A state can be big for any purpose: war, welfare, public ownership, spying.</p>
      <p><b>Example.</b> A city council that runs the buses, the rubbish collection, the swimming pools and the care homes is a big state. That tells you almost nothing about what the councillors believe.</p>
      <p><b>Sounds like.</b> "Big government." "The nanny state." "State control."</p>
      <p><b>Catch it.</b> How much does the state do? That tells you the size, not the belief. To find the belief, ask the two questions: who or what does the text put first, and who should own the farms, factories, shops and banks?</p>
      <p><b>What to do.</b> Do not use "statist" or "big government" as if it were a name from the key. Ask what the state would own or direct, and for whom.</p>
      <p><b>Don't confuse it with</b> Fascism and Marxism–Leninism, which both have big states and give opposite answers to both questions. Also not with Social democracy, which has big public services but leaves the owners private.</p>`},
  {h:'The horseshoe mistake',
   b:`<p><b>What it is.</b> The "horseshoe" idea imagines the left-to-right line bent into a horseshoe, so that the far left and the far right end up almost touching. The claim is that the extremes are basically the same. The mistake is grouping them by shared methods (one-party rule, a secret police, mass rallies, violence) instead of by what they say. On the two questions of the key they give opposite answers.</p>
      <p><b>Example.</b> The Soviet Union and Nazi Germany both had one-party rule, a secret police and mass rallies. On the first question, one put workers against owners and the other put one race ranked above the others. On the second, one said the state or the public should own the businesses, and the other left them with private owners steered by the state. Similar methods, opposite answers.</p>
      <p><b>Sounds like.</b> "Both extremes are the same." "Left and right are two sides of the same coin."</p>
      <p><b>Catch it.</b> Is the comparison based on how they behaved, or on their answers to the two questions?</p>
      <p><b>What to do.</b> Say what the comparison does show: both regimes used terror and denied their people a say. Then say what it does not show: that their beliefs were alike.</p>
      <p><b>Don't confuse it with</b> a fair comparison of methods. Noticing that two regimes were both murderous is a moral and historical observation. It is not a classification of what they believed.</p>`},
  {h:'When a name is used as an insult',
   b:`<p class="lead">Most of these names are used far more often as insults than as descriptions. This card is about what to do when that happens.</p>
      <p><b>What it is.</b> A name used as an insult is a label thrown to condemn: "that policy is fascist", "she is a socialist", "he is a globalist". The label does the arguing and the claim is never tested. Describing what a text says and attacking it are different jobs, and the key is only for the first.</p>
      <p><b>Example.</b> A headline says: "Mayor's bus-lane plan is communism." The plan asks drivers to leave one lane free for buses. Nothing in it mentions who owns the buses.</p>
      <p><b>Sounds like.</b> "That's just socialism." "You're basically a fascist." "Typical globalist." Said with no reasons after it.</p>
      <p><b>Catch it.</b> Is the name given together with an answer to the two questions, or is it standing alone? If there is no answer to either question, it is an insult, not an analysis.</p>
      <p><b>What to do.</b> Ask the two questions back, politely. "Who or what do you say the text puts first?" and "Who do you say should own the farms, factories, shops and banks in it?" If the person can answer, you now have something to discuss. If they cannot, the label was only a punch. This works for words that are not in the key too: ask the same two questions of the text behind the word.</p>
      <p><b>Don't confuse it with</b> a fair criticism that happens to be harsh. "That plan would take the railways into public ownership, and I think it would fail" is an analysis, even if you disagree. "That's communism" is not.</p>`},
  {h:'A worked example',
   b:`<p class="lead">A new text, walked through the key in order, ending in a name, and a name you should not give.</p>
      <p><b>The text.</b> "Those at the top have never worked a day with their hands. They sit in their offices and take us for fools. The people know better, and the people should decide."</p>
      <ol>
        <li><b>First question: who or what does the text put first?</b> "Those at the top" are set against "us" and "the people". A good majority stands against a few at the top. The answer is <b>Ordinary people against an elite</b>. Two names are left: National populism and Populism with nothing attached.</li>
        <li><b>Second question: who should own the farms, factories, shops and banks?</b> There is not a word about businesses, so the answer is <b>The text does not say</b>. Both names are still left.</li>
        <li><b>The check: is anything attached?</b> Is there a story of the nation, a word about borders or culture, or a state steering industry? No. Is there a split between owners and workers, or public ownership? No. Nothing is attached, so the name is <b>Populism with nothing attached</b>.</li>
      </ol>
      <p>The tempting wrong names are National populism and a socialist name. Neither has anything in the text to point to. If the speaker added "protect our borders and make the big companies put the country first", the second answer would become "Private owners, steered by the state" and the name would be National populism. Until then, the honest answer is that this is populism and it has not yet said what kind.</p>`},
  ],
  drill:{kind:'err'} },

{ tag:'Five', title:'Running the key',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take any short political text and run the whole key: answer the first question, answer the second, read what is left, use a check to choose, and say plainly when the text cannot settle it.</p>
      <p>Everything so far taught one part at a time. Unit One gave you the two questions. Units Two, Three and Four gave you the names and the check on each one. Now you run all of it together on texts you have not seen.</p>
      <p>The drill after this unit has fifteen cases. Each is a short passage. You answer the first question, then the second, then name it. Above the questions you will see a list of names. It is a readout, not a control: it crosses off the names your answers have ruled out, so you can watch the key narrow things down.</p>
      <p>Each step on the screen has a short code in front of its question. Ignore the code. The first step always asks the first question and the second step always asks the second, in the same words you have learned. The last step is naming the text.</p>
      <p>The first question is <b>Who or what does the text put first?</b> The second is <b>Who should own the farms, factories, shops and banks?</b> The next cards go through them once more with the traps that real texts set, then show what to do with the names that are left.</p>`},
  {h:'Step 1: the first question, with the traps',
   b:`<p><b>What it is.</b> Real texts are not tidy. A word that points one way in a textbook can point the other way in a speech, so the first question has to be answered from what the whole text is built around, not from one word.</p>
      <p><b>Example.</b> Two small texts with a trap in each. First: "Our nurses deserve a pay rise, bargained with their employers." The word "our" does not make this about the nation: it is about people who work for wages and the people who employ them, so the answer is "Workers against owners". Second: "Class war is a lie told to divide us. We are one people." The word "class" appears, but only to deny it, and "one people" is what the text is built around, so the answer is "The nation".</p>
      <p><b>Looks like.</b> One word that can point two ways: "workers", "country", "people", "race". Each of these can belong to more than one answer.</p>
      <p><b>Catch it.</b> Ask yourself who the hero and who the villain are, and what the text calls each of them. Then ask what the text does with the word you are unsure of. Does it build on it or argue against it?</p>
      <p><b>What to do.</b> Pick the answer you can point words to, and name those words to yourself. If two answers both fit, pick the one the text leans on most. A few cases honestly fit two, and the key accepts either for those: "Ordinary people against an elite" and "The nation" are the usual pair for the first question.</p>
      <p><b>Don't confuse it with</b> the first word you notice. The answer belongs to the whole text, not to one word in it.</p>`},
  {h:'Step 2: the second question, and when silence is the answer',
   b:`<p><b>What it is.</b> The second question asks who should own the farms, factories, shops and banks. Most real texts do not answer it. When they do, they say so in words about owning, running, steering, taxing or taking over businesses.</p>
      <p><b>Example.</b> Three short texts. "Our country will rise again": no word on business, so the answer is "The text does not say". "No more permits for market stalls: let people trade": the state is asked to stay out, so "Private owners, left alone". "Tax the biggest incomes and pay for free school meals": owners stay, the state evens things out, so "Private owners, with the state evening things out".</p>
      <p><b>Looks like.</b> A text that describes how things are ("profit is built into the system") without saying who should own anything also gets "The text does not say". An explanation is not an ownership answer.</p>
      <p><b>Catch it.</b> Can I point to a word about owning, running, steering, taxing or taking over businesses? If yes, match it to one of the six answers. If no, the answer is "The text does not say".</p>
      <p><b>What to do.</b> Give "The text does not say" without worry when it is true. It crosses no names off, which is fine: the first question and the checks do the work. Do not guess what the speaker would probably want.</p>
      <p><b>Don't confuse it with</b> "Private owners, left alone", which needs a stated wish for the state to stay out, and with "Private owners, with the state evening things out", which needs a stated wish for taxes, wage floors or services. Silence is neither.</p>`},
  {h:'Step 3: what is left, and the check that decides',
   b:`<p class="lead">After the two questions, read the names that are left. If one is left, you are done. If several are left, use the check for that group.</p>
      <table class="k">
        <tr><th>Names left</th><th>The check that decides</th></tr>
        <tr><td>Marxism–Leninism, Democratic socialism, Marxism</td><td>A party rules for the workers: Marxism–Leninism. Public ownership won by elections: Democratic socialism. Only an explanation of the system: Marxism.</td></tr>
        <tr><td>Anarchism, Democratic socialism, Marxism, Market socialism</td><td>No state at all: Anarchism. Ownership won by elections: Democratic socialism. Workers' firms competing in a market: Market socialism. Only an explanation: Marxism.</td></tr>
        <tr><td>Social democracy, Market socialism</td><td>Owners stay private: Social democracy. Firms owned by their workers and competing: Market socialism.</td></tr>
        <tr><td>Fascism, Nazism</td><td>Blood and race ranking at the centre: Nazism. The nation's rebirth under one leader: Fascism.</td></tr>
        <tr><td>Fascism, Nazism, National populism</td><td>Race ranked: Nazism. Elections kept: National populism. Elections brushed aside and a nation to be reborn: Fascism.</td></tr>
        <tr><td>Fascism, Nazism, National populism, Reactionary conservatism</td><td>The three above, plus: an old order brought back, not something new: Reactionary conservatism.</td></tr>
        <tr><td>National populism, Populism with nothing attached</td><td>Is anything attached: a story of the nation, a state steering industry? National populism. Nothing attached: Populism with nothing attached.</td></tr>
        <tr><td>Any one name</td><td>Nothing more to check.</td></tr>
      </table>
      <p>When the second answer is "The text does not say", nothing is crossed off. That is why six socialist names can stay on the readout after both questions, and why four names can stay under "The nation". The check on the right is then what decides.</p>
      <p>Those checks are the three extra checks from Unit One in use: what the text says went wrong, what it wants done with elections, courts and a free press, and what the goal at the end is.</p>`},
  {h:'When the text cannot settle it',
   b:`<p><b>What it is.</b> Sometimes the honest result is not one name. A short text can leave several names and give you nothing to choose between them. Saying so is a correct answer, and it is a skill, not a failure.</p>
      <p><b>Example.</b> "The railways have been run for shareholders for thirty years, and the fares only go up. The drivers and the cleaners deserve better, and public ownership would give it to them." After the two questions three names are left: Marxism–Leninism, Democratic socialism and Marxism. The text does not say how public ownership would come about, so nothing in it can choose between them. The honest result is the list of three, and the question you would ask the speaker: would you get there by winning elections, or by a party taking power?</p>
      <p><b>Looks like.</b> The readout still shows several names after both questions, and when you look for the check that would decide, there is no word in the text to point to.</p>
      <p><b>Catch it.</b> Can I point to words in the text for the check that would decide it? If I cannot, I should stop and say what is left.</p>
      <p><b>What to do.</b> Say which names are left and what one question would settle it. In the drill, you still tap one name, so tap the one the text supports best. One case in the drill expects the most cautious name the key has: <b>Populism with nothing attached</b>, for a text that has only the people-against-the-elite line.</p>
      <p><b>Don't confuse it with</b> guessing, and with giving up. Stopping at the names left is a result. A guess is naming a belief the text never showed.</p>`},
  {h:'How the drill scores you',
   b:`<p><b>What it is.</b> The full run scores two things separately: your <b>name</b> and your <b>route</b>. The route is your answers to the two questions.</p>
      <p><b>Example.</b> You read a passage about faith, the crown and the old ranks of society, and you answer the first question with "The nation" and the second with "The text does not say". You name it Reactionary conservatism. The name is right, but the key wanted "Tradition and faith" for the first question, so the name is counted and the route is marked as a miss.</p>
      <p><b>Catch it.</b> A right name reached by the wrong answers is counted as a miss on the route. The reason is that a name you cannot reach through the questions will not survive a text you have not seen before. Some cases accept two answers to one question when both fit honestly, for example "Ordinary people against an elite" or "The nation" for the first question, or "Private owners, with the state evening things out" or "The text does not say" for the second. Either one counts there.</p>
      <p><b>What to do.</b> Watch the readout. If it ever shows no names left at all, you have misread one of your two answers: tap "Change" beside that step and answer it again. If it shows more than one, use the check for that group from the table in the Step 3 card. After you record your answer, the explanation walks the key in order: the first question, then the second, then what decided the name. Read it even when you were right.</p>
      <p><b>Don't confuse it with</b> being marked wrong on the name. A missed route does not take away a right name. It tells you that the name was reached by a path the key does not support, which is the part worth fixing.</p>`},
  {h:'A whole case, start to finish',
   b:`<p class="lead">One more text, with the readout shown at each step. This one has a trap in the first question.</p>
      <p><b>The text.</b> "The country was built on faith and the family. Lately the old courts and the old customs have been called backward, and the result is a country that no longer knows what it is. We would put the church back where it stood, honour the old rules of rank and duty, and ask for nothing more than to be allowed to live as our fathers did."</p>
      <ol>
        <li><b>First question: who or what does the text put first?</b> "The country" appears, which tempts "The nation". But what the text is built around is "faith and the family", "the church", "the old rules of rank and duty" and "our fathers". The answer is <b>Tradition and faith</b>. The readout shows one name: Reactionary conservatism.</li>
        <li><b>Second question: who should own the farms, factories, shops and banks?</b> There is no word about businesses, so the answer is <b>The text does not say</b>. The readout does not change: still Reactionary conservatism.</li>
        <li><b>Name it.</b> One name is left, so no further check is needed. It is also the right one: "put the church back where it stood" and "live as our fathers did" ask for an old order to be brought back, not for something new.</li>
      </ol>
      <p>Suppose you had answered the first question with "The nation". The readout would show four names: Fascism, Nazism, National populism and Reactionary conservatism. Then the check for that group decides it: no ranking of races, no elections to win, no leader who is the nation's will, and an old order brought back. You would still reach the right name, but through a less accurate first answer. That is why the first answer should come from what the whole text is built around, and not from one word in it.</p>`},
  {h:'Using the key on your own reading',
   b:`<p class="lead">The key is for reading, not for labelling people. Here is how to use it on a speech, a leaflet or an editorial of your own.</p>
      <p><b>What it is.</b> The same steps as the drill, on a paragraph you pick.</p>
      <ol>
        <li>Choose two or three sentences that carry the main point. Not the whole article.</li>
        <li>Underline "we" and "they". Who is the hero and who is the villain?</li>
        <li>Answer the first question and name the words that told you.</li>
        <li>Look for any word on owning, running, taxing or taking over businesses. If there is none, answer "The text does not say".</li>
        <li>Read the names left. Run the check for that group from the table.</li>
        <li>Write down the name, and write down what you cannot tell.</li>
      </ol>
      <p><b>Example.</b> A newspaper column says the "elite" has let the country down. You underline "elite" and "ordinary people", answer "Ordinary people against an elite", find no word on business, and get two names: National populism and Populism with nothing attached. Nothing else is attached, so you write "Populism with nothing attached, and I cannot tell more from this column".</p>
      <p><b>Catch it.</b> Last, ask what you are naming. You are naming the text in front of you, not the person who wrote it, the party they belong to or everything they have ever said.</p>
      <p><b>What to do.</b> Treat the result as a reading of one text. People and parties say different things in different places, and informed people read the same words differently. The key tells you which questions to ask. It does not hand you verdicts on living parties. Where it stops is on the reference screen under "Where this key stops".</p>
      <p><b>Don't confuse it with</b> a way to win an argument. If someone has used a name as an insult, ask them the two questions. If you use the key to throw a name back, you are doing the same thing.</p>`},
  ],
  drill:{kind:'det'} }
];

const IDEOLOGY = {
  id:'ideology', name:'Political Ideologies', rev:1,
  blurb:'Tell what a political text stands for by asking it two plain questions: who or what it puts first, and who should own the farms, factories, shops and banks.',
  topics:'The two questions · The socialist family · Fascism and its look-alikes · The other names · Running the key',
  intro:'Run each passage through the two questions, in order, before you name it. A right name reached by the wrong answers is scored as a miss.',
  outcomes: IDEOLOGY_OUTCOMES,
  determination: { gateCode:null, steps:[
    {code:'Q2', label:'Who or what does the text put first?', options:IDEOLOGY_UNITS},
    {code:'Q1', label:'Who should own the farms, factories, shops and banks?', options:IDEOLOGY_OWNERSHIP}
  ], stepsByGate:null },
  determinationIntro:`<p>You are running each passage through a key with two questions. Answer them in order, then name the passage last.</p>
      <ol>
        <li>Read the passage.</li>
        <li><b>Step 1.</b> Who or what does the text put first? Tap the answer.</li>
        <li><b>Step 2.</b> Who should own the farms, factories, shops and banks? Tap the answer. If the passage says nothing about it, tap <i>The text does not say</i>. That is a real answer, not a skip.</li>
        <li><b>Step 3.</b> Name it. After two questions more than one name is often left, so use what else to check from Unit One to choose.</li>
      </ol>
      <p>The list between the passage and step 1 is a readout, not a control. It crosses off the names your answers have ruled out. Nothing there can be tapped.</p>
      <p>Your name and your answers to the two questions are scored separately. A right name reached by the wrong answers counts as a miss.</p>`,
  falsLabel:'What would make it a different name',
  specimens: IDEOLOGY_SPECIMENS,
  quickDrills: [
    {key:'unit', title:'The first question', prompt:'Who or what does the text put first?', items:D_UNIT, opts:D_UNIT_OPTS},
    {key:'soc', title:'The socialist family', prompt:'Which name fits?', items:D_SOC, opts:D_SOC_OPTS},
    {key:'fasc', title:'Fascism and look-alikes', prompt:'Which name fits?', items:D_FASC, opts:D_FASC_OPTS}
  ],
  errDrill: IDEOLOGY_ERR,
  course: IDEOLOGY_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Run the key'},
    {key:'unit', label:'First question'}, {key:'soc', label:'Socialist family'}, {key:'fasc', label:'Fascism and look-alikes'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Historians disagree about fascism.</b> Some use the word only for Europe between the two world wars. Others use it more widely. This course uses a cluster of marks (a nation to be reborn, one leader who is the people’s will, no elections, no class struggle, businesses steered by the state) as a working rule, not a final answer.</li>
    <li><b>Whether Social democracy counts as socialism is disputed.</b> If you define socialism by who owns the businesses, it does not. If you define it by fairer results, it does. This course goes by ownership, because that is what the second question can check.</li>
    <li><b>“Liberal” means different things.</b> In the United States it usually means centre-left. Classical liberalism is the older view that puts the individual first. Check the answers to the two questions, not the word.</li>
    <li><b>These names are also used as insults.</b> In an argument, “fascist” or “socialist” is usually thrown to condemn. Describing what a text says and attacking it are different jobs.</li>
    <li><b>The key does not give verdicts on living parties.</b> It tells you which questions to ask of a text. Informed people reach different conclusions about the same party, and a party’s words, its record and its leaders do not always agree.</li>
    <li><b>Some systems are only lightly covered:</b> governments run by religious authorities, rule by experts, and political traditions outside Europe and North America. The two questions still apply, but they may need other answers, such as a faith, a civilisation or expertise.</li>
    <li><b>Two questions are not always enough.</b> They narrow the list and often leave more than one name. The three extra checks in Unit One (what went wrong, what to do with elections, what the end goal is) and the check on each name’s card do the rest, and sometimes a short text simply cannot settle it.</li>
  </ul>`
};

FC.legacy('ideology', IDEOLOGY);
