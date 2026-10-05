// Statistical Claims, Unit Six: drill items that are not stories. Reverse items (second stage) and faulty claims (last stage).
// A reverse item gives the name and asks what you would expect to hear or find. Every option is what one of the four names, or a claim in which
// nothing goes wrong (which Unit Two teaches), sounds like; voice says which. A claim is something a person might say. ask is either
//   { type: 'missing', name: outcome }   "what would you need to see before this name could be used?" (choices: the key's needs lines)
//   { type: 'option', step, answer }     the key's question, asked of the reasoning in the claim itself
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('stats', 'u6', [

  /* ---------- Reverse items: one for each name ---------- */
  { id: 'k-rev-nocontrol', use: 'drill', kind: 'reverse', outcome: 'nocontrol', expect: 'hear',
    options: [
      { text: '"Since we started the course, our sales are up 20%. It works."', voice: 'nocontrol' },
      { text: '"We sent the ten worst branches on the program, and they all got better."', voice: 'regression' },
      { text: '"People who chose the premium plan are the ones who were already saving the most."', voice: 'confound' },
      { text: '"Cameras went up after the break-ins, so the cameras cannot be the cause."', voice: 'reverse' },
      { text: '"We drew names from a hat for the program and counted everyone the same way."', voice: 'cause_ok' }
    ],
    why: 'It gives a result for the people or the place that got the thing, from after it or from before and after, says that it worked, and has nothing that went without to set beside it.' },

  { id: 'k-rev-regression', use: 'drill', kind: 'reverse', outcome: 'regression', expect: 'find',
    options: [
      { text: 'The only figures are for the users who switched the feature on, before and after.', voice: 'nocontrol' },
      { text: 'The program went to the ten schools with the lowest scores last year, and they were measured again.', voice: 'regression' },
      { text: 'Nearly all the people who joined the club were already fitter than the people who did not.', voice: 'confound' },
      { text: 'Residents say the cameras went up after the break-in.', voice: 'reverse' },
      { text: 'Half the schools were drawn by lottery to get the program, and all were measured the same way.', voice: 'cause_ok' }
    ],
    why: 'That detail shows a group chosen for how badly it had done and then measured again, so a drift back toward its usual level is expected with nothing done.' },

  { id: 'k-rev-confound', use: 'drill', kind: 'reverse', outcome: 'confound', expect: 'hear',
    options: [
      { text: '"Everyone who tried it improved, so it works."', voice: 'nocontrol' },
      { text: '"We tutored our weakest students, and they gained ten points."', voice: 'regression' },
      { text: '"Customers who use the app hold more savings, so the app helps people save." (And the app users are mostly long-standing, better-paid customers.)', voice: 'confound' },
      { text: '"The more fires, the more firefighters sent, so firefighters make fires worse."', voice: 'reverse' },
      { text: '"Half were picked by lottery to get it, and the half that got it did better."', voice: 'cause_ok' }
    ],
    why: 'It sets people who chose a thing beside people who did not, says the thing made the difference, and the people differ in something else that could bring about the difference alone.' },

  { id: 'k-rev-reverse', use: 'drill', kind: 'reverse', outcome: 'reverse', expect: 'find',
    options: [
      { text: 'The study followed no one who went without.', voice: 'nocontrol' },
      { text: 'The group was picked because it had the worst year.', voice: 'regression' },
      { text: 'The people who chose it live in richer neighborhoods than the people who did not.', voice: 'confound' },
      { text: 'The records show the second thing happened first, and the first thing was a response to it.', voice: 'reverse' },
      { text: 'A lottery formed the groups, and both were counted the same way afterward.', voice: 'cause_ok' }
    ],
    why: 'That detail shows an order: the second thing could come first and lead people to the first, so nothing else is needed to explain why the two go together.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'k-claim-demo', use: 'claim',
    text: '"I took vitamin C the moment my throat started to tickle, and the cold was gone in three days. It works. I tell everyone."',
    ask: { type: 'option', step: 'K1', answer: 'anyway' },
    fault: 'The claim gives one result, for one person who took the vitamin, and stops there. Nothing shows what her cold would have done with no vitamin C, and many colds are gone in a few days with nothing. A result for the person who got the thing is not yet a result for the thing. The key’s answer is {a:K1.anyway}.',
    corrected: 'I took vitamin C the moment my throat started to tickle, and the cold was gone in three days. I do not know how long it would have taken without it. To say it works, I would need people like me who did not take it, counted the same way.' },

  { id: 'k-claim-after', use: 'claim',
    text: '"Our three worst-selling salespeople went to the sales seminar, and all three sold more the next month. The seminar works."',
    ask: { type: 'option', step: 'K1', answer: 'extreme' },
    fault: 'The speaker reasons from the order of events: the seminar came, and then sales rose. But the three were picked because they were the worst sellers, and the worst sellers of one month are partly the ones who had a bad month. Their sales drift back toward usual the next month with no seminar. The key’s answer is {a:K1.extreme}.',
    corrected: 'Our three worst-selling salespeople went to the sales seminar, and all three sold more the next month. They were the worst of the month, so some of the rise would come with no seminar. To say the seminar worked, I would need an equally weak group that did not go, to see how much of the rise they got anyway.' },

  { id: 'k-claim-nothing', use: 'claim',
    text: '"The people who joined the club did better than the people who did not. But they chose to join, so the numbers are worthless."',
    ask: { type: 'missing', name: 'confound' },
    fault: 'The claim is right that the people chose, and then it stops at suspicion. It never names anything else that differs between the groups and could bring about the difference alone. Without that, the answer {a:K1.behind} is not yet shown. And the numbers are not worthless: they show a real difference between the groups, and a careful speaker would say what else could explain it.',
    corrected: 'The people who joined the club did better than the people who did not. They chose to join, so I want to know what else differs between them: whether the joiners were fitter, or more motivated, or better off to begin with. If people who are alike in that show the same difference, the club is the likelier reason.' },

  { id: 'k-claim-gym', use: 'claim',
    text: '"The members who skip the most workouts at our gym are the ones with the most injuries. Skipping workouts makes you injury-prone."',
    ask: { type: 'option', step: 'K1', answer: 'backward' },
    fault: 'The speaker says the first thing, skipping workouts, caused the second, injuries. But an injury is a reason to skip a workout, so the second thing could come first and lead to the first. The figures are a snapshot and do not show the order. The key’s answer is {a:K1.backward}.',
    corrected: 'The members who skip the most workouts are the ones with the most injuries. That might be because they were injured and so could not train. To say skipping causes injuries, I would need to know which came first.' },

  { id: 'k-claim-camp', use: 'claim',
    text: '"Kids who go to our summer camp get better grades in the fall, so camp makes kids smarter."',
    ask: { type: 'option', step: 'K1', answer: 'behind' },
    fault: 'The speaker sets kids who went to the camp beside kids who did not, and says the camp made the difference. But the families chose whether to send them, and families who pay for camp may differ in many other ways that could lift grades, such as time at home and help with homework. Something else could cause both the camp and the grades. The key’s answer is {a:K1.behind}.',
    corrected: 'Kids who go to our summer camp get better grades in the fall. Their families chose the camp, so I would want to compare them with kids from similar families who did not go, or to see a camp that took names from a hat.' }
]);
