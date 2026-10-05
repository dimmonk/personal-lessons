/* ===================== SUBJECT: PSYCHOLOGICAL PATTERNS ===================== */

// One vocabulary. The names below, the key's questions and answers, the card text, the drill options and the
// feedback all use these exact words. The five names in the reasoning group match key.js (Unit Two).
const PSYCH_OUTCOMES = [
  {id:'dissonance', n:'Cognitive dissonance reduction',   group:'reasoning'},
  {id:'confbias',   n:'Confirmation bias',                 group:'reasoning'},
  {id:'motivated',  n:'Motivated reasoning',               group:'reasoning'},
  {id:'sunkcost',   n:'Sunk cost fallacy',                 group:'reasoning'},
  {id:'revision',   n:'Fair reasoning',                    group:'reasoning'},
  {id:'gaslight',   n:'Gaslighting',                       group:'tactic'},
  {id:'darvo',      n:'Turning the blame around (DARVO)',  group:'tactic'},
  {id:'lovebomb',   n:'Love-bombing, then pulling back',   group:'tactic'},
  {id:'projection', n:'Pinning your own feeling on someone else (projection)', group:'tactic'},
  {id:'notactic',   n:'Not a tactic',                      group:'tactic'},
  {id:'narc_grand', n:'Outward narcissism (grandiose)',    group:'pattern'},
  {id:'narc_vuln',  n:'Inward narcissism (vulnerable)',    group:'pattern'},
  {id:'bpd',        n:'Fear of being left (borderline)',   group:'pattern'},
  {id:'hpd',        n:'Need to be noticed (histrionic)',   group:'pattern'},
  {id:'aspd',       n:'Disregard for others (antisocial, psychopathy)', group:'pattern'},
  {id:'traits',     n:'Not enough for a disorder',         group:'pattern'}
];

const PSYCH_GATE = { code:'D1', label:'What kind of thing is this?', options:[
  { id:'reasoning', n:'One person’s reasoning', sub:'how one person reaches, defends or changes a view or a choice of their own', keeps:['dissonance','confbias','motivated','sunkcost','revision'] },
  { id:'tactic',    n:'A move between people',  sub:'something one person does to another in their dealings with each other',   keeps:['gaslight','darvo','lovebomb','projection','notactic'] },
  { id:'pattern',   n:'A lasting way someone is', sub:'how a person is across years, places and relationships, or a label that claims it', keeps:['narc_grand','narc_vuln','bpd','hpd','aspd','traits'] }
]};

const PSYCH_STEPS_BY_GATE = {
  reasoning: [
    { code:'R1', label:'What does the reasoning start from?', options:[
        {id:'before',   n:'An answer already chosen, before any search began',                    keeps:['motivated']},
        {id:'after',    n:'Something already done, spent or believed, that the person is protecting', keeps:['dissonance','confbias','sunkcost']},
        {id:'evidence', n:'The facts, whichever way they point',                                    keeps:['revision']}
    ]},
    { code:'R2', label:'What does the reasoning do?', options:[
        {id:'addstory', n:'Adds a reason why what they did is fine after all',                   keeps:['dissonance']},
        {id:'scrutiny', n:'Tests evidence against their view harder than evidence for it',       keeps:['confbias']},
        {id:'backward', n:'Gives what is already spent as the reason to keep going',             keeps:['sunkcost']},
        {id:'updates',  n:'Gives every fact the same test, and goes where the facts point',      keeps:['revision']},
        {id:'fixed',    n:'Chooses the answer first, then searches for support',                 keeps:['motivated']}
    ]}
  ],
  tactic: [
    { code:'T1', label:'What is the move doing to the other person?', options:[
        {id:'denyreality',      n:'Making them doubt their own memory or perception, again and again',            keeps:['gaslight']},
        {id:'denyattackreverse',n:'Denying it, attacking whoever raised it, and making themselves the victim',    keeps:['darvo']},
        {id:'idealizewithdraw', n:'Showering them with praise and attention, then pulling back or criticising',   keeps:['lovebomb']},
        {id:'ownfeeling',       n:'Accusing them of a feeling or fault that is really the accuser’s own',         keeps:['projection']},
        {id:'singlemoment',     n:'A single defensive reply, slip or disagreement, with nothing bigger behind it',                   keeps:['notactic']}
    ]},
    { code:'T2', label:'How much of it is there?', options:[
        {id:'pattern',     n:'More than one reaction: it repeats, builds, or comes in connected parts', keeps:['gaslight','darvo','lovebomb','projection']},
        {id:'oneinstance', n:'One reaction on its own',                                                 keeps:['notactic']}
    ]}
  ],
  pattern: [
    { code:'P1', label:'What does the person most fear, or most need?', options:[
        {id:'shame_out',   n:'Fear of not being special, covered up by acting superior',                    keeps:['narc_grand']},
        {id:'shame_in',    n:'The same fear of not being special, shown as hurt and quiet resentment',      keeps:['narc_vuln']},
        {id:'abandonment', n:'Fear of being left',                                                          keeps:['bpd']},
        {id:'attention',   n:'Need to be noticed: to be the centre of attention',                           keeps:['hpd']},
        {id:'norule',      n:'No fear to speak of: rules and other people’s claims carry little weight',   keeps:['aspd']},
        {id:'normal',      n:'None of these stands out: ordinary behaviour, or a reaction to stress',                   keeps:['traits']}
    ]},
    { code:'P2', label:'What does the person do when something goes against them?', options:[
        {id:'rage',          n:'Anger or contempt toward whoever they blame',                               keeps:['narc_grand']},
        {id:'withdraw',      n:'Hurt withdrawal, quiet resentment, self-pity',                              keeps:['narc_vuln']},
        {id:'panic',         n:'Panic, frantic attempts to put it right, or suddenly running the other person down', keeps:['bpd']},
        {id:'dramatic',      n:'Bigger and bigger displays, aimed at an audience',                          keeps:['hpd']},
        {id:'flat',          n:'Calm and unbothered: no upset, and uses it for their own ends',             keeps:['aspd']},
        {id:'proportionate', n:'An ordinary reaction, the kind most people have now and then',              keeps:['traits']}
    ]}
  ]
};

const U1_OPTS = ['One person’s reasoning','A move between people','A lasting way someone is','None of these: an ordinary reaction'];
const U1_DRILL = [
  {q:'Ines had her heart set on a tattoo of her ex’s name. A week before the appointment they broke up. “It’s not about him anymore,” she tells herself. “It’s about the date. I’m still getting it.”',
   a:'One person’s reasoning', w:'The question that decides it is “What kind of thing is this?” The give-away is “she tells herself”: Ines is explaining a choice of her own and nobody else is being worked on. It is not a lasting way someone is, because one week of one choice shows nothing about years.'},
  {q:'A man tells his girlfriend of three weeks that she is the most amazing person he has ever met, and that he wants her to move in. Two months later she says she needs a weekend with her sister. He says: “I thought you were different. I guess I was wrong about you.”',
   a:'A move between people', w:'The question that decides it is “What kind of thing is this?” The words are for her: first praise, then disappointment when she asks for a weekend. That is something one person does to another, so the key’s answer is A move between people. It is not a lasting way someone is, because two months and one relationship are not enough to count.'},
  {q:'In every team Mei has joined in fifteen years, she has ended up in a long cold war with one colleague, whom she describes as “out to get me”. She has told the same story about three bosses, two flatmates and her sister, and has not spoken to any of them since.',
   a:'A lasting way someone is', w:'The question that decides it is “What kind of thing is this?” Count: fifteen years, three bosses, two flatmates, a sister. The case shows how a person is across years, places and relationships. Each retelling could be reasoning on its own, but the case is about the repeat.'},
  {q:'Joel started as a classroom assistant last week. He snapped at a pupil on Tuesday and again on Thursday, and said sorry to the child both times. His baby daughter has been in hospital since Monday.',
   a:'None of these: an ordinary reaction', w:'The question that decides it is “What kind of thing is this?” There is a real cause (“in hospital since Monday”), the reaction fits it (two snaps, both apologised for), and it is one week. Nothing here to name. It is not a lasting way someone is, because one week with a cause is a moment. Snapping at a child is not working on what the child remembers or believes, so it is not a move between people either.'},
  {q:'Marcus has told his team that the new scheduling software will save them hours. A month in, the team says it takes longer. In his notebook Marcus writes three reasons why they are wrong: not enough training, not enough time, and two of them were against it from the start.',
   a:'One person’s reasoning', w:'The question that decides it is “What kind of thing is this?” “In his notebook” is the give-away. Marcus is defending a view of his own, that the software saves time, and nobody is on the receiving end of what he writes. With no one else being worked on, it is not a move between people.'},
  {q:'Whenever Priyanka mentions that her husband forgot something he promised, he says: “I never promised that. You’re remembering it wrong again.” Last week she wrote it down so she could check, and he told her she was getting paranoid.',
   a:'A move between people', w:'The question that decides it is “What kind of thing is this?” “You’re remembering it wrong” lands on her memory, and “paranoid” lands on how she sees herself. That is something one person does to another. Which move it is comes later, in Unit Five.'},
  {q:'After a car accident on Saturday, Lucas has been jumpy all week. He flinched when a colleague dropped a folder, and he snapped at his sister for being late.',
   a:'None of these: an ordinary reaction', w:'The question that decides it is “What kind of thing is this?” A real cause (“the accident on Saturday”), a reaction that fits it (jumpy, short-tempered for a week), and nothing to suggest it will not pass. If it were still there a year later, with no new cause, you would ask the question again.'},
  {q:'Zainab is choosing between two job offers. She felt sure about the first from the first phone call. She then spends a week reading everything she can find, and tells her partner: “I’ve really looked into it, and it’s the right one.” Her search history has four articles about the first company and none about the second.',
   a:'One person’s reasoning', w:'The question that decides it is “What kind of thing is this?” The give-away is the search history: four articles about one company and none about the other. The case shows how one person backs up a choice of her own. She says it to her partner, but the words are about her own choice, not about her partner’s memory or feelings.'},
  {q:'Callum’s family say he has always been the centre of attention. At school he was the loudest in the room. At work he turns every meeting into a performance. At weddings he gets upset if anyone else is toasted. He is fifty.',
   a:'A lasting way someone is', w:'The question that decides it is “What kind of thing is this?” School, work, weddings and fifty years: the case shows how a person is across years, places and relationships. Nothing in it is a single moment.'},
  {q:'A neighbour is told that his dog has been digging up the shared garden. “It wasn’t my dog.” Then: “You’re one to talk, your bins have blocked the path for months.” At the next residents’ meeting he says he has been “singled out and harassed”, and asks everyone how long he has had to put up with it.',
   a:'A move between people', w:'The question that decides it is “What kind of thing is this?” The words are aimed at other people: a denial, then an attack on whoever raised it, then a request that the residents see him as the one wronged. That is something one person does to others, so the answer is A move between people.'},
  {q:'Amara always said she would never leave her home city. After a second visit to the new office, she spends an evening writing down what the move would cost and what it would bring, phones two people who made the same move, and tells her friend: “I was wrong about what I’d miss. I’m going.”',
   a:'One person’s reasoning', w:'The question that decides it is “What kind of thing is this?” She is reaching a choice of her own and changing her mind, and nobody is being worked on. Reasoning does not mean bad reasoning: the kind is the same whether it is fair or not. Unit Two is where fair and unfair reasoning are told apart.'},
  {q:'At the team lunch, Priyam talked about her promotion for ten minutes. In the team chat afterwards, a colleague wrote: “Classic narcissist.”',
   a:'A lasting way someone is', w:'The question that decides it is “What kind of thing is this?” The telling detail is “Classic narcissist”: a label, and a label is a claim about how a person is across years, places and relationships. The key puts labels here and then checks them. The case itself shows ten minutes at one lunch, so the claim is far bigger than the evidence. Unit Three shows how to check it.'}
];

const U3_OPTS = ['Outward narcissism (grandiose)','Inward narcissism (vulnerable)','Not enough for a disorder'];
const U3_DRILL = [
  {q:'Marta has captained her village quiz team for six years and mentions the trophy cabinet at every pub night. When the team lost the final on a question she had answered too fast, she said: “My fault, I rushed it,” and bought the next round.',
   a:'Not enough for a disorder', w:'The question that decides it is “What does the person do when something goes against them?” The telling detail is “My fault, I rushed it”: she owns the loss instead of blaming anyone, and buys the round. Mentioning the trophies is ordinary pride. Nothing in the case shows a fear of not being special, so the answer to “What does the person most fear, or most need?” is None of these stands out: ordinary behaviour, or a reaction to stress. The name is Not enough for a disorder.'},
  {q:'At the firm’s awards dinner, Stefan tells the table he built the team single-handedly. When a colleague’s name is read out for the prize he expected, he says loudly that the judges “wouldn’t know good work if it hit them”, and tells the junior beside him to stop clapping. He has been like this in every job since he was twenty-five.',
   a:'Outward narcissism (grandiose)', w:'The question that decides it is “What does the person do when something goes against them?” The prize goes to someone else, and he turns contempt on whoever he blames: the judges “wouldn’t know good work”, and the junior must “stop clapping”. That is Anger or contempt toward whoever they blame. Behind it is a fear of not being special, covered up by acting superior: “built the team single-handedly”. “Every job since he was twenty-five” shows it lasts. Both questions lead to Outward narcissism (grandiose).'},
  {q:'Dolores never complains and never asks for anything. In forty years of family gatherings she has never congratulated a relative on good news. She goes quiet, and later tells her daughter: “It’s always the same people who get noticed.” She stopped speaking to her brother after he was thanked in a speech and she was not.',
   a:'Inward narcissism (vulnerable)', w:'The question is “What does the person most fear, or most need?” There is no showing off, but the tally is there: “always the same people who get noticed”. It is the same fear of not being special, shown as hurt and quiet resentment. When something goes against her she withdraws: she stopped speaking to her brother. Forty years makes it lasting.'},
  {q:'In his first week as a trainee chef, Kofi snapped at a colleague who corrected his knife work. At the end of the shift he apologised and asked for another pointer.',
   a:'Not enough for a disorder', w:'“First week” and “apologised” decide it. What does the person do when something goes against them? Something most people do now and then: a short snap, then an apology and a request for help. One moment with an apology is not a lasting way. Not enough for a disorder.'},
  {q:'“That friend of yours is such a narcissist,” says Beth. “She put up photos of her new flat.” Nobody in the conversation has seen her friend do anything else.',
   a:'Not enough for a disorder', w:'The question that decides it is “What does the person most fear, or most need?” and it cannot be answered from this: the case shows no fear, no reaction to criticism and no sign of how she treats anyone. It is a label on one set of photos, and a claim as big as “narcissist” needs years, places and people. The answer is None of these stands out: ordinary behaviour, or a reaction to stress, so Not enough for a disorder.'},
  {q:'A consultant, Shreya, has been told by four clients over six years that she “takes over the room”. When one client suggested her report needed a rewrite, she called him “unqualified”, left him off the invitation list for the next meeting, and told a colleague: “It’s a privilege for them to work with someone like me.”',
   a:'Outward narcissism (grandiose)', w:'“What does the person most fear, or most need?” The give-away is “It’s a privilege for them to work with someone like me”: acting superior, over a fear of not being special that shows in how she takes a request for a rewrite. “What does the person do when something goes against them?” She turns contempt on the client she blames (“unqualified”) and cuts him out. Six years and four clients show it lasts. Outward narcissism (grandiose).'},
  {q:'Three weeks after being laid off, Hugo has started telling everyone about his old job title and how the company “will regret it”. A year ago he was known as someone who always asked about other people.',
   a:'Not enough for a disorder', w:'The case gives a real cause (“laid off”), a short time (“three weeks”) and a contrast with how he used to be. A lasting way is the same across years and places. This is behaviour under stress, so the answer to “What does the person most fear, or most need?” is None of these stands out: ordinary behaviour, or a reaction to stress.'},
  {q:'Maura teaches music. Whenever a colleague is praised, she says “that’s lovely” and then stops sitting with them at lunch. She has done it with six colleagues in four schools, and says to her husband: “They’ve never once noticed what I put into this.” She has never said a word to any of them.',
   a:'Inward narcissism (vulnerable)', w:'“What does the person most fear, or most need?” “They’ve never once noticed what I put into this” is the hurt behind a fear of not being special, and “never said a word” is the quiet: the same fear of not being special, shown as hurt and quiet resentment. When something goes against her (someone else is praised) she withdraws and stops sitting with them. Six colleagues in four schools make it lasting. Inward narcissism (vulnerable).'},
  {q:'Dev tells everyone he is the best programmer in the office, and most people agree he usually is. He names whoever helped in every review. When his own code was criticised in a review, he rewrote it that afternoon and thanked the reviewer.',
   a:'Not enough for a disorder', w:'One trait, being sure of his own skill, and nothing else. The question that decides it is “What does the person do when something goes against them?” The telling detail is that he rewrote the code and thanked the reviewer: his regard for others holds when he is criticised. The answer is An ordinary reaction, the kind most people have now and then, so the name is Not enough for a disorder.'},
  {q:'Gideon, a head chef, tells new staff he is “the best in the city” and that they are lucky to be in his kitchen. When a food critic gave his restaurant three stars instead of four, he told the press the critic “has no palate” and stopped his sous-chef from taking holidays, saying the kitchen “let him down”. Two former restaurants say much the same.',
   a:'Outward narcissism (grandiose)', w:'The question is “What does the person most fear, or most need?” Telling staff they are lucky is acting superior, and the way he takes three stars instead of four shows the fear of not being special underneath. When something goes against him he blames: the critic has “no palate” and the kitchen “let him down”. Two former restaurants show it lasts. Outward narcissism (grandiose).'},
  {q:'Yusuf, a quiet, polite man, has always believed his talent went unnoticed. At every workplace he has quietly stopped helping whoever was promoted ahead of him. At a leaving party he said to no one in particular: “Funny how it’s always the loud ones.” He has never raised the subject with anyone.',
   a:'Inward narcissism (vulnerable)', w:'There is no show of superiority, but the hurt of not being noticed is clear in “always the loud ones”. What does the person do when something goes against them? He withdraws help and resents quietly: “never raised the subject with anyone”. “Every workplace” makes it lasting. Inward narcissism (vulnerable).'},
  {q:'Colm coaches a youth football team. He tells parents the wins are all his doing and the club would be nothing without him. When a mother asks for her son to get more time on the pitch, Colm says the boy “has no talent and neither does his mother”, and leaves him on the bench for the season. Parents at two earlier clubs tell the same kind of story.',
   a:'Outward narcissism (grandiose)', w:'“The club would be nothing without me” is acting superior, and the request for more pitch time is what goes against him. What does the person do when something goes against them? Contempt aimed at whoever he blames: the boy and his mother. Two earlier clubs show it lasts. Outward narcissism (grandiose).'}
];

