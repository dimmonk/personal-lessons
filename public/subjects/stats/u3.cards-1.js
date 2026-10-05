// Statistical Claims, Unit Three, part one (first half): the opening card and the first name, the ones that lasted.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not
// contain: the reminder of the questions taught earlier, the preview map, the heading of a meet card, "what you must be able to
// point to", the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the
// heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a
// claim), the people or things in the figure (who or what it was worked out from), case (the app's word for one example; never
// the statistical sense, for which the unit says "people found with it").

FC.cards('stats', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Before you trust a figure: who is in it, and how did they get there?',
    canDo: 'After this unit you can read a claim made with numbers, such as a headline, an ad, a report or something a person says, and when the first thing wrong with it is who or what the figure was worked out from, say which of four ways it went wrong. You will point to the words that show it, say what you would need to see to put it right, and tell it apart from a claim whose figure comes from a fair picture of the group. The claim can be about a restaurant, a hospital, a school, a street, or something you are about to share.',
    everyday: [
      'You have met figures like these. A magazine says, "Four in five workers want a four-day week." An ad says, "Nine in ten people who try our studio say it helps them." A neighbor says, "Nothing made today will last like my grandfather’s tools." A newspaper says, "The best school in the county for reading." Each is a figure, and each was worked out from some particular people or things.',
      'Before a figure can say anything about a group, someone has to be counted, and the first question to put to every figure is who is in it and how they got there. Some are in because they were picked fairly. Others are in because of what happened to them: they stayed, they spoke up, they replied, or there were only a few to begin with. In each of those cases the figure can be an exact picture of the wrong group, and the claim then speaks for a bigger group than the figure can. This unit teaches four ways that happens, the one question that tells them apart, and how each looks beside the claim that holds which it is most often mistaken for. A figure from only some of a group is not for that reason a figure that goes wrong, and you will practise telling the difference.'
    ],
    map: { branch: 'counted' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Survivorship bias ---------- */
  { id: 'meet-survivor', kind: 'meet', outcome: 'survivor',     // heading is the outcome's plain words, from the key
    link: 'Start with a figure you may have met in a newsletter or an ad: a list of the ones that made it, with a conclusion drawn from what they share.',
    case: 'cn-restaurants', mark: 'A1',
    strip: [
      'There is a figure about restaurants: all 12 on a list open on Sundays.',
      'The 12 are the ones that are still open. Forty restaurants opened on the street in 2014.',
      'The 28 that closed are not on the list.',
      'The newsletter reads what the 12 share as the reason they lasted: open on Sundays, and your restaurant will last.'
    ],
    explain: [
      'The list is accurate. Every one of the 12 restaurants really does open on Sundays. What is wrong is who the list was made from. It was made after the fact, from the ones that were still there. The 28 that closed are not on it, and nobody can learn what the ones that did not last were like from a list of the ones that did.',
      'Here is why that matters. Suppose Sunday opening makes no difference at all, and 38 of the 40 restaurants that opened on the street opened on Sundays. Then you would expect nearly every survivor to open on Sundays as well. 38 out of 40 is 95 in every 100, and 95 in every 100 of 12 restaurants is 11.4, so 11 or 12. A list of 12 survivors in which all 12 open on Sundays is exactly what you would see if Sunday opening did nothing. Count the ones that closed as well and you can see it: if 26 of the 28 that closed also opened on Sundays, that is 26 out of 28, or 93 in every 100, almost the same as the 100 in every 100 among the survivors. The habit was nearly everywhere, so it cannot be what set the survivors apart.',
      'The same thing happens whenever a figure is worked out after the fact from what is left. The ones that closed, quit, failed or left are missing, and they are missing because of what happened to them, which is usually tied to the very thing the figure is about: shops close when they do badly, members leave a program that is not working for them. So the figure is exact for the survivors and says little about everyone who started. And what the survivors share tells you nothing about why they lasted, unless the ones that did not last did not share it.'
    ],
    feature: { step: 'A1', option: 'lasted' },
    name: 'The name for this is {o:survivor}. A "survivor" is one that is still there at the end, and "bias" is a lean in one direction: here, a figure that leans toward the ones that made it, because the ones that did not are missing.' },

  { id: 'again-survivor', kind: 'again', outcome: 'survivor',
    link: 'The Mill Street restaurants gave you what to point to: {needs:survivor}. Here is a second case with a completely different story, and no money in it at all.',
    first: 'cn-restaurants', second: 'cn-tools', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (restaurants, hand tools). Look at one thing only: which ones are in the figure, and what happened to the ones that are not.',
    prompt: { kind: 'phrase', answer: 'the 15 hand tools his grandfather kept from the 1960s' },
    shared: [
      'In both cases the figure is correct for what it counts. All 12 restaurants really do open on Sundays, and all 15 tools really do work. In both, what is counted is what was left at the end: the restaurants that stayed open, the tools that were kept. The restaurants that closed, and the tools that broke and were thrown out, are missing, and they went because of what happened to them.',
      'Both also read the figure as more than it is. The newsletter reads what the survivors share as the reason they lasted. Joel reads the quality of the survivors as the quality of everything made in the 1960s. The two stories share nothing else, so this is not about restaurants or about tools. It holds wherever a figure is worked out after the fact from what is left, with the ones that did not last missing. That is what {o:survivor} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story does not decide which way the figure leans',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: restaurants, tools, schools, clinics, a game. The layer underneath is how the people or things got into the figure.',
      'The four names belong to the layer underneath. A figure about a hospital can lean in any of the four ways, and so can a figure about a school. A figure about a hospital can also come from a fair picture of the group. The story tells you nothing about which.',
      'From here on, the cases change their stories on purpose. Sometimes two cases share the same story and the same figure, and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose: how large the figure sounds, and how big the count behind it is. A big count can be a poor picture and a small one can be a fair one. And a claim you agree with goes through the same question as one you do not.'
    ],
    fixed: ['how the people or things got into the figure, which is what this question asks about: {q:A1}'],
    varies: ['the topic', 'the people', 'how big the figure sounds', 'how many are in it', 'whether you would like the claim to be true', 'whether anything is wrong at all'] },

  { id: 'portrait-survivor', kind: 'portrait', outcome: 'survivor',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:survivor} in real life, where nobody marks the words for you.',
    typical: [
      'The figure is worked out after the fact. Something started with many, and the figure looks at what is left: "still open", "still playing", "still standing", "still with us", "still working".',
      'The ones that closed, quit, failed or left are missing, and nothing in the figure says how many there were. You often have to ask for the number that started.',
      'The figure is usually right for the ones in it. Worked out again from the same survivors it would give the same answer. The trouble is who is not there.',
      'What is missing is not a typical selection of the group. It is missing because of what happened to it, and that is often tied to what is being measured: shops close when they do badly, members leave a program that is not working for them, products are dropped when they sell badly. So the survivors lean the figure upward.',
      'It often comes with a conclusion drawn from what the survivors share ("they all did it this way, so this is the way"), or with praise for the past ("they don’t make them like they used to"). The conclusion is only supported if the ones that did not last did not do it that way too.',
      'It also hides in a short list of famous successes: a list of winners who all trained at dawn, a list of founders who all left school. The ones who did the same and did not win are not on the list.'
    ],
    not: [
      'Being left with a smaller group is not the trouble in itself. A figure about the 12 restaurants still open is a fine figure about those 12. The name applies when the figure is read as true of everyone who started, or what the survivors share is read as the reason they lasted, while the ones that closed, quit or left are missing.',
      'And if the ones that left are counted too, all 40 restaurants, the 12 that stayed and the 28 that closed, nothing is left out, and the name does not apply.'
    ],
    wild: ['"Every one of our graduates is working in the field."', '"Look at the ones that are still going: they all did it this way."', '"They don’t make them like they used to."', '"Our members who have been with us for five years report..."', '"All the winners had one thing in common."'],
    self: 'In your own life it is advice from people who made it: "I did it this way, and look where I am." The people who did it the same way and did not make it are not there to tell you. It is also the old things you still own, which make the past look better built than it was, because the ones that broke were thrown away.',
    ask: '"How many started, and what happened to the ones who are not here?" If you cannot find the number that started, you cannot tell what the survivors are survivors of.',
    act: [
      'Find the number that started: how many restaurants opened, how many funds, how many people joined.',
      'Ask for the ones that left: how many closed, quit or dropped out, and whether they were different from the ones that stayed.',
      'Say what the figure shows for the ones that lasted, and no more, until the ones that did not are counted too.',
      'Do not copy what the survivors did until you have seen whether the ones that did not last did it too.'
    ] },

  { id: 'check-survivor', kind: 'check', after: 'survivor',
    case: 'cn-app',
    ask: { type: 'phrase', step: 'A1', say: 'Which part of this case shows who the figure was worked out from, and why the others are missing? Tap it.',
           answer: 'The exam is only offered to learners who reach level 20. Of the 8,000 people who downloaded the app in January, 400 reached level 20.' } },

  /* ---------- The first look-alike: the same trial, reported two ways ---------- */
  { id: 'look-survivor-samp', kind: 'lookalike', ledger: 'survivor~samp_ok',
    link: 'You now have one way a figure goes wrong, and the sound claim it is most often mistaken for. The same trial can be reported both ways, and the two headlines can look alike.',
    cases: ['cn-seeds-alive', 'cn-seeds-all'],
    instruction: 'Both cases are about the same seed company, the same trial garden and the same 420 kilograms of tomatoes. Compare one thing: how many of the seeds planted are in the figure, and what is said about the ones that died.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-seeds-all' },
    difference: [
      'In Case A the 14 kilograms is the average of the 30 plants that were alive in September. The 20 that died early are not in it. 30 plants at 14 kilograms each is 420 kilograms. Spread over all 50 seeds, 420 kilograms is 8.4 kilograms each, not 14. The figure is right for the plants that lived, and the claim speaks for plants in general. The answer to the first question is {a:S1.counted}, and the question after it, {q:A1}, gets the answer {a:A1.lasted}.',
      'In Case B the company counts every seed it planted, the 30 that lived and the 20 that died, and reports the same 420 kilograms as 8.4 kilograms for every seed planted. Nothing is left out, and the claim stays with the 50 seeds of the trial. The answer to the first question is {a:S1.holds}, and the question after it, {q:H1}, gets the answer {a:H1.group}.',
      'The harvest is the same in both. What separates the two cases is who is in the average. 14 and 8.4 describe the same garden, and only one of them is about all the seeds that were planted.'
    ] }
]);
