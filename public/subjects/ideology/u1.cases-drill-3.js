// Political Ideologies, Unit One: drill cases, third stage (whole routes, misleading cases) and the faulty claims.
// A misleading case is one in which the most noticeable thing in the story is not what decides it. echo names a teaching case of
// a different answer whose story the case is built to bring back, so that the likeness and the key can be seen to disagree.
// Field guide: see u1.cases-drill-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- misleading: the words point one way and the question another ---------- */
  { id: 'i-m-class', use: 'drill', tier: 'misleading', setting: 'town', topic: 'vendors at the county fair', echo: 'i-speech-nation',
    text: "The county fair is the pride of this country, and the vendors who set it up at four each morning are paid by the hour to make the show's owners rich. The owners and the vendors are on opposite sides of the fence, and this letter is written from the vendors' side.",
    route: { D1: ['class'] },
    cues: { D1: ["The owners and the vendors are on opposite sides of the fence, and this letter is written from the vendors' side"] },
    reason: { D1: 'The text opens with the country and then splits the people at the show into vendors and owners, and stands with the vendors: {cue:D1}.' },
    not: { outcome: 'nation', why: '“The pride of this country” is only where the story is set. The text speaks for the vendors against the owners, not for one people.' } },

  { id: 'i-m-nation', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a foreman, a boss and a laborer under one flag', echo: 'i-whouse',
    text: "In a healthy country the foreman and the boss and the laborer share one flag, and whoever tells them they are enemies is the enemy of the whole people. We are one body, and we will keep it whole.",
    route: { D1: ['nation'] },
    cues: { D1: ['In a healthy country the foreman and the boss and the laborer share one flag', 'We are one body, and we will keep it whole'] },
    reason: { D1: 'The text names the foreman, the boss and the laborer only to put them on one side, and it speaks for the whole people: {cue:D1}.' },
    not: { outcome: 'class', why: 'Workers and a boss are named, but the text stands with none of them against the others. It says they are one.' },
    wouldChange: 'If the text had said that the laborer and the boss are on opposite sides and had stood with the laborer, it would be {a:D1.class}.' },

  { id: 'i-m-none2', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a chairman who decides everything', echo: 'i-speech-nation',
    text: "The Chairman has spoken on the radio: 'I alone decide who may stand for the council, and I alone decide who may speak at its meetings. Those who obey will find me generous. The Chairman's word stands.' Seven council members were replaced last week.",
    route: { D1: ['none'] },
    cues: { D1: ['I alone decide who may stand for the council, and I alone decide who may speak at its meetings', "The Chairman's word stands"] },
    reason: { D1: 'The text says who holds power and how they keep it: {cue:D1}. It speaks for no people and no side.' },
    not: { outcome: 'nation', why: 'A ruler who silences others can sound like a text for the nation, but this text never says whom it speaks for. It only says who decides.' },
    wouldChange: 'If the Chairman had said that he alone speaks for the one people of this country and that the people comes first, it would be {a:D1.nation}.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'i-claim-demo', use: 'claim',
    text: "\"The leaflet says the cleaners and drivers won the national minimum wage from their employers. It says 'national', so it must be putting the nation first.\"",
    ask: { type: 'option', step: 'D1', answer: 'class' },
    fault: 'The claim sees the word “national” and stops. Here it only says the wage is the same everywhere, while the leaflet puts the cleaners and drivers on one side and their employers on the other.',
    corrected: 'The leaflet says the cleaners and drivers won the wage from their employers. It puts the people who work on one side and their employers on the other, and stands with the workers. That is {a:D1.class}.' },

  { id: 'i-claim-insult', use: 'claim',
    text: '"The council member called the new bus lane communism on wheels, so the plan must be a communist plan."',
    context: 'The plan paints a bus lane on Mill Road for $40,000 and starts in March.',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim treats an insult as if it described the plan, but the plan only says where a lane goes and what it costs. It shows no {t:ideology} for the name to fit.',
    corrected: 'The council member called the plan “communism on wheels”, but the plan only says where a lane will be painted, what it costs and when it starts. That is {a:D1.none}. A name is only an insult until the plan itself says something that fits it.' },

]);
