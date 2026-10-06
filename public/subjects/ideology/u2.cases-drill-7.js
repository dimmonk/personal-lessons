// Political Ideologies, Unit Two: drill cases, second stage (route), misleading cases, second half. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-r-ml2', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a calm memo from a committee not to be voted out',
    text: "From a quiet, reasoned memo of the Linden Works committee: 'We think the owners and the workers of the Linden Works have different interests, and we stand with the workers. We would rather not use force, but we say plainly that when the works pass to the workers, our committee will remain in charge of the town and will not be put to the vote. The works will belong to the workers who run them.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['workers'], C2: ['seize'] }, echo: 'c-dm-ferry',
    cues: { D1: 'the owners and the workers of the Linden Works have different interests, and we stand with the workers', C1: 'The works will belong to the workers who run them', C2: 'our committee will remain in charge of the town and will not be put to the vote' },
    reason: { D1: 'The text sets the owners against the workers, and stands with the workers: {cue:D1}.',
              C1: 'The works are to belong to the workers who run them: {cue:C1}.',
              C2: 'The committee will keep power, with no vote: {cue:C2}. The calm tone and the wish to avoid force do not change that.' },
    not: { outcome: 'demsoc', why: 'The memo is calm and gives the works to the workers, which {o:demsoc} also asks for. But the committee will not be put to the vote, and {o:demsoc} leaves power with the voters.' } },

  { id: 'c-r-mx2', use: 'drill', tier: 'misleading', setting: 'schooling', topic: 'a pamphlet dismissing a minimum wage and setting out the gap',
    text: "From a pamphlet at the Tenby Mill: 'People say a minimum wage and a tax would fix the mill. We say look first at how it works. A spinner is paid $48 for a day and makes yarn worth $82 once costs are covered, and the $34 goes to the owners. Every owner has to keep a gap like it, because that is how the arrangement works, and no law on pay changes that. We write for the spinners.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] }, echo: 'c-sd-warehouse',
    cues: { D1: ['the $34 goes to the owners', 'We write for the spinners'], C1: 'Every owner has to keep a gap like it, because that is how the arrangement works, and no law on pay changes that', C2: 'We write for the spinners' },
    reason: { D1: 'The text sets the spinners against the owners who keep the gap, and is written for the spinners: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works: {cue:C1}. The minimum wage and the tax are mentioned only as what other people say, and the text does not ask for them.',
              C2: 'The text says nothing about power or the government. It says who it is written for: {cue:C2}.' },
    not: { outcome: 'socdem', why: 'The words minimum wage and tax are in the text, but as what other people say. The text itself asks for neither, and explains instead.' } }
]);
