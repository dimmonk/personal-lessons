// Psychology, Unit Three: fresh cases kept back for later days (second file: accusing someone of what you do yourself, and the ordinary exchange).

FC.cases('psychology', 'u3', [

  /* ---------- Projection ---------- */
  { id: 'ret-calls', use: 'return', tier: 'varied', setting: 'work', topic: 'lateness to client calls',
    text: "Hugo tells the boss that his colleague Nina 'is always late to client calls'. The call log shows Hugo late to eight of the last ten calls and Nina on time to every one. Nobody had raised Hugo's lateness with him.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Hugo tells the boss that his colleague Nina 'is always late to client calls'",
            T1: ["Hugo tells the boss that his colleague Nina 'is always late to client calls'", 'Hugo late to eight of the last ten calls and Nina on time to every one'] },
    reason: { D1: 'One person is saying something to another about a colleague, and it is about what has happened between them: {cue:D1}.',
              T1: 'Hugo accuses Nina: {cue:T1}. The log shows the accuser doing it and the person accused not doing it, and nobody had raised it with Hugo.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Nina late. It shows Hugo late, and Nina on time every time.' } },

  { id: 'ret-parcels', use: 'return', tier: 'varied', setting: 'money', topic: 'hidden purchases',
    text: "Pia tells her sister Una that she 'hides what she buys so nobody sees'. The closet in Pia's room holds a dozen unopened parcels she has kept from the rest of the family, and Una's receipts are all in a folder on the kitchen table. Nobody had asked Pia about her parcels.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Pia tells her sister Una that she 'hides what she buys so nobody sees'",
            T1: ["Pia tells her sister Una that she 'hides what she buys so nobody sees'", "Una's receipts are all in a folder on the kitchen table"] },
    reason: { D1: 'One person is saying something to another about what happens between them: {cue:D1}.',
              T1: 'Pia accuses Una: {cue:T1}. The case shows the accuser doing exactly that, and shows Una keeping everything in the open.' },
    not: { outcome: 'darvo', why: 'Nobody had asked Pia about her parcels, so she is not answering anything by denying, attacking and playing the one wronged. The accusation is where the case starts.' } },

  { id: 'ret-fair', use: 'return', tier: 'varied', setting: 'community', topic: 'taking credit for a stall design',
    text: "At the village fair committee, Raj tells the others that Lea 'always takes the credit for other people's work'. The thank-you list in the newsletter credits Raj with the stall design that Lea drew, and credits Lea for nothing she did not do herself. Nobody had asked Raj about the list.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { D1: "Raj tells the others that Lea 'always takes the credit for other people's work'",
            T1: ["Raj tells the others that Lea 'always takes the credit for other people's work'", 'credits Raj with the stall design that Lea drew, and credits Lea for nothing she did not do herself'] },
    reason: { D1: 'One person is saying something to others about another, and it is about what has happened between them: {cue:D1}.',
              T1: 'Raj accuses Lea: {cue:T1}. The newsletter shows the accuser taking credit, and Lea not doing so.' },
    not: { outcome: 'ordexchange', why: 'A fair complaint would have the case showing Lea taking credit. It shows Raj doing it.' } },

  /* ---------- An ordinary exchange ---------- */
  { id: 'ret-refund', use: 'return', tier: 'varied', setting: 'money', topic: 'a refund for a toaster',
    text: "Imran asks a store for a refund on a toaster that stopped working after a week. The assistant, Zoe, says the policy needs a receipt, and Imran shows the receipt on his phone. She gives him the refund.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'Imran asks a store for a refund on a toaster that stopped working after a week',
            T1: 'says the policy needs a receipt, and Imran shows the receipt on his phone. She gives him the refund.' },
    reason: { D1: 'One person is asking something of another about a matter between them: {cue:D1}.',
              T1: 'Imran makes a request and Zoe answers: {cue:T1} Nothing is denied, turned back on anyone, accused, or poured on and withdrawn.' },
    not: { outcome: 'darvo', why: 'Zoe does not deny anything, attack Imran, or play the one wronged. She asks for the receipt and gives the refund.' } },

  { id: 'ret-marks', use: 'return', tier: 'varied', setting: 'learning', topic: 'a disagreement about a grade',
    text: "Wei tells his professor that he thinks his second argument deserved a higher grade. She says she disagrees, explains which part she found unconvincing, and offers a second reader. Wei says, 'That's fair, please do.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'Wei tells his professor that he thinks his second argument deserved a higher grade',
            T1: "She says she disagrees, explains which part she found unconvincing, and offers a second reader. Wei says, 'That's fair, please do.'" },
    reason: { D1: 'One person is saying something to another about a matter between them: {cue:D1}.',
              T1: 'Wei disagrees, and the professor answers: {cue:T1} It is a disagreement said as it is. She does not deny what happened, and nobody turns the blame on anyone.' },
    not: { outcome: 'gaslight', why: 'The professor does not tell Wei again and again that something did not happen. She disagrees once, gives her reason, and offers a second reader.' } },

  { id: 'ret-tea', use: 'return', tier: 'varied', setting: 'community', topic: 'thanks and an invitation',
    text: "Kim helped Olive carry her shopping upstairs. Olive thanks her, says she is the nicest neighbor she has had, and invites her over for coffee on the weekend. Kim says she cannot this weekend, and Olive says, 'Another time, then.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { D1: 'Olive thanks her, says she is the nicest neighbor she has had, and invites her over for coffee on the weekend',
            T1: "Kim says she cannot this weekend, and Olive says, 'Another time, then.'" },
    reason: { D1: 'One person is saying something to another about what has happened between them: {cue:D1}.',
              T1: 'Olive is warm, and Kim says no: {cue:T1} The warmth fits what Kim did, and it stays warm when Kim declines, so nothing is pulled back.' },
    not: { outcome: 'lovebomb', why: 'Thanks and an invitation after a favor are not far more attention than the relationship would explain, and Olive does not pull back when Kim says no.' } }
]);
