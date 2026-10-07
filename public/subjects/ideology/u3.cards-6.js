// Political Ideologies, Unit Three, part five: the key's two questions, each with the check that follows it.

FC.cards('ideology', 'u3', [

  { id: 'q-who', kind: 'question', step: 'N1',
    h: 'The first question: whom does the text speak for, and against whom?',
    link: 'You have seen this question under each new name, with one answer. Here it is with all four answers in one place.',
    decides: [
      'This question goes first because it separates the most. {o:nationalism}, {o:natpop}, {o:pop} and {o:nazi} each get a different answer, and {o:nazi} is settled by this question alone, whatever the second question says. It cannot split {o:fasc} from {o:nationalism} or {o:natpop}, because {o:fasc} can speak for the whole nation or for ordinary people against a few at the top. For those two pairs you need the second question.'
    ],
    how: [
      { do: 'Read the whole text, and look first for people ranked by birth: “the old blood” against “the later peoples”.', why: 'If it ranks peoples by blood with its own on top, the answer is {a:N1.blood} and you can stop.' },
      { do: 'Ask whether anyone inside the country is named as the other side: ministers, officials, bankers.', why: 'If nobody is, and the text speaks for everyone, the answer is {a:N1.whole}.' },
      { do: 'If a few at the top are named, check whether the text also says what the country should have: its borders, culture or industry.', why: 'If it does, the answer is {a:N1.elitenation}.' },
      { do: 'If it only blames them and says nothing more, stop there.', why: 'That is {a:N1.eliteonly}.' },
      { do: 'Take names like “the establishment” or “the people in the capital” as the few at the top.', why: 'They mean a few at the top whoever says them.' }
    ],
    whenBoth: 'Some texts seem to fit two answers. Each pair below was set side by side earlier in this unit, with the one question that separates it.' },

  { id: 'check-who', kind: 'check', after: 'N1',
    case: 'n-who-chk',
    ask: { type: 'step', step: 'N1' } },

  { id: 'q-elections', kind: 'question', step: 'N2',
    h: 'The second question: elections and people who disagree',
    link: 'The first question left some pairs unsorted: {o:nationalism} and {o:fasc} can both speak for the whole nation, and {o:natpop} and {o:fasc} can both set ordinary people against a few at the top. This question sorts them.',
    decides: [
      '{o:fasc} is the only name that wants them gone and ranks nobody by blood. {o:nazi} appears under both answers on purpose: a text that ranks peoples can end elections or keep them, and the name does not change, because the first question has already decided it.'
    ],
    how: [
      { do: 'Look for what the text wants done, not how it sounds.', why: 'Angry or insulting words about opponents do not count, only what the text asks for.' },
      { do: 'Look for words that leave things in place: “Vote for us”, “let the voters decide”, “any party may stand against us”.', why: 'These keep the vote and the critics, so the answer is {a:N2.keep}.' },
      { do: 'Look for words that end them: other parties closed, the vote canceled, papers shut, critics “dealt with”.', why: 'Any one of these gives {a:N2.aside}.' },
      { do: 'If the text says nothing about elections or critics, answer {a:N2.keep}.', why: 'Nothing is asked for, so nothing is taken away.' },
      { do: 'Do not take banned parties or a controlled press as proof of the name.', why: 'Almost every dictatorship does these whatever it believes, so they only answer this second question.' }
    ],
    whenBoth: 'Some texts seem to fit two answers. Each pair below was set side by side earlier in this unit, with the one question that separates it.' },

  { id: 'check-elections', kind: 'check', after: 'N2',
    case: 'n-elec-chk',
    ask: { type: 'step', step: 'N2' } }
]);
