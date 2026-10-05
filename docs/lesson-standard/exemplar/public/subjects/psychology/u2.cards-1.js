// Psychology, Unit Two, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('psychology', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Reasoning that protects, and reasoning that goes where the facts point',
    canDo: 'After this unit you can read a short account of someone defending a view or a choice, and say which of five things their reasoning is doing. The someone can be a colleague, a relative, a person in the news, or you.',
    everyday: [
      "You already know the raw material. Think of the last time you heard one of these. 'It was only a small one, it doesn't count.' 'We've come too far to stop now.' 'You can't trust that report.' 'I looked into it properly and I was right.' 'I checked, and I was wrong.'",
      'Each of these can be the sound of one of five different things. In four of them, the reasoning bends to protect something the person did, spent or believes. In the fifth, the reasoning is working as it should. A sentence on its own is never enough to say which one you are hearing. This unit teaches what else you need to see in the case, and the question to ask once you have seen it, which is different for each of the five.'
    ],
    map: { branch: 'reasoning' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A word the first name is built on ---------- */
  { id: 'term-cd', kind: 'term', term: 'cd',
    h: 'The jolt when what you do does not fit what you believe',
    link: 'Start with a feeling you already know. It has a name, and the first of the five things is what people do about it.',
    case: 'dinner',
    plain: [
      'Maya believes something about herself: she is vegan. She has just found out that she is doing something that does not fit it: eating fish stock. For a moment those two things sit side by side, and it is uncomfortable. Most people know the feeling: a small jolt of "this is not like me".',
      'The jolt comes whenever what a person does and what they believe do not fit: the careful driver who looks down and sees 90 on the dial, the person who believes in honesty and has just told a lie.'
    ],
    after: [
      'The discomfort does not last, because people get rid of it. There are honest ways to do that. Maya could put down her fork. Or she could say plainly, "I am not as strict a vegan as I tell people." Each of those changes something real: what she does, or what she claims.',
      'There is also a third way, and it changes nothing real: giving a reason why the act is fine after all. That third way is the first of this unit’s five things.'
    ] },

  /* ---------- Cognitive dissonance reduction ---------- */
  { id: 'meet-dissonance', kind: 'meet', outcome: 'dissonance',     // heading is the outcome's plain words, from the key
    link: 'Go back to Maya at the dinner table, with the discomfort you have just read about. Here is the whole evening.',
    case: 'sauce', mark: 'R1',
    strip: [
      'Maya did something: she ate the sauce, and finished it after she knew what was in it.',
      'It does not fit something she believes and has told people: that she is vegan.',
      'She did not stop, and she did not take back what she says about herself.',
      'Afterwards she gave a reason why this plate does not count.'
    ],
    explain: [
      'Maya took neither of the honest ways out. She did not put down her fork, and she did not say "I am not as strict as I tell people." She did the third thing: after the act, she gave a reason why the act is fine. "It hardly counts." In plain words, an excuse.',
      'The excuse works. The discomfort goes, and nothing real has changed: she ate the fish stock, and she still calls herself vegan. That is why people reach for it. It costs nothing.'
    ],
    feature: { step: 'R1', option: 'addstory' },
    name: 'The name for this is {o:dissonance}. You have met {t:cd}, the discomfort. "Reduction" means making something smaller. The name is for making the discomfort smaller by adding a reason, without changing what caused it.' },

  { id: 'again-dissonance', kind: 'again', outcome: 'dissonance',
    link: 'The last card gave you what to point to, from one case: {needs:dissonance}. Here is a second case with a completely different story.',
    first: 'sauce', second: 'driver', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the story (a dinner, a motorway). Look at one thing only: what the person’s reason does.',
    prompt: { kind: 'phrase', answer: "Everyone drives at that speed there, so it doesn't really count as speeding" },
    shared: [
      'Both people did something that does not fit what they believe about themselves. Both gave a reason afterwards for why it is fine: "It hardly counts", and "it doesn’t really count as speeding". Neither took anything back.',
      'The two stories share nothing else. So this is not about food or about driving. It holds wherever something a person did does not fit what they believe, and they give a reason afterwards for why it is fine. That is what {o:dissonance} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: what the case is about. Food, driving, money, work, love, sport. The layer underneath is the reasoning: what the person’s reasoning does.',
      'The five names belong to the layer underneath. The same story can carry any of them, and each name turns up in every kind of story. A case about money is no more likely to be one name than another.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share a story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['what the person’s reasoning does, which is what the key asks about: {q:R1}'],
    varies: ['the topic', 'the people', 'how much is at stake', 'whether you like the person', 'where the person ends up'] },

  { id: 'portrait-dissonance', kind: 'portrait', outcome: 'dissonance',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:dissonance} in real life, where nobody marks the words for you.',
    typical: [
      'The act comes first and the reason second. A reason that was weighed before acting is a decision, not an excuse.',
      'The act may be over, like Maya’s dinner, or it may be a habit that is still going on. Either way the reason arrives after the person is already doing it.',
      'The reason usually does one of four jobs. It shrinks the act ("it was only a small one"). It makes an exception ("this time is different"). It hands the act to circumstances ("I had no choice"). Or it points at other people ("everyone does it").',
      'The person is usually sincere. They are not lying to you; the reason has already worked on them. That is why it tends to sound calm, not guilty.',
      'Nothing real changes. The act tends to come round again, with the same reason or a fresh one.'
    ],
    not: 'Doing something that does not fit a belief is not yet {o:dissonance}. Someone who says "I know, I shouldn’t have, and I did" has given no reason why it is fine. Someone who changes what they do, or who says "I am not as strict as I claimed", has taken one of the honest ways out. The name applies only when a reason is given that makes the act fine and leaves everything else as it was.',
    wild: ['"Just this once."', '"I deserve it after the week I’ve had."', '"It doesn’t really count."', '"Everyone does it."', '"I had no choice."'],
    self: 'You will also hear it in your own head, usually the morning after: the gym session you skipped ("I needed the rest"), the message you did not answer ("they’ll understand").',
    ask: '"What would I do, or say about myself, if that reason were not available?" The honest ways out are still there: change what you do, or change what you claim.' },

  { id: 'check-dissonance', kind: 'check', after: 'dissonance',
    case: 'shops',
    ask: { type: 'phrase', step: 'R1', say: 'Which part of this case is the reason given afterwards for why it is fine? Tap it.',
           answer: 'One order makes no difference to anyone' } },

  { id: 'refute-mismatch', kind: 'refute', about: 'dissonance',
    h: 'A wrong idea about the phrase {t:cd}',
    link: 'The last cards described {o:dissonance}. In everyday talk the shorter phrase {t:cd} is often used for something else, and that leads to this unit’s first name being used where it does not apply.',
    idea: '"He says one thing and does another. That’s cognitive dissonance."',
    verdict: 'This is wrong, in two ways.',
    right: [
      'First, saying one thing and doing another is not {t:cd}. The two do not fit, and that is all you can see from outside. The phrase {t:cd} means {means:cd}: something the person feels, if they feel it at all.',
      'Second, even the discomfort is not what this unit names. {o:dissonance} is what a person does to make the discomfort go away without changing anything real: they give a reason why the act is fine.',
      'So when someone’s words and actions do not fit, you have seen the conditions and nothing more. Before you use the name {o:dissonance}, point to the reason they gave. No reason given, no {o:dissonance}.'
    ],
    testedBy: ['claim-mismatch'] }
]);
