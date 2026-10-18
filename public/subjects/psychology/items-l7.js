// Psychology, lesson 7, the mixed drill: the worked story and the stories of the practice and the check. The practice runs the owner's own course stories
// (Lesson 6, Mixed Identification Drill: item 9 is the worked one; items 1, 4, 5, 6, 11, 12, 13 and 14 are the practice set, with one new projection
// story). The check is ten new stories, eight to pass, using only names the practice set worked. Every story asks the
// questions in order (Question 1 and Question 2 only where they decide), then the name, then the response where it is a real choice; a story counts as right
// only when every answer is right, so a skipped step fails it (the course's "grade the process"). Every item offers the one name list PSY_NAMES.l7 and the
// one response list PSY_ACTS.l7. The course's items 2, 3, 7, 8 and 10 and one new story wait for the review. No real person is described.
(() => {
  const C = spec => psyCase({ strand: 'mixed', names: PSY_NAMES.l7, acts: PSY_ACTS.l7, ...spec });
  FC.items('psychology', [
    // ----- the worked story (the course's item 9, with the contempt it needs): every question, in order -----
    C({ id: 'l7-w-credit', story: 'In twenty years at three companies, he has never once said "I was wrong." When a project he championed fails, it is always the team\'s poor work. When one succeeds, he retells his original vision to anyone who will listen. The one engineer who questioned his plan, he called "a nobody" in front of the whole team.',
      asks: { kind: 'pattern', span: 'years', name: 'grandiose', act: 'limit' },
      steps: [
        { id: 'q1', does: 'Question 1. What is going on?', working: 'Not one argument or one move: it is how he is with every team. Question 1: a lasting way someone is.', ask: 'kind' },
        { id: 'q2', does: 'Question 2. One moment, or a lasting pattern?', working: 'Twenty years, three companies, many people, and no hard time named. Question 2: over and over, for months or years.', ask: 'span' },
        { id: 'q3', does: 'Questions 3 to 5, then the name.', working: 'Question 3, what it does for him: keeps the credit coming and the blame away. Question 4, the nearest look-alike: vulnerable narcissism would sulk quietly; this is loud, with contempt for a challenger. Question 5, what would prove it wrong: in private he owns his failures. Signs together, for years, with many people: grandiose narcissism.', ask: 'name' },
        { id: 'q4', does: 'What to do about it.', working: 'Keep firm limits; one argument will not undo twenty years. "Protect yourself" is for lies and using people, which nothing here shows.', ask: 'act' }],
      reason: 'Twenty years, three companies: a lasting way he is. Credit kept, blame passed on, praise sought, contempt for a challenger: grandiose narcissism. Keep firm limits.' }),

    // ----- the practice, alone: every family, shuffled (the course's items 1, 4, 5, 6, 11, 12, then 13 and 14 back to back, and one new) -----
    C({ id: 'l7-dis', story: 'She promised herself she would leave if he did it again. He did, and she stayed. "This time really is different," she says. "He explained why it wasn\'t his fault."',
      asks: { kind: 'reasoning', name: 'dissonance' },
      reason: 'Question 1: it is about how she squares her own promise, not a move on her. She stayed first, the reason came after, the promise stands: dissonance. Wrong if "different" can be checked apart from his word.' }),
    C({ id: 'l7-sunk', story: 'Three years into a PhD she no longer wants, she tells her advisor she will finish anyway: "I can\'t have wasted three years for nothing."',
      asks: { name: 'sunk' },
      reason: 'Her reason looks back at three years gone, not ahead at what two more are worth: sunk cost. Wrong if finishing opens a door she wants for itself.' }),
    C({ id: 'l7-rev', story: 'For years he assumed the new manufacturing process cost more. When the plant finally ran the real numbers, it was cheaper. He was the first to say so in the meeting, and asked for the analysis to be sent around.',
      asks: { name: 'revision' },
      reason: 'Evidence arrived and the belief moved, with no excuse: an honest change of mind. Wrong if he had blocked that analysis for years.' }),
    C({ id: 'l7-gas', story: 'Every time she brings up something he said, he tells her it never happened: not "I remember it differently", but that she is making it up. It has happened so often that she now records important talks, just for herself.',
      asks: { kind: 'move', name: 'gaslighting' },
      reason: 'Question 1: it is how he treats her, a move, even though it repeats over and over. Flat denial, not a memory mix-up, until she distrusts her memory: gaslighting. Wrong if he has a memory condition.' }),
    C({ id: 'l7-proj', story: 'Evander has spent months quietly interviewing at rival firms. Over lunch he tells his boss that his teammate Noor "seems disloyal, like she has one foot out the door." Noor has said nothing about leaving.',
      asks: { kind: 'move', name: 'projection' },
      reason: 'Question 1: an accusation aimed at someone, a move. He pins on her what he is doing himself: projection. Mind reading would have no such secret of his own behind it. Wrong if Noor was job hunting too.' }),
    C({ id: 'l7-bpd', story: 'Any time he seems even slightly less available, she calls him nonstop until he answers, swings between "I\'m sorry, I\'m the worst" and "you clearly don\'t care about me" in the same conversation, and has done this with every partner since her teens. She tells each new one she has no idea who she really is.',
      asks: { span: 'years', name: 'borderline' },
      reason: 'Question 2: every partner since her teens, a pattern. Fear of being left, clinging then fury, an unsteady self; Question 3: it keeps him from leaving, not admiration coming: borderline, not narcissism. Wrong if it began after one recent shock.' }),
    C({ id: 'l7-anti', story: 'For years, with friend after friend, he is warm, funny and first to offer help, until a favor isn\'t returned fast enough. Then he casually tells mutual friends something embarrassing you told him in confidence. He doesn\'t seem angry. He seems entertained. He lies about his job to everyone he meets, has been fined twice for driving on a suspended license, and has never once said sorry.',
      asks: { span: 'years', name: 'antisocial', act: 'protect' },
      reason: 'Years, many friends: warmth as a tool, secrets as leverage, routine lies, rules broken, no remorse: antisocial, not a grudge. Wrong if he showed real remorse. Protect yourself: keep secrets and money out of reach.' }),
    // the course's items 13 and 14, back to back: the two right answers that give no name
    C({ id: 'l7-few', story: 'She cried at a coworker\'s small mistake in a meeting once. Someone on the team called her "obviously borderline" in the group chat afterward.',
      asks: { name: 'too-little' },
      need: 'Why she cried, and years with many people: terror of being left, swings from clinging to fury, a self that will not hold still.',
      reason: 'One scene, no context: we cannot even see why she cried. Too little to tell; the label adds no facts. Find out more before naming anything.' }),
    C({ id: 'l7-def', story: 'He explains, calmly and specifically, why the criticism of his proposal is factually wrong, citing the actual numbers. Two people on the thread reply that he is "being defensive" and "can\'t take feedback".',
      asks: { name: 'ordinary' },
      reason: 'The mirror image of the woman called "obviously borderline": here the facts show a normal reason, an accurate point defended with numbers. Ordinary. Being disagreed with feels bad; that is not a sign in him.' }),

    // ----- the check: ten new stories, each in order, eight to pass -----
    C({ id: 'k7-text', story: 'Desmond tells everyone he never texts while driving. Last week he nearly hit a car while reading a text. "The road was empty and it was one second, so it doesn\'t count," he says, and still tells people he never does it.',
      asks: { kind: 'reasoning', name: 'dissonance' },
      reason: 'Question 1: he is squaring his own act with his own belief; no one is acted on. The act came first, the excuse after, and both stand: dissonance, not motivated reasoning (no answer was fixed before any looking). Wrong if he truly stopped. Say the contradiction plainly, then change the act or the belief.' }),
    C({ id: 'k7-checkout', story: 'Marguerite\'s team has spent nine months and $300,000 building a new checkout screen. Testing shows customers find it slower than the old one, and fixing it would take another year. "We can\'t scrap it after everything we\'ve put in," she tells her boss, and requests the year.',
      asks: { name: 'sunk' },
      reason: 'Her reason points back at the nine months and the money, which are gone either way, not ahead at what another year would buy: sunk cost. Wrong if she could show the fixed screen would beat the old one. Judge the next step on its own worth.' }),
    C({ id: 'k7-shoes', story: 'Everyone in Henrietta\'s running club swears by the same brand of shoes, and so did she. When a physical therapist\'s gait test showed those shoes were behind her knee pain, she switched brands, though the club teased her for weeks and her best friend there called it "betrayal".',
      asks: { name: 'revision' },
      reason: 'The test moved her belief, and she acted on it against her friends\' pressure and at a cost to her: an honest change of mind, not a bias. Wrong if she switched only to stand out. Nothing to fix.' }),
    C({ id: 'k7-estate', story: 'For a year, whenever Rosamund mentions the $5,000 she lent her older brother for his business, he answers, "You never lent me anything. You\'re thinking of someone else." Two cousins watched her hand him the check. Rosamund has stopped bringing it up, and tells friends her memory may be going.',
      asks: { span: 'years', name: 'gaslighting', act: 'record' },
      reason: 'Question 2: over and over, for a year. What two witnesses saw is flatly denied, until she doubts her own memory: gaslighting. Wrong if the cousins remember it his way. Trust your record and check with someone outside: the cousins. If she feared for her safety, outside help would come first.' }),
    C({ id: 'k7-interrupt', story: 'All month, Ambrose has cut colleagues off mid-sentence in every meeting. Today, when a new hire began to answer a question, he snapped, "Can you let someone else talk for once? You never let anyone finish." She had spoken twice in a month.',
      asks: { kind: 'move', name: 'projection' },
      reason: 'Question 1: an accusation aimed at someone, a move. He charges her with the very thing he has done all month: projection. The tie-break with mind reading is his own behavior; mind reading would come with no such habit of his. Wrong if she had in fact been talking over people. Bring it back to the one fact, calmly.' }),
    C({ id: 'k7-journal', story: '"Since I was sixteen," Clementine writes, "when someone I love goes quiet, I\'m sure they\'re leaving. I beg them to stay, then say I hate them, then beg again. I\'ve remade myself, major, friends, look, four times." She wants it to stop.',
      asks: { span: 'years', name: 'borderline', act: 'help' },
      reason: 'Question 2: since sixteen, with everyone she loves. Terror of being left, swings from clinging to fury, a self that will not hold still, all together: a borderline pattern, a guess only a clinician can test. Wrong if it all began after one recent shock. The pattern is her own, so get outside help: a therapist. It responds well to treatment.' }),
    C({ id: 'k7-invoices', story: 'For eleven years, across three companies, Cyrus has padded invoices and talked coworkers into signing off on them, telling each a different story. When an audit caught it, two of them were fired; he kept his job by blaming them. "They signed, not me," he says, and he has lied his way out of trouble since his teens.',
      asks: { name: 'antisocial', act: 'protect' },
      reason: 'Years, many people: routine lies, rules broken, coworkers used and sacrificed, no remorse. An antisocial pattern, not narcissism: no one is asked to admire him. Wrong if he showed real remorse and made amends. Protect yourself: keep secrets and money out of reach, keep distance.' }),
    C({ id: 'k7-quiz', story: 'Over dinner, Ottilie told her sister about an online quiz she had taken that afternoon: "Ten questions, and I scored twenty-eight out of forty on narcissism. That\'s high, apparently. I guess that\'s what I am." Her sister laughed and passed the potatoes.',
      asks: { name: 'too-little' },
      need: 'How she actually is, for years, with many people: a need for admiration, little empathy, entitlement. A quiz score is not one of the signs.',
      reason: 'A quiz score shows none of the signs and nothing of years or other people: too few facts to see anything. Too little to tell, about yourself as much as anyone. Wrong if people who know her well describe years of the signs. Do not name it yet: find out more.' }),
    C({ id: 'k7-meeting', story: 'On her first day, Esperanza sat through one forty-minute meeting with the department head. He did most of the talking, cut off two people, and ended with "Good, we\'re doing it my way." That night she texted a friend, "Is my new boss a narcissist?"',
      asks: { name: 'too-little' },
      need: 'Years of him with many people: a need for admiration, little empathy, contempt when challenged, not one meeting.',
      reason: 'One meeting on one day: we cannot see why he ran it that way, or how he is anywhere else. Too few facts to see what is going on. Too little to tell. Wrong if months of watching show the signs together, with many people.' }),
    C({ id: 'k7-quiet', story: 'For a week, Leopold\'s girlfriend of four months barely answered his texts. Her father was in the hospital; when he came home, she told Leopold and said she was sorry. His roommate wonders aloud if it was "the cold turn" people talk about.',
      asks: { span: 'situation', name: 'ordinary' },
      reason: 'Question 2: a reaction to a hard time, her father in the hospital, explained and put right. The facts show a normal reason: ordinary. Love-bombing needs devotion far too fast first, and coldness once he leans on her. Wrong if the silences keep coming with no reason. Nothing to fix.' }),

    // ----- held back for the review on later days (the course's items 2, 3, 7, 8 and 10, and one new) -----
    // the course's items 2 and 3, the two names most often mixed up (taught side by side on the second screen), back to back
    C({ id: 'l7-mot', story: 'He had already decided to invest before he asked anyone\'s opinion. Every "due diligence" talk after that was him hunting for a yes, and he got irritated at anyone who raised a concern.',
      asks: { name: 'motivated' },
      reason: 'The answer was fixed before any looking: motivated reasoning. What came first decides it. Wrong if he can name what would have made him walk away. Say what would change your mind before you look.' }),
    C({ id: 'l7-conf', story: 'Her report cites six analysts who back her view and dismisses the two who don\'t as "not understanding the sector", a charge she never makes of the six, though several of them have less sector experience than the two.',
      asks: { name: 'confirmation' },
      reason: 'No decision came first: a view she holds meets two rulers, since her charge would fail several of the six. Confirmation bias. Wrong if the two had a real, checkable flaw. Hold both sides to the same standard.' }),

    C({ id: 'l7-darvo', story: 'Caught lying on his expense report, he told HR he had done nothing wrong and that his manager had been targeting him for months. The meeting ended with HR asking the manager to explain herself.',
      asks: { name: 'darvo', act: 'one-fact' },
      reason: 'In one meeting, all three: deny, attack the manager, and turn her into the one under question: DARVO. Wrong if the manager had a record of unfair treatment from before. Bring it back to the one fact: the report.' }),
    C({ id: 'l7-dent', story: 'Teodoro asked his brother why the borrowed car came back with a new dent. "You\'re one to talk, you missed Mom\'s birthday," his brother said, and they spent the evening on the birthday. The dent never came up again.',
      asks: { name: 'deflect', act: 'one-fact' },
      reason: 'His brother denies nothing and plays no victim: he drags in something unrelated, and the dent is dropped. Attack and change the subject, only part of DARVO. Wrong if he had denied it and cast himself as the wronged one. Bring it back to the dent.' }),
    C({ id: 'l7-bomb', story: 'The first month, he called her his soulmate, learned her whole family\'s names, and said no one had ever understood him the way she did. By the third month, once she had stopped seeing her college friends most weekends to be with him, the compliments had turned into remarks that she "used to be more fun."',
      asks: { name: 'lovebomb', act: 'slow-down' },
      reason: 'Devotion far faster than the time known, then the cold turn once she leaned on him: love-bombing, then the cold turn. Wrong if seeing less of her friends was her own free choice and the remark a one-off. Slow down, and keep your own friends and plans.' }),
    C({ id: 'l7-vul', story: 'For a decade she has been quietly sure she is the most gifted person in every office she works in. She never requests anything and never complains out loud, but she keeps a running list in her head of everyone she trained who was promoted over her, and has stopped speaking to three of them, one by one, without telling them why.',
      asks: { span: 'years', name: 'vulnerable' },
      reason: 'A decade, several offices: quietly sure she is special and overlooked, cold resentment, withdrawal instead of attack: vulnerable narcissism. Wrong if she spoke up and a truly unfair workplace kept dismissing her. Keep firm limits.' })
  ]);
})();
