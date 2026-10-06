// Political Ideologies, Unit One: cases shown inside cards, part one (the word for the unit, the first two answers).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// Every text here is invented. No person, party, country or event is real, and no text says what any real person believes.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one answer share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.D1 is the reason for this case's answer. not names the nearest wrong answer
// (a ledger neighbor) and says why it fails for this case. also lists an answer the case shows as well as its
// own, which loses to its own by a tie-break in the key.

FC.cases('ideology', 'u1', [

  /* ---------- The word the unit leans on (shown by the term card; asked of nothing) ---------- */
  { id: 'i-term-bus', use: 'teach', tier: 'clean', setting: 'town', topic: 'two neighbors at a bus stop',
    text: "Two neighbors wait at a bus stop and talk about the country. Dolores says, 'A country is for the people who keep it running, so they should have the first say, and the government should answer to them.' Her neighbor Emeka says, 'A country is for what we were handed by the people before us, so we should keep what works and change it slowly.' They do not agree, but each has given, in a few lines, an answer to who the country is for and a view of how it should be run." },

  /* ---------- The first answer: working people, against those who own the businesses ---------- */
  { id: 'i-whouse', use: 'teach', tier: 'clean', setting: 'work', topic: 'a freezer depot and its profits', name: 'The depot leaflet',
    text: "A leaflet is handed out at the gates of the Dunmere freezer depot. 'The depot's owners took a record profit again this year. The drivers and loaders who keep it running have been told there is no money for a raise. The people who own this depot and the people who work in it will not want the same thing, and this leaflet is on the side of the ones who work.'",
    route: { D1: ['class'] },
    cues: { D1: ['The drivers and loaders who keep it running have been told there is no money for a raise', 'The people who own this depot and the people who work in it will not want the same thing, and this leaflet is on the side of the ones who work'] } },

  { id: 'i-bankstaff', use: 'check', tier: 'clean', setting: 'money', topic: 'bank staff voting to strike',
    text: "The branch staff at Crowley Savings have voted to strike. 'The bank's owners paid themselves a bonus the size of our whole year's wages,' said the union spokesperson. 'The tellers and cleaners who keep these branches open are not asking for charity. We are asking for our share, and we will stand together against the owners until we get it.'",
    route: { D1: ['class'] },
    cues: { D1: ['The tellers and cleaners who keep these branches open', 'we will stand together against the owners until we get it'] },
    segments: [
      { text: 'The branch staff at Crowley Savings have voted to strike', note: 'That is what the staff did. It does not yet say who they stand against.' },
      { text: "The bank's owners paid themselves a bonus the size of our whole year's wages", note: 'That names the owners and what they took. It is half of what you point to. The other half is the staff, and the side the text takes.' },
      { text: 'The tellers and cleaners who keep these branches open are not asking for charity. We are asking for our share, and we will stand together against the owners until we get it.' }
    ],
    reason: { D1: 'The words that settle it are {cue:D1}: working people on one side, owners on the other, and the text standing with the workers. Nothing in the text speaks for a nation or for old ways.' },
    not: { outcome: 'none', why: 'A strike vote is a practical matter, and a text could report it and take no side. This one does not stop at reporting. It names the workers and the owners as two sides and stands with the first.' } },

  /* ---------- The second answer: the nation, or its ordinary people ---------- */
  { id: 'i-speech-nation', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a speech at a new bridge', name: 'The bridge speech',
    text: "From a speech at the opening of a new bridge on the border road: 'Wherever you were born in this country, whatever your trade or your party, you are one people with one history and one future. When the nation is slighted, each of us is slighted. Our first loyalty is to the nation.'",
    route: { D1: ['nation'] },
    cues: { D1: ['you are one people with one history and one future', 'Our first loyalty is to the nation'] } },

  { id: 'i-nation-check', use: 'check', tier: 'clean', setting: 'schooling', topic: 'what children should be taught',
    text: "The education minister told a school assembly: 'Our children should learn first the songs, the history and the language of this country. We are one people, and a people that does not know its own story will not stay a people.'",
    route: { D1: ['nation'] },
    cues: { D1: 'We are one people, and a people that does not know its own story will not stay a people' },
    reason: { D1: 'The text speaks for one people and puts it first: {cue:D1}. It names no workers and no owners, and it holds up nothing handed down from the past as the guide.' },
    not: { outcome: 'class', why: 'Nothing in the text sorts anyone by wages or by owning a business. It speaks of one people, and the school is where that people’s story is passed on.' } }
]);
