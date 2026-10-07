// Political Ideologies, Unit Four: cases shown inside cards, part three (the two exceptions, and the worked case).
// An exception case shows the marks of one name and is another. `also` lists the answer it shows as well as its own, which loses
// to its own by the key's tie-break. Every text is invented.

FC.cases('ideology', 'u4', [

  /* ---------- Exception: one people under a crown. Looks like the nation branch's name that rules alone; is the name for an old order brought back ---------- */
  { id: 'i4-x-fasc', use: 'teach', tier: 'misleading', setting: 'borders', topic: 'a pamphlet for one people under one crown', name: 'The pamphlet for the crown',
    also: ['nation'],
    text: "From a royalist pamphlet: 'We are one people under one crown, and for six hundred years the crown and the Church courts kept the peace between us. The Assembly tore both down and put talk in their place. That was a crime against the realm. Let us close the Assembly, put the king back on his throne, and let the Church courts sit again as they sat before. One crown will speak for all of us, as it always did.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['for six hundred years the crown and the Church courts kept the peace between us', 'put the king back on his throne, and let the Church courts sit again as they sat before'],
            T1: ['That was a crime against the realm', 'put the king back on his throne, and let the Church courts sit again as they sat before'] },
    segments: [
      { text: 'We are one people under one crown', note: 'That speaks for one people, which is why the text can look like {o:fasc}. But it is not what the text asks the country to follow.' },
      { text: 'for six hundred years the crown and the Church courts kept the peace between us. The Assembly tore both down and put talk in their place. That was a crime against the realm.', note: 'That names an old order, the crown and the Church courts, and says it was torn down wrongly. It is only half: the other half is what the text asks for.' },
      { text: 'Let us close the Assembly, put the king back on his throne, and let the Church courts sit again as they sat before.' },
      { text: 'One crown will speak for all of us, as it always did.', note: 'That is where “one voice for everyone” comes from, so it can look like {o:fasc}. But the text says it of an old order that was always so, not of a new leader or movement.' }
    ] },

  /* ---------- Exception: old customs mourned, and the owners made to pay. Looks like the old-ways name; is the name from the working-people branch ---------- */
  { id: 'i4-x-quarry', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a quarry gate notice about customs and owners', name: 'The quarry gate notice',
    also: ['tradition'],
    text: "From a notice pinned at the Dunmere quarry gate: 'The blessing of the stone at the start of each season, the Sunday rest and the old quarry songs were handed down to us by the quarrymen before us, and they should guide how this town is run. Keep them, and change them slowly, if at all. But the owners of the quarry have cut the Sunday rest to pay for more stone, and those who cut the stone and those who own the quarry want different things, and we stand with those who cut it. The quarry stays with its owners. Let the council set a floor under our pay, and let a tax on the quarry's profits pay for the old quarrymen's pensions.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: ['those who cut the stone and those who own the quarry want different things, and we stand with those who cut it'],
            C1: ["The quarry stays with its owners. Let the council set a floor under our pay, and let a tax on the quarry's profits pay for the old quarrymen's pensions"] },
    segments: [
      { text: 'The blessing of the stone at the start of each season, the Sunday rest and the old quarry songs were handed down to us by the quarrymen before us, and they should guide how this town is run. Keep them, and change them slowly, if at all.', note: 'That asks to keep old customs and change them slowly, which is {o:conserv}. But the text does not stop there.' },
      { text: 'But the owners of the quarry have cut the Sunday rest to pay for more stone,', note: 'That names the owners and what they did. It is only half: the next words say which side the text is on.' },
      { text: 'and those who cut the stone and those who own the quarry want different things, and we stand with those who cut it.' },
      { text: "The quarry stays with its owners. Let the council set a floor under our pay, and let a tax on the quarry's profits pay for the old quarrymen's pensions.", note: 'That is what the text asks for about the quarry. It comes after the side is taken, and does not say which side.' }
    ] },

  /* ---------- The worked case: gentle and patient, and it asks for an order to be brought back ---------- */
  { id: 'i4-w-react', use: 'teach', tier: 'misleading', setting: 'faith', topic: 'a hospice closed by a charities act', name: 'The House of Saint Orrin',
    text: "From a petition signed by two hundred people in Brenwick Cross: 'We say this gently, and we are ready to wait. For three hundred years the House of Saint Orrin, run by its sisters, nursed the poor of this town. The new Charities Act closed it and sent the sisters away, and that was a wrong we will not call anything else. We do not shout. We ask only that the House be reopened, the sisters be brought back to it, and the old order of the House be restored, however many years it takes.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['For three hundred years the House of Saint Orrin, run by its sisters, nursed the poor of this town', 'the old order of the House be restored'],
            T1: ['that was a wrong we will not call anything else', 'We ask only that the House be reopened, the sisters be brought back to it, and the old order of the House be restored'] } }
]);
