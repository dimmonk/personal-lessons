// Psychology, lesson 5, look-alikes and false friends: the worked story and the stories of the practice and the check. Every story offers the
// lesson's one list of names. The practice runs the owner's tells as pairs asked back to back (being left or being insulted; an audience or a
// mirror; what you can be used for), then one shuffled set of every name, with the help response asked where safety is at risk. Question 1 is not
// asked, since nearly every story here is a lasting way someone is; Question 2 is asked on a mix of stories, where it decides. Two stories follow
// the owner's own Drill 4.1 (the ghosted spiral, the lying salesman), reworded; the rest are invented, and no real person is described.
// Stories not used in the lesson wait for the review.
(() => {
  const S = 'look-alikes', C = spec => psyCase({ strand: S, names: PSY_NAMES.l5, acts: ['limit', 'protect', 'support', 'find-out', 'help'], ...spec });
  FC.items('psychology', [
    // ----- the worked story -----
    C({ id: 'w5-ghosted', story: 'After two dates he stopped answering. She texted eleven times in an hour, wrote "I always ruin everything, please tell me what I did", then sent one furious message calling him evil. She has done the same with her last three boyfriends and her best friend since college, and says she never knows who she is without someone.',
      asks: { span: 'years', name: 'borderline' },
      steps: [
        { id: 'q2', does: 'Question 2. One moment, or a lasting pattern?', working: 'No hard time explains it, and it is not one painful loss: three boyfriends and a best friend, since college. Over and over, for years, with many people.', ask: 'span' },
        { id: 'q3', does: 'Questions 3 to 5. What drives it, what is the nearest look-alike, and what would prove it wrong?', working: 'Every message is about being left: begging, then fury when no answer comes, and no steady sense of who she is. She is not asking to be admired, so not narcissistic, and not playing to an audience, so not histrionic. Fear of being left, the swing, the shifting self: borderline. It would be wrong if this were the first time, after one loss.', ask: 'name' }],
      reason: 'The drive is fear of being left, shown as begging and then fury, with every close person, and a sense of self that will not hold.' }),

    // ----- pair A: afraid of being left, or insulted -----
    C({ id: 'a-leave', story: 'When his girlfriend started a night class, he signed up for the same class so they would never be apart. A week in, he said she had humiliated him there, packed a bag ("I\'ll leave before you leave me"), then unpacked it in tears that night. For fifteen years, with partners and close friends, he has swung like this, and his career plans change with each partner.',
      asks: { name: 'borderline' },
      reason: 'Her going out is the threat: he clings, turns on her, then clings again, with plans that change with each partner. Fear of being left. The next story is insulted, not afraid.' }),
    C({ id: 'a-admire', story: 'When his girlfriend started a night class, he said it was wasted on someone like her and that she should be grateful a man like him put up with her. When she kept going, he ignored her for a week and told friends she was lucky to have him. He has treated every partner this way for fourteen years, and turns on any coworker who outshines him.',
      asks: { name: 'grandiose' },
      reason: 'The class takes her eyes off him, and he answers with contempt and a cold week, never begging: a need to be admired as better, shown out loud. The other story is afraid of losing her; this one is insulted.' }),

    // ----- pair B: an audience, or a mirror -----
    C({ id: 'b-party', story: 'At a friend\'s engagement party she wore a red gown and told the funniest stories, until the room turned to the toast. Then she began a loud, tearful story about her own breakup until people turned back to her, and afterward hugged the bride warmly. She has been the center of every party and office for years, and friends are fond of her.',
      asks: { name: 'histrionic' },
      reason: 'When attention moved, she won it back with bigger feelings, stayed warm and ran no one down: she wants an audience. The next story wants a mirror.' }),
    C({ id: 'b-mirror', story: 'At a friend\'s engagement party he told the table he was the only real talent at his firm. When the toast turned to the bride\'s brother, just made partner, he said the job was "basically fetching coffee" and spent the night telling guests he had turned that firm down. At every party for years, when praise goes to someone else, he runs them down.',
      asks: { name: 'grandiose' },
      reason: 'When attention moved, he pulled down whoever had it, with loud superiority: he wants to be admired as better, not just watched. The other story won attention back without pulling anyone down.' }),

    // ----- pair C: what you can be used for -----
    C({ id: 'c-salesman', story: 'A salesman has made up a space heater\'s safety record at every job for fifteen years. When a customer whose kitchen caught fire complains, he shrugs: "That\'s just business." "Hate me all you like," he tells his manager. "I hit my numbers."',
      asks: { name: 'antisocial' },
      reason: 'A made-up record, a shrug at a kitchen fire, and "hate me all you like": he wants the sale, not your good opinion. The other story cares enormously what people think.' }),
    C({ id: 'c-boss', story: 'When a new hire said the old logo looked better, he went red: "Do you know who built this company?" He had her moved off the account and told the team she asked to go. Three firms, eighteen years: the same each time anyone doubts him, and he needs the team to call every plan of his brilliant.',
      asks: { name: 'grandiose' },
      reason: 'It matters enormously to him what people think: doubt is the threat, and he punishes it. The other story does not care what anyone thinks, only what he can get.' }),

    // ----- every name, shuffled -----
    C({ id: 'x-band', story: 'He has played guitar in five bands in twelve years. In each he says little but is sure he is the only real musician, held back by the rest. When a bandmate\'s song is picked over his, he sulks, skips rehearsals, then quits with a long, bitter message about how no one ever valued him, and stops speaking to them.',
      asks: { span: 'years', name: 'vulnerable' },
      reason: 'Five bands over twelve years make it a pattern, not one bad rehearsal. Quietly sure he is special and unseen, bitter at whoever does better, and he withdraws instead of attacking: vulnerable.' }),
    C({ id: 'x-threat', story: 'When her boyfriend of three years said he needed a weekend alone to think, she texted that she would hurt herself if he left her, then that he was a monster, then begged him to forgive her. It has gone this way with every partner and close friend since her twenties, and she says she becomes a different person with each one.',
      asks: { name: 'borderline', act: 'help' },
      reason: 'Fear of being left, with the swing from begging to fury and a shifting self: borderline. A threat of self-harm puts safety first: get outside help now (a crisis line, 988 in the US); firm limits come after.' }),
    C({ id: 'x-host', story: 'In every office she has worked in for ten years, she calls people her "dearest friends" after one coffee and takes up a new passion each month from whoever she last talked to. When a colleague announced her pregnancy at lunch, she gasped and acted out her "near-death" morning at the dentist until the table was laughing with her. Then she hugged the colleague and planned the baby shower. Her manager calls her "a total narcissist".',
      asks: { span: 'years', name: 'histrionic' },
      reason: 'When attention moved, she won it back with a bigger, theatrical story, and stayed warm and glad for the colleague: an audience, not a mirror, whatever her manager calls it. Swayed by whoever she last talked to: a narcissistic person resists that.' }),
    C({ id: 'd-landlord', story: 'For ten years your landlord has taken weeks to fix anything and hired the cheapest plumber in town. He is curt on the phone, says repairs eat his profit, and has returned every deposit in full. The tenants\' group chat calls him "toxic".',
      asks: { span: 'years', name: 'ordinary' },
      reason: 'The same for years, yet no drive shows: no fear of being left, no audience, no need for admiration, no lies or harm without remorse. Cheap with a plain reason, money, is ordinary here, and "toxic" names a feeling, not signs.' }),
    C({ id: 'd-party', story: 'At the block party your new neighbor wore a feathered hat, hugged everyone, and told a long, loud story about her divorce.',
      asks: { span: 'unsaid', name: 'too-little' },
      need: 'How she is with many people over years, and what she does when attention moves to someone else.',
      reason: 'One scene with someone you just met, and nothing about other times: the story does not say. Too few facts to see what is going on, so find out more first.' }),

    // ----- the check -----
    C({ id: 'k-moved', story: 'When her best friend of six years took a job across the country, she called it betrayal and posted that the friend was "dead to her", then drove four hundred miles, uninvited, to beg her to stay. Every close friendship since her teens has ended in a storm like this, and after each one she remakes herself: new look, new goals, new crowd.',
      asks: { span: 'years', name: 'borderline' },
      reason: 'A friend moving away is the threat: rage, then begging, and a self remade after each loss, for years. Fear of being left; nothing in it seeks admiration.' }),
    C({ id: 'k-flirt', story: 'At every job for years he has dressed for a night out, flirted with clients and new hires alike, and called people he met last week his "work soulmates". A sore throat is "the worst week of my life", told to the whole floor, and he takes on the opinion of whoever he is talking to. Coworkers call him "so borderline".',
      asks: { name: 'histrionic' },
      reason: 'Showy dress, flirting, big feelings for small things, closeness that runs ahead of the facts, and easily swayed: he wants to be noticed, by anyone. No fear of being left shows, whatever the coworkers say.' }),
    C({ id: 'k-crash', story: 'For two weeks after a car crash, she begged her husband not to go on his work trip, called him five times the first night, and cried whenever he left the house. She apologized when he got home, and nothing like it had happened in their twelve years together.',
      asks: { span: 'situation', name: 'ordinary' },
      reason: 'It looks like fear of being left, but a frightening crash came first, and when the story names a hard time, that answer comes before "once or twice". Two weeks after a crash is not a pattern.' }),
    C({ id: 'k-bars', story: 'It started at fourteen with shoplifting and fights at school. In the twenty years since he has walked out of eight jobs, most after taking money from the till, and driven drunk more times than he can count. When a friend took the blame for one of his crashes and lost his license, he laughed: "His choice." He lies to his mother as easily as to the police.',
      asks: { span: 'years', name: 'antisocial' },
      reason: 'Theft, drunk driving, a friend left to pay for his crash with a laugh, and easy lies, all the way back to his teens: an antisocial pattern needs a history that starts that early. Nothing in it needs admiration.' }),
    C({ id: 'k-runner', story: 'For fifteen years he has had junior colleagues run his errands, cover his weekends and finish his reports, with no thanks, and tells them they should be honored to learn from him. He calls himself the firm\'s real genius and wants it said at every meeting. When an intern left in tears, he said she was "not built for greatness".',
      asks: { name: 'grandiose' },
      reason: 'He feels owed, uses people, needs to be called a genius and has no feeling for the intern: grandiose. He cares a great deal what people think of him, so not antisocial.' }),
    C({ id: 'k-envy', story: 'Since college she has been quietly sure she is the gifted one of her friends, owed a better life than theirs. When her closest friend\'s first novel came out, she sent a one-word "congrats", unfollowed her, and told her husband publishers only want one kind of story. Friend after friend who did well has drifted out of her life this way.',
      asks: { name: 'vulnerable' },
      reason: 'Quietly sure she is special and owed, bitter at a friend\'s success, and she drifts away instead of attacking: vulnerable.' }),
    C({ id: 'k-meeting', story: 'Your friend says her boss is "a narcissist and a gaslighter" because he heard her plan in a meeting, said it cost too much, and chose another.',
      asks: { name: 'ordinary' },
      reason: 'The facts show a normal reason: a boss choosing between plans, with a reason given. "Gaslighter" is a loose insult here, and a friend reaching for names does not change the facts.' }),
    C({ id: 'k-eyes', story: 'A true-crime fan at your office says the quiet new IT guy "has psychopath eyes". He started on Monday.',
      asks: { span: 'unsaid', name: 'too-little' },
      need: 'How he treats people over years: whether he lies, breaks rules and uses people without remorse.',
      reason: 'A look and a few days, nothing about other times: the story does not say. Too few facts to see what drives him, so find out more.' }),

    // ----- held back for the review on later days -----
    C({ id: 'r-wedding', story: 'At her sister\'s wedding she danced on a table, told a loud story and cried through the toast. She is quiet the rest of the year and has never done anything like it before.',
      asks: { span: 'once', name: 'ordinary' },
      reason: 'A wedding is a night for big feelings, with nothing like it before. Theatrical for one evening is not a pattern.' }),
    C({ id: 'r-register', story: 'At nineteen he took forty dollars from the register at his first job and was caught. He paid it back, said he was ashamed, and has not taken anything since, in fifteen years of work.',
      asks: { span: 'once', name: 'ordinary' },
      reason: 'One act, repayment and shame, nothing since. Remorse is what would rule the antisocial pattern out.' }),
    C({ id: 'r-shy', story: 'Your coworker blushes when called on, rarely speaks in meetings, and was upset for a day when her report was criticized. She is glad when teammates are praised and wants to hear how they did it. Someone calls her "a covert narcissist".',
      asks: { name: 'ordinary' },
      reason: 'Shy and easily hurt is not a name: there is no sense of being special and owed, and her gladness at others\' wins counts against it.' })
  ]);
})();
