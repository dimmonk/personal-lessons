// Basic Math, Unit Two: fresh problems for later days (part 4 of 4): three for each kind, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most
// often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u2', [
  {
    id: 'rt-irrat-3',
    use: 'return',
    tier: 'clean',
    setting: 'money',
    topic: 'a calculator value for pi',
    kind: 'problem',
    outcome: 'irrat',
    text: 'A calculator shows 3.1416 for pi. Is 3.1416 exactly equal to pi?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Is 3.1416 exactly equal to pi?'], W1: ['Is 3.1416 exactly equal to pi?'] },
    reason: {
      M1: 'The problem asks {cue:M1}, a question about whether one number can be written exactly. It is about the value of a number, with no amount followed through time and no hidden number for a calculation to fit, so the answer to the first question is {a:M1.whole}.',
      W1: 'The words {cue:W1} ask whether one number can be written exactly, which is {a:W1.exact}.'
    },
    not: {
      outcome: 'prime',
      why: 'The problem asks for the exact value of a number, and nothing is shared out in equal groups. {o:prime} would be the name if it asked whether a count of things could be split in rows or teams.'
    },
    steps: [
      {
        does: 'Say which number is asked about',
        working: 'pi, the distance round a circle divided by the distance straight across it'
      },
      { does: 'Write the number you are offered as a decimal', working: '3.1416 ends after four decimal places' },
      {
        does: 'Compare it with the digits of pi',
        working: 'pi = 3.14159265… It differs from 3.1416 at the fifth decimal place: 3.14160 against 3.14159'
      },
      {
        does: 'Say whether it can be written exactly',
        working: 'No fraction and no decimal that ends equals pi, so 3.1416 is only close'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'Not exact: 3.1416 is only close' },
        {
          id: 's1',
          text: 'Exact: 3.1416 is pi',
          slip: 'you take the value in the textbook as the exact value, though it differs from pi in its digits.'
        },
        {
          id: 's2',
          text: 'Exact: pi = 3.14159265',
          slip: 'you take the digits you can see as the whole of pi, though they go on without ending.'
        }
      ]
    },
    why: 'Pi has been proved to be a number that no fraction and no decimal that ends can equal. Any value written down for it, such as a fraction or a rounded decimal, is only close, and it differs from pi at some decimal place.'
  }
]);
