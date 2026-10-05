// Political Ideologies, Unit Three, part five: what every dictatorship does, the wrong idea about the last name, and the key's two
// questions, each with the check that follows it.

FC.cards('ideology', 'u3', [

  { id: 'exc-methods', kind: 'exception', ledger: 'fasc~nazi', looksLike: 'fasc', is: 'nazi',
    h: 'What every dictatorship does, and why it does not name a text',
    link: 'The last card showed two names that both push the vote aside. Here is a text that is full of the things dictatorships do, and the card asks what those things can and cannot tell you.',
    case: 'n-x-methods',
    setup: 'The decree bans every party but the Council\'s, controls what is printed, and sends officers to call on critics at night. That is how a text looks when it pushes the vote and critics aside, which is half of what {o:fasc} needs. Yet the key\'s answer for this case is {o:nazi}.',
    prompt: { kind: 'phrase', answer: 'The people of the old Merrow blood are higher than the settlers and will rule them' },
    because: [
      'Banning parties, controlling what is printed and frightening critics are what nearly every dictatorship does, whatever it believes. A dictatorship that says it rules for working people does them. So does one that rules for a faith, one that rules for a nation, and a ruler who speaks for no side at all. Because they are shared, they cannot tell you which name a text has.',
      'What they do answer is the key\'s second question. Here the answer is {a:N2.aside}. That narrows the names to the two that can push the vote aside, {o:fasc} and {o:nazi}, and it cannot choose between them.',
      'The first question chooses. This decree ranks peoples: "the people of the old Merrow blood are higher than the settlers and will rule them". That is the answer {a:N1.blood}, and it decides {o:nazi}.',
      'So banned parties, a controlled press and secret visits never name a text on their own. The text has to be asked first whom it speaks for. It might be for working people ({a:D1.class}), for one nation ({a:D1.nation}), or for no side at all ({a:D1.none}). Only when the text is for one nation does the second question matter.'
    ],
    take: 'A text that says only who holds power and how they keep it, and speaks for no people at all, never reaches these names. Its answer to the first question is {a:D1.none}, and the key stops there.' },

  { id: 'refute-nazisocialist', kind: 'refute', about: 'nazi',
    h: 'A wrong idea: a socialist name or an order to businesses makes a text socialist',
    link: 'The picture of {o:nazi} said that what a text says about the businesses does not give the name. That goes against an idea many people hold.',
    idea: '"The Nazis were socialists: the party had socialist in its name, and it told businesses what to do."',
    verdict: 'This is wrong.',
    right: [
      'A name is a word that someone chose, and what a text tells businesses to do is not what the key reads first. The key reads a text by whom it speaks for.',
      'A text that ranks peoples by blood has the answer {a:N1.blood}, and that leads to {o:nazi}. The question about who should own the farms, factories, shops and banks is asked only of texts that have the first answer {a:D1.class}. A text that ranks peoples by blood does not give that answer, so the key never puts the ownership question to it.',
      'So the word "socialist" in a name, or an order to businesses, changes nothing the key reads. Whether any real party was socialist is a question about what that party did, and the key is only for reading what a short text says.'
    ],
    testedBy: ['n-claim-nazieco'] },

  /* ---------- The key's two questions ---------- */
  { id: 'q-who', kind: 'question', step: 'N1',
    h: 'The first of the two questions: whom the text speaks for, and against whom',
    link: 'Since the anniversary speech you have seen this question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as the key shows them, and says why the key asks it first of the two.',
    decides: [
      'The five names all put one people first, so that cannot tell them apart. What separates them is whom that people is set against. It can be nobody inside the country. It can be a few at the top. Or it can be whole peoples ranked lower by blood. That is the question: whom the text speaks for, and against whom.',
      'It is asked first because it separates the most. It splits the names that leave the vote in place: {o:nationalism}, {o:natpop}, {o:pop} and {o:nazi} get four different answers. And it settles {o:nazi} on its own, whatever the second question says.',
      'It cannot separate {o:nationalism} from {o:fasc}, or {o:natpop} from {o:fasc}, because {o:fasc} shares an answer with each of them: it can speak for the whole nation, or for the country\'s ordinary people against a few at the top. For those two pairs the second question is needed.'
    ],
    how: [
      'Read the whole text, and then ask whether anyone inside the country is named as the other side. If nobody is, and the text speaks for everyone, the answer is {a:N1.whole}. If a few at the top are named and the text also says what the country\'s borders, culture or industry should be, the answer is {a:N1.elitenation}. If they are named and the text says nothing more, it is {a:N1.eliteonly}. If at any point the text sorts people by blood into peoples ranked higher and lower, with its own on top, it is {a:N1.blood}, and you can stop.',
      'Texts often name an enemy loosely. "The establishment", "those people in the capital", "the globalists": a name for a few at the top is a name for a few at the top, whoever uses it. A text names a people when it says who they are by birth and says that they are lower.',
      'When a text speaks of a few at the top and also of the whole nation, the key\'s answer is {a:N1.elitenation}, because setting ordinary people against a few at the top says more than speaking for everyone alike. And when a text ranks peoples by blood, the key\'s answer is {a:N1.blood}, whatever else it says.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-who', kind: 'check', after: 'N1',
    case: 'n-who-chk',
    ask: { type: 'step', step: 'N1' } },

  { id: 'q-elections', kind: 'question', step: 'N2',
    h: 'The second of the two questions: elections and those who disagree',
    link: 'The first question left some pairs unsorted. {o:nationalism} and {o:fasc} can both speak for the whole nation, and {o:natpop} and {o:fasc} can both set the country\'s ordinary people against a few at the top. The second question is what sorts them, and it is the one you first saw on the rally speech.',
    decides: [
      'Putting a people first is shared by all five names, so it cannot tell you which of them rules alone. What can is what the text would do about the vote and about its critics. A text either keeps them, or wants them pushed aside.',
      '{o:fasc} is the only name that pushes them aside and ranks nobody by blood. {o:nazi} appears under both answers on purpose. A text that ranks peoples can push elections aside, or keep them, or say nothing about them, and the name does not change, because the first question has already decided it. That is why the list below shows {o:nazi} twice.'
    ],
    how: [
      'Look for what the text wants done, and not for what it is like. A text that says "vote for us", "let the voters decide" or "any party may stand against us" leaves things in place. A text that says other parties will be closed, the vote cancelled, the papers shut or critics "dealt with" pushes them aside.',
      'Strong, angry or insulting words about opponents are not an answer. A text can call its opponents traitors and still ask the voters to remove them. What matters is whether it wants the vote, other parties and the right to object taken away.',
      'If a text says nothing at all about elections or about people who disagree, the key\'s answer is {a:N2.keep}. The key asks what the text wants done, and a text that does not ask for them to go has not asked for them to go. Short texts often say nothing about the vote, and this is the key\'s decision for them.',
      'Pushing the vote aside answers only this question. It is shared by many dictatorships, and it never tells you whether a text is for one nation, for working people or for no side at all. The first answer to the key\'s first question does that.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-elections', kind: 'check', after: 'N2',
    case: 'n-elec-chk',
    ask: { type: 'step', step: 'N2' } }
]);
