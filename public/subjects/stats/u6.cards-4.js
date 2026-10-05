// Statistical Claims, Unit Six, part two (second half): Reverse causation, the look-alike pairs of this part, and the exception that sets
// Confounding beside the key's name for totals that hide a mix. The arithmetic of the hidden mix is on the exception card.

FC.cards('stats', 'u6', [

  /* ---------- Reverse causation ---------- */
  { id: 'meet-reverse', kind: 'meet', outcome: 'reverse',
    link: 'In the last name something else sat behind both things. In the next, nothing else is needed. The two things are the same two the claim names, and the arrow the claim draws between them may point the wrong way.',
    case: 'k-cameras', mark: 'K1',
    strip: [
      'Two things go together: streets with many cameras are the streets with more break-ins.',
      'The claim says the first causes the second: "Cameras bring burglars to a street."',
      'The figures do not say which came first.',
      'The account does: on 7 of the 9 camera-heavy streets with a break-in, the cameras went up after it.'
    ],
    explain: [
      'When a claim says that one thing caused another, think of an arrow drawn from the first thing to the second. The claim draws the arrow. The figures do not. A cause has to come before its result, and the figures here are a snapshot: 9 of 12 camera-heavy streets had a break-in, and 3 of 12 streets with few cameras did. That is three quarters against one quarter, so the two things really do go together. But a snapshot shows no order. It cannot tell you whether the cameras came first or the break-ins did.',
      'The account fills in the order. On 7 of the 9 camera-heavy streets with a break-in, residents say the first cameras went up after the break-in. Those 7 break-ins cannot be the cameras’ doing, because the cameras were not there yet. The arrow runs the other way: a break-in leads neighbors to buy cameras.',
      'Nothing else is needed to explain the figures. The result the columnist is reading as an effect is, in most of these streets, the cause.',
      'What would settle it is the order: follow the streets over time and count break-ins before and after cameras go up, or put cameras on some streets chosen by a draw and none on others.'
    ],
    feature: { step: 'K1', option: 'backward' },
    name: [
      'The name for this is {o:reverse}. "Reverse" means the arrow runs the other way. "Causation" means one thing making another happen. So the name says: the cause runs the other way.',
      'The words that carry this kind of claim are "brings", "attracts", "leads to" and "makes", with the figure set out as if the order were obvious.'
    ] },

  { id: 'again-reverse', kind: 'again', outcome: 'reverse',
    link: 'The security cameras gave you what to point to: {needs:reverse}. Here it is inside a company.',
    first: 'k-cameras', second: 'k-praise', step: 'K1',
    instruction: 'Find what the two cases share. Ignore the story (cameras, praise). Look at one thing only: which words show that the second thing came first?',
    prompt: { kind: 'phrase', answer: 'most of their praise was given in the week after the team beat its sales target' },
    shared: [
      'In both cases two things go together: cameras and break-ins, praise and sales. In both, the claim says that the first thing caused the second. And in both, the account itself shows that the second thing came first and led to the first: cameras went up after break-ins, and praise was given after a team beat its target.',
      'The praise report shows how the same pattern can look kind instead of alarming. Nobody is saying praise is bad. If praise follows good sales, then the 15 teams that averaged 112% of target were praised because they were already ahead, and the report’s 112% against 94% is the sales leading to the praise.',
      'The two stories share nothing else, so this is not about homes or about work. It holds wherever two figures sit side by side, the claim gives the first as the reason for the second, and the account shows a way the second could have happened first and led to the first. That is what {o:reverse} names.'
    ] },

  { id: 'portrait-reverse', kind: 'portrait', outcome: 'reverse',
    link: 'What you point to is a way the second thing could come first. Here is the rest of the picture.',
    typical: [
      'Two things go together in the figures, and the figures are a snapshot: one day, one survey, one year taken as a whole.',
      'The claim says that the first thing caused the second. Its words carry an arrow: "attracts", "leads to", "makes", "brings".',
      'Nothing in the claim says which came first. Order is exactly what a snapshot leaves out.',
      'The second thing is something that could be a reason for the first: a break-in is a reason to buy a camera, a good month is a reason to praise a team, being ill is a reason to see a doctor.',
      'It turns up in health, money, work and crime, wherever people respond to a problem or a success by doing something. The doing then goes together with the problem or the success.',
      'Sometimes both arrows are real, and each feeds the other. The question is only whether the second could come first and lead to the first, because that is enough to make the claim unsafe.'
    ],
    not: [
      'Two things going together is not enough. The name needs a way the second could come first. If the case shows something else that differs between the groups and nothing about order, that is the answer {a:K1.behind}.',
      'And it does not say the first thing has no effect. Cameras might put some burglars off. The name says that the figures cannot tell, because the arrow could point the other way.'
    ],
    wild: ['"The more of X, the more of Y, so X causes Y."', '"Hospitals are where the sick people are, so they make people sick."', '"Fans fill the stadium when the team wins. Big crowds win games."', '"Wherever there are more police there is more crime."'],
    self: 'In your own life it is the friend who says "every time I take a day off, it rains". Or the person who says that since they started wearing a fitness watch they have been getting sicker: perhaps they bought the watch because they were ill.',
    ask: '"Which came first, and how does anyone know?" If the claim cannot say, ask whether the second thing could have been the reason for the first.',
    act: [
      'Ask which came first and how anyone knows. Look for a date, a record, or a follow-up that shows the order.',
      'If the account cannot say, do not act on the arrow. Treat the claim as not shown.',
      'If the order matters to you, as with a diet or a product, look for a result in which the thing was given first and the result was counted after.'
    ] },

  { id: 'check-reverse', kind: 'check', after: 'reverse',
    case: 'k-fires',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'behind', 'backward', 'extreme'] } },

  /* ---------- The look-alike pairs of this part ---------- */
  { id: 'look-confound-reverse', kind: 'lookalike', ledger: 'confound~reverse',
    link: 'These two answers look alike. In both, a snapshot shows two things going together, and a claim says the first caused the second. This card shows what separates them.',
    cases: ['k-trees-lots', 'k-trees-first'],
    instruction: 'Both cases are about the same city, the same trees and the same home prices. Compare one thing: what the account shows beside the figures. Is it something else that differs between the streets, or the order in which things happened?',
    prompt: { kind: 'which', option: 'K1.backward', answer: 'k-trees-first' },
    difference: [
      'In Case A the account shows that most of the tree-lined streets are in older neighborhoods, where the lots are twice as large. Large lots sell for more and have room for trees. Lot size is something else that differs between the streets and could bring about the high prices on its own, and it explains the trees as well. The answer is {a:K1.behind}, and the case is {o:confound}.',
      'In Case B the account shows an order: the city planted trees on a street only after its prices passed $400,000, because the city pays for trees out of property tax. Nothing else is needed. The high prices came first and led to the trees. The answer is {a:K1.backward}, and the case is {o:reverse}.',
      'The figures and the claim are the same in both. A third thing behind both gives one answer, and the second thing coming first gives the other.'
    ] },

  { id: 'look-confound-fair', kind: 'lookalike', ledger: 'confound~cause_ok',
    link: 'A claim built on two groups can have groups that chose or were put where they are, or groups that a draw formed, and a draw is what the first question answers with {a:S1.holds}. The figures of the two can look the same. This card puts them side by side.',
    cases: ['k-quit-chose', 'k-quit-lottery'],
    instruction: 'Both cases are about the same health department and the same quit-smoking text program, and in both the program group did better. Compare one thing: who decided which smokers were in the program.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'k-quit-lottery' },
    difference: [
      'In Case A smokers signed up themselves, and 240 of the 300 who signed up had already picked a quit date, against 70 of the 700 who did not. Readiness to quit is something else that differs between the groups and could bring about the result alone. The first answer is {a:S1.cause}, and the second answer, to {q:K1}, is {a:K1.behind}.',
      'In Case B the department had places for half of the 800 smokers who asked to join, and a draw from a hat decided who got them. Readiness to quit is no likelier to be in one group than the other. All 800 were reached a year later and counted in the same way, and 30 in 100 against 20 in 100 is a difference the claim can rest on. The answer is {a:S1.holds}, because the claim rests on {plain:cause_ok}.',
      'The program and the claim are the same in both. In Case A the smokers decided who got the program, and in Case B a draw did.'
    ] },

  { id: 'exc-simpson', kind: 'exception', looksLike: 'simpson', is: 'confound', ledger: 'confound~simpson',
    h: 'A hidden mix of mild and severe, and still {o:confound}',
    link: 'A different name, {plain:simpson}, is for totals set side by side as a ranking, and it is reached through the answer {a:C1.split}. A claim of cause can look just like it. This card shows one.',
    case: 'k-antibiotic',
    setup: 'In the records of this case the two groups have a very different mix of mild and severe patients, and a different mix of easy and hard ones is what the name for {plain:simpson} is about. Yet this case is {o:confound}.',
    prompt: { kind: 'phrase', answer: 'Doctors gave the antibiotic mostly to the sickest patients' },
    because: [
      'The two names differ in what is set side by side. The name for {plain:simpson} is for two places or people that each deal with cases, such as two hospitals or two tutors, set side by side as a ranking, each with its own mix of easy and hard ones. Here nothing is a ranking of two places. It is patients who were given one thing set beside patients who were not, and the claim says the thing caused the difference.',
      'That is what you point to for {o:confound}: {needs:confound}. Here the doctors decided who got the antibiotic, so the sickest patients are bunched in the antibiotic group: 70 of 100, against 20 of 100. Being severely ill could keep a patient in the hospital longer on its own. The 3 extra days are what you would expect from a sicker group, with the antibiotic having done nothing at all.',
      'You can check what a hidden mix does with arithmetic. Among the severe patients, 70 got the antibiotic and 20 did not, and among the mild ones 30 got it and 80 did not. Suppose the antibiotic did nothing, and a severe patient stays 11 days and a mild one stays 5, whoever they are. The antibiotic group would average (70 × 11 + 30 × 5) ÷ 100 = 920 ÷ 100 = 9.2 days. The other group would average (20 × 11 + 80 × 5) ÷ 100 = 620 ÷ 100 = 6.2 days. The gap is 3 days, the same as the health site’s, with the antibiotic doing nothing at all.'
    ],
    take: 'This is a choice made to keep the answers clear, and it is worth knowing that it is a choice. In the field, one of these is a form of the other, and people who study them do not all draw the line in one place. The line is drawn at what is set side by side: two totals of two places or people, which gives {a:C1.split}, or a group that did a thing beside a group that did not, with a claim of cause, which gives {a:K1.behind}.' }
]);
