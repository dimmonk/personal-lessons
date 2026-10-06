// Political Ideologies, Unit One: cases shown on the exception cards and the worked cards, and the check after the question card.
// Each exception case is a text that looks like one answer and is another. also lists an answer the case shows as well as its own,
// which loses to its own by a tie-break in the key. Every text here is invented. Field guide: see u1.cases-teach-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- Exceptions ---------- */
  // Looks like working people against owners; is the nation. Workers and owners are named only to be denied.
  { id: 'i-x-deny', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a radio address that denies any split', name: 'The radio address',
    text: "From a radio address: 'Some will tell you that the drivers and the dock owners are on opposite sides. They are not. There is only one side, the nation, and it is ours. Those who try to split us by wages and ownership are working against the whole country.'",
    route: { D1: ['nation'] },
    cues: { D1: ['There is only one side, the nation, and it is ours', 'Those who try to split us by wages and ownership are working against the whole country'] },
    segments: [
      { text: 'Some will tell you that the drivers and the dock owners are on opposite sides. They are not.', note: 'That names workers and owners, which is why the text can look like the first answer. But the text names them to say they are not on opposite sides. It stands with neither against the other.' },
      { text: 'There is only one side, the nation, and it is ours.' },
      { text: 'Those who try to split us by wages and ownership are working against the whole country.', note: 'That confirms the answer, but it is the sentence before that settles it: it says which one side the text puts first.' }
    ] },

  // Looks like the nation; is working people against owners (the nation shows too, and gives way).
  { id: 'i-x-ourcountry', use: 'teach', tier: 'misleading', setting: 'town', topic: 'a union meeting that says "our country"', name: 'The mill-and-port meeting',
    also: ['nation'],
    text: "At a union meeting: 'This country was built by the people who work its mills and ports, and it is time the country remembered them. The owners of those mills have shipped the profits abroad and left the town with the bill. We are the country's workers, and we stand against the owners.'",
    route: { D1: ['class'] },
    cues: { D1: ['The owners of those mills have shipped the profits abroad and left the town with the bill', "We are the country's workers, and we stand against the owners"] },
    segments: [
      { text: 'This country was built by the people who work its mills and ports, and it is time the country remembered them.', note: 'That speaks of the country, which is why the text can look like the second answer. But it speaks of the country as built by working people, and it has still to say who they are set against.' },
      { text: 'The owners of those mills have shipped the profits abroad and left the town with the bill.', note: 'That names the owners and what they did. It is half of what settles it. The words that finish it say whose side the text is on.' },
      { text: "We are the country's workers, and we stand against the owners." }
    ] },

  // Looks like the nation; is old ways (the nation shows too, and gives way).
  { id: 'i-x-faithcountry', use: 'teach', tier: 'misleading', setting: 'faith', topic: 'a bishop’s letter about the country', name: 'The bishop’s letter',
    also: ['nation'],
    text: "From a bishop's letter: 'Ours is one people with one past, and that past is held together by the faith of our fathers, the family home and the customs of the harvest. What is built on them will stand and what is built against them will fall. Let the faith of our fathers guide this country.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['held together by the faith of our fathers, the family home and the customs of the harvest', 'Let the faith of our fathers guide this country'] },
    segments: [
      { text: 'Ours is one people with one past', note: 'That speaks for one people with one past, which is what you point to for the second answer, and the text does say it. But it is not what the text asks the country to be guided by.' },
      { text: 'that past is held together by the faith of our fathers, the family home and the customs of the harvest', note: 'That names old ways of faith, home and custom as what holds the people together. It is half of what settles it. The other half is what the text asks the country to follow, in the last sentence.' },
      { text: 'Let the faith of our fathers guide this country' }
    ] },

  // Looks like what every person is owed; is old ways (rights shows too, and gives way).
  { id: 'i-x-lowtax', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a candidate who wants a small government and old values', name: 'The candidate’s letter',
    also: ['rights'],
    text: "From a candidate's letter to voters: 'Every person should keep what they earn, and the government should be kept small. But freedom without the old values is only a loose crowd. The church, the family and the customs our parents taught us are what hold a free country together, and what should guide it.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['The church, the family and the customs our parents taught us are what hold a free country together, and what should guide it'] },
    segments: [
      { text: 'Every person should keep what they earn, and the government should be kept small.', note: 'That is what a text puts first when it holds up what every person is owed, and it really is in this text. But the text goes on to say that this is not enough on its own.' },
      { text: 'But freedom without the old values is only a loose crowd.', note: 'That turns from freedom to the old values, and the turn matters. It does not yet say what the old values are or what they should do.' },
      { text: 'The church, the family and the customs our parents taught us are what hold a free country together, and what should guide it' }
    ] },

  // Looks like the nation; is no side named. A ruler's methods are not a side.
  { id: 'i-x-ruler', use: 'teach', tier: 'misleading', setting: 'town', topic: 'an order from a ruler', name: 'The Governor’s order',
    text: "Order of the Governor of the Eastern District: 'Two newspapers are closed from today. The Harbor party is dissolved and its offices sealed. A watcher will be named in every street to report who meets whom. The Governor thanks those who obey, and these orders will stand for as long as he chooses.'",
    route: { D1: ['none'] },
    cues: { D1: ['Two newspapers are closed from today', 'A watcher will be named in every street to report who meets whom', 'these orders will stand for as long as he chooses'] },
    segments: [
      { text: 'Two newspapers are closed from today. The Harbor party is dissolved and its offices sealed.', note: 'That is how this ruler keeps power. Texts that put one people first can do the same, which is why this looks like the second answer. But closing papers and banning parties is a way of keeping power. It does not say whom the text speaks for.' },
      { text: 'A watcher will be named in every street to report who meets whom.', note: 'That is another way of keeping power. It is what makes the text look like the second answer, and it still names no people and no side.' },
      { text: 'The Governor thanks those who obey, and these orders will stand for as long as he chooses.' }
    ] },

  // Looks like what every person is owed; is working people against owners (rights shows too, and gives way).
  { id: 'i-x-fairstart', use: 'teach', tier: 'misleading', setting: 'schooling', topic: 'a teachers’ leaflet about a school roof', name: 'The teachers’ leaflet',
    also: ['rights'],
    text: "From a teachers' union leaflet: 'Every child in this city is owed a school with a roof that does not leak. But the charter-school chain that owns our school takes a fee for every student while the staff who teach them are paid less each year. Teachers and owners want different things, and we are with the teachers.'",
    route: { D1: ['class'] },
    cues: { D1: ['the charter-school chain that owns our school takes a fee for every student while the staff who teach them are paid less each year', 'Teachers and owners want different things, and we are with the teachers'] },
    segments: [
      { text: 'Every child in this city is owed a school with a roof that does not leak.', note: 'That says what every child is owed, which is what you point to for the fourth answer, and the text does say it. But the text does not stop there.' },
      { text: 'But the charter-school chain that owns our school takes a fee for every student while the staff who teach them are paid less each year.', note: 'That names the owners and the staff. It is half of what settles it. The words that finish it say which side the text is on.' },
      { text: 'Teachers and owners want different things, and we are with the teachers.' }
    ] },

  // Looks like old ways; is working people against owners (old ways show too, and give way).
  { id: 'i-x-loomhands', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a newsletter for loom hands and their customs', name: 'The loom hands’ newsletter',
    also: ['tradition'],
    text: "From a mill-town newsletter: 'The chapel, the Sunday rest and the harvest supper were handed down to us by the loom hands before us, and they should guide how this town is run. But the mill's owners have cut the hours that let us keep them. Those who work the looms and those who own the mill want different things, and we stand with the loom hands.'",
    route: { D1: ['class'] },
    cues: { D1: ["the mill's owners have cut the hours that let us keep them", 'Those who work the looms and those who own the mill want different things, and we stand with the loom hands'] },
    segments: [
      { text: 'The chapel, the Sunday rest and the harvest supper were handed down to us by the loom hands before us, and they should guide how this town is run.', note: 'That holds up old customs as the guide, which is what you point to for the third answer, and the text does say it. But the text does not stop there.' },
      { text: "But the mill's owners have cut the hours that let us keep them.", note: 'That names the owners and what they did. It is half of what settles it. The words that finish it say which side the text is on.' },
      { text: 'Those who work the looms and those who own the mill want different things, and we stand with the loom hands.' }
    ] },

  // Looks like what every person is owed; is the nation (rights shows too, and gives way).
  { id: 'i-x-twoduties', use: 'teach', tier: 'misleading', setting: 'borders', topic: 'a speech about two duties', name: 'The speech about two duties',
    also: ['rights'],
    text: "From a speech: 'Every person is owed a fair hearing, and I will defend that. But this country is one people, and our first duty is to our own people, and it comes before any stranger's claim.'",
    route: { D1: ['nation'] },
    cues: { D1: ['this country is one people', 'our first duty is to our own people, and it comes before any stranger\'s claim'] },
    segments: [
      { text: 'Every person is owed a fair hearing, and I will defend that.', note: 'That says what every person is owed, which is what you point to for the fourth answer, and the text does say it. But the text goes on to rank it.' },
      { text: 'But this country is one people', note: 'That speaks for one people. It is half of what settles it. The words that finish it say what the text puts first.' },
      { text: "our first duty is to our own people, and it comes before any stranger's claim" }
    ] },

  /* ---------- The two worked cases ---------- */
  { id: 'i-w-clean', use: 'teach', tier: 'clean', setting: 'housing', topic: 'a letter about turning people away from a home', name: 'The letter about homes',
    text: "From a letter in a local paper: 'Nobody in this country should be turned away from a rented home because of where they were born or whom they love. A fair chance at a home is owed to every person alike, and a country that sets that first has its priorities right.'",
    route: { D1: ['rights'] },
    cues: { D1: ['A fair chance at a home is owed to every person alike, and a country that sets that first has its priorities right'] } },

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