const U4_OPTS = ['Outward narcissism (grandiose)','Inward narcissism (vulnerable)','Fear of being left (borderline)','Need to be noticed (histrionic)','Disregard for others (antisocial, psychopathy)','Not enough for a disorder'];
const U4_DRILL = [
  {q:'Jonas’s girlfriend told him she needed an evening to herself. He sent her twelve messages that night: first “I knew you were going to leave me”, then “You never loved me, I’m done”. At six in the morning he was on her doorstep with flowers, begging her to forgive him. His ex-partners tell the same story, and so does his sister.',
   a:'Fear of being left (borderline)', w:'What does the person most fear, or most need? “I knew you were going to leave me” after one evening apart is the fear of being left, on very thin evidence. What does the person do when something goes against them? Panic, then running the other person down (“You never loved me”), then frantic attempts to put it right on her doorstep. Ex-partners and a sister make it lasting.'},
  {q:'Tomasz, 52, is the loudest person at every dinner and tells every story in a different voice. When his wife’s friend began a story of her own, he clutched his chest, said he felt faint, and the whole table turned to look after him. He is the same at his rugby club, at work and at his children’s school, and he is generous enough to give you his coat.',
   a:'Need to be noticed (histrionic)', w:'The question that decides it is “What does the person do when something goes against them?” The telling detail is what happens when the attention moves: when the friend starts her own story, Tomasz turns it up (“clutched his chest, said he felt faint”) until the table turns to him. That is Bigger and bigger displays, aimed at an audience. It is Need to be noticed and not narcissism, because he does not run the friend down. Rugby club, work and school show it lasts. His generosity does not rule it out.'},
  {q:'Brandon, 33, has sold used cars at five dealerships. Colleagues say he lies to customers about accident history with a pleasant smile, takes a deposit and then “forgets” to order the car, and has twice been caught altering paperwork. When a customer confronted him he said, half smiling: “Calm down, nobody got hurt.” He moves on whenever a manager checks the files.',
   a:'Disregard for others (antisocial, psychopathy)', w:'“What does the person most fear, or most need?” Lying, altered paperwork and broken deposits show rules and other people’s claims carrying little weight: no fear to speak of. When confronted he is calm and unbothered: “Calm down, nobody got hurt.” Five dealerships make it lasting.'},
  {q:'Hendrik, a trial lawyer, tells junior staff that the firm “runs on my cases”. When the managing partner moved a case to another lawyer, he called her “jealous and out of her depth”, told clients she was ruining the firm, and stopped speaking to the associate who took it over. Partners say it was the same at his last two firms.',
   a:'Outward narcissism (grandiose)', w:'“What does the person most fear, or most need?” “Runs on my cases” is a fear of not being special, covered up by acting superior. “What does the person do when something goes against them?” The case is moved, and he turns contempt on whoever he blames: “jealous and out of her depth”. Two earlier firms show it lasts.'},
  {q:'Olu has worked in the same library for twenty years. He is gentle and never argues. But he keeps track of who gets thanked in the staff newsletter and who does not, and after each issue he sits alone at lunch. When a younger colleague won a prize he said, “Well, it’s who you know,” and has not spoken to her since. He did the same at his last two libraries, and with a school friend.',
   a:'Inward narcissism (vulnerable)', w:'“What does the person most fear, or most need?” No show of superiority, but the tally of who gets thanked is the same fear of not being special, shown as hurt and quiet resentment. When something goes against him (a colleague’s prize), he withdraws: he sits alone and stops speaking to her. Three libraries and a school friend make it lasting.'},
  {q:'Jamal snapped at his neighbour once about noise at two in the morning, apologised the next day and took round a plate of biscuits. In ten years in the building it has not happened again.',
   a:'Not enough for a disorder', w:'One moment with an apology in ten years. What does the person do when something goes against them? An ordinary reaction, the kind most people have now and then. Nothing is lasting here, so none of the five lasting ways fits. Not enough for a disorder.'},
  {q:'When her supervisor said she would be away for a month, Alma, a graduate student, spent the weekend writing six emails asking whether she had done something wrong. On Monday she told a classmate that her supervisor was “a fraud who never cared about students”. By Friday she was bringing her supervisor coffee and apologising. She went through the same cycle with her previous two supervisors and a flatmate.',
   a:'Fear of being left (borderline)', w:'“What does the person most fear, or most need?” The give-away is “six emails asking whether she had done something wrong” about a month’s absence: the fear of being left. “What does the person do when something goes against them?” Panic, then running the supervisor down, then frantic repair (coffee, apologies). Two earlier supervisors and a flatmate show it is lasting.'},
  {q:'At family parties, Carys gasps at everything, cries at the toast, and announces she is “absolutely devastated” when something small goes wrong, like a spilled drink. When a cousin’s engagement was announced she had to be helped to a chair, saying she was “too happy to cope”, and the room gathered round her instead. Her sister says it has been like this since school, at every family event and with every group of friends, and that Carys is warm and drops everything to help people.',
   a:'Need to be noticed (histrionic)', w:'“What does the person most fear, or most need?” The need to be noticed shows at the cousin’s engagement: Carys makes a bigger display, aimed at the room, and the room gathers round her instead. Her warmth does not rule it out. “Since school” and “every group of friends” make it lasting.'},
  {q:'Marisol, 41, a freelance fundraiser, is warm and quick-witted. Three charities say she invented donor names and kept a share of the money over six years. When the first charity found out, she gave a calm interview about “systems failures” and was on her next job within a month. She told a friend she had slept fine.',
   a:'Disregard for others (antisocial, psychopathy)', w:'“What does the person most fear, or most need?” Invented donors and kept money: other people’s claims carry little weight, with no fear to speak of. “What does the person do when something goes against them?” She is calm and unbothered, and uses it: a calm interview, and a new job within a month. “Slept fine” is the lack of remorse. Three charities in six years make it lasting.'},
  {q:'Daphne, a university lecturer, corrects colleagues in front of students and expects to be called “Professor” though she is not one. When her paper was rejected, she wrote to the editor that the reviewers “lacked the intelligence to follow it” and told her students not to cite their work. Former colleagues at two other universities describe the same behaviour.',
   a:'Outward narcissism (grandiose)', w:'“What does the person most fear, or most need?” Correcting colleagues in front of students and wanting a title she does not hold is acting superior, over a fear of not being special. When something goes against her (the rejection), she turns contempt on whoever she blames: the reviewers “lacked the intelligence”. Two other universities show it lasts.'},
  {q:'Henrietta has always been the quiet one in her family. She never raises her voice. When her sister’s wedding toast mentioned her only briefly, she left early without saying why, and a year later still tells her mother she “wasn’t even a footnote”. She has cut off three friends the same way, one at a time, after small slights she never mentioned.',
   a:'Inward narcissism (vulnerable)', w:'“What does the person most fear, or most need?” There is no show of superiority. “Wasn’t even a footnote” is the hurt of not being noticed, the same fear of not being special. When something goes against her she withdraws (leaves early, cuts friends off) and resents quietly, never saying what was wrong. Three friends and a year-old grievance show it lasts.'},
  {q:'Ingrid dresses boldly, is the life of every party and tells long stories. She is also the first to notice when someone is left out of a conversation, goes quiet if others want to speak, and is still close to the friends she made at school.',
   a:'Not enough for a disorder', w:'Being outgoing and dressing boldly is not enough. What does the person most fear, or most need? Nothing stands out: she gives up the floor when others want it, so she does not need the attention at any cost. Her regard for others holds. Not enough for a disorder.'},
  {q:'Carmen, an air-traffic controller, is curt on shift, never makes small talk, and sighs when a pilot repeats a question. Colleagues of twenty years say the same. They also say she hates being thanked, remembers every birthday, and once drove two hours to cover a night shift for a colleague whose mother had died.',
   a:'Not enough for a disorder', w:'The question that decides it is “What does the person most fear, or most need?” Nothing stands out. She is curt, and twenty years of the same shows that it lasts, but the telling detail is “drove two hours to cover a night shift”: her regard for others holds. Being curt is not any of the lasting ways in this course. Not enough for a disorder.'}
];

const U5_OPTS = ['Gaslighting','Turning the blame around (DARVO)','Love-bombing, then pulling back','Pinning your own feeling on someone else (projection)','Not a tactic'];
const U5_DRILL = [
  {q:'Whenever Lars says his partner’s drinking is a problem, she says: “I haven’t had a drink in weeks. You imagine things when you’re tired.” Last month he found bottles in the cupboard, and she said the neighbour must have left them. He has started asking friends to tell him if he is wrong.',
   a:'Gaslighting', w:'What is the move doing to the other person? Making him doubt his own memory or perception, again and again: “You imagine things when you’re tired”, and bottles the neighbour “must have left”. How much of it is there? It repeats, every time he raises it, and the effect shows: he asks friends to tell him if he is wrong.'},
  {q:'A man is told by his team that he took credit for their work in a meeting. “I did no such thing,” he says. “And you’re hardly in a position to talk, with the number of deadlines you’ve missed.” By the end of the meeting he says he feels “ambushed” and “bullied”, and two team members are apologising.',
   a:'Turning the blame around (DARVO)', w:'The question that decides it is “What is the move doing to the other person?” The give-away is the order: a denial (“I did no such thing”), an attack on whoever raised it (“the deadlines you’ve missed”), and a reversal (“ambushed”, “bullied”, and the team apologising). That is denying it, attacking whoever raised it, and making himself the victim. Three connected parts in one meeting are enough for the second question.'},
  {q:'Within a week of meeting Ian, Sasha had received two bouquets, four messages a day saying she was the best thing that had ever happened to him, and a plan for a holiday together. Six weeks on, after she turned down a Friday night to see her sister, he stopped texting for four days and then said: “I guess I’m not a priority.”',
   a:'Love-bombing, then pulling back', w:'What is the move doing to the other person? Showering her with praise and attention (bouquets, four messages a day, holiday plans), then pulling back when she said no to a Friday night (four days’ silence, “I guess I’m not a priority”). The before and after is what counts for how much of it there is.'},
  {q:'For weeks Hakon has been telling his business partner that she is “planning to leave and take the clients”. He says it at every meeting and has no evidence. He has himself been in talks with a rival firm since spring.',
   a:'Pinning your own feeling on someone else (projection)', w:'What is the move doing to the other person? Accusing her of something that is really his own: the accusation is repeated at every meeting, with no evidence, and matches what he is doing (“talks with a rival firm since spring”). It repeats, so it is more than one reaction.'},
  {q:'Odile promised her friend she would come to the leaving drinks, then cancelled an hour before because of a migraine. She wrote an apology, offered to take her friend to dinner the following week, and did.',
   a:'Not a tactic', w:'One cancellation, with an apology and a repair. What is the move doing to the other person? It is a single slip, with nothing bigger behind it. How much of it is there? One reaction on its own. Nobody was made to doubt anything.'},
  {q:'Tobias’s father says, whenever Tobias brings up a hurtful comment from his childhood, “That never happened, you’ve got an overactive imagination”. Tobias’s sister remembers it too, but their father says she is “taking his side as usual”. Tobias has started to wonder whether he can trust any of his memories of growing up.',
   a:'Gaslighting', w:'What is the move doing to the other person? Making Tobias doubt his own memory, again and again (“That never happened”), even when his sister confirms it. The effect is the proof: he wonders whether he can trust any of his memories. That repeat and that effect separate it from two people remembering differently.'},
  {q:'For months Ellie has told her husband he is “always checking out other women”, on every train and at every party, with nothing he has done to suggest it. Her friends have noticed that it is Ellie who has been messaging an old colleague late at night and deleting the thread.',
   a:'Pinning your own feeling on someone else (projection)', w:'What is the move doing to the other person? Accusing him of a fault that is really hers: no evidence on his side, a repeated accusation, and a match with her own behaviour (the late-night messages). It is not gaslighting, because she is not denying his memory. She is handing him her own fault.'},
  {q:'Two sisters remember differently whether their grandmother’s house had a green or a blue front door. “It was blue,” says one. “I really remember green,” says the other. They laugh and agree to look at old photos.',
   a:'Not a tactic', w:'The question that decides it is “What is the move doing to the other person?” It is a single disagreement, with nothing bigger behind it. “I really remember green” does not tell the other that her memory is wrong, and they settle it together. How much of it is there? One reaction on its own. Nothing is making either of them doubt themselves.'},
  {q:'A youth coach is told by a parent that a player was sent home hurt and not checked. “That didn’t happen,” she says. “You never come to training, so what would you know?” She tells the club committee that the parent has “a vendetta” and that she is being made to feel “unsafe at her own club”.',
   a:'Turning the blame around (DARVO)', w:'The question that decides it is “What is the move doing to the other person?” Deny (“That didn’t happen”), attack the person who raised it (“you never come to training”), and reverse the roles (“a vendetta”, “unsafe at her own club”). All three, in order, in one conversation. Denying it, attacking whoever raised it, and making herself the victim.'},
  {q:'At a new job, a senior manager spent the first fortnight telling a new recruit, Pilar, that she was the most talented person he had ever hired and that he was going to “make her career”. He took her to lunch every day. In the third month, after she accepted a project from another team, he stopped inviting her to meetings and said she had become “difficult”.',
   a:'Love-bombing, then pulling back', w:'The question that decides it is “What is the move doing to the other person?” Showering her with praise and attention (“the most talented person”, lunch every day), then pulling back and criticising when she did something that was not his idea (stopped inviting her, “difficult”). Warmth that goes when she makes her own choice is the move. It happens at work as well as in romance.'},
  {q:'Two brothers are arguing about who forgot to lock the shed. “You always blame me,” one says, raising his voice. A minute later he says: “Look, I might have been the last one out.”',
   a:'Not a tactic', w:'The question that decides it is “What is the move doing to the other person?” A single defensive reply (“You always blame me”) that he drops a minute later (“I might have been the last one out”). There is no denial that holds, no attack, no reversal, and no repeat. How much of it is there? One reaction on its own.'}
];

