// Civics, Unit Four, part one (first half): the opening card, the first name (a law put into practice), and the word
// for a written instruction from the President.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('civics', 'u4', [

  { id: 'orient-pres', kind: 'orient',
    h: 'Six things the President or a federal office can do',
    canDo: 'After this unit you can read a short news item or an everyday story in which the President or a federal office makes the last decision, and say which of six things it is: {plain:execute}; {plain:beyondpres}; {plain:commander}; {plain:diplomacy}; {plain:veto}; or {plain:pardon}. You will be able to point to the words that show it.',
    everyday: [
      "You already hear about this part of government almost every day. 'The office has published new rules.' 'The President signed an order.' 'The President sent the army to help.' 'The President will not sign the bill.' 'The President has pardoned him.' Each of these is a different thing, and the word 'government' in a headline hides which one.",
      'Unit One taught you to ask whose decision a story ends on. When the answer is the President or a federal office, one question is left before you can name the case, and it is the question this unit teaches: what does the President or the office do? Six answers are possible, and they are very different from one another.',
      'Five of the six are things the President or an office is allowed to do. The sixth is what it looks like when the President or an office reaches for something that only Congress can do: a new tax, a new crime, a ban. This unit teaches you to tell that one from the other five, and to say which of the five you are looking at.'
    ],
    add: 'One word is used in two ways in this unit, so here it is once. A federal {t:agency} is also called a federal office, and the two words mean the same thing: {means:agency}.',
    map: { branch: 'president' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A law put into practice ---------- */
  { id: 'meet-execute', kind: 'meet', outcome: 'execute',     // heading is the outcome's plain words, from the key
    link: 'Start with the plainest of the six, and the one you meet most often in the news: a law that Congress has already passed, and an office that has to make it work.',
    case: 'e-credit', mark: 'E1',
    strip: [
      'There is a law that Congress passed: a tax credit for adding insulation to a home. It sets the main conditions: the work must be real, and a licensed builder must do it.',
      'A federal office then decides the details that the law leaves open: which form people fill in, and which receipts they keep.',
      'It adds nothing the law does not allow. It asks only for proof of what the law already requires.',
      'Nobody votes in the case, and no judge appears. The last thing in it is the office publishing the form, and its staff checking the forms next.'
    ],
    explain: [
      'This is how most laws reach ordinary people. Congress writes a law in general words: who gets the credit, and what the work must be. It does not write the form, collect the receipts or check each claim, and it could not do so for millions of people. Someone has to turn the words of the law into something a person can fill in. That is the daily work of the federal offices, and the President leads them.',
      'The point to notice is where an office’s power comes from. It comes from the law. The office has no power of its own to give out tax credits or to ask for receipts. It borrows both from the law Congress passed, which is why it can go only as far as that law allows. Here it stays inside: the law said the work must be real, and the form asks for receipts that show it is.',
      'Think of the two other ways it could have gone. If Congress had to write every form and check every claim, it would have time for nothing else. If the offices could do what they liked, a law would be only a suggestion. The daily work in between, inside the law, is what this name is for.'
    ],
    feature: { step: 'E1', option: 'carryout' },
    name: 'The name for this is {o:execute}. It means what it says: the law already exists, and someone is making it work in daily life.' },

  { id: 'again-execute', kind: 'again', outcome: 'execute',
    link: 'The insulation credit gave you what to point to, from one case: {needs:execute}. Here is a second case with a different story, and no taxes in it.',
    first: 'e-credit', second: 'e-logbooks', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the story (a tax credit, truck drivers). Look at one thing only: what the office decides, and whether it goes beyond the law that stands behind it.',
    prompt: { kind: 'phrase', answer: 'the federal road-freight agency published how drivers must record their rest in a logbook' },
    shared: [
      'In both cases a law that Congress passed comes first: a tax credit, ten hours of rest. In both, a federal office then works out how the law is to be followed: a form and receipts, a logbook. And in both the office leaves the law’s main rule alone. The credit still goes to people who do real work with a licensed builder, and the rest period is still ten hours.',
      'The two stories share nothing else. One is about taxes and the other about trucks. So this is not about tax or about driving. It holds wherever an office turns a law Congress has passed into daily practice and stays inside it. That is what {o:execute} names.'
    ] },

  { id: 'lens-pres', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a tax form, a flood, a trip abroad, a pen on a desk. The layer underneath is what the President or the federal office does.',
      'The six names belong to the layer underneath. The same story can carry any of them. A tax can be collected by an office, demanded by an order that no law allows, or written into a bill that the President will not sign. A navy ship can be sent somewhere by an order, or be part of a visit to another country. The story tells you nothing about the name.',
      'From here on, the cases change their stories on purpose. Sometimes two cases share almost the same story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.',
      'One more thing changes on purpose. The loudest part of a case is often not the part that decides it: an order with a signature, a visit by another country’s leader, a law that came first. What decides is what the President or the office does, and whether a law stands behind it where one is needed.'
    ],
    fixed: ['what the President or the office does, which is what the question asks about: {q:E1}'],
    varies: ['the topic', 'the people', 'which office is named', 'how loud or important the case sounds', 'whether you agree with what is done'] },

  { id: 'portrait-execute', kind: 'portrait', outcome: 'execute',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:execute} in real life, where nobody marks the words for you.',
    typical: [
      'A law comes first, and the case shows it or says where it came from: "under the law", "the law Congress passed", "as the new law requires". An office then takes the next step.',
      'The office does the daily work of the law. Writing its detailed rules, processing applications, inspecting, collecting money and enforcing are all of this kind. The words you hear are "published the form", "announced its rules", "inspectors found", "applications are being processed".',
      'It can be quiet. There may be no vote and no ceremony, and it can be as small as a clerk checking one form.',
      'The office has no power of its own here. Whatever it decides has to stay inside the law that stands behind it, and a person who thinks it has gone past can take it to a judge.'
    ],
    not: 'An office doing something is not for that reason {o:execute}. A law Congress passed has to stand behind what it does. And the law on its own is not enough: if the case ends with Congress voting on the law, nobody is putting it into practice yet.',
    wild: ['"The agency announced new rules."', '"Under the new law, applicants must..."', '"Inspectors found..."', '"The office is processing applications."', '"Enforcement begins next month."'],
    self: 'You meet it in your own life every time a form, a fee or an inspection comes from a federal office: a tax return, a passport application, a notice from the immigration service.',
    ask: '"Which law is behind this, and does the office stay inside it?" If you can name the law, and the office does stay inside it, the case is {o:execute}.' },

  { id: 'check-execute', kind: 'check', after: 'execute',
    case: 'e-birdpermit',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the federal office decides or does? Tap them.',
           answer: 'a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit' } },

  /* ---------- A word the next name is built on ---------- */
  { id: 'term-order', kind: 'term', term: 'order',
    h: 'A written instruction from the President to the offices',
    link: 'The next name leans on a word that is easy to pass over. The case shows what it means before it is named.',
    case: 'e-memo',
    plain: [
      'On Monday the President signed a paper. Nobody voted on it, and nobody outside the government has to do anything because of it. It is a set of instructions from the President to the federal offices: answer the public’s letters within thirty days.',
      'The President leads the offices that carry out the laws, so the President can tell them how to do their work. Presidents do this in writing, and the paper in the case is an example.'
    ],
    after: [
      'Two things follow from what it is. First, it is not a law. A law is something Congress passes, and nobody in Congress voted on the paper. Second, because it is an instruction to the offices, the next President can write another instruction and undo it.',
      'An {t:order} can tell the offices how to carry out the laws that already exist. It is addressed to the offices, and it needs no vote.'
    ] }
]);
