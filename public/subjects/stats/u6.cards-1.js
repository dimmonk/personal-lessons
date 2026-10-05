// Statistical Claims, Unit Six, part one (first half): the opening card and the first name, a result with nothing to set beside it.
// This is a branch unit of an action subject: every portrait carries `act`, what to do when you meet the name, and the unit closes with a plan card.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of the
// earlier questions, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet
// card, the "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a claim), part
// (one of the four parts a claim is built from), group (the people or things a figure is worked out from), result (what happened to a group).

FC.cards('stats', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'When a claim gives one thing as the reason for another',
    canDo: 'After this unit you can read a claim that gives one thing as the reason for another, and say which of four other explanations of the same result is open, from the words of the claim. The claim can be a headline, an ad, a report, or something a friend tells you.',
    everyday: [
      'You already know the raw material. "Since we started the program, results are up, so it works." "People who take the stairs live longer, so take the stairs." "Everyone who tried the cream says it cleared up their skin." "We sent our weakest sellers on the course, and their numbers went up." Each of these gives one thing as the reason for another, and each of them might be right.',
      'The trouble is that a result can arrive by more than one road. This unit teaches four other roads to the same result, what to point to in a claim to say which one is open, and what you would need to see to close it. It also shows what a claim looks like when none of them is open, because a claim that has been tested fairly deserves to be believed, and you need to be able to tell it from the rest.'
    ],
    map: { branch: 'cause' } },

  /* ---------- No comparison group ---------- */
  { id: 'meet-nocontrol', kind: 'meet', outcome: 'nocontrol',
    link: 'The first three parts of a claim can all hold, and the claim can still go wrong at the fourth, when it gives one thing as the reason for another. The question for that part is {q:K1}. Here is the first of its four answers, in a claim whose figures are all given and have nothing wrong with them.',
    case: 'k-sleepapp', mark: 'K1',
    strip: [
      'There is a claim that something worked: "Our new bedtime app works."',
      'There is a result for the people who got it: 64 of the 80 patients sleep better.',
      'There is no result for anyone who went without it.',
      'So the figures cannot say how many of the 80 would have slept better anyway.'
    ],
    explain: [
      'Look at what the clinic’s figure is. It is a result for the people who used the app: 64 of 80 sleep better, which is 8 in 10. The claim says the app is the reason. But a result only means something when you can set it beside what would have happened without the thing. People go to a sleep clinic when they are sleeping badly, and bad stretches of sleep often end by themselves: a stressful month passes, a noisy neighbor moves out. If most patients would sleep better after a month with or without an app, then 64 out of 80 tells you very little about the app.',
      'Here is what that does to the arithmetic. Suppose the clinic had also followed 80 similar patients who did not get the app. If 24 of those 80 slept better, the app took the figure from 24 in 80, which is 3 in 10, up to 64 in 80, which is 8 in 10. That is a gain of 5 in 10, and the claim stands up. But if 56 of the 80 slept better with no app, the app took the figure from 56 in 80, which is 7 in 10, up to 8 in 10. That is a gain of only 1 in 10, and most of the 64 had nothing to do with the app.',
      'The clinic’s claim gives the same 64 out of 80 in both of those worlds. That is the whole difficulty: the figure it gives is the same whether the app does a great deal or almost nothing.',
      'What the claim lacks is a second group of patients, as much like the first as can be managed, who went without the app and were counted in the same way. That second group is what shows what happens anyway. Nothing in the clinic’s figures does.',
      'Notice what this does not say. It does not say the app is useless. The app may help a great deal. It says that these figures cannot show it.'
    ],
    feature: { step: 'K1', option: 'anyway' },
    name: [
      'The name for this is {o:nocontrol}. A comparison group is a second group, as like the first as can be managed, that did not get the thing and was counted in the same way, so that its result can be set beside the first group’s.',
      'The words that carry this kind of claim are "works", "helped", "since we started" and "everyone who tried it". They are the speaker’s. The figures do not contain them.'
    ] },

  { id: 'again-nocontrol', kind: 'again', outcome: 'nocontrol',
    link: 'The sleep app gave you what to point to: {needs:nocontrol}. Here it is in a different story, and this time the figures are for one café before and after, not for a group of people.',
    first: 'k-sleepapp', second: 'k-cafemenu', step: 'K1',
    instruction: 'Find what the two cases share. Ignore the story (a sleep clinic, a café). Look at one thing only: which words show that there is no result for anyone, or any place, that went without?',
    prompt: { kind: 'phrase', answer: 'The owner has no sales figures from any other May or June' },
    shared: [
      'In both cases someone says that something worked: an app, a menu. In both, the figures are for the people or the place that got it. The clinic has 64 of 80 patients who used the app. The café has its own sales in April and in June. Neither has a second group that went without, counted in the same way, to show what would have happened anyway.',
      'The café shows the second form of this: not a group of people, but one place before and after. Before and after is a comparison of a thing with itself at two times, and many things change between two times with nothing done. A café’s sales climb and fall with the season, the weather and who is in town. A figure for the café alone cannot say how much of the rise is the menu.',
      'The two stories share nothing else. So this is not about sleep or about cafés. It holds wherever a claim says that something worked and the figures come only from those that got it, or only from before and after it, with nothing to show what happens anyway. That is what {o:nocontrol} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every claim in this unit has two layers. The top layer is the story: a clinic, a café, a school, a road. The layer underneath is the question for this part: {q:K1} The four answers belong to the layer underneath, and any of them can turn up in any story.',
      'From here on the cases change their stories on purpose. Sometimes two cases will share a story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.',
      'One thing stays the same in every case here. The first three parts of the claim already hold: the people or things counted are a fair picture, what is counted is the same throughout, and the numbers are given. The only thing in doubt is the step from "these go together" to "this made that happen".'
    ],
    fixed: ['what this question asks about: {q:K1}'],
    varies: ['the topic', 'the people', 'how much is at stake', 'how sensible it sounds that the thing would work', 'how big the difference is'] },

  { id: 'portrait-nocontrol', kind: 'portrait', outcome: 'nocontrol',
    link: 'You now know what to point to. This card fills in the rest of the picture of {o:nocontrol}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'The claim is that something worked: "it works", "it helped", "since we started", "everyone who tried it improved". The result is real. The patients did sleep better, and the café’s sales did rise.',
      'The result comes from one place only. Either only the people who got the thing were counted, or one group was counted before and after. Nobody who went without was counted in the same way.',
      'Many things change by themselves as time goes by: bad patches pass, seasons turn, new people settle in. Anything people do in answer to a bad patch, such as a program, a treatment or a purchase, is often followed by improvement whether or not it helped.',
      'The person making the claim is usually sincere. They saw the improvement, and the thing they did is the obvious reason for it.',
      'It is the easiest of the four to meet, because it needs nothing in the case but a result and a claim.'
    ],
    not: [
      'A result with nothing to set beside it is not a result that is false. The app may help, and the menu may be a hit.',
      'It is not the same as a result from a few people. Here everyone who got the thing is counted, so the trouble is not {a:S1.counted}. And a claim that does give a group that went without, but one that differs from the first in some other way, is a different answer from this one.'
    ],
    wild: ['"It works. Look at the results."', '"Since we started, things are up."', '"Everyone who tried it improved."', '"Before and after: the difference is clear."'],
    self: 'In your own life it is the remedy you took on the second day of a cold and felt better after, or the new routine you started after a bad month. Something was getting better anyway.',
    ask: '"What would this look like if nobody had done anything?" If the claim cannot say, you have your answer.',
    act: [
      'Ask what happened to people, or places, that did not get the thing and were counted in the same way. If the claim does not say, treat it as not shown. That is not the same as false.',
      'Before you pay for it, share it or change what you do because of it, look for a result that includes a group that went without.',
      'If there is none, ask yourself what you would expect to see if nothing had been done, and whether the figure is any different from that.'
    ] },

  { id: 'check-nocontrol', kind: 'check', after: 'nocontrol',
    case: 'k-roundup',
    ask: { type: 'phrase', step: 'K1', say: 'Which words show what is missing from the figures? Tap them.',
           answer: 'The app gives no figures for users who left the feature off' } }
]);
