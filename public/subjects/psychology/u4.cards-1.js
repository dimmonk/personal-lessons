// Psychology, Unit Four, part one (first half): the opening card, the word the unit is built on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of what the earlier units taught, the preview map,
// the heading of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('psychology', 'u4', [

  { id: 'orient-pat', kind: 'orient',
    h: 'Before you call someone “a narcissist” or “borderline”, check the years',
    canDo: 'Before you tell a friend that your boss is “a narcissist”, your ex is “borderline” or your neighbor is “a psychopath”, check what you have actually seen. A real pattern takes years, many places and many people, and most loud, shy or dramatic people are not one.',
    everyday: [
      'Almost always, the person using the label has seen one bad week, one hard relationship, or one loud person at one party. This unit gives you what to look for instead: the years, what the person does when something goes against them, and whether it keeps costing someone.',
      'There are six answers. Five are ways of being that keep hurting the person or the people around them. The sixth, {o:ordpersonality}, is a person who is loud, shy, dramatic, blunt or touchy the same way for years and costs no one anything. It is the right answer most of the time. None of this is a diagnosis: only a professional can give one, after a long assessment.'
    ],
    map: { branch: 'pattern' } },

  /* ---------- A word the whole unit is built on ---------- */
  { id: 'term-pd', kind: 'term', term: 'pd',
    h: 'Years, many places, and a cost',
    link: 'First, one word the whole unit leans on. Here is a man it fits.',
    case: 'pa-dale',
    plain: [
      'Three things stand out about Dale. He has been like this for twenty years. He has been like it everywhere: five workplaces, a marriage and two sons. And it keeps costing: he has left or been pushed out of every job, and one son has not spoken to him in six years.',
      'Those three together are what the word below stands for. A bad week, one hard boss or one rough marriage would not be enough. A “cost” is anything lost or harmed because of how the person is: a job, a friendship, money, trust, health.'
    ],
    after: 'Being shy, or loud, for years in every place is not this on its own. It has to keep costing someone.' },

  /* ---------- Grandiose narcissism ---------- */
  { id: 'meet-narcgrand', kind: 'meet', outcome: 'narcgrand',
    link: 'Start with the best-known label, the one people mean by “a narcissist”.',
    case: 'pa-dennis', mark: 'P1',
    explain: [
      'Dennis is not just confident. Confidence is believing you can do something. Dennis needs the people around him to treat him as special, over and over, and when someone else is praised it feels like a threat. So he runs that person down.',
      'The cost is what makes it more than a loud, sure man: two juniors resigned, and his son no longer visits.'
    ],
    spot: [
      { do: 'Check the years and places: three law firms and thirty years of marriage.', why: 'One bad workplace or one rough month is not enough.' },
      { do: 'Watch how he treats people: the corner room, talking over the juniors, never asking his wife about her day.', why: 'He acts as if he is better and owed more, with little interest in anyone else.' },
      { do: 'Watch what he does when someone else is praised: she is “a nobody who got lucky”.', why: 'Anger or scorn when he is not the special one is the sign.' },
      { do: 'Look for the cost: two juniors resigned, and his son no longer visits.', why: 'Without a cost, it is just a loud person.' }
    ],
    feature: { step: 'P1', option: 'above' },
    name: 'This is {o:narcgrand}. “Narcissism” means a sense of worth that depends on being treated as special, and “grandiose” means acting as if you are better than others.' },

  { id: 'check-narcgrand', kind: 'check', after: 'narcgrand',
    case: 'pa-wes',
    ask: { type: 'phrase', step: 'P1', say: 'Which words show what Wes does when he is not treated as special? Tap them.',
           answer: "When the club chose a younger player as captain, Wes told the whole squad that the new captain was 'a clown who couldn't kick a ball'" } }
]);
