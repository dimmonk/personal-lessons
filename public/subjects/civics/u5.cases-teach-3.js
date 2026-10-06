// Civics, Unit Five: cases shown inside cards, part three: the last name (a judge asked about the treatment of a person
// accused of a crime), the whole case that points the wrong way, and the two cases that stand for a name from the
// Congress branch in the look-alike cards that put it beside a name of this one.

FC.cases('civics', 'u5', [

  /* ---------- The rights of the accused ---------- */
  { id: 't-search', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a search of a car trunk', name: 'The roadside search',
    text: 'Police stop Joy’s car because a rear light is broken. One officer opens the trunk and searches it with no warrant and without asking Joy, and finds a box of stolen tools. Joy is charged with theft. At her trial her lawyer asks the judge to decide whether the search was unreasonable, as the Fourth Amendment forbids.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'her lawyer asks the judge to decide',
            J1: ['searches it with no warrant and without asking Joy', 'whether the search was unreasonable, as the Fourth Amendment forbids'] } },

  { id: 't-lawyer', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a lawyer for someone who cannot pay', name: 'Luis and the lawyer',
    text: 'Luis arrived in the country last year and is not yet a citizen. He is charged with assault, and he cannot afford a lawyer. At his first hearing he tells the judge that he cannot pay for one and asks the judge to appoint one.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'he tells the judge', J1: ['he cannot afford a lawyer', 'asks the judge to appoint one'] },
    segments: [
      { text: 'Luis arrived in the country last year and is not yet a citizen', note: 'That is who he is. It does not show which step the judge is asked about.' },
      { text: 'He is charged with assault', note: 'That shows he is accused of a crime. It does not show which step the judge is asked about.' },
      { text: 'he cannot afford a lawyer', note: 'That is the need. The step is in what he asks the judge to do.' },
      { text: 'asks the judge to appoint one' }
    ] },

  { id: 't-check', use: 'check', tier: 'clean', setting: 'money', topic: 'a trial delayed three years', name: 'The long wait',
    text: 'Ravi is charged with fraud. He has waited in jail for three years and his trial has still not started, because the court keeps setting new dates. His lawyer has asked the judge to rule that three years is not the speedy trial the Constitution promises.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer has asked the judge to rule', J1: 'three years is not the speedy trial the Constitution promises' },
    reason: { J1: 'Ravi is accused of a crime, and his lawyer asks whether a step the Constitution promises was followed: {cue:J1}. Nobody says the law against fraud is wrong. The question is about how Ravi is being treated.' } },

  { id: 'ls-vince-arrest', use: 'teach', tier: 'clean', setting: 'community', topic: 'two days in a cell without a lawyer', name: 'Vince in the cell',
    text: 'Vince was arrested at a march on Third Street and is charged with blocking the road. The police kept him in a cell for two days and would not let him speak to a lawyer. His lawyer has asked a judge to decide whether the police followed the steps the Constitution promises to a person who is accused. Nobody says the law against blocking a road is wrong.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer has asked a judge to decide', J1: ['would not let him speak to a lawyer', 'followed the steps the Constitution promises to a person who is accused'] } },

  { id: 'ls-print-search', use: 'teach', tier: 'clean', setting: 'work', topic: 'a search of a print shop', name: 'The print shop search',
    text: 'A printer, Omar, is arrested on suspicion of stealing paper from a supplier. The police search his print shop with no warrant, and take his account books. His lawyer asks a judge to decide whether the search was unreasonable, as the Fourth Amendment forbids.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer asks a judge to decide', J1: 'whether the search was unreasonable, as the Fourth Amendment forbids' } },

  /* ---------- The whole case whose story points the wrong way ---------- */
  { id: 'w-megaphone', use: 'teach', tier: 'misleading', setting: 'community', topic: 'a protester and a megaphone', name: 'Greta’s megaphone',
    text: 'Greta is a protester. At a rally outside the town hall she spoke through a small hand-held megaphone, and a town rule that bans loudspeakers near the building earned her a $40 fine. Greta says the right to speak is the most important right in the country. She does not say the rule is wrong, and she has asked a judge to decide whether a hand-held megaphone is a loudspeaker under the rule.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'she has asked a judge to decide',
            J1: ['She does not say the rule is wrong', 'whether a hand-held megaphone is a loudspeaker under the rule'] } },

  /* ---------- Cases of a name from the Congress branch, shown only to be set beside a name of this branch ---------- */
  { id: 'ls-worship-vote', use: 'teach', tier: 'clean', setting: 'home', topic: 'a national vote on home prayer meetings', name: 'The vote on home prayer',
    text: 'The House and the Senate vote for a law that makes it a crime for more than ten people to hold a prayer meeting in a private home anywhere in the country. The Senate’s vote is 61 to 39.',
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate vote for a law', C1: 'makes it a crime for more than ten people to hold a prayer meeting in a private home' } },

  { id: 'ls-print-vote', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a national vote on printing pamphlets', name: 'The vote on pamphlets',
    text: 'The House and the Senate vote for a law that makes it a crime to print any pamphlet that criticizes the government. The House passes it by 240 votes to 190.',
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate vote for a law', C1: 'makes it a crime to print any pamphlet that criticizes the government' } }
]);
