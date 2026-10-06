// Political Ideologies, Unit Three, part five: the key's two questions, each with the check that follows it.

FC.cards('ideology', 'u3', [

  { id: 'q-who', kind: 'question', step: 'N1',
    h: 'The first of the two questions: whom the text speaks for, and against whom',
    link: 'You have seen this question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place.',
    decides: [
      'The five names all put one people first, so that cannot tell them apart. What separates them is whom that people is set against. It can be nobody inside the country. It can be a few at the top. Or it can be whole peoples ranked lower by blood.',
      'It is asked first because it separates the most. {o:nationalism}, {o:natpop}, {o:pop} and {o:nazi} get four different answers, and {o:nazi} is settled by it alone, whatever the second question says. It cannot separate {o:fasc} from {o:nationalism} or from {o:natpop}, because {o:fasc} can speak for the whole nation, or for the country\'s ordinary people against a few at the top. For those two pairs the second question is needed.'
    ],
    how: [
      'Read the whole text, and ask whether anyone inside the country is named as the other side. If nobody is, and the text speaks for everyone, the answer is {a:N1.whole}. If a few at the top are named and the text also says what the country\'s borders, culture or industry should be, it is {a:N1.elitenation}. If they are named and the text says nothing more, it is {a:N1.eliteonly}. If at any point the text sorts people by blood into peoples ranked higher and lower, with its own on top, it is {a:N1.blood}, and you can stop.',
      'A name for a few at the top ("the establishment", "the people in the capital") is a name for a few at the top, whoever uses it. A text names a people when it says who they are by birth and says that they are lower.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-who', kind: 'check', after: 'N1',
    case: 'n-who-chk',
    ask: { type: 'step', step: 'N1' } },

  { id: 'q-elections', kind: 'question', step: 'N2',
    h: 'The second of the two questions: elections and those who disagree',
    link: 'The first question left some pairs unsorted: {o:nationalism} and {o:fasc} can both speak for the whole nation, and {o:natpop} and {o:fasc} can both set the country\'s ordinary people against a few at the top. The second question sorts them.',
    decides: [
      'All five names put a people first, so that cannot tell you which of them rules alone. What can is what the text would do about the vote and about its critics. A text either keeps them, or wants them pushed aside.',
      '{o:fasc} is the only name that pushes them aside and ranks nobody by blood. {o:nazi} appears under both answers on purpose: a text that ranks peoples can push elections aside, or keep them, and the name does not change, because the first question has already decided it.'
    ],
    how: [
      'Look for what the text wants done, and not for how it sounds. "Vote for us", "let the voters decide" or "any party may stand against us" leaves things in place. Other parties closed, the vote canceled, the papers shut or critics "dealt with" pushes them aside. Angry or insulting words about opponents are not an answer: a text can call its opponents traitors and still ask the voters to remove them.',
      'If a text says nothing at all about elections or about people who disagree, the answer is {a:N2.keep}. A text that does not ask for them to go has not asked for them to go.',
      'Banned parties, a controlled press and secret visits are what nearly every dictatorship does, whatever it believes. They answer only this question, and they never tell you whether a text is for one nation, for working people or for no side at all.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-elections', kind: 'check', after: 'N2',
    case: 'n-elec-chk',
    ask: { type: 'step', step: 'N2' } }
]);
