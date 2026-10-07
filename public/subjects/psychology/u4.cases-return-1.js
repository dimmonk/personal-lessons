// Psychology, Unit Four: fresh cases kept back for later days (first file: three names, one case each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked words and a reason for both
// questions. One case for each name (E9).

FC.cases('psychology', 'u4', [

  { id: 'pa-ret-prof', use: 'return', tier: 'varied', setting: 'learning', topic: 'a professor and a graduate student’s paper',
    text: "Professor Vale is sixty and has headed his department for twenty years. He tells every graduate student that he has forgotten more than they will ever know. When a student's paper was accepted by a better journal than his own, he told the faculty it was 'a lucky draw from an easy pile' and took her out of his seminar. Eleven students have left his group, and two former colleagues will not share a conference stage with him.",
    outcome: 'narcgrand', route: { D1: ['pattern'], P1: ['above'] },
    cues: { D1: ['has headed his department for twenty years', 'two former colleagues will not share a conference stage with him'], P1: ['he has forgotten more than they will ever know', 'a lucky draw from an easy pile', 'Eleven students have left his group'] },
    reason: { D1: 'This follows one person through twenty years, a department and former colleagues: {cue:D1}.',
              P1: 'The professor acts as if his students owe him their minds, and when one did better than he did he answered with scorn: {cue:P1}. It has cost him eleven students.' },
    not: { outcome: 'ordpersonality', why: 'A learned, confident professor can be {o:ordpersonality}. But this one turns scornful when a student does well, and eleven students have gone.' } },

  { id: 'pa-ret-wedding', use: 'return', tier: 'varied', setting: 'home', topic: 'an uncle at the family weddings',
    text: "Alberto is fifty-nine. At every family wedding for thirty years he has said that nobody remembers what he did for the family when money was tight. When his niece thanked her father in a speech and not him, Alberto left the reception and has not spoken to either of them since. He did the same when his cousin was thanked at a funeral. His wife says she has stopped going to family events.",
    outcome: 'narcvuln', route: { D1: ['pattern'], P1: ['overlooked'] },
    cues: { D1: ['At every family wedding for thirty years', 'He did the same when his cousin was thanked at a funeral'], P1: ['nobody remembers what he did for the family when money was tight', 'left the reception and has not spoken to either of them since', 'she has stopped going to family events'] },
    reason: { D1: 'This covers thirty years and many family occasions: {cue:D1}.',
              P1: 'Alberto says he is overlooked and owed more, and when someone else was thanked he left and stayed away: {cue:P1}.' },
    not: { outcome: 'narcgrand', why: 'Alberto does not run his niece down or turn scornful. He leaves and says nothing.' } },

  { id: 'pa-ret-supervisor', use: 'return', tier: 'varied', setting: 'learning', topic: 'a graduate student and his advisors',
    text: "Ravi is twenty-six and a graduate student. With each advisor, since his first degree, he has told her that she is the only person who understands him, and when an advisor mentions going away for a semester he panics and writes to her at night. When one said she would be away for a semester, he wrote that she was 'a fraud who had used him', and at six the next morning he begged her to forgive him. Three advisors in a row have asked the department to reassign him.",
    outcome: 'borderline', route: { D1: ['pattern'], P1: ['clings'] },
    cues: { D1: ['With each advisor, since his first degree'], P1: ['she is the only person who understands him', 'a fraud who had used him', 'Three advisors in a row have asked the department to reassign him'] },
    reason: { D1: 'This covers years and every advisor he has had: {cue:D1}.',
              P1: 'When an advisor seemed about to go, Ravi held on hard, attacked her, and begged her back: {cue:P1}. It has cost him three advisors.' },
    not: { outcome: 'narcvuln', why: 'Ravi does not pull away and keep count. He goes after the advisor who seems to be leaving.' } },

]);
