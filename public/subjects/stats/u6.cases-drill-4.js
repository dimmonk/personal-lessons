// Statistical Claims, Unit Six: faulty claims (last stage). A claim is something a person might say. ask is either
//   { type: 'missing', name: outcome }   "what would you need to see before this name could be used?" (choices: the key's needs lines)
//   { type: 'option', step, answer }     the key's question, asked of the reasoning in the claim itself
// fault says what is wrong with the claim; corrected puts it right, and is always shown last.

FC.cases('stats', 'u6', [

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'k-claim-demo', use: 'claim',
    text: '"I took vitamin C the moment my throat started to tickle, and the cold was gone in three days. It works. I tell everyone."',
    ask: { type: 'option', step: 'K1', answer: 'anyway' },
    fault: 'The claim gives one result, for one person who took the vitamin, and stops there. Nothing shows what her cold would have done with no vitamin C, and many colds are gone in a few days with nothing. A result for the person who got the thing is not yet a result for the thing. The answer is {a:K1.anyway}.',
    corrected: 'I took vitamin C the moment my throat started to tickle, and the cold was gone in three days. I do not know how long it would have taken without it. To say it works, I would need people like me who did not take it, counted the same way.' },

  { id: 'k-claim-gym', use: 'claim',
    text: '"The members who skip the most workouts at our gym are the ones with the most injuries. Skipping workouts makes you injury-prone."',
    ask: { type: 'option', step: 'K1', answer: 'backward' },
    fault: 'The speaker says the first thing, skipping workouts, caused the second, injuries. But an injury is a reason to skip a workout, so the second thing could come first and lead to the first. The figures are a snapshot and do not show the order. The answer is {a:K1.backward}.',
    corrected: 'The members who skip the most workouts are the ones with the most injuries. That might be because they were injured and so could not train. To say skipping causes injuries, I would need to know which came first.' },

  { id: 'k-claim-camp', use: 'claim',
    text: '"Kids who go to our summer camp get better grades in the fall, so camp makes kids smarter."',
    ask: { type: 'option', step: 'K1', answer: 'behind' },
    fault: 'The speaker sets kids who went to the camp beside kids who did not, and says the camp made the difference. But the families chose whether to send them, and families who pay for camp may differ in many other ways that could lift grades, such as time at home and help with homework. Something else could cause both the camp and the grades. The answer is {a:K1.behind}.',
    corrected: 'Kids who go to our summer camp get better grades in the fall. Their families chose the camp, so I would want to compare them with kids from similar families who did not go, or to see a camp that took names from a hat.' }
]);
