// Psychology, Unit Three: drill cases for the route stage, clean cases, part two (turning the blame around, accusing someone of what you do).

FC.cases('psychology', 'u3', [

  { id: 'r-dar1', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a bounced club check',
    text: "The bank statement shows that Karl wrote a $400 check to the tennis club that bounced. The club secretary, Una, asks him about it. Karl says, 'It didn't bounce. And you're the last person to ask, with the club's books in the state they're in. I've given this club ten years and I'm the one who gets treated like a thief.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { D1: 'The club secretary, Una, asks him about it',
            T1: "Karl says, 'It didn't bounce. And you're the last person to ask, with the club's books in the state they're in. I've given this club ten years and I'm the one who gets treated like a thief.'" },
    reason: { D1: 'Una raises something with Karl that happened between them: {cue:D1}.',
              T1: 'The statement shows Karl did it, and Una raises it. In answer he does all three: {cue:T1}.' },
    not: { outcome: 'projection', why: 'Karl is answering something Una raised with him. In {o:projection} nobody raises anything first: the accusation is where the story starts.' } },

  { id: 'r-proj1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a group chat and a share of the writing',
    text: "In the class group chat, Sven tells everyone that Mia 'never does her share of the group work'. The shared document's history shows that Sven has added nothing in three weeks and that Mia has written most of it. Nobody has asked Sven about his part.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Sven tells everyone that Mia 'never does her share of the group work'",
            T1: ["Sven tells everyone that Mia 'never does her share of the group work'", 'Sven has added nothing in three weeks and that Mia has written most of it'] },
    reason: { D1: 'Sven is saying something about Mia to the whole class: {cue:D1}.',
              T1: 'Sven accuses Mia: {cue:T1}. The history shows Sven doing exactly that, and Mia doing the opposite.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the story showing Mia doing it. It shows Sven doing it, and Mia doing the work.' } }
]);
