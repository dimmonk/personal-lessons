// Psychology, Unit Three: fresh cases kept back for later days (second file: accusing someone of what you do yourself, and the ordinary exchange).

FC.cases('psychology', 'u3', [

  { id: 'ret-calls', use: 'return', tier: 'varied', setting: 'work', topic: 'lateness to client calls',
    text: "Hugo tells the boss that his colleague Nina 'is always late to client calls'. The call log shows Hugo late to eight of the last ten calls and Nina on time to every one. Nobody had raised Hugo's lateness with him.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Hugo tells the boss that his colleague Nina 'is always late to client calls'",
            T1: ["Hugo tells the boss that his colleague Nina 'is always late to client calls'", 'Hugo late to eight of the last ten calls and Nina on time to every one'] },
    reason: { D1: 'One person is saying something to another about a colleague, and it is about what has happened between them: {cue:D1}.',
              T1: 'Hugo accuses Nina: {cue:T1}. The log shows the accuser doing it and the person accused not doing it, and nobody had raised it with Hugo.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Nina late. It shows Hugo late, and Nina on time every time.' } },

  { id: 'ret-refund', use: 'return', tier: 'varied', setting: 'money', topic: 'a refund for a toaster',
    text: "Imran asks a store for a refund on a toaster that stopped working after a week. The assistant, Zoe, says the policy needs a receipt, and Imran shows the receipt on his phone. She gives him the refund.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'Imran asks a store for a refund on a toaster that stopped working after a week',
            T1: 'says the policy needs a receipt, and Imran shows the receipt on his phone. She gives him the refund.' },
    reason: { D1: 'One person is asking something of another about a matter between them: {cue:D1}.',
              T1: 'Imran makes a request and Zoe answers: {cue:T1} Nothing is denied, turned back on anyone, accused, or poured on and withdrawn.' },
    not: { outcome: 'darvo', why: 'Zoe does not deny anything, attack Imran, or play the one wronged. She asks for the receipt and gives the refund.' } }
]);