// Faulty claims. Each explanation names the key question the claim skips, in the key's exact words.
const PSYCH_ERR = [
  {q:'"He disagreed with my version of events, that’s such gaslighting."',
   w:'This skips “How much of it is there?” One disagreement about one fact is one reaction on its own. For Gaslighting, the answer to “What is the move doing to the other person?” would have to be “Making them doubt their own memory or perception, again and again”, and one contested memory, with nobody left doubting themselves, is not that. At most this is Not a tactic.'},
  {q:'"She’s a total narcissist, she posted a selfie."',
   w:'This skips the first question, “What kind of thing is this?” A selfie is one moment, and “total narcissist” claims a lasting way someone is. Nothing in the claim answers “What does the person most fear, or most need?” or “What does the person do when something goes against them?” The name the case supports is Not enough for a disorder.'},
  {q:'"That’s literally DARVO," said about someone who calmly explained their side after being wrongly accused.',
   w:'This skips “What is the move doing to the other person?” The key’s answer needs all three parts: denying it, attacking whoever raised it, and making themselves the victim. Calmly giving your side when the accusation is false is not denying something you did, and there is no attack and no reversal. It is defending yourself accurately, so the name is Not a tactic.'},
  {q:'"Everyone has narcissistic traits, so the word doesn’t mean anything."',
   w:'This skips the first question, “What kind of thing is this?” Everyone shows a few traits now and then, and that is exactly why a few traits are Not enough for a disorder. The word still means something: it is for a way of being that is lasting, wide, rigid and costly, and the key checks that with “What does the person most fear, or most need?” and “What does the person do when something goes against them?” A word that gets misused has not stopped meaning anything.'},
  {q:'"My coworker is a sociopath," based on one blunt email.',
   w:'This skips the first question, “What kind of thing is this?” One blunt email is one moment, and “sociopath” claims a lasting way someone is (it is also not a clinical term). For Disregard for others (antisocial, psychopathy) the key needs “No fear to speak of: rules and other people’s claims carry little weight”, shown over years and places. One email shows nothing like that.'},
  {q:'"He love-bombed me," said about a partner who was consistently affectionate for two years before a difficult breakup.',
   w:'This skips “What is the move doing to the other person?” Love-bombing, then pulling back, is “Showering them with praise and attention, then pulling back or criticising”. Two years of steady affection has no flood at the start and no pulling back to get something. A hard breakup is a different case, and not a move.'},
  {q:'"You changed your mind, so you were making excuses," said to a friend who checked the figures, found she was wrong, and told everyone so.',
   w:'This skips “What does the reasoning do?” Changing your mind is not a fault. The key’s answer here is “Gives every fact the same test, and goes where the facts point”, which is Fair reasoning. An excuse adds a reason why what you did is fine after all, with nothing new coming in. Here something new did: the figures.'},
  {q:'"She loves attention, so she’s histrionic."',
   w:'This skips the first question, “What kind of thing is this?” “She loves attention” claims a lasting way someone is, with no years, places or people counted. Many people like attention. For Need to be noticed (histrionic) the key needs “Need to be noticed: to be the centre of attention” across years and places, and “Bigger and bigger displays, aimed at an audience” when the attention moves away. Liking attention alone is Not enough for a disorder.'},
  {q:'"He was so keen from the first date, he must be love-bombing me."',
   w:'This skips “How much of it is there?” Early enthusiasm is normal. Love-bombing, then pulling back, needs the before and after: praise and attention that is pulled back or turned into criticism when you do something he did not want. Keenness that is still warm when you ask for space is not that. One keen first date shows only the first half.'},
  {q:'"He’s so quiet and sulky, he must be a vulnerable narcissist."',
   w:'This skips “What does the person most fear, or most need?” Being quiet, and sometimes sulky, is common. For Inward narcissism (vulnerable) the key needs “The same fear of not being special, shown as hurt and quiet resentment”: a tally of slights kept for years and turned on people who did nothing to cause them. Quiet alone is not that. The case so far is Not enough for a disorder.'},
  {q:'"I didn’t decide first, I did my research," said by someone who read only articles that agree with a choice made last week.',
   w:'This skips “What does the reasoning start from?” Reading is not a real search when the answer came first. The key’s answer is “An answer already chosen, before any search began”, and the choice made last week shows it. The one-sided reading is “Chooses the answer first, then searches for support”. The name is Motivated reasoning.'},
  {q:'"I can’t stop now, I’ve already spent too much," said about a project that will cost far more to finish than it will ever bring in.',
   w:'This skips “What does the reasoning do?” The key’s answer is “Gives what is already spent as the reason to keep going”, which is Sunk cost fallacy. What is already spent is gone whichever way you decide, so it cannot be a reason for the next step. A real reason would be what finishing will cost and bring, and the claim itself says that is far more than it will ever bring in.'},
  {q:'"You only disagree with me because of confirmation bias."',
   w:'This skips “What does the reasoning do?” Disagreeing is not a name. For Confirmation bias the key needs “Tests evidence against their view harder than evidence for it”: evidence for a view and evidence against it are both in the case, and the evidence against gets the harder test. The claim shows neither. It also does what it accuses: it puts the other person’s view to a harder test than your own.'},
  {q:'"He felt awful about it afterwards, so he must be doing cognitive dissonance reduction."',
   w:'This skips “What does the reasoning do?” Feeling awful is the discomfort of doing something that does not fit what you believe. It is not the reduction. Cognitive dissonance reduction is the key’s answer “Adds a reason why what they did is fine after all”: the person gives a reason why it is fine or does not count. Someone who feels bad and says sorry has not added a reason why it is fine.'}
];

// Each explanation walks the key's questions in order, in the key's exact words, quoting the words in the case that decide each answer.
const PSYCH_SPECIMENS = [
  {q:'"I know I promised myself I’d leave if it happened again, but this time really is different. He explained why it wasn’t his fault."',
   sub:{D1:['reasoning'],R1:['after'],R2:['addstory']}, outcome:'dissonance',
   why:'What kind of thing is this? One person’s reasoning: she is explaining a choice of her own (“I promised myself I’d leave”). What does the reasoning start from? Something already done, spent or believed, that the person is protecting: she has stayed, against her own promise. What does the reasoning do? It adds a reason why what they did is fine after all: “this time really is different”. The only new thing is his explanation, and she has not tested it. The name is Cognitive dissonance reduction.',
   fals:'If “this time is different” could be checked by something other than his word, and she had checked it, this would be Fair reasoning.'},
  {q:'He’d already decided to invest before he asked anyone’s opinion. Every "due diligence" conversation after that was really just him listening for agreement, and getting irritated at anyone who raised a concern.',
   sub:{D1:['reasoning'],R1:['before'],R2:['fixed']}, outcome:'motivated',
   why:'What kind of thing is this? One person’s reasoning: he is backing up a choice of his own. What does the reasoning start from? An answer already chosen, before any search began: “already decided to invest before he asked anyone’s opinion”. What does the reasoning do? It chooses the answer first, then searches for support: the “due diligence” conversations were “just him listening for agreement”. He is also harder on concerns than on agreement, which could look like Confirmation bias, but a search began after the answer was chosen, and that decides it. The name is Motivated reasoning.',
   fals:'If he could say what he would have needed to hear to walk away, and would have walked away on hearing it, the asking would have been a real search, and this would be Fair reasoning.'},
  {q:'The report cites six analysts who back her thesis and dismisses the two who don’t as "not understanding the sector", a phrase she doesn’t apply to any of the six, several of whom have less sector experience than the two she dismissed.',
   sub:{D1:['reasoning'],R1:['after'],R2:['scrutiny']}, outcome:'confbias',
   why:'What kind of thing is this? One person’s reasoning: she is defending a thesis of her own in a report. What does the reasoning start from? Something already done, spent or believed, that the person is protecting: her thesis, and the six analysts who back it. There is no search she set out on with the answer chosen. What does the reasoning do? It tests evidence against their view harder than evidence for it: the two analysts against are dismissed as “not understanding the sector”, a test she does not apply to the six. The name is Confirmation bias.',
   fals:'If the two dismissed analysts had a real fault in their method that the six did not share, and she had checked all eight for it, the dismissal would be earned, and this would be Fair reasoning.'},
  {q:'Three years into a PhD she no longer wants, she tells her advisor she’ll finish anyway: "I can’t have wasted three years for nothing."',
   sub:{D1:['reasoning'],R1:['after'],R2:['backward']}, outcome:'sunkcost',
   why:'What kind of thing is this? One person’s reasoning: she is giving a reason for a choice of her own, to finish. What does the reasoning start from? Something already done, spent or believed, that the person is protecting: the three years already spent. What does the reasoning do? It gives what is already spent as the reason to keep going: “I can’t have wasted three years for nothing”. Nothing in it is about what the next two years would bring. The name is Sunk cost fallacy.',
   fals:'If finishing would bring her something she wants, and that were her reason, carrying on would be Fair reasoning.'},
  {q:'For years he assumed the new manufacturing process was more expensive. When the plant finally ran the actual numbers, it was cheaper. He was the first to say so in the meeting, and asked for the analysis to be circulated.',
   sub:{D1:['reasoning'],R1:['evidence'],R2:['updates']}, outcome:'revision',
   why:'What kind of thing is this? One person’s reasoning: he is changing a view of his own. What does the reasoning start from? The facts, whichever way they point: the plant “ran the actual numbers”. What does the reasoning do? It gives every fact the same test, and goes where the facts point: the numbers went against what he had assumed for years, and he was “the first to say so” and asked for the analysis to be circulated. The name is Fair reasoning.',
   fals:'If he had spent those years keeping the numbers from being run, this would be giving in rather than going where the facts point.'},
  {q:'Every time she brings up something he said, he tells her it never happened. Not "I don’t remember it that way", but that she’s making it up. It’s happened often enough that she now records important conversations, just for herself.',
   sub:{D1:['tactic'],T1:['denyreality'],T2:['pattern']}, outcome:'gaslight',
   why:'What kind of thing is this? A move between people: what he says is aimed at her memory (“it never happened”, “she’s making it up”). What is the move doing to the other person? Making them doubt their own memory or perception, again and again: a flat denial, not “I don’t remember it that way”, and she now records conversations “just for herself”. How much of it is there? More than one reaction: it repeats, builds, or comes in connected parts: “every time”. The name is Gaslighting.',
   fals:'If it had happened once, or he honestly misremembered and said so when shown, it would be One reaction on its own, and the name would be Not a tactic.'},
  {q:'Caught having lied on his expense report, he told HR the real problem was that his manager had been targeting him for months, and somehow the meeting ended with HR asking the manager to explain themselves.',
   sub:{D1:['tactic'],T1:['denyattackreverse'],T2:['pattern']}, outcome:'darvo',
   why:'What kind of thing is this? A move between people: his words are aimed at HR and at his manager. What is the move doing to the other person? Denying it, attacking whoever raised it, and making themselves the victim: he does not own the lie (“the real problem” is something else), he accuses the manager of “targeting him”, and the meeting ends with HR questioning the manager. How much of it is there? More than one reaction: it repeats, builds, or comes in connected parts: three parts, one after another, in one meeting. The name is Turning the blame around (DARVO).',
   fals:'If the manager really had a record of unfair treatment before this, the accusation would be a fair complaint, not a reversal.'},
  {q:'The first month, he called her his soulmate, learned her whole family’s names, and said no one had ever understood him the way she did. By the third month, once she’d stopped seeing her college friends most weekends to be with him, the compliments had turned into comments about how she "used to be more fun."',
   sub:{D1:['tactic'],T1:['idealizewithdraw'],T2:['pattern']}, outcome:'lovebomb',
   why:'What kind of thing is this? A move between people: the praise and the comments are aimed at her. What is the move doing to the other person? Showering them with praise and attention, then pulling back or criticising: “soulmate” and her family’s names in month one, “used to be more fun” by month three, once she had dropped her friends for him. How much of it is there? More than one reaction: it repeats, builds, or comes in connected parts: there is a clear before and after. The name is Love-bombing, then pulling back.',
   fals:'If the time with friends dropped because they both wanted it, and “used to be more fun” was said once and never again, it would be an ordinary rocky patch, and the name would be Not a tactic.'},
  {q:'For months Colin has told his sister that she "only visits Mum when she wants something". He says it at family dinners and in the family chat, with nothing to back it up. Colin has not visited their mother in four months, and has twice asked her for money.',
   sub:{D1:['tactic'],T1:['ownfeeling'],T2:['pattern']}, outcome:'projection',
   why:'What kind of thing is this? A move between people: his words are aimed at his sister, about what she is like. What is the move doing to the other person? Accusing them of a feeling or fault that is really the accuser’s own: “only visits Mum when she wants something” describes Colin, who has not visited in four months and has asked their mother for money twice. How much of it is there? More than one reaction: it repeats, builds, or comes in connected parts: he says it “for months”, at dinners and in the chat. The name is Pinning your own feeling on someone else (projection).',
   fals:'If his sister really did visit only when she wanted something, and Colin could show it, this would be a fair complaint, and the name would be Not a tactic.'},
  {q:'A teammate is told that a figure on his slide is wrong. "That’s what the system gave me," he says, sounding annoyed. After the meeting he checks, finds the mistake, and sends a corrected slide with a thank-you.',
   sub:{D1:['tactic'],T1:['singlemoment'],T2:['oneinstance']}, outcome:'notactic',
   why:'What kind of thing is this? A move between people, at first look: his words are aimed at the colleague who raised it. What is the move doing to the other person? A single defensive reply, slip or disagreement, with nothing bigger behind it: “That’s what the system gave me” is one defensive line, with no attack, no reversal and no doubt put into anyone’s memory. How much of it is there? One reaction on its own: he checks, finds the mistake and says thank you. The name is Not a tactic.',
   fals:'If he turned every correction into an accusation against the person who raised it, it would be more than one reaction, and you would ask what the move is doing again.'},
  {q:'He’s never once, in twenty years, said "I was wrong." When a project he championed fails, it’s always because the team executed poorly. When it succeeds, he tells the story of his original vision to anyone who’ll listen, unprompted.',
   sub:{D1:['pattern'],P1:['shame_out'],P2:['rage']}, outcome:'narc_grand',
   why:'What kind of thing is this? A lasting way someone is: “never once, in twenty years”. What does the person most fear, or most need? Fear of not being special, covered up by acting superior: failures are never his, and successes become “the story of his original vision”. What does the person do when something goes against them? Anger or contempt toward whoever they blame: when a project fails, “it’s always because the team executed poorly”. Both answers lead to Outward narcissism (grandiose).',
   fals:'If he did take the blame in private, and only his public face was proud, you would be looking at someone who manages his image, and the name would be Not enough for a disorder.'},
  {q:'She never asks for anything and never complains out loud. But she’s kept a mental ledger for a decade of every time she trained someone who then got promoted over her, and she’s quietly stopped speaking to three of them, one by one, without ever telling them why.',
   sub:{D1:['pattern'],P1:['shame_in'],P2:['withdraw']}, outcome:'narc_vuln',
   why:'What kind of thing is this? A lasting way someone is: “a decade”, and “three of them”. What does the person most fear, or most need? The same fear of not being special, shown as hurt and quiet resentment: a ledger of every time someone she trained was promoted over her. What does the person do when something goes against them? Hurt withdrawal, quiet resentment, self-pity: she stopped speaking to the three, “one by one, without ever telling them why”. Both answers lead to Inward narcissism (vulnerable).',
   fals:'If she had raised these concerns directly and been brushed off by a workplace that really was unfair, this would be an ordinary reaction to real unfairness, and the name would be Not enough for a disorder.'},
  {q:'Any time he seems even slightly less available, she calls him nonstop until he answers, alternates between "I’m sorry, I’m the worst" and "you clearly don’t care about me" within the same conversation, and has done this with every partner she’s had since her teens.',
   sub:{D1:['pattern'],P1:['abandonment'],P2:['panic']}, outcome:'bpd',
   why:'What kind of thing is this? A lasting way someone is: “every partner she’s had since her teens”. What does the person most fear, or most need? Fear of being left: she calls nonstop when he seems “even slightly less available”. What does the person do when something goes against them? Panic, frantic attempts to put it right, or suddenly running the other person down: “I’m sorry, I’m the worst” and then “you clearly don’t care about me”, in one conversation. Both answers lead to Fear of being left (borderline).',
   fals:'If this intensity were new and followed one recent, identifiable event, instead of every partner since her teens, it would be a reaction to a cause, and the name would be Not enough for a disorder.'},
  {q:'In three different jobs, Rosalind has been the first on the dance floor and the last to leave every party. When a colleague holds the room with news of her own, Rosalind remembers something terrible that has just happened to her, goes pale, says she can’t talk about it, and then talks about it for twenty minutes until the whole table has turned to her. She is also generous, and drops everything to help a friend.',
   sub:{D1:['pattern'],P1:['attention'],P2:['dramatic']}, outcome:'hpd',
   why:'What kind of thing is this? A lasting way someone is: “in three different jobs”. What does the person most fear, or most need? Need to be noticed: to be the centre of attention: first on the dance floor, last to leave, and working to get the room back. What does the person do when something goes against them? Bigger and bigger displays, aimed at an audience: when a colleague holds the room, she goes pale, “can’t talk about it”, then talks for twenty minutes “until the whole table has turned to her”. Her generosity does not rule it out. Both answers lead to Need to be noticed (histrionic).',
   fals:'If she gave the floor back when a colleague had news, and the show happened only at parties, it would be plain outgoingness, and the name would be Not enough for a disorder. If she ran down whoever held the room instead of turning up her own display, you would look at Outward narcissism (grandiose).'},
  {q:'He’s warm, funny, and the first to offer help, right up until a favour isn’t returned fast enough, at which point he’ll casually mention, to mutual friends, something private and embarrassing you told him in confidence months earlier. He doesn’t seem angry when he does it. He seems entertained.',
   sub:{D1:['pattern'],P1:['norule'],P2:['flat']}, outcome:'aspd',
   why:'What kind of thing is this? A lasting way someone is: “he’ll casually mention” describes how he is whenever a favour is not returned, not one occasion. What does the person most fear, or most need? No fear to speak of: rules and other people’s claims carry little weight: he uses something told in confidence as leverage. What does the person do when something goes against them? Calm and unbothered: no upset, and uses it for their own ends: “He doesn’t seem angry. He seems entertained.” Both answers lead to Disregard for others (antisocial, psychopathy).',
   fals:'If he felt real remorse afterwards, and it was a one-off lapse rather than a repeated move, it would be a moment, and the name would be Not enough for a disorder.'},
  {q:'She cried at her coworker’s small mistake in a meeting once. Someone on the team called her "obviously borderline" in the group chat afterward.',
   sub:{D1:['pattern'],P1:['normal'],P2:['proportionate']}, outcome:'traits',
   why:'What kind of thing is this? A lasting way someone is: “obviously borderline” is a label, and a label claims a lasting way. The case then has to earn it, and it shows one reaction in one meeting. What does the person most fear, or most need? None of these stands out: ordinary behaviour, or a reaction to stress: nothing shows a fear of being left, only one moment. What does the person do when something goes against them? An ordinary reaction, the kind most people have now and then. The name is Not enough for a disorder: one moment is not years, places and people.',
   fals:'If she had reacted with panic and then running people down in every relationship for years, you would ask the questions again, and the name could be Fear of being left (borderline). Nothing in this case says so.'},
  {q:'He explains, calmly and specifically, why the criticism of his proposal is factually wrong, citing the actual numbers. Two people on the thread reply that he’s "being defensive" and "can’t take feedback."',
   sub:{D1:['pattern'],P1:['normal'],P2:['proportionate']}, outcome:'traits',
   why:'What kind of thing is this? A lasting way someone is: “being defensive” and “can’t take feedback” are labels, and labels claim a lasting way. The case shows one calm reply. What does the person most fear, or most need? None of these stands out: ordinary behaviour, or a reaction to stress: nothing shows a need to be special or any fear. What does the person do when something goes against them? An ordinary reaction, the kind most people have now and then: he replies calmly, with “the actual numbers”. The name is Not enough for a disorder. Being disagreed with is not evidence about the person who disagrees.',
   fals:'If, for years, he had answered every criticism with contempt toward whoever made it, the answers would change. One calm reply with numbers shows nothing like that.'}
];

