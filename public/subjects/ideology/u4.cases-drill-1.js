// Political Ideologies, Unit Four: drill cases for the first two stages, and the reverse items. None of these appears in a card.
// Stage one gives the key's answers and asks for the name, so its cases carry marked words and a reason for this unit's question.
// Stage two asks that question alone. Every case carries `not`: the nearest wrong name and why it fails here.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage one: the answers are shown, the learner gives the name ---------- */
  { id: 'i4-n-bells', use: 'drill', tier: 'clean', setting: 'faith', topic: 'bell-ringers’ practice night',
    text: "From a bell-ringers' newsletter in Hollin: 'The ringers of St Wyn's have rung the changes every Thursday night since before anyone's grandparents were born, and the old ringing should guide how the church plans its services. Keep Thursday night. If the tower must be repaired, let it be done one bell at a time, with the ringers asked what they think.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'the old ringing should guide how the church plans its services', T1: ['Keep Thursday night', 'let it be done one bell at a time, with the ringers asked what they think'] },
    reason: { T1: 'The ringing is still going on, and the text asks for it to stay and for repairs to come slowly: {cue:T1}. Nothing that has gone is asked back.' },
    not: { outcome: 'react', why: 'Nothing is said to have been torn down, and nothing is asked to be put back. The ringing is still done every Thursday.' } },

  { id: 'i4-n-bench', use: 'drill', tier: 'clean', setting: 'town', topic: 'a bench of elders closed by a reform',
    text: "From a leaflet of the Tarn Elders' League: 'For eight hundred years the bench of elders sat in the market hall of Tarn and settled quarrels by the old custom. The County Reform closed the bench and called the old custom backward. That was a wrong, and the town is poorer for it. Open the bench again, seat the elders in the market hall, and let them settle quarrels by the old custom as they did.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['let them settle quarrels by the old custom as they did'], T1: ['That was a wrong, and the town is poorer for it', 'Open the bench again, seat the elders in the market hall'] },
    reason: { T1: 'The bench is gone, the text says its closing was a wrong, and it asks for it to be opened again: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text does love an old custom, but the custom is not being kept. It has been closed down, and the text asks for it to be put back.' } },

  { id: 'i4-n-lunch', use: 'drill', tier: 'clean', setting: 'housing', topic: 'the Sunday lunch on an estate',
    text: "From the residents' paper of the Alder Fields estate: 'The old people's Sunday lunch, where three generations sit at one table, has gone on for as long as the estate has stood. That custom should guide how the estate's new community room is used. Keep the Sunday lunch. If the room's hours must change, change them gradually and ask the old people first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That custom should guide how the estate\'s new community room is used', T1: ['Keep the Sunday lunch', 'change them gradually and ask the old people first'] },
    reason: { T1: 'The lunch is still held, and the text asks for it to stay and for any change in the room’s hours to be gradual: {cue:T1}.' },
    not: { outcome: 'react', why: 'The lunch has not been taken away, so nothing is asked back. The text asks for what is there to be kept.' } },

  { id: 'i4-n-charity', use: 'drill', tier: 'clean', setting: 'housing', topic: 'an almshouse charity and the church',
    text: "From a circular of the Dunmore Almshouse Friends: 'For four centuries the almshouse charity of Dunmore was held by the church, which chose who should live there and kept their rents low. The Charity Commission Act took it from the church. That was a wrong and a theft. The old church charity should guide how housing for the old is run here, so return the almshouses to the church and let it choose the tenants again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old church charity should guide how housing for the old is run here'], T1: ['That was a wrong and a theft', 'return the almshouses to the church and let it choose the tenants again'] },
    reason: { T1: 'The charity was taken from the church, the text calls that a wrong, and it asks for the almshouses to be returned: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text holds up an old way, but the old way is not being kept. It has been taken away, and the text asks for it to be given back.' } },

  /* ---------- Stage two: this unit's question alone, on a new case ---------- */
  { id: 'i4-p-choir', use: 'drill', tier: 'varied', setting: 'faith', topic: 'a chapel choir of nine voices',
    text: "From a chapel newsletter: 'The chapel choir has shrunk from forty voices to nine, and we are sorry for it. But the nine sing the old hymns as they were sung when our grandparents were young, and those hymns should guide our worship. We ask the chapel to look after the choir that is left, and to try new music only a little at a time.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'those hymns should guide our worship', T1: ['We ask the chapel to look after the choir that is left, and to try new music only a little at a time'] },
    reason: { T1: 'The text is sorry that the choir has shrunk, but what it asks for is {cue:T1}. It asks that what is left be kept, and that change be slow. It does not ask for the forty voices back.' },
    not: { outcome: 'react', why: 'The text is sad about a loss, which can look like the other name. But sadness is not a request. It does not call the loss a wrong, and it asks for nothing to be put back.' } },

  { id: 'i4-p-seats', use: 'drill', tier: 'clean', setting: 'town', topic: 'the old seats of an upper hall',
    text: "From a speech by the Varne Council of Rank: 'In the old days the seats of the Upper Hall were held by the heads of the oldest houses, each in his place by birth. The Constitution Act gave the seats to the vote and left the old houses outside the door. That was a wrong against the order of this country. That order should guide us, so return the seats of the Upper Hall to the houses that held them.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['That order should guide us'], T1: ['That was a wrong against the order of this country', 'return the seats of the Upper Hall to the houses that held them'] },
    reason: { T1: 'The old seats are gone, the text calls their loss a wrong, and it asks for them to be returned: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The old order is not still in place to be kept. The text says it was taken, and asks for it to be put back.' } },

  { id: 'i4-p-allot', use: 'drill', tier: 'clean', setting: 'housing', topic: 'allotment plots passed down',
    text: "From the Pell End allotment society: 'Our plots have passed from neighbour to neighbour for ninety years, and the old custom of sharing the first beans of the year should guide how the society is run. Keep the plots with those who have worked them. If the waiting list must change, change it slowly and with the plot-holders asked.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'the old custom of sharing the first beans of the year should guide how the society is run', T1: ['Keep the plots with those who have worked them', 'change it slowly and with the plot-holders asked'] },
    reason: { T1: 'The plots are still held and the custom is still kept, and the text asks for them to stay and for change to be slow: {cue:T1}.' },
    not: { outcome: 'react', why: 'Nothing has been taken away. The text asks for what is there to be kept.' } },

  { id: 'i4-p-farms', use: 'drill', tier: 'varied', setting: 'money', topic: 'abbey farms sold off by an act',
    text: "From a pamphlet by the Abbey Lands League: 'For six hundred years the abbey's farms fed the poor of the valley, and the abbot answered to the old law of alms. The Land Sale Act took the farms from the abbey and sold them off. That was a robbery, and we do not call it anything else. The old law of alms should guide how this valley is fed, so give the farms back to the abbey and let the abbot order them as before.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old law of alms should guide how this valley is fed'], T1: ['That was a robbery, and we do not call it anything else', 'give the farms back to the abbey and let the abbot order them as before'] },
    reason: { T1: 'The farms were taken from the abbey, the text calls that a robbery, and it asks for them to be given back: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The old law of alms is not being kept. The text says it was broken by the sale, and asks for the farms to be returned.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect. Every choice is what one name sounds like ---------- */
  { id: 'i4-rev-conserv', use: 'drill', kind: 'reverse', outcome: 'conserv', expect: 'hear',
    options: [
      { text: '"Keep the school as it is, and let anything that must change change slowly."', voice: 'conserv' },
      { text: '"It should never have been taken from the church. Give it back."', voice: 'react' },
      { text: '"We are one people, and this school shows it."', voice: 'nationalism' },
      { text: '"The school stays with its owners, but they must pay a fair wage and a tax for the teachers’ pensions."', voice: 'socdem' }
    ],
    why: 'It asks for something that is still there to be kept ("keep the school as it is"), and for any change to be slow.' },

  { id: 'i4-rev-react', use: 'drill', kind: 'reverse', outcome: 'react', expect: 'find',
    options: [
      { text: 'It says the old courts were closed by a law, calls that a wrong, and asks for them to sit again.', voice: 'react' },
      { text: 'It says the old courts still sit, and asks that they be left as they are.', voice: 'conserv' },
      { text: 'It says that the whole country is one people and that parties and votes should end.', voice: 'fasc' },
      { text: 'It says the owners may keep their businesses, and asks for a floor under pay and a tax to pay for pensions.', voice: 'socdem' }
    ],
    why: 'That detail is an order that has gone, said to have been wrongly torn down, and a request for it to be put back.' }
]);
