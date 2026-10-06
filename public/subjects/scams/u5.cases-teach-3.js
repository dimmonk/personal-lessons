// Scams, Unit Five: the case for the whole worked example.

FC.cases('scams', 'u5', [

  { id: 'u5-w-room', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a room in an apartment and three things before a showing', name: 'The room in the apartment',
    text: "Ben has used an apartment-share website for years. He answers an ad for a room on it, and the person who placed the ad writes back: 'The room is yours if you want it. To hold it until the showing, send me a photo of your passport, a photo of you holding it and your Social Security number.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'send me a photo of your passport, a photo of you holding it and your Social Security number',
            F1: 'a photo of your passport, a photo of you holding it and your Social Security number',
            F2: 'To hold it until the showing, send me a photo of your passport, a photo of you holding it and your Social Security number' } }
]);
