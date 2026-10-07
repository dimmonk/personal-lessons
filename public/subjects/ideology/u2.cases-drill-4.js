// Political Ideologies, Unit Two: drill cases, second stage (route), clean cases. The whole route is asked: the first question, the two
// questions of this unit, and then the name. Every case therefore carries marked words and a reason for all three. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-r-sd1', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'college cooks and meals for students',
    text: "From a leaflet by the Ridgeway college kitchen staff: 'The company that owns the college kitchens pays its cooks the least the law allows, and keeps the rest, and we stand with the cooks. We are not asking to own the kitchens. We are asking for a higher legal minimum, and a tax on the company's profits to pay for meals for students who cannot afford them.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The company that owns the college kitchens pays its cooks the least the law allows, and keeps the rest, and we stand with the cooks',
            C1: "We are not asking to own the kitchens. We are asking for a higher legal minimum, and a tax on the company's profits to pay for meals for students who cannot afford them",
            C2: 'We are asking for a higher legal minimum' },
    reason: { D1: 'The text sets the cooks against the company that owns the kitchens, and stands with the cooks: {cue:D1}.',
              C1: 'The company keeps the kitchens, and a legal minimum and a tax are asked for: {cue:C1}.',
              C2: 'The text asks for a higher legal minimum: {cue:C2}. That is a plan for pay, and it says nothing about power or about getting rid of the government.' },
    not: { outcome: 'classonly', why: 'The text goes past taking the cooks’ side to a plan: a minimum and a tax. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-r-co1', use: 'drill', tier: 'clean', setting: 'housing', topic: 'apartment cleaners and a sales office',
    text: "A post by the Quayside cleaners: 'The firm that owns the Quayside apartments pays us by the apartment and sells the apartments for a fortune. The people who clean and the people who own are not on the same side, and we are on ours. Join us outside the sales office on Friday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'The people who clean and the people who own are not on the same side, and we are on ours', C1: 'Join us outside the sales office on Friday', C2: 'outside the sales office on Friday' },
    reason: { D1: 'The text sets the people who clean against the people who own, and takes the cleaners’ side: {cue:D1}.',
              C1: 'Where a plan for the apartments would be, the text has an invitation: {cue:C1}. It says nothing about who should own the apartments, about taxes, or about how the owners gain.',
              C2: 'The text asks the reader to come to a place: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'marx', why: 'The text says what the firm does, but it does not explain how any owner gains from the work. A text that did would be {o:marx}.' } },

  { id: 'c-r-mx1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a reading circle of railway fitters',
    text: "From notes for a reading circle of railway fitters: 'A fitter is paid $80 a day, and mends a locomotive whose use brings the railway $140 once its costs are covered. The $60 goes to the owners. This is not the fault of any one owner. Any owner has to keep a gap like it, and that is how the arrangement works. The circle meets for the fitters.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ['The $60 goes to the owners', 'The circle meets for the fitters'], C1: 'Any owner has to keep a gap like it, and that is how the arrangement works', C2: 'The circle meets for the fitters' },
    reason: { D1: 'The text sets the fitters against the owners who take the gap, and is written for the fitters: {cue:D1}.',
              C1: 'The text explains how any owner gains: {cue:C1}. It asks for nothing to be done with the railway.',
              C2: 'The text says nothing about power or the government. It says who the circle is for: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text does more than side with the fitters: it says why any owner gains. A text that only complained would be {o:classonly}.' } }
]);
