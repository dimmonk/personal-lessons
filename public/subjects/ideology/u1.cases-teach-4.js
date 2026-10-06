// Political Ideologies, Unit One: the case the worked card shows, and the check after the question card.
// Every text here is invented. Field guide: see u1.cases-teach-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- The worked case ---------- */
  { id: 'i-w-mislead', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a speech about a national living wage', name: 'The living-wage speech',
    text: "From a campaign speech: 'They call it the national living wage, as though the nation had handed it over. The nation gave nothing. The cleaners and the drivers won it from their employers, in strikes, and every raise since has been won the same way. A country's wealth is made by the people who work and held by the people who own, and I am with the first.'",
    route: { D1: ['class'] },
    cues: { D1: ['The cleaners and the drivers won it from their employers, in strikes', "A country's wealth is made by the people who work and held by the people who own, and I am with the first"] } },

  /* ---------- The check after the question card ---------- */
  { id: 'i-check-kind', use: 'check', tier: 'clean', setting: 'borders', topic: 'a newsletter of the Border Counties League',
    text: "From the newsletter of the Border Counties League: 'Our valleys have been home to one people for a thousand years, and laws made by strangers will not rule them. Our country, our language, our people first.'",
    route: { D1: ['nation'] },
    cues: { D1: ['Our valleys have been home to one people for a thousand years', 'Our country, our language, our people first'] },
    reason: { D1: 'The text speaks for one people and puts it first: {cue:D1}. It sorts nobody by wages or by owning a business, and nothing it names is a faith or a custom held up as the guide.' },
    not: { outcome: 'tradition', why: 'The text speaks of a long past, but it holds up no faith, home life or custom as what should guide. What it puts first is the people itself.' } }
]);
