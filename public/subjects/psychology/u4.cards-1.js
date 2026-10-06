// Psychology, Unit Four, part one (first half): the opening card, the word the unit is built on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of what the earlier units taught, the preview map,
// the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('psychology', 'u4', [

  { id: 'orient-pat', kind: 'orient',
    h: 'Telling the lasting ways of being apart, and knowing when none of them applies',
    canDo: 'After this unit you can read an account of how one person has been over many years, with different people in different places, and say which of six things it shows: one of five lasting ways of being that keep costing someone, or an ordinary way of being that does not. Nothing in this unit is a diagnosis of a person. The names describe what an account shows. Only a professional, after a long assessment, can say what a particular person has.',
    everyday: [
      'You have heard the labels. A boss is called by the medical name for a swollen ego, an ex by the medical name for clinging, a roommate by the medical name for being dramatic. Almost always, the person saying it has seen one bad week, one hard relationship, or one loud person at one party.',
      'This unit teaches what each label would need before it could be used: years, more than one place, more than one relationship, and what the person does again and again. Five of the six names also need a cost, something that keeps being lost or harmed because of how the person is. The sixth name is for the person who is loud, shy, dramatic, blunt or touchy in the same way for years and does no lasting harm. It is the most common right answer.'
    ],
    map: { branch: 'pattern' } },

  /* ---------- A word the whole unit is built on ---------- */
  { id: 'term-pd', kind: 'term', term: 'pd',
    h: 'A lasting way of being that keeps costing',
    link: 'Before any of the six names, one word that the whole unit leans on. It is easier to see on a case first.',
    case: 'pa-dale',
    plain: [
      'Look at three things about Dale. How long: twenty years. How widely: five workplaces, a first marriage and two sons. What it has done: he has left or been pushed out of every job, and one of his sons has not spoken to him for six years.',
      'Those three together make up something this unit has a word for. It lasts, across years. It is a way of being and not a reaction, so it turns up in different places and with different people, and cannot be put down to one workplace or one other person. And it keeps costing: each time, something is lost by Dale or by the people around him, a job, a marriage, a son. One loss on one bad day would not be it. A "cost", in this unit, is anything lost or harmed because of how the person is: a job, a friendship, money, someone’s trust, someone’s health.'
    ],
    after: 'A way of being that lasts and turns up everywhere, like being shy, is not this unless it also keeps costing.' },

  /* ---------- Grandiose narcissism ---------- */
  { id: 'meet-narcgrand', kind: 'meet', outcome: 'narcgrand',
    link: 'Here is the first name, on a case with the words that decide it marked.',
    case: 'pa-dennis', mark: 'P1',
    strip: [
      'There are years and more than one place: three law firms, thirty years of marriage, a son.',
      'He acts as if he is better than the people around him and owed a place above them: the corner room, the head of the table, how the firm managed before he came.',
      'He takes little interest in what other people feel: in thirty years he has not asked his wife how her day was.',
      'When someone else is praised, he turns scornful: she was "a nobody who got lucky".',
      'It keeps costing: two juniors resigned this year with the same complaint, and his son no longer visits.'
    ],
    explain: [
      'Dennis is not simply confident. Confidence is believing you can do a particular thing. Dennis seems to need the people around him to treat him as special, again and again. Look at what happens when someone else is praised: a trainee wins a case, and Dennis calls her "a nobody who got lucky".',
      'Most people have a sense of how much they are worth that stays fairly steady. For some people it depends on being treated as special, so it has to be given again tomorrow, and when someone else is chosen or praised it feels under threat. Dennis defends it by attacking: anger and scorn, which means looking down on someone and letting them know it, aimed at whoever is in the way.',
      'And it keeps costing. Take the cost out and you would have a loud, certain man. Leave it in, and you have a way of being that keeps hurting the people around it.'
    ],
    feature: { step: 'P1', option: 'above' },
    name: 'The name for this is {o:narcgrand}. "Narcissism" is the word for a sense of worth that depends on being treated as special. "Grandiose" means having a grand picture of yourself, as better than others and owed more. It is one of two narcissisms in this subject.' },

  { id: 'check-narcgrand', kind: 'check', after: 'narcgrand',
    case: 'pa-wes',
    ask: { type: 'phrase', step: 'P1', say: 'Which part of this case shows what Wes does when he is not treated as special? Tap it.',
           answer: "When the club chose a younger player as captain, Wes told the whole squad that the new captain was 'a clown who couldn't kick a ball'" } }
]);