const PSYCH_COURSE = [
{ id:'u1', tag:'One', title:'What kind of thing is this?',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you will be able to look at a case (a story a friend tells you, a message thread, a meeting, something you did yourself) and say what kind of thing it is, before you reach for a label like “gaslighting” or “narcissist”.</p>
      <p>This comes up whenever someone calls a bad evening “toxic”, or says “he’s a textbook narcissist” after one meeting. The unit answers the first question of the key: <i>What kind of thing is this?</i></p>
      <p>The key is the short list of questions this course asks about every case, always in the same order. Each answer rules some names out, until one name is left. The first question has three answers, and each one sends you to its own set of questions. (This unit’s practice adds a fourth answer, for a case with nothing to name.) Words in italics, like the question above, are the key’s own words. They stay the same on every card, in every drill and in the full run at the end.</p>`},
  {h:'The sixteen names on one page',
   b:`<p class="lead">Over the whole course you will learn to tell sixteen things apart. Each has one fixed name, and the name never changes.</p>
      <p>Here they are in three groups, with a plain line for each. You will meet every one properly later. For now, read down the list so that no name comes as a surprise.</p>
      <p><b>One person’s reasoning</b> (Unit Two)</p>
      <table class="k">
      <tr><td><i>Cognitive dissonance reduction</i></td><td>an excuse added after the act</td></tr>
      <tr><td><i>Sunk cost fallacy</i></td><td>carrying on because of what is already spent</td></tr>
      <tr><td><i>Confirmation bias</i></td><td>a harder test for unwelcome evidence</td></tr>
      <tr><td><i>Motivated reasoning</i></td><td>the answer first, the search afterwards</td></tr>
      <tr><td><i>Fair reasoning</i></td><td>the same test for every fact, and the view goes where the facts point</td></tr>
      </table>
      <p><b>A move between people</b> (Unit Five). A move that works on what another person remembers, feels or does is called a tactic.</p>
      <table class="k">
      <tr><td><i>Gaslighting</i></td><td>making someone doubt their own memory, again and again</td></tr>
      <tr><td><i>Turning the blame around (DARVO)</i></td><td>denying it, attacking whoever raised it, and ending up as the victim</td></tr>
      <tr><td><i>Love-bombing, then pulling back</i></td><td>a flood of praise and attention early on, then coolness once you are attached</td></tr>
      <tr><td><i>Pinning your own feeling on someone else (projection)</i></td><td>accusing someone of a feeling or fault that is really your own</td></tr>
      <tr><td><i>Not a tactic</i></td><td>an ordinary reaction, with nothing bigger behind it</td></tr>
      </table>
      <p><b>A lasting way someone is</b> (Units Three and Four). A disorder is a lasting way of thinking, feeling and dealing with people that is far outside what is usual and causes real trouble. Only a trained professional, such as a psychologist or psychiatrist (a clinician), can say whether someone has one.</p>
      <table class="k">
      <tr><td><i>Outward narcissism (grandiose)</i></td><td>needing to be seen as special, and hitting out at anyone who threatens it</td></tr>
      <tr><td><i>Inward narcissism (vulnerable)</i></td><td>the same need, shown as hurt, quiet resentment and withdrawal</td></tr>
      <tr><td><i>Fear of being left (borderline)</i></td><td>a fear of being left that swings between clinging and lashing out</td></tr>
      <tr><td><i>Need to be noticed (histrionic)</i></td><td>needing to be the centre of attention, with big displays of feeling</td></tr>
      <tr><td><i>Disregard for others (antisocial, psychopathy)</i></td><td>lying, using people and breaking rules, with little remorse</td></tr>
      <tr><td><i>Not enough for a disorder</i></td><td>a few traits, or a hard moment</td></tr>
      </table>
      <p>Three of the sixteen mean that nothing is wrong: <i>Fair reasoning</i>, <i>Not a tactic</i> and <i>Not enough for a disorder</i>. In everyday life, most cases are one of these three. The course teaches them as carefully as the rest, because naming something that is not there is the commonest mistake.</p>`},
  {h:'One person’s reasoning',
   b:`<p><b>What it is.</b> The thinking one person does about a view or a choice of their own: how they reach it, defend it or change it. It happens in one head, even when it is said out loud. Everyone does this all day, and most of it is fine. It goes wrong when the reasoning starts protecting something the person did, spent or hopes for, instead of following the facts.</p>
      <p><b>Example.</b> Ayesha bought a standing desk she hardly uses. A friend asks why it still sits in the spare room. “It cost a lot,” she says, “so I can’t get rid of it. I’ll start using it properly next month.” Nobody is being worked on. This is Ayesha reasoning about her own choice.</p>
      <p><b>Sounds like.</b> “I know I said never again, but this time is different.” “I’ve come too far to stop now.” “I looked into it, and I was right.”</p>
      <p><b>Catch it.</b> Ask: does the case show how one person reaches, defends or changes a view or a choice of their own? If it does, the key’s answer is <i>One person’s reasoning</i>.</p>
      <p><b>What to do.</b> Look at the reason the person gives, not at the person. The questions that come next (Unit Two) ask what that reasoning is doing. If the reasoning is yours, this is the kind to check first. It is far easier to see in other people than in yourself.</p>
      <p><b>Don’t confuse it with</b> <i>A move between people</i>. Both can be said out loud to someone else. The difference is what the words are for. In reasoning, they defend the speaker’s own view or choice. In a move, they work on what the other person remembers, feels or believes.</p>`},
  {h:'A move between people',
   b:`<p><b>What it is.</b> Something one person does to another in their dealings with each other. The case is not about what goes on inside one head. It is about what passes between two people, and what it does to the one on the receiving end: what they remember, how they feel, what they believe about themselves.</p>
      <p>Real life often calls this manipulation. The key says <i>move</i>, because a move is something you can point to in the case. It does not claim to know what the person meant by it.</p>
      <p><b>Example.</b> Leon tells his flatmate Omar on Monday that he will pay the broadband bill. On Friday the internet is cut off. “You never asked me to pay it,” Leon says. “And you’re always on at me about money.” The words are aimed at Omar: at what he remembers, and at what kind of person he is.</p>
      <p><b>Sounds like.</b> “That never happened.” “You’re too sensitive.” “After everything I’ve done for you.” “I’ve never felt like this about anyone.”</p>
      <p><b>Catch it.</b> Ask: does the case show something one person does to another in their dealings with each other? If it does, the key’s answer is <i>A move between people</i>.</p>
      <p><b>What to do.</b> Write down what was said and done, with dates and the actual words, before you decide what to call it. The questions that come next (Unit Five) tell the four named moves from an ordinary argument. If you are on the receiving end, keep your own record and check your memory with someone you trust.</p>
      <p><b>Don’t confuse it with</b> <i>One person’s reasoning</i>. Leon is also defending himself, so it can look like reasoning. The tie-breaker is who the words are for. If they only protect his own view of his own choice, it is reasoning. If they land on Omar’s memory or on Omar himself, it is a move between people.</p>`},
  {h:'A lasting way someone is',
   b:`<p><b>What it is.</b> How a person is across years, places and relationships: how they handle being criticised, ignored, left or disagreed with, again and again, at work and at home and with friends. One bad night is not this. The same shape, in every part of someone’s life, for years, is. So there are three things to count: how long, in how many places, with how many people.</p>
      <p>It also covers labels. When someone says “he’s a narcissist” or “she’s obviously borderline”, they are claiming a lasting way someone is. A claim like that needs evidence as big as the claim, so the key sorts labels here and then checks them.</p>
      <p><b>Example.</b> Darius has had six jobs in twelve years. At each one, within months, he is sure his manager is stupid and his colleagues are against him, and he leaves with a story about how he was pushed out. With old friends and at home it is the same. Years, many places, many people.</p>
      <p><b>Sounds like.</b> “She has done this with every partner.” “He has never once said he was wrong.” Or, from someone who has seen one moment: “He’s clearly a narcissist.”</p>
      <p><b>Catch it.</b> Ask: does the case show how a person is across years, places and relationships, or a label that claims it? If it does, the key’s answer is <i>A lasting way someone is</i>.</p>
      <p><b>What to do.</b> Count: how long, how many places, how many people. If you can only count one of each, you have seen a moment, and you cannot call it a lasting way. Then go on to the questions in Units Three and Four. In real life, when you have seen one moment, say “I saw one moment” and not “he is a …”.</p>
      <p><b>Don’t confuse it with</b> <i>None of these: an ordinary reaction</i>. The two can look alike on a single evening. The difference is time and place. A lasting way keeps turning up with no matching cause. An ordinary reaction has a cause and passes.</p>`},
  {h:'None of these: an ordinary reaction',
   b:`<p><b>What it is.</b> What most cases turn out to be. A person is under strain and reacts the way people do: withdrawn after bad news, short-tempered in a stressful week, upset about a mistake and sorry the next day. There is a real cause, the reaction fits the size of the cause, and it passes. There is nothing here to name.</p>
      <p>This is the one answer that is not one of the key’s three kinds. The key’s first question has no “nothing” answer, so it is offered only in this unit’s practice. In the full key, a case with nothing to name reaches <i>Fair reasoning</i>, <i>Not a tactic</i> or <i>Not enough for a disorder</i> through the later questions, and Unit Six shows how. Unit Three gives the same idea as an answer to a different question: <i>An ordinary reaction, the kind most people have now and then</i>.</p>
      <p><b>Example.</b> Hana’s father has just been told he needs an operation. This week she is quiet, snaps at her brother over nothing, and cancels two evenings out.</p>
      <p><b>Sounds like.</b> “She’s not herself this week.” “He snapped, then apologised.” “It’s been a rough month.”</p>
      <p><b>Catch it.</b> Ask: is there a real cause big enough to explain this, and does it look as if it will pass? If it is, the answer is <i>None of these: an ordinary reaction</i>.</p>
      <p><b>What to do.</b> Offer help, not a label. Then look again in a few weeks. If the same shape is still there and the cause has gone, you are asking a different question, and it may be one of the three kinds.</p>
      <p><b>Don’t confuse it with</b> <i>A lasting way someone is</i>. “Ordinary” does not mean the person is fine. It means the case in front of you shows nothing more than a person having a hard time. Nobody should go without help because their reaction was ordinary.</p>`},
  {h:'The kinds side by side',
   b:`<p>This is the key’s first question: <i>What kind of thing is this?</i> Here are its three answers, what a case has to show for each, and where each one leads. The fourth line is only in this unit’s drill.</p>
      <table class="k">
      <tr><th>The answer</th><th>The case shows</th><th>Leads to</th></tr>
      <tr><td><i>One person’s reasoning</i></td><td>how one person reaches, defends or changes a view or a choice of their own</td><td>Five names (Unit Two)</td></tr>
      <tr><td><i>A move between people</i></td><td>something one person does to another in their dealings with each other</td><td>Five names (Unit Five)</td></tr>
      <tr><td><i>A lasting way someone is</i></td><td>how a person is across years, places and relationships, or a label that claims it</td><td>Six names (Units Three and Four)</td></tr>
      <tr><td><i>None of these: an ordinary reaction</i></td><td>a real cause, a reaction that fits it, and it passes</td><td>Nothing to name</td></tr>
      </table>
      <p>Two rules for when it is not clear:</p>
      <ul>
        <li>If a case could be reasoning or a move, ask who the words are for. Words that defend the speaker’s own choice are reasoning. Words that land on the other person’s memory, feelings or self-image are a move.</li>
        <li>If a case could be a lasting way or an ordinary reaction, count: years, places, people. One of each is a moment.</li>
      </ul>`},
  {h:'A worked example: reasoning or a move?',
   b:`<p class="lead">Nadia’s manager says in a one-to-one: “I didn’t say the report was due Friday. You must have misunderstood. Honestly, you’ve been making a lot of mistakes like this lately.” Afterwards, Nadia checks the email. It says Friday.</p>
      <p>Walk the key’s first question, <i>What kind of thing is this?</i>, one answer at a time.</p>
      <ol>
        <li><b><i>One person’s reasoning</i>?</b> The manager is explaining himself, so it can look like it. But look at whose words these are about: “You must have misunderstood” is about what Nadia remembers, and “you’ve been making a lot of mistakes” is about Nadia. They are not about his own choice. The tie-breaker says: who are the words for? Nadia.</li>
        <li><b><i>A lasting way someone is</i>?</b> The case is one meeting. “Lately” is a single word from the manager, and there is nothing to count: no years, no other places. Not enough for this answer.</li>
        <li><b><i>A move between people</i>?</b> Yes. “You must have misunderstood” works on what Nadia remembers, and “you’ve been making a lot of mistakes” works on how she sees herself. That is something one person does to another.</li>
      </ol>
      <p>The answer is <i>A move between people</i>. Notice what the key has and has not done. It has sent you to the questions in Unit Five. It has not said “gaslighting”. That name needs more than one reaction, and those questions are where you find out whether any named move fits at all.</p>`},
  {h:'A worked example: a hard moment or a lasting way?',
   b:`<p class="lead">For the last two weeks Ruth has been sharp with her team. Her mother died a fortnight ago, and she came back to work after four days.</p>
      <p>The key’s first question again: <i>What kind of thing is this?</i></p>
      <ol>
        <li><b><i>One person’s reasoning</i>?</b> No. Nothing in the case shows Ruth reaching, defending or changing a view or a choice. She is reacting.</li>
        <li><b><i>A move between people</i>?</b> No. Being sharp is not an attempt to work on what her team remember or believe. It is how she is coming across this fortnight.</li>
        <li><b><i>A lasting way someone is</i>?</b> Count. How long? “The last two weeks”. How many places? One, work. How many people? Her team. And the case gives a cause: “her mother died a fortnight ago”. Two weeks, one place, a real cause: that is a moment.</li>
        <li><b><i>None of these: an ordinary reaction</i>?</b> Yes. The words that decide it are “her mother died a fortnight ago”. The cause is big, the reaction fits it, and nothing says it will not pass.</li>
      </ol>
      <p>What would change the answer? If Ruth had been sharp with every team in every job for ten years, with no loss behind it, the count would be years, places and people. Then it would be <i>A lasting way someone is</i>.</p>`},
  {h:'Using the key on a real case',
   b:`<p>You will rarely get a tidy case. You will get a feeling (“he is such a narcissist”, “she keeps messing with my head”) and a few scraps of what happened. Here is what to do with it.</p>
      <ol>
        <li><b>Write down what you saw and heard</b>, in the actual words, with dates. Leave the label out. “He said it never happened” is something you saw. “He gaslit me” is a label.</li>
        <li><b>Ask the first question:</b> <i>What kind of thing is this?</i> Point to the words in your notes that give the answer. If you cannot point to any, you do not have an answer yet.</li>
        <li><b>Count</b> if it might be <i>A lasting way someone is</i>: how long, how many places, how many people.</li>
        <li><b>Say what you cannot know</b> from where you stand. You cannot see inside anyone’s head, and you have usually seen one side of one story. Be less sure the further away you are: you can say more about yourself than about a friend, and more about a friend than about a stranger online.</li>
      </ol>
      <p>Use it on yourself first. These things are easier to see in people you disagree with, and that is itself a trap. The key tells you what a case shows. It is not a diagnosis, and it never replaces a professional, for you or for anyone else.</p>`}
  ],
  drill:{kind:'pick', key:'u1'} },

{ id:'u3', tag:'Three', title:'Narcissism, outward and inward',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you will be able to tell confidence and self-esteem from narcissism, and to tell the two forms of narcissism apart: the loud one and the quiet one.</p>
      <p>This comes up when someone is called “a narcissist” for being proud of something, and when someone who seems shy or hurt turns out to be keeping score of every slight. The unit answers two questions of the key for a case that is <i>A lasting way someone is</i>: <i>What does the person most fear, or most need?</i> and <i>What does the person do when something goes against them?</i></p>
      <p>You will learn three names: <i>Outward narcissism (grandiose)</i>, <i>Inward narcissism (vulnerable)</i> and <i>Not enough for a disorder</i>. Unit Four adds the other answers to the same two questions.</p>`},
  {h:'What narcissism is',
   b:`<p><b>What it is.</b> Three things get mixed up. <b>Confidence</b> is believing you can do a particular thing: “I can fix this bike.” It goes up and down with the task. <b>Self-esteem</b> is a steady sense that you are worth something, whether or not you are winning. It sits comfortably with warmth, and with caring how other people feel.</p>
      <p><b>Narcissism</b> is different in kind. The person’s sense of worth depends on being seen as special, and on other people confirming it. Underneath is a fear of not being special, of not mattering. Other people are valued for what they supply: admiration, support, a place to stand. Their own side of things gets very little room.</p>
      <p><b>Example.</b> Two surgeons are both sure of themselves. A nurse points out a mistake in the notes. The first says, “Thanks, let me check that.” The second says, “Are you questioning me?” and talks about the nurse for the rest of the day. The difference is not how confident they are. It is what happens to their regard for the nurse once they are challenged.</p>
      <p><b>Sounds like.</b> “Do you know who you’re talking to?” “Nobody here appreciates what I do.” “I don’t need to listen, I’ve always been right about this.”</p>
      <p><b>Catch it.</b> Ask: <i>What does the person most fear, or most need?</i> and watch what happens to their regard for others when their picture of themselves is tested. A fear of not being special sits behind both forms of narcissism in the key. The next two cards show how each form looks from outside.</p>
      <p><b>What to do.</b> Do not judge by confidence. Judge by what happens to the person’s regard for others when something goes against them, and by whether it has been like this for years.</p>
      <p><b>Don’t confuse it with</b> <i>Not enough for a disorder</i>. Pride, a big personality and a taste for attention are all ordinary. Narcissism needs the need to be special, the fear under it, and little room for other people, all together and for a long time.</p>`},
  {h:'Outward narcissism (grandiose)',
   b:`<p><b>What it is.</b> Narcissism you can see from across the room. The person needs to be seen as superior and acts like it: takes credit, expects special treatment, talks over others, and treats people as an audience or as tools. The show is not confidence. It covers a fear of not being special, which is why anything that suggests they are not the best gets a fierce reaction: criticism, being passed over, someone else’s success. The anger or contempt lands on whoever they hold responsible. Psychologists say <i>grandiose</i> because the person is guarding a grand picture of themselves.</p>
      <p><b>Example.</b> Gareth, a regional sales director, has spent twenty years at three firms. Colleagues say he takes credit for team wins and has never thanked anyone. When a client pointed out an error in his proposal, he told people for a week that the client “doesn’t understand quality”, and left the junior who had spotted the problem out of meetings. His wife says he has never apologised for anything.</p>
      <p><b>Sounds like.</b> “That’s not my fault, the team executed badly.” “They were never going to appreciate someone like me.” “Do you know who I am?”</p>
      <p><b>Catch it.</b> You cannot see a fear. You can see what a person protects and what sets them off. Ask: what does the person most fear, or most need? If what you see is a fear of not being special, covered up by acting superior, the key’s answer is <i>Fear of not being special, covered up by acting superior</i>. Then ask: what does the person do when something goes against them? If it is blame, anger or contempt aimed at whoever they hold responsible, the answer is <i>Anger or contempt toward whoever they blame</i>.</p>
      <p><b>What to do.</b> Do not try to win the argument or prove them wrong. It will usually be heard as an attack. Keep requests short and specific, get agreements in writing, and do not count on an apology. If you work or live with someone like this and it is wearing you down, talk to someone outside the situation. Long-term professional help can make a difference, but you cannot make another person seek it.</p>
      <p><b>Don’t confuse it with</b> <i>Not enough for a disorder</i>. Plenty of confident people boast sometimes. The difference is what happens to their regard for others when they are challenged, and whether it has been like this for years or only on a proud day.</p>`},
  {h:'Inward narcissism (vulnerable)',
   b:`<p><b>What it is.</b> The same need and the same fear, turned the other way. The person does not show off. They seem shy, even humble, and rarely ask for anything. But their sense of worth still depends on being seen as special, and they feel the world keeps failing to see it. They notice every slight, feel under-appreciated and wronged, and keep a quiet tally of who got what they should have had.</p>
      <p>When something goes against them they do not hit out. They go hurt and silent, brood, feel sorry for themselves, and cool toward whoever is doing better. It is still all about themselves, and there is still very little room for the other person’s side. That is why it has the same family name as the loud form: the structure underneath is the same. It shows inward instead of outward. Psychologists say <i>vulnerable</i> because the person is so easily hurt.</p>
      <p><b>Example.</b> Tomas has worked at the same bank for eleven years and has never complained. At family dinners he notices who is asked about their holiday and who is not, and he is never asked. When his brother’s engagement was announced he said “lovely news” and left before the cake. He has not phoned his brother since. At work he once told a new colleague, quietly: “Some people just get noticed. I stopped expecting it years ago.”</p>
      <p><b>Sounds like.</b> “No, don’t worry about me.” “Of course, I wouldn’t expect anyone to notice.” “Some people just get all the luck.” And, more often, silence.</p>
      <p><b>Catch it.</b> Ask: what does the person most fear, or most need? If it is the same fear of not being special, but shown as hurt and quiet resentment, the key’s answer is <i>The same fear of not being special, shown as hurt and quiet resentment</i>. Then ask what they do when something goes against them. If it is hurt withdrawal, quiet resentment and self-pity, the answer is <i>Hurt withdrawal, quiet resentment, self-pity</i>.</p>
      <p><b>What to do.</b> Do not read the silence as a verdict on you, or as a puzzle you have to solve. Ask once, directly: “Is something bothering you?” Say what you can and cannot give. Do not keep the tally topped up by always giving way. People like this often carry real pain, such as anxiety and low mood, and may be more open to help than the loud form.</p>
      <p><b>Don’t confuse it with</b> a fair grievance, or with ordinary shyness or sadness. Someone who was overlooked, said so out loud and got over it is not this. The giveaway is that the grievance is never said, keeps growing, and ends up turned on people who did nothing to cause it.</p>`},
  {h:'Not enough for a disorder',
   b:`<p><b>What it is.</b> What most cases turn out to be. It covers real pride in something you did, confidence, a few narcissistic traits that everyone shows sometimes, and a hard moment. Most people sometimes boast, sulk, want to be admired or bite someone’s head off. A disorder needs much more: a way of being that is <i>lasting</i> (since early adulthood), <i>wide</i> (work, home and friends), <i>rigid</i> (much the same whatever the situation) and <i>costly</i> (real trouble for the person or the people around them). Several traits together, not one or two.</p>
      <p><b>Example.</b> Ravi has just sold his first painting. He tells everyone for a week, and he is a bit insufferable about it. When his flatmate’s story is published the next month, he cooks her dinner and means every toast. Pride, and his regard for her is untouched.</p>
      <p>One trait does not add up either. A father-in-law who tells the same stories about his career at every family meal, for thirty years, but asks about other people’s jobs and laughs when he is wrong about a date, has one lasting trait and nothing else.</p>
      <p><b>Sounds like.</b> “I’m proud of this, sorry for going on about it.” From outside: “He’s such a narcissist” about someone who put up a photo.</p>
      <p><b>Catch it.</b> Ask: what does the person most fear, or most need? If nothing stands out, the key’s answer is <i>None of these stands out: ordinary behaviour, or a reaction to stress</i>. Then ask what they do when something goes against them. If it is the sort of thing most people do now and then, the answer is <i>An ordinary reaction, the kind most people have now and then</i>.</p>
      <p><b>What to do.</b> Say what you saw, not what you think it is: “You’ve talked about it all week” rather than “you’re a narcissist”. If you have seen a few traits, keep counting: years, places, people. And hold back a label you cannot back up, especially about someone you already dislike.</p>
      <p><b>Don’t confuse it with</b> <i>Outward narcissism (grandiose)</i> or <i>Inward narcissism (vulnerable)</i>. The difference is not how much the person boasts or sulks. It is what happens to their regard for others when something goes against them, and whether it is the same across years and places.</p>`},
  {h:'What turns traits into a disorder',
   b:`<p><b>What it is.</b> Clinicians look for several of these things together, in a person who has been this way since early adulthood:</p>
      <ul>
        <li>needing a lot of admiration</li>
        <li>feeling entitled to special treatment</li>
        <li>using people</li>
        <li>little interest in how others feel</li>
        <li>envy</li>
        <li>arrogance</li>
        <li>daydreams of unlimited success</li>
        <li>a belief that they are special, or can only be understood by special people</li>
      </ul>
      <p>Most people show two or three of these sometimes. That is not the disorder.</p>
      <p>The disorder is when they are the person’s usual way of operating, in many parts of life, and cause real trouble: broken relationships, lost jobs, hurt people. “Real trouble” is what clinicians call <i>impairment</i>. Behaviour that only shows under stress, threat or grief does not count.</p>
      <p><b>Example.</b> Two colleagues both boast. One does it in the weeks before her review and not otherwise. The other has done it in four jobs, uses juniors to do his work and takes the credit, cannot hear criticism, and has lost two partners over it. The second case has several traits, years, many places and real trouble.</p>
      <p><b>Sounds like.</b> “He ticks every box.” “She has a few of those traits, so she must have it.”</p>
      <p><b>Catch it.</b> If you can count only one trait, one place or a short time, the key’s answer to <i>What does the person most fear, or most need?</i> is <i>None of these stands out: ordinary behaviour, or a reaction to stress</i>.</p>
      <p><b>What to do.</b> Treat this list as something you count, not as a checklist for judging people. Only a trained clinician, with a proper interview, can say whether someone has the disorder. You can say whether a case shows enough to be worth asking.</p>
      <p><b>Don’t confuse it with</b> a tally of traits. Counting traits is only one part. The same person also has to show them for years, in many places, with real trouble. Four traits in one bad month is still <i>Not enough for a disorder</i>.</p>`},
  {h:'The key’s two questions, side by side',
   b:`<p>Both questions are asked about a case that is <i>A lasting way someone is</i>. Here are the three answers this unit teaches, with the name each leads to. Unit Four adds three more answers to each question.</p>
      <p><b>What does the person most fear, or most need?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Fear of not being special, covered up by acting superior</i></td><td><i>Outward narcissism (grandiose)</i></td></tr>
      <tr><td><i>The same fear of not being special, shown as hurt and quiet resentment</i></td><td><i>Inward narcissism (vulnerable)</i></td></tr>
      <tr><td><i>None of these stands out: ordinary behaviour, or a reaction to stress</i></td><td><i>Not enough for a disorder</i></td></tr>
      </table>
      <p><b>What does the person do when something goes against them?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Anger or contempt toward whoever they blame</i></td><td><i>Outward narcissism (grandiose)</i></td></tr>
      <tr><td><i>Hurt withdrawal, quiet resentment, self-pity</i></td><td><i>Inward narcissism (vulnerable)</i></td></tr>
      <tr><td><i>An ordinary reaction, the kind most people have now and then</i></td><td><i>Not enough for a disorder</i></td></tr>
      </table>
      <p>“Something goes against them” can be criticism, being passed over, a failure, or someone else’s success. The key gives the same name from either question, and the two answers should agree. If they do not, you have not seen enough yet.</p>`},
  {h:'A worked example: a quiet case',
   b:`<p class="lead">Neil, 44, is a school caretaker. He is polite and never makes a fuss. His sister says that since their teens he has gone silent on anyone who got something he wanted: a cousin who went to university, a friend who bought a house, a colleague who became head of department. He still sends birthday cards. But he tells his sister: “Some people have it easy, and they never even notice.”</p>
      <ol>
        <li><b>What kind of thing is this?</b> Count. “Since their teens” is years, and the cousin, the friend and the colleague are different people in different places. The answer is <i>A lasting way someone is</i>.</li>
        <li><b>What does the person most fear, or most need?</b> You cannot see a fear, so look at what sets him off: other people’s success. There is no showing off, so it is not a fear covered up by acting superior. “Some people have it easy, and they never even notice” sounds like hurt at not being noticed. The answer is <i>The same fear of not being special, shown as hurt and quiet resentment</i>.</li>
        <li><b>What does the person do when something goes against them?</b> “He has gone silent on anyone who got something he wanted.” The answer is <i>Hurt withdrawal, quiet resentment, self-pity</i>.</li>
        <li><b>The name.</b> Both answers lead to <i>Inward narcissism (vulnerable)</i>.</li>
      </ol>
      <p>What would change the name? If Neil had told his cousin he was envious, got over it and still turned up to the graduation, that is ordinary disappointment, and the name would be <i>Not enough for a disorder</i>. And remember what you cannot know: this is his sister’s account of one side.</p>`},
  {h:'On a real person',
   b:`<p>You cannot diagnose anyone from a distance, and this key is not a diagnosis. What it can do is stop you from over-naming.</p>
      <ul>
        <li><b>Pride is not narcissism.</b> Someone proud of an achievement, who is still interested in you, is showing self-esteem.</li>
        <li><b>Watch the regard for others.</b> Notice what happens to their regard for others when something goes against them. That is the best single signal.</li>
        <li><b>Count.</b> Years, places and people. A hard fortnight is not a way of being.</li>
        <li><b>Check yourself first.</b> After criticism, did you listen? Did you go quiet and keep a tally? These are easier to see in others than in yourself.</li>
      </ul>
      <p>If someone close to you matches this and it is hurting you, a counsellor or doctor can help you with what to do, whatever you decide to call it.</p>`}
  ],
  drill:{kind:'pick', key:'u3'} },

