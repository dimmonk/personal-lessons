// Psychology, Unit Three, part one (first half): the opening card and the first name, and the card that says the story never decides.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Units One and Two, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('psychology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Four things one person can do to another, and the ordinary exchange that is none of them',
    canDo: 'After this unit you can read a short account of one person saying or doing something to another, and say which of five things it is: one of four things that work against the other person, or {plain:ordexchange}. The two people can be partners, colleagues, relatives, friends, or you and someone you know.',
    everyday: [
      "You have heard all of these. 'That never happened.' 'You're imagining things.' 'Why would you accuse me of that?' 'You're the one who's always late.' 'I've never felt like this about anyone.' Each of them can be the sound of something done to a person that works against them. Each of them can also be what an ordinary person says in an ordinary row.",
      'This unit teaches four things of the first kind, and one name for the second. The second is the one you will use most. Most arguments, complaints, defences and compliments are not any of the four, and a person who has just been told something unwelcome, or wrongly accused, or hurt, can say every one of those sentences without doing anything to anyone. A sentence on its own cannot tell you which you are hearing, and neither can how upset anyone is. The words and events in the case can, and this unit teaches which ones to look for.'
    ],
    map: { branch: 'tactic' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Gaslighting ---------- */
  { id: 'meet-gaslight', kind: 'meet', outcome: 'gaslight',     // heading is the outcome's plain words, from the key
    link: 'This unit is about what one person says or does to another. The first of the five is what people mean when they say that someone is "messing with my head". Here is the whole story of one case.',
    case: 'g-repair', mark: 'T1',
    strip: [
      'Something really happened: Jonas texted that he would pay half, and Tess still has the text.',
      'Afterwards he told her that it did not happen, and that she had dreamt it up or muddled it.',
      'He did not say it once. He said it whenever she raised it, and he was still saying it in May.',
      'Tess has started to doubt her own memory: she rereads her old messages, and she has asked her sister, "Am I remembering this wrong?"'
    ],
    explain: [
      'Start with how you know what happened in the past. Most of it is memory, yours and other people’s. When two people remember something differently, they usually sort it out by checking: a message, a receipt, someone who was there. Tess and Jonas could have settled their disagreement that way. She had the text.',
      'Jonas did something else. He told Tess, over and over, that what she remembered had not happened. It does not matter whether the voice is kind or angry. What matters is what it does to the person who hears it. Tess has the proof in her hand and still starts to ask whether she is the one who is wrong. A person who is told often enough that their memory cannot be trusted begins to treat it that way, and then relies on the other person’s version of events instead of their own.',
      'Notice that this does not need one big lie. It is the repetition over months, about something that really happened, that does the work. One denial can be an honest mix-up. Four months of them, and a sister being asked "Am I remembering this wrong?", cannot be a mix-up.',
      'The question is not why Jonas does it, or whether he knows what he is doing. He may want to avoid paying; he may not see it as anything at all. The question is what is done to the other person, as the case shows it, and the case shows this.'
    ],
    feature: { step: 'T1', option: 'denymemory' },
    name: 'The name for this is {o:gaslight}. It is the everyday word as well as the name used here, and here it is used only for what is described above: something that really happened, a denial that comes back over weeks or months, and a person who starts to doubt their own memory. It is not a word for any disagreement about what happened.' },

  { id: 'again-gaslight', kind: 'again', outcome: 'gaslight',
    link: 'The car repair gave you what to point to: {needs:gaslight}. Here is a second case with a completely different story.',
    first: 'g-repair', second: 'g-reports', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (a car, a sales report). Look at one thing only: what the person says each time the other brings it up, and for how long.',
    prompt: { kind: 'phrase', answer: "Every week since, when she brings it up, he says, 'You're getting confused about what I said,' or 'I don't know where you get these ideas.' This has gone on for four months." },
    shared: [
      'In both cases something really happened, and the case shows it: Tess has the text, and Ana has the email. In both, the other person says it did not happen, or that the person has it wrong, and does not say it once but whenever it comes up, for months. In both, the person has started to doubt their own memory: Tess rereads her messages, and Ana keeps a diary and asks two colleagues whether she is losing track of things.',
      'One story is a couple and a car, the other is a manager and a weekly report. The stories share nothing, so this is not about money, couples or workplaces. It holds wherever something really happened, it is denied again and again over weeks or months, and the other person starts to doubt their memory. That is what {o:gaslight} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: who the two people are and what it is about. Money, work, family, a club. The layer underneath is what one person does to the other.',
      'The five names belong to the layer underneath. The same story can carry any of them, and each name turns up in every kind of story. A case about money is no more likely to be one name than another.',
      'Two other things never decide it either, and the unit comes back to both: how upset anyone is, and how kind or unkind the words sound. A case can be very hurtful and still show none of the four things. And a case can be spoken in a calm, kind voice and still show one of them.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same two people and the same story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['what is done to the other person, as the case shows it, which is what the question asks about: {q:T1}'],
    varies: ['the two people', 'the topic', 'how much is at stake', 'how upset anyone is', 'how kind or unkind the words sound'] },

  { id: 'portrait-gaslight', kind: 'portrait', outcome: 'gaslight',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:gaslight} in real life, where nobody marks the words for you.',
    typical: [
      'It needs a long stretch of time. The denial comes back, in the same words or in new ones, whenever the subject is raised. A single occasion cannot be it.',
      'The denial usually comes with a reason that points at the other person: "you always get things muddled", "you are imagining it", "you are too tired", "you are being dramatic". It turns the other person’s memory into the problem.',
      'It can be kind. "Oh sweetheart, you have been so tired lately" is as much a denial as an angry word is. The voice does not matter. What matters is that the case shows the thing really happened, and that the person is told it did not.',
      'The person on the receiving end changes what they do. They keep screenshots and diaries, check their memory with other people before they trust it, and stop raising things. That change is part of what you point to.',
      'The person who does it may know exactly what they are doing, or may not. That is not what is asked. The answer comes from what the case shows.'
    ],
    not: 'Disagreeing about what happened is not {o:gaslight}. Two people can remember a day differently, say so, look at the message or the receipt, and one of them says "I was wrong". A person who says "I do not remember that" once has not told anyone for months that it did not happen. And a denial of something that did not happen is not it either: if the other person is the one who has it wrong, the case does not show the thing really happened, and the name cannot be used.',
    wild: ['"That never happened."', '"You are imagining things."', '"You always remember it wrong."', '"I never said that."', '"You are too sensitive. You are making it up."'],
    self: 'You may meet it from the receiving end first: a relative who always says you misremember, or a manager whose instructions keep changing and who says they never changed. You can also end up on the other side without noticing, when you tell someone "that is not how it was" for the fifth time about something you know they remember.',
    ask: '"Is there something I can check outside my own memory: a message, a receipt, a note made at the time, a person who was there?" For Tess it was the text. When there is a record, and the other person still says it did not happen, ask next how long this has been going on.' },

  { id: 'check-gaslight', kind: 'check', after: 'gaslight',
    case: 'g-check',
    ask: { type: 'phrase', step: 'T1', say: 'Which part of this case shows what the other person says, again and again, about something that really happened? Tap it.',
           answer: "whenever Jade asks about it, Wen says, 'I never agreed to that. You must be thinking of someone else.' It has happened at almost every meeting for two months." } },

  { id: 'refute-doubt', kind: 'refute', about: 'gaslight',
    h: 'A wrong idea about a disagreement over what happened',
    link: 'You have met the first name and what to point to. In everyday talk the word is used for something much wider than that, and this card is about the wider use.',
    idea: '"We remember last Saturday differently. She is gaslighting me."',
    verdict: 'This is wrong.',
    right: [
      'Remembering something differently is a disagreement about what happened, and disagreements like that are part of ordinary life. Memory is not a recording, and two honest people can come away from one evening with two versions.',
      'Before you use the name {o:gaslight}, point to the three things the name needs: {needs:gaslight}. If the case shows one disagreement, however bitter, you have not got there. If one person is simply wrong about what happened, you have not got there either, because the name needs something that really happened.',
      'So the right way to put it is that "we remember last Saturday differently" is where the question starts. It becomes {o:gaslight} only if the case shows that Saturday happened, that she keeps telling me over weeks or months that it did not, and that I have begun to doubt my own memory.'
    ],
    testedBy: ['claim-doubt'] }
]);
