// "Quick answers": the questions of the test subject. Each is a question read aloud (a spoken block) and answered from memory against the answers the
// list accepts; each is a topic of its own. Three read the learner's own answers.
(() => {
  const SAY_IT = 'Say your answer out loud, then type it.';
  const question = (id, words, accept, reason, extra = {}) => ({ id, strand: id, facets: {}, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: SAY_IT, accept, ...extra }], reason });
  const parts = (text, list) => ({ text, parts: list });
  FC.items('interview', [
    question('form', 'What is the form of government of the United States?', ['Republic', 'Constitution-based federal republic', 'Representative democracy'], 'The people choose representatives to make the laws.'),
    question('law', 'What is the supreme law of the land?', ['(U.S.) Constitution'], 'Every other law has to fit the Constitution.'),
    question('amend', 'How many amendments does the U.S. Constitution have?', ['Twenty-seven (27)'], 'Each amendment is a change added to the Constitution.'),
    question('branches', 'Name the three branches of government.', [parts('Legislative, executive, and judicial', [['Legislative', 'Legislative branch'], ['executive', 'executive branch'], ['judicial', 'judicial branch', 'judiciary']]),
      parts('Congress, president, and the courts', ['Congress', 'president', 'the courts'])], 'Congress makes the laws, the president carries them out, and the courts explain them.'),
    question('oath', 'Name two promises that new citizens make in the Oath of Allegiance.', ['Give up loyalty to other countries', 'Defend the (U.S.) Constitution', 'Obey the laws of the United States',
      'Serve in the military (if needed)', 'Serve (help, do important work for) the nation (if needed)', 'Be loyal to the United States'], 'The oath is the promise a new citizen says out loud.', { count: 2 }),
    question('declare', 'What founding document said the American colonies were free from Britain?', ['Declaration of Independence'], 'It was signed in 1776.'),
    question('senate', 'How many U.S. senators are there?', ['One hundred (100)'], 'Each state has two.'),
    question('term', 'How long is a term for a U.S. senator?', ['Six (6) years'], 'Senators serve longer terms than representatives.'),
    question('house', 'How many voting members are in the House of Representatives?', ['Four hundred thirty-five (435)'], 'The number of members a state has depends on its population.'),
    question('power', 'Name one power of the president.', ['Signs bills into law', 'Vetoes bills', 'Enforces laws', 'Commander in Chief (of the military)', 'Chief diplomat', 'Appoints federal judges'], 'The president carries out the laws.'),
    question('court', 'What is the highest court in the United States?', ['Supreme Court'], 'Its decisions are the last word on what a law means.'),
    question('vote', 'Who can vote in federal elections, run for federal office, and serve on a jury in the United States?', ['Citizens', 'Citizens of the United States', 'U.S. citizens'], 'These three belong to citizens.'),
    question('senator', 'Who is one of your state’s U.S. senators now?', { own: 'answers.q23' }, 'Each state has two senators. You entered yours.'),
    question('governor', 'Who is the governor of your state now?', { own: 'answers.q61' }, 'The governor leads the state government. You entered yours.'),
    question('capital', 'What is the capital of your state?', { own: 'answers.q62' }, 'The state government meets in the capital. You entered yours.'),
    // a news story whose answer rests on an interview question: the feedback prints that question and its accepted answers
    { id: 'news-veto', strand: 'news', facets: {}, blocks: [{ kind: 'prose', lines: [{ id: 'n1', text: 'The president refused to sign the bill, so it did not become law.' }] }],
      asks: [{ id: 'who', kind: 'choose', prompt: 'Who stopped the bill?', options: [{ id: 'president', text: 'The president', ok: true }, { id: 'court', text: 'A court', then: 'No court is in the story.' }] }],
      deciding: ['n1'], fact: 'power', reason: 'The story says the president refused to sign it.' },
    // held in reserve: a story with no interview question behind it
    { id: 'news-sign', strand: 'sign', facets: {}, blocks: [{ kind: 'prose', lines: [{ id: 's1', text: 'The president signed the bill, and it became law.' }] }],
      asks: [{ id: 'who', kind: 'choose', prompt: 'Who made the bill a law?', options: [{ id: 'president', text: 'The president', ok: true }, { id: 'court', text: 'A court', then: 'No court is in the story.' }] }],
      deciding: ['s1'], reason: 'The story says the president signed it.' }
  ]);
})();