{ id:'u4', tag:'Four', title:'Telling the lasting ways apart',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you will be able to tell three more lasting ways of being apart from narcissism and from each other, and to see when someone who is difficult is none of them.</p>
      <p>This comes up when someone says “that’s so borderline”, “she’s histrionic” or “he’s a sociopath” about a person who is simply intense, theatrical or ruthless. The unit answers the same two questions of the key as Unit Three, for a case that is <i>A lasting way someone is</i>: <i>What does the person most fear, or most need?</i> and <i>What does the person do when something goes against them?</i> This time you learn the other answers.</p>
      <p>You will learn three more names: <i>Fear of being left (borderline)</i>, <i>Need to be noticed (histrionic)</i> and <i>Disregard for others (antisocial, psychopathy)</i>.</p>`},
  {h:'Fear of being left (borderline)',
   b:`<p><b>What it is.</b> A lasting way of being in which the fear of being left sits at the centre of how someone deals with the people close to them. Even small signs, like a late reply or a cancelled plan, can feel like the start of being dropped. So feelings swing fast and hard: the person clings, lashes out, then pleads to put it right. They may see the other person as wonderful one day and terrible the next, and their picture of themselves swings too: “I always ruin everything” one hour, “you never cared” the next.</p>
      <p>Clinicians call this borderline. The name is old and tells you nothing about what the condition is, so this course uses the plain name first. It is real suffering, often tied to early pain. It is not “drama”, and the person is usually as frightened by the swings as the people around them.</p>
      <p><b>Example.</b> Miriam, 34, has three close friends. Each time one of them cancels or takes a day to reply, she writes a long message about how she must have done something wrong. If there is still no answer, she writes a second one saying they have always treated her badly. Twice she has blocked a friend, then written to say sorry and begged them back. It has happened in every close friendship since school.</p>
      <p><b>Sounds like.</b> “Please don’t leave me.” “I knew you’d go.” “I’m sorry, I’m sorry, I’m the worst.” Then, an hour later, “You never cared.”</p>
      <p><b>Catch it.</b> Ask: what does the person most fear, or most need? If it is the fear of being left, the key’s answer is <i>Fear of being left</i>. Then ask what they do when something goes against them. If it is panic, frantic attempts to put it right, or suddenly running the other person down, the answer is <i>Panic, frantic attempts to put it right, or suddenly running the other person down</i>. The name is <i>Fear of being left (borderline)</i>.</p>
      <p><b>What to do.</b> Stay calm and steady, and keep your own limits: “I’m not leaving. I need a few hours.” Do not match the swing, and do not treat either extreme as the truth about you. Encourage professional help. There are therapies designed for this, and many people improve a great deal over the years.</p>
      <p><b>Don’t confuse it with</b> <i>Outward narcissism (grandiose)</i>. The fear is of being left, not of not being special. When something goes against a narcissistic person, they push you away with contempt. A person with a fear of being left moves toward you in panic, even when they are furious.</p>`},
  {h:'Need to be noticed (histrionic)',
   b:`<p><b>What it is.</b> A lasting way of being in which the need to be noticed drives how someone acts. They want to be the centre of attention, and they do it with expression and display: dramatic stories, bold clothes, feelings that look bigger than the moment and shift quickly, and an eagerness to please that makes them easy to sway. They are often warm and good company. When the attention moves elsewhere, they turn the volume up to win it back. Clinicians say <i>histrionic</i>, from the word for “theatrical”.</p>
      <p><b>Example.</b> Beatriz, 38, is the first to arrive at any party and the last to leave. She tells every story as if on a stage, hugs people she met ten minutes ago, and adjusts her opinion to whoever she is talking to. When a colleague is applauded after a presentation, she tells a longer story about her own worst week, close to tears, until the room turns back toward her. She has been the same in every job and friendship.</p>
      <p><b>Sounds like.</b> “You will not believe what happened to me!” “I’m devastated, I can’t even talk about it.” (said across a whole table)</p>
      <p><b>Catch it.</b> Ask: what does the person most fear, or most need? If it is to be noticed, the key’s answer is <i>Need to be noticed: to be the centre of attention</i>. Then ask what they do when something goes against them. If it is displays that get bigger and are aimed at an audience, the answer is <i>Bigger and bigger displays, aimed at an audience</i>. The name is <i>Need to be noticed (histrionic)</i>.</p>
      <p><b>What to do.</b> Give real attention at quiet moments, so it does not have to be earned with volume. Do not tease or belittle. Do not assume every big feeling is fake: the feelings are usually real, only large. In a team, agree how meetings run so one person cannot take the whole room.</p>
      <p><b>Don’t confuse it with</b> <i>Outward narcissism (grandiose)</i>. Both enjoy attention. The histrionic person wants any attention, not admiration for being better. The test is what happens when attention moves to someone else: the histrionic person turns it up to win it back, and the narcissistic person runs down whoever has it. Being outgoing, dressing boldly or being emotional is none of this on its own.</p>`},
  {h:'Disregard for others (antisocial, psychopathy)',
   b:`<p><b>What it is.</b> A lasting way of being in which rules and other people’s rights carry little weight. It shows as routine lying, using people, impulsiveness, broken promises and little or no remorse for harm done. “Antisocial” here does not mean shy or unsociable. It means against other people’s rights. The person does not need to feel special or want admiration, and some are charming and calm.</p>
      <p>Psychopathy is the name for a colder, more calculating version, with very little feeling for others at all. “Sociopath” is a popular word and is not a clinical term, so this course does not use it.</p>
      <p><b>Example.</b> Rob runs a roofing firm. He tells customers the work is guaranteed for ten years, though the firm has closed and reopened under a new name three times, and he leaves four former employers owed money. When a customer rings about a leak, he laughs: “Welcome to the real world.” He gave each former employer a different story.</p>
      <p><b>Sounds like.</b> “Everybody does it.” “Nobody got hurt.” “Don’t be so sensitive.” All said calmly, with no sign of unease.</p>
      <p><b>Catch it.</b> Ask: what does the person most fear, or most need? If rules and other people’s claims carry little weight and there is no fear to speak of, the key’s answer is <i>No fear to speak of: rules and other people’s claims carry little weight</i>. Then ask what they do when something goes against them. If they stay calm and use it for their own ends, the answer is <i>Calm and unbothered: no upset, and uses it for their own ends</i>. The name is <i>Disregard for others (antisocial, psychopathy)</i>.</p>
      <p><b>What to do.</b> Protect yourself in practical ways: get promises in writing, keep money and access separate, check claims independently, and do not expect guilt to work. Do not confront alone if you feel unsafe, and get advice.</p>
      <p><b>Don’t confuse it with</b> <i>Outward narcissism (grandiose)</i>. A narcissistic person wants you to see them as superior. This person hardly cares what you think, only what you can give. And do not confuse it with a selfish or unkind person: selfishness is common. This is lying, rule-breaking and using people across years and places, with no remorse.</p>`},
  {h:'Not enough for a disorder: a difficult person',
   b:`<p><b>What it is.</b> The name for most difficult people. Being unkind, selfish, bad-tempered, shy, avoidant or sometimes sorry for yourself is not any of the five lasting ways in this course (the two kinds of narcissism, fear of being left, need to be noticed, and disregard for others). The key needs structure: what the person most fears or needs, and what they do when something goes against them, across years. Not how much you dislike them.</p>
      <p>Be careful with words that sound like names but are not: “toxic”, “narc”, “sociopath”, “main character energy”, and “gaslighting” for any disagreement. They are used as insults, and an insult cannot be checked against a case.</p>
      <p><b>Example.</b> Elise has a sharp tongue and can be selfish. She takes the last biscuit, forgets birthdays and says no to favours, and she always has. But she tells her friends what she thinks to their faces, is upset when she hurts someone, and has kept the same friends for twenty years. Nothing she does is built around a fear or a need.</p>
      <p><b>Sounds like.</b> “She’s so toxic.” “He’s a narc.” “Typical sociopath behaviour.”</p>
      <p><b>Catch it.</b> Ask the two questions. If the answers are <i>None of these stands out: ordinary behaviour, or a reaction to stress</i> and <i>An ordinary reaction, the kind most people have now and then</i>, the name is <i>Not enough for a disorder</i>.</p>
      <p><b>What to do.</b> Say what you do not like, in your own words: “I don’t like being interrupted.” A label ends the conversation, and a plain complaint can be answered.</p>
      <p><b>Don’t confuse it with</b> any of the five lasting ways. The difference is structure, not how much you dislike the person.</p>`},
  {h:'The lasting ways side by side',
   b:`<p>Both questions are asked about a case that is <i>A lasting way someone is</i>. Here are all six answers to each, with the name each leads to.</p>
      <p><b>What does the person most fear, or most need?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Fear of not being special, covered up by acting superior</i></td><td><i>Outward narcissism (grandiose)</i></td></tr>
      <tr><td><i>The same fear of not being special, shown as hurt and quiet resentment</i></td><td><i>Inward narcissism (vulnerable)</i></td></tr>
      <tr><td><i>Fear of being left</i></td><td><i>Fear of being left (borderline)</i></td></tr>
      <tr><td><i>Need to be noticed: to be the centre of attention</i></td><td><i>Need to be noticed (histrionic)</i></td></tr>
      <tr><td><i>No fear to speak of: rules and other people’s claims carry little weight</i></td><td><i>Disregard for others (antisocial, psychopathy)</i></td></tr>
      <tr><td><i>None of these stands out: ordinary behaviour, or a reaction to stress</i></td><td><i>Not enough for a disorder</i></td></tr>
      </table>
      <p><b>What does the person do when something goes against them?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Anger or contempt toward whoever they blame</i></td><td><i>Outward narcissism (grandiose)</i></td></tr>
      <tr><td><i>Hurt withdrawal, quiet resentment, self-pity</i></td><td><i>Inward narcissism (vulnerable)</i></td></tr>
      <tr><td><i>Panic, frantic attempts to put it right, or suddenly running the other person down</i></td><td><i>Fear of being left (borderline)</i></td></tr>
      <tr><td><i>Bigger and bigger displays, aimed at an audience</i></td><td><i>Need to be noticed (histrionic)</i></td></tr>
      <tr><td><i>Calm and unbothered: no upset, and uses it for their own ends</i></td><td><i>Disregard for others (antisocial, psychopathy)</i></td></tr>
      <tr><td><i>An ordinary reaction, the kind most people have now and then</i></td><td><i>Not enough for a disorder</i></td></tr>
      </table>
      <p>Three tie-breakers for the look-alikes:</p>
      <ul>
        <li><b>Narcissism or fear of being left?</b> When something goes against them, the narcissistic person pushes you away with contempt. The person with a fear of being left moves toward you in panic.</li>
        <li><b>Narcissism or need to be noticed?</b> When attention moves to someone else, the narcissistic person runs that person down. The person with a need to be noticed turns it up to win attention back.</li>
        <li><b>Narcissism or disregard for others?</b> One needs you to think they are superior. The other hardly cares what you think, only what you can give.</li>
      </ul>`},
  {h:'A worked example: a confident man who is none of the loud ones',
   b:`<p class="lead">Lukas, 40, runs a small import business. Suppliers say he is charming for a few weeks and then stops paying. He has done it to five suppliers in eight years. When one rang to complain, Lukas laughed and said he would “think about it”. A friend says he is a narcissist because he is so confident.</p>
      <ol>
        <li><b>What kind of thing is this?</b> “Five suppliers in eight years” is years, and many people. The answer is <i>A lasting way someone is</i>.</li>
        <li><b>What does the person most fear, or most need?</b> Look at what he protects. He does not defend a picture of himself as special, and he does not beg anyone not to leave. What stands out is that five suppliers’ claims do not weigh with him. The answer is <i>No fear to speak of: rules and other people’s claims carry little weight</i>. The friend’s “narcissist” fails here: confidence is not a need to be seen as special.</li>
        <li><b>What does the person do when something goes against them?</b> A supplier complains, and Lukas laughs. There is no upset and no show, and the delay is for his own benefit. The answer is <i>Calm and unbothered: no upset, and uses it for their own ends</i>.</li>
        <li><b>The name.</b> Both answers lead to <i>Disregard for others (antisocial, psychopathy)</i>.</li>
      </ol>
      <p>What would change the name? If Lukas had paid up after one letter and been ashamed, it would be ordinary business trouble, and the name would be <i>Not enough for a disorder</i>. What you cannot know from here is whether the suppliers have heard his side.</p>`}
  ],
  drill:{kind:'pick', key:'u4'} },

{ id:'u5', tag:'Five', title:'Moves between people',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you will be able to recognise four moves one person can make on another, and to tell them from the ordinary defensiveness and disagreement that make up most arguments.</p>
      <p>This comes up whenever someone says “you’re gaslighting me” in the middle of a row, or wonders whether the person who was so wonderful in the first month was “love-bombing”. The unit answers two questions of the key for a case that is <i>A move between people</i>: <i>What is the move doing to the other person?</i> and <i>How much of it is there?</i></p>
      <p>A move that works on what another person remembers, feels or does is called a tactic. You will learn four, and one name for when it is not a tactic at all: <i>Gaslighting</i>, <i>Turning the blame around (DARVO)</i>, <i>Love-bombing, then pulling back</i>, <i>Pinning your own feeling on someone else (projection)</i> and <i>Not a tactic</i>.</p>`},
  {h:'Gaslighting',
   b:`<p><b>What it is.</b> Denying what another person remembers, saw or feels, over and over, until they start to doubt their own mind. The word comes from an old film in which a husband dims the lights and tells his wife she is imagining it. Two things make it gaslighting: it repeats, and it works. The person on the receiving end starts checking their memory with other people, or writing things down, before they trust it.</p>
      <p>One mistaken memory is not gaslighting, and neither is two people remembering a night differently. It is the flat “that never happened”, said again and again about things that did, until you stop trusting yourself.</p>
      <p><b>Example.</b> Whenever Jun raises something his mother said at the last family dinner, she says, “I never said that. You always twist things.” Last month Jun recorded a call. When he played it back, she said, “I don’t remember that. You must have edited it.” Jun now writes down what people say to him, and checks with his sister before he trusts what he remembers.</p>
      <p><b>Sounds like.</b> “That never happened.” “You’re imagining things.” “You always remember it wrong.” “I never said that,” when they did.</p>
      <p><b>Catch it.</b> Ask: what is the move doing to the other person? If it is making them doubt their own memory or perception, again and again, the key’s answer is <i>Making them doubt their own memory or perception, again and again</i>. Then ask: how much of it is there? It repeats, so the answer is <i>More than one reaction: it repeats, builds, or comes in connected parts</i>.</p>
      <p><b>What to do.</b> Keep your own record: dates, saved messages, a note made the same day. Check what happened with someone you trust who is outside the relationship. Notice the effect on you: do you now check with others before you trust your own memory? If so, tell someone. If you may be controlled in other ways too, talk to a professional or a helpline.</p>
      <p><b>Don’t confuse it with</b> an honest disagreement about what happened. Two people remember the same evening differently, and each says “I remember it differently”. There is no flat denial, it does not repeat, and you do not come away doubting yourself.</p>`},
  {h:'Turning the blame around (DARVO)',
   b:`<p><b>What it is.</b> A three-part reply to being accused of something you did. <b>D</b>eny that it happened. <b>A</b>ttack whoever raised it. <b>R</b>everse <b>V</b>ictim and <b>O</b>ffender, so that the person who raised the problem ends up defending themselves. The letters spell DARVO. The three parts come one after another, often in a single conversation, and one conversation with all three parts is enough.</p>
      <p>It is not what happens when someone is wrongly accused. If the accusation is false, calmly saying so and giving your side is just defending yourself accurately. The denial in DARVO is a denial of something that did happen.</p>
      <p><b>Example.</b> A restaurant owner is told by a waiter that tips have been going missing. “That’s not true,” he says. Then: “You’ve been late four times this month. Nobody can trust you.” Then, to the rest of the staff: “I can’t believe I’m being targeted like this after everything I’ve done for you all.” By the end of the shift the waiter is apologising.</p>
      <p><b>Sounds like.</b> “That never happened.” “You’re the one who …” “I can’t believe you would accuse me.” “I’m the one being attacked here.”</p>
      <p><b>Catch it.</b> Ask: what is the move doing to the other person? If it is denying it, attacking whoever raised it, and making themselves the victim, the key’s answer is <i>Denying it, attacking whoever raised it, and making themselves the victim</i>. Then ask: how much of it is there? The three parts come one after another, so the answer is <i>More than one reaction: it repeats, builds, or comes in connected parts</i>.</p>
      <p><b>What to do.</b> Do not follow the new topic. Go back to the first one: “I’d like to come back to the tips.” Keep to facts, put it in writing, and take it to someone with authority if you can. Do not expect an admission in the moment.</p>
      <p><b>Don’t confuse it with</b> <i>Not a tactic</i>. One defensive reply, such as “that’s not fair”, followed by an explanation, has no attack in it and no reversal. DARVO needs all three parts.</p>`},
  {h:'Love-bombing, then pulling back',
   b:`<p><b>What it is.</b> A flood of praise, attention and talk of the future very early in a relationship, far more than the time you have known each other would explain. It makes you feel special and attached quickly. Then, once you are attached, it cools: criticism, withdrawal or conditions. The warmth is switched on and off, and you start working to get it back.</p>
      <p>Early enthusiasm on its own is normal. What makes it a move is the size and speed compared with how well they know you, and that it is withdrawn when you do not do what they want.</p>
      <p><b>Example.</b> Meera met Callum at a friend’s wedding. By the second date he had called her “the one”. By the fourth he had bought her a coat. By the second week he had told her friends she was perfect. In the third month she went on a work trip without him, and he went cold for a week. When she asked what was wrong, he said: “I thought you were different from the others who put work first.” Now she checks his tone before she makes plans.</p>
      <p><b>Sounds like.</b> “I’ve never felt like this about anyone.” “You’re perfect.” “We should move in.” Later: “I thought you were different.” “You’ve changed.”</p>
      <p><b>Catch it.</b> Ask: what is the move doing to the other person? If it is showering them with praise and attention, then pulling back or criticising, the key’s answer is <i>Showering them with praise and attention, then pulling back or criticising</i>. Then ask: how much of it is there? The flood and the pulling back are two connected parts, so the answer is <i>More than one reaction: it repeats, builds, or comes in connected parts</i>.</p>
      <p><b>What to do.</b> Slow things down. Notice what happens when you say no or ask for time. Keep your own friends, work and plans. Warmth that stays when you set a limit is fine. Warmth that disappears is the thing to take seriously.</p>
      <p><b>Don’t confuse it with</b> honest early excitement. Excited people can hear “I need a weekend to myself” without going cold. And do not confuse it with a relationship that has cooled for ordinary reasons, with no punishment attached.</p>`},
  {h:'Pinning your own feeling on someone else (projection)',
   b:`<p><b>What it is.</b> Accusing someone of a feeling or fault that is really your own. It is one of the ways people protect themselves from a feeling they cannot stand to own. Psychologists call these defence mechanisms. Most of them happen privately, inside one head. Projection is the one that lands on another person, which is why it is in this unit.</p>
      <p>The person is not usually lying. They honestly see the feeling in the other person, because they cannot see it in themselves.</p>
      <p><b>Example.</b> Dana has been padding her expense claims for months. When the new hire submits his first claim, she tells the finance manager: “I wouldn’t trust that man. People like him always fiddle their claims.” She says it again in the next two weeks, with nothing to show for it.</p>
      <p><b>Sounds like.</b> Accusations with no evidence, which match the accuser’s own behaviour or wish: “You’re the one who’s jealous.” “I know you want to leave.” “You’re hiding something.”</p>
      <p><b>Catch it.</b> Ask: what is the move doing to the other person? If it is accusing them of a feeling or fault that is really the accuser’s own, the key’s answer is <i>Accusing them of a feeling or fault that is really the accuser’s own</i>. Clues: no evidence, it matches something the accuser is doing or wanting, and it keeps coming back. Then ask: how much of it is there? <i>More than one reaction: it repeats, builds, or comes in connected parts</i>.</p>
      <p><b>What to do.</b> Ask for the evidence, calmly: “What have you seen that makes you think that?” Do not defend yourself line by line. You cannot disprove a feeling that is not yours. If you suspect you do this yourself, notice when you feel sure of someone’s bad motives without any evidence, and ask: is this a feeling I have?</p>
      <p><b>Don’t confuse it with</b> a true accusation with evidence behind it, or with <i>Gaslighting</i>. Gaslighting denies what you remember. Projection hands you a feeling or fault that belongs to the accuser.</p>`},
  {h:'Not a tactic',
   b:`<p><b>What it is.</b> What most arguments are. People get defensive when they are accused: “That’s not what I meant!” They forget things, cancel plans, get annoyed and say sharp words. A single defensive reply, slip or disagreement, with nothing bigger behind it, is just that. It is also not gaslighting: two people who remember a night differently, and say so, are not making each other doubt themselves. There is no repeat, no build-up, and nobody ends up doubting themselves.</p>
      <p>Because an argument is something one person says to another, the key’s first question still sends it here, as <i>A move between people</i>. The two questions after it then tell you whether it is one of the four moves or none of them.</p>
      <p><b>Example.</b> Anneke’s colleague points out that she sent the wrong version of a file. “I thought you’d approved that one,” she says, stung. Ten minutes later she sends the right version and writes: “Sorry, my mistake.”</p>
      <p><b>Sounds like.</b> “That’s not what I meant.” “I was just tired.” “Sorry, I was out of order.”</p>
      <p><b>Catch it.</b> Ask: what is the move doing to the other person? If it is a single defensive reply, a slip or a disagreement, with nothing bigger behind it, that is the key’s answer <i>A single defensive reply, slip or disagreement, with nothing bigger behind it</i>. Then ask: how much of it is there? <i>One reaction on its own</i>.</p>
      <p><b>What to do.</b> Do not label it. Say what you need: “I felt blamed.” Let one reaction be one reaction. If it repeats and builds, ask the two questions again.</p>
      <p><b>Don’t confuse it with</b> <i>Turning the blame around (DARVO)</i>. A defensive reply is one part. DARVO is three: a denial, an attack on whoever raised it, and a reversal, in order.</p>`},
  {h:'The moves side by side',
   b:`<p>Both questions are asked about a case that is <i>A move between people</i>. Here are the answers, with the name each leads to.</p>
      <p><b>What is the move doing to the other person?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Making them doubt their own memory or perception, again and again</i></td><td><i>Gaslighting</i></td></tr>
      <tr><td><i>Denying it, attacking whoever raised it, and making themselves the victim</i></td><td><i>Turning the blame around (DARVO)</i></td></tr>
      <tr><td><i>Showering them with praise and attention, then pulling back or criticising</i></td><td><i>Love-bombing, then pulling back</i></td></tr>
      <tr><td><i>Accusing them of a feeling or fault that is really the accuser’s own</i></td><td><i>Pinning your own feeling on someone else (projection)</i></td></tr>
      <tr><td><i>A single defensive reply, slip or disagreement, with nothing bigger behind it</i></td><td><i>Not a tactic</i></td></tr>
      </table>
      <p><b>How much of it is there?</b></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The names it allows</th></tr>
      <tr><td><i>More than one reaction: it repeats, builds, or comes in connected parts</i></td><td>the first four</td></tr>
      <tr><td><i>One reaction on its own</i></td><td><i>Not a tactic</i></td></tr>
      </table>
      <p>Two tie-breakers:</p>
      <ul>
        <li><b>Gaslighting or turning the blame around?</b> Gaslighting is about your memory, over time: it makes you doubt yourself. Turning the blame around is about being accused: a denial, an attack and a reversal, in order.</li>
        <li><b>Any of the four or not a tactic?</b> One reaction is not a move. If you cannot point to a repeat, a build-up or connected parts, the answer is <i>One reaction on its own</i>.</li>
      </ul>`},
  {h:'A worked example: three parts in one conversation',
   b:`<p class="lead">Beth manages a shop. The area manager asks why the till was short two weeks running. Beth says: “That’s not true, the till was fine.” The area manager shows her the count sheets. Beth says: “You’ve never liked me. You’ve been looking for a reason since I got this job.” By the end of the meeting the area manager is saying: “I’m sorry you feel that way. Let’s put this aside.”</p>
      <ol>
        <li><b>What kind of thing is this?</b> The words are aimed at the area manager: at what the sheets show, and at her motives. That is something one person does to another. The answer is <i>A move between people</i>.</li>
        <li><b>What is the move doing to the other person?</b> “That’s not true” is a denial. “You’ve never liked me” is an attack on whoever raised it. And “I’m sorry you feel that way” shows the roles reversed: the area manager is now the one apologising. The answer is <i>Denying it, attacking whoever raised it, and making themselves the victim</i>.</li>
        <li><b>How much of it is there?</b> It is one meeting, but it has three parts in order. Three connected parts count. The answer is <i>More than one reaction: it repeats, builds, or comes in connected parts</i>.</li>
        <li><b>The name.</b> Both answers lead to <i>Turning the blame around (DARVO)</i>.</li>
      </ol>
      <p>What would change the name? If the sheets showed the till was fine, “That’s not true” would be an accurate defence, and the case would be <i>Not a tactic</i>. And if Beth had said only “That’s not fair, I need to check” and then checked, it would be one defensive reply. What you cannot know from here is whether she believes what she says.</p>`},
  {h:'On a real case',
   b:`<p>Real cases are messier than these, and the names are easy to reach for. Some habits help.</p>
      <ul>
        <li><b>Name the move, not the person.</b> “That was a way of turning the blame around” can be checked against what was said. “You’re a gaslighter” cannot, and it ends the conversation.</li>
        <li><b>Check how much there is.</b> One reaction is one reaction. Look for a repeat, a build-up, or connected parts, and keep dated notes.</li>
        <li><b>Check the effect on you.</b> The surest sign is that you are changing what you do or trust because of it: double-checking your memory, putting off plans, apologising for things you did not do.</li>
        <li><b>Check your own part.</b> Everyone gets defensive. If you have done the same thing in this row, say so first.</li>
      </ul>
      <p>If you feel unsafe, controlled or cut off from other people, tell someone you trust, a professional or a helpline. This key can help you look at a case clearly. It does not replace that.</p>`}
  ],
  drill:{kind:'pick', key:'u5'} },

