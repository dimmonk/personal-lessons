// Psychology, Unit One: the case the worked card shows.
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.

FC.cases('psychology', 'u1', [

  { id: 'g-rehearsal', use: 'teach', tier: 'misleading', setting: 'home', topic: 'missed family occasions', name: 'The wedding rehearsal',
    also: ['reasoning'],
    text: "Petra missed her sister's wedding rehearsal. 'The traffic was impossible,' she said, 'and nobody told me the time had changed.' Her sister was not surprised. In the twenty years since they left home, Petra has missed birthdays, two graduations and her own farewell parties at three different jobs, and each time there has been a reason.",
    route: { D1: ['pattern'] },
    cues: { D1: ['In the twenty years since they left home', 'birthdays, two graduations and her own farewell parties at three different jobs'] } }
]);