{ id:'u6', tag:'Six', title:'The whole key',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you will be able to take a case you have never seen, with nothing labelled, run it through the whole key, and reach one name, with the words in the case that earned each answer.</p>
      <p>This is what you do with a real situation: a story from a friend, a thread at work, something you did yourself. The first question of the key is <i>What kind of thing is this?</i> Each answer sends you to its own two questions. Last comes the name.</p>
      <p>In the practice, between the case and the questions, a readout lists the sixteen names and crosses off the ones your answers have ruled out. Nothing in it can be tapped. Your name and your route are scored separately. A right name reached by the wrong route counts as a miss, because a name you cannot reach from the questions will not hold on a case you have never seen.</p>`},
  {h:'The questions in order',
   b:`<p>Every case gets the same first question. After that, the questions depend on the answer.</p>
      <ol>
        <li><b>The first question:</b> <i>What kind of thing is this?</i> The answers are <i>One person’s reasoning</i>, <i>A move between people</i> and <i>A lasting way someone is</i> (Unit One).</li>
        <li><b>If the answer is</b> <i>One person’s reasoning</i>, ask <i>What does the reasoning start from?</i> and then <i>What does the reasoning do?</i> (the next card, and Unit Two).</li>
        <li><b>If the answer is</b> <i>A move between people</i>, ask <i>What is the move doing to the other person?</i> and then <i>How much of it is there?</i> (Unit Five).</li>
        <li><b>If the answer is</b> <i>A lasting way someone is</i>, ask <i>What does the person most fear, or most need?</i> and then <i>What does the person do when something goes against them?</i> (Units Three and Four).</li>
        <li><b>The name.</b> The readout shows what is left. Pick the name that your answers lead to.</li>
      </ol>
      <p>Answer each question from the words in the case, and be ready to say which words. If you cannot point to any, you do not have an answer yet. A question the case cannot answer is worth noticing too: the case may not give enough to name.</p>`},
  {h:'Inside One person’s reasoning',
   b:`<p class="lead">When the first answer is <i>One person’s reasoning</i>, the key asks two more questions. Unit Two taught the second one, <i>What does the reasoning do?</i> In the practice, a quick first look comes before it: <i>What does the reasoning start from?</i></p>
      <p><b>What it is.</b> The first look has three answers. Each one leaves fewer names for the second question to choose from. Give the answer the case shows.</p>
      <ul>
        <li><i>An answer already chosen, before any search began.</i> Give this when the person sets out on a search to settle a choice or a question (asking around, reading, testing, interviewing) and the case shows they had already decided before it began. “She chose the second-hand van before she looked at any other, then read only the reviews of that van.” One name is left: <i>Motivated reasoning</i>.</li>
        <li><i>Something already done, spent or believed, that the person is protecting.</i> Give this when the person is defending a choice they made, time or money already spent, or a view they already hold, and there is no search they set out on with the answer chosen. “I always say I never gossip, but telling you doesn’t count.” Three names are left: <i>Cognitive dissonance reduction</i>, <i>Sunk cost fallacy</i> and <i>Confirmation bias</i>.</li>
        <li><i>The facts, whichever way they point.</i> Give this when facts about the matter are in the case and the person lets them decide, even against what they hoped. “The sums came out worse than I thought, so I’m dropping the plan.” One name is left: <i>Fair reasoning</i>.</li>
      </ul>
      <p><b>Example.</b> Nell’s manager asks which supplier to switch to. Nell had already chosen the one she liked. She phones three suppliers and asks each of them one question: what is good about the supplier she liked. She set out on a search, and the answer was chosen before it began, so the first answer fits.</p>
      <p><b>Sounds like.</b> The first answer: “I looked into it, and I was right.” The second: “I can’t stop now.” “It doesn’t count.” “I’ve always said so.” The third: “I checked, and I was wrong.”</p>
      <p><b>Catch it.</b> Find the place in the case where the person made up their mind, and the place where they started looking. If the looking started after the mind was made up, it is the first answer. If the person is protecting something already done, spent or believed, and did not set out on a search, it is the second. If the facts moved them, it is the third.</p>
      <p><b>What to do.</b> Make the first look from the words in the case, and be ready to point to them. If you cannot say whether a search began, you cannot give the first answer.</p>
      <p><b>Don’t confuse it with</b> a near miss: the first and second answers can both show a person being hard on the evidence they do not like. The difference is whether they set out on a search with the answer already chosen. If they did, that decides it, even if they also went hard on the evidence they did not like afterwards, and the name is <i>Motivated reasoning</i>. <i>Confirmation bias</i> is for a view already held and evidence that turns up, with no search that the person set out on.</p>
      <p>The second question picks the name. It is <i>What does the reasoning do?</i></p>
      <table class="k">
      <tr><th>The key’s answer</th><th>The name</th></tr>
      <tr><td><i>Adds a reason why what they did is fine after all</i></td><td><i>Cognitive dissonance reduction</i></td></tr>
      <tr><td><i>Tests evidence against their view harder than evidence for it</i></td><td><i>Confirmation bias</i></td></tr>
      <tr><td><i>Gives what is already spent as the reason to keep going</i></td><td><i>Sunk cost fallacy</i></td></tr>
      <tr><td><i>Gives every fact the same test, and goes where the facts point</i></td><td><i>Fair reasoning</i></td></tr>
      <tr><td><i>Chooses the answer first, then searches for support</i></td><td><i>Motivated reasoning</i></td></tr>
      </table>`},
  {h:'Nothing to name',
   b:`<p><b>What it is.</b> Three of the sixteen names say that nothing is wrong: <i>Fair reasoning</i>, <i>Not a tactic</i> and <i>Not enough for a disorder</i>. Most real cases end at one of them, and the key gives them the same care as the rest. The first question has no “nothing” answer, so a case with nothing to name finds its way there through the later questions.</p>
      <p>If the case is about reasoning and the facts get the same test, you reach <i>Fair reasoning</i>. If it is about a move and it is a single defensive reply, slip or disagreement on its own, you reach <i>Not a tactic</i>. If it is about a lasting way of being and the answers are <i>None of these stands out: ordinary behaviour, or a reaction to stress</i> and <i>An ordinary reaction, the kind most people have now and then</i>, you reach <i>Not enough for a disorder</i>.</p>
      <p><b>Example.</b> Two weeks into a new job, Imogen tells her sister that her manager is “obviously a narcissist”. He sent her report back twice and did not say thank you. That is everything she has seen of him.</p>
      <p><b>Sounds like.</b> A label from someone who has seen one moment: “Obviously borderline.” “Such a narcissist.” “That’s gaslighting.”</p>
      <p><b>Catch it.</b> A label is a claim about a lasting way someone is, so a case where someone puts a label on one moment goes to <i>A lasting way someone is</i>, and the later questions test it. If there is no fear or need that stands out and the reaction is the kind most people have now and then, the label fails.</p>
      <p><b>What to do.</b> Hold the label back. Say what you saw. Offer help if there is a real cause. Withholding a name you cannot back up is a skill, and probably the most useful one in this course.</p>
      <p><b>Don’t confuse it with</b> a case that is simply hard to read. If a case does not give you enough to answer a question, find out more before you name it. “Nothing to name” is something the questions show, not a place to hide from them.</p>`},
  {h:'A worked example: the whole key on a reasoning case',
   b:`<p class="lead">Femi has believed for years that his old landlord cheated him out of his deposit. Last week a friend showed him the signed inventory, dated photos and the repair invoice, which together explain the deduction. Femi says: “Those photos could be from anywhere, and invoices can be faked.” Then he shows his friend a text from the landlord that he says proves it. He does not check when it was sent or what it refers to. “That’s all I need,” he says.</p>
      <ol>
        <li><b>What kind of thing is this?</b> The case shows how one person defends a view of his own, that the landlord cheated him. Nobody is being worked on, and he is not described as being this way across years. The answer is <i>One person’s reasoning</i>.</li>
        <li><b>What does the reasoning start from?</b> “Has believed for years”: something already believed, which he is protecting. He did not set out on a search with the answer chosen. The answer is <i>Something already done, spent or believed, that the person is protecting</i>. That leaves three names.</li>
        <li><b>What does the reasoning do?</b> Evidence against his view (the inventory, the photos, the invoice) gets “could be from anywhere” and “can be faked”. The evidence for it (the text) gets no questions at all. The answer is <i>Tests evidence against their view harder than evidence for it</i>.</li>
        <li><b>The name.</b> <i>Confirmation bias</i>.</li>
      </ol>
      <p>What would change the name? If Femi had asked the same questions of his own text (when was it sent, what does it refer to?) and then changed his mind, or kept it because the text held up, it would be <i>Fair reasoning</i>. If he had set out to settle it by gathering evidence with the answer already chosen, it would be <i>Motivated reasoning</i>.</p>`},
  {h:'A worked example: a label on one moment',
   b:`<p class="lead">Priya cried at her performance review. A colleague writes in the team chat: “Classic histrionic, honestly.” Priya has never done anything like it in four years on the team, and her review was the day after her dog died.</p>
      <ol>
        <li><b>What kind of thing is this?</b> “Classic histrionic” is a label, and a label claims a lasting way someone is. So the answer is <i>A lasting way someone is</i>. The question now is whether the case earns it.</li>
        <li><b>What does the person most fear, or most need?</b> “Never done anything like it in four years” shows nothing about a need to be noticed. There is no sign of one, and a real cause is in the case: the day after her dog died. The answer is <i>None of these stands out: ordinary behaviour, or a reaction to stress</i>.</li>
        <li><b>What does the person do when something goes against them?</b> She cried at a hard review, once. The answer is <i>An ordinary reaction, the kind most people have now and then</i>.</li>
        <li><b>The name.</b> <i>Not enough for a disorder</i>.</li>
      </ol>
      <p>What would change the name? If for years, in several jobs, she had turned every event into a show and raised the volume whenever attention moved away, the answer to the first question would be <i>Need to be noticed: to be the centre of attention</i>. And what you cannot know from here is what the colleague has seen before.</p>`},
  {h:'Your own case',
   b:`<p>You will not be handed a labelled case in real life. Here is what to look for, what to ask, and what you cannot know.</p>
      <ol>
        <li><b>What to look for.</b> What was actually said and done, in the actual words, with dates. Who it was aimed at. How long it has gone on, in how many places, with how many people. What else is going on in the person’s life.</li>
        <li><b>What to ask.</b> The first question, <i>What kind of thing is this?</i>, and then the two questions for that kind, one at a time. For each answer, point to the words that give it.</li>
        <li><b>What you cannot know.</b> What was meant. What the other side would say. What happened before you arrived. Whether a clinician would see something you cannot. The further you are from the person, the less you can say.</li>
        <li><b>What to do.</b> Each name has a “What to do” on its own card. For almost all of them it starts the same way: keep your own record, say what you saw rather than what you think it is, and ask for help if it is hurting you.</li>
      </ol>
      <p>Start with yourself. If your answer to the first question is always about somebody else, check whether you are doing the same thing.</p>`}
  ],
  drill:{kind:'det'} }
];

const PSYCHOLOGY = {
  id:'psychology',
  topics:'Reasoning that protects you · Narcissism and its look-alikes · Moves between people',
  intro:'Run each case through the key’s questions before naming it. A right name reached by the wrong route counts as a miss.',
  outcomes: PSYCH_OUTCOMES,
  determination: { gateCode:'D1', steps:[PSYCH_GATE], stepsByGate:PSYCH_STEPS_BY_GATE },
  determinationIntro:`<p>You are running each case through the key. Answer the first question, then the two that follow for that kind, and only then name it.</p>
      <ol>
        <li>Read the case.</li>
        <li><b>The first question.</b> <i>What kind of thing is this?</i> The next questions unlock in order, and they depend on this answer.</li>
        <li><b>The next two questions</b>, for the kind you chose.</li>
        <li><b>The name.</b> Pick the name your answers lead to, and record it.</li>
      </ol>
      <p>The list between the case and the questions is a readout, not a control. It crosses off names your answers have ruled out. Nothing there can be tapped.</p>
      <p>Your name and your route are scored separately. A right name from the wrong route counts as a miss.</p>`,
  falsLabel:'What would make it a different name',
  specimens: PSYCH_SPECIMENS,
  quickDrills: [
    {key:'u1', title:'What kind of thing is this?', prompt:'What kind of thing is this?', items:U1_DRILL, opts:U1_OPTS},
    {key:'u3', title:'Narcissism, outward and inward', prompt:'Which name fits best?', items:U3_DRILL, opts:U3_OPTS},
    {key:'u4', title:'Telling the lasting ways apart', prompt:'Which name fits best?', items:U4_DRILL, opts:U4_OPTS},
    {key:'u5', title:'Moves between people', prompt:'Which name fits best?', items:U5_DRILL, opts:U5_OPTS}
  ],
  errDrill: PSYCH_ERR,
  course: PSYCH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'u1', label:'What kind of thing'}, {key:'u3', label:'Narcissism'},
    {key:'u4', label:'Lasting ways'}, {key:'u5', label:'Moves between people'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>This is not a diagnostic tool, and it does not make you one.</b> A real diagnosis needs a licensed clinician, a structured interview, and ruling out other explanations: medical conditions, substance use, a recent shock, and trauma reactions that look like personality problems.</li>
    <li><b>A lasting, wide, rigid and costly way of being is required</b> before any disorder label. A handful of matching traits is not a disorder. Treat the descriptions as rough portraits, not a checklist.</li>
    <li><b>The categories are contested, even among clinicians.</b> The DSM-5, the US manual of diagnoses, has its own alternative model that treats personality problems as a matter of degree, not as separate boxes. Several can overlap, and trained clinicians disagree on borderline cases.</li>
    <li><b>These words are also weapons.</b> “Narcissist”, “gaslighting”, “toxic” and “sociopath” are used constantly online to condemn rather than describe.</li>
    <li><b>Diagnosing at a distance is unreliable.</b> Public figures, exes, and coworkers you have never had a real conversation with: be less sure the further away you are, not more.</li>
    <li><b>Watch your own reasoning while you use the key,</b> especially about people you already have strong feelings about.</li>
    <li><b>Cultural and situational differences are real.</b> Do not let the key turn a difference in culture or circumstances into a problem with the person.</li>
    <li><b>None of this replaces professional help,</b> for yourself or for a relationship where someone is making moves on you that frighten you or cut you off.</li>
  </ul>`
};

FC.legacy('psychology', PSYCHOLOGY);
